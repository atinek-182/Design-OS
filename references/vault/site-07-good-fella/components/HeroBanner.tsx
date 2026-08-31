import React from "react";

export const HeroBanner: React.FC = () => {
  return (
    <section className="min-h-screen relative flex flex-col justify-center px-8 md:px-16 pt-24 bg-[#0A0A0A] text-white font-mono overflow-hidden">
      <div className="max-w-5xl">
        <span className="text-xs font-bold tracking-widest text-[#FF0000] uppercase mb-4 block">
          // THE DIGITAL LANDMARK STUDIO // MUNICH
        </span>
        <h1 className="text-5xl md:text-8xl font-extrabold tracking-tighter leading-none uppercase mb-8">
          The Digital Landmark Studio
        </h1>
        <p className="text-lg md:text-2xl text-[#888888] max-w-2xl font-light leading-relaxed">
          We build the singular online expression of consumer, sports, and entertainment brands. Founded by Julian & Adrian Fella.
        </p>
      </div>
    </section>
  );
};
