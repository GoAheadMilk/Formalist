# HTML/CSS/JS Starter (GitHub Pages ready)

This is a minimal, production-ready static site starter with:
- Semantic HTML, accessible defaults, and basic styles
- SEO meta, Open Graph, robots.txt, sitemap.xml
- Optional GA4 snippet
- Ready-to-deploy GitHub Pages workflow

## Quick start
1. **Create a public repo** on GitHub and push these files.
2. **Enable Pages**: Settings → Pages → Deploy from a branch → Branch: `main` (or `gh-pages`). If you use this workflow, keep `main`.
3. The site will publish to `https://<user>.github.io/<repo>/`

## Custom domain
- Add your domain under Settings → Pages → Custom domain.
- Create the DNS records GitHub shows (ALIAS/ANAME or A, plus CNAME for `www`).
- Enforce HTTPS once the certificate is issued.

## SEO
- Update `<title>`, `<meta name="description">` in `index.html`.
- Replace `YOUR-DOMAIN.example` in `index.html`, `robots.txt`, `sitemap.xml`.
- Submit your domain to Google Search Console and add the sitemap URL.

## Analytics
- Replace the GA4 Measurement ID `G-XXXXXXXXXX` in `index.html` (or remove the block).

## Lighthouse
- In Chrome DevTools → Lighthouse, run audits for Performance, Accessibility, Best Practices, and SEO.

## Development
No tooling required. Just edit `index.html`, `styles.css`, `script.js`. You can serve locally with any static server:
```sh
python3 -m http.server 5173
```

## License
MIT
