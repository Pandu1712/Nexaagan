import React, { useState, useEffect } from 'react';
import { Palette, Check, Sparkles } from 'lucide-react';

const themes = [
  {
    id: 'blue',
    name: 'Light Sky Blue',
    bgCode: '#F0F7FD',
    accent: '#0284C7',
    desc: 'Crisp, modern enterprise corporate harmony (Default)'
  },
  {
    id: 'yellow',
    name: 'Butter Yellow',
    bgCode: '#FEF9E7',
    accent: '#D97706',
    desc: 'Warm, elegant cream ambiance'
  },
  {
    id: 'white',
    name: 'Pure White',
    bgCode: '#FFFFFF',
    accent: '#64748B',
    desc: 'Classic clean white canvas'
  }
];

export default function ThemeSwitcher() {
  const [currentTheme, setCurrentTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('nexaagen-theme') || 'blue';
    }
    return 'blue';
  });

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Apply theme attribute to html and body
    document.documentElement.setAttribute('data-theme', currentTheme);
    document.body.setAttribute('data-theme', currentTheme);
    localStorage.setItem('nexaagen-theme', currentTheme);
  }, [currentTheme]);

  const selectTheme = (themeId) => {
    setCurrentTheme(themeId);
    document.documentElement.setAttribute('data-theme', themeId);
    document.body.setAttribute('data-theme', themeId);
    localStorage.setItem('nexaagen-theme', themeId);
  };

  return (
    <div className="fixed bottom-6 left-6 z-40 flex flex-col items-start select-none">
      {/* Expanded Theme Selection Menu */}
      {isOpen && (
        <div className="mb-3 w-72 max-w-[calc(100vw-3rem)] bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-2xl border border-slate-200/90 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-slate-100">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-brand-orange" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-800">Background Tone</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-slate-600 text-xs px-1.5 py-0.5 rounded hover:bg-slate-100 transition-colors"
            >
              ✕
            </button>
          </div>

          <div className="space-y-1.5">
            {themes.map((t) => {
              const active = currentTheme === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => selectTheme(t.id)}
                  className={`w-full flex items-center justify-between p-2 rounded-xl text-left transition-all ${
                    active
                      ? 'bg-slate-100/90 shadow-xs ring-1 ring-slate-300'
                      : 'hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center space-x-2.5">
                    <span
                      className="w-5 h-5 rounded-full border border-slate-300/80 shadow-inner flex items-center justify-center shrink-0"
                      style={{ backgroundColor: t.bgCode }}
                    >
                      {active && <Check className="w-3 h-3 text-slate-800 stroke-[3]" />}
                    </span>
                    <div>
                      <div className="text-xs font-semibold text-slate-900 leading-tight flex items-center gap-1.5">
                        {t.name}
                        {t.id === 'blue' && (
                          <span className="text-[10px] font-medium text-sky-700 bg-sky-100 px-1.5 py-0.2 rounded-full">
                            Recommended
                          </span>
                        )}
                      </div>
                      <div className="text-[10px] text-slate-500 leading-tight mt-0.5">
                        {t.desc}
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Floating Toggle Pill Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center space-x-2 bg-white/95 hover:bg-white backdrop-blur-md px-3.5 py-2 rounded-full shadow-lg hover:shadow-xl border border-slate-200/90 transition-all duration-200 active:scale-95"
        title="Toggle Background Theme (Light Sky Blue / Butter Yellow)"
        aria-label="Toggle background theme"
      >
        <div className="relative flex items-center justify-center">
          <Palette className="w-4 h-4 text-brand-orange group-hover:rotate-12 transition-transform duration-300" />
        </div>
        <div className="flex items-center space-x-1.5 text-xs font-semibold text-slate-700">
          <span>Theme:</span>
          <span className="capitalize font-bold text-slate-900 flex items-center gap-1">
            <span
              className="inline-block w-2.5 h-2.5 rounded-full border border-slate-300"
              style={{
                backgroundColor:
                  currentTheme === 'blue'
                    ? '#F0F7FD'
                    : currentTheme === 'yellow'
                    ? '#FEF9E7'
                    : '#FFFFFF'
              }}
            />
            {currentTheme === 'blue'
              ? 'Sky Blue'
              : currentTheme === 'yellow'
              ? 'Butter Yellow'
              : 'White'}
          </span>
        </div>
      </button>
    </div>
  );
}
