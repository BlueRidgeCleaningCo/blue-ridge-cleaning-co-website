import { readdir, readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('./', import.meta.url));
const origin = 'https://brexteriorcleaning.com';
const files = [];
async function walk(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    if (entry.name.startsWith('.')) continue;
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) await walk(file);
    else files.push(file);
  }
}
await walk(root);
const errors = [], warnings = [], pages = [], titles = new Map(), descriptions = new Map();
const sitemap = await readFile(path.join(root, 'sitemap.xml'), 'utf8');
const sitemapUrls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => match[1]);
if (new Set(sitemapUrls).size !== sitemapUrls.length) errors.push('Duplicate sitemap URLs');
let references = 0, schemas = 0;
for (const file of files.filter(file => file.endsWith('.html'))) {
  const html = await readFile(file, 'utf8');
  const relative = path.relative(root, file).replaceAll('\\', '/');
  const indexable = !/<meta[^>]+name="robots"[^>]+content="[^"]*noindex/.test(html);
  const title = html.match(/<title>(.*?)<\/title>/s)?.[1];
  const description = html.match(/<meta name="description" content="([^"]*)"/)?.[1];
  const canonical = html.match(/<link rel="canonical" href="([^"]*)"/)?.[1];
  if (!title) errors.push(`${relative}: missing title`);
  if ((html.match(/<h1\b/g) || []).length !== 1) errors.push(`${relative}: must have one H1`);
  if (indexable) {
    const expected = `${origin}/${relative.replace(/index\.html$/, '')}`;
    if (canonical !== expected) errors.push(`${relative}: unexpected canonical ${canonical}`);
    if (!sitemapUrls.includes(expected)) errors.push(`${relative}: missing from sitemap`);
    if (!description) errors.push(`${relative}: missing description`);
    for (const [map, value, type] of [[titles, title, 'title'], [descriptions, description, 'description']]) {
      if (map.has(value)) errors.push(`${relative}: duplicate ${type} with ${map.get(value)}`);
      map.set(value, relative);
    }
    if (!/<script type="application\/ld\+json">/.test(html)) errors.push(`${relative}: missing structured data`);
    pages.push({ page: relative, title, titleCharacters: title?.replaceAll('&amp;', '&').length, canonical });
  }
  for (const match of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try { JSON.parse(match[1]); schemas++; } catch { errors.push(`${relative}: invalid structured data`); }
  }
  for (const match of html.matchAll(/<(?:a|link|script|img)\b[^>]*(?:href|src)="([^"]+)"/g)) {
    const url = match[1].replaceAll('&amp;', '&');
    if (/^(?:https?:|mailto:|tel:|data:|#)/.test(url)) continue;
    const local = url.split(/[?#]/)[0];
    const target = path.resolve(path.dirname(file), local);
    try { const info = await stat(target); if (info.isDirectory()) await stat(path.join(target, 'index.html')); references++; }
    catch { errors.push(`${relative}: missing local target ${url}`); }
  }
  for (const image of html.matchAll(/<img\b[^>]*>/g)) {
    if (!/\balt="/.test(image[0])) errors.push(`${relative}: image without alt attribute`);
    if (!/\bwidth="/.test(image[0]) || !/\bheight="/.test(image[0])) warnings.push(`${relative}: image lacks dimensions`);
  }
}
if (sitemapUrls.length !== pages.length) errors.push(`Sitemap has ${sitemapUrls.length} URLs for ${pages.length} indexable pages`);
for (const file of files.filter(file => file.endsWith('.css'))) {
  const css = await readFile(file, 'utf8');
  for (const match of css.matchAll(/url\(["']?([^\s"')]+)["']?\)/g)) {
    if (/^(https?:|data:|#)/.test(match[1])) continue;
    try { await stat(path.resolve(path.dirname(file), match[1].split(/[?#]/)[0])); } catch { errors.push(`${path.basename(file)}: missing ${match[1]}`); }
  }
}
console.log(JSON.stringify({ indexablePages: pages.length, validJsonLdBlocks: schemas, localReferencesChecked: references, sitemapUrls: sitemapUrls.length, errors, warnings, pages }, null, 2));
if (errors.length) process.exitCode = 1;
