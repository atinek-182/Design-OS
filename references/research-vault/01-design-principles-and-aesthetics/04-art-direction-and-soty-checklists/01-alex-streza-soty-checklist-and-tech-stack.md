---
title: Alex Streza SOTY Checklist, Tech Stack Architecture & Judging Scoring Scale
domain: research
summary: Key traits, tech stack architecture, and judging scoring scale for Awwwards SOTY winners from Alex Streza's Medium
  guide.
critical_directives:
- Enforce Astro SSG + React client components for zero-bundle-bloat Awwwards sites.
- Target SOTD score benchmark >= 7.5 across Design, Usability, Creativity, and Content.
section_outline:
- Alex Streza SOTY Checklist, Tech Stack Architecture & Judging Scoring Scale
- SOTY Checklist & Key Design Traits
- Tech Stack & Architecture for SOTY Winners
- Awwwards Judging & Scoring Breakdown
read_triggers:
- When building Awwwards-grade websites SOTY checklist
- When configuring Astro React Three.js GSAP tech stack
- When auditing Awwwards judging scores and mobile excellence
tags:
- SOTY-checklist
- tech-stack
- judging-criteria
- awwwards
updated: '2026-08-08'
---

# Alex Streza SOTY Checklist, Tech Stack Architecture & Judging Scoring Scale

## SOTY Checklist & Key Design Traits

1. **Follow & Responsibly Break Design Principles**: Maintain baseline hierarchy, spacing, and grids, but exercise visual freedom (weird asymmetric layouts, exaggerated typography dimensions).
2. **Exaggerated Display Typography**: Oversized headlines, broad font widths, poster-style display typefaces.
3. **Page Transitions, Loaders & Staggered Animations**: Interactive preloader sequences, curtain reveals, staggered element reveals on section scroll.
4. **Creative Micro-Interactions**: Hover micro-physics, dynamic magnetic buttons, tilt states.
5. **Unique Imagery & Art Direction**: Custom 3D renders, high-contrast dark themes, solid crisp fills (zero generic gradients/glassmorphism).
6. **Cursor Follow & Dynamic Hover States**: Custom SVG/canvas custom cursors with trailing physics and interactive state changes.
7. **Smooth Inertia Scroll & Parallax**: Lenis smooth scroll momentum tied to GSAP ScrollTrigger timeline pins.
8. **3D Stages, GLSL Shaders, AR/VR**: WebGL canvas stages, custom fragment shaders for liquid image transitions and ASCII rendering.
9. **Controlled Randomness**: Subtle state/animation variations on page reloads or user hovers to make the site feel alive and organic.

---

## Tech Stack & Architecture for SOTY Winners

- **Framework & Bundle Strategy**: Astro for SSG (small JS footprint) paired with React Client Components for CSR 3D canvas stages.
- **3D Stack**: Three.js, `@react-three/fiber`, `@react-three/drei`, `@react-three/rapier` (physics).
- **Motion Stack**: GSAP + ScrollTrigger (Industry Standard #1), `framer-motion`, `react-spring`.
- **Typography Foundries**: Pangram Pangram Foundry, Trade Gothic, Barlow Expanded.
- **Analytics & Performance**: Low-overhead tracking (Splitbee), Lighthouse Mobile Excellence score > 70/100.

---

## Awwwards Judging & Scoring Breakdown

- **Honorable Mention**: User/Jury score >= 6.5
- **Mobile Excellence**: Score >= 70/100 under Google Mobile Guidelines
- **Site of the Day (SOTD)**: Highest overall score for the day
- **Site of the Month (SOTM)**: Top 8 sites of the month re-evaluated by jury
- **Site of the Year (SOTY)**: Annual winner from SOTM pool
