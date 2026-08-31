import React, { useState, useEffect } from "react";

export const TokyoClockWidget: React.FC = () => {
  const [time, setTime] = useState({ hours: "00", minutes: "00", seconds: "00" });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format to Tokyo Time (Asia/Tokyo)
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Tokyo",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      const formatter = new Intl.DateTimeFormat("en-US", options);
      const parts = formatter.formatToParts(now);

      let h = "00", m = "00", s = "00";
      parts.forEach((p) => {
        if (p.type === "hour") h = p.value;
        if (p.type === "minute") m = p.value;
        if (p.type === "second") s = p.value;
      });

      setTime({ hours: h, minutes: m, seconds: s });
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-2 font-mono text-xs tracking-widest text-white/60">
      <span className="font-sans text-xs px-1.5 py-0.5 bg-white/10 rounded text-white/90">
        東京
      </span>
      <div className="flex items-center gap-0.5">
        <span className="text-white font-bold">{time.hours}</span>
        <span className="animate-pulse text-[#FE4249]">:</span>
        <span className="text-white font-bold">{time.minutes}</span>
        <span className="animate-pulse text-[#FE4249]">:</span>
        <span className="text-white/80">{time.seconds}</span>
      </div>
      <span className="text-[10px] text-white/40 uppercase">JST</span>
    </div>
  );
};
