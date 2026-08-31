/**
 * Gaussian Splats & 3D Physics Setup - Scrollytelling Architecture (Oryzo AI / Lusion Engine)
 * Intercepted & extracted from Oryzo AI JS Bundle (Three.js r178 + SplatsWorker)
 */

import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export class Oryzo3DEngine {
  constructor(canvasSelector) {
    this.canvas = document.querySelector(canvasSelector);
    if (!this.canvas) return;

    this.initThree();
    this.initSplatWorker();
    this.initScrollDrivenPhysics();
    this.bindEvents();
  }

  initThree() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
    this.camera.position.set(0, 0, 6);

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  }

  initSplatWorker() {
    // Web Worker initialization for decoding 3D Gaussian Splat PLY/KSPLAT binary assets
    console.log('[Oryzo3D] Initializing Gaussian Splat Worker for Cork Coaster 3D mesh...');
    // Real implementation loads `SplatsWorker-DSMxtdkh.js`
  }

  initScrollDrivenPhysics() {
    // Oryzo AI uses a massive 60,582px scroll canvas height to drive micro-step 3D rotations
    this.scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.8,
        onUpdate: (self) => {
          this.onScrollProgress(self.progress);
        },
      },
    });

    // 1. Hero -> AI Section: Coaster flips horizontally and scales down
    this.scrollTimeline
      .to(this.camera.position, { z: 4.5, duration: 1 })
      .to('#hero-top-tagline', { opacity: 0, y: -50, duration: 0.5 }, 0);

    // 2. AI Section -> Wearable Section: 3D Coaster attaches to wrist/pocket mockups
    this.scrollTimeline
      .to('#ai-title', { scale: 0.8, filter: 'blur(10px)', opacity: 0 }, 1)
      .to('#wearable-gallery-move-container', { xPercent: -80, duration: 2 }, 1.5);
  }

  onScrollProgress(progress) {
    // Dynamic camera jitter & subtle physics tilt based on scroll velocity
    const velocity = ScrollTrigger.getVelocity();
    const tilt = Math.min(Math.max(velocity / 1000, -0.3), 0.3);

    if (this.scene) {
      this.scene.rotation.z = tilt * 0.1;
    }
  }

  bindEvents() {
    window.addEventListener('resize', () => {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    });
  }
}
