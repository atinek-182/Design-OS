# SPEC-03: Multi-Column Footer Stage & Real-Time Performance HUD

## 1. Feature Goal & Intent
Implement the dark-mode footer stage (`Footer.tsx`) with brand tagline, multi-column sitemap matrix, social links, noise texture overlay, and a fixed real-time Performance HUD (FPS indicator, viewport resolution, local time badge).

## 2. Technical Stack & Dependencies
- **Footer:** `src/components/navigation/Footer.tsx`
- **Performance HUD:** `src/components/common/PerformanceHud.tsx` (`requestAnimationFrame` FPS counter + `Intl.DateTimeFormat` IST/UTC time)
- **Overlay:** SVG Noise texture filter overlay (3% opacity)

## 3. Verification & DoD
- FPS counter maintains smooth 60 FPS readout.
- Playwright 5-viewport screenshot sweep.
