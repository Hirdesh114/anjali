import React, { useRef, useEffect, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.85;

    const playAudio = () => {
      if (audio.paused) {
        audio
          .play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch(() => {
            // Browser autoplay restrictions handled on next gesture
          });
      }
    };

    // 1. Listen for "OPEN YOUR SURPRISE" custom event
    const handleTrigger = () => {
      playAudio();
    };

    // 2. Also listen for first user touch / click anywhere on the page
    const handleUserInteraction = () => {
      playAudio();
      window.removeEventListener('click', handleUserInteraction);
      window.removeEventListener('touchstart', handleUserInteraction);
    };

    window.addEventListener('play-background-music', handleTrigger);
    window.addEventListener('click', handleUserInteraction, { passive: true });
    window.addEventListener('touchstart', handleUserInteraction, { passive: true });

    return () => {
      window.removeEventListener('play-background-music', handleTrigger);
      window.removeEventListener('click', handleUserInteraction);
      window.removeEventListener('touchstart', handleUserInteraction);
    };
  }, []);

  const toggleMute = () => {
    if (!audioRef.current) return;
    const nextMuted = !isMuted;
    audioRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  return (
    <>
      {/* Background Audio element playing Haareya on continuous loop */}
      <audio
        ref={audioRef}
        src="/audio/haareya.mp3"
        loop
        preload="auto"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      {/* Subtle discreet mute button in bottom-right corner (never clutters top right) */}
      {isPlaying && (
        <button
          onClick={toggleMute}
          className="fixed bottom-4 right-4 z-40 p-2.5 rounded-full bg-white/70 hover:bg-white/95 backdrop-blur-md border border-pink-200/80 text-pink-600 shadow-sm transition-all hover:scale-105 active:scale-95"
          title={isMuted ? 'Unmute music' : 'Mute background music'}
          aria-label={isMuted ? 'Unmute' : 'Mute'}
        >
          {isMuted ? (
            <VolumeX className="w-4 h-4 text-gray-500" />
          ) : (
            <Volume2 className="w-4 h-4 text-pink-500 animate-pulse" />
          )}
        </button>
      )}
    </>
  );
}
