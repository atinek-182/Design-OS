---
title: Detroit Paris — Barlow Typography Scaling & Masonry Grid Math
domain: reference
summary: Barlow font stack micro-kerning rules, Osmo viewport typography scaling, and 3-column masonry grid math extracted
  from Detroit Paris.
critical_directives:
- Sourcing components: Map to local Awwwards component vault at C:\Users\HP\Downloads\Components\Luxury-Dark-Stage.
- Enforce zero-emoji mandate across all vault documentation.
section_outline:
- Detroit Paris — Barlow Typography Scaling & Masonry Grid Math
- Barlow Typographic Hierarchy & Loose Tracking
- Osmo Viewport Font Scaling & Masonry Grid Math
read_triggers:
- When working on reference in references/awwwards-research-vault/02-typography-spacing-grid-math/07-detroit-paris-barlow-typography-and-masonry-grid.md
- When reading context for Detroit Paris Typography Masonry Math
tags:
- reference
- awwwards
- detroit-paris
- typography
- masonry-grid
updated: '2026-08-08'
---

# Detroit Paris — Barlow Typography Scaling & Masonry Grid Math

Detroit Paris enforces a clean, high-contrast typography system powered by the **Barlow** Google Font stack paired with Osmo viewport scaling math and a 3-column masonry grid.

---

## Barlow Typographic Hierarchy & Loose Tracking

```css
/* Detroit Paris Catalog Header */
.detroit-catalog-header {
  font-family: "Barlow", sans-serif;
  font-weight: 600;
  font-size: calc(1.5rem + 2.5vw);
  line-height: 1.05;
  letter-spacing: 0.1em; /* High-end fashion catalog tracking */
  text-transform: uppercase;
  color: #FFFFFF;
}

/* Technical Category Label */
.detroit-category-label {
  font-family: "Barlow", sans-serif;
  font-weight: 400;
  font-size: calc(0rem + 1vw);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #71717A;
}
```

---

## Osmo Viewport Font Scaling & Masonry Grid Math

1. **Osmo Viewport Token**: Sizing scales dynamically using `font-size: calc(0rem + 1vw)` to maintain exact visual proportions from 375px mobile to 1920px 4K displays.
2. **Masonry Grid Math**: Dynamic 3-column masonry layout (`data-masonry-list`, `--masonry-col: 3`):

```css
.detroit-masonry-grid {
  display: grid;
  grid-template-columns: repeat(var(--masonry-col, 3), 1fr);
  gap: 32px;
}
```
