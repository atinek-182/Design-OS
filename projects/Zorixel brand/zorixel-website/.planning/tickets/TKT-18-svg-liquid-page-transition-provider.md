# TKT-18: Global SVG Liquid Stroke Page Transition Provider

## Overview
Deconstruct and implement the global GSAP + SVG dual-path liquid stroke page transition provider wrapping Next.js 15 App Router navigation, adapted from `REF-006` (`SVG-Page-transition`).

---

## 📋 Definition of Done (DoD)
- [ ] Component `src/components/providers/PageTransitionProvider.tsx` created and wrapped in `src/app/layout.tsx`.
- [ ] Dynamically measures SVG path lengths and binds `strokeDasharray` & `strokeDashoffset`.
- [ ] Intercepts client navigation across Navbar, Footer, and internal card links with custom `usePageTransition()` hook.
- [ ] `leave()` and `enter()` GSAP timelines animate Velvet Burgundy (`#6D001A`) and Electric Crimson (`#D61C2C`) stroke sweeps smoothly.
- [ ] Verified smooth 60FPS route transitions across 5 responsive viewports via Playwright testing.

---

## 🛠️ Task Checklist
- [ ] Create `src/components/providers/PageTransitionProvider.tsx`.
- [ ] Implement `usePageTransition()` hook for link click interception.
- [ ] Add `leave()` promise resolving when screen is 100% covered.
- [ ] Add `enter()` promise resolving when new route is fully revealed.
- [ ] Test hardware acceleration (`will-change: stroke-dashoffset`).
