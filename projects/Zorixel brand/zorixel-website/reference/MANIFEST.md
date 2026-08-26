# Project Reference Vault & Deconstruction Manifest

## Overview
This folder (`reference/`) serves as the primary visual source of truth for the Zorixel Brand Website. All screenshots, design briefs, component code clips, motion references, and asset specs are cataloged in this manifest.

## Catalog of Reference Assets

| ID | File / Asset Name | Type | Key Elements to Keep | Elements to Exclude / Remove | OKLCH Token Binding |
|----|-------------------|------|----------------------|------------------------------|---------------------|
| REF-001 | `zorixel_brand_identity_v3.md` | Brand Doc | Palette (Obsidian, Linen, Burgundy, Crimson, Gold), Typography hierarchy (Havock, Rosehot, AICON, Nuqun logo) | Generic AI blue/purple templates | `globals.css` / OKLCH design system |
| REF-002 | `shader-gallary/` (StudioDialect 3D Spiral Gallery) | WebGL & JS Project | Parametric 3D helical spiral cylinder, custom fragment shader lighting falloff, Lenis scroll velocity spin integration, mouse parallax tilt | Hardcoded 10 image textures, raw CSS background | Re-bind texture overlays to Zorixel UI component previews & OKLCH Obsidian dark canvas |
| REF-003 | `Insane-PRELOADER/` (GSAP 3-Digit Counter Preloader) | Animation & Web Layout | 3-digit rolling numerical counter (0-100%), dual progress bars, 90deg rotation scale-up masking wipe exit, kinetic title text reveal | Montserrat font stack, default white/black raw CSS | `Rosehot` typography for counter digits, Obsidian dark background, Velvet Burgundy progress bars |
| REF-004 | `3d-scroll-effect/` (Three.js Curved 3D Filmstrip Ribbon) | WebGL & Canvas Engine | Parabolic curved PlaneGeometry, 2D dynamic canvas texture generator, Lenis scroll texture offset integration, angled perspective camera | Hardcoded Dahlia font, fixed local images | `Rosehot` / `Havock` typography overlays, Obsidian Midnight background, Velvet Burgundy accents |
| REF-005 | `Dragon-Scroll-Effect/` (Polygon Clip-Path Morph & Kinetic Text) | GSAP & ScrollTrigger | Polygon clip-path entry/exit morph (`clip-path: polygon(...)`), SplitText per-character scroll reveal, full-bleed 150svh section layout | Gothic `UnifrakturMaguntia` font, hardcoded dragon images | `Havock` / `Rosehot` kinetic typography, Obsidian dark canvas, Velvet Burgundy badges |
| REF-006 | `SVG-Page-transition/` (SVG Liquid Stroke Wipe Transition) | GSAP & SVG Engine | Organic dual-path SVG strokeDashoffset sweep (`stroke-width` expansion 200px -> 700px), promises leave/enter router lifecycle integration | Default light gray `#f0f2ef` background, Barlow font | Velvet Burgundy (`#6D001A`) & Electric Crimson (`#D61C2C`) stroke tokens, Obsidian Midnight canvas |
| REF-007 | `Prototype-studio-rebuilt/` (Pinned Dual-Sync Spotlight) | GSAP & ScrollTrigger | Pinned 500vh scroll stage, synchronized 3-way scroll (`01/10` counter, 16:9 image strip, title list), center threshold opacity activation (`0.5` -> `1.0`) | Generic Google Sans font stack, demo images | `Havock` counter font, `Rosehot` title typography, Obsidian Midnight canvas, Velvet Burgundy active highlight |
| REF-008 | `text-image-line-reveal.html` (Inline Image-Span Manifesto) | GSAP & ScrollTrigger | Inline `.img-span` width expansion (`0px` -> `300px`) scrubbed on line scroll, multi-line typographic brand statement layout | Default Bricolage font, Pinterest demo image URLs | `Havock` / `Rosehot` typography, Obsidian Midnight canvas, Velvet Burgundy image border accents |
| REF-009 | `newmixcoffee.com/en` & `newmix recording .mp4` (Shader Tagline Morph & Footer) | WebGL & GSAP Engine | Shader canvas morphing tagline ("ENGINEER WITH VIBE") into `Nuqun` logomark, full-bleed dark minimalist footer with sitemap & status HUD | Korean coffee branding copy & coffee imagery | `Nuqun` SVG logomark, `Havock` tagline, Obsidian Midnight background, Velvet Burgundy accents |





## Detailed Deconstruction: REF-002 (`shader-gallary`)


### Confirmed Operator Choices
1. **Placement:** Applied to both Home Hero Stage (`/`) and Component Vault (`/components`).
2. **Tile Content:** Renders actual Zorixel UI component previews, template screenshots, and design card assets on 3D spiral planes.
3. **Motion Intensity:** Full interactive experience (Lenis scroll velocity acceleration, mouse parallax tilt, fragment shader lighting falloff, click-to-open detail drawer).

### Technical Integration Blueprint
- **Component File:** `src/components/hero/SpiralShaderStage.tsx`
- **Hook Integration:** Lenis smooth scroll velocity -> 3D rotation acceleration (`spinVelocity = e.velocity * scrollRotationMultiplier`).
- **Interactive Raycasting:** Three.js `Raycaster` listens for clicks on spiral tile meshes to trigger the slide-over component detail drawer.
- **Mobile Capping:** Capped DPR at 2.0, mobile camera `z = 15`, disabled parallax tilt on touch viewports.

## Detailed Deconstruction: REF-003 (`Insane-PRELOADER`)

### Structural Analysis & Mechanics (Tuned 5.0s - 5.5s Timeline)
- **Rolling Digits Engine:** 3 slotted `<div>` containers (`counter-1`, `counter-2`, `counter-3`) clipped with `polygon(0 0, 100% 0, 100% 100px, 0 100px)`. Numbers 0-9 repeat vertically and translateY based on GSAP timelines.
- **Progress Bar Animation:** Dual-segment bar (`loader-1`, `loader-2`) filling in 4.2s with `power2.inOut` easing.
- **Morphing Screen Wipe Exit:**
  1. At 4.2s mark: loader bar background clears, `loader-1` rotates 90° and translates Y.
  2. At 4.8s mark: `loader` scales 40x with `power2.inOut` while rotating 45° and shooting offset screen to act as a dramatic full-screen transition mask revealing the Hero stage.
  3. At 5.5s mark: `.loading-screen` container fades out (`opacity: 0`), enabling pointer events on site content.
  4. At 4.8-5.5s mark: Hero kinetic display headline reveals vertically (`y: -80`) with staggered easing.

### Technical Integration Blueprint (React & Next.js 15)
- **Component File:** `src/components/common/GSAPPreloader.tsx`
- **State & Session Persistence:** Guarded by `sessionStorage.getItem('zorixel_preloaded')`. Shows once per browser session; bypassable on client-side router navigation.
- **Font & Theme Binding:** Digits styled with `Rosehot` tabular numbers font stack over Obsidian Midnight (`#0D0E12`) dark canvas, with Velvet Burgundy (`#6D001A`) and Electric Crimson (`#D61C2C`) progress fills.
- **Universal Mobile Responsiveness Mandate:**
  - Counter font sizes scale dynamically (`clamp(2.5rem, 8vw, 6.25rem)`), shrinking to `54px` on mobile (<640px) vs `100px` on desktop.
  - Loader bar container width scales to `200px` on mobile (`390px` viewport).
  - All animation transforms strictly use `will-change: transform` GPU acceleration and contained `overflow: hidden` bounding boxes to prevent touch scroll displacement or layout shifts.

## Detailed Deconstruction: REF-004 (`3d-scroll-effect`)

### Structural Analysis & Mechanics
- **Parabolic Curved Geometry:** Vertex-manipulated Three.js `PlaneGeometry` (`parentGeometry`) where Z displacement is computed as `positions[i + 2] = Math.pow(distanceFromCenter, 2) * curvature` (curvature factor `35.0`).
- **Dynamic 2D Canvas Texture:** Off-screen HTML5 `textureCanvas` (`2048 x 8192`) rendering dynamic cards, rounded rectangle clipping (`ctx.roundRect`), product images, and typography overlays (`Rosehot` / `Havock`).
- **Scroll Texture Synchronization:** Lenis scroll velocity & progress offset directly update the canvas texture Y position (`updateTexture(-currentScroll)`), generating an infinite 3D curved filmstrip scrolling experience.
- **Angled Camera Matrix:** Angled perspective camera (`rotation.x = -20°`, `rotation.y = 20°`, `rotation.z = -5°`, `camera.lookAt(0, -2, 0)`).

### Proposed Integration Options
1. **Option A (Digital Storefront `/store` Showcase - Recommended):** Apply as the flagship 3D Curved Product Ribbon on `/store`. As the user scrolls down `/store`, flagship products (Next.js starter kits, UI component packs, AI OS automations) flow along the curved 3D filmstrip plane.
2. **Option B (Free Resource Hub `/resources` Hero Banner):** Apply on `/resources` to display downloadable cheat sheets, Figma UI kits, and prompt packs.
3. **Option C (Home Page `/` Digital Showcase Section):** Place on the homepage directly below the 3D spiral hero stage to showcase Zorixel brand work and digital products.

### Technical Integration Blueprint (React & Next.js 15)
- **Component File:** `src/components/store/Curved3DProductRibbon.tsx`
- **Hook Integration:** `useScrollTexture.ts` (integrates Lenis scroll listener with Three.js `CanvasTexture`)
- **Mobile Capping:** Mobile viewports reduce curvature to `15.0`, set camera position `Z = 22.0`, and clamp canvas texture resolution to `1024 x 4096` to guarantee 60FPS on iOS/Android devices.

## Detailed Deconstruction: REF-005 (`Dragon-Scroll-Effect`)

### Structural Analysis & Mechanics
- **Dynamic Polygon Clip-Path Morphing:**
  - **Entry Morph:** As each section enters viewport (`start: "top bottom"`, `end: "top top"`), the image container morphs from an angled diamond polygon `clip-path: polygon(25% 25%, 75% 40%, 100% 100%, 0% 100%)` to full-bleed rectangular `clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)`.
  - **Exit Morph:** As section exits viewport (`start: "bottom bottom"`, `end: "bottom top"`), image morphs into an inverted angled polygon `clip-path: polygon(0% 0%, 100% 0%, 75% 60%, 25% 75%)`.
- **Per-Character Staggered Kinetic Typography:**
  - Uses `GSAP SplitText` (`type: "chars"`, `mask: "chars"`).
  - Characters start offset at `y: 125%` and animate upward to `y: 0%` scrubbed along scroll progress (`start: top+=${index * 25 - 250} top`).

### Confirmed Operator Choice: Option B (About Page Manifesto `/about`)
- **Placement:** Applied to `/about` Route (Brand Manifesto & Creator Story Stage).
- **Chapters Covered:**
  1. *Chapter 01: The Zorixel Vision* (Designing for the Future of Vibe Coders)
  2. *Chapter 02: The 3Ms Framework* (Mindset, Method, Machine)
  3. *Chapter 03: The Core AI OS* (Automating Content, Code, and Systems)
  4. *Chapter 04: The Creator Ecosystem* (Resource Vault, Design Systems, and Digital Products)
- **Technical Blueprint:**
  - **Component File:** `src/components/about/PolygonManifestoStage.tsx`
  - **Hook Integration:** GSAP ScrollTrigger + SplitText character-by-character scrub reveal.
  - **Mobile Optimization:** Scaled `Havock` headline typography to `clamp(2.5rem, 6vw, 5.5rem)` and adjusted scroll trigger start offsets for smaller touch screens.

## Detailed Deconstruction: REF-006 (`SVG-Page-transition`)

### Structural Analysis & Mechanics
- **Organic Liquid Vector Path Drawing:**
  - Uses two intricate multi-curve SVG paths (`stroke-width: 200px`) inside a fixed viewport container (`.transition-svg`, `scale(1.5)`).
  - Paths calculate `path.getTotalLength()` dynamically and set `strokeDasharray` & `strokeDashoffset` equal to path length.
- **GSAP Dual-Phase Lifecycle Timeline:**
  - **Phase 1 (`leave()`):** `strokeDashoffset` animates from `length` to `0` while expanding `stroke-width` from `200px` to `700px` (`duration: 1s`, `power1.inOut`), creating an organic liquid brush wipe that completely obscures the viewport.
  - **Phase 2 (`enter()`):** After Next.js router navigation completes, `strokeDashoffset` animates from `0` to `-length` while contracting `stroke-width` back to `200px` (`duration: 1s`), revealing the new route content smoothly.

### Confirmed Operator Choice: Option A (Global App Router Page Transition Provider)
- **Placement:** Applied globally across Next.js 15 App Router navigation (`src/components/providers/PageTransitionProvider.tsx`).
- **Trigger Interception:** Intercepts client navigation across Floating Glass Navbar, Footer, and internal card links.
- **Technical Blueprint:**
  - **Component File:** `src/components/providers/PageTransitionProvider.tsx`
  - **Hook Integration:** `usePathname()` & `useRouter()` combined with GSAP `leave()` / `enter()` lifecycle timeline.
  - **Colors:** Velvet Burgundy (`#6D001A`) path 1 and Electric Crimson (`#D61C2C`) path 2 over Obsidian Midnight (`#0D0E12`) dark canvas.
  - **Mobile Capping:** Reduced stroke expansion width to `500px` on mobile (<640px) to prevent layout overflow while retaining fluid 60FPS animation.

## Detailed Deconstruction: REF-007 (`Prototype-studio-rebuilt`)

### Structural Analysis & Mechanics
- **Pinned 3-Way Synchronized Scroll Stage:**
  - Pins the section (`trigger: ".spotlight"`, `pin: true`, `end: "+=500vh"`).
  - Synchronizes 3 vertical elements along scroll progress:
    1. **Live Project Counter:** `01/10` to `10/10` updating dynamically and translating Y (`moveDistanceIndex`).
    2. **Centered Image Gallery Strip:** 16:9 project preview images translating upward (`moveDistanceImages`).
    3. **Interactive Project Titles List:** Right-aligned title list translating vertically with active title highlighted (`#fff` vs `#4a4a4a`).
- **Viewport Center Activation Threshold:**
  - Evaluates image bounding box relative to viewport center threshold (`imgActivationThreshold = window.innerHeight / 2`).
  - Active centered image illuminates opacity to `1.0`; inactive images dim to `0.5`.

### Confirmed Operator Choice: Dynamic Multi-Media Article Spotlight Stage (`/insights`)
- **Placement:** Applied to `/insights` and `/insights/[slug]` (Featured Articles, Case Studies, Video Teardowns & Guide Sheets).
- **Dynamic Multi-Media Support:**
  - **Images:** High-resolution 16:9 WebP / PNG graphics.
  - **Videos:** HTML5 MP4 / WebM looped video previews.
  - **PDF Cards:** Interactive PDF document cover & page-flip previews.
  - **Text & Code Guides:** Syntactic code blocks, markdown callout cards, step-by-step text guides.
- **Dynamic Flexible Counter (`X/N`):**
  - Counter dynamically computes `X/N` where `N = items.length` (e.g. `01/04`, `01/07`, `01/12`), eliminating hardcoded 10-item limits.
- **Technical Blueprint:**
  - **Component File:** `src/components/insights/ArticleSpotlightStage.tsx`
  - **Hook Integration:** GSAP ScrollTrigger pinned timeline (`end: +=${items.length * 50}vh`).
  - **Typography & Theme:** `Havock` tabular numbers counter, `Rosehot` section titles, Obsidian Midnight (`#0D0E12`) dark canvas with Velvet Burgundy (`#6D001A`) active highlight.

## Detailed Deconstruction: REF-008 (`text-image-line-reveal.html`)

### Structural Analysis & Mechanics
- **Inline Image-Span Expansion Engine:**
  - Multi-line typographic layout combining text `<span>` elements with inline `.img-span` container boxes (`height: 110px`, `width: 0`, `overflow: hidden`).
  - GSAP `ScrollTrigger` scrubs `.img-span` width from `0px` to `300px` as each line scrolls through viewport (`start: "top 90%"`, `end: "top 40%"`).
  - Contains fixed-width `300px` image elements positioned `left: 50%`, `transform: translateX(-50%)` to maintain crisp aspect ratio during expansion.

### Confirmed Operator Choice: Separate Homepage Section (`/`)
- **Placement:** Positioned on the Homepage (`/`) directly below the 3D Helical Spiral Hero Stage (`SPEC-04`) as a separate, standalone brand manifesto section.
- **Component File:** `src/components/home/KineticManifestoStatement.tsx`
- **Typography & Theme:** `Havock` bold display text over Obsidian Midnight (`#0D0E12`) dark canvas with local Zorixel component preview cards.

## Detailed Deconstruction: REF-009 (`newmixcoffee.com/en` & `newmix recording .mp4`)

### Structural Analysis & Mechanics
1. **WebGL Shader Tagline-to-Logo Morphing Heading:**
   - WebGL shader canvas rendering textured display tagline ("ENGINEER WITH VIBE" / "BUILD & AUTOMATE THE FUTURE").
   - Scrubbing scroll morphs the WebGL shader particles / fragment distortion from the tagline text into the official full-width Zorixel `Nuqun` logomark (`zorixel_logo_solid_white.svg`).
2. **Signature Dark Minimalist Footer:**
   - Full-bleed Obsidian Midnight (`#0D0E12`) footer stage with oversized `Nuqun` logomark header.
   - 4-column organized sitemap (Platform, Vault, Resources, Company).
   - System performance status HUD indicator ("ALL SYSTEMS OPERATIONAL • 60 FPS").

### Confirmed Operator Choice: Homepage Shader Heading Stage (`SPEC-21`) & Signature Footer (`SPEC-03`)
- **Placement 1 (Shader Morphing Stage):** Placed on Homepage (`/`) as the hero tagline transition section (`src/components/home/ShaderTaglineLogoMorph.tsx`).
- **Placement 2 (Signature Footer):** Applied as global multi-column footer across all pages (`src/components/navigation/Footer.tsx`).








