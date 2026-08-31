import React, { useEffect, useRef } from "react";

interface ParticleCanvasProps {
  particleCount?: number;
  cyanColor?: string;
  magentaColor?: string;
  className?: string;
}

/**
 * Active Theory Particle Stage with Pointer Repulsion & Framerate-Normalized Damping
 */
export const ActiveTheoryParticleCanvas: React.FC<ParticleCanvasProps> = ({
  particleCount = 180,
  cyanColor = "#38bdf8",
  magentaColor = "#e056fd",
  className = "",
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      radius: 140,
    };

    // Initialize particles
    const particles = Array.from({ length: particleCount }, () => ({
      originX: Math.random() * width,
      originY: Math.random() * height,
      x: Math.random() * width,
      y: Math.random() * height,
      vx: 0,
      vy: 0,
      size: Math.random() * 2 + 1,
      color: Math.random() > 0.4 ? cyanColor : magentaColor,
      alpha: Math.random() * 0.7 + 0.3,
      driftSpeed: Math.random() * 0.02 + 0.005,
      driftAngle: Math.random() * Math.PI * 2,
    }));

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
      mouse.targetX = clientX;
      mouse.targetY = clientY;
    };

    const handlePointerLeave = () => {
      mouse.targetX = -1000;
      mouse.targetY = -1000;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handlePointerMove);
    window.addEventListener("touchmove", handlePointerMove);
    document.addEventListener("mouseleave", handlePointerLeave);

    let lastTime = performance.now();

    const render = (time: number) => {
      const delta = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      // Exponential framerate-normalized mouse smoothing
      const mouseLerp = 1 - Math.exp(-12 * delta);
      mouse.x += (mouse.targetX - mouse.x) * mouseLerp;
      mouse.y += (mouse.targetY - mouse.y) * mouseLerp;

      ctx.clearRect(0, 0, width, height);

      // Render dark trailing background
      ctx.fillStyle = "rgba(5, 6, 8, 0.25)";
      ctx.fillRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Ambient drift
        p.driftAngle += p.driftSpeed;
        const targetOriginX = p.originX + Math.cos(p.driftAngle) * 30;
        const targetOriginY = p.originY + Math.sin(p.driftAngle) * 30;

        // Pointer repulsion math
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius && dist > 0) {
          const force = (1 - dist / mouse.radius) * 80;
          const angle = Math.atan2(dy, dx);
          p.vx += Math.cos(angle) * force * delta * 60;
          p.vy += Math.sin(angle) * force * delta * 60;
        }

        // Return to origin spring physics
        p.vx += (targetOriginX - p.x) * 2.5 * delta;
        p.vy += (targetOriginY - p.y) * 2.5 * delta;

        // Damping
        p.vx *= Math.pow(0.88, delta * 60);
        p.vy *= Math.pow(0.88, delta * 60);

        p.x += p.vx * delta * 60;
        p.y += p.vy * delta * 60;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.shadowBlur = p.size * 4;
        ctx.shadowColor = p.color;
        ctx.fill();
      }

      ctx.globalAlpha = 1.0;
      ctx.shadowBlur = 0;
      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("touchmove", handlePointerMove);
      document.removeEventListener("mouseleave", handlePointerLeave);
    };
  }, [particleCount, cyanColor, magentaColor]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none z-0 ${className}`}
      style={{ background: "#050608" }}
    />
  );
};
