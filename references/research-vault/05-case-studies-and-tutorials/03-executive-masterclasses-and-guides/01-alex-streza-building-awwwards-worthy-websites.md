---
title: A Guide on Building Awwwards-Worthy Websites
domain: research
summary: 'Source: https://medium.com/@alex.streza/a-guide-on-building-awwwards-worthy-websites-c4fa710b1c43 Author: Alex Streza
  · Published: 2022-10-10'
critical_directives:
- Follow document guidance without bypassing established safeguards.
section_outline:
- A Guide on Building Awwwards-Worthy Websites
- Executive Breakdown & Key Traits of SOTY Winners
- SOTY Checklist & Key Design Traits
- Tech Stack & Architecture for SOTY Winners
- Awwwards Judging & Scoring Scale
read_triggers:
- When working on research in references/awwwards-research-vault/05-case-studies-and-tutorials/03-executive-masterclasses-and-guides/02-alex-streza-building-awwwards-worthy-websites.md
- When reading context for A Guide on Building Awwwards-Worthy Websites
tags:
- research
- 02-alex-streza-building-awwwards-worthy-websites
updated: '2026-08-08'
---

# A Guide on Building Awwwards-Worthy Websites
Source: https://medium.com/@alex.streza/a-guide-on-building-awwwards-worthy-websites-c4fa710b1c43
Author: Alex Streza · Published: 2022-10-10

## Executive Breakdown & Key Traits of SOTY Winners

Creating an Awwwards-worthy website requires visual creativity, technical craft, microinteractions, and intentional randomness.

### SOTY Checklist & Key Design Traits
1. **Follow & Responsibly Break Design Principles**: Maintain baseline hierarchy, spacing, and grids, but exercise visual freedom (weird asymmetric layouts, exaggerated typography dimensions).
2. **Exaggerated Display Typography**: Oversized headlines, broad font widths, poster-style display type faces.
3. **Page Transitions, Loaders & Staggered Animations**: Interactive preloader sequences, curtain reveals, staggered element reveals on section scroll.
4. **Creative Micro-Interactions**: Hover micro-physics, dynamic magnetic buttons, tilt states.
5. **Unique Imagery & Art Direction**: Custom 3D renders, high-contrast dark themes, solid crisp fills (zero generic gradients/glassmorphism).
6. **Cursor Follow & Dynamic Hover States**: Custom SVG/canvas custom cursors with trailing physics and interactive state changes.
7. **Smooth Inertia Scroll & Parallax**: Lenis smooth scroll momentum tied to GSAP ScrollTrigger timeline pins.
8. **3D Stages, GLSL Shaders, AR/VR**: WebGL canvas stages, custom fragment shaders for liquid image transitions and ASCII rendering.
9. **Controlled Randomness**: Subtle state/animation variations on page reloads or user hovers to make the site feel alive and organic.

### Tech Stack & Architecture for SOTY Winners
- **Framework & Bundle Strategy**: Astro for SSG (small JS footprint) paired with React Client Components for CSR 3D canvas stages.
- **3D Stack**: Three.js, `@react-three/fiber`, `@react-three/drei`, `@react-three/rapier` (physics).
- **Motion Stack**: GSAP + ScrollTrigger (Industry Standard #1), `framer-motion`, `react-spring`.
- **Typography Foundries**: Pangram Pangram Foundry, Trade Gothic, Barlow Expanded.
- **Analytics & Performance**: Low-overhead tracking (Splitbee), Lighthouse Mobile Excellence score > 70/100.

### Awwwards Judging & Scoring Scale
- **Honorable Mention**: User/Jury score >= 6.5
- **Mobile Excellence**: Score >= 70/100 under Google Mobile Guidelines
- **Site of the Day (SOTD)**: Highest overall score for the day
- **Site of the Month (SOTM)**: Top 8 sites of the month re-evaluated by jury
- **Site of the Year (SOTY)**: Annual winner from SOTM pool
