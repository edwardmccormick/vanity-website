# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Astro App (run from `src/Blog/app/`)
```bash
npm install           # Install dependencies
npm run dev           # Dev server with hot reload (also runs asset sync)
npm run build         # Production build → outputs to /blog at repo root
npm run preview       # Serve the production build locally
```

### Tailwind CSS (run from repo root)
```bash
npx tailwindcss -i ./css/index.css -o ./css/build.css --watch
```

No automated tests exist. Verify changes manually in a browser. For Astro changes, use `npm run build && npm run preview`.

## Architecture

This is a **hybrid static site**: legacy root-level HTML pages coexist with an Astro app at `src/Blog/app/`. The Astro app outputs to `/blog` at the repo root and is the primary development target going forward.

### Shared Asset Strategy
Root-level shared assets (`css/build.css`, `img/`, `js/`, resume files) are **copied** (not symlinked) into `src/Blog/app/public/` by the script `src/Blog/app/scripts/sync-public-assets.mjs`. This runs automatically via `predev` and `prebuild` npm hooks. Always build Tailwind CSS first when changing styles, then let the asset sync handle propagation.

### Tailwind CSS
Tailwind is configured at the repo root (`tailwind.config.js`) and scans both root HTML files and Astro components. The compiled output at `css/build.css` is the single source of styles shared across both legacy HTML and Astro pages. The root-level package uses Tailwind v3 while the Astro app uses Tailwind v4 via PostCSS — they co-exist with separate configs.

### Blog Content
Blog posts live as Markdown/MDX files in `src/Blog/app/src/content/blog/`. The schema is defined in `src/Blog/app/src/content.config.ts`. Frontmatter fields: `title`, `description`, `pubDate`, `updatedDate` (optional), `heroImage` (optional). Dynamic routes are handled by `src/Blog/app/src/pages/blog/[...slug].astro`.

### Client-side Interactivity
AlpineJS (loaded via CDN in `BaseHead.astro`) handles mobile menus and dropdowns in `Header.astro`. Custom JavaScript in `js/index.js` handles email copy functionality used across pages.

### Deployment
Static output syncs to S3 with CloudFront in front. The GitHub Actions pipeline (`.github/workflows/pipeline.yaml`) handles deployment on push to `main`. The pipeline syncs repo root files to S3 (excluding `src/`, `infrastructure/`, markdown) and separately syncs the Astro build output (`/blog/`) to `s3://{bucket}/ted/blog/`. Infrastructure is defined as CloudFormation in `infrastructure/`.

## Conventions

- 4-space indentation, lowercase filenames
- Prefer existing Tailwind utility classes; add CSS in `css/` only when necessary
- Commit messages: short, imperative (e.g., "Add contact form validation")
- PRs for visible UI changes should include screenshots
