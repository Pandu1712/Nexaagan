import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ArrowUpRight, 
  Check, 
  ChevronLeft, 
  ChevronRight, 
  Wrench, 
  ShieldCheck, 
  Zap, 
  Building2, 
  Cpu, 
  Layers,
  Award,
  Sparkles,
  CheckCircle2,
  Clock,
  Send,
  AlertCircle
} from 'lucide-react';

export default function HardServicesContent({ service }) {
  // News Carousel state
  const [newsIndex, setNewsIndex] = useState(0);

  // Form State for Contact Section
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
    postCode: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First name required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name required';
    if (!formData.company.trim()) newErrors.company = 'Company name required';
    if (!formData.email.trim()) newErrors.email = 'Valid email required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setFormSubmitted(true);
  };

  // Section 2: Stat Cards Data (Screenshot 2)
  const statCards = [
    {
      value: '125 years',
      label: 'Experience in technical services and innovation'
    },
    {
      value: '850,000+',
      label: 'Technical inspections globally each year'
    },
    {
      value: '10,000+',
      label: 'Technical experts'
    },
    {
      value: '1,500+',
      label: 'Trained engineers'
    }
  ];

  // Section 4: Capabilities Cards Data (Screenshots 4 & 5)
  const capabilities = [
    {
      id: 'ppm',
      title: 'Planned & Preventative Maintenance',
      image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80',
      description: 'Planned, preventative and corrective maintenance to keep assets safe, compliant, online.'
    },
    {
      id: 'upgrades',
      title: 'Engineering Projects & Upgrades',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
      description: 'Refurbishments, fit-outs and upgrades modernise assets without operational disruption.'
    },
    {
      id: 'critical-systems',
      title: 'Specialist & Critical Systems',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
      description: 'Certified expertise in HVAC, BMS, refrigeration, fire & life safety, critical power.'
    },
    {
      id: 'compliance',
      title: 'Asset Compliance & Assurance',
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80',
      description: 'Statutory compliance management, facility condition assessments and lifecycle planning.'
    },
    {
      id: 'mobile-teams',
      title: 'On-Site & Mobile Engineering',
      image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80',
      description: 'Dedicated on site engineers and mobile teams with 24/7 response and escalation.'
    },
    {
      id: 'tech-enabled',
      title: 'Technology-Enabled Performance',
      image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80',
      description: 'Integrated CAFM/BMS, real time monitoring and reporting for performance and compliance.'
    }
  ];

  // Section 6: Accreditations List (Screenshot 7)
  const accreditations = [
    { title: 'ISO 9001', code: 'Quality Management' },
    { title: 'ISO 14001', code: 'Environmental' },
    { title: 'ISO 45001', code: 'Occupational H&S' },
    { title: 'ISO 50001', code: 'Energy Management' },
    { title: 'ISO 14644:2015', code: 'Cleanrooms Std' },
    { title: 'ISO 55001', code: 'Asset Life-Cycle' },
    { title: 'BEE 5-Star', code: 'Energy Conservation' },
    { title: 'NEBOSH', code: 'Safety Qualified' },
    { title: 'IOSH', code: 'Institution Certified' },
    { title: 'CEIG Certified', code: 'Electrical Inspection' },
    { title: 'BICSc', code: 'Standards Seal' }
  ];

  // Section 7: News & Case Studies (Screenshot 8)
  const newsItems = [
    {
      id: 'data-center-ai',
      tag: 'Data Center | Hard Services',
      title: 'Facility Management in AI-Empowered Data Centres',
      date: '22 May, 2025',
      author: 'NEXAAGEN Team',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
      summary: 'Exploring precision liquid cooling, high-density AI rack thermal engineering, and 100% continuous uptime governance.'
    },
    {
      id: 'engineering-award',
      tag: 'Awards | Hard Services',
      title: '2025 Engineering, Procurement and Asset Excellence Award',
      date: '15 April, 2025',
      author: 'NEXAAGEN Awards',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
      summary: 'Recognized by industry leaders for exceptional uptime SLAs, self-delivered MEP innovation, and predictive IoT telemetry.'
    }
  ];

  return (
    <div className="w-full flex flex-col bg-white">
      {/* ============================================================== */}
      {/* SECTION 1: HERO SECTION (Screenshot 1)                          */}
      {/* ============================================================== */}
      <section className="w-full py-2 sm:py-4 lg:py-6 bg-white overflow-hidden">
        <div className="container-custom">
          <div className="relative w-full rounded-2xl sm:rounded-[32px] lg:rounded-[40px] overflow-hidden min-h-[500px] sm:min-h-[560px] lg:min-h-[620px] flex items-center shadow-xl border border-slate-200/60 bg-[#0A192F]">
            
            {/* Background Industrial MEP Infrastructure with Blue Cyan Overlay */}
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2400&q=85"
                alt="Heavy Industrial MEP Chiller Infrastructure"
                className="w-full h-full object-cover object-center scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#06182C]/95 via-[#0A2540]/80 to-[#0A2540]/50" />
              
              {/* Geometric Technical Accent Outlines (as shown in Screenshot 1) */}
              <div className="absolute right-10 top-1/2 -translate-y-1/2 w-[340px] h-[340px] border border-cyan-400/20 rounded-3xl rotate-12 hidden lg:block pointer-events-none" />
              <div className="absolute right-20 top-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-orange-500/25 rounded-3xl -rotate-6 hidden lg:block pointer-events-none" />
            </div>

            {/* Left Content */}
            <div className="relative z-20 w-full p-8 sm:p-12 md:p-16 lg:p-20 max-w-3xl space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-heading font-extrabold text-white tracking-tight leading-[1.15] drop-shadow-md">
                Hard Services for Complex, Business-Critical Environments
              </h1>

              <p className="text-slate-200 text-sm sm:text-base lg:text-lg leading-relaxed font-normal max-w-2xl drop-shadow-sm">
                Our team keeps essential buildings and infrastructure safe, compliant and performing, through self-delivered engineering, real-time asset insight and deep sector expertise across India and the region.
              </p>

              <div className="pt-2">
                <a
                  href="#contact-form"
                  className="inline-flex items-center justify-center font-bold text-white px-8 sm:px-10 py-4 rounded-full text-xs sm:text-sm bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:from-[#F4511E] hover:to-[#B71C1C] shadow-xl hover:shadow-orange-500/30 transition-all duration-300"
                >
                  Speak to a Hard Services expert
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 2: POWERED BY PEOPLE, ENABLED BY TECH (Screenshot 2)   */}
      {/* ============================================================== */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-brand-navy tracking-tight">
              Powered by people, Enabled by tech.
            </h2>
            <p className="mt-3 text-slate-500 text-sm sm:text-base font-medium">
              Proven technical capability at scale
            </p>
          </div>

          {/* 4 Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {statCards.map((card, idx) => (
              <div
                key={idx}
                className="bg-slate-50/70 rounded-3xl p-8 border border-slate-100 hover:border-slate-200 hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-full bg-orange-100/80 text-brand-orange flex items-center justify-center mb-8 group-hover:bg-brand-orange group-hover:text-white transition-all shadow-sm">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-heading font-extrabold text-[#D8232A] tracking-tight">
                    {card.value}
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed mt-4">
                  {card.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 3: TRUSTED PARTNER FOR COMPLEX ENVIRONMENTS (Screen 3)  */}
      {/* ============================================================== */}
      <section className="section-padding bg-slate-50/60 border-y border-slate-100">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-brand-navy tracking-tight leading-tight">
                Trusted Partner for Complex Environments
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                We maintain core building systems, safety-critical assets and site infrastructure through preventative and reactive maintenance, compliance planning and project delivery.
              </p>

              {/* 3 Red/Orange Checkpoints */}
              <div className="space-y-4 pt-2">
                <div className="flex items-start space-x-3.5">
                  <div className="w-5 h-5 rounded-full bg-[#E53935] text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                    Directly employed engineers deliver consistent standards, faster response and lower operational risk, with safety and compliance assured.
                  </span>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-5 h-5 rounded-full bg-[#E53935] text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                    Technical expertise across M&E, HVAC, life safety and critical systems keeps assets reliable across the full life cycle.
                  </span>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-5 h-5 rounded-full bg-[#E53935] text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                    Global engineering frameworks and strong local teams ensure compliant, high-quality and consistent delivery across India and regional hubs.
                  </span>
                </div>
              </div>

              {/* Red-Orange Gradient CTA */}
              <div className="pt-3">
                <a
                  href="#contact-form"
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-bold text-white bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:from-[#F4511E] hover:to-[#B71C1C] shadow-lg hover:shadow-orange-500/25 transition-all duration-300"
                >
                  Connect With Our Team
                </a>
              </div>
            </div>

            {/* Right Photo Column: Hard Hat Engineer (Screenshot 3) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-100 aspect-[4/5] max-w-md mx-auto group">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=85"
                  alt="NEXAAGEN Certified Hard Services Lead Engineer"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-brand-navy/90 backdrop-blur-md text-white p-4 rounded-2xl border border-white/10">
                  <p className="text-xs font-bold uppercase tracking-wider text-brand-orange">
                    Self-Delivered MEP
                  </p>
                  <p className="text-sm font-semibold mt-0.5">
                    Authorized Persons & Chartered Engineers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 4: HARD SERVICES CAPABILITIES (Screenshots 4 & 5)       */}
      {/* ============================================================== */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Header with Top-Right CTA */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-brand-navy tracking-tight leading-tight">
                Hard Services Capabilities
              </h2>
              <p className="mt-2.5 text-slate-600 text-sm sm:text-base leading-relaxed">
                Go beyond day-to-day maintenance with capabilities that support safer, more resilient building performance.
              </p>
            </div>

            <a
              href="#contact-form"
              className="inline-flex items-center justify-center px-7 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:from-[#F4511E] hover:to-[#B71C1C] shadow-md self-start md:self-auto transition-all whitespace-nowrap"
            >
              Connect With Our Team
            </a>
          </div>

          {/* 6 Capabilities Cards Grid (2 rows of 3) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {capabilities.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-card-subtle hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover card-img-zoom"
                    loading="lazy"
                  />
                </div>

                <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="text-xl font-bold font-heading text-brand-navy group-hover:text-brand-orange transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 5: OUR APPROACH TO HARD SERVICES DELIVERY (Screen 6)   */}
      {/* ============================================================== */}
      <section className="section-padding bg-slate-50/70 border-t border-slate-100">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-brand-navy tracking-tight">
              Our Approach to Hard Services Delivery
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left Photo: Augmented Telemetry Tablet in Plant */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-100 aspect-[4/3] sm:aspect-[16/11] max-w-lg mx-auto group">
                <img
                  src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=85"
                  alt="Engineer inspecting mechanical equipment with digital twin tablet"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Right Steps with Green Accent Border */}
            <div className="lg:col-span-7 space-y-8 pl-0 lg:pl-4">
              {/* Step 1 */}
              <div className="border-l-4 border-emerald-500 pl-6 space-y-1.5">
                <h3 className="text-xl font-bold font-heading text-brand-navy">
                  Assess Risk and Asset Criticality
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  We start by understanding asset condition, compliance requirements and operational risk to define the right service model.
                </p>
              </div>

              {/* Step 2 */}
              <div className="border-l-4 border-emerald-500 pl-6 space-y-1.5">
                <h3 className="text-xl font-bold font-heading text-brand-navy">
                  Deliver Through the Right Engineering Model
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Services are delivered through dedicated on-site teams, mobile engineers or a blended approach, aligned to site complexity and operating hours.
                </p>
              </div>

              {/* Step 3 */}
              <div className="border-l-4 border-emerald-500 pl-6 space-y-1.5">
                <h3 className="text-xl font-bold font-heading text-brand-navy">
                  Monitor, Report and Continuously Improve
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Asset performance, compliance and risk are tracked using digital systems, with customer feedback closing the loop to drive regular improvements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 6: PROVEN, TRUSTED, ACCREDITED (Screenshot 7)           */}
      {/* ============================================================== */}
      <section className="section-padding bg-white border-t border-slate-100">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-10">
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-brand-navy tracking-tight">
              Proven, Trusted, Accredited
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
              Statutory compliance managed and evidenced through documented procedures, permits and service records. Independent audits and recognised accreditations with audit-ready, site-level reporting and clear governance.
            </p>

            <div className="pt-2">
              <a
                href="#contact-form"
                className="inline-flex items-center justify-center px-7 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:from-[#F4511E] hover:to-[#B71C1C] shadow-md transition-all"
              >
                NEXAAGEN QHSE Policy
              </a>
            </div>
          </div>

          {/* Continuous Row of 11 Compliance Seals */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-11 gap-3 pt-6 items-center justify-items-center">
            {accreditations.map((acc, aIdx) => (
              <div
                key={aIdx}
                className="p-3 rounded-2xl border border-slate-100 hover:border-slate-300 hover:shadow-sm transition-all flex flex-col items-center justify-center w-full h-24 bg-white text-center"
              >
                <div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-[10px] font-black text-brand-navy mb-1">
                  ISO
                </div>
                <span className="text-[11px] font-bold text-slate-800 line-clamp-1">{acc.title}</span>
                <span className="text-[9px] text-slate-400 line-clamp-1">{acc.code}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 7: HARD FM NEWS & INSIGHTS (Screenshot 8)               */}
      {/* ============================================================== */}
      <section className="section-padding bg-slate-50/60 border-t border-slate-100">
        <div className="container-custom">
          {/* Top Center Pill Button */}
          <div className="text-center mb-10">
            <Link
              to="/news"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:from-[#F4511E] hover:to-[#B71C1C] shadow-md transition-all"
            >
              View all Hard FM News
            </Link>
          </div>

          {/* 2 Featured News Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {newsItems.map((news) => (
              <Link
                key={news.id}
                to={`/news`}
                className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover card-img-zoom"
                  />
                  <div className="absolute top-4 left-4 bg-brand-navy/90 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full">
                    {news.tag}
                  </div>
                </div>

                <div className="p-6 flex flex-col justify-between flex-1">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold font-heading text-brand-navy group-hover:text-brand-orange transition-colors">
                      {news.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {news.summary}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                    <span>{news.author} · {news.date}</span>
                    <span className="font-semibold text-brand-orange group-hover:underline">Read more →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Carousel Progress Bar & Arrows */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <div className="w-48 h-1 bg-slate-200 rounded-full overflow-hidden">
              <div className="w-1/2 h-full bg-brand-orange rounded-full" />
            </div>
            <div className="flex space-x-2">
              <button
                className="w-8 h-8 rounded-full border border-slate-200 bg-white hover:bg-slate-100 flex items-center justify-center text-slate-600 transition-colors shadow-sm"
                aria-label="Previous news"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                className="w-8 h-8 rounded-full border border-slate-200 bg-white hover:bg-slate-100 flex items-center justify-center text-slate-600 transition-colors shadow-sm"
                aria-label="Next news"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 8: 2-COLUMN SIGNATURE DARK BLUE CONTACT FORM (Screen 9) */}
      {/* ============================================================== */}
      <section id="contact-form" className="section-padding bg-slate-900 text-white">
        <div className="container-custom max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column: Heading, Subtitle & Live Status */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold border border-emerald-500/20">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Available until 5:30pm</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight leading-tight">
                Ready to Optimise Your Buildings with a Trusted Hard Services Partner?
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                From maintaining critical systems to improving efficiency and reliability, NEXAAGEN keeps your infrastructure performing at its best and your operations running without interruption.
              </p>

              <div className="pt-4 border-t border-slate-800 space-y-3">
                <div className="flex items-center text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" />
                  <span>Guaranteed 60-minute emergency MEP dispatch SLA</span>
                </div>
                <div className="flex items-center text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" />
                  <span>ISO 55001 & CEIG certified engineering directors</span>
                </div>
                <div className="flex items-center text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" />
                  <span>Real-time digital twin & CAFM ticket transparency</span>
                </div>
              </div>
            </div>

            {/* Right Column: 2-Step Form Card */}
            <div className="lg:col-span-7">
              <div className="bg-slate-800/80 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-slate-700 shadow-2xl">
                {formSubmitted ? (
                  <div className="text-center py-10 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto shadow-inner">
                      <Check className="w-8 h-8 stroke-[3]" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Thank You for Reaching Out</h3>
                    <p className="text-sm text-slate-300 max-w-md mx-auto">
                      Our Hard Services practice team has received your inquiry. A regional MEP technical director will contact you within 2 business hours.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="mt-4 px-6 py-2.5 rounded-full text-xs font-semibold bg-slate-700 hover:bg-slate-600 text-white transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-6">
                    {/* Step 1 Pill Header */}
                    <div className="flex items-center space-x-3 pb-3 border-b border-slate-700">
                      <span className="w-7 h-7 rounded-full bg-brand-orange text-white text-xs font-bold flex items-center justify-center">
                        1
                      </span>
                      <h3 className="text-base font-bold text-white">Personal Details</h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* First Name */}
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1">
                          First Name *
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange"
                          placeholder="John"
                        />
                        {errors.firstName && (
                          <p className="text-[11px] text-red-400 mt-1">{errors.firstName}</p>
                        )}
                      </div>

                      {/* Last Name */}
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange"
                          placeholder="Doe"
                        />
                        {errors.lastName && (
                          <p className="text-[11px] text-red-400 mt-1">{errors.lastName}</p>
                        )}
                      </div>

                      {/* Company */}
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1">
                          Company *
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange"
                          placeholder="Acme Enterprise"
                        />
                        {errors.company && (
                          <p className="text-[11px] text-red-400 mt-1">{errors.company}</p>
                        )}
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange"
                          placeholder="john@example.com"
                        />
                        {errors.email && (
                          <p className="text-[11px] text-red-400 mt-1">{errors.email}</p>
                        )}
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1">
                          Phone *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange"
                          placeholder="+91 98765 43210"
                        />
                        {errors.phone && (
                          <p className="text-[11px] text-red-400 mt-1">{errors.phone}</p>
                        )}
                      </div>

                      {/* Post Code */}
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1">
                          Post Code
                        </label>
                        <input
                          type="text"
                          name="postCode"
                          value={formData.postCode}
                          onChange={handleInputChange}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange"
                          placeholder="560001"
                        />
                      </div>
                    </div>

                    {/* Step 2 Pill Header */}
                    <div className="pt-2">
                      <div className="flex items-center space-x-3 pb-3 border-b border-slate-700">
                        <span className="w-7 h-7 rounded-full bg-slate-700 text-white text-xs font-bold flex items-center justify-center">
                          2
                        </span>
                        <h3 className="text-base font-bold text-white">How Can We Help?</h3>
                      </div>

                      <div className="mt-3">
                        <textarea
                          name="message"
                          rows="3"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Tell us about your facility size, critical systems (HVAC, chiller, electrical), or SLA requirements..."
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange resize-none"
                        />
                      </div>
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full py-3.5 rounded-full font-bold text-sm text-white bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:from-[#F4511E] hover:to-[#B71C1C] shadow-lg hover:shadow-orange-500/30 transition-all flex items-center justify-center space-x-2"
                      >
                        <span>Submit Hard Services Inquiry</span>
                        <Send className="w-4 h-4 ml-1" />
                      </button>
                    </div>

                    <p className="text-[11px] text-slate-400 text-center">
                      Protected by enterprise-grade SSL. Your information is governed by our strict Privacy Policy.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

