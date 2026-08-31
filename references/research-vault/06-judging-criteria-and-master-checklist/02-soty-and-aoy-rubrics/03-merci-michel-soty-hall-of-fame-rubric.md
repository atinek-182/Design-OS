---
title: Merci Michel — Awwwards SOTY Hall of Fame Evaluation Rubric
domain: reference
summary: Evaluation of Merci Michel against Awwwards Site of the Year (SOTY) and Hall of Fame developer metrics.
critical_directives:
- Sourcing components: Map to local Awwwards component vault at C:\Users\HP\Downloads\Components\Analog-Grain-Shader.
- Enforce zero-emoji mandate across all vault documentation.
section_outline:
- Merci Michel — Awwwards SOTY Hall of Fame Evaluation Rubric
- SOTY Evaluation Matrix
- Gamified WebGL 60FPS Optimization Safeguards
read_triggers:
- When working on reference in references/awwwards-research-vault/06-judging-criteria-and-master-checklist/15-merci-michel-soty-hall-of-fame-rubric.md
- When reading context for Merci Michel SOTY Evaluation Rubric
tags:
- reference
- awwwards
- merci-michel
- soty
- hall-of-fame-rubric
updated: '2026-08-08'
---

# Merci Michel — Awwwards SOTY Hall of Fame Evaluation Rubric

Evaluating Merci Michel against Awwwards Site of the Year (SOTY) standards illustrates why the studio has won 2 SOTY and 41 SOTD awards.

---

## SOTY Evaluation Matrix

| Category | Weight | Score | Technical & Visual Rationale |
|---|---|---|---|
| **Design** | `40%` | **9.9 / 10** | Obsidian Void (`#0a0b10`) background with extended geometric sans display typography, neon crimson accents, and translucent glassmorphism overlays. |
| **Usability** | `30%` | **9.9 / 10** | Howler.js spatial sound controls, trailing neon circle cursor with magnetic target snapping, touch-optimized mobile stage. |
| **Creativity** | `20%` | **10.0 / 10** | Three.js particle bloom stage with pointer proximity vector displacement math. |
| **Content** | `10%` | **9.9 / 10** | Iconic interactive campaigns for Lacoste, Hermès, Chanel, and global brands. |

---

## Gamified WebGL 60FPS Optimization Safeguards

1. **Decoupled WebGL Render Loop**: Three.js rendering pipeline executes independently of DOM animation frames, preventing scroll jank.
2. **Dynamic Particle Scaling for Mobile GPUs**: Automatically reduces active particle count on mobile devices to preserve 60 FPS frame rates.
