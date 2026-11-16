import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { heroSlides } from '../../data/heroSlides';

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const timerRef = useRef(null);

  const totalSlides = heroSlides.length;
  const current = heroSlides[currentSlide];

  // Minimum swipe distance in px to register touch swipe
  const minSwipeDistance = 50;

  // Auto-play timer: 6 seconds per slide, paused on hover
  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 6000);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [currentSlide, isPaused, totalSlides]);

  const handlePrev = (e) => {
    e?.stopPropagation();
    if (timerRef.current) clearTimeout(timerRef.current);
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e?.stopPropagation();
    if (timerRef.current) clearTimeout(timerRef.current);
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const handleDotClick = (index) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setCurrentSlide(index);
  };

  // Touch Swipe Handlers for mobile & tablet
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };

  // Counter format: "01/04"
  const counterFormatted = `${current.number}/${totalSlides < 10 ? `0${totalSlides}` : totalSlides}`;

  return (
    <section
      className="w-full py-2 sm:py-4 lg:py-6 bg-white overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      aria-label="Homepage Featured Hero Carousel"
    >
      <div className="container-custom">
        {/* Full-width Rounded Hero Frame with Shadow & Border */}
        <div className="relative w-full rounded-2xl sm:rounded-[32px] lg:rounded-[40px] overflow-hidden min-h-[540px] sm:min-h-[600px] lg:min-h-[660px] flex items-center shadow-xl border border-slate-200/60 bg-brand-navy">
          
          {/* Background Images Layer with Smooth Framer Motion Crossfade */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <AnimatePresence initial={false}>
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
                className="absolute inset-0 w-full h-full"
              >
                <img
                  src={current.image}
                  alt={current.imageAlt}
                  className="w-full h-full object-cover object-center"
                />
              </motion.div>
            </AnimatePresence>

            {/* Dark Subtle Image Overlay for Text Readability directly on background */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/20 lg:bg-gradient-to-r lg:from-brand-navy-dark/85 lg:via-brand-navy-dark/40 lg:to-transparent pointer-events-none" />
          </div>

          {/* Content Positioned on the Left (Directly on Image, No White Box) */}
          <div className="relative z-20 w-full p-5 sm:p-8 md:p-12 lg:p-16 flex items-center">
            <div className="w-full max-w-[680px] lg:max-w-[760px]">

              {/* Framer Motion Animated Slide Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="space-y-4 sm:space-y-5 lg:space-y-6"
                >
                  {/* Top Row: Category Badge */}
                  <div>
                    {/* Small Category Badge */}
                    <span className="inline-flex items-center px-4 py-1.5 rounded-full text-white font-bold text-[11px] sm:text-xs bg-gradient-to-r from-[#FF5722] to-[#D8232A] shadow-md shadow-orange-500/20 uppercase tracking-wider">
                      {current.badge}
                    </span>
                  </div>

                  {/* Large Bold Heading */}
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-heading font-extrabold text-white tracking-tight leading-[1.15] drop-shadow-md">
                    {current.title}
                  </h1>

                  {/* Description Paragraph */}
                  <p className="text-slate-200 text-sm sm:text-base lg:text-lg leading-relaxed font-normal max-w-xl drop-shadow-sm">
                    {current.description}
                  </p>

                  {/* Action Row: Primary CTA Button + Circular Navigation Arrows */}
                  <div className="pt-2 sm:pt-4 flex flex-wrap sm:flex-nowrap items-center justify-between gap-4">
                    {/* Primary CTA Button */}
                    <Link
                      to={current.primaryCta.url}
                      className="inline-flex items-center justify-center font-bold text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-xs sm:text-sm bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:from-[#F4511E] hover:to-[#B71C1C] shadow-xl hover:shadow-orange-500/30 transition-all duration-300 ease-out active:scale-[0.98] whitespace-nowrap flex-shrink-0"
                    >
                      <span>{current.primaryCta.text}</span>
                    </Link>

                    {/* Previous and Next Navigation Buttons (Frosted Glass on Dark Image) */}
                    <div className="flex items-center space-x-2 flex-shrink-0">
                      <button
                        onClick={handlePrev}
                        className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-white/20 bg-white/10 hover:bg-white/25 text-white flex items-center justify-center shadow-lg backdrop-blur-md transition-all duration-200 active:scale-95 focus:outline-none"
                        aria-label="Previous slide"
                        title="Previous slide"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        onClick={handleNext}
                        className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-white/20 bg-white/10 hover:bg-white/25 text-white flex items-center justify-center shadow-lg backdrop-blur-md transition-all duration-200 active:scale-95 focus:outline-none"
                        aria-label="Next slide"
                        title="Next slide"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Slide Indicators & Current Slide Counter (01/04) */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/15">
                    {/* Four Slide Indicators */}
                    <div className="flex items-center space-x-2.5" role="tablist" aria-label="Slide indicators">
                      {heroSlides.map((s, dotIdx) => (
                        <button
                          key={s.id}
                          onClick={() => handleDotClick(dotIdx)}
                          className={`h-2 rounded-full transition-all duration-300 focus:outline-none ${
                            dotIdx === currentSlide
                              ? 'w-8 sm:w-10 bg-brand-orange shadow-md shadow-orange-500/50'
                              : 'w-2.5 bg-white/30 hover:bg-white/60'
                          }`}
                          aria-label={`Go to slide ${dotIdx + 1}: ${s.badge}`}
                          aria-selected={dotIdx === currentSlide}
                          role="tab"
                        />
                      ))}
                    </div>

                    {/* Current Slide Counter: 01/04 */}
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                      <span className="text-xs font-mono font-bold text-white tracking-widest">
                        {counterFormatted}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
