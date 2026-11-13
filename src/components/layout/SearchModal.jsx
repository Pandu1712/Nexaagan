import React, { useState, useEffect, useMemo } from 'react';
import { Search, X, ArrowRight, Building2, Wrench, FileText, Newspaper } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { sectorsData } from '../../data/sectorsData';
import { servicesData } from '../../data/servicesData';
import { newsData } from '../../data/newsData';
import { caseStudiesData } from '../../data/caseStudiesData';

export default function SearchModal({ isOpen, onClose }) {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  // Aggregate searchable items
  const results = useMemo(() => {
    if (!searchTerm.trim()) return [];
    const query = searchTerm.toLowerCase();

    const matches = [];

    // Search Sectors
    sectorsData.forEach((item) => {
      if (
        item.title.toLowerCase().includes(query) ||
        item.overview.toLowerCase().includes(query) ||
        item.tagline.toLowerCase().includes(query)
      ) {
        matches.push({
          type: 'Sector',
          icon: Building2,
          title: item.title,
          desc: item.tagline,
          link: `/sectors/${item.id}`,
        });
      }
    });

    // Search Services
    servicesData.forEach((item) => {
      if (
        item.title.toLowerCase().includes(query) ||
        item.overview.toLowerCase().includes(query) ||
        item.tagline.toLowerCase().includes(query)
      ) {
        matches.push({
          type: 'Service',
          icon: Wrench,
          title: item.title,
          desc: item.tagline,
          link: `/services/${item.id}`,
        });
      }
    });

    // Search News
    newsData.forEach((item) => {
      if (
        item.title.toLowerCase().includes(query) ||
        item.excerpt.toLowerCase().includes(query)
      ) {
        matches.push({
          type: 'News & Media',
          icon: Newspaper,
          title: item.title,
          desc: item.excerpt,
          link: `/news/${item.id}`,
        });
      }
    });

    // Search Case Studies
    caseStudiesData.forEach((item) => {
      if (
        item.title.toLowerCase().includes(query) ||
        item.summary.toLowerCase().includes(query) ||
        item.client.toLowerCase().includes(query)
      ) {
        matches.push({
          type: 'Case Study',
          icon: FileText,
          title: item.title,
          desc: `${item.client} — ${item.summary}`,
          link: `/sectors/${item.sectorId}`,
        });
      }
    });

    return matches.slice(0, 8);
  }, [searchTerm]);

  const handleSelect = (link) => {
    onClose();
    setSearchTerm('');
    navigate(link);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 sm:px-6">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-brand-navy-dark/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden z-10 border border-slate-100 animate-in fade-in zoom-in-95 duration-200">
        {/* Search Input Bar */}
        <div className="flex items-center px-4 sm:px-6 py-4 border-b border-slate-100">
          <Search className="w-5 h-5 text-brand-orange mr-3 flex-shrink-0" />
          <input
            type="text"
            className="w-full text-base sm:text-lg text-brand-navy placeholder:text-slate-400 focus:outline-none"
            placeholder="Search sectors, services, news, case studies..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            autoFocus
          />
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors ml-2"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Area */}
        <div className="max-h-96 overflow-y-auto p-4 sm:p-6 divide-y divide-slate-100">
          {searchTerm.trim() === '' ? (
            <div className="text-center py-8">
              <p className="text-sm text-slate-400 mb-3">Quick suggestions:</p>
              <div className="flex flex-wrap justify-center gap-2">
                {['Aviation', 'Data Centres', 'Integrated FM', 'Net Zero 2035', 'Healthcare'].map((s) => (
                  <button
                    key={s}
                    onClick={() => setSearchTerm(s)}
                    className="text-xs bg-slate-100 hover:bg-brand-orange hover:text-white text-slate-700 px-3 py-1.5 rounded-full transition-colors"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          ) : results.length > 0 ? (
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                Found {results.length} matching results
              </p>
              {results.map((res, idx) => {
                const Icon = res.icon;
                return (
                  <button
                    key={idx}
                    onClick={() => handleSelect(res.link)}
                    className="w-full text-left p-3 rounded-xl hover:bg-slate-50 transition-colors flex items-start space-x-3 group"
                  >
                    <div className="p-2 bg-brand-navy/5 text-brand-navy rounded-lg group-hover:bg-brand-orange group-hover:text-white transition-colors flex-shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2">
                        <span className="text-xs font-semibold text-brand-orange uppercase">{res.type}</span>
                      </div>
                      <h4 className="text-sm font-semibold text-brand-navy group-hover:text-brand-orange transition-colors truncate">
                        {res.title}
                      </h4>
                      <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">{res.desc}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-brand-orange group-hover:translate-x-1 transition-all flex-shrink-0 mt-2" />
                  </button>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-10">
              <p className="text-slate-600 font-medium">No results found for "{searchTerm}"</p>
              <p className="text-xs text-slate-400 mt-1">Try searching for keywords like "Aviation", "Energy", "Engineering", or "ESG"</p>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <span>Navigate with mouse or keyboard</span>
          <span className="bg-slate-200 px-2 py-0.5 rounded text-[11px] font-mono">ESC to close</span>
        </div>
      </div>
    </div>
  );
}

