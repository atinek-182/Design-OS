# SPEC-01: Global App Router Layout & OKLCH Theme Architecture

## 1. Feature Goal & Intent
Establish the global Next.js 15 App Router root layout (`src/app/layout.tsx`), OKLCH design tokens in `globals.css`, font loading pipeline (`Nuqun`, `Havock`, `Rosehot`, `AICON`), and theme context provider.

## 2. Technical Stack & Dependencies
- **Framework:** Next.js 15 App Router
- **Design Tokens:** OKLCH palette (`Obsidian Midnight`, `Warm Linen Cream`, `Velvet Burgundy`, `Electric Crimson`, `Vintage Ochre Gold`)
- **Fonts:** Custom `@font-face` bindings with `display: 'swap'`

## 3. Scope & Verification
- Validated CSS variables in `globals.css` with zero inline hex leaks.
- 5-Viewport Playwright screenshot sweep verifying background rendering and font loading.
