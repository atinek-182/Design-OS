/* ==========================================================================
   WebGL Interactive Grid Hover Warp Fragment Shader
   Target: Grids by Obys Agency (https://grids.obys.agency/)
   ========================================================================== */

uniform float uTime;
uniform vec2 uResolution;
uniform vec2 uMouse;
uniform float uHover;
uniform sampler2D uTexture;

varying vec2 vUv;

void main() {
    vec2 uv = vUv;
    
    // Normalize aspect ratio
    vec2 st = gl_FragCoord.xy / uResolution.xy;
    
    // Calculate distance to mouse cursor
    float dist = distance(uv, uMouse);
    
    // Ripple effect formula
    float wave = sin(dist * 30.0 - uTime * 4.0) * 0.015 * uHover;
    vec2 distortedUv = uv + vec2(wave);
    
    // Grid Lines pattern synthesis
    vec2 gridPattern = abs(fract(distortedUv * 12.0 - 0.5) - 0.5) / fwidth(distortedUv * 12.0);
    float line = min(gridPattern.x, gridPattern.y);
    float colorLine = 1.0 - min(line, 1.0);
    
    // Color mixing (Deep Onyx #111113 -> Warm Gold #E6C86E)
    vec3 baseColor = vec3(0.066, 0.066, 0.074);
    vec3 lineColor = mix(vec3(1.0, 1.0, 1.0) * 0.15, vec3(0.90, 0.78, 0.43), colorLine * uHover);
    
    vec3 finalColor = mix(baseColor, lineColor, colorLine);
    
    gl_FragColor = vec4(finalColor, 1.0);
}
