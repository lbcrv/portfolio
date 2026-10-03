# Portfolio

Personal site of Luis Enrique Bustamante. Static Astro site, deployed on Cloudflare Pages.

## Running it

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # output in dist/
```

## Editing

- Projects: `src/data/projects.ts`. Screenshots live in `src/assets/shots/` and are converted to WebP at build time.
- Intro, contact and "Currently building": `src/pages/index.astro`.
- Styles: `src/styles/global.css`.

The "Last push" date for each project is read from the GitHub API during the build. If the API is unreachable, the date is left out and the build still succeeds. Set `GITHUB_TOKEN` in the build environment to avoid rate limits.

## Deploying on Cloudflare Pages

- Build command: `npm run build`
- Output directory: `dist`
- Node version comes from `.node-version`.
- Security headers and caching rules are in `public/_headers`. The Content-Security-Policy allows no inline code, so any future script, analytics or embed needs its source added there. On a custom domain, turn off Cloudflare's Email Address Obfuscation or allow its script, otherwise the email link breaks.

Dates only refresh when the site is rebuilt. A Cloudflare deploy hook triggered by a daily GitHub Action would keep them current.
