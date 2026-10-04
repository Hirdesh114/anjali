import React, { useRef } from 'react';
import FloatingParticles from './components/FloatingParticles';
import MusicPlayer from './components/MusicPlayer';
import Hero from './components/Hero';
import BirthdayReveal from './components/BirthdayReveal';
import BalloonGame from './components/BalloonGame';
import PhotoGallery from './components/PhotoGallery';
import SpecialThings from './components/SpecialThings';
import MemorySection from './components/MemorySection';
import LetterSection from './components/LetterSection';
import OurPhoto from './components/OurPhoto';
import FinalGift from './components/FinalGift';
import BirthdayEnding from './components/BirthdayEnding';

export default function App() {
  const revealRef = useRef(null);
  const galleryRef = useRef(null);
  const endingRef = useRef(null);

  const scrollToReveal = () => {
    revealRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToGallery = () => {
    galleryRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToEnding = () => {
    endingRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen selection:bg-pink-300 selection:text-pink-900">
      {/* Background Floating Hearts & Sparkles */}
      <FloatingParticles />

      {/* Floating Music Player */}
      <MusicPlayer />

      {/* Main Content Sections */}
      <main className="relative z-10 space-y-12 sm:space-y-16 pb-16">
        {/* 1. Opening Screen — “A Surprise For You” */}
        <Hero onOpenSurprise={scrollToReveal} />

        {/* 2. Birthday Reveal */}
        <div ref={revealRef}>
          <BirthdayReveal id="birthday-reveal" />
        </div>

        {/* 3. Interactive Balloon Game */}
        <BalloonGame onComplete={scrollToGallery} />

        {/* 4. “The Girl Behind All These Photos” (Scrapbook Gallery) */}
        <div ref={galleryRef}>
          <PhotoGallery id="photo-gallery" />
        </div>

        {/* 5. “Things That Make You Special” */}
        <SpecialThings id="special-things" />

        {/* 6. “Some Sweet Moments” */}
        <MemorySection id="memory-section" />

        {/* 7. The Envelope / Personal Letter */}
        <LetterSection id="letter-section" />

        {/* 8. Our One Special Photo (Emotional Highlight) */}
        <OurPhoto id="our-photo" />

        {/* 9. “One Last Thing...” (Gift Box) */}
        <FinalGift onGiftOpened={scrollToEnding} />

        {/* 10. FINAL BIRTHDAY SCREEN */}
        <div ref={endingRef}>
          <BirthdayEnding id="birthday-ending" onReplay={scrollToTop} />
        </div>
      </main>
    </div>
  );
}
