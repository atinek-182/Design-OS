---
title: Ashley Brooke — Editorial Usability & Technical Evaluation Rubric
domain: reference
summary: Evaluation of Ashley Brooke CS against Awwwards and gallery design criteria across Usability, Accessibility, and
  Technical Performance.
critical_directives:
- Sourcing components: Map to local Awwwards component vault at C:\Users\HP\Downloads\Components\Editorial-Cursor-Hover.
- Enforce zero-emoji mandate across all vault documentation.
section_outline:
- Ashley Brooke — Editorial Usability & Technical Evaluation Rubric
- Multi-Axis Gallery Scoring Matrix
- Technical Quality & Accessibility Safeguards
read_triggers:
- When working on reference in references/awwwards-research-vault/06-judging-criteria-and-master-checklist/04-ashley-brooke-editorial-usability-rubric.md
- When reading context for Ashley Brooke Rubric Evaluation
tags:
- reference
- awwwards
- ashley-brooke
- usability
- scoring
updated: '2026-08-08'
---

# Ashley Brooke — Editorial Usability & Technical Evaluation Rubric

Evaluating Ashley Brooke CS against elite gallery standards (Landing.love, Muzli, Awwwards) highlights key usability and performance practices.

---

## Multi-Axis Gallery Scoring Matrix

| Category | Weight | Score | Technical & Visual Rationale |
|---|---|---|---|
| **Design** | `40%` | **9.6 / 10** | High-contrast serif display paired with matte charcoal (`#0D0D0E`) and terracotta red (`#E0533C`). |
| **Usability** | `30%` | **9.4 / 10** | Zero-latency Barba.js SPA navigation, smooth Lenis inertia scroll, clear CTA triggers. |
| **Creativity** | `20%` | **9.1 / 10** | Architectural drafting grid overlays (`.guide_column`) and 3D card tilt hover physics. |
| **Content** | `10%` | **9.3 / 10** | Concise strategic studio copy ("Grounded in taking action, not just stopping at ideas"). |

---

## Technical Quality & Accessibility Safeguards

1. **AVIF Asset Standard**: Uses high-density AVIF graphics to reduce asset weight by `>40%` compared to standard WebP/PNG.
2. **Focus Ring Management**: Enforces `.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}` while retaining keyboard navigation focus rings on interactive elements.
3. **Preconnect CDN Optimization**: Preconnects to `cdn.jsdelivr.net` and `cdn.prod.website-files.com` during initial head load to eliminate DNS lookup latency.
