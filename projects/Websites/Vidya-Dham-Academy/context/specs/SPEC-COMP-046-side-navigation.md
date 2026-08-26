---
title: Vidya Dham Academy - Feature Specification: COMP-046 Side Navigation Wipe Menu
domain: feature-specification
summary: Technical and design specification for COMP-046 side navigation wipe menu component adaptation for Vidya Dham Academy.
critical_directives:
  - Do NOT write implementation code until explicit operator approval ('YES').
  - Ensure dynamic color variable bindings for seamless hero contrast switching (light vs dark mode theme inversion).
  - Enforce GSAP animation context cleanup for GPU memory leak prevention.
read_triggers:
  - When working on COMP-046 side navigation spec
  - When creating or reviewing context/specs/SPEC-COMP-046-side-navigation.md
tags:
  - feature-spec
  - comp-046
  - side-navigation
updated: '2026-08-13'
---

# Feature Spec: COMP-046 GSAP Side Navigation Wipe Menu (Mobile-First)

## 1. Component Architecture & Dependencies

- **Target Framework**: Next.js 15 App Router (`React Server Components` default, `'use client'` on interactive drawer wrapper).
- **Core Dependencies**: GSAP 3.12+ (`CustomEase` plugin), Lucide React (`Menu`, `X` icons).
- **In-Scope Elements**: Standalone header (Logo mark + 48px menu toggle button) and 3-panel GSAP wipe drawer overlay.
- **Locked Navigation Links**: `01. Home` (`/`), `02. About Us` (`/about`), `03. Academic Programs` (`/programs`), `04. Results & Toppers` (`/results`), `05. Contact & Admissions` (`/contact`).

## 2. Scoped CSS Module Tokens (`styles.module.css`)

- **Dynamic Theme Custom Properties**:
  - Dark Hero Mode: `--nav-bg-main: #F7F5EF`, `--nav-text: #111827`, `--nav-panel-1: #E2E8F0`, `--nav-panel-2: #C69C45`.
  - Light Hero Mode: `--nav-bg-main: #102A43`, `--nav-text: #F7F5EF`, `--nav-panel-1: #1E3A8A`, `--nav-panel-2: #C69C45`.
- **Hybrid Responsive Typography**:
  - Desktop (`@media (min-width: 1024px)`): Rigid layout precision (`rem`/`em` units).
  - Mobile/Tablet (`< 768px`): Fluid relative scaling (`clamp(1.5rem, 4vw + 1rem, 2.5rem)`).
- **Progressive Hover Encapsulation**: `@media (hover: hover) and (pointer: fine)` wraps desktop hover states. Touch viewports use `:active { transform: scale(0.97); }` active press feedback.

## 3. Touch & Animation Lifecycle Guide

- **CustomEase Curve**: `CustomEase.create("main", "0.65, 0.01, 0.05, 0.99")`.
- **Open Sequence**: Rotate toggle icon `0deg` -> `315deg`, slide text `Menu` -> `Close`, stagger slide background panels `xPercent: 101` -> `0` (`0.12s` stagger), stagger animate menu items `yPercent: 140, rotate: 10deg` -> `0`.
- **React GPU Memory Cleanup**: Lifecycle wrapped inside `useEffect` hook with `gsap.context()` cleanup on unmount:
  ```typescript
  useEffect(() => {
    const ctx = gsap.context(() => {
      // GSAP timeline & listeners
    }, navRef);
    return () => ctx.revert();
  }, []);
  ```

## 4. SecurityOS & Mobile Performance Verification Checklist

- [ ] Next.js 15 `'use client'` Directive
- [ ] CSS Modules Isolation (`styles.module.css`)
- [ ] Relative Fluid Units Only (`rem`, `em`, `%`, `vw`, `vh`, `clamp()`) — Zero hardcoded `px`
- [ ] Progressive Hover Encapsulation (`@media (hover: hover) and (pointer: fine)`)
- [ ] Mobile Touch Active Micro-Press (`:active { transform: scale(0.97); }`)
- [ ] Minimum 48px Touch Target Area on Mobile Viewports
- [ ] GSAP Memory Cleanup via `gsap.context()` in `useEffect` hook
- [ ] SecurityOS Relative Path Validation (Allowlist URLs: `/`, `/about`, `/programs`, `/results`, `/contact`)
- [ ] Zero Emojis across all labels, comments, and strings


