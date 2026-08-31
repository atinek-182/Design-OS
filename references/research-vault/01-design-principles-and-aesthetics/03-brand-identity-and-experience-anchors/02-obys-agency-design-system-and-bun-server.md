---
title: Obys Agency Design System, Typeface-First Foundation & Bun Zero-CSR Tech Stack
domain: research
summary: Technical and design breakdown of Obys Agency redesign (SOTY Winner 2023), featuring OTF Obys NG custom typeface,
  Active Logo experience anchor, Bun HTTP server, 0kb client React bundle, and in-house RAF animation engine.
critical_directives:
- Always start design systems with typography (OTF Obys NG principle) before wireframing.
- Turn brand logos into active experience anchors that adapt dynamically across layouts.
- Eliminate heavy client-side React bundles; use React for SSR templating with TypeScript + native RAF/WAAPI for client animations.
section_outline:
- Obys Agency Design System, Typeface-First Foundation & Bun Zero-CSR Tech Stack
- Executive Summary & Pedigree
- 1. Typeface-First Foundation & Active Logo Anchor
- 2. Bun & Zero-CSR Client Architecture
read_triggers:
- When building Awwwards-grade websites Obys Agency design
- When configuring Bun server zero CSR React bundle
- When designing active logo anchors and custom RAF motion engines
tags:
- obys-agency
- design-system
- bun-server
- typography-first
- zero-bundle-bloat
updated: '2026-08-08'
---

# Obys Agency Design System, Typeface-First Foundation & Bun Zero-CSR Tech Stack

## Executive Summary & Pedigree

- **Studio**: Obys Agency (Awwwards Studio of the Year 2023).
- **Core Philosophy**: "It started with a typeface." Design begins with custom display typography, followed by active brand logo integration, and aggressive omission of non-essential UI clutter.

---

## 1. Typeface-First Foundation & Active Logo Anchor

1. **Typeface-First Design Methodology**: Obys does not begin projects with wireframes or layout grids. The design process starts by creating/selecting custom typography (`OTF Obys NG` neo-grotesque). The font geometry dictates grid spacing, vertical rhythm, font hierarchy, and UI character.
2. **Active Logo Experience Anchor**: Rather than treating the logo as a static header image, the logo becomes a dynamic visual participant. It morphs between dark/light states, scales along page scroll, and anchors user orientation across project view transitions.
3. **Multi-Layout Portfolio Adaptability**: The Obys project index offers 3 real-time layout views (Vertical, Horizontal, Grid), allowing users to explore the same content through different spatial rhythms while maintaining unified brand identity.
4. **Ruthless Content Omission**: High-converting, Awwwards-grade agency sites omit secondary clutter (old awards, bloated archives, generic text walls). Focus 100% on 4-6 master projects.

---

## 2. Bun & Zero-CSR Client Architecture

- **Server / Runtime**: Powered by **Bun** as both the high-performance HTTP server and bundler.
- **SSR Templating Strategy**: **React is used exclusively as a server-side templating engine**. Zero client-side React bundle (`0kb CSR React`), eliminating hydration overhead and main-thread blocking.
- **Client Motion Engine**: 100% TypeScript motion engine built directly on `requestAnimationFrame` (RAF) and Web Animations API (WAAPI) for 60fps smooth transitions.
- **Styling**: Pure Vanilla CSS, ensuring low overhead, transparent scoping, and zero utility-class bloat.
