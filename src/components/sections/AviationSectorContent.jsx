import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowUpRight, Check, ArrowRight, Plane, ShieldCheck, Sparkles, Cpu, Leaf, Globe, CheckCircle2 } from 'lucide-react';

/**
 * AviationSectorContent Component
 * Directly implements all sections from the user reference screenshots (OCS Aviation Sector):
 * 1. "Aviation sector services" (5 checkmark items left + sunset tarmac runway image right)
 * 2. "Aviation Facilities Management" (5 BEST Accordions on right, card on left)
 * 3. "Services to help aviation spaces operate at their best" (4 Service Accordions on left, card on right)
 * 4. "Infrastructure resilience" (Commercial aircraft gate image left, content right)
 * 5. "Integrated facilities solutions for seamless operations" (Content left, family airport concourse image right)
 * 6. "Using technology for Aviation" (Passenger service ambassador photo left, Digi Yatra & robotics content right)
 * 7. "Connect with your NEXAAGEN team" (Callout Banner)
 * 8. "Frequently Asked Questions" (6 Aviation FAQs in 2 columns)
 * 9. "NEXAAGEN customer stories" (3 transport/aviation case studies)
 * 10. "Airline Industries + ESG" (2 ESG Pillar cards: Environmental & Governance)
 */
export default function AviationSectorContent() {
  const [openBestIndex, setOpenBestIndex] = useState(null);
  const [openServiceIndex, setOpenServiceIndex] = useState(null);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleBest = (idx) => {
    setOpenBestIndex((prev) => (prev === idx ? null : idx));
  };

  const toggleService = (idx) => {
    setOpenServiceIndex((prev) => (prev === idx ? null : idx));
  };

  const toggleFaq = (idx) => {
    setOpenFaqIndex((prev) => (prev === idx ? null : idx));
  };

  const bestAccordions = [
    {
      title: 'Best Experiences for Aviation',
      content:
        'Crafting pristine, welcoming, and reassuring passenger journeys from curbside to boarding gate. We ensure spotless terminal concourses, rapid baggage reclaim, and serene airport lounges that consistently achieve top ASQ (Airport Service Quality) ratings.',
    },
    {
      title: 'Best Productivity for Aviation',
      content:
        'Optimising terminal throughput and aircraft turnaround times. Our synchronized ground operations, automated baggage conveyor maintenance, and biometrically-cleared transit corridors allow airline flight crews and ground handlers to operate with maximum velocity.',
    },
    {
      title: 'Best Practices for Aviation',
      content:
        'Enforcing uncompromising global aviation compliance aligned with ICAO, DGCA, FAA, and BCAS security standards. Every team member undergoes exhaustive background checks and certified airside safety drills, ensuring strict regulatory adherence.',
    },
    {
      title: 'Best Resilience for Aviation',
      content:
        '24/7 proactive planned preventative maintenance (PPM) across critical high-voltage substations, backup diesel generators, central chiller plants, baggage x-ray belts, and water treatment utilities to guarantee 99.98%+ continuous terminal availability.',
    },
    {
      title: 'Best Outcomes for Aviation',
      content:
        'Delivering tangible airport decarbonisation, lower cost-per-passenger operations, extended airfield infrastructure lifespan, and verified compliance with global Airport Carbon Accreditation benchmarks.',
    },
  ];

  const serviceAccordions = [
    {
      title: 'Facilities Management for Aviation',
      content:
        'Comprehensive integrated facilities management (IFM) for airports and airline operators. We consolidate terminal housekeeping, technical MEP maintenance, passenger concierges, and airfield marking under a single, accountable SLA with real-time KPI reporting.',
    },
    {
      title: 'Hard Services for Aviation',
      content:
        'Statutory M&E engineering compliance, passenger boarding bridge (PBB) hydraulics, baggage sorting carousel mechanics, airfield visual aids lighting, central HVAC air filtration, and 24/7 emergency electrical engineering response.',
    },
    {
      title: 'Cleaning for Aviation',
      content:
        'High-frequency terminal deep cleaning, rapid aircraft cabin turnaround grooming, autonomous robotic scrubber deployments, touchpoint biosecurity disinfection, and sensory hygiene management across high-density departure washrooms.',
    },
    {
      title: 'Pest Control for Aviation',
      content:
        'Specialist airfield wildlife hazard management, humane bird mitigation around takeoff and landing corridors, and discreet fumigation for aircraft holds, airline catering kitchens, and air cargo bonded warehouses.',
    },
  ];

  const aviationFaqs = [
    {
      id: 'av-faq-1',
      question: 'What are the critical facilities management services required for airports and aviation hubs?',
      answer:
        'Critical aviation facilities services encompass high-voltage electrical substation upkeep, backup generator testing, HVAC and air filtration systems, baggage handling belt maintenance, high-frequency terminal hygiene, airfield marking, passenger assistance (PRM support), and 24/7 emergency MEP response.',
    },
    {
      id: 'av-faq-2',
      question: 'How do you ensure high levels of uptime and reliability in airport operations?',
      answer:
        'We employ predictive Planned Preventative Maintenance (PPM), IoT sensor telemetry, vibration analysis on rotating motors, dual-circuit redundancy protocols, and 24/7 on-site rapid response teams to guarantee 99.98%+ terminal and baggage system availability.',
    },
    {
      id: 'av-faq-3',
      question: 'What measures are taken to maintain optimal environmental and air quality conditions in airport terminals?',
      answer:
        'We utilize MERV-13 and HEPA filtration, continuous CO2 and particulate monitoring, smart variable air volume (VAV) controls, and scheduled duct sanitisation to ensure healthy, odor-free, and thermally comfortable terminal atmospheres for millions of passengers.',
    },
    {
      id: 'av-faq-4',
      question: 'Can you implement energy-efficient solutions and sustainable practices within aviation facilities?',
      answer:
        'Yes. We implement LED airfield and terminal retrofits, solar PV canopy integration, HVAC chiller staging optimization, smart building energy management systems (BEMS), and zero-waste terminal recycling programs that reduce airport carbon footprints.',
    },
    {
      id: 'av-faq-5',
      question: 'How do you ensure physical security and regulatory compliance within airports to protect sensitive areas?',
      answer:
        'Our personnel undergo rigorous background verification and aviation security training compliant with BCAS and ICAO regulations. We maintain strict access control, CCTV monitoring, and sterile airside pass protocols to safeguard all airside and landside operations.',
    },
    {
      id: 'av-faq-6',
      question: 'How does NEXAAGEN maintain consistent service standards across different airports and regions?',
      answer:
        'Through our global standard operating procedures, ISO 9001 quality management systems, digital audit apps, and centralized KPI performance dashboards, we deliver consistent, audited world-class service across every aviation hub we serve.',
    },
  ];

  const customerStories = [
    {
      id: 'story-1',
      badge: 'Aviation & Transport',
      title: 'Safeguarding international airport terminals & technology assets',
      description:
        'Delivering 24/7 integrated hard facilities management, biometric Digi Yatra gate maintenance, and rapid turn-around sanitisation across a premier international hub serving 40M+ passengers annually.',
      image: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 'story-2',
      badge: 'Airline Lounges & Catering',
      title: 'Elevating passenger lounge hospitality & continuous hygiene',
      description:
        'Transforming premium airline lounge experiences with five-star hospitality services, sensory cleanliness, and allergen-compliant catering management for over 1.2M annual business travelers.',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 'story-3',
      badge: 'Decarbonisation & Infrastructure',
      title: 'Achieving 28% energy reduction across regional airport hangars',
      description:
        'Deploying smart IoT lighting controls, variable frequency drives (VFD) on ventilation systems, and predictive MEP maintenance to achieve substantial carbon reduction and cost savings.',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    },
  ];

  return (
    <div className="w-full flex flex-col space-y-6 sm:space-y-8 py-4 sm:py-6 bg-white overflow-hidden">
      
      {/* ------------------------------------------------------------------ */}
      {/* SECTION 2: AVIATION SECTOR SERVICES (Matches User Screenshot 2)     */}
      {/* ------------------------------------------------------------------ */}
      <section className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Heading, Paragraph, 5 Checkpoints & CTA */}
          <div className="lg:col-span-6 space-y-5">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-brand-navy tracking-tight leading-tight">
              Aviation sector services
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              NEXAAGEN provides facilities services for airlines and airports, including engineering services, cleaning, project management, energy management, airfield marking solutions, operations and maintenance of baggage belt systems and scanning systems and concierge support. Our services ensure a seamless, secure, and comfortable experience for passengers and colleagues, from check-in to boarding, across global aviation hubs.
            </p>

            {/* 5 Bullet Points with Signature Red/Orange Checkmark Badges */}
            <div className="space-y-3.5 pt-2">
              {[
                'Integrated Facility Management',
                'Digi Buddy, Passenger Services and Information Desks',
                'Project Management',
                'Energy Management',
                'Airfield Marking Solutions',
              ].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-3.5">
                  <span className="w-5 h-5 rounded-full bg-gradient-to-r from-[#FF5722] to-[#D8232A] flex items-center justify-center text-white flex-shrink-0 shadow-sm">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </span>
                  <span className="text-slate-800 text-sm sm:text-[15px] font-semibold">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <a
                href="#contact-form"
                className="inline-flex items-center justify-center font-bold text-white px-8 py-3.5 rounded-full text-xs sm:text-sm bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:from-[#F4511E] hover:to-[#B71C1C] shadow-lg hover:shadow-orange-500/25 transition-all duration-300 ease-out active:scale-[0.98]"
              >
                Contact our Aviation Team
              </a>
            </div>
          </div>

          {/* Right Column: Crystal-Clear Airport Tarmac Sunset Runway Image */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl sm:rounded-[36px] overflow-hidden shadow-xl border border-slate-100 aspect-[4/3] sm:aspect-[4/3.4] group">
              <img
                src="https://images.unsplash.com/photo-1540339832862-474599807836?auto=format&fit=crop&w=1200&q=80"
                alt="Aviation Sector Services Runway at Sunset"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION 3A & 3B: BEST ACCORDIONS & SERVICE ACCORDIONS               */}
      {/* (Matches User Screenshot 3)                                        */}
      {/* ------------------------------------------------------------------ */}
      <section className="container-custom space-y-6 sm:space-y-8">
        
        {/* PART 3A: Aviation Facilities Management (Card Left, 5 BEST Accordions Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Card */}
          <div className="lg:col-span-5">
            <div className="bg-[#F8F9FA] rounded-3xl sm:rounded-[36px] p-8 sm:p-10 lg:p-12 border border-slate-200/50 space-y-5">
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-brand-navy tracking-tight">
                Aviation Facilities Management
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Our mission's BEST strategy and ethos addresses five areas of concern highlighted by industry leaders in reference to facilities management: Experiences, Productivity, Practices, Resilience and Outcomes.
              </p>
              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center font-bold text-white px-7 py-3 rounded-full text-xs sm:text-sm bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:from-[#F4511E] hover:to-[#B71C1C] shadow-md hover:shadow-orange-500/25 transition-all duration-300 active:scale-[0.98]"
                >
                  Our Mission & Best Strategy
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: 5 BEST Accordions */}
          <div className="lg:col-span-7 divide-y divide-slate-200">
            {bestAccordions.map((item, idx) => {
              const isOpen = openBestIndex === idx;
              return (
                <div key={idx} className="py-4 sm:py-5 first:pt-0 last:pb-0">
                  <button
                    onClick={() => toggleBest(idx)}
                    className="w-full flex items-center justify-between text-left group transition-colors"
                  >
                    <span className="text-slate-800 font-bold text-sm sm:text-base group-hover:text-brand-orange transition-colors">
                      {item.title}
                    </span>
                    <span className="w-8 h-8 rounded-full border border-orange-200/80 flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all flex-shrink-0 ml-4">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed pt-3 pr-8">
                          {item.content}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* PART 3B: Services to help aviation spaces operate at their best (4 Accordions Left, Card Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Column: 4 Service Accordions */}
          <div className="lg:col-span-7 order-2 lg:order-1 divide-y divide-slate-200">
            {serviceAccordions.map((item, idx) => {
              const isOpen = openServiceIndex === idx;
              return (
                <div key={idx} className="py-4 sm:py-5 first:pt-0 last:pb-0">
                  <button
                    onClick={() => toggleService(idx)}
                    className="w-full flex items-center justify-between text-left group transition-colors"
                  >
                    <span className="text-slate-800 font-bold text-sm sm:text-base group-hover:text-brand-orange transition-colors">
                      {item.title}
                    </span>
                    <span className="w-8 h-8 rounded-full border border-orange-200/80 flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all flex-shrink-0 ml-4">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed pt-3 pr-8">
                          {item.content}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Right Card */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="bg-[#F8F9FA] rounded-3xl sm:rounded-[36px] p-8 sm:p-10 lg:p-12 border border-slate-200/50 space-y-5">
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-brand-navy tracking-tight leading-snug">
                Services to help aviation spaces operate at their best
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                NEXAAGEN exists to help people and places the best they can be through market-leading facilities services that deliver best outcomes.
              </p>
              <div className="pt-2">
                <a
                  href="#contact-form"
                  className="inline-flex items-center justify-center font-bold text-white px-7 py-3 rounded-full text-xs sm:text-sm bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:from-[#F4511E] hover:to-[#B71C1C] shadow-md hover:shadow-orange-500/25 transition-all duration-300 active:scale-[0.98]"
                >
                  Contact Our Aviation Team
                </a>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION 4: INFRASTRUCTURE RESILIENCE (Matches User Screenshot 4)    */}
      {/* ------------------------------------------------------------------ */}
      <section className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: High-Res Commercial Aircraft at Gate */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl sm:rounded-[36px] overflow-hidden shadow-xl border border-slate-100 aspect-[4/3] sm:aspect-[4/3.4] group">
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80"
                alt="Aviation Infrastructure Resilience Gate Aircraft"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-5">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-brand-navy tracking-tight leading-tight">
              Infrastructure resilience
            </h2>

            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              <p>
                Airports operate on non-stop 24/7/365 schedules where unscheduled equipment outages cause immediate flight delays, passenger frustration, and cascading financial impact. We engineer robust, redundant infrastructure resilience directly into terminal operations.
              </p>
              <p>
                Our certified engineers manage and maintain high-voltage substations, backup diesel generators, central HVAC and chillers, fire suppression systems, and sewage treatment plants (STP/ETP/WTP) with automated telemetry and real-time vibration analysis.
              </p>
              <p>
                Through rigorous Planned Preventative Maintenance (PPM) and predictive asset monitoring, we prevent critical failure before it happens—ensuring that runway lighting, baggage x-ray belts, escalators, and automated boarding gates function flawlessly.
              </p>
              <p>
                We align with ISO 55001 asset management frameworks to extend the operational lifecycle of multi-million dollar terminal assets while reducing energy waste and carbon emissions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION 5: INTEGRATED FACILITIES SOLUTIONS FOR SEAMLESS OPERATIONS  */}
      {/* (Matches User Screenshot 5)                                        */}
      {/* ------------------------------------------------------------------ */}
      <section className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Content */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-5">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-brand-navy tracking-tight leading-tight">
              Integrated facilities solutions for seamless operations
            </h2>

            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              <p>
                Delivering exceptional passenger journeys requires the synchronised choreography of dozens of behind-the-scenes disciplines. NEXAAGEN integrates cleaning, security coordination, passenger concierges, and engineering into a single harmonious service model.
              </p>
              <p>
                From pristine departure lobbies and sparkling washrooms to seamless passenger assistance for PRM (Persons with Reduced Mobility) and queue management at security checkpoints, our teams keep the terminal moving with grace and efficiency.
              </p>
              <p>
                Our airfield marking solutions maintain runway, taxiway, and apron markings in strict compliance with DGCA and ICAO specifications, utilizing high-durability retro-reflective paints for maximum pilot visibility in all weather conditions.
              </p>
              <p>
                By consolidating vendor contracts under NEXAAGEN's integrated model, airport operators benefit from unified KPIs, transparent reporting dashboards, and substantial operational cost efficiencies.
              </p>
            </div>
          </div>

          {/* Right Column: High-Res Concourse Family Image */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl sm:rounded-[36px] overflow-hidden shadow-xl border border-slate-100 aspect-[4/3] sm:aspect-[4/3.4] group">
              <img
                src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80"
                alt="Integrated Facilities Seamless Operations Airport Concourse"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION 6: USING TECHNOLOGY FOR AVIATION (Matches User Screenshot 6)*/}
      {/* ------------------------------------------------------------------ */}
      <section className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: High-Res Staff Ambassador Photo */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl sm:rounded-[36px] overflow-hidden shadow-xl border border-slate-100 aspect-[4/3] sm:aspect-[4/3.4] group">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80"
                alt="Using Technology for Aviation Passenger Ambassador"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-5">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-brand-navy tracking-tight leading-tight">
              Using technology for Aviation
            </h2>

            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              <p>
                We pioneer smart aviation technology that elevates passenger satisfaction while driving operational lean principles. Our Digi Buddy platform and digital concierges provide real-time flight updates, terminal wayfinding, and gate guidance right at passengers' fingertips.
              </p>
              <p>
                In support of national digital initiatives like Digi Yatra, our technical teams install, calibrate, and maintain biometric facial recognition e-gates that slash security clearance times from minutes to seconds.
              </p>
              <p>
                Across wide terminal concourses and concourse lounges, we deploy autonomous robotic floor scrubbers and AI-powered vacuum fleets that clean continuously without impeding passenger traffic, monitored via cloud IoT dashboards.
              </p>
              <p>
                Smart restroom IoT sensors monitor patron footfall and consumable levels, dispatching janitorial teams on-demand before soap dispensers or paper supplies run low, ensuring five-star hygiene at all times.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION 7: CONNECT WITH YOUR NEXAAGEN TEAM (Matches Screenshot 7)   */}
      {/* ------------------------------------------------------------------ */}
      <section className="container-custom">
        <div className="relative rounded-3xl sm:rounded-[36px] p-8 sm:p-12 lg:p-16 overflow-hidden bg-[#0B1B3D] text-white shadow-2xl border border-slate-700/50 flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Subtle Background Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          {/* Left Text */}
          <div className="relative z-10 max-w-2xl space-y-3 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-white tracking-tight leading-tight">
              Connect with your NEXAAGEN team
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed text-justify-center md:text-left">
              Get in touch with our aviation facilities management specialists today to explore integrated solutions for your airport or airline operations.
            </p>
          </div>

          {/* Right Button */}
          <div className="relative z-10 flex-shrink-0">
            <a
              href="#contact-form"
              className="inline-flex items-center justify-center font-bold text-white px-8 py-4 rounded-full text-xs sm:text-sm bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:from-[#F4511E] hover:to-[#B71C1C] shadow-xl hover:shadow-orange-500/30 transition-all duration-300 ease-out active:scale-[0.98]"
            >
              Contact Our Aviation Team
            </a>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION 8: FREQUENTLY ASKED QUESTIONS (Matches User Screenshot 8)   */}
      {/* ------------------------------------------------------------------ */}
      <section className="container-custom">
        <div className="space-y-6 sm:space-y-8">
          <div className="w-full text-left space-y-2">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-brand-navy tracking-tight leading-tight whitespace-normal sm:whitespace-nowrap">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-500 text-sm sm:text-base">
              Clear answers to common questions about our integrated aviation facilities management services.
            </p>
          </div>

          {/* 2-Column FAQ Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 sm:gap-y-6">
            {aviationFaqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={faq.id}
                  className="border-b border-slate-200/80 pb-5 pt-2 transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-start justify-between text-left group py-1"
                  >
                    <span className="text-slate-800 font-bold text-sm sm:text-[15px] leading-snug group-hover:text-brand-orange transition-colors pr-4">
                      {faq.question}
                    </span>
                    <span className="w-7 h-7 rounded-full border border-orange-200/80 flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all flex-shrink-0 mt-0.5">
                      {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                    </span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed pt-3 pr-6">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION 9: CUSTOMER STORIES (Matches User Screenshot 9)            */}
      {/* ------------------------------------------------------------------ */}
      <section className="container-custom">
        <div className="space-y-6 sm:space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-brand-navy tracking-tight leading-tight">
              NEXAAGEN customer stories
            </h2>
            <p className="text-slate-500 text-sm sm:text-base">
              Discover how our integrated aviation and infrastructure services deliver proven operational excellence worldwide.
            </p>
          </div>

          {/* 3 Story Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {customerStories.map((story) => (
              <div
                key={story.id}
                className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 flex flex-col group hover:shadow-xl transition-all duration-300"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/95 backdrop-blur-md text-brand-navy font-bold text-[11px] px-3 py-1 rounded-full shadow-sm">
                      {story.badge}
                    </span>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between space-y-4">
                  <div className="space-y-2.5">
                    <h3 className="text-base sm:text-lg font-heading font-bold text-brand-navy group-hover:text-brand-orange transition-colors leading-snug">
                      {story.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
                      {story.description}
                    </p>
                  </div>

                  <div className="pt-2">
                    <a
                      href="#contact-form"
                      className="inline-flex items-center text-xs font-bold text-brand-orange group-hover:translate-x-1 transition-transform"
                    >
                      <span>Read Story</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION 10: AIRLINE INDUSTRIES + ESG (Matches User Screenshot 10)   */}
      {/* ------------------------------------------------------------------ */}
      <section className="container-custom">
        <div className="space-y-6 sm:space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-brand-navy tracking-tight leading-tight">
              Airline Industries + ESG
            </h2>
            <p className="text-slate-500 text-sm sm:text-base">
              Leading the journey toward sustainable, socially responsible, and transparently governed aviation operations.
            </p>
          </div>

          {/* 2 Large ESG Cards: Environmental & Governance */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {/* Card 1: Environmental */}
            <div className="bg-[#F8F9FA] rounded-3xl sm:rounded-[36px] overflow-hidden border border-slate-200/60 shadow-md flex flex-col group hover:shadow-xl transition-all duration-300">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80"
                  alt="Environmental Stewardship Lush Forest"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-emerald-600 text-white font-bold text-xs px-3.5 py-1 rounded-full shadow-md">
                    Environmental
                  </span>
                </div>
              </div>

              <div className="p-7 sm:p-9 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-2.5">
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-brand-navy">
                    Decarbonising Aviation Ground Operations
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    We actively drive green aviation initiatives, including electric ground support equipment (e-GSE) charging infrastructure, eco-friendly water-based runway paints, smart terminal HVAC optimization, and zero-landfill passenger waste segregation programs.
                  </p>
                </div>
                <div className="pt-2">
                  <span className="inline-flex items-center text-xs font-semibold text-emerald-700">
                    <Leaf className="w-3.5 h-3.5 mr-1.5" />
                    Airport Carbon Accreditation Alignment
                  </span>
                </div>
              </div>
            </div>

            {/* Card 2: Governance */}
            <div className="bg-[#F8F9FA] rounded-3xl sm:rounded-[36px] overflow-hidden border border-slate-200/60 shadow-md flex flex-col group hover:shadow-xl transition-all duration-300">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
                  alt="Governance & Airport Safety Compliance Architecture"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white font-bold text-xs px-3.5 py-1 rounded-full shadow-md">
                    Governance
                  </span>
                </div>
              </div>

              <div className="p-7 sm:p-9 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-2.5">
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-brand-navy">
                    Upholding Uncompromising Safety & Regulatory Integrity
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Operating in strict alignment with BCAS, DGCA, ICAO, and ISO standards. We enforce comprehensive background verifications, airside safety certifications, transparent SLA reporting, and rigorous anti-corruption policies across all airport operations.
                  </p>
                </div>
                <div className="pt-2">
                  <span className="inline-flex items-center text-xs font-semibold text-blue-700">
                    <ShieldCheck className="w-3.5 h-3.5 mr-1.5" />
                    Zero-Tolerance Airside Safety Compliance
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

