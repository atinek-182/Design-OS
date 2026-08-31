import React from "react";

export interface MembershipOffer {
  id: string;
  tier: string;
  price: string;
  description: string;
}

const MEMBERSHIPS: MembershipOffer[] = [
  { id: "01", tier: "Athlete Membership", price: "FREE", description: "Zugang zu Business Kontakten, Aufbau der Personal Brand, Chancen auf Sponsorings." },
  { id: "02", tier: "Booster Membership", price: "€85 / mo", description: "Teilnahme an Club Events für junge Unternehmen unter 2 Jahren am Markt." },
  { id: "03", tier: "Business Membership", price: "€150 / mo", description: "Für Executives und Investor:innen zur Erschließung neuer Geschäftschancen durch Sport." }
];

export const ImpactGrid: React.FC = () => {
  return (
    <section className="py-24 px-8 max-w-7xl mx-auto">
      <span className="text-xs uppercase tracking-widest text-[#FF3366] font-bold mb-8 block">
        [CLUB MEMBERSHIPS]
      </span>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {MEMBERSHIPS.map((item) => (
          <div key={item.id} className="group border border-[#E8E8E2] rounded-xl p-8 bg-white hover:border-[#FF3366] transition-colors duration-300 shadow-sm" data-flick-cards-dragger="true">
            <span className="text-xs font-bold text-[#FF3366] uppercase block mb-1">{item.price}</span>
            <h3 className="text-xl text-[#0A0A0C] font-black uppercase mb-3">{item.tier}</h3>
            <p className="text-sm text-[#707075] font-light leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
