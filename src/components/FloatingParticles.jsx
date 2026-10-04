import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

export default function FloatingParticles() {
  // Delicate floating emojis & sparkles
  const particles = useMemo(() => {
    const items = ['🌸', '✨', '💗', '🤍', '🎀', '⭐', '🌷', '💖'];
    return Array.from({ length: 22 }).map((_, i) => ({
      id: i,
      char: items[i % items.length],
      left: `${(i * 4.6 + Math.random() * 3).toFixed(1)}%`,
      animationDuration: `${10 + (i % 6) * 3}s`,
      animationDelay: `${(i * 0.6).toFixed(1)}s`,
      fontSize: `${14 + (i % 4) * 4}px`,
      opacity: 0.3 + (i % 3) * 0.15,
    }));
  }, []);

  // Faded background floating memory photos
  const backgroundMemories = [
    {
      id: 'm1',
      src: '/images/bestie/bestie1.jpg',
      top: '8%',
      left: '3%',
      rotate: -7,
      width: '140px',
      smWidth: '180px',
      animation: 'animate-drift-slow',
      tape: 'scrapbook-tape-left',
      caption: 'Sunshine ✨',
    },
    {
      id: 'm2',
      src: '/images/bestie/bestie2.jpg',
      top: '28%',
      right: '3%',
      rotate: 8,
      width: '135px',
      smWidth: '175px',
      animation: 'animate-drift-reverse',
      tape: 'scrapbook-tape-right',
      caption: 'Cute moments 🎀',
    },
    {
      id: 'm3',
      src: '/images/bestie/bestie3.jpg',
      top: '52%',
      left: '2%',
      rotate: -9,
      width: '140px',
      smWidth: '185px',
      animation: 'animate-drift-slow',
      tape: 'scrapbook-tape',
      caption: 'Kuch bhi 😂',
    },
    {
      id: 'm4',
      src: '/images/bestie/bestie4.jpg',
      top: '74%',
      right: '2.5%',
      rotate: 6,
      width: '135px',
      smWidth: '180px',
      animation: 'animate-drift-reverse',
      tape: 'scrapbook-tape-left',
      caption: 'Iconic fit ✨',
    },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {/* 1. Lovely Faded Background Photos of Anjali */}
      {backgroundMemories.map((mem) => (
        <div
          key={mem.id}
          className={`absolute ${mem.animation} hidden sm:block bg-memory-card select-none`}
          style={{
            top: mem.top,
            left: mem.left,
            right: mem.right,
            transform: `rotate(${mem.rotate}deg)`,
            opacity: 0.22,
          }}
        >
          {/* Mini Scrapbook Tape on top */}
          <div className={`${mem.tape} !opacity-70 scale-90`} />

          {/* Faded Polaroid Frame */}
          <div className="p-2 sm:p-2.5 pb-3 bg-white/90 rounded-2xl shadow-md border border-pink-200/60 backdrop-blur-[2px]">
            <div className="relative overflow-hidden rounded-xl aspect-[3/4] w-28 md:w-36">
              <img
                src={mem.src}
                alt="Faded memory"
                className="w-full h-full object-cover filter saturate-[0.85] contrast-[0.95]"
                onError={(e) => {
                  e.target.src = '/images/bestie/bestie1.jpg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-300/30 to-transparent mix-blend-overlay" />
            </div>
            <p className="font-handwriting text-center text-xs text-pink-700/80 mt-1.5">
              {mem.caption}
            </p>
          </div>
        </div>
      ))}

      {/* 2. Soft Glowing Pink Ambient Orbs */}
      <div className="fixed top-1/3 left-10 w-96 h-96 bg-pink-200/30 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-subtle" />
      <div className="fixed bottom-1/4 right-10 w-96 h-96 bg-rose-200/30 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* 3. Floating Emojis & Sparkles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {particles.map((p) => (
          <span
            key={p.id}
            className="absolute animate-float-slow select-none transition-transform"
            style={{
              left: p.left,
              bottom: '-25px',
              fontSize: p.fontSize,
              opacity: p.opacity,
              animationDuration: p.animationDuration,
              animationDelay: p.animationDelay,
              animationIterationCount: 'infinite',
              animationTimingFunction: 'linear',
            }}
          >
            {p.char}
          </span>
        ))}
      </div>
    </div>
  );
}
