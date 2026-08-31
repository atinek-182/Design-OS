import React, { useState } from "react";

export interface AccordionSection {
  id: string;
  title: string;
  content: string;
}

const SECTIONS: AccordionSection[] = [
  { id: "01", title: "Concert & Arena Tour Transport", content: "Dedicated logistics managers and air-ride trailers tailored for fast load-in and load-out schedules across stadium venues." },
  { id: "02", title: "Cross-Border Customs Clearance", content: "Pre-cleared FAST certification and dedicated customs brokers ensuring zero delays at USA/Canada borders." },
  { id: "03", title: "Climate-Controlled Storage & Warehousing", content: "Secure staging facilities in Montreal and key logistics hubs for touring equipment maintenance and off-season storage." }
];

export const TourAccordion: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>("01");

  return (
    <section className="py-16 px-8 max-w-4xl mx-auto">
      <h2 className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-8">// TOUR LOGISTICS SERVICES</h2>
      <div className="divide-y divide-zinc-800 border-t border-b border-zinc-800">
        {SECTIONS.map((sec) => (
          <div key={sec.id} className="py-6 cursor-pointer" onClick={() => setOpenId(openId === sec.id ? null : sec.id)}>
            <div className="flex justify-between items-center">
              <h3 className="font-display text-2xl uppercase tracking-wide text-white hover:text-red-500 transition-colors">
                {sec.id}. {sec.title}
              </h3>
              <span className="font-mono text-xl text-zinc-500">{openId === sec.id ? "−" : "+"}</span>
            </div>
            {openId === sec.id && (
              <p className="mt-4 text-zinc-400 text-base font-sans font-light leading-relaxed">
                {sec.content}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
