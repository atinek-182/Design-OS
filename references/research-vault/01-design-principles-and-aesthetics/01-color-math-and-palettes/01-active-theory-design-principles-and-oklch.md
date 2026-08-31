---
title: Active Theory — Visual Principles, Cosmic Dark Mode & OKLCH Fills
domain: reference
summary: Deep visual aesthetics breakdown of Active Theory including OKLCH cosmic dark mode color tokens, HUD overlay architecture,
  and city switcher visual principles.
critical_directives:
- Sourcing components: Map to local Awwwards component vault at C:\Users\HP\Downloads\Components\Active-Theory-Style.
- Strictly enforce zero-emoji mandate across all vault documentation.
section_outline:
- Active Theory — Visual Principles, Cosmic Dark Mode & OKLCH Fills
- Visual Aesthetics & HUD Architecture
- OKLCH Dopamine Color Token Specification
read_triggers:
- When working on reference in references/awwwards-research-vault/01-design-principles-and-aesthetics/06-active-theory-design-principles-and-oklch.md
- When reading context for Active Theory Design Principles
tags:
- reference
- awwwards
- active-theory
- oklch
- aesthetics
updated: '2026-08-08'
---

# Active Theory — Visual Principles, Cosmic Dark Mode & OKLCH Fills

Active Theory (2x Awwwards Agency of the Year & Developer of the Year) establishes a signature cyberpunk-minimalist visual aesthetic built around a deep cosmic void background, high-contrast OKLCH neon accents, and a spatial HUD overlay navigation bar.

---

## Visual Aesthetics & HUD Architecture

1. **Fixed HUD Overlay Navigation**: Positioned at top viewport bounds with dynamic clip-path hover triggers, city location toggle (`LA / AMS`), and studio mode toggle (`PORTFOLIO / VR / AR`).
2. **Cosmic Void Depth**: Replaces standard flat black `#000000` with an atmospheric dark slate void (`oklch(0.06 0.01 260)`), rendering high-depth WebGL scenes without harsh edge contrast.
3. **High-Contrast Neon Accents**: Uses vibrant electric cyan and magenta highlight accents to draw immediate visual focus to interactive HUD indicators and mode buttons.

---

## OKLCH Dopamine Color Token Specification

| Color Role | Hex Code | OKLCH Color Value | Usage & Layering |
|---|---|---|---|
| **Cosmic Void Background** | `#050608` | `oklch(0.06 0.01 260)` | Primary body canvas background fill |
| **Deep Slate Surface** | `#0e1117` | `oklch(0.12 0.02 260)` | 3D Bento card container fills & modal backdrops |
| **Electric Sky Blue** | `#38bdf8` | `oklch(0.72 0.18 220)` | Active HUD indicators, hover states & key links |
| **Neon Magenta Accent** | `#e056fd` | `oklch(0.65 0.25 320)` | VR/AR mode highlight badges & secondary CTAs |
| **Monospace Data Text** | `#94a3b8` | `oklch(0.68 0.03 240)` | Technical HUD telemetry data & labels |
