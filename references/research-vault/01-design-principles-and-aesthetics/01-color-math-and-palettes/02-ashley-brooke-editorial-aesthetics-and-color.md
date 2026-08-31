---
title: Ashley Brooke — Editorial Aesthetics, Drafting Grids & Matte Color Palette
domain: reference
summary: Deep visual design breakdown of Ashley Brooke CS including editorial serif typography, matte charcoal color tokens,
  and architectural drafting grid guides.
critical_directives:
- Sourcing components: Map to local Awwwards component vault at C:\Users\HP\Downloads\Components\Editorial-Cursor-Hover.
- Enforce zero-emoji mandate across all vault documentation.
section_outline:
- Ashley Brooke — Editorial Aesthetics, Drafting Grids & Matte Color Palette
- Visual Design Philosophy & Studio Archetype
- Matte Color Palette & Color Mix Engine
read_triggers:
- When working on reference in references/awwwards-research-vault/01-design-principles-and-aesthetics/07-ashley-brooke-editorial-aesthetics-and-color.md
- When reading context for Ashley Brooke Aesthetics
tags:
- reference
- awwwards
- ashley-brooke
- editorial-design
- oklch
- aesthetics
updated: '2026-08-08'
---

# Ashley Brooke — Editorial Aesthetics, Drafting Grids & Matte Color Palette

`Ashley Brooke CS` is a boutique creative consultancy and branding studio featured on Landing.love and Muzli. The visual identity embodies high-level editorial luxury combined with architectural precision.

---

## Visual Design Philosophy & Studio Archetype

- **Core Mantra**: *"Grounded in taking action, not just stopping at ideas."*
- **Tactile Grid Guides**: Visible vertical column guides (`.guide_wrap`, `.guide_layout`) create an architectural drafting blueprint aesthetic.
- **High-Contrast Editorial Texture**: High-contrast serif headlines layered over dark matte surfaces.

---

## Matte Color Palette & Color Mix Engine

| Color Role | Hex Code | Purpose & Application |
|---|---|---|
| **Matte Charcoal Background** | `#0D0D0E` | Main body viewport fill |
| **Dark Card Surface** | `#161618` | Portfolio card container & modal fills |
| **Terracotta Accent Red** | `#E0533C` | Primary CTA buttons, hover highlights & badge fills |
| **Warm Cream Off-White** | `#F5F3EF` | Editorial headlines, main text & active indicators |

### CSS Color-Mix In Lab Space

To blend background layers without opacity bleeding:

```css
.abcs-card-overlay {
  background-color: color-mix(in lab, currentcolor 60%, transparent);
}
```
