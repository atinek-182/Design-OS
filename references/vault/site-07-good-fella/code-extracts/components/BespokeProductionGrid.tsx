import React from "react";

export interface LandmarkProject {
  id: string;
  client: string;
  category: string;
  headline: string;
}

const PROJECTS: LandmarkProject[] = [
  { id: "01", client: "Red Bull", category: "SPORTS LANDMARK", headline: "High-Performance Interactive Experience" },
  { id: "02", client: "Annnimate UI", category: "COMPONENT LIBRARY", headline: "Bespoke Kinetic Motion System" },
  { id: "03", client: "The Content Architecture", category: "NEXT.JS & SANITY", headline: "Sanity CMS Editorial Architecture" }
];

export const BespokeProductionGrid: React.FC = () => {
  return (
    <section className="py-24 px-8 max-w-7xl mx-auto font-mono">
      <span className="text-xs uppercase tracking-widest text-[#FF0000] font-bold mb-8 block">
        [SELECTED LANDMARK PROJECTS]
      </span>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PROJECTS.map((item) => (
          <div key={item.id} className="group border border-[#262626] rounded-xl p-8 bg-[#141414] hover:border-[#FF0000] transition-colors duration-300">
            <div className="w-10 h-10 rounded bg-[#FF0000] mb-6 flex items-center justify-center font-bold text-white text-sm">
              {item.id}
            </div>
            <span className="text-xs text-[#888888] uppercase block mb-1 font-bold">{item.category}</span>
            <h3 className="text-xl text-white font-bold mb-2 uppercase">{item.client}</h3>
            <p className="text-sm text-[#888888] font-light leading-relaxed">{item.headline}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
