import React from "react";

export const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen relative flex flex-col justify-center px-8 md:px-16 pt-24 bg-gradient-to-br from-black via-zinc-900 to-red-950/30">
      <div className="max-w-5xl">
        <span className="font-mono text-xs text-yellow-400 tracking-widest uppercase font-bold mb-4 block">
          // ENTERTAINMENT LOGISTICS SINCE 1992
        </span>
        <h1 className="font-display text-5xl md:text-8xl tracking-tight text-white uppercase leading-none mb-8">
          Moving the Gear Behind the Biggest Tours
        </h1>
        <p className="text-lg md:text-2xl text-zinc-400 font-sans max-w-2xl font-light leading-relaxed">
          Trusted for over three decades across North America to deliver stadium concerts, live events, and high-stakes theatrical productions on time, every time.
        </p>
      </div>
    </section>
  );
};
