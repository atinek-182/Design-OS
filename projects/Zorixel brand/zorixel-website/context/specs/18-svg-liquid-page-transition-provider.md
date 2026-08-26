# SPEC-18: Global SVG Liquid Stroke Page Transition Provider

## Overview
This specification details the global SVG liquid stroke wipe page transition engine for Next.js 15 App Router client navigation, deconstructed from `REF-006` (`SVG-Page-transition`).

---

## 🎯 Scope & Component Placement
- **Scope:** Global Next.js App Router Provider (`src/app/layout.tsx` wrapper)
- **Target Component:** `src/components/providers/PageTransitionProvider.tsx`
- **Reference Vault Asset:** `REF-006` (`SVG-Page-transition/`)

---

## 🏗️ Structural Architecture & Motion Mechanics

### 1. Dual-Path SVG Vector Overlay
- Fixed, full-viewport SVG overlay (`.transition-svg`, `scale(1.5)`, `z-index: 9999`, `pointer-events: none`).
- Two organic multi-curve SVG paths rendered with `stroke-width: 200px`.
- Dynamically measures `path.getTotalLength()` on mount and sets `strokeDasharray` & `strokeDashoffset` equal to length.

### 2. Dual-Phase GSAP Navigation Lifecycle
- **Outbound Wipe (`leave()`):**
  - Triggered before route change occurs.
  - `strokeDashoffset` animates from `length` -> `0`.
  - `stroke-width` expands from `200px` -> `700px` (`duration: 1.0s`, `ease: "power1.inOut"`).
  - Obscures 100% of viewport with organic liquid brush sweep.
- **Route State Swap:**
  - Client router pushes new pathname (`router.push(targetHref)`).
- **Inbound Reveal (`enter()`):**
  - Triggered after new page mounts.
  - `strokeDashoffset` animates from `0` -> `-length`.
  - `stroke-width` contracts from `700px` -> `200px` (`duration: 1.0s`, `ease: "power1.inOut"`).
  - Resets `strokeDashoffset` back to `length` on completion.

---

## 🎨 Theme & Color Token Binding
- **Path 1 Stroke:** Velvet Burgundy (`#6D001A`)
- **Path 2 Stroke:** Electric Crimson (`#D61C2C`)
- **Overlay Background:** Obsidian Midnight (`#0D0E12`)

---

## 📱 Mobile Optimization Mandate
- Stroke expansion width clamped to `500px` on viewports <640px to prevent touch displacement.
- Uses `will-change: stroke-dashoffset, stroke-width` for hardware-accelerated GPU rendering.
