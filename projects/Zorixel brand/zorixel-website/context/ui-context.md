# UI Context & Design System: Zorixel Brand Website

## Zorixel Master Brand Identity v3.0

### Color Palette (Option 1 Palette)

| Color Name | Hex Code | Role / Usage |
|------------|----------|--------------|
| Obsidian Midnight | `#0D0E12` | Dark canvas background, primary dark surface |
| Warm Linen Cream | `#FAF8F5` | Light canvas background, card light background |
| Velvet Burgundy | `#6D001A` | Primary brand headers, rich editorial sections |
| Electric Crimson | `#D61C2C` | Primary pop CTA, active indicators, high-contrast highlights |
| Vintage Ochre Gold | `#C5A059` | Accent strictly <5% (prohibited as slide or section background) |

### Typography Hierarchy

| Font Name | Usage & Scope | Notes |
|-----------|---------------|-------|
| `Nuqun-Regular` | Official Logotype / Logo Mark ONLY | `zorixel_logo_solid_white.svg`, `zorixel_logo_solid_dark.svg` |
| `Havock` | Primary Display Headline #1 | Hero titles, big middle display headlines |
| `Vixa` | Display Heading & Poster Font | Section headers, poster titles |
| `Rosehot` | Subheadings & Editorial Tags | Subheadings, badge tags, editorial captions |
| `AICON` (Bold/ExtraBold) | Selective Section Accent Sans | Technical section badges, spec tables |

### 5-Viewport Responsiveness Requirements

| Viewport Target | Resolution | Key Layout Choreography |
|-----------------|------------|-------------------------|
| Desktop | `1920x1080` | Full-stage WebGL canvas, multi-column grid, expanded navigation |
| Laptop | `1440x900` | High-density grid, sticky side panels, responsive typography scaling |
| Tablet | `834x1194` | 2-column component grid, touch-friendly carousel controls |
| Mobile Landscape | `844x390` | Low-height stage layout, inline navigation drawer |
| Mobile Portrait | `390x844` | Single-column stack, full-screen mobile menu, compact hero typography |

### Strict Design System Rules & Banned Patterns

- **STRICT ZERO-GRADIENT BAN:** Gradients of ANY kind (linear, radial, mesh, text clip gradients, or soft blurred glows) are strictly prohibited across the entire website and all visual components. Fills must be solid, crisp, and flat.
- **STRICT ZERO-GLASSMORPHISM BAN:** Glassmorphism, backdrop blurs (`backdrop-filter: blur()`), semi-transparent glass cards, and glass borders are strictly prohibited. Surfaces must use solid, high-contrast, clean panel structures.
- **BANNED ASSETS (`favicon.svg` & `public/previews/`):** `favicon.svg` and `public/previews/` graphics are permanently discarded as AI-slop. Never reference or re-introduce them.
- **USER DESIGN REFERENCE MANDATE:** Await and strictly follow the exact design reference provided directly by Atinek Maurya.

### Component Priority Sourcing Chain
1. **User Provided Reference:** Align structure directly with the reference provided by Atinek Maurya.
2. **Curated User Catalog:** 300+ cataloged components queryable via `component_registry_cli.py search`.
3. **Local Component Vault:** `references/component-vault/` and `references/shader-canvas-vault/`.
4. **Catalog-First Mandate:** Never write components from scratch if a matching catalog component exists. Re-bind component styles to project CSS variables/OKLCH tokens (flat, non-gradient, non-glass).
