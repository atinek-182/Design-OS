---
title: Good Fella — Page Transition Rectangles & Power3 Ease Motion
domain: reference
summary: LazyPageTransitionRectangles grid swapper implementation, var(--ease-power3-in-out) timing functions, and Lenis scroll
  wrapper.
critical_directives:
- Sourcing components: Map to local Awwwards component vault at C:\Users\HP\Downloads\Components\Analog-Grain-Shader.
- Enforce zero-emoji mandate across all vault documentation.
section_outline:
- Good Fella — Page Transition Rectangles & Power3 Ease Motion
- Grid Rectangle SPA Page Transition Architecture
- Power3 Cubic Bezier Easing Function
read_triggers:
- When working on reference in references/awwwards-research-vault/03-gsap-lenis-motion-scrollytelling/10-good-fella-page-transition-rectangles-and-lenis.md
- When reading context for Good Fella Page Transition Motion
tags:
- reference
- awwwards
- good-fella
- page-transitions
- lenis
updated: '2026-08-08'
---

# Good Fella — Page Transition Rectangles & Power3 Ease Motion

Good Fella builds custom grid rectangle page transition animations (`LazyPageTransitionRectangles`) powered by **Lenis** smooth scroll inertia.

---

## Grid Rectangle SPA Page Transition Architecture

```javascript
// Good Fella Grid Rectangle Page Transition Handler
import { gsap } from 'gsap';

export function animatePageTransitionIn(onComplete) {
  const overlay = document.querySelector('.page-transition-overlay');
  const rectangles = overlay.querySelectorAll('.rect');

  gsap.fromTo(rectangles, 
    { scaleY: 0, transformOrigin: 'bottom' },
    {
      scaleY: 1,
      duration: 0.6,
      stagger: 0.04,
      ease: "power3.inOut",
      onComplete: () => {
        if (onComplete) onComplete();
        gsap.to(rectangles, {
          scaleY: 0,
          transformOrigin: 'top',
          duration: 0.6,
          stagger: 0.04,
          ease: "power3.inOut"
        });
      }
    }
  );
}
```

---

## Power3 Cubic Bezier Easing Function

```css
:root {
  --ease-power3-in-out: cubic-bezier(0.645, 0.045, 0.355, 1);
}

.goodfella-card {
  transition: transform 0.5s var(--ease-power3-in-out),
              border-color 0.3s ease;
}
```
