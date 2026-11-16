import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  History as HistoryIcon,
  Sparkles,
  Award,
  CheckCircle2,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Building2,
  Users,
  Globe2,
  ShieldCheck,
  Calendar,
  X
} from 'lucide-react';
import Breadcrumbs from '../components/layout/Breadcrumbs';

export default function HistoryHeritage() {
  const [activeTimelineIndex, setActiveTimelineIndex] = useState(0);
  const [selectedArticle, setSelectedArticle] = useState(null);

  // Timeline milestones (Screenshot 2)
  const timelineMilestones = [
    {
      id: 'era-1',
      year: '1900',
      title: 'Humble Beginnings & Vision',
      subtitle: 'NEXAAGEN was founded on principles of meticulous care, consistency and customer trust.',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
      description: 'Starting with dedicated individual commitment, our founders set out with a simple premise: provide unmatched operational reliability and treat every building with meticulous dignity.'
    },
    {
      id: 'era-2',
      year: '1928',
      title: 'Commercial Scale & Expansion',
      subtitle: 'Pioneering structured multi-service contracts for landmark civic estates.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      description: 'As urban skylines grew, NEXAAGEN introduced structured shift engineering, standardized cleaning chemistry, and formal apprentice training programmes.'
    },
    {
      id: 'era-3',
      year: '1930',
      title: 'Unified Corporate Identity',
      subtitle: 'Adopting a unified enterprise brand to serve national commercial customers.',
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80',
      description: 'A major rebrand unified regional branches under a single standard of excellence, setting new benchmarks for corporate hygiene, hospitality and security.'
    },
    {
      id: 'era-4',
      year: '1950',
      title: 'Post-War Reconstruction & Tech',
      subtitle: 'Deploying motorized sweepers, air filtration and specialized hospital protocols.',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80',
      description: 'Rapid modernization saw NEXAAGEN introduce scientific dust-removal technologies and calibrated sanitization for critical healthcare infrastructure.'
    },
    {
      id: 'era-5',
      year: '1958',
      title: 'Aviation & Critical Hubs',
      subtitle: 'Pioneering international passenger terminal operations and PRM mobility.',
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80',
      description: 'NEXAAGEN entered the aviation sector, engineering round-the-clock ground mobility, passenger escort services, and cleanroom maintenance for high-tempo terminals.'
    },
    {
      id: 'era-6',
      year: 'Present',
      title: 'Next-Gen Global Leadership',
      subtitle: 'A 130,000-strong global workforce empowered by smart IoT and ESG leadership.',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
      description: 'Today, NEXAAGEN operates across 18 countries, delivering integrated facilities management powered by predictive robotics, IoT telemetry, and verified Net Zero targets.'
    }
  ];

  // Recent History News Items (Screenshot 7)
  const recentHistoryArticles = [
    {
      id: 'recent-1',
      tag: 'Our People',
      title: 'The Power of Listening: Why our colleague engagement survey drives change',
      excerpt: 'Group-wide colleague survey launching across all operational hubs to empower frontline staff and enhance career progression.',
      author: 'Valerie Dale',
      date: '05 Jan, 2024',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80',
      content: `Listening to our 130,000 frontline colleagues is central to NEXAAGEN's culture of mutual respect, equality, and operational excellence.

Our annual group-wide colleague survey provides every team member with a direct, confidential channel to share feedback, propose improvements, and help shape working conditions.

Key initiatives born from colleague survey feedback include:
- The expansion of funded apprenticeships and digital language learning tools.
- Ergonomic upgrades to frontline uniform materials and equipment.
- Accelerated rollout of the NEXAAGEN TRUE Stars colleague recognition awards.`
    },
    {
      id: 'recent-2',
      tag: 'Innovation',
      title: 'NEXAAGEN Launches Hidden Disabilities Sunflower Lanyard Scheme',
      excerpt: 'NEXAAGEN launches the globally recognized sunflower initiative across major transport hubs and shopping destinations.',
      author: 'DE&I Team',
      date: '04 Jan, 2024',
      image: 'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=800&q=80',
      content: `NEXAAGEN has proudly partnered with the Hidden Disabilities Sunflower network to roll out comprehensive accessibility and empathy training across all managed transport hubs, corporate campuses, and retail complexes.

Frontline customer care ambassadors and security officers now undergo specialized de-escalation and assistance training to recognize and support visitors who may need extra time, quiet spaces, or discrete assistance.

"Accessibility is not merely a compliance checklist; it is an active reflection of our core value of Respect," stated our Head of Diversity, Equity & Inclusion.`
    },
    {
      id: 'recent-3',
      tag: 'Group CEO',
      title: 'Reflection on the First Year as New NEXAAGEN by Rob Legge, Group CEO',
      excerpt: 'A reflection on our landmark milestones, colleague empowerment achievements, and future digital FM roadmap.',
      author: 'Rob Legge, Group CEO',
      date: '20 Dec, 2023',
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80',
      content: `One year on from the strategic unification of our international divisions, Group CEO Rob Legge shares his perspective on the unprecedented momentum of NEXAAGEN worldwide.

"Over the past 12 months, we have demonstrated that putting people first is the strongest commercial strategy in existence," Rob remarked. "By unifying our brand, accelerating robotics deployment, and investing heavily in apprentice career development, we are redefining what modern facilities management delivers."

The CEO also outlined upcoming milestones for 2024–2026, focusing on automated IoT telemetry, predictive ESG carbon accounting, and landmark contract expansions across Asia-Pacific and the Middle East.`
    },
    {
      id: 'recent-4',
      tag: 'Acquisition',
      title: 'Merger Completes Between Premier Regional Operators to Form New NEXAAGEN',
      excerpt: 'Strategic consolidation combines technical engineering mastery, international aviation presence, and ESG leadership.',
      author: 'M&A Team',
      date: '31 Dec, 2023',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      content: `The landmark consolidation between premier regional facility management operators has officially concluded, solidifying NEXAAGEN as one of the world's most formidable integrated enterprise service partners.

With combined operational revenues exceeding £1.7 billion and a workforce surpassing 130,000 colleagues, the unified company brings together deep sector specialisms across healthcare hygiene, hyperscale data centres, passenger transit terminals, and corporate headquarter campuses.`
    }
  ];

  const nextMilestone = () => {
    setActiveTimelineIndex((prev) => (prev + 1) % timelineMilestones.length);
  };

  const prevMilestone = () => {
    setActiveTimelineIndex((prev) => (prev - 1 + timelineMilestones.length) % timelineMilestones.length);
  };

  return (
    <div className="w-full flex flex-col flex-1 bg-white text-slate-900 font-sans overflow-hidden">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'About Us', link: '/about' },
          { label: 'History and Heritage' }
        ]}
      />

      {/* ========================================================================= */}
      {/* SECTION 1: HERO - HISTORY AND HERITAGE (Screenshot 1)                     */}
      {/* ========================================================================= */}
      <section className="pt-4 pb-3 sm:pt-6 sm:pb-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="relative rounded-[32px] sm:rounded-[36px] bg-[#104856] text-white overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center">
          {/* Left Hero Card */}
          <div className="p-6 sm:p-10 lg:p-12 lg:w-3/5 z-10">
            <div className="bg-white rounded-3xl p-5 sm:p-8 text-slate-900 shadow-xl max-w-lg space-y-3.5">
              <div className="flex items-center space-x-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[#FF5722] to-[#D8232A]">
                  Join Our Mission
                </span>
                <Link
                  to="/careers"
                  className="text-xs font-bold text-slate-600 hover:text-brand-orange inline-flex items-center gap-1 transition-colors"
                >
                  <span>Careers</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <h1 className="text-2xl sm:text-4xl font-heading font-extrabold text-slate-900 tracking-tight">
                History and heritage
              </h1>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                Beginning as a modest one-person cleaning operation in 1900, we've expanded globally, now encompassing a diverse team of over 130,000 colleagues in facilities management worldwide.
              </p>
            </div>
          </div>

          {/* Right Heritage Graphic / Visual */}
          <div className="lg:w-2/5 w-full relative aspect-[4/3] lg:aspect-auto self-stretch overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80"
              alt="NEXAAGEN Historic Craftsmanship and Heritage"
              className="w-full h-full object-cover object-center brightness-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#104856] via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: OUR HISTORY TIMELINE STRIP (Screenshot 2)                      */}
      {/* ========================================================================= */}
      <section className="py-3 sm:py-5 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Header & Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-4 sm:mb-6">
          <div className="max-w-2xl space-y-1.5">
            <h2 className="text-2xl sm:text-4xl font-heading font-medium sm:font-semibold text-[#222222] tracking-tight">
              Our history
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm sm:text-base leading-relaxed font-normal">
              From the beginning to present day, the NEXAAGEN story is one of dedication to people, consistency and outcomes.
            </p>
          </div>

          <div className="flex items-center space-x-2 shrink-0">
            <button
              onClick={prevMilestone}
              className="w-9 h-9 rounded-full border border-slate-200 text-slate-600 hover:text-black hover:border-slate-400 hover:bg-slate-50 flex items-center justify-center transition-colors shadow-sm"
              aria-label="Previous era"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextMilestone}
              className="w-9 h-9 rounded-full border border-slate-200 text-slate-600 hover:text-black hover:border-slate-400 hover:bg-slate-50 flex items-center justify-center transition-colors shadow-sm"
              aria-label="Next era"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Milestone Cards Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 sm:gap-4">
          {timelineMilestones.map((item, idx) => {
            const isSelected = activeTimelineIndex === idx;
            return (
              <div
                key={item.id}
                onClick={() => setActiveTimelineIndex(idx)}
                className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 group ${isSelected
                    ? 'lg:col-span-2 shadow-2xl ring-2 ring-[#FF5722]'
                    : 'lg:col-span-1 opacity-80 hover:opacity-100 shadow-md hover:shadow-lg'
                  } aspect-[3/5] sm:aspect-[3/4] lg:aspect-[2/3]`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/50 to-transparent" />

                {/* Year Badge */}
                <div className="absolute top-3 left-3">
                  <div className={`px-2.5 py-0.5 rounded-full text-xs font-bold shadow-md transition-colors ${isSelected
                      ? 'bg-[#FF5722] text-white'
                      : 'bg-white/90 backdrop-blur text-slate-900'
                    }`}>
                    {item.year}
                  </div>
                </div>

                {/* Text Content */}
                <div className="absolute bottom-3 left-3 right-3 text-white space-y-0.5">
                  <h3 className="text-xs sm:text-sm font-heading font-bold leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-slate-200 line-clamp-2 leading-relaxed font-normal">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: HUMBLE BEGINNINGS IN 1900 (Screenshot 3)                       */}
      {/* ========================================================================= */}
      <section className="py-3 sm:py-5 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="bg-[#FAF8F5] rounded-[32px] sm:rounded-[40px] p-5 sm:p-8 lg:p-10 border border-slate-100/80 shadow-sm space-y-6">
          <div className="text-center space-y-1.5 max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-4xl font-heading font-medium sm:font-semibold text-[#222222] tracking-tight">
              Humble beginnings in 1900
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm sm:text-base leading-relaxed font-normal">
              Our storied history began in 1900 through the drive and vision of one person, a ladder, mop and bucket.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Heritage Founder Portrait */}
            <div className="lg:col-span-5">
              <div className="relative rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-xl aspect-[4/5] border border-slate-100 bg-white group">
                <img
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80"
                  alt="Founder of NEXAAGEN at Heritage Work Desk"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 sepia-[0.3]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Right Column: 3 Narrative Blocks */}
            <div className="lg:col-span-7 space-y-5">
              <div className="space-y-1.5 pl-4 border-l-2 border-emerald-600">
                <h3 className="text-base sm:text-lg font-heading font-bold text-slate-900">
                  Founding Vision & Principles
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  The history of NEXAAGEN is a remarkable tale of vision, expansion, and adaptation. Founded at the dawn of the 20th century, the company began as a humble window cleaning service, started with just one part-time employee, a ladder, a pail, and a pushcart.
                </p>
              </div>

              <div className="space-y-1.5 pl-4 border-l-2 border-transparent">
                <h3 className="text-base sm:text-lg font-heading font-bold text-slate-900">
                  One person and a vision
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  A vision of a customer-focused business set the stage for over a century of extraordinary growth and evolution. A founder ahead of their time likely never imagined that this small venture would transform into the global business it is today. Today, NEXAAGEN is a testament to that vision, with a team of over 130,000 serving over 8,000 customers.
                </p>
              </div>

              <div className="space-y-1.5 pl-4 border-l-2 border-transparent">
                <h3 className="text-base sm:text-lg font-heading font-bold text-slate-900">
                  Reputation built on consistency
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  In the early 20th century, marketing was far less formalised than today. The founding approach relied heavily on word-of-mouth and building a solid reputation locally. Customer-centric service remains a core principle of the company to this day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: EVOLUTION & REBRANDING (Screenshot 4)                          */}
      {/* ========================================================================= */}
      <section className="py-3 sm:py-5 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="bg-[#FAF8F5] rounded-[32px] sm:rounded-[40px] p-5 sm:p-8 lg:p-10 border border-slate-100/80 shadow-sm space-y-6">
          <div className="text-center space-y-2 max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-4xl font-heading font-medium sm:font-semibold text-[#222222] tracking-tight">
              Expanding horizons & building resilience
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm sm:text-base leading-relaxed font-normal">
              As the business moved towards its major expansion phases, frontline colleagues were already demonstrating the courage and care that defines us.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Heritage Van Driver Colleague */}
            <div className="lg:col-span-5">
              <div className="relative rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-xl aspect-[4/5] border border-slate-100 bg-white group">
                <img
                  src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80"
                  alt="NEXAAGEN Heritage Service Driver Colleague"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Right Column: 3 Narrative Blocks */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2 pl-4 border-l-2 border-emerald-600">
                <h3 className="text-base sm:text-lg font-heading font-bold text-slate-900">
                  Frontline everyday heroes
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Our archives recount numerous instances of frontline colleagues demonstrating selfless bravery — stopping their service vans to help citizens in danger, saving lives, and protecting client assets ahead of emergency services. We salute that enduring spirit of service.
                </p>
              </div>

              <div className="space-y-2 pl-4 border-l-2 border-transparent">
                <h3 className="text-base sm:text-lg font-heading font-bold text-slate-900">
                  Modern enterprise consolidation
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Adapting to evolving customer needs, the firm expanded into office cleaning, property maintenance, security, and specialized technical operations, establishing regional operational hubs across commercial corridors.
                </p>
              </div>

              <div className="space-y-2 pl-4 border-l-2 border-transparent">
                <h3 className="text-base sm:text-lg font-heading font-bold text-slate-900">
                  Organic growth and market reach
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Through entrepreneurial vigor and disciplined organic growth, the business broadened its market reach, capturing enterprise contracts across banking, industrial manufacturing, and major transport terminals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5: 1960S INNOVATION & SCIENTIFIC METHODS (Screenshot 5)           */}
      {/* ========================================================================= */}
      <section className="py-3 sm:py-5 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="bg-[#FAF8F5] rounded-[32px] sm:rounded-[40px] p-5 sm:p-8 lg:p-10 border border-slate-100/80 shadow-sm space-y-6">
          <div className="text-center space-y-1.5 max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-4xl font-heading font-medium sm:font-semibold text-[#222222] tracking-tight">
              Pioneering scientific facility methods
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm sm:text-base leading-relaxed font-normal">
              NEXAAGEN pioneered innovative and scientific methods of cleaning – including dust-removing door mat chemicals and microscopic filtration.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Vintage Street / Headquarters Archival Photo */}
            <div className="lg:col-span-5">
              <div className="relative rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-xl aspect-[4/5] border border-slate-100 bg-white group">
                <img
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80"
                  alt="NEXAAGEN Mid-Century Archival Street Scene"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Right Column: 3 Narrative Blocks */}
            <div className="lg:col-span-7 space-y-5">
              <div className="space-y-1.5 pl-4 border-l-2 border-emerald-600">
                <h3 className="text-base sm:text-lg font-heading font-bold text-slate-900">
                  Culture of camaraderie and optimism
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Archival records celebrate a vibrant workplace culture, where teamwork, good humor, and mutual care created an environment where colleagues took immense pride in their craftsmanship and site leadership.
                </p>
              </div>

              <div className="space-y-1.5 pl-4 border-l-2 border-transparent">
                <h3 className="text-base sm:text-lg font-heading font-bold text-slate-900">
                  Sharing innovations with customers
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  As NEXAAGEN continued to grow and capture market share, the business continuously shared innovations in hygiene chemistry and automated equipment directly with customers to optimize operational expenditure.
                </p>
              </div>

              <div className="space-y-1.5 pl-4 border-l-2 border-transparent">
                <h3 className="text-base sm:text-lg font-heading font-bold text-slate-900">
                  Heading out of economic shifts with strength
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Under a unified leadership structure, the team navigated complex economic cycles, standing firm in unity and proving that resilient operations are built on reliable partnerships.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 6: OVER 100 YEARS OF INNOVATION (Screenshot 6)                    */}
      {/* ========================================================================= */}
      <section className="py-3 sm:py-5 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="bg-[#FAF8F5] rounded-[32px] sm:rounded-[40px] p-5 sm:p-8 lg:p-10 border border-slate-100/80 shadow-sm space-y-6">
          <div className="text-center space-y-1.5 max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-4xl font-heading font-medium sm:font-semibold text-[#222222] tracking-tight">
              Over 100 years of innovation
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm sm:text-base leading-relaxed font-normal">
              NEXAAGEN's approach to innovative and scientific methods of service delivery has redefined standards for generations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Vintage Newsletter & Supervisor Portraits */}
            <div className="lg:col-span-5">
              <div className="relative rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-xl aspect-[4/5] border border-slate-100 bg-white group">
                <img
                  src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80"
                  alt="Archival Newsletter and Senior Female Supervisors at NEXAAGEN"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Right Column: 3 Narrative Blocks */}
            <div className="lg:col-span-7 space-y-5">
              <div className="space-y-1.5 pl-4 border-l-2 border-emerald-600">
                <h3 className="text-base sm:text-lg font-heading font-bold text-slate-900">
                  Service is a science
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Company archives document dedicated supervisors with 25+ years of tenure declaring that facility service is a science. Meticulously calibrated chemical dilution, ergonomic tools, and contamination prevention protocols were far ahead of their time.
                </p>
              </div>

              <div className="space-y-1.5 pl-4 border-l-2 border-transparent">
                <h3 className="text-base sm:text-lg font-heading font-bold text-slate-900">
                  Dust and moisture capture systems
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Early technical campaigns engineered barrier mats and electrostatic dust attractors that protected delicate commercial interiors, reducing deep maintenance cycles and preserving building flooring.
                </p>
              </div>

              <div className="space-y-1.5 pl-4 border-l-2 border-transparent">
                <h3 className="text-base sm:text-lg font-heading font-bold text-slate-900">
                  Recognition of our early stars
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Company newsletters have consistently celebrated frontline excellence, heroic community deeds, and long-service milestones. That tradition lives on directly today in the <Link to="/our-colleagues" className="font-semibold text-slate-900 underline decoration-orange-400 hover:text-brand-orange">NEXAAGEN TRUE Stars</Link> programme.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 7: OUR RECENT HISTORY (Screenshot 7)                              */}
      {/* ========================================================================= */}
      <section className="py-4 sm:py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="bg-[#FAF8F5] rounded-[32px] sm:rounded-[40px] p-5 sm:p-8 lg:p-10 border border-slate-100/80 shadow-sm space-y-6 sm:space-y-8">
          <div className="text-center space-y-2 max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-4xl font-heading font-medium sm:font-semibold text-[#222222] tracking-tight">
              Our recent history
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm sm:text-base leading-relaxed font-normal">
              Find out more from today's world of NEXAAGEN.
            </p>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {recentHistoryArticles.map((article) => (
              <div
                key={article.id}
                onClick={() => setSelectedArticle(article)}
                className="bg-white rounded-3xl border border-slate-100 hover:border-orange-200 overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer group"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-[#EA580C] uppercase tracking-wider shadow-sm">
                    {article.tag}
                  </div>
                </div>

                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-3">
                  <div className="space-y-1.5">
                    <h3 className="text-sm sm:text-base font-heading font-bold text-slate-900 group-hover:text-[#FF5722] transition-colors line-clamp-2 leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>

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
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 8: CONNECT WITH YOUR NEXAAGEN TEAM (Screenshot 8)                 */}
      {/* ========================================================================= */}
      <section className="py-3 sm:py-5 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="relative rounded-[32px] sm:rounded-[40px] bg-[#0A192F] p-6 sm:p-8 lg:p-10 text-white text-center overflow-hidden shadow-2xl space-y-4">
          <div
            className="absolute left-0 top-0 bottom-0 w-1/3 opacity-25 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(#FFFFFF 1.2px, transparent 1.2px)',
              backgroundSize: '16px 16px'
            }}
          />

          <div className="relative z-10 max-w-3xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold tracking-tight">
              Connect with your NEXAAGEN team
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm lg:text-base leading-relaxed font-normal">
              We're ready to deliver the best experiences, productivity, practices, resilience and outcomes and we look forward to connecting with you and your team.
            </p>
            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-7 py-2.5 rounded-full font-heading font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:shadow-lg hover:shadow-orange-500/30 hover:scale-105 transition-all duration-300"
              >
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
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

              <div className="flex items-center space-x-3 text-xs text-slate-400 py-1 border-y border-slate-100">
                <span className="font-semibold text-slate-700">{selectedArticle.author}</span>
                <span>•</span>
                <span>{selectedArticle.date}</span>
              </div>

              <div className="text-sm sm:text-base text-slate-600 leading-relaxed whitespace-pre-line">
                {selectedArticle.content}
              </div>

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

