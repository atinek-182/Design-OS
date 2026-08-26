# SPEC-13: Product Slide-Over Detail Drawer & File Tree

## 1. Feature Goal & Intent
Implement the slide-over product detail drawer (`ProductDrawer.tsx`) displayed when clicking a store product. Shows video walkthrough loop, included file tree structure, features list, FAQs accordion, and Clerk/Stripe checkout button.

## 2. Technical Stack & Dependencies
- **Component:** `src/components/store/ProductDrawer.tsx`
- **Routing:** Supported via URL deep-linking (`/store/[slug]`) and slide-over state

## 3. Verification & DoD
- Playwright 5-viewport screenshot sweep.
