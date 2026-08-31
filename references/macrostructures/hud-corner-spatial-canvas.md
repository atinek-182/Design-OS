# Macrostructure: HUD Corner Spatial Canvas

> **Macrostructure ID**: `hud-corner-spatial-canvas`  
> **Rotation Index**: 8 of Tastemaker Catalog  
> **Layout Family**: Viewport-Locked Overlay + Full-Bleed 3D Spatial Canvas  

---

## Visual Architecture Wireframe

```
+-------------------------------------------------------------------------------+
| [LOGO / STUDIO MARK]                             [CITY SWITCHER: LA // AMS]   |
| [SYS_STATUS: ACTIVE]                             [AUDIO: ON/OFF]              |
|                                                                               |
|                                                                               |
|                     ┌───────────────────────────┐                             |
|                     │                           │                             |
|                     │   FULL-BLEED 3D CANVAS    │                             |
|                     │   PARTICLE STAGE &        │                             |
|                     │   Z-AXIS 3D CARDS         │                             |
|                     │                           │                             |
|                     └───────────────────────────┘                             |
|                                                                               |
|                                                                               |
| [COORDINATES: 34.0522° N, 118.2437° W]           [MODE: PORTFOLIO // VR // AR]|
| [FRAME RATE: 60 FPS]                             [MENU: CONTACT DRAWER]       |
+-------------------------------------------------------------------------------+
```

---

## Responsive Reflow Rules

- **Desktop (>1200px)**: 4 distinct viewport corners, full-bleed 3D particle canvas, floating 3D bento cards.
- **Tablet (768px - 1199px)**: Top corners remain fixed, bottom telemetry compresses into a single bottom status strip.
- **Mobile (<768px)**: Top bar condenses into compact 2-column header (Logo + Menu burger), bottom controls anchor to fixed thumb-zone drawer. Canvas particle count scales by 0.5x for mobile GPU optimization.
