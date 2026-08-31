---
title: Gehry Getty — Playfair Display Serif & Space Mono Metadata Hierarchy
domain: reference
summary: Editorial serif headline hierarchy, technical Space Mono metadata captions, and 3D viewport canvas spacing math.
critical_directives:
- Sourcing components: Map to local Awwwards component vault at C:\Users\HP\Downloads\Components\Architectural-3D-Stage.
- Enforce zero-emoji mandate across all vault documentation.
section_outline:
- Gehry Getty — Playfair Display Serif & Space Mono Metadata Hierarchy
- Archival Serif & Monospace Typographic Scale
- Viewport Inset Spacing Math
read_triggers:
- When working on reference in references/awwwards-research-vault/02-typography-spacing-grid-math/09-gehry-getty-playfair-serif-and-space-mono.md
- When reading context for Gehry Getty Typography Space Math
tags:
- reference
- awwwards
- gehry-getty
- typography
- space-mono
updated: '2026-08-08'
---

# Gehry Getty — Playfair Display Serif & Space Mono Metadata Hierarchy

Gehry Getty pairs `Playfair Display` serif headlines with technical `Space Mono` metadata captions to mirror physical architectural blueprints.

---

## Archival Serif & Monospace Typographic Scale

```css
/* Gehry Getty Archival Display Serif Headline */
.gehry-headline-serif {
  font-family: "Playfair Display", Georgia, serif;
  font-weight: 700;
  font-size: clamp(2.5rem, 5.5vw, 4.75rem);
  line-height: 1.08;
  letter-spacing: -0.02em;
  color: #1C1C1C;
}

/* Technical Model Metadata Caption */
.gehry-caption-mono {
  font-family: "Space Mono", monospace;
  font-weight: 400;
  font-size: 0.75rem; /* 12px */
  line-height: 1.4;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #8C6D4F;
}
```

---

## Viewport Inset Spacing Math

- **3D Canvas Margin**: `32px` viewport inset margin around interactive GLTF canvas stage.
- **Drawer Inset**: `400px` fixed width modal drawer sliding over 3D model on pin click.
