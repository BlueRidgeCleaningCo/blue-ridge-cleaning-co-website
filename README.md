# Blue Ridge Soft & Power washing LLC website

Static website hosted by GitHub Pages from the root of the main branch at https://brexteriorcleaning.com/.

## Updating the site

Edit index.html for the homepage. Edit generate-seo-pages.mjs for service and location content, then run node generate-seo-pages.mjs and commit the generated pages. No build step is required for deployment.

The quote links open the existing Microsoft Forms quote form. Contact details, the Google review link and the website domain are maintained independently from the business display name.

## Branding

The business name is Blue Ridge Soft & Power washing LLC. The header and footer use the supplied white-on-blue full logo in blue-ridge-soft-power-washing-logo.svg; favicon.svg uses the supplied circular BR mark. Both SVG containers embed the exact original JPEG artwork, without redrawing it. brand-logo.css controls logo sizing. The navy and turquoise colors are defined in styles.css. Older raster logo files are retained as historical assets and are not used by current pages.

## Search content

The homepage, eight service pages and thirteen West Virginia location pages contain service-specific titles, descriptions, canonical URLs and structured data. The existing page URLs are preserved. Key service terms include soft washing, power washing, pressure washing, house washing, roof cleaning, concrete cleaning, driveway cleaning and exterior window cleaning.

## SEO checks and publishing

Run `node generate-seo-pages.mjs` to regenerate service/location pages, the sitemap and the shared CSS bundle. Run `node seo-check.mjs` before publishing. The checker validates local links and assets, unique titles/descriptions, headings, structured data and sitemap coverage. It does not predict Google rankings.

Keep the generator’s editorial sitemap modification date aligned with actual significant content updates, rather than changing dates on every build. Original photographs remain available for social metadata; smaller WebP versions are embedded in SVG containers for on-page delivery.
