# COMP-046 Side Navigation with Wipe Effect: Discovery & Adaptation Brainstorm Notes
Date: 2026-08-13 · Goal: Adapt COMP-046 GSAP Side Navigation for Vidya Dham Academy · Operator: Atinek Maurya

## Executive Summary & Key Decisions
- Component files copied into `reference/side-navigation-with-wipe-effectosmo/`.
- Target: Next.js 15 / React 19 TypeScript component (`.tsx`), GSAP animations, CSS Modules, `'use client'`, GPU cleanup via `gsap.context()`.

## Domain Vocabulary & Glossary (CONTEXT.md updates)
- **Side Navigation Wipe Overlay**: A full-screen side menu drawer with multi-layer background panel stagger transitions (`bg-panel` wipe effect).

## Q&A Log
### Q1 — Site Architecture & Page Map Strategy
- **Concept Explained**: High-converting educational academy site architecture balances a comprehensive multi-section landing page (acting as a master visual hub) with targeted sub-pages for dedicated academic programs, institutional background, and lead acquisition.
- **Captured Decision**: Option 1 (Multi-Page Portal with Master Landing Hub), with the Scholarship page removed as requested by operator.
- **Locked 5-Page Site Architecture Map**:
  1. Home / Master Landing Page (`/`)
  2. About Us & 7-Step Pedagogy (`/about`)
  3. Academic Programs (`/programs`)
  4. Toppers & Results Wall (`/results`)
  5. Contact & Branch Desk (`/contact`)

## Q2 — Side Navigation COMP-046 Link Items & Menu Layout
- **Captured Decisions**:
  - Drawer CTA Button: Option B (Keep menu drawer strictly for page navigation links, no CTA button inside drawer).
  - Drawer Footer Contact Desk: Deferred by operator for later specification.
  - Locked Navigation Links: `01. Home`, `02. About Us`, `03. Academic Programs`, `04. Results & Toppers`, `05. Contact & Admissions`.

## Q3 — Component Isolation & Dynamic Color Token Strategy
- **Captured Decisions**:
  - Isolate strictly the Menu Navigation Drawer + GSAP wipe transition animations (no Hero section code or unrelated links).
  - Dynamic Color Tokens: Bind colors to CSS custom properties that support automatic theme inversion (Light drawer vs Dark drawer) depending on the final Hero section background decision.
  - Feature Specification created at `context/specs/SPEC-COMP-046-side-navigation.md`.
  - Implementation code strictly LOCKED until explicit operator approval ('YES').

## Q4 — Mobile-First Architecture & Animation Safeguard Strategy
- **Captured Decisions**:
  - 95% Mobile Traffic Priority: All designs, layouts, and component references MUST be pre-flight audited for 390px mobile viewports first.
  - Hover Elimination: Wrap all `:hover` states inside `@media (hover: hover)` media queries. Replace mobile hover states with `:active { transform: scale(0.97); }` touch feedback.
  - Touch Target Enforcement: Minimum `48px x 48px` bounding area for all interactive elements.
  - STORM Research & Roast Council Verdict: **GO (100% Approved)** logged in `brainstorms/roast_2026-08-13_mobile_first_strategy.md` and `storm-reports/mobile-first-animation-architecture-briefing.html`.
  - Code Standards updated in `context/code-standards.md`.




