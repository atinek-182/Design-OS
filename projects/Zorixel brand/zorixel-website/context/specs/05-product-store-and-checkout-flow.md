# SPEC-05: Digital Product Store & Stripe Checkout Integration

## 1. Feature Goal & Intent
Build the commercial storefront displaying premium Zorixel digital products (automation scripts, masterclass courses, luxury UI templates) with product drawer details, Clerk-authenticated access, and Stripe Checkout integration.

## 2. Technical Stack & Dependencies
- **Payment Engine:** Stripe Checkout SDK & Webhooks API (`src/app/api/webhooks/stripe/route.ts`)
- **Database Model:** Supabase `products`, `orders`, `purchased_assets`
- **Authentication:** Clerk Auth (`auth()` session verification for protected file downloads)

## 3. UI Component Breakdown & Viewport Choreography
- **Store Product Grid (`src/components/store/ProductGrid.tsx`):**
  - Feature badges, pricing tags (`₹` / `$`), Velvet Burgundy accents, Electric Crimson buy buttons.
- **Product Detail Drawer:** Slide-over modal showing full feature breakdown, included files, live video preview, and FAQ list.
- **Checkout Action:** Next.js Server Action invoking `stripe.checkout.sessions.create()`.
- **Order Success Page (`src/app/(store)/success/page.tsx`):** Displays purchase receipt and authenticated download buttons for S3 asset vaults.

## 4. Security & Webhook Requirements
- Stripe webhook signature verification (`stripe.webhooks.constructEvent()`) on `checkout.session.completed` events.
- Idempotent order fulfillment in Supabase to prevent duplicate processing.

## 5. Verification & DoD
- Test Stripe purchase flow in test mode completes and grants file download permissions in Supabase.
- Playwright 5-viewport screenshot sweep across storefront and success receipt page.
