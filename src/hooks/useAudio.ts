import { useState, useEffect, useRef, useCallback } from 'react';

export function useAudio(src: string, volume = 0.5) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Instanciamos el Audio solo en el lado del cliente de forma segura
    audioRef.current = new Audio(src);
    audioRef.current.volume = volume;

    const handleEnded = () => setIsPlaying(false);
    audioRef.current.addEventListener('ended', handleEnded);

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('ended', handleEnded);
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [src, volume]);

  const toggle = useCallback(() => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch((err) => {
        console.warn("Audio playback was blocked or failed:", err);
      });
      setIsPlaying(true);
    }
  }, [isPlaying]);

  return { isPlaying, toggle };
}
