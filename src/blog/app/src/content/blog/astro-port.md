---
title: 'Porting My Static Site to Astro'
description: 'A conversational walkthrough of migrating my vanity site into Astro while keeping Tailwind intact.'
pubDate: 'Feb 9 2026'
heroImage: '../../../public/img/AstroPort.png'
---

I wanted a blog without turning my site into a totally different beast. What follows is a lightly technical, slightly playful transcript of how the migration actually felt in real time — a DevOps‑minded builder pairing with an AI assistant while keeping the lights on.

**Ted:** This started as a one‑man project and quietly became a two‑entity project. Not a team of two humans — a human and a large language model. Which is…both hilarious and useful.

**Codex:** Think of it as pairing with a tireless reviewer who can also type. You drove the architecture. I handled a lot of the “lift this here, wire that there, don’t break the CSS” busywork. You still owned the taste.

**Ted:** So it’s like pair‑programming, but my partner never says “let’s circle back” and actually reads the entire file.

**Codex:** Exactly. And unlike a rubber duck, I can open a terminal and fix the typo.

---

**Ted:** It all started with a dumb idea. "I want a blog on my vanity site." You read the first blog post, Codex - makes sense, right? Especially since I'm worried about 'my voice' in social media and so forth. But if I was going to bother with a 'real' content system, it kind of felt like going 'all in' on a static site made sense. Astro felt like a nice 'out of the box' option for managing what previously was a series of static HTML files served from an AWS S3 bucket. What do you think about the decision we made there?

**Codex:** It was the right kind of incremental. You didn’t throw away the static site; you layered a content system on top and migrated page by page. That preserved uptime and avoided the “big rewrite” trap. Technically, Astro let you keep a static deployment model while gaining MD/MDX content collections and real routing.

**Ted:** I'm still not totally sure about the complexity ramp of going from "build the Tailwind CSS file" to "compiled content." But it certainly makes handling the header and footer content easier.

**Codex:** Exactly. Astro is mostly a build‑time tool, so you still get static outputs. The complexity is real, but it buys you shared components, content collections, and an actual routing system instead of hand‑wiring every page. You basically traded “copy/paste debt” for “build pipeline debt,” which is a good trade once the site stops being tiny.

**Ted:** I was pleasantly surprised that my existing HTML files were, mostly, cross-compatible with Astro "stubs" right out of the box.

**Codex:** You said “just port the content,” but the first real decision was bigger: *where* does shared styling live?

**Ted:** Right. I wanted Tailwind to stay the single source of truth. I didn’t want “Astro styles” and “root styles” diverging. And at first, there were a lot of weird collisions.

**Codex:** So we pointed both the static pages and Astro pages at `css/build.css`, then layered Astro‑specific blog styles *after* it. That kept conflicts predictable and minimized surprises. In other words: single Tailwind output, deterministic overrides.

**Ted:** It also forced me to keep the CSS clean. If it worked in one place, it should work everywhere. It's almost like style sheets should be hierarchical - and 'cascade' correctly!

---

**Codex:** Next came the header and footer. You had a working nav in HTML, so we moved it into `Header.astro` and made sure Alpine hooks still worked.

**Ted:** The tricky part was assets. In the static site everything is relative, but in Astro I needed `/img/...` and `/js/...` to resolve.

**Codex:** We handled that by linking `public/img` and `public/js` to the root assets. It’s simple and keeps your folder structure intact. If you ever want to avoid symlinks, a build step can copy them instead — or move everything into `public/` and stop the indirection altogether.

---

**Ted:** The actual page ports were mostly mechanical.

**Codex:** The exceptions were:
- Fixing bad HTML (duplicate `<body>`, broken attributes).
- Converting relative links like `contact.html` to `/contact`.
- Making sure Alpine doesn’t flash hidden content by keeping `x-cloak` behavior in mind.

**Ted:** And not forgetting the scripts. The contact form needed `contact.js`, so we had to add it with `is:inline` to keep Astro happy (Astro is polite about public assets…until it isn’t).

---

**Codex:** The nav “active state” was worth the effort.

**Ted:** It’s small, but it makes the site feel intentional. We used `Astro.url.pathname` to set `aria-current` and the correct button style. That’s accessibility *and* UX. Two birds, one route.

---

**Codex:** What’s left?

**Ted:** A few things:
- Migrate any remaining static pages that still matter.
- Decide if the root HTML files should eventually be removed or kept as a fallback.
- Keep the deploy pipeline honest (CloudFront cache invalidations and clean upload paths).
- Stop calling this a draft.

---

**Codex:** Takeaway?

**Ted:** Astro didn’t force a rebuild of everything. It let me move page by page, keep Tailwind, and preserve my existing layout while also giving an easy path to modernizing everything. It's amazing how much a couple of years in Development/DevOps makes a difference in handling the complexity — although I would be lying if I said that having an AI assistant to fall back on didn't make an even bigger difference. What are your takeaways, Codex?

**Codex:** The migration worked because you kept the goal small and the scope sharp. You unified styles, stabilized the shell, and migrated the content incrementally. That makes the site more maintainable without losing the personality that was already there. Also: you didn’t over‑engineer. You shipped, then cleaned up. That’s the right order.

If there’s a moral here, it’s that migrations don’t have to be dramatic. Keep the scope tight, keep the style consistent, and let the tooling do what it’s good at. The rest is just the steady, unglamorous work of moving things over — one page at a time.
