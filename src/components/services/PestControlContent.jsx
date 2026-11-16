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
  Users,
  Cpu,
  ShieldAlert,
  Bug,
  Leaf,
  CalendarCheck,
  FileCheck,
  Zap,
  PhoneCall
} from 'lucide-react';
import ContactForm from '../sections/ContactForm';

export default function PestControlContent({ service }) {
  // State for FAQ Accordion
  // In screenshot 9, question 4 ("Can you provide references or examples...") is expanded by default!
  const [openFaq, setOpenFaq] = useState(3);

  // State for complementary services carousel
  const [carouselIndex, setCarouselIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Section 2: Numbers/Stats (Screenshot 2)
  const stats = [
    {
      value: '124yrs',
      label: 'Experience in technical services and innovation',
      icon: ShieldCheck
    },
    {
      value: '1,200+',
      label: 'Customers rely on our pest control services',
      icon: Users
    },
    {
      value: '60%',
      label: 'Detection rate increase through technology',
      icon: Cpu
    },
    {
      value: '95%',
      label: 'Average reduction in pest-related issues',
      icon: ShieldAlert
    }
  ];

  // Section 3: Pest Control Services Capabilities (Screenshot 3)
  const coreCapabilities = [
    'Regular inspections',
    'Customised treatment plans',
    'Rodent and insect control',
    'Emergency response',
    'Integrated pest management (IPM)'
  ];

  // Section 4: Pest Control + ESG Points (Screenshot 4)
  const esgPoints = [
    'Implementing eco-friendly and sustainable pest control methods to minimise ecological impact and support biodiversity conservation.',
    'Enhancing the well-being and safety of colleagues and customers by maintaining pest-free, healthy environments in all facilities.',
    'Adhering strictly to regulatory standards and ethical practices in pest management, ensuring transparency and accountability in all operations.'
  ];

  // Section 5: Pest Control + Technology Points (Screenshot 5)
  const techPoints = [
    'Advanced real-time pest activity monitoring technology ensures swift and precise infestation responses.',
    'Leveraging data analytics to predict pest trends, optimise control strategies, and provide insightful reports for continuous improvement.',
    'Smart traps and environmentally friendly deterrents, integrating technology for efficient and effective pest management.'
  ];

  // Section 6: Accreditations & Certifications (Screenshot 6)
  const accreditations = [
    {
      id: 'safecontractor',
      name: 'SafeContractor Approved',
      badge: (
        <div className="flex flex-col items-center justify-center text-center">
          <div className="w-16 h-16 rounded-full border-2 border-[#1E3A8A] flex flex-col items-center justify-center p-1 text-[#1E3A8A]">
            <span className="text-[9px] font-black tracking-tight leading-none uppercase">Safe</span>
            <span className="text-[8px] font-bold tracking-tighter leading-none uppercase">Contractor</span>
            <span className="text-[7px] text-[#FF5722] font-semibold mt-0.5">APPROVED</span>
          </div>
        </div>
      )
    },
    {
      id: 'bpca',
      name: 'BPCA British Pest Control Association',
      badge: (
        <div className="flex flex-col items-center justify-center text-center">
          <div className="w-16 h-16 rounded-full border-2 border-[#006837] flex flex-col items-center justify-center p-1 text-[#006837]">
            <span className="text-[13px] font-black tracking-tight leading-none">BPCA</span>
            <span className="text-[6.5px] font-semibold uppercase tracking-tight text-slate-600 mt-0.5 text-center px-1">British Pest Control Assoc.</span>
          </div>
        </div>
      )
    },
    {
      id: 'iso',
      name: 'ISO Certification',
      badge: (
        <div className="flex flex-col items-center justify-center text-center">
          <div className="w-18 h-14 flex flex-col items-center justify-center text-[#0B4F8C]">
            <span className="text-2xl font-black tracking-wider leading-none">ISO</span>
            <span className="text-[8px] font-semibold tracking-wider text-slate-500 uppercase mt-0.5">9001 • 14001 • 45001</span>
          </div>
        </div>
      )
    },
    {
      id: 'iwfm',
      name: 'Institute of Workplace and Facilities Management',
      badge: (
        <div className="flex flex-col items-center justify-center text-center">
          <div className="w-18 h-14 flex flex-col items-center justify-center text-[#00A3A6]">
            <span className="text-2xl font-black lowercase tracking-tight leading-none">iwfm</span>
            <span className="text-[7.5px] font-medium tracking-tight text-slate-600 mt-1 max-w-[100px] text-center leading-tight">Institute of Workplace and Facilities Management</span>
          </div>
        </div>
      )
    },
    {
      id: 'hse',
      name: 'Health and Safety Executive',
      badge: (
        <div className="flex flex-col items-center justify-center text-center">
          <div className="w-14 h-14 bg-[#8B0000] text-white flex flex-col items-center justify-center rounded p-1 shadow-sm">
            <span className="text-base font-black tracking-widest leading-none">HSE</span>
          </div>
        </div>
      )
    }
  ];

  // Section 7 & 8: Complementary Core Services Carousel (Screenshots 7 & 8)
  const complementaryServices = [
    {
      id: 'cleaning',
      title: 'Cleaning',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80',
      description: 'Cleaning services that deliver optimum health and hygiene for the best experiences and outcomes.',
      link: '/services/cleaning'
    },
    {
      id: 'facilities-management',
      title: 'Facilities Management',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
      description: 'Facilities Management of self-delivered services for the private and public sector.',
      link: '/services/facilities-management'
    },
    {
      id: 'carbon-energy',
      title: 'Carbon & Energy',
      image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=80',
      description: 'Working with you towards Net Zero and your broader ESG goals and commitments.',
      link: '/services/carbon-energy-management'
    },
    {
      id: 'hard-services',
      title: 'Hard Services',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
      description: 'Planned and preventative maintenance (PPM), minor works and capital projects.',
      link: '/services/hard-services'
    },
    {
      id: 'landscaping',
      title: 'Landscaping',
      image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=800&q=80',
      description: 'Commercial grounds maintenance, interior plants and biodiversity enhancements.',
      link: '/services/landscaping'
    }
  ];

  const nextCarousel = () => {
    setCarouselIndex((prev) => (prev + 1) % complementaryServices.length);
  };

  const prevCarousel = () => {
    setCarouselIndex((prev) => (prev - 1 + complementaryServices.length) % complementaryServices.length);
  };

  // Section 9: Frequently Asked Questions (Screenshot 9)
  const faqItems = [
    {
      q: 'What types of pest control services do you offer for commercial properties?',
      a: 'We offer comprehensive commercial pest control solutions including preventative Integrated Pest Management (IPM), crawling insect treatments (cockroaches, ants, bed bugs), rodent monitoring and exclusion, architectural bird deterrents, stored product pest control, and emergency eradication protocols for offices, industrial plants, food manufacturing, and healthcare facilities.'
    },
    {
      q: 'How do you ensure the safety of employees, customers, and the environment during pest control treatments?',
      a: 'We follow strict health and safety protocols and prioritize non-chemical, bio-rational solutions. Our treatments use targeted, low-toxicity formulations, tamper-resistant bait stations, and biological repellents that strictly eliminate hazards to employees, visitors, and non-target wildlife while maintaining maximum effectiveness.'
    },
    {
      q: 'Can you conduct a pest risk assessment and offer tailored pest management plans for our specific industry?',
      a: 'Yes. Our certified biologists and pest control technicians conduct thorough site surveys and pest risk assessments. We develop tailored Integrated Pest Management (IPM) plans engineered specifically around your industry compliance requirements, whether that is HACCP, BRC, FDA, or healthcare hygiene protocols.'
    },
    {
      q: 'Do you offer ongoing monitoring and maintenance after pest treatments to prevent future infestations?',
      a: 'Yes. Proactive long-term protection is at the heart of our service model. We establish regular scheduled inspection cycles, real-time IoT activity tracking sensors, digital trend analysis, and structural proofing recommendations to ensure pests cannot re-establish.'
    },
    {
      q: 'What steps do you take to minimise disruption to our business operations during pest control treatments?',
      a: 'We schedule inspections and preventative treatments during out-of-hours, low-occupancy, or night shifts to avoid disrupting daily operations. Our technicians use discreet, odorless, and non-invasive methods such as digital sensor traps and targeted gel baits that do not require facility evacuations.'
    },
    {
      q: 'Are your pest control methods compliant with industry regulations and environmentally conscious practices?',
      a: 'Absolutely. All our pest control protocols comply strictly with national and international environmental legislation, food safety standards (HACCP, BRCGS, AIB), and BPCA codes of practice, fully supporting your company\'s ESG and sustainability commitments.'
    },
    {
      q: 'Can you provide references or examples of successful pest control interventions in similar commercial settings?',
      a: 'Certainly. We have a proven track record of successful pest control interventions across various commercial settings. We can provide references or case studies demonstrating our expertise and effectiveness in managing pest issues. Please get in touch – we\'d love to share them with you.'
    }
  ];

  return (
    <div className="w-full bg-white text-slate-900 overflow-hidden font-sans">
      
      {/* SECTION 1: HERO HEADER (Screenshot 1) */}
      <section className="relative pt-6 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden min-h-[500px] sm:min-h-[560px] lg:min-h-[600px] flex items-center shadow-2xl bg-slate-950 border border-slate-800">
          {/* Background Photography: Technician in protective suit with sprayer */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1584744982491-665216d95f8b?auto=format&fit=crop&w=1920&q=80" 
              alt="Pest Control Services - NEXAAGEN" 
              className="w-full h-full object-cover object-center"
            />
            {/* Gradient overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-transparent lg:w-3/4" />
          </div>

          {/* Floating White Card */}
          <div className="relative z-10 p-6 sm:p-10 lg:p-14 max-w-2xl ml-4 sm:ml-8 lg:ml-12 my-8">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-2xl border border-white/40">
              {/* Hiring Badge */}
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#FF5722]/10 to-[#D8232A]/10 border border-[#FF5722]/20 rounded-full px-3 py-1 mb-5">
                <span className="bg-gradient-to-r from-[#FF5722] to-[#D8232A] text-white text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">
                  We're hiring
                </span>
                <Link to="/about" className="text-xs font-semibold text-slate-800 hover:text-brand-orange transition-colors flex items-center">
                  <span>NEXAAGEN Careers</span>
                  <ArrowRight className="w-3 h-3 ml-1" />
                </Link>
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-5">
                Pest Control
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal mb-8">
                Pest control services offer proactive solutions, ensuring your premises are safeguarded against infestations, maintaining a hygienic environment.
              </p>

              {/* Action Button */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#contact-form"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3.5 rounded-xl font-heading font-bold text-sm text-white bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 group"
                >
                  <span>Contact our Pest Control Team</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: NUMBERS / STATS (Screenshot 2) */}
      <section className="py-4 sm:py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-slate-900 tracking-tight mb-3">
            Pest Control division in numbers
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            We're on a mission to make people and places the best they can be and we understand the importance of maintaining the best places for people to work, relax and play.
          </p>
        </div>

        {/* 4 Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div 
                key={idx}
                className="bg-slate-50/70 hover:bg-slate-50 border border-slate-200/70 rounded-3xl p-6 transition-all duration-300 hover:shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-full bg-orange-100/80 flex items-center justify-center text-[#FF5722] mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="text-4xl sm:text-5xl font-heading font-black text-[#D8232A] tracking-tight mb-2">
                    {stat.value}
                  </div>
                  <p className="text-sm text-slate-600 font-medium leading-relaxed">
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 3: PEST CONTROL SERVICES CAPABILITIES (Screenshot 3) */}
      <section className="py-4 sm:py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-100">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Building Photography with trees */}
          <div className="lg:col-span-6">
            <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-[5/4] border border-slate-100">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80" 
                alt="Pest Control Services for Corporate Buildings" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-6 space-y-5">
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 tracking-tight leading-tight">
              Pest control services
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Our global facilities services encompass comprehensive pest control solutions meticulously designed to safeguard your premises from pest-related disruptions. Our team designs and delivers bespoke strategies, ensuring a healthy and safe environment for your business operations.
            </p>

            {/* Checklist */}
            <div className="space-y-3 pt-1">
              {coreCapabilities.map((item, idx) => (
                <div key={idx} className="flex items-center space-x-3">
                  <div className="w-5 h-5 rounded-full bg-[#FF5722] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-sm sm:text-base font-semibold text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-3">
              <a
                href="#contact-form"
                className="inline-flex items-center justify-center px-7 py-3 rounded-full font-heading font-bold text-sm text-white bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300"
              >
                <span>Contact our Pest Control Team</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: PEST CONTROL + ESG (Screenshot 4) */}
      <section className="py-4 sm:py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-100">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Content */}
          <div className="lg:col-span-6 space-y-5 order-2 lg:order-1">
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 tracking-tight leading-tight">
              Pest Control + ESG
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              We are constantly taking steps to reduce our impact on the environment – and can help you achieve your sustainability goals, too. We use microbial and bio (green) products as much as possible, never use phosphates or aerosols, and select cleaning products that are effective, well-priced and most importantly, have evidence-based eco-credentials.
            </p>

            {/* Checklist */}
            <div className="space-y-3 pt-1">
              {esgPoints.map((item, idx) => (
                <div key={idx} className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-[#FF5722] text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-sm sm:text-base text-slate-700 leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-3">
              <a
                href="#contact-form"
                className="inline-flex items-center justify-center px-7 py-3 rounded-full font-heading font-bold text-sm text-white bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300"
              >
                <span>Contact our team</span>
              </a>
            </div>
          </div>

          {/* Right Column: Lush Sunlit Green Leaves */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-[5/4] border border-slate-100">
              <img 
                src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1200&q=80" 
                alt="Sustainable Pest Control with ESG Environmental Stewardship" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: PEST CONTROL + TECHNOLOGY (Screenshot 5) */}
      <section className="py-4 sm:py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-100">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Modern Sleek Office */}
          <div className="lg:col-span-6">
            <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-[5/4] border border-slate-100">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80" 
                alt="Digital Smart Pest Control Technology" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-6 space-y-5">
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 tracking-tight leading-tight">
              Pest Control + Technology
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Our colleagues in the Advance (Technology) team harnesses emerging technologies like AI, AR, Robotics, Drones, and Smart Buildings to benefit our customers. By staying ahead of the curve, we can provide personalised, efficient, and immersive experiences, streamline operations, and create sustainable, energy-efficient environments.
            </p>

            {/* Checklist */}
            <div className="space-y-3 pt-1">
              {techPoints.map((item, idx) => (
                <div key={idx} className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-[#FF5722] text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <span className="text-sm sm:text-base text-slate-700 leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-3">
              <a
                href="#contact-form"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full font-heading font-bold text-sm text-white bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300"
              >
                <span>Contact our team</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: ACCREDITATIONS & CERTIFICATIONS (Screenshot 6) */}
      <section className="py-4 sm:py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-100">
        <div className="text-center max-w-3xl mx-auto mb-5 sm:mb-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-slate-900 tracking-tight mb-2">
            Accreditations & Certifications
          </h2>
          <p className="text-base text-slate-600">
            Industry-specific accreditations and certification enabling our teams to deliver consistency, compliance and best practice.
          </p>
        </div>

        {/* 5 Accreditations Row */}
        <div className="bg-slate-50/70 border border-slate-200/80 rounded-3xl p-5 sm:p-8 shadow-sm">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 items-center justify-items-center">
            {accreditations.map((acc) => (
              <div 
                key={acc.id}
                className="flex items-center justify-center p-3 hover:scale-105 transition-transform duration-300"
                title={acc.name}
              >
                {acc.badge}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 & 8: COMPLEMENTARY SERVICES CAROUSEL (Screenshots 7 & 8) */}
      <section className="py-4 sm:py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-100">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-8 gap-4">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-slate-900 tracking-tight mb-2">
              Facilities services designed for your organisation
            </h2>
            <p className="text-base text-slate-600">
              Need more than Pest Control Services? Discover our other core service lines and integrated solutions.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center space-x-3">
            <button
              onClick={prevCarousel}
              aria-label="Previous service"
              className="w-10 h-10 rounded-full border border-slate-200 hover:border-brand-orange text-slate-700 hover:text-brand-orange bg-white flex items-center justify-center shadow-sm transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextCarousel}
              aria-label="Next service"
              className="w-10 h-10 rounded-full border border-slate-200 hover:border-brand-orange text-slate-700 hover:text-brand-orange bg-white flex items-center justify-center shadow-sm transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[0, 1, 2, 3].map((offset) => {
            const item = complementaryServices[(carouselIndex + offset) % complementaryServices.length];
            return (
              <Link
                key={`${item.id}-${offset}`}
                to={item.link}
                className="group bg-slate-50/70 hover:bg-white rounded-3xl overflow-hidden border border-slate-200/80 hover:border-slate-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-heading font-bold text-slate-900 group-hover:text-brand-orange transition-colors">
                        {item.title}
                      </h3>
                      <div className="w-8 h-8 rounded-full bg-[#D8232A] text-white flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* SECTION 9: FREQUENTLY ASKED QUESTIONS (Screenshot 9) */}
      <section className="py-4 sm:py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-100">
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-slate-900 tracking-tight mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-slate-600">
            Everything you need to know about our pest control protocols, safety precautions, compliance, and bespoke scheduling.
          </p>
        </div>

        {/* 2-Column Accordion Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {faqItems.map((item, index) => {
            const isOpen = openFaq === index;
            return (
              <div 
                key={index}
                className="bg-slate-50/70 hover:bg-slate-50 rounded-2xl border border-slate-200/70 p-5 sm:p-6 transition-all duration-200 self-start"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between text-left group"
                >
                  <span className="text-sm sm:text-base font-heading font-bold text-slate-900 group-hover:text-brand-orange transition-colors pr-4">
                    {item.q}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center flex-shrink-0 text-[#FF5722] group-hover:border-[#FF5722] transition-colors">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>
                {isOpen && (
                  <div className="mt-4 pt-4 border-t border-slate-200 text-sm text-slate-600 leading-relaxed animate-in fade-in duration-200">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 10: CONTACT YOUR PEST CONTROL TEAM (Screenshot 10) */}
      <section className="py-3 sm:py-5 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="relative rounded-[28px] sm:rounded-[36px] bg-[#0A192F] text-white p-6 sm:p-10 lg:p-12 overflow-hidden text-center shadow-2xl">
          {/* Subtle geometric dot grid pattern */}
          <div 
            className="absolute inset-0 opacity-15 pointer-events-none" 
            style={{
              backgroundImage: 'radial-gradient(#ffffff 1.2px, transparent 1.2px)',
              backgroundSize: '22px 22px'
            }}
          />

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold tracking-tight mb-3">
              Contact your Pest Control team
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6">
              We're ready to deliver the best experiences, productivity, practices, resilience and outcomes and we look forward to connecting with you and your team.
            </p>
            <a
              href="#contact-form"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-heading font-bold text-base text-white bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:shadow-xl hover:shadow-orange-500/30 transition-all duration-300"
            >
              <span>Contact Us</span>
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 11: SIGNATURE CONTACT FORM */}
      <section id="contact-form" className="py-3 sm:py-5 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-slate-50/70 rounded-[32px] p-5 sm:p-8 lg:p-10 border border-slate-200/80">
          <ContactForm 
            title="Connect With Our Pest Control Specialists"
            subtitle="Safeguard your facilities with certified Integrated Pest Management and proactive digital protection."
            defaultService="pest-control" 
          />
        </div>
      </section>

    </div>
  );
}

