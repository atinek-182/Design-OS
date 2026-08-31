---
title: The Shift Tokyo — Everett, Lausanne & YakuHanJP Font Hierarchy
domain: reference
summary: Technical Japanese font stack pairing Everett, Lausanne (150), YakuHanJP Japanese glyphs, and Gallery serif with
  character-level SplitText wrappers.
critical_directives:
- Sourcing components: Map to local Awwwards component vault at C:\Users\HP\Downloads\Components\Analog-Grain-Shader.
- Enforce zero-emoji mandate across all vault documentation.
section_outline:
- The Shift Tokyo — Everett, Lausanne & YakuHanJP Font Hierarchy
- Everett & YakuHanJP Typographic Scale
- Character-Level SplitText Node Architecture
read_triggers:
- When working on reference in references/awwwards-research-vault/02-typography-spacing-grid-math/23-the-shift-tokyo-everett-and-yakuhanjp-type-stack.md
- When reading context for The Shift Tokyo Typography Math
tags:
- reference
- awwwards
- the-shift-tokyo
- everett-font
- yakuhanjp
updated: '2026-08-08'
---

# The Shift Tokyo — Everett, Lausanne & YakuHanJP Font Hierarchy

The Shift Tokyo pairs **Everett** and **Lausanne (150)** with **YakuHanJP** for bilingual English/Japanese typography.

---

## Everett & YakuHanJP Typographic Scale

```css
/* The Shift Display Headline */
.shift-headline {
  font-family: 'Everett', 'YakuHanJP', sans-serif;
  font-size: clamp(2.75rem, 6.5vw, 6.25rem);
  line-height: 1.0;
  letter-spacing: -0.03em;
  color: #F5F5F5;
}

/* Secondary Editorial Serif */
.shift-editorial {
  font-family: 'Gallery', serif;
  font-style: italic;
  color: #FE4249;
}
```

---

## Character-Level SplitText Node Architecture

```html
<!-- Character-Level SplitText DOM Structure -->
<span class="js-split-l" aria-label="Exploring The Shift">
  <span aria-hidden="true" class="char">E</span>
  <span aria-hidden="true" class="char">x</span>
  <span aria-hidden="true" class="char">p</span>
  <span aria-hidden="true" class="char">l</span>
  <span aria-hidden="true" class="char">o</span>
  <span aria-hidden="true" class="char">r</span>
  <span aria-hidden="true" class="char">i</span>
  <span aria-hidden="true" class="char">n</span>
  <span aria-hidden="true" class="char">g</span>
</span>
```
