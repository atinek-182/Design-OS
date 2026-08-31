import React, { useState } from 'react';

export interface MagazineProps {
  issueNumber?: string;
  ideasCount?: number;
  mainTitle1?: string;
  mainTitle2?: string;
  description?: string;
}

export const MagazineWidget: React.FC<MagazineProps> = ({
  issueNumber = "ISSUE NO. 00124",
  ideasCount = 2558,
  mainTitle1 = "We Are So",
  mainTitle2 = "Cooked!",
  description = "Oryzo is taking everyone's jobs... and replacing them with AI!",
}) => {
  const [prompt, setPrompt] = useState('');
  const [sent, setSent] = useState(false);

  const handleSend = () => {
    if (!prompt) return;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <div className="relative w-full max-w-md mx-auto p-8 bg-[#181512] text-[#fde9ce] border border-[#fde9ce]/20 rounded-2xl shadow-2xl overflow-hidden font-sans">
      {/* Top Header Tag */}
      <div className="flex justify-between items-center text-xs font-mono border-b border-[#fde9ce]/15 pb-4 mb-6">
        <span className="tracking-widest uppercase font-bold text-[#fde9ce]/80">{issueNumber}</span>
        <span className="bg-orange-600/20 text-orange-400 px-2 py-0.5 rounded border border-orange-500/30">SATIRICAL EDITION</span>
      </div>

      {/* Main Magazine Cover Title */}
      <div className="mb-8">
        <h2 className="text-4xl font-extrabold uppercase tracking-tight text-[#fde9ce] leading-none mb-1">
          {mainTitle1}
        </h2>
        <h3 className="text-5xl font-black italic tracking-tighter text-orange-400 leading-none mb-4">
          {mainTitle2}
        </h3>
        <p className="text-sm font-light text-[#fde9ce]/70 border-l-2 border-orange-500 pl-3 py-1">
          {description}
        </p>
      </div>

      {/* Interactive AI Prompt Generator Box (Satirical Feature) */}
      <div className="bg-[#241f1a] p-4 rounded-xl border border-[#fde9ce]/10 mb-6">
        <label className="block text-xs font-mono text-[#fde9ce]/60 mb-2">
          Ask @oryzo AI:
        </label>
        <div className="flex gap-2">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Hey @oryzo, can you put on a bikini?"
            className="flex-1 bg-black/40 border border-[#fde9ce]/20 rounded-lg px-3 py-2 text-xs text-[#fde9ce] focus:outline-none focus:border-orange-400 transition-colors"
          />
          <button
            onClick={handleSend}
            className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-black font-bold text-xs rounded-lg transition-transform active:scale-95"
          >
            {sent ? 'Sent!' : 'Send'}
          </button>
        </div>
      </div>

      {/* Barcode & Footer Data */}
      <div className="flex justify-between items-end text-[10px] font-mono text-[#fde9ce]/40 pt-4 border-t border-[#fde9ce]/10">
        <div>
          <p className="font-bold text-[#fde9ce]/70">ORYZO-1 OPEN WEIGHT</p>
          <p>Lightweight cork model</p>
        </div>
        <div className="flex flex-col items-end gap-1">
          <div className="flex gap-1 h-6">
            <span className="w-1 bg-[#fde9ce]/60" />
            <span className="w-0.5 bg-[#fde9ce]/40" />
            <span className="w-2 bg-[#fde9ce]/80" />
            <span className="w-1 bg-[#fde9ce]/60" />
            <span className="w-0.5 bg-[#fde9ce]/30" />
            <span className="w-1.5 bg-[#fde9ce]/70" />
          </div>
          <span>809 174 007</span>
        </div>
      </div>
    </div>
  );
};
