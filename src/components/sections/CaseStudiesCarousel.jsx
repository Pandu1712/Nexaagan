import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight, Building, CheckCircle2 } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';

export default function CaseStudiesCarousel({
  title = "Proven Client Success",
  subtitle = "Discover how our integrated operational models deliver measurable performance improvements and verified cost efficiencies.",
  caseStudies = [],
}) {
  const [startIndex, setStartIndex] = useState(0);

  if (!caseStudies || caseStudies.length === 0) return null;

  const total = caseStudies.length;
  // Display 2 or 3 items depending on screen
  const visibleCount = 2; // default page step

  const handlePrev = () => {
    setStartIndex((prev) => (prev === 0 ? Math.max(0, total - 1) : prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev >= total - 1 ? 0 : prev + 1));
  };

  return (
    <section className="section-padding bg-transparent border-y border-slate-200/60">
      <div className="container-custom">
        {/* Section Title with Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 bg-brand-orange/10 text-brand-orange border border-brand-orange/20">
              Verified Case Studies
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-brand-navy tracking-tight leading-tight">
              {title}
            </h2>
            <p className="mt-3 text-slate-600 text-base leading-relaxed">
              {subtitle}
            </p>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center space-x-2 flex-shrink-0">
            <button
              onClick={handlePrev}
              className="w-8 h-8 rounded-full bg-white hover:bg-brand-navy text-brand-navy hover:text-white border border-slate-200 shadow-sm flex items-center justify-center transition-all duration-200 active:scale-95"
              aria-label="Previous case study"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="w-8 h-8 rounded-full bg-white hover:bg-brand-navy text-brand-navy hover:text-white border border-slate-200 shadow-sm flex items-center justify-center transition-all duration-200 active:scale-95"
              aria-label="Next case study"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Carousel Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((cs, idx) => {
            return (
              <div
                key={cs.id || idx}
                className="bg-white rounded-3xl overflow-hidden shadow-card-subtle hover:shadow-card-hover border border-slate-100 transition-all duration-300 flex flex-col group"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={cs.image}
                    alt={cs.title}
                    className="w-full h-full object-cover card-img-zoom"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-brand-navy/90 backdrop-blur-sm text-white text-[11px] font-semibold px-3 py-1 rounded-full">
                    {cs.category || cs.sector}
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-semibold text-brand-orange uppercase tracking-wider block mb-1">
                      {cs.client}
                    </span>
                    <h3 className="text-xl font-heading font-bold text-brand-navy group-hover:text-brand-orange transition-colors line-clamp-2 leading-snug">
                      {cs.title}
                    </h3>
                    <p className="text-sm text-slate-600 mt-3 line-clamp-3 leading-relaxed">
                      {cs.summary || cs.description}
                    </p>

                    {/* Key Results Badges */}
                    {cs.results && (
                      <div className="mt-4 pt-4 border-t border-slate-100 space-y-1.5">
                        {cs.results.slice(0, 2).map((res, rIdx) => (
                          <div key={rIdx} className="flex items-center text-xs text-slate-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mr-1.5 flex-shrink-0" />
                            <span className="font-medium truncate">{res}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Read More Link */}
                  <div className="pt-6 mt-6 border-t border-slate-100">
                    <Link
                      to={cs.sectorId ? `/sectors/${cs.sectorId}` : '/sectors'}
                      className="inline-flex items-center text-sm font-bold text-brand-orange hover:text-red-700 transition-colors group/link"
                    >
                      <span>Read Case Study</span>
                      <ArrowRight className="w-4 h-4 ml-1.5 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

