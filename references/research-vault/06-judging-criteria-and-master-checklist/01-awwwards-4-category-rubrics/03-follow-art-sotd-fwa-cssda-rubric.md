---
title: Follow Art — Triple Award Scoring Rubric (Awwwards SOTD, FWA, CSSDA)
domain: reference
summary: Evaluation of Follow Art against triple award criteria (Awwwards SOTD, FWA of the Day, CSSDA WOTD) highlighting visual
  rebellion and technical performance.
critical_directives:
- Sourcing components: Map to local Awwwards component vault at C:\Users\HP\Downloads\Components\Gallery-Cursor-Physics.
- Enforce zero-emoji mandate across all vault documentation.
section_outline:
- Follow Art — Triple Award Scoring Rubric (Awwwards SOTD, FWA, CSSDA)
- Triple Award Evaluation Breakdown
- Technical Performance & Zero-CLS Safeguards
read_triggers:
- When working on reference in references/awwwards-research-vault/06-judging-criteria-and-master-checklist/07-follow-art-sotd-fwa-cssda-rubric.md
- When reading context for Follow Art Triple Award Rubric Evaluation
tags:
- reference
- awwwards
- follow-art
- fwa
- cssda
- scoring
updated: '2026-08-08'
---

# Follow Art — Triple Award Scoring Rubric (Awwwards SOTD, FWA, CSSDA)

Evaluating Follow Art across three independent award organizations (Awwwards, FWA, CSSDA) illustrates how Vide Infra Studio achieved global recognition.

---

## Triple Award Evaluation Breakdown

| Category | Weight | Score | Technical & Visual Rationale |
|---|---|---|---|
| **Design** | `40%` | **9.8 / 10** | Electric Cobalt Blue (`#0000FF`) aesthetic paired with `HeadingNow` typography. |
| **Usability** | `30%` | **9.6 / 10** | Smooth sticky layer scrollytelling, instantaneous button hover accent lines, zero CLS. |
| **Creativity** | `20%` | **9.9 / 10** | "The Card" digital QR profile infrastructure for physical art fair exhibitions. |
| **Content** | `10%` | **9.5 / 10** | High-impact manifesto for contemporary art curators across 100+ countries. |

---

## Technical Performance & Zero-CLS Safeguards

1. **Fluid Scaling Tokens**: `--scale-px` and `--scale-text-rem` calculate text and container dimensions continuously without breakpoint layout popping.
2. **Preloader State Control**: `.promo--loaded` body state prevents interaction before all React components finish mounting.
3. **SVG Sprite Management**: Vector icon sprites (`.icon-videinfra`) reduce HTTP request count to 1.
