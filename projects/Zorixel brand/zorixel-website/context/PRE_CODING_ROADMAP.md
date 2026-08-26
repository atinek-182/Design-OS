# Zorixel Website: 1-to-2 Week Pre-Coding Focus & Research Roadmap

## Overview
This document outlines the strategic priorities, asset collection checklists, third-party platform configuration steps, and design research tasks for the 1–2 week pre-coding window before starting Next.js implementation.

---

## WEEK 1: High-Leverage Asset Collection & Design Foundation

### 1. Typography & Brand Vector Assets
- [x] **Custom Font Files (`.woff2`):**
  - Verified that `Nuqun-Regular.woff2`, `Havock.woff2`, and `Rosehot.woff2` are converted and placed in `public/fonts/`.
  - Created `public/fonts/fonts.css` with `@font-face` definitions using `font-display: swap`.
- [x] **SVG Logomark & Icons:**
  - Exported `zorixel_logo_solid_white.svg` and `zorixel_logo_solid_dark.svg` into `public/vectors/`.
  - Created brand mark icon `favicon.svg` in `public/vectors/`.

### 2. 3D Stage Card Previews (`REF-002` & `REF-004`)
- [x] **3D Helical Spiral Hero Cards (`REF-002` — 10 Preview Screenshots):**
  - Rendered 10 high-resolution `16:9` preview card graphics (`public/previews/spiral-cards/`) representing Zorixel UI components, template starters, and design kits.
- [x] **3D Curved Ribbon Freebie Tiles (`REF-004` — 7 Free Resource Cards):**
  - Designed 7 distinct 16:9 thumbnail previews (`public/previews/ribbon-freebies/`) for the Free Resource Hub:
    1. Next.js 15 Starter Kit & OKLCH System
    2. AI OS Workflow Architecture Map
    3. Zorixel Master Prompt Stack v3
    4. Figma Design System Component Vault
    5. GSAP & ScrollTrigger Animation Cheatsheet
    6. Tailwind v4 Token Design Tokens
    7. Viral Carousel Copy & Layout Outlines

### 3. Lead Magnet Asset Files (`SPEC-10` & `SPEC-11`)
- [x] **Freebie Downloads:**
  - Packaged downloadable ZIP & PDF files (`zorixel-nextjs15-starter-v1.zip`, `zorixel-aios-prompt-stack-v3.pdf`) under `public/downloads/`.

---

## WEEK 2: Strategy, Platform Credentials & Pre-Write /roast Audit

### 1. Account Credentials & Environment Setup
- [ ] **Clerk Authentication Setup (`SPEC-15`):**
  - Create a Clerk application in Clerk Dashboard ("Zorixel Web Platform").
  - Obtain `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY`.
- [ ] **Supabase Database & Storage (`SPEC-11` & `SPEC-14`):**
  - Create Supabase project ("zorixel-db").
  - Obtain `NEXT_PUBLIC_SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY`.
  - Create `subscribers` and `orders` tables with Row Level Security (RLS) policies.
- [ ] **Stripe Checkout Test Keys (`SPEC-14`):**
  - Create test mode API keys (`STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`) in Stripe Dashboard.

### 2. Social OpenGraph & SEO Meta Research
- [ ] **OpenGraph Cards (`og-image.png`):**
  - Design a 1200x630 social share card featuring the Obsidian Midnight theme, `Havock` typography, and Velvet Burgundy accents.
- [ ] **JSON-LD Schema Markup:**
  - Prepare structured data for `Organization`, `SoftwareApplication`, and `EducationalResource`.

### 3. Pre-Write `/roast` Council Audit
- [ ] Run an adversarial 5-persona audit (Contrarian, Expansionist, Logician, Researcher, Buyer) on the complete 16-spec blueprint to identify friction points, conversion traps, or missing edge cases before code execution.
