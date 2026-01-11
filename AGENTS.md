# Repository Guidelines

## Project Structure & Module Organization
- Root contains static HTML pages (for example, `index.html`, `projects.html`, `contact.html`).
- Stylesheets live in `css/` and images/icons are in `img/` and the root (favicons).
- The Astro blog app is under `src/Blog/app/` with:
  - `src/Blog/app/src/pages/` for routes.
  - `src/Blog/app/src/components/` for UI components.
  - `src/Blog/app/src/content/` for markdown/MDX posts.
- Infrastructure templates are under `infrastructure/`.

## Build, Test, and Development Commands
Astro app (run from `src/Blog/app/`):
- `npm install` installs dependencies.
- `npm run dev` starts the Astro dev server.
- `npm run build` generates a production build.
- `npm run preview` serves the production build locally.

Static HTML pages are edited directly in the repository root; no build step is required.

## Coding Style & Naming Conventions
- HTML/CSS uses 4-space indentation and lower-case file names (follow existing files).
- Prefer existing Tailwind utility classes in HTML; add new CSS in `css/` only when needed.
- Keep component and page names descriptive and aligned with their routes (Astro).

## Testing Guidelines
- No automated tests are defined for this repository.
- Verify changes manually in a browser. For Astro, run `npm run build` and `npm run preview`.

## Commit & Pull Request Guidelines
- Commit history shows no strict convention; use short, imperative summaries (for example, "Add header stub").
- PRs should include a concise description, testing notes, and screenshots for visible UI changes.
