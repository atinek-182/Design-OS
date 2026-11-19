import { useState, useEffect, useCallback } from 'react';

/**
 * Obys 12-Column Architectural Coordinate Grid Hook
 * Reverse-engineered from AIM (aim.obys.agency) & Grids Obys
 *
 * Coordinates: <svg viewBox="0 0 1412 1007"> with 12 mathematical column paths:
 * x = [0, 119, 238, 357, 475, 594, 713, 832, 951, 1070, 1188, 1307]
 */
export function useObysGrid(defaultVisible: boolean = false) {
  const [isGridVisible, setIsGridVisible] = useState<boolean>(() => {
    try {
      const stored = localStorage.getItem('obys_grid_active');
      return stored !== null ? stored === 'true' : defaultVisible;
    } catch {
      return defaultVisible;
    }
  });

  const toggleGrid = useCallback(() => {
    setIsGridVisible((prev) => {
      const next = !prev;
      try {
        localStorage.setItem('obys_grid_active', String(next));
      } catch {}
      return next;
    });
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Toggle on 'G' key if not typing in an input/textarea
      const target = e.target as HTMLElement;
      if (target && ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName)) {
        return;
      }
      if (e.key === 'g' || e.key === 'G') {
        toggleGrid();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [toggleGrid]);

  return {
    isGridVisible,
    toggleGrid,
    setIsGridVisible,
  };
}
