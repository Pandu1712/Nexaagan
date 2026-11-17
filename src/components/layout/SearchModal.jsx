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
  Sparkles,
  SlidersHorizontal,
  CheckCircle2
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { sectorsData } from '../../data/sectorsData';
import { servicesData } from '../../data/servicesData';
import { newsData } from '../../data/newsData';
import { caseStudiesData } from '../../data/caseStudiesData';

export default function SearchModal({ isOpen, onClose }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('all'); // 'all' | 'services' | 'sectors' | 'cases' | 'news'
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);
  const resultsContainerRef = useRef(null);
  const navigate = useNavigate();

  // Reset state when modal opens or closes
  useEffect(() => {
    if (isOpen) {
      setSearchTerm('');
      setActiveTab('all');
      setSelectedIndex(0);
      document.body.style.overflow = 'hidden';
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  // Handle keyboard events (ESC, Arrow keys, Enter)
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

  // Aggregate and search across all datasets
  const { allResults, counts } = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();
    const isServiceQuery = q === 'service' || q === 'services' || q === 'ifm';
    const isSectorQuery = q === 'sector' || q === 'sectors' || q === 'vertical' || q === 'verticals';

    const serviceMatches = [];
    const sectorMatches = [];
    const caseMatches = [];
    const newsMatches = [];

    // --- Search Services ---
    servicesData.forEach((item) => {
      if (!q) {
        serviceMatches.push({
          type: 'Service',
          icon: Wrench,
          badgeColor: 'bg-orange-50 text-brand-orange border-orange-200/80',
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
        matchedReason = `Category: ${item.category}`;
      } else if (tagline.includes(q)) {
        score += 50;
        matchedReason = 'Matched description';
      }

      // Check subServices
      if (item.subServices) {
        for (const sub of item.subServices) {
          const str = typeof sub === 'string' ? sub : (sub.title || '');
          if (str.toLowerCase().includes(q)) {
            score += 65;
            if (!matchedReason) matchedReason = `Sub-service: "${str}"`;
            break;
          }
        }
      }

      // Check features
      if (item.features) {
        for (const f of item.features) {
          const str = `${f.title || ''} ${f.desc || ''}`.toLowerCase();
          if (str.includes(q)) {
            score += 45;
            if (!matchedReason) matchedReason = `Feature: "${f.title}"`;
            break;
          }
        }
      }

      // Check benefits
      if (item.benefits) {
        for (const b of item.benefits) {
          if (typeof b === 'string' && b.toLowerCase().includes(q)) {
            score += 35;
            if (!matchedReason) matchedReason = 'Matched key benefit';
            break;
          }
        }
      }

      if (overview.includes(q)) {
        score += 25;
        if (!matchedReason) matchedReason = 'Matched service overview';
      }

      if (score > 0) {
        serviceMatches.push({
          type: 'Service',
          icon: Wrench,
          badgeColor: 'bg-orange-50 text-brand-orange border-orange-200/80',
          title: item.title,
          shortTitle: item.shortTitle || item.title,
          desc: item.tagline || item.overview,
          link: `/services/${item.id}`,
          matchedReason,
          score
        });
      }
    });

    // --- Search Sectors ---
    sectorsData.forEach((item) => {
      if (!q) {
        sectorMatches.push({
          type: 'Sector',
          icon: Building2,
          badgeColor: 'bg-blue-50 text-brand-navy border-blue-200/80',
          title: item.title,
          shortTitle: item.shortTitle || item.title,
          desc: item.tagline || item.overview,
          link: `/sectors/${item.id}`,
          matchedReason: 'Specialist Industry Practice',
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
        matchedReason = 'Matched sector scope';
      }

      // Check solutions
      if (item.solutions) {
        for (const sol of item.solutions) {
          const str = `${sol.title || ''} ${sol.description || ''}`.toLowerCase();
          if (str.includes(q)) {
            score += 65;
            if (!matchedReason) matchedReason = `Solution: "${sol.title}"`;
            break;
          }
        }
      }

      // Check keyBenefits
      if (item.keyBenefits) {
        for (const kb of item.keyBenefits) {
          if (typeof kb === 'string' && kb.toLowerCase().includes(q)) {
            score += 35;
            if (!matchedReason) matchedReason = 'Matched sector benefit';
            break;
          }
        }
      }

      if (overview.includes(q)) {
        score += 25;
        if (!matchedReason) matchedReason = 'Matched sector overview';
      }

      if (score > 0) {
        sectorMatches.push({
          type: 'Sector',
          icon: Building2,
          badgeColor: 'bg-blue-50 text-brand-navy border-blue-200/80',
          title: item.title,
          shortTitle: item.shortTitle || item.title,
          desc: item.tagline || item.overview,
          link: `/sectors/${item.id}`,
          matchedReason,
          score
        });
      }
    });

    // --- Search Case Studies ---
    caseStudiesData.forEach((item) => {
      if (!q) {
        caseMatches.push({
          type: 'Case Study',
          icon: FileText,
          badgeColor: 'bg-purple-50 text-purple-700 border-purple-200/80',
          title: item.title,
          shortTitle: item.client,
          desc: `${item.client} — ${item.summary}`,
          link: item.sectorId ? `/sectors/${item.sectorId}` : '/case-studies',
          matchedReason: item.sector || 'Case Study',
          score: 8
        });
        return;
      }

      let score = 0;
      let matchedReason = '';

      const title = (item.title || '').toLowerCase();
      const client = (item.client || '').toLowerCase();
      const summary = (item.summary || '').toLowerCase();
      const sector = (item.sector || '').toLowerCase();
      const challenge = (item.challenge || '').toLowerCase();
      const solution = (item.solution || '').toLowerCase();

      if (title.includes(q) || client.includes(q)) {
        score += 90;
        matchedReason = `Client: ${item.client}`;
      } else if (sector.includes(q)) {
        score += 60;
        matchedReason = `Sector: ${item.sector}`;
      } else if (summary.includes(q) || solution.includes(q) || challenge.includes(q)) {
        score += 40;
        matchedReason = 'Matched project details';
      }

      if (score > 0) {
        caseMatches.push({
          type: 'Case Study',
          icon: FileText,
          badgeColor: 'bg-purple-50 text-purple-700 border-purple-200/80',
          title: item.title,
          shortTitle: item.client,
          desc: `${item.client} — ${item.summary}`,
          link: item.sectorId ? `/sectors/${item.sectorId}` : '/case-studies',
          matchedReason,
          score
        });
      }
    });

    // --- Search News & Media ---
    newsData.forEach((item) => {
      if (!q) {
        newsMatches.push({
          type: 'News & Media',
          icon: Newspaper,
          badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200/80',
          title: item.title,
          shortTitle: item.title,
          desc: item.excerpt,
          link: `/news/${item.id}`,
          matchedReason: item.date || item.category,
          score: 5
        });
        return;
      }

      let score = 0;
      let matchedReason = '';

      const title = (item.title || '').toLowerCase();
      const excerpt = (item.excerpt || '').toLowerCase();
      const category = (item.category || '').toLowerCase();
      const content = (item.content || '').toLowerCase();

      if (title.includes(q)) {
        score += 85;
        matchedReason = 'Matched article title';
      } else if (category.includes(q)) {
        score += 55;
        matchedReason = `Topic: ${item.category}`;
      } else if (excerpt.includes(q) || content.includes(q)) {
        score += 35;
        matchedReason = 'Matched article excerpt';
      }

      if (score > 0) {
        newsMatches.push({
          type: 'News & Media',
          icon: Newspaper,
          badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200/80',
          title: item.title,
          shortTitle: item.title,
          desc: item.excerpt,
          link: `/news/${item.id}`,
          matchedReason,
          score
        });
      }
    });

    // Sort within each category by score descending
    serviceMatches.sort((a, b) => b.score - a.score);
    sectorMatches.sort((a, b) => b.score - a.score);
    caseMatches.sort((a, b) => b.score - a.score);
    newsMatches.sort((a, b) => b.score - a.score);

    // Combine for 'all': prioritize Services & Sectors
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

  // Current filtered list based on activeTab
  const currentResults = allResults[activeTab] || [];

  // Reset selected index when active tab or search changes
  useEffect(() => {
    setSelectedIndex(0);
  }, [activeTab, searchTerm]);

  // Keyboard navigation within list
  const handleKeyDownInBox = (e) => {
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

  if (!isOpen) return null;

  const quickSuggestions = [
    'Aviation',
    'Data Centres',
    'Integrated FM',
    'Hospital FM',
    'HVAC & Mechanical',
    'Cleaning & Sanitisation',
    'Commercial',
    'Net Zero 2035'
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-20 px-3 sm:px-6">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-brand-navy-dark/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div 
        className="relative w-full max-w-2xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden z-10 border border-slate-200/80 animate-in fade-in zoom-in-95 duration-200 flex flex-col max-h-[85vh]"
        onKeyDown={handleKeyDownInBox}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 sm:px-6 py-3.5 sm:py-4 border-b border-slate-100 bg-white">
          <Search className="w-5 h-5 text-brand-orange mr-3 flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            className="w-full text-base sm:text-lg text-brand-navy placeholder:text-slate-400 focus:outline-none bg-transparent"
            placeholder="Type to filter services, sectors, capabilities..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm && (
            <button
              onClick={() => {
                setSearchTerm('');
                inputRef.current?.focus();
              }}
              className="p-1 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors mr-1"
              title="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors ml-1"
            title="Close (ESC)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Category Filter Tabs Bar */}
        <div className="px-4 sm:px-6 py-2.5 bg-slate-50/80 border-b border-slate-100 flex items-center space-x-1.5 overflow-x-auto no-scrollbar">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all flex items-center space-x-1.5 ${
              activeTab === 'all'
                ? 'bg-brand-navy text-white shadow-sm'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/60'
            }`}
          >
            <span>All Matches</span>
            <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
              activeTab === 'all' ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
            }`}>
              {counts.all}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('services')}
            className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all flex items-center space-x-1.5 ${
              activeTab === 'services'
                ? 'bg-brand-orange text-white shadow-sm'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/60'
            }`}
          >
            <Wrench className="w-3 h-3" />
            <span>Services</span>
            <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
              activeTab === 'services' ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
            }`}>
              {counts.services}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('sectors')}
            className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all flex items-center space-x-1.5 ${
              activeTab === 'sectors'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/60'
            }`}
          >
            <Building2 className="w-3 h-3" />
            <span>Sectors</span>
            <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
              activeTab === 'sectors' ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
            }`}>
              {counts.sectors}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('cases')}
            className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all flex items-center space-x-1.5 ${
              activeTab === 'cases'
                ? 'bg-purple-600 text-white shadow-sm'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/60'
            }`}
          >
            <FileText className="w-3 h-3" />
            <span>Case Studies</span>
            <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
              activeTab === 'cases' ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
            }`}>
              {counts.cases}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('news')}
            className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all flex items-center space-x-1.5 ${
              activeTab === 'news'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/60'
            }`}
          >
            <Newspaper className="w-3 h-3" />
            <span>News & Media</span>
            <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
              activeTab === 'news' ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
            }`}>
              {counts.news}
            </span>
          </button>
        </div>

        {/* Results Area */}
        <div 
          ref={resultsContainerRef}
          className="flex-1 overflow-y-auto p-3 sm:p-5 divide-y divide-slate-100 min-h-[220px]"
        >
          {searchTerm.trim() === '' && activeTab === 'all' ? (
            <div className="py-6 px-2 space-y-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center">
                  <Sparkles className="w-3.5 h-3.5 mr-1.5 text-brand-orange" />
                  Quick Filter Suggestions
                </p>
                <div className="flex flex-wrap gap-2">
                  {quickSuggestions.map((item) => (
                    <button
                      key={item}
                      onClick={() => {
                        setSearchTerm(item);
                        inputRef.current?.focus();
                      }}
                      className="text-xs bg-slate-100 hover:bg-brand-orange hover:text-white text-slate-700 px-3 py-1.5 rounded-full font-medium transition-colors"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              {/* Browse Categories Quick Grid */}
              <div className="pt-4 border-t border-slate-100">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Or browse by category directly
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <button
                    onClick={() => setActiveTab('services')}
                    className="p-3 rounded-xl border border-slate-200/80 hover:border-brand-orange hover:bg-orange-50/40 text-left transition-all group flex items-center justify-between"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-9 h-9 rounded-lg bg-orange-100 text-brand-orange flex items-center justify-center group-hover:bg-brand-orange group-hover:text-white transition-colors">
                        <Wrench className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-brand-navy group-hover:text-brand-orange">
                          Explore 10 Services
                        </div>
                        <div className="text-[11px] text-slate-500">MEP, Hygiene, Integrated FM, HVAC...</div>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-brand-orange group-hover:translate-x-0.5 transition-all" />
                  </button>

                  <button
                    onClick={() => setActiveTab('sectors')}
                    className="p-3 rounded-xl border border-slate-200/80 hover:border-blue-600 hover:bg-blue-50/40 text-left transition-all group flex items-center justify-between"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-9 h-9 rounded-lg bg-blue-100 text-brand-navy flex items-center justify-center group-hover:bg-brand-navy group-hover:text-white transition-colors">
                        <Building2 className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-brand-navy group-hover:text-blue-700">
                          Explore 8 Sectors
                        </div>
                        <div className="text-[11px] text-slate-500">Aviation, Data Centres, Hospitals...</div>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all" />
                  </button>
                </div>
              </div>
            </div>
          ) : currentResults.length > 0 ? (
            <div className="space-y-2 pt-1">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-2 px-1">
                <span className="font-semibold uppercase tracking-wider">
                  Showing {currentResults.length} {activeTab === 'all' ? 'results' : activeTab}
                  {searchTerm.trim() ? ` for "${searchTerm}"` : ''}
                </span>
                <span className="hidden sm:inline text-[11px]">Press Enter to open</span>
              </div>

              {currentResults.map((res, idx) => {
                const Icon = res.icon;
                const isSelected = idx === selectedIndex;

                return (
                  <button
                    key={`${res.type}-${idx}-${res.title}`}
                    onClick={() => handleSelect(res.link)}
                    onMouseEnter={() => setSelectedIndex(idx)}
                    className={`w-full text-left p-3 sm:p-3.5 rounded-xl sm:rounded-2xl transition-all flex items-start space-x-3 group border ${
                      isSelected
                        ? 'bg-slate-50 border-brand-orange/50 shadow-sm'
                        : 'border-transparent hover:bg-slate-50 hover:border-slate-200'
                    }`}
                  >
                    {/* Icon Column */}
                    <div className={`p-2.5 rounded-xl flex-shrink-0 transition-colors ${
                      res.type === 'Service'
                        ? 'bg-orange-100 text-brand-orange group-hover:bg-brand-orange group-hover:text-white'
                        : res.type === 'Sector'
                        ? 'bg-blue-100 text-brand-navy group-hover:bg-brand-navy group-hover:text-white'
                        : res.type === 'Case Study'
                        ? 'bg-purple-100 text-purple-700 group-hover:bg-purple-700 group-hover:text-white'
                        : 'bg-emerald-100 text-emerald-700 group-hover:bg-emerald-700 group-hover:text-white'
                    }`}>
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>

                    {/* Content Column */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-1.5 mb-0.5">
                        <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${res.badgeColor}`}>
                          {res.type}
                        </span>
                        {res.matchedReason && (
                          <span className="text-[11px] text-slate-500 font-medium truncate max-w-[280px]">
                            • {res.matchedReason}
                          </span>
                        )}
                      </div>

                      <h4 className="text-sm sm:text-base font-semibold text-brand-navy group-hover:text-brand-orange transition-colors truncate">
                        {res.title}
                      </h4>

                      <p className="text-xs text-slate-500 line-clamp-1 sm:line-clamp-2 mt-0.5 leading-relaxed">
                        {res.desc}
                      </p>
                    </div>

                    {/* Action Arrow */}
                    <div className="flex items-center self-center pl-2 flex-shrink-0">
                      <div className={`p-1.5 rounded-lg transition-all ${
                        isSelected 
                          ? 'bg-brand-orange text-white translate-x-0.5' 
                          : 'text-slate-300 group-hover:text-brand-orange group-hover:translate-x-0.5'
                      }`}>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-12 px-4">
              <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto mb-3">
                <Search className="w-6 h-6" />
              </div>
              <p className="text-slate-700 font-semibold text-sm">
                No matching results found for "{searchTerm}"
              </p>
              <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
                Try searching for related keywords like "HVAC", "Airside", "Cleanroom", "Integrated FM", or switch category tabs above.
              </p>
              {activeTab !== 'all' && (
                <button
                  onClick={() => setActiveTab('all')}
                  className="mt-4 text-xs text-brand-orange font-bold hover:underline inline-flex items-center"
                >
                  Search across all categories instead →
                </button>
              )}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-4 sm:px-6 py-2.5 sm:py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center space-x-3">
            <span className="hidden sm:inline">Use</span>
            <span className="bg-white border border-slate-200 px-1.5 py-0.5 rounded text-[10px] font-mono shadow-2xs">↑</span>
            <span className="bg-white border border-slate-200 px-1.5 py-0.5 rounded text-[10px] font-mono shadow-2xs">↓</span>
            <span className="hidden sm:inline">to navigate</span>
            <span className="flex items-center space-x-1">
              <span className="bg-white border border-slate-200 px-1.5 py-0.5 rounded text-[10px] font-mono shadow-2xs flex items-center">
                <CornerDownLeft className="w-3 h-3 mr-0.5" /> Enter
              </span>
              <span className="hidden sm:inline">to select</span>
            </span>
          </div>
          <span className="bg-slate-200/70 text-slate-600 px-2 py-0.5 rounded text-[11px] font-mono">
            ESC to close
          </span>
        </div>
      </div>
    </div>
  );
}
