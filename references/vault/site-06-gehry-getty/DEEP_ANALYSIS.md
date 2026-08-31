# 🔬 Ultra-Exhaustive Architectural & Design Analysis: Gehry Getty

**Target Site:** Gehry Getty — *Sculpting Harmony: Frank Gehry and the Walt Disney Concert Hall* (`https://gehry.getty.edu/`)  
**Client / Institution:** Getty Research Institute & Frank Gehry Papers Archive  
**Design & Dev Studio:** **Resn** (`https://resn.co.nz/`)  
**Accolades:** Awwwards **Site of the Day**, FWA of the Month, Webby Award Winner  
**Tech Stack:** Three.js, WebGL GLSL Shaders, Basis GPU Texture Transcoder (`basis_transcoder.wasm`), HTML5 Web Audio API (`chapter1.mp3`), Timecoded JSON Subtitle Manifests (`getty_CH1_en.json`)  

---

## 1. Executive Summary & Architectural Exhibition Philosophy

Created by the legendary digital experience agency **Resn** for the **Getty Research Institute**, *Sculpting Harmony* is an interactive digital exhibition documenting Frank Gehry's design process for the Walt Disney Concert Hall in Los Angeles. The site brings over 150 rare physical study models, sketches, and audio interviews from the Frank Gehry Papers archive into an immersive 3D web canvas.

The experience translates Gehry's signature deconstructivist architectural philosophy—crumpled paper models, acoustic stainless-steel sail roofs, and organic spatial sweeps—into interactive GLTF models and synchronized audio journeys.

---

## 2. 3D Model Hotspot Vector Pipeline

```
┌───────────────────────────────────────────────────────────────┐
│ 3D WORLD COORDINATE (x, y, z)                                │
│ • Vector3 coordinate attached to mesh mesh_roof_sail         │
├───────────────────────────────────────────────────────────────┤
│ SCREEN PROJECTION MATRIX                                     │
│ • Vector3.project(camera) -> Screen X, Y Position             │
│ • Renders HTML Pin Element (.hotspot-pin) at Screen (X, Y)    │
├───────────────────────────────────────────────────────────────┤
│ CAMERA SPRING INTERPOLATION                                  │
│ • On Pin Click: Interpolate Camera Position & Target Vector  │
│ • Easing: lerp(currentCam, targetCam, 0.05)                  │
└───────────────────────────────────────────────────────────────┘
```

### Hotspot Vector Projection Math
When users view Gehry's 3D architectural models, interactive pins (`.hotspot-pin`) hover over key architectural details. The pin coordinates are computed in real time from 3D world space into 2D viewport pixel space:

$$\mathbf{v}_{\text{screen}} = \mathbf{P} \cdot \mathbf{V} \cdot \mathbf{M} \cdot \mathbf{v}_{\text{world}}$$

$$\text{Pixel}_X = \left( \frac{\mathbf{v}_{\text{screen.x}}}{2} + 0.5 \right) \times \text{window.innerWidth}$$

$$\text{Pixel}_Y = \left( -\frac{\mathbf{v}_{\text{screen.y}}}{2} + 0.5 \right) \times \text{window.innerHeight}$$

---

## 3. Basis GPU Texture Compression & WASM Transcoding

To render high-resolution metallic stainless-steel textures and crumpled paper grain across mobile devices without exceeding VRAM bounds:
- Textures are compressed into KTX2 / Basis Universal format.
- Transcoded on-the-fly off-thread using WebAssembly (`basis_transcoder.wasm`).
- Reduces texture memory consumption by over 75% compared to raw PNG/JPG textures.

---

## 4. Synchronized Audio & Timecoded Transcript Engine

### Guided Exhibition Audio Journeys
The site pairs ambient organ music and Frank Gehry voice interviews (`chapter1.mp3`, `chapter2.mp3`, `chapter3.mp3`) with structured timecoded JSON transcript manifests (`getty_CH1_en.json`):

```json
{
  "timecodes": [
    { "start": 0.0, "end": 4.2, "text": "The idea for the hall started with the acoustics...", "focusMesh": "mesh_auditorium_sail" },
    { "start": 4.3, "end": 9.8, "text": "We experimented with paper models, crumpling sheet after sheet.", "focusMesh": "mesh_paper_model_03" }
  ]
}
```

- **Audio-Visual Sync:** As the audio player reaches timecode `start`, the 3D canvas automatically camera-pans to the referenced `focusMesh` model component.

---

## 5. Color Palette Tokens & Museum Aesthetics

- **Parchment Cream Neutral:** `#F4F0EA` / `oklch(0.95 0.01 75)`
- **Architectural Charcoal:** `#1C1C1C` / `oklch(0.15 0.005 240)`
- **Metallic Titanium Silver:** `#D0D4D8` / `oklch(0.85 0.01 220)`
- **Archive Sepia Accent:** `#8C6D4F` / `oklch(0.52 0.06 65)`

---

## 6. Code Extracts & Vault Registry

- 🧩 **Interactive 3D Stage & Hotspots:** [`Architectural3DViewer.tsx`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/gehry-getty/code-extracts/components/Architectural3DViewer.tsx)
- 🧩 **Synchronized Audio Player:** [`AudioNarrativePlayer.tsx`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/gehry-getty/code-extracts/components/AudioNarrativePlayer.tsx)
- ⚡ **Camera Spring Orbit Script:** [`three-vector-spring.js`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/gehry-getty/code-extracts/animations/three-vector-spring.js)
- 🎨 **CSS Tokens:** [`gehry-getty-tokens.css`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/gehry-getty/code-extracts/styles/gehry-getty-tokens.css)

- 📐 **Visual Wireframe Blueprint:** [`wireframe.html`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/gehry-getty/assets/wireframe.html)
- 📸 **5 Viewport Screenshots:** [`desktop_1920.png`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/gehry-getty/assets/desktop_1920.png), [`laptop_1440.png`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/gehry-getty/assets/laptop_1440.png), [`tablet_1024.png`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/gehry-getty/assets/tablet_1024.png), [`tablet_768.png`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/gehry-getty/assets/tablet_768.png), [`mobile_375.png`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/gehry-getty/assets/mobile_375.png)
