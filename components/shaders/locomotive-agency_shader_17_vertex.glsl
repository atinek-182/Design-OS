// GLSL VERTEX SHADER #17
// Target: https://locomotive.ca/en

#define SHADER_TYPE RawShaderMaterial
#define SHADER_NAME 

        precision highp float;
        uniform mat4 projectionMatrix;
        uniform mat4 modelViewMatrix;
        uniform mat4 normalMatrix;

        attribute vec3 position;
        attribute vec3 normal;
        attribute vec2 uv;
        attribute vec2 uv1;

        varying vec2 vUv;
        varying vec2 vUv1;
        varying vec3 vNormal;
        varying vec3 vPosition;
        varying vec3 vViewPosition;

        uniform float uBackSide;

        void main() {
          vUv = uv;
          vUv1 = uv1;
          vPosition = position;
          vNormal = vec3(normalMatrix * vec4(normal, 1.));
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.);
          mvPosition.xyz *= 1. + mvPosition.xyz * .001 * uBackSide;
          vViewPosition = mvPosition.xyz;
          gl_Position = projectionMatrix * mvPosition;
        }
      