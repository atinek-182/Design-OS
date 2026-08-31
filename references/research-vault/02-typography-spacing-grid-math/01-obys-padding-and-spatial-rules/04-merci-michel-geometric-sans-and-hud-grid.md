---
title: Merci Michel — Extended Geometric Sans & Centered HUD Grid
domain: reference
summary: Modern extended geometric sans typography scale, negative tracking (-0.02em), and centered 1400px interactive HUD
  viewport grid.
critical_directives:
- Sourcing components: Map to local Awwwards component vault at C:\Users\HP\Downloads\Components\Analog-Grain-Shader.
- Enforce zero-emoji mandate across all vault documentation.
section_outline:
- Merci Michel — Extended Geometric Sans & Centered HUD Grid
- Extended Geometric Sans Typography Scale
- Centered 1400px HUD Viewport Grid Math
read_triggers:
- When working on reference in references/awwwards-research-vault/02-typography-spacing-grid-math/16-merci-michel-geometric-sans-and-hud-grid.md
- When reading context for Merci Michel Typography Grid Math
tags:
- reference
- awwwards
- merci-michel
- geometric-sans
- hud-grid
updated: '2026-08-08'
---

# Merci Michel — Extended Geometric Sans & Centered HUD Grid

Merci Michel pairs heavy extended geometric sans display typography (`font-weight: 900`, `letter-spacing: -0.02em`) with Inter body copy.

---

## Extended Geometric Sans Typography Scale

```css
/* Merci Michel Gamified Display Headline */
.mercimichel-headline {
  font-family: "Inter", sans-serif;
  font-weight: 900;
  font-size: clamp(2.5rem, 6.5vw + 1rem, 5.75rem);
  line-height: 1.02;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  color: #F8FAFC;
}

/* Sub-Heading Clamp */
.mercimichel-subtitle {
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: clamp(1.5rem, 3.5vw, 3rem);
  line-height: 1.1;
  color: #FF3366;
}
```

---

## Centered 1400px HUD Viewport Grid Math

- **Desktop Stage (1920px)**: Centered 1400px max-width container, 32px side margins, 3-column Bento grid for interactive cases.
- **Laptop Stage (1440px)**: 1200px max-width container, 24px side margins.
- **Glassmorphism Border Math**: Translucent glass overlay with `backdrop-filter: blur(16px)` and `border: 1px solid rgba(255, 51, 102, 0.15)`.
