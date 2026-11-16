import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Check, ArrowUpRight } from 'lucide-react';

/**
 * EducationSectorContent Component
 * Directly replicates the entire suite of sections from OCS Education sector:
 * 1. "Building environments that enable success"
 * 2. "Education FM" (5 BEST Accordions)
 * 3. "Services to help students and educators be their best" (4 Services Accordions)
 * 4. "Using space optimally and effectively"
 * 5. "Supporting the Education sector sustainably" (Grow Garden Image + 3 Checkmarks)
 * 6. "Responsibility and opportunity for change" (3 ESG Pillar Cards: Environmental, Social, Governance)
 * 7. "Frequently Asked Questions" (6 Education FAQs in 2 columns)
 */
export default function EducationSectorContent() {
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
      title: 'Best Experiences for Education',
      content: 'Delivering clean, safe, and welcoming study environments that foster student belonging, reduce absenteeism, and enhance day-to-day collegiate campus life.',
    },
    {
      title: 'Best Productivity for Education',
      content: 'Optimizing acoustic comfort, indoor air quality, and thermal control in lecture theatres and laboratories so educators and students stay focused and productive.',
    },
    {
      title: 'Best Practices for Education',
      content: 'Deploying environmentally-certified cleaning protocols, autonomous floor scrubbers, and strict safeguarding procedures verified through independent compliance audits.',
    },
    {
      title: 'Best Resilience for Education',
      content: 'Proactive lifecycle maintenance on boilers, HVAC chillers, and backup electrical networks, safeguarding critical university research and preventing unexpected school closures.',
    },
    {
      title: 'Best Outcomes for Education',
      content: 'Delivering measurable reductions in campus utility costs, accelerated decarbonisation milestones, and consistently elevated National Student Survey (NSS) satisfaction scores.',
    },
  ];

  const serviceAccordions = [
    {
      title: 'Cleaning for Education',
      content: 'Day-porter presence, rapid-turnaround lecture hall sanitization, summer student accommodation deep cleaning, and germicidal decontamination during seasonal infection periods.',
    },
    {
      title: 'Facilities Management for Education',
      content: 'End-to-end integrated FM encompassing building fabric maintenance, concierge and front-of-house helpdesks, waste segregation, and estate asset lifecycle management.',
    },
    {
      title: 'Hard Services for Education',
      content: 'Certified engineering teams managing building heating, ventilation, air conditioning, electrical compliance, lighting retrofits, and statutory fire protection systems.',
    },
    {
      title: 'Pest Control for Education',
      content: 'Discrete, non-toxic, and preventative pest management solutions safeguarding dining halls, student dormitories, science faculties, and campus food stores.',
    },
  ];

  const educationFaqs = [
    {
      id: 'edu-faq-1',
      question: 'What facilities management services are crucial for educational institutions?',
      answer: 'Educational institutions require a tailored balance of hard and soft FM services: rapid-turnaround lecture hall cleaning between classes, summer student room deep-cleans, HVAC thermal regulation, statutory electrical & fire safety compliance, groundskeeping, and safeguarding-certified campus security teams.',
    },
    {
      id: 'edu-faq-2',
      question: 'How can facilities management services be customised to suit the needs of educational institutions?',
      answer: 'We build bespoke operational models tailored to the physical footprint, heritage requirements, and student demographics of each institution. From historic boarding schools with listed architecture to sprawling modern multi-site universities, staffing scales dynamically between term-time peaks and holiday lulls.',
    },
    {
      id: 'edu-faq-3',
      question: 'How do you ensure minimal disruption to educational activities during facilities maintenance or upgrades?',
      answer: 'We schedule intrusive maintenance, noisy plant refurbishments, and high-voltage testing during off-peak hours, weekends, and academic term breaks. Our dynamic scheduling tools synchronize with university timetables to guarantee zero disruption to exams, teaching lectures, or graduation events.',
    },
    {
      id: 'edu-faq-4',
      question: 'What measures are taken to ensure the safety and security of people and campus premises within educational facilities?',
      answer: 'All on-site NEXAAGEN personnel undergo enhanced background vetting and comprehensive student safeguarding training. We implement smart badge access control, perimeter monitoring, visitor management kiosks, automated fire safety systems, and regular emergency lockdown drills.',
    },
    {
      id: 'edu-faq-5',
      question: 'Can you assist educational institutions in managing energy efficiency and sustainability initiatives?',
      answer: 'Yes. NEXAAGEN collaborates with schools, colleges, and universities to implement Net Zero roadmaps. This includes smart BMS thermal zoning, LED lighting retrofits, solar PV maintenance, food waste biodigestion, and campus-wide carbon footprint auditing compliant with ISO 50001 standards.',
    },
    {
      id: 'edu-faq-6',
      question: 'Can you share case studies showcasing successful facilities management projects in the educational sector?',
      answer: 'Yes. Our portfolio includes major university campus transformations where we achieved a 45% reduction in Scope 1 and 2 emissions across 180 acres, successfully turned around over 12,000 student accommodation rooms during a 6-week summer recess with zero handover defects, and elevated National Student Survey cleanliness ratings to #1 in the region.',
    },
  ];

  const esgCards = [
    {
      title: 'Environmental',
      image: '/assets/sectors/esg-environmental-forest.jpg',
      description: 'We are committed to environmental stewardship, focusing on sustainable practices and reducing our ecological footprint across educational estates.',
      link: '/esg',
    },
    {
      title: 'Social',
      image: '/assets/sectors/esg-social-colleague.jpg',
      description: 'Fostering a socially responsible environment, prioritising community engagement, employee well-being, and ethical practices in education.',
      link: '/esg',
    },
    {
      title: 'Governance',
      image: '/assets/sectors/esg-governance-architecture.jpg',
      description: 'Upholds robust governance, ensuring transparency, accountability, and ethical integrity across all global operations and statutory audits.',
      link: '/esg',
    },
  ];

  return (
    <div className="w-full bg-white space-y-6 sm:space-y-8 lg:space-y-10 py-4 sm:py-6 overflow-hidden">
      
      {/* SECTION 1: Building environments that enable success */}
      <section className="w-full">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-5 sm:space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-brand-navy tracking-tight leading-tight">
                Building environments that enable success
              </h2>

              <p className="text-slate-600 text-xs sm:text-sm lg:text-[15px] font-normal leading-relaxed">
                The quality of the learning environment is incredibly important for both educators and students to succeed, and a stellar student experience is essential to not only attract students but retain them, too. From facilities being clean and tidy to everyone knowing they're safe to the infrastructure working reliably and healthy meals fuelling students and staff every day, we've got decades of experience to help your school, college or university be at its very best, every single day.
              </p>

              <div className="pt-2">
                <p className="text-slate-900 font-bold text-xs sm:text-sm">
                  View Facilities Management (FM) or Single-Service solutions below.
                </p>
              </div>

              <div className="pt-2">
                <a
                  href="#contact-form"
                  className="inline-flex items-center justify-center font-bold text-white px-8 py-3.5 rounded-full text-xs sm:text-sm bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:from-[#F4511E] hover:to-[#B71C1C] shadow-md hover:shadow-orange-500/25 transition-all duration-300 ease-out active:scale-[0.98]"
                >
                  Contact Our Educational Team
                </a>
              </div>
            </div>

            {/* Right Image Column */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl sm:rounded-[36px] overflow-hidden shadow-xl border border-slate-100 aspect-[4/3] group bg-slate-100">
                <img
                  src="/assets/sectors/education-classroom-teacher.jpg"
                  alt="Teacher in classroom with students raising hands"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: Education FM (Elevated Box Left, 5 BEST Accordions Right) */}
      <section className="w-full">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Elevated Card */}
            <div className="lg:col-span-5">
              <div className="bg-[#FAF9F5] rounded-3xl sm:rounded-[36px] p-8 sm:p-11 lg:p-12 border border-slate-200/60 shadow-sm space-y-6">
                <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-heading font-extrabold text-brand-navy tracking-tight">
                  Education FM
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm lg:text-[15px] font-normal leading-relaxed">
                  Our mission's BEST strategy and ethos addresses five areas of concern highlighted by industry leaders in reference to facilities management: Experiences, Productivity, Practices, Resilience and Outcomes.
                </p>

                <div>
                  <a
                    href="#contact-form"
                    className="inline-flex items-center justify-center font-bold text-white px-7 py-3 rounded-full text-xs sm:text-sm bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:from-[#F4511E] hover:to-[#B71C1C] shadow-md hover:shadow-orange-500/25 transition-all duration-300 ease-out active:scale-[0.98]"
                  >
                    Our Mission & Best Strategy
                  </a>
                </div>
              </div>
            </div>

            {/* Right Accordion Rows (5 BEST items) */}
            <div className="lg:col-span-7 space-y-3 sm:space-y-4">
              {bestAccordions.map((item, idx) => {
                const isOpen = openBestIndex === idx;
                return (
                  <div
                    key={idx}
                    className="border-b border-slate-200/80 pb-4 pt-2 transition-colors"
                  >
                    <button
                      onClick={() => toggleBest(idx)}
                      className="w-full flex items-center justify-between text-left group focus:outline-none py-2"
                      aria-expanded={isOpen}
                    >
                      <span className="text-sm sm:text-base font-heading font-medium text-slate-800 group-hover:text-brand-orange transition-colors pr-4">
                        {item.title}
                      </span>
                      <span
                        className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                          isOpen
                            ? 'border-brand-orange bg-brand-orange text-white rotate-45'
                            : 'border-orange-200/90 text-brand-orange bg-orange-50/40 group-hover:border-brand-orange'
                        }`}
                      >
                        <Plus className="w-4 h-4" />
                      </span>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25, ease: 'easeOut' }}
                          className="overflow-hidden"
                        >
                          <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal pr-4">
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
        </div>
      </section>

      {/* SECTION 3: Services to help students and educators be their best */}
      <section className="w-full">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Accordion Rows (4 Service items) */}
            <div className="lg:col-span-7 order-2 lg:order-1 space-y-3 sm:space-y-4">
              {serviceAccordions.map((item, idx) => {
                const isOpen = openServiceIndex === idx;
                return (
                  <div
                    key={idx}
                    className="border-b border-slate-200/80 pb-4 pt-2 transition-colors"
                  >
                    <button
                      onClick={() => toggleService(idx)}
                      className="w-full flex items-center justify-between text-left group focus:outline-none py-2"
                      aria-expanded={isOpen}
                    >
                      <span className="text-sm sm:text-base font-heading font-medium text-slate-800 group-hover:text-brand-orange transition-colors pr-4">
                        {item.title}
                      </span>
                      <span
                        className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                          isOpen
                            ? 'border-brand-orange bg-brand-orange text-white rotate-45'
                            : 'border-orange-200/90 text-brand-orange bg-orange-50/40 group-hover:border-brand-orange'
                        }`}
                      >
                        <Plus className="w-4 h-4" />
                      </span>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25, ease: 'easeOut' }}
                          className="overflow-hidden"
                        >
                          <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal pr-4">
                            {item.content}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* Right Elevated Card */}
            <div className="lg:col-span-5 order-1 lg:order-2">
              <div className="bg-[#FAF9F5] rounded-3xl sm:rounded-[36px] p-8 sm:p-11 lg:p-12 border border-slate-200/60 shadow-sm space-y-6">
                <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-heading font-extrabold text-brand-navy tracking-tight leading-snug">
                  Services to help students and educators be their best
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm lg:text-[15px] font-normal leading-relaxed">
                  NEXAAGEN exists to help make people and places the best they can be through market-leading facilities services that deliver best outcomes.
                </p>

                <div>
                  <a
                    href="#contact-form"
                    className="inline-flex items-center justify-center font-bold text-white px-7 py-3 rounded-full text-xs sm:text-sm bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:from-[#F4511E] hover:to-[#B71C1C] shadow-md hover:shadow-orange-500/25 transition-all duration-300 ease-out active:scale-[0.98]"
                  >
                    Contact Our Education Team
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4: Using space optimally and effectively */}
      <section className="w-full">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Image Column */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl sm:rounded-[36px] overflow-hidden shadow-xl border border-slate-100 aspect-[4/3] group bg-slate-100">
                <img
                  src="/assets/sectors/education-team-highfive.jpg"
                  alt="Students and children doing team high-five at school desk"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right Content Column */}
            <div className="lg:col-span-6 space-y-5 sm:space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-brand-navy tracking-tight leading-tight">
                Using space optimally and effectively
              </h2>

              <p className="text-slate-600 text-xs sm:text-sm lg:text-[15px] font-normal leading-relaxed">
                Making best use of the space available can be a challenge for education establishments. We use best practices from around the globe to design spaces that encourage learning and enhance the student and educator experience – while getting the most out of the available floor space.
              </p>

              <p className="text-slate-600 text-xs sm:text-sm lg:text-[15px] font-normal leading-relaxed">
                We don't just focus on the indoors. The quality of your outdoor spaces is equally important in creating an environment designed for success. We create green, outdoor spaces that help students relax, socialise and play, while also improving the biodiversity of the local community.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 5: Supporting the Education sector sustainably (Matching OCS Screenshot 2) */}
      <section className="w-full">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-5 sm:space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-brand-navy tracking-tight leading-tight">
                Supporting the Education sector sustainably
              </h2>

              <p className="text-slate-600 text-xs sm:text-sm lg:text-[15px] font-normal leading-relaxed">
                Across our services in the Education sector, we are dedicated to championing Environmental, Social, and Governance (ESG) principles. We always use a sustainable and responsible approach to improve our people and places now and for future generations.
              </p>

              {/* 3 Red/Orange Checkmark Bullets */}
              <div className="space-y-4 pt-1">
                <div className="flex items-start space-x-3.5">
                  <div className="w-5 h-5 rounded-full bg-[#D8232A] text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                    We integrate practices which put the environment first. From energy-efficient systems to food waste reduction menus, we actively seek sustainable solutions.
                  </p>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-5 h-5 rounded-full bg-[#D8232A] text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                    By providing clear insights into our processes and practices, we make sure our sustainability efforts align with the values and expectations of our customers.
                  </p>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-5 h-5 rounded-full bg-[#D8232A] text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                    Encouraging participation in initiatives such as 'grow gardens' we want to create a community that contributes to the well-being of both the educational ecosystem and the planet.
                  </p>
                </div>
              </div>

              {/* More On ESG Button */}
              <div className="pt-2">
                <Link
                  to="/esg"
                  className="inline-flex items-center justify-center font-bold text-white px-8 py-3.5 rounded-full text-xs sm:text-sm bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:from-[#F4511E] hover:to-[#B71C1C] shadow-md hover:shadow-orange-500/25 transition-all duration-300 ease-out active:scale-[0.98]"
                >
                  More On ESG
                </Link>
              </div>
            </div>

            {/* Right Image: Campus Grow Garden */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl sm:rounded-[36px] overflow-hidden shadow-xl border border-slate-100 aspect-[4/3] group bg-slate-100">
                <img
                  src="/assets/sectors/education-garden-sustainable.jpg"
                  alt="School community grow garden rows of crisp green lettuce"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 6: Responsibility and opportunity for change (3 ESG Pillar Cards matching Screenshot 3) */}
      <section className="w-full py-4 sm:py-6">
        <div className="container-custom">
          
          {/* Header */}
          <div className="space-y-3 mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-brand-navy tracking-tight leading-tight">
              Responsibility and opportunity for change
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm lg:text-base font-normal max-w-2xl">
              NEXAAGEN is in a position to make a tangible difference for colleagues, customers and communities.
            </p>
          </div>

          {/* 3 Elevated Pillar Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {esgCards.map((card, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl sm:rounded-[32px] overflow-hidden border border-slate-200/70 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Image */}
                <div className="relative aspect-[16/11] overflow-hidden bg-slate-100">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                </div>

                {/* Body */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl sm:text-2xl font-heading font-bold text-brand-navy tracking-tight">
                        {card.title}
                      </h3>
                      {/* Red-Orange Circular Arrow Button */}
                      <Link
                        to={card.link}
                        className="w-9 h-9 rounded-full bg-gradient-to-r from-[#FF5722] to-[#D8232A] text-white flex items-center justify-center shadow-md hover:scale-105 transition-transform"
                        aria-label={`Learn more about ${card.title}`}
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </Link>
                    </div>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 7: Frequently Asked Questions (Matching Screenshot 2 Bottom) */}
      <section className="w-full pt-4">
        <div className="container-custom">
          
          <div className="space-y-3 mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-brand-navy tracking-tight leading-tight">
              Frequently Asked Questions
            </h2>
          </div>

          {/* 2-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-6 sm:gap-y-8">
            
            {/* Left Column (Items 1, 3, 5) */}
            <div className="space-y-4 sm:space-y-6">
              {[educationFaqs[0], educationFaqs[2], educationFaqs[4]].map((faq, idx) => {
                const globalIdx = idx * 2;
                const isOpen = openFaqIndex === globalIdx;
                return (
                  <div
                    key={faq.id}
                    className="border-b border-slate-200/80 pb-5 sm:pb-6 transition-colors"
                  >
                    <button
                      onClick={() => toggleFaq(globalIdx)}
                      className="w-full flex items-center justify-between text-left group focus:outline-none py-1"
                      aria-expanded={isOpen}
                    >
                      <span className="text-sm sm:text-[15px] lg:text-base font-heading font-medium text-slate-800 group-hover:text-brand-orange transition-colors pr-4 leading-snug">
                        {faq.question}
                      </span>
                      <span
                        className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                          isOpen
                            ? 'border-brand-orange bg-brand-orange text-white rotate-45'
                            : 'border-orange-200/90 text-brand-orange bg-orange-50/40 group-hover:border-brand-orange'
                        }`}
                      >
                        <Plus className="w-4 h-4" />
                      </span>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25, ease: 'easeOut' }}
                          className="overflow-hidden"
                        >
                          <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal pr-4">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* Right Column (Items 2, 4, 6) */}
            <div className="space-y-4 sm:space-y-6">
              {[educationFaqs[1], educationFaqs[3], educationFaqs[5]].map((faq, idx) => {
                const globalIdx = idx * 2 + 1;
                const isOpen = openFaqIndex === globalIdx;
                return (
                  <div
                    key={faq.id}
                    className="border-b border-slate-200/80 pb-5 sm:pb-6 transition-colors"
                  >
                    <button
                      onClick={() => toggleFaq(globalIdx)}
                      className="w-full flex items-center justify-between text-left group focus:outline-none py-1"
                      aria-expanded={isOpen}
                    >
                      <span className="text-sm sm:text-[15px] lg:text-base font-heading font-medium text-slate-800 group-hover:text-brand-orange transition-colors pr-4 leading-snug">
                        {faq.question}
                      </span>
                      <span
                        className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                          isOpen
                            ? 'border-brand-orange bg-brand-orange text-white rotate-45'
                            : 'border-orange-200/90 text-brand-orange bg-orange-50/40 group-hover:border-brand-orange'
                        }`}
                      >
                        <Plus className="w-4 h-4" />
                      </span>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25, ease: 'easeOut' }}
                          className="overflow-hidden"
                        >
                          <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal pr-4">
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

    </div>
  );
}
