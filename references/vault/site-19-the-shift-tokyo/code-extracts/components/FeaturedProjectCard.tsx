import React from "react";

interface FeaturedProjectCardProps {
  index: string;
  title: string;
  category: string;
  imageSrc: string;
  videoSrc?: string;
}

export const FeaturedProjectCard: React.FC<FeaturedProjectCardProps> = ({
  index,
  title,
  category,
  imageSrc,
  videoSrc,
}) => {
  return (
    <div className="group relative w-full border-b border-white/10 py-10 flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer hover:border-[#FE4249] transition-colors duration-300">
      {/* Index & Title */}
      <div className="flex items-baseline gap-6 z-10">
        <span className="text-xs font-mono text-white/40 group-hover:text-[#FE4249] transition-colors">
          ({index})
        </span>
        <div>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-white group-hover:text-[#FE4249] transition-colors duration-300">
            {title}
          </h3>
          <span className="text-xs font-mono text-white/50 uppercase tracking-widest mt-1 block">
            {category}
          </span>
        </div>
      </div>

      {/* Hover Image Preview Stage */}
      <div className="relative w-full md:w-80 h-48 md:h-52 bg-[#141414] rounded-lg overflow-hidden border border-white/10 group-hover:scale-105 transition-transform duration-500">
        {videoSrc ? (
          <video
            src={videoSrc}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
          />
        ) : (
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
      </div>
    </div>
  );
};
