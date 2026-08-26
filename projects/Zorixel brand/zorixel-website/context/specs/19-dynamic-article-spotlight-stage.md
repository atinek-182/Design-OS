# SPEC-19: Dynamic Multi-Media Article Spotlight Stage (`/insights`)

## Overview
This specification details the pinned 3-way synchronized multi-media spotlight stage for articles, case studies, video breakdowns, and guide sheets on `/insights` and `/insights/[slug]`, deconstructed and customized from `REF-007` (`Prototype-studio-rebuilt`).

---

## 🎯 Target Route & Scope
- **Route:** `/insights` & `/insights/[slug]` (Articles, Case Studies, Video Teardowns, Guide Sheets)
- **Target Component:** `src/components/insights/ArticleSpotlightStage.tsx`
- **Reference Vault Asset:** `REF-007` (`Prototype-studio-rebuilt/`)

---

## 🏗️ Structural Architecture & Motion Mechanics

### 1. Flexible Dynamic Item Count (`X/N`)
- Counter dynamically computes `X/N` where `N = items.length` (e.g. `01/04`, `01/06`, `01/12`).
- ScrollTrigger end distance dynamically scales based on items count: `end: +=${items.length * 50}vh`.

### 2. Multi-Media Stage Support
The central media strip accepts a polymorphic `item.type` property:
- **`type: "image"`:** Renders high-resolution 16:9 WebP / PNG graphic.
- **`type: "video"`:** Renders HTML5 MP4 / WebM video loop with subtle controls overlay.
- **`type: "pdf"`:** Renders PDF document cover preview card with download action badge.
- **`type: "code_guide"`:** Renders formatted code block snippet or markdown callout text guide card.

### 3. Pinned 3-Way Synchronized Motion
- **Section Pinning:** `ScrollTrigger.create({ trigger: ".spotlight", pin: true, scrub: 1 })`.
- **Synchronized Movements:**
  1. **Counter (`X/N`):** Translates Y (`moveDistanceIndex`) with current step number updating smoothly.
  2. **Media Strip:** Media cards translate Y (`moveDistanceMedia`) with center viewport threshold (`window.innerHeight / 2`) illuminating active card from 50% (`0.5`) opacity to 100% (`1.0`).
  3. **Table of Contents / Outline:** Right-aligned section title list translating Y (`moveDistanceNames`) with active title highlighted in white (`#fff`) / Velvet Burgundy (`#6D001A`) and inactive titles muted in gray (`#4a4a4a`).

---

## 🎨 Theme & Typography Binding
- **Counter Typography:** `Havock` bold tabular numbers over Obsidian Midnight (`#0D0E12`) dark canvas.
- **Titles & Badges:** `Rosehot` section titles with Velvet Burgundy (`#6D001A`) and Electric Crimson (`#D61C2C`) accent badges.

---

## 📱 Mobile Responsiveness Mandate
- Media strip width scales to `calc(100% - 4rem)` on viewports <1000px.
- Active title text remains 100% visible on mobile touch screens without opacity degradation.
