import React, { useState, useMemo, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { 
  Search, 
  ChevronDown, 
  ChevronRight, 
  ArrowRight, 
  Calendar, 
  Clock, 
  Sparkles,
  Building2,
  X,
  Share2,
  Check,
  SlidersHorizontal,
  Filter
} from 'lucide-react';
import Breadcrumbs from '../components/layout/Breadcrumbs';
import { newsData } from '../data/newsData';
import aviationServicesImg from '../assets/news/aviation-global-services.jpg';

export default function NewsMedia() {
  const [searchParams, setSearchParams] = useSearchParams();

  // Multi-Dropdown Filter States
  const [selectedType, setSelectedType] = useState('Showing All');
  const [selectedSector, setSelectedSector] = useState('Showing All');
  const [selectedService, setSelectedService] = useState('Showing All');
  const [selectedCountry, setSelectedCountry] = useState('Showing All');
  const [sortBy, setSortBy] = useState('Latest');
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  // Active filters count for mobile indicator
  const activeFiltersCount = useMemo(() => {
    let count = 0;
    if (selectedType !== 'Showing All') count++;
    if (selectedSector !== 'Showing All') count++;
    if (selectedService !== 'Showing All') count++;
    if (selectedCountry !== 'Showing All') count++;
    if (sortBy !== 'Latest') count++;
    return count;
  }, [selectedType, selectedSector, selectedService, selectedCountry, sortBy]);

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // Selected Article Modal State
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [copiedLink, setCopiedLink] = useState(false);

  // Filter Dropdown Options
  const typeOptions = ['Showing All', 'Article', 'News', 'Thought Leadership'];
  const sectorOptions = ['Showing All', 'Aviation', 'Data Centers', 'Manufacturing', 'Retail', 'Corporate'];
  const serviceOptions = ['Showing All', 'Cleaning', 'Facilities Management', 'Hard Services', 'Health & Safety', 'Sustainability'];
  const countryOptions = ['Showing All', 'India', 'United Kingdom', 'Singapore', 'Global'];
  const sortOptions = ['Latest', 'Oldest', 'A-Z'];

  // Handle URL query parameters if present
  useEffect(() => {
    const sectorParam = searchParams.get('sector');
    const serviceParam = searchParams.get('service');
    if (sectorParam) setSelectedSector(sectorParam);
    if (serviceParam) setSelectedService(serviceParam);
  }, [searchParams]);

  // Reset to page 1 whenever filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedType, selectedSector, selectedService, selectedCountry, sortBy, searchQuery]);

  // Featured Article (The hero article from Screenshot 1)
  const featuredArticle = newsData[0];

  // Filtered & Sorted Articles
  const filteredArticles = useMemo(() => {
    let result = newsData.filter((article) => {
      const matchesSearch =
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.author.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesType =
        selectedType === 'Showing All' || article.type === selectedType;

      const matchesSector =
        selectedSector === 'Showing All' || article.sector === selectedSector;

      const matchesService =
        selectedService === 'Showing All' || article.service === selectedService;

      const matchesCountry =
        selectedCountry === 'Showing All' || article.country === selectedCountry;

      return matchesSearch && matchesType && matchesSector && matchesService && matchesCountry;
    });

    // Sorting
    if (sortBy === 'Oldest') {
      result = [...result].reverse();
    } else if (sortBy === 'A-Z') {
      result = [...result].sort((a, b) => a.title.localeCompare(b.title));
    }

    return result;
  }, [searchQuery, selectedType, selectedSector, selectedService, selectedCountry, sortBy]);

  // Pagination slicing
  const totalPages = Math.ceil(filteredArticles.length / itemsPerPage);
  const paginatedArticles = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredArticles.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredArticles, currentPage, itemsPerPage]);

  const handleShare = (article) => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="w-full flex flex-col flex-1 bg-transparent text-slate-900 font-sans overflow-hidden">
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: 'News & Media', link: '/news' }, { label: 'News' }]} />

      {/* ========================================================================= */}
      {/* SECTION 1: HERO FEATURED ARTICLE (Screenshot 1)                           */}
      {/* ========================================================================= */}
      <section className="pt-3 pb-2 sm:pt-4 sm:pb-3 container-custom">
        <div 
          onClick={() => setSelectedArticle(featuredArticle)}
          className="bg-[#FAF7F2] rounded-[24px] sm:rounded-[28px] overflow-hidden border border-orange-100/70 shadow-sm hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 items-center cursor-pointer group"
        >
          {/* Left Column: Article Narrative */}
          <div className="lg:col-span-6 p-5 sm:p-7 lg:p-8 flex flex-col justify-center space-y-3 sm:space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF5722]">
              Latest Article
            </span>

            <h1 className="text-xl sm:text-2xl lg:text-[28px] font-heading font-bold text-brand-navy tracking-tight leading-snug group-hover:text-[#FF5722] transition-colors">
              {featuredArticle.title}
            </h1>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
              {featuredArticle.excerpt}
            </p>

            <div className="flex items-center space-x-3 pt-2.5 border-t border-orange-200/40 text-xs text-slate-500">
              <div className="w-7 h-7 rounded-full bg-white border border-slate-200 flex items-center justify-center font-bold text-slate-700 text-xs">
                N
              </div>
              <div>
                <span className="font-semibold text-slate-800 block">{featuredArticle.author}</span>
                <span className="text-slate-400">{featuredArticle.date}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Aviation Hero Photo Directly Related to Content */}
          <div className="lg:col-span-6 relative h-[240px] sm:h-[280px] lg:h-[320px] w-full overflow-hidden">
            <img
              src={featuredArticle.image || aviationServicesImg}
              alt={featuredArticle.title}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: MULTI-DROPDOWN FILTER BAR (Screenshot 1)                        */}
      {/* ========================================================================= */}
      <section className="py-2 sm:py-3 container-custom">
        {/* Mobile Filter Toggle Button (< lg screens) */}
        <div className="lg:hidden flex items-center justify-between gap-3 mb-3">
          <button
            type="button"
            onClick={() => setIsMobileFiltersOpen((prev) => !prev)}
            aria-expanded={isMobileFiltersOpen}
            className={`flex-1 inline-flex items-center justify-between py-2.5 px-4 rounded-xl border text-xs font-bold transition-all shadow-sm ${
              isMobileFiltersOpen || activeFiltersCount > 0
                ? 'bg-brand-orange text-white border-brand-orange shadow-orange-500/20'
                : 'bg-white text-slate-700 border-slate-200 hover:border-brand-orange/40'
            }`}
          >
            <span className="flex items-center space-x-2">
              <SlidersHorizontal className="w-4 h-4" />
              <span>{isMobileFiltersOpen ? 'Hide Filters' : 'Filter & Sort Options'}</span>
            </span>
            <div className="flex items-center space-x-2">
              {activeFiltersCount > 0 && (
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                  isMobileFiltersOpen ? 'bg-white text-brand-orange' : 'bg-brand-orange text-white'
                }`}>
                  {activeFiltersCount} active
                </span>
              )}
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isMobileFiltersOpen ? 'rotate-180' : ''}`} />
            </div>
          </button>
        </div>

        {/* Multi-dropdown filters (collapsible on mobile, always visible on lg) */}
        <div className={`grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 p-4 sm:p-5 bg-white border border-slate-200/90 rounded-2xl shadow-sm ${
          isMobileFiltersOpen ? 'grid animate-in fade-in duration-200' : 'hidden lg:grid'
        }`}>
          {/* 1. Type */}
          <div className="space-y-1">
            <label className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
              Type
            </label>
            <div className="relative">
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                aria-label="Filter by Type"
                className="w-full appearance-none bg-slate-50 border border-slate-200/80 rounded-xl px-3 py-2 text-xs sm:text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#FF5722] cursor-pointer"
              >
                {typeOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* 2. Sectors */}
          <div className="space-y-1">
            <label className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
              Sectors
            </label>
            <div className="relative">
              <select
                value={selectedSector}
                onChange={(e) => setSelectedSector(e.target.value)}
                aria-label="Filter by Sector"
                className="w-full appearance-none bg-slate-50 border border-slate-200/80 rounded-xl px-3 py-2 text-xs sm:text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#FF5722] cursor-pointer"
              >
                {sectorOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* 3. Service */}
          <div className="space-y-1">
            <label className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
              Service
            </label>
            <div className="relative">
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                aria-label="Filter by Service"
                className="w-full appearance-none bg-slate-50 border border-slate-200/80 rounded-xl px-3 py-2 text-xs sm:text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#FF5722] cursor-pointer"
              >
                {serviceOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* 4. Country */}
          <div className="space-y-1">
            <label className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
              Country
            </label>
            <div className="relative">
              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                aria-label="Filter by Country"
                className="w-full appearance-none bg-slate-50 border border-slate-200/80 rounded-xl px-3 py-2 text-xs sm:text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#FF5722] cursor-pointer"
              >
                {countryOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* 5. Sort By */}
          <div className="space-y-1 col-span-2 sm:col-span-1">
            <label className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
              Sort By
            </label>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                aria-label="Sort Articles"
                className="w-full appearance-none bg-slate-50 border border-slate-200/80 rounded-xl px-3 py-2 text-xs sm:text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#FF5722] cursor-pointer"
              >
                {sortOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Active Filters / Reset / Search Bar row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mt-3 sm:mt-4 text-xs text-slate-500">
          <div className="flex items-center space-x-2 w-full sm:w-auto justify-between sm:justify-start">
            <span>Showing <strong>{filteredArticles.length}</strong> articles</span>
            {(selectedType !== 'Showing All' || selectedSector !== 'Showing All' || selectedService !== 'Showing All' || selectedCountry !== 'Showing All' || searchQuery || sortBy !== 'Latest') && (
              <button
                type="button"
                onClick={() => {
                  setSelectedType('Showing All');
                  setSelectedSector('Showing All');
                  setSelectedService('Showing All');
                  setSelectedCountry('Showing All');
                  setSearchQuery('');
                  setSortBy('Latest');
                }}
                className="text-[#FF5722] font-semibold hover:underline inline-flex items-center gap-1 ml-2"
              >
                <X className="w-3.5 h-3.5" />
                <span>Reset Filters</span>
              </button>
            )}
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search news..."
              className="w-full pl-9 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-[#FF5722]"
            />
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: 2-COLUMN ARTICLE GRID (Screenshots 2, 3, 5, 6, 7, 8)            */}
      {/* ========================================================================= */}
      <section className="py-3 sm:py-5 container-custom">
        {paginatedArticles.length === 0 ? (
          <div className="text-center py-10 space-y-3">
            <Building2 className="w-10 h-10 text-slate-300 mx-auto" />
            <h3 className="text-base font-heading font-bold text-slate-800">
              No articles found
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
              We couldn't find any articles matching your selected criteria. Try adjusting your filters.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {paginatedArticles.map((article) => (
              <div
                key={article.id}
                onClick={() => setSelectedArticle(article)}
                className="bg-white rounded-3xl border border-slate-100 hover:border-orange-200 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-lg transition-all duration-300 p-4 sm:p-5 flex flex-col sm:flex-row gap-5 cursor-pointer group"
              >
                {/* Thumbnail Image (Fixed aspect on left) */}
                <div className="sm:w-44 lg:w-48 aspect-[16/11] sm:aspect-square rounded-2xl overflow-hidden flex-shrink-0 relative bg-slate-100">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                {/* Article Info */}
                <div className="flex-1 flex flex-col justify-between space-y-3">
                  <div className="space-y-1.5">
                    {/* Category Label */}
                    <span className="text-[11px] font-bold text-[#EA580C] uppercase tracking-wider block">
                      {article.category}
                    </span>

                    {/* Title */}
                    <h3 className="text-sm sm:text-base font-heading font-bold text-brand-navy group-hover:text-[#FF5722] transition-colors line-clamp-2 leading-snug">
                      {article.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>

                  {/* Author & Date Footer */}
                  <div className="pt-2 border-t border-slate-100/80 flex items-center justify-between text-[11px] text-slate-400">
                    <div className="flex items-center space-x-2">
                      <div className="w-5 h-5 rounded-full bg-slate-100 text-[#0A192F] font-bold text-[9px] flex items-center justify-center">
                        N
                      </div>
                      <span className="font-semibold text-slate-600">{article.author}</span>
                    </div>
                    <span>{article.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ========================================================================= */}
        {/* SECTION 4: PAGINATION (Screenshots 4 & 7)                                  */}
        {/* ========================================================================= */}
        {totalPages > 1 && (
          <div className="pt-4 sm:pt-6 flex items-center justify-center space-x-2">
            {/* Page 1 */}
            <button
              type="button"
              onClick={() => setCurrentPage(1)}
              className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold transition-all cursor-pointer ${
                currentPage === 1
                  ? 'bg-[#FF5722] text-white shadow-md shadow-orange-500/25'
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
            >
              1
            </button>

            {/* Page 2 */}
            {totalPages >= 2 && (
              <button
                type="button"
                onClick={() => setCurrentPage(2)}
                className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold transition-all cursor-pointer ${
                  currentPage === 2
                    ? 'bg-[#FF5722] text-white shadow-md shadow-orange-500/25'
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                2
              </button>
            )}

            {/* Page 3 */}
            {totalPages >= 3 && (
              <button
                type="button"
                onClick={() => setCurrentPage(3)}
                className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold transition-all cursor-pointer ${
                  currentPage === 3
                    ? 'bg-[#FF5722] text-white shadow-md shadow-orange-500/25'
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                3
              </button>
            )}

            {/* Next Button */}
            {currentPage < totalPages && (
              <button
                type="button"
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                className="inline-flex items-center space-x-1 px-4 py-2 rounded-full border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-bold ml-2 cursor-pointer"
              >
                <span>Next</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        )}
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5: BROWSE NEWS BY SECTOR & SERVICE (Screenshot 4)                  */}
      {/* ========================================================================= */}
      <section className="py-3 sm:py-5 container-custom border-t border-slate-100">
        <div className="space-y-4">
          {/* Browse by Sector */}
          <div className="space-y-1.5">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
              Browse news by sector
            </span>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs sm:text-sm font-semibold text-slate-700">
              {['Aviation', 'Data Centers', 'Manufacturing', 'Retail'].map((sec) => (
                <button
                  key={sec}
                  type="button"
                  onClick={() => {
                    setSelectedSector(sec);
                    window.scrollTo({ top: 400, behavior: 'smooth' });
                  }}
                  className="hover:text-[#FF5722] underline decoration-slate-300 hover:decoration-[#FF5722] transition-colors cursor-pointer"
                >
                  {sec}
                </button>
              ))}
            </div>
          </div>

          {/* Browse by Service */}
          <div className="space-y-1.5 pt-1">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
              Browse news by service
            </span>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs sm:text-sm font-semibold text-slate-700">
              {['Cleaning', 'Facilities Management', 'Hard Services'].map((srv) => (
                <button
                  key={srv}
                  type="button"
                  onClick={() => {
                    setSelectedService(srv);
                    window.scrollTo({ top: 400, behavior: 'smooth' });
                  }}
                  className="hover:text-[#FF5722] underline decoration-slate-300 hover:decoration-[#FF5722] transition-colors cursor-pointer"
                >
                  {srv}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 6: CONNECT BANNER                                                 */}
      {/* ========================================================================= */}
      <section className="py-3 sm:py-5 container-custom">
        <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden bg-[#0A192F] text-white p-6 sm:p-8 lg:p-10 text-center shadow-xl">
          <div 
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(#FFFFFF 1.2px, transparent 1.2px)',
              backgroundSize: '24px 24px'
            }}
          />

          <div className="relative z-10 max-w-3xl mx-auto space-y-5">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-white tracking-tight leading-tight">
              Connect with your NEXAAGEN team
            </h2>

            <p className="text-sm sm:text-base lg:text-lg text-slate-200 leading-relaxed font-normal max-w-2xl mx-auto text-justify-center">
              We're ready to deliver the best experiences, productivity, practices, resilience and outcomes and we look forward to connecting with you and your team.
            </p>

            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 rounded-full font-heading font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 group"
              >
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* ARTICLE READER MODAL                                                      */}
      {/* ========================================================================= */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-100 flex flex-col">
            <div className="relative aspect-[16/9] w-full">
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setSelectedArticle(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 backdrop-blur text-slate-700 hover:text-black flex items-center justify-center transition-colors shadow-md cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-5">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span className="px-3 py-1 rounded-full bg-orange-100 text-[#EA580C] font-bold uppercase tracking-wider">
                  {selectedArticle.category}
                </span>
                <span>{selectedArticle.date}</span>
              </div>

              <h2 className="text-xl sm:text-2xl font-heading font-bold text-slate-900 leading-snug">
                {selectedArticle.title}
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {selectedArticle.content || selectedArticle.excerpt}
              </p>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-7 h-7 rounded-full bg-slate-100 text-[#0A192F] font-bold text-xs flex items-center justify-center">
                    N
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-800 block">{selectedArticle.author}</span>
                    <span className="text-[10px] text-slate-400">{selectedArticle.date}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    type="button"
                    onClick={() => handleShare(selectedArticle)}
                    className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    {copiedLink ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-600">Copied</span>
                      </>
                    ) : (
                      <>
                        <Share2 className="w-3.5 h-3.5" />
                        <span>Share</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedArticle(null)}
                    className="px-5 py-1.5 rounded-full bg-[#FF5722] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#D8232A] transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
