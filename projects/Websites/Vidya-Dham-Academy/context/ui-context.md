---
title: Vidya Dham Academy - UI Context
domain: architecture
summary: Locked custom brand palette and reference-driven component assembly protocol for Vidya Dham Academy.
critical_directives:
  - Strict Zero-Gradient & Zero-Glassmorphism Rule.
  - Hold layout assembly until operator provides visual reference components.
section_outline:
  - UI Context
  - Visual Language & Locked Brand Palette
  - CSS Color Tokens
  - Typography Scale
  - Layout & Component Assembly Protocol
read_triggers:
  - When working on architecture in context/ui-context.md
  - When reading context for UI Context
tags:
  - architecture
  - ui-context
updated: '2026-08-13'
---

# UI Context

## Visual Language & Locked Brand Palette

Vidya Dham Academy uses an authoritative, high-trust academic color scheme combining Deep Academic Blue with Muted Gold accents on a Warm Ivory canvas. All fills are crisp and solid.

**Aesthetic Rules:**
- **Solid Fills Only**: No gradients, mesh gradients, or radial glows.
- **Flat Surface Cards**: Pure White cards with subtle 1px borders (`#E2E8F0` or `#CBD5E1`).
- **Zero Glassmorphism**: No backdrop blur or semi-transparent cards.

## CSS Color Tokens

| Role | CSS Variable | Hex Value | Purpose |
| --- | --- | --- | --- |
| Primary Accent | `--color-primary` | `#102A43` | Deep Academic Blue headers, primary CTAs, & accents |
| Secondary Accent | `--color-secondary` | `#C69C45` | Muted Gold highlights, badges, & active states (<5%) |
| Base Background | `--bg-base` | `#F7F5EF` | Warm Ivory main page canvas |
| Surface Background | `--bg-surface` | `#FFFFFF` | Pure White card and panel containers |
| Primary Text | `--text-primary` | `#111827` | Deep Ink headings and main body text |
| Muted Text | `--text-muted` | `#667085` | Slate Grey subtitles, labels, and metadata |
| Border Default | `--border-default` | `#E2E8F0` | Solid subtle container borders |

## Typography & Spacing Scale (Fluid Relative Units)

- **Base Unit**: `1rem = 16px` default root calculation.
- **Fluid Typography System**:
  - `Hero Title`: `clamp(2rem, 5vw + 1rem, 4.5rem)`
  - `Section Heading (H2)`: `clamp(1.5rem, 3.5vw + 0.8rem, 3rem)`
  - `Subheading (H3)`: `clamp(1.2rem, 2vw + 0.5rem, 2rem)`
  - `Body Text`: `clamp(0.95rem, 1vw + 0.4rem, 1.125rem)`
  - `Caption / Eyebrow`: `clamp(0.75rem, 0.8vw + 0.3rem, 0.875rem)`
- **Fluid Spacing & Padding Tokens**:
  - `--space-xs`: `clamp(0.25rem, 0.5vw, 0.5rem)`
  - `--space-sm`: `clamp(0.5rem, 1vw, 1rem)`
  - `--space-md`: `clamp(1rem, 2vw, 2rem)`
  - `--space-lg`: `clamp(2rem, 4vw, 4rem)`
  - `--space-xl`: `clamp(3rem, 6vw, 6rem)`

## Progressive Hover & Touch Interaction Policy

- **Desktop Mouse Viewports**: Hover effects are enabled strictly inside `@media (hover: hover) and (pointer: fine)` queries for smooth desktop cursor interactions.
- **Mobile & Touch Viewports**: On touchscreens (`@media (hover: none)`), hover state styling is disabled to prevent stuck states, and automatically replaced with touch micro-presses (`:active { transform: scale(0.97); }` and tap color feedback).

## Component & Content Assembly Protocol

- **Reference Hold Policy**: Layout structure and section component choices are on hold until the operator provides visual component references.
- **Mandatory Pre-Action Confirmation**: Always explain proposed technical actions, file edits, and architectural changes to the operator first and obtain explicit confirmation before proceeding.

