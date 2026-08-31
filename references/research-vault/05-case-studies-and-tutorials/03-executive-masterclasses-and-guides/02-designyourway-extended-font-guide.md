---
title: What Is an Extended Font and When to Use It in Web Design
domain: research
summary: 'Source: https://www.designyourway.net/blog/what-is-an-extended-font/ Author: DesignYourWay'
critical_directives:
- 'NEVER for Long Body Text**: Extended fonts reduce characters per line, increasing eye movement and reading fatigue. Scop'
section_outline:
- What Is an Extended Font and When to Use It in Web Design
- Executive Typographic Breakdown
- Extended vs. Artificially Stretched Text
- Font Width Classification & CSS Specs
- Modern Web CSS Rules for Extended Fonts
read_triggers:
- When working on research in references/awwwards-research-vault/05-case-studies-and-tutorials/03-executive-masterclasses-and-guides/03-designyourway-extended-font-guide.md
- When reading context for What Is an Extended Font and When to Use It in Web Design
tags:
- research
- 03-designyourway-extended-font-guide
updated: '2026-08-08'
---

# What Is an Extended Font and When to Use It in Web Design
Source: https://www.designyourway.net/blog/what-is-an-extended-font/
Author: DesignYourWay

## Executive Typographic Breakdown

An extended font is a typeface with characters intentionally designed wider than standard proportions by the type designer, not artificially stretched after the fact via CSS or design tools.

### Extended vs. Artificially Stretched Text
- **True Extended Font**: Built into the font glyph geometry. Stroke weights, crossbars, and internal counter spaces (O, D, B, E, H) stay balanced and optically proportional.
- **Artificial Distortion (`transform: scaleX(1.3)` or CSS horizontal scaling)**: Distorts stroke weights—vertical strokes become unnaturally thick relative to horizontal crossbars. Unacceptable for Awwwards-grade typography.

### Font Width Classification & CSS Specs
| Classification | Relative Width % | CSS `font-stretch` | OpenType `wdth` Axis |
| :--- | :--- | :--- | :--- |
| Ultra-Condensed | ~50% | `ultra-condensed` | `50` |
| Condensed | ~75% | `condensed` | `75` |
| Normal / Regular | 100% | `normal` | `100` |
| Expanded / Extended | 125% | `expanded` | `125` |
| Ultra-Expanded | 200% | `ultra-expanded` | `200` |

### Modern Web CSS Rules for Extended Fonts
1. **Using CSS `font-stretch` Property**:
   ```css
   .poster-headline {
     font-family: 'Barlow', sans-serif;
     font-stretch: expanded; /* Fully supported in all modern browsers */
   }
   ```
2. **Using Variable Fonts `wdth` Axis (Zero HTTP Overhead)**:
   ```css
   .awwwards-display-title {
     font-family: 'Barlow Variable', sans-serif;
     font-variation-settings: "wdth" 125, "wght" 800;
     line-height: 1.15;
     letter-spacing: -0.02em;
   }
   ```

### Key Use Cases in Awwwards Layouts
- **Hero & Display Headlines**: High impact, poster-style headlines that command spatial authority.
- **Branding & Editorial Pull Quotes**: Conveys scale, confidence, and editorial precision.
- **NEVER for Long Body Text**: Extended fonts reduce characters per line, increasing eye movement and reading fatigue. Scope strictly to headlines, badges, and section anchors.

### Key Extended Typeface Recommendations
1. **Barlow Expanded**: High quality, open-source Google Font variable family with full `wdth` axis support.
2. **Trade Gothic Extended**: Classic editorial display typeface for high-end digital agency layouts.
3. **Akira Expanded**: Ultra-bold display font for brutalist and poster-style visual headers.
