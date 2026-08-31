// GLSL VERTEX SHADER #3
// Target: https://locomotive.ca/en

#define SHADER_TYPE RawShaderMaterial
#define SHADER_NAME 
#define HORIZONTAL 1

        precision highp float;

        attribute vec3 position;
        attribute vec2 uv;

        varying vec2 vUv;

        uniform float uBackSide;

        void main() {
          vUv = uv;
          gl_Position = vec4(position, 1.);
        }
      