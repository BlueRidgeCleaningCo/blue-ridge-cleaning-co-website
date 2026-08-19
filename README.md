# Blue Ridge Cleaning Co. website

A ready-to-deploy static website. No build step is required.

## Before publishing

1. In `index.html`, replace `hello@blueridgecleaningco.com` with the real email address. The phone number has been updated from the supplied Google business profile.
2. Replace the three clearly marked sample reviews with verified customer reviews, or remove the sample cards until reviews are available. The displayed 5.0 rating and 12-review count came from the supplied Google business profile; update them if they change.
3. Check all service descriptions and form options against the final offer.

## Cheapest deployment options

### Netlify (easiest form setup)

Drag the entire folder into Netlify Drop, or connect a GitHub repository and set the publish directory to `/`. The included form is already prepared for Netlify Forms. After the first deployment, submit one test entry and check **Forms** in the Netlify dashboard. Connect a custom domain in **Domain management**; Netlify provides HTTPS automatically.

### Cloudflare Pages

Upload the folder with Direct Upload or connect a GitHub repository. No build command is needed; use `/` as the output directory. Connect the domain under **Custom domains**. The current form will need a form backend such as Formspree, Basin, or a Cloudflare Worker because Netlify Forms only processes submissions hosted on Netlify.

### GitHub Pages

Upload these files to a GitHub repository, open **Settings → Pages**, and deploy from the main branch/root folder. Add the custom domain in the Pages settings. The current form will need a third-party form backend because GitHub Pages cannot process form submissions.

## Included files

- `index.html` — full website and form
- `styles.css` — responsive styling and animation
- `brand.css` — Blue Ridge turquoise campaign styling
- `blue-ridge-cleaning-logo.png` — supplied company logo
- `script.js` — menu, accordion, plan selection, and scroll effects
- `thanks.html` — form confirmation page
