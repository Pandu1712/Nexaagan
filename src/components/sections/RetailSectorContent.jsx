import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowUpRight, Check, ArrowRight, ShieldCheck, Sparkles, Building2, Store } from 'lucide-react';

/**
 * RetailSectorContent Component
 * Directly replicates all sections from the 9 user reference screenshots (OCS Retail Sector):
 * 1. "We're helping deliver the best retail experience for your customers" (Content left, Colleague photo right)
 * 2. "Retail FM" (5 BEST Accordions on right, card on left)
 * 3. "Services to overcome the daily challenges for retailers" (4 Service Accordions on left, card on right)
 * 4. "Supporting retailers with their sustainability goals" (Security officer photo left, 3 checklist items right)
 * 5. "Retail Industry Accreditations" (6 Strategic accreditation badges)
 * 6. "NEXAAGEN customer stories" (3 case study cards)
 * 7. "Frequently Asked Questions for Retail" (6 Retail FAQs in 2 columns)
 * 8. "Connect with your NEXAAGEN team" (Navy callout banner)
 * 9. "Responsibility and opportunity for change" (3 ESG Cards: Environmental, Social, Governance)
 */
export default function RetailSectorContent() {
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
      title: 'Best Experiences for Retail',
      content:
        'Creating immaculate, beautifully lit, and pristine retail shopping environments. We focus on sensory cleanliness, spotless washrooms, pleasant scenting, and courteous customer hosts that lengthen shopper dwell time and drive repeat visits.',
    },
    {
      title: 'Best Productivity for Retail',
      content:
        'Enhancing store productivity with synchronized logistics, out-of-hours merchandising support, and swift turnaround of customer zones so store personnel can focus 100% on sales and customer engagement.',
    },
    {
      title: 'Best Practices for Retail',
      content:
        'Deploying certified bio-hygiene standards, slip-and-fall prevention, rigorous loss prevention procedures, and safe chemical management verified through transparent digital audit trails.',
    },
    {
      title: 'Best Resilience for Retail',
      content:
        '24/7 preventative HVAC, escalator, lift, and backup power maintenance to ensure continuous trading uptime during peak weekend and holiday footfalls without disruption.',
    },
    {
      title: 'Best Outcomes for Retail',
      content:
        'Delivering lower total cost of occupancy, significant energy and waste reduction, higher footfall conversion, and verifiable ESG achievements across retail portfolios.',
    },
  ];

  const serviceAccordions = [
    {
      title: 'Facilities Management for Retail',
      content:
        'Comprehensive integrated facilities management (IFM) for shopping centres, high-street brands, and outlet villages. We consolidate cleaning, technical maintenance, security, and waste logistics under one SLA with centralized reporting.',
    },
    {
      title: 'Cleaning for Retail',
      content:
        'High-frequency mall concourse scrubbing, shopfront glass polishing, food court sanitation, deep carpet care, and rapid spill response deployed with autonomous robotic scrubbers and discreet daytime janitorial hosts.',
    },
    {
      title: 'Hard Services for Retail',
      content:
        'Mechanical, electrical, and plumbing (MEP) engineering, HVAC climate control, refrigeration maintenance, emergency lighting, fire alarm testing, and escalator servicing to keep stores compliant and operating smoothly.',
    },
    {
      title: 'Pest Control for Retail',
      content:
        'Discrete, non-invasive pest exclusion, electronic rodent monitoring, and food safety compliance for retail dining courts, stockrooms, and loading bays.',
    },
  ];

  const retailFaqs = [
    {
      id: 'ret-faq-1',
      question: 'What types of facilities management services are crucial for retail spaces?',
      answer:
        'Crucial services include continuous concourse and washroom hygiene, slip-and-fall mitigation, 24/7 HVAC climate and air filtration management, preventative escalator/lift maintenance, loss prevention security, waste segregation, and rapid-response emergency repairs during trading hours.',
    },
    {
      id: 'ret-faq-2',
      question: 'What measures do you take to minimise disruption to retail operations during maintenance or cleaning?',
      answer:
        'We schedule heavy floor scrubbing, window cleaning, and major MEP preventative servicing during out-of-hours night shifts. During daytime trading, our hosts operate unobtrusively with silent autonomous sweepers and discrete spill kits to ensure zero interruption to shoppers.',
    },
    {
      id: 'ret-faq-3',
      question: 'Can you handle urgent maintenance issues promptly, especially in areas with high foot traffic?',
      answer:
        'Yes. We maintain dedicated on-site engineering and janitorial response teams with sub-15-minute SLA dispatch protocols for high-traffic zones like entrances, main atriums, food halls, and public restrooms.',
    },
    {
      id: 'ret-faq-4',
      question: 'Can you adapt your services to fit the unique needs of different retail environments?',
      answer:
        'Absolutely. Whether you manage a luxury boutique requiring white-glove concierge hospitality, a multi-level enclosed shopping mall with 50,000 daily visitors, or an open-air outlet village, we customize staffing schedules, cleaning frequencies, and security protocols to match your exact footfall patterns.',
    },
    {
      id: 'ret-faq-5',
      question: 'How do you manage waste and recycling effectively in retail spaces, especially during peak times?',
      answer:
        'We deploy smart bin sensors that alert waste porters before bins reach capacity, operate back-of-house cardboard and plastic balers, and run source-segregated recycling programs that divert over 95% of retail waste away from landfills.',
    },
    {
      id: 'ret-faq-6',
      question: 'What strategies do you employ to enhance energy efficiency and sustainability in retail spaces?',
      answer:
        'We implement automated BMS schedules that optimize heating and cooling based on real-time footfall density, LED lighting retrofits with daylight harvesting, solar canopy integration, and water-saving washroom fixtures that reduce overall retail utility costs.',
    },
  ];

  const customerStories = [
    {
      id: 'ret-story-1',
      badge: 'Healthcare & Commercial',
      title: 'Reducing carbon at the Ripple Retreat – Positive customer impact and legacy',
      description:
        'Implementing high-efficiency heat pump systems, automated thermal controls, and 100% sustainable cleaning consumables to deliver zero-carbon operations.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 'ret-story-2',
      badge: 'Sustainability',
      title: 'Improving sustainability at Greenham Business Park by focusing on CO2 reduction',
      description:
        'Installing smart IoT LED lighting networks and centralized chiller staging across a 150-acre mixed-use commercial and retail business park.',
      image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 'ret-story-3',
      badge: 'Venues and events',
      title: 'Creating custom solutions for the NEC Spring Fair – delivering best experience and outcomes',
      description:
        'Providing rapid overnight deep cleaning, continuous crowd hygiene, and event waste segregation for over 65,000 retail exhibitors and trade visitors.',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80',
    },
  ];

  const accreditations = [
    { name: 'UKCMA', label: 'UK Crowd Management Association' },
    { name: 'JSARC', label: 'Joint Security and Resilience Centre' },
    { name: 'bsi.', label: 'British Standards Institution' },
    { name: 'wrap', label: 'Waste & Resources Action Programme' },
    { name: 'BICSc', label: 'The British Institute of Cleaning Science' },
    { name: 'Revo', label: 'Retail. Property. Community.' },
  ];

  return (
    <div className="w-full flex flex-col space-y-6 sm:space-y-8 py-4 sm:py-6 bg-white overflow-hidden">
      
      {/* ------------------------------------------------------------------ */}
      {/* SECTION 2: DELIVERING BEST RETAIL EXPERIENCE (Matches Screenshot 2) */}
      {/* ------------------------------------------------------------------ */}
      <section className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Heading, Paragraphs & CTA */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-heading font-extrabold text-[#0B1B3D] tracking-tight leading-tight">
              We're helping deliver the best retail experience for your customers
            </h2>

            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              <p>
                Creating the right retail environment is pivotal. We understand that the retail space's ambience and cleanliness heavily influence a shopper's experience. A well-maintained, inviting atmosphere can be the difference between a casual browser and a committed buyer. Our facilities services ensure that every aspect of the retail environment contributes positively to the shopper's experience.
              </p>
            </div>

            <div className="pt-2 space-y-4">
              <p className="text-slate-900 font-bold text-xs sm:text-sm">
                View Facilities Management (FM) or Single-Service solutions below.
              </p>
              <div>
                <a
                  href="#contact-form"
                  className="inline-flex items-center justify-center font-bold text-white px-8 py-3.5 rounded-full text-xs sm:text-sm bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:from-[#F4511E] hover:to-[#B71C1C] shadow-lg hover:shadow-orange-500/25 transition-all duration-300 ease-out active:scale-[0.98]"
                >
                  Contact Our Retail Team
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: High-Res Retail Hospitality Colleague in Uniform */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl sm:rounded-[36px] overflow-hidden shadow-xl border border-slate-100 aspect-[4/3] sm:aspect-[4/3.4] group">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80"
                alt="Retail Facilities Experience Ambassador"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
            </div>
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION 3A & 3B: RETAIL FM (BEST) & OVERCOMING CHALLENGES          */}
      {/* (Matches User Screenshots 3 & 4)                                   */}
      {/* ------------------------------------------------------------------ */}
      <section className="container-custom space-y-6 sm:space-y-8">
        
        {/* PART 3A: Retail FM (Card Left, 5 BEST Accordions Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Card */}
          <div className="lg:col-span-5">
            <div className="bg-[#F8F9FA] rounded-3xl sm:rounded-[36px] p-8 sm:p-10 lg:p-12 border border-slate-200/50 space-y-5">
              <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#0B1B3D] tracking-tight">
                Retail FM
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

        {/* PART 3B: Services to overcome the daily challenges for retailers (4 Accordions Left, Card Right) */}
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
              <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#0B1B3D] tracking-tight leading-snug">
                Services to overcome the daily challenges for retailers
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Our job is to help make people and places the best they can be through facilities services that deliver the best outcomes.
              </p>
              <div className="pt-2">
                <a
                  href="#contact-form"
                  className="inline-flex items-center justify-center font-bold text-white px-7 py-3 rounded-full text-xs sm:text-sm bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:from-[#F4511E] hover:to-[#B71C1C] shadow-md hover:shadow-orange-500/25 transition-all duration-300 active:scale-[0.98]"
                >
                  Contact Our Retail Team
                </a>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION 4: SUPPORTING RETAILERS WITH SUSTAINABILITY (Screenshot 5)  */}
      {/* ------------------------------------------------------------------ */}
      <section className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Friendly Senior Security / Concierge Officer */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl sm:rounded-[36px] overflow-hidden shadow-xl border border-slate-100 aspect-[4/3] sm:aspect-[4/3.4] group">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80"
                alt="Retail Security & Concierge Ambassador"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Column: Title, Intro, 3 Checkpoints, More on ESG Button */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-heading font-extrabold text-[#0B1B3D] tracking-tight leading-tight">
              Supporting retailers with their sustainability goals
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Retailers are pivotal in driving positive ESG impacts, influencing sustainable consumer choices and fostering environmentally and socially responsible practices across the supply chain. We support those efforts.
            </p>

            <div className="space-y-3.5 pt-2">
              {[
                'Minimise waste generation, such as reducing packaging, encouraging reusable bags, and implementing comprehensive recycling programs.',
                'Reducing retailers carbon footprint by implementing energy-efficient lighting, heating, and cooling systems, and by embracing renewable energy sources.',
                'Sourcing products from sustainable and ethical suppliers, using materials that are environmentally friendly to ensure fair trade practices.',
              ].map((item, idx) => (
                <div key={idx} className="flex items-start space-x-3.5">
                  <span className="w-5 h-5 rounded-full bg-gradient-to-r from-[#FF5722] to-[#D8232A] flex items-center justify-center text-white flex-shrink-0 mt-0.5 shadow-sm">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </span>
                  <span className="text-slate-700 text-xs sm:text-sm font-medium leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <a
                href="#esg-change"
                className="inline-flex items-center justify-center font-bold text-white px-7 py-3 rounded-full text-xs sm:text-sm bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:from-[#F4511E] hover:to-[#B71C1C] shadow-md hover:shadow-orange-500/25 transition-all duration-300 active:scale-[0.98]"
              >
                More on ESG
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION 5: RETAIL INDUSTRY ACCREDITATIONS (Matches Screenshot 6)    */}
      {/* ------------------------------------------------------------------ */}
      <section className="container-custom">
        <div className="space-y-8 sm:space-y-10 text-center">
          <div className="max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-heading font-extrabold text-[#0B1B3D] tracking-tight">
              Retail Industry Accreditations
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm">
              Strategic partnerships, alliances and certifications that drive best practice for the best experiences and outcomes.
            </p>
          </div>

          {/* 6 Logo Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 items-center justify-center">
            {accreditations.map((item, idx) => (
              <div
                key={idx}
                className="h-20 sm:h-24 bg-white rounded-2xl border border-slate-200/80 shadow-sm p-4 flex flex-col items-center justify-center hover:shadow-md hover:border-orange-200 transition-all group"
              >
                <span className="font-heading font-extrabold text-base sm:text-lg text-slate-800 tracking-tight group-hover:text-brand-orange transition-colors">
                  {item.name}
                </span>
                <span className="text-[10px] text-slate-400 font-medium text-center line-clamp-1 mt-0.5">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION 6: NEXAAGEN CUSTOMER STORIES (Matches Screenshot 7)         */}
      {/* ------------------------------------------------------------------ */}
      <section className="container-custom">
        <div className="space-y-8 sm:space-y-10">
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#0B1B3D] tracking-tight">
              NEXAAGEN customer stories
            </h2>
            <p className="text-slate-500 text-sm sm:text-base">
              Find out more on how we're helping retailers to be the best they can be.
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

                {/* Content */}
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
                      <span>Read their story</span>
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
      {/* SECTION 7: FREQUENTLY ASKED QUESTIONS FOR RETAIL (Screenshot 8)    */}
      {/* ------------------------------------------------------------------ */}
      <section className="container-custom">
        <div className="space-y-6 sm:space-y-8">
          <div className="w-full text-left space-y-2">
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-heading font-extrabold text-[#0B1B3D] tracking-tight whitespace-normal sm:whitespace-nowrap">
              Frequently Asked Questions for Retail
            </h2>
            <p className="text-slate-500 text-sm sm:text-base">
              Key answers to common facilities questions across shopping centres and retail chains.
            </p>
          </div>

          {/* 2-Column FAQ Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 sm:gap-y-6">
            {retailFaqs.map((faq, idx) => {
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
      {/* SECTION 8: CONNECT WITH YOUR NEXAAGEN TEAM (Screenshot 9 top)      */}
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
      {/* SECTION 9: RESPONSIBILITY AND OPPORTUNITY FOR CHANGE               */}
      {/* (Matches Screenshot 9 bottom)                                      */}
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
                    We are committed to environmental stewardship, focusing on sustainable practices and reducing our ecological footprint across retail estates.
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
                    Fostering a socially responsible environment, prioritising community engagement, employee well-being, and ethical practices in retail.
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

