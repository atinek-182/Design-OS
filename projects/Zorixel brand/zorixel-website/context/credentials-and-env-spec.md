# Zorixel Web Platform: Backend Credentials & Environment Spec

This document details the configuration, environment variable contracts, and integration mechanics for the 5-tool backend stack specified in the Notion roadmap (`Backend-Tools-Stack-For-Modern-Developers-3659e413777e8030b8c5d4d713f6ee83`).

---

## 1. 🔐 Authentication: Clerk Auth (`SPEC-15` / `TKT-15`)

### Capabilities
- Frictionless Login, Signup, Social OAuth (GitHub, Google), User profile management.
- Multi-tenant organization support and Role-Based Access Control (RBAC).
- `httpOnly` secure session management & direct sync with Supabase RLS.

### Environment Variable Contract (`.env.local`)
```env
# Clerk Authentication Keys
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...

# Clerk Auth Route Customization
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/account
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/account
```

---

## 2. 🗄 Database & Backend: Supabase PostgreSQL (`SPEC-11` & `SPEC-14`)

### Capabilities
- Serverless PostgreSQL database hosting `subscribers`, `orders`, `downloads`, and `lead_magnets`.
- Row Level Security (RLS) policies scoped to Clerk `auth.jwt()` sub IDs.
- Storage buckets for asset delivery and public download caching.

### Environment Variable Contract (`.env.local`)
```env
# Supabase Database & API Keys
NEXT_PUBLIC_SUPABASE_URL=https://[YOUR-PROJECT-ID].supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOi...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOi...

# Supabase JWT Secret for Clerk Sync
SUPABASE_JWT_SECRET=your-supabase-jwt-secret-from-dashboard
```

---

## 3. 📤 File Uploads & Asset Delivery: UploadThing (`SPEC-10` & `SPEC-12`)

### Capabilities
- Type-safe drag & drop file upload dropzones in Next.js Server Components.
- Automatic image optimization, file type validation, and secure URL generation.
- Integrated upload middleware checking Clerk session tokens before processing.

### Environment Variable Contract (`.env.local`)
```env
# UploadThing Storage Secret & App ID
UPLOADTHING_SECRET=sk_live_...
UPLOADTHING_APP_ID=ut-app-...
```

---

## 4. 📧 Transactional Emails: Resend API (`SPEC-11` & `SPEC-14`)

### Capabilities
- Instant delivery of verification emails, welcome series, purchase invoices, and lead magnet download links.
- React Email framework integration (`@react-email/components`) styled with Zorixel brand HTML templates.

### Environment Variable Contract (`.env.local`)
```env
# Resend Email Delivery API Key & Sender Identity
RESEND_API_KEY=re_...
RESEND_FROM_EMAIL=Zorixel Team <notifications@zorixel.com>
```

---

## 5. ⚡ Background Jobs & Webhook Automation: Trigger.dev v3 (`SPEC-11` & `SPEC-14`)

### Capabilities
- Serverless background cron jobs for database cleanup and daily subscriber analytics.
- Long-running async task queues (e.g. generating custom ZIP design bundles on demand).
- Event-driven webhook listeners handling Stripe payment events without API timeout limits.

### Environment Variable Contract (`.env.local`)
```env
# Trigger.dev Background Job Engine Keys
TRIGGER_SECRET_KEY=tr_dev_...
TRIGGER_API_URL=https://api.trigger.dev
```

---

## 6. 💳 Payment Gateway: Stripe Checkout (`SPEC-14`)

```env
# Stripe Payment Keys & Webhook Secret
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
```
