# SPEC-12: Digital Storefront Catalog Grid (`/store`)

## 1. Feature Goal & Intent
Build the commercial storefront page (`/store`) displaying premium Zorixel digital products (automation scripts, masterclass courses, luxury UI templates) with pricing badges (`₹` / `$`), category filters, Velvet Burgundy headers, and Electric Crimson buy buttons.

## 2. Technical Stack & Dependencies
- **Page:** `src/app/(site)/store/page.tsx`
- **Data:** Supabase `products` table / static production manifest

## 3. Verification & DoD
- Playwright 5-viewport screenshot sweep across storefront grid.
