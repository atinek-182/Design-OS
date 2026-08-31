import React, { useState } from "react";

export const RemiAIChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div id="chat-window-position" className="fixed bottom-4 left-4 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-3 bg-zinc-900 border border-white/10 text-white px-4 py-2.5 rounded-full shadow-2xl hover:border-[#3B82F6] transition-colors"
      >
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
        <span className="text-xs font-semibold">Remi AI Assistant</span>
      </button>
      {isOpen && (
        <div className="mt-2 w-80 bg-zinc-950 border border-white/10 rounded-2xl p-4 shadow-2xl text-white text-xs">
          <p className="font-semibold text-white/90 mb-2">Hey — I'm Remi, Off Menu's AI assistant.</p>
          <p className="text-zinc-400 mb-4">Anything catch your eye?</p>
          <div className="space-y-2">
            <button className="w-full text-left bg-white/5 hover:bg-white/10 p-2 rounded-lg text-white">Where should I start?</button>
            <button className="w-full text-left bg-white/5 hover:bg-white/10 p-2 rounded-lg text-white">What do you do?</button>
          </div>
        </div>
      )}
    </div>
  );
};
