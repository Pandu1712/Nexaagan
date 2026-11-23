import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Eye,
  Target,
  Sparkles,
  ShieldCheck,
  Zap,
  CheckCircle2,
  ArrowRight,
  Building2,
  Heart,
  Quote,
  MapPin,
  Search,
  ExternalLink,
  ChevronRight,
  TrendingUp,
  Award,
  Users
} from 'lucide-react';
import Breadcrumbs from '../components/layout/Breadcrumbs';
import aviationServicesImg from '../assets/news/aviation-global-services.jpg';

export default function VisionMission() {
  const [selectedStory, setSelectedStory] = useState(null);

  const customerStories = [
    {
      id: 'story-1',
      tags: 'Biopharmaceutical • Healthcare',
      title: 'Best practices and resilience – Adherence to ISO 10,000 Grade 8 for Biopharma customer',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
      excerpt: 'Delivering spotless sterile cleanroom environments, strict HVAC air handling, and microscopic particulate decontamination for critical vaccine manufacturing.',
      fullContent: 'Our specialized life sciences team implemented rigorous ISO 14644 and Grade 8 cleanroom sanitation protocols for a global biopharmaceutical manufacturer. With zero downtime and 100% audit pass rates across 18 consecutive regulatory cycles, we ensured life-saving therapies reached patients without delay.'
    },
    {
      id: 'story-2',
      tags: 'Corporate • Technology',
      title: 'Safeguarding our customers site and technology with guarding and cyber security.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
      excerpt: 'Unified physical guarding, biometric perimeter control, and digital asset defense for a Tier-4 hyperscale technology campus.',
      fullContent: 'By harmonizing physical manned guarding with NEXA-Live AI video analytics and automated access credentials, NEXAAGEN protects critical server halls housing mission-critical cloud infrastructure, delivering 99.999% uptime assurance.'
    },
    {
      id: 'story-3',
      tags: 'Security',
      title: 'Women in security and tackling gender disparity in a rapidly-evolving world.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
      excerpt: 'Championing female leadership and technical accreditation across corporate surveillance, control rooms, and physical security.',
      fullContent: 'Through the NEXAAGEN Women in Security initiative, we have achieved a 38% female frontline security leadership ratio across corporate headquarters. Comprehensive de-escalation, control room telemetry, and conflict resolution training empower colleagues to thrive.'
    },
    {
      id: 'story-4',
      tags: 'Government • Public Sector FM',
      title: 'Facilities Management teams rapid response to protect our customers’ premises',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
      excerpt: 'Emergency HVAC repair, flood mitigation, and uninterrupted service continuity across critical public sector administrative hubs.',
      fullContent: 'When severe monsoonal flooding threatened key regional government archives, our mobile rapid-response engineering corps mobilized within 45 minutes, deploying high-capacity submersible pumps and temporary generators to safeguard vital civil records.'
    },
    {
      id: 'story-5',
      tags: 'Sustainability • ESG',
      title: 'Improving sustainability at corporate business parks by focusing on CO2 reduction',
      image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80',
      excerpt: 'Achieving a 34% energy reduction through building management system optimization, rooftop solar installations, and EV fleet charging.',
      fullContent: 'NEXAAGEN partnered with commercial park landlords to audit baseline power draw, recalibrate chilled water loops, install intelligent LED daylight harvesting sensors, and eliminate 1,200 metric tonnes of annual CO2 emissions.'
    },
    {
      id: 'story-6',
      tags: 'Catering & Hospitality',
      title: 'Healthcare food transformation that’s having a positive environmental impact in the community',
      image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80',
      excerpt: 'Nutritious farm-to-fork patient meals, zero food-waste composting, and seasonal local sourcing across premier hospital trusts.',
      fullContent: 'Serving over 8,000 daily patient and staff meals, our nutritionists and culinary teams replaced single-use plastics with compostable sugarcane packaging and redirected 100% of organic food waste to local community agricultural composters.'
    }
  ];

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
          { label: 'Vision & Mission' }
        ]}
      />

      {/* ========================================================================= */}
      {/* SECTION 1: HERO - VISION & MISSION (Screenshot 1)                         */}
      {/* ========================================================================= */}
      <section className="relative pt-4 pb-3 sm:pt-6 sm:pb-4 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FDFBF9] via-[#FAF7F2] to-white overflow-hidden">
        {/* Curved Warm Coral/Orange Dot Watermark */}
        <div
          className="absolute inset-0 opacity-[0.25] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(#EA580C 1.1px, transparent 1.1px)',
            backgroundSize: '24px 24px'
          }}
        />

        <div className="relative max-w-4xl mx-auto text-center space-y-5">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-brand-navy tracking-tight leading-tight">
            Vision & Mission
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto font-normal text-justify-center">
            Nexaagen Integrated Facility Management Services Private Limited is proposed as a multi-sector facility management and engineering services company dedicated to delivering safe, efficient, and dependable operations.
          </p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: VISION - BECOMING THE BEST (Screenshot 2)                      */}
      {/* ========================================================================= */}
      <section className="py-4 sm:py-6 container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Group CEO Portrait */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-xl aspect-[4/5] max-h-[440px] w-full max-w-[360px] sm:max-w-[380px] border border-slate-100 group">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80"
                alt="NEXAAGEN Group CEO"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Right Column: Vision Copy & Sign-off */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-brand-navy tracking-tight leading-tight">
              Vision: To become a trusted integrated partner <br className="hidden sm:inline" />
              across key industry sectors
            </h2>

            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              <p>
                At <span className="font-semibold text-slate-800">Nexaagen Integrated Facility Management Services Private Limited</span>, our vision is to become a trusted integrated facility management and engineering services partner across key industry sectors. We combine specialized domain expertise, proactive management, and disciplined operations to elevate our clients' environments.
              </p>
              <div className="space-y-2.5 pt-2">
                {[
                  "Integrated management of facility operations, upkeep and support services",
                  "Specialised solutions for pharmaceutical, healthcare, hospitality, industrial and commercial facilities",
                  "Housekeeping, hygiene, technical maintenance and engineering coordination",
                  "Consultancy, project management and operational improvement support"
                ].map((bullet, idx) => (
                  <div key={idx} className="flex items-start space-x-3 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base">{bullet}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 space-y-2 border-t border-slate-100">
              <h4 className="text-base font-heading font-bold text-slate-900">
                Rob Legge, Group CEO
              </h4>
              {/* Stylized Script Signature */}
              <div className="text-2xl font-serif italic text-slate-500 tracking-wider font-light">
                Rob Legge
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: MISSION - MAKE PEOPLE AND PLACES THE BEST (Screenshot 3)        */}
      {/* ========================================================================= */}
      <section className="py-4 sm:py-6 bg-slate-50/70 border-y border-slate-100">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Narrative Copy */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-brand-navy tracking-tight leading-tight">
                Mission: Delivering safe, efficient and dependable <br className="hidden sm:inline" />
                facility operations across sectors
              </h2>

              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                <p>
                  At <span className="font-semibold text-slate-800">Nexaagen Integrated Facility Management Services Private Limited</span>, we are dedicated to delivering safe, efficient, and dependable facility operations through skilled teams, structured processes, and responsive management.
                </p>

                <p>
                  We aim to achieve our mission by delivering exceptional facilities and engineering services that consistently address the details, overcome operational challenges, and create safe, resilient, high-productivity environments for all our clients and stakeholders.
                </p>
              </div>
            </div>

            {/* Right Column: Frontline Colleague Photo */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-xl aspect-[4/5] max-h-[440px] w-full max-w-[360px] sm:max-w-[380px] border border-slate-100 group">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80"
                  alt="NEXAAGEN Frontline Colleague delivering excellence"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: BEST STRATEGY MISSION FUEL (Screenshot 4)                      */}
      {/* ========================================================================= */}
      <section className="py-3 sm:py-5 container-custom">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl min-h-[280px] sm:min-h-[320px] flex items-center p-6 sm:p-8 lg:p-10">
          {/* Background: Wind Turbines and Solar Farm at sunset */}
          <img
            src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1800&q=85"
            alt="Wind turbines and solar farm at sunset"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/65 backdrop-brightness-90" />

          {/* Dot Matrix Graphic on the Left */}
          <div
            className="absolute left-0 top-0 bottom-0 w-1/3 opacity-30 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(#FFFFFF 1.5px, transparent 1.5px)',
              backgroundSize: '18px 18px'
            }}
          />

          <div className="relative z-10 max-w-2xl text-white space-y-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-brand-navy tracking-tight leading-tight">
              Best Strategy Mission Fuel
            </h2>
            <p className="text-slate-200 text-sm sm:text-base lg:text-lg leading-relaxed font-normal">
              Our mission’s <span className="font-bold text-white">BEST strategy and ethos</span> addresses five critical areas of concern that industry leaders highlight in reference to facilities management and services: <span className="text-[#FF5722] font-semibold">Experience, Productivity, Practices, Resilience, and Outcomes</span>.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5: BEST EXPERIENCES (Screenshot 5)                                */}
      {/* ========================================================================= */}
      <section className="py-4 sm:py-6 container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Young Woman with Salad Photo */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-xl aspect-[4/5] max-h-[440px] w-full max-w-[360px] sm:max-w-[380px] border border-slate-100 group">
              <img
                src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1200&q=80"
                alt="Positive workplace dining and hospitality experience"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Right Column: Best Experiences Copy */}
          <div className="lg:col-span-7 space-y-5">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-brand-navy tracking-tight leading-tight">
              Best Experiences
            </h2>

            <p className="text-base sm:text-lg font-medium text-slate-800 leading-snug">
              <span className="font-bold text-slate-900">Best Experiences</span> come from consistently delivered details to enable a positive and memorable lasting impression.
            </p>

            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              <p>
                Focusing on the details that make a place more than just a physical location, we aim to foster a sense of belonging and satisfaction, ensuring that each interaction within these environments is as rewarding and positive as possible.
              </p>
              <p>
                It’s about creating a positive and welcoming environment for everyone interacting within those spaces – from visitors to colleagues. We aim to deliver the best experience every time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 6: BEST PRODUCTIVITY (Screenshot 6)                               */}
      {/* ========================================================================= */}
      <section className="py-4 sm:py-6 bg-slate-50/70 border-y border-slate-100">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Best Productivity Copy */}
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-brand-navy tracking-tight leading-tight">
                Best Productivity
              </h2>

              <p className="text-base sm:text-lg font-medium text-slate-800 leading-snug">
                <span className="font-bold text-slate-900">Best Productivity</span> maintains output through diligent service, advanced technology, and a maintained plan for continuity.
              </p>

              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                <p>
                  Advanced productivity benefits colleagues, customers and communities, never more so than through harnessed technology. The <span className="font-semibold text-slate-900">NEXAAGEN Advance</span> suite of apps and tools ensures effective and streamlined task and project completion, enhanced operations, reporting and customer communication.
                </p>
                <p>
                  Investment in innovation demonstrates our steadfast commitment to achieving high-level productivity across all contracts, consistently meeting and exceeding customer expectations across the diverse facilities services we provide.
                </p>
              </div>
            </div>

            {/* Right Column: Robotics & Tech Photo */}
            <div className="lg:col-span-5">
              <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-xl h-[260px] sm:h-[300px] lg:h-[340px] w-full border border-slate-100 group">
                <img
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80"
                  alt="Advanced productivity and engineering innovation"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 7: BEST PRACTICES (Screenshot 7)                                  */}
      {/* ========================================================================= */}
      <section className="py-4 sm:py-6 container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: High-Altitude Rope-Access Window Cleaner Photo */}
          <div className="lg:col-span-5">
            <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-xl h-[260px] sm:h-[300px] lg:h-[340px] w-full border border-slate-100 group">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80"
                alt="Rope access specialist demonstrating rigorous safety best practices"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Right Column: Best Practices Copy */}
          <div className="lg:col-span-7 space-y-5">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-brand-navy tracking-tight leading-tight">
              Best Practices
            </h2>

            <p className="text-base sm:text-lg font-medium text-slate-800 leading-snug">
              <span className="font-bold text-slate-900">Best Practices</span> are built on a foundation of good governance and over a century of experience, training, and innovation.
            </p>

            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              <p>
                Best Practices are rooted in a ‘safety-first’ approach, adhering to our Code of Conduct and Global Quality, Health, Safety, and Environment (QHSE) policies. This commitment ensures compliance and excellence in practice standards and prioritises colleague and customer wellbeing.
              </p>
              <p>
                By embedding these values in all projects, focusing on safety, quality, and ethics, we are able to provide consistent and continued services that benefit our customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 8: BEST RESILIENCE (Screenshot 8)                                 */}
      {/* ========================================================================= */}
      <section className="py-4 sm:py-6 bg-slate-50/70 border-y border-slate-100">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Best Resilience Copy */}
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-brand-navy tracking-tight leading-tight">
                Best Resilience
              </h2>

              <p className="text-base sm:text-lg font-medium text-slate-800 leading-snug">
                <span className="font-bold text-slate-900">Best Resilience</span> happens with foresight, experience, preparation, and proactivity to ensure continuity for your operation.
              </p>

              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                <p>
                  Our teams stand with you, side by side, through every challenge, prioritising operational continuity for your colleagues, customers, visitors and guests.
                </p>
                <p>
                  Resilience in your daily operations means ensuring continuity, whether facing challenges as significant as a pandemic or managing smaller issues that can cumulatively disrupt services.
                </p>
                <p>
                  Our NEXAAGEN team are prepared, planning preventative measures to maintain robust and responsive operations, reflecting our commitment and understanding that unforeseen events can happen.
                </p>
              </div>
            </div>

            {/* Right Column: Professional Woman Outdoors Photo */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-xl aspect-[4/5] max-h-[440px] w-full max-w-[360px] sm:max-w-[380px] border border-slate-100 group">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80"
                  alt="Operational resilience and foresight in action"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 9: BEST OUTCOMES (Screenshot 9)                                   */}
      {/* ========================================================================= */}
      <section className="py-4 sm:py-6 container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Children & Teacher High-Five Photo */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-xl aspect-[4/5] max-h-[440px] w-full max-w-[360px] sm:max-w-[380px] border border-slate-100 group">
              <img
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80"
                alt="Positive community outcomes and thriving learning environments"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Right Column: Best Outcomes Copy & CTA */}
          <div className="lg:col-span-7 space-y-5">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-brand-navy tracking-tight leading-tight">
              Best Outcomes
            </h2>

            <p className="text-base sm:text-lg font-medium text-slate-800 leading-snug">
              <span className="font-bold text-slate-900">Best Outcomes</span> is our collective goal, where every colleague, customer and community thrive and is enabled to be their best.
            </p>

            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              <p>
                Supporting the day-to-day achievement and purpose of others for lasting impact and positive outcomes for everyone.
              </p>
              <p>
                Through the delivery of exceptional facilities services, we help our customers achieve outcomes that matter to their people and their organisations.
              </p>
              <p>
                We help build resilience, optimise productivity and implement best practices that have been evolved and refined over decades – working with you to produce meaningful, measurable outcomes that deliver on KPIs and positively impact your people, places and communities.
              </p>
            </div>

            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-heading font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300"
              >
                <span>Read More on Group CEO’s Best Approach</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 10: EXECUTIVE QUOTE WITH HEALTHCARE HAND-WASHING PHOTO (Image 10)  */}
      {/* ========================================================================= */}
      <section className="py-3 sm:py-5 container-custom">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl min-h-[320px] sm:min-h-[360px] flex items-center p-5 sm:p-8 lg:p-10">
          {/* Background: Healthcare Hand Hygiene Photo */}
          <img
            src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1800&q=85"
            alt="Healthcare clinical handwashing and clinical outcomes"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/40 backdrop-brightness-95 pointer-events-none" />

          {/* Floating White Quote Card on Left */}
          <div className="relative z-10 max-w-xl bg-white/95 backdrop-blur-md rounded-3xl p-5 sm:p-8 shadow-2xl border border-white/40 space-y-4">
            <Quote className="w-8 h-8 text-[#FF5722] opacity-80" />

            <p className="text-slate-800 text-sm sm:text-base lg:text-lg leading-relaxed font-normal">
              “We’re in the business of outcomes, and the services we provide help deliver the best outcomes for people. That’s our purpose. We make people and places the best they can be, and we do it because we want the people in those places to thrive.”
            </p>

            <div className="flex items-center space-x-3.5 pt-2 border-t border-slate-100">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80"
                alt="Rob Legge"
                className="w-12 h-12 rounded-full object-cover border-2 border-[#FF5722]"
              />
              <div>
                <h4 className="text-sm font-heading font-bold text-slate-900">
                  Rob Legge
                </h4>
                <p className="text-xs text-slate-500 font-medium">
                  Group CEO, NEXAAGEN
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTIONS 11 & 12: VISION, MISSION AND PURPOSE (Screenshots 11 & 12)       */}
      {/* ========================================================================= */}
      <section className="py-4 sm:py-6 container-custom">
        {/* Header */}
        <div className="text-center space-y-3 mb-4 sm:mb-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-brand-navy tracking-tight leading-tight">
            Vision, mission and purpose
          </h2>
          <p className="text-slate-500 text-sm sm:text-base font-normal">
            Learn more about our work towards the mission.
          </p>
        </div>

        {/* 6 Story Cards in 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {customerStories.map((story) => (
            <div
              key={story.id}
              onClick={() => setSelectedStory(story)}
              className="bg-white rounded-3xl border border-slate-100 hover:border-orange-200 overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer group"
            >
              <div>
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-6 space-y-3">
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                    {story.tags}
                  </span>
                  <h3 className="text-base sm:text-lg font-heading font-bold text-slate-900 group-hover:text-[#FF5722] transition-colors line-clamp-2">
                    {story.title}
                  </h3>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2">
                <span className="text-xs font-semibold text-[#EA580C] underline decoration-[#EA580C]/40 underline-offset-4 group-hover:decoration-[#EA580C] inline-flex items-center gap-1">
                  Read their story
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 13: TWO DARK NAVY NAVIGATION CARDS (Screenshot 13)                */}
      {/* ========================================================================= */}
      <section className="py-3 sm:py-5 container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {/* Card 1: Search by Sector */}
          <div className="relative rounded-3xl overflow-hidden bg-[#0A192F] text-white p-6 sm:p-8 text-center shadow-xl flex flex-col justify-between space-y-4">
            <div
              className="absolute inset-0 opacity-20 pointer-events-none"
              style={{
                backgroundImage: 'radial-gradient(#60A5FA 1.2px, transparent 1.2px)',
                backgroundSize: '20px 20px'
              }}
            />

            <div className="relative z-10 space-y-3">
              <h3 className="text-xl sm:text-2xl font-heading font-bold tracking-tight">
                Search by Sector
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
                Find your industry and learn more about our sector-specific services to overcome your daily challenges.
              </p>
            </div>

            <div className="relative z-10 pt-2">
              <Link
                to="/sectors"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full font-heading font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:shadow-lg hover:shadow-orange-500/30 hover:scale-105 transition-all duration-300"
              >
                <span>Search Sectors</span>
              </Link>
            </div>
          </div>

          {/* Card 2: Find Your Location */}
          <div className="relative rounded-3xl overflow-hidden bg-[#0A192F] text-white p-6 sm:p-8 text-center shadow-xl flex flex-col justify-between space-y-4">
            <div
              className="absolute inset-0 opacity-20 pointer-events-none"
              style={{
                backgroundImage: 'radial-gradient(#60A5FA 1.2px, transparent 1.2px)',
                backgroundSize: '20px 20px'
              }}
            />

            <div className="relative z-10 space-y-3">
              <h3 className="text-xl sm:text-2xl font-heading font-bold tracking-tight">
                Find Your Location
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
                Locate your country-specific website for regional information, news, updates, careers and insights.
              </p>
            </div>

            <div className="relative z-10 pt-2">
              <Link
                to="/a-z-of-spaces-and-places"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full font-heading font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:shadow-lg hover:shadow-orange-500/30 hover:scale-105 transition-all duration-300"
              >
                <span>Search Locations</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 14: NEXAAGEN INSIGHTS, NEWS AND UPDATES (Screenshot 14)           */}
      {/* ========================================================================= */}
      <section className="py-4 sm:py-6 container-custom">
        {/* Header with CTA Button */}
        <div className="text-center space-y-4 mb-4 sm:mb-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-brand-navy tracking-tight leading-tight">
            NEXAAGEN insights, news and updates
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
              className="bg-white rounded-3xl border border-slate-100 hover:border-orange-200 overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-xl transition-all duration-300 flex flex-col group"
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

      {/* STORY DETAIL MODAL */}
      {selectedStory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-100 flex flex-col">
            <div className="relative aspect-[16/9] w-full">
              <img
                src={selectedStory.image}
                alt={selectedStory.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedStory(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 backdrop-blur text-slate-700 hover:text-black flex items-center justify-center transition-colors shadow-md"
              >
                ✕
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-4">
              <span className="text-xs font-bold text-[#EA580C] uppercase tracking-wider block">
                {selectedStory.tags}
              </span>

              <h2 className="text-xl sm:text-2xl font-heading font-bold text-slate-900 leading-snug">
                {selectedStory.title}
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {selectedStory.fullContent}
              </p>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => setSelectedStory(null)}
                  className="px-5 py-2 rounded-full text-xs font-semibold text-slate-600 hover:bg-slate-100 border border-slate-200 transition-colors"
                >
                  Close
                </button>
                <Link
                  to="/services"
                  onClick={() => setSelectedStory(null)}
                  className="text-xs font-bold text-[#FF5722] hover:underline inline-flex items-center gap-1"
                >
                  <span>Explore Facilities Services</span>
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
