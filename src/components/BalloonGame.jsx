import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, RotateCcw } from 'lucide-react';
import confetti from 'canvas-confetti';
import { BIRTHDAY_CONFIG } from '../data/birthdayData';
import { sound } from '../utils/audioEffects';

export default function BalloonGame({ onComplete }) {
  const words = BIRTHDAY_CONFIG.balloonGame.words;
  const [poppedBalloons, setPoppedBalloons] = useState([]);
  const [allPopped, setAllPopped] = useState(false);

  // Floating pastel balloon designs
  const balloonStyles = [
    { color: '#f472b6', bgGradient: 'from-pink-300 to-pink-500', floatDelay: 0, xOffset: -4 },
    { color: '#fb7185', bgGradient: 'from-rose-300 to-rose-500', floatDelay: 0.5, xOffset: 3 },
    { color: '#c084fc', bgGradient: 'from-purple-300 to-pink-400', floatDelay: 1, xOffset: -2 },
    { color: '#ec4899', bgGradient: 'from-pink-400 to-pink-600', floatDelay: 0.3, xOffset: 5 },
    { color: '#f43f5e', bgGradient: 'from-rose-400 to-red-500', floatDelay: 0.8, xOffset: -3 },
  ];

  const handlePop = (index, e) => {
    if (poppedBalloons.includes(index)) return;

    sound.playPop();

    // Spawn tiny confetti at touch/click position
    if (e) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = (rect.left + rect.width / 2) / window.innerWidth;
      const y = (rect.top + rect.height / 2) / window.innerHeight;
      confetti({
        particleCount: 25,
        spread: 45,
        origin: { x, y },
        colors: ['#f472b6', '#fda4af', '#fecdd6', '#ffffff'],
        disableForReducedMotion: true,
      });
    }

    const nextPopped = [...poppedBalloons, index];
    setPoppedBalloons(nextPopped);

    if (nextPopped.length === words.length) {
      setTimeout(() => {
        sound.playCelebration();
        confetti({
          particleCount: 70,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#f472b6', '#ec4899', '#f43f5e', '#fde047'],
          disableForReducedMotion: true,
        });
        setAllPopped(true);
      }, 400);
    }
  };

  const handleReset = () => {
    setPoppedBalloons([]);
    setAllPopped(false);
  };

  return (
    <section className="relative py-16 sm:py-20 px-4 sm:px-6 max-w-3xl mx-auto text-center">
      {/* Background card with soft border */}
      <div className="relative glass-pink rounded-3xl p-6 sm:p-10 border border-pink-200/70 shadow-soft overflow-hidden">
        {/* Decorative corner tag */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-50 border border-pink-200 text-pink-600 text-xs font-semibold mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Interactive Mini Game</span>
        </div>

        <h3 className="font-serif text-2xl sm:text-4xl font-bold text-gray-800 mb-2">
          {BIRTHDAY_CONFIG.balloonGame.heading}
        </h3>
        
        <p className="font-handwriting text-xl sm:text-2xl text-pink-500 mb-8 font-medium">
          {BIRTHDAY_CONFIG.balloonGame.instruction}
        </p>

        {/* Revealed message sentence builder bar */}
        <div className="min-h-[58px] flex flex-wrap items-center justify-center gap-2 mb-10 p-3 rounded-2xl bg-white/70 border border-pink-100 shadow-inner">
          {words.map((item, idx) => {
            const isRevealed = poppedBalloons.includes(idx);
            return (
              <span
                key={idx}
                className={`transition-all duration-500 px-3.5 py-1.5 rounded-xl font-bold text-sm sm:text-base tracking-wide flex items-center gap-1 ${
                  isRevealed
                    ? 'bg-pink-500 text-white shadow-md scale-100 animate-fade-in'
                    : 'bg-pink-100/50 text-transparent select-none scale-90 border border-dashed border-pink-300'
                }`}
              >
                {isRevealed ? item.text : '???'}
              </span>
            );
          })}
        </div>

        {/* Floating Balloons Grid */}
        <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-8 my-6">
          {words.map((item, index) => {
            const isPopped = poppedBalloons.includes(index);
            const style = balloonStyles[index % balloonStyles.length];

            return (
              <div key={index} className="flex flex-col items-center">
                <AnimatePresence mode="wait">
                  {!isPopped ? (
                    <motion.div
                      key="balloon"
                      initial={{ scale: 0.8, y: 10 }}
                      animate={{
                        scale: 1,
                        y: [0, -12, 0],
                        x: [0, style.xOffset, 0],
                      }}
                      transition={{
                        y: {
                          duration: 3 + index * 0.4,
                          repeat: Infinity,
                          ease: 'easeInOut',
                          delay: style.floatDelay,
                        },
                        x: {
                          duration: 4,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        },
                      }}
                      exit={{
                        scale: [1, 1.4, 0],
                        opacity: [1, 0.8, 0],
                        transition: { duration: 0.2 },
                      }}
                      onClick={(e) => handlePop(index, e)}
                      className="cursor-pointer group flex flex-col items-center select-none active:scale-95"
                    >
                      {/* Balloon Body */}
                      <div
                        className={`relative w-16 h-20 sm:w-20 sm:h-24 rounded-[50%_50%_50%_50%_/_40%_40%_60%_60%] bg-gradient-to-br ${style.bgGradient} shadow-md group-hover:shadow-glow-pink transition-all flex items-center justify-center`}
                      >
                        {/* Balloon Shine Highlight */}
                        <div className="absolute top-2 left-3 w-3 h-5 bg-white/50 rounded-full rotate-45 blur-[0.5px]" />
                        
                        <span className="text-white/90 text-xs font-bold tracking-tight drop-shadow-sm">
                          POP ME
                        </span>

                        {/* Balloon Knot */}
                        <div
                          className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-2 rounded-sm"
                          style={{ backgroundColor: style.color }}
                        />
                      </div>

                      {/* Balloon String */}
                      <div className="w-0.5 h-10 bg-pink-300/70 -mt-0.5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="revealed"
                      initial={{ scale: 0, rotate: -15 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: 'spring', stiffness: 350, damping: 20 }}
                      className="w-16 h-20 sm:w-20 sm:h-24 rounded-2xl bg-white border-2 border-pink-300 flex flex-col items-center justify-center p-2 shadow-md"
                    >
                      <span className="text-xl">✨</span>
                      <span className="text-pink-600 font-bold text-xs sm:text-sm text-center leading-tight">
                        {item.text}
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Progress indicator */}
        <p className="text-xs text-pink-400 mt-2 font-sans">
          {poppedBalloons.length} of {words.length} balloons popped
        </p>

        {/* Completion Message & Continue Button */}
        {allPopped && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-8 pt-6 border-t border-pink-100 flex flex-col items-center"
          >
            <p className="font-serif italic text-lg sm:text-xl text-gray-800 mb-5">
              {BIRTHDAY_CONFIG.balloonGame.completionText}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={onComplete}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-white font-semibold shadow-lg hover:shadow-glow-pink bg-gradient-to-r from-pink-500 to-rose-400 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>{BIRTHDAY_CONFIG.balloonGame.continueButton}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={handleReset}
                className="p-3 rounded-full bg-pink-50 border border-pink-200 text-pink-500 hover:bg-pink-100 transition-colors"
                title="Play again"
                aria-label="Play balloon pop game again"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
