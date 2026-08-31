/* ==========================================================================
   WebGL Image Hover Liquid Distortion Fragment Shader
   Target: The Shift Tokyo (https://theshift.tokyo/en/)
   ========================================================================== */

uniform float uTime;
uniform vec2 uResolution;
uniform vec2 uMouse;
uniform float uProgress;
uniform sampler2D uTexture;

varying vec2 vUv;

void main() {
    vec2 uv = vUv;
    
    // Distort UV coordinates based on mouse movement & sine wave
    float distortion = sin(uv.y * 10.0 + uTime * 2.0) * 0.02 * uProgress;
    vec2 distortedUv = vec2(uv.x + distortion, uv.y);
    
    // Sample texture with distorted coordinates
    vec4 color = texture2D(uTexture, distortedUv);
    
    // Electric Coral accent glow on hover border
    float border = smoothstep(0.0, 0.02, uv.x) * smoothstep(1.0, 0.98, uv.x) *
                   smoothstep(0.0, 0.02, uv.y) * smoothstep(1.0, 0.98, uv.y);
                   
    vec3 coralGlow = vec3(0.99, 0.26, 0.28);
    vec3 finalColor = mix(coralGlow, color.rgb, border);
    
    gl_FragColor = vec4(finalColor, color.a);
}
