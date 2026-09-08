# Vanity Website

A personal/professional website for Edward C. “Ted” McCormick. The site started as static HTML hosted on AWS (S3 + CloudFront) and now uses **Astro** as a static site generator while preserving a gradual, page‑by‑page migration path.

## Repository Structure
- Root HTML pages (legacy or transition): `index.html`, `resume.html`, `projects.html`, `contact.html`, etc.
- Shared CSS: `css/` (Tailwind output is `css/build.css`).
- Shared assets: `img/`, `js/`, root favicons and `site.webmanifest`.
- Astro app: `src/blog/app/`
  - Pages: `src/blog/app/src/pages/`
  - Components: `src/blog/app/src/components/`
  - Content: `src/blog/app/src/content/`
  - Public assets: `src/blog/app/public/`
- Infrastructure/IaC: `infrastructure/`

## Local Development
### Astro (primary)
Use Node 24 to match CI. From `src/blog/app/`:
```bash
npm install
npm run dev
```

### Build + Preview
```bash
npm run build
npm run preview
```

### Tailwind CSS
Tailwind output is shared across root HTML and Astro:
```bash
npx tailwindcss -i ./css/index.css -o ./css/build.css --watch
```

## Asset Sync (No Symlinks)
Astro `public/` assets are populated via a pre‑build script:
- Script: `src/Blog/app/scripts/sync-public-assets.mjs`
- Automatically runs via:
  - `predev` before `npm run dev`
  - `prebuild` before `npm run build`

This copies:
- `css/build.css` → `public/css/build.css`
- `img/` → `public/img/`
- `js/` → `public/js/`
- Resume files → `public/`

## Deployment Notes
- The site is static and designed for S3/CloudFront hosting.
- `infrastructure/static-website-cloudformation.yaml` provisions AWS resources.
- GitHub Actions in `.github/workflows/pipeline.yaml` builds pull requests and configured branch pushes with Node 24. Only pushes to `main` deploy, after the build succeeds.
- Astro writes the complete site to the root `blog/` directory, including its own `blog/` route directory. Upload this output to the S3 `/ted` prefix (CloudFront's origin path), not `/ted/blog`.
- You can also deploy manually by uploading the generated static output to S3.

## Migration Status
- Astro pages migrated so far: `index`, `resume`, `contact`, `projects`, `blog`.
- Header/footer and Tailwind are unified across Astro and legacy HTML.
- Remaining legacy HTML can be migrated incrementally without breaking the live site.

## TODO
- [ ] Capture SES + API Gateway contact workflow as IaC.
- [ ] Blue/Green pipeline example.
- [ ] Finish migrating remaining legacy HTML pages (if desired).

## CI Status
[![Test and Deploy Pipeline](https://github.com/edwardmccormick/vanity-website/actions/workflows/pipeline.yaml/badge.svg)](https://github.com/edwardmccormick/vanity-website/actions/workflows/pipeline.yaml)
[![pages-build-deployment](https://github.com/edwardmccormick/vanity-website/actions/workflows/pages/pages-build-deployment/badge.svg?branch=main)](https://github.com/edwardmccormick/vanity-website/actions/workflows/pages/pages-build-deployment)
