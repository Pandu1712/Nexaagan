import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';

/**
 * HealthcareSectorContent Component
 * Directly replicates all sections from the 11 user reference screenshots:
 * 1. "A Partner That Shares Your Care" (Text left with 3 winning tools, Photo right)
 * 2. "Healthcare Solutions by NEXAAGEN" (5-tab interactive capsule with detailed Why & What delivers)
 * 3. "Sustainability in Action: Responsible Healthcare" (Photo left, 3 sustainability pillars right)
 * 4. "Case Studies" (4 healthcare case study cards with interactive carousel navigation)
 * 5. "Connect with Our Healthcare Team" (Direct 2-column contact card with nurse image right)
 */
export default function HealthcareSectorContent() {
  const [activeTab, setActiveTab] = useState('security');
  const [storyIndex, setStoryIndex] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
    postCode: '',
    sector: 'Healthcare',
    serviceRequired: 'Integrated Facilities Management',
    details: '',
    agreed: false,
  });

  const solutionsTabs = [
    {
      id: 'security',
      label: 'Security Services',
      title: 'Security Services',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1000&q=80',
      imageAlt: 'NEXAAGEN Healthcare Security Professional',
      intro:
        'A calm, secure hospital builds trust. Our hospital-focused security teams manage access to restricted areas, support emergency protocols, and maintain visible calm across wards and public zones.',
      whyList: [
        'Staff trained in healthcare conflict response',
        'Real-time coordination with clinical operations',
        'Sensitive to patient privacy and hospital flow',
      ],
      deliversList: [
        'Fewer disruptions in high-risk or high traffic areas',
        'Increased control over pharmacy, ICU, and ED zones',
        'Confidence in frontline safety and visitor management',
      ],
    },
    {
      id: 'critical-systems',
      label: 'Critical Systems Maintenance',
      title: 'Critical Systems Maintenance',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80',
      imageAlt: 'NEXAAGEN Hospital MEP Critical Systems Engineer',
      intro:
        "Reliable systems keep care moving. NEXAAGEN manages HVAC, medical gas, electrical, and automation systems to keep infrastructure running without pause; through on-site teams, real-time monitoring, and scheduled maintenance that works around clinical operations.",
      whyList: [
        'Self-performed by hospital-based engineers',
        'CMMS-linked maintenance with full traceability',
        '24/7 readiness for essential systems',
      ],
      deliversList: [
        'Fewer outages in high-dependency areas',
        'Reliable uptime across theatres, wards, and labs',
        'Assurance that critical systems hold when care can’t stop',
      ],
    },
    {
      id: 'clinical-hygiene',
      label: 'Clinical Hygiene & Infection Control',
      title: 'Clinical Hygiene & Infection Control',
      image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1000&q=80',
      imageAlt: 'NEXAAGEN Healthcare Infection Control Sanitisation',
      intro:
        "Safe environments start with consistent routines. NEXAAGEN' hospital trained teams follow zoning protocols, high-touch routines, and SOPs aligned with audit standards; reducing the risk of infections without needing daily intervention.",
      whyList: [
        'Consistent, audit ready cleaning without reminders',
        'Biohazard, pest, and waste management in sync',
        'Proven zoning and scheduling for high risk areas',
      ],
      deliversList: [
        'Reduced infection risk in patient care zones',
        'Peace of mind for IC leads and ops teams',
        'Hygiene that not burdens but supports care delivery',
      ],
    },
    {
      id: 'integrated-delivery',
      label: 'Integrated Facilities Delivery',
      title: 'Integrated Facilities Delivery',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80',
      imageAlt: 'NEXAAGEN Healthcare Integrated Engineering Technicians',
      intro:
        'Integrated services improve performance. NEXAAGEN bundles cleaning, engineering, portering, waste, pest control, and support services under one accountable FM team; reducing delays, overlaps, and misalignment across your site.',
      whyList: [
        'Coordinated, cross-trained teams on one system',
        'On-site supervisors for faster decision-making',
        'Sector-specific delivery without third-party handoffs',
      ],
      deliversList: [
        'Better continuity between shifts, wards, and workflows',
        'Clear reporting with fewer missed tasks',
        'Integrated FM aligned to hospital demands',
      ],
    },
    {
      id: 'data-driven',
      label: 'Data-Driven Facilities Management',
      title: 'Data-Driven Facilities Management',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=80',
      imageAlt: 'NEXAAGEN Data-Driven Hospital Facility Manager',
      intro:
        'Timely visibility leads to better and faster decisions. Our digital systems provide visibility across cleaning, maintenance, energy use, and compliance; so hospital leaders can act fast, stay audit-ready, and report with confidence.',
      whyList: [
        'CMMS, IoT, and BMS fully integrated across services',
        'Dashboards mapped to internal KPIs and risk triggers',
        'Alerts built around clinical timelines, not just FM schedules',
      ],
      deliversList: [
        'Faster response to failures and delays',
        'Evidence for inspections and internal governance',
        'FM that informs and not delays operational decisions',
      ],
    },
  ];

  const currentTab = solutionsTabs.find((t) => t.id === activeTab) || solutionsTabs[0];

  const caseStudies = [
    {
      id: 'story-robotics',
      tag: 'Healthcare',
      title: 'Redefining Healthcare FM Through Robotics and Ozone-Based Cleaning',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80',
      link: '/contact',
    },
    {
      id: 'story-jci',
      tag: 'Healthcare',
      title: 'Building JCI-Ready Facilities Through Integrated FM',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=80',
      link: '/contact',
    },
    {
      id: 'story-biopharma',
      tag: 'Biopharmaceutical • Healthcare',
      title: 'Best practices and resilience – Adherence to ISO 10,000 Grade B for Biopharma customer',
      image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=1000&q=80',
      link: '/contact',
    },
    {
      id: 'story-ripple',
      tag: 'Healthcare',
      title: 'Reducing carbon at the Ripple Retreat – Positive customer impact and legacy',
      image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1000&q=80',
      link: '/contact',
    },
  ];

  const nextStory = () => {
    setStoryIndex((prev) => (prev + 1) % caseStudies.length);
  };

  const prevStory = () => {
    setStoryIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  const handleFormChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="w-full bg-white text-[#2B3A41] overflow-hidden">
      {/* =========================================================================
          SECTION 1: "A Partner That Shares Your Care"
          ========================================================================= */}
      <section id="partner-care" className="py-4 sm:py-6 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#1E293B] leading-tight mb-4">
                A Partner That Shares Your Care
              </h2>
              <p className="text-base sm:text-lg text-[#64748B] leading-relaxed mb-3">
                More than a service provider, we are a team that understands the heart of healthcare. Our in-house experts deliver reliable, compliant services, working as an extension of your staff.
              </p>
              <p className="text-base sm:text-lg text-[#64748B] leading-relaxed mb-5">
                What makes us different is our healthcare expertise delivered with local care, offering direct, in-house services for reliable support and patient-centred, practical solutions.
              </p>

              <h4 className="text-lg font-bold text-[#1E293B] mb-3">
                Our Winning Tools:
              </h4>

              <div className="space-y-3">
                {[
                  'Top-tier hygiene and safety standards.',
                  'Global expertise, locally executed.',
                  'Real-time performance tracking.',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-[#E03A00] to-[#FF5E00] flex items-center justify-center text-white shrink-0 shadow-sm">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span className="text-base sm:text-lg text-[#334155] font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Photo: Female Healthcare Engineer */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="rounded-3xl overflow-hidden shadow-lg border border-[#E5E7EB] max-w-md w-full">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80"
                  alt="NEXAAGEN Healthcare Engineer"
                  className="w-full h-auto object-cover rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: "Healthcare Solutions by NEXAAGEN" (5-Tab Capsule)
          ========================================================================= */}
      <section className="py-4 sm:py-6 bg-[#FAFAFA] border-t border-[#F0F0F0]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Header */}
          <div className="text-left w-full mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold text-[#1E293B] mb-3 whitespace-normal sm:whitespace-nowrap">
              Healthcare Solutions by NEXAAGEN
            </h2>
            <p className="text-base sm:text-lg text-[#64748B]">
              Tailored Facilities Management with Infection Prevention at the Core
            </p>
          </div>

          {/* Elongated Pill Tab Container (matches user reference screenshots) */}
          <div className="flex justify-start mb-8 sm:mb-12">
            <div className="w-full max-w-5xl bg-white rounded-full p-1.5 sm:p-2 border border-[#FDDAD0] shadow-sm flex flex-wrap sm:flex-nowrap items-center justify-between gap-1">
              {solutionsTabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 py-2.5 sm:py-3 px-3 sm:px-4 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 text-center leading-tight whitespace-normal ${isActive
                        ? 'bg-gradient-to-r from-[#E03A00] to-[#FF5E00] text-white shadow-md'
                        : 'text-[#E03A00] hover:bg-[#FFF5F2]'
                      }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tab Content Display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTab.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center bg-white p-8 sm:p-12 rounded-3xl border border-[#EAEAEA] shadow-sm"
            >
              {/* Left Tab Image */}
              <div className="lg:col-span-5 rounded-2xl overflow-hidden shadow-sm flex justify-center">
                <img
                  src={currentTab.image}
                  alt={currentTab.imageAlt}
                  className="w-full max-w-md h-auto object-cover rounded-2xl border border-[#EFEFEF]"
                />
              </div>

              {/* Right Tab Content */}
              <div className="lg:col-span-7 space-y-6">
                <h3 className="text-2xl sm:text-3xl font-bold text-[#1E293B]">
                  {currentTab.title}
                </h3>
                <p className="text-base text-[#64748B] leading-relaxed">
                  {currentTab.intro}
                </p>

                {/* Why NEXAAGEN? */}
                <div className="space-y-2.5 pt-2">
                  <h4 className="text-sm font-bold text-[#1E293B] tracking-wide">
                    Why NEXAAGEN?
                  </h4>
                  <ul className="space-y-2">
                    {currentTab.whyList.map((item, i) => (
                      <li key={i} className="flex items-start text-sm text-[#475569]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E03A00] mt-2 mr-3 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* What NEXAAGEN Delivers: */}
                <div className="space-y-2.5 pt-2">
                  <h4 className="text-sm font-bold text-[#1E293B] tracking-wide">
                    What NEXAAGEN Delivers:
                  </h4>
                  <ul className="space-y-2">
                    {currentTab.deliversList.map((item, i) => (
                      <li key={i} className="flex items-start text-sm text-[#475569]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E03A00] mt-2 mr-3 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: "Sustainability in Action: Responsible Healthcare"
          ========================================================================= */}
      <section className="py-4 sm:py-6 bg-white border-t border-[#F0F0F0]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Header */}
          <div className="text-left w-full mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold text-[#1E293B] mb-3 whitespace-normal sm:whitespace-nowrap">
              Sustainability in Action: Responsible Healthcare
            </h2>
            <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
              We embrace sustainability as key to better healthcare. Our facilities services optimise hospital operations while promoting environmental, social, and ethical goals, aligning with your care-focused mission.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Photo: Sunlit green tree canopy with modern hospital building */}
            <div className="lg:col-span-6 rounded-3xl overflow-hidden shadow-md flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
                alt="NEXAAGEN Sustainable Healthcare Building"
                className="w-full h-auto object-cover rounded-3xl"
              />
            </div>

            {/* Right: 3 Pillars with Clean Typography */}
            <div className="lg:col-span-6 space-y-6">
              <div className="border-l-2 border-[#E03A00] pl-4 space-y-1">
                <h3 className="text-xl font-bold text-[#1E293B]">
                  Environmental Responsibility
                </h3>
                <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
                  We lower your ecological footprint with energy-saving systems, waste reduction, and eco-friendly cleaning meeting global standards.
                </p>
              </div>

              <div className="border-l-2 border-[#E03A00] pl-4 space-y-1">
                <h3 className="text-xl font-bold text-[#1E293B]">
                  Social Impact
                </h3>
                <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
                  We support staff and patient well-being, engage communities, and maintain ethical operations for thriving healthcare settings.
                </p>
              </div>

              <div className="border-l-2 border-[#E03A00] pl-4 space-y-1">
                <h3 className="text-xl font-bold text-[#1E293B]">
                  Transparent Governance
                </h3>
                <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
                  We ensure accountability and compliance in all services, from audits to resource management, for reliable operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: "Case Studies" (Carousel)
          ========================================================================= */}
      <section className="py-4 sm:py-6 bg-[#FAFAFA] border-t border-[#F0F0F0]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Header with Title left and Prev/Next buttons right */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-8">
            <div className="max-w-2xl mb-4 md:mb-0">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1E293B] mb-2">
                Case Studies
              </h2>
              <p className="text-base sm:text-lg text-[#64748B]">
                Across the region, NEXAAGEN supports leading hospitals and clinics in meeting operational goals, improving patient environments, and maintaining reputational excellence.
              </p>
            </div>
            {/* Navigation Arrows */}
            <div className="flex items-center space-x-3 shrink-0">
              <button
                onClick={prevStory}
                aria-label="Previous case study"
                className="w-10 h-10 rounded-full border border-[#CBD5E1] bg-white flex items-center justify-center text-[#475569] hover:border-[#E03A00] hover:text-[#E03A00] transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextStory}
                aria-label="Next case study"
                className="w-10 h-10 rounded-full border border-[#0B1B3D] bg-white flex items-center justify-center text-[#0B1B3D] hover:bg-[#0B1B3D] hover:text-white transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* 3 Active Cards from current story index */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[0, 1, 2].map((offset) => {
              const idx = (storyIndex + offset) % caseStudies.length;
              const story = caseStudies[idx];
              return (
                <div
                  key={story.id}
                  className="bg-white rounded-3xl overflow-hidden shadow-sm border border-[#EAEAEA] flex flex-col hover:shadow-md transition-shadow duration-300"
                >
                  <div className="h-56 overflow-hidden">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-7 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="inline-block text-xs font-semibold text-[#64748B] uppercase tracking-wider mb-2">
                        {story.tag}
                      </span>
                      <h4 className="text-lg font-bold text-[#1E293B] leading-snug mb-6">
                        {story.title}
                      </h4>
                    </div>
                    <Link
                      to={story.link}
                      className="inline-flex items-center text-sm font-semibold text-[#E03A00] hover:text-[#FF5E00] transition-colors underline underline-offset-4"
                    >
                      Read their story
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: "Connect with Our Healthcare Team" (Form + Nurse Image)
          ========================================================================= */}
      <section id="contact-form" className="py-3 sm:py-5 bg-white border-t border-[#F0F0F0]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="bg-[#FAF9F7] rounded-3xl p-5 sm:p-8 lg:p-10 border border-[#EFECE6] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Column: Form */}
            <div className="lg:col-span-7">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1E293B] mb-5">
                Connect with Our Healthcare Team
              </h2>

              {formSubmitted ? (
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-8 rounded-2xl text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h4 className="text-xl font-bold text-emerald-900">
                    Thank you for reaching out!
                  </h4>
                  <p className="text-sm text-emerald-700">
                    Our Healthcare Practice Directors have received your details and will contact you within 2 business hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  {/* First Name & Last Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#475569] mb-1.5">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleFormChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-[#CBD5E1] bg-white text-sm text-[#1E293B] focus:outline-none focus:border-[#E03A00]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#475569] mb-1.5">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleFormChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-[#CBD5E1] bg-white text-sm text-[#1E293B] focus:outline-none focus:border-[#E03A00]"
                      />
                    </div>
                  </div>

                  {/* Company & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#475569] mb-1.5">
                        Company *
                      </label>
                      <input
                        type="text"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleFormChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-[#CBD5E1] bg-white text-sm text-[#1E293B] focus:outline-none focus:border-[#E03A00]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#475569] mb-1.5">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleFormChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-[#CBD5E1] bg-white text-sm text-[#1E293B] focus:outline-none focus:border-[#E03A00]"
                      />
                    </div>
                  </div>

                  {/* Phone & Post Code */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#475569] mb-1.5">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleFormChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-[#CBD5E1] bg-white text-sm text-[#1E293B] focus:outline-none focus:border-[#E03A00]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#475569] mb-1.5">
                        Post Code *
                      </label>
                      <input
                        type="text"
                        name="postCode"
                        required
                        value={formData.postCode}
                        onChange={handleFormChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-[#CBD5E1] bg-white text-sm text-[#1E293B] focus:outline-none focus:border-[#E03A00]"
                      />
                    </div>
                  </div>

                  {/* Sector & Service Required */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#475569] mb-1.5">
                        Sector *
                      </label>
                      <select
                        name="sector"
                        value={formData.sector}
                        onChange={handleFormChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-[#CBD5E1] bg-white text-sm text-[#1E293B] focus:outline-none focus:border-[#E03A00]"
                      >
                        <option value="Healthcare">Healthcare</option>
                        <option value="Commercial">Commercial</option>
                        <option value="Data Centres">Data Centres</option>
                        <option value="Education">Education</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#475569] mb-1.5">
                        Service Required *
                      </label>
                      <select
                        name="serviceRequired"
                        value={formData.serviceRequired}
                        onChange={handleFormChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-[#CBD5E1] bg-white text-sm text-[#1E293B] focus:outline-none focus:border-[#E03A00]"
                      >
                        <option value="Integrated Facilities Management">Integrated Facilities Management</option>
                        <option value="Clinical Hygiene & Infection Control">Clinical Hygiene &amp; Infection Control</option>
                        <option value="Critical Systems Maintenance">Critical Systems Maintenance</option>
                        <option value="Hospital Security Services">Hospital Security Services</option>
                        <option value="Data-Driven Facilities Management">Data-Driven Facilities Management</option>
                      </select>
                    </div>
                  </div>

                  {/* Please provide further details */}
                  <div>
                    <label className="block text-xs font-semibold text-[#475569] mb-1.5">
                      Please provide further details *
                    </label>
                    <textarea
                      name="details"
                      rows={3}
                      required
                      value={formData.details}
                      onChange={handleFormChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#CBD5E1] bg-white text-sm text-[#1E293B] focus:outline-none focus:border-[#E03A00]"
                    />
                  </div>

                  {/* Consent checkbox */}
                  <div className="flex items-start space-x-2 pt-2">
                    <input
                      type="checkbox"
                      id="agreed"
                      name="agreed"
                      required
                      checked={formData.agreed}
                      onChange={handleFormChange}
                      className="mt-1 accent-[#E03A00]"
                    />
                    <label htmlFor="agreed" className="text-xs text-[#64748B] leading-relaxed">
                      I agree to the Terms and Conditions and Privacy Policy and I am happy for NEXAAGEN to collect my information. *
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-3">
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-9 py-3.5 rounded-full bg-gradient-to-r from-[#E03A00] to-[#FF5E00] text-white font-bold text-sm shadow-md hover:shadow-lg hover:brightness-105 transition-all duration-300"
                    >
                      Submit Form
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Right Column: Nurse pushing patient gurney */}
            <div className="lg:col-span-5 rounded-2xl overflow-hidden shadow-sm flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80"
                alt="NEXAAGEN Healthcare Clinical Support"
                className="w-full max-w-md h-auto object-cover rounded-2xl border border-[#E5E7EB]"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

