// GLSL FRAGMENT SHADER #4
// Target: https://cornrevolution.resn.global/#


    precision highp float;
    uniform float radius;
    uniform float time;
    uniform vec2 resolution;

    uniform sampler2D map;

    varying vec2 vUv;

    const vec2 blurdir = vec2( 1.0, 0.0 );

    const float blurdist_px = 8.0;
    const int NUM_SAMPLES = 8;

    vec3 srgb2lin(vec3 c) { return c*c; }
    vec3 lin2srgb(vec3 c) { return sqrt(c); }

    //note: uniform pdf rand [0;1[
    float hash12n(vec2 p) {
        p  = fract(p * vec2(5.3987, 5.4421));
        p += dot(p.yx, p.xy + vec2(21.5351, 14.3137));
        return fract(p.x * p.y * 95.4307);
    }


    void main( ) {
        vec2 uv = vUv;

        float blur_r = radius;
        blur_r *= sqrt(2.0); //empiric constant...

        float da = 6.283 / float(NUM_SAMPLES);
        float a = da * hash12n(uv+fract(time)+1.337);

        vec3 sumcol = vec3(0.0);
        for (int i=0;i<NUM_SAMPLES;++i) {
            vec2 ofs = vec2( cos(a), sin(a) ) / resolution.xy * blur_r ;
            vec2 p = uv + ofs;
            sumcol += srgb2lin(texture2D(map, p, 0.0).rgb);
            a += da;
        }
        sumcol /= float(NUM_SAMPLES);
        sumcol = max( sumcol, 0.0 );

        gl_FragColor = vec4( lin2srgb( sumcol ), 1.0 );
    }
