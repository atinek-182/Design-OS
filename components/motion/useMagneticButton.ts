import { useEffect, useRef, useState } from 'react';

export interface MagneticButtonOptions {
  triggerRadius?: number; // Distance in px from button center to engage magnetic pull (default: 80)
  magneticForce?: number; // Strength of pull 0.0 to 1.0 (default: 0.35)
  damping?: number;       // Damped recoil easing factor (default: 0.15)
  innerTargetSelector?: string; // Optional selector for inner text/icon to apply differential translation
}

export interface MagneticState {
  x: number;
  y: number;
  isHovered: boolean;
}

/**
 * Headless 2D Spring-Damped Magnetic Button Hook
 * Reverse-engineered from OCHI.design & Milk Network
 *
 * Pulls elements elastically toward cursor position with spring recoil on exit.
 */
export function useMagneticButton<T extends HTMLElement = HTMLElement>(
  options: MagneticButtonOptions = {}
) {
  const {
    triggerRadius = 80,
    magneticForce = 0.35,
    damping = 0.15,
  } = options;

  const elementRef = useRef<T | null>(null);
  const targetOffset = useRef({ x: 0, y: 0 });
  const currentOffset = useRef({ x: 0, y: 0 });
  const rafId = useRef<number | null>(null);
  const [state, setState] = useState<MagneticState>({ x: 0, y: 0, isHovered: false });

  useEffect(() => {
    const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!isFinePointer) return;

    const handlePointerMove = (e: PointerEvent | MouseEvent) => {
      if (!elementRef.current) return;

      const rect = elementRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;
      const distance = Math.hypot(deltaX, deltaY);

      // Check if cursor is within active magnetic trigger zone
      const effectiveRadius = Math.max(triggerRadius, rect.width / 2 + 30);

      if (distance < effectiveRadius) {
        // Apply spring pull
        targetOffset.current = {
          x: deltaX * magneticForce,
          y: deltaY * magneticForce,
        };
        setState((prev) => ({ ...prev, isHovered: true }));
      } else {
        // Reset to center
        targetOffset.current = { x: 0, y: 0 };
        setState((prev) => ({ ...prev, isHovered: false }));
      }
    };

    const handlePointerLeave = () => {
      targetOffset.current = { x: 0, y: 0 };
      setState((prev) => ({ ...prev, isHovered: false }));
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    elementRef.current?.addEventListener('pointerleave', handlePointerLeave);

    const animate = () => {
      // Damped spring interpolation
      currentOffset.current.x += (targetOffset.current.x - currentOffset.current.x) * damping;
      currentOffset.current.y += (targetOffset.current.y - currentOffset.current.y) * damping;

      setState((prev) => ({
        ...prev,
        x: currentOffset.current.x,
        y: currentOffset.current.y,
      }));

      if (elementRef.current) {
        elementRef.current.style.transform = `translate3d(${currentOffset.current.x}px, ${currentOffset.current.y}px, 0)`;
      }

      rafId.current = requestAnimationFrame(animate);
    };

    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      elementRef.current?.removeEventListener('pointerleave', handlePointerLeave);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [triggerRadius, magneticForce, damping]);

  return {
    elementRef,
    magneticState: state,
  };
}
