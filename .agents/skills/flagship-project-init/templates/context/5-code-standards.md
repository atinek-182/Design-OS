# 5. Code Standards, Stack Invariants & VibeSec Gates

> **Target Stack**: `{{TARGET_STACK}}`  
> **Workspace**: `{{PROJECT_PATH}}`  

---

## 1. Stack Invariants & Compilation Safeguards

### For Vite (React / TypeScript):
- **High-Performance ESM**: Native ES module imports, zero CommonJS `require()`.
- **GSAP & Canvas Lifecycle Cleanups**: Every `useEffect` containing GSAP animations, ScrollTriggers, or Three.js WebGL canvas must return a teardown function:
  ```typescript
  useEffect(() => {
    const ctx = gsap.context(() => {
      // timelines & triggers
    }, containerRef);
    return () => ctx.revert(); // mandatory cleanup
  }, []);
  ```
- **Strict Typing**: No implicit `any`. Component props interfaces must be exported.

### For Next.js (App Router):
- **Client Boundary**: Any component using `useState`, `useEffect`, `useRef`, or browser APIs (`window`, `Lenis`) must declare `'use client'` at the very top line.
- **SSR Safe Guards**: Guard canvas and window listeners with `typeof window !== 'undefined'`.

---

## 2. Ambient Umbrella Skills (Persistent Invariants)

The following skills are designated as **Ambient Umbrella Skills** for this project. Their rules apply across all 24 chat sessions:
1. [`build-awwwards-quality-sites`](file:///d:/Design-OS/.agents/skills/build-awwwards-quality-sites/SKILL.md):
   - Zero-placeholder execution.
   - Purposeful WebGL shaders (never ornamental noise).
   - Composed GSAP intro sequence for the hero.
2. [`cinematic-gsap-lenis-motion-system`](file:///d:/Design-OS/.agents/skills/cinematic-gsap-lenis-motion-system/SKILL.md):
   - Exactly one smooth scroll engine (Lenis).
   - Preserves `prefers-reduced-motion: reduce` overrides.
   - Preserves unsplit accessible names for staggered text reveals.
3. Aesthetic Archetype: `{{AESTHETIC_VIBE}}`

---

## 3. VibeSec & Cybersecurity Gates

1. **SVG Security Rule**: No raw SVG may be embedded or saved without passing through `python scripts/sanitize_svg.py`.
2. **Strict Content Security Policy (CSP)**:
   ```html
   <meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-eval'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: https: blob:; connect-src 'self' https:; worker-src 'self' blob:;">
   ```
3. **Approved Dependencies Whitelist**:
   - `gsap`, `@gsap/react`
   - `lenis`
   - `three`, `@types/three`
   - `lucide-react`, `@iconify/react`
   - `sonner`, `clsx`, `tailwind-merge`
   - Any dependency outside this list requires explicit user authorization during Socratic planning.
