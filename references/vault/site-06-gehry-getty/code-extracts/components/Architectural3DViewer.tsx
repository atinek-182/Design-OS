import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export interface HotspotPin {
  id: string;
  title: string;
  description: string;
  position: [number, number, number];
}

export interface Architectural3DViewerProps {
  modelUrl?: string;
  hotspots?: HotspotPin[];
  title?: string;
  subtitle?: string;
}

export const Architectural3DViewer: React.FC<Architectural3DViewerProps> = ({
  modelUrl = "/models/getty_formStudy_hotspot_desktop.glb",
  title = "FRANK GEHRY — FORM STUDY NO. 14",
  subtitle = "Interactive 3D Architectural Model & Audio Exploration",
  hotspots = [
    {
      id: "h1",
      title: "Crumpled Paper Geometry",
      description: "Frank Gehry's iconic tactile exploratory process using physical paper folds.",
      position: [0.8, 1.2, 0.5],
    },
    {
      id: "h2",
      title: "Acoustical Sail Roof",
      description: "Curved stainless steel acoustic shell reflecting orchestra sound waves.",
      position: [-1.2, 0.9, -0.4],
    },
  ],
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activeHotspot, setActiveHotspot] = useState<HotspotPin | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Three.js Scene Setup tailored for architectural models
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf2f0eb); // Warm archival paper background

    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.set(3, 2.5, 4);

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Studio Architectural Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xfff5ea, 2.0);
    keyLight.position.set(5, 8, 5);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xebf2ff, 0.8);
    fillLight.position.set(-5, 3, -5);
    scene.add(fillLight);

    // Fallback 3D Form Study Model Mesh (Gehry crumpled sculpture representation)
    const geometry = new THREE.IcosahedronGeometry(1.4, 2);
    const material = new THREE.MeshStandardMaterial({
      color: 0xe6dfd5,
      roughness: 0.45,
      metalness: 0.1,
      flatShading: true,
    });
    const modelMesh = new THREE.Mesh(geometry, material);
    scene.add(modelMesh);

    // Render loop with smooth orbital rotation
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      modelMesh.rotation.y += 0.003;
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
  }, [modelUrl]);

  return (
    <div ref={containerRef} className="relative w-full min-h-screen bg-[#f2f0eb] text-[#1c1b18] overflow-hidden font-sans">
      {/* WebGL 3D Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0 cursor-grab active:cursor-grabbing" />

      {/* Header Overlay */}
      <div className="relative z-10 p-8 flex justify-between items-start pointer-events-none">
        <div>
          <span className="text-xs font-mono tracking-widest text-[#1c1b18]/60 uppercase">
            GETTY RESEARCH INSTITUTE ARCHIVE
          </span>
          <h1 className="text-3xl md:text-5xl font-serif font-normal tracking-tight mt-1">
            {title}
          </h1>
          <p className="text-xs font-mono text-[#1c1b18]/70 mt-2">{subtitle}</p>
        </div>

        <div className="pointer-events-auto bg-[#1c1b18] text-[#f2f0eb] px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider">
          3D MODEL EXPLORER
        </div>
      </div>

      {/* Interactive Hotspot Overlay Pins */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 h-[60vh] flex items-center justify-center pointer-events-none">
        {hotspots.map((spot, idx) => (
          <button
            key={spot.id}
            onClick={() => setActiveHotspot(spot)}
            className="pointer-events-auto group relative p-3 bg-white/90 border border-[#1c1b18]/20 rounded-full shadow-lg hover:bg-[#1c1b18] hover:text-white transition-all transform hover:scale-110 m-4"
          >
            <span className="w-3 h-3 rounded-full bg-[#d94f30] block animate-ping absolute top-1 right-1" />
            <span className="w-3 h-3 rounded-full bg-[#d94f30] block" />
          </button>
        ))}
      </div>

      {/* Hotspot Drawer Modal */}
      {activeHotspot && (
        <div className="relative z-20 max-w-md mx-auto mb-8 p-6 bg-white/95 border border-[#1c1b18]/20 rounded-2xl shadow-2xl backdrop-blur-md">
          <div className="flex justify-between items-start mb-2">
            <h4 className="text-lg font-serif font-bold text-[#1c1b18]">{activeHotspot.title}</h4>
            <button
              onClick={() => setActiveHotspot(null)}
              className="text-xs font-mono text-gray-500 hover:text-black"
            >
              ✕ CLOSE
            </button>
          </div>
          <p className="text-xs font-sans text-gray-700 leading-relaxed">{activeHotspot.description}</p>
        </div>
      )}
    </div>
  );
};
