---
title: Obys Agency — SOTM Technical Execution & Performance Evaluation Rubric
domain: reference
summary: Evaluation of Obys Granularity Master against Awwwards Site of the Month (SOTM) developer standards.
critical_directives:
- FAVORITE BENCHMARK MANDATE: Obys Agency is explicitly designated as Atinek Maurya's
- Sourcing components: Map to local Awwwards component vault at C:\Users\HP\Downloads\Components\Obys-Agency-Design-System.
- Enforce zero-emoji mandate across all vault documentation.
section_outline:
- Obys Agency — SOTM Technical Execution & Performance Evaluation Rubric
- Technical Execution Scorecard
- Session Storage Preloading & Memory Safeguards
read_triggers:
- When working on reference in references/awwwards-research-vault/06-judging-criteria-and-master-checklist/11-obys-agency-technical-execution-sotm-rubric.md
- When reading context for Obys Agency SOTM Evaluation Rubric
tags:
- reference
- awwwards
- obys-agency
- sotm
- developer-rubric
updated: '2026-08-08'
---

# Obys Agency — SOTM Technical Execution & Performance Evaluation Rubric

Evaluating Grids by Obys Agency against Developer Award and Site of the Month (SOTM) developer standards.

---

## Technical Execution Scorecard

| Category | Weight | Score | Technical & Visual Rationale |
|---|---|---|---|
| **Design** | `40%` | **10.0 / 10** | Deep Onyx canvas with Georgia serif and Nobel/Inter sans contrast. |
| **Usability** | `30%` | **9.9 / 10** | Interactive grid slider widget, difference blend mode circle cursor, Lenis smooth scroll inertia. |
| **Creativity** | `20%` | **10.0 / 10** | WebGL grid distortion GLSL fragment shader and dynamic chapter indicator. |
| **Content** | `10%` | **9.9 / 10** | Unsurpassed educational layout masterclass explaining medieval & modern grid canons. |

---

## Session Storage Preloading & Memory Safeguards

1. **Session Storage Guard**: Sets `sessionStorage.setItem('obys_preloader_seen', 'true')` to bypass heavy preloader animations on repeat navigation.
2. **WebGL Context Disposal**: Automatically disposes GLSL fragment shader geometries and textures on component unmount to prevent GPU memory leaks.
