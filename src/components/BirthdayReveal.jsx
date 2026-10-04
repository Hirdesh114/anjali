import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart, Star, Cake } from 'lucide-react';
import { BIRTHDAY_CONFIG } from '../data/birthdayData';

export default function BirthdayReveal({ id }) {
  return (
    <section id={id} className="relative py-16 sm:py-24 px-4 sm:px-6 max-w-4xl mx-auto text-center">
      {/* Decorative floating balloons background elements */}
      <div className="absolute top-8 left-4 sm:left-12 text-3xl sm:text-5xl opacity-80 animate-float-slow select-none pointer-events-none">
        🎈
      </div>
      <div className="absolute top-16 right-4 sm:right-12 text-3xl sm:text-5xl opacity-80 animate-float-medium select-none pointer-events-none" style={{ animationDelay: '1.5s' }}>
        🌸
      </div>
      <div className="absolute bottom-10 left-8 sm:left-20 text-2xl sm:text-4xl opacity-70 animate-float-slow select-none pointer-events-none" style={{ animationDelay: '2.5s' }}>
        ✨
      </div>
      <div className="absolute bottom-12 right-8 sm:right-20 text-3xl sm:text-5xl opacity-80 animate-float-medium select-none pointer-events-none" style={{ animationDelay: '3s' }}>
        🎀
      </div>

      {/* Main Birthday Greeting */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8 }}
      >
        <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-pink-100 text-pink-700 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-4 border border-pink-200">
          <Cake className="w-3.5 h-3.5 text-pink-500" />
          <span>Special Day Edition</span>
        </span>

        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-gray-800 tracking-tight mb-3">
          {BIRTHDAY_CONFIG.hero.headline}
        </h2>

        <p className="font-handwriting text-2xl sm:text-3xl text-pink-500 font-medium max-w-md mx-auto mb-10">
          {BIRTHDAY_CONFIG.hero.subheadline}
        </p>
      </motion.div>

      {/* Hero Polaroid Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative max-w-sm sm:max-w-md mx-auto"
      >
        {/* Scrapbook Tape Decoration */}
        <div className="scrapbook-tape" />

        {/* Polaroid frame with lovely romantic glow */}
        <div className="relative p-4 sm:p-5 bg-white rounded-3xl polaroid-shadow-lg border-2 border-pink-200/90 transform -rotate-1 hover:rotate-0 transition-all duration-500 hover:shadow-glow-pink">
          {/* Subtle Corner Heart Sticker */}
          <div className="absolute -top-3 -left-3 bg-pink-100 border border-pink-300 rounded-full p-1.5 shadow-sm select-none z-20">
            <span className="text-sm">🌸</span>
          </div>

          <div className="relative overflow-hidden rounded-2xl bg-pink-50 aspect-[4/5] group shadow-inner">
            <img
              src={BIRTHDAY_CONFIG.hero.heroImage}
              alt="Birthday Bestie"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              onError={(e) => {
                // Fallback graceful graphic if image path changed
                e.target.src = "/images/bestie/bestie1.jpg";
              }}
            />
            {/* Soft pink gradient overlay at bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none opacity-60" />

            {/* Glowing Corner Badge */}
            <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-pink-600 shadow-sm flex items-center gap-1">
              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
              <span>Birthday Girl 👑</span>
            </div>
          </div>

          {/* Polaroid Caption */}
          <div className="pt-4 pb-2 text-center">
            <p className="font-handwriting text-xl sm:text-2xl text-gray-700 leading-snug">
              {BIRTHDAY_CONFIG.hero.heroCaption}
            </p>
            <div className="flex items-center justify-center gap-2 mt-2 text-xs text-pink-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Celebrating another year of being iconic</span>
              <Sparkles className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>

        {/* Cute decorative stickers around frame */}
        <motion.div
          animate={{ rotate: [0, 8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-4 -right-4 sm:-right-6 bg-pink-500 text-white rounded-full p-2.5 shadow-lg border-2 border-white flex items-center justify-center"
        >
          <Heart className="w-5 h-5 fill-white text-white" />
        </motion.div>
      </motion.div>
    </section>
  );
}
