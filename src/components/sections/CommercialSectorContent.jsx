import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, ArrowUpRight } from 'lucide-react';

/**
 * CommercialSectorContent Component
 * Directly implements all sections from the user reference screenshots:
 * 1. "Commercial FM" (5 BEST Accordions on right, card on left)
 * 2. "Services for commercial facilities spaces to operate at their best" (4 Service Accordions on left, card on right)
 * 3. "Memorable first and lasting impressions for colleagues and customers" (Grounds maintenance image left, content right)
 * 4. "Fuelling your teams with nutritional, flavourful food" (Content left, Catering staff photo right)
 * 5. "Keeping your commercial premises looking the part" (Content left, 6 Accreditation/Partner badges right)
 * 6. "Protecting and enhancing your brand and buildings" (Content left, Branded NEXAAGEN fleet van right)
 * 7. "Responsibility and opportunity for change" (3 ESG Pillar cards: Environmental, Social, Governance)
 * 8. "Frequently Asked Questions" (10 Commercial FAQs in 2 columns)
 * 9. "Customer stories" (3 Case Studies: NHS Catering, The Royal Parks, Greenham Business Park)
 */
export default function CommercialSectorContent() {
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
      title: 'Best Experiences for Commercial',
      content:
        'Crafting welcoming, tech-enabled, and impeccably maintained office environments that elevate the tenant experience, enhance workplace wellness, and inspire top talent to collaborate in person.',
    },
    {
      title: 'Best Productivity for Commercial',
      content:
        'Optimizing acoustic comfort, indoor air quality, and thermal control in commercial offices and trading floors so enterprise teams operate at peak efficiency with zero distractions.',
    },
    {
      title: 'Best Practices for Commercial',
      content:
        'Deploying environmentally-certified cleaning protocols, autonomous floor scrubbers, and strict safeguarding procedures verified through independent compliance audits.',
    },
    {
      title: 'Best Resilience for Commercial',
      content:
        '24/7 proactive planned preventative maintenance (PPM) on critical HVAC, switchgear, backup UPS, and building automation systems to guarantee continuous business uptime.',
    },
    {
      title: 'Best Outcomes for Commercial',
      content:
        'Delivering tangible energy reduction, lower total cost of occupancy (TCO), enhanced asset lifecycle longevity, and verified ESG and BREEAM/LEED performance certifications.',
    },
  ];

  const serviceAccordions = [
    {
      title: 'Facilities Management for Commercial',
      content:
        'Comprehensive integrated facilities management (IFM) streamlining single-point accountability for engineering maintenance, concierge, workplace logistics, and asset lifecycle care across multi-tenant high-rises and corporate headquarters.',
    },
    {
      title: 'Cleaning for Commercial',
      content:
        'Day-to-day office housekeeping, touchpoint disinfection, washroom hygiene, specialist window washing, deep carpet extraction, and night-shift commercial sanitisation with eco-friendly consumables.',
    },
    {
      title: 'Hard Services for Commercial',
      content:
        'Statutory mechanical, electrical, and plumbing (MEP) compliance, HVAC chiller overhaul, emergency generator testing, fire alarm systems, and predictive vibration diagnostics.',
    },
    {
      title: 'Pest Control for Commercial',
      content:
        'Discreet, humane, and non-disruptive commercial pest exclusion, smart bait stations, and continuous digital monitoring protecting corporate dining areas, pantries, and data riser ducts.',
    },
  ];

  const commercialFaqs = [
    {
      id: 'comm-faq-1',
      question: 'What role does facilities management play in enhancing the professional image and client experience?',
      answer:
        'Facilities management creates the crucial first and lasting impression for every tenant, visitor, and investor. From pristine corporate lobbies and courteous concierge ambassadors to spotless conference suites and responsive building climate control, seamless FM signals operational excellence, reliability, and care.',
    },
    {
      id: 'comm-faq-2',
      question: 'What are the key facilities management services essential for commercial buildings?',
      answer:
        'Essential commercial services include integrated mechanical & electrical (M&E) engineering, planned preventative HVAC maintenance, day-porter housekeeping, washroom hygiene, waste segregation, physical access control security, workplace catering, and landscape groundskeeping.',
    },
    {
      id: 'comm-faq-3',
      question: 'Can you tailor your services to suit the unique needs of different commercial establishments?',
      answer:
        'Yes. Whether managing a single flagship financial headquarters, a multi-let business park, or an expansive national portfolio of commercial towers, our delivery models scale dynamically to match tenant profiles, peak occupancy schedules, and specific compliance mandates.',
    },
    {
      id: 'comm-faq-4',
      question: 'Can you handle urgent situations such as power outages or plumbing issues promptly in commercial spaces?',
      answer:
        'Our 24/7/365 Central Helpdesk and rapid-response mobile engineering fleet guarantee strict service level agreements (SLAs). For high-severity incidents like power disruption or major leaks, emergency crews mobilise immediately with automated escalation to on-site building managers.',
    },
    {
      id: 'comm-faq-5',
      question: 'Can you help design and maintain workspaces that accommodate evolving needs and collaboration?',
      answer:
        'Yes. We provide workplace advisory, desk-density heat-mapping, acoustic zone partitioning, ergonomic furniture management, and agile reconfigurations that support flexible hybrid working schedules and collaborative team environments.',
    },
    {
      id: 'comm-faq-6',
      question: 'Can you share case studies showcasing successful projects in the commercial sector?',
      answer:
        'Yes. Our commercial case studies include managing premier 50-storey Grade-A commercial towers achieving 99.98% MEP uptime, reducing corporate utility bills by 32% across business parks, and winning national sustainability accolades for carbon emission reductions.',
    },
    {
      id: 'comm-faq-7',
      question: 'How do you maintain a clean and hygienic environment within commercial spaces?',
      answer:
        'We combine visible day-porter touchpoint sanitisation with autonomous robotic floor care, microfibre cleaning techniques that eradicate 99.9% of bacteria without volatile chemicals, and continuous indoor air quality (IAQ) monitoring.',
    },
    {
      id: 'comm-faq-8',
      question: 'What measures do you take to minimise disruptions during maintenance and repairs in commercial buildings?',
      answer:
        'Intrusive statutory testing, noisy plant overhauls, and chiller descaling are systematically scheduled during out-of-hours shifts, overnight windows, and weekends to protect normal commercial trading and productivity.',
    },
    {
      id: 'comm-faq-9',
      question: 'How do you contribute to environmental sustainability?',
      answer:
        'Through ISO 14001 and ISO 50001 certified programs, we implement smart BMS automated temperature setbacks, zero-waste-to-landfill recycling initiatives, solar PV maintenance, rainwater harvesting, and electric service fleet vehicles.',
    },
    {
      id: 'comm-faq-10',
      question: 'What measures are taken to maintain confidentiality, privacy, and compliance within the commercial sector?',
      answer:
        'All NEXAAGEN commercial personnel undergo strict background security vetting, non-disclosure agreements (NDAs), and GDPR data privacy training. Clean-desk enforcement, encrypted radio channels, and secure document disposal ensure complete peace of mind.',
    },
  ];

  const esgCards = [
    {
      title: 'Environmental',
      image: '/assets/sectors/esg-environmental-forest.jpg',
      description:
        'We are committed to environmental stewardship, focusing on sustainable practices and reducing our ecological footprint across commercial properties.',
      link: '/esg',
    },
    {
      title: 'Social',
      image: '/assets/sectors/esg-social-colleague.jpg',
      description:
        'Fostering a socially responsible environment, prioritising community engagement, employee well-being, and ethical practices in commercial workplaces.',
      link: '/esg',
    },
    {
      title: 'Governance',
      image: '/assets/sectors/esg-governance-architecture.jpg',
      description:
        'Upholds robust governance, ensuring transparency, accountability, and ethical integrity across all global business operations.',
      link: '/esg',
    },
  ];

  const customerStories = [
    {
      id: 'story-1',
      tag: 'Catering',
      title: "NHS food transformation that's having a positive environmental impact in the community",
      image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80',
      link: '/contact',
    },
    {
      id: 'story-2',
      tag: 'Sustainability',
      title: "Driving sustainability goals to enhance London's natural heritage with The Royal Parks",
      image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80',
      link: '/contact',
    },
    {
      id: 'story-3',
      tag: 'CO2 Reduction',
      title: 'Improving sustainability at Greenham Business Park by focusing on CO2 reduction',
      image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1200&q=80',
      link: '/contact',
    },
  ];

  return (
    <div className="w-full bg-transparent text-[#2B3A41] overflow-hidden">
      {/* =========================================================================
          SECTION 2A: "Commercial FM" with 5 "BEST" Accordions
          ========================================================================= */}
      <section className="py-4 sm:py-6 bg-[#FAFAFA] border-t border-[#F0F0F0]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Card: Commercial FM */}
            <div className="lg:col-span-5 bg-white p-8 sm:p-10 rounded-3xl shadow-sm border border-[#EAEAEA]">
              <h3 className="text-3xl sm:text-4xl font-bold text-brand-navy mb-5">
                Commercial FM
              </h3>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8">
                Our mission's BEST strategy and ethos addresses five areas of concern highlighted by industry leaders in reference to facilities management: Experiences, Productivity, Practices, Resilience and Outcomes.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-gradient-to-r from-[#E03A00] to-[#FF5E00] text-white font-semibold text-sm shadow-md hover:shadow-lg hover:brightness-105 transition-all duration-300"
              >
                Our Mission &amp; Best Strategy
              </Link>
            </div>

            {/* Right: 5 BEST Accordions */}
            <div className="lg:col-span-7 divide-y divide-[#E2E8F0]">
              {bestAccordions.map((acc, idx) => {
                const isOpen = openBestIndex === idx;
                return (
                  <div key={idx} className="py-5">
                    <button
                      onClick={() => toggleBest(idx)}
                      className="w-full flex items-center justify-between text-left group focus:outline-none"
                    >
                      <span className="text-lg sm:text-xl font-medium text-[#1E293B] group-hover:text-[#E03A00] transition-colors pr-4">
                        {acc.title}
                      </span>
                      <div
                        className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-300 shrink-0 ${
                          isOpen
                            ? 'bg-[#E03A00] text-white border-[#E03A00] rotate-45'
                            : 'border-[#FFD2C2] text-[#E03A00] bg-white group-hover:border-[#E03A00]'
                        }`}
                      >
                        <Plus className="w-5 h-5" />
                      </div>
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <p className="pt-4 text-base text-slate-600 leading-relaxed">
                            {acc.content}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2B: "Services for commercial facilities..." with 4 Accordions
          ========================================================================= */}
      <section className="py-4 sm:py-6 bg-transparent">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left: 4 Service Accordions */}
            <div className="lg:col-span-7 divide-y divide-[#E2E8F0] order-2 lg:order-1">
              {serviceAccordions.map((srv, idx) => {
                const isOpen = openServiceIndex === idx;
                return (
                  <div key={idx} className="py-5">
                    <button
                      onClick={() => toggleService(idx)}
                      className="w-full flex items-center justify-between text-left group focus:outline-none"
                    >
                      <span className="text-lg sm:text-xl font-medium text-[#1E293B] group-hover:text-[#E03A00] transition-colors pr-4">
                        {srv.title}
                      </span>
                      <div
                        className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-300 shrink-0 ${
                          isOpen
                            ? 'bg-[#E03A00] text-white border-[#E03A00] rotate-45'
                            : 'border-[#FFD2C2] text-[#E03A00] bg-white group-hover:border-[#E03A00]'
                        }`}
                      >
                        <Plus className="w-5 h-5" />
                      </div>
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <p className="pt-4 text-base text-slate-600 leading-relaxed">
                            {srv.content}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* Right Card */}
            <div className="lg:col-span-5 bg-[#FAFAFA] p-8 sm:p-10 rounded-3xl border border-[#EAEAEA] order-1 lg:order-2">
              <h3 className="text-2xl sm:text-3xl font-bold text-brand-navy leading-tight mb-5">
                Services for commercial facilities spaces to operate at their best
              </h3>
              <p className="text-base text-slate-600 leading-relaxed mb-8">
                NEXAAGEN exists to help make people and places the best they can be through market-leading facilities services that deliver best outcomes.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-gradient-to-r from-[#E03A00] to-[#FF5E00] text-white font-semibold text-sm shadow-md hover:shadow-lg hover:brightness-105 transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: "Memorable first and lasting impressions..."
          ========================================================================= */}
      <section className="py-4 sm:py-6 bg-transparent">
        <div className="container-custom">
          <div className="bg-[#FAF9F7] rounded-3xl p-5 sm:p-7 lg:p-8 border border-[#EFECE6] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Image: Grounds Maintenance */}
            <div className="lg:col-span-5 flex justify-center lg:justify-start">
              <div className="relative rounded-2xl overflow-hidden shadow-sm aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] max-h-[300px] w-full max-w-[420px]">
                <img
                  src="/assets/sectors/commercial-grounds-maintenance.jpg"
                  alt="NEXAAGEN Commercial Grounds Maintenance Technician"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
            {/* Right Content */}
            <div className="lg:col-span-7 space-y-4">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-navy leading-tight">
                Memorable first and lasting impressions for colleagues and customers
              </h3>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Creating lasting impressions and maintaining a comfortable environment are paramount in commercial facilities. Our facilities services encompass comprehensive cleaning, top-tier catering, expert hard services, and efficient pest control, all contributing to a pristine, safe, and inviting atmosphere.
              </p>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                These services are crucial in upholding health and hygiene standards for employees, visitors, and guests in contemporary office spaces and commercial establishments. This focus on detail ensures that every interaction within these spaces is positive and memorable, fostering a productive and enjoyable environment for everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: "Fuelling your teams with nutritional, flavourful food"
          ========================================================================= */}
      <section className="py-4 sm:py-6 bg-transparent">
        <div className="container-custom">
          <div className="bg-[#FAF9F7] rounded-3xl p-5 sm:p-7 lg:p-8 border border-[#EFECE6] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-4">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-navy leading-tight">
                Fuelling your teams with nutritional, flavourful food
              </h3>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Our catering services are tailored to support workplace performance through various culinary options, meeting diverse tastes and dietary needs. From unique pop-up restaurants enhancing the office atmosphere to customised catering for corporate events, we aim to impress and satisfy.
              </p>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                We create environments where teams can meet and connect over meals, fostering a sense of community in the workplace. Our menus are carefully crafted to include nutritious and energising choices, helping staff maintain focus and productivity. Our catering services bring convenience and variety to your office, making each meal a pleasant and satisfying experience.
              </p>
            </div>
            {/* Right Image: Catering Chefs */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative rounded-2xl overflow-hidden shadow-sm aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] max-h-[300px] w-full max-w-[420px]">
                <img
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1200&q=80"
                  alt="NEXAAGEN Commercial Catering Team"
                  className="w-full h-full object-cover object-center rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: "Keeping your commercial premises looking the part"
          ========================================================================= */}
      <section className="py-4 sm:py-6 bg-transparent border-t border-slate-200/60">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-navy leading-tight mb-6">
                Keeping your commercial premises looking the part
              </h3>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-5">
                When you're running a business, it's imperative that everything runs like clockwork. The environment needs to bring the best out of our employees, while visitors and customers should be instantly impressed.
              </p>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Our integrated facilities management services for commercial customers help you deliver uninterrupted and hassle-free services while we keep everything in perfect working order behind the scenes.
              </p>
            </div>

            {/* Right: 6 Partner / Accreditation Badges */}
            <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 items-center justify-items-center">
              {/* Badge 1: BSA */}
              <div className="h-20 w-36 bg-[#FAFAFA] rounded-xl border border-[#EAEAEA] flex flex-col items-center justify-center p-3 text-center shadow-xs hover:border-[#E03A00] transition-colors">
                <span className="text-xs font-bold text-[#006699] tracking-wider">The BSA</span>
                <span className="text-[9px] text-slate-600 leading-tight mt-1">Business Services Association</span>
              </div>

              {/* Badge 2: BESA */}
              <div className="h-20 w-36 bg-[#1A2536] rounded-xl border border-[#1A2536] flex flex-col items-center justify-center p-3 text-center shadow-xs">
                <span className="text-base font-extrabold text-white tracking-widest">BESA</span>
                <span className="text-[8px] text-[#94A3B8] leading-tight">Building Engineering Services</span>
              </div>

              {/* Badge 3: ISO */}
              <div className="h-20 w-36 bg-[#FAFAFA] rounded-xl border border-[#EAEAEA] flex flex-col items-center justify-center p-3 text-center shadow-xs hover:border-[#E03A00] transition-colors">
                <div className="w-6 h-6 rounded-full border-2 border-[#006699] flex items-center justify-center mb-0.5">
                  <span className="text-[9px] font-bold text-[#006699]">ISO</span>
                </div>
                <span className="text-[10px] font-semibold text-[#1E293B]">ISO Certified</span>
              </div>

              {/* Badge 4: RoSPA */}
              <div className="h-20 w-36 bg-[#FAFAFA] rounded-xl border border-[#EAEAEA] flex flex-col items-center justify-center p-3 text-center shadow-xs hover:border-[#E03A00] transition-colors">
                <span className="text-sm font-black text-[#006699] tracking-wider">RoSPA</span>
                <span className="text-[9px] text-slate-600">Accredited Safety</span>
              </div>

              {/* Badge 5: BSI */}
              <div className="h-20 w-36 bg-[#FAFAFA] rounded-xl border border-[#EAEAEA] flex items-center justify-center p-3 text-center shadow-xs hover:border-[#E03A00] transition-colors">
                <span className="text-xl font-bold text-black tracking-tight">bsi.</span>
              </div>

              {/* Badge 6: IWFM */}
              <div className="h-20 w-36 bg-[#FAFAFA] rounded-xl border border-[#EAEAEA] flex flex-col items-center justify-center p-3 text-center shadow-xs hover:border-[#E03A00] transition-colors">
                <span className="text-sm font-extrabold text-[#008080] tracking-wider">iwfm</span>
                <span className="text-[8px] text-slate-600 leading-tight mt-0.5">Workplace &amp; FM</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: "Protecting and enhancing your brand and buildings"
          ========================================================================= */}
      <section className="py-4 sm:py-6 bg-transparent">
        <div className="container-custom">
          <div className="bg-[#FAF9F7] rounded-3xl p-5 sm:p-7 lg:p-8 border border-[#EFECE6] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-4">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-navy leading-tight">
                Protecting and enhancing your brand and buildings
              </h3>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                As well as creating the very best workplace experience, our range of services – including cleaning, security and landscaping – ensure your facilities are safe, secure, fully operational and looking their best at all times.
              </p>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                With a regular maintenance schedule, our teams make sure all of your mechanical and electrical equipment is problem-free, meaning your building keeps working as it should. And if something does go wrong, our teams are there swiftly to resume normal working order.
              </p>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Our proactive pest services teams keep your buildings safe from unwanted guests with preventative work to minimise the opportunity for pests to enter. If and when they do, we react immediately, minimising any damage to your brand.
              </p>
            </div>
            {/* Right Image: High-tech Facilities Maintenance Engineering */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative rounded-2xl overflow-hidden shadow-sm aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] max-h-[340px] w-full max-w-[420px]">
                <img
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80"
                  alt="NEXAAGEN Facilities Engineering & Maintenance Services"
                  className="w-full h-full object-cover object-center rounded-2xl border border-[#E5E7EB]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: "Responsibility and opportunity for change" (3 ESG Cards)
          ========================================================================= */}
      <section className="py-4 sm:py-6 bg-[#FAFAFA] border-t border-[#F0F0F0]">
        <div className="container-custom">
          <div className="mb-4 sm:mb-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-brand-navy tracking-tight leading-tight mb-2">
              Responsibility and opportunity for change
            </h2>
            <p className="text-base sm:text-lg text-slate-600">
              Our approach to service aligns with our customers's ESG goals and commitments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {esgCards.map((card, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-[#EAEAEA] flex flex-col hover:shadow-md transition-shadow duration-300"
              >
                <div className="h-60 overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-2xl font-bold text-[#1E293B]">
                        {card.title}
                      </h4>
                      <Link
                        to={card.link}
                        className="w-9 h-9 rounded-full bg-gradient-to-r from-[#E03A00] to-[#FF5E00] flex items-center justify-center text-white hover:brightness-110 transition-all shadow-sm"
                      >
                        <ArrowUpRight className="w-5 h-5" />
                      </Link>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8: "Frequently Asked Questions" (10 Commercial FAQs in 2 columns)
          ========================================================================= */}
      <section className="py-4 sm:py-6 bg-transparent border-t border-slate-200/60">
        <div className="container-custom">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-brand-navy tracking-tight leading-tight mb-4">
            Frequently Asked Questions
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 divide-y lg:divide-y-0 divide-[#E2E8F0]">
            {/* Column 1 (Left 5) */}
            <div className="divide-y divide-[#E2E8F0]">
              {commercialFaqs.slice(0, 5).map((faq) => {
                const isOpen = openFaqIndex === faq.id;
                return (
                  <div key={faq.id} className="py-6">
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full flex items-start justify-between text-left group focus:outline-none"
                    >
                      <span className="text-base sm:text-lg font-medium text-[#1E293B] group-hover:text-[#E03A00] transition-colors pr-4">
                        {faq.question}
                      </span>
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 shrink-0 mt-0.5 ${
                          isOpen
                            ? 'bg-[#E03A00] text-white border-[#E03A00] rotate-45'
                            : 'border-[#FFD2C2] text-[#E03A00] bg-white group-hover:border-[#E03A00]'
                        }`}
                      >
                        <Plus className="w-4 h-4" />
                      </div>
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <p className="pt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* Column 2 (Right 5) */}
            <div className="divide-y divide-[#E2E8F0] pt-6 lg:pt-0">
              {commercialFaqs.slice(5, 10).map((faq) => {
                const isOpen = openFaqIndex === faq.id;
                return (
                  <div key={faq.id} className="py-6">
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full flex items-start justify-between text-left group focus:outline-none"
                    >
                      <span className="text-base sm:text-lg font-medium text-[#1E293B] group-hover:text-[#E03A00] transition-colors pr-4">
                        {faq.question}
                      </span>
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 shrink-0 mt-0.5 ${
                          isOpen
                            ? 'bg-[#E03A00] text-white border-[#E03A00] rotate-45'
                            : 'border-[#FFD2C2] text-[#E03A00] bg-white group-hover:border-[#E03A00]'
                        }`}
                      >
                        <Plus className="w-4 h-4" />
                      </div>
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <p className="pt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
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
        </div>
      </section>

      {/* =========================================================================
          SECTION 9: "Customer stories"
          ========================================================================= */}
      <section className="py-4 sm:py-6 bg-[#FAF9F7] border-t border-[#F0F0F0]">
        <div className="container-custom">
          <div className="mb-4 sm:mb-6 text-left w-full">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-brand-navy tracking-tight leading-tight whitespace-normal break-words xl:whitespace-nowrap mb-2">
              Customer stories
            </h2>
            <p className="text-base sm:text-lg text-slate-600">
              Discover how we're helping our customers be the best they can be.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {customerStories.map((story) => (
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
                    <span className="inline-block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">
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
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

