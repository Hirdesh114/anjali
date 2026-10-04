import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Heart, Sparkles, X } from 'lucide-react';
import confetti from 'canvas-confetti';
import { BIRTHDAY_CONFIG } from '../data/birthdayData';
import { sound } from '../utils/audioEffects';

export default function LetterSection({ id }) {
  const [isOpen, setIsOpen] = useState(false);
  const {
    heading,
    subheading,
    openButtonText,
    closeButtonText,
    letterTitle,
    letterDate,
    letterParagraphs,
  } = BIRTHDAY_CONFIG.letterSection;

  const handleOpenLetter = () => {
    sound.playChime();
    confetti({
      particleCount: 35,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#fda4af', '#f472b6', '#fed7aa', '#fbcfe8'],
      disableForReducedMotion: true,
    });
    setIsOpen(true);
  };

  const handleCloseLetter = () => {
    sound.playHeart();
    setIsOpen(false);
  };

  return (
    <section id={id} className="relative py-20 px-4 sm:px-6 max-w-4xl mx-auto text-center">
      {/* Dimmed backdrop when letter is open */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-pink-950/40 backdrop-blur-sm transition-opacity"
            onClick={handleCloseLetter}
          />
        )}
      </AnimatePresence>

      {/* Section Heading */}
      <div className="mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-pink-100 text-pink-700 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-3 border border-pink-200"
        >
          <Mail className="w-3.5 h-3.5 text-pink-500" />
          <span>Special Delivery</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-serif text-3xl sm:text-5xl font-bold text-gray-800 tracking-tight mb-2"
        >
          {heading}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-serif italic text-base sm:text-lg text-gray-600"
        >
          {subheading}
        </motion.p>
      </div>

      {/* Animated Envelope Container */}
      <div className="relative max-w-md mx-auto my-6">
        {!isOpen ? (
          <motion.div
            initial={{ scale: 0.95, y: 20 }}
            whileInView={{ scale: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            className="cursor-pointer group select-none"
            onClick={handleOpenLetter}
          >
            {/* Vintage Pastel Envelope */}
            <div className="relative w-full aspect-[4/3] rounded-3xl bg-gradient-to-b from-[#ffe4e8] to-[#fbcfe8] p-6 shadow-polaroid-lg border-2 border-pink-200 flex flex-col items-center justify-center overflow-hidden">
              {/* Envelope Flap Lines */}
              <div
                className="absolute inset-0 border-b-2 border-pink-300/60 pointer-events-none"
                style={{
                  clipPath: 'polygon(0% 0%, 50% 55%, 100% 0%, 100% 100%, 0% 100%)',
                  background: 'linear-gradient(180deg, rgba(255,255,255,0.4) 0%, rgba(254,205,214,0.3) 100%)',
                }}
              />

              {/* Cute Vintage Postage Stamp */}
              <div className="absolute top-4 right-4 border-2 border-dashed border-rose-300 rounded-md p-1.5 bg-white/80 text-[10px] font-mono text-rose-600 rotate-6 shadow-sm select-none flex flex-col items-center">
                <span>💌 AIR MAIL</span>
                <span className="text-[8px] text-pink-400">BESTIE POST</span>
              </div>

              {/* Heart Wax Seal */}
              <motion.div
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-br from-rose-500 to-pink-600 shadow-lg flex items-center justify-center border-2 border-rose-300"
              >
                <Heart className="w-8 h-8 fill-white text-white drop-shadow-sm" />
              </motion.div>

              <span className="relative z-10 font-handwriting text-3xl text-pink-700 font-bold mt-4">
                To: Anjali 🎀
              </span>

              <span className="relative z-10 text-xs text-pink-500 font-medium tracking-wide mt-1">
                Tap to break seal & open
              </span>
            </div>

            {/* Open CTA button */}
            <div className="mt-6">
              <button
                onClick={handleOpenLetter}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-white font-semibold text-base shadow-md hover:shadow-glow-pink bg-gradient-to-r from-pink-500 to-rose-400 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>{openButtonText}</span>
              </button>
            </div>
          </motion.div>
        ) : null}

        {/* Modal Unfolded Letter */}
        <AnimatePresence>
          {isOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.85, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.85, y: 30 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full max-w-xl paper-texture rounded-3xl p-6 sm:p-10 shadow-2xl border-4 border-pink-200/80 my-auto text-left"
              >
                {/* Close corner icon */}
                <button
                  onClick={handleCloseLetter}
                  className="absolute top-4 right-4 p-2 rounded-full bg-pink-100/70 hover:bg-pink-200 text-pink-700 transition-colors"
                  aria-label="Close letter"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Scrapbook Tape at top of letter */}
                <div className="scrapbook-tape" />

                {/* Letter Header */}
                <div className="flex items-center justify-between border-b border-pink-200/80 pb-4 mb-6">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-pink-400 font-semibold">
                      {letterDate}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-pink-700 flex items-center gap-2">
                      <span>{letterTitle}</span>
                    </h3>
                  </div>
                  <Sparkles className="w-6 h-6 text-pink-400 animate-spin" style={{ animationDuration: '6s' }} />
                </div>

                {/* Letter Body in Handwritten / Serif styling */}
                <div className="space-y-4 font-serif text-gray-800 text-base sm:text-lg leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
                  {letterParagraphs.map((paragraph, idx) => (
                    <p
                      key={idx}
                      className={
                        idx === 0
                          ? 'font-handwriting text-3xl text-pink-600 font-bold mb-2'
                          : idx === letterParagraphs.length - 1
                          ? 'font-handwriting text-2xl text-pink-600 font-bold pt-2'
                          : 'text-gray-700 font-serif'
                      }
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Letter Footer Button */}
                <div className="mt-8 pt-4 border-t border-pink-200/80 flex items-center justify-between">
                  <div className="font-handwriting text-xl text-pink-500">
                    Forever & Always 💗
                  </div>
                  <button
                    onClick={handleCloseLetter}
                    className="px-5 py-2 rounded-full bg-pink-500 hover:bg-pink-600 text-white font-medium text-xs sm:text-sm shadow-sm transition-all"
                  >
                    {closeButtonText}
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
