import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  Building2,
  ArrowRight,
  Search,
  ChevronDown,
  X,
  Check,
  Share2,
  Sparkles,
  Award,
  TrendingUp,
  ShieldCheck,
  Clock
} from 'lucide-react';
import Breadcrumbs from '../components/layout/Breadcrumbs';

export default function CaseStudies() {
  const [selectedSector, setSelectedSector] = useState('Showing All');
  const [selectedService, setSelectedService] = useState('Showing All');
  const [sortBy, setSortBy] = useState('Latest');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeStory, setActiveStory] = useState(null);
  const [copiedLink, setCopiedLink] = useState(false);

  // Dropdown filter options matching screenshots
  const sectorOptions = ['Showing All', 'Healthcare', 'Manufacturing', 'Commercial', 'Data Centres'];
  const serviceOptions = ['Showing All', 'Integrated FM', 'Soft Services', 'Cleaning', 'Hard Services'];
  const sortOptions = ['Latest', 'Oldest', 'A-Z'];

  // All 12 Customer Stories matching reference screenshots 2, 3, 4, 5
  const customerStories = [
    {
      id: 'northern-malaysia-hospital',
      title: 'Leading Northern Malaysia Hospital & NEXAAGEN: Sustaining Accreditation-Ready Operations Through Integrated Soft Services',
      excerpt: 'NEXAAGEN supports a leading Northern Malaysia hospital with integrated soft services that enhance safety, efficiency, and accreditation readiness.',
      sector: 'Healthcare',
      service: 'Soft Services',
      isFeatured: true,
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=85',
      challenge: 'Maintaining clinical-grade disinfection, JCI accreditation readiness, and continuous portering across an 800-bed acute trauma hospital without impacting surgical workflows.',
      solution: 'NEXAAGEN deployed certified healthcare soft services specialists, automated chemical dilution systems, and smart sensor washroom replenishment protocols.',
      metrics: [
        { value: '100%', label: 'JCI Audit Standard Compliance' },
        { value: '45%', label: 'Reduction in Waste Processing Times' },
        { value: '<15 min', label: 'Patient Bed Turnaround Time' }
      ],
      quote: 'NEXAAGEN’s attention to detail, compassion, and clinical rigor ensures our healthcare environments remain sterile and compassionate 24/7.',
      quoteAuthor: 'Hospital Operations Director'
    },
    {
      id: 'tertiary-hospital-uae',
      title: 'Integrated FM for a Leading Tertiary Hospital in the UAE',
      excerpt: 'Comprehensive turnkey biomedical engineering, sterile cleanroom maintenance, and five-star patient dining for a state-of-the-art medical centre in Abu Dhabi.',
      sector: 'Healthcare',
      service: 'Integrated FM',
      image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1000&q=80',
      challenge: 'Managing zero-downtime medical gas lines, operating theatre ventilation, and luxury patient hospitality under UAE Ministry of Health mandates.',
      solution: 'Integrated FM contract delivering 24/7 dedicated mechanical engineers, ISO 14644 cleanroom monitoring, and bespoke nutritional culinary services.',
      metrics: [
        { value: '99.99%', label: 'Medical Gas & HVAC Uptime' },
        { value: '96%', label: 'Patient Satisfaction Score' },
        { value: '100%', label: 'Zero Critical Audit Findings' }
      ],
      quote: 'A true partnership where patient safety and clinical excellence guide every decision.',
      quoteAuthor: 'Chief Medical Officer'
    },
    {
      id: 'global-food-beverage-manufacturer',
      title: 'Delivering Nationwide Service Consistency for a Global Food and Beverage Manufacturer',
      excerpt: 'Harmonising factory hygiene, ISO 22000 food safety sanitization, and packaging plant facility operations across multiple production facilities.',
      sector: 'Manufacturing',
      service: 'Cleaning',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80',
      challenge: 'Standardizing microbiological cleaning protocols across six distinct bottling and confectionery plants with zero cross-contamination risks.',
      solution: 'Customized dry-vapour steam sanitization, automated CIP chemical dosing, and digital audit checklists with real-time QA dashboards.',
      metrics: [
        { value: '0', label: 'Contamination Recalls Across 4 Years' },
        { value: '28%', label: 'Water Usage Reduction via Steam' },
        { value: '100%', label: 'FSSC 22000 Audit Clearance' }
      ],
      quote: 'NEXAAGEN sets the gold standard for high-hygiene food production environments.',
      quoteAuthor: 'Regional Supply Chain VP'
    },
    {
      id: 'global-electronics-manufacturer',
      title: 'Driving Compliance and Efficiency for a Global Electronics Manufacturer Through Integrated Facilities Management',
      excerpt: 'Sub-micron cleanroom air balancing, ESD-safe floor maintenance, and 11kV electrical switchgear servicing for smart device assembly lines.',
      sector: 'Manufacturing',
      service: 'Integrated FM',
      image: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=1000&q=80',
      challenge: 'Electrostatic discharge hazards and micro-particulate contamination impacting high-yield semiconductor and surface-mount PCB lines.',
      solution: 'Continuous particle counter telemetry, automated ESD floor conductivity mapping, and predictive vibration analysis on AHU fans.',
      metrics: [
        { value: '99.95%', label: 'Assembly Line Uptime Maintained' },
        { value: '32%', label: 'Drop in Unplanned Motor Failures' },
        { value: 'ISO 14001', label: 'Environmental Management Passed' }
      ],
      quote: 'Precision engineering at its best—ensuring zero downtime in high-stakes electronics manufacturing.',
      quoteAuthor: 'Plant Operations General Manager'
    },
    {
      id: 'landmark-corporate-office',
      title: 'Integrated Soft Services for a High-Profile Workplace: Landmark Corporate Office and NEXAAGEN',
      excerpt: 'Elevating occupier experience, sustainable waste diversion, and five-star concierge hospitality across a 50-storey Grade-A landmark financial tower.',
      sector: 'Commercial',
      service: 'Soft Services',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80',
      challenge: 'Balancing post-pandemic hybrid desk occupancy fluctuations with tenant expectations for hotel-grade amenities and BREEAM In-Use standards.',
      solution: 'Deployment of biophilic workspace plant maintenance, chemical-free aqueous ozone hygiene, and dynamic occupancy-based cleaning schedules.',
      metrics: [
        { value: '98.5%', label: 'Tenant Retention Rate' },
        { value: '85%', label: 'Waste Diverted from Landfill' },
        { value: 'BREEAM', label: 'Outstanding Rating Maintained' }
      ],
      quote: 'NEXAAGEN transformed our building into a magnet that attracts top Fortune 500 tenants.',
      quoteAuthor: 'Asset Management Director'
    },
    {
      id: 'indonesia-healthcare-group',
      title: 'Indonesia Healthcare Group – Integrated FM for Premium Environments',
      excerpt: 'Delivering end-to-end facilities management across 12 tertiary hospitals in Jakarta, Surabaya, and Bandung with standardized clinical hygiene.',
      sector: 'Healthcare',
      service: 'Integrated FM',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=80',
      challenge: 'Managing fragmented vendor contracts, disparate maintenance logs, and hospital-acquired infection (HAI) prevention across a private hospital chain.',
      solution: 'Single unified IFM contract, centralised CAFM computerized maintenance system, and standardized biosecurity disinfection protocols.',
      metrics: [
        { value: '52%', label: 'Reduction in Vendor Management Overhead' },
        { value: '0', label: 'Cross-Contamination Incidents' },
        { value: '98%', label: 'Colleague Training Certification Rate' }
      ],
      quote: 'Standardized operational excellence that allows our medical practitioners to focus solely on patient healing.',
      quoteAuthor: 'Group Chief Executive'
    },
    {
      id: 'jci-ready-facilities',
      title: 'Building JCI-Ready Facilities Through Integrated FM',
      excerpt: 'Achieving gold-standard international accreditation through rigorous environmental infection control and continuous physical plant compliance.',
      sector: 'Healthcare',
      service: 'Integrated FM',
      image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1000&q=80',
      challenge: 'Rigorous Joint Commission International (JCI) environment of care standards requiring traceable records for water filtration, backup power, and pathogen containment.',
      solution: 'Digital logbooks, automated water stagnation flushing, HEPA filter integrity pressure checks, and emergency generator live load testing.',
      metrics: [
        { value: '100%', label: 'JCI Accreditation Gold Seal of Approval' },
        { value: '99.98%', label: 'Continuous Backup Power Reliability' },
        { value: 'Traceable', label: '100% Digital Compliance Records' }
      ],
      quote: 'An indispensable partner who made our JCI audit journey seamless and stress-free.',
      quoteAuthor: 'Head of Quality & Compliance'
    },
    {
      id: 'twenty-tier-iii-data-centres',
      title: 'Integrated FM for 20 Tier III Data Centres with 100 Percent Uptime',
      excerpt: 'Synchronized critical facilities management covering 120MW of high-density computing across tier-one colocation and cloud campuses.',
      sector: 'Data Centres',
      service: 'Hard Services',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80',
      challenge: 'Zero tolerance for power or thermal interruption across 20 hyperscale sites supporting mission-critical banking and cloud workloads.',
      solution: 'Certified Data Centre Engineers (CDCE) managing 2N electrical distribution, automated fuel polishing, thermal containment, and strict access security.',
      metrics: [
        { value: '100.00%', label: 'SLA Thermal & Electrical Uptime' },
        { value: '1.22', label: 'Average Annual PUE Maintained' },
        { value: '0', label: 'Safety Incidents Across 2M Hours' }
      ],
      quote: 'In our business, downtime is measured in millions. NEXAAGEN delivers absolute peace of mind.',
      quoteAuthor: 'VP of Global Infrastructure'
    },
    {
      id: 'data-centre-launch-22500sqm',
      title: 'Technical and Integrated FM Support for a 22,500 sqm Data Centre Launch',
      excerpt: 'Pre-commissioning particulate cleanroom wipe-down, black-start integrated systems testing, and day-one facility operations handover.',
      sector: 'Data Centres',
      service: 'Integrated FM',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80',
      challenge: 'Transitioning a massive 22,500 sqm industrial construction site into a sub-micron particle-free ISO 14644 Tier III operational cloud facility within 60 days.',
      solution: 'Multi-stage HEPA containment cleaning, thermal imaging electrical switchgear audits, and mock disaster recovery drills prior to server loading.',
      metrics: [
        { value: '60 Days', label: 'Complete Pre-Commissioning Window' },
        { value: 'ISO 14644', label: 'Class 8 Cleanroom Certified' },
        { value: 'Day-One', label: 'Zero Handover Defects' }
      ],
      quote: 'NEXAAGEN’s expertise in pre-commissioning ensured our flagship campus launched ahead of schedule.',
      quoteAuthor: 'Head of Data Centre Development'
    },
    {
      id: 'healthcare-robotics-ozone',
      title: 'Redefining Healthcare FM Through Robotics and Ozone-Based Cleaning',
      excerpt: 'Pioneering autonomous floor disinfection robots and stabilized aqueous ozone to reduce chemical footprint while exceeding hospital hygiene standards.',
      sector: 'Healthcare',
      service: 'Cleaning',
      image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1000&q=80',
      challenge: 'Reducing chemical irritants and water consumption in high-traffic pediatric and respiratory wards without compromising pathogen kill rates.',
      solution: 'LiDAR-guided robotic scrubber scrubbers navigating hallways safely alongside human teams, paired with on-site aqueous ozone generation.',
      metrics: [
        { value: '80%', label: 'Reduction in Chemical Cleaning Agents' },
        { value: '99.99%', label: 'Pathogen Eradication Rate' },
        { value: '40%', label: 'Reduction in Fresh Water Consumption' }
      ],
      quote: 'A pioneering sustainable cleaning model that creates healthier recovery environments for our patients.',
      quoteAuthor: 'Director of Clinical Services'
    },
    {
      id: 'semiconductor-manufacturing-precision',
      title: 'Semiconductor Manufacturing Facility and NEXAAGEN: Integrated FM for a High-Precision Environment',
      excerpt: 'Maintaining ultra-pure water systems, nitrogen gas distribution, and Class 1 cleanroom environments for microelectronics fabrication.',
      sector: 'Manufacturing',
      service: 'Hard Services',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80',
      challenge: 'Nanoscale microchip lithography requires vibration isolation, sub-degree temperature stability, and continuous monitoring of toxic specialty gases.',
      solution: 'Specialist precision facilities technicians managing active vibration dampers, ultrasonic leak detection, and continuous SCADA telemetry.',
      metrics: [
        { value: 'Class 1', label: 'Cleanroom ISO Standard Maintained' },
        { value: '±0.2°C', label: 'Thermal Envelope Precision' },
        { value: '100%', label: 'Specialty Gas Safety Record' }
      ],
      quote: 'NEXAAGEN engineers understand that nanoscale manufacturing permits zero room for error.',
      quoteAuthor: 'Vice President of Microelectronics'
    },
    {
      id: 'global-pharmaceutical-hq',
      title: 'Global Pharmaceutical HQ – Integrated FM for a Corporate Workplace',
      excerpt: 'Integrated facilities management supporting 3,500 research scientists and corporate executives across state-of-the-art laboratory and campus facilities.',
      sector: 'Manufacturing',
      service: 'Integrated FM',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80',
      challenge: 'Supporting GLP research laboratories with fume hood ventilation, biological waste handling, and premium workplace amenities for corporate staff.',
      solution: 'Dedicated dual-competency teams delivering lab compliance alongside corporate concierge hospitality, wellness centers, and café operations.',
      metrics: [
        { value: '100%', label: 'GLP Laboratory Audit Compliance' },
        { value: '94%', label: 'Occupier Satisfaction Rating' },
        { value: '25%', label: 'Utility Cost Optimization' }
      ],
      quote: 'Seamless operational excellence from the research bench to the executive boardroom.',
      quoteAuthor: 'Head of Global Real Estate'
    }
  ];

  // Featured Story (first item from screenshots)
  const featuredStory = customerStories[0];

  // Filtered and sorted stories
  const filteredStories = useMemo(() => {
    let result = customerStories.filter((story) => {
      const matchesSearch =
        story.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        story.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        story.sector.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesSector =
        selectedSector === 'Showing All' || story.sector === selectedSector;

      const matchesService =
        selectedService === 'Showing All' || story.service === selectedService;

      return matchesSearch && matchesSector && matchesService;
    });

    if (sortBy === 'Oldest') {
      result = [...result].reverse();
    } else if (sortBy === 'A-Z') {
      result = [...result].sort((a, b) => a.title.localeCompare(b.title));
    }

    return result;
  }, [searchQuery, selectedSector, selectedService, sortBy]);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="w-full flex flex-col flex-1 bg-white text-slate-900 font-sans overflow-hidden">
      {/* Dynamic Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'News & Media', link: '/news' },
          { label: 'Customer Success Stories' }
        ]}
      />

      {/* ========================================================================= */}
      {/* SECTION 1: HERO CONTAINER (Screenshot 1)                                   */}
      {/* ========================================================================= */}
      <section className="relative pt-4 pb-2 sm:pt-6 sm:pb-3 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="relative rounded-[28px] sm:rounded-[36px] bg-[#FFF7F2] p-6 sm:p-8 lg:p-10 text-center overflow-hidden border border-orange-100/70 shadow-sm">
          {/* Subtle Orange Dot Pattern Watermark */}
          <div
            className="absolute inset-0 opacity-[0.25] pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(#FF5722 1.1px, transparent 1.1px)',
              backgroundSize: '24px 24px'
            }}
          />

          <div className="relative z-10 max-w-3xl mx-auto space-y-3 sm:space-y-4">
            <h1 className="text-2xl sm:text-4xl lg:text-[46px] font-heading font-medium sm:font-semibold text-[#222222] tracking-tight leading-tight">
              Customer Success Stories
            </h1>

            <p className="text-slate-600 text-xs sm:text-sm lg:text-base leading-relaxed max-w-2xl mx-auto font-normal">
              We’re in the business of outcomes, and the services we provide help deliver the very best outcomes for people. That’s our entire reason for being. Explore some of the ways we’ve helped our customers’ people and places be their best.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: FEATURED STORY CARD (Screenshot 2)                              */}
      {/* ========================================================================= */}
      <section className="py-2 sm:py-3 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div
          onClick={() => setActiveStory(featuredStory)}
          className="bg-white rounded-[28px] sm:rounded-[32px] overflow-hidden border border-slate-200/90 shadow-[0_2px_16px_rgba(0,0,0,0.04)] hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 cursor-pointer group"
        >
          {/* Left Side: Text and Badges */}
          <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-center space-y-4 sm:space-y-5">
            <div className="flex items-center space-x-2">
              <span className="px-3.5 py-1 rounded-full bg-gradient-to-r from-[#FF5722] to-[#D8232A] text-white text-xs font-bold uppercase tracking-wider shadow-sm">
                Latest Story
              </span>
              <span className="px-3.5 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
                Healthcare
              </span>
            </div>

            <h2 className="text-lg sm:text-2xl lg:text-[26px] font-heading font-medium sm:font-semibold text-[#222222] tracking-tight leading-snug group-hover:text-[#FF5722] transition-colors">
              {featuredStory.title}
            </h2>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              {featuredStory.excerpt}
            </p>

            <div className="pt-1">
              <button
                type="button"
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-full font-heading font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:shadow-lg hover:shadow-orange-500/25 group-hover:scale-105 transition-all duration-300"
              >
                <span>Read Their Story</span>
              </button>
            </div>
          </div>

          {/* Right Side: Hospital Corridor Photo */}
          <div className="lg:col-span-6 relative aspect-[4/3] lg:aspect-auto overflow-hidden bg-slate-100">
            <img
              src={featuredStory.image}
              alt={featuredStory.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: 3-DROPDOWN FILTER BAR (Screenshot 2)                            */}
      {/* ========================================================================= */}
      <section className="py-2 sm:py-3 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 sm:p-5 bg-white border border-slate-200/90 rounded-2xl shadow-sm">
          {/* 1. Sector */}
          <div className="space-y-1">
            <label className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
              Sector
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

          {/* 2. Service */}
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

          {/* 3. Sort by */}
          <div className="space-y-1">
            <label className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
              Sort by
            </label>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                aria-label="Sort Customer Stories"
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

        {/* Filter status row */}
        <div className="flex items-center justify-between text-xs text-slate-500 mt-4 px-1">
          <span>Showing <strong>{filteredStories.length}</strong> customer success stories</span>
          {(selectedSector !== 'Showing All' || selectedService !== 'Showing All' || sortBy !== 'Latest') && (
            <button
              type="button"
              onClick={() => {
                setSelectedSector('Showing All');
                setSelectedService('Showing All');
                setSortBy('Latest');
                setSearchQuery('');
              }}
              className="text-[#FF5722] font-semibold hover:underline"
            >
              Reset Filters
            </button>
          )}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: 2-COLUMN SPLIT STORY CARDS (Screenshots 3, 4, 5)                */}
      {/* ========================================================================= */}
      <section className="py-3 sm:py-5 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {filteredStories.length === 0 ? (
          <div className="text-center py-6 sm:py-8 space-y-3">
            <Building2 className="w-10 h-10 text-slate-300 mx-auto" />
            <h3 className="text-base font-heading font-bold text-slate-800">
              No customer stories found
            </h3>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              Try adjusting your selected sector or service filter to see more customer stories.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {filteredStories.map((story) => (
              <div
                key={story.id}
                onClick={() => setActiveStory(story)}
                className="bg-white rounded-3xl border border-slate-200/80 hover:border-orange-200 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col sm:flex-row cursor-pointer group justify-between"
              >
                {/* Left Side: Title, Badge, Link */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-3 sm:w-1/2">
                  <div className="space-y-2">
                    <h3 className="text-sm sm:text-base font-heading font-medium sm:font-semibold text-[#222222] group-hover:text-[#FF5722] transition-colors leading-snug line-clamp-3">
                      {story.title}
                    </h3>

                    <div>
                      <span className="inline-block px-2.5 py-0.5 rounded-full bg-orange-50 text-[#EA580C] text-[11px] font-semibold tracking-wide">
                        {story.sector}
                      </span>
                    </div>
                  </div>

                  <div className="pt-1">
                    <span className="text-xs font-medium text-[#EA580C] underline decoration-[#EA580C]/40 group-hover:decoration-[#EA580C] transition-all">
                      Find out more
                    </span>
                  </div>
                </div>

                {/* Right Side: Photo */}
                <div className="sm:w-1/2 aspect-[4/3] sm:aspect-auto overflow-hidden bg-slate-100 relative">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5: TWO SIGNATURE NAVY CARDS (Screenshot 6)                         */}
      {/* ========================================================================= */}
      <section className="py-3 sm:py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {/* Card 1: Making people and places the best they can be */}
          <div className="relative rounded-[28px] sm:rounded-[32px] overflow-hidden bg-[#0A192F] text-white p-6 sm:p-8 lg:p-10 text-center shadow-xl flex flex-col justify-between min-h-[260px] sm:min-h-[290px]">
            {/* Subtle matrix dots */}
            <div
              className="absolute inset-0 opacity-15 pointer-events-none"
              style={{
                backgroundImage: 'radial-gradient(#FFFFFF 1.2px, transparent 1.2px)',
                backgroundSize: '24px 24px'
              }}
            />

            <div className="relative z-10 space-y-3 my-auto">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-heading font-extrabold text-white tracking-tight leading-tight">
                Making people and places the best they can be
              </h2>

              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal max-w-md mx-auto">
                Our market-leading facilities services create the best experiences, productivity, practices, resilience and communities.
              </p>
            </div>

            <div className="relative z-10 pt-3">
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-7 py-2.5 rounded-full font-heading font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300"
              >
                <span>Our Services</span>
              </Link>
            </div>
          </div>

          {/* Card 2: Local heart, global reach, community impact */}
          <div className="relative rounded-[28px] sm:rounded-[32px] overflow-hidden bg-[#0A192F] text-white p-6 sm:p-8 lg:p-10 text-center shadow-xl flex flex-col justify-between min-h-[260px] sm:min-h-[290px]">
            {/* Subtle matrix dots */}
            <div
              className="absolute inset-0 opacity-15 pointer-events-none"
              style={{
                backgroundImage: 'radial-gradient(#FFFFFF 1.2px, transparent 1.2px)',
                backgroundSize: '24px 24px'
              }}
            />

            <div className="relative z-10 space-y-3 my-auto">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-heading font-extrabold text-white tracking-tight leading-tight">
                Local heart, global reach, community impact
              </h2>

              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal max-w-md mx-auto">
                Across the world, we create employment and opportunities for local people – and prioritise local suppliers, too.
              </p>
            </div>

            <div className="relative z-10 pt-3">
              <Link
                to="/about/global-locations"
                className="inline-flex items-center justify-center px-7 py-2.5 rounded-full font-heading font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300"
              >
                <span>Our Locations</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* STORY DETAIL MODAL                                                        */}
      {/* ========================================================================= */}
      {activeStory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-100 flex flex-col">
            <div className="relative aspect-[16/9] w-full">
              <img
                src={activeStory.image}
                alt={activeStory.title}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setActiveStory(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 backdrop-blur text-slate-700 hover:text-black flex items-center justify-center transition-colors shadow-md cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-5">
              <div className="flex items-center space-x-2">
                <span className="px-3 py-1 rounded-full bg-orange-100 text-[#EA580C] text-xs font-bold uppercase tracking-wider">
                  {activeStory.sector}
                </span>
                <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
                  {activeStory.service}
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-heading font-bold text-slate-900 leading-snug">
                {activeStory.title}
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                {activeStory.excerpt}
              </p>

              {/* Challenge & Solution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    The Challenge
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {activeStory.challenge}
                  </p>
                </div>

                <div className="bg-orange-50/50 rounded-2xl p-4 border border-orange-100/60 space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#EA580C]">
                    NEXAAGEN Solution
                  </span>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    {activeStory.solution}
                  </p>
                </div>
              </div>

              {/* Verified Metrics */}
              {activeStory.metrics && (
                <div className="pt-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                    Verified Outcomes
                  </span>
                  <div className="grid grid-cols-3 gap-3">
                    {activeStory.metrics.map((metric, mIdx) => (
                      <div
                        key={mIdx}
                        className="bg-slate-50 rounded-xl p-3 border border-slate-100 text-center space-y-0.5"
                      >
                        <div className="text-base sm:text-lg font-heading font-bold text-[#FF5722]">
                          {metric.value}
                        </div>
                        <div className="text-[10px] text-slate-500 font-medium leading-tight">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Client Quote */}
              {activeStory.quote && (
                <div className="p-4 rounded-2xl bg-slate-50/60 border-l-4 border-[#FF5722] space-y-1">
                  <p className="text-xs sm:text-sm text-slate-700 italic">
                    "{activeStory.quote}"
                  </p>
                  <span className="text-[11px] font-bold text-slate-500 block">
                    — {activeStory.quoteAuthor}
                  </span>
                </div>
              )}

              {/* Modal Footer */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  type="button"
                  onClick={handleShare}
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
                      <span>Share Story</span>
                    </>
                  )}
                </button>

                <div className="flex items-center space-x-2">
                  <Link
                    to="/contact"
                    className="inline-flex items-center px-5 py-2 rounded-full font-heading font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:shadow-lg hover:shadow-orange-500/25 transition-all"
                  >
                    <span>Connect With Us</span>
                  </Link>

                  <button
                    type="button"
                    onClick={() => setActiveStory(null)}
                    className="px-4 py-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
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
