import React, { useState, useMemo, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, MapPin, Building2, ExternalLink, ArrowRight, CheckCircle2, X } from 'lucide-react';

const PLACES_WE_SERVICE = [
  // A
  {
    letter: 'A',
    name: 'Airports & Aviation Terminals',
    category: 'Transport & Infrastructure',
    description: 'International passenger concourses, aerobridges, baggage handling halls, airside tarmac aprons, and VIP airline lounges.',
    servicesManaged: ['Cleaning', 'Hard Services', 'Facilities Management'],
    sectorLink: '/sectors/aviation'
  },
  {
    letter: 'A',
    name: 'Atriums & High-Rise Glass Facades',
    category: 'Commercial Architecture',
    description: 'Multi-story architectural atriums, abseil rope-access glass facade cleaning, automated skylight maintenance, and marble floor polishing.',
    servicesManaged: ['Cleaning', 'Hard Services', 'Front of House & Concierge'],
    sectorLink: '/sectors/commercial'
  },
  {
    letter: 'A',
    name: 'Automotive & Heavy Assembly Plants',
    category: 'Industrial & Manufacturing',
    description: 'High-bay production lines, paint shop extraction systems, robotics maintenance, compressed air networks, and industrial safety.',
    servicesManaged: ['Hard Services', 'Facilities Management', 'Pest Control'],
    sectorLink: '/sectors/manufacturing'
  },

  // B
  {
    letter: 'B',
    name: 'Banking & Financial Towers',
    category: 'Corporate Finance',
    description: 'Corporate headquarters, high-security trading floors with zero-downtime power redundancy, executive boardrooms, and concierge.',
    servicesManaged: ['Facilities Management', 'Hard Services', 'Front of House & Concierge'],
    sectorLink: '/sectors/commercial'
  },
  {
    letter: 'B',
    name: 'Biomedical & Clinical Laboratories',
    category: 'Life Sciences & Research',
    description: 'NABH-certified sterile environments, biosafety fume hoods, medical gas monitoring, and strictly segregated hazardous waste disposal.',
    servicesManaged: ['Cleaning', 'Hard Services', 'Pest Control'],
    sectorLink: '/sectors/healthcare'
  },

  // C
  {
    letter: 'C',
    name: 'Cleanrooms & Semiconductor Facilities',
    category: 'Precision Manufacturing',
    description: 'ISO 14644 cleanrooms, laminar airflow management, electrostatic discharge (ESD) flooring, and micro-particle contamination control.',
    servicesManaged: ['Cleaning', 'Hard Services', 'Facilities Management'],
    sectorLink: '/sectors/manufacturing'
  },
  {
    letter: 'C',
    name: 'Commercial Office Towers & Tech Parks',
    category: 'Grade-A Real Estate',
    description: 'Multi-tenant commercial buildings, smart BMS automation, executive front-of-house greeting, corporate cafeterias, and indoor living plants.',
    servicesManaged: ['Facilities Management', 'Cleaning', 'Front of House & Concierge', 'Landscaping'],
    sectorLink: '/sectors/commercial'
  },
  {
    letter: 'C',
    name: 'Convention & Exhibition Centres',
    category: 'Hospitality & Events',
    description: 'Massive exhibition halls, high-capacity HVAC climate balancing, rapid overnight turnaround janitorial services, and public security.',
    servicesManaged: ['Cleaning', 'Hard Services', 'Front of House & Concierge'],
    sectorLink: '/sectors/hospitality'
  },

  // D
  {
    letter: 'D',
    name: 'Data Centres & Hyperscale Server Farms',
    category: 'Mission-Critical Technology',
    description: 'Tier-III and Tier-IV server halls, precision CRAC/CRAH cooling, UPS battery bank load testing, and 24/7/365 mission operations.',
    servicesManaged: ['Hard Services', 'Facilities Management', 'Carbon & Energy Management'],
    sectorLink: '/sectors/data-centres'
  },
  {
    letter: 'D',
    name: 'Distribution & Cold-Storage Warehouses',
    category: 'Logistics Infrastructure',
    description: 'Sub-zero temperature-controlled cold rooms, loading dock levellers, high-density racking inspections, and pest exclusion.',
    servicesManaged: ['Hard Services', 'Pest Control', 'Facilities Management'],
    sectorLink: '/sectors/manufacturing'
  },

  // E
  {
    letter: 'E',
    name: 'Educational Campuses & Universities',
    category: 'Institutional Education',
    description: 'Multi-acre academic campuses, lecture halls, science laboratories, student hostels, sports arenas, and sustainable groundskeeping.',
    servicesManaged: ['Facilities Management', 'Cleaning', 'Landscaping', 'Pest Control'],
    sectorLink: '/sectors/education'
  },
  {
    letter: 'E',
    name: 'EV Charging & Green Mobility Hubs',
    category: 'Sustainable Infrastructure',
    description: 'Commercial DC fast-charging bays, canopy solar integration, electrical load balancing, and fleet maintenance parking areas.',
    servicesManaged: ['Carbon & Energy Management', 'Hard Services'],
    sectorLink: '/services/carbon-energy-management'
  },

  // F
  {
    letter: 'F',
    name: 'Food Processing Plants & Commercial Kitchens',
    category: 'Food Hygiene & Manufacturing',
    description: 'HACCP-compliant sanitation, grease trap drainage cleaning, food-safe pest management, and cold-chain temperature logging.',
    servicesManaged: ['Cleaning', 'Pest Control', 'Hard Services'],
    sectorLink: '/sectors/manufacturing'
  },

  // H
  {
    letter: 'H',
    name: 'Hospitals & Acute Care Health Cities',
    category: 'Critical Healthcare',
    description: 'Surgical suites, ICUs, patient wards, bio-medical waste compliance, HEPA air filtration, and emergency generator reliability.',
    servicesManaged: ['Cleaning', 'Hard Services', 'Facilities Management', 'Pest Control'],
    sectorLink: '/sectors/healthcare'
  },
  {
    letter: 'H',
    name: 'Hotels, Luxury Resorts & Banquets',
    category: '5-Star Hospitality',
    description: 'Guestroom housekeeping, front-of-house concierge, fine-dining kitchen hygiene, crystal chandelier care, and infinity pool mechanics.',
    servicesManaged: ['Front of House & Concierge', 'Cleaning', 'Landscaping', 'Hard Services'],
    sectorLink: '/sectors/hospitality'
  },

  // I
  {
    letter: 'I',
    name: 'Industrial Estates & Special Economic Zones (SEZ)',
    category: 'Industrial Parks',
    description: 'Perimeter security, industrial effluent treatment (ETP/STP), common area landscaping, high-voltage substations, and storm drains.',
    servicesManaged: ['Facilities Management', 'Hard Services', 'Landscaping', 'Carbon & Energy Management'],
    sectorLink: '/sectors/manufacturing'
  },

  // M
  {
    letter: 'M',
    name: 'Malls, Retail Villages & Hypermarkets',
    category: 'High-Footfall Retail',
    description: 'Escalator and travelator safety audits, continuous mall concourse scrubbing, food court hygiene, and tenant fitout coordination.',
    servicesManaged: ['Cleaning', 'Hard Services', 'Pest Control', 'Facilities Management'],
    sectorLink: '/sectors/retail'
  },

  // P
  {
    letter: 'P',
    name: 'Pharmaceutical & API Manufacturing Facilities',
    category: 'Regulated Healthcare & Pharma',
    description: 'FDA-audit-ready manufacturing environments, pure water for injection (WFI) loops, clean-in-place (CIP) monitoring, and insect exclusion.',
    servicesManaged: ['Cleaning', 'Hard Services', 'Pest Control', 'Facilities Management'],
    sectorLink: '/sectors/healthcare'
  },

  // R
  {
    letter: 'R',
    name: 'Research Parks & Innovation Incubators',
    category: 'R&D & Science',
    description: 'Advanced testing laboratories, clean air intake handling, hazardous chemical storage monitoring, and smart co-working suites.',
    servicesManaged: ['Facilities Management', 'Hard Services', 'Carbon & Energy Management'],
    sectorLink: '/sectors/education'
  },

  // S
  {
    letter: 'S',
    name: 'Sports Arenas & Stadiums',
    category: 'Public Leisure & Athletics',
    description: 'Natural turf grass nutrition and mowing, high-density spectator seating sanitization, floodlight maintenance, and crowd flow logistics.',
    servicesManaged: ['Landscaping', 'Cleaning', 'Hard Services'],
    sectorLink: '/services/landscaping'
  }
];

export default function PlacesWeServiceDirectory() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLetter, setSelectedLetter] = useState('ALL');
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#places-we-service' || location.hash === '#a-z-places') {
      const el = document.getElementById('places-we-service');
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 150);
      }
    }
  }, [location.hash]);

  const availableLetters = useMemo(() => {
    const letters = new Set(PLACES_WE_SERVICE.map((p) => p.letter));
    return Array.from(letters).sort();
  }, []);

  const filteredPlaces = useMemo(() => {
    return PLACES_WE_SERVICE.filter((place) => {
      if (selectedLetter !== 'ALL' && place.letter !== selectedLetter) {
        return false;
      }
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        return (
          place.name.toLowerCase().includes(q) ||
          place.category.toLowerCase().includes(q) ||
          place.description.toLowerCase().includes(q) ||
          place.servicesManaged.some((s) => s.toLowerCase().includes(q))
        );
      }
      return true;
    });
  }, [searchQuery, selectedLetter]);

  const groupedByLetter = useMemo(() => {
    const groups = {};
    filteredPlaces.forEach((p) => {
      if (!groups[p.letter]) {
        groups[p.letter] = [];
      }
      groups[p.letter].push(p);
    });
    return groups;
  }, [filteredPlaces]);

  const sortedLetters = Object.keys(groupedByLetter).sort();

  return (
    <section id="places-we-service" className="section-padding bg-transparent border-t border-slate-200/80">
      <div className="container-custom">
        {/* Header with A-Z Magnifying Glass Badge */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-flex items-center space-x-2.5 px-4 py-2 rounded-full bg-white shadow-sm border border-slate-200/80 mb-4">
            <svg
              className="w-5 h-5 text-brand-orange"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <circle cx="10" cy="10" r="7.5" stroke="currentColor" />
              <path d="M15.5 15.5L20.5 20.5" stroke="currentColor" strokeLinecap="round" />
              <text
                x="10"
                y="12.5"
                textAnchor="middle"
                fontSize="6"
                fontWeight="bold"
                fill="currentColor"
                stroke="none"
                fontFamily="'Inter', system-ui, -apple-system, sans-serif"
              >
                A-Z
              </text>
            </svg>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-navy">
              Comprehensive Facility Types Directory
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-brand-navy tracking-tight leading-tight">
            A-Z of Places We Service
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            From international aviation terminals and sterile hospital cleanrooms to hyperscale data centres, commercial atriums, and heavy industrial plants — discover how our 7 core services keep India's vital infrastructure operating at its best.
          </p>
        </div>

        {/* Search & Letter Filter */}
        <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-slate-200/80 mb-8 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
            <div className="md:col-span-8 relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search facility type (e.g. Airport, Cleanroom, Hospital, Data Centre)..."
                className="w-full pl-11 pr-10 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange transition-all placeholder:text-slate-400"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="md:col-span-4 flex items-center justify-between md:justify-end space-x-3">
              <span className="text-xs text-slate-500 font-medium">
                Showing <strong className="text-brand-navy">{filteredPlaces.length}</strong> facility types
              </span>
              {(searchQuery || selectedLetter !== 'ALL') && (
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedLetter('ALL');
                  }}
                  className="text-xs font-semibold text-brand-orange hover:text-red-700 transition-colors"
                >
                  Reset
                </button>
              )}
            </div>
          </div>

          {/* Quick-Jump Alphabet Bar */}
          <div className="pt-2 border-t border-slate-100 flex items-center space-x-1.5 overflow-x-auto pb-1 text-xs">
            <span className="text-slate-400 font-bold uppercase tracking-wider text-[11px] mr-1 flex-shrink-0">
              Jump to:
            </span>
            <button
              onClick={() => setSelectedLetter('ALL')}
              className={`px-2.5 py-1 rounded-lg font-bold transition-colors flex-shrink-0 ${
                selectedLetter === 'ALL'
                  ? 'bg-brand-orange text-white'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              All
            </button>
            {availableLetters.map((ltr) => (
              <button
                key={ltr}
                onClick={() => setSelectedLetter(ltr)}
                className={`w-7 h-7 rounded-lg font-bold flex items-center justify-center transition-colors flex-shrink-0 ${
                  selectedLetter === ltr
                    ? 'bg-brand-orange text-white'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                {ltr}
              </button>
            ))}
          </div>
        </div>

        {/* Directory Grid */}
        {filteredPlaces.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-slate-200/80">
            <div className="w-12 h-12 rounded-full bg-orange-50 text-brand-orange flex items-center justify-center mx-auto mb-3">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-brand-navy">No Facility Types Found</h3>
            <p className="text-sm text-slate-500 mt-1">
              Try searching with another keyword or reset the filter.
            </p>
          </div>
        ) : (
          <div className="space-y-8">
            {sortedLetters.map((ltr) => {
              const placesInLetter = groupedByLetter[ltr];
              return (
                <div key={ltr} className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <span className="w-9 h-9 rounded-xl bg-brand-navy text-white font-extrabold text-base flex items-center justify-center shadow-sm">
                      {ltr}
                    </span>
                    <div className="h-px bg-slate-200 flex-1" />
                    <span className="text-xs font-semibold text-slate-400">
                      {placesInLetter.length} {placesInLetter.length === 1 ? 'Category' : 'Categories'}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {placesInLetter.map((place, idx) => (
                      <div
                        key={idx}
                        className="bg-white rounded-2xl p-5 border border-slate-200/80 hover:border-brand-orange/40 hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-brand-orange bg-orange-50 px-2.5 py-0.5 rounded-full border border-orange-100">
                              {place.category}
                            </span>
                          </div>

                          <h4 className="text-base font-bold text-brand-navy group-hover:text-brand-orange transition-colors">
                            {place.name}
                          </h4>

                          <p className="text-xs text-slate-600 leading-relaxed mt-2 line-clamp-3">
                            {place.description}
                          </p>

                          <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-slate-100">
                            {place.servicesManaged.map((svc, sIdx) => (
                              <span
                                key={sIdx}
                                className="text-[10px] font-medium bg-slate-50 text-slate-600 px-2 py-0.5 rounded-md border border-slate-100"
                              >
                                ✓ {svc}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-end">
                          <Link
                            to={place.sectorLink}
                            className="inline-flex items-center text-xs font-semibold text-brand-orange hover:text-red-700 transition-colors group/link"
                          >
                            <span>View Sector Case Study</span>
                            <ArrowRight className="w-3 h-3 ml-1 group-hover/link:translate-x-0.5 transition-transform" />
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

