import React from "react";

export const HeroBanner: React.FC = () => {
  return (
    <section className="min-h-screen relative flex flex-col justify-center items-center text-center px-6 pt-24 bg-black text-white overflow-hidden">
      <span className="text-xs font-semibold tracking-widest text-[#3B82F6] uppercase mb-4 block">
        // AGENTIC INTERFACE PRODUCT STUDIO
      </span>
      <h1 className="text-4xl md:text-7xl font-bold tracking-tight max-w-4xl leading-tight mb-6">
        AI-native studio building brands and web experiences for high-growth startups
      </h1>
      <p className="text-base md:text-xl text-[#71717A] max-w-xl font-light leading-relaxed">
        AI-accelerated exploration meets expert judgment to ship faster.
      </p>
    </section>
  );
};
