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
  UserCheck,
  Award,
  Sparkles,
  PhoneCall,
  Bell,
  HeartHandshake
} from 'lucide-react';
import ContactForm from '../sections/ContactForm';

export default function FrontOfHouseContent({ service }) {
  // State for FAQ Accordion (Screenshot 9)
  const [openFaq, setOpenFaq] = useState(null);

  // State for complementary services carousel (Screenshots 10 & 11)
  const [carouselIndex, setCarouselIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Section 2: Numbers/Stats (Screenshot 2)
  const stats = [
    {
      value: '124yrs',
      label: 'Experience in front of house guest services',
      icon: ShieldCheck
    },
    {
      value: '10m+',
      label: 'Guests greeted and guided every year',
      icon: Users
    },
    {
      value: '85%',
      label: 'Front of house colleague retention rate',
      icon: UserCheck
    },
    {
      value: '2,500+',
      label: 'Hospitality trained professionals on board',
      icon: Award
    }
  ];

  // Section 4: Front of House Services Capabilities (Screenshots 4 & 5)
  const fohCapabilities = [
    'Reception management',
    'Call handling and switchboard operations',
    'Security, visitor screening and registration',
    'Lost and found management',
    'Mailroom and parcel screening and management',
    'Transport coordination and executive support',
    'Emergency services coordination'
  ];

  // Section 5: Front of House + ESG Points (Screenshot 6)
  const esgPoints = [
    'We employ a diverse team, promoting equality and inclusion across all levels of our front-of-house services.',
    'Our front-of-house services incorporate sustainable methods, reducing waste and energy consumption to align with environmental goals.',
    'Our teams actively engage with local communities, enhancing social value and fostering positive relationships.'
  ];

  // Section 6: Front of House + Technology Points (Screenshot 7)
  const techPoints = [
    'Utilising Advanced Business Intelligence (ABi), we gather and analyse data for optimised service delivery and improved visitor experiences.',
    'Implementing biometric technology for secure access control and efficient visitor management.',
    'Leveraging state-of-the-art digital communication platforms to enhance visitor interactions and streamline operations.'
  ];

  // Section 7: Accreditations & Certifications (Screenshot 8)
  const accreditations = [
    {
      id: 'rospa',
      name: 'RoSPA Gold Award',
      badge: (
        <div className="flex flex-col items-center justify-center text-center">
          <div className="w-16 h-16 flex flex-col items-center justify-center text-[#1E3A8A]">
            <div className="text-[10px] font-bold text-slate-400">2022</div>
            <span className="text-[14px] font-black tracking-tight leading-none text-[#1E3A8A]">RoSPA</span>
            <span className="text-[8px] font-semibold tracking-wider text-amber-500 uppercase mt-0.5">Gold Award</span>
          </div>
        </div>
      )
    },
    {
      id: 'race-at-work',
      name: 'Race at Work Charter',
      badge: (
        <div className="flex flex-col items-center justify-center text-center">
          <div className="w-24 h-14 flex flex-col items-center justify-center">
            <div className="flex items-center space-x-1 mb-0.5">
              <span className="w-2.5 h-2.5 bg-[#D8232A] rounded-sm" />
              <span className="w-2.5 h-2.5 bg-[#1E3A8A] rounded-sm" />
            </div>
            <span className="text-[10px] font-black uppercase tracking-tight text-[#1E3A8A] leading-tight">Race at Work</span>
            <span className="text-[9px] font-bold uppercase tracking-widest text-[#D8232A] leading-none">Charter</span>
          </div>
        </div>
      )
    },
    {
      id: 'iwfm',
      name: 'Institute of Workplace and Facilities Management',
      badge: (
        <div className="flex flex-col items-center justify-center text-center">
          <div className="w-20 h-14 flex flex-col items-center justify-center text-[#00A3A6]">
            <span className="text-2xl font-black lowercase tracking-tight leading-none">iwfm</span>
            <span className="text-[7.5px] font-medium tracking-tight text-slate-600 mt-1 max-w-[100px] text-center leading-tight">Institute of Workplace and Facilities Management</span>
          </div>
        </div>
      )
    },
    {
      id: 'slave-free',
      name: 'Slave-Free Alliance',
      badge: (
        <div className="flex items-center justify-center text-left space-x-2">
          <span className="text-3xl font-black text-slate-900 leading-none">S</span>
          <div className="flex flex-col">
            <span className="text-[8.5px] font-black uppercase tracking-wider text-slate-800 leading-tight">Slave-Free</span>
            <span className="text-[8px] font-bold uppercase tracking-widest text-slate-600 leading-tight">Alliance</span>
            <span className="text-[6.5px] text-slate-400 leading-none mt-0.5">Working Towards a Slave-Free Supply Chain</span>
          </div>
        </div>
      )
    },
    {
      id: 'revo',
      name: 'Revo Retail Property Community',
      badge: (
        <div className="flex flex-col items-center justify-center text-center">
          <div className="w-20 h-14 flex flex-col items-center justify-center text-[#9ACD32]">
            <span className="text-2xl font-black tracking-tight leading-none text-[#8CB42A]">Revo</span>
            <span className="text-[7.5px] font-semibold tracking-tight text-slate-500 uppercase mt-0.5">Retail. Property. Community.</span>
          </div>
        </div>
      )
    },
    {
      id: 'besa',
      name: 'BESA Building Engineering Services Association',
      badge: (
        <div className="flex flex-col items-center justify-center text-center">
          <div className="w-18 h-14 border border-[#4B1E5F] rounded px-2 py-1 flex flex-col items-center justify-center text-[#4B1E5F]">
            <span className="text-base font-black tracking-widest leading-none">BESA</span>
            <span className="text-[6px] font-bold uppercase tracking-tighter text-slate-600 mt-0.5 text-center">Building Engineering Services Association</span>
          </div>
        </div>
      )
    }
  ];

  // Section 9 & 10: Complementary Core Services Carousel (Screenshots 10 & 11)
  const complementaryServices = [
    {
      id: 'hard-services',
      title: 'Hard Services',
      image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80',
      description: 'Planned and preventative maintenance (PPM), minor works and capital projects.',
      link: '/services/hard-services'
    },
    {
      id: 'facilities-management',
      title: 'Facilities Management',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
      description: 'Facilities Management of self-delivered services for the private and public sector.',
      link: '/services/facilities-management'
    },
    {
      id: 'cleaning',
      title: 'Cleaning',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80',
      description: 'Cleaning services that deliver optimum health and hygiene for the best experiences and outcomes.',
      link: '/services/cleaning'
    },
    {
      id: 'pest-control',
      title: 'Pest Control',
      image: 'https://images.unsplash.com/photo-1584744982491-665216d95f8b?auto=format&fit=crop&w=800&q=80',
      description: 'Keep unwanted visitors at bay, protecting your facilities and your reputation.',
      link: '/services/pest-control'
    },
    {
      id: 'landscaping',
      title: 'Landscaping',
      image: 'https://images.unsplash.com/photo-1558904541-efa8c4a08931?auto=format&fit=crop&w=800&q=80',
      description: 'Commercial grounds maintenance, interior plants and biodiversity enhancements.',
      link: '/services/landscaping'
    },
    {
      id: 'carbon-energy',
      title: 'Carbon & Energy',
      image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80',
      description: 'Working with you towards Net Zero and your broader ESG goals and commitments.',
      link: '/services/carbon-energy-management'
    }
  ];

  const nextCarousel = () => {
    setCarouselIndex((prev) => (prev + 1) % complementaryServices.length);
  };

  const prevCarousel = () => {
    setCarouselIndex((prev) => (prev - 1 + complementaryServices.length) % complementaryServices.length);
  };

  // Section 8: Frequently Asked Questions (Screenshot 9)
  const faqItems = [
    {
      q: 'What front-of-house and concierge services do you provide?',
      a: 'We provide a complete suite of corporate front-of-house services including executive reception management, bespoke concierge assistance, switchboard and call handling, visitor pass registration and badging, VIP executive hosting, meeting room and event curation, mailroom screening, and transport dispatch coordination.'
    },
    {
      q: 'How do you ensure an exceptional front-of-house experience for guests and visitors?',
      a: 'Our team members undergo rigorous 5-star hospitality academy training focused on emotional intelligence, cultural awareness, proactive service delivery, and immaculate grooming standards. Every touchpoint is choreographed to reflect your corporate stature and warmth.'
    },
    {
      q: 'Can you customise your front-of-house services to align with our business\'s specific needs or brand image?',
      a: 'Absolutely. We align with your corporate brand guidelines, including custom uniforms, bespoke greeting protocols, tailored visitor registration workflows, and dedicated concierge services matching your tenant and visitor demographics.'
    },
    {
      q: 'Do you provide teams trained in security protocols for handling access control and premises security?',
      a: 'Yes. All front-of-house personnel are comprehensively cross-trained in building security procedures, emergency evacuation coordination, automated turnstile access control, suspicious package detection, and discreet VIP escort protocols.'
    },
    {
      q: 'How do you handle high-traffic situations or manage multiple requests efficiently?',
      a: 'We deploy smart digital visitor management kiosks and express QR check-ins paired with dynamic front-desk rostering. Our hosts manage peak arrival surges smoothly while maintaining personalized, attentive service for every individual.'
    },
    {
      q: 'Can you assist with special event planning or additional services for specific occasions?',
      a: 'Yes. Our concierge and front-of-house teams support corporate town halls, investor conferences, board meetings, and product launches with dedicated hospitality hosts, coat check services, and VIP guest management.'
    },
    {
      q: 'Can you provide case studies of successful front-of-house services for similar businesses?',
      a: 'Certainly. We manage front-of-house and corporate guest services across landmark financial towers, multinational headquarters, and high-security tech campuses. We are pleased to provide case studies, client testimonials, and satisfaction metrics upon request.'
    }
  ];

  return (
    <div className="w-full bg-white text-slate-900 overflow-hidden font-sans">
      
      {/* SECTION 1: HERO HEADER (Screenshot 1) */}
      <section className="relative pt-6 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden min-h-[500px] sm:min-h-[560px] lg:min-h-[600px] flex items-center shadow-2xl bg-slate-950 border border-slate-800">
          {/* Background Photography: Luxury corporate architectural atrium with parametric sculpted ceiling */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=1920&q=80" 
              alt="Front of House & Concierge Services - NEXAAGEN" 
              className="w-full h-full object-cover object-center"
            />
            {/* Gradient overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent lg:w-3/4" />
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
                Front of house and concierge services
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal mb-8">
                Our front-of-house teams ensure seamless and efficient operations to enhance every touchpoint throughout your customer's journey.
              </p>

              {/* Action Button */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#contact-form"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3.5 rounded-xl font-heading font-bold text-sm text-white bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 group"
                >
                  <span>Contact our Front of House Team</span>
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
            Front of house in numbers
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

      {/* SECTION 3: FIRST AND LASTING IMPRESSIONS (Screenshot 3) */}
      <section className="py-4 sm:py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-100">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Reception / Concierge desk greeting guest */}
          <div className="lg:col-span-6">
            <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-[5/4] border border-slate-100">
              <img 
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80" 
                alt="Professional Concierge and Reception Hospitality Staff" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-6 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 tracking-tight leading-tight">
              First and lasting impressions that count for your brand
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Our Facilities Services delivers front-of-house, concierge, and hospitality services and we understand the importance of first impressions and a personalised service that reflects your company's brand and values.
            </p>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              From greeting visitors to managing enquiries, our front-of-house staff are the friendly faces representing your organisation, committed to maintaining the highest standards of customer care and professionalism to create positive, lasting impressions.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4: FRONT OF HOUSE SERVICES (Screenshots 4 & 5) */}
      <section className="py-4 sm:py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-100">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Content */}
          <div className="lg:col-span-6 space-y-5">
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 tracking-tight leading-tight">
              Front of house services
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Front of house, concierge and hospitality services that we tailor to suit the specific requirements of your business, brand, environment, guests and visitors.
            </p>

            {/* Checklist */}
            <div className="space-y-3 pt-1">
              {fohCapabilities.map((item, idx) => (
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
                <span>Contact our Front of House Team</span>
              </a>
            </div>
          </div>

          {/* Right Column: Aerial top-down view of modern office meeting table */}
          <div className="lg:col-span-6">
            <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-[5/4] border border-slate-100">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80" 
                alt="Front of House Collaborative Workplace and Visitors" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: FRONT OF HOUSE + ESG (Screenshot 6) */}
      <section className="py-4 sm:py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-100">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Content */}
          <div className="lg:col-span-6 space-y-5 order-2 lg:order-1">
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 tracking-tight leading-tight">
              Front of House + ESG
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              We are constantly taking steps to reduce our impact on the environment and can help you achieve your sustainability goals, too. We use microbial and bio (green) products as much as possible, never use phosphates or aerosols, and select cleaning products that are effective, well-priced and most importantly, have evidence-based eco-credentials.
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
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full font-heading font-bold text-sm text-white bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300"
              >
                <span>Find out more</span>
              </a>
            </div>
          </div>

          {/* Right Column: Lush Green Forest Canopy */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-[5/4] border border-slate-100">
              <img 
                src="https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80" 
                alt="Front of House Sustainable Environmental Governance" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: FRONT OF HOUSE + TECHNOLOGY (Screenshot 7) */}
      <section className="py-4 sm:py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-100">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Glass facade lobby with pedestrians */}
          <div className="lg:col-span-6">
            <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-[5/4] border border-slate-100">
              <img 
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80" 
                alt="Front of House Advanced Digital Experience & Biometric Check-in" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-6 space-y-5">
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 tracking-tight leading-tight">
              Front of House + Technology
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Our colleagues in the Advance (Technology) team harnesses emerging technologies like AI, AR, Robotics, Drones, and Smart Buildings to benefit our customers. By staying ahead of the curve, we can provide personalised, efficient, and immersive experiences, streamline operations, and create sustainable, energy-efficient environments.
            </p>

            {/* Checklist */}
            <div className="space-y-3 pt-1">
              {techPoints.map((item, idx) => (
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
                <span>Find out more</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: ACCREDITATIONS & CERTIFICATIONS (Screenshot 8) */}
      <section className="py-4 sm:py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-100">
        <div className="text-center max-w-3xl mx-auto mb-5 sm:mb-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-slate-900 tracking-tight mb-2">
            Accreditations & Certifications
          </h2>
          <p className="text-base text-slate-600">
            Industry-specific accreditations and certification enabling our teams to deliver consistency, compliance and best practice.
          </p>
        </div>

        {/* 6 Accreditations Row */}
        <div className="bg-slate-50/70 border border-slate-200/80 rounded-3xl p-5 sm:p-8 shadow-sm">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-items-center">
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

      {/* SECTION 8: FREQUENTLY ASKED QUESTIONS (Screenshot 9) */}
      <section className="py-4 sm:py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-100">
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-slate-900 tracking-tight mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-slate-600">
            Answers to common questions regarding reception staffing, security clearance, high-traffic surge control, and bespoke client workflows.
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

      {/* SECTION 9 & 10: COMPLEMENTARY CORE SERVICES CAROUSEL (Screenshots 10 & 11) */}
      <section className="py-4 sm:py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-100">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-8 gap-4">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-slate-900 tracking-tight mb-2">
              Facilities services designed for your organisation
            </h2>
            <p className="text-base text-slate-600">
              Need more than Front of House and concierge? Discover our complementary core services here.
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

      {/* SECTION 11: CONNECT WITH YOUR TEAM BANNER (Screenshot 12) */}
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
              Connect with your Front of House team
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

      {/* SECTION 12: SIGNATURE CONTACT FORM */}
      <section id="contact-form" className="py-3 sm:py-5 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-slate-50/70 rounded-[32px] p-5 sm:p-8 lg:p-10 border border-slate-200/80">
          <ContactForm 
            title="Connect With Our Front of House & Concierge Specialists"
            subtitle="Elevate your workplace experience with 5-star corporate concierge, hospitality hosting, and smart guest check-in."
            defaultService="front-of-house-concierge" 
          />
        </div>
      </section>

    </div>
  );
}

