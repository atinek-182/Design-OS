import React from "react";

export const HeroBanner: React.FC = () => {
  return (
    <section className="min-h-screen relative flex flex-col justify-center px-8 md:px-16 pt-24 bg-gradient-to-br from-[#050505] via-[#0E0E10] to-white/10 text-white overflow-hidden">
      <div className="max-w-5xl">
        <span className="text-xs font-semibold tracking-widest text-[#888888] uppercase mb-4 block">
          // AI PRODUCTION HOUSE // PARIS
        </span>
        <h1 className="text-5xl md:text-8xl font-bold tracking-tight uppercase leading-none mb-8">
          Crafting Visual Culture For Luxury Brands
        </h1>
        <p className="text-lg md:text-2xl text-[#888888] max-w-2xl font-light leading-relaxed">
          Integrating generative AI, 3D, CGI, and haute couture art direction to produce images, films, and international campaigns.
        </p>
      </div>
    </section>
  );
};
