import React from "react";

export interface LuxuryCampaign {
  id: string;
  brand: string;
  campaignTitle: string;
  mediaType: string;
}

const CAMPAIGNS: LuxuryCampaign[] = [
  { id: "01", brand: "Maison Dior", campaignTitle: "Generative AI Haute Couture", mediaType: "4K HLS Film" },
  { id: "02", brand: "Saint Laurent", campaignTitle: "AI Visual Culture Campaign", mediaType: "3D Imagery & CGI" },
  { id: "03", brand: "Jacquemus", campaignTitle: "Spatial AI Installation", mediaType: "Full Runway Production" }
];

export const CreativeWorksGrid: React.FC = () => {
  return (
    <section className="py-24 px-8 max-w-7xl mx-auto">
      <span className="text-xs uppercase tracking-widest text-[#888888] font-bold mb-8 block">
        [01] / SELECTED LUXURY CAMPAIGNS
      </span>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {CAMPAIGNS.map((item) => (
          <div key={item.id} className="group border border-[#1E1E22] rounded-xl p-6 bg-[#0E0E10] hover:border-white transition-colors duration-300 cursor-pointer">
            <div className="h-64 rounded-lg bg-zinc-900 mb-6 flex items-center justify-center font-mono text-[#888888] group-hover:text-white transition-colors text-xl uppercase">
              {item.brand}
            </div>
            <span className="text-xs text-[#888888] uppercase block mb-1">{item.mediaType}</span>
            <h3 className="text-xl text-white uppercase font-bold">{item.campaignTitle}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};
