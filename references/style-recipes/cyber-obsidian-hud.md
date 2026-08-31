# Style Recipe: Cyber-Minimalist Obsidian HUD

> **Archetype ID**: `cyber-obsidian-hud`  
> **Inspired By**: Active Theory, Anton & Irene, RESN  
> **Best For**: Creative Technology Studios, Web3 & AI Flagships, High-Concept Digital Portfolios, Gaming & WebXR Experiences  
> **Key Attributes**: Cosmic Void Backgrounds, Translucent HUD Chrome, Monospace Coordinate Typography, Real-Time GLSL Particle Shaders  

---

## 1. Mathematical Token Matrix

```json
{
  "colors": {
    "bg-void": "oklch(0.06 0.01 260)",
    "bg-surface": "oklch(0.12 0.02 260)",
    "bg-surface-elevated": "oklch(0.16 0.03 260)",
    "text-primary": "oklch(0.98 0.01 260)",
    "text-muted": "oklch(0.70 0.03 260)",
    "text-hud": "oklch(0.48 0.02 260)",
    "signal-cyan": "oklch(0.72 0.18 220)",
    "signal-magenta": "oklch(0.65 0.25 320)",
    "border-subtle": "rgba(255, 255, 255, 0.08)",
    "border-glow": "rgba(56, 189, 248, 0.3)"
  },
  "typography": {
    "display": "NB Architekt / JetBrains Mono / Syne Mono, monospace",
    "body": "General Sans / Inter / system-ui, sans-serif",
    "micro": "JetBrains Mono / monospace",
    "clamp-hero": "clamp(2.5rem, 6.5vw + 1rem, 5.75rem)",
    "clamp-label": "clamp(0.75rem, 1.2vw, 0.875rem)"
  },
  "spatial": {
    "hud-padding": "1.5rem",
    "section-gap": "8rem",
    "border-radius-hud": "4px",
    "border-radius-pill": "9999px"
  }
}
```

---

## 2. Layout & Grid Rules

1. **4-Corner Viewport Anchors**:
   - Top-Left: Studio Mark / Logo + Status Indicator (`[SYS_ACTIVE]`).
   - Top-Right: City / Node Switcher (`LOS ANGELES [34°N] // AMSTERDAM [52°N]`) + Audio Mute Toggle.
   - Bottom-Left: Live Coordinate Telemetry & FPS Counter.
   - Bottom-Right: Navigation Drawer Trigger & Mode Switcher (`[PORTFOLIO // VR // AR]`).
2. **Central Spatial Stage**:
   - Full-bleed `<canvas>` element holding the WebGL particle field and 3D floating project cards.

---

## 3. Kinetic & Shader Behavior

- **Cursor Interaction**: Real-time vector repulsion in GLSL fragment/vertex shader.
- **Scroll Scrubbing**: Z-axis camera translation with exponential damping (`HydraMath.dampLerp`).
- **Audio Feedback**: 15ms synthetic oscillator sweep on hover (`ActiveTheorySoundEngine.click`).

---

## 4. Slop Patterns to Avoid

- **No generic purple neon blurs**: Use targeted chromatic signals (`oklch(0.72 0.18 220)` Cyan and `oklch(0.65 0.25 320)` Magenta) with mathematical falloff.
- **No unreadable centered body text**: Keep body text aligned, high-contrast white (`#f8fafc`), and legible.
- **No sluggish CSS easings**: Use snappy `cubic-bezier(0.23, 1, 0.32, 1)` or raw WebGL lerp.
