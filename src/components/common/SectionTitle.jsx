import React from 'react';

export default function SectionTitle({
  badge,
  title,
  subtitle,
  align = 'center', // 'center' | 'left'
  dark = false,
  className = '',
}) {
  const isCentered = align === 'center';

  return (
    <div
      className={`max-w-3xl mb-12 sm:mb-16 ${
        isCentered ? 'mx-auto text-center' : 'text-left'
      } ${className}`}
    >
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
          className={`text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight leading-tight ${
            dark ? 'text-white' : 'text-brand-navy'
          }`}
        >
          {title}
        </h2>
      )}

      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            dark ? 'text-slate-300' : 'text-slate-600'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

