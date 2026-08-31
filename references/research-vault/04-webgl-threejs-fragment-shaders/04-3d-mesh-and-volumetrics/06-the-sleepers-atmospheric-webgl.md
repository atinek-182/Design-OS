---
title: The Sleepers Atmospheric WebGL Shaders, Fake Volumetric Fog & Inverted Hull Outlines
domain: research
summary: Complete technical WebGL breakdown of Thibaut Foussard's The Sleepers, detailing threshold swirling post-processing
  transitions, onBeforeCompile fake volumetric fog, and Blender inverted hull mesh outlines.
critical_directives:
- Fake volumetric fog using `onBeforeCompile` world-space Y height gradient + seamless 2D noise texture to save GPU performance.
- Perform organic image reveals using `step(textureColor.r, uProgress)` on threshold noise textures.
section_outline:
- Executive Summary & Pedigree
- 1. Threshold Swirling Post-Processing Transition Shader
- 2. Fake Volumetric Animated Fog (`onBeforeCompile` Override)
- 3. Blender Inverted Hull Mesh Outline Export Protocol
read_triggers:
- When building Awwwards-grade websites WebGL atmospheric fog
- When configuring Three.js onBeforeCompile fake volumetric fog
- When implementing threshold swirling post processing transition
tags:
- webgl
- threejs
- fog-shader
- post-processing
- onBeforeCompile
updated: '2026-08-08'
---

# The Sleepers Atmospheric WebGL Shaders, Fake Volumetric Fog & Inverted Hull Outlines

## Executive Summary & Pedigree

- **Creator**: Thibaut Foussard (Bruno Simon Three.js Challenge Winner).
- **Core Philosophy**: Maximum visual atmosphere with minimal technical overhead (lightweight GLSL shaders over heavy volumetric raymarching).

---

## 1. Threshold Swirling Post-Processing Transition Shader

Uses a single grayscale noise texture's red channel as a per-pixel threshold:

```glsl
// Threshold Swirling Transition Shader
uniform float uProgress; // Ramps 0.0 to 1.0
uniform sampler2D uTransitionTexture;

vec3 greyscale(vec3 color, float str) {
  float g = dot(color, vec3(0.299, 0.587, 0.114));
  return mix(color, vec3(g), str);
}

void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
  vec3 greyScaledColor = greyscale(inputColor.rgb, 1.0);
  greyScaledColor = mix(greyScaledColor, vec3(0.1, 0.1, 0.9), pow(uProgress, 5.0));

  vec4 textureColor = texture2D(uTransitionTexture, uv);
  float mixer = step(textureColor.r, uProgress); // Swirling reveal boundary

  outputColor = vec4(mix(greyScaledColor, inputColor.rgb, mixer), 1.0);
}
```

---

## 2. Fake Volumetric Animated Fog (`onBeforeCompile` Override)

Injected into standard `MeshStandardMaterial` objects without replacing materials or using volumetric raymarching:

```javascript
// Lightweight Fake Volumetric Fog via onBeforeCompile
const fogOnBeforeCompile = (shader) => {
  // 1. Pass worldPosition and UV as varyings in vertex shader
  shader.vertexShader = shader.vertexShader.replace(
    'void main() {',
    `
    varying vec3 vWorldPosition;
    varying vec2 vUv;
    void main() {
      vWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
      vUv = uv;
    `
  );

  // 2. Inject uniforms and noise sampling in fragment shader
  shader.fragmentShader = shader.fragmentShader.replace(
    'void main() {',
    `
    uniform float fogPositionY;
    uniform float fogSmoothness;
    uniform sampler2D noiseTexture;
    uniform float uTime;
    varying vec3 vWorldPosition;
    varying vec2 vUv;
    void main() {
    `
  );

  shader.fragmentShader = shader.fragmentShader.replace(
    'vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;',
    `
    vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;

    // Sample seamless noise texture driven by world coordinates + uTime
    vec4 noiseColor = texture2D(noiseTexture, vec2(vWorldPosition.x * 0.05 + uTime * 0.02, vWorldPosition.z * 0.05 + uTime * 0.02));
    float noise = noiseColor.r * 2.0;

    // Vertical Y-axis gradient calculation
    float verticalMixer = smoothstep(
      vWorldPosition.y - fogSmoothness,
      vWorldPosition.y + fogSmoothness,
      fogPositionY + noise
    );

    float mixer = clamp(verticalMixer, 0.0, 1.0);
    vec3 fogColor = vec3(0.9, 0.92, 0.95);

    outgoingLight = mix(outgoingLight, fogColor, mixer);
    `
  );

  shader.uniforms.fogPositionY = { value: 2.5 };
  shader.uniforms.fogSmoothness = { value: 4.0 };
  shader.uniforms.uTime = { value: 0 };
  shader.uniforms.noiseTexture = { value: noiseTextureInstance };
};
```

---

## 3. Blender Inverted Hull Mesh Outline Export Protocol

1. Create outline material in the **last material slot** of the mesh.
2. Enable **Backface Culling** on the outline material.
3. Add a **Solidify Modifier** in Blender:
   - Negative thickness (e.g. `-0.02`)
   - Flipped Normals checked
   - Material Offset set to last slot (`Material Offset: 99`)
4. Export as glTF with "Apply Modifiers" enabled. Three.js renders crisp toon/editorial outlines with zero shader overhead!
