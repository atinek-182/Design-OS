# SPEC-16: Insane GSAP 3-Digit Rolling Counter Preloader & Masking Exit Stage

## 1. Feature Goal & Intent
Implement a high-impact, 3-digit rolling numerical counter preloader (0 to 100%) with dual progress bars and a morphing 90° scale-up screen wipe exit transition based on REF-003 (`Insane-PRELOADER`).

## 2. Component Architecture & Files
- **Primary Component:** `src/components/common/GSAPPreloader.tsx`
- **Hook Integration:** `src/hooks/usePreloader.ts` (manages initial mount, `sessionStorage` persistence, and body scroll locking)
- **Styling:** Bound to `globals.css` OKLCH tokens (`--bg-obsidian`, `--brand-burgundy`, `--brand-crimson`, `--text-linen`)

## 3. Motion Choreography & Keyframes (Optimized 5.0s - 5.5s Timeline)
1. **0.0s - 4.2s (Counter Roll & Dual Progress Fill):**
   - Three slotted vertical number stacks (`counter-1`, `counter-2`, `counter-3`) translate upwards via GSAP `power2.inOut`.
   - `loader-1` expands 0 to 200px (mobile: 130px); `loader-2` starts delayed at 1.2s and expands 0 to 100px (mobile: 70px).
2. **4.2s - 4.8s (Digit Stagger Dismissal & Bar Morphing):**
   - Numbers translate top `-150px` with staggered `power4.inOut` dismissal.
   - `loader-1` rotates 90° and translates Y `-50px`; `loader-2` translates X `-75px`, Y `75px`.
3. **4.8s - 5.5s (Scale-Up Screen Wipe Exit & Hero Handoff):**
   - `loader` background scales 40x, rotates 45°, translates off-screen (X `2000px`, Y `500px`), acting as a wipe mask revealing the hero stage.
   - `.loading-screen` opacity fades to 0 (`pointer-events: none`).
   - Triggers `SPEC-05` kinetic display headlines (`y: -80` stagger) and `SPEC-04` 3D spiral shader entrance.

## 4. Operator Customization Choices & Mobile Mandate
- **Session Caching:** Controlled by `sessionStorage.getItem('zorixel_preloaded')`. Executes on initial visit per session; skipped on client-side router navigation.
- **Manual Replay:** Can be re-triggered on demand via the Performance HUD (`SPEC-03`) footer button.
- **Typography & OKLCH Theme:** Counter digits formatted using `Rosehot` tabular numbers font stack over Obsidian Midnight (`#0D0E12`) canvas, filled with Velvet Burgundy (`#6D001A`) & Electric Crimson (`#D61C2C`).
- **Universal Mobile Responsiveness Mandate:**
  - Counter text dynamically scales (`54px` font size on mobile `<640px` vs `100px` on desktop) with `clamp(2.5rem, 8vw, 6.25rem)`.
  - Loader bar container width scales down to `200px` total width on mobile (`390px` viewport) to prevent overflow or clipping.
  - All animation transforms strictly use CSS transform GPU acceleration (`will-change: transform`) and contain `overflow: hidden` bounding boxes to prevent touch scrolling or layout displacement.

## 5. Verification & DoD
- Smooth 60FPS counter rolling without layout shifts across 5 test viewports (`390x844`, `768x1024`, `1280x800`, `1920x1080`, `2560x1440`).
- Zero horizontal overflow during the 40x scale-up wipe exit transition.
- Playwright 5-viewport screenshot sweep capturing 0%, 50%, 99%, and post-wipe reveal states.

