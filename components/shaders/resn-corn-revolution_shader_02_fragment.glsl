// GLSL FRAGMENT SHADER #2
// Target: https://cornrevolution.resn.global/#


    precision highp float;
    uniform float radius;
    uniform float time;
    uniform vec2 resolution;

    uniform sampler2D map;

    varying vec2 vUv;


    const int NUM_SAMPLES = 8;

    const float THRESHOLD = 0.0;
    const float MULT = 1.0;

    vec3 srgb2lin(vec3 c) { return c*c; }
    vec3 lin2srgb(vec3 c) { return sqrt(c); }

    //note: uniform pdf rand [0;1[
    float hash12n(vec2 p) {
        p  = fract(p * vec2(5.3987, 5.4421));
        p += dot(p.yx, p.xy + vec2(21.5351, 14.3137));
        return fract(p.x * p.y * 95.4307);
    }

    void main() {
        vec2 suv = vUv;
        vec2 uv = vUv;

        float blurdist = radius;

        float da = 6.283 / float(NUM_SAMPLES);
        float a = da * hash12n(uv+fract(time));

        vec3 sumcol = vec3(0.0);
        for (int i=0;i<NUM_SAMPLES;++i)
        {
            vec2 ofs = vec2( cos(a), sin(a) ) / resolution.x * blurdist ;
            vec2 p = uv + ofs;

            vec3 sampleTex = srgb2lin( texture2D( map, p, 0.0 ).rgb );
            vec3 smpl = (sampleTex - THRESHOLD) / (1.0-THRESHOLD);
            sumcol +=  smpl;

           a += da;
        }
        sumcol /= float(NUM_SAMPLES);
        sumcol = max( sumcol, 0.0 );

        gl_FragColor = vec4( lin2srgb( sumcol * MULT ), 1.0 );
    }
