import React from "react";

export interface WorkItem {
  id: string;
  name: string;
  category: string;
  thumbnail: string;
}

const ITEMS: WorkItem[] = [
  { id: "0", name: "Resonant", category: "AI Agentic UI", thumbnail: "/images/work/resonant/thumbnail.webp" },
  { id: "1", name: "Control Tower", category: "Logistics Dashboard", thumbnail: "/images/work/controltower/thumbnail.webp" },
  { id: "2", name: "Ditto", category: "AI Automation Platform", thumbnail: "/images/work/ditto/thumbnail.webp" }
];

export const OrbitalPortfolioCarousel: React.FC = () => {
  return (
    <section className="relative h-[80vh] w-full flex items-center justify-center bg-black overflow-hidden">
      <div className="relative w-[600px] h-[600px] rounded-full border border-white/10 flex items-center justify-center animate-spin-slow">
        {ITEMS.map((item, idx) => (
          <a
            key={item.id}
            href={`/work/${item.name.toLowerCase().replace(/\s+/g, '')}`}
            className="absolute w-24 h-24 rounded-full overflow-hidden border border-white/20 hover:border-[#3B82F6] transition-transform hover:scale-110"
            style={{
              transform: `rotate(${idx * 120}deg) translate(250px) rotate(-${idx * 120}deg)`
            }}
          >
            <div className="w-full h-full bg-zinc-900 flex items-center justify-center text-xs font-bold text-white text-center p-2">
              {item.name}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
