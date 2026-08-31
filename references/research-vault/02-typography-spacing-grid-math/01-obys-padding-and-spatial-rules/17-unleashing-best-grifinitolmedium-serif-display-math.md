---
title: Unleashing Best — GrifinitoLMedium Display Serif & 0.52083vw Math
domain: reference
summary: Typography hierarchy combining GrifinitoLMedium display serif (font-size 28rem desktop) with HelveticaRegular and
  0.52083vw fluid desktop font math.
critical_directives:
- Sourcing components: Map to local Awwwards component vault at C:\Users\HP\Downloads\Components\Analog-Grain-Shader.
- Enforce zero-emoji mandate across all vault documentation.
section_outline:
- Unleashing Best — GrifinitoLMedium Display Serif & 0.52083vw Math
- GrifinitoLMedium & Helvetica Scale
- CSS Grid Area Mapping & Fluid Container Bounds
read_triggers:
- When working on reference in references/awwwards-research-vault/02-typography-spacing-grid-math/27-unleashing-best-grifinitolmedium-serif-display-math.md
- When reading context for Unleashing Best Typography Math
tags:
- reference
- awwwards
- unleashing-best
- grifinitolmedium-serif
- fluid-font-math
updated: '2026-08-08'
---

# Unleashing Best — GrifinitoLMedium Display Serif & 0.52083vw Math

Unleashing Best pairs **GrifinitoLMedium** display serif (`font-size: 28rem` modal drawer, `16rem` story scenes) with **HelveticaRegular** and **NM-Medium** monospace index markers.

---

## GrifinitoLMedium & Helvetica Scale

```css
/* Victor Work Display Headline */
.unleashing-headline {
  font-family: 'GrifinitoLMedium', serif;
  font-weight: 500;
  font-size: clamp(4rem, 16vw, 16rem);
  line-height: 0.90;
  letter-spacing: -0.04em;
  color: #191919;
}

/* Fluid Desktop Baseline Font Math */
html {
  font-size: 0.52083vw;
}

@media (max-width: 580px) {
  html {
    font-size: 2.66667vw;
  }
}
```

---

## CSS Grid Area Mapping & Fluid Container Bounds

```css
/* Fluid Container Width */
.e-hold {
  width: calc(100vw - var(--gap) * 2);
  margin-left: auto;
  margin-right: auto;
}

/* CSS Grid Scrollytelling Sequence */
.scene-grid {
  display: grid;
  grid-template-areas:
    "increasing your performance . ."
    "have a more balanced life . .";
  gap: 2rem;
}
```
