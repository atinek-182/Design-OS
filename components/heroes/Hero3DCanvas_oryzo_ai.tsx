import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export interface OryzoHeroProps {
  title?: string;
  tagline?: string;
  subtitle?: string;
  onVideoClick?: () => void;
}

export const Hero3DCanvas: React.FC<OryzoHeroProps> = ({
  title = "ORYZO AI",
  tagline = "Made for mugs. Built for tables.",
  subtitle = "Designed to lift, insulate, and grip in all the right ways. Oryzo makes the simplest moment feel considered.",
  onVideoClick,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Three.js 3D Cork Coaster Scene Scaffold (Lusion-style WebGL setup)
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 5);

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Ambient & Directional Lighting tailored for cork texture depth
    const ambientLight = new THREE.AmbientLight(0xffedd6, 1.2);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 2.5);
    dirLight.position.set(5, 10, 7);
    scene.add(dirLight);

    // Placeholder Coaster Geometry (Cylinder with chamfer bevel feel)
    const geometry = new THREE.CylinderGeometry(1.6, 1.6, 0.2, 64);
    const material = new THREE.MeshStandardMaterial({
      color: 0xd4a373,
      roughness: 0.85,
      metalness: 0.1,
    });
    const coasterMesh = new THREE.Mesh(geometry, material);
    coasterMesh.rotation.x = Math.PI / 4;
    scene.add(coasterMesh);

    // Scroll-triggered 3D Rotation Timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1.5,
      },
    });

    tl.to(coasterMesh.rotation, {
      x: Math.PI * 2,
      y: Math.PI,
      ease: 'none',
    }).to(
      coasterMesh.position,
      {
        y: -1.2,
        z: 1,
        ease: 'power2.inOut',
      },
      0
    );

    // Render loop
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      coasterMesh.rotation.z += 0.005;
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full min-h-screen bg-black text-[#ffedd6] overflow-hidden">
      {/* 3D WebGL Canvas Layer */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
      />

      {/* Hero UI Overlay Layer */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 flex flex-col justify-between min-h-screen">
        {/* Top Tagline */}
        <div className="flex justify-between items-start border-b border-[#ffedd6]/20 pb-4">
          <p className="text-sm font-mono tracking-widest uppercase text-[#ffedd6]/70">
            {tagline}
          </p>
          <div className="text-xs font-mono px-3 py-1 border border-[#ffedd6]/30 rounded-full">
            LUSION ARCHITECTURE
          </div>
        </div>

        {/* Hero Central Narrative */}
        <div className="my-auto max-w-2xl">
          <h1 className="text-6xl md:text-8xl font-serif tracking-tight leading-none mb-6">
            {title}
          </h1>
          <p className="text-lg md:text-xl font-light text-[#ffedd6]/90 leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Bottom Interactive Thumbnail Bar */}
        <div className="flex justify-between items-end pt-8">
          <div className="max-w-xs">
            <h4 className="text-sm font-semibold mb-1">Designed by Lusion</h4>
            <p className="text-xs text-[#ffedd6]/60">
              The world's most unnecessarily sophisticated cork coaster.
            </p>
          </div>

          <button
            onClick={onVideoClick}
            className="group relative px-6 py-3 border border-[#ffedd6]/40 rounded-full text-xs font-mono uppercase tracking-wider hover:bg-[#ffedd6] hover:text-black transition-all duration-300 flex items-center gap-2"
          >
            <span>Play Reveal Film</span>
            <span className="w-2 h-2 rounded-full bg-orange-500 group-hover:scale-125 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};
