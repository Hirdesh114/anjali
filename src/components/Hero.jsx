import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart, Gift, Stars } from 'lucide-react';
import confetti from 'canvas-confetti';
import { BIRTHDAY_CONFIG } from '../data/birthdayData';
import { sound } from '../utils/audioEffects';

export default function Hero({ onOpenSurprise }) {
  const handleOpenClick = () => {
    sound.playChime();
    // Start background music (Haareya trending hook)
    window.dispatchEvent(new CustomEvent('play-background-music'));
    // Multi-spread pastel confetti burst
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.65 },
      colors: ['#f472b6', '#fbcfe8', '#fda4af', '#fef08a', '#ffd1dc'],
      disableForReducedMotion: true,
    });
    if (onOpenSurprise) {
      onOpenSurprise();
    }
  };

  return (
    <section className="relative min-h-[95vh] flex flex-col items-center justify-center text-center px-4 sm:px-6 py-12 overflow-hidden">
      {/* Soft glowing ambient circles */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 sm:w-[450px] h-80 sm:h-[450px] bg-gradient-to-tr from-pink-300/35 via-rose-200/40 to-pink-100/30 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-subtle" />
      <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-rose-200/30 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Floating decorative stickers around hero */}
      <motion.div
        animate={{ y: [0, -10, 0], rotate: [-4, 2, -4] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-12 left-6 sm:left-16 hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-2xl bg-white/80 border border-pink-200/70 shadow-sm backdrop-blur-md text-xs font-handwriting text-pink-600 select-none"
      >
        <span>🎀 For My Bestie</span>
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0], rotate: [3, -3, 3] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute top-20 right-6 sm:right-20 hidden sm:flex items-center gap-1 px-3 py-1.5 rounded-2xl bg-white/80 border border-pink-200/70 shadow-sm backdrop-blur-md text-xs font-handwriting text-pink-500 select-none"
      >
        <span>✨ Special Chapter</span>
      </motion.div>

      {/* Decorative cute ribbon tag */}
      <motion.div
        initial={{ opacity: 0, y: -20, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-pink-200/80 shadow-soft text-pink-600 text-xs sm:text-sm font-medium mb-6 backdrop-blur-md"
      >
        <Sparkles className="w-3.5 h-3.5 text-pink-500 animate-spin" style={{ animationDuration: '8s' }} />
        <span>A personalized surprise crafted with love 🎀</span>
      </motion.div>

      {/* Greeting Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="font-script text-6xl sm:text-8xl md:text-9xl text-pink-600 mb-2 drop-shadow-sm leading-tight tracking-wide"
      >
        {BIRTHDAY_CONFIG.hero.greeting}
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="font-serif italic text-xl sm:text-3xl text-gray-700 max-w-lg mx-auto mb-10 leading-relaxed font-light"
      >
        {BIRTHDAY_CONFIG.hero.subGreeting}
      </motion.p>

      {/* Surprise CTA Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6, type: 'spring', stiffness: 200 }}
        className="relative"
      >
        {/* Glowing pulse ring */}
        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-pink-400 to-rose-400 opacity-40 blur-md animate-pulse" />

        <button
          onClick={handleOpenClick}
          className="group relative inline-flex items-center justify-center gap-3 px-9 sm:px-12 py-4 sm:py-5 rounded-full text-white font-semibold text-base sm:text-lg shadow-floating hover:shadow-glow-pink transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0.5 bg-gradient-to-r from-pink-500 via-rose-400 to-pink-500 bg-[length:200%_auto] hover:bg-right focus:outline-none focus:ring-4 focus:ring-pink-300"
        >
          <Gift className="w-5 h-5 text-white/95 group-hover:rotate-12 transition-transform" />
          <span className="relative z-10 tracking-wide font-sans flex items-center gap-2">
            {BIRTHDAY_CONFIG.hero.openSurpriseButton}
          </span>
          <span className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
        </button>
      </motion.div>

      {/* Floating cute down hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.75 }}
        transition={{ duration: 1, delay: 1 }}
        className="mt-14 flex flex-col items-center text-xs text-pink-400 font-sans cursor-pointer hover:opacity-100 transition-opacity"
        onClick={handleOpenClick}
      >
        <span className="mb-1.5 font-handwriting text-base">Tap to unwrap surprise</span>
        <Heart className="w-4 h-4 animate-bounce text-pink-400 fill-pink-200" />
      </motion.div>
    </section>
  );
}
