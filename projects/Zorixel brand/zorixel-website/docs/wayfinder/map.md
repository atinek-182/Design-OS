# Wayfinder Multi-Session Index Map: Zorixel Brand Website

## Project Topology
- **Project Root:** `d:\AI-OS\projects\Zorixel brand\zorixel-website\`
- **Context Vault:** `context/`
- **Reference Vault:** `reference/` (with `MANIFEST.md`)
- **Knowledge Graph:** `.planning/graphs/`

## Multi-Page Sitemap Execution Map

```
zorixel-website/
├── Home Page (/)                       -> SPEC-01, SPEC-02
├── Component Vault (/components)       -> SPEC-03
├── Free Resources (/resources)         -> SPEC-04
├── Digital Store (/store)              -> SPEC-05
├── Product Details (/store/[slug])     -> SPEC-05
├── About & Manifesto (/about)          -> SPEC-01
├── Engineering Insights (/insights)    -> SPEC-01, SEO Context
└── Customer Dashboard (/account)       -> SPEC-05, Clerk Auth
```

## Feature Roadmap & Execution Waves
- **Wave 1 (Global Foundation & Shared Layout):** Next.js 15 App Router setup, shared navbar/footer, Clerk provider, OKLCH CSS tokens in `globals.css`.
- **Wave 2 (Home Page & Hero Stage):** WebGL Shader Canvas, Havock kinetic title reveal, featured teasers, manifesto section.
- **Wave 3 (Component Vault & Playground):** `/components` catalog grid, search/filter bar, interactive code inspector, live theme customizer.
- **Wave 4 (Lead Magnet & Free Resources):** `/resources` page, instant lead download modal, confetti trigger, Supabase `subscribers` table.
- **Wave 5 (Digital Storefront & Products):** `/store` catalog, `/store/[slug]` product details, Stripe Checkout API, Clerk-authenticated customer portal (`/account`).
- **Wave 6 (About, Insights & SEO):** `/about` brand manifesto, `/insights` technical blog, JSON-LD Schema markup, 5-viewport Playwright visual QA.
