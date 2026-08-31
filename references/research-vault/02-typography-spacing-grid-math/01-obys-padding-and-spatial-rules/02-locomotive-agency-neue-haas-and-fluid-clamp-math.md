---
title: Locomotive Agency — Neue Haas Grotesk & Fluid Clamp Typography Math
domain: reference
summary: Technical typography scale using Neue Haas Grotesk style headline type with negative tracking (-0.03em) and fluid
  clamp math.
critical_directives:
- Sourcing components: Map to local Awwwards component vault at C:\Users\HP\Downloads\Components\Locomotive-Scroll-Engine.
- Enforce zero-emoji mandate across all vault documentation.
section_outline:
- Locomotive Agency — Neue Haas Grotesk & Fluid Clamp Typography Math
- Neue Haas Display & Inter Body Type Scale
- Fluid Responsive Clamp Formulas & 12-Col Grid
read_triggers:
- When working on reference in references/awwwards-research-vault/02-typography-spacing-grid-math/14-locomotive-agency-neue-haas-and-fluid-clamp-math.md
- When reading context for Locomotive Agency Typography Math
tags:
- reference
- awwwards
- locomotive-agency
- neue-haas-grotesk
- fluid-clamp
updated: '2026-08-08'
---

# Locomotive Agency — Neue Haas Grotesk & Fluid Clamp Typography Math

Locomotive relies on custom bold extended sans display typography (Neue Haas Grotesk style) with negative tracking (`-0.03em`).

---

## Neue Haas Display & Inter Body Type Scale

```css
/* Locomotive Hero Headline Display */
.locomotive-hero-title {
  font-family: "Neue Haas Grotesk", "Inter", sans-serif;
  font-weight: 700;
  font-size: clamp(2.75rem, 7vw + 1rem, 6rem);
  line-height: 1.02;
  letter-spacing: -0.03em;
  text-transform: uppercase;
  color: #FFFFFF;
}

/* Section Title Clamp */
.locomotive-section-title {
  font-family: "Neue Haas Grotesk", "Inter", sans-serif;
  font-weight: 700;
  font-size: clamp(1.5rem, 3.5vw, 3rem);
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: #FFFFFF;
}

/* Monospaced Meta Label */
.locomotive-meta-label {
  font-family: "Inter", sans-serif;
  font-size: 0.8rem;
  line-height: 1.4;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #FF4757;
}
```

---

## Fluid Responsive Clamp Formulas & 12-Col Grid

- **Desktop Container (1920px)**: 1400px max-width container, 32px side margins, 24px column gutters.
- **Laptop Container (1440px)**: 1200px max-width container, 24px side margins.
