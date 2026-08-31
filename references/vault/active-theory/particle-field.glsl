// Active Theory GLSL Particle Field & Raymarched Displacement Shaders
// Vault Reference ID: vault-01-active-theory

#ifdef VERTEX_SHADER
uniform float u_time;
uniform vec2 u_mouse;
uniform float u_repulsion_radius;
uniform float u_repulsion_strength;

attribute vec3 a_origin;
attribute float a_random_seed;

varying vec2 v_uv;
varying float v_glow;

void main() {
    v_uv = uv;
    vec3 pos = position;

    // Pointer repulsion displacement
    vec2 delta = pos.xy - u_mouse;
    float dist = length(delta);
    
    if (dist < u_repulsion_radius && dist > 0.0) {
        float factor = 1.0 - (dist / u_repulsion_radius);
        float force = factor * factor * u_repulsion_strength;
        vec2 dir = normalize(delta);
        pos.xy += dir * force;
        v_glow = factor;
    } else {
        v_glow = 0.0;
    }

    // Ambient floating harmonic drift
    pos.z += sin(u_time * 2.0 + a_random_seed * 6.28) * 0.05;

    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_PointSize = (4.0 + v_glow * 6.0) * (1.0 / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
}
#endif

#ifdef FRAGMENT_SHADER
uniform vec3 u_color_cyan;
uniform vec3 u_color_magenta;
uniform float u_opacity;

varying vec2 v_uv;
varying float v_glow;

void main() {
    // Point circular falloff
    vec2 coord = gl_PointCoord - vec2(0.5);
    float dist = length(coord);
    if (dist > 0.5) discard;

    float alpha = smoothstep(0.5, 0.1, dist) * u_opacity;
    vec3 color = mix(u_color_cyan, u_color_magenta, v_glow);

    gl_FragColor = vec4(color, alpha);
}
#endif
