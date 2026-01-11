# Blog Integration TODO

## Scope & Goals
- Integrate the Astro blog app in `src/Blog/app/` with the existing static site in the repository root.
- Keep root-level pages working during transition (no broken links, assets, or styling regressions).
- Establish a unified layout (header/footer) and shared styles across Astro and static pages.

## Project Layout Decisions
- Decide final home:
  - Option A: Move static pages into Astro (`src/Blog/app/src/pages/`) and let Astro own routing.
  - Option B: Keep static pages at root and deploy Astro blog under a subpath (for example, `/blog/`).
- Pick a single asset base path strategy:
  - Keep shared assets in root and reference via absolute paths.
  - Or copy/move shared assets into `src/Blog/app/public/`.
- Define a URL plan for blog routes:
  - `blog/index` list page.
  - `blog/[...slug]` for post pages.

## Shared Stylesheet Plan
- Audit existing CSS:
  - `css/output.css` (Tailwind build output).
  - Page-specific files in `css/` (for example, `index.css`, `projects.css`, `skills.css`).
- Choose a single primary stylesheet for site-wide defaults:
  - Option A: Consolidate into `css/output.css`.
  - Option B: Move common styles into an Astro-owned stylesheet (for example, `src/Blog/app/src/styles/site.css`).
- Set consistent typography:
  - Confirm which Google Fonts to keep.
  - Add font imports to the unified stylesheet.
- Remove duplicate or page-specific styles that are no longer needed after consolidation.

## Header/Footer Integration
- Create Astro header/footer components mirroring the current HTML:
  - Header based on `index.html` navbar.
  - Footer based on `index.html` footer.
- Add header/footer to Astro layouts:
  - `src/Blog/app/src/layouts/BlogPost.astro`.
  - `src/Blog/app/src/pages/blog/index.astro`.
  - Any other Astro pages.
- Create static stubs for header/footer in root pages:
  - Replace repeated nav/footer HTML with include placeholders or copy/paste stubs until Astro migration is complete.
- Align navigation links:
  - Ensure `Home`, `Resume`, `Projects`, `Contact`, `Blog` map correctly.
  - Update any absolute vs relative links to work from both root and `/blog/`.

## Asset Alignment
- Identify shared images used by both static and Astro pages:
  - `img/` directory (profile photo, logos, blog images).
- Decide where these live for Astro:
  - Keep as static assets in `src/Blog/app/public/img/`.
  - Or reference root assets via absolute path in production.
- Confirm favicon and `site.webmanifest` handling:
  - Duplicate into Astro `public/` if Astro is deployed separately.

## Content & Data
- Decide how to handle existing blog content:
  - Migrate `blog.html` or `blogpost.html` into Markdown/MDX in `src/Blog/app/src/content/blog/`.
  - Create frontmatter fields that match the desired blog layout.
- Define author and metadata defaults (name, description, social).
- Create a standard post template or snippet for new entries.

## Routing & Link Strategy
- If Astro owns routing:
  - Move `index.html`, `projects.html`, `resume.html`, `contact.html` into Astro pages.
  - Redirect or remove old root HTML files after validation.
- If Astro is a subpath:
  - Add `Blog` links in all root pages to `/blog/`.
  - Ensure `blog/index.astro` builds to the correct path.
- Update internal links in Astro to point to root pages (or new Astro pages if migrated).

## Build & Deployment
- Decide on build outputs:
  - Combine static pages and Astro build into one deploy artifact.
  - Or deploy Astro separately with a reverse proxy or subpath routing.
- If combining artifacts:
  - Script a build step that copies Astro `dist/` into the root deploy folder.
  - Ensure paths for CSS, JS, and images are correct after copy.
- Update CI/CD pipeline (if used) to include Astro build steps.

## QA Checklist
- Visual parity:
  - Header, footer, typography, spacing align between Astro and root pages.
- Navigation:
  - All nav links work on desktop and mobile.
  - Profile dropdown functions if reused in Astro.
- Blog functionality:
  - Blog index lists posts with correct dates and summaries.
  - Individual posts load and render correctly.
- Assets:
  - Images and icons load without mixed paths.
  - Favicons appear correctly.

## Migration Milestones
- M1: Build shared stylesheet and header/footer components in Astro.
- M2: Wire Astro blog to shared styling and navigation.
- M3: Update root static pages to match header/footer and add blog link.
- M4: Decide final routing strategy and consolidate deployment.
