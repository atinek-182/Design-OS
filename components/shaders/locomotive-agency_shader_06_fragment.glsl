// GLSL FRAGMENT SHADER #6
// Target: https://locomotive.ca/en

#define SHADER_TYPE RawShaderMaterial
#define SHADER_NAME 

        precision highp float;
        varying vec2 vUv;

        uniform sampler2D uScene, uBlured, uNoise;
        uniform vec2 uResolution;
        uniform float uTime, uNoiseIntensity;

        #define PI 3.14159265

        float avg(vec3 c) { return (c.x + c.y + c.z) / 3.; }

        void main() {
          vec3 color = texture2D(uScene, vUv).rgb * 2.;
          vec4 glow = vec4(0.);

          vec3 noise = (texture2D(uNoise, vUv / 256. * uResolution + floor(uTime * 10000.) * .04).rgb - .5);
          // vec2 poisson = vec2(cos(noise.x), sin(noise.x)) / uResolution * 50.;

          glow += texture2D(uBlured, vUv);

          // color += glow.rgb * .3;
          color += vec3(glow.r * .4, glow.g * .25, glow.b * .1) * .5;
          // color = glow.rgb;
          color *= 1. + mix(vec3(avg(noise)), noise, .5) * uNoiseIntensity;

          gl_FragColor = vec4(color, 1.);
        }
      