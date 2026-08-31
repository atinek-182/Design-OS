---
title: Exo Ape Digital Hospitality, Continuous Project Flow & Navigation Island Architecture
domain: research
summary: Design and UX architecture breakdown of Exo Ape's Fluid Glass case study, detailing Digital Hospitality, continuous
  project flow scrollytelling, Nuxt + Storyblok + Vercel stack, and adaptive navigation islands.
critical_directives:
- Implement Digital Hospitality: Automatically expand footer CTA / menu island when user reaches 95% scroll depth without
    requiring extra clicks.
- Enforce Continuous Project Flow: Transition directly from the bottom of one case study into the header of the next project.
section_outline:
- Executive Summary & Pedigree
- 1. Core UX Breakthroughs
- 2. Exo Ape Tech Stack & Motion Engine
read_triggers:
- When building Awwwards-grade websites Exo Ape design
- When implementing Digital Hospitality expanding menu island
- When configuring continuous project flow scrollytelling
tags:
- exo-ape
- digital-hospitality
- ux-psychology
- navigation-island
- nuxt
updated: '2026-08-08'
---

# Exo Ape Digital Hospitality, Continuous Project Flow & Navigation Island Architecture

## Executive Summary & Pedigree

- **Studio**: Exo Ape (Roermond, Netherlands).
- **Client**: Fluid Glass (Structural architectural glazing).
- **Core Concept**: Digital Hospitality — turning digital touchpoints into warm, human, friction-free interactions that mirror physical craftsmanship.

---

## 1. Core UX Breakthroughs

1. **Digital Hospitality (Frictionless Bottom Navigation)**: As the user reaches 95% scroll depth at the bottom of a page, the menu island gently expands and reveals direct contact/quote options automatically. Eliminates the cognitive friction of searching for a contact button.
2. **Continuous Project Flow**: Case studies are not isolated pages that require backing out to an index grid. Reaching the end of Project A smoothly scrolls into the title banner of Project B.
3. **Adaptive Navigation Island**: A central floating UI pill component (`navigation island`) that dynamically morphs its options based on current scroll section (Overview -> Hardware Process -> Showroom Video -> Quote Flow).
4. **Context-Aware Quote Engine**: Multi-step quote flow captures exact project dimensions and attaches current view context to the inquiry payload.

---

## 2. Exo Ape Tech Stack & Motion Engine

- **Framework**: Nuxt.js (SSG/SSR) + Storyblok (Headless CMS) + Vercel Edge Hosting.
- **Motion & SVG Details**: GSAP ScrollTrigger timeline pins combined with subtle SVG path morphing on hover states.
- **Preloader Handover**: Animated logo preloader transforms directly into the hero canvas container, eliminating jarring page load cuts.
