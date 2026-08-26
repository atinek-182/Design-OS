# TKT-10: Free Resource Hub Grid & 3D Curved Filmstrip Ribbon Hero Stage (`/resources`)

## Associated Spec
- [SPEC-10: Free Resource Hub Grid & 3D Curved Ribbon Stage](file:///d:/AI-OS/projects/Zorixel%20brand/zorixel-website/context/specs/10-free-resource-hub-grid.md)
- Reference Asset: [REF-004: 3d-scroll-effect](file:///d:/AI-OS/projects/Zorixel%20brand/zorixel-website/reference/MANIFEST.md)

## Goal & Description
Build the `/resources` route including the **Three.js Curved 3D Filmstrip Ribbon Stage** (`Curved3DResourceRibbon.tsx`), dynamic HTML5 canvas texture generator, real-time Lenis scroll sync, category filter bar, instant search input, and free resource download cards.

## Technical Contract & Target Files
1. **Route Page:** `src/app/(routes)/resources/page.tsx`
2. **3D Ribbon Stage:** `src/components/resources/Curved3DResourceRibbon.tsx`
3. **Texture Engine Hook:** `src/hooks/useRibbonTexture.ts`
4. **Grid Components:** `ResourceGrid.tsx`, `ResourceCard.tsx`, `ResourceFilterBar.tsx`
5. **OKLCH Token Bindings:**
   - Background: `--bg-obsidian` (`#0D0E12`)
   - Ribbon Card Tab: `--brand-burgundy` (`#6D001A`)
   - Badge & Accent: `--brand-crimson` (`#D61C2C`)
   - Typography: `Havock` (Hero Title), `Rosehot` (Resource Titles & Subtitles), `AICON` (Tech Chips)

## Universal 5-Viewport Mobile & Responsive Mandate
- **Mobile Viewport (`390x844`):**
  - Texture resolution clamped to `1024 x 4096` to save VRAM and maintain 60FPS.
  - Curvature factor adjusted to `14.0`, camera Z offset set to `22.0`, ensuring the ribbon fits inside `390px` width without edge clipping.
  - Touch swipe listener added so mobile users can swipe horizontally on the 3D ribbon canvas.
  - Resource grid collapses to single-column (`1fr`) with minimum 44px touch targets.
- **Desktop Viewports (`1280x800` to `2560x1440`):** Full 2K texture crispness with angled perspective camera (`X: 17.5*sin(20°)`, `Y: 5`, `Z: 17.5*cos(20°)`, `rotZ: -5°`).

## Verifiable Definition of Done (DoD)
- [ ] Three.js curved ribbon renders smoothly at 60FPS on initial `/resources` page load.
- [ ] Scrolling down `/resources` seamlessly translates the 3D ribbon texture Y offset via Lenis.
- [ ] Clicking a 3D ribbon card opens `SPEC-11` Lead Magnet Modal with correct resource data.
- [ ] Category filter pills and keyword search dynamically update the resource grid.
- [ ] Playwright 5-viewport screenshot sweep confirms zero horizontal overflow or text clipping across `390x844`, `768x1024`, `1280x800`, `1920x1080`, `2560x1440`.
