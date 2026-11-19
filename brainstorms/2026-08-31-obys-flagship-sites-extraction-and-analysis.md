# Obys & Flagship Award Sites Deep Extraction: Brainstorm / Discovery Notes
Date: 2026-08-31 · Goal: Systematic analysis, code extraction, and kinetic motion system synthesis for 5 award-winning flagship websites (MKTLM, AIM, OCHI, AA Interior, Milk Network) into Antigravity Design OS.

## 1. Summary / Key Decisions
- Target Sites Ingested & Analyzed:
  1. `https://mktlm.obys.agency/` (MKTLM - Obys Typography Showcase)
  2. `https://aim.obys.agency/` (AIM - AI Modernism of Kharkiv / Obys Agency)
  3. `https://ochi.design/` (OCHI - Interactive Eye-Tracking & Presentation Flagship)
  4. `https://www.aainteriordesign.com.ua/` (AA Interior Design - Obys Architectural Luxury Minimalist)
  5. `https://milknetwork.com/` (Milk Network - Bold Agency, GSAP Clip-Path, Lenis, Interactive Portfolios)
- Focus Areas:
  - GSAP & ScrollTrigger choreography (timelines, scrubbing, pin spacing, parallax).
  - Lenis / Locomotive smooth scroll architecture with overscroll containment.
  - SVG animation mechanics (stroke dashoffset, morphing, responsive column grid overlays, curved section caps).
  - Physics-based micro-interactions (Eye cursor tracking, magnetic buttons, custom cursor CSS variables).
  - Extraction & modular componentization for Design-OS skill vault and subprojects.

## 2. Technical Decomposition Matrix

| Website | Scroll Engine | Motion & Animation Engine | Key Interactive Mechanics | Typography & Palette |
| :--- | :--- | :--- | :--- | :--- |
| **MKTLM** (Obys) | Native / Readymag horizontal-vertical | Custom CSS3 Transforms + Staggered Opacity/Scale | 12-column Obys grid, custom typography showcase, multi-page slide-in | NHaasGrotesk + Edwardian Script; `#000000`, `#ffffff`, `#ff8b37` |
| **AIM** (Obys) | Lenis (`html.lenis`, smooth scroll) | Webflow IX2 + GSAP + Lottie SVG Vectors | 12-column SVG grid backdrop (`0 0 1412 1007`), Lottie kinetic logo loader, 3D text translate reveals (`translate3d(0, 110%, 0)`), modal gallery | Constructivist Modernist Sans; `#000000`, `#ffffff`, `#e73c37` |
| **OCHI** | Locomotive / Lenis (`data-scroll-section`) | GSAP ScrollTrigger + Custom Matrix Calculations | Eye-tracking mouse physics (`atan2` angle clamping), magnetic cursor buttons, split-text image mask expansion, crawling marquee line | Neue Montreal + Founders Grotesk; `#004d43`, `#cdea68`, `#212121`, `#f4f4f4` |
| **AA Interior** (Obys) | Smooth Horizontal / Vertical Viewport | Custom Scroll/Load Easing (`from_scale: 110`, `dy: -100`) | Staggered image curtain entrance, multi-depth parallax scroll, minimal micro-type | Custom Serif/Sans; `#f6f6f6`, `#2e2e2e`, `#434343` |
| **Milk Network** | Lenis Smooth Scroll (`data-scroll-wrapper`) | GSAP ScrollTrigger + CSS Variable Mouse Engine | Real-time `--cursor-x/--cursor-y` tracker, clip-path card scrubs (`inset(0% 100% ...)`), typewriter word cycling, full-screen portfolio overlay trigger | Bold Editorial Sans; `#000000`, `#ffffff`, `#fff500` |

---

## 3. Q&A Log

### Q1 — Target Architecture & Delivery Format
- **Asked**: How should the extracted codebase and motion systems be structured and delivered within the repository?
- **Captured**: Combination of Option 1 and Option 3.
  - Deliverable A: A comprehensive, production-grade Interactive Flagship Motion Studio in `projects/Websites/awwwards-motion-vault` running on React + Vite + TypeScript + Tailwind + GSAP + Lenis.
  - Deliverable B: A modular, headless React hook & utility engine in `components/motion/` (`useEyeTracker`, `useMagneticButton`, `useLenisGsap`, `useClipReveal`, `useObysGrid`) that can be imported across any subproject in `projects/*/*`.
### Q2 — Kinetic Physics & Cursor Interaction Depth
- **Asked**: How comprehensive should the cursor physics and interactive state engine be?
- **Captured**: Option 1 (Full Kinetic Triple-Engine).
  - Component 1: Trigonometric Eye Tracker (`Math.atan2(dy, dx)` + radial clamping $r_{\text{max}} = \text{socketRadius} - \text{pupilRadius}$ + RAF lerp smoothing).
  - Component 2: 2D Spring-damped magnetic pull on CTAs, nav buttons, and card triggers with damped recoil.
  - Component 3: Morphing cursor badge manager automatically switching visual states (`default-dot`, `PLAY`, `EXPLORE`, `VIEW`, `MUTE`, `magnetic-arrow`) across target DOM data attributes (`data-cursor="play"`).
### Q3 — Grid Overlay, Section Transitions & SVG Pipeline
- **Asked**: How should the Obys Grid, SVG vectors, and section transition mechanics be integrated into the showcase?
- **Captured**: Option 1 (Multi-Mode Adaptive Obys Grid + Curved Section Caps + SVG Path Drawing + Clip-Path Expansion).
  - Obys 12-Column HUD: Interactive grid overlay toggleable via UI badge or `G` hotkey with mathematical column coordinate lines (`0 0 1412 1007`).
  - Section Caps: Ochi-style full-width rounded pill overhangs (`rounded-tl-full rounded-tr-full bg-inherit`) bridging contrast color flips.
### Q4 — Typography Motion & Inline Media Drawer Scope
- **Asked**: How should the headline typography and media interaction systems be structured?
- **Captured**: Option 1 (Comprehensive Kinetic Typography Suite).
  - Component 1: Ochi Inline Expanding Media Drawer (text-masked video/image cards nested inside hero headlines that expand on hover/scroll).
  - Component 2: Milk Network Typewriter Loop (cycling active brand phrases with a blinking ASCII terminal cursor).
  - Component 3: React-Safe Masked Text Split reveals (`<MaskedLine words={...} />` preserving virtual DOM tree integrity).
  - Component 4: AA Interior Design multi-depth image curtain entrance animations (`from_scale: 110`, `from_opacity: 0`).
### Q5 — Pinned Scroll Choreography & Marquee Dynamics
- **Asked**: Which pinned scroll mechanics and marquee behaviors should be included in the showcase?
- **Captured**: Option 1 (Full Pinned Motion Triad).
  - Velocity-Linked Infinite Marquee: GSAP `timeScale` acceleration dynamically driven by Lenis scroll delta (bidirectional crawling).
  - Sticky Fullscreen Video Expansion: Milk Network showreel card pinned at center and smoothly scaled to `100vw x 100vh` on scrub.
  - Pinned Modernist Exhibition Gallery: AIM/MKTLM horizontal track slider with live asset counter (`18 of 18`) and inner pinTargetRef safety wrapper.
### Q6 — Theme System, Surface Materiality & Audio Engine Scope
- **Asked**: How should the color theming, surface texture, and audio haptics be delivered?
- **Captured**: Option 1 (4-Theme Interactive Switcher + Tactile SVG Film Grain + Web Audio Synthesizer).
  - 4-Theme OKLCH Switcher: OCHI Acid Forest (`oklch(0.28 0.08 175)` / `oklch(0.88 0.19 125)`), AIM Modernism (`oklch(0.12 0.01 260)` / `oklch(0.62 0.24 28)`), AA Warm Linen (`oklch(0.96 0.01 90)` / `oklch(0.22 0.01 60)`), Milk Electric (`oklch(0.05 0 0)` / `oklch(0.94 0.19 105)`).
  - Tactile Materiality: Hardware-accelerated SVG procedural noise texture overlay (`mix-blend-mode: overlay`, `opacity: 0.035`).
  - Web Audio Micro-Haptics: Pure zero-dependency Web Audio API oscillator synthesis (15ms magnetic click, HUD metric tick on `G` key, section whoosh, global mute state).
### Q7 — Section Hierarchy & Developer Control Deck
- **Asked**: How should the section sequence and developer inspection tools be finalized?
- **Captured**: Option 1 (8-Section Comprehensive Flagship Studio with Floating Developer HUD & Live Inspector).
  - Top Telemetry HUD: Live FPS counter, Lenis scroll velocity, Obys 12-column grid toggle (`G`), Web Audio mute (`♫`), and 4-theme palette switcher.
  - Section 1: Hero Matrix (Ochi masked headline expanding video drawer + Milk typewriter phrase cycler + magnetic CTAs).
  - Section 2: Velocity-Accelerated Kinetic Marquee (Bidirectional Lenis-synced crawl across curved pill caps).
  - Section 3: OCHI Eye Physics Lab (Interactive dual-eye gaze tracking with real-time sensitivity and radial clamping sliders).
  - Section 4: Sticky Video Expansion (Milk Network showreel scaling from rounded card to 100vw bleed).
  - Section 5: Obys Modernist Art Gallery (AIM/MKTLM pinned horizontal slider with live [01]-[18] counter).
  - Section 6: Milk Strategy Clip-Path Matrix (Scroll-scrubbed inset reveals + 180° plus-icon transitions).
  - Section 7: AA Interior Architectural Parallax (Multi-depth staggered image curtains + micro-type).
  - Section 8: Interactive Developer Control Deck (Collapsible bottom dock with physics sliders, hook code copiers, and token matrix).
- **Flags**: All 7 core architectural decisions finalized. Ready for Pre-Write Feature Confirmation Check and `/roast` council audit.

---

## 4. Open Flags (Pending Input)
- Extraction output format: Standalone interactive showcase components in Design-OS vs. Reusable TSX/React hooks vs. New skills & demo pages.
- Priority sequence of mechanics to reverse-engineer first.
