import {readFile,writeFile,mkdir} from 'node:fs/promises';
const root=new URL('./',import.meta.url);
const home=await readFile(new URL('index.html',root),'utf8');
const cards=JSON.parse(await readFile(new URL('job-gallery.json',root),'utf8'));
const esc=s=>s.replaceAll('&','&amp;').replaceAll('"','&quot;');
const prefix=s=>s.replace(/(href|src)="(?!https?:|tel:|mailto:|data:)([^"]*)"/g,'$1="../$2"');
const header=prefix(home.match(/<header[\s\S]*?<\/header>/)[0]);
const footer=prefix(home.match(/<footer[\s\S]*?<\/footer>/)[0]);
const services=[
 ['pressure-washing','Pressure Washing','Pressure washing for concrete, walkways, patios and other durable exterior surfaces.'],
 ['soft-washing','Soft Washing','Low-pressure cleaning for siding and sensitive exterior materials.'],
 ['window-cleaning','Exterior Window Cleaning','One-time window washing and quarterly, twice-yearly or annual cleaning plans.'],
 ['house-washing','House Washing','Exterior siding, trim and accessible soffits, with a method chosen for the material.'],
 ['concrete-cleaning','Driveway & Concrete Cleaning','Cleaning for driveways, sidewalks, concrete pads and patios.'],
 ['roof-cleaning','Roof Cleaning','Roof washing planned around the roofing material, condition and safe access.'],
 ['deck-cleaning','Deck Cleaning','Wood and composite deck cleaning with a surface-specific approach.'],
 ['commercial-exterior-cleaning','Commercial Exterior Cleaning','Exterior cleaning for business properties, building surfaces and concrete areas.']
];
const serviceCards=services.map(([slug,name,description])=>`<a class="link-card" href="../services/${slug}/"><strong>${esc(name)}</strong><span>${description}</span><span>View service →</span></a>`).join('');
const photoServices=['house-washing','pressure-washing','soft-washing','concrete-cleaning','concrete-cleaning','pressure-washing','soft-washing','pressure-washing','roof-cleaning'];
const gallery=cards.map((card,i)=>prefix(card).replace('</article>',`<p><a href="../services/${photoServices[i]}/">Explore this cleaning service →</a></p></article>`)).join('\n');
function page(slug,title,description,h1,intro,body,schema){return `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(title)}</title><meta name="description" content="${esc(description)}"><meta name="robots" content="index, follow, max-image-preview:large"><link rel="canonical" href="https://brexteriorcleaning.com/${slug}/">
<link rel="icon" href="../favicon.svg" type="image/svg+xml"><meta name="theme-color" content="#082f49"><meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(description)}"><meta property="og:type" content="website"><meta property="og:url" content="https://brexteriorcleaning.com/${slug}/"><meta property="og:image" content="https://brexteriorcleaning.com/house-soft-wash-before-after.jpg">
<link rel="stylesheet" href="../site.css?v=20260927"><link rel="stylesheet" href="../gallery-pages.css?v=20260927"><script type="application/ld+json">${JSON.stringify(schema)}</script></head>
<body><a class="skip" href="#main">Skip to content</a>${header}<main id="main"><section class="collection-hero"><div class="container"><div class="breadcrumbs"><a href="../">Home</a><span>/</span><span>${slug==='services'?'Services':'Before &amp; After'}</span></div><p class="overline">Blue Ridge · Teays Valley &amp; nearby West Virginia communities</p><h1>${h1}</h1><p>${intro}</p></div></section>${body}<section class="section collection-quote"><div class="container"><h2>Ready for a cleaner property?</h2><p>Send your address, the surfaces you want cleaned and any helpful photos. We will confirm the scope and provide a free quote.</p><a class="button" href="../#quote">Request a free quote →</a><p><a href="tel:+13045492098">Call (304) 549-2098</a></p></div></section></main>${footer}<script src="../script.js"></script></body></html>`;}
for(const [slug,html] of [
 ['before-and-after',page('before-and-after','Before & After Cleaning Photos | Blue Ridge WV','View before and after photos of house soft washing, concrete pressure washing, fence cleaning and roof washing by Blue Ridge in West Virginia.','Before &amp; after.<br>See the difference.','Real completed cleaning projects, from house siding and walkways to patios, fences and roofing. Browse the full comparisons and explore the service behind each result.',`<section class="section collection-gallery"><div class="container"><h2>Exterior cleaning results</h2><p>Each photo shows a completed project. Results depend on the surface, its condition and the type of buildup.</p><div class="gallery">${gallery}</div></div></section>`,{'@context':'https://schema.org','@type':'CollectionPage',name:'Before and After Exterior Cleaning Photos',url:'https://brexteriorcleaning.com/before-and-after/',about:{'@id':'https://brexteriorcleaning.com/#business'}})],
 ['services',page('services','Pressure, Soft Washing & Window Services | Blue Ridge WV','Explore pressure washing, soft washing, exterior window cleaning, house washing, roof cleaning and deck cleaning in Teays Valley and nearby WV communities.','The right clean.<br>For every surface.','Choose a service to see what is included, how we plan the work and how to request a quote. Serving Teays Valley, Hurricane, Winfield, Charleston and nearby West Virginia communities.',`<section class="section"><div class="container"><h2>Explore our cleaning services</h2><div class="link-grid">${serviceCards}</div><p class="collection-link"><a href="../before-and-after/">See our before &amp; after photo gallery →</a></p></div></section>`,{'@context':'https://schema.org','@type':'CollectionPage',name:'Exterior Cleaning Services',url:'https://brexteriorcleaning.com/services/',mainEntity:{'@type':'ItemList',itemListElement:services.map(([slug,name],i)=>({'@type':'ListItem',position:i+1,name,url:'https://brexteriorcleaning.com/services/'+slug+'/'}))}})]
]){await mkdir(new URL(slug+'/',root),{recursive:true});await writeFile(new URL(slug+'/index.html',root),html);}
