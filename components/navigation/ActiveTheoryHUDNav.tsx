import React, { useState } from "react";
import { soundEngine } from "../audio/ActiveTheoryAudio";

interface HUDNavProps {
  activeNode?: "LA" | "AMS";
  onNodeChange?: (node: "LA" | "AMS") => void;
  activeMode?: "PORTFOLIO" | "VR" | "AR";
  onModeChange?: (mode: "PORTFOLIO" | "VR" | "AR") => void;
  onOpenContact?: () => void;
}

export const ActiveTheoryHUDNav: React.FC<HUDNavProps> = ({
  activeNode = "LA",
  onNodeChange,
  activeMode = "PORTFOLIO",
  onModeChange,
  onOpenContact,
}) => {
  const [muted, setMuted] = useState(false);

  const handleNodeToggle = (node: "LA" | "AMS") => {
    soundEngine.modeChime();
    onNodeChange?.(node);
  };

  const handleModeToggle = (mode: "PORTFOLIO" | "VR" | "AR") => {
    soundEngine.modeChime();
    onModeChange?.(mode);
  };

  const handleAudioToggle = () => {
    const isMuted = !soundEngine.toggleMute();
    setMuted(isMuted);
  };

  const handleButtonClick = () => {
    soundEngine.click();
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-50 flex flex-col justify-between p-6 sm:p-8 font-mono text-xs select-none">
      {/* Top Header Row */}
      <div className="flex justify-between items-start w-full pointer-events-auto">
        {/* Top-Left: Studio Identity */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-bold text-white tracking-widest text-sm">ACTIVE THEORY</span>
          </div>
          <span className="text-zinc-500 text-[10px] tracking-wider">[SYS_STATUS: OPTIMAL // 60 FPS]</span>
        </div>

        {/* Top-Right: City Node Switcher & Audio Mute */}
        <div className="flex items-center gap-4">
          <div className="flex items-center bg-zinc-900/80 border border-zinc-800 rounded-full px-3 py-1 backdrop-blur-md">
            <button
              onClick={() => handleNodeToggle("LA")}
              className={`px-2 py-0.5 rounded-full transition-all duration-200 ${
                activeNode === "LA" ? "bg-sky-500/20 text-sky-400 font-semibold" : "text-zinc-400 hover:text-white"
              }`}
            >
              LA 34°N
            </button>
            <span className="text-zinc-700 mx-1">//</span>
            <button
              onClick={() => handleNodeToggle("AMS")}
              className={`px-2 py-0.5 rounded-full transition-all duration-200 ${
                activeNode === "AMS" ? "bg-sky-500/20 text-sky-400 font-semibold" : "text-zinc-400 hover:text-white"
              }`}
            >
              AMS 52°N
            </button>
          </div>

          <button
            onClick={handleAudioToggle}
            className="flex items-center gap-1.5 bg-zinc-900/80 border border-zinc-800 rounded-full px-3 py-1.5 text-zinc-400 hover:text-white transition-colors duration-150 backdrop-blur-md"
            aria-label="Toggle Sound"
          >
            <span className={`w-1.5 h-1.5 rounded-full ${muted ? "bg-zinc-600" : "bg-sky-400 animate-ping"}`} />
            <span>{muted ? "AUDIO [OFF]" : "AUDIO [ON]"}</span>
          </button>
        </div>
      </div>

      {/* Bottom Controls Row */}
      <div className="flex justify-between items-end w-full pointer-events-auto">
        {/* Bottom-Left: Telemetry Coordinates */}
        <div className="hidden sm:flex flex-col gap-0.5 text-zinc-500 text-[10px] tracking-widest">
          <span>LAT: {activeNode === "LA" ? "34.0522° N" : "52.3676° N"}</span>
          <span>LON: {activeNode === "LA" ? "118.2437° W" : "4.9041° E"}</span>
          <span className="text-sky-500/80">HYDRA ENGINE v4.2 // ZERO JANK</span>
        </div>

        {/* Bottom-Right: Platform Mode Switcher & Contact Trigger */}
        <div className="flex items-center gap-3">
          <div className="flex items-center bg-zinc-900/80 border border-zinc-800 rounded-full px-2 py-1 backdrop-blur-md text-[11px]">
            {(["PORTFOLIO", "VR", "AR"] as const).map((mode) => (
              <button
                key={mode}
                onClick={() => handleModeToggle(mode)}
                className={`px-2.5 py-1 rounded-full transition-all duration-200 ${
                  activeMode === mode
                    ? "bg-fuchsia-500/20 text-fuchsia-300 font-semibold shadow-[0_0_12px_rgba(224,86,253,0.3)]"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {mode}
              </button>
            ))}
          </div>

          <button
            onClick={() => {
              handleButtonClick();
              onOpenContact?.();
            }}
            className="bg-white text-black font-semibold px-4 py-2 rounded-full text-xs hover:bg-sky-400 hover:text-black transition-all duration-200 shadow-lg active:scale-95"
          >
            CONTACT // TALK
          </button>
        </div>
      </div>
    </div>
  );
};
