# SPEC-21: WebGL Shader Tagline-to-Logo Morph Heading & Signature Footer

## Overview
This specification details the WebGL shader canvas heading transition (tagline line morphing into the official Zorixel `Nuqun` logomark) and the signature dark minimalist footer, deconstructed from `REF-009` (`newmixcoffee.com/en` & `newmix recording .mp4`).

---

## 🎯 Target Scope & Component Placement
- **Feature 1 (Shader Tagline Morph):** `src/components/home/ShaderTaglineLogoMorph.tsx` (Homepage `/`)
- **Feature 2 (Signature Footer):** `src/components/navigation/Footer.tsx` (Global Layout Wrapper)
- **Reference Vault Asset:** `REF-009` (`newmixcoffee.com/en` & `reference/newmix recording .mp4`)

---

## 🏗️ Structural Architecture & Motion Mechanics

### 1. WebGL Shader Tagline-to-Logo Morph Stage
- **Shader Canvas:** Fixed-position WebGL canvas (`#shaderTaglineCanvas`) with custom fragment shader particle distortion.
- **Initial State:** Shader renders display tagline line: `"Not your typical Vibe Coding"`.
- **Scroll Morph Scrub:** As the user scrolls through the section (`ScrollTrigger.create({ trigger: "#taglineMorphStage", pin: true, scrub: 1 })`), the WebGL shader particles dissolve and morph from `"Not your typical Vibe Coding"` into the official solid Zorixel logomark (`zorixel_logo_solid_white.svg` / `Nuqun` font).
- **Smoothness & Motion:** Includes Lenis smooth scroll inertia, SVG dash-line path drawing, and fading slogan reveals.

### 2. Signature Dark Minimalist Footer
- Full-bleed Obsidian Midnight (`#0D0E12`) dark canvas with Velvet Burgundy (`#6D001A`) top border divider.
- Oversized `Nuqun` SVG logomark header at footer top (`width: 100%`, `max-width: 1200px`).
- **4 Organized Sitemap Columns:**
  1. **Platform:** Component Vault, Free Resource Hub, Digital Storefront, API Docs.
  2. **Ecosystem:** Next.js 15 Starter, Prompt Stack v3, Figma Design System, GSAP Cheatsheet.
  3. **Company:** About Zorixel, Manifesto, Atinek Maurya 3Ms Framework, Contact.
  4. **Connect / Business:** Business Email (`contact@zorixel.com`), Instagram, LinkedIn, GitHub, Twitter / X.
- **System Status HUD:** Live operational status pill ("SYSTEM STATUS: OPERATIONAL • 60 FPS • OKLCH V3").

---

## 🎨 Theme & Typography Binding
- **Logomark:** Official `Nuqun-Regular` SVG vector (`zorixel_logo_solid_white.svg`).
- **Tagline Font:** `Havock` bold display font.
- **Footer Links & Copy:** `Rosehot` subheadings & sans-serif body text.
- **Color Tokens:** Obsidian Midnight (`#0D0E12`), Warm Linen (`#FAF8F5`), Velvet Burgundy (`#6D001A`), Electric Crimson (`#D61C2C`).

---

## 📱 Mobile Responsiveness Mandate
- Shader particle resolution capped at DPR 1.5 on mobile devices (<768px).
- Footer sitemap columns stack into 2x2 grid on mobile viewports.
