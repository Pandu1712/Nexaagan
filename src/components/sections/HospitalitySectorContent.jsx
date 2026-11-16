import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowUpRight, Check, ArrowRight, ShieldCheck, Sparkles, Building2, Hotel } from 'lucide-react';

/**
 * HospitalitySectorContent Component
 * Directly replicates all sections from the 8 user reference screenshots (OCS Hospitality Sector):
 * 1. "Facilities services for the Hospitality Industry" (5 checkpoints left, businessman lobby photo right)
 * 2. "Hospitality FM" (5 BEST Accordions on right, card on left)
 * 3. "Services to overcome the challenges of Hospitality" (6 Service Accordions on left, card on right)
 * 4. "Supporting the Hospitality industry with their sustainability goals" (Autumn forest photo left, content right)
 * 5. "Frequently Asked Questions" (4 Hospitality FAQs in 2 columns)
 * 6. "Connect with your NEXAAGEN team" (Navy callout banner)
 * 7. "Responsibility and opportunity for change" (3 ESG Cards: Environmental, Social, Governance)
 */
export default function HospitalitySectorContent() {
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
      title: 'Sector-specific FM to create Best Experiences',
      content:
        'Delivering warm, five-star guest arrivals, pristine turn-down housekeeping, and tranquil spa and leisure facilities that exceed guest expectations and drive glowing online reviews.',
    },
    {
      title: 'Sector-specific FM to maintain Best Productivity',
      content:
        'Synchronizing housekeeping turnaround times with PMS front-desk check-ins, optimizing back-of-house logistics, and deploying silent robotic vacuum fleets to streamline hotel workflows.',
    },
    {
      title: 'Sector-specific FM to ensure Best Practice',
      content:
        'Implementing verified bio-hygiene standards, certified kitchen exhaust and grease trap maintenance, and rigorous food safety protocols compliant with HACCP and international tourism standards.',
    },
    {
      title: 'Sector-specific FM to implement Best Resilience',
      content:
        '24/7 proactive planned preventative maintenance (PPM) on critical central chillers, hot water boilers, backup power generators, and guest elevators to prevent any guest disruption.',
    },
    {
      title: 'Sector-specific FM to enable Best Outcomes',
      content:
        'Achieving measurable energy savings, reduced water consumption per occupied room, lower linen replacement costs, and premier green hotel certifications (e.g., Green Key, LEED Hospitality).',
    },
  ];

  const serviceAccordions = [
    {
      title: 'Facilities Management for Hospitality',
      content:
        'Integrated facilities management (IFM) tailored for luxury hotels, boutique resorts, and serviced apartments. We consolidate housekeeping, engineering, concierge, security, and grounds care under a single accountable SLA.',
    },
    {
      title: 'Cleaning for Hospitality',
      content:
        'Impeccable guest room servicing, public lobby marble floor polishing, restaurant deep sanitisation, and event venue turnaround executed with hospital-grade eco-certified consumables.',
    },
    {
      title: 'Carbon & Energy Management for Hospitality',
      content:
        'Smart room occupancy HVAC setbacks, heat recovery from kitchen refrigeration, LED lighting retrofits, and solar thermal integration to dramatically curb hotel carbon footprints.',
    },
    {
      title: 'Hard Services for Hospitality',
      content:
        'Mechanical, electrical, and plumbing (MEP) engineering, central boilerhouse servicing, swimming pool water chemistry management, and 24/7 rapid engineering emergency callout.',
    },
    {
      title: 'Pest Control for Hospitality',
      content:
        'Discreet, non-intrusive pest exclusion, smart digital rodent traps, and comprehensive bed bug prevention programs safeguarding guest room integrity and brand reputation.',
    },
    {
      title: 'Front-of-House for Hospitality',
      content:
        'Courteous doormen, executive concierge ambassadors, valet parking coordination, and luggage assistance reflecting your brand\'s unique ethos from the moment guests arrive.',
    },
  ];

  const hospitalityFaqs = [
    {
      id: 'hosp-faq-1',
      question: 'Do you have case studies showcasing successful facilities management projects in the hospitality industry?',
      answer:
        'Yes, we partner with premier luxury hotel chains, boutique resorts, and serviced apartments globally. Our case studies demonstrate how integrated engineering, housekeeping, and energy optimization have cut operating costs by 22% while elevating guest satisfaction scores to over 96%.',
    },
    {
      id: 'hosp-faq-2',
      question: 'What measures are taken to ensure safety and security within hospitality premises?',
      answer:
        'Our hospitality security teams are trained in discreet executive protection, conflict de-escalation, CCTV surveillance, keycard access control, and emergency fire evacuation protocols that protect guests without feeling intrusive.',
    },
    {
      id: 'hosp-faq-3',
      question: 'How do you ensure a great experience for guests while performing maintenance in hospitality settings?',
      answer:
        'We schedule heavy mechanical maintenance and noisy tasks during low-occupancy daytime windows (11 AM – 3 PM) and deep cleaning during quiet night shifts. Our technicians use silent tools and clean uniforms, always prioritizing guest tranquility.',
    },
    {
      id: 'hosp-faq-4',
      question: 'What specific services are essential for the hospitality sector, and how do they contribute to guest satisfaction?',
      answer:
        'Essential services include 24/7 HVAC climate reliability, immaculate turn-down housekeeping, guest room air filtration, kitchen hood & grease trap hygiene, crystal-clear swimming pool water chemistry, and five-star front-of-house concierge greeting.',
    },
  ];

  return (
    <div className="w-full flex flex-col space-y-6 sm:space-y-8 py-4 sm:py-6 bg-white overflow-hidden">
      
      {/* ------------------------------------------------------------------ */}
      {/* SECTION 2: FACILITIES SERVICES FOR HOSPITALITY (Screenshot 2)      */}
      {/* ------------------------------------------------------------------ */}
      <section className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Heading, Paragraphs, 5 Checkpoints & CTA */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-heading font-extrabold text-[#0B1B3D] tracking-tight leading-tight">
              Facilities services for the Hospitality Industry
            </h2>

            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              <p>
                In the hospitality sector, our facilities services are designed to enhance and complement the offerings of hotels and hospitality brands.
              </p>
              <p>
                We focus on delivering services that integrate smoothly with in-house operations. This approach ensures consistency across all guest touchpoints. It adds a layer of guest assurance, continuity, and resilience to the brand's service offerings, improving the guest experience.
              </p>
            </div>

            <p className="text-slate-900 font-bold text-xs sm:text-sm pt-1">
              View Facilities Management (FM) or Single-Service solutions below.
            </p>

            {/* 5 Bullet Points with Checkmarks */}
            <div className="space-y-3 pt-1">
              {[
                'Enhanced Guest Experience',
                'Operational Efficiency',
                'Flexibility and Scalability',
                'Sustainability and Environmental Stewardship',
                'Brand Reputation and Trust',
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

            <div className="pt-3">
              <a
                href="#contact-form"
                className="inline-flex items-center justify-center font-bold text-white px-8 py-3.5 rounded-full text-xs sm:text-sm bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:from-[#F4511E] hover:to-[#B71C1C] shadow-lg hover:shadow-orange-500/25 transition-all duration-300 ease-out active:scale-[0.98]"
              >
                Contact Our Hospitality Team
              </a>
            </div>
          </div>

          {/* Right Column: High-Res Businessman with Luggage in Luxury Lobby */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl sm:rounded-[36px] overflow-hidden shadow-xl border border-slate-100 aspect-[4/3] sm:aspect-[4/3.4] group">
              <img
                src="https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=80"
                alt="Hospitality Guest in Luxury Hotel Lobby"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
            </div>
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION 3A & 3B: HOSPITALITY FM (BEST) & OVERCOMING CHALLENGES     */}
      {/* (Matches User Screenshots 3 & 4)                                   */}
      {/* ------------------------------------------------------------------ */}
      <section className="container-custom space-y-6 sm:space-y-8">
        
        {/* PART 3A: Hospitality FM (Card Left, 5 BEST Accordions Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Card */}
          <div className="lg:col-span-5">
            <div className="bg-[#F8F9FA] rounded-3xl sm:rounded-[36px] p-8 sm:p-10 lg:p-12 border border-slate-200/50 space-y-5">
              <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#0B1B3D] tracking-tight">
                Hospitality FM
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

        {/* PART 3B: Services to overcome the challenges of Hospitality (6 Accordions Left, Card Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Column: 6 Service Accordions */}
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
              <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#0B1B3D] tracking-tight leading-snug">
                Services to overcome the challenges of Hospitality
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Our job is to help make people and places the best they can be through facilities services that deliver the best outcomes.
              </p>
              <div className="pt-2">
                <a
                  href="#contact-form"
                  className="inline-flex items-center justify-center font-bold text-white px-7 py-3 rounded-full text-xs sm:text-sm bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:from-[#F4511E] hover:to-[#B71C1C] shadow-md hover:shadow-orange-500/25 transition-all duration-300 active:scale-[0.98]"
                >
                  Contact Our Hospitality Team
                </a>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION 4: SUPPORTING SUSTAINABILITY GOALS (Screenshot 5)          */}
      {/* ------------------------------------------------------------------ */}
      <section className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Golden Autumn Trees / Sunlight Nature Photo */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl sm:rounded-[36px] overflow-hidden shadow-xl border border-slate-100 aspect-[4/3] sm:aspect-[4/3.4] group">
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
                alt="Hospitality Environmental Sustainability Autumn Forest"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Column: Title, Paragraphs & CTA */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-heading font-extrabold text-[#0B1B3D] tracking-tight leading-tight">
              Supporting the Hospitality industry with their sustainability goals
            </h2>

            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              <p>
                The hospitality industry is increasingly grappling with challenges related to sustainability and Environmental, Social, and Governance (ESG) factors. This sector faces integrating eco-friendly practices while maintaining high service standards, addressing energy consumption and waste management, and meeting the rising expectations of environmentally-conscious guests.
              </p>
              <p>
                Additionally, there's a growing need to balance economic growth with social responsibility, ensuring fair labour practices and community engagement. These challenges require innovative and strategic approaches to manage resources and operations sustainably.
              </p>
            </div>

            <div className="pt-2">
              <a
                href="#contact-form"
                className="inline-flex items-center justify-center font-bold text-white px-8 py-3.5 rounded-full text-xs sm:text-sm bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:from-[#F4511E] hover:to-[#B71C1C] shadow-lg hover:shadow-orange-500/25 transition-all duration-300 active:scale-[0.98]"
              >
                Contact our Hospitality Team
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION 5: FREQUENTLY ASKED QUESTIONS (Screenshot 6)               */}
      {/* ------------------------------------------------------------------ */}
      <section className="container-custom">
        <div className="space-y-6 sm:space-y-8">
          <div className="w-full text-left space-y-2">
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-heading font-extrabold text-[#0B1B3D] tracking-tight whitespace-normal sm:whitespace-nowrap">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-500 text-sm sm:text-base">
              Key answers to common facilities questions across luxury hotels and resort destinations.
            </p>
          </div>

          {/* 2-Column FAQ Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 sm:gap-y-6">
            {hospitalityFaqs.map((faq, idx) => {
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
      {/* SECTION 6: CONNECT WITH YOUR NEXAAGEN TEAM (Screenshot 7)          */}
      {/* ------------------------------------------------------------------ */}
      <section className="container-custom">
        <div className="relative rounded-3xl sm:rounded-[36px] p-6 sm:p-10 lg:p-12 overflow-hidden bg-[#0B1B3D] text-white shadow-2xl border border-slate-700/50 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Subtle Background Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          {/* Left Text */}
          <div className="relative z-10 max-w-2xl space-y-3 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-white tracking-tight leading-tight">
              Connect with your NEXAAGEN team
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              We're ready to deliver the best experiences, productivity, practices, resilience and outcomes and we look forward to connecting with you and your team.
            </p>
          </div>

          {/* Right Button */}
          <div className="relative z-10 flex-shrink-0">
            <a
              href="#contact-form"
              className="inline-flex items-center justify-center font-bold text-white px-8 py-4 rounded-full text-xs sm:text-sm bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:from-[#F4511E] hover:to-[#B71C1C] shadow-xl hover:shadow-orange-500/30 transition-all duration-300 ease-out active:scale-[0.98]"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION 7: RESPONSIBILITY AND OPPORTUNITY FOR CHANGE (Screenshot 8)*/}
      {/* ------------------------------------------------------------------ */}
      <section id="esg-change" className="container-custom scroll-mt-20">
        <div className="space-y-6 sm:space-y-8">
          
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#0B1B3D] tracking-tight">
              Responsibility and opportunity for change
            </h2>
            <p className="text-slate-500 text-sm sm:text-base">
              NEXAAGEN is in a position to make a tangible difference for colleagues, customers and communities.
            </p>
          </div>

          {/* 3 Pillar Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            
            {/* Environmental */}
            <div className="bg-[#F8F9FA] rounded-3xl overflow-hidden border border-slate-200/60 shadow-sm flex flex-col group hover:shadow-xl transition-all duration-300">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80"
                  alt="Environmental Stewardship"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </div>
              <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-heading font-bold text-[#0B1B3D]">
                    Environmental
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    We are committed to environmental stewardship, focusing on sustainable practices and reducing our ecological footprint across hospitality venues.
                  </p>
                </div>
                <div className="pt-2 flex justify-end">
                  <span className="w-9 h-9 rounded-full bg-gradient-to-r from-[#FF5722] to-[#D8232A] text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="bg-[#F8F9FA] rounded-3xl overflow-hidden border border-slate-200/60 shadow-sm flex flex-col group hover:shadow-xl transition-all duration-300">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1200&q=80"
                  alt="Social Responsibility"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </div>
              <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-heading font-bold text-[#0B1B3D]">
                    Social
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Fostering a socially responsible environment, prioritising community engagement, employee well-being, and ethical practices in hospitality.
                  </p>
                </div>
                <div className="pt-2 flex justify-end">
                  <span className="w-9 h-9 rounded-full bg-gradient-to-r from-[#FF5722] to-[#D8232A] text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>

            {/* Governance */}
            <div className="bg-[#F8F9FA] rounded-3xl overflow-hidden border border-slate-200/60 shadow-sm flex flex-col group hover:shadow-xl transition-all duration-300">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
                  alt="Governance & Transparency"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </div>
              <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-heading font-bold text-[#0B1B3D]">
                    Governance
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Upholds robust governance, ensuring transparency, accountability, and ethical integrity across all global business operations.
                  </p>
                </div>
                <div className="pt-2 flex justify-end">
                  <span className="w-9 h-9 rounded-full bg-gradient-to-r from-[#FF5722] to-[#D8232A] text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    <ArrowUpRight className="w-4 h-4" />
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

