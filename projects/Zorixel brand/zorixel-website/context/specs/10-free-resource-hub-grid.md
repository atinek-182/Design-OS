# SPEC-10: Free Resource Hub Grid & 3D Curved Filmstrip Ribbon Stage (`/resources`)

## 1. Feature Goal & Intent
Build the `/resources` page featuring an interactive **Three.js Curved 3D Filmstrip Ribbon Hero Stage** (based on `REF-004: 3d-scroll-effect`), dynamic category filters, search input, and responsive free download cards linked to the Frictionless Lead Magnet Modal (`SPEC-11`).

## 2. Component Architecture & File Tree
- **Route Page:** `src/app/(routes)/resources/page.tsx`
- **3D Ribbon Canvas:** `src/components/resources/Curved3DResourceRibbon.tsx` (REF-004 Three.js stage)
- **Texture Engine Hook:** `src/hooks/useRibbonTexture.ts` (HTML5 canvas texture generator + Lenis scroll sync)
- **Grid & Cards:** `src/components/resources/ResourceGrid.tsx` & `ResourceCard.tsx`
- **Filter Bar:** `src/components/resources/ResourceFilterBar.tsx`

## 3. Detailed 3D Curved Ribbon Stage (`Curved3DResourceRibbon.tsx`)
- **Parabolic Geometry:** Three.js `PlaneGeometry(20, 75, 200, 200)` with vertex Z-curvature (`Z = (Y / 37.5)^2 * 35.0`).
- **Texture Canvas (2048 x 8192):** Renders 7 free resource tiles:
  1. *Next.js 15 Starter Kit & OKLCH System*
  2. *AI OS Workflow Architecture Map*
  3. *Zorixel Master Prompt Stack v3*
  4. *Figma Design System Component Vault*
  5. *GSAP & ScrollTrigger Animation Cheatsheet*
  6. *Tailwind v4 Token Design Tokens*
  7. *Viral Carousel Copy & Layout Outlines*
- **Tile Styling & OKLCH Theme:**
  - Card background: `#0D0E12` (Obsidian Midnight)
  - Card header tab: `#6D001A` (Velvet Burgundy)
  - CTA badge: `#D61C2C` (Electric Crimson)
  - Typography: `Rosehot` titles + `AICON` technical tags + `Havock` numbers
- **Lenis Scroll Sync:** Scroll position continuously updates `texture.offset.y` and canvas Y coordinates, driving an infinite curved 3D ribbon loop.
- **Interactive Click Handoff:** Three.js `Raycaster` detects card clicks on the 3D ribbon and opens the Frictionless Lead Magnet Modal (`SPEC-11`) pre-populated with the clicked resource details.

## 4. Resource Grid & Category Filters
- **Filter Categories:** `All Vault Items`, `Next.js Starters`, `AI OS Automations`, `Figma Kits`, `Prompt Stacks`, `Cheatsheets`.
- **Search Engine:** Real-time client search filtering by title, tag, or technology keyword.
- **Card Features:** Dark glassmorphism container, download count badge (e.g. "1,840 Downloads"), file format chip (`.ZIP`, `.FIG`, `.JSON`), and "Get Free Access" button.

## 5. Universal 5-Viewport Mobile Responsiveness Mandate
- **Mobile Viewport (`390x844`):**
  - Texture resolution clamped to `1024 x 4096` to save VRAM and maintain 60FPS.
  - Curvature factor adjusted to `14.0`, camera Z offset set to `22.0`, ensuring the ribbon fits inside `390px` width without edge clipping.
  - Touch swipe listener added so mobile users can swipe horizontally on the 3D ribbon canvas.
  - Resource grid collapses to single-column (`1fr`) with minimum 44px touch targets.
- **Desktop Viewports (`1280x800` to `2560x1440`):** Full 2K texture crispness with angled perspective camera (`X: 17.5*sin(20°)`, `Y: 5`, `Z: 17.5*cos(20°)`, `rotZ: -5°`).

## 6. Verifiable Definition of Done (DoD)
- [ ] Three.js curved ribbon renders smoothly at 60FPS on initial `/resources` page load.
- [ ] Scrolling down `/resources` seamlessly translates the 3D ribbon texture Y offset via Lenis.
- [ ] Clicking a 3D ribbon card opens `SPEC-11` Lead Magnet Modal with correct resource data.
- [ ] Category filter pills and keyword search dynamically update the resource grid.
- [ ] Playwright 5-viewport screenshot sweep confirms zero horizontal overflow or text clipping across `390x844`, `768x1024`, `1280x800`, `1920x1080`, `2560x1440`.
