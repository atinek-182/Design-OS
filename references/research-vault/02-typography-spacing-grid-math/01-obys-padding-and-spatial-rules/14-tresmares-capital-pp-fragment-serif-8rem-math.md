---
title: Tresmares Capital — PP Fragment Serif 8rem & PP Neue Montreal
domain: reference
summary: Typography hierarchy combining PP Fragment Serif 8rem hero display titles with PP Neue Montreal body text and 2.5vw
  padding geometry.
critical_directives:
- Sourcing components: Map to local Awwwards component vault at C:\Users\HP\Downloads\Components\Analog-Grain-Shader.
- Enforce zero-emoji mandate across all vault documentation.
section_outline:
- Tresmares Capital — PP Fragment Serif 8rem & PP Neue Montreal
- PP Fragment Serif & PP Neue Montreal Scale
- Flexible Content Padding Geometry
read_triggers:
- When working on reference in references/awwwards-research-vault/02-typography-spacing-grid-math/24-tresmares-capital-pp-fragment-serif-8rem-math.md
- When reading context for Tresmares Capital Typography Math
tags:
- reference
- awwwards
- tresmares-capital
- pp-fragment-serif
- pp-neue-montreal
updated: '2026-08-08'
---

# Tresmares Capital — PP Fragment Serif 8rem & PP Neue Montreal

Tresmares Capital pairs **PP Fragment Serif** display titles (`font-size: 8rem` hero) with **PP Neue Montreal** body text.

---

## PP Fragment Serif & PP Neue Montreal Scale

```css
/* Tresmares Hero Display Serif */
.tresmares-headline {
  font-family: "PP Fragment Serif", serif;
  font-weight: 400;
  font-size: clamp(3.5rem, 8vw, 8rem);
  line-height: 0.95;
  letter-spacing: -0.025em;
  color: #FFFFFF;
}

/* Institutional Body Sans */
.tresmares-body {
  font-family: "PP Neue Montreal", sans-serif;
  font-weight: 400;
  font-size: clamp(1rem, 1.25vw, 1.25rem);
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.8);
}
```

---

## Flexible Content Padding Geometry

```css
/* Flexible Content Grid Padding */
.component--holder {
  padding-left: 2.5vw;
  padding-right: 2.5vw;
  padding-bottom: 2.5vw;
}
```
