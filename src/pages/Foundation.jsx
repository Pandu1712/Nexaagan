import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Heart,
  Users,
  Target,
  Clock,
  Coins,
  TrendingUp,
  Globe2,
  Building2,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  Quote,
  Calendar,
  MapPin,
  Award,
  Sparkles,
  Briefcase,
  GraduationCap,
  Leaf,
  X
} from 'lucide-react';
import Breadcrumbs from '../components/layout/Breadcrumbs';

export default function Foundation() {
  const location = useLocation();
  const [selectedArticle, setSelectedArticle] = useState(null);

  // Dynamic breadcrumb depending on whether accessed via About Us or ESG
  const isFromAbout = location.pathname.startsWith('/about') || !location.pathname.startsWith('/esg');
  const breadcrumbItems = isFromAbout
    ? [
      { label: 'About Us', link: '/about' },
      { label: 'NEXAAGEN Foundation' }
    ]
    : [
      { label: 'ESG', link: '/esg' },
      { label: 'NEXAAGEN Foundation' }
    ];

  const stats = [
    {
      icon: Target,
      value: '180+',
      label: 'People placed into sustainable work',
      desc: 'Overcoming significant social and economic barriers to gain long-term, meaningful employment.'
    },
    {
      icon: Clock,
      value: '5,000hrs',
      label: 'Coaching, mentoring and support given',
      desc: 'One-on-one mentorship, career readiness, and vocational guidance delivered by NEXAAGEN colleagues.'
    },
    {
      icon: Coins,
      value: '£100k+',
      subValue: '₹1.1Cr+ equivalent',
      label: 'Donated or raised by NEXAAGEN and colleagues',
      desc: 'Direct fundraising, community matching initiatives, and grant disbursements to frontline partners.'
    },
    {
      icon: TrendingUp,
      value: '£3m',
      subValue: '₹32Cr+ equivalent',
      label: 'Proxy social impact and legacy value',
      desc: 'Quantified social return on investment (SROI) created across communities and local economies.'
    }
  ];

  const newsArticles = [
    {
      id: 'news-1',
      category: 'Social Value',
      title: 'NEXAAGEN receives social value commendation at ERSA Employability Awards',
      excerpt: 'NEXAAGEN was honoured to receive top commendations for its transformative People into Work initiative, recognizing frontline placement excellence.',
      author: 'DE&I Team',
      date: '28 Nov, 2026',
      image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80',
      fullContent: 'The Employment Related Services Association (ERSA) recognized the NEXAAGEN Foundation for its pioneering partnership framework with local employment councils and charities, helping individuals facing acute barriers achieve long-term financial independence and career mobility.'
    },
    {
      id: 'news-2',
      category: 'Social Value',
      title: 'NEXAAGEN Community: College student set to soar with life-changing grant',
      excerpt: 'A passionate college student from an underprivileged rural area has been awarded the NEXAAGEN Foundation scholarship to complete sustainable facilities management training.',
      author: 'NEXAAGEN Foundation',
      date: '17 Nov, 2026',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
      fullContent: 'Through the NEXAAGEN Foundation Youth Education Fund, scholarships, living stipends, and dedicated industry mentors were provided to technical students, creating accessible paths into modern facilities engineering and smart building operations.'
    },
    {
      id: 'news-3',
      category: 'Social Value',
      title: 'NEXAAGEN Foundation: People into Work programme expands to new regional hubs',
      excerpt: 'People into Work is a unique community initiative providing training, paid internships, and wraparound support for marginalized jobseekers.',
      author: 'NEXAAGEN Foundation',
      date: '15 Nov, 2026',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
      fullContent: 'Our signature People into Work framework addresses the root causes of systemic underemployment. By offering guaranteed living wage contracts, personalized life-skills mentoring, and childcare transit vouchers, we ensure new joiners thrive permanently.'
    },
    {
      id: 'news-4',
      category: 'Social Value',
      title: 'NEXAAGEN welcomes Global Director of ESG & Social Responsibility',
      excerpt: 'Appointed to accelerate our international decarbonisation and community legacy programmes across all operating territories.',
      author: 'ESG Team',
      date: '25 Oct, 2026',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
      fullContent: 'With over two decades of experience leading corporate social value and Net Zero operations, our new Director of ESG will steer the Foundation’s global initiatives toward deeper community impact and measurable SROI metrics.'
    }
  ];

  return (
    <div className="w-full flex flex-col flex-1 bg-transparent text-slate-900 font-sans overflow-hidden">
      {/* Dynamic Breadcrumbs */}
      <Breadcrumbs items={breadcrumbItems} />

      {/* ========================================================================= */}
      {/* SECTION 1: HERO - NEXAAGEN FOUNDATION A FORCE FOR GOOD (Screenshot 1)     */}
      {/* ========================================================================= */}
      <section className="relative pt-4 pb-3 sm:pt-6 sm:pb-4 px-4 sm:px-6 lg:px-8 bg-[#F3F8F5] overflow-hidden">
        {/* Curved Green Dot Pattern Watermark matching reference */}
        <div
          className="absolute inset-0 opacity-[0.25] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(#059669 1.1px, transparent 1.1px)',
            backgroundSize: '24px 24px'
          }}
        />

        <div className="relative max-w-4xl mx-auto text-center space-y-3">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-brand-navy tracking-tight leading-tight">
            NEXAAGEN Foundation – a force for good
          </h1>

          <p className="text-slate-600 text-xs sm:text-sm lg:text-base leading-relaxed max-w-3xl mx-auto font-normal">
            Making people and places the best they can be, driven by our six (best) foundational pillars and supported through the impactful work and legacy of the NEXAAGEN Foundation.
          </p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: ABOUT THE NEXAAGEN FOUNDATION (Screenshot 2)                    */}
      {/* ========================================================================= */}
      <section className="py-4 sm:py-6 container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Community Volunteering Photo */}
          <div className="lg:col-span-6">
            <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-xl aspect-[4/3] lg:aspect-[5/4] border border-slate-100 group">
              <img
                src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1200&q=80"
                alt="Volunteers and colleagues working together in community garden"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Right Column: Narrative Copy */}
          <div className="lg:col-span-6 space-y-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-brand-navy tracking-tight leading-tight">
              About the NEXAAGEN Foundation
            </h2>

            <div className="space-y-4 text-slate-600 text-xs sm:text-sm lg:text-[15px] leading-relaxed font-normal">
              <p>
                The NEXAAGEN Foundation tackles some of the causes and effects of poverty in society by developing the capacity and skills of socially and economically disadvantaged members of communities and protecting and improving the environment in which they live. We do this by investing in partnerships with organisations that share our vision and passion to deliver initiatives and research that influence public policy and practice.
              </p>

              <p>
                The NEXAAGEN Foundation is integral to our ethos and is crucial in realising our Environmental, Social, and Governance (ESG) goals. The Foundation’s work goes beyond just supporting NEXAAGEN’s objectives: it has a direct, positive impact on communities. By tackling challenges like employment barriers and poverty, the Foundation helps deliver sustainable and lasting outcomes, aligning with our core mission of making people and places the best they can be.
              </p>

              <p>
                One of our core programmes, <Link to="/people-into-work" className="font-semibold text-slate-900 hover:text-[#FF5722] underline decoration-[#FF5722]/40 underline-offset-2 transition-colors">People into Work</Link>, provides positive outcomes for people with significant barriers to entering and succeeding in the workplace.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: NEXAAGEN FOUNDATION'S IMPACT - TO DATE (Screenshot 3)           */}
      {/* ========================================================================= */}
      <section className="py-4 sm:py-6 bg-slate-50/70 border-y border-slate-100">
        <div className="container-custom">
          {/* Header */}
          <div className="text-center space-y-2 mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-brand-navy tracking-tight leading-tight">
              NEXAAGEN Foundation’s impact – to date
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm font-normal">
              Whilst our mission continues we monitor and measure to ensure impact and legacy.
            </p>
          </div>

          {/* 4 Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-7 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-full bg-orange-100/80 text-[#FF5722] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>

                    <div>
                      <div className="text-3xl sm:text-4xl font-heading font-bold text-[#1E293B] tracking-tight">
                        {stat.value}
                      </div>
                      {stat.subValue && (
                        <div className="text-xs text-slate-400 font-medium mt-0.5">
                          {stat.subValue}
                        </div>
                      )}
                    </div>

                    <p className="text-sm font-medium text-slate-700 leading-snug">
                      {stat.label}
                    </p>
                  </div>

                  <p className="text-xs text-slate-400 mt-4 pt-3 border-t border-slate-100 leading-relaxed">
                    {stat.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: REGIONAL FOUNDATION SPOTLIGHT - PCS FOUNDATION (Screenshot 4)   */}
      {/* ========================================================================= */}
      <section className="py-4 sm:py-6 container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Text */}
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold">
              <Globe2 className="w-3.5 h-3.5" />
              <span>Regional Foundation Spotlight</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-brand-navy tracking-tight leading-tight">
              PCS Foundation (Thailand)
            </h2>

            <div className="space-y-3.5 text-slate-600 text-xs sm:text-sm lg:text-[15px] leading-relaxed font-normal">
              <p>
                PCS Thailand, part of the NEXAAGEN Group, is our operating division in Thailand which employs close to 40,000 colleagues. The PCS Foundation, established to support local communities, is dedicated to supporting local communities through various means, including volunteer work, financial contributions, and equipment donations.
              </p>

              <p>
                Since its inception, the Foundation has raised over significant philanthropic funds, enabling us to impact underprivileged communities significantly. Our contributions have facilitated educational support, such as scholarships for children in rural areas and rebuilding schools.
              </p>

              <p>
                We proactively collaborate with several notable organisations, including the Support the Children Foundation, the United Nations World Food Programme, World Concern, the Independent Living Centre, and youth welfare networks.
              </p>

              <p>
                The foundation’s funding beneficiaries include the Regional Business Coalition on Health, regional hospital pediatric and craniofacial centres, community social centres, and vocational schools. Our ongoing commitment includes annual donations to support vulnerable children, providing medical facilities, and actively empowering families into independent livelihoods.
              </p>
            </div>
          </div>

          {/* Right Column: Young Professionals & Colleagues Photo */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-xl aspect-[4/5] max-h-[440px] w-full max-w-[360px] sm:max-w-[380px] border border-slate-100 group">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
                alt="PCS Foundation Thailand team and community volunteers"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/25 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5: EXECUTIVE LEADERSHIP QUOTE OVER SUNLIT CANOPY (Screenshot 5)   */}
      {/* ========================================================================= */}
      <section className="py-3 sm:py-5 container-custom">
        <div className="relative rounded-[32px] sm:rounded-[40px] overflow-hidden shadow-xl min-h-[360px] sm:min-h-[400px] flex items-center p-6 sm:p-10 lg:p-12">
          {/* Background: Sunlight through lush green tree canopy */}
          <img
            src="https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1800&q=85"
            alt="Sunlight streaming through tall forest canopy"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/35 backdrop-brightness-95 pointer-events-none" />

          {/* Floating White Card */}
          <div className="relative z-10 max-w-xl bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/40 space-y-4">
            <Quote className="w-7 h-7 text-[#FF5722] opacity-80" />

            <p className="text-slate-800 text-xs sm:text-sm lg:text-base leading-relaxed font-normal">
              “The NEXAAGEN and regional Foundations are a critical part of our business. Helping others and sharing success whilst doing good business is a win for everyone. I’m pleased with what we’ve achieved to date, and I’m looking forward to driving more good work and sound together.”
            </p>

            <div className="flex items-center space-x-3 pt-2 border-t border-slate-100">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80"
                alt="Bob Taylor"
                className="w-10 h-10 rounded-full object-cover border-2 border-[#FF5722]"
              />
              <div>
                <h4 className="text-xs sm:text-sm font-heading font-bold text-slate-900">
                  Bob Taylor
                </h4>
                <p className="text-[11px] text-slate-500 font-medium">
                  Group Chief Operating Officer
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 6: VISIT OUR COUNTRY-SPECIFIC WEBSITES (Screenshot 6)              */}
      {/* ========================================================================= */}
      <section className="py-3 sm:py-5 container-custom">
        <div className="bg-[#F3F8F5] rounded-[28px] sm:rounded-[36px] p-6 sm:p-8 lg:p-10 text-center max-w-5xl mx-auto space-y-3.5 border border-emerald-100/60">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-brand-navy tracking-tight leading-tight">
            Visit our country-specific websites to learn more
          </h2>

          <p className="text-slate-600 text-xs sm:text-sm max-w-3xl mx-auto leading-relaxed font-normal">
            Visit our dedicated country-specific websites to discover the unique Environmental, Social, and Governance (ESG) commitments and initiatives tailored to each region, showcasing our global impact with local relevance.
          </p>

          <div className="pt-2">
            <Link
              to="/about/global-locations"
              className="inline-flex items-center justify-center px-7 py-2.5 rounded-full font-heading font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300"
            >
              <span>View Global Locations</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 7: ESG NEWS, UPDATES AND INSIGHT (Screenshot 6 & 7)                */}
      {/* ========================================================================= */}
      <section className="py-4 sm:py-6 container-custom">
        {/* Header */}
        <div className="text-center space-y-2 mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-brand-navy tracking-tight leading-tight">
            ESG news, updates and insight
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm font-normal">
            The latest insights and updates from the team at NEXAAGEN.
          </p>
        </div>

        {/* 4 News Cards in 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {newsArticles.map((article) => (
            <div
              key={article.id}
              onClick={() => setSelectedArticle(article)}
              className="bg-white rounded-3xl border border-slate-100 hover:border-orange-200 overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer group"
            >
              {/* Image */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-[#EA580C] uppercase tracking-wider shadow-sm">
                  {article.category}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1.5">
                  <span className="text-xs font-semibold text-[#EA580C] uppercase tracking-wider block">
                    {article.category}
                  </span>
                  <h3 className="text-sm sm:text-base font-heading font-bold text-slate-900 group-hover:text-[#FF5722] transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-slate-500 line-clamp-2 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>

                {/* Author & Date Footer */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 rounded-full bg-slate-100 text-[#0A192F] font-bold text-[9px] flex items-center justify-center">
                      N
                    </div>
                    <span className="font-medium text-slate-600">{article.author}</span>
                  </div>
                  <span>{article.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 8: CONNECT WITH YOUR NEXAAGEN TEAM BANNER (Screenshot 7)          */}
      {/* ========================================================================= */}
      <section className="py-3 sm:py-5 container-custom">
        <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden bg-[#0A192F] text-white p-6 sm:p-8 lg:p-10 text-center shadow-xl">
          {/* Subtle dotted matrix globe aesthetic */}
          <div
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(#FFFFFF 1.2px, transparent 1.2px)',
              backgroundSize: '24px 24px'
            }}
          />

          <div className="relative z-10 max-w-3xl mx-auto space-y-5">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-white tracking-tight leading-tight">
              Connect with your NEXAAGEN team
            </h2>

            <p className="text-sm sm:text-base lg:text-lg text-slate-200 leading-relaxed font-normal max-w-2xl mx-auto text-justify-center">
              We're ready to deliver the best experiences, productivity, practices, resilience and outcomes and we look forward to connecting with you and your team.
            </p>

            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 rounded-full font-heading font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 group"
              >
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ARTICLE PREVIEW MODAL */}
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
                type="button"
                onClick={() => setSelectedArticle(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 backdrop-blur text-slate-700 hover:text-black flex items-center justify-center transition-colors shadow-md cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span className="px-3 py-1 rounded-full bg-orange-100 text-[#EA580C] font-bold uppercase tracking-wider">
                  {selectedArticle.category}
                </span>
                <span>{selectedArticle.date}</span>
              </div>

              <h2 className="text-xl sm:text-2xl font-heading font-bold text-slate-900 leading-snug">
                {selectedArticle.title}
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {selectedArticle.fullContent}
              </p>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500">By {selectedArticle.author}</span>
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
