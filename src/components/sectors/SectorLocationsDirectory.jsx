import React, { useState, useMemo, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, MapPin, Building2, ExternalLink, ArrowRight, CheckCircle2, Filter, X } from 'lucide-react';

const SECTOR_LOCATIONS = [
  // A
  {
    id: 'ahmedabad-eng-park',
    letter: 'A',
    name: 'Ahmedabad Industrial & Engineering Park',
    city: 'Ahmedabad',
    state: 'Gujarat',
    sectorId: 'manufacturing',
    sectorName: 'Manufacturing',
    type: 'Heavy Engineering & Automotive Hub',
    description: 'Robotic assembly maintenance, compressed air systems, ISO 14001 environmental compliance and heavy machinery tooling support.',
    services: ['Machine Maintenance', 'Zero-Downtime SLAs', 'OSHA Safety Standards']
  },
  {
    id: 'amritsar-intl-airport',
    letter: 'A',
    name: 'Amritsar Sri Guru Ram Dass Jee International Airport',
    city: 'Amritsar',
    state: 'Punjab',
    sectorId: 'aviation',
    sectorName: 'Aviation',
    type: 'International Passenger & Cargo Terminal',
    description: 'Landside and airside facilities management, baggage sorting conveyor uptime, passenger concourse sanitization and runway lighting support.',
    services: ['Concourse FM', 'Baggage Systems Support', 'Passenger Flow Cleanliness']
  },
  {
    id: 'apollo-health-city',
    letter: 'A',
    name: 'Apollo Multispeciality Health City Campus',
    city: 'Chennai & Kolkata',
    state: 'Tamil Nadu / West Bengal',
    sectorId: 'healthcare',
    sectorName: 'Healthcare',
    type: 'NABH-Accredited Super-Speciality Hospital',
    description: 'Sterile surgical suite protocols, HEPA cleanroom airflow management, bio-hazardous waste segregation and patient ward hygiene.',
    services: ['Clinical Cleaning', 'Infection Control', 'Medical Waste Logistics']
  },

  // B
  {
    id: 'bengaluru-cyber-park',
    letter: 'B',
    name: 'Bengaluru Outer Ring Road Cyber Park',
    city: 'Bengaluru',
    state: 'Karnataka',
    sectorId: 'commercial',
    sectorName: 'Commercial',
    type: 'Grade-A Corporate IT Towers & Campus',
    description: 'Smart BMS building controls, chiller plant optimization, executive boardroom concierge, cafeteria hygiene and turnstile security.',
    services: ['Smart Workplace FM', 'HVAC Energy Efficiency', '24/7 Helpdesk']
  },
  {
    id: 'bengaluru-airport-hub',
    letter: 'B',
    name: 'Bengaluru Kempegowda International Airport Logistics Terminal',
    city: 'Bengaluru',
    state: 'Karnataka',
    sectorId: 'aviation',
    sectorName: 'Aviation',
    type: 'Cargo & Aviation Support Facility',
    description: 'Perishable cold-chain facilities, aerospace cargo handling zones, apron maintenance and international crew transit suites.',
    services: ['Cold-Chain Logistics FM', 'Apron Care', 'Aerospace Safety']
  },
  {
    id: 'birla-science-campus',
    letter: 'B',
    name: 'Birla Science & Higher Education University Campus',
    city: 'Pilani & Hyderabad',
    state: 'Rajasthan / Telangana',
    sectorId: 'education',
    sectorName: 'Education',
    type: 'Higher Education & Research University',
    description: 'Campus grounds maintenance, science laboratory fume-hood compliance, student residential hostels and sports arena facilities.',
    services: ['Lab Compliance', 'Hostel Facilities', 'Campus Landscaping']
  },

  // C
  {
    id: 'chennai-auto-corridor',
    letter: 'C',
    name: 'Chennai Oragadam Automotive & EV Hub',
    city: 'Chennai',
    state: 'Tamil Nadu',
    sectorId: 'manufacturing',
    sectorName: 'Manufacturing',
    type: 'Automotive Stamping & EV Battery Facility',
    description: 'High-voltage safety protocols, industrial wastewater treatment (ETP/STP), production line uptime and audit-ready plant operations.',
    services: ['Plant Engineering', 'ETP/STP Operations', 'ISO 45001 Compliance']
  },
  {
    id: 'chennai-phoenix-mall',
    letter: 'C',
    name: 'Chennai Phoenix Retail & Entertainment Galleria',
    city: 'Chennai',
    state: 'Tamil Nadu',
    sectorId: 'retail',
    sectorName: 'Retail',
    type: 'Premium Mega-Mall & Leisure Centre',
    description: 'High-footfall floor care, atrium glass facade maintenance, multi-tier parking management, food court hygiene and chiller systems.',
    services: ['High-Footfall Cleaning', 'Vertical Transport', 'Food Hygiene Standards']
  },

  // D
  {
    id: 'delhi-igi-t3',
    letter: 'D',
    name: 'Delhi Indira Gandhi International Airport (Terminal 3)',
    city: 'New Delhi',
    state: 'Delhi NCR',
    sectorId: 'aviation',
    sectorName: 'Aviation',
    type: 'Flagship International Aviation Hub',
    description: 'Round-the-clock operations across multi-million sq. ft. terminals, aerobridge maintenance, passenger transit lounges and airfield engineering.',
    services: ['Terminal Operations', 'Aerobridge Maintenance', 'VIP Lounge FM']
  },
  {
    id: 'delhi-ncr-datacenter',
    letter: 'D',
    name: 'Delhi NCR Hyperscale Tier IV Data Campus',
    city: 'Noida',
    state: 'Uttar Pradesh',
    sectorId: 'data-centres',
    sectorName: 'Data Centres',
    type: 'Mission-Critical Hyperscale Facility',
    description: 'Guaranteed 99.999% power and cooling uptime, precision CRAC/CRAH air handling, dual-path power busway audits and VESDA fire monitoring.',
    services: ['Critical Cooling', 'Power Redundancy (N+1)', '24/7 Mission Support']
  },

  // G
  {
    id: 'gurugram-cyber-city',
    letter: 'G',
    name: 'Gurugram Cyber City Commercial Towers',
    city: 'Gurugram',
    state: 'Haryana',
    sectorId: 'commercial',
    sectorName: 'Commercial',
    type: 'Fortune 500 Corporate Headquarters',
    description: 'LEED Platinum building engineering, executive reception services, high-speed lift maintenance, indoor air quality (IAQ) monitoring.',
    services: ['IAQ Certification', 'Executive Concierge', 'LEED Maintenance']
  },
  {
    id: 'gmr-aerospace-park',
    letter: 'G',
    name: 'GMR Aerospace & Defense Park',
    city: 'Hyderabad',
    state: 'Telangana',
    sectorId: 'manufacturing',
    sectorName: 'Manufacturing',
    type: 'Aerospace MRO & Defense Component Plant',
    description: 'Aviation maintenance repair and overhaul (MRO) hangar FM, cleanroom electrostatic discharge (ESD) flooring and high-bay lighting.',
    services: ['Hangar Maintenance', 'Cleanroom Floors', 'Defense Security Norms']
  },

  // H
  {
    id: 'hyderabad-hitec-datacenter',
    letter: 'H',
    name: 'Hyderabad HITEC City Hyperscale Data Hub',
    city: 'Hyderabad',
    state: 'Telangana',
    sectorId: 'data-centres',
    sectorName: 'Data Centres',
    type: 'Tier-IV Colocation Facility',
    description: 'Continuous thermal performance monitoring, UPS battery banks inspection, chilled water loop redundancy and perimeter biometric security.',
    services: ['Thermal Audits', 'Dual-Grid Redundancy', 'Biometric Access FM']
  },
  {
    id: 'hyderabad-speciality-hospital',
    letter: 'H',
    name: 'Hyderabad Super-Speciality Hospital & Research Centre',
    city: 'Hyderabad',
    state: 'Telangana',
    sectorId: 'healthcare',
    sectorName: 'Healthcare',
    type: 'Multispeciality Medical & Surgical Hospital',
    description: 'Zero-tolerance infection prevention protocols, ultra-clean operation theatre prep, medical gas pipeline management and emergency power.',
    services: ['OT Decontamination', 'Medical Gas Systems', 'Patient Room Sanitization']
  },
  {
    id: 'hyderabad-luxury-hotel',
    letter: 'H',
    name: 'Hyderabad Luxury Heritage Palace & Suites',
    city: 'Hyderabad',
    state: 'Telangana',
    sectorId: 'hospitality',
    sectorName: 'Hospitality',
    type: '5-Star Luxury Heritage Hotel & Banquets',
    description: 'Impeccable hotel guestroom housekeeping, banquet kitchen hygiene, crystal chandelier care, landscaped gardens and VIP guest concierge.',
    services: ['Luxury Housekeeping', 'Banquet FM', 'Resort Grounds Care']
  },

  // K
  {
    id: 'kochi-solar-airport',
    letter: 'K',
    name: 'Kochi Cochin International Airport (Green Solar Hub)',
    city: 'Kochi',
    state: 'Kerala',
    sectorId: 'aviation',
    sectorName: 'Aviation',
    type: 'Eco-Friendly International Terminal',
    description: 'Solar farm facility integration, terminal indoor botanical gardens maintenance, passenger lounge cleaning and rainwater recovery systems.',
    services: ['Eco-Airport Operations', 'Solar Integration FM', 'Terminal Housekeeping']
  },
  {
    id: 'kolkata-newtown-retail',
    letter: 'K',
    name: 'Kolkata New Town Retail & Commercial Hub',
    city: 'Kolkata',
    state: 'West Bengal',
    sectorId: 'retail',
    sectorName: 'Retail',
    type: 'Multi-Level Departmental & Lifestyle Center',
    description: 'Anchor tenant facility integration, shopping mall escalators and lifts maintenance, pest elimination and waste recycling programs.',
    services: ['Retail Space Audits', 'Mall Hygiene', 'Waste Divergence']
  },

  // M
  {
    id: 'mumbai-bkc-tower',
    letter: 'M',
    name: 'Mumbai Bandra-Kurla Complex (BKC) Financial Tower',
    city: 'Mumbai',
    state: 'Maharashtra',
    sectorId: 'commercial',
    sectorName: 'Commercial',
    type: 'International Banking & Financial Headquarters',
    description: 'Class-leading corporate FM, mission-critical trading floor power continuity, security screening systems, high-end guest hospitality.',
    services: ['Financial Floor Continuity', 'High-Security Access', 'Executive Facilities']
  },
  {
    id: 'mumbai-csmia-t2',
    letter: 'M',
    name: 'Mumbai Chhatrapati Shivaji Maharaj International Airport (T2)',
    city: 'Mumbai',
    state: 'Maharashtra',
    sectorId: 'aviation',
    sectorName: 'Aviation',
    type: 'Iconic Multi-Level International Aviation Terminal',
    description: 'Art wall preservation, high-volume terminal cleanliness, boarding gate logistics, baggage claim management and apron hygiene.',
    services: ['High-Volume Concourse', 'Apron Safety', 'Art & Aesthetic Preservation']
  },
  {
    id: 'mumbai-navi-mumbai-datacenter',
    letter: 'M',
    name: 'Mumbai Navi Mumbai Hyperscale Data Campus',
    city: 'Navi Mumbai',
    state: 'Maharashtra',
    sectorId: 'data-centres',
    sectorName: 'Data Centres',
    type: 'Tier-IV Colocation Campus',
    description: '24/7 technical engineering, generator fuel polishing, seismic-certified server rack stability and chilled water plant maintenance.',
    services: ['Chilled Water Plants', 'Diesel Generator FM', 'ISO 27001 Security']
  },
  {
    id: 'mumbai-luxury-resort',
    letter: 'M',
    name: 'Mumbai Seafacing Luxury Hotel & Convention Resort',
    city: 'Mumbai',
    state: 'Maharashtra',
    sectorId: 'hospitality',
    sectorName: 'Hospitality',
    type: '5-Star Luxury Sea-Facing Hotel',
    description: 'Corrosion-resistant marine environment maintenance, luxury suites housekeeping, international chef kitchen sanitation and infinity pool engineering.',
    services: ['Coastal Facility Protection', '5-Star Guest Services', 'Commercial Kitchen Hygiene']
  },

  // N
  {
    id: 'noida-innovation-campus',
    letter: 'N',
    name: 'Noida Expressway Technology & Higher Education Campus',
    city: 'Noida',
    state: 'Uttar Pradesh',
    sectorId: 'education',
    sectorName: 'Education',
    type: 'Higher Education & Tech Innovation Campus',
    description: 'Smart campus auditorium acoustics, automated classroom climate control, campus solar streetlighting and student dining hygiene.',
    services: ['Smart Classroom FM', 'Hostel Sanitation', 'Energy Audits']
  },

  // P
  {
    id: 'pune-chakan-auto',
    letter: 'P',
    name: 'Pune Chakan Heavy Manufacturing & EV Assembly Plant',
    city: 'Pune',
    state: 'Maharashtra',
    sectorId: 'manufacturing',
    sectorName: 'Manufacturing',
    type: 'Heavy Engineering & EV Production Line',
    description: 'Preventive mechanical maintenance, oil mist extraction, industrial paint shop airflow systems and employee wellness facility upkeep.',
    services: ['Paint Shop Airflow', 'Preventive Maintenance', 'Workplace Safety']
  },
  {
    id: 'pune-hinjewadi-it-park',
    letter: 'P',
    name: 'Pune Hinjewadi Megacity IT Park',
    city: 'Pune',
    state: 'Maharashtra',
    sectorId: 'commercial',
    sectorName: 'Commercial',
    type: 'Integrated Multi-Tenant Corporate Technology Park',
    description: 'Substation maintenance, corporate cafeteria services, landscaped outdoor recreational areas, campus shuttle transit and parking operations.',
    services: ['Substation Engineering', 'Campus Landscaping', 'Parking Management']
  },

  // R
  {
    id: 'raipur-medical-institute',
    letter: 'R',
    name: 'Raipur Medical & Research Institute Campus',
    city: 'Raipur',
    state: 'Chhattisgarh',
    sectorId: 'healthcare',
    sectorName: 'Healthcare',
    type: 'Tertiary Care Teaching Hospital & Labs',
    description: 'Hospital infection prevention and control (IPC), critical ICU power backup, medical gas pipeline systems (MGPS) and laundry services.',
    services: ['IPC Protocols', 'MGPS Engineering', 'Medical Laundry Logistics']
  },

  // T
  {
    id: 'thane-grand-central-mall',
    letter: 'T',
    name: 'Thane Grand Central Retail Mall & Multiplex',
    city: 'Thane',
    state: 'Maharashtra',
    sectorId: 'retail',
    sectorName: 'Retail',
    type: 'Regional Shopping & Entertainment Complex',
    description: 'Heavy weekend footfall sanitization, central air conditioning optimization, multiplex cinema hall hygiene and escalators safety audits.',
    services: ['HVAC Optimization', 'Cinema Hall Cleaning', 'Escalator Safety Audits']
  },

  // V
  {
    id: 'vadodara-petrochem-park',
    letter: 'V',
    name: 'Vadodara Petrochemical & Engineering Zone',
    city: 'Vadodara',
    state: 'Gujarat',
    sectorId: 'manufacturing',
    sectorName: 'Manufacturing',
    type: 'Industrial Chemicals & Specialized Manufacturing',
    description: 'Flameproof electrical installation checks, chemical effluent plant monitoring, hazardous zone safety patrols and boiler maintenance.',
    services: ['Flameproof Compliance', 'Hazardous Zone Patrols', 'Boiler Engineering']
  },
  {
    id: 'vizag-marine-corridor',
    letter: 'V',
    name: 'Visakhapatnam Marine & Port Logistics Hub',
    city: 'Visakhapatnam',
    state: 'Andhra Pradesh',
    sectorId: 'manufacturing',
    sectorName: 'Manufacturing',
    type: 'Heavy Industrial Port Logistics Zone',
    description: 'Anti-corrosion marine structural coatings, crane maintenance, bonded warehouse pest exclusion and industrial cold-chain monitoring.',
    services: ['Marine Coatings', 'Crane Maintenance', 'Bonded Warehouse FM']
  }
];

const SECTORS_LIST = [
  { id: 'all', label: 'All Sectors' },
  { id: 'aviation', label: 'Aviation' },
  { id: 'healthcare', label: 'Healthcare' },
  { id: 'commercial', label: 'Commercial' },
  { id: 'manufacturing', label: 'Manufacturing' },
  { id: 'data-centres', label: 'Data Centres' },
  { id: 'education', label: 'Education' },
  { id: 'retail', label: 'Retail' },
  { id: 'hospitality', label: 'Hospitality' }
];

export default function SectorLocationsDirectory() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSector, setSelectedSector] = useState('all');
  const [selectedLetter, setSelectedLetter] = useState('ALL');
  const location = useLocation();

  // Scroll to #a-z-locations if hash matches
  useEffect(() => {
    if (location.hash === '#a-z-locations') {
      const el = document.getElementById('a-z-locations');
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 150);
      }
    }
  }, [location.hash]);

  // Extract distinct available letters from the dataset
  const availableLetters = useMemo(() => {
    const lettersSet = new Set(SECTOR_LOCATIONS.map((loc) => loc.letter));
    return Array.from(lettersSet).sort();
  }, []);

  // Filter locations by search query, sector, and letter
  const filteredLocations = useMemo(() => {
    return SECTOR_LOCATIONS.filter((loc) => {
      // Sector filter
      if (selectedSector !== 'all' && loc.sectorId !== selectedSector) {
        return false;
      }
      // Letter filter
      if (selectedLetter !== 'ALL' && loc.letter !== selectedLetter) {
        return false;
      }
      // Search query filter
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchesName = loc.name.toLowerCase().includes(q);
        const matchesCity = loc.city.toLowerCase().includes(q);
        const matchesState = loc.state.toLowerCase().includes(q);
        const matchesSector = loc.sectorName.toLowerCase().includes(q);
        const matchesDesc = loc.description.toLowerCase().includes(q);
        return matchesName || matchesCity || matchesState || matchesSector || matchesDesc;
      }
      return true;
    });
  }, [searchQuery, selectedSector, selectedLetter]);

  // Group filtered locations by letter
  const groupedByLetter = useMemo(() => {
    const groups = {};
    filteredLocations.forEach((loc) => {
      if (!groups[loc.letter]) {
        groups[loc.letter] = [];
      }
      groups[loc.letter].push(loc);
    });
    return groups;
  }, [filteredLocations]);

  const sortedLetters = Object.keys(groupedByLetter).sort();

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedSector('all');
    setSelectedLetter('ALL');
  };

  const getSectorBadgeColor = (sectorId) => {
    switch (sectorId) {
      case 'aviation':
        return 'bg-sky-50 text-sky-700 border-sky-200';
      case 'healthcare':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'commercial':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'manufacturing':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'data-centres':
        return 'bg-purple-50 text-purple-700 border-purple-200';
      case 'education':
        return 'bg-teal-50 text-teal-700 border-teal-200';
      case 'retail':
        return 'bg-pink-50 text-pink-700 border-pink-200';
      case 'hospitality':
        return 'bg-indigo-50 text-indigo-700 border-indigo-200';
      default:
        return 'bg-slate-50 text-slate-700 border-slate-200';
    }
  };

  return (
    <section id="a-z-locations" className="section-padding bg-transparent border-t border-slate-200/80">
      <div className="container-custom">
        {/* Header with authentic A-Z Search icon badge */}
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
              Alphabetical Facilities Directory
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-brand-navy tracking-tight leading-tight">
            A-Z of Sector Locations
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Search our nationwide facilities management footprint across mission-critical airports, acute hospitals, hyperscale data centres, commercial towers, automotive plants, universities, shopping centres, and luxury hotels.
          </p>
        </div>

        {/* Filter & Search Bar Container */}
        <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-slate-200/80 mb-8 space-y-5">
          {/* Top Row: Search Input + Active Filters count */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
            <div className="md:col-span-8 relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by facility name, city (e.g. Bengaluru, Mumbai, Delhi), or keyword..."
                className="w-full pl-11 pr-10 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange transition-all placeholder:text-slate-400"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="md:col-span-4 flex items-center justify-between md:justify-end space-x-3">
              <span className="text-xs text-slate-500 font-medium">
                Showing <strong className="text-brand-navy">{filteredLocations.length}</strong> of {SECTOR_LOCATIONS.length} sites
              </span>
              {(searchQuery || selectedSector !== 'all' || selectedLetter !== 'ALL') && (
                <button
                  onClick={resetFilters}
                  className="text-xs font-semibold text-brand-orange hover:text-red-700 transition-colors"
                >
                  Reset Filters
                </button>
              )}
            </div>
          </div>

          {/* Sector Category Pills */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
            {SECTORS_LIST.map((sec) => {
              const isActive = selectedSector === sec.id;
              return (
                <button
                  key={sec.id}
                  onClick={() => setSelectedSector(sec.id)}
                  className={`text-xs font-medium px-3.5 py-1.5 rounded-full transition-all ${
                    isActive
                      ? 'bg-brand-navy text-white shadow-sm'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200/70 hover:text-brand-navy'
                  }`}
                >
                  {sec.label}
                </button>
              );
            })}
          </div>

          {/* Alphabet Quick-Jump Navigation Bar */}
          <div className="pt-2 border-t border-slate-100">
            <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 text-xs">
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
              {availableLetters.map((letter) => (
                <button
                  key={letter}
                  onClick={() => setSelectedLetter(letter)}
                  className={`w-7 h-7 rounded-lg font-bold flex items-center justify-center transition-colors flex-shrink-0 ${
                    selectedLetter === letter
                      ? 'bg-brand-orange text-white'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {letter}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Directory Content List */}
        {filteredLocations.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-slate-200/80">
            <div className="w-12 h-12 rounded-full bg-orange-50 text-brand-orange flex items-center justify-center mx-auto mb-3">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-brand-navy">No Sector Locations Found</h3>
            <p className="text-sm text-slate-500 mt-1 max-w-md mx-auto">
              We couldn't find any location matching "{searchQuery}" under the selected filters.
            </p>
            <button
              onClick={resetFilters}
              className="mt-4 inline-flex items-center text-xs font-semibold text-brand-orange hover:text-red-700"
            >
              Reset all filters and view all locations
            </button>
          </div>
        ) : (
          <div className="space-y-8">
            {sortedLetters.map((letter) => {
              const locationsInGroup = groupedByLetter[letter];
              return (
                <div key={letter} className="space-y-3">
                  {/* Alphabet Section Marker */}
                  <div className="flex items-center space-x-3">
                    <span className="w-9 h-9 rounded-xl bg-brand-navy text-white font-extrabold text-base flex items-center justify-center shadow-sm">
                      {letter}
                    </span>
                    <div className="h-px bg-slate-200 flex-1" />
                    <span className="text-xs font-semibold text-slate-400">
                      {locationsInGroup.length} {locationsInGroup.length === 1 ? 'Location' : 'Locations'}
                    </span>
                  </div>

                  {/* Cards Grid for this Letter */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {locationsInGroup.map((loc) => {
                      const badgeClass = getSectorBadgeColor(loc.sectorId);
                      return (
                        <div
                          key={loc.id}
                          className="bg-white rounded-2xl p-5 border border-slate-200/80 hover:border-brand-orange/40 hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
                        >
                          <div>
                            {/* Sector Pill & City */}
                            <div className="flex items-center justify-between gap-2 mb-2.5">
                              <span
                                className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${badgeClass}`}
                              >
                                {loc.sectorName}
                              </span>
                              <div className="flex items-center text-xs text-slate-500 font-medium">
                                <MapPin className="w-3.5 h-3.5 mr-1 text-brand-orange flex-shrink-0" />
                                <span className="line-clamp-1">{loc.city}</span>
                              </div>
                            </div>

                            {/* Facility Title */}
                            <h4 className="text-base font-bold text-brand-navy group-hover:text-brand-orange transition-colors">
                              {loc.name}
                            </h4>

                            <div className="text-xs font-semibold text-slate-500 mt-1">
                              {loc.type}
                            </div>

                            <p className="text-xs text-slate-600 leading-relaxed mt-2 line-clamp-3">
                              {loc.description}
                            </p>

                            {/* Key Services Pills */}
                            <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-slate-100">
                              {loc.services.map((svc, sIdx) => (
                                <span
                                  key={sIdx}
                                  className="text-[10px] font-medium bg-slate-50 text-slate-600 px-2 py-0.5 rounded-md border border-slate-100"
                                >
                                  ✓ {svc}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Link to Sector Page */}
                          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                            <span className="text-[11px] text-slate-400">
                              State: {loc.state}
                            </span>
                            <Link
                              to={`/sectors/${loc.sectorId}`}
                              className="inline-flex items-center text-xs font-semibold text-brand-orange hover:text-red-700 transition-colors group/link"
                            >
                              <span>Explore {loc.sectorName}</span>
                              <ArrowRight className="w-3 h-3 ml-1 group-hover/link:translate-x-0.5 transition-transform" />
                            </Link>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Bottom CTA info card */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-brand-navy to-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl font-bold">Have a facility requiring customized operations?</h3>
            <p className="text-sm text-slate-300">
              Our regional technical directors provide site audits and transition blueprints across any Indian tier-1/tier-2 hub.
            </p>
          </div>
          <a
            href="#contact-form"
            className="btn-gradient text-xs sm:text-sm py-2.5 px-6 whitespace-nowrap shadow-md"
          >
            Request Multi-Site Proposal
          </a>
        </div>
      </div>
    </section>
  );
}

