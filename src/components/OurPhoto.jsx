import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Star } from 'lucide-react';
import confetti from 'canvas-confetti';
import { BIRTHDAY_CONFIG } from '../data/birthdayData';
import { sound } from '../utils/audioEffects';

export default function OurPhoto({ id }) {
  const { buildupText, photoSrc, caption1, caption2, caption3, memoryTag } =
    BIRTHDAY_CONFIG.ourPhotoSection;

  const [heartCount, setHeartCount] = useState(0);

  const handleShowerHearts = () => {
    sound.playCelebration();
    setHeartCount((c) => c + 1);

    confetti({
      particleCount: 45,
      spread: 80,
      origin: { y: 0.65 },
      shapes: ['circle'],
      colors: ['#f43f5e', '#ec4899', '#f472b6', '#fda4af'],
      disableForReducedMotion: true,
    });
  };

  return (
    <section id={id} className="relative py-24 px-4 sm:px-6 max-w-4xl mx-auto text-center overflow-hidden">
      {/* Ambient Gilded Glow Backdrops */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[520px] h-[340px] sm:h-[520px] bg-gradient-to-tr from-pink-300/30 via-rose-200/40 to-amber-100/30 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-subtle" />

      {/* Cinematic Buildup Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="mb-10"
      >
        <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-rose-600 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-4 shadow-sm">
          <Star className="w-3.5 h-3.5 fill-rose-400 text-rose-400" />
          <span>The Most Special Memory</span>
        </span>

        <h2 className="font-serif italic text-3xl sm:text-5xl md:text-6xl font-bold text-gray-800 tracking-tight">
          {buildupText}
        </h2>
      </motion.div>

      {/* Cinematic Hero Polaroid Frame */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative max-w-md sm:max-w-lg mx-auto"
      >
        {/* Double Vintage Scrapbook Tape */}
        <div className="scrapbook-tape-left !w-24 !top-[-14px]" />
        <div className="scrapbook-tape-right !w-24 !top-[-14px]" />

        {/* Polaroid Card with Rose-Gold Border Glow */}
        <div className="p-5 sm:p-7 bg-white rounded-3xl polaroid-shadow-lg border-2 border-rose-200/90 relative group">
          {/* Main Photo Container */}
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-rose-50 border border-rose-100/60 shadow-inner">
            <img
              src={photoSrc}
              alt="Our Special Photo"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              onError={(e) => {
                // Graceful fallback to first photo if us.jpg is not yet replaced
                e.target.src = "/images/bestie/bestie1.jpg";
              }}
            />

            {/* Soft Warm Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-pink-950/40 via-transparent to-transparent pointer-events-none" />

            {/* Special Tag Badge */}
            <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-semibold text-rose-600 shadow-md flex items-center gap-1.5">
              <span>{memoryTag}</span>
            </div>
          </div>

          {/* Emotional Payoff Quote */}
          <div className="pt-6 pb-3 text-center px-2">
            <p className="font-serif italic text-lg sm:text-xl text-gray-600 mb-1">
              {caption1}
            </p>
            <p className="font-serif italic text-xl sm:text-2xl font-bold text-gray-800 mb-2">
              {caption2}
            </p>
            <p className="font-handwriting text-2xl sm:text-4xl text-rose-600 font-bold leading-tight">
              {caption3}
            </p>

            {/* Interactive Heart Shower Button */}
            <div className="mt-6 flex flex-col items-center">
              <button
                onClick={handleShowerHearts}
                className="group relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 text-white font-semibold text-xs sm:text-sm shadow-md hover:shadow-glow-pink transition-all transform hover:-translate-y-0.5 active:scale-95"
              >
                <Heart className="w-4 h-4 fill-white animate-pulse" />
                <span>
                  {heartCount === 0 ? 'Send Love To This Photo 💗' : `Shower of Love (${heartCount})`}
                </span>
                <Sparkles className="w-3.5 h-3.5 text-rose-200" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
