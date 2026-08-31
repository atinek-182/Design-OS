import React from "react";

export const HeroBanner: React.FC = () => {
  return (
    <section className="min-h-screen relative flex flex-col justify-center px-8 md:px-16 pt-24 bg-[#FAFAF8] text-[#0A0A0C] overflow-hidden">
      <div className="max-w-5xl">
        <span className="text-xs font-bold tracking-widest text-[#FF3366] uppercase mb-4 block">
          // ATHLETE & INVESTOR NETWORK FOR SOCIAL IMPACT
        </span>
        <h1 className="text-5xl md:text-8xl font-black tracking-tight leading-tight uppercase mb-8">
          Connecting Champions For Good
        </h1>
        <p className="text-lg md:text-2xl text-[#707075] max-w-2xl font-light leading-relaxed">
          Der Champions for Good Club verbindet Athlet:innen, Unternehmer:innen und Investor:innen in einem einzigartigen Netzwerk mit spannenden Events.
        </p>
      </div>
    </section>
  );
};
