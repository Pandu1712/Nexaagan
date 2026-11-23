import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronLeft, ChevronRight, CheckCircle2, ArrowRight, MessageCircle } from 'lucide-react';

/**
 * ManufacturingSectorContent Component
 * Directly replicates all sections from the user reference screenshots (OCS Manufacturing Sector):
 * 1. "A Partner on Your Floor" (Text left with 3 winning tools, Plant Engineer photo right)
 * 2. "Manufacturing Solutions by NEXAAGEN" (5-tab interactive capsule with detailed Why & What delivers)
 * 3. "Sustainability in Action: Responsible Manufacturing" (Forklift operator photo left, 3 sustainability pillars right)
 * 4. "Case Studies" (4 manufacturing case study cards with interactive carousel navigation)
 * 5. "Connect with Our Manufacturing Team" (Direct 2-column contact card with industrial mechanic wrench image right)
 */
export default function ManufacturingSectorContent() {
  const [activeTab, setActiveTab] = useState('ifm');
  const [storyIndex, setStoryIndex] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
    postCode: '',
    sector: 'Manufacturing',
    serviceRequired: 'Integrated Facilities Management',
    details: '',
    agreed: false,
  });

  const solutionsTabs = [
    {
      id: 'ifm',
      label: 'Integrated Facilities Management',
      title: 'Integrated Facilities Management',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
      imageAlt: 'NEXAAGEN Manufacturing Integrated Facilities Engineers',
      intro:
        'Complexity and cost rise when multiple vendors overlap. Our integrated FM delivery reduces overheads, embeds compliance, and supports sustainability targets across all services.',
      whyList: [
        'One accountable partner for multiple services',
        'Vendor consolidation to reduce costs and delays',
        'Sustainability reporting inputs for ESG and Net Zero',
      ],
      deliversList: [
        'Streamlined operations with clear accountability',
        'Lower overheads and reduced management burden',
        'Audit-ready evidence for regulators and clients',
      ],
    },
    {
      id: 'hard-services',
      label: 'Hard Services',
      title: 'Hard Services & Critical Plant Maintenance',
      image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80',
      imageAlt: 'NEXAAGEN Industrial Hard Services Maintenance Engineer',
      intro:
        'Unscheduled equipment failure halts production lines instantly. Our on-site mechanical and electrical engineers manage boilers, compressed air, chillers, and substations to guarantee continuous plant uptime.',
      whyList: [
        'Certified engineers embedded directly on your plant floor',
        'CMMS-linked predictive maintenance and vibration analysis',
        'Rapid 24/7 breakdown recovery and planned shutdown execution',
      ],
      deliversList: [
        '99.95%+ production line utility reliability',
        'Maximized asset lifespan and reduced capital replacement costs',
        'Total statutory compliance for high-voltage and pressure systems',
      ],
    },
    {
      id: 'cleaning',
      label: 'Cleaning',
      title: 'Industrial Cleaning & Decontamination',
      image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=1200&q=80',
      imageAlt: 'NEXAAGEN Specialist Industrial Cleaning Team',
      intro:
        'From heavy manufacturing grease extraction to ISO-certified cleanroom decontamination, our industrial cleaning teams maintain immaculate, audit-ready facilities without slowing down production shifts.',
      whyList: [
        'Specialist training in hazardous substance and chemical handling',
        'Automated robotic scrubbing and dry-ice blasting technologies',
        'Flexible scheduling planned around active production shifts',
      ],
      deliversList: [
        'Slip-free, hazard-free shop floors improving worker safety',
        'Strict particulate control for high-precision manufacturing',
        'Zero contamination incidents during client and regulatory audits',
      ],
    },
    {
      id: 'security',
      label: 'Security',
      title: 'Industrial Security & Access Control',
      image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=80',
      imageAlt: 'NEXAAGEN Manufacturing Plant Security Access',
      intro:
        'Securing multi-acre manufacturing compounds, intellectual property, and high-value cargo requires vigilant, tech-enabled physical security. We safeguard your perimeter, inventory, and personnel 24/7.',
      whyList: [
        'SIA-certified and background-vetted security officers',
        'Integrated biometric turnstiles, ANPR cameras, and CCTV monitoring',
        'Strict protocol enforcement for contractor and truck deliveries',
      ],
      deliversList: [
        'Zero unauthorized access or intellectual property breaches',
        'Smooth logistics vehicle flow at plant entrance and weighbridges',
        'Rapid response protocols for industrial emergencies and evacuations',
      ],
    },
    {
      id: 'pest-control',
      label: 'Pest Control',
      title: 'Commercial Pest Elimination & Food-Grade Auditing',
      image: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&w=1200&q=80',
      imageAlt: 'NEXAAGEN Sterile Industrial Pest Control Inspection',
      intro:
        'For food & beverage, pharmaceutical, and electronics manufacturing, zero pest tolerance is mandatory. We provide non-toxic, digital monitoring and exclusion systems that satisfy FDA, BRCGS, and ISO standards.',
      whyList: [
        'HACCP-trained and IPM-certified pest prevention specialists',
        'Smart IoT electronic rodent traps with real-time alerts',
        'Complete digital trend analysis and audit-ready documentation',
      ],
      deliversList: [
        '100% compliance during unannounced hygiene audits',
        'Protection of raw materials and finished goods inventory',
        'Safe, non-disruptive treatments protecting factory air quality',
      ],
    },
  ];

  const currentTab = solutionsTabs.find((t) => t.id === activeTab) || solutionsTabs[0];

  const caseStudies = [
    {
      id: 'cs-pharma',
      category: 'Manufacturing',
      title: 'Global Pharmaceutical HQ – Integrated FM for a Corporate Workplace',
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1200&q=80',
      imageAlt: 'Pharmaceutical Manufacturing Tablets and Blister Packs',
    },
    {
      id: 'cs-semiconductor',
      category: 'Manufacturing',
      title: 'Semiconductor Manufacturing Facility and NEXAAGEN: Integrated FM for a High-Precision Environment',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
      imageAlt: 'High-Tech Semiconductor Cleanroom Manufacturing Robotics',
    },
    {
      id: 'cs-fmcg',
      category: 'Manufacturing',
      title: 'FMCG Food Processing Facility: Zero-Disruption Hygiene & Cold-Chain HVAC',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
      imageAlt: 'Food & Beverage Processing Production Line',
    },
    {
      id: 'cs-automotive',
      category: 'Manufacturing',
      title: 'Automotive Assembly Campus: 48-Hour Shutdown Turnaround & Plant Engineering',
      image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1200&q=80',
      imageAlt: 'Automotive Manufacturing Plant Robotics',
    },
  ];

  const nextStory = () => {
    setStoryIndex((prev) => (prev + 1 >= caseStudies.length - 1 ? 0 : prev + 1));
  };

  const prevStory = () => {
    setStoryIndex((prev) => (prev - 1 < 0 ? Math.max(0, caseStudies.length - 2) : prev - 1));
  };

  const [waLink, setWaLink] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agreed) return;
    const lines = [
      `*New Manufacturing Consultation Request - NEXAAGEN*`,
      ``,
      `*Name:* ${formData.firstName} ${formData.lastName}`.trim(),
      `*Company:* ${formData.company}`.trim(),
      `*Email:* ${formData.email}`.trim(),
      `*Phone:* ${formData.phone}`.trim(),
      `*Post Code:* ${formData.postCode}`.trim(),
      `*Service Required:* ${formData.serviceRequired}`.trim(),
    ];
    if (formData.furtherDetails) {
      lines.push(`*Further Details:* ${formData.furtherDetails}`);
    }
    const message = lines.filter(Boolean).join('\n');
    const waUrl = `https://wa.me/919988331575?text=${encodeURIComponent(message)}`;
    setWaLink(waUrl);
    try {
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    } catch (err) { }
    setFormSubmitted(true);
  };

  return (
    <div className="w-full flex flex-col space-y-6 sm:space-y-8 py-4 sm:py-6 bg-transparent overflow-hidden">

      {/* ------------------------------------------------------------------ */}
      {/* SECTION 2: A PARTNER ON YOUR FLOOR (Matches User Screenshot 2)     */}
      {/* ------------------------------------------------------------------ */}
      <section id="partner-floor" className="container-custom scroll-mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left Column: Heading, Paragraphs, 3 Checkpoints */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-brand-navy tracking-tight leading-tight">
              A Partner on Your Floor
            </h2>

            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              <p>
                Facilities management works best when it's part of the operation, not apart from it.
              </p>
              <p>
                That's why we don't deliver from a distance. NEXAAGEN teams are based inside your plants and factories, working alongside production staff to manage the conditions that keep lines running smoothly.
              </p>
              <p>
                What makes us different is our ability to combine local delivery with global standards. With directly employed staff, structured processes, and sector-specific expertise, we act as an extension of your team to ensure stability, compliance, and sustainable performance across every shift.
              </p>
            </div>

            {/* Sub-header for bullets */}
            <div className="pt-2">
              <h3 className="text-slate-900 font-bold text-sm sm:text-[15px] mb-3.5">
                What makes leading manufacturers partner with NEXAAGEN:
              </h3>

              <div className="space-y-3.5">
                {[
                  'Reliable execution in regulated environments through our self-delivery model',
                  'Safeguarding operational continuity built on manufacturing-specific FM expertise',
                  'Regionally consistent FM delivery with global governance and local expertise',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3.5">
                    <span className="w-5 h-5 rounded-full bg-gradient-to-r from-[#FF5722] to-[#D8232A] flex items-center justify-center text-white flex-shrink-0 mt-0.5 shadow-sm">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </span>
                    <span className="text-slate-700 text-xs sm:text-sm font-medium leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: High-Res Plant Engineer in Hard Hat */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl sm:rounded-[36px] overflow-hidden shadow-xl border border-slate-100 aspect-[4/3] sm:aspect-[4/3.4] group">
              <img
                src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80"
                alt="A Partner on Your Floor Manufacturing Plant Engineer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
            </div>
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION 3: MANUFACTURING SOLUTIONS BY NEXAAGEN (Matches Screenshot 3)*/}
      {/* ------------------------------------------------------------------ */}
      <section className="container-custom">
        <div className="space-y-6 sm:space-y-8">

          {/* Header */}
          <div className="text-left w-full space-y-2 mb-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-brand-navy tracking-tight leading-tight whitespace-normal sm:whitespace-nowrap">
              Manufacturing Solutions by NEXAAGEN
            </h2>
            <p className="text-slate-500 text-sm sm:text-base">
              Facilities management designed to keep production lines stable, safe, and compliant.
            </p>

            {/* Pill Capsule Navigation Tabs in Single Line */}
            <div className="pt-4 flex items-center justify-start gap-2 sm:gap-3 overflow-x-auto no-scrollbar pb-1 w-full">
              {solutionsTabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-5 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap flex-shrink-0 transition-all duration-300 ${isActive
                        ? 'bg-gradient-to-r from-[#FF5722] to-[#D8232A] text-white shadow-md shadow-orange-500/25'
                        : 'bg-white text-slate-700 hover:text-brand-orange border border-slate-200/80 hover:border-orange-200'
                      }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Tab Content Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTab.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center"
            >
              {/* Left Column: Image */}
              <div className="lg:col-span-6">
                <div className="relative rounded-3xl sm:rounded-[36px] overflow-hidden shadow-xl border border-slate-100 aspect-[4/3] sm:aspect-[4/3.4] group">
                  <img
                    src={currentTab.image}
                    alt={currentTab.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Right Column: Title, Intro, Why NEXAAGEN? + What NEXAAGEN Delivers */}
              <div className="lg:col-span-6 space-y-6">
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-brand-navy tracking-tight">
                  {currentTab.title}
                </h3>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {currentTab.intro}
                </p>

                {/* Why NEXAAGEN? */}
                <div className="space-y-2.5">
                  <h4 className="text-slate-900 font-bold text-xs sm:text-sm uppercase tracking-wider text-brand-orange">
                    Why NEXAAGEN?
                  </h4>
                  <ul className="space-y-2">
                    {currentTab.whyList.map((item, idx) => (
                      <li key={idx} className="flex items-center text-slate-700 text-xs sm:text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mr-3 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* What NEXAAGEN Delivers */}
                <div className="space-y-2.5">
                  <h4 className="text-slate-900 font-bold text-xs sm:text-sm uppercase tracking-wider text-brand-navy">
                    What NEXAAGEN Delivers:
                  </h4>
                  <ul className="space-y-2">
                    {currentTab.deliversList.map((item, idx) => (
                      <li key={idx} className="flex items-center text-slate-700 text-xs sm:text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-orange mr-3 flex-shrink-0" />
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

      {/* ------------------------------------------------------------------ */}
      {/* SECTION 4: SUSTAINABILITY IN ACTION (Matches User Screenshot 4)    */}
      {/* ------------------------------------------------------------------ */}
      <section className="container-custom">
        <div className="space-y-6 sm:space-y-8">

          {/* Header */}
          <div className="text-left w-full space-y-3 mb-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-brand-navy tracking-tight leading-tight whitespace-normal sm:whitespace-nowrap">
              Sustainability in Action: Responsible Manufacturing
            </h2>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
              Manufacturers are under growing pressure to reduce emissions, prove ESG progress, and still meet production targets. NEXAAGEN builds these goals into daily FM delivery; helping sites move toward Net Zero while protecting throughput.
            </p>
          </div>

          {/* 2-Column Grid: Image Left + 3 Pillars Right with green line */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">

            {/* Left Column: Forklift Operator */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl sm:rounded-[36px] overflow-hidden shadow-xl border border-slate-100 aspect-[4/3] sm:aspect-[4/3.4] group">
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80"
                  alt="Responsible Manufacturing Forklift Operator"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right Column: 3 Pillars with vertical green accent border */}
            <div className="lg:col-span-6 relative pl-6 border-l-2 border-emerald-500/70 space-y-8">

              {/* Pillar 1 */}
              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-brand-navy">
                  Environmental Responsibility
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Energy is managed through calibrated HVAC performance, LED upgrades, and load-sensitive scheduling of assets. Waste handling and segregation programmes reduce landfill and support both regulatory requirements and client sustainability targets.
                </p>
                <div className="pt-1">
                  <a href="#contact-form" className="text-xs font-bold text-orange-600 hover:text-orange-700 underline underline-offset-4">
                    Find out more
                  </a>
                </div>
              </div>

              {/* Pillar 2 */}
              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-brand-navy">
                  Social Impact
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Safe and ethical workplaces are non-negotiable. Our services are overseen by Safety Officer-certified supervisors and aligned to global codes of conduct such as RBA and SMETA, ensuring labour, health, and safety standards are consistently upheld.
                </p>
                <div className="pt-1">
                  <a href="#contact-form" className="text-xs font-bold text-orange-600 hover:text-orange-700 underline underline-offset-4">
                    Find out more
                  </a>
                </div>
              </div>

              {/* Pillar 3 */}
              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-brand-navy">
                  Transparent Governance
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Transparent documentation supports both compliance audits and ESG disclosures. Our structured reporting provides clients with clear evidence for regulators, internal stakeholders, and sustainability frameworks.
                </p>
                <div className="pt-1">
                  <a href="#contact-form" className="text-xs font-bold text-orange-600 hover:text-orange-700 underline underline-offset-4">
                    Find out more
                  </a>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION 5: CASE STUDIES CAROUSEL (Matches User Screenshot 5)       */}
      {/* ------------------------------------------------------------------ */}
      <section className="container-custom">
        <div className="space-y-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Header & Nav Controls */}
            <div className="lg:col-span-4 space-y-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-brand-navy tracking-tight leading-tight">
                Case Studies
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Across the region, NEXAAGEN supports leading manufacturers in meeting operational goals, improving production environments, and maintaining reputational excellence.
              </p>

              {/* Nav Buttons */}
              <div className="flex items-center space-x-3 pt-2">
                <button
                  onClick={prevStory}
                  aria-label="Previous case study"
                  className="w-10 h-10 rounded-full border border-slate-300 hover:border-brand-orange flex items-center justify-center text-slate-700 hover:text-brand-orange hover:bg-orange-50/50 transition-all shadow-sm"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextStory}
                  aria-label="Next case study"
                  className="w-10 h-10 rounded-full border border-slate-300 hover:border-brand-orange flex items-center justify-center text-slate-700 hover:text-brand-orange hover:bg-orange-50/50 transition-all shadow-sm"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right: 2 Visible Cards (Sliding with index) */}
            <div className="lg:col-span-8 overflow-hidden">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[0, 1].map((offset) => {
                  const idx = (storyIndex + offset) % caseStudies.length;
                  const study = caseStudies[idx];
                  return (
                    <div
                      key={study.id}
                      className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 flex flex-col group hover:shadow-xl transition-all duration-300"
                    >
                      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                        <img
                          src={study.image}
                          alt={study.imageAlt}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-6 flex flex-col flex-1 justify-between space-y-4">
                        <div className="space-y-2">
                          <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                            {study.category}
                          </span>
                          <h3 className="text-base sm:text-[17px] font-heading font-bold text-brand-navy group-hover:text-brand-orange transition-colors leading-snug">
                            {study.title}
                          </h3>
                        </div>
                        <div className="pt-2">
                          <a
                            href="#contact-form"
                            className="inline-flex items-center text-xs font-bold text-brand-orange group-hover:translate-x-1 transition-transform"
                          >
                            <span>Read their story</span>
                            <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION 7: CONNECT WITH OUR MANUFACTURING TEAM (Matches Screenshot 7)*/}
      {/* ------------------------------------------------------------------ */}
      <section id="contact-form" className="container-custom scroll-mt-20">
        <div className="bg-white rounded-3xl sm:rounded-[36px] overflow-hidden shadow-2xl border border-slate-200/80 grid grid-cols-1 lg:grid-cols-12">

          {/* Left Column: Form */}
          <div className="lg:col-span-7 p-7 sm:p-10 lg:p-12 space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-brand-navy tracking-tight leading-tight">
                Connect with Our Manufacturing Team
              </h2>
              <p className="text-slate-500 text-xs sm:text-sm">
                Speak with our industrial facilities engineers to optimize your plant uptime and compliance.
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-emerald-900">Thank You!</h3>
                <p className="text-emerald-700 text-xs sm:text-sm">
                  Your request has been forwarded to our WhatsApp operations team (+91 99 88 33 1575).
                </p>
                {waLink && (
                  <div className="pt-2">
                    <a
                      href={waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 px-6 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors shadow-sm"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Open WhatsApp Chat</span>
                    </a>
                  </div>
                )}
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      placeholder="e.g. John"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      placeholder="e.g. Doe"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Company *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Your Plant or Company Name"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Post Code *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.postCode}
                      onChange={(e) => setFormData({ ...formData, postCode: e.target.value })}
                      placeholder="e.g. 560001"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Sector *
                    </label>
                    <select
                      value={formData.sector}
                      onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm bg-white focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange"
                    >
                      <option value="Manufacturing">Manufacturing</option>
                      <option value="Healthcare">Healthcare</option>
                      <option value="Aviation">Aviation</option>
                      <option value="Commercial">Commercial</option>
                      <option value="Data Centres">Data Centres</option>
                      <option value="Education">Education</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Service Required *
                    </label>
                    <select
                      value={formData.serviceRequired}
                      onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm bg-white focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange"
                    >
                      <option value="Integrated Facilities Management">Integrated Facilities Management</option>
                      <option value="Hard Services">Hard Services & MEP Engineering</option>
                      <option value="Specialist Cleaning">Specialist Industrial Cleaning</option>
                      <option value="Plant Security">Industrial Plant Security</option>
                      <option value="Pest Control">Pest Elimination & Hygiene</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Please provide further details *
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    placeholder="Tell us about your production lines, facility square footage, or current operational requirements..."
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange"
                  />
                </div>

                <div className="flex items-start space-x-2.5 pt-1">
                  <input
                    type="checkbox"
                    id="mfg-agree"
                    required
                    checked={formData.agreed}
                    onChange={(e) => setFormData({ ...formData, agreed: e.target.checked })}
                    className="mt-1 w-4 h-4 rounded text-brand-orange border-slate-300 focus:ring-brand-orange"
                  />
                  <label htmlFor="mfg-agree" className="text-slate-500 text-xs leading-snug">
                    I agree to the <Link to="/terms" className="underline hover:text-brand-orange">Terms and Conditions</Link> and <Link to="/privacy" className="underline hover:text-brand-orange">Privacy Policy</Link> and I am happy for NEXAAGEN to collect my information. *
                  </label>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full text-white font-bold text-sm bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:from-[#F4511E] hover:to-[#B71C1C] shadow-lg hover:shadow-orange-500/25 transition-all duration-300 active:scale-[0.99]"
                  >
                    Submit Form
                  </button>
                  <p className="text-[11px] text-slate-400 text-center mt-2">
                    This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Industrial Mechanic Wrench Photo */}
          <div className="lg:col-span-5 relative min-h-[380px] lg:min-h-full overflow-hidden bg-slate-900">
            <img
              src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80"
              alt="Industrial Plant Maintenance Mechanic"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:bg-gradient-to-r lg:from-black/40 lg:via-transparent lg:to-transparent" />
          </div>

        </div>
      </section>

    </div>
  );
}

