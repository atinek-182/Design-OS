import React from "react";

export const ExperienceTimeline: React.FC = () => {
  return (
    <section className="py-16 px-8 max-w-4xl mx-auto text-[#F5F3EF]">
      <h2 className="text-xs uppercase tracking-widest text-[#8E8D95] font-semibold mb-8">// OUR CAPABILITIES</h2>
      <div className="space-y-6 border-l border-[#26262B] pl-8">
        <div className="relative">
          <div className="absolute -left-[37px] top-1.5 w-4 h-4 rounded-full bg-[#E0533C]" />
          <h3 className="font-serif text-2xl uppercase mb-2">Multichannel Brand Strategy</h3>
          <p className="text-[#8E8D95] text-sm">Building cohesive brand narratives that resonate across digital, print, and physical touchpoints.</p>
        </div>
        <div className="relative">
          <div className="absolute -left-[37px] top-1.5 w-4 h-4 rounded-full bg-[#26262B]" />
          <h3 className="font-serif text-2xl uppercase mb-2">Experiential Marketing</h3>
          <p className="text-[#8E8D95] text-sm">Designing immersive pop-ups, events, and spatial installations that drive viral engagement.</p>
        </div>
      </div>
    </section>
  );
};
