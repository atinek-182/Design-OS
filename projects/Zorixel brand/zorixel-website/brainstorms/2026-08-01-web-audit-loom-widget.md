# AGY-FEAT-02: 60-Second Web Audit & Async Loom Request Widget Discovery Notes (/grill-me)
Date: 2026-08-01 · Goal: Deep design & specification of the 60-Second Web Audit & Async Loom Request Widget for high-ticket client acquisition · Operator: Atinek Maurya

## Executive Summary & Feature Objectives
- **Target Route**: Standalone Page (`/audit`) + Homepage Hero Section + Global Navbar/Floating Trigger.
- **Primary Business Goal**: Capture high-intent leads (UI design, AI automation, web redesign prospects) by offering a personalized 2–3 minute Loom video audit pinpointing conversion & workflow bottlenecks.
- **UX Strategy**: Frictionless 2-step audit request widget with live website URL input + open-ended custom problem textarea.
- **Sales Psychology Mandate**: Value-First Price Lock. Show positive audit value proposition (e.g. "Uncover 3 conversion & automation leaks"); hide exact sprint price tags ($1,500–$3,000) until the personalized Loom audit / Notion proposal.
- **Automated Lead Intake & CRM Pipeline**: 1-Click Submission → Supabase DB + Instant Resend Email Notification → Automated Google Sheets Lead Tracker & Status Pipeline (`gws` / Trigger.dev).
- **Humanized Voice**: All email notifications and receipts sound 100% personalized, warm, and human.

## Domain Vocabulary & Glossary (CONTEXT.md updates)
- **Web Audit Widget**: An interactive lead-generation component allowing prospects to submit their website URL and specific bottlenecks to request a custom 60-second Loom breakdown video.

## Q&A Log

### Q1 — Placement & Navigation Architecture
- **Concept Explained**: Async video audit widget placement strategy balancing social DM linkability (`zorixel.com/audit`) with homepage hero discoverability and non-bloated header navigation.
- **User Feedback**: User chose **Option 1 (Hybrid Multi-Entry Strategy)** with explicit constraint: *"make sure the nav doesnt look like bloated with many options"*.
- **Captured Decision**: **Hybrid Placement Architecture with Minimalist Compact Navbar**
  - **Standalone Route**: Dedicated `/audit` page for social media DMs, outreach campaigns, and direct links.
  - **Homepage Hero Embed**: Interactive domain input card embedded cleanly on `/` hero section.
  - **Minimalist Global Header Action**: Single sleek accent CTA pill (*"Free Audit"* or quick icon badge) in navbar to prevent visual clutter; navbar items kept strictly focused (`/services`, `/work`, `/resources`, `/audit`).
- **Rationale & Trade-offs**: Gives 100% conversion coverage and direct social linkability without cluttering the global header layout.

### Q2 — Form Architecture, Custom Bottleneck Freedom & Micro-Interactions
- **Concept Explained**: 2-step audit request input flow balancing low initial friction with custom bottleneck freedom, 48-hour turnaround promise, and Awwwards-level visual feedback.
- **User Feedback**: User chose **Option 1** with two mandatory updates:
  1. Change the Loom video delivery time promise from **24 hours to 48 hours** everywhere.
  2. Integrate top matching components from the workspace 300+ catalog (Aceternity Terminal, Placeholders & Vanish Input, Aceternity Animated Modal, Aceternity File Upload).
- **Captured Decision**: **2-Step Card Stepper + 48-Hour Turnaround Promise + Animated Terminal Scanner**
  - **Step 1 (Input Stage)**: Live Website URL (`Placeholders and Vanish Input` — **Optional/Preferred**) + Social Media Handle (**Optional**) + Brand Deck File Upload (`Aceternity File Upload` — **Optional**) + Contact Email/WhatsApp + Pre-set Bottleneck Chips + **Open-ended Custom Bottleneck Textarea** (*"Tell Atinek what specific problem or bottleneck you want fixed..."*).
  - **Step 2 (Visual Scan Stage)**: 2.5-second dark luxury terminal scan animation (`Aceternity Terminal`) showing simulated checks (*"[1/3] Fetching page DOM & Brand Deck...", "[2/3] Analyzing CTA friction...", "[3/3] Scanning manual workflow leaks..."*).
  - **Confirmation Stage**: Value-First Confirmation Card featuring strict 48-hour delivery promise: *"Audit request logged! Atinek Maurya will review your site/deck and send a personalized 60-sec Loom breakdown video within 48 hours."*
- **Rationale & Trade-offs**: Provides high perceived value and visual wow factor while giving Atinek Maurya a comfortable 48-hour window for async Loom video recording.

### Q3 — 300+ Component Selection & Universal Flexible Lead Input Blueprint
- **Concept Explained**: Selection of premium UI components from our 300+ catalog + universal input flexibility rule across all lead-generation tools.
- **User Feedback**:
  - **Approved Components**:
    1. **Domain Input Field**: **`[Aceternity UI] Placeholders and Vanish Input`** (`https://ui.aceternity.com/components/placeholders-and-vanish-input`).
    2. **Terminal Scan Stage**: **`[Aceternity UI] Terminal`** (`https://ui.aceternity.com/components/terminal`).
    3. **Form Fields & Labels**: **`[Aceternity UI] Signup Form`** (`https://ui.aceternity.com/components/signup-form`).
  - **Rejected Components**:
    - Disliked `Aceternity Animated Modal` -> Presenting **`[Animate UI React] Dialog`** and **`[Vengence UI] Search Modal`** as alternatives.
    - Disliked `Aceternity File Upload` -> Presenting **`[Animate UI React] Files`** and Custom Tailwind Dropzone as alternatives.
  - **Universal Mandate — `[PENDING OPERATOR REFERENCE HOLD]`**:
    - Every component slot across ALL features (`AGY-FEAT-01`, `AGY-FEAT-02`, `AGY-FEAT-04`, etc.) MUST maintain an open **`[PENDING OPERATOR REFERENCE HOLD]`** status.
    - Atinek Maurya has full priority to provide custom visual references (URLs, screenshots, or videos) at any time. Catalog components serve as backstops if no reference is provided.
  - **Universal Lead Input Blueprint Mandate**:
    1. **Website URL**: Optional (Preferred).
    2. **Social Media Handle**: Optional (Instagram / X / LinkedIn / YouTube).
    3. **Brand Deck / PDF Upload**: Optional (`.pdf`, `.doc`, `.png`, `.zip`).
    4. **Custom Bottleneck Freedom Textarea**: Required (*"Describe your specific bottleneck or goals..."*).
- **Captured Decision**: **Universal Flexible Lead Input Blueprint + Catalog Backstops + `[PENDING OPERATOR REFERENCE HOLD]` Rule**
  - Modal/Drawer Slot: **`[Animate UI React] Dialog`** / **`[Vengence UI] Search Modal`** `[PENDING OPERATOR REFERENCE HOLD]`
  - URL Input Slot: **`[Aceternity UI] Placeholders and Vanish Input`** `[PENDING OPERATOR REFERENCE HOLD]`
  - Terminal Scan Slot: **`[Aceternity UI] Terminal`** `[PENDING OPERATOR REFERENCE HOLD]`
  - File Dropzone Slot: **`[Animate UI React] Files`** / Custom Tailwind Dropzone `[PENDING OPERATOR REFERENCE HOLD]`
  - Form Fields Slot: **`[Aceternity UI] Signup Form`** `[PENDING OPERATOR REFERENCE HOLD]`

### Q4 — Copywriting, Headline Hierarchy & Brand Messaging Tone
- **Concept Explained**: Positioning copy balancing AI automations, business workflows, and conversion design with a humanized founder authority voice.
- **User Feedback**: User selected **Option 2 (Business Bottleneck & Automation Freedom)** with explicit wording tweak: *"change atinek maurya to founder"*.
- **Captured Decision**: **Founder Business Bottleneck & Automation Freedom Copy Stack**
  - **Main Headline (`Havock`)**: *"Turn your manual business bottlenecks into automated revenue systems."*
  - **Subheadline (`Rosehot`)**: *"Send your business problem, website, or brand deck. Get a personalized 60-second video teardown from our Founder revealing exact AI workflow automations and design quick wins within 48 hours."*
  - **CTA Button**: *"Claim free 60-sec teardown →"*
### Q5 — Post-Submission Confirmation Screen & Dynamic Resource Engine
- **Concept Explained**: Confirmation card UX balancing 48-hour delivery promise with dynamic, contextual resource recommendations.
- **User Feedback**: User selected **Option 1** with two key requirements:
  1. Use **"Atinek"** explicitly on the confirmation message.
  2. Do **NOT hardcode** specific freebie resource names. Build a dynamic backend recommendation engine matching lead bottleneck inputs to relevant free resources from the Supabase catalog.
- **Captured Decision**: **Personalized Confirmation + Dynamic Contextual Resource Engine**
  - **Primary Card**: *"Audit request logged! Atinek will review your site/deck and send a personalized 60-second video teardown to your inbox within 48 hours."*
  - **Secondary Action**: *"Explore recommended free tools and guides for your workflow →"* (Dynamic grid displaying top 2 matching freebies based on lead's selected bottleneck chips and problem text, backed by Supabase `resources` table in `SPEC-10`).
- **Rationale & Trade-offs**: Prevents stale hardcoded copy, adapts automatically as new resources launch, and delivers personalized value to every prospect.

---

## 🥊 Detailed Roast Council Audit & Technical Solutions

### 1. The Contrarian (Red Team) — Risks & Solutions
- **Risk A (SLA Overload / Bandwidth Crash)**: If 15+ leads submit in a single day, recording 15 separate Loom videos will breach the 48-hour SLA.
  - **Detailed Solution**: Implement a **Dynamic Daily Intake Counter** in Supabase (`daily_audit_limit: 5`). Display a live badge on the form: *"Today's free audit slots: 2/5 remaining"*. When capped, the form seamlessly shifts to a Waitlist State: *"Today's 5 slots are filled. Reserve priority slot #1 for tomorrow (guaranteed delivery within 48 hours of slot opening)."*
- **Risk B (File Storage Inflation & Malware)**: Open file uploads (`.pdf`, `.zip`, `.doc`) invite malware and storage costs.
  - **Detailed Solution**: Enforce strict 10MB limits and MIME-type validation (`.pdf`, `.doc`, `.docx`, `.png`, `.jpg`, `.zip`) on UploadThing. Auto-expire temporary brand deck files after 30 days in Supabase Storage.
- **Risk C (Bot Spam & Invalid Emails)**: Fake form submissions filling up your CRM.
  - **Detailed Solution**: Protect form with Cloudflare Turnstile and Zod syntax validation before executing Resend emails or Google Sheets appends.

### 2. The Expansionist (Bull) — Opportunities & Solutions
- **Opportunity A ($3,000 Sprint Upsell Bridge)**: Turning free video audits into paid deals.
  - **Detailed Solution**: Include a prominent CTA in the Loom video description: `zorixel.com/proposal?lead=[ID]`. This opens their personalized Notion proposal (`AGY-FEAT-04`) featuring their custom ROI numbers, audit summary, and $1,500 deposit checkout button.
- **Opportunity B (Public Content Teardown Engine)**: Leveraging audits for marketing content.
  - **Detailed Solution**: Add an optional checkbox: `[x] Allow Zorixel to feature an anonymized clip of this audit in our Resource Hub / YouTube`. Turn top teardowns into public content carousels.

### 3. The Logician (First Principles) — Architecture & Solutions
- **Architecture A (Input State Machine)**: Handling 4 input combinations cleanly.
  - **Detailed Solution**: Program 4 state branches in Zod & UI:
    - *Branch A (URL + Text)*: Terminal logs `"Fetching DOM...", "Analyzing CTA friction...", "Scanning automation gaps..."`
    - *Branch B (Deck + Text)*: Terminal logs `"Parsing Brand Deck...", "Analyzing asset structure...", "Scanning automation opportunities..."`
    - *Branch C (Social + Text)*: Terminal logs `"Fetching Social Profile...", "Analyzing audience conversion funnel...", "Checking workflow gaps..."`
    - *Branch D (Text-only)*: Terminal logs `"Parsing custom bottleneck notes...", "Mapping workflow logic...", "Calculating time savings..."`
- **Architecture B (Delivery Reliability)**: Webhook & email failures.
  - **Detailed Solution**: Trigger.dev v3 background worker handles Resend email dispatch with 3 retries. Supabase logs `email_sent` and `sheet_synced` status flags.

### 4. The Researcher (Evidence) — Benchmarks & Solutions
- **Benchmark A (Video Drop-Off Rate)**: Long videos get ignored.
  - **Detailed Solution**: Enforce a strict 60-to-90 second video framework: 00:00–00:15 (Hook & intro), 00:15–00:45 (Top 2 friction points & 1 AI quick-win), 00:45–01:00 (CTA to check proposal link).
- **Benchmark B (Email Deliverability)**: Raw Loom links flagged as spam.
  - **Detailed Solution**: Resend dispatches clean HTML emails with DKIM/SPF domain verification, embedding an animated GIF thumbnail linked to Loom rather than a raw spammy URL.

### 5. The Buyer (Voice of Customer) — Trust & Solutions
- **Objection A ("Is this a real video or a bot script?")**:
  - **Detailed Solution**: Add a 5-second video snippet of Atinek waving near the form header with caption: *"Every video is recorded personally by Atinek Maurya within 48 hours."*
- **Objection B ("Will I get spammed with sales calls?")**:
  - **Detailed Solution**: Add a clear micro-badge below the form: *"Zero sales calls. Zero spam. Just your 60-sec Loom video delivered to your inbox."*





