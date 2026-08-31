import React from "react";

export interface EvolvePillar {
  id: string;
  title: string;
  category: string;
  description: string;
}

const PILLARS: EvolvePillar[] = [
  { id: "01", title: "Shopify Plus Ecosystems", category: "TECH", description: "Bespoke eCommerce architectures tailored for high-growth fashion brands." },
  { id: "02", title: "Performance UI/UX Design", category: "DIRECTION", description: "Conversion-first visual design systems and kinetic UI interactions." },
  { id: "03", title: "AI Automation Engine", category: "MARKETING", description: "Tailored AI data pipelines, customer segmentations, and automated growth loops." }
];

export const DigitalProductGrid: React.FC = () => {
  return (
    <section className="py-24 px-8 max-w-7xl mx-auto">
      <span className="text-xs uppercase tracking-widest text-[#666660] font-bold mb-8 block">
        [OUR CORE PILLARS]
      </span>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PILLARS.map((item) => (
          <div key={item.id} className="group border border-[#E2E2DC] rounded-xl p-8 bg-white hover:border-[#0D0D0E] transition-colors duration-300">
            <div className="w-12 h-12 rounded-lg bg-[#C3FF00] mb-6 flex items-center justify-center font-mono text-black font-bold text-lg">
              {item.id}
            </div>
            <span className="text-xs text-[#666660] uppercase block mb-1 font-bold">{item.category}</span>
            <h3 className="text-xl text-[#0D0D0E] font-bold mb-3">{item.title}</h3>
            <p className="text-sm text-[#666660] font-light leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
