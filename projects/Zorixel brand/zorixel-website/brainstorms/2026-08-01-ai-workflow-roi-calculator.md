# AGY-FEAT-01: AI Workflow ROI & Bottleneck Calculator Discovery Notes (/grill-me)
Date: 2026-08-01 · Goal: Deep design & specification of the AI Workflow ROI Calculator for client acquisition · Operator: Atinek Maurya

## Executive Summary & Feature Objectives
- **Target Route**: Primary Section on `/services` & `/work` + Direct Navbar/Hero Shortcut (`/services#roi` or `/roi`).
- **Primary Business Goal**: Convert business owners & founders by demonstrating direct financial savings from AI automations ($1,500–$3,000+ Sprints).
- **UX Strategy**: Frictionless 3-step interactive visual wizard + open-ended custom problem input (Freedom for clients to specify unique business bottlenecks).
- **Sales Psychology Mandate**: Value-First Price Lock. Show ONLY positive financial savings & efficiency gains on screen. Hide exact price tag until prospect watches your personalized 2-minute Loom Video Audit!
- **Automated Lead Intake & CRM Pipeline**: 1-Click Async Request → Supabase DB + Resend Email Notification → Automated Google Sheets Lead Tracker & Status Pipeline (`gws` / Trigger.dev).
- **Humanized Voice**: All email notifications and messages must sound 100% personalized, human, and authentic (matching brand voice SOP).
- **Other Features Staged as Pending**:
  - `AGY-FEAT-02`: 60-Second Web Audit & Async Loom Request Widget `[PENDING]`
  - `AGY-FEAT-04`: Frictionless 1-Click Notion Proposal Generator `[PENDING]`
  - `AGY-FEAT-05`: Agentic SEO & Case Study Schema Markup `[PENDING]`

## Q&A & Socratic Discovery Log

### Q1 — Placement & Navigation Architecture
- **Concept Explained**: Placement strategy balancing discoverability for new visitors with direct linkability for outreach DMs.
- **User Feedback**: Operator wanted seamless navigation so new clients discover the feature effortlessly without feeling bored or lost.
- **Captured Decision**: **Hybrid Placement Architecture**
  - **Embedded Hub**: Main interactive calculator section embedded directly on `/services` and `/work`.
  - **Global Header Badge & Direct Link**: Distinct "AI ROI Calculator" pill in the navbar and a homepage hero callout that smooth-scrolls or routes directly to the calculator.
- **Rationale**: Guarantees 100% discoverability for new visitors landing anywhere on the site, while giving you a standalone link (`zorixel.com/roi`) for async DM client outreach.

### Q2 — Visual Flow & Custom Bottleneck Freedom
- **Concept Explained**: 3-step visual stepper vs single-screen control center.
- **User Feedback**:
  - Selected **Option 1 (3-Step Visual Stepper Card)**.
  - Visual styling design locked under `[PENDING OPERATOR REFERENCE]`.
  - Mandatory Feature Addition: Pre-set bottleneck badges alone are NOT enough. Every business client has unique problems. Must provide an open-ended input field where clients can type their specific business bottlenecks, custom workflows, and exact automation needs (*"Write what their problem and what they need"*).
- **Captured Decision**: **3-Step Stepper + Custom Problem & Workflow Input**
  - **Step 1**: Pre-set Industry & Bottleneck Chips + **Custom Bottleneck & Need Input Box** (*"Describe your specific workflow or problem here..."*).
  - **Step 2**: Live Team Size & Hourly Cost Sliders.
  - **Step 3**: Instant Animated ROI Card (Hours/Year Saved, $ Saved/Year) + 1-Click Proposal Request Button incorporating their custom problem text into your async proposal.

### Q3 — Post-Calculation Proposal Action & Google Sheets CRM Pipeline
- **Concept Explained**: 1-click async proposal submission vs downloadable PDF vs calendar booking.
- **User Feedback**:
  - Selected **Option 1 (1-Click Async Proposal Request)**.
  - Mandatory Pipeline Feature: Must automatically log every submission into an organized Google Sheet CRM tracker (storing Client Name, Email, Business Name, Selected Bottlenecks, Custom Problem Text, Team Sliders, Calculated Savings, Timestamp, and Deal Status: `New Lead` -> `Loom Sent` -> `Proposal Sent` -> `Closed Won`).
- **Captured Decision**: **1-Click Async Request + Automated Google Sheets Lead Tracker**
  - Resend dispatches instant email notification to Atinek Maurya with exact bottleneck text & calculations.
  - Resend dispatches client confirmation email (*"Atinek will review your bottleneck and send a custom Loom video / proposal within 24 hrs"*).
  - Supabase DB logs the lead entry.
  - Trigger.dev v3 / `gws` integration automatically appends a new row to your Google Sheets Lead CRM, enabling live deal status tracking.

### Q4 — Brand Styling, Price-Lock Strategy & Humanized Voice
- **Concept Explained**: Zorixel Brand v3.0 OKLCH color math & font hierarchy.
- **User Feedback**:
  - Selected **Option 1 (Official Zorixel Brand Tokens & Anti-Slop Rules)**: `Havock` title, `Rosehot` text, `Space Mono` tabular numbers, solid OKLCH fills (`#0D0E12`, `#6D001A`, `#D61C2C`), zero gradients, zero glassmorphism, zero emojis. Layout references `[PENDING OPERATOR REFERENCE]`.
  - **Sales Psychology Mandate**: Do NOT reveal the actual price tag on the calculator. Show ONLY positive financial savings (Hours Saved, $ Saved/Year) to stack positive value. The price tag is revealed ONLY inside the personalized Loom video audit / Notion proposal after they are fully educated.
  - **Humanized Communication**: All auto-generated emails and receipt messages must be 100% humanized, warm, and personal (operator will add custom message drafting skill later).
- **Captured Decision**: **Brand Tokens Locked + Value-First Price Delay + Humanized Voice**
