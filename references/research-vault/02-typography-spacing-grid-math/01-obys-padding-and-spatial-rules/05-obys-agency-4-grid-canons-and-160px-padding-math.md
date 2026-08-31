---
title: Obys Agency — The 4 Core Grid Canons & 160px Vertical Padding Math
domain: reference
summary: Exhaustive technical breakdown of Obys Agency's 4 Grid Canons (Column, Van De Graaff, Modular, Baseline) and 140px-160px
  vertical padding standards.
critical_directives:
- Sourcing components: Map to local Awwwards component vault at C:\Users\HP\Downloads\Components\Obys-Agency-Design-System.
- Enforce zero-emoji mandate across all vault documentation.
section_outline:
- Obys Agency — The 4 Core Grid Canons & 160px Vertical Padding Math
- The 4 Core Grid Archetypes
- Screen Margin & Gutter Math Standards
read_triggers:
- When working on reference in references/awwwards-research-vault/02-typography-spacing-grid-math/11-obys-agency-4-grid-canons-and-160px-padding-math.md
- When reading context for Obys Agency Grid Canons Math
tags:
- reference
- awwwards
- obys-agency
- grid-canons
- van-de-graaff
- padding-math
updated: '2026-08-08'
---

# Obys Agency — The 4 Core Grid Canons & 160px Vertical Padding Math

Obys Agency's layout architecture is anchored by 4 primary grid canons that regulate all spatial proportions across desktop, laptop, tablet, and mobile displays.

---

## The 4 Core Grid Archetypes

```
┌───────────────────────────────┬───────────────────────────────┐
│ 1. COLUMN GRID                │ 2. VAN DE GRAAFF CANON         │
│ • 12, 10, or 8 Columns        │ • Diagonal Intersections      │
│ • Margins: 30px / 60px / 80px │ • Golden Ratio Proportions    │
│ • Gutters: 20px               │ • Power Lines Anchor Blocks   │
├───────────────────────────────┼───────────────────────────────┤
│ 3. RECTANGULAR / MODULAR      │ 4. HYBRID / BASELINE GRID     │
│ • Bounding Box Modules        │ • Vertical Line-Height Unit   │
│ • Content Block Scaling       │ • Column Splitting (8 -> 16)  │
│ • Marginless / Gutterless     │ • Padding System Integration  │
└───────────────────────────────┴───────────────────────────────┘
```

### 1. Column Grid (Obys Workhorse)
- **12 Columns**: Desktop Display (`>1440px`, e.g. 1920x1080)
- **10 Columns**: Laptop Display (`1024px - 1440px`)
- **8 Columns**: Tablet Display (`768px - 1024px`)
- **Gutter Standard**: `20px` constant spacing between columns.

### 2. Van De Graaff Canon (Golden Canon)
- **Construction**: Primary diagonals intersect corner-to-side diagonals to form "Power Lines".
- **Power Lines**: Headlines, hero imagery, and video viewports are anchored directly onto these diagonal intersection lines.

### 3. Rectangular / Modular Grid
- Allows marginless/gutterless full-bleed card layouts. Subdivides 8 columns into 16 micro-columns.

### 4. Typographic Baseline Grid
- **Formula**: $\text{Vertical Unit} = \text{Font Size} \times \text{Line Height Ratio}$ ($16\text{px} \times 1.5 = 24\text{px}$). All margins and paddings are integer multiples ($1\times, 2\times, 3\times$).

---

## Screen Margin & Gutter Math Standards

| Viewport Resolution | Active Columns | Screen Side Margin | Gutter Width | Vertical Section Padding |
|---|---|---|---|---|
| **Mobile (`<768px`)** | 4-6 Columns | `30px` | `16px` | `60px - 80px` |
| **Tablet (`768px - 1024px`)** | 8 Columns | `60px` | `20px` | `100px` |
| **Laptop (`1024px - 1440px`)** | 10 Columns | `60px` | `20px` | `120px - 140px` |
| **Desktop (`>1440px`)** | 12 Columns | `80px` | `20px` | **`140px - 160px`** |
