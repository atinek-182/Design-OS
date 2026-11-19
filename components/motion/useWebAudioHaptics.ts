import { useRef, useCallback, useState, useEffect } from 'react';

export type HapticSound = 'click' | 'tick' | 'whoosh' | 'pop' | 'chime';

/**
 * Zero-Dependency Native Web Audio API Micro-Haptic Hook
 *
 * Synthesizes crisp physical UI sound transients in real time (0 KB external files):
 * - Click: 15ms damped triangular wave sub-click.
 * - Tick: 8ms high-frequency metallic transient (for Obys grid toggle).
 * - Whoosh: Soft bandpassed white noise sweep for section transitions.
 * - Chime: Dual harmonized sine chord (for theme switching).
 */
export function useWebAudioHaptics() {
  const audioCtxRef = useRef<AudioContext | null>(null);
  const [isMuted, setIsMuted] = useState<boolean>(() => {
    try {
      return localStorage.getItem('awwwards_audio_muted') === 'true';
    } catch {
      return false;
    }
  });

  const getAudioContext = useCallback(() => {
    if (!audioCtxRef.current) {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioCtx) {
        audioCtxRef.current = new AudioCtx();
      }
    }
    if (audioCtxRef.current && audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }
    return audioCtxRef.current;
  }, []);

  const playHaptic = useCallback(
    (sound: HapticSound, volume: number = 0.25) => {
      if (isMuted) return;

      try {
        const ctx = getAudioContext();
        if (!ctx) return;

        const now = ctx.currentTime;

        if (sound === 'click') {
          // 15ms snappy damped click
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();

          osc.type = 'triangle';
          osc.frequency.setValueAtTime(140, now);
          osc.frequency.exponentialRampToValueAtTime(35, now + 0.015);

          gain.gain.setValueAtTime(volume * 0.8, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.015);

          osc.connect(gain);
          gain.connect(ctx.destination);

          osc.start(now);
          osc.stop(now + 0.015);
        } else if (sound === 'tick') {
          // 8ms metallic grid HUD tick
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();

          osc.type = 'sine';
          osc.frequency.setValueAtTime(1200, now);
          osc.frequency.exponentialRampToValueAtTime(400, now + 0.008);

          gain.gain.setValueAtTime(volume * 0.4, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.008);

          osc.connect(gain);
          gain.connect(ctx.destination);

          osc.start(now);
          osc.stop(now + 0.008);
        } else if (sound === 'chime') {
          // Dual sine chord (E5 + G#5)
          [659.25, 830.61].forEach((freq) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();

            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, now);

            gain.gain.setValueAtTime(volume * 0.3, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

            osc.connect(gain);
            gain.connect(ctx.destination);

            osc.start(now);
            osc.stop(now + 0.08);
          });
        } else if (sound === 'whoosh') {
          // Filtered noise sweep
          const bufferSize = ctx.sampleRate * 0.08;
          const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
          const data = buffer.getChannelData(0);
          for (let i = 0; i < bufferSize; i++) {
            data[i] = Math.random() * 2 - 1;
          }

          const noise = ctx.createBufferSource();
          noise.buffer = buffer;

          const filter = ctx.createBiquadFilter();
          filter.type = 'bandpass';
          filter.frequency.setValueAtTime(800, now);
          filter.frequency.linearRampToValueAtTime(200, now + 0.08);
          filter.Q.value = 3.0;

          const gain = ctx.createGain();
          gain.gain.setValueAtTime(volume * 0.25, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

          noise.connect(filter);
          filter.connect(gain);
          gain.connect(ctx.destination);

          noise.start(now);
          noise.stop(now + 0.08);
        }
      } catch {
        // Silently ignore audio block if user hasn't interacted
      }
    },
    [isMuted, getAudioContext]
  );

  const toggleMute = useCallback(() => {
    setIsMuted((prev) => {
      const next = !prev;
      try {
        localStorage.setItem('awwwards_audio_muted', String(next));
      } catch {}
      return next;
    });
  }, []);

  useEffect(() => {
    return () => {
      if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
        audioCtxRef.current.close();
      }
    };
  }, []);

  return {
    playHaptic,
    isMuted,
    toggleMute,
  };
}
