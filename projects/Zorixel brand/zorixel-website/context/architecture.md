# Architecture & Stack Specs: Zorixel Brand Website

## Fullstack Technology Stack

| Layer | Technology | Purpose & Usage |
|-------|------------|-----------------|
| Framework | Next.js 15 (App Router) | Multi-page App Router (RSC, Server Actions, Dynamic Routes) |
| UI Library | React 19 + Tailwind / Vanilla CSS | Declarative UI components & OKLCH design tokens |
| Language | TypeScript 5+ (Strict) | Zero `any`, discriminated unions, Zod type inference |
| Authentication | Clerk Auth | Social login, session management, protected customer dashboard |
| Database & Storage | Supabase (PostgreSQL + S3 Storage) | Lead subscribers, order logs, product manifests, downloadable assets |
| Payments | Stripe API & Webhooks | Checkout Sessions, webhooks processing, payment receipts |
| Motion & Visuals | GSAP (ScrollTrigger) + Three.js Shaders | High-performance interactive scroll animations & WebGL canvas stage |
| Form & Validation | React Hook Form + Zod | Strict input parsing & Server Action mutation safety |
| SEO & GEO | Next.js Metadata API + JSON-LD Schema | Search engine optimization & AI engine citations |

## Multi-Page Route Architecture (Sitemap)

```
zorixel-website/src/app/
├── (site)/
│   ├── page.tsx                       # Home: Hero stage, manifesto, featured teasers
│   ├── about/
│   │   └── page.tsx                   # About & Philosophy: Brand story, tech stack, agency inquiry
│   ├── components/
│   │   ├── page.tsx                   # Component Vault: Catalog grid, search, filters
│   │   └── [category]/[slug]/
│   │       └── page.tsx               # Dedicated Component Details & Code Inspector
│   ├── resources/
│   │   └── page.tsx                   # Free Resources: Lead magnets, template download hub
│   ├── store/
│   │   ├── page.tsx                   # Digital Storefront: Full product catalog & pricing
│   │   └── [slug]/
│   │       └── page.tsx               # Dedicated Product Details Page (specs, FAQs, checkout)
│   ├── insights/
│   │   ├── page.tsx                   # Engineering Insights & Blog: AIOS guides, UI tutorials
│   │   └── [slug]/
│   │       └── page.tsx               # Article Page with JSON-LD Schema & GEO citations
│   └── success/
│       └── page.tsx                   # Order Confirmation & Receipt Page
├── (auth)/
│   ├── sign-in/[[...sign-in]]/page.tsx # Clerk Sign-In Route
│   └── sign-up/[[...sign-up]]/page.tsx # Clerk Sign-Up Route
├── (dashboard)/
│   └── account/
│       └── page.tsx                   # Customer Portal: Purchased products & download links
└── api/
    └── webhooks/
        ├── stripe/route.ts            # Stripe Checkout Webhook
        └── clerk/route.ts             # Clerk User Webhook
```

## System Invariants (Mandatory Code Rules)

1. **Server Action Protection:**
   - Every Server Action file MUST include `import 'server-only'`.
   - Every mutation MUST validate input using Zod schemas (`schema.parseAsync()`).
   - Authenticated endpoints MUST verify user session via Clerk `auth()`.

2. **Stripe Webhook Verification:**
   - Webhook endpoints MUST verify signatures using `stripe.webhooks.constructEvent()` before executing database transactions.

3. **Design Token Uniformity:**
   - Colors MUST reference OKLCH/CSS tokens in `globals.css`. Direct inline hex values are strictly forbidden.

4. **Multi-Page Layout Transitions:**
   - Shared layout wrappers (`src/app/(site)/layout.tsx`) manage global navigation, custom magnetic cursor, OKLCH theme provider, and page transition motion animations.
