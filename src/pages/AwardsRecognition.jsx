import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Trophy,
  Award,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  ShieldCheck,
  Globe2,
  Building2,
  Star,
  Sparkles,
  X,
  ExternalLink
} from 'lucide-react';
import Breadcrumbs from '../components/layout/Breadcrumbs';
import aviationServicesImg from '../assets/news/aviation-global-services.jpg';

export default function AwardsRecognition() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  // News items data (Screenshot 9)
  const newsItems = [
    {
      id: 'news-1',
      title: 'Sixty Years of Global Aviation Services: One Standard, Uncompromising Excellence',
      author: 'NEXAAGEN Team',
      date: '24 Aug, 2026',
      image: aviationServicesImg,
      tag: 'Aviation',
      excerpt: 'Celebrating decades of world-class terminal operations, PRM mobility assistance, and ground handling across premier international gateways.'
    },
    {
      id: 'news-2',
      title: 'The 60 Days That Decide a Data Centre’s Life: Why Pre-Commissioning FM Matters',
      author: 'NEXAAGEN Team',
      date: '16 Jul, 2026',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
      tag: 'Critical Facilities',
      excerpt: 'Why ISO 14644 cleanroom protocols and calibrated air handling teams are essential before servers go live.'
    },
    {
      id: 'news-3',
      title: 'Inside India’s Airport Transformation: Why FM is Moving From Janitorial to Experience Design',
      author: 'NEXAAGEN Team',
      date: '09 Jul, 2026',
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80',
      tag: 'Experience Design',
      excerpt: 'How modern Indian airports are utilizing intelligent sensors, customer care ambassadors, and inclusive hiring.'
    },
    {
      id: 'news-4',
      title: 'Why Post-Construction Cleaning Is Critical for Data Centre Commissioning',
      author: 'NEXAAGEN Team',
      date: '06 Jul, 2026',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
      tag: 'Technical Hygiene',
      excerpt: 'Microscopic construction debris can trigger catastrophic hardware failure. How HEPA cleanroom protocols protect hyperscale operations.'
    }
  ];

  return (
    <div className="w-full flex flex-col flex-1 bg-transparent text-slate-900 font-sans overflow-hidden">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'About Us', link: '/about' },
          { label: 'Awards & Recognition' }
        ]}
      />

      {/* ========================================================================= */}
      {/* SECTION 1: HERO - NEXAAGEN GLOBAL AWARDS (Screenshot 1)                   */}
      {/* ========================================================================= */}
      <section className="relative pt-4 pb-3 sm:pt-6 sm:pb-4 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FDFBF9] via-[#FAF7F2] to-white overflow-hidden">
        {/* Soft Coral/Orange Dotted Pattern Watermark */}
        <div
          className="absolute inset-0 opacity-[0.25] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(#EA580C 1.1px, transparent 1.1px)',
            backgroundSize: '24px 24px'
          }}
        />

        <div className="relative max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-brand-navy tracking-tight leading-tight">
            Global Awards
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto font-normal">
            Our aspiration is to become the best facilities services business in the world, making people and places the best they can be. The nominations and awards we receive are a testament to our frontline colleagues and operational teams' hard work in pursuing this goal.
          </p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: AWARD-WINNING FACILITIES SERVICES FOR BEST OUTCOMES (Photo 2)  */}
      {/* ========================================================================= */}
      <section className="py-4 sm:py-6 container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Frontline Colleague in Safety Vest with Arms Folded */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-xl aspect-[4/5] max-h-[440px] w-full max-w-[360px] sm:max-w-[380px] border border-slate-100 group">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80"
                alt="Award-winning frontline colleague at NEXAAGEN"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Right Column: Narrative Copy */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-brand-navy tracking-tight leading-tight">
              Award-winning facilities services for best outcomes
            </h2>

            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              <p>
                Industry awards play a pivotal role in recognising and celebrating our teams' hard work and dedication, who are committed to making people and places the best they can be. These accolades underscore our commitment to excellence and innovation, becoming the best we can be. Our award-winning teams show hard work and dedication and champion our <Link to="/true-values" className="font-semibold text-slate-900 underline decoration-orange-400 hover:text-brand-orange">TRUE Values</Link> in all they do.
              </p>

              <p>
                We take immense pride in being recognised through industry-leading nominations and awards across our services, sectors, environment, social value and governance. However, we view these accolades not as the final goal but as a catalyst for continued growth and improvement. They inspire us to learn, innovate, and enhance our services, ensuring we deliver better outcomes for colleagues, customers and communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: UK & IRELAND FACILITIES SERVICES AWARDS (Screenshot 3)         */}
      {/* ========================================================================= */}
      <section className="py-4 sm:py-6 bg-transparent border-y border-slate-100">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Narrative Copy & Checkmark Accolades */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-brand-navy tracking-tight leading-tight">
                UK & Ireland facilities services awards
              </h2>

              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                <p>
                  Our team in the UK and Ireland has been consistently recognised for their dedication and excellence, receiving multiple prestigious industry awards across various categories.
                </p>

                <p>
                  Accolades include recognition as Newcomer Employer of the Year, several RoSPA Gold Awards totalling 31, In-House Payroll Team of the Year, Best Security Team in regional categories, Frontline honours in the Women in Security Awards, and the Security Officer of the Year Award from the Irish Security Industry Association. Additionally, our achievements in facilities management have been highlighted with the NISO Award and the FM Project of the Year, alongside innovative contributions to security and customer service, as acknowledged by the Irish Security Industry Association.
                </p>
              </div>

              {/* Accolade List */}
              <div className="pt-2 space-y-3">
                <div className="flex items-center space-x-3 text-sm text-slate-800 font-medium">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#FF5722] to-[#D8232A] text-white flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span>Women in Security Awards – Frontline</span>
                </div>

                <div className="flex items-center space-x-3 text-sm text-slate-800 font-medium">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#FF5722] to-[#D8232A] text-white flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span>ISIA Customer Services Awards</span>
                </div>

                <div className="flex items-center space-x-3 text-sm text-slate-800 font-medium">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#FF5722] to-[#D8232A] text-white flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span>Newcomer Employer of the Year</span>
                </div>
              </div>
            </div>

            {/* Right Column: Smiling Professional in Orange Lanyard & Vest */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-xl aspect-[4/5] max-h-[440px] w-full max-w-[360px] sm:max-w-[380px] border border-slate-100 group">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1200&q=80"
                  alt="UK and Ireland Facilities Services Award Winner"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: NEW ZEALAND FACILITIES SERVICES AWARDS (Screenshot 4)          */}
      {/* ========================================================================= */}
      <section className="py-4 sm:py-6 container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Airport Runway / Aviation Jet at Sunset */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-xl h-[260px] sm:h-[300px] lg:h-[340px] w-full border border-slate-100 group">
              <img
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80"
                alt="New Zealand Airport Facilities Services at Sunset"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Right Column: Narrative Copy & Accolade List */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-brand-navy tracking-tight leading-tight">
              New Zealand facilities services awards
            </h2>

            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              <p>
                Our team in New Zealand has been distinguished with the 2019 New Zealand CFO Awards for the Financial Innovation Project of the Year, underscoring our innovative approach to financial management. The 2019 Air Transport Awards also recognised us as the Best Airport Facilities Management Company, highlighting our excellence in enhancing the aviation sector’s infrastructure and services. These awards reflect our team’s expertise in integrating financial innovation with superior facilities management to deliver exceptional service across various sectors in New Zealand.
              </p>
            </div>

            {/* Accolades List */}
            <div className="pt-2 space-y-3">
              <div className="flex items-center space-x-3 text-sm text-slate-800 font-medium">
                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#FF5722] to-[#D8232A] text-white flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span>2019 CFO Awards – Financial Innovation Project of the Year Award</span>
              </div>

              <div className="flex items-center space-x-3 text-sm text-slate-800 font-medium">
                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#FF5722] to-[#D8232A] text-white flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span>2019 Air Transport Awards – Best Airport Facilities Management Company</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5: INDIA'S FACILITIES SERVICES AWARDS (Screenshot 5)              */}
      {/* ========================================================================= */}
      <section className="py-4 sm:py-6 bg-transparent border-y border-slate-100">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Narrative Copy & Multiple Accolades */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-brand-navy tracking-tight leading-tight">
                India's facilities services awards and recognition
              </h2>

              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                <p>
                  Our team in India has received multiple awards, including service and maintenance at data centres, technological innovation, transformative technology, contributions during the COVID-19 pandemic, and innovation in intellectual property, affirming our leadership in facilities, services and technology.
                </p>
              </div>

              {/* 5 India Accolades */}
              <div className="pt-2 space-y-3">
                <div className="flex items-start space-x-3 text-sm text-slate-800 font-medium">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#FF5722] to-[#D8232A] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span>2021 Seven Hills COVID Hospital – COVID Warriors Award</span>
                </div>

                <div className="flex items-start space-x-3 text-sm text-slate-800 font-medium">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#FF5722] to-[#D8232A] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span>2021 Mumbai Cloud & Data Convention – Datacentre Service & Maintenance Award</span>
                </div>

                <div className="flex items-start space-x-3 text-sm text-slate-800 font-medium">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#FF5722] to-[#D8232A] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span>2021 CXO Virtual Tech Summit & Awards – CXO Innovation Award</span>
                </div>

                <div className="flex items-start space-x-3 text-sm text-slate-800 font-medium">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#FF5722] to-[#D8232A] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span>2021 Catalyst Company Awards | FITS Asia – Transformative Technology Company Award</span>
                </div>

                <div className="flex items-start space-x-3 text-sm text-slate-800 font-medium">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#FF5722] to-[#D8232A] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span>2021 Express Computer Awards – Innovation/IP Creation Category Award</span>
                </div>
              </div>
            </div>

            {/* Right Column: High-tech Data Centre Server Corridor */}
            <div className="lg:col-span-5">
              <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-xl h-[260px] sm:h-[300px] lg:h-[340px] w-full border border-slate-100 group">
                <img
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80"
                  alt="NEXAAGEN Award-Winning Data Centre Operations in India"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 6: THAILAND'S FACILITIES SERVICES AWARDS (Screenshot 6)           */}
      {/* ========================================================================= */}
      <section className="py-4 sm:py-6 container-custom">
        {/* Soft Container Card */}
        <div className="bg-[#FAF8F5] rounded-3xl p-5 sm:p-7 lg:p-8 border border-slate-100/80 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Thai Schoolgirl at Desk */}
            <div className="lg:col-span-5 flex justify-center lg:justify-start">
              <div className="relative rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-lg aspect-[4/5] max-h-[440px] w-full max-w-[360px] sm:max-w-[380px] border border-slate-100 bg-white group">
                <img
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=80"
                  alt="CSR Educational and School Support in Thailand"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Right Column: Narrative Copy & Accolade List */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-brand-navy tracking-tight leading-tight">
                Thailand’s facilities services awards and recognition
              </h2>

              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                <p>
                  In Thailand, our commitment to sustainability, diversity, and inclusion has been distinguished by the AMCHAM, with our team being a finalist for the CSR Excellence Special Award and receiving the CSR Excellence Recognition Award at the Bronze level, alongside a previous year’s recognition for our CSR efforts.
                </p>
              </div>

              {/* Accolades List */}
              <div className="pt-2 space-y-3">
                <div className="flex items-start space-x-3 text-sm text-slate-800 font-medium">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#FF5722] to-[#D8232A] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span>2021 AMCHAM CSR Excellence Special Award Finalist for Sustainability, Diversity and Inclusion</span>
                </div>

                <div className="flex items-start space-x-3 text-sm text-slate-800 font-medium">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#FF5722] to-[#D8232A] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span>2021 AMCHAM CSR Excellence Recognition Award, Bronze Level</span>
                </div>

                <div className="flex items-start space-x-3 text-sm text-slate-800 font-medium">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#FF5722] to-[#D8232A] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span>2020 AMCHAM CSR Excellence Recognition Award</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 7: UNITED ARAB EMIRATES FACILITIES SERVICES AWARDS (Screenshot 7) */}
      {/* ========================================================================= */}
      <section className="py-4 sm:py-6 container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Narrative Copy & Accolade List */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-brand-navy tracking-tight leading-tight">
              United Arab Emirates facilities services awards
            </h2>

            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              <p>
                In the UAE, our holistic approach to workplace safety, health, and corporate social responsibility has been officially recognised by the Royal Society for the Prevention of Accidents (RoSPA), a leading safety organisation.
              </p>

              <p>
                Being awarded the 2021 RoSPA Silver Award is a testament to our stringent adherence to safety protocols and our ongoing commitment to CSR initiatives. This accolade from a respected governing body in safety underlines our dedication to meeting international standards for our team’s well-being and community engagement efforts.
              </p>
            </div>

            {/* Accolade */}
            <div className="pt-2">
              <div className="flex items-center space-x-3 text-sm text-slate-800 font-medium">
                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#FF5722] to-[#D8232A] text-white flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span>2021 RoSPA Silver Award</span>
              </div>
            </div>
          </div>

          {/* Right Column: UAE Modern Cityscape with Supertall Towers at Sunset */}
          <div className="lg:col-span-5">
            <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-xl h-[260px] sm:h-[300px] lg:h-[340px] w-full border border-slate-100 group">
              <img
                src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80"
                alt="NEXAAGEN Award-Winning Facilities Services Across UAE and Dubai"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 8: CONNECT WITH YOUR NEXAAGEN TEAM BANNER (Screenshot 8)          */}
      {/* ========================================================================= */}
      <section className="py-3 sm:py-5 container-custom">
        <div className="relative rounded-3xl bg-[#0A192F] p-6 sm:p-8 lg:p-10 text-white text-center overflow-hidden shadow-2xl space-y-6">
          {/* Subtle Dot Matrix Graphic on the Left */}
          <div
            className="absolute left-0 top-0 bottom-0 w-1/3 opacity-25 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(#FFFFFF 1.2px, transparent 1.2px)',
              backgroundSize: '16px 16px'
            }}
          />

          <div className="relative z-10 max-w-3xl mx-auto space-y-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-brand-navy tracking-tight leading-tight">
              Connect with your NEXAAGEN team
            </h2>
            <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed font-normal text-justify-center">
              We're ready to deliver the best experiences, productivity, practices, resilience and outcomes and we look forward to connecting with you and your team.
            </p>
            <div className="pt-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-heading font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:shadow-lg hover:shadow-orange-500/30 hover:scale-105 transition-all duration-300"
              >
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 9: LATEST NEWS AND MEDIA (Screenshot 9)                           */}
      {/* ========================================================================= */}
      <section className="py-4 sm:py-6 container-custom">
        {/* Section Heading & CTA */}
        <div className="text-center space-y-4 mb-4 sm:mb-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-brand-navy tracking-tight leading-tight">
            Latest news and media
          </h2>
          <p className="text-slate-500 text-sm sm:text-base font-normal">
            The latest insights and updates from the team at NEXAAGEN.
          </p>
          <div className="pt-2">
            <Link
              to="/news"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-heading font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:shadow-lg hover:shadow-orange-500/25 hover:scale-105 transition-all duration-300"
            >
              <span>See All News & Media</span>
            </Link>
          </div>
        </div>

        {/* 4 Cards in 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {newsItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedArticle(item)}
              className="bg-white rounded-3xl border border-slate-100 hover:border-orange-200 overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer group"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-[#EA580C] uppercase tracking-wider shadow-sm">
                  {item.tag}
                </div>
              </div>

              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2.5">
                  <h3 className="text-base sm:text-lg font-heading font-bold text-slate-900 group-hover:text-[#FF5722] transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 line-clamp-2 leading-relaxed">
                    {item.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 rounded-full bg-slate-100 text-[#0A192F] font-bold text-[10px] flex items-center justify-center">
                      N
                    </div>
                    <span className="font-medium text-slate-600">{item.author}</span>
                  </div>
                  <span>{item.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* ARTICLE PREVIEW MODAL                                                     */}
      {/* ========================================================================= */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-100 flex flex-col">
            <div className="relative aspect-[16/9] w-full">
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 backdrop-blur text-slate-700 hover:text-black flex items-center justify-center transition-colors shadow-md"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-4">
              <span className="text-xs font-bold text-[#EA580C] uppercase tracking-wider block">
                {selectedArticle.tag}
              </span>

              <h2 className="text-xl sm:text-2xl font-heading font-bold text-slate-900 leading-snug">
                {selectedArticle.title}
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {selectedArticle.excerpt}
              </p>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="px-5 py-2 rounded-full text-xs font-semibold text-slate-600 hover:bg-slate-100 border border-slate-200 transition-colors"
                >
                  Close
                </button>
                <Link
                  to="/news"
                  onClick={() => setSelectedArticle(null)}
                  className="text-xs font-bold text-[#FF5722] hover:underline inline-flex items-center gap-1"
                >
                  <span>Explore More News & Media</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

