---
title: Champions 4 Good — System Sans Heavy Hierarchy & Viewport Token Math
domain: reference
summary: Heavy font weight typography rules, micro-kerning, and dynamic viewport unit math (--vw 19.2px) extracted from Champions
  4 Good.
critical_directives:
- Sourcing components: Map to local Awwwards component vault at C:\Users\HP\Downloads\Components\Kinetic-Type-Scroll.
- Enforce zero-emoji mandate across all vault documentation.
section_outline:
- Champions 4 Good — System Sans Heavy Hierarchy & Viewport Token Math
- Heavy Sans-Serif Typographic Scale
- Root Viewport Token Math (--vw)
read_triggers:
- When working on reference in references/awwwards-research-vault/02-typography-spacing-grid-math/06-champions-4-good-system-sans-and-vw-tokens.md
- When reading context for Champions 4 Good Typography Grid Math
tags:
- reference
- awwwards
- champions-4-good
- typography
- viewport-math
updated: '2026-08-08'
---

# Champions 4 Good — System Sans Heavy Hierarchy & Viewport Token Math

Champions 4 Good enforces a high-impact sans-serif font hierarchy characterized by heavy font weights (`font-weight: 800-900`) and tight tracking.

---

## Heavy Sans-Serif Typographic Scale

```css
/* Champions Heavy Display Headline */
.champions-headline {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-weight: 900;
  font-size: clamp(2.75rem, 6vw, 5.5rem);
  line-height: 1.02;
  letter-spacing: -0.03em;
  text-transform: uppercase;
  color: #0A0A0C;
}

/* Secondary Section Subhead */
.champions-subhead {
  font-weight: 800;
  font-size: clamp(1.5rem, 3vw, 2.5rem);
  line-height: 1.1;
  color: #FF3366;
}
```

---

## Root Viewport Token Math (`--vw`)

To maintain perfect scale proportionality across varying screen widths:

```css
:root {
  /* 1920px reference viewport width scaling */
  --vw: 19.2px;
  --container-max-width: calc(100vw - (2 * var(--vw)));
}
```

### Responsive Breakpoint Geometry

- **Desktop Reference**: `1920px`
- **Laptop**: `1440px`
- **Tablet**: `1024px` / `768px`
- **Mobile**: `375px`
