---
title: PX PUSH CRT Monitor Simulation, Extruded Chrome Logo & Nuxt WebGL Task Lifecycle
domain: research
summary: Complete technical breakdown of PX PUSH, featuring CRT convex monitor screen simulation, SVGLoader extruded chrome
  logo with scroll velocity rotation, 80s character-select founder rotator, registerPageTask WebGL readiness gate, and CSS
  radial-gradient punch hole paper drawer.
critical_directives:
- Enforce `registerPageTask()` pub/sub lifecycle (prepared -> revealed -> ready) to prevent white page flashes before Three.js
  scenes finish rendering.
- Tie 3D logo rotation directly to scroll velocity (`gsap.utils.clamp` + velocity interpolation).
- Implement paper drawer punch hole masks using pure CSS `radial-gradient` instead of heavy SVG assets.
section_outline:
- Executive Summary & Engineering Pedigree
- 1. CSS & Overlay CRT Convex Monitor Simulation
- 2. Scroll-Velocity Responsive Extruded Chrome 3D Logo
- 3. Asynchronous WebGL Page Task Readiness Gate (`registerPageTask`)
- 4. Pure CSS Radial-Gradient Paper Punch Hole Mask
read_triggers:
- When building Awwwards-grade websites CRT monitor shader
- When configuring PX PUSH extruded chrome logo scroll velocity
- When implementing registerPageTask WebGL readiness gate and CSS radial punch holes
tags:
- PX-PUSH
- CRT-shader
- threejs
- svg-loader
- nuxt
- css-mask
updated: '2026-08-08'
---

# PX PUSH CRT Monitor Simulation, Extruded Chrome Logo & Nuxt WebGL Task Lifecycle

## Executive Summary & Engineering Pedigree

- **Studio**: Stud Creative House (Lewis Webber) for PX PUSH.
- **Tech Stack**: Nuxt.js + Three.js + GSAP + Lenis.
- **Aesthetic**: 1980s corporate retro-futurism (Blue Screen of Death `#03049C`, Macintosh casing grey `#BABABA`, CRT monitor convex distortion).

---

## 1. CSS & Overlay CRT Convex Monitor Simulation

Mounted permanently in `Wrapper.vue` above the application layout:

```css
/* CRT Scanline & Bloom Simulation CSS */
.scanlines::before {
  content: "";
  position: fixed;
  inset: 0;
  pointer-events: none;
  background: rgba(0, 0, 0, 0.7);
  animation: scanline 8s linear infinite;
  z-index: 9991;
}

.gloom::before {
  content: "";
  position: fixed;
  inset: 0;
  pointer-events: none;
  backdrop-filter: blur(10px);
  opacity: 0.15;
  z-index: 9992;
}

.vignette::before {
  content: "";
  position: fixed;
  inset: 0;
  pointer-events: none;
  background-image: url("/img/crt.png"); /* Convex glass vignetting */
  background-size: 100% 100%;
  transform: scale(1.02);
  opacity: 0.7;
  z-index: 9993;
}

@keyframes scanline {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100%); }
}
```

---

## 2. Scroll-Velocity Responsive Extruded Chrome 3D Logo

Three.js loads SVG paths using `SVGLoader`, extrudes them into 3D geometry with bevels, and applies mirrored chrome metalness/clearcoat under PMREM environment lighting:

```typescript
// Scroll Velocity Rotation Interpolation
let logoScrollSpin = 0;
let logoScrollSpinTarget = 0;

function updateLogoScrollSpin(velocity: number) {
  // Velocity drives rotation speed and direction
  logoScrollSpinTarget = gsap.utils.clamp(
    -0.5,
    0.5,
    -velocity * 0.002
  );
}

function renderLogoFrame() {
  logoScrollSpinTarget *= 0.9; // Damping decay
  logoScrollSpin += (logoScrollSpinTarget - logoScrollSpin) * 0.16; // Lerp
  logoGroup.rotation.y += 0.002 + logoScrollSpin; // Idle drift + velocity spin
  renderer.render(scene, camera);
}
```

---

## 3. Asynchronous WebGL Page Task Readiness Gate (`registerPageTask`)

Prevents Nuxt page reveals from flashing blank canvases before WebGL shaders finish initializing:

```typescript
// registerPageTask.ts — Pub/Sub Page Readiness Gate
const pendingTasks = new Set<Promise<any>>();

export function registerPageTask(task: Promise<any>) {
  const pendingTask = Promise.resolve(task).catch(() => {});
  pendingTasks.add(pendingTask);
  pendingTask.finally(() => pendingTasks.delete(pendingTask));
  return () => pendingTasks.delete(pendingTask);
}

export function waitForPageTasks() {
  return Promise.allSettled([...pendingTasks]);
}

// In Nuxt Router Hook:
// router.beforeEach(async () => {
//   await waitForPageTasks(); // Hold page reveal until all WebGL scenes render frame 1
// });
```

---

## 4. Pure CSS Radial-Gradient Paper Punch Hole Mask

```css
/* Office Paper Journal Drawer Punch Hole Mask */
.journalDrawer__panel {
  --hole-x: 2vw;
  --hole-radius: 0.55vw;
  --hole-gap: 50vh;

  mask-image: radial-gradient(
    circle at var(--hole-x) 50%,
    transparent 0 var(--hole-radius),
    #000 calc(var(--hole-radius) + 1px)
  );
  mask-size: 100% var(--hole-gap);
  mask-repeat: repeat-y;
}
```
