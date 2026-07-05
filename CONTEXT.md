# AI Context: Portfolio Website — Mahdi Imantaka Sutejo

> This document is the **single source of truth** for AI working on this project.
> Read this entire document before writing any line of code.

---

## 1. Project Identity

| Attribute | Detail |
|---|---|
| **Project Name** | Single-Page Portfolio Website V4 |
| **Owner** | Mahdi Imantaka Sutejo |
| **Status** | Agile / Iterative Development |
| **Main Goal** | Professional showcase displaying track record with a tech-sophisticated aesthetic |

---

## 2. Tech Stack — DO NOT CHANGE

```
Framework   : Astro (latest stable)
Styling     : Tailwind CSS v3+
Content     : Markdown + Astro Content Collections
Language    : TypeScript (strict mode)
Deployment  : Automated CI/CD (Vercel / Netlify — TBD)
```

**Strict Prohibitions:**
- ❌ Do not use React/Vue/Svelte as the main framework
- ❌ Do not use any CSS framework other than Tailwind
- ❌ Do not use external CMS (Contentful, Sanity, etc.)
- ❌ Do not hardcode content inside `.astro` components

---

## 3. Architecture & Folder Structure

```
portfolio-mahdi/
├── public/
│   ├── fonts/                    # Self-hosted font files (.woff2)
│   ├── images/
│   │   ├── projects/             # Thumbnail & screenshot per project
│   │   └── og/                   # Open Graph preview images
│   └── favicon.svg
│
├── src/
│   ├── components/
│   │   ├── ui/                   # Atom components: Button, Badge, Tag, etc.
│   │   ├── sections/             # Section-level: Hero, Projects, About, Contact
│   │   └── layout/               # Navbar, Footer, etc.
│   │
│   ├── content/
│   │   └── projects/             # One .md file per project (source of truth)
│   │
│   ├── layouts/
│   │   └── BaseLayout.astro      # Main layout with SEO + OG meta
│   │
│   ├── pages/
│   │   └── index.astro           # Single page — all sections here
│   │
│   ├── styles/
│   │   └── global.css            # Tailwind directives + custom CSS vars
│   │
│   └── lib/
│       └── utils.ts              # Helper functions (slug, date format, etc.)
│
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── CONTEXT.md                    # ← THIS FILE
└── package.json
```

---

## 4. Design System & Visual Theme

**Theme:** Tech-Sophisticated — not an ordinary developer blog, not a cliché dark hacker aesthetic.
Target feel: *precision tool*, not decoration.

### Visual Principles (established, no need to offer alternatives)
- **Dark-first** color scheme
- **Typography**: one characterful display face + one clean body face
- **Spacing**: generous whitespace — don't cram
- **Animation**: purposeful, not decorative — scroll-triggered reveal, subtle hover states
- **Color**: details will be determined iteratively, but palette must be based on a dark background with 1-2 specific accent colors

### Unlocked Items (to be discussed per iteration)
- Specific hex values for the color palette
- Specific font family choices
- Number and order of sections
- Actual content (bio, project descriptions, copy)

---

## 5. Content Collections — Project Schema

Each project is stored as a `.md` file in `src/content/projects/`.

### Frontmatter Schema (mandatory to follow)

```yaml
---
title: "Project Name"
description: "Short description, one sentence (max 160 characters)"
tags: ["tag1", "tag2"]          # Technology / category
year: 2024                       # Year of completion
status: "completed"              # completed | ongoing | archived
featured: true                   # Appear in main section?
order: 1                         # Display order (ascending)
cover: "/images/projects/project-name.webp"
links:
  live: "https://..."            # Optional
  github: "https://..."          # Optional
  case_study: "https://..."      # Optional
---

Detailed project content details go here (used if there is a details page).
```

---

## 6. SEO & Metadata Requirements

**Every page MUST have:**

```html
<!-- Basic SEO -->
<title>{pageTitle} | Mahdi Imantaka Sutejo</title>
<meta name="description" content="{description}" />

<!-- Open Graph -->
<meta property="og:title" content="{pageTitle}" />
<meta property="og:description" content="{description}" />
<meta property="og:image" content="/images/og/default.png" />
<meta property="og:type" content="website" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
```

---

## 7. Performance Requirements

- **Lighthouse Score Target:** ≥ 95 in all categories
- Images must use `.webp` format, with explicit `width` and `height`
- Fonts must be self-hosted (no direct Google Fonts CDN)
- No render-blocking resources allowed
- Use Astro's built-in image optimization (`<Image />` from `astro:assets`)

---

## 8. Analytics

- Platform: **Umami** or **Plausible** (privacy-first, lightweight)
- Embed via script tag in `BaseLayout.astro`
- No cookie banner required (no PII tracking)

---

## 9. Iteration Workflow (Instructions for AI)

1. **Do not make visual design decisions unilaterally.** If something is not locked down (colors, fonts, copy), ask first or provide options.
2. **Always work from content collections.** Do not hardcode project data in components.
3. **New component = discuss first.** Before creating a new component, confirm its purpose and location.
4. **Naming consistency:** components in `PascalCase.astro`, utilities in `camelCase.ts`, section IDs in `kebab-case`.
5. **One PR = one concern.** Do not mix design changes with content updates.

---

## 10. Opening Sentence for AI at Every New Session

> "This is Mahdi's portfolio project. Read `CONTEXT.md` first. The stack is Astro + Tailwind. Content is managed via Markdown Content Collections. We work iteratively — ask before making decisions that are not locked down in this document."
