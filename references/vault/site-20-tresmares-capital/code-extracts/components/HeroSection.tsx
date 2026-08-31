import React from "react";

export const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen relative flex flex-col justify-center px-8 md:px-16 pt-24 bg-gradient-to-br from-[#0B0E14] via-[#131822] to-[#D94A38]/20 text-white overflow-hidden">
      <div className="max-w-5xl">
        <span className="text-xs font-semibold tracking-widest text-[#D4AF37] uppercase mb-4 block">
          // ALTERNATIVE INVESTMENT & PRIVATE EQUITY
        </span>
        <h1 className="font-serif text-5xl md:text-8xl tracking-tight leading-none mb-8">
          Empowering High-Growth SME Companies
        </h1>
        <p className="text-lg md:text-2xl text-[#8491A5] font-sans max-w-2xl font-light leading-relaxed">
          Tailored capital solutions and long-term partnership backing resilient medium-sized enterprises across Europe and the Americas. Inspired by the strength of Pico Tres.
        </p>
      </div>
    </section>
  );
};
