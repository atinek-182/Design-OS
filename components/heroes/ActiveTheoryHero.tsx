import React, { useState } from "react";
import { ActiveTheoryParticleCanvas } from "../shaders/ActiveTheoryParticleCanvas";
import { ActiveTheoryHUDNav } from "../navigation/ActiveTheoryHUDNav";
import { soundEngine } from "../audio/ActiveTheoryAudio";

export const ActiveTheoryHero: React.FC = () => {
  const [node, setNode] = useState<"LA" | "AMS">("LA");
  const [mode, setMode] = useState<"PORTFOLIO" | "VR" | "AR">("PORTFOLIO");
  const [isContactOpen, setIsContactOpen] = useState(false);

  const featuredProjects = [
    {
      title: "PUPPY PARK XR",
      client: "GOOGLE",
      year: "2026",
      tag: "WEBXR // 3D SPATIAL",
      color: "from-sky-500/20 to-blue-600/10",
      border: "hover:border-sky-400/50",
    },
    {
      title: "VALORANT SHOWCASE",
      client: "RIOT GAMES",
      year: "2025",
      tag: "WEBGL // SHADER STAGE",
      color: "from-fuchsia-500/20 to-pink-600/10",
      border: "hover:border-fuchsia-400/50",
    },
    {
      title: "SONY IMMERSIVE",
      client: "SONY MUSIC",
      year: "2025",
      tag: "SPATIAL AUDIO // RAYMARCHING",
      color: "from-emerald-500/20 to-teal-600/10",
      border: "hover:border-emerald-400/50",
    },
  ];

  return (
    <div className="relative w-full h-screen bg-[#050608] text-white overflow-hidden select-none font-sans">
      {/* 1. Dynamic WebGL Particle Field */}
      <ActiveTheoryParticleCanvas particleCount={160} cyanColor="#38bdf8" magentaColor="#e056fd" />

      {/* 2. 4-Corner HUD Navigation Layer */}
      <ActiveTheoryHUDNav
        activeNode={node}
        onNodeChange={setNode}
        activeMode={mode}
        onModeChange={setMode}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* 3. Central Editorial Stage */}
      <main className="relative z-10 w-full h-full flex flex-col justify-center items-center px-6 pointer-events-none">
        <div className="max-w-4xl text-center flex flex-col items-center gap-6">
          {/* Tagline */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/60 border border-zinc-800 text-[11px] font-mono text-zinc-400 tracking-widest backdrop-blur-md pointer-events-auto">
            <span className="text-sky-400">AWWWARDS</span> // AGENCY OF THE YEAR
          </div>

          {/* Main Fluid Display Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight uppercase leading-[0.95] text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-200 to-zinc-500">
            CREATIVE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-fuchsia-300 to-pink-500">
              TECHNOLOGY
            </span>
          </h1>

          <p className="max-w-xl text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
            Crafting award-winning WebGL interactive stages, WebXR spatial platforms, and real-time physical installations.
          </p>

          {/* 3D Bento Project Cards Carousel */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full mt-4 pointer-events-auto">
            {featuredProjects.map((project, idx) => (
              <div
                key={idx}
                onMouseEnter={() => soundEngine.click(1600, 100, 0.015)}
                className={`flex flex-col text-left p-5 rounded-xl bg-gradient-to-b ${project.color} bg-zinc-950/80 border border-zinc-800/80 ${project.border} backdrop-blur-md transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_24px_rgba(56,189,248,0.15)] cursor-pointer group`}
              >
                <div className="flex justify-between items-center text-[10px] font-mono text-zinc-500 mb-6">
                  <span>{project.client}</span>
                  <span>{project.year}</span>
                </div>
                <h2 className="text-lg font-bold text-white tracking-wide group-hover:text-sky-300 transition-colors">
                  {project.title}
                </h2>
                <span className="text-[10px] font-mono text-sky-400/80 tracking-wider mt-1">
                  {project.tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Contact Drawer Modal */}
      {isContactOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xl flex justify-center items-center p-6">
          <div className="relative max-w-md w-full bg-zinc-950 border border-zinc-800 rounded-2xl p-8 flex flex-col gap-6 shadow-2xl">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[10px] font-mono text-sky-400 tracking-widest">[INQUIRIES]</span>
                <h2 className="text-2xl font-bold text-white mt-1">START A PROJECT</h2>
              </div>
              <button
                onClick={() => setIsContactOpen(false)}
                className="text-zinc-500 hover:text-white font-mono text-sm px-2 py-1"
              >
                [ESC // CLOSE]
              </button>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed font-light">
              Collaborate on Awwwards-tier digital experiences, WebGL stages, and immersive brand platforms.
            </p>
            <a
              href="mailto:talk@activetheory.net"
              onClick={() => soundEngine.click()}
              className="w-full text-center bg-white text-black font-bold py-3 rounded-full text-sm hover:bg-sky-400 transition-all shadow-lg active:scale-95"
            >
              TALK@ACTIVETHEORY.NET
            </a>
          </div>
        </div>
      )}
    </div>
  );
};
