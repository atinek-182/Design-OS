import React from "react";

export const StudioManifestoCard: React.FC = () => {
  return (
    <section className="py-16 px-8 max-w-4xl mx-auto text-white font-mono">
      <div className="p-10 border border-[#262626] rounded-xl bg-[#141414] text-center shadow-lg">
        <h3 className="text-3xl md:text-5xl font-extrabold uppercase mb-4">Singular Brand Expression</h3>
        <p className="text-base text-[#888888] max-w-lg mx-auto leading-relaxed">
          Crafting bespoke frontend architectures that convert complex brand narratives into digital landmarks.
        </p>
      </div>
    </section>
  );
};
