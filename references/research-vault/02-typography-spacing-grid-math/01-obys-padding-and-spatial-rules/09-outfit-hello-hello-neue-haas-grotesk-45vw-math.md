---
title: Outfit Hello Hello — Neue Haas Grotesk 45vw Headline & Tailwind Grid
domain: reference
summary: Neue Haas Grotesk Text Pro typography hierarchy, negative tracking (-0.05em), 45vw headline clamp math, and Tailwind
  CSS v4 container queries.
critical_directives:
- Sourcing components: Map to local Awwwards component vault at C:\Users\HP\Downloads\Components\Analog-Grain-Shader.
- Enforce zero-emoji mandate across all vault documentation.
section_outline:
- Outfit Hello Hello — Neue Haas Grotesk 45vw Headline & Tailwind Grid
- Neue Haas Grotesk Typographic Scale
- Tailwind CSS v4 Container Query & Aspect Ratio Math
read_triggers:
- When working on reference in references/awwwards-research-vault/02-typography-spacing-grid-math/19-outfit-hello-hello-neue-haas-grotesk-45vw-math.md
- When reading context for Outfit Hello Hello Typography Math
tags:
- reference
- awwwards
- outfit-hello-hello
- neue-haas-grotesk
- 45vw-headline
updated: '2026-08-08'
---

# Outfit Hello Hello — Neue Haas Grotesk 45vw Headline & Tailwind Grid

Outfit Hello Hello commands attention with massive **Neue Haas Grotesk Text Pro** display headlines (`-0.05em` negative tracking).

---

## Neue Haas Grotesk Typographic Scale

```css
/* Outfit Massive Display Headline */
.outfit-display-headline {
  font-family: "Neue Haas Grotesk Text Pro", sans-serif;
  font-weight: 900;
  font-size: clamp(3.5rem, 45vw, 16rem);
  line-height: 0.88;
  letter-spacing: -0.05em;
  text-transform: uppercase;
  color: #000000;
}

/* Secondary Headline Clamp */
.outfit-sub-headline {
  font-family: "Neue Haas Grotesk Text Pro", sans-serif;
  font-weight: 700;
  font-size: clamp(1.75rem, 5vw, 4rem);
  line-height: 1.0;
  letter-spacing: -0.03em;
  color: #FF0001;
}
```

---

## Tailwind CSS v4 Container Query & Aspect Ratio Math

- **Aspect Ratio Locking**: Lookbook grid uses explicit aspect ratio utilities (`aspect-[9/12]`, `aspect-square`).
- **Breakpoint Typography Scale**:
  - `Desktop 1920px`: `text-9xl` (scaling up to 8rem / 128px)
  - `Laptop 1440px`: `text-7xl`
  - `Tablet 1024px`: `text-5xl`
  - `Mobile 375px`: `text-3xl`
