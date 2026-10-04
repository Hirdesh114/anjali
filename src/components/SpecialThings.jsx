import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, ChevronDown } from 'lucide-react';
import { BIRTHDAY_CONFIG } from '../data/birthdayData';
import { sound } from '../utils/audioEffects';

export default function SpecialThings({ id }) {
  const { heading, subtitle, items } = BIRTHDAY_CONFIG.specialThings;
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    sound.playHeart();
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id={id} className="relative py-20 px-4 sm:px-6 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-rose-100 text-rose-700 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-3 border border-rose-200"
        >
          <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
          <span>Why You're One In A Million</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-serif text-3xl sm:text-5xl font-bold text-gray-800 tracking-tight mb-3"
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
          {subtitle}
        </motion.p>
      </div>

      {/* Grid of Interactive Heart Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {items.map((item, index) => {
          const isExpanded = expandedId === item.id;

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              onClick={() => toggleExpand(item.id)}
              className={`cursor-pointer rounded-3xl p-6 transition-all duration-300 relative border ${
                isExpanded
                  ? 'bg-white shadow-polaroid-lg border-pink-300 ring-2 ring-pink-300/40 -translate-y-1'
                  : 'bg-white/80 hover:bg-white hover:shadow-soft border-pink-100/90'
              }`}
            >
              {/* Top Row: Icon + Title */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-3xl p-2 rounded-2xl bg-pink-50 border border-pink-100 shadow-sm flex items-center justify-center">
                    {item.icon}
                  </span>
                  <div>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-gray-800">
                      {item.title}
                    </h3>
                    <p className="text-xs text-pink-500 font-medium">
                      Tap to {isExpanded ? 'close' : 'reveal'}
                    </p>
                  </div>
                </div>

                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center transition-transform duration-300 ${
                    isExpanded ? 'rotate-180 bg-pink-500 text-white' : 'bg-pink-100/80 text-pink-600'
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>

              {/* Collapsed view snippet */}
              {!isExpanded && (
                <p className="font-sans text-xs text-gray-500 line-clamp-1 italic">
                  "{item.short}"
                </p>
              )}

              {/* Expanded Detailed Message */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden pt-3 border-t border-pink-100 mt-2"
                  >
                    <p className="font-sans text-sm text-gray-700 leading-relaxed bg-pink-50/60 p-3.5 rounded-2xl border border-pink-100/50">
                      {item.detail}
                    </p>
                    <div className="flex justify-end mt-2">
                      <span className="text-[11px] font-handwriting text-pink-500 flex items-center gap-1">
                        <Sparkles className="w-3 h-3" /> true story!
                      </span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
