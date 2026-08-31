import React from "react";

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  previewUrl: string;
}

const PROJECTS: ProjectItem[] = [
  { id: "01", title: "Brand Motion Identity", category: "2D Animation & Motion", previewUrl: "/images/project1.webp" },
  { id: "02", title: "Single Frame Expression", category: "Creative Break & Experiments", previewUrl: "/images/project2.webp" }
];

export const ProjectGalleryGrid: React.FC = () => {
  return (
    <section className="py-24 px-8 max-w-7xl mx-auto">
      <span className="text-xs uppercase tracking-widest text-[#888888] font-mono mb-8 block">
        [01] / PRECISELY REFINED SELECTION
      </span>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.map((project) => (
          <div key={project.id} className="group border border-[#222222] rounded-xl p-8 bg-[#141414] hover:border-[#EBEAE4] transition-colors duration-300 cursor-pointer">
            <div className="h-64 rounded-lg bg-zinc-900 mb-6 flex items-center justify-center font-serif text-[#888888] group-hover:text-[#EBEAE4] transition-colors text-2xl">
              PROJECT {project.id}
            </div>
            <span className="text-xs text-[#888888] font-mono uppercase block mb-2">{project.category}</span>
            <h3 className="font-serif text-3xl text-white uppercase">{project.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};
