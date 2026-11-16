import React from 'react';

export default function SectionTitle({
  badge,
  title,
  subtitle,
  align = 'left', // Keep all types of headings left-aligned per brand guidelines
  dark = false,
  className = '',
}) {
  return (
    <div className={`w-full mb-8 sm:mb-12 text-left ${className}`}>
      {badge && (
        <span
          className={`inline-flex items-center px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 ${
            dark
              ? 'bg-brand-orange/20 text-brand-orange border border-brand-orange/30'
              : 'bg-brand-orange/10 text-brand-orange border border-brand-orange/20'
          }`}
        >
          {badge}
        </span>
      )}

      {title && (
        <h2
          className={`text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold tracking-tight leading-tight whitespace-normal sm:whitespace-nowrap ${
            dark ? 'text-white' : 'text-brand-navy'
          }`}
        >
          {title}
        </h2>
      )}

      {subtitle && (
        <p
          className={`mt-3 text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl ${
            dark ? 'text-slate-300' : 'text-slate-600'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

