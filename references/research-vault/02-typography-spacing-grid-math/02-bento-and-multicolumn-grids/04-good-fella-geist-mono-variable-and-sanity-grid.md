---
title: Good Fella — Vercel Geist Mono Variable Typography & 12-Column Grid
domain: reference
summary: Geist Mono variable font stack, monospaced headline micro-kerning, and 12-column grid overlay math.
critical_directives:
- Sourcing components: Map to local Awwwards component vault at C:\Users\HP\Downloads\Components\Analog-Grain-Shader.
- Enforce zero-emoji mandate across all vault documentation.
section_outline:
- Good Fella — Vercel Geist Mono Variable Typography & 12-Column Grid
- Geist Mono Variable Typographic Scale
- 12-Column Staggered Grid Overlay Math
read_triggers:
- When working on reference in references/awwwards-research-vault/02-typography-spacing-grid-math/10-good-fella-geist-mono-variable-and-sanity-grid.md
- When reading context for Good Fella Typography Grid Math
tags:
- reference
- awwwards
- good-fella
- geist-mono
- grid-math
updated: '2026-08-08'
---

# Good Fella — Vercel Geist Mono Variable Typography & 12-Column Grid

Good Fella relies exclusively on Vercel's **Geist Mono** variable font stack to maintain a technological, digital landmark aesthetic.

---

## Geist Mono Variable Typographic Scale

```css
/* Good Fella Monospaced Headline */
.goodfella-headline {
  font-family: "Geist Mono", monospace;
  font-weight: 700;
  font-size: clamp(2.5rem, 6vw, 5.25rem);
  line-height: 1.05;
  letter-spacing: -0.04em;
  text-transform: uppercase;
  color: #FFFFFF;
}

/* Monospaced Metadata Label */
.goodfella-label-mono {
  font-family: "Geist Mono", monospace;
  font-weight: 500;
  font-size: 0.875rem; /* 14px */
  line-height: 1.4;
  letter-spacing: 0.05em;
  color: #FF0000;
}
```

---

## 12-Column Staggered Grid Overlay Math

```css
/* Good Fella 12-Column Grid Overlay */
.goodfella-grid-overlay {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 24px;
  max-width: 1920px;
  margin: 0 auto;
  padding: 0 48px;
}
```
