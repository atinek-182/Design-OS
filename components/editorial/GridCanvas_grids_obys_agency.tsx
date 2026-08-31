import React, { useState, useEffect, useRef } from "react";

interface GridCanvasProps {
  columns?: number;
  showGuides?: boolean;
  activeCanon?: "columns" | "vandegraaf" | "modular" | "golden";
  onColumnChange?: (cols: number) => void;
}

export const GridCanvas: React.FC<GridCanvasProps> = ({
  columns = 12,
  showGuides = true,
  activeCanon = "columns",
  onColumnChange,
}) => {
  const [cols, setCols] = useState(columns);
  const [hoveredCol, setHoveredCol] = useState<number | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 800);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 500);

    const render = (time: number) => {
      ctx.clearRect(0, 0, width, height);

      // Draw Grid Anatomy according to activeCanon
      const margin = 40;
      const gutter = 20;
      const contentWidth = width - margin * 2;
      const colWidth = (contentWidth - (cols - 1) * gutter) / cols;

      for (let i = 0; i < cols; i++) {
        const x = margin + i * (colWidth + gutter);
        const isHovered = hoveredCol === i;

        // Draw Column Fill
        ctx.fillStyle = isHovered
          ? "rgba(230, 200, 110, 0.12)"
          : "rgba(255, 255, 255, 0.02)";
        ctx.fillRect(x, margin, colWidth, height - margin * 2);

        // Draw Column Guide Lines
        if (showGuides) {
          ctx.strokeStyle = isHovered
            ? "rgba(230, 200, 110, 0.6)"
            : "rgba(255, 255, 255, 0.1)";
          ctx.lineWidth = isHovered ? 2 : 1;
          ctx.strokeRect(x, margin, colWidth, height - margin * 2);
        }

        // Draw Van de Graaff canon diagonal lines if active
        if (activeCanon === "vandegraaf") {
          ctx.strokeStyle = "rgba(230, 57, 70, 0.25)";
          ctx.beginPath();
          ctx.moveTo(margin, margin);
          ctx.lineTo(width - margin, height - margin);
          ctx.moveTo(width - margin, margin);
          ctx.lineTo(margin, height - margin);
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render(0);

    const handleResize = () => {
      if (canvas && canvas.parentElement) {
        width = canvas.width = canvas.parentElement.clientWidth;
        height = canvas.height = canvas.parentElement.clientHeight;
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, [cols, hoveredCol, showGuides, activeCanon]);

  return (
    <div className="relative w-full h-[500px] bg-[#111113] border border-white/10 rounded-xl overflow-hidden p-6 text-white font-sans">
      {/* Controls Bar */}
      <div className="absolute top-4 left-6 right-6 flex items-center justify-between z-10 bg-[#191a1d]/80 backdrop-blur-md px-4 py-3 rounded-lg border border-white/10">
        <div className="flex items-center gap-4">
          <span className="text-xs uppercase tracking-widest text-white/50 font-mono">
            Grid Columns: {cols}
          </span>
          <input
            type="range"
            min="2"
            max="24"
            step="1"
            value={cols}
            onChange={(e) => {
              const val = Number(e.target.value);
              setCols(val);
              onColumnChange?.(val);
            }}
            className="accent-[#e6c86e] cursor-pointer"
          />
        </div>

        <div className="flex items-center gap-3 text-xs font-mono text-white/70">
          <span className="px-2 py-1 bg-white/5 rounded border border-white/10">
            Canon: <strong className="text-[#e6c86e] uppercase">{activeCanon}</strong>
          </span>
          <span className="px-2 py-1 bg-white/5 rounded border border-white/10">
            Gutter: 20px
          </span>
        </div>
      </div>

      {/* Interactive WebGL/2D Canvas */}
      <canvas
        ref={canvasRef}
        className="w-full h-full cursor-crosshair"
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const margin = 40;
          const gutter = 20;
          const contentWidth = rect.width - margin * 2;
          const colWidth = (contentWidth - (cols - 1) * gutter) / cols;
          const colIndex = Math.floor((x - margin) / (colWidth + gutter));

          if (colIndex >= 0 && colIndex < cols) {
            setHoveredCol(colIndex);
          } else {
            setHoveredCol(null);
          }
        }}
        onMouseLeave={() => setHoveredCol(null)}
      />

      {/* Footer Spec Overlay */}
      <div className="absolute bottom-4 left-6 right-6 flex justify-between text-[11px] font-mono text-white/40 border-t border-white/10 pt-2">
        <span>OBYS AGENCY · EDUCATIONAL GRID ENGINE</span>
        <span>VAN DE GRAAFF CANON & RECTANGULAR HARMONY</span>
      </div>
    </div>
  );
};
