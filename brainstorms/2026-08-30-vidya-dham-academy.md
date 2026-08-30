# Vidya Dham Academy: Discovery & Architectural Brainstorm Notes
Date: 2026-08-30 · Goal: Build an Awwwards-tier flagship web application for Vidya Dham Academy under projects/Products/vidya-dham-academy

## Summary / Key Decisions
- **Target Directory**: `projects/Products/vidya-dham-academy/` (completely ignoring legacy `projects/Websites` folders).
- **Institutional Profile**: Single-branch, student-centric coaching academy for Classes 6 to 12.
- **Tech Stack**:
  - Frontend: Vite + React 19 + TypeScript + Tailwind CSS (v4 / v3.4 compliant) + GSAP 3 (ScrollTrigger, Flip) + Lenis smooth scrolling.
  - Backend/Auth Infrastructure (100% Free Forever Tier): Supabase JS Client integration for admissions/inquiries + Clerk auth hooks + Edge-ready for Cloudflare Pages / Workers.
  - Deployment Target: Cloudflare Pages (Static SPA client build with zero server maintenance costs).
- **Device & Ergonomic Strategy**:
  - **90% Mobile-First Ergonomics**: Touch-friendly tap targets (min 44px), thumb-zone bottom navigation / floating inquiry bar, fluid typography (`clamp()`), and silky hardware-accelerated touch animations with graceful fallback when `pointer: coarse` or `prefers-reduced-motion`.
- **Core Interactive Features**:
  1. **Scroll-Driven 7-Step Pedagogical Journey**: Pinned narrative sequence (Concept -> Explanation -> Examples -> Practice -> Test -> Analysis -> Improvement).
  2. **Interactive Grade & Course Matrix**: Class 6-8 (Middle School), Class 9-10 (Board Foundation), Class 11-12 (Senior Secondary PCM & PCB) with live subject syllabi and learning outcomes.
  3. **Interactive 5-Stage Admission Stepper**: Step-by-step guidance (Enquiry -> Counselling -> Course Selection -> Admission -> Learning Begins) with instant WhatsApp / Call integration and Cloudflare/Supabase inquiry capture.
  4. **Interactive Batch Schedule & Class Timetable Matrix**: Dynamic filterable matrix for Morning/Evening batches, Class 6-8, 9-10, 11-12 PCM/PCB with real-time seat availability indicator and batch booking action.
  5. **Campus & Learning Environment Showcase**: Dedicated transparent overview of physical classroom, doubt resolution tables, smart testing desks, and library zones.

## Q&A Log
### Q1 & Q2 — Content Sourcing & Tastemaker Grounding
- **Captured**: Content vault ingested from `D:\Design-OS\projects\Websites\vidya-dham-academy-legacy\ACADEMY_CONTENT_VAULT.md`. Applied Tastemaker rules for high-contrast academic dark/warm prestige with mathematical typography (Unbounded + Albert Sans / Inter + JetBrains Mono).

### Q3 & Q4 — Architecture, Deployment & Interactive Beats
- **Stack Decision**: Vite + React 19 + TypeScript + Tailwind CSS + GSAP + Lenis.
- **Deployment**: Cloudflare Pages / Workers (100% free forever, lightweight client-side).
- **Backend/Auth**: Supabase + Clerk integration points.
- **Audience Focus**: 90% Mobile-first responsive perfection.
- **Interactions**: Scroll-driven storytelling, interactive 7-stage pedagogy, interactive course matrix, 5-stage admission stepper.

### Q5 — Feature Confirmation Check
- **User Addition**: Added "Interactive Batch Schedule & Class Timetable Matrix" with grade, subject, time slot, and batch availability toggles.

## Next Milestone: Pre-Write /roast Council Audit & Implementation Plan
