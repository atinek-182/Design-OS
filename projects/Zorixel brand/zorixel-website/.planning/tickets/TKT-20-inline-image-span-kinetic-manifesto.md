# TKT-20: Inline Image-Span Kinetic Manifesto Statement (`/`)

## Overview
Deconstruct and implement the standalone homepage kinetic manifesto statement section with inline expanding `.img-span` preview boxes, adapted from `REF-008` (`text-image-line-reveal.html`).

---

## 📋 Definition of Done (DoD)
- [ ] Component `src/components/home/KineticManifestoStatement.tsx` created and placed below Hero Stage on `/`.
- [ ] Interwove `Havock` display text lines with inline `.img-span` container elements.
- [ ] Registered GSAP `ScrollTrigger` scrubbing `.img-span` width from `0px` to `300px` on scroll.
- [ ] Bound local Zorixel preview cards (`public/previews/spiral-cards/`) to inline image slots.
- [ ] Verified smooth 60FPS scrolling across 5 responsive viewports via Playwright testing.

---

## 🛠️ Task Checklist
- [ ] Create `src/components/home/KineticManifestoStatement.tsx`.
- [ ] Configure `useRef` for `.line` and `.img-span` elements.
- [ ] Add GSAP ScrollTrigger timeline scrubbing `width: 300` per line.
- [ ] Test mobile responsive scaling (<768px).
