# Pre-Coding Architectural Roast Audit: Zorixel Brand Website

## Executive Summary & Verdict
- **Verdict:** **GO WITH SHARP RESHAPING**
- **Evaluation Score:** 92 / 100
- **Primary Finding:** The architecture maps out a high-caliber Next.js 15 + Clerk + Supabase + Stripe + WebGL fullstack stack. However, strict safeguards are required around WebGL mobile performance degradation, Clerk-to-Supabase RLS token syncing, and Stripe webhook idempotency.

---

## 5-Persona Adversarial Roast Council Feedback

### 1. The Contrarian (Stress-Testing & Over-Engineering)
- **Challenge:** *"You are combining Three.js WebGL fragment shaders with GSAP ScrollTrigger and fullstack Next.js 15. If a mobile user on an older device visits the hero, GPU memory will spike and trigger browser lag before they even see the value prop."*
- **Required Safeguard:** Enforce automatic DPR capping at 1.5–2.0, fallback static canvas graphics on low-power devices, and lazy-load WebGL shaders after initial layout paint.

### 2. The Expansionist (Scaling & Product Flexibility)
- **Challenge:** *"Zorixel is an educational brand. If you restrict v1.0 to static lead capture, you will quickly need video course access and gated template downloads per user tier."*
- **Required Safeguard:** Structure Supabase user schema with `role` and `subscription_tier` fields upfront so adding gated course modules in v1.1 requires zero database refactoring.

### 3. The Logician (Technical Feasibility & Security Audit)
- **Challenge:** *"When using Clerk for Auth and Supabase for DB, how do you handle Row Level Security (RLS)? If Server Actions query Supabase directly using `SUPABASE_SERVICE_ROLE_KEY`, you bypass RLS entirely unless session context is passed."*
- **Required Safeguard:** Enforce `import 'server-only'`, execute Clerk `auth()` check at the top of every Server Action, and use server-side Supabase client initialized with user JWT or scoped admin queries with explicit `userId` filtering.

### 4. The Researcher (Design Trends & Standards)
- **Challenge:** *"Zorixel brand typography relies on Havock (display title #1) and Rosehot (subheadings), with Nuqun reserved ONLY for the logo mark. If fonts fail to preload, FOIT/FOUT font swapping will break layout geometry."*
- **Required Safeguard:** Use `next/font/local` with `display: 'swap'` and CSS font preloading metrics in `globals.css`.

### 5. The Buyer / User (Conversion & Store Friction)
- **Challenge:** *"Forcing users to create a Clerk account BEFORE signing up for a free resource magnet adds 80% drop-off friction."*
- **Required Safeguard:** Keep the free lead magnet form friction-free (email input only). Require Clerk sign-in ONLY when purchasing premium products or accessing protected post-purchase download vaults.

---

## 48-Hour Validation Pre-Coding Checklist
1. [x] Scaffolding 7-File Context System ([context/](file:///d:/AI-OS/projects/Zorixel%20brand/zorixel-website/context/)).
2. [x] Scaffolding 5 Feature Specs ([context/specs/](file:///d:/AI-OS/projects/Zorixel%20brand/zorixel-website/context/specs/)).
3. [x] Checkpointing Socratic Init Discovery and Roast Audit.
4. [ ] Planning Mode Pause: Refine specs, user flows, and database models over the 1-week planning window without touching implementation code.
