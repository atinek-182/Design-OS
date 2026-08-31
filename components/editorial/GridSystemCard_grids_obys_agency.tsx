import React from "react";

interface GridSystemCardProps {
  title: string;
  subtitle: string;
  description: string;
  canonType: "Van de Graaff" | "12-Column Modular" | "Golden Ratio" | "Baseline Grid";
  ratio: string;
  imageSrc?: string;
}

export const GridSystemCard: React.FC<GridSystemCardProps> = ({
  title,
  subtitle,
  description,
  canonType,
  ratio,
  imageSrc,
}) => {
  return (
    <div className="group relative bg-[#191a1d] border border-white/10 rounded-2xl p-8 hover:border-[#e6c86e]/40 transition-all duration-500 overflow-hidden flex flex-col justify-between">
      {/* Background Accent Blur */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#e6c86e]/5 rounded-full blur-3xl group-hover:bg-[#e6c86e]/15 transition-all duration-500" />

      <div>
        {/* Header Metadata */}
        <div className="flex items-center justify-between text-xs font-mono text-white/50 mb-6">
          <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10 text-[#e6c86e]">
            {canonType}
          </span>
          <span>RATIO {ratio}</span>
        </div>

        {/* Title Block */}
        <h3 className="text-3xl font-bold tracking-tight text-white mb-2 group-hover:text-[#e6c86e] transition-colors">
          {title}
        </h3>
        <p className="text-sm font-serif italic text-white/60 mb-6">
          {subtitle}
        </p>

        {/* Description Body */}
        <p className="text-sm text-white/70 leading-relaxed mb-8">
          {description}
        </p>
      </div>

      {/* Visual Canvas Diagram Placeholder */}
      <div className="relative h-44 bg-[#111113] border border-white/5 rounded-xl flex items-center justify-center overflow-hidden">
        {imageSrc ? (
          <img src={imageSrc} alt={title} className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" />
        ) : (
          <div className="w-full h-full p-4 grid grid-cols-6 gap-2 opacity-30 group-hover:opacity-60 transition-opacity">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-full border-x border-dashed border-[#e6c86e] bg-white/5" />
            ))}
          </div>
        )}
        <span className="absolute bottom-3 right-3 text-[10px] font-mono text-white/40">
          FIG. {canonType.toUpperCase()}
        </span>
      </div>
    </div>
  );
};
