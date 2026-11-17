import React, { useState, useEffect, useMemo, useRef } from 'react';
import { 
  Search, 
  X, 
  ArrowRight, 
  Building2, 
  Wrench, 
  FileText, 
  Newspaper,
  CornerDownLeft,
  Sparkles
} from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { sectorsData } from '../../data/sectorsData';
import { servicesData } from '../../data/servicesData';
import { newsData } from '../../data/newsData';
import { caseStudiesData } from '../../data/caseStudiesData';

export default function NavbarSearch({ isOpen, onToggle, onClose, isMobile = false }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('all'); // 'all' | 'services' | 'sectors' | 'cases'
  const [selectedIndex, setSelectedIndex] = useState(0);

  const containerRef = useRef(null);
  const inputRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Close on route change
  useEffect(() => {
    onClose();
    setSearchTerm('');
  }, [location.pathname]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setSearchTerm('');
      setActiveTab('all');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  // Handle click outside to close (desktop only)
  useEffect(() => {
    if (!isOpen || isMobile) return;

    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onClose, isMobile]);

  // Handle ESC key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Search & filter across datasets
  const { allResults, counts } = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();
    const isServiceQuery = q === 'service' || q === 'services' || q === 'ifm';
    const isSectorQuery = q === 'sector' || q === 'sectors' || q === 'vertical' || q === 'verticals';

    const serviceMatches = [];
    const sectorMatches = [];
    const caseMatches = [];
    const newsMatches = [];

    // --- Services ---
    servicesData.forEach((item) => {
      if (!q) {
        serviceMatches.push({
          type: 'Service',
          icon: Wrench,
          badgeColor: 'text-brand-orange bg-orange-50 border-orange-200/80',
          title: item.title,
          shortTitle: item.shortTitle || item.title,
          desc: item.tagline || item.overview,
          link: `/services/${item.id}`,
          matchedReason: item.category,
          score: 10
        });
        return;
      }

      let score = 0;
      let matchedReason = '';

      if (isServiceQuery) {
        score += 100;
        matchedReason = 'Service Practice';
      }

      const title = (item.title || '').toLowerCase();
      const shortTitle = (item.shortTitle || '').toLowerCase();
      const category = (item.category || '').toLowerCase();
      const tagline = (item.tagline || '').toLowerCase();
      const overview = (item.overview || '').toLowerCase();
      const aliases = (item.slugAliases || []).join(' ').toLowerCase();

      if (title.includes(q) || shortTitle.includes(q) || aliases.includes(q)) {
        score += 100;
        matchedReason = 'Direct service match';
      } else if (category.includes(q)) {
        score += 70;
        matchedReason = item.category;
      } else if (tagline.includes(q)) {
        score += 50;
        matchedReason = 'Description match';
      }

      if (item.subServices) {
        for (const sub of item.subServices) {
          const str = typeof sub === 'string' ? sub : (sub.title || '');
          if (str.toLowerCase().includes(q)) {
            score += 65;
            if (!matchedReason) matchedReason = str;
            break;
          }
        }
      }

      if (item.features) {
        for (const f of item.features) {
          const str = `${f.title || ''} ${f.desc || ''}`.toLowerCase();
          if (str.includes(q)) {
            score += 45;
            if (!matchedReason) matchedReason = f.title;
            break;
          }
        }
      }

      if (overview.includes(q)) {
        score += 25;
        if (!matchedReason) matchedReason = 'Overview match';
      }

      if (score > 0) {
        serviceMatches.push({
          type: 'Service',
          icon: Wrench,
          badgeColor: 'text-brand-orange bg-orange-50 border-orange-200/80',
          title: item.title,
          shortTitle: item.shortTitle || item.title,
          desc: item.tagline || item.overview,
          link: `/services/${item.id}`,
          matchedReason,
          score
        });
      }
    });

    // --- Sectors ---
    sectorsData.forEach((item) => {
      if (!q) {
        sectorMatches.push({
          type: 'Sector',
          icon: Building2,
          badgeColor: 'text-brand-navy bg-blue-50 border-blue-200/80',
          title: item.title,
          shortTitle: item.shortTitle || item.title,
          desc: item.tagline || item.overview,
          link: `/sectors/${item.id}`,
          matchedReason: 'Specialist Industry',
          score: 10
        });
        return;
      }

      let score = 0;
      let matchedReason = '';

      if (isSectorQuery) {
        score += 100;
        matchedReason = 'Industry Sector';
      }

      const title = (item.title || '').toLowerCase();
      const shortTitle = (item.shortTitle || '').toLowerCase();
      const tagline = (item.tagline || '').toLowerCase();
      const overview = (item.overview || '').toLowerCase();
      const id = (item.id || '').toLowerCase();

      if (title.includes(q) || shortTitle.includes(q) || id.includes(q)) {
        score += 100;
        matchedReason = 'Direct sector match';
      } else if (tagline.includes(q)) {
        score += 60;
        matchedReason = 'Sector scope';
      }

      if (item.solutions) {
        for (const sol of item.solutions) {
          const str = `${sol.title || ''} ${sol.description || ''}`.toLowerCase();
          if (str.includes(q)) {
            score += 65;
            if (!matchedReason) matchedReason = sol.title;
            break;
          }
        }
      }

      if (overview.includes(q)) {
        score += 25;
        if (!matchedReason) matchedReason = 'Overview match';
      }

      if (score > 0) {
        sectorMatches.push({
          type: 'Sector',
          icon: Building2,
          badgeColor: 'text-brand-navy bg-blue-50 border-blue-200/80',
          title: item.title,
          shortTitle: item.shortTitle || item.title,
          desc: item.tagline || item.overview,
          link: `/sectors/${item.id}`,
          matchedReason,
          score
        });
      }
    });

    // --- Case Studies ---
    caseStudiesData.forEach((item) => {
      if (!q) return;

      let score = 0;
      let matchedReason = '';

      const title = (item.title || '').toLowerCase();
      const client = (item.client || '').toLowerCase();
      const summary = (item.summary || '').toLowerCase();
      const sector = (item.sector || '').toLowerCase();

      if (title.includes(q) || client.includes(q)) {
        score += 90;
        matchedReason = item.client;
      } else if (sector.includes(q)) {
        score += 60;
        matchedReason = item.sector;
      } else if (summary.includes(q)) {
        score += 40;
        matchedReason = 'Project details';
      }

      if (score > 0) {
        caseMatches.push({
          type: 'Case Study',
          icon: FileText,
          badgeColor: 'text-purple-700 bg-purple-50 border-purple-200/80',
          title: item.title,
          shortTitle: item.client,
          desc: `${item.client} — ${item.summary}`,
          link: item.sectorId ? `/sectors/${item.sectorId}` : '/case-studies',
          matchedReason,
          score
        });
      }
    });

    // --- News ---
    newsData.forEach((item) => {
      if (!q) return;

      let score = 0;
      let matchedReason = '';

      const title = (item.title || '').toLowerCase();
      const excerpt = (item.excerpt || '').toLowerCase();
      const category = (item.category || '').toLowerCase();

      if (title.includes(q)) {
        score += 85;
        matchedReason = 'Article title';
      } else if (category.includes(q)) {
        score += 55;
        matchedReason = item.category;
      } else if (excerpt.includes(q)) {
        score += 35;
        matchedReason = 'Article excerpt';
      }

      if (score > 0) {
        newsMatches.push({
          type: 'News',
          icon: Newspaper,
          badgeColor: 'text-emerald-700 bg-emerald-50 border-emerald-200/80',
          title: item.title,
          shortTitle: item.title,
          desc: item.excerpt,
          link: `/news/${item.id}`,
          matchedReason,
          score
        });
      }
    });

    serviceMatches.sort((a, b) => b.score - a.score);
    sectorMatches.sort((a, b) => b.score - a.score);
    caseMatches.sort((a, b) => b.score - a.score);
    newsMatches.sort((a, b) => b.score - a.score);

    const combined = [...serviceMatches, ...sectorMatches, ...caseMatches, ...newsMatches]
      .sort((a, b) => b.score - a.score);

    return {
      allResults: {
        all: combined,
        services: serviceMatches,
        sectors: sectorMatches,
        cases: caseMatches,
        news: newsMatches
      },
      counts: {
        all: combined.length,
        services: serviceMatches.length,
        sectors: sectorMatches.length,
        cases: caseMatches.length,
        news: newsMatches.length
      }
    };
  }, [searchTerm]);

  const currentResults = allResults[activeTab] || [];

  // Reset selected index when active tab or search changes
  useEffect(() => {
    setSelectedIndex(0);
  }, [activeTab, searchTerm]);

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (currentResults.length === 0) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % currentResults.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + currentResults.length) % currentResults.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const target = currentResults[selectedIndex] || currentResults[0];
      if (target) {
        handleSelect(target.link);
      }
    }
  };

  const handleSelect = (link) => {
    onClose();
    setSearchTerm('');
    navigate(link);
  };

  const quickPills = ['Aviation', 'Data Centres', 'Integrated FM', 'HVAC', 'Hospital FM', 'Cleaning'];

  // Mobile Render Content (Inline under navbar, no popup, no dark screen)
  if (isMobile) {
    if (!isOpen) return null;

    return (
      <div className="w-full bg-white border-t border-slate-100 shadow-lg px-3 py-3 animate-in fade-in slide-in-from-top-1 duration-150">
        {/* Search Input Bar */}
        <div className="flex items-center bg-slate-50 border border-slate-200/90 rounded-xl px-3 py-2">
          <Search className="w-4 h-4 text-brand-orange mr-2 flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            className="w-full text-sm text-brand-navy placeholder:text-slate-400 bg-transparent focus:outline-none"
            placeholder="Search services or sectors..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          {searchTerm && (
            <button
              onClick={() => {
                setSearchTerm('');
                inputRef.current?.focus();
              }}
              className="p-1 text-slate-400 hover:text-slate-600 rounded-full"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
          <button
            onClick={onClose}
            className="ml-1 p-1 text-slate-400 hover:text-slate-600 rounded-lg"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-1.5 mt-2 overflow-x-auto no-scrollbar py-1">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold whitespace-nowrap transition-all ${
              activeTab === 'all'
                ? 'bg-brand-navy text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            All ({counts.all})
          </button>
          <button
            onClick={() => setActiveTab('services')}
            className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold whitespace-nowrap transition-all flex items-center space-x-1 ${
              activeTab === 'services'
                ? 'bg-brand-orange text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            <Wrench className="w-3 h-3" />
            <span>Services ({counts.services})</span>
          </button>
          <button
            onClick={() => setActiveTab('sectors')}
            className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold whitespace-nowrap transition-all flex items-center space-x-1 ${
              activeTab === 'sectors'
                ? 'bg-blue-600 text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            <Building2 className="w-3 h-3" />
            <span>Sectors ({counts.sectors})</span>
          </button>
        </div>

        {/* Results List */}
        <div className="mt-2 max-h-60 overflow-y-auto divide-y divide-slate-100">
          {searchTerm.trim() === '' && activeTab === 'all' ? (
            <div className="py-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                Quick Suggestions:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {quickPills.map((p) => (
                  <button
                    key={p}
                    onClick={() => {
                      setSearchTerm(p);
                      inputRef.current?.focus();
                    }}
                    className="text-xs bg-slate-100 hover:bg-brand-orange hover:text-white text-slate-700 px-2.5 py-1 rounded-full font-medium transition-colors"
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>
          ) : currentResults.length > 0 ? (
            currentResults.slice(0, 10).map((res, idx) => {
              const Icon = res.icon;
              return (
                <button
                  key={`${res.type}-${idx}`}
                  onClick={() => handleSelect(res.link)}
                  className="w-full text-left py-2.5 px-2 hover:bg-slate-50 rounded-lg flex items-center justify-between group"
                >
                  <div className="flex items-center space-x-2.5 min-w-0">
                    <div className="p-1.5 rounded-md bg-slate-100 text-slate-600 group-hover:bg-brand-orange group-hover:text-white transition-colors flex-shrink-0">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center space-x-1.5">
                        <span className={`text-[9px] font-bold uppercase px-1.5 py-0.2 rounded border ${res.badgeColor}`}>
                          {res.type}
                        </span>
                        <h5 className="text-xs font-semibold text-brand-navy truncate group-hover:text-brand-orange">
                          {res.shortTitle || res.title}
                        </h5>
                      </div>
                      <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">{res.desc}</p>
                    </div>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-brand-orange flex-shrink-0 ml-2" />
                </button>
              );
            })
          ) : (
            <div className="text-center py-6 text-xs text-slate-500">
              No results found for "{searchTerm}"
            </div>
          )}
        </div>
      </div>
    );
  }

  // Desktop Render: Compact popover anchored right at the search button (No dark screen, no modal)
  return (
    <div className="relative" ref={containerRef}>
      {/* Search Trigger Button */}
      <button
        onClick={onToggle}
        className={`p-2 xl:p-2.5 rounded-xl transition-all ${
          isOpen
            ? 'bg-brand-orange text-white shadow-sm'
            : 'text-slate-600 hover:text-brand-navy hover:bg-slate-100'
        }`}
        title="Search website"
        aria-label="Search"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Search className="w-5 h-5" />}
      </button>

      {/* Small Compact Dropdown Window (Akkade Chinnaga) */}
      {isOpen && (
        <div 
          className="absolute right-0 top-full mt-2 w-80 sm:w-96 md:w-[410px] bg-white rounded-2xl shadow-2xl border border-slate-200/90 z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-150 flex flex-col"
          onKeyDown={handleKeyDown}
        >
          {/* Header Input Area */}
          <div className="flex items-center px-3.5 py-2.5 border-b border-slate-100 bg-slate-50/70">
            <Search className="w-4 h-4 text-brand-orange mr-2.5 flex-shrink-0" />
            <input
              ref={inputRef}
              type="text"
              className="w-full text-xs sm:text-sm text-brand-navy placeholder:text-slate-400 bg-transparent focus:outline-none"
              placeholder="Search services, sectors, capabilities..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button
                onClick={() => {
                  setSearchTerm('');
                  inputRef.current?.focus();
                }}
                className="p-1 text-slate-400 hover:text-slate-600 rounded-full"
                title="Clear"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
            <button
              onClick={onClose}
              className="ml-1 p-1 text-slate-400 hover:text-slate-600 rounded-lg"
              title="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Compact Category Pills */}
          <div className="px-3 py-1.5 bg-white border-b border-slate-100 flex items-center space-x-1.5 overflow-x-auto no-scrollbar">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold whitespace-nowrap transition-all ${
                activeTab === 'all'
                  ? 'bg-brand-navy text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              All ({counts.all})
            </button>

            <button
              onClick={() => setActiveTab('services')}
              className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold whitespace-nowrap transition-all flex items-center space-x-1 ${
                activeTab === 'services'
                  ? 'bg-brand-orange text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <Wrench className="w-3 h-3" />
              <span>Services ({counts.services})</span>
            </button>

            <button
              onClick={() => setActiveTab('sectors')}
              className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold whitespace-nowrap transition-all flex items-center space-x-1 ${
                activeTab === 'sectors'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <Building2 className="w-3 h-3" />
              <span>Sectors ({counts.sectors})</span>
            </button>

            {counts.cases > 0 && (
              <button
                onClick={() => setActiveTab('cases')}
                className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold whitespace-nowrap transition-all flex items-center space-x-1 ${
                  activeTab === 'cases'
                    ? 'bg-purple-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <FileText className="w-3 h-3" />
                <span>Cases ({counts.cases})</span>
              </button>
            )}
          </div>

          {/* Results List */}
          <div className="max-h-72 overflow-y-auto p-2 divide-y divide-slate-100">
            {searchTerm.trim() === '' && activeTab === 'all' ? (
              <div className="p-2 space-y-2.5">
                <div className="flex items-center space-x-1 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  <Sparkles className="w-3 h-3 text-brand-orange" />
                  <span>Quick Suggestions</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {quickPills.map((item) => (
                    <button
                      key={item}
                      onClick={() => {
                        setSearchTerm(item);
                        inputRef.current?.focus();
                      }}
                      className="text-xs bg-slate-100 hover:bg-brand-orange hover:text-white text-slate-700 px-2.5 py-1 rounded-full font-medium transition-colors"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            ) : currentResults.length > 0 ? (
              <div className="space-y-1">
                {currentResults.slice(0, 12).map((res, idx) => {
                  const Icon = res.icon;
                  const isSelected = idx === selectedIndex;

                  return (
                    <button
                      key={`${res.type}-${idx}`}
                      onClick={() => handleSelect(res.link)}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      className={`w-full text-left p-2 rounded-xl transition-all flex items-start space-x-2.5 group ${
                        isSelected
                          ? 'bg-slate-50 border border-brand-orange/40'
                          : 'hover:bg-slate-50 border border-transparent'
                      }`}
                    >
                      <div className={`p-1.5 rounded-lg flex-shrink-0 transition-colors mt-0.5 ${
                        res.type === 'Service'
                          ? 'bg-orange-100 text-brand-orange group-hover:bg-brand-orange group-hover:text-white'
                          : res.type === 'Sector'
                          ? 'bg-blue-100 text-brand-navy group-hover:bg-brand-navy group-hover:text-white'
                          : 'bg-purple-100 text-purple-700 group-hover:bg-purple-700 group-hover:text-white'
                      }`}>
                        <Icon className="w-3.5 h-3.5" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-1.5">
                          <span className={`text-[9px] font-bold uppercase px-1.5 py-0.2 rounded border ${res.badgeColor}`}>
                            {res.type}
                          </span>
                          {res.matchedReason && (
                            <span className="text-[10px] text-slate-400 truncate max-w-[170px]">
                              • {res.matchedReason}
                            </span>
                          )}
                        </div>
                        <h5 className="text-xs font-semibold text-brand-navy truncate group-hover:text-brand-orange transition-colors mt-0.5">
                          {res.shortTitle || res.title}
                        </h5>
                        <p className="text-[11px] text-slate-500 line-clamp-1 leading-normal">
                          {res.desc}
                        </p>
                      </div>

                      <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-brand-orange flex-shrink-0 self-center ml-1" />
                    </button>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-8 px-3">
                <p className="text-xs font-semibold text-slate-600">
                  No results for "{searchTerm}"
                </p>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  Try "HVAC", "Aviation", "Cleaning", "Data Centres"
                </p>
              </div>
            )}
          </div>

          {/* Footer Bar */}
          <div className="px-3 py-1.5 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
            <span className="flex items-center">
              <CornerDownLeft className="w-3 h-3 mr-1" /> Enter to select
            </span>
            <span className="font-mono text-[10px] bg-slate-200/70 text-slate-600 px-1.5 py-0.2 rounded">
              ESC
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

