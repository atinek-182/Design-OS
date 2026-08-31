import React from "react";

export const CreativeDirectionCard: React.FC = () => {
  return (
    <section className="py-16 px-8 max-w-4xl mx-auto text-[#EBEAE4]">
      <h2 className="text-xs uppercase tracking-widest text-[#888888] font-mono mb-8">// EDITORIAL VISION</h2>
      <div className="p-10 border border-[#222222] rounded-xl bg-[#141414] text-center">
        <h3 className="font-serif text-3xl md:text-5xl uppercase mb-4">Focus & Rhythm</h3>
        <p className="text-sm text-[#888888] font-sans max-w-lg mx-auto">
          Merging classical editorial layout principles with kinetic motion graphics to build timeless digital stories.
        </p>
      </div>
    </section>
  );
};
