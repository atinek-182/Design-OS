# SPEC-04: Lead Capture & Free Resource Hub

## 1. Feature Goal & Intent
Implement a high-converting lead magnet capture flow granting visitors instant access to free Zorixel UI templates, design tokens, and automation scripts in exchange for email newsletter subscription.

## 2. Technical Stack & Dependencies
- **Form Handling:** React Hook Form + Zod schema validation
- **Backend Mutation:** Next.js Server Action (`subscribeLeadAction`)
- **Database Storage:** Supabase `subscribers` table & `lead_downloads` audit log
- **Security:** `import 'server-only'`, Rate limiting, Zod email parsing

## 3. UI Component Breakdown & Viewport Choreography
- **Resource Hero Grid:** Cards displaying free resource kits (e.g. "Zorixel OKLCH Token Kit", "Next.js 15 Starter Template").
- **Email Lead Modal (`src/components/lead-magnet/LeadModal.tsx`):**
  - High-converting headline, email input field, "Get Instant Access" CTA button.
  - Success State: Confetti animation + direct S3 download link + confirmation toast.

## 4. Security & Server Action Contract
```typescript
import 'server-only';
import { z } from 'zod';

export const SubscribeSchema = z.object({
  email: z.string().email(),
  resourceId: z.string().min(1),
});
```

## 5. Verification & DoD
- Submitting valid email inserts record into Supabase `subscribers` table and yields immediate download link.
- Playwright 5-viewport screenshot sweep verifying modal layout and form validation state.
