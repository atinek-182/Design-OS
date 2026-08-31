import React, { useState } from 'react';

export const ObysInteractiveTypeTester: React.FC = () => {
  const [fontSize, setFontSize] = useState(64);
  const [lineHeight, setLineHeight] = useState(1.0);
  const [letterSpacing, setLetterSpacing] = useState(-0.03);
  const [weight, setWeight] = useState(700);
  const [sampleText, setSampleText] = useState('TYPOGRAPHY AS ARCHITECTURE');

  return (
    <div className="w-full bg-[#0d1117] border border-white/10 rounded-2xl p-6 lg:p-8 text-white">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <span className="text-[10px] font-mono tracking-[0.2em] text-[#38bdf8] uppercase">
            [OBYS PRINCIPLE 02]
          </span>
          <h3 className="text-xl font-bold tracking-tight">Interactive Typography Stage</h3>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-white/50">MEASURE: {sampleText.length}ch</span>
        </div>
      </div>

      <div className="py-12 px-4 min-h-[220px] flex items-center justify-center overflow-hidden bg-black/40 rounded-xl my-6 border border-white/5">
        <p
          className="text-center font-display transition-all duration-75 text-balance break-words max-w-full"
          style={{
            fontSize: `${fontSize}px`,
            lineHeight: lineHeight,
            letterSpacing: `${letterSpacing}em`,
            fontWeight: weight,
          }}
        >
          {sampleText}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4 text-xs font-mono">
        <div>
          <div className="flex justify-between mb-2">
            <span className="text-white/60">SIZE</span>
            <span className="text-[#38bdf8]">{fontSize}px</span>
          </div>
          <input
            type="range"
            min="20"
            max="120"
            value={fontSize}
            onChange={(e) => setFontSize(Number(e.target.value))}
            className="w-full accent-[#38bdf8] cursor-pointer"
          />
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <span className="text-white/60">LINE-HEIGHT</span>
            <span className="text-[#38bdf8]">{lineHeight.toFixed(2)}</span>
          </div>
          <input
            type="range"
            min="0.8"
            max="1.8"
            step="0.05"
            value={lineHeight}
            onChange={(e) => setLineHeight(Number(e.target.value))}
            className="w-full accent-[#38bdf8] cursor-pointer"
          />
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <span className="text-white/60">TRACKING</span>
            <span className="text-[#38bdf8]">{letterSpacing.toFixed(3)}em</span>
          </div>
          <input
            type="range"
            min="-0.08"
            max="0.25"
            step="0.005"
            value={letterSpacing}
            onChange={(e) => setLetterSpacing(Number(e.target.value))}
            className="w-full accent-[#38bdf8] cursor-pointer"
          />
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <span className="text-white/60">WEIGHT</span>
            <span className="text-[#38bdf8]">{weight}</span>
          </div>
          <input
            type="range"
            min="100"
            max="900"
            step="100"
            value={weight}
            onChange={(e) => setWeight(Number(e.target.value))}
            className="w-full accent-[#38bdf8] cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};
