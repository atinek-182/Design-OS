import React from "react";

export const HeroPortfolio: React.FC = () => {
  return (
    <section className="min-h-screen relative flex flex-col justify-center px-8 md:px-16 pt-24 bg-gradient-to-br from-[#090909] via-[#141414] to-[#EBEAE4]/10 text-[#EBEAE4] overflow-hidden">
      <div className="max-w-5xl">
        <span className="text-xs font-semibold tracking-widest text-[#888888] uppercase mb-4 block font-mono">
          // 2D ANIMATION & MOTION DESIGN SHOWCASE
        </span>
        <h1 className="font-serif text-6xl md:text-9xl tracking-tight leading-none mb-8 uppercase">
          JASMINE GUNARTO
        </h1>
        <p className="text-lg md:text-2xl text-[#888888] font-sans max-w-2xl font-light leading-relaxed">
          Crafting precise motion graphics, visual narratives, and editorial design for global brands and creative campaigns.
        </p>
      </div>
    </section>
  );
};
