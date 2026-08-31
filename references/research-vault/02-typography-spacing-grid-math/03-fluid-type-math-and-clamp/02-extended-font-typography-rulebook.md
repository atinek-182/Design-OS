---
title: Extended Font Typographic Rulebook, OpenType `wdth` Axis & CSS Specs
domain: research
summary: 'title: Extended Font Typographic Rulebook, OpenType `wdth` Axis & CSS Specs summary: Typographic rules, OpenType
  `wdth` variable font axis math, and CSS specs for extended display fonts from DesignYourWay research.'
critical_directives:
- 'Never apply CSS `transform: scaleX()` or artificial distortion to text.'
- Scope extended fonts strictly to display headlines, hero banners, and section badges (never long body paragraphs).
- 'NEVER for Long Body Text**: Extended fonts reduce characters per line, increasing eye movement and reading fatigue. Scop'
section_outline:
- Extended Font Typographic Rulebook, OpenType `wdth` Axis & CSS Specs
- Extended vs. Artificially Stretched Text
- Font Width Classification & CSS Specs
- Modern Web CSS Rules for Extended Fonts
- 1. Using CSS `font-stretch` Property
read_triggers:
- When working on research in references/awwwards-research-vault/02-typography-spacing-grid-math/03-fluid-type-math-and-clamp/01-extended-font-typography-rulebook.md
- When reading context for Extended Font Typographic Rulebook, OpenType `wdth` Axis & CSS Specs
tags:
- research
- 01-extended-font-typography-rulebook
updated: '2026-08-08'
---

---
title: Extended Font Typographic Rulebook, OpenType `wdth` Axis & CSS Specs
domain: research
summary: Typographic rules, OpenType `wdth` variable font axis math, and CSS specs for extended display fonts from DesignYourWay research.
critical_directives:
- Never apply CSS `transform: scaleX()` or artificial distortion to text.
- Use true extended font glyphs or variable font `font-variation-settings: "wdth" 125`.
- Scope extended fonts strictly to display headlines, hero banners, and section badges (never long body paragraphs).
read_triggers:
- When building Awwwards-grade websites typography
- When configuring extended font typography OpenType wdth axis
- When styling poster display headlines with Barlow Expanded
tags:
- typography
- extended-fonts
- css-math
- variable-fonts
updated: '2026-08-10'
---

# Extended Font Typographic Rulebook, OpenType `wdth` Axis & CSS Specs

## Extended vs. Artificially Stretched Text

- **True Extended Font**: Built into the font glyph geometry. Stroke weights, crossbars, and internal counter spaces (O, D, B, E, H) stay balanced and optically proportional.
- **Artificial Distortion (`transform: scaleX(1.3)` or CSS horizontal scaling)**: Distorts stroke weights—vertical strokes become unnaturally thick relative to horizontal crossbars. Unacceptable for Awwwards-grade typography.

---

## Font Width Classification & CSS Specs

| Classification | Relative Width % | CSS `font-stretch` | OpenType `wdth` Axis |
| :--- | :--- | :--- | :--- |
| Ultra-Condensed | ~50% | `ultra-condensed` | `50` |
| Condensed | ~75% | `condensed` | `75` |
| Normal / Regular | 100% | `normal` | `100` |
| Expanded / Extended | 125% | `expanded` | `125` |
| Ultra-Expanded | 200% | `ultra-expanded` | `200` |

---

## Modern Web CSS Rules for Extended Fonts

### 1. Using CSS `font-stretch` Property
```css
.poster-headline {
  font-family: 'Barlow', sans-serif;
  font-stretch: expanded; /* Fully supported in all modern browsers */
}
```

### 2. Using Variable Fonts `wdth` Axis (Zero HTTP Overhead)
```css
.awwwards-display-title {
  font-family: 'Barlow Variable', sans-serif;
  font-variation-settings: "wdth" 125, "wght" 800;
  line-height: 1.15;
  letter-spacing: -0.02em;
}
```

---

## Key Use Cases in Awwwards Layouts

- **Hero & Display Headlines**: High impact, poster-style headlines that command spatial authority.
- **Branding & Editorial Pull Quotes**: Conveys scale, confidence, and editorial precision.
- **NEVER for Long Body Text**: Extended fonts reduce characters per line, increasing eye movement and reading fatigue. Scope strictly to headlines, badges, and section anchors.

---

## Key Extended Typeface Recommendations

1. **Barlow Expanded**: High quality, open-source Google Font variable family with full `wdth` axis support.
2. **Trade Gothic Extended**: Classic editorial display typeface for high-end digital agency layouts.
3. **Akira Expanded**: Ultra-bold display font for brutalist and poster-style visual headers.
