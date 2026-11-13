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
  Sparkles,
  ShieldCheck,
  Award,
  Users,
  Globe,
  Clock,
  Recycle,
  Leaf,
  Cpu,
  CheckCircle2,
  Building2
} from 'lucide-react';
import ContactForm from '../sections/ContactForm';

export default function CleaningContent({ service }) {
  // State for FAQ Accordions
  const [openFaq, setOpenFaq] = useState(null);

  // State for complementary services carousel
  const [carouselIndex, setCarouselIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Section 2: Numbers/Stats (Screenshot 2)
  const stats = [
    {
      value: '25+ Yrs',
      label: 'Cleaning history and market leadership',
      icon: Clock
    },
    {
      value: '35,000+',
      label: 'Site cleans completed globally every day',
      icon: Globe
    },
    {
      value: '65,000+',
      label: 'In-house colleagues in our cleaning team',
      icon: Users
    },
    {
      value: '2,700+',
      label: 'Tonnes of refuse collected for recycling',
      icon: Recycle
    }
  ];

  // Section 3: Cleaning Service Capabilities (Screenshot 3)
  const serviceCapabilities = [
    'Infection Prevention and Hygiene',
    'Good Manufacturing Practice (GMP) Cleaning',
    'Hazard Analysis and Critical Control Point (HACCP)',
    'Commercial and Industrial Cleaning',
    'Specialist, Window and High-Level Cleaning',
    'Housekeeping Services',
    'Washroom Services',
    'Periodical Cleaning',
    'Consumables'
  ];

  // Section 7: Customer Success Stories (Screenshot 7)
  const customerStories = [
    {
      id: 'biopharma-iso',
      tag: 'Biopharmaceutical • Healthcare',
      title: 'Best practices and resilience – Adherence to ISO 10,000 Grade B for Biopharma customer',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
      summary: 'Delivering sterile cleanroom validation, microbiological environmental monitoring, and zero contamination incidents across 12 consecutive regulatory audits.'
    },
    {
      id: 'nec-spring-fair',
      tag: 'Venues and events',
      title: 'Creating custom solutions for the NEC Spring Fair – delivering best experience and outcomes',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
      summary: 'Mobilising 180+ event sanitization operatives, handling over 60,000 daily visitors, and diverting 94% of exhibition waste from landfill through smart recycling.'
    },
    {
      id: 'multi-site-logistics',
      tag: 'Business & Industry • Logistics',
      title: 'Raising cleaning standards across our customers multi-site contract',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
      summary: 'Standardising janitorial workflows across 45 logistics hubs with autonomous scrubber robots and digital quality audits, reducing downtime by 28%.'
    }
  ];

  // Section 11: Complementary Core Services Carousel (Screenshots 11 & 12)
  const complementaryServices = [
    {
      id: 'carbon-energy',
      title: 'Carbon & Energy',
      image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80',
      description: 'Working with you towards Net Zero and your broader ESG goals and commitments.',
      link: '/services/carbon-energy-management'
    },
    {
      id: 'pest-control',
      title: 'Pest Control',
      image: 'https://images.unsplash.com/photo-1588854337221-4cf9fa96059c?auto=format&fit=crop&w=800&q=80',
      description: 'Keep unwanted visitors at bay, protecting your facilities and your reputation.',
      link: '/services/pest-control'
    },
    {
      id: 'facilities-management',
      title: 'Facilities Management',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
      description: 'Facilities Management of self-delivered services for the private and public sector.',
      link: '/services/facilities-management'
    },
    {
      id: 'hard-services',
      title: 'Hard Services',
      image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80',
      description: 'Planned and preventative maintenance (PPM), minor works and capital projects.',
      link: '/services/hard-services'
    },
    {
      id: 'landscaping',
      title: 'Landscaping',
      image: 'https://images.unsplash.com/photo-1558904541-efa8c4a08931?auto=format&fit=crop&w=800&q=80',
      description: 'Commercial grounds maintenance, interior plants and biodiversity enhancements.',
      link: '/services/landscaping'
    },
    {
      id: 'front-of-house',
      title: 'Front-of-house & Concierge',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
      description: 'Professionally trained individuals with friendly faces for lasting impressions.',
      link: '/services/front-of-house-concierge'
    }
  ];

  const nextCarousel = () => {
    setCarouselIndex((prev) => (prev + 1) % complementaryServices.length);
  };

  const prevCarousel = () => {
    setCarouselIndex((prev) => (prev - 1 + complementaryServices.length) % complementaryServices.length);
  };

  // Section 12: Frequently Asked Questions (Screenshot 13)
  const faqItems = [
    {
      q: 'What types of cleaning services do you offer?',
      a: 'We offer comprehensive commercial cleaning tailored to every sector, including daily office janitorial services, clinical infection prevention, GMP cleanroom decontamination, food-grade HACCP sanitization, industrial floor scrubbing, high-level and facade window cleaning, periodic deep extraction, and sustainable consumable management.'
    },
    {
      q: 'How do you ensure quality and consistency in your cleaning services?',
      a: 'We maintain consistency through our BICSc-certified training curriculum, standardized color-coded cleaning protocols, and digital quality audits logged via the NEXA-Pulse mobile platform. Periodic ATP bioluminescence swab testing objectively verifies microbiological cleanliness in clinical and high-traffic touchpoints.'
    },
    {
      q: 'What measures do you have in place for security and confidentiality during cleaning services?',
      a: 'All NEXAAGEN cleaning personnel undergo background checks, police verification, and stringent ID clearances. Teams working in high-security corporate, banking, or data centre premises are bound by strict non-disclosure agreements (NDAs) and clean-desk policies.'
    },
    {
      q: 'Can you accommodate special cleaning requirements or specific areas that need extra attention?',
      a: 'Yes. Our agile operational model allows for customized service specifications, whether you require high-frequency sanitization for executive boardrooms, antistatic sub-floor cleanroom decontamination in server halls, or rapid containment of unexpected bio-spills.'
    },
    {
      q: 'Can you provide examples or case studies of your cleaning work in similar businesses or industries?',
      a: 'Certainly. We manage enterprise cleaning contracts across pharmaceutical manufacturing cleanrooms adhering to ISO Grade B standards, national event venues handling 60,000+ daily attendees, and pan-India logistics campuses. Case studies and references can be shared upon request.'
    },
    {
      q: 'Do you use environmentally friendly cleaning products?',
      a: 'Yes, sustainability is central to our operations. We prioritize concentrated biotechnology and probiotic enzyme cleaners, stabilize aqueous ozone (SAO) for chemical-free sanitization, and completely ban phosphates and harmful CFC aerosols.'
    },
    {
      q: 'Can you accommodate our facility\'s schedule for cleaning services?',
      a: 'Absolutely. We tailor shift rotas to your business flow—delivering quiet out-of-hours night cleaning to avoid workplace disruption, or discreet daytime janitorial care with quiet cordless vacuum equipment and dynamic spill response.'
    },
    {
      q: 'What steps do you take to ensure health and safety standards are met during cleaning?',
      a: 'Health and safety is ingrained in every procedure. We enforce COSHH (Control of Substances Hazardous to Health) compliance, conduct detailed dynamic risk assessments, supply full ergonomic PPE, and mandate regular IOSH safety refresher drills for all supervisors.'
    },
    {
      q: 'How do you handle emergencies or last-minute cleaning needs?',
      a: 'We operate a 24/7/365 national operations helpdesk and dedicated rapid-response mobile teams capable of deploying emergency deep cleaning, biohazard sanitization, and water damage remediation within agreed SLA windows.'
    },
    {
      q: 'Do you provide any tools for day-to-day communication and informational updates?',
      a: 'Yes. Customers have real-time access to our NEXA-Pulse client portal and mobile app, allowing you to log on-demand service tickets, review photographic completion audits, track consumable stock levels, and communicate directly with your dedicated site supervisor.'
    }
  ];

  return (
    <div className="w-full bg-white text-slate-900 overflow-hidden font-sans">
      
      {/* SECTION 1: HERO HEADER (Screenshot 1) */}
      <section className="relative pt-6 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden min-h-[500px] sm:min-h-[560px] lg:min-h-[600px] flex items-center shadow-2xl bg-slate-950 border border-slate-800">
          {/* Background Photography with modern atrium colonnade */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1920&q=80" 
              alt="NEXAAGEN Commercial Cleaning Services" 
              className="w-full h-full object-cover object-center"
            />
            {/* Smooth gradient overlay to ensure card readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-transparent lg:w-3/4" />
          </div>

          {/* Floating White Card */}
          <div className="relative z-10 p-6 sm:p-10 lg:p-14 max-w-2xl ml-4 sm:ml-8 lg:ml-12 my-8">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-2xl border border-white/40">
              {/* Hiring Badge */}
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#FF5722]/10 to-[#D8232A]/10 border border-[#FF5722]/20 rounded-full px-3 py-1 mb-5">
                <span className="bg-gradient-to-r from-[#FF5722] to-[#D8232A] text-white text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">
                  We're hiring
                </span>
                <Link to="/careers" className="text-xs font-semibold text-slate-800 hover:text-brand-orange transition-colors flex items-center">
                  <span>NEXAAGEN Careers</span>
                  <ArrowRight className="w-3 h-3 ml-1" />
                </Link>
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-5">
                Commercial Cleaning Services
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal mb-8">
                Our detailed, data-driven commercial cleaning plans work around your business leaving you safe in the knowledge your facility is fit-for-purpose and best prepared to deliver the best outcomes.
              </p>

              {/* Action Button */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#contact-form"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3.5 rounded-xl font-heading font-bold text-sm text-white bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 group"
                >
                  <span>Connect with Our Team</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: CLEANING OPERATION IN NUMBERS (Screenshot 2) */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-slate-100">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-slate-900 tracking-tight mb-4">
            NEXAAGEN Cleaning operation in numbers
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            We're on a mission to make people and places the best they can be and we understand the critical importance of cleaning, hygiene and infection control for your people.
          </p>
        </div>

        {/* 4 Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div 
                key={idx}
                className="bg-slate-50/70 hover:bg-white rounded-2xl p-6 sm:p-8 text-center transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/50 border border-slate-100 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF5722]/10 to-[#D8232A]/10 text-brand-orange flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-[#FF5722]" />
                </div>
                <div className="text-3xl sm:text-4xl font-heading font-black text-slate-900 tracking-tight mb-2">
                  {stat.value}
                </div>
                <p className="text-sm text-slate-600 font-medium leading-snug">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 3: OUR CLEANING SERVICES (Screenshot 3) */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Portrait */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-100 max-h-[580px]">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80" 
                alt="NEXAAGEN Cleaning Professional" 
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
          </div>

          {/* Right Column: Content & Service List */}
          <div className="lg:col-span-7">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-slate-900 tracking-tight mb-5">
              Our cleaning services
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-4">
              Our global cleaning teams are responsible for making people and places the best they can be across thousands of locations, multiple times a day, every day of the year. We have 25+ years of history in cleaning innovation and we're looking forward to connecting with you to learn more about how we can help.
            </p>
            <p className="text-sm sm:text-base font-semibold text-[#0066CC] hover:text-brand-orange transition-colors mb-8 cursor-pointer">
              <a href="#contact-form">Contact our team to find out more detail on any of the service areas below.</a>
            </p>

            {/* List with 9 bullet items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {serviceCapabilities.map((item, index) => (
                <div key={index} className="flex items-center space-x-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-[#FF5722] flex-shrink-0" />
                  <span className="text-sm sm:text-[15px] font-medium text-slate-800">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: SECTOR-SPECIALIST CLEANING AND HYGIENE SERVICES (Screenshot 4) */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-slate-50/60 rounded-[32px] my-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Heading and copy */}
          <div className="lg:col-span-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
              Sector-specialist cleaning and hygiene services
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6 font-normal">
              Our responsibility is to ensure your environments are clean, fresh, sanitised and ready for whatever the day has ahead of you. Our teams are specialists across multiple sectors, including healthcare, education, manufacturing, retail, distribution, logistics, transport and professional, corporate and public sectors.
            </p>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              We know that a safe, clean, infection-free environment can be the critical and often marginal difference that helps deliver success.
            </p>
          </div>

          {/* Right Column: 3 team members photo */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200/80">
              <img 
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1000&q=80" 
                alt="NEXAAGEN Sector Specialist Cleaning Colleagues" 
                className="w-full h-full object-cover object-center max-h-[440px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: OUR COLLEAGUES AT THE CENTRE OF YOUR OPERATION (Screenshot 5) */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: High-vis female colleague photo */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-100 max-h-[500px]">
              <img 
                src="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=800&q=80" 
                alt="NEXAAGEN Dedicated Cleaning Colleague" 
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-slate-900 tracking-tight mb-6">
              Our colleagues at the centre of your operation
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6">
              Our cleaning teams collaborate closely with our customers and their staff, aligning our services with the customer's mission and objectives. Focused on delivering outcomes, our team is vital in implementing best practices and ensuring resilience.
            </p>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8">
              Our teams work together, in unity, lending help to their colleagues to ensure that all teams finish their shifts at the same time. This act of togetherness speaks to our TRUE Values of Trust, Respect, Unity and Empowerment.
            </p>

            {/* TRUE Values Badges */}
            <div className="flex flex-wrap gap-2.5">
              {['Trust', 'Respect', 'Unity', 'Empowerment'].map((val, idx) => (
                <span 
                  key={idx}
                  className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-100 text-slate-800 border border-slate-200"
                >
                  {val}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: INVESTING IN PEOPLE FOR BEST EXPERIENCE AND OUTCOMES (Screenshot 6) */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-100">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Heading and copy */}
          <div className="lg:col-span-7">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-slate-900 tracking-tight mb-6">
              Investing in people for best experience and outcomes
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6 font-normal">
              Our colleagues play a vital role in enhancing the experience of visitors and users at your facility. We focus on their ongoing training and development, which is crucial for their success and your business.
            </p>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Safety is our top priority, and we ensure our colleagues receive the necessary training to work safely. Adapting to changing circumstances, we consistently provide our frontline and leadership teams with additional education and development opportunities.
            </p>
          </div>

          {/* Right Column: Outdoor smiling colleague photo */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-100 max-h-[460px]">
              <img 
                src="https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&w=800&q=80" 
                alt="Frontline Training & Quality Outcomes" 
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: CUSTOMER SUCCESS AND OUTCOMES (Screenshot 7) */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-slate-50/70 rounded-[36px] my-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-slate-900 tracking-tight mb-4">
            Customer success and outcomes
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Discover all that we're doing in helping people and places across the world be the best they can be – supporting colleagues, customers and communities.
          </p>
        </div>

        {/* 3 Story Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {customerStories.map((story) => (
            <div 
              key={story.id}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-slate-100 flex flex-col group"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={story.image} 
                  alt={story.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-7 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-3">
                    {story.tag}
                  </span>
                  <h3 className="text-lg font-heading font-bold text-slate-900 group-hover:text-brand-orange transition-colors leading-snug mb-3">
                    {story.title}
                  </h3>
                  <p className="text-sm text-slate-600 line-clamp-3 mb-6">
                    {story.summary}
                  </p>
                </div>
                <div>
                  <a
                    href="#contact-form"
                    className="inline-flex items-center text-sm font-semibold text-[#FF5722] hover:text-[#D8232A] group/link"
                  >
                    <span>Read their story</span>
                    <ArrowRight className="w-4 h-4 ml-1.5 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 8: CLEANING + ESG (Screenshot 8) */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: ESG Text & Checklist */}
          <div className="lg:col-span-7">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-slate-900 tracking-tight mb-5">
              Cleaning + ESG
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8">
              We are constantly taking steps to reduce our impact on the environment – and can help you achieve your sustainability goals, too. We use microbial and bio (green) products as much as possible, never use phosphates or aerosols, and select cleaning products that are effective, well-priced and most importantly, have evidence-based eco-credentials.
            </p>

            <div className="space-y-4 mb-8">
              {[
                'Hiring and training a diverse workforce, including opportunities for individuals from disadvantaged backgrounds.',
                'Implementing eco-friendly cleaning methods and products, reducing chemical use, and focusing on sustainable waste management practices.',
                'Energy-efficient equipment and practices in cleaning operations, contributing to the reduction of the overall carbon footprint.'
              ].map((pt, i) => (
                <div key={i} className="flex items-start space-x-3.5">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-r from-[#FF5722] to-[#D8232A] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-white stroke-[2.5]" />
                  </div>
                  <span className="text-sm sm:text-base text-slate-700 font-medium">
                    {pt}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="#contact-form"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3.5 rounded-xl font-heading font-bold text-sm text-white bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300"
            >
              <span>Connect with our ESG team to learn more</span>
            </a>
          </div>

          {/* Right Column: Ocean Seafoam Image */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-100 max-h-[500px]">
              <img 
                src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1000&q=80" 
                alt="Environmental Sustainability at NEXAAGEN" 
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: CLEANING + TECHNOLOGY (Screenshot 9) */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-100">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Business woman on tablet */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-100 max-h-[500px]">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80" 
                alt="NEXAAGEN Technology & Smart Audits" 
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Right Column: Tech content & points */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-slate-900 tracking-tight mb-5">
              Cleaning + Technology
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8">
              Our colleagues in the NEXAAGEN Advance (Technology) team harnesses emerging technologies like AI, AR, Robotics, Drones, and Smart Buildings to benefit our customers. By staying ahead of the curve, we can provide personalised, efficient, and immersive experiences, streamline operations, and create sustainable, energy-efficient environments.
            </p>

            <div className="space-y-4 mb-8">
              {[
                'Autonomous robotic scrubbers and IoT desk/restroom sensors triggering demand-driven cleaning.',
                'Platforms for conducting and managing audits, ensuring compliance with relevant standards, and identifying areas for improvement.',
                'Instant communication between facility managers, colleagues, and customers, enabling rapid response to requests, incidents and feedback.'
              ].map((pt, i) => (
                <div key={i} className="flex items-start space-x-3.5">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-r from-[#FF5722] to-[#D8232A] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-white stroke-[2.5]" />
                  </div>
                  <span className="text-sm sm:text-base text-slate-700 font-medium">
                    {pt}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="#contact-form"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3.5 rounded-xl font-heading font-bold text-sm text-white bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300"
            >
              <span>Connect with our Technology team to learn more</span>
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 10: ACCREDITATIONS & CERTIFICATIONS (Screenshot 10) */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-100">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-slate-900 tracking-tight mb-3">
            Accreditations & Certifications
          </h2>
          <p className="text-base text-slate-600">
            Industry-specific accreditations and certification enabling our teams to deliver consistency, compliance and best practice.
          </p>
        </div>

        {/* 6 Accreditations Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
          {/* 1. BICSc */}
          <div className="bg-slate-50 rounded-2xl p-6 flex flex-col items-center justify-center border border-slate-200/60 hover:shadow-md transition-shadow h-28 text-center">
            <span className="font-heading font-black text-2xl text-[#003366] tracking-tight">BICSc.</span>
            <span className="text-[10px] uppercase font-bold text-slate-500 mt-1">Corporate Member</span>
          </div>

          {/* 2. ISSA */}
          <div className="bg-slate-50 rounded-2xl p-6 flex flex-col items-center justify-center border border-slate-200/60 hover:shadow-md transition-shadow h-28 text-center">
            <span className="font-heading font-black text-2xl text-[#006699] tracking-wider">ISSA</span>
            <span className="text-[10px] uppercase font-bold text-slate-500 mt-0.5">MEMBER</span>
          </div>

          {/* 3. ISO */}
          <div className="bg-slate-50 rounded-2xl p-6 flex flex-col items-center justify-center border border-slate-200/60 hover:shadow-md transition-shadow h-28 text-center">
            <div className="w-10 h-10 rounded-full border-2 border-[#005596] flex items-center justify-center mb-1">
              <span className="font-heading font-bold text-xs text-[#005596]">ISO</span>
            </div>
            <span className="text-[9px] font-bold text-slate-500">9001 / 14001 / 45001</span>
          </div>

          {/* 4. ahcp */}
          <div className="bg-slate-50 rounded-2xl p-6 flex flex-col items-center justify-center border border-slate-200/60 hover:shadow-md transition-shadow h-28 text-center">
            <span className="font-heading font-black text-2xl text-[#8B004F] lowercase tracking-tight">ahcp</span>
            <span className="text-[10px] font-semibold text-slate-500">Healthcare Cleaning</span>
          </div>

          {/* 5. HSE */}
          <div className="bg-slate-50 rounded-2xl p-6 flex flex-col items-center justify-center border border-slate-200/60 hover:shadow-md transition-shadow h-28 text-center">
            <div className="w-8 h-8 bg-[#8B1E41] text-white flex items-center justify-center font-bold text-xs rounded mb-1">
              HSE
            </div>
            <span className="text-[10px] font-semibold text-slate-500">Health & Safety</span>
          </div>

          {/* 6. FWC */}
          <div className="bg-slate-50 rounded-2xl p-6 flex flex-col items-center justify-center border border-slate-200/60 hover:shadow-md transition-shadow h-28 text-center">
            <div className="w-10 h-10 rounded-full border border-red-600 flex items-center justify-center text-red-600 font-bold text-[10px] mb-1">
              FWC
            </div>
            <span className="text-[9px] font-bold text-slate-500">Window Cleaners</span>
          </div>
        </div>
      </section>

      {/* SECTION 11: FACILITIES SERVICES DESIGNED FOR YOUR ORGANISATION (Screenshots 11 & 12) */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-100">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-slate-900 tracking-tight mb-3">
              Facilities services designed for your organisation
            </h2>
            <p className="text-base text-slate-600">
              Need more than cleaning services? Discover more on our core services and integrated solutions.
            </p>
          </div>
          <div className="flex items-center space-x-3 mt-6 md:mt-0">
            <button
              onClick={prevCarousel}
              aria-label="Previous service"
              className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-slate-100 hover:text-brand-orange transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextCarousel}
              aria-label="Next service"
              className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-slate-100 hover:text-brand-orange transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[0, 1, 2].map((offset) => {
            const item = complementaryServices[(carouselIndex + offset) % complementaryServices.length];
            return (
              <Link
                key={item.id}
                to={item.link}
                className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-slate-100 flex flex-col group"
              >
                <div className="relative h-60 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gradient-to-r from-[#FF5722] to-[#D8232A] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
                <div className="p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-heading font-bold text-slate-900 group-hover:text-brand-orange transition-colors mb-3">
                      {item.title}
                    </h3>
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

      {/* SECTION 12: FREQUENTLY ASKED QUESTIONS (Screenshot 13) */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-100">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-slate-900 tracking-tight mb-4">
            Frequently asked questions for Cleaning
          </h2>
          <p className="text-base text-slate-600">
            Answers to common questions about our corporate cleaning standards, sustainability practices, security, and scheduling.
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

      {/* SECTION 13: CONNECT BANNER (Screenshot 14) */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="relative rounded-[28px] sm:rounded-[36px] bg-[#0A192F] text-white p-8 sm:p-14 lg:p-16 overflow-hidden text-center shadow-2xl">
          {/* Subtle geometric dot grid pattern */}
          <div 
            className="absolute inset-0 opacity-10 pointer-events-none" 
            style={{
              backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
              backgroundSize: '24px 24px'
            }}
          />

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold tracking-tight mb-4">
              Connect with your Cleaning team
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
              We're ready to help you deliver the best experiences, practices, productivity, resilience and outcomes. We look forward to connecting with you.
            </p>
            <a
              href="#contact-form"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-heading font-bold text-base text-white bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:shadow-xl hover:shadow-orange-500/30 transition-all duration-300"
            >
              <span>Contact Us</span>
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 14: SIGNATURE CONTACT FORM */}
      <section id="contact-form" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-slate-50/70 rounded-[32px] p-6 sm:p-12 border border-slate-200/80">
          <ContactForm defaultService="cleaning" />
        </div>
      </section>

    </div>
  );
}

