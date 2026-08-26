# TKT-21: WebGL Shader Tagline-to-Logo Morph Heading & Signature Footer

## Overview
Deconstruct and implement the WebGL shader canvas tagline-to-logo morphing heading (`src/components/home/ShaderTaglineLogoMorph.tsx`) and the signature dark minimalist footer (`src/components/navigation/Footer.tsx`), adapted from `REF-009` (`newmixcoffee.com/en` & `newmix recording .mp4`).

---

## 📋 Definition of Done (DoD)
- [ ] Component `src/components/home/ShaderTaglineLogoMorph.tsx` created and placed on `/`.
- [ ] WebGL fragment shader morphs tagline ("Not your typical Vibe Coding") into `Nuqun` logomark on scroll scrub with Lenis smooth inertia.
- [ ] Component `src/components/navigation/Footer.tsx` updated with oversized `Nuqun` logomark, sitemap with Business Email (`contact@zorixel.com`), Instagram, LinkedIn, and live status HUD.
- [ ] Verified smooth 60FPS scrolling across 5 responsive viewports via Playwright testing.

---

## 🛠️ Task Checklist
- [ ] Create `src/components/home/ShaderTaglineLogoMorph.tsx`.
- [ ] Configure Three.js / WebGL fragment shader particle morphing.
- [ ] Update `src/components/navigation/Footer.tsx` layout.
- [ ] Test mobile responsive scaling (<768px).
