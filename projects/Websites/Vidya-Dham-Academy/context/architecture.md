---
title: Vidya Dham Academy - Architecture Context
domain: architecture
summary: Architectural boundaries, tech stack, and invariants for Vidya Dham Academy.
critical_directives:
  - Follow document guidance without bypassing established safeguards.
section_outline:
  - Architecture Context
  - Stack
  - System Boundaries
  - Storage Model
  - Auth and Access Model
  - Invariants
read_triggers:
  - When working on architecture in context/architecture.md
  - When reading context for Architecture Context
tags:
  - architecture
updated: '2026-08-13'
---

# Architecture Context

## Stack

| Layer | Technology | Role |
| --- | --- | --- |
| Framework | Next.js 15 (App Router) + TypeScript | Fullstack React framework & Server Actions |
| UI & Styling | Vanilla CSS / Tailored CSS Custom Tokens | Zero-gradient, zero-glassmorphism solid visual styling |
| Icons | Lucide React | Consistent stroke UI icons |
| Form Validation | Zod | Server and client input schema validation |
| Data Storage | Local JSON / SQLite / Notion Sync | Inquiry records and course catalog state |
| Testing | Playwright Headless | 5-viewport visual regression & e2e testing |

## System Boundaries

- `app/` — Next.js 15 routes, layout pages, and API Server Actions.
- `components/ui/` — Reusable, atomic UI primitive components bound strictly to CSS variables.
- `components/sections/` — High-level section layouts (Hero, Courses, Testimonials, Contact).
- `lib/` — Helper functions, validation schemas, and database/storage bridges.
- `public/` — Static visual assets, student logos, and font assets.
- `context/` — 7-File Context methodology source of truth documentation.
- `reference/` — Priority 1 Visual Source of Truth and deconstruction manifest.

## Storage Model

- **Course Catalog & Faculty Data**: Static typed JSON configurations in `lib/data/` for ultra-fast SSG/ISR rendering.
- **Student Inquiries**: Next.js Server Actions logging entries to local storage / Notion webhook / Google Sheets sync bridge.

## Auth and Access Model

- Public facing site: Unauthenticated access for all landing pages, course details, and demo registration.
- Admin dashboard (v2): Role-based access for academy administrators to review inquiries and manage batch schedules.

## Invariants

1. **Strict Zero-Gradient & Zero-Glassmorphism**: All fills must be solid, crisp, and flat. No color gradients, mesh gradients, or backdrop blurs.
2. **Server Action Security Gate**: All server actions MUST validate input using Zod and enforce `import 'server-only'`.
3. **Responsive Viewports**: Must render faultlessly on Desktop (1440px), Laptop (1024px), Tablet (768px), Mobile Portrait (390px), and Mobile Landscape (664px).
4. **No External Paid Dependencies**: 100% zero subscription toolchain.
