---
title: Good Fella — LazyCustomCursor Physics & PreloaderScrollLock Math
domain: reference
summary: LazyCustomCursor pointer inertia calculations, PreloaderScrollLock body state management, and Sanity CDN image crop
  parameters.
critical_directives:
- Sourcing components: Map to local Awwwards component vault at C:\Users\HP\Downloads\Components\Analog-Grain-Shader.
- Enforce zero-emoji mandate across all vault documentation.
section_outline:
- Good Fella — LazyCustomCursor Physics & PreloaderScrollLock Math
- LazyCustomCursor Trailing Pointer Physics
- PreloaderScrollLock & Sanity Image Crop Math
read_triggers:
- When working on reference in references/awwwards-research-vault/04-webgl-threejs-fragment-shaders/11-good-fella-lazy-cursor-and-scroll-lock-math.md
- When reading context for Good Fella Cursor Physics Math
tags:
- reference
- awwwards
- good-fella
- cursor-physics
- preloader-lock
updated: '2026-08-08'
---

# Good Fella — LazyCustomCursor Physics & PreloaderScrollLock Math

Good Fella integrates inertial custom cursor trailing (`LazyCustomCursor`) with `PreloaderScrollLock` to ensure 100% smooth initial hydration.

---

## LazyCustomCursor Trailing Pointer Physics

```javascript
// Good Fella Inertial Cursor Physics
class LazyCustomCursor {
  constructor(cursorEl) {
    this.cursor = cursorEl;
    this.pos = { x: 0, y: 0 };
    this.mouse = { x: 0, y: 0 };
    this.speed = 0.15; // lerp speed
    this.init();
  }

  init() {
    window.addEventListener('mousemove', (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
    });

    const loop = () => {
      this.pos.x += (this.mouse.x - this.pos.x) * this.speed;
      this.pos.y += (this.mouse.y - this.pos.y) * this.speed;
      this.cursor.style.transform = `translate3d(${this.pos.x}px, ${this.pos.y}px, 0)`;
      requestAnimationFrame(loop);
    };
    loop();
  }
}
```

---

## PreloaderScrollLock & Sanity Image Crop Math

- **Preloader Lock**: Locks `body` overflow (`overflow: hidden`) until Woff2 fonts and main Next.js chunks finish hydrating via `PreloaderProvider`.
- **Sanity Crop URL Math**: Serves exact pixel-cropped media directly from Sanity Content Lake:
  `cdn.sanity.io/images/.../image.webp?rect=0,1,2250,1498&w=1920`
