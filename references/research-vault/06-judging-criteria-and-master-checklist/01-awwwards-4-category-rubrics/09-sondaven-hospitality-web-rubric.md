---
title: Sondaven — Awwwards Luxury Hospitality Web Evaluation Rubric
domain: reference
summary: Evaluation of Sondaven against Awwwards Luxury Hospitality Web and WebGL performance metrics.
critical_directives:
- Sourcing components: Map to local Awwwards component vault at C:\Users\HP\Downloads\Components\Analog-Grain-Shader.
- Enforce zero-emoji mandate across all vault documentation.
section_outline:
- Sondaven — Awwwards Luxury Hospitality Web Evaluation Rubric
- Luxury Hospitality Evaluation Matrix
- Input Field Regex Filtering & Memory Cleanup Safeguards
read_triggers:
- When working on reference in references/awwwards-research-vault/06-judging-criteria-and-master-checklist/20-sondaven-hospitality-web-rubric.md
- When reading context for Sondaven Evaluation Rubric
tags:
- reference
- awwwards
- sondaven
- hospitality-rubric
- scoring
updated: '2026-08-08'
---

# Sondaven — Awwwards Luxury Hospitality Web Evaluation Rubric

Evaluating Sondaven against Awwwards Luxury Hospitality Web standards illustrates how high-end hotel design builds investor trust.

---

## Luxury Hospitality Evaluation Matrix

| Category | Weight | Score | Technical & Visual Rationale |
|---|---|---|---|
| **Design** | `40%` | **9.8 / 10** | Ivory Light (`#F6F4F0`) canvas with KTF Metro Roman serif display typography, Gold accents, and mountain cloud shaders. |
| **Usability** | `30%` | **9.8 / 10** | Barba.js 20x12 grid cell dither transition, exact scrollbar width scroll lock, magnetic spring buttons. |
| **Creativity** | `20%` | **9.7 / 10** | Drag-along-path SVG Summer/Winter slider and 180-degree Y-axis card flip form submit. |
| **Content** | `10%` | **9.8 / 10** | Guaranteed return investment project showcase for luxury Carpathian resort. |

---

## Input Field Regex Filtering & Memory Cleanup Safeguards

1. **Strict Input Sanitization**: Phone inputs strip non-numeric symbols (`value.replace(/[^\d+\-]/g, "")`) while name inputs strip digits.
2. **GSAP & WebGL Memory Cleanup**: Kills active GSAP ScrollTrigger instances and destroys WebGL scenes during Barba.js `leave` hooks to prevent memory leaks.
