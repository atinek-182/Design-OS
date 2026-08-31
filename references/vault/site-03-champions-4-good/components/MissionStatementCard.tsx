import React from "react";

export const MissionStatementCard: React.FC = () => {
  return (
    <section className="py-16 px-8 max-w-4xl mx-auto text-[#0A0A0C]">
      <div className="p-10 border border-[#E8E8E2] rounded-xl bg-white text-center shadow-sm">
        <h3 className="text-3xl md:text-5xl font-black uppercase mb-4">Sport Meets Social Impact</h3>
        <p className="text-base text-[#707075] max-w-lg mx-auto leading-relaxed">
          Bringing Olympic-level discipline to entrepreneurial innovation and high-growth investments.
        </p>
      </div>
    </section>
  );
};
