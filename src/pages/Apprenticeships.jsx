import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  GraduationCap, 
  BookOpen, 
  Briefcase, 
  Users, 
  Sparkles, 
  Award, 
  MapPin, 
  Compass, 
  CheckCircle2,
  ChevronRight,
  TrendingUp,
  X
} from 'lucide-react';
import Breadcrumbs from '../components/layout/Breadcrumbs';
import { newsData } from '../data/newsData';

export default function Apprenticeships() {
  const [showPathwaysModal, setShowPathwaysModal] = useState(false);

  // Take the 4 featured articles matching the reference screenshot
  const teamStories = newsData.slice(0, 4);

  return (
    <div className="w-full flex flex-col flex-1 bg-white text-slate-900 font-sans overflow-hidden">
      <Breadcrumbs
        items={[
          { label: 'ESG', link: '/esg' },
          { label: 'Apprenticeships & Funded Learning' }
        ]}
      />

      {/* SECTION 1: HERO HEADER (Reference Image 1) */}
      <section className="pt-4 pb-3 sm:pt-6 sm:pb-4 container-custom text-center">
        <div className="relative rounded-3xl bg-slate-50/70 border border-slate-100/80 p-6 sm:p-8 lg:p-10 overflow-hidden shadow-sm">
          {/* Subtle dot matrix pattern */}
          <div 
            className="absolute inset-0 opacity-15 pointer-events-none -z-0"
            style={{
              backgroundImage: 'radial-gradient(#FF5722 1.2px, transparent 1.2px)',
              backgroundSize: '24px 24px'
            }}
          />

          <div className="relative z-10 max-w-4xl mx-auto space-y-6">
            <span className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-orange-100/80 text-[#D8232A] border border-orange-200">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Career Development & Upskilling</span>
            </span>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-slate-800 tracking-tight leading-[1.15]">
              Apprenticeships, funded learning and career pathways at NEXAAGEN
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed font-normal max-w-3xl mx-auto">
              Through our apprenticeships and funded learning pathways, we help talented people who have a desire to succeed build capability and create career opportunities.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#apprenticeships"
                className="inline-flex items-center px-6 py-3 rounded-full font-heading font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 group"
              >
                <span>Apprenticeships at NEXAAGEN</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#funded-learning"
                className="inline-flex items-center px-6 py-3 rounded-full font-heading font-bold text-xs uppercase tracking-wider text-slate-700 bg-white border border-slate-200 hover:bg-slate-100 transition-all duration-300 shadow-sm"
              >
                <span>Funded Learning</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: APPRENTICESHIPS AT NEXAAGEN (Reference Image 2) */}
      <section id="apprenticeships" className="py-4 sm:py-6 container-custom border-t border-slate-100">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Colleague Photo */}
          <div className="lg:col-span-5">
            <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-[5/4] border border-slate-100 group">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80"
                alt="NEXAAGEN Colleague thriving through apprenticeship and career growth"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-white/80">
                <span className="text-xs font-bold text-slate-800">
                  NEXAAGEN Apprenticeship Programme • Unlocking long-term career progression.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Apprenticeship Details */}
          <div className="lg:col-span-7 space-y-5">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-slate-800 tracking-tight leading-tight">
              Apprenticeships at NEXAAGEN
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              We specialise in cleaning, catering, hard services, pest control, security, and facilities management. To continue to drive best experiences, practices and outcomes, we must actively invest in the growth and development of our workforce through apprenticeships and funded learning programmes.
            </p>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Apprenticeships enable individuals to learn and develop new skills, leading to meaningful employment opportunities. These programmes are designed to provide hands-on experience and in-depth knowledge, equipping apprentices with the necessary tools to succeed in their chosen fields. Whether in cleaning, catering, hard services, pest control, security, or facilities management, our apprenticeships offer a foundational step for individuals to embark on rewarding careers within the NEXAAGEN framework.
            </p>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              We offer a variety of pathways, including cleaning, technical services, hospitality, catering, security and customer service, which provide crucial opportunities for people who want to establish, develop and progress their careers.
            </p>

            <div className="pt-2">
              <button
                onClick={() => setShowPathwaysModal(true)}
                className="inline-flex items-center px-7 py-3.5 rounded-full font-heading font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 group"
              >
                <span>Explore Available Pathways</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: FUNDED LEARNING FOR OPPORTUNITY AT NEXAAGEN (Reference Image 3) */}
      <section id="funded-learning" className="py-4 sm:py-6 container-custom bg-slate-50/70 rounded-3xl my-3 sm:my-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Funded Learning Description */}
          <div className="lg:col-span-7 space-y-5">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-slate-800 tracking-tight leading-tight">
              Funded learning for opportunity at NEXAAGEN
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Funded learning enables our colleagues to develop new skills and knowledge to progress their careers. This is incredibly important – after all, we want to create environments in which people can realise their best.
            </p>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Our funded learning opportunities span right across the business, including management and leadership, and future leadership qualifications, as well as maths and English functional skills, which ensure we’re supporting continual learning from apprentice to director level.
            </p>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Funded learning and development is an essential part of our approach at NEXAAGEN. We aim to change the ‘accidental manager’ scenario – where someone’s promoted into a managerial role because they’re excellent in their current position, regardless of their lack of managerial training, instead, planning a structured approach for promotion and career development that supports the growth plans and strategy of the business.
            </p>
          </div>

          {/* Right Column: Trainee / Engineer with Hi-Vis Vest Photo */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-2xl aspect-[4/5] max-h-[440px] w-full max-w-[360px] sm:max-w-[380px] border border-slate-100 group">
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80"
                alt="NEXAAGEN Colleague in technical high-vis vest participating in funded engineering training"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-white/80">
                <span className="text-xs font-bold text-slate-800">
                  Continuous Professional Development • From frontline apprentices to senior directors.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: GLOBAL LOCATIONS FOR REGIONAL OPPORTUNITY (Reference Image 4) */}
      <section className="py-3 sm:py-5 container-custom">
        <div className="relative rounded-3xl overflow-hidden min-h-[300px] sm:min-h-[340px] flex items-center justify-center p-6 sm:p-10 lg:p-12 text-center text-white shadow-2xl">
          {/* Background: Modern architectural glass atrium with colleagues */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=85"
              alt="Global corporate glass architecture with colleagues"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-slate-950/65" />
          </div>

          {/* Dot Matrix Pattern Overlay */}
          <div 
            className="absolute inset-0 opacity-25 pointer-events-none z-10"
            style={{
              backgroundImage: 'radial-gradient(#ffffff 1.2px, transparent 1.2px)',
              backgroundSize: '24px 24px'
            }}
          />

          {/* Center Content */}
          <div className="relative z-20 max-w-3xl mx-auto space-y-6">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight leading-tight">
              View our Global Locations for Regional Opportunity
            </h2>

            <p className="text-slate-200 text-sm sm:text-base lg:text-lg font-normal max-w-2xl mx-auto leading-relaxed">
              We’re always on the lookout for passionate, dynamic, and talented individuals who are seek opportunity and learning.
            </p>

            <div className="pt-2">
              <Link
                to="/a-z-of-spaces-and-places"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-heading font-bold text-sm text-white bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:shadow-lg hover:shadow-orange-500/30 hover:scale-105 transition-all duration-300 group"
              >
                <MapPin className="w-4 h-4 mr-2" />
                <span>Global Locations</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: TEAM STORIES (Reference Image 5) */}
      <section className="py-4 sm:py-6 container-custom border-t border-slate-100">
        <div className="space-y-6">
          {/* Header & View All Button */}
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-slate-800 tracking-tight">
              NEXAAGEN team stories
            </h2>
            <p className="text-base sm:text-lg text-slate-600">
              Inspiring career stories from the NEXAAGEN team
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

          {/* 4 Cards 2x2 Grid (Matching Screenshot 5) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 pt-2">
            {teamStories.map((item) => (
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

      {/* APPRENTICESHIP PATHWAYS MODAL */}
      {showPathwaysModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 max-h-[90vh] overflow-y-auto space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#FF5722] flex items-center justify-center font-bold">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-slate-900">
                    NEXAAGEN Apprenticeship Pathways
                  </h3>
                  <p className="text-xs text-slate-500">Structured Qualifications & Hands-on Training</p>
                </div>
              </div>
              <button
                onClick={() => setShowPathwaysModal(false)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div className="p-4 rounded-2xl bg-orange-50/50 border border-orange-100 space-y-1">
                <div className="font-bold text-[#FF5722]">Technical Hard Services</div>
                <p className="text-xs text-slate-600">Electrical engineering, HVAC, mechanical maintenance, and BMS digital controls.</p>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100 space-y-1">
                <div className="font-bold text-emerald-600">Hygiene & Environmental</div>
                <p className="text-xs text-slate-600">BICSc-certified advanced cleaning, bio-decontamination, and clinical sanitation.</p>
              </div>

              <div className="p-4 rounded-2xl bg-blue-50/50 border border-blue-100 space-y-1">
                <div className="font-bold text-blue-600">Leadership & Management</div>
                <p className="text-xs text-slate-600">ILM / CMI management apprenticeships eliminating the ‘accidental manager’ barrier.</p>
              </div>

              <div className="p-4 rounded-2xl bg-purple-50/50 border border-purple-100 space-y-1">
                <div className="font-bold text-purple-600">Security & Aviation Services</div>
                <p className="text-xs text-slate-600">Airside operations, passenger logistics, access control, and emergency response.</p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex justify-end gap-3">
              <button
                onClick={() => setShowPathwaysModal(false)}
                className="px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
              >
                Close
              </button>
              <Link
                to="/contact"
                onClick={() => setShowPathwaysModal(false)}
                className="px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#FF5722] to-[#D8232A] text-white hover:shadow-md transition-all"
              >
                Apply for Apprenticeships
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

