import React, { useState } from 'react';

export interface ProjectShowcaseCardProps {
  id?: string;
  title: string;
  client?: string;
  category?: string;
  videoUrl?: string;
  posterUrl?: string;
  href?: string;
}

export const ProjectShowcaseCard: React.FC<ProjectShowcaseCardProps> = ({
  id = "01",
  title = "GORILLAZ — CRACKERS ISLAND",
  client = "PARLOPHONE",
  category = "MUSIC VIDEO / 2D ANIMATION",
  videoUrl,
  posterUrl,
  href = "#",
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={href}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative block w-full bg-[#f8f8f8] border-b border-[#0b0b0b]/15 overflow-hidden transition-all duration-500"
    >
      {/* Red Acetate Blend Backdrop Effect */}
      <div
        className={`absolute inset-0 bg-[#ff391e] mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none`}
      />

      <div className="relative z-20 p-6 md:p-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        {/* Project Meta Details */}
        <div className="flex items-baseline gap-6">
          <span className="text-xs font-mono font-bold text-[#ff391e] tracking-widest">
            [{id}]
          </span>
          <div>
            <h3 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight text-[#0b0b0b] group-hover:text-white transition-colors duration-300">
              {title}
            </h3>
            <p className="text-xs font-mono uppercase text-[#0b0b0b]/60 group-hover:text-white/80 mt-1">
              {client} • {category}
            </p>
          </div>
        </div>

        {/* Hover Arrow Indicator */}
        <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#0b0b0b] group-hover:text-white">
          <span>VIEW CASE STUDY</span>
          <span className="w-8 h-8 rounded-full border border-current flex items-center justify-center group-hover:translate-x-1 transition-transform">
            →
          </span>
        </div>
      </div>

      {/* Embedded Video Loop Preview */}
      {videoUrl && (
        <div className="relative w-full aspect-video overflow-hidden bg-black">
          <video
            src={videoUrl}
            poster={posterUrl}
            autoPlay
            muted
            loop
            playsInline
            className={`w-full h-full object-cover transition-transform duration-700 ${
              isHovered ? 'scale-105 filter brightness-110' : 'scale-100'
            }`}
          />
        </div>
      )}
    </a>
  );
};
