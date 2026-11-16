import React, { useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

/**
 * DataCentreCustomerStories
 * Directly replicates the "Customer Stories" carousel from the OCS Data Centres page.
 * Left: Fixed headline, description, "Connect with us" CTA, and left/right navigation arrows.
 * Right: Smooth scrollable row of customer story cards with zero visible scrollbar.
 */
export default function DataCentreCustomerStories() {
  const scrollRef = useRef(null);

  const stories = [
    {
      id: 'story-1',
      title: 'Integrated FM for 20 Tier III Data Centres with 100 Percent Uptime',
      category: 'Data Centres',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80',
      linkText: 'Read their story',
      summary: 'Delivering end-to-end critical facility management, predictive mechanical resilience, and automated telemetry across 20 hyperscale facilities globally.',
    },
    {
      id: 'story-2',
      title: 'Technical and Integrated FM Support for a 22,500 sqm Data Centre Launch',
      category: 'Data Centres',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
      linkText: 'Read their story',
      summary: 'Supporting Day-1 commissioning, cleanroom airborne particle decontamination, and 24/7 CDCE engineering presence for a marquee European campus.',
    },
    {
      id: 'story-3',
      title: 'Delivering Critical Facility Management Solutions in Data Centres',
      category: 'Data Centres',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
      linkText: 'Read their story',
      summary: 'Comprehensive dual-path electrical maintenance, ASHRAE thermal envelope tuning, and ISO 14644-1 Class 8 compliance across live technical space.',
    },
    {
      id: 'story-4',
      title: 'Hyperscale Decarbonisation & Waste-Heat Recovery Infrastructure',
      category: 'Data Centres',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
      linkText: 'Read their story',
      summary: 'Slashing estate PUE down to 1.16 while capturing waste heat to supply municipal district heating networks.',
    },
  ];

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollDistance = 420;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollDistance : scrollDistance,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="w-full py-4 sm:py-6 bg-[#FAF9F5] border-y border-slate-200/60 overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Title, Subtitle, CTA Button, and Carousel Navigation Arrows */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-5 sm:space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-heading font-extrabold text-[#0B1B3D] tracking-tight leading-tight">
              Customer Stories
            </h2>

            <p className="text-slate-600 text-xs sm:text-sm lg:text-[15px] font-normal leading-relaxed max-w-md">
              Explore practical applications of predictive maintenance, energy audits, and system monitoring that enhance resilience, efficiency, and operational control across critical environments.
            </p>

            <div className="pt-1">
              <a
                href="#contact-form"
                className="inline-flex items-center justify-center font-bold text-white px-7 py-3.5 rounded-full text-xs sm:text-sm bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:from-[#F4511E] hover:to-[#B71C1C] shadow-md hover:shadow-orange-500/25 transition-all duration-300 ease-out active:scale-[0.98]"
              >
                Connect with us
              </a>
            </div>

            {/* Circular Carousel Navigation Arrows (matching OCS screenshot) */}
            <div className="pt-2 flex items-center space-x-3">
              <button
                onClick={() => handleScroll('left')}
                className="w-11 h-11 rounded-full bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 shadow-sm flex items-center justify-center transition-all duration-200 active:scale-95 focus:outline-none"
                aria-label="Previous customer story"
              >
                <ArrowLeft className="w-4 h-4 text-slate-600" />
              </button>
              <button
                onClick={() => handleScroll('right')}
                className="w-11 h-11 rounded-full bg-white hover:bg-slate-100 text-[#0B1B3D] border-2 border-[#0B1B3D]/80 shadow-sm flex items-center justify-center transition-all duration-200 active:scale-95 focus:outline-none"
                aria-label="Next customer story"
              >
                <ArrowRight className="w-4 h-4 text-[#0B1B3D]" />
              </button>
            </div>
          </div>

          {/* Right Column: Scrollable Card Row (No Visible Scrollbar) */}
          <div className="lg:col-span-8 relative">
            <div
              ref={scrollRef}
              className="flex gap-5 sm:gap-6 overflow-x-auto scrollbar-none no-scrollbar scroll-smooth py-2 px-1"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
              }}
            >
              {stories.map((story) => (
                <div
                  key={story.id}
                  className="flex-shrink-0 w-[285px] sm:w-[330px] lg:w-[360px] bg-white rounded-3xl overflow-hidden border border-slate-200/70 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  {/* Card Image */}
                  <div className="relative aspect-[16/11] overflow-hidden bg-slate-100">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                  </div>

                  {/* Card Body */}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      {/* Top Right Category Tag */}
                      <div className="text-right">
                        <span className="text-xs sm:text-[13px] font-semibold text-slate-800">
                          {story.category}
                        </span>
                      </div>

                      {/* Card Title */}
                      <h3 className="text-base sm:text-[17px] font-heading font-bold text-[#0B1B3D] leading-snug group-hover:text-brand-orange transition-colors mt-2">
                        {story.title}
                      </h3>
                    </div>

                    {/* Bottom "Read their story" Link with Orange Underline */}
                    <div className="pt-4 border-t border-slate-100">
                      <a
                        href="#contact-form"
                        className="inline-block text-xs sm:text-sm font-semibold text-[#FF5722] hover:text-[#D8232A] underline underline-offset-4 decoration-[#FF5722]/60 hover:decoration-[#D8232A] transition-colors"
                      >
                        {story.linkText}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

