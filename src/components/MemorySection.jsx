import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Calendar, Heart, Bookmark } from 'lucide-react';
import { BIRTHDAY_CONFIG } from '../data/birthdayData';

export default function MemorySection({ id }) {
  const { heading, subtitle, moments } = BIRTHDAY_CONFIG.sweetMoments;

  return (
    <section id={id} className="relative py-20 px-4 sm:px-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-pink-100 text-pink-700 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-3 border border-pink-200"
        >
          <Bookmark className="w-3.5 h-3.5 text-pink-500" />
          <span>Scrapbook Journal</span>
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

      {/* Scrapbook Timeline */}
      <div className="relative">
        {/* Central Winding Dashed Line */}
        <div className="absolute left-4 sm:left-1/2 top-4 bottom-8 w-0.5 -translate-x-1/2 border-l-2 border-dashed border-pink-300 pointer-events-none" />

        <div className="space-y-12 sm:space-y-16">
          {moments.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`relative flex flex-col sm:flex-row items-center gap-6 sm:gap-10 ${
                  isEven ? 'sm:flex-row' : 'sm:flex-row-reverse'
                }`}
              >
                {/* Timeline Center Badge / Heart Pin */}
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center w-8 h-8 rounded-full bg-white border-2 border-pink-400 shadow-md">
                  <Heart className="w-4 h-4 fill-pink-500 text-pink-500" />
                </div>

                {/* Photo Side */}
                <div className="w-full sm:w-1/2 pl-12 sm:pl-0 flex justify-center sm:justify-end">
                  <div
                    className={`w-full max-w-[270px] bg-white p-3.5 pb-4 rounded-2xl polaroid-shadow border border-pink-100 transform ${
                      isEven ? '-rotate-2' : 'rotate-2'
                    } hover:rotate-0 transition-transform duration-300`}
                  >
                    <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-pink-50">
                      <img
                        src={item.image}
                        alt={item.quote}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = "/images/bestie/bestie1.jpg";
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Note / Text Content Side */}
                <div
                  className={`w-full sm:w-1/2 pl-12 sm:pl-0 ${
                    isEven ? 'sm:text-left' : 'sm:text-right'
                  }`}
                >
                  <div className="inline-block bg-white/90 p-5 rounded-2xl border border-pink-100/90 shadow-soft max-w-sm">
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider text-pink-600 bg-pink-50 px-2.5 py-0.5 rounded-full mb-2">
                      <Calendar className="w-3 h-3" />
                      {item.tag}
                    </span>

                    <h3 className="font-handwriting text-2xl sm:text-3xl text-pink-600 font-bold mb-2">
                      {item.quote}
                    </h3>

                    <p className="font-sans text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {item.description}
                    </p>

                    <div className="mt-3 flex items-center gap-1 text-[11px] text-pink-400">
                      <Sparkles className="w-3 h-3" />
                      <span>{item.date}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
