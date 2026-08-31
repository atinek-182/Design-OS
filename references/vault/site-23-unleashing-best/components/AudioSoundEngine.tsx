import React, { useState } from "react";

export const AudioSoundEngine: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleSound = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <button
      onClick={toggleSound}
      className="fixed bottom-8 right-8 w-16 h-16 rounded-full border-2 border-current flex items-center justify-center cursor-pointer shadow-2xl hover:scale-110 transition-transform z-50 bg-white/80 backdrop-blur-md"
      title={isPlaying ? "Mute Ambient Sound" : "Play Ambient Sound"}
    >
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        {isPlaying ? (
          <path d="M11 5L6 9H2V15H6L11 19V5ZM19.07 4.93A10 10 0 0119.07 19.07M15.54 8.46A5 5 0 0115.54 15.54" />
        ) : (
          <path d="M11 5L6 9H2V15H6L11 19V5ZM23 9L17 15M17 9L23 15" />
        )}
      </svg>
    </button>
  );
};
