---
title: Made In Evolve — Typekit Neue Haas Grotesk & 48-Column Grid Math
domain: reference
summary: Neue Haas Grotesk Text Typekit font hierarchy, all-caps micro-kerning (-0.02em), and 48-column background grid overlay
  math.
critical_directives:
- Sourcing components: Map to local Awwwards component vault at C:\Users\HP\Downloads\Components\Analog-Grain-Shader.
- Enforce zero-emoji mandate across all vault documentation.
section_outline:
- Made In Evolve — Typekit Neue Haas Grotesk & 48-Column Grid Math
- Neue Haas Grotesk Typekit Architecture
- 48-Column Background Grid Overlay Math
read_triggers:
- When working on reference in references/awwwards-research-vault/02-typography-spacing-grid-math/15-made-in-evolve-neue-haas-and-48col-grid-math.md
- When reading context for Made In Evolve Typography Math
tags:
- reference
- awwwards
- made-in-evolve
- neue-haas-grotesk
- 48-col-grid
updated: '2026-08-08'
---

# Made In Evolve — Typekit Neue Haas Grotesk & 48-Column Grid Math

Made In Evolve loads Adobe Typekit `woc3ozu.js` to render **Neue Haas Grotesk Text** with tight letter-spacing (`-0.02em`).

---

## Neue Haas Grotesk Typekit Architecture

```css
/* Made In Evolve Typekit Headline */
.evolve-headline {
  font-family: "neue-haas-grotesk-text", sans-serif;
  font-weight: 700;
  font-size: clamp(2.5rem, 6vw, 5rem);
  line-height: 1.05;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  color: #0D0D0E;
}

/* Sub-Label Accent */
.evolve-label-accent {
  font-family: "neue-haas-grotesk-text", sans-serif;
  font-weight: 500;
  font-size: 0.8125rem; /* 13px */
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #C3FF00;
}
```

---

## 48-Column Background Grid Overlay Math

```css
/* Made In Evolve Background Micro-Grid Overlay */
.column__grid {
  display: grid;
  grid-template-columns: repeat(48, 1fr);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  border-left: 1px solid rgba(13, 13, 14, 0.05);
}
```
