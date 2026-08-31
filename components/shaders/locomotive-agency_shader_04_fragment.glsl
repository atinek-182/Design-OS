// GLSL FRAGMENT SHADER #4
// Target: https://locomotive.ca/en

#define SHADER_TYPE RawShaderMaterial
#define SHADER_NAME 
#define HORIZONTAL 1

        precision highp float;
        varying vec2 vUv;

        uniform sampler2D uDiffuse, uLast, uNoise;
        uniform vec2 uResolution;

        #define WEIGHT_1 0.1945946
        #define WEIGHT_2 0.1216216
        #define WEIGHT_3 0.054054
        #define WEIGHT_4 0.016216

        #define PI 3.14159265

        void main() {
          vec2 offset = 5. / uResolution;

          vec3 color = vec3(0.);
          #ifdef HORIZONTAL
            color += texture2D(uDiffuse, vUv + vec2(offset.x * 1., 0.)).rgb * WEIGHT_1;
            color += texture2D(uDiffuse, vUv - vec2(offset.x * 1., 0.)).rgb * WEIGHT_1;

            color += texture2D(uDiffuse, vUv + vec2(offset.x * 2., 0.)).rgb * WEIGHT_2;
            color += texture2D(uDiffuse, vUv - vec2(offset.x * 2., 0.)).rgb * WEIGHT_2;

            color += texture2D(uDiffuse, vUv + vec2(offset.x * 3., 0.)).rgb * WEIGHT_3;
            color += texture2D(uDiffuse, vUv - vec2(offset.x * 3., 0.)).rgb * WEIGHT_3;

            color += texture2D(uDiffuse, vUv + vec2(offset.x * 4., 0.)).rgb * WEIGHT_4;
            color += texture2D(uDiffuse, vUv - vec2(offset.x * 4., 0.)).rgb * WEIGHT_4;
          #else
            color += texture2D(uDiffuse, vUv + vec2(0., offset.y * 1.)).rgb * WEIGHT_1;
            color += texture2D(uDiffuse, vUv - vec2(0., offset.y * 1.)).rgb * WEIGHT_1;

            color += texture2D(uDiffuse, vUv + vec2(0., offset.y * 2.)).rgb * WEIGHT_2;
            color += texture2D(uDiffuse, vUv - vec2(0., offset.y * 2.)).rgb * WEIGHT_2;

            color += texture2D(uDiffuse, vUv + vec2(0., offset.y * 3.)).rgb * WEIGHT_3;
            color += texture2D(uDiffuse, vUv - vec2(0., offset.y * 3.)).rgb * WEIGHT_3;

            color += texture2D(uDiffuse, vUv + vec2(0., offset.y * 4.)).rgb * WEIGHT_4;
            color += texture2D(uDiffuse, vUv - vec2(0., offset.y * 4.)).rgb * WEIGHT_4;

            color = mix(color, texture2D(uLast, vUv).rgb, .3);
          #endif
          gl_FragColor = vec4(smoothstep(.0, .3, length(color)) * color * 2., 1.);
          // gl_FragColor = texture2D(uDiffuse, vUv);
        }
      