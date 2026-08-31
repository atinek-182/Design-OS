---
title: Jasmine Gunarto — Classical Editorial Serif & Manrope Typography Math
domain: reference
summary: Technical typography hierarchy combining classical serif display font with Manrope Google Font and stage custom variables.
critical_directives:
- Sourcing components: Map to local Awwwards component vault at C:\Users\HP\Downloads\Components\Analog-Grain-Shader.
- Enforce zero-emoji mandate across all vault documentation.
section_outline:
- Jasmine Gunarto — Classical Editorial Serif & Manrope Typography Math
- Editorial Serif & Manrope Type Hierarchy
- Full Stage Custom Variable Geometry
read_triggers:
- When working on reference in references/awwwards-research-vault/02-typography-spacing-grid-math/13-jasmine-gunarto-editorial-serif-and-manrope-math.md
- When reading context for Jasmine Gunarto Typography Math
tags:
- reference
- awwwards
- jasmine-gunarto
- editorial-serif
- manrope
updated: '2026-08-08'
---

# Jasmine Gunarto — Classical Editorial Serif & Manrope Typography Math

Jasmine Gunarto pairs classical serif display typography with Google's **Manrope** font stack to deliver a high-fashion editorial balance.

---

## Editorial Serif & Manrope Type Hierarchy

```css
/* Jasmine Gunarto Editorial Serif Display */
.jasmine-editorial-serif {
  font-family: "HG-1", serif;
  font-weight: 400;
  font-size: clamp(3rem, 7.5vw, 6.5rem);
  line-height: 1.02;
  letter-spacing: -0.03em;
  color: #EBEAE4;
}

.jasmine-editorial-serif .char-wrap {
  position: relative;
  display: inline-block;
  overflow: clip;
}

/* Manrope UI & Body Typography */
.jasmine-sans-ui {
  font-family: "Manrope", sans-serif;
  font-weight: 600;
  font-size: 0.9375rem; /* 15px */
  line-height: 1.5;
  letter-spacing: 0.02em;
  color: #EBEAE4;
}
```

---

## Full Stage Custom Variable Geometry

```css
:root {
  --ww: 1920;
  --wh: 1080;
  --stage-ratio: calc(var(--ww) / var(--wh));
}

.main-content-wrapper {
  width: 100vw;
  min-height: 100vh;
  padding: calc(60px * (100vw / var(--ww)));
}
```
