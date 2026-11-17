import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function PageHero({
  badge,
  badgeLinkText,
  badgeLinkUrl,
  title,
  description,
  primaryCta,
  secondaryCta,
  image,
  imageAlt,
  stats,
}) {
  return (
    <section className="w-full py-2 sm:py-3 lg:py-4 bg-white overflow-hidden">
      <div className="container-custom">
        {/* Full-bleed Rounded Hero Banner Frame with Reduced Height */}
        <div className="relative w-full rounded-2xl sm:rounded-[28px] lg:rounded-[32px] overflow-hidden min-h-0 sm:min-h-[380px] lg:min-h-[420px] py-4 sm:py-0 flex items-center shadow-lg border border-slate-200/60 bg-slate-900">

          {/* Background Image Layer (Natural, vivid, high-resolution photography) */}
          <div className="absolute inset-0 z-0">
            <img
              src={image}
              alt={imageAlt || title}
              className="w-full h-full object-cover object-center scale-[1.01]"
            />
            {/* Subtle Gradient: dark on mobile for readability, clear/transparent on desktop so photo is fully visible */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20 lg:bg-gradient-to-r lg:from-black/35 lg:via-black/10 lg:to-transparent" />
          </div>

          {/* Floating White Card (Signature OCS Enterprise Design - Compact Proportions) */}
          <div className="relative z-20 w-full p-3 sm:p-5 md:p-6 lg:p-8 flex items-center">
            <div className="w-full max-w-[560px] lg:max-w-[580px] bg-white rounded-2xl sm:rounded-[24px] lg:rounded-[28px] p-5 sm:p-7 md:p-8 lg:p-9 shadow-2xl border border-white/80 relative overflow-hidden">

              {/* OCS Dotted Radial Wave Watermark */}
              <div className="absolute -left-16 top-1/2 -translate-y-1/2 w-80 h-80 pointer-events-none opacity-[0.14] hidden sm:block">
                <svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="150" cy="150" r="40" stroke="#FF5722" strokeWidth="2" strokeDasharray="4 6" />
                  <circle cx="150" cy="150" r="70" stroke="#FF5722" strokeWidth="2" strokeDasharray="5 7" />
                  <circle cx="150" cy="150" r="100" stroke="#FF5722" strokeWidth="2" strokeDasharray="5 8" />
                  <circle cx="150" cy="150" r="130" stroke="#FF5722" strokeWidth="2" strokeDasharray="6 9" />
                  <circle cx="150" cy="150" r="160" stroke="#FF5722" strokeWidth="2" strokeDasharray="6 10" />
                </svg>
              </div>

              <div className="relative z-10 space-y-3 sm:space-y-4 lg:space-y-4">
                {/* Badge + Optional Link Row */}
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm">
                  {badge && (
                    <span className="inline-flex items-center px-3.5 sm:px-4 py-1 rounded-full text-white font-bold text-[11px] sm:text-xs bg-gradient-to-r from-[#FF5722] to-[#D8232A] shadow-sm tracking-wide">
                      {badge}
                    </span>
                  )}
                  {badgeLinkText && badgeLinkUrl && (
                    <Link
                      to={badgeLinkUrl}
                      className="inline-flex items-center font-semibold text-slate-800 hover:text-brand-orange transition-colors group text-xs sm:text-sm"
                    >
                      <span>{badgeLinkText}</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1 text-slate-500 group-hover:text-brand-orange group-hover:translate-x-1 transition-all" />
                    </Link>
                  )}
                </div>

                {/* Main Headline */}
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-heading font-extrabold text-brand-navy tracking-tight leading-snug">
                  {title}
                </h1>

                {/* Description */}
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                  {description}
                </p>

                {/* Optional Stats Highlights */}
                {stats && stats.length > 0 && (
                  <div className="pt-2 grid grid-cols-3 gap-2 sm:gap-3 border-t border-slate-100">
                    {stats.map((s, idx) => (
                      <div key={idx} className="space-y-0.5">
                        <div className="text-base sm:text-xl font-heading font-extrabold text-brand-orange">
                          {s.value}
                        </div>
                        <div className="text-[10px] sm:text-xs text-slate-500 font-medium leading-tight">
                          {s.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* CTA Action Row */}
                {(primaryCta || secondaryCta) && (
                  <div className="pt-1.5 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
                    {primaryCta && (
                      primaryCta.isAnchor ? (
                        <a
                          href={primaryCta.url}
                          className="inline-flex items-center justify-center font-bold text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:from-[#F4511E] hover:to-[#B71C1C] shadow-md hover:shadow-lg transition-all duration-300 active:scale-[0.98] text-center"
                        >
                          <span>{primaryCta.text}</span>
                        </a>
                      ) : (
                        <Link
                          to={primaryCta.url}
                          className="inline-flex items-center justify-center font-bold text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:from-[#F4511E] hover:to-[#B71C1C] shadow-md hover:shadow-lg transition-all duration-300 active:scale-[0.98] text-center"
                        >
                          <span>{primaryCta.text}</span>
                        </Link>
                      )
                    )}

                    {secondaryCta && (
                      secondaryCta.isAnchor ? (
                        <a
                          href={secondaryCta.url}
                          className="inline-flex items-center justify-center font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm border border-slate-200/80 transition-colors text-center"
                        >
                          <span>{secondaryCta.text}</span>
                        </a>
                      ) : (
                        <Link
                          to={secondaryCta.url}
                          className="inline-flex items-center justify-center font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm border border-slate-200/80 transition-colors text-center"
                        >
                          <span>{secondaryCta.text}</span>
                        </Link>
                      )
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

