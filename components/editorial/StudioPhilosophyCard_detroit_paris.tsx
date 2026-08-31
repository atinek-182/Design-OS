import React from "react";

export const StudioPhilosophyCard: React.FC = () => {
  return (
    <section className="py-16 px-8 max-w-4xl mx-auto text-white">
      <h2 className="text-xs uppercase tracking-widest text-[#888888] font-bold mb-8">// STUDIO COLLECTIVE</h2>
      <div className="p-10 border border-[#1E1E22] rounded-xl bg-[#0E0E10] text-center">
        <h3 className="text-3xl md:text-5xl uppercase font-bold mb-4">Luxury AI Production</h3>
        <p className="text-sm text-[#888888] max-w-lg mx-auto leading-relaxed">
          Representing leading AI artists, 3D directors, and visual creators to deliver bespoke digital art direction for world-renowned fashion houses.
        </p>
      </div>
    </section>
  );
};
