import React from "react";

export const HeroBanner: React.FC = () => {
  return (
    <section className="min-h-screen relative flex flex-col justify-center px-8 md:px-16 pt-24 bg-[#F4F4F0] text-[#0D0D0E] overflow-hidden">
      <div className="max-w-5xl">
        <span className="text-xs font-semibold tracking-widest text-[#666660] uppercase mb-4 block">
          // ECOMMERCE INNOVATION AGENCY // MODENA
        </span>
        <h1 className="text-5xl md:text-8xl font-bold tracking-tight leading-tight mb-8">
          Direction, Tech, Marketing for Visionary Brands
        </h1>
        <p className="text-lg md:text-2xl text-[#666660] max-w-2xl font-light leading-relaxed">
          Siamo nati developer. Il design ce lo siamo costruiti addosso. La tensione tra queste due anime è il nostro metodo.
        </p>
      </div>
    </section>
  );
};
