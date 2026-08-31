---
title: Follow Art — HeadingNow & Hardbop Font Pairing & Scale Rem Tokens
domain: reference
summary: Rebellious typography pairing of HeadingNow and Hardbop font stacks, micro-kerning tracking, and --scale-text-rem
  fluid tokens.
critical_directives:
- Sourcing components: Map to local Awwwards component vault at C:\Users\HP\Downloads\Components\Gallery-Cursor-Physics.
- Enforce zero-emoji mandate across all vault documentation.
section_outline:
- Follow Art — HeadingNow & Hardbop Font Pairing & Scale Rem Tokens
- HeadingNow & Hardbop Typographic Scale
- Fluid Rem Scale Tokens (--scale-text-rem)
read_triggers:
- When working on reference in references/awwwards-research-vault/02-typography-spacing-grid-math/08-follow-art-headingnow-and-hardbop-type-math.md
- When reading context for Follow Art Typography Scale Math
tags:
- reference
- awwwards
- follow-art
- typography
- fluid-tokens
updated: '2026-08-08'
---

# Follow Art — HeadingNow & Hardbop Font Pairing & Scale Rem Tokens

Follow Art pairs `HeadingNow` and `Hardbop` display typefaces to create an uncompromising editorial hierarchy over electric blue canvases.

---

## HeadingNow & Hardbop Typographic Scale

```css
/* Follow Art Rebellious Headline */
.followart-headline {
  font-family: "HeadingNow", "Hardbop", sans-serif;
  font-weight: 800;
  font-size: clamp(3rem, 7.5vw, 6.5rem);
  line-height: var(--lh, 0.98);
  letter-spacing: -0.03em;
  text-transform: uppercase;
  color: #FFFFFF;
}

/* Secondary Sub-headline */
.followart-subhead {
  font-family: "Hardbop", sans-serif;
  font-weight: 700;
  font-size: clamp(1.25rem, 2.5vw, 2.25rem);
  line-height: 1.1;
  color: #A3A3FF;
}
```

---

## Fluid Rem Scale Tokens (`--scale-text-rem`)

To scale fluid font sizing relative to active viewport resolution:

```css
:root {
  --scale-px: calc(1px * (100vw / 1920));
  --scale-text-rem: calc(1rem * (100vw / 1920));
}

.followart-card-title {
  font-size: calc(2.25 * var(--scale-text-rem));
}
```
