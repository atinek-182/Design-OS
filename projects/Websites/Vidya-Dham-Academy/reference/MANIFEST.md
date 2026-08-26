---
title: Vidya Dham Academy Reference Asset Deconstruction Manifest
domain: design-reference
summary: Priority 1 Visual Source of Truth and deconstruction manifest for Vidya Dham Academy.
critical_directives:
  - All UI component implementations must strictly align with assets documented in this manifest.
updated: '2026-08-13'
---

# Vidya Dham Academy Reference Asset Deconstruction Manifest

This directory serves as the Priority 1 Visual Source of Truth for the Vidya Dham Academy web project.

## Ingested Reference Assets

### Asset 1: `reference/side-navigation-with-wipe-effectosmo/`
- **Archetype**: Header Navigation & Full-Screen Overlay Wipe Menu (Osmo)
- **Source**: `C:\Users\HP\Downloads\Components\02-navigation-and-menus\side-navigation-with-wipe-effectosmo`
- **Key Features & Motion**:
  - GSAP multi-panel staggered wipe effect on menu toggle.
  - Numbered navigation links (`01 About Us`, `02 Academic Programs`, `03 7-Step Pedagogy`, `04 Topper Wall`, `05 Admissions & Contact`).
  - Interactive top header navbar with logo mark and animated Menu / Close toggle button.

#### Deconstruction Schema
1. **Elements to Keep**:
   - Staggered panel wipe overlay animation (`.bg-panel.first`, `.second`, `.third`).
   - Clean typography hierarchy (`.menu-link-heading` and `.eyebrow` number badges).
   - Smooth button state toggle (Menu -> Close).
2. **Elements to Adapt / Replace**:
   - Replace Osmo SVG logo with Vidya Dham Academy custom logotype.
   - Map navigation link items to Vidya Dham Academy core sections (Overview, Programs 6-12, B.Sc Nursing & NEET, Pedagogy, Admissions).
3. **Color Re-binding (Project OKLCH / CSS Custom Tokens)**:
   - Header Background: Solid `#F7F5EF` (`var(--bg-base)`)
   - Panel Overlays: Deep Academic Blue `#102A43` (`var(--color-primary)`)
   - Text Links: Deep Ink `#111827` (`var(--text-primary)`) & Warm Ivory (`#F7F5EF`)
   - Hover Highlight / Eyebrow Badges: Muted Gold `#C69C45` (`var(--color-secondary)`)

---

## Deconstruction Schema Checklist
- [x] Brand Color Mapping (OKLCH / CSS Custom Tokens)
- [x] Typography & Display Font Hierarchy
- [x] Component & Micro-Interaction Extracts (Osmo Navigation Wipe Menu)
- [ ] Hero Section & 7-Step Pedagogy Component Reference
- [ ] Program Directory & Course Card Component Reference
- [ ] Conversion & Lead Capture Layout Component Reference
