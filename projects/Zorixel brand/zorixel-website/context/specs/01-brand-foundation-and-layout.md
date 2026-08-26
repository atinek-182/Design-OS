# SPEC-01: Brand Foundation & Global Layout Architecture

## 1. Feature Goal & Intent
Establish the global Next.js 15 App Router structure, OKLCH design tokens in `globals.css`, font loading pipeline (`Nuqun`, `Havock`, `Rosehot`, `AICON`), Clerk authentication provider wrapper, and 5-viewport responsive Navigation Header and Footer components.

## 2. Technical Stack & Dependencies
- **Framework:** Next.js 15 App Router (`src/app/layout.tsx`)
- **Styling:** OKLCH design tokens (`Obsidian Midnight`, `Warm Linen Cream`, `Velvet Burgundy`, `Electric Crimson`, `Vintage Ochre Gold`)
- **Fonts:** Custom `@font-face` bindings for Havock, Rosehot, AICON, and SVG Nuqun logo
- **Auth:** `@clerk/nextjs` (ClerkProvider wrapper)

## 3. UI Component Breakdown & Viewport Choreography
- **Navbar (`src/components/navigation/Navbar.tsx`):**
  - Nuqun SVG logotype on the left.
  - Navigation links: Home, Components, Resources, Digital Store.
  - Clerk Auth Status (Sign In button / UserButton menu).
  - Responsive Mobile Hamburger Drawer on viewports < 768px.
- **Footer (`src/components/navigation/Footer.tsx`):**
  - Brand tagline, social link matrix, newsletter signup field, copyright notice.

## 4. Security & Server Invariants
- `ClerkProvider` configured with strict origin domain restrictions.
- Zero un-tokenized inline hex values in layout CSS.

## 5. Verification & DoD (Definition of Done)
- Playwright 5-viewport screenshot sweep across Desktop (1920x1080), Laptop (1440x900), Tablet (834x1194), Mobile Landscape (844x390), and Mobile Portrait (390x844).
- Zero console error logs during server rendering.
