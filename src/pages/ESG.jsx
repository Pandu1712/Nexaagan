import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Leaf,
  Users,
  Building2,
  ShieldCheck,
  FileText,
  X,
  Download,
  Award,
  Globe2
} from 'lucide-react';
import Breadcrumbs from '../components/layout/Breadcrumbs';

export default function ESG() {
  const location = useLocation();
  const [showPolicyModal, setShowPolicyModal] = useState(false);

  // Dynamic breadcrumb depending on whether accessed via About Us or ESG
  const isFromAbout = location.pathname.startsWith('/about');
  const breadcrumbItems = isFromAbout
    ? [
      { label: 'About Us', link: '/about' },
      { label: 'ESG' }
    ]
    : [
      { label: 'ESG' }
    ];

  const esgActions = [
    {
      id: 'esg-director-appointment',
      category: 'Leadership & Strategy',
      title: 'NEXAAGEN welcomes Jacky So as ESG Director for the UK & Ireland',
      excerpt: 'Jacky So has been appointed as ESG Director to lead regional sustainability initiatives and net-zero roadmaps across commercial operations...',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
      author: 'ESG Team',
      date: '25 Oct, 2026',
      link: '/news'
    },
    {
      id: 'environmental-awards',
      category: 'Environmental',
      title: 'NEXAAGEN Wins Top Awards for Environmental Best Practice and Sustainability',
      excerpt: 'Recognised for ground-breaking carbon footprint reductions, chemical-free cleaning innovations, and renewable energy deployment...',
      image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80',
      author: 'ESG Team',
      date: '30 Nov, 2026',
      link: '/news'
    },
    {
      id: 'social-value-leadership',
      category: 'Social Value',
      title: 'Ann-Marie Conlon-Taylor – helping NEXAAGEN deliver genuine social value',
      excerpt: "NEXAAGEN's Public Sector Social Value framework creates meaningful community impact, youth apprenticeships, and local supplier partnerships...",
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
      author: 'DE&I Team',
      date: '03 Nov, 2026',
      link: '/news'
    },
    {
      id: 'ersa-commendation',
      category: 'Social Value',
      title: 'NEXAAGEN receive social value commendation at ERSA employability awards',
      excerpt: 'NEXAAGEN were honoured to receive a social value commendation for career mobility pathways and inclusive employment programs across 26 countries...',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
      author: 'DE&I Team',
      date: '28 Nov, 2026',
      link: '/news'
    }
  ];

  return (
    <div className="w-full flex flex-col flex-1 bg-white text-slate-900 font-sans overflow-hidden">
      {/* BREADCRUMBS */}
      <Breadcrumbs items={breadcrumbItems} />

      {/* SECTION 1: HERO BANNER (Reference Image 1) */}
      <section className="pt-4 pb-3 sm:pt-6 sm:pb-4 container-custom">
        <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden min-h-[340px] sm:min-h-[380px] flex items-center p-5 sm:p-8 lg:p-10 shadow-lg border border-slate-100">
          {/* Full-bleed Background Image of Lush Green Forest Canopy */}
          <img
            src="https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80"
            alt="NEXAAGEN ESG Environmental Stewardship"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          {/* Subtle overlay gradient */}
          <div className="absolute inset-0 bg-slate-950/20" />

          {/* Floating White Card on the Left (Exactly matching Screenshot 1) */}
          <div className="relative z-10 bg-white/95 backdrop-blur-md rounded-[24px] sm:rounded-[32px] p-5 sm:p-8 lg:p-10 max-w-lg shadow-2xl border border-white/80 space-y-3.5">
            {/* Subtle dot-matrix pattern on card */}
            <div
              className="absolute inset-0 opacity-15 pointer-events-none rounded-[24px] sm:rounded-[32px] overflow-hidden"
              style={{
                backgroundImage: 'radial-gradient(#FF5722 1.2px, transparent 1.2px)',
                backgroundSize: '20px 20px'
              }}
            />

            <div className="relative z-10 space-y-3">
              {/* Badge + Policy Link */}
              <div className="flex items-center space-x-3">
                <button
                  type="button"
                  onClick={() => setShowPolicyModal(true)}
                  className="px-3 py-1 rounded-full text-[11px] font-heading font-bold text-white bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:shadow-md transition-all cursor-pointer"
                >
                  View ESG Policy
                </button>
                <Link
                  to="/policies"
                  className="text-xs sm:text-sm font-semibold text-slate-700 hover:text-brand-orange transition-colors flex items-center group"
                >
                  <span>NEXAAGEN Policies</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>

              {/* Big Title */}
              <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-slate-800 tracking-tight leading-tight">
                ESG
              </h1>

              {/* Subtitle */}
              <p className="text-xs sm:text-sm lg:text-base text-slate-600 leading-relaxed font-normal">
                We’re doing the right things at the right time in business, with the highest environmental, social, and governance responsibility standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: RESPONSIBILITY AND OPPORTUNITY FOR CHANGE (Reference Image 2) */}
      <section className="py-3 sm:py-5 container-custom">
        <div className="rounded-[32px] sm:rounded-[40px] bg-[#FAF9F6] border border-slate-200/60 p-5 sm:p-7 lg:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Policy Narrative */}
            <div className="lg:col-span-7 space-y-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-slate-800 tracking-tight leading-tight">
                Responsibility and opportunity for change
              </h2>

              <p className="text-xs sm:text-sm lg:text-base text-slate-600 leading-relaxed font-normal">
                This NEXAAGEN ESG Policy outlines our commitment and approach to minimising our impact on the environment, supporting the well-being of our colleagues and communities, maintaining strong corporate governance, and our dedication to continuous improvement.
              </p>

              <div className="space-y-1.5 pt-1">
                <h3 className="text-sm sm:text-base font-heading font-bold text-slate-900">
                  Scope of the policy
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Our policy extends to all NEXAAGEN employees, global locations, relevant business partners, and suppliers. It serves as the overarching framework above any specific environmental, social, governance, and local ESG policies.
                </p>
              </div>

              <div className="pt-1">
                <button
                  type="button"
                  onClick={() => setShowPolicyModal(true)}
                  className="inline-flex items-center px-6 py-2.5 rounded-full font-heading font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 cursor-pointer"
                >
                  <span>View Our ESG Policy</span>
                </button>
              </div>
            </div>

            {/* Right Column: Colleague Photo with Bokeh Lights */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-xl aspect-[4/5] max-h-[440px] w-full max-w-[360px] sm:max-w-[380px] border border-slate-200/60 group">
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1200&q=80"
                  alt="NEXAAGEN Colleague - Responsibility and Opportunity for Change"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: NEXAAGEN ENVIRONMENTAL COMMITMENTS (Reference Image 3) */}
      <section className="py-3 sm:py-5 container-custom">
        <div className="rounded-[32px] sm:rounded-[40px] bg-[#FAF9F6] border border-slate-200/60 p-5 sm:p-7 lg:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Churning Blue Ocean Waves Image */}
            <div className="lg:col-span-5 flex justify-center lg:justify-start">
              <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-xl aspect-[4/5] max-h-[440px] w-full max-w-[360px] sm:max-w-[380px] border border-slate-200/60 group">
                <img
                  src="https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=1200&q=80"
                  alt="NEXAAGEN Environmental Commitments"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Right Column: Environmental Text & Bullets */}
            <div className="lg:col-span-7 space-y-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-slate-800 tracking-tight leading-tight">
                NEXAAGEN environmental commitments
              </h2>

              <p className="text-xs sm:text-sm lg:text-base text-slate-600 leading-relaxed font-normal">
                We prioritise environmental sustainability, pledging to reduce resource usage through technology, promote responsible procurement with like-minded suppliers, educate and motivate our colleagues to adopt sustainable practices and collaborate with NGOs, governments, and customers to drive positive change in the communities where we operate.
              </p>

              <div className="pt-0.5">
                <p className="text-xs sm:text-sm text-slate-700 font-normal">
                  View all environmental commitments{' '}
                  <Link
                    to="/environmental"
                    className="font-semibold text-slate-900 underline decoration-[#FF5722] decoration-2 underline-offset-2 hover:text-[#FF5722] transition-colors"
                  >
                    here
                  </Link>
                  .
                </p>
              </div>

              {/* 3 Red Checkmark Bullets */}
              <div className="space-y-2.5 pt-1">
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 rounded-full bg-[#D8232A] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                    <CheckCircle2 className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-700 font-medium">
                    EV fleet introduction whilst optimising legacy vehicles
                  </span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 rounded-full bg-[#D8232A] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                    <CheckCircle2 className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-700 font-medium">
                    Energy, chemical, and waste management systems
                  </span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 rounded-full bg-[#D8232A] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                    <CheckCircle2 className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-700 font-medium">
                    Education and training to embed sustainable behaviour
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: NEXAAGEN SOCIAL COMMITMENTS (Reference Image 4) */}
      <section className="py-3 sm:py-5 container-custom">
        <div className="rounded-[32px] sm:rounded-[40px] bg-[#FAF9F6] border border-slate-200/60 p-5 sm:p-7 lg:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Social Text & Bullets */}
            <div className="lg:col-span-7 space-y-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-slate-800 tracking-tight leading-tight">
                NEXAAGEN social commitments
              </h2>

              <p className="text-xs sm:text-sm lg:text-base text-slate-600 leading-relaxed font-normal">
                We have a strong focus on social value and mobility, as well as fostering inclusion throughout our organisation. Our commitment extends to proactively seeking talent from diverse backgrounds at all levels, from the frontline to the boardroom. We uphold our Code of Conduct to ensure inclusivity and collaborate with government programs and partners to diversify our recruitment efforts.
              </p>

              <div className="pt-0.5">
                <p className="text-xs sm:text-sm text-slate-700 font-normal">
                  View all social commitments{' '}
                  <Link
                    to="/social"
                    className="font-semibold text-slate-900 underline decoration-[#FF5722] decoration-2 underline-offset-2 hover:text-[#FF5722] transition-colors"
                  >
                    here
                  </Link>
                  .
                </p>
              </div>

              {/* 3 Red Checkmark Bullets */}
              <div className="space-y-2.5 pt-1">
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 rounded-full bg-[#D8232A] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                    <CheckCircle2 className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-700 font-medium">
                    Foster and invest in a diverse and inclusive culture
                  </span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 rounded-full bg-[#D8232A] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                    <CheckCircle2 className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-700 font-medium">
                    Meaningfully support our communities through our supply chain
                  </span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 rounded-full bg-[#D8232A] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                    <CheckCircle2 className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-700 font-medium">
                    Ensure we recruit from the widest possible talent pool
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Family/Community Image */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-xl aspect-[4/5] max-h-[440px] w-full max-w-[360px] sm:max-w-[380px] border border-slate-200/60 group">
                <img
                  src="https://images.unsplash.com/photo-1536640712-4d4c36ff0e4e?auto=format&fit=crop&w=1200&q=80"
                  alt="NEXAAGEN Social Commitments & Community"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: NEXAAGEN GOVERNANCE COMMITMENTS (Reference Image 5) */}
      <section className="py-3 sm:py-5 container-custom">
        <div className="rounded-[32px] sm:rounded-[40px] bg-[#FAF9F6] border border-slate-200/60 p-5 sm:p-7 lg:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Senior Leader Image */}
            <div className="lg:col-span-5 flex justify-center lg:justify-start">
              <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-xl aspect-[4/5] max-h-[440px] w-full max-w-[360px] sm:max-w-[380px] border border-slate-200/60 group">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1200&q=80"
                  alt="NEXAAGEN Governance Commitments"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Right Column: Governance Text & Bullets */}
            <div className="lg:col-span-7 space-y-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-slate-800 tracking-tight leading-tight">
                NEXAAGEN governance commitments
              </h2>

              <p className="text-xs sm:text-sm lg:text-base text-slate-600 leading-relaxed font-normal">
                Our governance commitments include maintaining high ethical standards guided by our Code of Conduct and values, establishing transparent and accountable governance structures, nurturing a culture of continuous improvement by monitoring and reporting on our ESG performance, and ensuring compliance with all laws and industry standards through well-defined policies and independent external oversight.
              </p>

              <div className="pt-0.5">
                <p className="text-xs sm:text-sm text-slate-700 font-normal">
                  View all governance commitments{' '}
                  <Link
                    to="/governance"
                    className="font-semibold text-slate-900 underline decoration-[#FF5722] decoration-2 underline-offset-2 hover:text-[#FF5722] transition-colors"
                  >
                    here
                  </Link>
                  .
                </p>
              </div>

              {/* 3 Red Checkmark Bullets */}
              <div className="space-y-2.5 pt-1">
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 rounded-full bg-[#D8232A] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                    <CheckCircle2 className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-700 font-medium">
                    Ethical standards outlined in our Code of Conduct
                  </span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 rounded-full bg-[#D8232A] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                    <CheckCircle2 className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-700 font-medium">
                    Established strong governance structures and processes
                  </span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 rounded-full bg-[#D8232A] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                    <CheckCircle2 className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-700 font-medium">
                    Continuous monitoring and reporting on our ESG performance
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: ESG ACTIONS AND OUTCOMES (Reference Image 6) */}
      <section className="py-4 sm:py-6 container-custom border-t border-slate-100">
        <div className="space-y-6">
          {/* Header */}
          <div className="text-center space-y-2.5 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-slate-800 tracking-tight">
              ESG actions and outcomes
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              Our policies and commitments are important, but only our actions positively impact for our colleagues, customers and communities.
            </p>
          </div>

          {/* 4 Cards 2x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 pt-1">
            {esgActions.map((item) => (
              <Link
                key={item.id}
                to={item.link}
                className="group flex flex-col sm:flex-row bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300"
              >
                {/* Thumbnail Image */}
                <div className="sm:w-2/5 aspect-[4/3] sm:aspect-auto overflow-hidden relative flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-2.5">
                  <div className="space-y-1.5">
                    {item.category && (
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#FF5722]">
                        {item.category}
                      </span>
                    )}
                    <h3 className="text-sm sm:text-base font-heading font-bold text-slate-900 group-hover:text-brand-orange transition-colors leading-snug line-clamp-2">
                      {item.title}
                    </h3>
                    {item.excerpt && (
                      <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                        {item.excerpt}
                      </p>
                    )}
                  </div>

                  <div className="flex items-center space-x-2 text-xs text-slate-400 pt-2 border-t border-slate-100">
                    <div className="w-5 h-5 rounded-full bg-orange-100 text-[#FF5722] font-black text-[9px] flex items-center justify-center flex-shrink-0">
                      N
                    </div>
                    <span className="font-semibold text-slate-700">{item.author}</span>
                    <span>•</span>
                    <span>{item.date}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: CONNECT WITH OUR ESG TEAM (Reference Image 7) */}
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
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight">
              Connect with our ESG team
            </h2>

            <p className="text-sm sm:text-base lg:text-lg text-slate-200 leading-relaxed font-normal max-w-2xl mx-auto">
              We're ready to deliver the best experiences, productivity, practices, resilience and outcomes and we look forward to connecting with you and your team.
            </p>

            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 rounded-full font-heading font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 group"
              >
                <span>Contact Our ESG Team</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ESG POLICY MODAL */}
      {showPolicyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 max-h-[90vh] overflow-y-auto space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#FF5722] flex items-center justify-center font-bold">
                  <Leaf className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-slate-900">
                    NEXAAGEN Global ESG Policy
                  </h3>
                  <p className="text-xs text-slate-500">Environmental, Social & Governance Overarching Charter</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowPolicyModal(false)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-1">
                <div className="font-bold text-slate-900 flex items-center space-x-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Environmental Stewardship</span>
                </div>
                <p className="text-xs text-slate-600">
                  Targeting Net Zero operational emissions by 2035, transitioning 100% of service fleet to electric vehicles, implementing closed-loop chemical-free sanitisation, and eliminating landfill waste.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-1">
                <div className="font-bold text-slate-900 flex items-center space-x-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Social Value & Wellbeing</span>
                </div>
                <p className="text-xs text-slate-600">
                  Championing living wage standards, psychological health first-aid coverage, career apprenticeships, disability-confident practices, and measurable local community investments.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-1">
                <div className="font-bold text-slate-900 flex items-center space-x-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Corporate Governance & Ethics</span>
                </div>
                <p className="text-xs text-slate-600">
                  Zero tolerance for modern slavery and bribery, transparent executive compliance, independent annual auditing, whistleblower protection, and stringent data security governance.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <Link
                to="/policies"
                onClick={() => setShowPolicyModal(false)}
                className="text-xs font-bold text-[#FF5722] hover:text-[#D8232A] flex items-center"
              >
                <span>Visit Policy Download Centre</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Link>

              <button
                type="button"
                onClick={() => setShowPolicyModal(false)}
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
