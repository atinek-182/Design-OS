---
title: Good Fella — Awwwards SOTD & Developer Award Scoring Rubric
domain: reference
summary: Evaluation of Good Fella against Awwwards SOTD and Developer Award metrics including monospaced typographic precision
  and Sanity CDN image optimization.
critical_directives:
- Sourcing components: Map to local Awwwards component vault at C:\Users\HP\Downloads\Components\Analog-Grain-Shader.
- Enforce zero-emoji mandate across all vault documentation.
section_outline:
- Good Fella — Awwwards SOTD & Developer Award Scoring Rubric
- Awwwards SOTD Evaluation Breakdown
- Technical Performance & Privacy Telemetry
read_triggers:
- When working on reference in references/awwwards-research-vault/06-judging-criteria-and-master-checklist/09-good-fella-sotd-developer-award-rubric.md
- When reading context for Good Fella SOTD Rubric Evaluation
tags:
- reference
- awwwards
- good-fella
- sotd
- scoring
updated: '2026-08-08'
---

# Good Fella — Awwwards SOTD & Developer Award Scoring Rubric

Evaluating Good Fella against Awwwards Site of the Day (SOTD) standards illustrates how Julian & Adrian Fella achieved technical perfection.

---

## Awwwards SOTD Evaluation Breakdown

| Category | Weight | Score | Technical & Visual Rationale |
|---|---|---|---|
| **Design** | `40%` | **9.7 / 10** | Obsidian Dark (`#0A0A0A`) canvas with monospaced Vercel `Geist Mono` typography and electric red accents. |
| **Usability** | `30%` | **9.6 / 10** | Grid rectangle SPA page transitions, smooth Lenis scroll inertia, dynamic tab title message. |
| **Creativity** | `20%` | **9.8 / 10** | Annnimate component architecture & Next.js + Sanity CMS integration. |
| **Content** | `10%` | **9.5 / 10** | High-impact bespoke productions for sports, consumer, and entertainment brands. |

---

## Technical Performance & Privacy Telemetry

1. **PostHog Privacy Telemetry**: Custom proxy route (`r.good-fella.com`) collecting analytics without blocking core thread rendering.
2. **Woff2 Font Preloader**: Preloaded Geist Mono Woff2 files eliminate font layout shift (CLS = 0.00).
3. **Sanity Image Crop Rectangles**: Serves exact viewport-cropped WebP images directly from Sanity CDN.
