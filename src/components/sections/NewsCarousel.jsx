import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { newsData } from '../../data/newsData';

export default function NewsCarousel({ news = newsData }) {
  const scrollRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(25);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const articles = news && news.length > 0 ? news : newsData;

  const updateProgress = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll <= 0) {
      setScrollProgress(100);
      setCanScrollLeft(false);
      setCanScrollRight(false);
      return;
    }
    const percent = Math.min(100, Math.max(10, Math.round((scrollLeft / maxScroll) * 100)));
    setScrollProgress(percent);
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < maxScroll - 10);
  };

  useEffect(() => {
    updateProgress();
    const node = scrollRef.current;
    if (node) {
      node.addEventListener('scroll', updateProgress, { passive: true });
      window.addEventListener('resize', updateProgress);
    }
    return () => {
      if (node) node.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, []);

  const handleScrollLeft = () => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: -380, behavior: 'smooth' });
  };

  const handleScrollRight = () => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: 380, behavior: 'smooth' });
  };

  return (
    <section className="w-full py-4 sm:py-6 bg-white overflow-hidden" aria-label="News and Insights Section">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-4 sm:mb-6">
          <div className="space-y-1.5 sm:space-y-2 max-w-2xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-brand-navy tracking-tight leading-tight">
              NEXAAGEN Insights and Updates
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm lg:text-base font-normal">
              Learn more about our people, innovation and ESG actions.
            </p>
          </div>

          {/* Red-Orange Pill Button: Aligned to the Right */}
          <div className="flex-shrink-0">
            <Link
              to="/news"
              className="inline-flex items-center justify-center font-bold text-white text-xs sm:text-sm px-6 sm:px-7 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:from-[#F4511E] hover:to-[#B71C1C] shadow-sm hover:shadow-md transition-all active:scale-[0.98] whitespace-nowrap"
            >
              <span>View all News and Updates</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Horizontal Carousel Track (Cards slide with peek edges) */}
      <div className="w-full mt-8 sm:mt-12">
        <div
          ref={scrollRef}
          className="flex gap-5 sm:gap-6 lg:gap-8 overflow-x-auto scrollbar-none px-4 sm:px-8 lg:px-12 py-3 scroll-smooth"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {articles.map((item) => (
            <div
              key={item.id}
              className="w-[calc(100vw-2.5rem)] sm:w-[340px] md:w-[380px] lg:w-[420px] min-h-[360px] sm:min-h-[400px] lg:min-h-[420px] rounded-3xl overflow-hidden flex-shrink-0 relative group shadow-md hover:shadow-xl transition-all duration-300 snap-center sm:snap-start"
              style={{ scrollSnapAlign: 'start' }}
            >
              {/* Background Photographic Image with Hover Scale */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />

              {/* Dark Gradient Overlay for Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent pointer-events-none" />

              {/* Bottom Content Card */}
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 lg:p-7 text-white z-10 flex flex-col justify-end space-y-3 sm:space-y-4">
                {/* Article Headline */}
                <h3 className="font-heading font-bold text-white group-hover:text-brand-orange text-lg sm:text-xl lg:text-[21px] leading-snug line-clamp-2 transition-colors">
                  {item.title}
                </h3>

                {/* Bottom Meta Row: Author Avatar, Name, Date + "Read more" link */}
                <div className="flex items-center justify-between pt-1 border-t border-white/20">
                  {/* Left: Avatar & Author / Date */}
                  <div className="flex items-center space-x-2.5">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white text-[#0B1B3D] flex items-center justify-center font-bold text-[11px] sm:text-xs shadow-md">
                      N
                    </div>
                    <div className="leading-tight">
                      <div className="text-xs font-semibold text-white">
                        {item.author || 'NEXAAGEN Team'}
                      </div>
                      <div className="text-[10px] sm:text-[11px] text-slate-300 font-medium">
                        {item.date}
                      </div>
                    </div>
                  </div>

                  {/* Right: "Read more" Underlined Link */}
                  <Link
                    to={`/news/${item.id}`}
                    className="text-xs sm:text-sm font-semibold text-white underline hover:text-brand-orange transition-colors"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Controls Row: Red-Orange Progress Bar + Circular Navigation Arrows */}
      <div className="container-custom mt-6 sm:mt-8">
        <div className="flex items-center justify-between gap-4">
          {/* Progress Indicator Track */}
          <div className="flex-1 max-w-xl h-1 bg-red-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#FF5722] to-[#D8232A] rounded-full transition-all duration-300 ease-out"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>

          {/* Previous / Next Circular Buttons */}
          <div className="flex items-center space-x-2 flex-shrink-0">
            <button
              onClick={handleScrollLeft}
              disabled={!canScrollLeft}
              className={`w-8 h-8 rounded-full border border-orange-200 bg-orange-50/80 hover:bg-orange-100 text-[#D8232A] flex items-center justify-center transition-all duration-200 active:scale-95 shadow-sm ${!canScrollLeft ? 'opacity-40 cursor-not-allowed' : 'hover:scale-105'
                }`}
              aria-label="Previous insights slide"
              title="Previous articles"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleScrollRight}
              disabled={!canScrollRight}
              className={`w-8 h-8 rounded-full border border-orange-200 bg-orange-50/80 hover:bg-orange-100 text-[#D8232A] flex items-center justify-center transition-all duration-200 active:scale-95 shadow-sm ${!canScrollRight ? 'opacity-40 cursor-not-allowed' : 'hover:scale-105'
                }`}
              aria-label="Next insights slide"
              title="Next articles"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
