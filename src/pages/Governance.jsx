import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  FileText,
  Users,
  Scale,
  Building2,
  Award,
  ExternalLink,
  HeartHandshake,
  Quote,
  Sparkles,
  Lock,
  Compass,
  Download,
  X
} from 'lucide-react';
import Breadcrumbs from '../components/layout/Breadcrumbs';
import { newsData } from '../data/newsData';

export default function Governance() {
  const [showCodeModal, setShowCodeModal] = useState(false);
  const [showPrinciplesModal, setShowPrinciplesModal] = useState(false);

  // Filter 4 featured news items matching the reference screenshot
  const governanceNews = newsData.slice(0, 4);

  return (
    <div className="w-full flex flex-col flex-1 bg-white text-slate-900 font-sans overflow-hidden">
      <Breadcrumbs
        items={[
          { label: 'ESG', link: '/esg' },
          { label: 'Governance' }
        ]}
      />

      {/* SECTION 1: HERO HEADER (Reference Image 1) */}
      <section className="pt-4 pb-3 sm:pt-6 sm:pb-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full text-center">
        <div className="relative rounded-3xl bg-slate-50/70 border border-slate-100/80 p-6 sm:p-8 lg:p-10 overflow-hidden shadow-sm">
          {/* Subtle dot background pattern */}
          <div
            className="absolute inset-0 opacity-15 pointer-events-none -z-0"
            style={{
              backgroundImage: 'radial-gradient(#FF5722 1.2px, transparent 1.2px)',
              backgroundSize: '24px 24px'
            }}
          />

          <div className="relative z-10 max-w-4xl mx-auto space-y-6">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-orange-100/80 text-[#D8232A] border border-orange-200">
              Governance Framework
            </span>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-slate-800 tracking-tight leading-[1.15]">
              Governance (ESG)
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed font-normal max-w-3xl mx-auto">
              Learn more about our ethical framework, our commitment to responsible and sustainable management practices, and our governing initiatives in the following sections.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#transparency"
                className="inline-flex items-center px-6 py-3 rounded-full font-heading font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 group"
              >
                <span>Ethical Framework</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#code-of-conduct"
                className="inline-flex items-center px-6 py-3 rounded-full font-heading font-bold text-xs uppercase tracking-wider text-slate-700 bg-white border border-slate-200 hover:bg-slate-100 transition-all duration-300 shadow-sm"
              >
                <span>Code of Conduct</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: TRANSPARENCY, ACCOUNTABILITY AND ETHICAL BEHAVIOUR (Reference Image 2) */}
      <section id="transparency" className="py-4 sm:py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-slate-100">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Text & 4 Checklist Items */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-slate-800 tracking-tight leading-tight">
              Transparency, accountability and ethical behaviour
            </h2>

            <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed">
              Doing the right things in the right way – the NEXAAGEN way.
            </p>

            <div className="space-y-4 pt-2">
              {/* Point 1 */}
              <div className="flex items-start space-x-3.5">
                <div className="w-6 h-6 rounded-full bg-[#D8232A] text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                  Maintaining the highest ethical standards and codes of conduct that guide the behaviour of employees and stakeholders.
                </p>
              </div>

              {/* Point 2 */}
              <div className="flex items-start space-x-3.5">
                <div className="w-6 h-6 rounded-full bg-[#D8232A] text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                  Establishing strong governance structures and processes that ensure transparency and accountability at all levels.
                </p>
              </div>

              {/* Point 3 */}
              <div className="flex items-start space-x-3.5">
                <div className="w-6 h-6 rounded-full bg-[#D8232A] text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                  Monitoring and measuring our ESG performance alongside evidenced reporting and target commitment.
                </p>
              </div>

              {/* Point 4 */}
              <div className="flex items-start space-x-3.5">
                <div className="w-6 h-6 rounded-full bg-[#D8232A] text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                  Doing the right things in the right way – the NEXAAGEN way – with our TRUE Values as a guiding principle.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Compliance Executive Photo */}
          <div className="lg:col-span-5">
            <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-[5/4] border border-slate-100 group">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80"
                alt="NEXAAGEN Governance and Compliance Executive"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* REGIONAL INFORMATION NOTICE BANNER (Reference Image 3 Header) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center">
        <p className="text-base sm:text-lg text-slate-700 font-medium">
          Please find our NEXAAGEN Group governance information below – please visit our country-specific websites for regional detail and information.
        </p>
      </div>

      {/* SECTION 3: CODE OF CONDUCT (Reference Image 3) */}
      <section id="code-of-conduct" className="py-4 sm:py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Illustrated Mission Poster Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-2xl aspect-[4/3] bg-gradient-to-br from-[#E04B26] via-[#D8232A] to-[#B01B20] p-8 sm:p-10 text-white flex flex-col justify-between border border-orange-600/30">
              {/* Graphic background accents */}
              <div className="absolute -right-8 -top-8 w-44 h-44 rounded-full bg-white/10 blur-2xl pointer-events-none" />
              <div className="absolute right-4 bottom-4 opacity-20 pointer-events-none">
                <Sparkles className="w-32 h-32 text-white" />
              </div>

              {/* Top Tagline */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="text-xs font-black tracking-widest uppercase bg-black/20 px-3 py-1 rounded-full backdrop-blur-sm">
                  NEXAAGEN GLOBAL CULTURE
                </span>
                <span className="text-xs font-bold text-white/90">TRUE VALUES</span>
              </div>

              {/* Bold Center Copy mirroring reference poster */}
              <div className="relative z-10 space-y-3 my-auto py-6">
                <h3 className="text-3xl sm:text-4xl font-heading font-black tracking-tight uppercase leading-none drop-shadow-md">
                  WE’RE ON A<br />
                  <span className="text-yellow-300">MISSION!</span>
                </h3>
                <p className="text-xs sm:text-sm font-bold tracking-wide uppercase text-white/95 max-w-xs">
                  TO BECOME THE BEST FACILITIES SERVICES BUSINESS IN THE WORLD
                </p>
              </div>

              {/* Bottom Brand Bar */}
              <div className="relative z-10 pt-4 border-t border-white/20 flex items-center justify-between text-xs text-white/80">
                <span>Ethical Leadership</span>
                <span>Universal Standards</span>
              </div>
            </div>
          </div>

          {/* Right Column: Code of Conduct Copy */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-slate-800 tracking-tight leading-tight">
              Code of Conduct
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Our Code of Conduct is a foundational document that defines the principles and standards guiding every aspect of our business at NEXAAGEN Group. It provides transparency into our commitment to ethical practices, integrity, and responsible conduct within our organisation and our interactions with the world.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              <strong className="text-slate-900 font-bold">Global Commitment:</strong> Wherever we operate, our Code of Conduct sets a universal standard that applies to all NEXAAGEN colleagues worldwide. We prioritise ethical conduct, often going above and beyond local legal requirements.
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <Link
                to="/code-of-conduct"
                className="inline-flex items-center px-7 py-3.5 rounded-full font-heading font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 group"
              >
                <span>Read Full Code of Conduct</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button
                onClick={() => setShowCodeModal(true)}
                className="inline-flex items-center px-6 py-3.5 rounded-full font-heading font-bold text-xs uppercase tracking-wider text-slate-700 bg-slate-100 hover:bg-slate-200 transition-all duration-300"
              >
                <span>Quick Summary</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: GUIDING PRINCIPLES - QHSE POLICY STATEMENT (Reference Image 4) */}
      <section className="py-4 sm:py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-slate-100">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: QHSE Policy Statement Details */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-slate-800 tracking-tight leading-tight">
              Our Guiding principles
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              As outlined in our Group Quality, Health, Safety, and Environment (QHSE) Policy Statement, authored by Rob Legge, Chief Executive Officer, and Mark Incledon, Group QHSE Officer, dated December 01, 2023, NEXAAGEN is dedicated to upholding world-class QHSE standards. This commitment extends to all colleagues across our operating countries and is integral to our mission of delivering quality facility management services.
            </p>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Our approach prioritises the health and well-being of our colleagues, contractors, and the public while strongly focusing on environmental sustainability and community welfare. The Executive Committee oversees the implementation of this policy, ensuring the necessary organisation and resources are in place to achieve our objectives.
            </p>

            <div className="pt-2">
              <Link
                to="/qhse"
                className="inline-flex items-center px-7 py-3.5 rounded-full font-heading font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 group"
              >
                <span>QHSE Policy</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Column: Frontline Engineers Photo */}
          <div className="lg:col-span-5">
            <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-[5/4] border border-slate-100 group">
              <img
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80"
                alt="NEXAAGEN Frontline Facilities Engineers upholding QHSE standards"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-white/80">
                <span className="text-xs font-bold text-slate-800">
                  World-Class Standards across 130,000+ frontline colleagues globally.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: GUIDING PRINCIPLES - VISION AND VALUES (Reference Image 5) */}
      <section className="py-4 sm:py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full bg-slate-50/70 rounded-3xl my-3 sm:my-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Colleague Photo with Lanyard */}
          <div className="lg:col-span-5">
            <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-[5/4] border border-slate-100 group">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1200&q=80"
                alt="NEXAAGEN Colleague embodying TRUE Values"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
            </div>
          </div>

          {/* Right Column: Vision & TRUE Values */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-slate-800 tracking-tight leading-tight">
              Our Guiding principles
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              <strong className="text-slate-900 font-bold">Our Vision and Values:</strong> Our Code is rooted in our vision to be the world's best facilities services business and our core values of <span className="font-bold text-slate-900">Trust, Respect, Unity, and Empowerment (TRUE)</span>. These values drive our culture and reflect our dedication to making a positive impact on the people and places we serve.
            </p>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Alongside our TRUE Values, we’ve signed up to the NEXAAGEN Commitments, beginning with prioritising safety and concluding with a dedication to integrity, embodying the NEXAAGEN way in every action we undertake.
            </p>

            <div className="pt-2">
              <button
                onClick={() => setShowPrinciplesModal(true)}
                className="inline-flex items-center px-7 py-3.5 rounded-full font-heading font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 group"
              >
                <span>Guiding Principles</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: MODERN DAY SLAVERY STATEMENT (Reference Image 6) */}
      <section className="py-4 sm:py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Modern Slavery Commitment */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-slate-800 tracking-tight leading-tight">
              Modern Day Slavery Statement
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              NEXAAGEN Group is an ethical business committed to eradicating modern slavery and human trafficking from its operations and supply chains, both in the UK and overseas – collaborating with industry experts like the Slave-Free Alliance, conducting risk assessments on suppliers, and providing comprehensive colleague training.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              We’re also working closely with organisations such as{' '}
              <a
                href="https://www.cips.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-900 font-semibold underline decoration-[#FF5722] decoration-2 underline-offset-2 hover:text-[#FF5722]"
              >
                www.cips.org
              </a>
              , where we’ve achieved their corporate ethics mark. The mark is awarded to businesses that have taken proactive steps in the last 12 months to safeguard against unethical procurement and supply management conduct. The mark also signifies our commitment to best practice. Daniel Dickson, CEO – UK & Ireland, signed a commitment statement for best practice. NEXAAGEN UK & Ireland are listed in the Chartered Institute of Procurement & Supply's (CIPS) register.
            </p>

            <div className="pt-2">
              <Link
                to="/modern-slavery-act"
                className="inline-flex items-center px-6 py-3 rounded-full font-heading font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:shadow-lg hover:shadow-orange-500/25 transition-all group"
              >
                <span>Read Full Modern Slavery Act Statement</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Column: Professional Woman Photo */}
          <div className="lg:col-span-5">
            <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-[4/5] border border-slate-100 group">
              <img
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1200&q=80"
                alt="NEXAAGEN Procurement & Ethics Leader"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-white/80">
                <span className="text-xs font-bold text-slate-800">
                  Certified CIPS Corporate Ethics Mark & Slave-Free Alliance Member.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: DOING THE RIGHT THINGS IN THE RIGHT WAY (Reference Image 7) */}
      <section className="py-4 sm:py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-slate-100">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Community Planting Garden Photo */}
          <div className="lg:col-span-5">
            <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-[5/4] border border-slate-100 group">
              <img
                src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1200&q=80"
                alt="NEXAAGEN Community Garden Project - Social Value and Inclusion"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
            </div>
          </div>

          {/* Right Column: Social Impact & Scorecard */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-slate-800 tracking-tight leading-tight">
              Doing the right things, in the right way – the NEXAAGEN way
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Doing business in the right way is the only way at NEXAAGEN – emphasising transparency, fairness, inclusion, sustainability, and success. Our ESG committee is launching our initial balanced scorecard alongside our Social Impact Report (published next spring), documenting and disclosing our advancement, influence, and heritage for colleagues, customers, and communities. Business triumph extends beyond profits; it encompasses making a substantial impact. Through these ventures, we establish standards and work to surpass them, embodying our fundamental values and redefining responsible business practices.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 8: GENERAL COUNSEL QUOTE BANNER (Reference Image 8) */}
      <section className="py-3 sm:py-5 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="relative rounded-3xl overflow-hidden min-h-[320px] sm:min-h-[380px] flex items-center p-5 sm:p-8 lg:p-10 shadow-2xl">
          {/* Background: Nighttime London Big Ben light trails */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=2000&q=85"
              alt="Night light trails over Westminster London Big Ben"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-slate-950/40" />
          </div>

          {/* Floating White Card on the left (Exactly matching screenshot) */}
          <div className="relative z-10 bg-white/95 backdrop-blur-md rounded-[24px] sm:rounded-[32px] p-6 sm:p-10 max-w-lg shadow-2xl border border-white/70 space-y-4">
            <Quote className="w-8 h-8 text-[#FF5722] opacity-80" />

            <p className="text-base sm:text-lg text-slate-800 leading-relaxed font-medium">
              “Unifying our global team means working to the same standards, operating with a single code of conduct and guided by shared principles. Building a modern-day sustainable business is significantly dependent on good governance and compliance.”
            </p>

            <div className="pt-2 border-t border-slate-200/80">
              <div className="font-heading font-extrabold text-base text-slate-900">
                Scott Thorn-Davis
              </div>
              <div className="text-xs sm:text-sm text-slate-500 font-medium">
                Group General Counsel
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: NEWS AND MEDIA (Reference Images 9 & 10) */}
      <section className="py-4 sm:py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-slate-100">
        <div className="space-y-6 sm:space-y-8">
          {/* Header & View All Button */}
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-slate-800 tracking-tight">
              News and media
            </h2>
            <p className="text-base sm:text-lg text-slate-600">
              The latest insights and updates from the team at NEXAAGEN.
            </p>
            <div className="pt-2">
              <Link
                to="/news"
                className="inline-flex items-center px-7 py-3 rounded-full font-heading font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300"
              >
                <span>See All News & Media</span>
              </Link>
            </div>
          </div>

          {/* 4 Cards 2x2 Grid (Matching Screenshot 9 & 10) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 pt-4">
            {governanceNews.map((item) => (
              <Link
                key={item.id}
                to={`/news/${item.id}`}
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
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#FF5722]">
                      {item.category}
                    </span>
                    <h3 className="text-lg sm:text-xl font-heading font-bold text-slate-900 group-hover:text-brand-orange transition-colors leading-snug line-clamp-2">
                      {item.title}
                    </h3>
                    {item.excerpt && (
                      <p className="text-xs sm:text-sm text-slate-500 line-clamp-2 leading-relaxed">
                        {item.excerpt}
                      </p>
                    )}
                  </div>

                  <div className="flex items-center space-x-2 text-xs text-slate-400 pt-2 border-t border-slate-100">
                    <div className="w-5 h-5 rounded-full bg-orange-100 text-[#FF5722] font-black text-[9px] flex items-center justify-center">
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

      {/* SECTION 10: CONNECT WITH YOUR NEXAAGEN TEAM BANNER (Reference Image 11) */}
      <section className="py-3 sm:py-5 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="relative rounded-3xl overflow-hidden bg-[#0A192F] text-white p-6 sm:p-10 lg:p-12 text-center shadow-2xl">
          {/* Subtle Dot Grid Pattern */}
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(#60A5FA 1.2px, transparent 1.2px)',
              backgroundSize: '20px 20px'
            }}
          />

          <div className="relative z-10 max-w-3xl mx-auto space-y-5">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight">
              Connect with your NEXAAGEN team
            </h2>

            <p className="text-slate-300 text-sm sm:text-base lg:text-lg font-normal max-w-2xl mx-auto leading-relaxed">
              We’re ready to deliver the best experiences, productivity, practices, resilience and outcomes and we look forward to connecting with you and your team.
            </p>

            <div className="pt-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-heading font-bold text-sm text-white bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:shadow-lg hover:shadow-orange-500/30 hover:scale-105 transition-all duration-300"
              >
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* MODAL 1: CODE OF CONDUCT */}
      {showCodeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 max-h-[90vh] overflow-y-auto space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#FF5722] flex items-center justify-center font-bold">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-slate-900">
                    NEXAAGEN Code of Conduct
                  </h3>
                  <p className="text-xs text-slate-500">Universal Ethical Standards & Compliance</p>
                </div>
              </div>
              <button
                onClick={() => setShowCodeModal(false)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
              <p>
                The NEXAAGEN Code of Conduct establishes the foundational expectations for all 130,000+ colleagues, contractors, board members, and business partners worldwide.
              </p>
              <h4 className="font-bold text-slate-900">Key Pillars of our Code:</h4>
              <ul className="space-y-2 list-disc pl-5">
                <li><strong className="text-slate-800">Integrity & Zero Bribery:</strong> Absolute adherence to global anti-corruption laws with zero tolerance for conflicts of interest or improper inducements.</li>
                <li><strong className="text-slate-800">Dignity & Fair Employment:</strong> Equal opportunity, safe and inclusive work conditions, competitive wages, and zero tolerance for harassment.</li>
                <li><strong className="text-slate-800">Supply Chain Due Diligence:</strong> Continuous risk assessments under the Modern Slavery Act and CIPS corporate ethics standards.</li>
                <li><strong className="text-slate-800">Whistleblower Protection:</strong> Independent, confidential 24/7 reporting channels guarantee complete protection from retaliation.</li>
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-100 flex justify-end gap-3">
              <button
                onClick={() => setShowCodeModal(false)}
                className="px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
              >
                Close
              </button>
              <Link
                to="/contact"
                onClick={() => setShowCodeModal(false)}
                className="px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#FF5722] to-[#D8232A] text-white hover:shadow-md transition-all"
              >
                Request Full Governance Pack
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 2: GUIDING PRINCIPLES (TRUE VALUES) */}
      {showPrinciplesModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 max-h-[90vh] overflow-y-auto space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#FF5722] flex items-center justify-center font-bold">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-slate-900">
                    The NEXAAGEN TRUE Values
                  </h3>
                  <p className="text-xs text-slate-500">Trust • Respect • Unity • Empowerment</p>
                </div>
              </div>
              <button
                onClick={() => setShowPrinciplesModal(false)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div className="p-4 rounded-2xl bg-orange-50/50 border border-orange-100 space-y-1">
                <div className="font-heading font-extrabold text-[#FF5722]">Trust</div>
                <p className="text-xs text-slate-600">We do what we say we will do, delivering consistent outcomes with transparency and honesty.</p>
              </div>
              <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100 space-y-1">
                <div className="font-heading font-extrabold text-emerald-600">Respect</div>
                <p className="text-xs text-slate-600">We champion diverse viewpoints, protect human dignity, and treat every colleague and client with care.</p>
              </div>
              <div className="p-4 rounded-2xl bg-blue-50/50 border border-blue-100 space-y-1">
                <div className="font-heading font-extrabold text-blue-600">Unity</div>
                <p className="text-xs text-slate-600">Operating as one global team with synchronized standards, mutual support, and shared ambition.</p>
              </div>
              <div className="p-4 rounded-2xl bg-purple-50/50 border border-purple-100 space-y-1">
                <div className="font-heading font-extrabold text-purple-600">Empowerment</div>
                <p className="text-xs text-slate-600">Enabling frontline teams to innovate, solve client challenges quickly, and realize their full potential.</p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setShowPrinciplesModal(false)}
                className="px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
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

