import { mkdir, writeFile } from "node:fs/promises";

const root = new URL("./", import.meta.url);
const domain = "https://brexteriorcleaning.com";
const quoteUrl = "https://forms.cloud.microsoft/r/fVtAtEP2u7";
const phoneDisplay = "(304) 549-2098";
const phoneHref = "+13045492098";

const services = [
  {
    slug: "pressure-washing",
    name: "Pressure Washing",
    title: "Pressure Washing in Teays Valley WV | Blue Ridge Exterior Cleaning LLC",
    description: "Professional pressure washing for concrete, patios, walkways and durable exterior surfaces in Teays Valley, Hurricane, Winfield and Charleston, WV.",
    kicker: "Pressure washing in Teays Valley and surrounding areas",
    h1: "Pressure washing <em>for a cleaner property.</em>",
    image: "concrete-cleaning-before-after.jpg",
    imageAlt: "Before and after concrete pressure washing by Blue Ridge Exterior Cleaning LLC",
    intro: "Blue Ridge Exterior Cleaning LLC provides professional pressure washing for durable outdoor surfaces throughout Teays Valley, Hurricane, Winfield, Charleston and nearby West Virginia communities. We evaluate the material and buildup before choosing the pressure, equipment and cleaning approach for the job.",
    bestFor: ["Driveways and concrete pads", "Sidewalks and walkways", "Patios and other durable outdoor surfaces", "Selected brick, stone, decks and fences after surface evaluation"],
    method: "Pressure washing is best reserved for materials that can tolerate mechanical cleaning. Before starting, we look at the surface condition, nearby landscaping, drainage and the type of staining present. The goal is to clean effectively without treating every surface the same way.",
    results: "A professional cleaning can remove common dirt, organic buildup and surface grime. Some permanent discoloration, oxidation, rust, oil, mulch dye or deeply embedded stains may require a separate treatment and cannot be guaranteed to disappear completely. We explain those limitations before the work begins.",
    faqs: [
      ["Can every exterior surface be pressure washed?", "No. Siding, roofing and other sensitive materials often require a lower-pressure soft-washing approach. We choose the method based on the surface."],
      ["Do you clean driveways and sidewalks together?", "Yes. Your quote can include the driveway, connecting walkways, patios or other concrete areas you want cleaned."],
      ["Can you remove every stain from concrete?", "Results depend on the stain and how long it has been present. We identify visible problem areas and set realistic expectations before cleaning."]
    ]
  },
  {
    slug: "house-washing",
    name: "House Washing",
    title: "House Washing in Teays Valley WV | Blue Ridge Exterior Cleaning LLC",
    description: "Exterior house washing for siding, trim and accessible exterior surfaces in Teays Valley, Hurricane, Winfield, Charleston and nearby West Virginia areas.",
    kicker: "Exterior house washing in West Virginia",
    h1: "House washing <em>from top to bottom.</em>",
    image: "house-soft-wash-before-after.jpg",
    imageAlt: "Before and after house washing on white siding in West Virginia",
    intro: "Our house-washing service is designed for homeowners who want exterior siding and related surfaces cleaned with a method selected for the material. Blue Ridge Exterior Cleaning LLC serves Teays Valley and nearby communities with clear quotes and careful preparation around the property.",
    bestFor: ["Vinyl siding", "Painted exterior surfaces after evaluation", "Exterior trim and accessible soffits", "Attached exterior areas included in the confirmed quote"],
    method: "Most residential siding is cleaned with a soft-washing process rather than aggressive pressure. Cleaning solution is applied at controlled pressure, allowed appropriate contact time and rinsed thoroughly. More durable areas can be handled separately when pressure washing is appropriate.",
    results: "House washing targets dirt and organic buildup on the exterior. Oxidation, fading, damaged paint, artillery fungus and permanent staining are separate conditions and may remain visible after standard cleaning. We can evaluate questionable areas before quoting the full project.",
    faqs: [
      ["Does house washing include the roof?", "Roof cleaning is a separate service because roofing requires its own process, access evaluation and quote."],
      ["Can you clean an attached garage?", "Attached areas can be included when they are identified in the quote. Detached buildings may be added separately."],
      ["What if the siding is oxidized?", "We can test a small, less-visible section and explain how the oxidized surface responds before proceeding."]
    ]
  },
  {
    slug: "soft-washing",
    name: "Soft Washing",
    title: "Soft Washing Teays Valley WV | Blue Ridge Exterior Cleaning LLC",
    description: "Low-pressure soft washing for siding and other sensitive exterior surfaces in Teays Valley, Hurricane, Winfield, Charleston and surrounding WV communities.",
    kicker: "Low-pressure exterior cleaning",
    h1: "Soft washing <em>for sensitive surfaces.</em>",
    image: "siding-soft-wash-before-after.jpg",
    imageAlt: "Before and after soft washing showing organic buildup removed from siding",
    intro: "Soft washing combines a surface-appropriate cleaning solution with controlled low-pressure application and rinsing. Blue Ridge Exterior Cleaning LLC uses this approach for siding and other exterior materials that should not be cleaned with aggressive pressure.",
    bestFor: ["Residential siding", "Stucco after surface evaluation", "Painted exterior surfaces", "Roofing through a separate roof-cleaning service"],
    method: "The cleaning solution performs most of the work, reducing the need for high pressure. We account for the surface, visible buildup, landscaping and surrounding materials before application. Areas are then rinsed according to the needs of the property and the confirmed scope.",
    results: "Soft washing is intended for common organic buildup and exterior grime. It does not reverse oxidation, sun fading, failing paint or physical damage. If a surface has heavy oxidation or another unusual condition, we can perform a small test before the full cleaning.",
    faqs: [
      ["Is soft washing the same as pressure washing?", "No. Soft washing relies on lower pressure and a cleaning solution. Pressure washing uses more mechanical force and is reserved for durable surfaces."],
      ["Why use soft washing on siding?", "It allows siding and other sensitive materials to be cleaned without relying on aggressive pressure."],
      ["Will soft washing fix faded siding?", "No. Cleaning can remove buildup, but it cannot restore color lost through oxidation or sun exposure."]
    ]
  },
  {
    slug: "concrete-cleaning",
    name: "Concrete Cleaning",
    title: "Concrete Cleaning Teays Valley WV | Blue Ridge Exterior Cleaning LLC",
    description: "Driveway, sidewalk, patio and concrete cleaning in Teays Valley, Hurricane, Winfield, Charleston and nearby West Virginia communities.",
    kicker: "Driveway and concrete cleaning",
    h1: "Concrete cleaning <em>with an even finish.</em>",
    image: "walkway-cleaning-before-after.jpg",
    imageAlt: "Before and after walkway and concrete cleaning in West Virginia",
    intro: "Blue Ridge Exterior Cleaning LLC cleans residential and commercial concrete throughout Teays Valley and surrounding West Virginia communities. Driveways, sidewalks, patios and concrete pads are quoted according to their size, condition, access and visible staining.",
    bestFor: ["Residential driveways", "Sidewalks and front walkways", "Concrete patios and pads", "Commercial sidewalks and selected concrete areas"],
    method: "Concrete cleaning can involve pretreatment, surface cleaning, detailed rinsing and an appropriate post-treatment when needed. Edges and transitions are handled as part of the confirmed work area so the finished project looks consistent.",
    results: "Standard cleaning is effective for common dirt and organic buildup. Oil, rust, fertilizer marks, mulch dye, paint and deeply absorbed discoloration can require specialty treatment and may not be fully removable. Those conditions are evaluated separately.",
    faqs: [
      ["Can you clean the driveway and walkway in one visit?", "Yes. Multiple concrete sections can be measured and combined into one quote."],
      ["Do you use a surface cleaner?", "Equipment is selected according to the area and condition of the concrete, with detail work completed where necessary."],
      ["Will old concrete look brand new?", "Cleaning can create a major improvement, but it cannot repair cracking, wear, aggregate exposure or permanent discoloration."]
    ]
  },
  {
    slug: "roof-cleaning",
    name: "Roof Cleaning",
    title: "Roof Cleaning Teays Valley WV | Blue Ridge Exterior Cleaning LLC",
    description: "Low-pressure roof cleaning for appropriate roofing systems in Teays Valley, Hurricane, Winfield, Charleston and nearby West Virginia communities.",
    kicker: "Low-pressure roof cleaning",
    h1: "Roof cleaning <em>without aggressive pressure.</em>",
    image: "metal-roof-wash-before-after.png",
    imageAlt: "Before and after metal roof cleaning by Blue Ridge Exterior Cleaning LLC",
    intro: "Roofing should not be treated like a driveway. Blue Ridge Exterior Cleaning LLC evaluates the roof material, pitch, access, runoff and surrounding property before recommending a cleaning approach or providing a final quote.",
    bestFor: ["Asphalt-shingle roofs after evaluation", "Metal roofing", "Visible organic staining and buildup", "Residential and selected commercial roof areas"],
    method: "Roof cleaning uses a low-pressure application appropriate to the roofing material rather than high-pressure blasting. Landscaping, painted surfaces, gutters, drainage and accessible runoff areas are considered during preparation and rinsing.",
    results: "Cleaning targets organic discoloration and exterior buildup. Rust, coating failure, oxidation, storm damage and material defects are not cleaning issues and will not be repaired by washing. We identify visible concerns that affect the expected outcome.",
    faqs: [
      ["Do you pressure wash shingles?", "No. Asphalt shingles require a low-pressure roof-cleaning approach rather than aggressive pressure."],
      ["Can you clean metal roofs?", "Yes, subject to an evaluation of the coating, oxidation, access and roof condition."],
      ["Is roof cleaning included with house washing?", "Roof cleaning is quoted separately because the process and access requirements differ from siding cleaning."]
    ]
  },
  {
    slug: "window-cleaning",
    name: "Exterior Window Cleaning",
    title: "Window Cleaning Teays Valley WV | Blue Ridge Exterior Cleaning LLC",
    description: "Exterior window cleaning and recurring window service plans in Teays Valley, Hurricane, Winfield, Charleston and surrounding West Virginia areas.",
    kicker: "Exterior window cleaning plans",
    h1: "Clearer exterior windows <em>throughout the year.</em>",
    image: "blue-ridge-gate-cleaning-hero.png",
    imageAlt: "Blue Ridge Exterior Cleaning LLC exterior cleaning project",
    intro: "Blue Ridge Exterior Cleaning LLC provides exterior window cleaning as a one-time service or recurring plan. Quarterly, twice-yearly and annual scheduling options are available, with final pricing based on window count, property size and access.",
    bestFor: ["Exterior window panes", "Accessible exterior frames and sills included in the quote", "One-time seasonal cleaning", "Quarterly, twice-yearly and annual service plans"],
    method: "Exterior glass is cleaned with equipment selected for the height, access and condition of the windows. The confirmed quote identifies which panes, frames and sills are included and whether special access or buildup affects the work.",
    results: "Routine exterior window cleaning addresses normal pollen, dirt and water spotting. Paint, hard mineral deposits, construction debris, failed seals and scratches are separate conditions. We identify visible limitations before or during the quote process.",
    faqs: [
      ["Do you clean the inside of the windows?", "The advertised service is exterior window cleaning. The quote will clearly state the surfaces included."],
      ["Which plan provides the lowest price per visit?", "Quarterly service provides the lowest price for each visit, subject to the confirmed property quote."],
      ["Can window cleaning be added to house washing?", "Yes. Exterior window cleaning can be included as an additional service in the same quote."]
    ]
  },
  {
    slug: "commercial-exterior-cleaning",
    name: "Commercial Exterior Cleaning",
    title: "Commercial Cleaning Charleston WV | Blue Ridge Exterior Cleaning LLC",
    description: "Commercial pressure washing and exterior cleaning for buildings, sidewalks and concrete in Charleston, Teays Valley and surrounding West Virginia areas.",
    kicker: "Commercial exterior cleaning in West Virginia",
    h1: "Commercial cleaning <em>planned around your property.</em>",
    image: "concrete-pad-before-after.jpg",
    imageAlt: "Before and after commercial-style concrete pad cleaning",
    intro: "Blue Ridge Exterior Cleaning LLC provides commercial exterior cleaning for properties in Charleston, Teays Valley and surrounding West Virginia communities. Each project is reviewed according to the building materials, concrete area, access, water availability and operating schedule.",
    bestFor: ["Commercial sidewalks and entrances", "Exterior building surfaces", "Concrete pads and selected parking areas", "Property managers, landlords and local businesses"],
    method: "Commercial work begins with a defined scope so entrances, sensitive materials, drainage and customer access can be considered. Pressure washing or soft washing is selected by surface, and larger properties can be divided into manageable work areas when needed.",
    results: "A site-specific quote identifies the included surfaces and expected cleaning outcome. Permanent staining, oxidation, damaged coatings, gum, oil, rust or other specialty conditions may require separate treatment. Scheduling is confirmed before work begins.",
    faqs: [
      ["Can work be scheduled around business hours?", "Availability depends on the project and current schedule. Include your preferred work window when requesting a quote."],
      ["Do you quote large concrete areas?", "Yes. Provide the address, approximate area and photos when available so the scope can be reviewed."],
      ["Can building washing and concrete cleaning be combined?", "Yes. Multiple exterior services can be included in one commercial proposal when requested."]
    ]
  }
];

const locations = [
  {
    slug: "teays-valley-wv", city: "Teays Valley", county: "Putnam County",
    description: "Pressure washing, house washing, concrete cleaning, roof cleaning and exterior window cleaning in Teays Valley, West Virginia.",
    intro: "Blue Ridge Exterior Cleaning LLC is based in the Teays Valley area and provides exterior cleaning for homes and businesses throughout the surrounding Putnam County communities. Customers can request one service or combine house washing, concrete cleaning, roof cleaning and exterior windows into a single quote.",
    detail: "Properties differ in siding material, shade, access, concrete condition and the type of buildup present. We review those details before choosing soft washing, pressure washing or another surface-appropriate approach. The scope and price are confirmed before scheduling.",
    nearby: "Service availability also includes Hurricane, Scott Depot, Winfield, Milton and nearby communities."
  },
  {
    slug: "hurricane-wv", city: "Hurricane", county: "Putnam County",
    description: "Professional pressure washing, soft washing, driveway cleaning, roof cleaning and exterior window cleaning in Hurricane, West Virginia.",
    intro: "Blue Ridge Exterior Cleaning LLC serves Hurricane homeowners and businesses with pressure washing, soft washing and exterior maintenance services. Quotes can cover siding, driveways, walkways, patios, roofs, fences and exterior windows based on the needs of the property.",
    detail: "The cleaning method is matched to each material. Siding and roofing generally require controlled low pressure, while durable concrete can be cleaned with pressure-washing equipment. Stains such as rust, oil, oxidation or mulch dye are evaluated separately because results vary.",
    nearby: "Hurricane service is coordinated with nearby Teays Valley, Scott Depot, Winfield and Milton appointments when availability allows."
  },
  {
    slug: "winfield-wv", city: "Winfield", county: "Putnam County",
    description: "Pressure washing, soft washing, concrete cleaning, house washing and exterior window cleaning in Winfield, West Virginia.",
    intro: "Blue Ridge Exterior Cleaning LLC provides residential and commercial exterior cleaning in Winfield. Services include house washing, driveway and walkway cleaning, roof cleaning, fence cleaning, exterior windows and commercial concrete.",
    detail: "Before work begins, we confirm the exact areas being cleaned, access to water, surface condition and any stains that may require special attention. That allows the quote to reflect the actual property rather than a one-size-fits-all package.",
    nearby: "Winfield appointments are available alongside service in Teays Valley, Hurricane, Scott Depot and surrounding Putnam County areas."
  },
  {
    slug: "charleston-wv", city: "Charleston", county: "Kanawha County",
    description: "Residential and commercial pressure washing, soft washing, concrete cleaning and exterior window cleaning in Charleston, West Virginia.",
    intro: "Blue Ridge Exterior Cleaning LLC serves Charleston with residential and commercial pressure washing, soft washing and exterior window cleaning. Property owners can request cleaning for siding, concrete, roofs, decks, fences, brick, stone and selected commercial exterior areas.",
    detail: "Charleston projects range from individual walkways and home exteriors to larger commercial concrete and building-cleaning scopes. We evaluate surface materials, access, water availability and visible staining before confirming the work and schedule.",
    nearby: "Service is also available in South Charleston, St. Albans, Cross Lanes, Nitro and nearby Kanawha County communities."
  },
  {
    slug: "cross-lanes-wv", city: "Cross Lanes", county: "Kanawha County",
    description: "House washing, pressure washing, driveway cleaning, roof cleaning and exterior window cleaning in Cross Lanes, West Virginia.",
    intro: "Blue Ridge Exterior Cleaning LLC provides exterior cleaning in Cross Lanes for siding, driveways, sidewalks, patios, roofs, fences and exterior windows. Services can be quoted separately or combined according to the property.",
    detail: "We select the cleaning method after considering the surface and buildup. Sensitive siding and roofing are handled with lower pressure, while concrete and other durable materials may be pressure washed. Existing damage, oxidation and permanent staining are discussed when visible.",
    nearby: "Cross Lanes service is available with nearby Charleston, Nitro, St. Albans, Teays Valley and surrounding appointments."
  },
  {
    slug: "milton-wv", city: "Milton", county: "Cabell County",
    description: "Pressure washing, house soft washing, concrete cleaning, roof cleaning and exterior window cleaning in Milton, West Virginia.",
    intro: "Blue Ridge Exterior Cleaning LLC serves Milton homes and businesses with house washing, pressure washing, roof cleaning, concrete cleaning, fence cleaning and exterior window service. Every quote identifies the included surfaces before the appointment is scheduled.",
    detail: "Different materials require different methods. We assess siding, roofing, concrete, wood and masonry separately rather than applying the same pressure everywhere. Photos and the property address can help begin the quote process before an on-site evaluation is needed.",
    nearby: "Milton service is available alongside appointments in Hurricane, Teays Valley, Winfield, Barboursville and nearby communities."
  },
  {
    slug: "scott-depot-wv", city: "Scott Depot", county: "Putnam County",
    description: "Pressure washing, house washing, concrete cleaning, roof cleaning and exterior window cleaning in Scott Depot, West Virginia.",
    intro: "Blue Ridge Exterior Cleaning LLC serves Scott Depot homes and businesses with pressure washing, house washing, roof cleaning, concrete cleaning and exterior window service. Customers can request an individual service or ask for several exterior areas to be included in one quote.",
    detail: "We review the property materials, access and visible buildup before confirming the cleaning approach. Lower-pressure methods are used for sensitive surfaces, while durable concrete and masonry may be suitable for pressure washing after evaluation.",
    nearby: "Scott Depot appointments are available alongside service in Teays Valley, Hurricane, Winfield and surrounding Putnam County communities."
  },
  {
    slug: "st-albans-wv", city: "St. Albans", county: "Kanawha County",
    description: "Pressure washing, soft washing, concrete cleaning, roof cleaning and exterior window cleaning in St. Albans, West Virginia.",
    intro: "Blue Ridge Exterior Cleaning LLC provides exterior cleaning for St. Albans properties. Available services include house washing, driveway and walkway cleaning, roof cleaning, fence cleaning, exterior windows and selected commercial exterior work.",
    detail: "The quote reflects the surfaces being cleaned, their condition and the access available at the property. We select pressure washing or a lower-pressure process based on the material rather than using one method throughout the property.",
    nearby: "St. Albans service is available with nearby appointments in Nitro, South Charleston, Cross Lanes and Charleston."
  },
  {
    slug: "south-charleston-wv", city: "South Charleston", county: "Kanawha County",
    description: "Residential and commercial pressure washing, house washing, concrete cleaning and exterior window cleaning in South Charleston, West Virginia.",
    intro: "Blue Ridge Exterior Cleaning LLC serves South Charleston with residential and commercial exterior cleaning. Quotes can include siding, driveways, sidewalks, patios, roofs, fences, exterior windows and selected building or commercial concrete areas.",
    detail: "Before scheduling, we confirm the work area, surface materials, water access and any stains or damage that could affect the result. Each surface is assigned a suitable cleaning method and included clearly in the quote.",
    nearby: "South Charleston appointments are available alongside service in Charleston, St. Albans, Cross Lanes, Nitro and nearby Kanawha County communities."
  },
  {
    slug: "nitro-wv", city: "Nitro", county: "Kanawha and Putnam Counties",
    description: "Pressure washing, house soft washing, driveway cleaning, roof cleaning and exterior window cleaning in Nitro, West Virginia.",
    intro: "Blue Ridge Exterior Cleaning LLC provides exterior cleaning in Nitro for homes and businesses. Customers can request house washing, concrete cleaning, roof cleaning, fence cleaning, exterior windows or a combined exterior cleaning quote.",
    detail: "Siding, roofing, concrete, wood and masonry are evaluated separately because they do not require the same equipment or pressure. We confirm the included surfaces and any specialty stain concerns before scheduling.",
    nearby: "Nitro service is available alongside appointments in St. Albans, Cross Lanes, Teays Valley, South Charleston and surrounding communities."
  },
  {
    slug: "barboursville-wv", city: "Barboursville", county: "Cabell County",
    description: "Pressure washing, soft washing, concrete cleaning, roof cleaning and exterior window cleaning in Barboursville, West Virginia.",
    intro: "Blue Ridge Exterior Cleaning LLC serves Barboursville properties with house washing, pressure washing, roof cleaning, concrete cleaning, fence cleaning and exterior window service. The requested areas can be quoted individually or together.",
    detail: "We use property details and photos when available to review the likely cleaning method, access and scope. Permanent stains, oxidation, damaged coatings and specialty treatments are discussed separately because cleaning results depend on the condition of the surface.",
    nearby: "Barboursville appointments are available alongside service in Milton, Hurricane and other nearby Cabell and Putnam County communities."
  },
  {
    slug: "sissonville-wv", city: "Sissonville", county: "Kanawha County",
    description: "Pressure washing, house washing, concrete cleaning, roof cleaning and exterior window cleaning in Sissonville, West Virginia.",
    intro: "Blue Ridge Exterior Cleaning LLC provides exterior cleaning in Sissonville for siding, concrete, roofs, decks, fences and exterior windows. Customers can send the property address and photos to begin a service-specific quote.",
    detail: "The cleaning plan accounts for surface type, property access and the kind of buildup present. Sensitive materials receive controlled lower pressure, while durable surfaces may be cleaned with pressure-washing equipment when appropriate.",
    nearby: "Sissonville service is scheduled alongside appointments in Charleston, Cross Lanes and surrounding Kanawha County communities when availability allows."
  },
  {
    slug: "point-pleasant-wv", city: "Point Pleasant", county: "Mason County",
    description: "Pressure washing, house washing, concrete cleaning, roof cleaning and exterior window cleaning in Point Pleasant, West Virginia.",
    intro: "Blue Ridge Exterior Cleaning LLC accepts exterior cleaning requests in Point Pleasant for house washing, driveways and sidewalks, roofs, fences, exterior windows and selected commercial areas. Availability is confirmed after reviewing the property and requested scope.",
    detail: "Because travel, access, surface materials and project size affect scheduling and pricing, the property address and photos are helpful when requesting service. We confirm the included work and cleaning approach before reserving an appointment.",
    nearby: "Point Pleasant availability depends on the project scope and current route schedule. Send the property address to confirm service before planning an appointment."
  }
];

const serviceLinks = services.map((service) => `<a class="link-card" href="../../services/${service.slug}/"><strong>${service.name}</strong><span>Service details and quote information</span></a>`).join("");
const locationLinks = locations.map((location) => `<a class="link-card" href="../../locations/${location.slug}/"><strong>${location.city}</strong><span>${location.county}, West Virginia</span></a>`).join("");

function shell({ title, description, canonical, kicker, h1, lede, image, imageAlt, body, lowerTitle, lowerLinks, schema }) {
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="description" content="${description}">
  <meta name="robots" content="index, follow, max-image-preview:large">
  <link rel="canonical" href="${canonical}">
  <meta name="theme-color" content="#082f49">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${description}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:type" content="website">
  <meta property="og:image" content="${domain}/${image}">
  <title>${title}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../../styles.css">
  <link rel="stylesheet" href="../../brand-logo.css">
  <link rel="stylesheet" href="../../seo-pages.css">
  <style>.seo-header{position:fixed}</style>
  <script type="application/ld+json">${JSON.stringify(schema)}</script>
</head>
<body>
  <a class="skip" href="#main">Skip to content</a>
  <header class="header seo-header" id="top"><div class="container nav-row">
    <a class="logo" href="../../" aria-label="Blue Ridge Exterior Cleaning LLC home"><img src="../../blue-ridge-exterior-cleaning-logo.webp" alt="Blue Ridge Exterior Cleaning LLC"></a>
    <button class="menu" aria-expanded="false" aria-controls="nav"><span></span><span></span><span></span><b class="sr-only">Open menu</b></button>
    <nav id="nav" aria-label="Primary navigation"><a href="../../#services">Services</a><a href="../../#work">Our work</a><a href="../../#areas">Service area</a><a class="nav-cta" href="${quoteUrl}" target="_blank" rel="noopener noreferrer">Free quote</a></nav>
  </div></header>
  <main class="seo-main" id="main">
    <section class="seo-hero"><div class="container seo-hero-grid"><div><div class="breadcrumbs"><a href="../../">Home</a><span>/</span><span>${kicker}</span></div><p class="overline">${kicker}</p><h1>${h1}</h1><p>${lede}</p><div class="actions"><a class="button" href="${quoteUrl}" target="_blank" rel="noopener noreferrer">Request a free quote <span>→</span></a><a class="call" href="tel:${phoneHref}"><small>Call or text</small>${phoneDisplay}</a></div></div><figure><img src="../../${image}" alt="${imageAlt}" width="900" height="650"></figure></div></section>
    <section class="seo-content"><div class="container seo-layout"><article class="seo-copy">${body}</article><aside class="seo-panel"><h2>Get a clear quote</h2><p>Send the property address, the surfaces you want cleaned and any helpful photos. We will review the details and confirm the scope before scheduling.</p><a class="button" href="${quoteUrl}" target="_blank" rel="noopener noreferrer">Request pricing <span>→</span></a><a class="phone" href="tel:${phoneHref}">${phoneDisplay}</a></aside></div></section>
    <section class="seo-locations"><div class="container"><p class="overline">Explore more</p><h2>${lowerTitle}</h2><div class="link-grid">${lowerLinks}</div></div></section>
  </main>
  <footer class="seo-footer"><div class="container footer-grid"><img src="../../blue-ridge-exterior-cleaning-logo.webp" alt="Blue Ridge Exterior Cleaning LLC"><p>We don’t cut corners.<br>We clean them.</p><div><a href="../../services/pressure-washing/">Pressure washing</a><a href="../../services/house-washing/">House washing</a><a href="../../services/roof-cleaning/">Roof cleaning</a><a href="../../services/concrete-cleaning/">Concrete cleaning</a><a href="../../services/window-cleaning/">Window cleaning</a><a href="../../#quote">Free quote</a></div></div><div class="container copyright"><span>© <span id="year"></span> Blue Ridge Exterior Cleaning LLC</span><span>Teays Valley, West Virginia</span></div></footer>
  <script src="../../script.js"></script>
</body>
</html>`;
}

for (const service of services) {
  const canonical = `${domain}/services/${service.slug}/`;
  const body = `<h2>${service.name} for West Virginia properties</h2><p>${service.intro}</p><h3>Surfaces and projects we evaluate</h3><ul>${service.bestFor.map((item) => `<li>${item}</li>`).join("")}</ul><h3>How the service is planned</h3><p>${service.method}</p><h3>What to expect from cleaning</h3><p>${service.results}</p><div class="faq"><p class="overline">Common questions</p><h2>${service.name} questions</h2>${service.faqs.map(([question, answer]) => `<details><summary>${question}</summary><p>${answer}</p></details>`).join("")}</div>`;
  const schema = { "@context": "https://schema.org", "@graph": [
    { "@type": "Service", "@id": `${canonical}#service`, name: service.name, url: canonical, description: service.description, provider: { "@id": `${domain}/#business` }, areaServed: locations.map(({ city }) => ({ "@type": "City", name: `${city}, West Virginia` })) },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: `${domain}/` }, { "@type": "ListItem", position: 2, name: service.name, item: canonical }] }
  ] };
  const html = shell({ title: service.title, description: service.description, canonical, kicker: service.kicker, h1: service.h1, lede: service.intro, image: service.image, imageAlt: service.imageAlt, body, lowerTitle: "Areas we serve", lowerLinks: locationLinks, schema });
  const directory = new URL(`services/${service.slug}/`, root);
  await mkdir(directory, { recursive: true });
  await writeFile(new URL("index.html", directory), html);
}

for (const location of locations) {
  const canonical = `${domain}/locations/${location.slug}/`;
  const title = `Pressure Washing ${location.city} WV | Blue Ridge Exterior Cleaning LLC`;
  const body = `<h2>Exterior cleaning in ${location.city}, West Virginia</h2><p>${location.intro}</p><h3>A cleaning method selected for the surface</h3><p>${location.detail}</p><h3>Services available in ${location.city}</h3><ul><li>Pressure washing for durable concrete and selected exterior surfaces</li><li>House washing and low-pressure soft washing</li><li>Driveway, sidewalk and patio cleaning</li><li>Roof cleaning after a material and access evaluation</li><li>Exterior window cleaning and recurring plans</li><li>Commercial exterior and concrete cleaning</li></ul><h3>Nearby service availability</h3><p>${location.nearby}</p><div class="faq"><p class="overline">Local quote questions</p><h2>Planning your ${location.city} cleaning</h2><details><summary>How do I request a quote?</summary><p>Send the property address, the surfaces you want cleaned and any helpful photos through the quote form. We will confirm whether an on-site look is needed.</p></details><details><summary>Can I combine multiple services?</summary><p>Yes. House washing, concrete cleaning, exterior windows and other requested areas can be reviewed together and listed in one quote.</p></details><details><summary>Do you serve areas near ${location.city}?</summary><p>${location.nearby}</p></details></div>`;
  const schema = { "@context": "https://schema.org", "@graph": [
    { "@type": "Service", "@id": `${canonical}#service-area`, name: `Exterior Cleaning in ${location.city}, West Virginia`, url: canonical, description: location.description, provider: { "@id": `${domain}/#business` }, areaServed: { "@type": "City", name: `${location.city}, West Virginia`, containedInPlace: { "@type": "AdministrativeArea", name: `${location.county}, West Virginia` } }, hasOfferCatalog: { "@type": "OfferCatalog", name: `Exterior cleaning services in ${location.city}`, itemListElement: services.map((service) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: service.name, url: `${domain}/services/${service.slug}/` } })) } },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: `${domain}/` }, { "@type": "ListItem", position: 2, name: `${location.city}, WV`, item: canonical }] }
  ] };
  const html = shell({ title, description: location.description, canonical, kicker: `${location.city}, ${location.county}`, h1: `Pressure washing <em>in ${location.city}, WV.</em>`, lede: location.intro, image: "west-virginia-service-area.png", imageAlt: `West Virginia service area for exterior cleaning in ${location.city}`, body, lowerTitle: "Exterior cleaning services", lowerLinks: serviceLinks, schema });
  const directory = new URL(`locations/${location.slug}/`, root);
  await mkdir(directory, { recursive: true });
  await writeFile(new URL("index.html", directory), html);
}

console.log(`Generated ${services.length} service pages and ${locations.length} location pages.`);
