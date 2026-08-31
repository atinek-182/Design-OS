---
title: Truck 'n Roll — Druk Condensed Heavy 8rem, GT America & Space Mono
domain: reference
summary: Heavy industrial typography hierarchy pairing Druk Condensed Heavy 8rem display titles with GT America body text
  and Space Mono metadata tags.
critical_directives:
- Sourcing components: Map to local Awwwards component vault at C:\Users\HP\Downloads\Components\Analog-Grain-Shader.
- Enforce zero-emoji mandate across all vault documentation.
section_outline:
- Truck 'n Roll — Druk Condensed Heavy 8rem, GT America & Space Mono
- Druk & Space Mono Industrial Scale
- Flex & Rail Grid Math
read_triggers:
- When working on reference in references/awwwards-research-vault/02-typography-spacing-grid-math/26-truck-n-roll-druk-gt-america-and-space-mono.md
- When reading context for Truck 'n Roll Typography Math
tags:
- reference
- awwwards
- truck-n-roll
- druk-condensed
- space-mono
updated: '2026-08-08'
---

# Truck 'n Roll — Druk Condensed Heavy 8rem, GT America & Space Mono

Truck 'n Roll pairs **Druk Condensed Heavy** display titles (`font-size: 8rem` hero) with **GT America** body copy and **Space Mono** logistics metadata tags (`[01] / FLEET`).

---

## Druk & Space Mono Industrial Scale

```css
/* Heavy Industrial Druk Hero Title */
.truck-hero-headline {
  font-family: 'Druk Condensed Heavy', sans-serif;
  font-weight: 900;
  text-transform: uppercase;
  font-size: clamp(3.5rem, 8.5vw, 8.5rem);
  line-height: 0.90;
  letter-spacing: -0.02em;
  color: #FFFFFF;
}

/* Monospace Logistics Metadata Badge */
.truck-meta-tag {
  font-family: 'Space Mono', monospace;
  font-size: 0.875rem;
  letter-spacing: 0.05em;
  color: #FFD54F;
}
```

---

## Flex & Rail Grid Math

```css
/* Fleet Rail Slider Grid */
.c-rail_grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

@media (max-width: 768px) {
  .c-rail_grid {
    grid-template-columns: 1fr;
  }
}
```
