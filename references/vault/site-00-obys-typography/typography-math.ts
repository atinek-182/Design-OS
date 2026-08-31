/**
 * references/vault/site-00-obys-typography/typography-math.ts
 * Deterministic mathematical calculation utilities for Obys typography scales,
 * fluid clamps, baseline grids, and line measure constraints.
 */

export interface FluidClampConfig {
  minSizeRem: number;
  maxSizeRem: number;
  minViewportPx?: number;
  maxViewportPx?: number;
}

/**
 * Calculates exact CSS clamp formula for zero-breakpoint fluid typography.
 * y = mx + b slope-intercept equation.
 */
export function calculateFluidClamp({
  minSizeRem,
  maxSizeRem,
  minViewportPx = 375,
  maxViewportPx = 1920,
}: FluidClampConfig): string {
  const minViewportRem = minViewportPx / 16;
  const maxViewportRem = maxViewportPx / 16;

  const slope = (maxSizeRem - minSizeRem) / (maxViewportRem - minViewportRem);
  const yInterceptRem = minSizeRem - slope * minViewportRem;

  const slopeVw = (slope * 100).toFixed(2);
  const interceptStr = `${yInterceptRem.toFixed(2)}rem`;

  return `clamp(${minSizeRem}rem, ${slopeVw}vw + ${interceptStr}, ${maxSizeRem}rem)`;
}

/**
 * Generates an 8-step Golden Ratio (1.618) typography scale starting from baseRem.
 */
export function generateGoldenRatioScale(baseRem = 1.0): Record<string, string> {
  const phi = 1.61803398875;
  return {
    meta_mono: `${(baseRem / (phi * phi)).toFixed(3)}rem`,
    caption: `${(baseRem / phi).toFixed(3)}rem`,
    body: `${baseRem.toFixed(3)}rem`,
    subhead: `${(baseRem * phi).toFixed(3)}rem`,
    h3_title: `${(baseRem * phi * phi).toFixed(3)}rem`,
    h2_headline: `${(baseRem * Math.pow(phi, 3)).toFixed(3)}rem`,
    h1_poster: `${(baseRem * Math.pow(phi, 4)).toFixed(3)}rem`,
  };
}

/**
 * Validates whether text measure falls within optimal readability bounds (45ch - 75ch).
 */
export function validateLineMeasure(charCount: number): { valid: boolean; recommendation: string } {
  if (charCount < 45) {
    return { valid: false, recommendation: 'Line measure is too narrow (<45ch). Increase container width.' };
  }
  if (charCount > 75) {
    return { valid: false, recommendation: 'Line measure is too wide (>75ch). Constrain max-width to 65ch.' };
  }
  return { valid: true, recommendation: 'Line measure is in optimal readability range (45ch-75ch).' };
}
