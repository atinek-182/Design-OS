# Gehry Getty — 15-Category Dot-to-Dot Master Reference Manual

> **Reference Slug:** `gehry-getty`  
> **Source URL:** [https://gehry.getty.edu/](https://gehry.getty.edu/)  
> **Ingested Path:** [reference-inputs/sites/gehry-getty/](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/gehry-getty/)  
> **Institution:** Getty Research Institute  

---

## 0. Raw Source, Media & Visual Wireframe Assets (`assets/`)
- 🌐 **Raw Mirrored Source:** [`mirror/index.html`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/gehry-getty/mirror/index.html)
- 📐 **Detailed Visual UI Wireframe:** [`wireframe.html`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/gehry-getty/assets/wireframe.html) | Image: [`wireframe.png`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/gehry-getty/assets/wireframe.png)
- 📸 **5 Viewport Screenshots:** [`desktop_1920.png`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/gehry-getty/assets/desktop_1920.png), [`laptop_1440.png`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/gehry-getty/assets/laptop_1440.png), [`tablet_1024.png`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/gehry-getty/assets/tablet_1024.png), [`tablet_768.png`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/gehry-getty/assets/tablet_768.png), [`mobile_375.png`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/gehry-getty/assets/mobile_375.png)

---

## 1. Meta, SEO, & Favicons
- **Title:** `Frank Gehry Archive | Getty Research Institute`
- **Viewport Config:** `<meta name="viewport" content="width=device-width, initial-scale=1">`

---

## 2. Preloader & Entrance System
- **Preloader Mechanics:** Stage wait state during WebGL 3D GLTF model load & Basis Universal Transcoder WASM compilation (`basis_transcoder.wasm`).

---

## 3. Navigation & Header System
- **Minimalist Archival Header:** Subtle serif logo header with embedded "3D Model Explorer" tag.

---

## 4. Cursor & Pointer Physics
- **3D Grab Cursor:** Custom cursor switching from `cursor-grab` to `cursor-grabbing` on camera orbit.

---

## 5. Typography & Text Rendering
- **Editorial Type Scale:** Playfair Display serif headings paired with clean Space Mono metadata captions.

---

## 6. OKLCH Color Tokens & Theme Engine
- **Primary Color:** Archival Warm Paper (`#F2F0EB`).
- **Accent Color:** Terracotta Rust (`#D94F30`).

---

## 7. Hero Section Architecture
- **Structure:** Full viewport WebGL stage containing interactive 3D model with floating hotspot pins.

---

## 8. Scrollytelling & Parallax Engine
- **Scrollytelling Module:** `PureScrollyTest.91c2b49f.js` driving multi-chapter camera orbit positions.

---

## 9. Interactive UI Widgets & Cards
- **3D Hotspot Modal Drawer:** Floating drawer showing model architectural annotations on pin click.

---

## 10. Drag-along-Path SVG Slider
- **Chapter Scrubber:** Interactive horizontal scrubber for chapter audio streams.

---

## 11. Proximity-Based Interactive Map Pins
- **3D Hotspot Coordinate Math:** World-to-screen vector projection (`Hotspot.032182a1.js`).

---

## 12. Audio & Soundscape UI System
- **Multi-Chapter Audio Player:** Embedded audio stream controller with JSON timecoded transcript synchronization.

---

## 13. Modals, CTAs, & Form Mechanics
- **Storyblok CMS Modal Integration:** Dynamic modal drawers triggered via Storyblok API JSON data.

---

## 14. Footer & Page Transition System
- **Archival Outro Section:** Getty Research Institute archive credits and citation footer.

---

## 15. 📦 Intercepted 3D Models, Rive Runtimes & Motion Physics Inventory
- **3D GLB Models:** `getty_formStudy_hotspot_desktop.glb` (3.95 MB), `getty_organ_hotspot_desktop.glb` (4.42 MB), `getty_shoebox_hotspot_desktop.glb` (3.76 MB)
- **WASM Engine:** `basis_transcoder.wasm` (499 KB Basis Universal Transcoder)
- **Audio Files:** `intro.mp3`, `chapter1.mp3`, `chapter2.mp3`, `chapter3.mp3`, `outro.mp3` (10.6 MB)
- **JSON Transcripts:** `getty_CH1_en.json`, `getty_CH2_en.json`, `getty_CH3_en.json`, `data.json`
