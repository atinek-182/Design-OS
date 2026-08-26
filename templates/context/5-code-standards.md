# 5. Code Standards, VibeSec Hardening & Anti-Slop Compilation Contract

> **Master Architecture Invariants, Security Hardening Rules, and Stack Compilation Gates.**

---

## 🏗️ Target Stack & Architecture Rules
- **Stack Target**: `[Configured in Stage 1 — React 19 / Next.js 15 / Vite / Astro / Pure HTML5/CSS / Svelte / Vue]`
- **Component File Structure**:
  ```
  src/
  ├── components/
  │   ├── ui/             # Atomic, reusable primitives (Button, Card, Badge, Modal)
  │   ├── sections/       # Macro sections (Hero, BentoFeatures, CodeDemo, FAQ, Footer)
  │   └── layout/         # Header, Nav, Container, Obys Grid wrapper
  ├── lib/
  │   ├── tokens.ts       # Design token constants and OKLCH mappings
  │   ├── motion.ts       # GSAP / Lenis helper hooks and easing curves
  │   └── security.ts     # Input sanitization and CSP helper utilities
  └── styles/
      └── globals.css     # Design tokens, fluid clamp utility classes, reset
  ```

---

## 🛡️ VibeSec & SecurityOS Invariants
1. **Zero Secret Leaks**: Never embed API keys, client secrets, or private tokens inside frontend components or public env variables.
2. **DOM XSS Prevention in WebGL & Canvases**: All text rendered inside 2D/3D canvas contexts, custom cursor followers, or SVG overlays must be strictly sanitized. Never pass unsanitized user inputs to `innerHTML` or `dangerouslySetInnerHTML`.
3. **Strict Content Security Policy (CSP)**: Ensure CSP headers allow only trusted CDNs for Google Fonts, Three.js shaders, and Iconify vector bundles (`default-src 'self'; font-src 'self' fonts.gstatic.com; img-src 'self' data: https:; script-src 'self' 'unsafe-inline'`).
4. **Safe Third-Party Script Sandboxing**: All external tracking or widget scripts must load asynchronously with `sandbox` or `defer` attributes.

---

## 🚫 Hard Anti-Slop Linting Rules
1. **Zero Raw Hex Colors in Components**: All colors MUST use semantic token variables (`var(--bg-surface)`, `oklch(...)`, or Tailwind token aliases).
2. **Zero Unresponsive Cards**: Every grid must specify clear responsive breakpoints (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`) and test clean on 375px mobile without horizontal scroll.
3. **Zero Broken Placeholders / 404s**: Only verified Openverse CC0 photography (`python scripts/design_os.py photos`) or Iconify Solar Duotone vectors are permitted.
4. **Zero Missing Keys in Loops**: All array mappings in React/Next.js/Astro must supply stable, non-index unique keys.
5. **Zero Layout Shifts (CLS)**: Images and WebGL canvas elements must specify explicit aspect ratios (`aspect-video`, `aspect-[16/9]`, or `width`/`height`).

---

## ⚡ Stack-Specific Lifecycle Safeguards
- **React 19 / Next.js 15 App Router**:
  - Always mark interactive GSAP/canvas files with `'use client'`.
  - Wrap GSAP animations in `useGSAP()` or `useEffect` with complete `ctx.revert()` cleanup on unmount to prevent memory leaks during page navigation.
- **Server Action Security (Next.js)**:
  - Add `import 'server-only'` to internal server utilities and API routes.
  - Enforce authentication and Zod schema validation on any mutating server actions.
