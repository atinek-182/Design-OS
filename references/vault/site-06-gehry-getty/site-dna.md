# Gehry Getty — 5-Layer Site DNA Report

> **URL:** [https://gehry.getty.edu/](https://gehry.getty.edu/)  
> **Institution:** Getty Research Institute (Los Angeles)  
> **Category:** 3D Architectural Model Archive & Guided Audio Storytelling  
> **Date Ingested:** 2026-07-23  

---

## 🧬 1. Visual Identity & Atmosphere

- **Theme & Palette:** Archival Paper Warm Off-White (`#F2F0EB`), Terracotta Rust (`#D94F30`), and Obsidian Ink (`#1C1B18`).
- **Typography:** Classic Editorial Serif headers paired with clean Space Mono metadata captions.
- **Vibe:** Museum-grade architectural elegance. Combines high-resolution 3D physical model studies with intimate audio interviews and spatial hotspots.

---

## 🛠️ 2. Architectural Tech Stack

- **Framework:** Nuxt.js / Vue 3 static SSR application (`entry.f152f914.js`).
- **3D Graphics Engine:** Three.js + GLTF Loader (`gltf-loader.f5e7b4f0.js`).
- **GPU Texture Compression:** WebAssembly Basis Universal Transcoder (`basis_transcoder.wasm`).
- **Audio Engine:** HTML5 Audio Stream API playing multi-chapter guided transcripts (`chapter1.mp3`, `getty_CH1_en.json`).

---

## 📁 3. Mirroring & Asset Index

- **Source Code Mirror:** `mirror/index.html` (517 KB)
- **3D Architectural GLTF Models:** `mirror/misc/getty_formStudy_hotspot_desktop.glb` (3.95 MB), `mirror/misc/getty_organ_hotspot_desktop.glb` (4.42 MB), `mirror/misc/getty_shoebox_hotspot_desktop.glb` (3.76 MB)
- **Audio Stream Files:** `mirror/misc/intro.mp3`, `chapter1.mp3`, `chapter2.mp3`, `chapter3.mp3`, `outro.mp3` (10.6 MB total)
- **Extracted React Components:** `code-extracts/components/Architectural3DViewer.tsx`, `code-extracts/components/AudioNarrativePlayer.tsx`
- **Extracted Animation Setup:** `code-extracts/animations/three-vector-spring.js`
- **Extracted CSS Tokens:** `code-extracts/styles/gehry-getty-tokens.css`
