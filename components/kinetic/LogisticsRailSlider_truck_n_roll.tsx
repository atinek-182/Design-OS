import React from "react";

export interface RailCardItem {
  id: string;
  title: string;
  category: string;
  imageBg: string;
}

const ITEMS: RailCardItem[] = [
  { id: "01", title: "Stadium Tour Freight", category: "53ft Air-Ride Trailers", imageBg: "from-zinc-800 to-zinc-900" },
  { id: "02", title: "Kenworth T680 Fleet", category: "Custom Tour Decals & Rigs", imageBg: "from-red-900 to-zinc-900" },
  { id: "03", title: "Cross-Border Express", category: "USA & Canada Customs Direct", imageBg: "from-zinc-800 to-zinc-900" },
];

export const LogisticsRailSlider: React.FC = () => {
  return (
    <section className="py-24 px-8 max-w-7xl mx-auto">
      <h2 className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-8">
        [01] / FLEET & SPECIALIZED CAPABILITIES
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {ITEMS.map((item) => (
          <div key={item.id} className="group border border-zinc-800 rounded-lg p-6 bg-zinc-900/50 hover:border-red-600 transition-colors cursor-pointer">
            <div className={`h-48 rounded bg-gradient-to-br ${item.imageBg} mb-6 flex items-center justify-center font-display text-zinc-600 group-hover:text-red-500 transition-colors`}>
              TRUCK 'N ROLL
            </div>
            <span className="font-mono text-xs text-yellow-400 block mb-2">{item.category}</span>
            <h3 className="font-display text-2xl text-white uppercase">{item.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};
