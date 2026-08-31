---
title: Champions 4 Good — Draggable Cards Engine & Lenis Smooth Scroll
domain: reference
summary: Touch and mouse pointer draggable card stack mechanics, rotational torque formulas, and Lenis inertia scroll integration.
critical_directives:
- Sourcing components: Map to local Awwwards component vault at C:\Users\HP\Downloads\Components\Kinetic-Type-Scroll.
- Enforce zero-emoji mandate across all vault documentation.
section_outline:
- Champions 4 Good — Draggable Cards Engine & Lenis Smooth Scroll
- Touch & Mouse Draggable Flick Cards Engine
- Lenis Inertia Scroll Integration
read_triggers:
- When working on reference in references/awwwards-research-vault/03-gsap-lenis-motion-scrollytelling/06-champions-4-good-draggable-cards-and-lenis.md
- When reading context for Champions 4 Good Motion Pipeline
tags:
- reference
- awwwards
- champions-4-good
- draggable-cards
- lenis
updated: '2026-08-08'
---

# Champions 4 Good — Draggable Cards Engine & Lenis Smooth Scroll

Champions 4 Good implements an interactive draggable card stack engine (`[data-flick-cards-dragger]`) that responds to pointer gestures while Lenis smooth scroll manages page inertia.

---

## Touch & Mouse Draggable Flick Cards Engine

```javascript
// Champions 4 Good Draggable Flick Cards Handler
class FlickCardsDragger {
  constructor(element) {
    this.container = element;
    this.isDragging = false;
    this.startX = 0;
    this.currentX = 0;
    this.velocity = 0;
    this.init();
  }

  init() {
    this.container.addEventListener('pointerdown', (e) => {
      this.isDragging = true;
      this.startX = e.clientX - this.currentX;
      this.container.style.cursor = 'grabbing';
    });

    window.addEventListener('pointermove', (e) => {
      if (!this.isDragging) return;
      const x = e.clientX - this.startX;
      this.velocity = x - this.currentX;
      this.currentX = x;
      
      // Calculate dynamic rotation torque based on drag velocity
      const rotation = Math.max(-12, Math.min(12, this.velocity * 0.4));
      this.container.style.transform = `translate3d(${this.currentX}px, 0, 0) rotate(${rotation}deg)`;
    });

    window.addEventListener('pointerup', () => {
      if (!this.isDragging) return;
      this.isDragging = false;
      this.container.style.cursor = 'grab';
    });
  }
}

document.querySelectorAll('[data-flick-cards-dragger]').forEach(el => new FlickCardsDragger(el));
```

---

## Lenis Inertia Scroll Integration

- **Scroll Engine**: Powered by `lenis.min.js` with non-blocking wheel event listeners.
- **Gesture Protection**: Scrolling is temporarily bypassed while user drags cards horizontally.
