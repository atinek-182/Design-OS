# TKT-17: Polygon Clip-Path Morphing Manifesto Stage (`/about`)

## Overview
Deconstruct and implement the GSAP + ScrollTrigger clip-path morphing reveal and character kinetic headline stage for the `/about` route, adapted from `REF-005` (`Dragon-Scroll-Effect`).

---

## 📋 Definition of Done (DoD)
- [ ] Component `src/components/about/PolygonManifestoStage.tsx` created and exported.
- [ ] Registered GSAP `ScrollTrigger` and `SplitText` for character-by-character scrub animation.
- [ ] Dynamic entry polygon morph (`clip-path: polygon(25% 25%, ...)` -> `polygon(0% 0%, ...)`) and exit morph (`polygon(0% 0%, ...)` -> `polygon(0% 0%, 100% 0%, 75% 60%, 25% 75%)`) configured per chapter section.
- [ ] Bound 4 manifesto chapters (Vision, 3Ms Framework, AI OS, Creator Ecosystem) to `Havock` and `Rosehot` typography.
- [ ] Verified smooth 60FPS scrolling on 5 responsive viewports (Mobile 375px to Desktop 1920px) via Playwright testing.

---

## 🛠️ Task Checklist
- [ ] Create `src/components/about/PolygonManifestoStage.tsx`.
- [ ] Configure `useRef` array for 4 chapter sections (`150svh` container height).
- [ ] Set up GSAP timeline context cleanup on unmount.
- [ ] Test clip-path performance and GPU hardware acceleration (`will-change: clip-path`).
