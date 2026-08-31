import React from "react";

export interface CaseStudyProps {
  id: string;
  title: string;
  category: string;
  imageBg: string;
}

const STUDIES: CaseStudyProps[] = [
  { id: "01", title: "Brand Identity & Strategy", category: "Creative Direction & Identity", imageBg: "from-zinc-800 to-zinc-900" },
  { id: "02", title: "Experiential Installation", category: "Spatial & Event Branding", imageBg: "from-[#E0533C]/40 to-zinc-900" }
];

export const CaseStudyCard: React.FC = () => {
  return (
    <section className="py-24 px-8 max-w-7xl mx-auto">
      <span className="text-xs uppercase tracking-widest text-[#8E8D95] font-semibold mb-8 block">
        [01] / SELECTED CASE STUDIES
      </span>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {STUDIES.map((item) => (
          <div key={item.id} className="group border border-[#26262B] rounded-xl p-8 bg-[#161618] hover:border-[#E0533C] transition-colors duration-300 cursor-pointer">
            <div className={`h-64 rounded-lg bg-gradient-to-br ${item.imageBg} mb-6 flex items-center justify-center font-serif text-[#8E8D95] group-hover:text-[#E0533C] transition-colors text-2xl`}>
              ABCS CASE STUDY {item.id}
            </div>
            <span className="text-xs text-[#E0533C] font-bold block mb-2">{item.category}</span>
            <h3 className="font-serif text-3xl text-white uppercase">{item.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};
