import React from "react";

export const HeroBanner: React.FC = () => {
  return (
    <section className="min-h-screen relative flex flex-col justify-center px-8 md:px-16 pt-24 bg-gradient-to-br from-[#0000FF] to-black text-white overflow-hidden">
      <div className="max-w-5xl">
        <span className="text-xs font-bold tracking-widest text-[#A3A3FF] uppercase mb-4 block">
          // DIGITAL INFRASTRUCTURE FOR CURATORS & ARTISTS
        </span>
        <h1 className="text-5xl md:text-8xl font-black tracking-tight leading-tight uppercase mb-8">
          Intentional Discovery For Contemporary Art
        </h1>
        <p className="text-lg md:text-2xl text-[#A3A3FF] max-w-2xl font-light leading-relaxed">
          Operating outside traditional institutions and social media algorithms to connect artists across 100+ countries.
        </p>
      </div>
    </section>
  );
};
