import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gift, Sparkles, PartyPopper } from 'lucide-react';
import confetti from 'canvas-confetti';
import { BIRTHDAY_CONFIG } from '../data/birthdayData';
import { sound } from '../utils/audioEffects';

export default function FinalGift({ onGiftOpened }) {
  const [isOpened, setIsOpened] = useState(false);
  const { heading, subheading, openGiftButton } = BIRTHDAY_CONFIG.finalSurprise;

  const handleOpenGift = () => {
    if (isOpened) return;

    sound.playCelebration();

    // Multi-stage fireworks confetti celebration
    const count = 200;
    const defaults = { origin: { y: 0.7 }, disableForReducedMotion: true };

    function fire(particleRatio, opts) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      });
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
      colors: ['#f472b6', '#ec4899', '#fda4af'],
    });
    fire(0.2, {
      spread: 60,
      colors: ['#fb7185', '#f43f5e', '#fed7aa'],
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
      colors: ['#fbcfe8', '#ffffff', '#ffd700'],
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
      colors: ['#ec4899', '#db2777'],
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });

    setIsOpened(true);

    if (onGiftOpened) {
      setTimeout(() => {
        onGiftOpened();
      }, 1000);
    }
  };

  return (
    <section className="relative py-24 px-4 sm:px-6 max-w-3xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-pink rounded-3xl p-8 sm:p-12 border border-pink-200/80 shadow-soft"
      >
        <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-pink-100 text-pink-700 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-4 border border-pink-200">
          <PartyPopper className="w-3.5 h-3.5 text-pink-500" />
          <span>The Grand Finale</span>
        </span>

        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-gray-800 tracking-tight mb-2">
          {heading}
        </h2>

        <p className="font-handwriting text-2xl sm:text-3xl text-pink-500 mb-10 font-medium">
          {subheading}
        </p>

        {/* 3D-feel Animated Gift Box */}
        <div className="relative w-44 h-44 sm:w-52 sm:h-52 mx-auto my-6 flex items-center justify-center">
          <motion.div
            animate={
              isOpened
                ? { scale: [1, 1.15, 1.05] }
                : { y: [0, -8, 0], rotate: [0, -1, 1, 0] }
            }
            transition={{
              y: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
              rotate: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
            }}
            onClick={handleOpenGift}
            className="cursor-pointer group relative w-36 h-36 sm:w-44 sm:h-44"
          >
            {/* Gift Box Lid (Pops open when clicked) */}
            <motion.div
              animate={
                isOpened
                  ? { y: -70, rotate: -25, opacity: 0.9 }
                  : { y: 0, rotate: 0 }
              }
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
              className="absolute -top-3 left-1/2 -translate-x-1/2 w-40 sm:w-48 h-10 bg-gradient-to-r from-pink-500 via-rose-500 to-pink-500 rounded-xl shadow-md z-20 flex items-center justify-center border-t-2 border-pink-200"
            >
              {/* Gold Ribbon Bow */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex items-center justify-center">
                <span className="text-3xl sm:text-4xl drop-shadow-sm select-none">🎀</span>
              </div>
            </motion.div>

            {/* Gift Box Body */}
            <div className="w-full h-full bg-gradient-to-br from-pink-400 via-rose-400 to-pink-500 rounded-2xl shadow-polaroid-lg relative overflow-hidden flex items-center justify-center border-2 border-pink-300">
              {/* Vertical Ribbon */}
              <div className="absolute inset-y-0 w-8 bg-amber-200/90 shadow-inner" />
              {/* Horizontal Ribbon */}
              <div className="absolute inset-x-0 h-8 bg-amber-200/90 shadow-inner" />

              {/* Sparkle badge */}
              <div className="relative z-10 p-3 rounded-full bg-white/30 backdrop-blur-sm group-hover:scale-110 transition-transform">
                <Gift className="w-8 h-8 text-white drop-shadow-md" />
              </div>
            </div>

            {/* Burst of sparkles when open */}
            <AnimatePresence>
              {isOpened && (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1.5, opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 flex items-center justify-center pointer-events-none"
                >
                  <Sparkles className="w-16 h-16 text-yellow-300 animate-spin" style={{ animationDuration: '3s' }} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Action Button */}
        <div className="mt-8">
          <button
            onClick={handleOpenGift}
            disabled={isOpened}
            className={`inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-base sm:text-lg shadow-floating transition-all duration-300 transform active:translate-y-0.5 ${
              isOpened
                ? 'bg-rose-100 text-rose-500 cursor-default shadow-none'
                : 'text-white bg-gradient-to-r from-pink-500 via-rose-400 to-pink-500 hover:shadow-glow-pink hover:-translate-y-1'
            }`}
          >
            <span>{isOpened ? 'SURPRISE UNLOCKED! 🎉' : openGiftButton}</span>
          </button>
        </div>
      </motion.div>
    </section>
  );
}
