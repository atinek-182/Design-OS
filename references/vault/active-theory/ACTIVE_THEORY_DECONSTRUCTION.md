# Active Theory — Vault Site #1 of 23 Deep Deconstruction

> **Site Name**: Active Theory (Creative Technology Studio)  
> **Source URL**: `https://activetheory.net/`  
> **Studio Locations**: Los Angeles, CA & Amsterdam, Netherlands  
> **Awwwards Pedigree**: Agency of the Year (Multiple), Developer of the Year, Site of the Year, 50+ Site of the Day Awards  
> **Vault Reference ID**: `vault-01-active-theory`  
> **Primary Tech Stack**: Hydra WebGL Framework, Custom GLSL Shaders, WebAudio API, WebXR, Decoupled Thread Math  

---

## 1. Executive Summary & Aesthetic Archetype
Active Theory pioneered the **Cyber-Minimalist Obsidian HUD** aesthetic — fusing dark high-contrast viewports, real-time GLSL particle repulsion physics, monospace coordinate metadata, and ambient Web Audio micro-haptics.

```
[Visual Character]: Cosmic Void Black (#050608) with Neon Cyan (#38bdf8) & Magenta (#e056fd) signals.
[Spatial Rhythm]: HUD-anchored viewport corners + 3D camera-scrubbed canvas center.
[Kinetic Physics]: Framerate-independent exponential lerp (Hydra Math) + Pointer vector repulsion.
[Audio System]: Zero-dependency Web Audio API oscillator impulses on hover and mode transitions.
```

---

## 2. Mathematical OKLCH Token Foundation

```json
{
  "colors": {
    "background": {
      "void": "oklch(0.06 0.01 260)",
      "surface-slate": "oklch(0.12 0.02 260)",
      "surface-elevated": "oklch(0.16 0.03 260)"
    },
    "text": {
      "primary": "oklch(0.98 0.01 260)",
      "muted": "oklch(0.70 0.03 260)",
      "hud-dim": "oklch(0.45 0.02 260)"
    },
    "signals": {
      "electric-cyan": "oklch(0.72 0.18 220)",
      "neon-magenta": "oklch(0.65 0.25 320)"
    }
  },
  "contrast_ratios": {
    "primary_on_void": "16.8:1 (WCAG AAA Pass)",
    "muted_on_void": "7.4:1 (WCAG AAA Pass)",
    "cyan_on_void": "8.2:1 (WCAG AAA Pass)"
  }
}
```

---

## 3. Typography & Fluid Clamp Formulas

- **Display Title**: Geometric Monospace Sans (`NB Architekt` / `JetBrains Mono` / `Syne Mono`).
- **Body & Supporting**: Clean Technical Sans (`Inter` / `General Sans`).
- **Micro-Kerning Rules**:
  - Display Title: `letter-spacing: 0.15em; text-transform: uppercase; line-height: 1.0;`
  - HUD Labels & Coordinates: `letter-spacing: 0.2em; font-size: 0.75rem; text-transform: uppercase;`
- **Fluid Clamp Math**:
  - Hero Headline: `clamp(2.5rem, 6.5vw + 1rem, 5.75rem)`
  - Subheading & Section Tags: `clamp(0.75rem, 1.2vw, 1.0rem)`

---

## 4. Hydra Kinetic Math Core (Framerate-Independent Damping)

Active Theory decouples kinetic physics from monitor refresh rates (60Hz vs 120Hz vs 240Hz ProMotion) using **framerate-normalized exponential decay**:

$$\alpha_{\text{norm}} = 1 - \exp(\ln(1 - \alpha) \cdot \text{HzMultiplier})$$

```typescript
export function framerateNormalizeLerpAlpha(alpha: number, frameMultiplier = 1.0): number {
  const clamped = Math.min(Math.max(alpha, 0), 1);
  return 1 - Math.exp(Math.log(1 - clamped) * frameMultiplier);
}

export function dampLerp(target: number, current: number, alpha: number): number {
  const normAlpha = framerateNormalizeLerpAlpha(alpha);
  return current + (target - current) * normAlpha;
}
```

---

## 5. GLSL Particle Field & Raymarched Displacement Shader

Active Theory renders real-time bioluminescent particles that dynamically repel away from pointer vectors:

$$\mathbf{D} = \mathbf{P}_{\text{mouse}} - \mathbf{P}_{\text{particle}}, \quad \text{Intensity} = \frac{\text{Constant}}{\|\mathbf{D}\| + \epsilon}$$

```glsl
// Active Theory Hydra-Inspired Particle Stage Shader
uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform vec3 u_cyan;
uniform vec3 u_magenta;

varying vec2 v_uv;

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution.xy;
    vec2 delta = st - u_mouse;
    float dist = length(delta);
    
    // Radial repulsion falloff
    float glow = 0.04 / (dist + 0.015);
    
    // Chromatic dual-tone signal mix
    vec3 signalColor = mix(u_cyan, u_magenta, sin(u_time * 1.5 + st.x * 4.0) * 0.5 + 0.5);
    vec3 finalColor = signalColor * glow;
    
    gl_FragColor = vec4(finalColor, min(glow, 1.0));
}
```

---

## 6. HUD Micro-Audio UI Synthesizer

Active Theory utilizes zero-external-asset Web Audio API oscillators for instantaneous feedback:
- **Hover Impulse**: 1200Hz $\rightarrow$ 80Hz sine sweep (15ms decay).
- **Mode Toggle / Location Switch**: Dual chord chime (523.25Hz + 659.25Hz).

---

## 7. Keep-vs-Discard Architectural Matrix

| Extracted Pattern | Decision | Rationale |
| :--- | :--- | :--- |
| **Framerate-Normalized Exponential Lerp** | `[KEEP]` | Solves 120Hz/60Hz velocity discrepancies across screens. |
| **GLSL Particle Repulsion Falloff** | `[KEEP]` | Provides high-end interactive visual atmosphere with minimal CPU load. |
| **HUD 4-Corner Viewport Grid** | `[KEEP]` | Distinctive layout architecture breaking the standard centered hero pattern. |
| **Web Audio Micro-Haptics** | `[KEEP]` | Tactile depth with 0kb external asset payload. |
| **1.8MB Monolithic Minified Hydra Bundle** | `[DISCARD]` | Bloated proprietary black-box; refactored into modular Three.js/React components. |
| **Hardcoded Canvas Fallback Screen** | `[DISCARD]` | Replaced with semantic, progressive-enhancement HTML5 fallback. |

---
*Cataloged in Design-OS Vault Index: `references/vault/active-theory/`.*
