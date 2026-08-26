---
title: Vidya Dham Academy - Code Standards
domain: architecture
summary: Development guidelines, TypeScript rules, security safeguards, and styling conventions.
critical_directives:
  - Strict mode required throughout. No implicit any.
  - VibeSec security rules enforced on all form actions and API endpoints.
section_outline:
  - Code Standards
  - General
  - TypeScript
  - Next.js & Server Actions
  - Styling & Design System
  - Security & VibeSec Gates
read_triggers:
  - When working on architecture in context/code-standards.md
  - When reading context for Code Standards
tags:
  - architecture
  - code-standards
updated: '2026-08-13'
---

# Code Standards

## General

- Keep modules small, decoupled, and single-purpose.
- Surgical edits: Touch only what is required. Preserve unrelated code and comments.
- Fix root causes instead of adding symptom-patching workarounds.
- Zero emojis anywhere in code, comments, logs, or documentation.

## TypeScript

- Strict mode enabled (`tsconfig.json`).
- Zero `any` types: Use explicit interfaces, type aliases, or discriminated unions.
- Validate all incoming external data using Zod at system boundaries.

## Next.js & Server Actions

- Default to Server Components (`React Server Components`).
- Add `'use client'` only when interactive state or browser event listeners are strictly necessary.
- Server Actions MUST include `import 'server-only'` to prevent client bundle leakage.
- Validate request payloads with Zod before processing.

## Styling & Design System

- All styles MUST reference CSS Custom Property tokens (`var(--bg-base)`, `var(--text-primary)`, `var(--accent-primary)`).
- NO inline hardcoded hex values or arbitrary utility colors.
- Solid visual aesthetic: Crisp solid backgrounds, sharp borders, clean contrast typography.
- STRICT BAN on gradients, mesh gradients, backdrop-filter blurs, and glass cards.

## Mobile-First & Touch Interaction Standards

- **Hover State Isolation**: All `:hover` CSS states MUST be wrapped inside `@media (hover: hover)` media queries to prevent stuck hover states on touchscreens.
- **Active Touch Feedback**: Touch interactions MUST use `:active { transform: scale(0.97); }` and `-webkit-tap-highlight-color: transparent`.
- **Minimum Touch Targets**: All interactive elements (toggles, buttons, links, inputs) MUST enforce a minimum `48px x 48px` bounding area.
- **Hardware-Accelerated Mobile Motion**: GSAP mobile animations MUST be composite-only (`translate3d`, `scale`, `opacity`) with `will-change: transform` to guarantee 60 FPS on mobile processors.
- **Sticky Mobile Action Bar**: Fixed bottom navigation bar on mobile viewports (< 768px) with 1-click WhatsApp Desk and Call Office actions.

## Security & VibeSec Gates

- Input Sanitization: Protect against injection vectors in inquiry forms.
- Rate Limiting: Apply submission rate limits on lead inquiry endpoints.
- CORS & SSRF: Block internal network probing or unauthorized external origin redirects.

