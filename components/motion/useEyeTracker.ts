import { useEffect, useRef, useState, useCallback } from 'react';

export interface EyeTrackerOptions {
  sensitivity?: number;
  maxRadiusRatio?: number; // Ratio of socket radius the pupil can travel (default: 0.45)
  lerpFactor?: number;     // Linear interpolation smoothing (default: 0.1)
  mood?: 'focused' | 'playful' | 'resting' | 'hyper-aware';
}

export interface EyeState {
  angleDeg: number;
  distancePx: number;
  pupilTranslateX: number;
  pupilTranslateY: number;
  irisScale: number;
}

/**
 * Headless Trigonometric Eye-Tracking Hook
 * Reverse-engineered from OCHI.design
 *
 * Implements exact Euclidean radial boundary clamping:
 * θ = atan2(mouseY - cy, mouseX - cx) * (180 / π)
 * r = min(distance * sensitivity, maxRadius)
 * translate = (r * cosθ, r * sinθ) with RAF lerp smoothing.
 */
export function useEyeTracker(options: EyeTrackerOptions = {}) {
  const {
    sensitivity = 0.12,
    maxRadiusRatio = 0.45,
    lerpFactor = 0.1,
    mood = 'focused',
  } = options;

  const socketRef = useRef<HTMLDivElement | null>(null);
  const targetPos = useRef({ x: 0, y: 0, angle: 0, dist: 0 });
  const currentPos = useRef({ x: 0, y: 0, angle: 0, dist: 0 });
  const rafId = useRef<number | null>(null);

  const [eyeState, setEyeState] = useState<EyeState>({
    angleDeg: 0,
    distancePx: 0,
    pupilTranslateX: 0,
    pupilTranslateY: 0,
    irisScale: 1.0,
  });

  const getMoodScale = useCallback(() => {
    switch (mood) {
      case 'hyper-aware':
        return 1.15;
      case 'playful':
        return 1.05;
      case 'resting':
        return 0.85;
      case 'focused':
      default:
        return 1.0;
    }
  }, [mood]);

  useEffect(() => {
    // Check for pointer capability to prevent battery drain on touch devices (Contrarian mitigation)
    const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

    const handlePointerMove = (e: PointerEvent | MouseEvent) => {
      if (!socketRef.current) return;

      const rect = socketRef.current.getBoundingClientRect();
      const eyeCenterX = rect.left + rect.width / 2;
      const eyeCenterY = rect.top + rect.height / 2;

      const deltaX = e.clientX - eyeCenterX;
      const deltaY = e.clientY - eyeCenterY;

      // Exact mathematical angle
      const radians = Math.atan2(deltaY, deltaX);
      const degrees = radians * (180 / Math.PI);

      // Euclidean radial distance
      const distance = Math.hypot(deltaX, deltaY);

      // Max allowable pupil translation within the socket
      const maxRadius = (rect.width / 2) * maxRadiusRatio;

      // Radial Euclidean clamping (Logician invariant)
      const clampedDist = Math.min(distance * sensitivity, maxRadius);

      const targetX = Math.cos(radians) * clampedDist;
      const targetY = Math.sin(radians) * clampedDist;

      targetPos.current = {
        x: targetX,
        y: targetY,
        angle: degrees,
        dist: clampedDist,
      };
    };

    // If on touch device, run gentle ambient breathing motion
    let ambientAngle = 0;
    const handleAmbientMotion = () => {
      if (!isFinePointer && socketRef.current) {
        const rect = socketRef.current.getBoundingClientRect();
        const maxRadius = (rect.width / 2) * 0.25;
        ambientAngle += 0.02;
        targetPos.current = {
          x: Math.cos(ambientAngle) * maxRadius,
          y: Math.sin(ambientAngle * 1.5) * (maxRadius * 0.6),
          angle: ambientAngle * (180 / Math.PI),
          dist: maxRadius,
        };
      }
    };

    if (isFinePointer) {
      window.addEventListener('pointermove', handlePointerMove, { passive: true });
    }

    // Single RAF Lerp Smoothing Loop
    const animate = () => {
      if (!isFinePointer) {
        handleAmbientMotion();
      }

      // Linear interpolation
      currentPos.current.x += (targetPos.current.x - currentPos.current.x) * lerpFactor;
      currentPos.current.y += (targetPos.current.y - currentPos.current.y) * lerpFactor;
      currentPos.current.angle += (targetPos.current.angle - currentPos.current.angle) * lerpFactor;
      currentPos.current.dist += (targetPos.current.dist - currentPos.current.dist) * lerpFactor;

      setEyeState({
        angleDeg: currentPos.current.angle,
        distancePx: currentPos.current.dist,
        pupilTranslateX: currentPos.current.x,
        pupilTranslateY: currentPos.current.y,
        irisScale: getMoodScale(),
      });

      rafId.current = requestAnimationFrame(animate);
    };

    rafId.current = requestAnimationFrame(animate);

    return () => {
      if (isFinePointer) {
        window.removeEventListener('pointermove', handlePointerMove);
      }
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [sensitivity, maxRadiusRatio, lerpFactor, mood, getMoodScale]);

  return {
    socketRef,
    eyeState,
  };
}
