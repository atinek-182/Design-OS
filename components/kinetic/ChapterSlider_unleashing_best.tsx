import React from "react";

export interface Chapter {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  lottieSrc?: string;
}

const CHAPTERS: Chapter[] = [
  { id: "01", number: "01", title: "Mindset Rewiring", subtitle: "Cognitive frameworks for extreme clarity" },
  { id: "02", number: "02", title: "Physical Energy", subtitle: "Optimizing vitality & sleep cycles" },
  { id: "03", number: "03", title: "Habit Engineering", subtitle: "Building frictionless execution loops" },
  { id: "04", number: "04", title: "Unstoppable Flow", subtitle: "Entering deep work on demand" },
];

export const ChapterSlider: React.FC = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <h2 className="text-sm font-bold uppercase tracking-widest mb-12 opacity-50">
        Course Chapters Overview
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {CHAPTERS.map((chap) => (
          <div
            key={chap.id}
            className="p-8 rounded-2xl border border-black/10 dark:border-white/10 hover:scale-105 transition-all duration-300 flex flex-col justify-between h-80 cursor-pointer shadow-sm hover:shadow-xl"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.4)" }}
          >
            <div className="w-16 h-16 rounded-full border border-current flex items-center justify-center font-bold text-sm">
              {chap.number}
            </div>
            <div>
              <h3 className="font-serif text-3xl uppercase tracking-tight mb-2">{chap.title}</h3>
              <p className="text-sm opacity-70 font-sans">{chap.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
