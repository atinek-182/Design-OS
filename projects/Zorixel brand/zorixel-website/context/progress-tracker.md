# Progress Tracker & Session Memory: Zorixel Brand Website

## Current Status
- **Current Phase:** Phase 3 - Pre-Coding Research, Asset Preparation & Strategic Brand Audit (1-2 Week Planning Lock)
- **Current Milestone:** Gathering 3D Thumbnail Assets, Font WOFF2 Files, Lead Magnet Freebies, Supabase/Clerk Credentials & Running Pre-Write /roast Audits


## Complete 16-Spec Atomic Blueprint

| Spec ID | Feature Spec Name | Associated Route / Scope | Status | Verification Target |
|---------|-------------------|--------------------------|--------|---------------------|
| SPEC-01 | Global App Router Layout & OKLCH Theme | Shared Layout, `globals.css` | Spec Approved | Playwright 5-viewport |
| SPEC-02 | Floating Glass Navbar & Mobile Drawer | `src/components/navigation/Navbar.tsx` | Spec Approved | Playwright 5-viewport |
| SPEC-03 | Multi-Column Footer & Performance HUD | `src/components/navigation/Footer.tsx` | Spec Approved | Playwright 5-viewport |
| SPEC-04 | 3D Helical Spiral WebGL Shader Engine | `/` & `/components` (REF-002) | Spec Approved | Playwright 5-viewport |
| SPEC-05 | Havock & Rosehot Kinetic Typography | `/` (Home Hero & Manifesto) | Spec Approved | Playwright 5-viewport |
| SPEC-06 | Contextual Magnetic Custom Cursor | `src/components/common/CustomCursor.tsx` | Spec Approved | Playwright 5-viewport |
| SPEC-07 | Component Vault Catalog & Filters | `/components` | Spec Approved | Playwright 5-viewport |
| SPEC-08 | Live Code Inspector Drawer & Copy Engine | `/components` | Spec Approved | Playwright 5-viewport |
| SPEC-09 | Interactive OKLCH Token Theme Customizer| `/components` & `/` | Spec Approved | Playwright 5-viewport |
| SPEC-10 | Free Resource Hub Grid & Download Cards | `/resources` | Spec Approved | Playwright 5-viewport |
| SPEC-11 | Frictionless Lead Magnet Modal & Confetti| `/resources` & `/` | Spec Approved | Playwright 5-viewport |
| SPEC-12 | Digital Storefront Catalog Grid | `/store` | Spec Approved | Playwright 5-viewport |
| SPEC-13 | Product Slide-Over Detail Drawer & Tree | `/store` & `/store/[slug]` | Spec Approved | Playwright 5-viewport |
| SPEC-14 | Stripe Checkout API & Webhook Handler | `api/webhooks/stripe` | Spec Approved | Server Action Audit |
| SPEC-15 | Clerk Auth & Customer Dashboard | `/sign-in`, `/sign-up`, `/account` | Spec Approved | Playwright 5-viewport |
| SPEC-16 | Insane GSAP 3-Digit Rolling Counter Preloader | `src/components/common/GSAPPreloader.tsx` (REF-003) | Spec Approved | Playwright 5-viewport |
| SPEC-17 | Polygon Clip-Path Morphing Manifesto Stage | `/about` (REF-005) | Spec Approved | Playwright 5-viewport |
| SPEC-18 | Global SVG Liquid Stroke Page Transition | Global Provider (REF-006) | Spec Approved | Playwright 5-viewport |
| SPEC-19 | Dynamic Multi-Media Article Spotlight Stage | `/insights` (REF-007) | Spec Approved | Playwright 5-viewport |
| SPEC-20 | Inline Image-Span Kinetic Manifesto Statement | `/` (REF-008) | Spec Approved | Playwright 5-viewport |
| SPEC-21 | WebGL Shader Tagline Morph & Signature Footer | `/` & Global Footer (REF-009) | Spec Approved | Playwright 5-viewport |

## Reference Vault Catalog
| ID | Asset Name | Status | Destination |
|----|------------|--------|-------------|
| REF-001 | `zorixel_brand_identity_v3.md` | Ingested | Brand tokens, OKLCH palette, Havock/Rosehot font hierarchy |
| REF-002 | `shader-gallary/` (3D Spiral Gallery) | Ingested & Deconstructed | Applied to Home Hero (`/`) and Component Vault (`/components`) in SPEC-04 |
| REF-003 | `Insane-PRELOADER/` (GSAP Counter Preloader)| Ingested & Deconstructed | Applied to Site Initial Mount & Root Layout in SPEC-16 |
| REF-004 | `3d-scroll-effect/` (Curved 3D Filmstrip) | Ingested & Deconstructed | Proposed for Digital Storefront (`/store`) in SPEC-12 / TKT-12 |
| REF-005 | `Dragon-Scroll-Effect/` (Polygon Morphing) | Ingested & Deconstructed | Applied to Brand Manifesto Stage (`/about`) in SPEC-17 / TKT-17 |
| REF-006 | `SVG-Page-transition/` (SVG Stroke Sweep) | Ingested & Deconstructed | Applied to Global App Router Provider in SPEC-18 / TKT-18 |
| REF-007 | `Prototype-studio-rebuilt/` (Pinned Spotlight) | Ingested & Deconstructed | Applied to Article Teardowns (`/insights`) in SPEC-19 / TKT-19 |
| REF-008 | `text-image-line-reveal.html` (Inline Image Reveal) | Ingested & Deconstructed | Applied to Homepage Manifesto Section (`/`) in SPEC-20 / TKT-20 |
| REF-009 | `newmixcoffee.com/en` & `newmix recording .mp4` | Ingested & Deconstructed | Applied to Homepage Shader Heading & Signature Footer in SPEC-21 / TKT-21 |

## Living Session Log
- **2026-07-31:** Initialized `d:\AI-OS\projects\Zorixel brand\zorixel-website\` with 7-File Context System and initial templates.
- **2026-07-31:** Confirmed fullstack stack (Next.js 15, React 19, Clerk Auth, Supabase DB/Storage, Stripe Payments, GSAP, WebGL Shaders, 5-viewport responsive).
- **2026-07-31:** Confirmed Multi-Page Web Platform Architecture across 7 route groups.
- **2026-07-31:** Deconstructed REF-002 (`shader-gallary`). Operator confirmed Option C (Home Hero + Component Vault), Option A (UI component tile previews), and Option A (Full Interactive scroll/tilt physics).
- **2026-07-31:** Expanded macro specs into 15 atomic feature specs (`SPEC-01` through `SPEC-15`) in `context/specs/`. Enforcing 1-week planning mode lock.
- **2026-07-31:** Ingested & deconstructed REF-003 (`Insane-PRELOADER`). Added `SPEC-16: Insane GSAP 3-Digit Rolling Counter Preloader & Exit Transition Stage` to blueprint and updated reference manifest.
- **2026-07-31:** Operator approved Implementation Plan choices for REF-003 (Session-cached first visit, 5.0-5.5s duration, Universal 5-Viewport Mobile Responsiveness Mandate across ALL components, Rosehot tabular typography, Dark Luxury OKLCH tokens). Deconstructed all 16 specs into Matt Pocock engineering tickets under `.planning/tickets/`.
- **2026-07-31:** Ingested & deconstructed REF-004 (`3d-scroll-effect` Three.js Curved 3D Filmstrip Ribbon). Cataloged in manifest and presented placement choices to operator.
- **2026-08-01:** Verified public Notion page (`Backend-Tools-Stack-For-Modern-Developers-3659e413777e8030b8c5d4d713f6ee83`) via headless browser. Verified and integrated the 5-tool backend stack (Clerk Auth, Supabase DB/RLS, UploadThing, Resend, Trigger.dev) in `context/credentials-and-env-spec.md`.
- **2026-08-01:** Ran Stanford STORM 5-Lens Research Method across competitor benchmarks (Magic UI, Aceternity UI, Designjoy, shadcn/ui). Compiled self-contained HTML research report in `storm-reports/zorixel-website-features-competitors-briefing.html`.
- **2026-08-01:** Executed `TKT-01` (Wave 1): Scaffolded Next.js 15 App Router codebase, configured OKLCH design tokens in `globals.css`, linked `Nuqun`, `Havock`, and `Rosehot` `.woff2` font bindings in `layout.tsx`, built `page.tsx` hero, and verified `npm run build` compiled with 0 errors.





