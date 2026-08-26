# TKT-16: Insane GSAP 3-Digit Rolling Counter Preloader & Exit Stage

## Associated Spec
- [SPEC-16: Insane GSAP 3-Digit Rolling Counter Preloader](file:///d:/AI-OS/projects/Zorixel%20brand/zorixel-website/context/specs/16-insane-gsap-counter-preloader.md)
- Reference Asset: [REF-003: Insane-PRELOADER](file:///d:/AI-OS/projects/Zorixel%20brand/zorixel-website/reference/MANIFEST.md)

## Goal & Description
Build a client-side React + GSAP preloader component (`src/components/common/GSAPPreloader.tsx`) featuring a 3-digit vertical rolling counter (0 to 100%), dual progress bars (`loader-1`, `loader-2`), a 90° rotation and 40x morphing scale-up mask wipe exit transition, and kinetic headline handoff.

## Technical Contract
1. **Target Component:** `src/components/common/GSAPPreloader.tsx`
2. **Hook Integration:** `src/hooks/usePreloader.ts` (listens to `sessionStorage.getItem('zorixel_preloaded')`)
3. **Timeline Duration:** Tuned to 5.0s - 5.5s total duration.
4. **Token Bindings:**
   - Background: `--bg-obsidian` (`#0D0E12`)
   - Text & Digits: `--text-linen` (`#FAF8F5`) with `Rosehot` tabular numbers font stack
   - Bar Fill: `--brand-burgundy` (`#6D001A`) & `--brand-crimson` (`#D61C2C`)

## Universal Mobile & Responsiveness Mandate
- **Mobile Viewport (`390x844`):**
  - Counter text font size scales down from `100px` to `54px` (`clamp(2.5rem, 8vw, 6.25rem)`).
  - Total loader bar container width caps at `200px` (mobile) vs `300px` (desktop).
  - Preloader container uses `position: fixed; inset: 0; touch-action: none; overflow: hidden; z-index: 99999;`.
- **Tablet & Desktop Viewports:** Full resolution rendering with smooth GSAP power2/power4 easing.

## Verifiable Definition of Done (DoD)
- [ ] Preloader renders 3 slotted number stacks rolling vertically from 0% to 100%.
- [ ] `sessionStorage` check skips animation on internal route changes, running only on initial session mount.
- [ ] At 5.0s mark, loader rotates 90° and scales up 40x, sweeping off-screen without horizontal scrollbar leaks.
- [ ] Preloader cleanly unmounts/disables pointer events, triggering `SPEC-05` kinetic headlines (`y: -80`) and `SPEC-04` WebGL canvas spin-in.
- [ ] Playwright 5-viewport screenshot sweep confirms zero layout breakage or overflow across `390x844`, `768x1024`, `1280x800`, `1920x1080`, `2560x1440`.
