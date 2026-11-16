import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ArrowRight, 
  ArrowUpRight, 
  CheckCircle2, 
  Users, 
  Award, 
  ShieldCheck, 
  ChevronLeft, 
  ChevronRight,
  X,
  Globe,
  Sparkles,
  Calendar,
  Layers,
  HeartHandshake
} from 'lucide-react';
import Breadcrumbs from '../components/layout/Breadcrumbs';

export default function DiversityInclusion() {
  const location = useLocation();
  const [showAccreditationsModal, setShowAccreditationsModal] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);

  // Dynamic breadcrumb depending on whether accessed via About Us or ESG
  const isFromAbout = location.pathname.startsWith('/about');
  const breadcrumbItems = isFromAbout
    ? [
        { label: 'About Us', link: '/about' },
        { label: 'Diversity, Equity and Inclusion' }
      ]
    : [
        { label: 'ESG', link: '/esg' },
        { label: 'Diversity, Equity and Inclusion' }
      ];

  const esgCards = [
    {
      id: 'environmental',
      title: 'Environmental',
      description: 'We are committed to environmental stewardship, focusing on sustainable practice, carbon reduction, and protecting biodiversity.',
      image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80',
      link: '/environmental'
    },
    {
      id: 'social',
      title: 'Social',
      description: 'Fostering a socially responsible environment, prioritising community engagement, fair living wages, and colleague wellbeing.',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80',
      link: '/social'
    },
    {
      id: 'governance',
      title: 'Governance',
      description: 'Upholds robust governance, ensuring transparency, accountability, and ethical business conduct worldwide.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      link: '/governance'
    }
  ];

  const newsArticles = [
    {
      id: 'aviation-services-anniversary',
      title: 'Sixty Years of Global Aviation Services: One Standard,...',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
      author: 'NEXAAGEN Team',
      date: '24 Aug, 2026',
      link: '/news'
    },
    {
      id: 'data-centre-pre-commissioning',
      title: "The 60 Days That Decide a Data Centre's Life: Why Pre-...",
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
      author: 'NEXAAGEN Team',
      date: '16 Jul, 2026',
      link: '/news'
    },
    {
      id: 'india-airport-transformation',
      title: "Inside India's Airport Transformation: Why FM is...",
      image: 'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?auto=format&fit=crop&w=800&q=80',
      author: 'NEXAAGEN Team',
      date: '09 Jul, 2026',
      link: '/news'
    },
    {
      id: 'post-construction-cleaning-critical',
      title: 'Why Post-Construction Cleaning Is Critical for Data...',
      excerpt: 'Post-construction cleaning is a critical milestone before sensitive hardware arrives...',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
      author: 'NEXAAGEN Team',
      date: '06 Jul, 2026',
      link: '/news'
    }
  ];

  const handlePrev = () => {
    setCarouselIndex((prev) => (prev === 0 ? esgCards.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCarouselIndex((prev) => (prev === esgCards.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full flex flex-col flex-1 bg-white text-slate-900 font-sans overflow-hidden">
      {/* BREADCRUMBS */}
      <Breadcrumbs items={breadcrumbItems} />

      {/* SECTION 1: HERO BANNER (Reference Image 1) */}
      <section className="pt-4 pb-3 sm:pt-6 sm:pb-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full text-center">
        <div className="relative rounded-[28px] sm:rounded-[36px] bg-[#FAF9F6] border border-slate-200/60 p-6 sm:p-8 lg:p-10 overflow-hidden shadow-sm">
          {/* Subtle dot matrix pattern */}
          <div 
            className="absolute inset-0 opacity-20 pointer-events-none -z-0"
            style={{
              backgroundImage: 'radial-gradient(#FF5722 1.3px, transparent 1.3px)',
              backgroundSize: '24px 24px'
            }}
          />

          <div className="relative z-10 max-w-4xl mx-auto space-y-4">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-slate-800 tracking-tight leading-[1.15]">
              Diversity, Equity and Inclusion
            </h1>

            <p className="text-xs sm:text-sm lg:text-base text-slate-600 leading-relaxed font-normal max-w-3xl mx-auto">
              Our 130,000 colleagues represent every corner of the globe, speaking multiple languages and proudly representing many beliefs and cultures – this diversity fuels our organisation.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: OUR DE&I STARTING POINT IS THAT EVERYBODY COUNTS (Reference Image 2) */}
      <section className="py-3 sm:py-5 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="rounded-[32px] sm:rounded-[40px] bg-[#FAF9F6] border border-slate-200/60 p-5 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: DE&I Philosophy & Approach */}
            <div className="lg:col-span-7 space-y-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-slate-800 tracking-tight leading-tight">
                Our DE&I starting point is that everybody counts
              </h2>

              <p className="text-xs sm:text-sm lg:text-base text-slate-600 leading-relaxed font-normal">
                Diversity, equity, and inclusion (DE&I) intertwine with our{' '}
                <Link to="/true-values" className="font-semibold text-slate-900 underline decoration-[#FF5722] decoration-2 underline-offset-2 hover:text-[#FF5722] transition-colors">
                  TRUE Values
                </Link>
                , ethos and approach. We’re a global facilities services business that employs over 130,000 individuals speaking multiple languages and representing many cultures, religions and beliefs. The importance of an inclusive, non-discriminatory approach cannot be overstated. It’s a minimum expectation for a global enterprise striving to become the best in its field.
              </p>

              <p className="text-xs sm:text-sm lg:text-base text-slate-600 leading-relaxed font-normal">
                We have a unique opportunity and responsibility to acknowledge, respect, and leverage the richness of human differences and perspectives of our extensive team, operating across different countries and cultures. We’re taking a thorough but straightforward approach to DE&I, rooted in our commitment to respecting and including everyone as we continue to listen, learn, and lead in creating an inclusive and respectful work environment for all.
              </p>
            </div>

            {/* Right Column: Frontline Colleague Photo */}
            <div className="lg:col-span-5">
              <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-xl aspect-[4/3] sm:aspect-square lg:aspect-[4/5] border border-slate-200/60 group">
                <img
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1200&q=80"
                  alt="NEXAAGEN Frontline Colleague"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: DE&I COMMITMENTS (Reference Image 3) */}
      <section className="py-3 sm:py-5 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="rounded-[32px] sm:rounded-[40px] bg-[#FAF9F6] border border-slate-200/60 p-5 sm:p-8 lg:p-10 space-y-6 sm:space-y-8">
          {/* Header */}
          <div className="text-center space-y-2 max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-slate-800 tracking-tight">
              DE&I Commitments
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              Our global teams are responsible for creating culturally aligned initiatives and programmes that support our DE&I commitments.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Colleague Photo in Maroon Jacket */}
            <div className="lg:col-span-5">
              <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-xl aspect-[4/3] sm:aspect-square lg:aspect-[4/5] border border-slate-200/60 group">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80"
                  alt="NEXAAGEN Colleague Championing DE&I"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Right Column: Three Definitions (Diversity, Equity, Inclusion) */}
            <div className="lg:col-span-7 space-y-5">
              {/* Diversity */}
              <div className="relative pl-6 border-l-4 border-emerald-500 space-y-2">
                <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-slate-900 tracking-tight">
                  Diversity
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  Acknowledging differences, understanding, respecting, and valuing the variety of characteristics that each individual in our vast team possesses, including differences in ethnicity, gender, age, origin, sexual orientation, education, religion, experience and perspective.
                </p>
              </div>

              {/* Equity */}
              <div className="relative pl-6 border-l-4 border-transparent space-y-2">
                <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-slate-900 tracking-tight">
                  Equity
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  We create opportunities and pathways for all employees to access the same advantages. We ensure fairness in treatment, access, opportunity, and advancement for all people while striving to identify and eliminate any barriers or obstacles that might hinder an individual's progress.
                </p>
              </div>

              {/* Inclusion */}
              <div className="relative pl-6 border-l-4 border-transparent space-y-2">
                <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-slate-900 tracking-tight">
                  Inclusion
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  Fostering a work environment where all individuals are treated fairly and respectfully, have equal access to opportunities and resources, and can contribute fully to the organisation's success. Creating a workplace where differences are embraced and everyone is included.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: MAKING CHANGE AND PRIORITISING OUR PEOPLE (Reference Image 4) */}
      <section className="py-3 sm:py-5 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="rounded-[32px] sm:rounded-[40px] bg-[#FAF9F6] border border-slate-200/60 p-5 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Third-Party Partnerships & 5 Bullet Points */}
            <div className="lg:col-span-7 space-y-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-slate-800 tracking-tight leading-tight">
                Making change and prioritising our people
              </h2>

              <p className="text-xs sm:text-sm lg:text-base text-slate-600 leading-relaxed font-normal">
                We proudly partner and align with a number of third-party organisations to help empower our DE&I teams, enabling them to implement the right programmes and initiatives, fulfil our commitment and work towards our vision and mission.
              </p>

              <div className="space-y-2.5 pt-1">
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 rounded-full bg-[#D8232A] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                    <CheckCircle2 className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-700 font-medium">
                    Certified Disability Confident Employer (level 2, working towards level 3)
                  </span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 rounded-full bg-[#D8232A] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                    <CheckCircle2 className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-700 font-medium">
                    Part of the Mental Health at Work Commitment
                  </span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 rounded-full bg-[#D8232A] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                    <CheckCircle2 className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-700 font-medium">
                    We are a Menopause Friendly Employer
                  </span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 rounded-full bg-[#D8232A] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                    <CheckCircle2 className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-700 font-medium">
                    Mental health first aid triage phone line
                  </span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 rounded-full bg-[#D8232A] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                    <CheckCircle2 className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-700 font-medium">
                    UK corporate member of LGBT+ in FM
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setShowAccreditationsModal(true)}
                  className="inline-flex items-center px-6 py-2.5 rounded-full font-heading font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 group cursor-pointer"
                >
                  <span>Accreditations and Certifications</span>
                </button>
              </div>
            </div>

            {/* Right Column: Operations Supervisor in Control Room Photo */}
            <div className="lg:col-span-5">
              <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-xl aspect-[4/3] sm:aspect-square lg:aspect-[4/5] border border-slate-200/60 group">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80"
                  alt="NEXAAGEN Operations Supervisor in Control Room"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: HELPING DELIVER CHANGE WITH ESG CAROUSEL (Reference Images 5 & 6) */}
      <section className="py-3 sm:py-5 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="rounded-[32px] sm:rounded-[40px] bg-[#FAF9F6] border border-slate-200/60 p-5 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Heading, Subtitle, Connect Button, and Nav Arrows */}
            <div className="lg:col-span-4 space-y-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-slate-800 tracking-tight leading-tight">
                Helping deliver change with ESG
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Find out more and connect with our team on environment, social and governance initiatives and programmes.
              </p>

              <div>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-2.5 rounded-full font-heading font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300"
                >
                  <span>Connect with NEXAAGEN</span>
                </Link>
              </div>

              {/* Carousel Arrow Controls */}
              <div className="flex items-center space-x-3 pt-1">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous ESG Pillar"
                  className="w-9 h-9 rounded-full border border-slate-300 bg-white hover:bg-slate-50 flex items-center justify-center text-slate-600 hover:text-[#FF5722] transition-colors shadow-sm cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next ESG Pillar"
                  className="w-9 h-9 rounded-full border border-slate-300 bg-white hover:bg-slate-50 flex items-center justify-center text-slate-600 hover:text-[#FF5722] transition-colors shadow-sm cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Column: 3 Pillar Cards (Environmental, Social, Governance) */}
            <div className="lg:col-span-8 overflow-hidden">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {esgCards.map((card, idx) => {
                  // Active card visual styling on small screens with carouselIndex
                  const isCurrent = idx === carouselIndex;
                  return (
                    <Link
                      key={card.id}
                      to={card.link}
                      className="group bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between"
                    >
                      {/* Card Thumbnail */}
                      <div className="aspect-[4/3] overflow-hidden relative">
                        <img
                          src={card.image}
                          alt={card.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>

                      {/* Card Content with Round Red Arrow */}
                      <div className="p-4 sm:p-5 space-y-2 flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between mb-1.5">
                            <h3 className="text-base sm:text-lg font-heading font-bold text-slate-900 group-hover:text-brand-orange transition-colors">
                              {card.title}
                            </h3>
                            <div className="w-6 h-6 rounded-full bg-[#D8232A] text-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform flex-shrink-0">
                              <ArrowUpRight className="w-3 h-3" />
                            </div>
                          </div>
                          <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">
                            {card.description}
                          </p>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: CONNECT WITH YOUR GLOBAL TEAM (Reference Image 7) */}
      <section className="py-3 sm:py-5 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden bg-[#0A192F] text-white p-6 sm:p-8 lg:p-10 text-center shadow-xl">
          {/* Subtle dotted matrix globe aesthetic */}
          <div 
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(#FFFFFF 1.2px, transparent 1.2px)',
              backgroundSize: '24px 24px'
            }}
          />

          <div className="relative z-10 max-w-3xl mx-auto space-y-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-white tracking-tight">
              Connect with your global team
            </h2>

            <p className="text-xs sm:text-sm lg:text-base text-slate-200 leading-relaxed font-normal max-w-2xl mx-auto">
              Visit your country's website to connect with the regional team and find out more about diversity, equity and inclusion programmes, initiatives and progress.
            </p>

            <div className="pt-1">
              <Link
                to="/india-office-locations"
                className="inline-flex items-center px-7 py-2.5 rounded-full font-heading font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 group"
              >
                <span>Global Locations</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: NEWS AND MEDIA (Reference Image 8) */}
      <section className="py-4 sm:py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-slate-100">
        <div className="space-y-6">
          {/* Header & Button */}
          <div className="text-center space-y-2.5 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-slate-800 tracking-tight">
              News and media
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              The latest insights and updates from the team at NEXAAGEN.
            </p>
            <div className="pt-1">
              <Link
                to="/news"
                className="inline-flex items-center px-7 py-2.5 rounded-full font-heading font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300"
              >
                <span>See All News & Media</span>
              </Link>
            </div>
          </div>

          {/* 4 Article Cards Grid (2x2) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 pt-1">
            {newsArticles.map((article) => (
              <Link
                key={article.id}
                to={article.link}
                className="group flex flex-col sm:flex-row bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300"
              >
                {/* Thumbnail Image */}
                <div className="sm:w-2/5 aspect-[4/3] sm:aspect-auto overflow-hidden relative flex-shrink-0">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                  <div className="space-y-2">
                    <h3 className="text-base sm:text-lg font-heading font-bold text-slate-900 group-hover:text-brand-orange transition-colors leading-snug">
                      {article.title}
                    </h3>
                    {article.excerpt && (
                      <p className="text-xs sm:text-sm text-slate-500 line-clamp-2 leading-relaxed">
                        {article.excerpt}
                      </p>
                    )}
                  </div>

                  <div className="flex items-center space-x-2 text-xs text-slate-400 pt-2 border-t border-slate-100">
                    <div className="w-5 h-5 rounded-full bg-orange-100 text-[#FF5722] font-black text-[9px] flex items-center justify-center flex-shrink-0">
                      N
                    </div>
                    <span className="font-semibold text-slate-700">{article.author}</span>
                    <span>•</span>
                    <span>{article.date}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ACCREDITATIONS & CERTIFICATIONS MODAL */}
      {showAccreditationsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 max-h-[90vh] overflow-y-auto space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#FF5722] flex items-center justify-center font-bold">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-slate-900">
                    DE&I Accreditations & Certifications
                  </h3>
                  <p className="text-xs text-slate-500">Verified Benchmarks for Inclusion & Wellbeing</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowAccreditationsModal(false)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-1">
                <div className="font-bold text-slate-900 flex items-center space-x-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Disability Confident Level 2 Employer</span>
                </div>
                <p className="text-xs text-slate-600">
                  Active recruitment, retention, and workplace accessibility adjustments for colleagues with disabilities worldwide.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-1">
                <div className="font-bold text-slate-900 flex items-center space-x-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Mental Health at Work Commitment</span>
                </div>
                <p className="text-xs text-slate-600">
                  Equipping managers with psychological first-aid training and 24/7 dedicated telephone triage support.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-1">
                <div className="font-bold text-slate-900 flex items-center space-x-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Menopause Friendly Employer</span>
                </div>
                <p className="text-xs text-slate-600">
                  Providing flexible workplace arrangements, thermal comfort adaptations, and supportive health resources.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-1">
                <div className="font-bold text-slate-900 flex items-center space-x-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Corporate Member of LGBT+ in FM</span>
                </div>
                <p className="text-xs text-slate-600">
                  Championing visibility, psychological safety, and peer support networks across the facilities management sector.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex justify-end">
              <button
                type="button"
                onClick={() => setShowAccreditationsModal(false)}
                className="px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
