import React, { useState, useRef } from 'react';

export interface Chapter {
  id: string;
  title: string;
  duration: string;
  audioUrl: string;
}

export interface AudioNarrativePlayerProps {
  chapters?: Chapter[];
}

export const AudioNarrativePlayer: React.FC<AudioNarrativePlayerProps> = ({
  chapters = [
    { id: "ch1", title: "Chapter 1: The Model as Thought", duration: "04:12", audioUrl: "/audio/chapter1.mp3" },
    { id: "ch2", title: "Chapter 2: Sculpting Sound & Steel", duration: "05:45", audioUrl: "/audio/chapter2.mp3" },
    { id: "ch3", title: "Chapter 3: Legacy of the Archive", duration: "03:50", audioUrl: "/audio/chapter3.mp3" },
  ],
}) => {
  const [activeChapter, setActiveChapter] = useState<Chapter>(chapters[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-[#1c1b18] text-[#f2f0eb] rounded-2xl shadow-xl border border-white/10 font-sans">
      <audio ref={audioRef} src={activeChapter.audioUrl} onEnded={() => setIsPlaying(false)} />

      <div className="flex justify-between items-center mb-6">
        <div>
          <span className="text-[10px] font-mono tracking-widest text-[#d94f30] uppercase font-bold">
            GUIDED ARCHITECTURAL AUDIO NARRATIVE
          </span>
          <h3 className="text-xl font-serif mt-1">{activeChapter.title}</h3>
        </div>

        <button
          onClick={togglePlay}
          className="w-12 h-12 rounded-full bg-[#d94f30] hover:bg-[#e65c3d] text-white flex items-center justify-center font-bold text-sm shadow-md transition-transform active:scale-95"
        >
          {isPlaying ? '⏸' : '▶'}
        </button>
      </div>

      {/* Chapter Selection Accordion Tabs */}
      <div className="flex flex-col gap-2">
        {chapters.map((ch) => (
          <div
            key={ch.id}
            onClick={() => {
              setActiveChapter(ch);
              setIsPlaying(false);
            }}
            className={`p-3 rounded-lg border cursor-pointer transition-colors flex justify-between items-center text-xs font-mono ${
              activeChapter.id === ch.id
                ? 'bg-white/10 border-[#d94f30] text-white'
                : 'bg-black/20 border-white/5 text-gray-400 hover:text-white'
            }`}
          >
            <span>{ch.title}</span>
            <span>{ch.duration}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
