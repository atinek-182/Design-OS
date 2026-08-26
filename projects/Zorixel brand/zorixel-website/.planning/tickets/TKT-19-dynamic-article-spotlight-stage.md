# TKT-19: Dynamic Multi-Media Article Spotlight Stage (`/insights`)

## Overview
Deconstruct and implement the pinned GSAP + ScrollTrigger 3-way synchronized multi-media spotlight stage supporting images, videos, PDF guides, code snippets, and dynamic `X/N` step counters on `/insights`, adapted from `REF-007` (`Prototype-studio-rebuilt`).

---

## 📋 Definition of Done (DoD)
- [ ] Component `src/components/insights/ArticleSpotlightStage.tsx` created and exported.
- [ ] Dynamically computes total counter `X/N` from `items.length` without hardcoded 10-item limits.
- [ ] Polymorphic media renderer supports images, videos, PDF covers, and text/code guide cards.
- [ ] Registered GSAP `ScrollTrigger` pinned stage with 3-way synced movement (counter, media strip, section titles list).
- [ ] Viewport center threshold detection (`window.innerHeight / 2`) illuminates active media card opacity (`0.5` -> `1.0`).
- [ ] Verified smooth 60FPS scrolling across 5 responsive viewports via Playwright testing.

---

## 🛠️ Task Checklist
- [ ] Create `src/components/insights/ArticleSpotlightStage.tsx`.
- [ ] Define TypeScript interface for polymorphic `ArticleItem` (image, video, pdf, code_guide).
- [ ] Implement dynamic `items.length` counter formatter (`01/N`).
- [ ] Configure `ScrollTrigger` pinned stage with hardware-accelerated transforms (`will-change: transform`).
