import React, { useState, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Globe, 
  ExternalLink, 
  Search, 
  Copy, 
  Check, 
  ArrowRight, 
  Building2, 
  Mail,
  Navigation,
  Globe2,
  Sparkles
} from 'lucide-react';
import Breadcrumbs from '../components/layout/Breadcrumbs';

export default function GlobalLocations() {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [copiedId, setCopiedId] = useState(null);

  // Dynamic breadcrumb
  const isFromAbout = location.pathname.startsWith('/about') || true;
  const breadcrumbItems = isFromAbout
    ? [
        { label: 'About Us', link: '/about' },
        { label: 'Global Locations' }
      ]
    : [
        { label: 'Home', link: '/' },
        { label: 'Global Locations' }
      ];

  const regions = ['All', 'Asia Pacific', 'Middle East', 'UK & Europe'];

  // All 13 Global Locations matching reference screenshots exactly
  const globalLocations = [
    {
      id: 'india',
      country: 'India',
      flag: '🇮🇳',
      region: 'Asia Pacific',
      address: '#411, Flat No:201, Shree Nivasam, Mathrusri Nagar, Near Miyapur Metro Station, Miyapur, Hyderabad, 500 049, India',
      phone: '+91 99 88 33 1575',
      displayUrl: 'nexaagen.com/in/',
      webLink: '/india-office-locations',
      hasSubBranches: true,
      subBranchesCount: 14,
      subBranchesLink: '/india-office-locations'
    },
    {
      id: 'uk-ireland',
      country: 'UK & Ireland',
      flag: '🇬🇧',
      region: 'UK & Europe',
      address: 'New Century House, The Havens, Ipswich, Suffolk, IP3 9SJ, United Kingdom',
      phone: '0800 614 678',
      displayUrl: 'nexaagen.com/uk',
      webLink: '/contact'
    },
    {
      id: 'thailand',
      country: 'Thailand',
      flag: '🇹🇭',
      region: 'Asia Pacific',
      address: '235 Soi Sukhumvit 101 (Punnavithi), Sukhumvit Road, Bangchak, Prakanong, Bangkok, 10260, Thailand',
      phone: '+66 2 741 8800',
      displayUrl: 'nexaagen.com/th',
      webLink: '/contact'
    },
    {
      id: 'australia',
      country: 'Australia',
      flag: '🇦🇺',
      region: 'Asia Pacific',
      address: '183 Great Eastern Hwy, Belmont 6104, Australia',
      phone: '+61 1300 723 777',
      displayUrl: 'nexaagen.com/au',
      webLink: '/contact'
    },
    {
      id: 'new-zealand',
      country: 'New Zealand',
      flag: '🇳🇿',
      region: 'Asia Pacific',
      address: 'Level 4, 26 Virginia Avenue East, Eden Terrace, Auckland, 1021, New Zealand',
      phone: '+64 9 300 9900',
      displayUrl: 'nexaagen.com/nz',
      webLink: '/contact'
    },
    {
      id: 'cambodia',
      country: 'Cambodia',
      flag: '🇰🇭',
      region: 'Asia Pacific',
      address: 'Ground Floor, Building B5 (Factory Phnom Penh) No 1159, Road National No 2, Sangkat Chak Ang-Re Leu, Khan Mean Chey, Phnom Penh 120601, Cambodia',
      phone: '+855 17 997 111',
      displayUrl: 'nexaagen.com/kh/',
      webLink: '/contact'
    },
    {
      id: 'indonesia',
      country: 'Indonesia',
      flag: '🇮🇩',
      region: 'Asia Pacific',
      address: 'DKI Jakarta Cibis Park Lot 411, Jl. TB Simatupang No.2, RT.13/RW.5, Cilandak Tim., Kec. Ps. Minggu, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12560 Indonesia',
      phone: '+62 21 39705055',
      displayUrl: 'nexaagen.com/id/',
      webLink: '/contact'
    },
    {
      id: 'malaysia',
      country: 'Malaysia',
      flag: '🇲🇾',
      region: 'Asia Pacific',
      address: 'Unit 10-01, Level 10, Tower 2A, UOA Business Park, No.1, Jalan Pengaturcara U1/51A, 40150 Shah Alam Selangor, Malaysia',
      phone: '+60 3 5569 1188',
      displayUrl: 'nexaagen.com/my',
      webLink: '/contact'
    },
    {
      id: 'saudi-arabia',
      country: 'Saudi Arabia',
      flag: '🇸🇦',
      region: 'Middle East',
      address: '8312, King Saudi Rd, Zahid Business Park, Al-Swaryee Dist, Jeddah, Saudi Arabia. P.O. Box 1588',
      phone: '+966 12 607 6108',
      displayUrl: 'nexaagen.com/sa/',
      webLink: '/contact'
    },
    {
      id: 'singapore',
      country: 'Singapore',
      flag: '🇸🇬',
      region: 'Asia Pacific',
      address: '750 Chai Chee Road, #03-01 ESR BizPark @ Chai Chee, Singapore 469000',
      phone: '+65 6841 4498',
      displayUrl: 'nexaagen.com/sg/',
      webLink: '/contact'
    },
    {
      id: 'uae',
      country: 'United Arab Emirates',
      flag: '🇦🇪',
      region: 'Middle East',
      address: 'PO Box 116426, Al Quoz 3, Dubai, United Arab Emirates',
      phone: '+971 (0) 4 454 6090',
      displayUrl: 'nexaagen.com/ae/',
      webLink: '/contact'
    },
    {
      id: 'philippines',
      country: 'Philippines',
      flag: '🇵🇭',
      region: 'Asia Pacific',
      address: 'Unit 1001, 10/F Mega Tower, EDSA cor. J. Vargas Avenue, Mandaluyong City 1550',
      phone: '+63 2 8721 4324',
      displayUrl: 'nexaagen.com/ph/',
      webLink: '/contact'
    },
    {
      id: 'abu-dhabi',
      country: 'Abu Dhabi',
      flag: '🇦🇪',
      region: 'Middle East',
      address: 'NEXAAGEN United Service Emirates LLC, Po Box 35561, office 308 Al Fahim HQ Building Mussafah, Abu Dhabi, UAE',
      phone: '+971 2 671 8455',
      displayUrl: 'nexaagen.com/ae/',
      webLink: '/contact'
    }
  ];

  // Filtered locations
  const filteredLocations = useMemo(() => {
    return globalLocations.filter((item) => {
      const matchesSearch = 
        item.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.phone.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.displayUrl.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesRegion = selectedRegion === 'All' || item.region === selectedRegion;

      return matchesSearch && matchesRegion;
    });
  }, [searchQuery, selectedRegion]);

  const handleCopy = (id, text) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="w-full flex flex-col flex-1 bg-white text-slate-900 font-sans overflow-hidden">
      {/* Dynamic Breadcrumbs */}
      <Breadcrumbs items={breadcrumbItems} />

      {/* ========================================================================= */}
      {/* SECTION 1: HERO - GLOBAL LOCATIONS (Screenshot 1)                          */}
      {/* ========================================================================= */}
      <section className="relative pt-4 pb-3 sm:pt-6 sm:pb-4 px-4 sm:px-6 lg:px-8 bg-[#FFF7F2] overflow-hidden">
        {/* Subtle Orange/Coral Dot Matrix Watermark Pattern matching reference */}
        <div 
          className="absolute inset-0 opacity-[0.25] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(#FF5722 1.1px, transparent 1.1px)',
            backgroundSize: '24px 24px'
          }}
        />

        <div className="relative max-w-4xl mx-auto text-center space-y-3">
          <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-heading font-medium sm:font-semibold text-[#222222] tracking-tight leading-tight">
            Global Locations
          </h1>

          <p className="text-slate-600 text-xs sm:text-sm lg:text-base leading-relaxed max-w-3xl mx-auto font-normal">
            We deliver facilities services and management throughout the UK, Europe, Asia Pacific and Middle East. Find your location below for country-specific information and opportunities.
          </p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: SEARCH & FILTER CONTROLS                                       */}
      {/* ========================================================================= */}
      <section className="py-2 sm:py-3 container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 pb-3 sm:pb-4 border-b border-slate-100">
          {/* Region Tabs */}
          <div className="flex items-center flex-wrap gap-2 w-full md:w-auto">
            {regions.map((region) => (
              <button
                key={region}
                type="button"
                onClick={() => setSelectedRegion(region)}
                className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  selectedRegion === region
                    ? 'bg-[#FF5722] text-white shadow-md shadow-orange-500/20'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900'
                }`}
              >
                {region}
                {region === 'All' && ` (${globalLocations.length})`}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search country or city..."
              className="w-full pl-9 pr-4 py-1.5 bg-slate-50 border border-slate-200/80 rounded-full text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#FF5722] focus:bg-white transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: 13 GLOBAL LOCATION CARDS (Screenshots 2, 3, 4)                  */}
      {/* ========================================================================= */}
      <section className="py-3 sm:py-5 container-custom">
        {filteredLocations.length === 0 ? (
          <div className="text-center py-10 space-y-3">
            <Globe2 className="w-10 h-10 text-slate-300 mx-auto" />
            <h3 className="text-base font-heading font-bold text-slate-800">
              No global locations found
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
              We couldn't find any location matching "{searchQuery}". Try searching for another country, city, or clearing filters.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedRegion('All');
              }}
              className="px-5 py-2 rounded-full bg-[#FF5722] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#D8232A] transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {filteredLocations.map((item) => (
              <div
                key={item.id}
                className="bg-[#FFF9F6] border border-orange-100/80 rounded-3xl p-5 sm:p-6 shadow-[0_2px_12px_rgba(255,87,34,0.03)] hover:shadow-lg hover:border-orange-200 transition-all duration-300 flex flex-col justify-between group relative"
              >
                {/* Card Top: Flag + Country Name + External Link */}
                <div className="space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-orange-100/60">
                    <div className="flex items-center space-x-2.5">
                      <span className="text-2xl" role="img" aria-label={item.country}>
                        {item.flag}
                      </span>
                      <h3 className="text-base sm:text-lg font-heading font-bold text-[#1E293B]">
                        {item.country}
                      </h3>
                    </div>

                    <Link
                      to={item.webLink}
                      className="text-[#FF5722] hover:text-[#D8232A] transition-colors p-1 rounded-lg hover:bg-orange-100/50"
                      title={`Visit ${item.country} page`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                  </div>

                  {/* Location Address */}
                  <div className="space-y-1.5">
                    <div className="flex items-center space-x-1.5 text-xs font-semibold text-[#FF5722]">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>Location</span>
                    </div>
                    <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed pl-5">
                      {item.address}
                    </p>
                  </div>

                  {/* Contact Number */}
                  {item.phone && (
                    <div className="space-y-1.5 pt-1">
                      <div className="flex items-center space-x-1.5 text-xs font-semibold text-[#FF5722]">
                        <Phone className="w-3.5 h-3.5" />
                        <span>Contact</span>
                      </div>
                      <div className="pl-5">
                        <a
                          href={`tel:${item.phone.replace(/\s+/g, '')}`}
                          className="text-xs sm:text-[13px] text-slate-700 hover:text-[#FF5722] font-medium transition-colors"
                        >
                          Tel: {item.phone}
                        </a>
                      </div>
                    </div>
                  )}

                  {/* URL */}
                  {item.displayUrl && (
                    <div className="space-y-1.5 pt-1">
                      <div className="flex items-center space-x-1.5 text-xs font-semibold text-[#FF5722]">
                        <Globe className="w-3.5 h-3.5" />
                        <span>URL</span>
                      </div>
                      <div className="pl-5">
                        <Link
                          to={item.webLink}
                          className="text-xs sm:text-[13px] text-slate-600 hover:text-[#FF5722] transition-colors"
                        >
                          {item.displayUrl}
                        </Link>
                      </div>
                    </div>
                  )}
                </div>

                {/* Card Action Footer */}
                <div className="pt-5 mt-5 border-t border-orange-100/60 flex items-center justify-between">
                  {item.hasSubBranches ? (
                    <Link
                      to={item.subBranchesLink}
                      className="inline-flex items-center space-x-1 text-xs font-bold text-[#FF5722] hover:text-[#D8232A] transition-colors group/sub"
                    >
                      <span>Explore all {item.subBranchesCount} India branches</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/sub:translate-x-0.5 transition-transform" />
                    </Link>
                  ) : (
                    <button
                      type="button"
                      onClick={() => handleCopy(item.id, `${item.country}\n${item.address}\nTel: ${item.phone}`)}
                      className="inline-flex items-center space-x-1 text-xs font-medium text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
                    >
                      {copiedId === item.id ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-600 font-semibold">Details Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy Info</span>
                        </>
                      )}
                    </button>
                  )}

                  <Link
                    to="/contact"
                    className="inline-flex items-center space-x-1 text-xs font-bold text-[#FF5722] hover:underline"
                  >
                    <span>Connect</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: INDIA SPECIFIC BANNER                                          */}
      {/* ========================================================================= */}
      <section className="py-3 sm:py-4 container-custom">
        <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-3xl p-6 sm:p-8 border border-orange-200/70 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 shadow-sm">
          <div className="space-y-1.5 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF5722]">
              Nationwide India Presence
            </span>
            <h3 className="text-lg sm:text-2xl font-heading font-bold text-slate-900">
              Looking for our India Office Locations?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
              We operate across 14 full-service hubs in Maharashtra, Gujarat, Karnataka, Tamil Nadu, Kerala, Goa, Telangana, Madhya Pradesh, West Bengal, Delhi NCR, and Punjab.
            </p>
          </div>

          <Link
            to="/india-office-locations"
            className="flex-shrink-0 inline-flex items-center space-x-2 px-6 py-2.5 rounded-full font-heading font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300"
          >
            <span>View 14 India Locations</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5: CONNECT WITH YOUR NEXAAGEN TEAM BANNER (Navy)                  */}
      {/* ========================================================================= */}
      <section className="py-3 sm:py-5 container-custom">
        <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden bg-[#0A192F] text-white p-6 sm:p-8 lg:p-10 text-center shadow-xl">
          {/* Subtle dotted matrix globe aesthetic */}
          <div 
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(#FFFFFF 1.2px, transparent 1.2px)',
              backgroundSize: '24px 24px'
            }}
          />

          <div className="relative z-10 max-w-3xl mx-auto space-y-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-white tracking-tight">
              Connect with your NEXAAGEN team
            </h2>

            <p className="text-xs sm:text-sm lg:text-base text-slate-200 leading-relaxed font-normal max-w-2xl mx-auto">
              We're ready to deliver the best experiences, productivity, practices, resilience and outcomes and we look forward to connecting with you and your team worldwide.
            </p>

            <div className="pt-1">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-2.5 rounded-full font-heading font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 group"
              >
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

