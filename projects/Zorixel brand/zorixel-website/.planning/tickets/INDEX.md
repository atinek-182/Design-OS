# Matt Pocock Engineering Ticket Index: Zorixel Brand Website

All 16 Feature Specs have been deconstructed into atomic, verifiable engineering tickets with strict 5-Viewport Mobile Responsiveness Mandates (`390x844`, `768x1024`, `1280x800`, `1920x1080`, `2560x1440`) and explicit Definitions of Done (DoD).

## Ticket Pipeline & Execution Sequence

| Ticket ID | Feature / Component Target | Associated Spec | Status | Target Path / Scope |
|-----------|----------------------------|-----------------|--------|---------------------|
| `TKT-01` | Global App Router Layout & OKLCH Theme Architecture | `SPEC-01` | Ready | `src/app/layout.tsx`, `globals.css` |
| `TKT-02` | Floating Glass Navigation Bar & Mobile Drawer | `SPEC-02` | Ready | `src/components/navigation/Navbar.tsx` |
| `TKT-03` | Multi-Column Editorial Footer & Performance HUD | `SPEC-03` | Ready | `src/components/navigation/Footer.tsx` |
| `TKT-04` | 3D Helical Spiral WebGL Shader Engine | `SPEC-04` (REF-002) | Ready | `src/components/hero/SpiralShaderStage.tsx` |
| `TKT-05` | Havock & Rosehot Kinetic Typography Reveal | `SPEC-05` (REF-001) | Ready | `src/components/hero/KineticHeadline.tsx` |
| `TKT-06` | Contextual Magnetic Custom Cursor Engine | `SPEC-06` | Ready | `src/components/common/CustomCursor.tsx` |
| `TKT-07` | Component Vault Catalog Grid & Filter Bar | `SPEC-07` | Ready | `src/app/(routes)/components/page.tsx` |
| `TKT-08` | Live Code Inspector Slide-Over Drawer | `SPEC-08` | Ready | `src/components/vault/CodeInspectorDrawer.tsx` |
| `TKT-09` | Interactive OKLCH Token Theme Customizer | `SPEC-09` | Ready | `src/components/vault/ThemeCustomizerModal.tsx` |
| `TKT-10` | Free Resource Hub Grid & 3D Curved Ribbon Stage | `SPEC-10` (REF-004) | Ready | `src/app/(routes)/resources/page.tsx` |

| `TKT-11` | Frictionless Lead Magnet Modal & Morphing Transition | `SPEC-11` (REF-003) | Ready | `src/components/resources/LeadMagnetModal.tsx` |

| `TKT-12` | Digital Storefront Catalog Grid & Filter Bar | `SPEC-12` | Ready | `src/app/(routes)/store/page.tsx` |
| `TKT-13` | Product Slide-Over Detail Drawer & File Tree | `SPEC-13` | Ready | `src/components/store/ProductDetailDrawer.tsx` |
| `TKT-14` | Stripe Checkout API & Webhook Handler | `SPEC-14` | Ready | `src/app/api/webhooks/stripe/route.ts` |
| `TKT-15` | Clerk Auth & Customer Account Dashboard | `SPEC-15` | Ready | `src/app/(routes)/account/page.tsx` |
| `TKT-16` | Insane GSAP 3-Digit Rolling Counter Preloader | `SPEC-16` (REF-003) | Ready | `src/components/common/GSAPPreloader.tsx` |

---

## Universal Mobile & Responsiveness Policy (Mandatory across ALL tickets)
- **Viewport Matrix:** Must render flawlessly without layout breakage, text collision, or horizontal scrollbars across:
  - Mobile Small: `390x844` (iPhone 12/13/14)
  - Tablet Portrait: `768x1024` (iPad)
  - Laptop Standard: `1280x800` (MacBook 13")
  - Desktop FHD: `1920x1080` (Standard Monitor)
  - Desktop Ultrawide: `2560x1440` (2K Widescreen)
- **Touch Targets:** All interactive elements must maintain a minimum hit region of `44px x 44px` on mobile.
- **GPU Transform Isolation:** Complex motion and WebGL stages must be bound with `will-change: transform` and wrapped in `overflow: hidden` bounding boxes to prevent touch scrolling displacement on mobile viewports.
