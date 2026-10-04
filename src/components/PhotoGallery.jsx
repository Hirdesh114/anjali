import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart, Sparkles, ZoomIn, Camera, Pin } from 'lucide-react';
import { BIRTHDAY_CONFIG } from '../data/birthdayData';
import { sound } from '../utils/audioEffects';

export default function PhotoGallery({ id }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activePhoto, setActivePhoto] = useState(null);
  const [heartLikes, setHeartLikes] = useState({});

  const { heading, subtitle, categories, photos } = BIRTHDAY_CONFIG.gallery;

  const filteredPhotos = selectedCategory === 'all'
    ? photos
    : photos.filter((p) => p.category === selectedCategory);

  const handleOpenPhoto = (photo) => {
    sound.playChime();
    setActivePhoto(photo);
  };

  const handleLikePhoto = (photoId, e) => {
    e.stopPropagation();
    sound.playHeart();
    setHeartLikes((prev) => ({
      ...prev,
      [photoId]: (prev[photoId] || 0) + 1,
    }));
  };

  return (
    <section id={id} className="relative py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-pink-100 text-pink-700 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-3 border border-pink-200"
        >
          <Camera className="w-3.5 h-3.5 text-pink-500" />
          <span>Scrapbook Collection</span>
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

        {/* Category Pills */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-2 mt-8"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 shadow-sm ${
                selectedCategory === cat.id
                  ? 'bg-pink-500 text-white shadow-pink-300/50 scale-105'
                  : 'bg-white/80 text-gray-700 hover:bg-pink-50 border border-pink-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>
      </div>

      {/* Scrapbook Staggered / Rotated Layout (Anti-Grid) */}
      <div className="relative pt-6 pb-12 flex flex-wrap items-center justify-center gap-8 sm:gap-12">
        {filteredPhotos.map((photo, index) => {
          const rotationStyle = photo.rotation || (index % 2 === 0 ? -2.5 : 3);
          const likes = heartLikes[photo.id] || 0;

          return (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.04, rotate: 0, zIndex: 20 }}
              style={{ transform: `rotate(${rotationStyle}deg)` }}
              onClick={() => handleOpenPhoto(photo)}
              className="relative cursor-pointer group w-full max-w-[290px] sm:max-w-[320px] transition-all duration-300"
            >
              {/* Scrapbook Tape / Pinned Clip Accent */}
              {photo.tapeStyle === 'left' && <div className="scrapbook-tape-left" />}
              {photo.tapeStyle === 'right' && <div className="scrapbook-tape-right" />}
              {(!photo.tapeStyle || photo.tapeStyle === 'center') && <div className="scrapbook-tape" />}

              {/* Polaroid Frame */}
              <div className="bg-white p-4 pb-6 rounded-2xl polaroid-shadow border border-pink-100/80 group-hover:shadow-polaroid-lg transition-shadow">
                {/* Photo Image */}
                <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-pink-50">
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = "/images/bestie/bestie1.jpg";
                    }}
                  />

                  {/* Hover magnifying hint */}
                  <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                    <span className="p-2.5 rounded-full bg-white/30 backdrop-blur-md">
                      <ZoomIn className="w-5 h-5 text-white" />
                    </span>
                  </div>

                  {/* Corner Category Tag */}
                  <span className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-medium text-pink-600 shadow-sm">
                    {photo.tag}
                  </span>
                </div>

                {/* Handwritten Style Caption */}
                <div className="pt-4 text-center">
                  <h4 className="font-handwriting text-xl sm:text-2xl text-gray-800 mb-1 leading-snug group-hover:text-pink-600 transition-colors">
                    {photo.title}
                  </h4>
                  <p className="font-sans text-xs text-gray-500 leading-relaxed px-1 line-clamp-2">
                    {photo.caption}
                  </p>

                  {/* Like Button on Polaroid */}
                  <div className="mt-3 flex items-center justify-center gap-2">
                    <button
                      onClick={(e) => handleLikePhoto(photo.id, e)}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-50 hover:bg-pink-100 text-pink-600 text-xs font-medium transition-colors"
                      title="Send love"
                    >
                      <Heart className={`w-3.5 h-3.5 ${likes > 0 ? 'fill-pink-500 text-pink-500' : 'text-pink-400'}`} />
                      <span>{likes > 0 ? `${likes} love` : 'Love this'}</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activePhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActivePhoto(null)}
            className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-lg w-full bg-white rounded-3xl overflow-hidden shadow-2xl p-4 sm:p-6 border border-pink-100"
            >
              {/* Close Button */}
              <button
                onClick={() => setActivePhoto(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white text-gray-700 shadow-md transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Fullscreen Photo Container */}
              <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-pink-50 mb-4">
                <img
                  src={activePhoto.src}
                  alt={activePhoto.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Caption & Story in Lightbox */}
              <div className="text-center px-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-pink-500 bg-pink-50 px-3 py-1 rounded-full">
                  {activePhoto.tag}
                </span>

                <h3 className="font-serif text-2xl font-bold text-gray-800 mt-2 mb-1">
                  {activePhoto.title}
                </h3>

                <p className="font-handwriting text-xl text-gray-600 leading-snug">
                  {activePhoto.caption}
                </p>

                {/* Love reaction button in modal */}
                <div className="mt-4 flex items-center justify-center gap-3">
                  <button
                    onClick={(e) => handleLikePhoto(activePhoto.id, e)}
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-pink-500 hover:bg-pink-600 text-white font-medium text-sm shadow-md transition-all active:scale-95"
                  >
                    <Heart className="w-4 h-4 fill-white" />
                    <span>Send Love ({heartLikes[activePhoto.id] || 0})</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
