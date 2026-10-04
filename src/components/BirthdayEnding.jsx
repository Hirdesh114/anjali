import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Cake, Flame, RotateCcw, Share2, Check } from 'lucide-react';
import confetti from 'canvas-confetti';
import { BIRTHDAY_CONFIG } from '../data/birthdayData';
import { sound } from '../utils/audioEffects';

export default function BirthdayEnding({ id, onReplay }) {
  const { birthdayHeadline, wishes, emotionalPayoff, signature, cakeWishPrompt } =
    BIRTHDAY_CONFIG.finalSurprise;

  const [candleBlown, setCandleBlown] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleBlowCandle = () => {
    if (candleBlown) return;
    sound.playCelebration();
    setCandleBlown(true);

    confetti({
      particleCount: 80,
      spread: 100,
      origin: { y: 0.6 },
      colors: ['#ffd700', '#f472b6', '#fb7185', '#ffffff'],
      disableForReducedMotion: true,
    });
  };

  const handleShare = () => {
    sound.playHeart();
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id={id} className="relative min-h-[90vh] py-20 px-4 sm:px-6 flex flex-col items-center justify-center text-center">
      {/* Soft ambient lighting */}
      <div className="absolute inset-0 bg-gradient-to-t from-pink-200/50 via-transparent to-transparent pointer-events-none -z-10" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto"
      >
        {/* Interactive Birthday Cake with Candle to blow out */}
        <div className="mb-8 flex flex-col items-center">
          <div
            onClick={handleBlowCandle}
            className="cursor-pointer group relative p-4 rounded-3xl bg-white/70 backdrop-blur-md border border-pink-200 shadow-soft hover:shadow-glow-pink transition-all transform hover:scale-105 active:scale-95"
            title="Tap the candle to blow it out and make a wish!"
          >
            {/* Candle Flame */}
            <div className="flex justify-center -mb-2">
              {!candleBlown ? (
                <motion.div
                  animate={{
                    scale: [1, 1.2, 0.9, 1.1, 1],
                    y: [0, -2, 0],
                  }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="text-amber-500 flex items-center justify-center"
                >
                  <Flame className="w-8 h-8 fill-amber-400 text-amber-500 animate-pulse" />
                </motion.div>
              ) : (
                <div className="text-gray-400 flex items-center gap-1 text-xs font-handwriting py-1">
                  <span>Wish Made! ✨</span>
                </div>
              )}
            </div>

            {/* Cake Emoji / Illustration */}
            <div className="text-6xl sm:text-7xl select-none">
              🎂
            </div>

            <p className="mt-2 text-xs font-medium text-pink-600 group-hover:text-pink-700">
              {candleBlown ? '🎉 Happy Birthday! 🎉' : cakeWishPrompt}
            </p>
          </div>
        </div>

        {/* Large Celebration Headline */}
        <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-extrabold text-gray-800 tracking-tight mb-8">
          {birthdayHeadline}
        </h2>

        {/* Warm Bestie Vows / Wishes */}
        <div className="space-y-2 font-serif text-lg sm:text-2xl text-gray-700 leading-relaxed max-w-xl mx-auto mb-10">
          {wishes.map((line, idx) => (
            <p key={idx} className="italic">
              {line}
            </p>
          ))}
        </div>

        {/* Emotional Payoff Quote */}
        <div className="my-8 py-4 border-y border-pink-200/80">
          <p className="font-handwriting text-3xl sm:text-4xl md:text-5xl text-rose-600 font-bold drop-shadow-sm">
            {emotionalPayoff}
          </p>
        </div>

        {/* Handwritten Signature */}
        <div className="mb-12">
          <p className="font-script text-3xl sm:text-4xl text-gray-800">
            {signature}
          </p>
        </div>

        {/* Bottom Actions: Replay & Share */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onReplay}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-pink-50 border border-pink-200 text-pink-600 font-medium text-sm shadow-sm transition-all"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Experience Again</span>
          </button>

          <button
            onClick={handleShare}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-pink-500 hover:bg-pink-600 text-white font-medium text-sm shadow-md transition-all active:scale-95"
          >
            {copied ? <Check className="w-4 h-4" /> : <Share2 className="w-4 h-4" />}
            <span>{copied ? 'Link Copied! 💗' : 'Share Surprise'}</span>
          </button>
        </div>

        <p className="mt-12 text-xs text-pink-400 font-sans">
          Made with infinite love for the best bestie in the entire universe 🌸
        </p>
      </motion.div>
    </section>
  );
}
