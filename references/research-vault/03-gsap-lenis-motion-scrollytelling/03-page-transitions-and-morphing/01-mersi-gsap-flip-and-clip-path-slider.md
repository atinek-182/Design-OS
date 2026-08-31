---
title: MERSI Editorial WebGL — GSAP Flip.fit() Page Transition, Clip-Path Slider & Silent Teleport
domain: research
summary: 'title: MERSI Editorial WebGL — GSAP Flip.fit() Page Transition, Clip-Path Slider & Silent Teleport summary: Complete
  technical breakdown of MERSI Architecture (Awwwards SOTD, FWA FOTD, CSSDA WOTD Winner), detailing GSAP Flip.fit() Taxi.js
  page transi'
critical_directives:
- Follow document guidance without bypassing established safeguards.
section_outline:
- Executive Summary & Engineering Pedigree
- 1. GSAP `Flip.fit()` Taxi.js Page Transition Engine
- '2. Split-Screen Synchronized `clip-path: inset()` Slider'
- 3. Lenis Silent Scroll Teleportation (Infinite Scroll)
read_triggers:
- When working on research in references/awwwards-research-vault/03-gsap-lenis-motion-scrollytelling/03-page-transitions-and-morphing/03-mersi-gsap-flip-and-clip-path-slider.md
- When reading context for MERSI Editorial WebGL — GSAP Flip.fit() Page Transition, Clip-Path Slider & Silent Teleport
tags:
- research
- 03-mersi-gsap-flip-and-clip-path-slider
updated: '2026-08-08'
---

---
title: MERSI Editorial WebGL — GSAP Flip.fit() Page Transition, Clip-Path Slider & Silent Teleport
domain: research
summary: Complete technical breakdown of MERSI Architecture (Awwwards SOTD, FWA FOTD, CSSDA WOTD Winner), detailing GSAP Flip.fit() Taxi.js page transitions, split-screen clip-path: inset() sliders, GSAP Flip grid state morphing, and Lenis silent scroll teleportation.
critical_directives:
- Execute page transitions using `getBoundingClientRect()` thumbnail cloning + `Flip.fit(clone, targetContainer)` to morph cover images into case study headers over 1.2s.
- Build split-screen sliders using `clip-path: inset()` on dual overlapping image lists (`.left` top-down, `.right` bottom-up) driven by a single progress float.
- Implement silent infinite scroll loops by checking `lenis` bounds and calling `lenis.scrollTo(newScroll, { immediate: true })` before the user notices.
read_triggers:
- When building Awwwards-grade websites GSAP Flip page transitions
- When configuring MERSI split-screen clip-path slider
- When implementing GSAP Flip grid state morphing and Lenis silent scroll teleport
tags:
- MERSI
- gsap-flip
- clip-path-slider
- lenis-teleport
- taxi-js
- editorial-design
updated: '2026-08-10'
---

# MERSI Editorial WebGL — GSAP Flip.fit() Page Transition, Clip-Path Slider & Silent Teleport

## Executive Summary & Engineering Pedigree

- **Creators**: Clément Merouani (Branding & Design), Thomas Carré (Creative Dev) / FLOT NOIR.
- **Client**: MERSI (Paris Architecture Studio).
- **Core Aesthetic**: Print-Digital Hybrid — editorial book rhythm meets interactive WebGL transitions (Quiet Luxury).

---

## 1. GSAP `Flip.fit()` Taxi.js Page Transition Engine

Transitioning from a portfolio card into a full case study page without page reloads or jarring visual cuts:

```javascript
// Taxi.js FlipTransition Execution
import gsap from 'gsap';
import { Flip } from 'gsap/Flip';

export const FlipTransition = {
  onLeave({ current, trigger, done }) {
    // 1. Capture target image geometry
    const nativeImg = trigger.querySelector('img');
    const rect = nativeImg.getBoundingClientRect();

    // 2. Create floating clone on <body>
    const clone = nativeImg.cloneNode(true);
    Object.assign(clone.style, {
      position: 'fixed',
      top: `${rect.top}px`,
      left: `${rect.left}px`,
      width: `${rect.width}px`,
      height: `${rect.height}px`,
      zIndex: 9999,
    });
    document.body.appendChild(clone);

    // 3. Wipe curtain out
    gsap.to(current.container, {
      clipPath: 'inset(0% 0% 100% 0%)',
      duration: 0.8,
      onComplete: done,
    });
  },

  onEnter({ next, done }) {
    const clone = document.body.querySelector('.img-project-clone');
    const targetContainer = next.container.querySelector('.img-project-flip');

    // 4. GSAP Flip.fit() morphs clone into the new page header
    Flip.fit(clone, targetContainer, {
      duration: 1.2,
      ease: 'expo.inOut',
      onComplete: () => {
        // Adopt clone permanently into target container and remove native placeholder
        Object.assign(clone.style, {
          position: 'absolute',
          top: '0', left: '0',
          width: '100%', height: '100%',
          transform: '', zIndex: ''
        });
        targetContainer.appendChild(clone);
        clone.removeAttribute('class');
        done();
      }
    });
  }
};
```

---

## 2. Split-Screen Synchronized `clip-path: inset()` Slider

Dual overlapping image stacks (`.left` and `.right`) driven by a single progress float:

```css
/* Split-Screen CSS Inset Masks */
.split-slider .left-slide {
  position: absolute;
  inset: 0;
  clip-path: inset(var(--clip-progress) 0% 0% 0%); /* Reveals from Top Down */
}

.split-slider .right-slide {
  position: absolute;
  inset: 0;
  clip-path: inset(0% 0% var(--clip-progress) 0%); /* Reveals from Bottom Up */
}
```

```javascript
// Scrub Progress Updater
function updateSplitSlider(progressFloat) {
  // progressFloat ramps 0.0 to 1.0 between active slides
  const percent = (progressFloat * 100).toFixed(2);
  document.documentElement.style.setProperty('--clip-progress', `${percent}%`);
}
```

---

## 3. Lenis Silent Scroll Teleportation (Infinite Scroll)

To create an infinite loop without resetting DOM elements, Lenis silently teleports the scroll offset back to the middle section whenever the user reaches lower or upper boundary thresholds:

```javascript
// homeSlider.js — Silent Lenis Teleportation
let isRepositioning = false;

function checkInfiniteScrollBounds(lenis, scrollVal, cycleHeight, wrapperTop) {
  if (isRepositioning) return;

  const relativeScroll = scrollVal - wrapperTop;
  const lowerThreshold = cycleHeight * 0.2;
  const upperThreshold = cycleHeight * 0.8;

  if (relativeScroll < lowerThreshold || relativeScroll > upperThreshold) {
    const cyclicPosition = relativeScroll % cycleHeight;
    const newScroll = wrapperTop + (cycleHeight / 2) + cyclicPosition;

    isRepositioning = true;
    lenis.scrollTo(newScroll, {
      immediate: true,
      onComplete: () => {
        requestAnimationFrame(() => { isRepositioning = false; });
      }
    });
  }
}
```
