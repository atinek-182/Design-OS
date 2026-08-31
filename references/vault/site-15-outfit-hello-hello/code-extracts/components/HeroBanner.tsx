import React from "react";

export const HeroBanner: React.FC = () => {
  return (
    <section className="min-h-screen relative flex flex-col justify-center px-8 md:px-16 pt-24 bg-[#FF0001] text-[#EDE4DD] overflow-hidden">
      <span className="text-xs uppercase tracking-widest font-extrabold mb-4 opacity-80">
        SIGNATURE APPAREL COLLECTION BY ++HELLOHELLO
      </span>
      <h1 className="text-6xl md:text-9xl font-extrabold uppercase tracking-tighter leading-none mb-8">
        Creativity In Motion
      </h1>
      <p className="text-xl md:text-3xl max-w-3xl font-medium opacity-90 leading-tight">
        A passion project showcase fusing high-fashion apparel aesthetics, oversized typography, and interactive web transforms.
      </p>
    </section>
  );
};
