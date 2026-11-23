import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ArrowUpRight, 
  Check, 
  ChevronLeft, 
  ChevronRight, 
  Plus, 
  Minus,
  ShieldCheck,
  Award,
  Sparkles,
  Zap,
  Building2,
  Cpu,
  Leaf
} from 'lucide-react';
import ContactForm from '../sections/ContactForm';

export default function FacilitiesManagementContent({ service }) {
  // State for Accordions in FAQ section
  const [openFaq, setOpenFaq] = useState(null);

  // Carousel states
  const [privateCarouselIndex, setPrivateCarouselIndex] = useState(0);
  const [publicCarouselIndex, setPublicCarouselIndex] = useState(0);
  const [singleLineIndex, setSingleLineIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Private Sector Cards Data (Screenshots 5 & 6)
  const privateSectorCards = [
    {
      id: 'data-centres',
      title: 'Data Centres',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
      description: 'Maintaining business continuity and the avoidance of interruption.',
      link: '/sectors/data-centres'
    },
    {
      id: 'commercial',
      title: 'Commercial',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      description: 'Enhanced workplace experiences for increased productivity and retention.',
      link: '/sectors/commercial'
    },
    {
      id: 'manufacturing',
      title: 'Manufacturing',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
      description: 'Maintaining efficient plants and product lines for the manufacturing industry.',
      link: '/sectors/manufacturing'
    },
    {
      id: 'aviation',
      title: 'Aviation',
      image: 'https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&w=800&q=80',
      description: 'Aviation sector-specialist services including Passengers with Reduced Mobility (PRM).',
      link: '/sectors/aviation'
    }
  ];

  // Public Sector Cards Data (Screenshot 7)
  const publicSectorCards = [
    {
      id: 'education',
      title: 'Education',
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80',
      description: 'Inspiring the environments where learning and development thrive.',
      link: '/sectors/education'
    },
    {
      id: 'healthcare',
      title: 'Healthcare',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80',
      description: 'Supporting those teams responsible for mental and physical wellness.',
      link: '/sectors/healthcare'
    }
  ];

  // Single-Line Services Cards Data (Screenshots 12, 13 & 14)
  const singleLineServices = [
    {
      id: 'cleaning',
      title: 'Cleaning',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80',
      description: 'Cleaning services that deliver optimum health and hygiene for the best experiences and outcomes.',
      link: '/services/cleaning'
    },
    {
      id: 'hard-services',
      title: 'Hard Services',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
      description: 'Planned and preventative maintenance (PPM), minor works and capital projects.',
      link: '/services/hard-services'
    },
    {
      id: 'pest-control',
      title: 'Pest Control',
      image: 'https://images.unsplash.com/photo-1588854337221-4cf9fa96059c?auto=format&fit=crop&w=800&q=80',
      description: 'Keep unwanted visitors at bay, protecting your facilities and your reputation.',
      link: '/services/pest-control'
    },
    {
      id: 'carbon-energy',
      title: 'Carbon & Energy',
      image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=80',
      description: 'Working with you towards Net Zero and your broader ESG goals and commitments.',
      link: '/services/carbon-energy-management'
    },
    {
      id: 'front-of-house',
      title: 'Front-of-house',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
      description: 'Professionally trained individuals with friendly faces for lasting impressions.',
      link: '/services/front-of-house-concierge'
    },
    {
      id: 'landscaping',
      title: 'Landscaping',
      image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=800&q=80',
      description: 'Grounds maintenance, indoor biophilic plant styling, and sustainable water irrigation.',
      link: '/services/landscaping'
    }
  ];

  // FAQ Items (Screenshot 11)
  const faqItems = [
    {
      q: 'What specific facilities management services do you offer for the private sector?',
      a: 'We provide comprehensive integrated and single-line solutions including Hard MEP engineering, planned preventative maintenance (PPM), daily office cleaning, specialist facade care, 24/7 security guarding, smart IoT building telemetry, workplace concierge, and carbon reduction roadmaps tailored for corporate headquarters, data centres, manufacturing plants, and aviation hubs.'
    },
    {
      q: 'Do you provide facilities management to the public sector for healthcare, education and government?',
      a: 'Yes. We deliver tailored facilities management for universities, multi-speciality tertiary hospitals, municipal offices, and transportation infrastructure, prioritizing public hygiene, accessibility, energy efficiency, and uninterrupted civic service continuity.'
    },
    {
      q: 'How do you ensure a seamless and integrated approach to facilities management?',
      a: 'Our self-delivered model consolidates disparate services under a single governance contract led by a dedicated Account Director. Through our NEXA-Pulse CAFM platform, all work orders, sensor telemetry, SLA metrics, and statutory compliance logs are unified in one real-time dashboard, eliminating subcontractor margins and communication silos.'
    },
    {
      q: 'Can you customise your facilities management plans to accommodate specific needs?',
      a: 'Every estate has unique operational demands. We conduct comprehensive site audits and develop bespoke SLAs—whether you require 24/7 resident MEP engineering, flexible day/night janitorial schedules, seasonal landscaping, or multi-site consolidated contracts.'
    },
    {
      q: 'Do you have experience in managing confidential or sensitive facilities, ensuring security and confidentiality?',
      a: 'Yes. We maintain strict non-disclosure, vetted personnel (DBS/police-verified), and ISO 27001 information security compliance across critical trading floors, defense contractor facilities, pharmaceutical cleanrooms, and Tier-IV data centres with biometric multi-tier access control.'
    },
    {
      q: 'How do you maintain a high level of service quality and efficiency across various facilities?',
      a: 'Through our self-delivery model, rigorous internal training academies, standardized standard operating procedures (SOPs), and automated quality audits verified with ATP swab assays, IoT vibration sensors, and live tenant feedback scorecards.'
    },
    {
      q: 'Can you provide support for compliance with industry regulations and standards?',
      a: 'Absolutely. Our certified engineers and QHSE auditors ensure complete statutory compliance with National Building Codes, Central Electricity Authority regulations, OSHA safety standards, NABH hospital infection norms, and ISO 9001/14001/45001 frameworks with automated digital audit trails.'
    },
    {
      q: 'Can you share case studies showcasing successful facilities management projects you\'ve undertaken?',
      a: 'Certainly. We manage over 1,200 facilities across India, including 99.999% uptime delivery for hyperscale data centres, 40% energy reduction for commercial towers in Bengaluru, and sterile infection control across multi-city hospital networks. Detailed case studies are available upon request.'
    }
  ];

  return (
    <div className="w-full flex flex-col bg-transparent">
      {/* ============================================================== */}
      {/* SECTION 1: HERO SECTION (Screenshot 1)                          */}
      {/* ============================================================== */}
      <section className="w-full py-1.5 sm:py-2.5 bg-transparent overflow-hidden">
        <div className="container-custom">
          <div className="relative w-full rounded-2xl sm:rounded-[24px] lg:rounded-[28px] overflow-hidden min-h-[220px] sm:min-h-[250px] lg:min-h-[280px] flex items-center shadow-lg border border-slate-200/60">
            {/* Background Image: Spiral Staircase with Motion Blur (Screenshot 1) */}
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=2400&q=85"
                alt="Modern Atrium Architecture with Illuminated Spiral Stairs"
                className="w-full h-full object-cover object-center scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent hidden lg:block" />
            </div>

            {/* Left Floating White Card (Screenshot 1) */}
            <div className="relative z-20 p-3 sm:p-5 md:p-6 lg:p-7 max-w-lg">
              <div className="bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-xl sm:rounded-2xl shadow-xl border border-slate-100 space-y-2 sm:space-y-2.5">
                {/* Red "We're hiring | Careers" Badge */}
                <div className="inline-flex items-center space-x-2 text-xs font-semibold">
                  <span className="bg-[#D8232A] text-white px-2.5 py-0.5 rounded-full text-[11px] font-bold tracking-wide">
                    We're hiring
                  </span>
                  <Link
                    to="/contact"
                    className="text-slate-700 hover:text-brand-orange transition-colors flex items-center text-xs"
                  >
                    <span>NEXAAGEN Careers</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Link>
                </div>

                <h1 className="text-xl sm:text-2xl lg:text-3xl font-heading font-extrabold text-brand-navy tracking-tight leading-tight">
                  Facilities Management
                </h1>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                  Integrated service solutions to optimise your industry, workplace, destination or venue for private and public sector customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 2: FOR PRIVATE AND PUBLIC SECTORS (Screenshots 2 & 3)   */}
      {/* ============================================================== */}
      <section className="section-padding bg-transparent">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Director Portrait Photo */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-100 aspect-[4/3] max-w-md mx-auto group">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1200&q=85"
                  alt="NEXAAGEN Senior Facilities Operations Director"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-brand-navy/90 backdrop-blur-md text-white p-4 rounded-2xl border border-white/10">
                  <p className="text-xs font-bold uppercase tracking-wider text-brand-orange">
                    Operational Leadership
                  </p>
                  <p className="text-sm font-semibold mt-0.5">
                    Bespoke SLA Governance & Technical Execution
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Content + Checkpoints */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-brand-navy tracking-tight leading-tight">
                Facilities Management for <br className="hidden sm:inline" />
                private and public sectors
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                What sets our Facilities Management service apart is our emphasis on bespoke service delivery, tailored to the unique requirements of each sector we serve. This isn't just about cleaning or security; it's about understanding the specific dynamics of environments like hospitals, schools, courts, and arenas, and adapting our services to optimise their functionality and impact.
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Our approach is grounded in learned and thorough understanding of the different challenges and needs of each setting, ensuring that our facilities management goes beyond routine tasks to truly enhance the user experience in each space.
              </p>

              {/* 3 Red/Orange Checkpoints */}
              <div className="space-y-3.5 pt-2 border-t border-slate-100">
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-[#E53935] text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-sm sm:text-base font-semibold text-slate-700">
                    Facilities Management and integrated solutions for the private sector.
                  </span>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-[#E53935] text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-sm sm:text-base font-semibold text-slate-700">
                    Facilities Management and integrated solutions for the public sector.
                  </span>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-[#E53935] text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-sm sm:text-base font-semibold text-slate-700">
                    In-house self-delivered service expertise.
                  </span>
                </div>
              </div>

              {/* Red-Orange Gradient CTA Button */}
              <div className="pt-4">
                <a
                  href="#contact-form"
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-bold text-white bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:from-[#F4511E] hover:to-[#B71C1C] shadow-lg hover:shadow-orange-500/25 transition-all duration-300"
                >
                  Contact Your FM Team
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 3: COLLEAGUES THAT MAKE THE DIFFERENCE (Screenshot 4)   */}
      {/* ============================================================== */}
      <section className="section-padding bg-transparent border-y border-slate-200/60">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5 order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-brand-navy tracking-tight leading-tight">
                It's our NEXAAGEN colleagues <br className="hidden sm:inline" />
                that make the difference
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                NEXAAGEN colleagues naturally embody a sense of ownership and pride in their work, reflecting our core values of Trust, Respect, Unity, and Empowerment. These principles guide them to do the right things in the right way – the NEXAAGEN way.
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Our team take personal responsibility for the quality and outcomes of their work, treating each task and environment with the care and attention it deserves. This intrinsic sense of pride and ownership, supported by appropriate training, enables them to deliver services that consistently exceed expectations. Their commitment is a testament to the unique culture at NEXAAGEN, where every colleague plays a vital role in our collective success and the satisfaction of those we serve.
              </p>
            </div>

            {/* Right Photo: Smiling Female Colleague */}
            <div className="lg:col-span-5 order-1 lg:order-2">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-100 aspect-[4/3] max-w-md mx-auto group">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=85"
                  alt="NEXAAGEN Colleague Facilities Specialist"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 4: PRIVATE SECTOR FM CAROUSEL (Screenshots 5 & 6)       */}
      {/* ============================================================== */}
      <section className="section-padding bg-transparent overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Callout Card */}
            <div className="lg:col-span-4 flex flex-col justify-between p-8 rounded-3xl bg-slate-50 border border-slate-100">
              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-brand-navy leading-tight">
                  Private Sector Facilities Management
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Find out more about our sector-specialist teams and experience for the private sector.
                </p>
              </div>

              <div className="pt-8 space-y-5">
                <Link
                  to="/sectors"
                  className="inline-flex items-center justify-center px-7 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:from-[#F4511E] hover:to-[#B71C1C] shadow-md transition-all"
                >
                  View All Sectors
                </Link>

                {/* Carousel Controls */}
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() =>
                      setPrivateCarouselIndex((prev) =>
                        prev === 0 ? privateSectorCards.length - 2 : prev - 1
                      )
                    }
                    className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-slate-100 flex items-center justify-center text-slate-700 transition-colors shadow-sm"
                    aria-label="Previous card"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() =>
                      setPrivateCarouselIndex((prev) =>
                        prev >= privateSectorCards.length - 2 ? 0 : prev + 1
                      )
                    }
                    className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-slate-100 flex items-center justify-center text-slate-700 transition-colors shadow-sm"
                    aria-label="Next card"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Cards Slider */}
            <div className="lg:col-span-8 overflow-hidden">
              <div
                className="grid grid-cols-1 sm:grid-cols-2 gap-6 transition-all duration-500 ease-out"
                style={{
                  transform: `translateX(-${privateCarouselIndex * 0}%)`
                }}
              >
                {privateSectorCards.slice(privateCarouselIndex, privateCarouselIndex + 2).map((card) => (
                  <Link
                    key={card.id}
                    to={card.link}
                    className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-cover card-img-zoom"
                      />
                    </div>
                    <div className="p-6 flex flex-col justify-between flex-1">
                      <div>
                        <div className="flex items-center justify-between">
                          <h4 className="text-xl font-bold font-heading text-brand-navy group-hover:text-brand-orange transition-colors">
                            {card.title}
                          </h4>
                          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#FF5722] to-[#D8232A] text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                            <ArrowUpRight className="w-4 h-4" />
                          </div>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 5: PUBLIC SECTOR FM CAROUSEL (Screenshot 7)             */}
      {/* ============================================================== */}
      <section className="section-padding bg-slate-50/60 border-y border-slate-100 overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Callout Card */}
            <div className="lg:col-span-4 flex flex-col justify-between p-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm">
              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-brand-navy leading-tight">
                  Public Sector Facilities Management
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Find out more about our sector-specialist teams and experience for the public sector.
                </p>
              </div>

              <div className="pt-8 space-y-5">
                <Link
                  to="/sectors"
                  className="inline-flex items-center justify-center px-7 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:from-[#F4511E] hover:to-[#B71C1C] shadow-md transition-all"
                >
                  View All Sectors
                </Link>

                {/* Carousel Controls */}
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() =>
                      setPublicCarouselIndex((prev) =>
                        prev === 0 ? publicSectorCards.length - 1 : prev - 1
                      )
                    }
                    className="w-10 h-10 rounded-full border border-slate-200 bg-slate-50 hover:bg-slate-100 flex items-center justify-center text-slate-700 transition-colors shadow-sm"
                    aria-label="Previous card"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() =>
                      setPublicCarouselIndex((prev) =>
                        prev >= publicSectorCards.length - 1 ? 0 : prev + 1
                      )
                    }
                    className="w-10 h-10 rounded-full border border-slate-200 bg-slate-50 hover:bg-slate-100 flex items-center justify-center text-slate-700 transition-colors shadow-sm"
                    aria-label="Next card"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right 2 Cards */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {publicSectorCards.map((card) => (
                  <Link
                    key={card.id}
                    to={card.link}
                    className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-cover card-img-zoom"
                      />
                    </div>
                    <div className="p-6 flex flex-col justify-between flex-1">
                      <div>
                        <div className="flex items-center justify-between">
                          <h4 className="text-xl font-bold font-heading text-brand-navy group-hover:text-brand-orange transition-colors">
                            {card.title}
                          </h4>
                          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#FF5722] to-[#D8232A] text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                            <ArrowUpRight className="w-4 h-4" />
                          </div>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 6: FACILITIES MANAGEMENT + ESG (Screenshot 8)           */}
      {/* ============================================================== */}
      <section className="section-padding bg-transparent">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-brand-navy tracking-tight leading-tight">
                Facilities Management + ESG
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                We are constantly taking steps to reduce our impact on the environment – and can help you achieve your sustainability goals, too. We use microbial and bio (green) products as much as possible, never use phosphates or aerosols, and select cleaning products that are effective, well-priced and most importantly, have evidence-based eco-credentials.
              </p>

              {/* 3 Checkpoints */}
              <div className="space-y-4 pt-2 border-t border-slate-100">
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-[#E53935] text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                    Committed to sustainable practices in facilities management, prioritising energy efficiency, waste reduction, and the utilisation of eco-friendly materials and technologies.
                  </span>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-[#E53935] text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                    Creating inclusive and safe work environments, promoting wellbeing and professional development opportunities for all colleagues.
                  </span>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-[#E53935] text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                    Ensuring transparency, ethical practices, and compliance with legal and regulatory requirements across all facilities management operations.
                  </span>
                </div>
              </div>

              {/* Red-Orange Gradient CTA */}
              <div className="pt-3">
                <Link
                  to="/esg"
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-bold text-white bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:from-[#F4511E] hover:to-[#B71C1C] shadow-lg hover:shadow-orange-500/25 transition-all duration-300"
                >
                  Contact Our ESG Team
                </Link>
              </div>
            </div>

            {/* Right Photo: Swirling Seafoam / Ocean Water (Screenshot 8) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-100 aspect-square max-w-md mx-auto group">
                <img
                  src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1200&q=85"
                  alt="Pristine Ocean Waters and Sustainable Environmental Management"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 7: FACILITIES MANAGEMENT + TECHNOLOGY (Screenshot 9)    */}
      {/* ============================================================== */}
      <section className="section-padding bg-transparent border-t border-slate-200/60">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Photo: Modern Expansive Atrium (Screenshot 9) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-100 aspect-[4/3] max-w-md mx-auto group">
                <img
                  src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=85"
                  alt="Modern Glass Atrium with Smart Building Infrastructure"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-brand-navy tracking-tight leading-tight">
                Facilities Management + Technology
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Our colleagues in the NEXAAGEN Advance (Technology) team harnesses emerging technologies like AI, AR, Robotics, Drones, and Smart Buildings to benefit our customers. By staying ahead of the curve, we can provide personalised, efficient, and immersive experiences, streamline operations, and create sustainable, energy-efficient environments.
              </p>

              {/* 3 Checkpoints */}
              <div className="space-y-4 pt-2 border-t border-slate-100">
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-[#E53935] text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                    Our facilities management service includes advanced building intelligence to analyse vast data sets, providing insights for strategic decision-making.
                  </span>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-[#E53935] text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                    Artificial intelligence automates routine tasks in facilities management. From predictive maintenance to efficient resource allocation.
                  </span>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-[#E53935] text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                    Enhanced efficiency and sustainability of facilities including the use of intelligent control systems for lighting, heating and air conditioning.
                  </span>
                </div>
              </div>

              {/* Red-Orange Gradient CTA */}
              <div className="pt-3">
                <Link
                  to="/technology"
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-bold text-white bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:from-[#F4511E] hover:to-[#B71C1C] shadow-lg hover:shadow-orange-500/25 transition-all duration-300"
                >
                  Contact Our Technology Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 8: ACCREDITATIONS & CERTIFICATIONS (Screenshot 10)      */}
      {/* ============================================================== */}
      <section className="py-6 sm:py-8 bg-white border-t border-slate-100">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h3 className="text-xl sm:text-2xl font-heading font-bold text-brand-navy tracking-tight">
              Accreditations & Certifications
            </h3>
            <p className="mt-2 text-slate-600 text-xs sm:text-sm">
              Industry-specific accreditations and certification enabling our teams to deliver consistency, compliance and best practice.
            </p>
          </div>

          {/* 6 Accreditations Row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-items-center">
            {/* 1: ISO Integrated */}
            <div className="p-4 rounded-2xl border border-slate-100 hover:border-slate-300 hover:shadow-sm transition-all flex flex-col items-center justify-center w-full max-w-[170px] h-24 bg-white">
              <div className="flex flex-col items-center space-y-0.5 text-center">
                <span className="text-[11px] font-black tracking-tighter text-emerald-600">✓ ISO 9001</span>
                <span className="text-[11px] font-black tracking-tighter text-blue-600">✓ ISO 14001</span>
                <span className="text-[11px] font-black tracking-tighter text-amber-600">✓ ISO 45001</span>
              </div>
            </div>

            {/* 2: NEBOSH */}
            <div className="p-4 rounded-2xl border border-slate-100 hover:border-slate-300 hover:shadow-sm transition-all flex flex-col items-center justify-center w-full max-w-[170px] h-24 bg-white">
              <div className="w-8 h-8 rounded-full bg-blue-900 text-white flex items-center justify-center text-[10px] font-black mb-1">
                N
              </div>
              <span className="text-xs font-bold text-slate-800 tracking-wider">nebosh</span>
            </div>

            {/* 3: IOSH */}
            <div className="p-4 rounded-2xl border border-slate-100 hover:border-slate-300 hover:shadow-sm transition-all flex flex-col items-center justify-center w-full max-w-[170px] h-24 bg-white">
              <div className="w-10 h-10 rounded-full border-2 border-sky-500 text-sky-600 flex items-center justify-center text-xs font-black">
                iosh
              </div>
            </div>

            {/* 4: ISO Seal */}
            <div className="p-4 rounded-2xl border border-slate-100 hover:border-slate-300 hover:shadow-sm transition-all flex flex-col items-center justify-center w-full max-w-[170px] h-24 bg-white">
              <div className="w-12 h-8 rounded-md bg-[#D8232A] text-white flex items-center justify-center text-xs font-black tracking-wider shadow-sm">
                ISO
              </div>
              <span className="text-[10px] text-slate-500 font-semibold mt-1">Asset Certified</span>
            </div>

            {/* 5: Energy Efficiency Green */}
            <div className="p-4 rounded-2xl border border-slate-100 hover:border-slate-300 hover:shadow-sm transition-all flex flex-col items-center justify-center w-full max-w-[170px] h-24 bg-white">
              <div className="w-10 h-10 rounded-full border-2 border-emerald-600 text-emerald-700 flex items-center justify-center text-[10px] font-bold">
                BEE
              </div>
              <span className="text-[10px] text-slate-500 font-semibold mt-1">Energy Star</span>
            </div>

            {/* 6: BICSc Hygiene */}
            <div className="p-4 rounded-2xl border border-slate-100 hover:border-slate-300 hover:shadow-sm transition-all flex flex-col items-center justify-center w-full max-w-[170px] h-24 bg-white">
              <div className="w-8 h-8 rounded-lg bg-orange-50 border border-brand-orange text-brand-orange flex items-center justify-center font-bold text-xs">
                BICSc
              </div>
              <span className="text-[10px] text-slate-500 font-semibold mt-1">Cleaning Standard</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 9: FREQUENTLY ASKED QUESTIONS (Screenshot 11)           */}
      {/* ============================================================== */}
      <section className="section-padding bg-transparent border-t border-slate-200/60">
        <div className="container-custom">
          <h3 className="text-3xl sm:text-4xl font-heading font-extrabold text-brand-navy mb-8">
            Frequently asked questions for FM
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            {faqItems.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-sm hover:border-slate-300 transition-all self-start"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-start justify-between text-left space-x-3 group"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm font-semibold text-slate-800 group-hover:text-brand-orange transition-colors">
                      {faq.q}
                    </span>
                    <span className="w-6 h-6 rounded-full border border-slate-300 flex items-center justify-center text-slate-400 group-hover:text-brand-orange group-hover:border-brand-orange flex-shrink-0 mt-0.5">
                      {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pt-3 mt-3 border-t border-slate-100 animate-in fade-in duration-200">
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 10: SINGLE-LINE SOLUTIONS (Screenshots 12, 13, 14)      */}
      {/* ============================================================== */}
      <section className="section-padding bg-transparent border-t border-slate-200/60 overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Callout Card */}
            <div className="lg:col-span-4 flex flex-col justify-between p-8 rounded-3xl bg-slate-50 border border-slate-100">
              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-brand-navy leading-tight">
                  Facilities Services delivered as a single-line solution
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Seeking a single-service solution? View our core services here.
                </p>
              </div>

              <div className="pt-8 space-y-5">
                <a
                  href="#contact-form"
                  className="inline-flex items-center justify-center px-7 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:from-[#F4511E] hover:to-[#B71C1C] shadow-md transition-all"
                >
                  Contact Our Team
                </a>

                {/* Carousel Navigation Buttons */}
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() =>
                      setSingleLineIndex((prev) =>
                        prev === 0 ? singleLineServices.length - 2 : prev - 1
                      )
                    }
                    className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-slate-100 flex items-center justify-center text-slate-700 transition-colors shadow-sm"
                    aria-label="Previous single service"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() =>
                      setSingleLineIndex((prev) =>
                        prev >= singleLineServices.length - 2 ? 0 : prev + 1
                      )
                    }
                    className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-slate-100 flex items-center justify-center text-slate-700 transition-colors shadow-sm"
                    aria-label="Next single service"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Cards Slider */}
            <div className="lg:col-span-8 overflow-hidden">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {singleLineServices.slice(singleLineIndex, singleLineIndex + 2).map((srv) => (
                  <Link
                    key={srv.id}
                    to={srv.link}
                    className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={srv.image}
                        alt={srv.title}
                        className="w-full h-full object-cover card-img-zoom"
                      />
                    </div>
                    <div className="p-6 flex flex-col justify-between flex-1">
                      <div>
                        <div className="flex items-center justify-between">
                          <h4 className="text-xl font-bold font-heading text-brand-navy group-hover:text-brand-orange transition-colors">
                            {srv.title}
                          </h4>
                          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#FF5722] to-[#D8232A] text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                            <ArrowUpRight className="w-4 h-4" />
                          </div>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
                          {srv.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 11: CONTACT FORM                                       */}
      {/* ============================================================== */}
      <ContactForm
        title="Contact Your Facilities Management Team"
        subtitle="Connect with our practice directors to discuss multi-site consolidation, integrated SLA design, or upcoming corporate tenders."
      />
    </div>
  );
}

