/**
 * Active Theory Hydra Math & Kinetic Physics Extraction
 * Vault ID: vault-01-active-theory
 * 
 * Provides framerate-independent exponential damping, range mapping,
 * particle repulsion calculations, and seeded deterministic RNG.
 */

export class HydraMath {
  /**
   * Normalizes lerp alpha across varying display refresh rates (60Hz, 120Hz, 144Hz, 240Hz).
   * Prevents physics running twice as fast on Apple ProMotion or high-Hz monitors.
   */
  static framerateNormalizeLerpAlpha(alpha: number, frameHzMultiplier = 1.0): number {
    const clamped = Math.min(Math.max(alpha, 0), 0.9999);
    return 1 - Math.exp(Math.log(1 - clamped) * frameHzMultiplier);
  }

  /**
   * Exponential damp lerp
   */
  static dampLerp(current: number, target: number, alpha: number, frameMultiplier = 1.0): number {
    const normAlpha = this.framerateNormalizeLerpAlpha(alpha, frameMultiplier);
    return current + (target - current) * normAlpha;
  }

  /**
   * Maps a value from one range to another with optional clamping
   */
  static mapRange(
    value: number,
    inMin: number,
    inMax: number,
    outMin: number,
    outMax: number,
    clamp = true
  ): number {
    if (inMin === inMax) return outMin;
    const normalized = (value - inMin) / (inMax - inMin);
    const mapped = outMin + normalized * (outMax - outMin);
    if (!clamp) return mapped;
    return Math.min(Math.max(mapped, Math.min(outMin, outMax)), Math.max(outMin, outMax));
  }

  /**
   * Hermite smoothstep interpolation
   */
  static smoothStep(min: number, max: number, value: number): number {
    const x = Math.min(Math.max((value - min) / (max - min), 0), 1);
    return x * x * (3 - 2 * x);
  }

  /**
   * Computes vector distance and 2D repulsion vector for particles
   */
  static computeRepulsion(
    px: number,
    py: number,
    mx: number,
    my: number,
    radius = 0.25,
    force = 0.05
  ): { vx: number; vy: number; distance: number; intensity: number } {
    const dx = px - mx;
    const dy = py - my;
    const dist = Math.sqrt(dx * dx + dy * dy);
    
    if (dist > radius || dist === 0) {
      return { vx: 0, vy: 0, distance: dist, intensity: 0 };
    }

    const norm = 1 - dist / radius;
    const intensity = this.smoothStep(0, 1, norm);
    const angle = Math.atan2(dy, dx);
    const vx = Math.cos(angle) * intensity * force;
    const vy = Math.sin(angle) * intensity * force;

    return { vx, vy, distance: dist, intensity };
  }
}
