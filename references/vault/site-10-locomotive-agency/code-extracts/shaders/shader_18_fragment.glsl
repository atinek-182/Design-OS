// GLSL FRAGMENT SHADER #18
// Target: https://locomotive.ca/en

#define SHADER_TYPE RawShaderMaterial
#define SHADER_NAME 

        precision highp float;
        varying vec2 vUv;
        varying vec2 vUv1;
        varying vec3 vNormal;
        varying vec3 vPosition;
        varying vec3 vViewPosition;

        uniform sampler2D uReflexion, uNoise;
        uniform float uOpacity, uLuminosity, uBackSide, uGlobalLuminosity;

        #define PI 3.14159265

        void main() {
          float frontSide = 1. - uBackSide;
          vec3 color = vec3(0.);
          vec2 dUv = abs(vUv - .5) * .1 + fract(atan(vPosition.x, vPosition.y) * .1) + vUv1 * frontSide + abs(vNormal.xy) * .01;
          float t = 0.;
          float r = .0005 + length(vNormal.xy) * .00001;
          color.r += texture2D(uReflexion, dUv + vec2(cos(t), sin(t)) * r).r;
          t += PI * 2. / 3.;
          color.g += texture2D(uReflexion, dUv + vec2(cos(t), sin(t)) * r).g;
          t += PI * 2. / 3.;
          color.b += texture2D(uReflexion, dUv + vec2(cos(t), sin(t)) * r).b;

          color += smoothstep(.0, 1., texture2D(uReflexion, reflect(normalize(vViewPosition), normalize(vNormal) * .2).rg).r) * .4;

          color *= 1. + (texture2D(uNoise, vPosition.xy * .3 + vUv1 * frontSide - abs(vNormal.xy) * .001).r - .5) * .3;
          color += smoothstep(.5, 1., color) * .2;
          // color = .15 + color * .3 * vec3(1.2, .9, .6);
          color = .05 + color * .3 * vec3(1.2, 1.1, 1.05);

          gl_FragColor = vec4(color * uLuminosity * uGlobalLuminosity, uOpacity);
        }
      