import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';

export default function SolutionsTabs({
  title = "Targeted Sector Solutions",
  subtitle = "Explore our dedicated service capabilities designed to meet the rigorous operational standards of international enterprise estates.",
  solutions = [],
  sectorName = "this sector"
}) {
  const [activeTab, setActiveTab] = useState(0);

  if (!solutions || solutions.length === 0) return null;

  const current = solutions[activeTab] || solutions[0];
  const isImageRight = activeTab % 2 === 0; // Alternating layout per tab

  return (
    <section className="section-padding bg-slate-50/60 border-y border-slate-100">
      <div className="container-custom">
        {/* Section Header */}
        <SectionTitle
          badge="Tailored Solutions"
          title={title}
          subtitle={subtitle}
          align="left"
        />

        {/* Tab Navigation (Left-aligned Single-Line Row) */}
        <div className="mb-10 flex justify-start w-full">
          <div className="flex items-center justify-start gap-2 p-1.5 bg-white rounded-2xl border border-slate-200/80 shadow-sm w-full overflow-x-auto no-scrollbar">
            {solutions.map((sol, idx) => {
              const isActive = activeTab === idx;
              return (
                <button
                  key={sol.id || idx}
                  onClick={() => setActiveTab(idx)}
                  className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center space-x-2 whitespace-nowrap ${
                    isActive
                      ? 'bg-brand-navy text-white shadow-md'
                      : 'text-slate-600 hover:text-brand-navy hover:bg-slate-100'
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full ${
                      isActive ? 'bg-brand-orange' : 'bg-slate-300'
                    }`}
                  />
                  <span>{sol.tabName}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content Panel (Alternating Image & Content Layouts) */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-14 shadow-card-subtle border border-slate-100 transition-all duration-300">
          <div
            className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center ${
              isImageRight ? '' : 'lg:flex-row-reverse'
            }`}
          >
            {/* Content Column */}
            <div className={`lg:col-span-7 space-y-6 ${isImageRight ? 'order-1' : 'order-1 lg:order-2'}`}>
              <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-brand-orange/10 text-brand-orange">
                <span>{current.tabName}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-heading font-bold text-brand-navy leading-snug">
                {current.title}
              </h3>

              <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
                {current.description}
              </p>

              {/* Deliverables & Benefits as Bullet Points */}
              <div className="pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-brand-navy mb-3">
                  Key Scope Deliverables & Benefits
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {current.deliverables?.map((del, dIdx) => (
                    <div key={dIdx} className="flex items-start space-x-2.5">
                      <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-700 leading-snug">
                        {del}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Metrics or KPI Callout */}
              {current.metrics && (
                <div className="p-4 rounded-2xl bg-brand-navy/5 border border-brand-navy/10 flex items-center space-x-3">
                  <ShieldCheck className="w-5 h-5 text-brand-navy flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-brand-navy">
                    Operational Benchmark: {current.metrics}
                  </span>
                </div>
              )}

              {/* Action Button */}
              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  to={`/contact?sector=${encodeURIComponent(sectorName)}&solution=${encodeURIComponent(current.tabName)}`}
                  className="btn-gradient text-sm py-3 px-6"
                >
                  <span>Request Solution Proposal</span>
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Link>
                <Link
                  to="/services"
                  className="btn-outline text-sm py-3 px-6"
                >
                  View Related Services
                </Link>
              </div>
            </div>

            {/* Image Column */}
            <div className={`lg:col-span-5 ${isImageRight ? 'order-2' : 'order-2 lg:order-1'}`}>
              <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] group">
                <img
                  src={current.image}
                  alt={current.title}
                  className="w-full h-full object-cover card-img-zoom"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/70 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-brand-orange block">
                    NEXAAGEN Operational Delivery
                  </span>
                  <span className="text-sm font-medium text-white/95 line-clamp-1">
                    {current.tabName} in action
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

