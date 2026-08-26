# SPEC-15: Clerk Auth & Protected Customer Dashboard (`/account`)

## 1. Feature Goal & Intent
Implement Clerk Authentication (`@clerk/nextjs`) sign-in/sign-up pages (`/sign-in`, `/sign-up`) and the protected customer portal (`/account`). Displays user profile, purchased digital templates, invoice receipts, and secure S3 file download links.

## 2. Technical Stack & Dependencies
- **Auth Provider:** Clerk Auth (`ClerkProvider`, `auth()`, `currentUser()`)
- **Dashboard Route:** `src/app/(dashboard)/account/page.tsx`
- **Database:** Supabase `purchased_assets` joined on `user_id`

## 3. Verification & DoD
- Unauthenticated users redirected to `/sign-in`. Authenticated users access purchased downloads.
- Playwright 5-viewport screenshot sweep.
