import React from "react";

export const HeroPortfolio: React.FC = () => {
  return (
    <section className="min-h-screen relative flex flex-col justify-center px-8 md:px-16 pt-24 bg-gradient-to-br from-[#0D0D0E] via-[#161618] to-[#E0533C]/20 text-[#F5F3EF] overflow-hidden">
      <div className="max-w-5xl">
        <span className="text-xs font-semibold tracking-widest text-[#E0533C] uppercase mb-4 block">
          // CREATIVE CONSULTANCY & EXPERIENTIAL BRANDING
        </span>
        <h1 className="font-serif text-5xl md:text-8xl tracking-tight leading-none mb-8 uppercase">
          Grounded In Taking Action
        </h1>
        <p className="text-lg md:text-2xl text-[#8E8D95] font-sans max-w-2xl font-light leading-relaxed">
          Expert creative strategy, bespoke brand design, and experiential marketing services transforming ambitious visions into market presence.
        </p>
      </div>
    </section>
  );
};
