import React from "react";

export interface ArtPillar {
  id: string;
  title: string;
  category: string;
  description: string;
}

const PILLARS: ArtPillar[] = [
  { id: "01", title: "The Card Portfolio", category: "MOBILE WALLET & QR", description: "Centralized contacts, booking options, and direct financial support." },
  { id: "02", title: "Connectory Directory", category: "100+ COUNTRIES", description: "Global network connecting contemporary artists and curators." },
  { id: "03", title: "Direct Audience Patronage", category: "SUSTAINABILITY", description: "Independent financial backing operating outside algorithms." }
];

export const ArtGalleryGrid: React.FC = () => {
  return (
    <section className="py-24 px-8 max-w-7xl mx-auto">
      <span className="text-xs uppercase tracking-widest text-[#A3A3FF] font-bold mb-8 block">
        [INFRASTRUCTURE PILLARS]
      </span>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PILLARS.map((item) => (
          <div key={item.id} className="group border border-[#3333FF] rounded-xl p-8 bg-black hover:border-white transition-colors duration-300">
            <div className="w-10 h-10 rounded bg-[#0000FF] mb-6 flex items-center justify-center font-bold text-white text-sm">
              {item.id}
            </div>
            <span className="text-xs text-[#A3A3FF] uppercase block mb-1 font-bold">{item.category}</span>
            <h3 className="text-xl text-white font-bold mb-2 uppercase">{item.title}</h3>
            <p className="text-sm text-[#A3A3FF] font-light leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
