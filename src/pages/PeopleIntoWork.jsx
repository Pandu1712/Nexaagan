import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Users,
  Briefcase,
  HeartHandshake,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Sparkles,
  Building2,
  Award,
  Target,
  ShieldCheck,
  ExternalLink,
  Phone,
  MessageSquare
} from 'lucide-react';
import Breadcrumbs from '../components/layout/Breadcrumbs';

export default function PeopleIntoWork() {
  const [openFaq, setOpenFaq] = useState(null);
  const [selectedArticle, setSelectedArticle] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: 'What is the People into Work programme?',
      a: 'Developed by the NEXAAGEN Foundation, People into Work is an innovative mentoring and employment pathway created for the facilities management sector. It proactively identifies, prepares, and supports individuals facing significant structural barriers to employment—including military veterans, neurodivergent individuals, people with physical or learning disabilities, and the long-term unemployed—transitioning them into secure, living-wage roles.'
    },
    {
      q: 'How does the People into Work programme work?',
      a: 'The programme operates through strategic alliances with accredited charities, social enterprises, and local employment councils. Candidates undergo a comprehensive pre-placement orientation, practical workplace shadowing, and are paired with a certified NEXAAGEN frontline mentor. Wraparound support includes travel coordination, workplace adjustments, peer buddying, and continued one-on-one coaching throughout their first year.'
    },
    {
      q: 'What roles do People into Work participants take on?',
      a: 'Participants enter diverse operational and technical roles across our corporate, healthcare, aviation, manufacturing, and critical infrastructure portfolios. Common positions include guest concierge, customer experience hosts, technical facility assistants, environmental hygiene specialists, security coordinators, and administrative support specialists, with structured progression into supervisor and apprentice tracks.'
    },
    {
      q: 'What challenges have participants commonly encountered?',
      a: 'Common challenges include lack of recent workplace confidence, travel anxiety, unfamiliarity with modern digital workplace systems, or specific physical and sensory adjustment needs. The NEXAAGEN Foundation directly addresses these through pre-employment confidence workshops, tailored ergonomic adjustments, assistive technology, and dedicated mental health and wellbeing champions on-site.'
    },
    {
      q: 'Why is the People into Work programme important?',
      a: 'Beyond addressing skilled labour shortages in a tight employment market, People into Work generates profound social value—delivering an estimated £20,000 (₹20,00,000) in proxy social return per participant. It fosters higher colleague retention, enriches workplace diversity, enhances client ESG compliance, and restores personal dignity and financial independence to deserving individuals.'
    }
  ];

  const accreditations = [
    {
      name: 'Disability Confident Employer',
      badge: 'DISABILITY CONFIDENT',
      sub: 'LEADER LEVEL 2',
      color: 'border-purple-200 bg-purple-50/50 text-purple-900'
    },
    {
      name: 'ilm Approved Centre',
      badge: 'ilm',
      sub: 'Approved Centre',
      color: 'border-slate-200 bg-slate-50 text-slate-800'
    },
    {
      name: 'Armed Forces Covenant',
      badge: 'ARMED FORCES COVENANT',
      sub: 'Proudly supporting those who serve',
      color: 'border-amber-200 bg-amber-50/50 text-amber-900'
    },
    {
      name: 'IWFM',
      badge: 'iwfm',
      sub: 'Institute of Workplace and Facilities Management',
      color: 'border-teal-200 bg-teal-50/50 text-teal-900'
    },
    {
      name: 'Slave-Free Alliance',
      badge: 'SLAVE-FREE ALLIANCE',
      sub: 'Working towards a Slave-Free Supply Chain',
      color: 'border-blue-200 bg-blue-50/50 text-blue-900'
    },
    {
      name: 'Race at Work Charter',
      badge: 'RACE AT WORK CHARTER',
      sub: 'Signatory Employer',
      color: 'border-rose-200 bg-rose-50/50 text-rose-900'
    }
  ];

  const newsItems = [
    {
      id: 'news-aviation-sixty',
      title: 'Sixty Years of Global Aviation Services: One Standard, Uncompromising Excellence',
      author: 'NEXAAGEN Team',
      date: '24 Aug, 2026',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
      tag: 'Aviation & Social Value',
      excerpt: 'Celebrating decades of world-class terminal operations, PRM mobility assistance, and social mobility leadership across international airports.',
      fullContent: 'Our aviation division has set the benchmark for global airport terminal management. By integrating People into Work candidates across passenger assistance and terminal services, we deliver both operational precision and profound social value.'
    },
    {
      id: 'news-data-centre-60-days',
      title: 'The 60 Days That Decide a Data Centre’s Life: Why Pre-Commissioning FM Matters',
      author: 'NEXAAGEN Team',
      date: '16 Jul, 2026',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
      tag: 'Critical Environments',
      excerpt: 'Why ISO 14644 cleanroom protocols and trained critical facilities teams are essential before servers go live.',
      fullContent: 'Critical infrastructure demands zero margin of error. Our specialized pre-commissioning teams, trained through dedicated technical academies, ensure spotless airborne particulate control, thermal calibration, and mechanical integrity.'
    },
    {
      id: 'news-airport-transformation',
      title: 'Inside India’s Airport Transformation: Why FM is Moving From Janitorial to Experience Design',
      author: 'NEXAAGEN Team',
      date: '09 Jul, 2026',
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80',
      tag: 'Experience Design',
      excerpt: 'How modern Indian airports are utilizing intelligent sensors, customer care ambassadors, and inclusive hiring.',
      fullContent: 'India’s aviation hubs are now architectural marvels. NEXAAGEN provides seamless terminal experience management, combining IoT washroom sensors, baggage hospitality ambassadors, and inclusive employment tracks.'
    },
    {
      id: 'news-post-construction-cleaning',
      title: 'Why Post-Construction Cleaning Is Critical for Data Centre Commissioning',
      author: 'NEXAAGEN Team',
      date: '06 Jul, 2026',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
      tag: 'Technical Hygiene',
      excerpt: 'Post-construction cleaning is a critical milestone before server rack loading and live facility handover.',
      fullContent: 'Microscopic construction debris can trigger catastrophic hardware failure. NEXAAGEN deploys HEPA-filtered cleanroom extraction, zinc-whisker remediation, and anti-static surface treatments certified to international data centre standards.'
    }
  ];

  return (
    <div className="w-full flex flex-col flex-1 bg-transparent text-slate-900 font-sans overflow-hidden">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'ESG', link: '/esg' },
          { label: 'NEXAAGEN Foundation', link: '/foundation' },
          { label: 'People into Work' }
        ]}
      />

      {/* ========================================================================= */}
      {/* SECTION 1: HERO - PIONEERING 'PEOPLE INTO WORK' (Screenshot 1)            */}
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
            Pioneering ‘People into Work’
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto font-normal">
            Launched by the NEXAAGEN Foundation, People into Work is a mentoring programme created for and shared with the wider facilities management industry to help deliver social value.
          </p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: PEOPLE AND PURPOSE DELIVERING ON ALL FRONTS (Screenshot 2)     */}
      {/* ========================================================================= */}
      <section className="py-4 sm:py-6 container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Narrative Copy */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-brand-navy tracking-tight leading-tight">
              People and purpose delivering on all fronts
            </h2>

            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              <p>
                The ‘People into Work’ programme, developed by the NEXAAGEN Foundation, stands as a landmark effort within the facilities management industry, adeptly tackling recruitment challenges whilst advancing Environmental, Social, and Governance (ESG) goals. This initiative opens doors to employment for those traditionally overlooked and often marginalised, including veterans, individuals with disabilities, neurodivergent and the long-term unemployed.
              </p>

              <p>
                Through strategic partnerships with charities and social enterprises, we’re proud that ‘People into Work’ has transcended mere job placements; it’s about nurturing community enrichment and individual growth. The programme has proven effective in diversifying our workforce, reducing colleague turnover, meeting customer ESG requirements and enhancing operational efficiency.
              </p>
            </div>
          </div>

          {/* Right Column: Colleague Photo in Orange Top */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-xl aspect-[4/5] max-h-[440px] w-full max-w-[360px] sm:max-w-[380px] border border-slate-100 group">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80"
                alt="NEXAAGEN Colleague thriving through People into Work programme"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: DEMONSTRATING THE BUSINESS CASE (Screenshot 3)                  */}
      {/* ========================================================================= */}
      <section className="py-4 sm:py-6 bg-transparent border-y border-slate-100">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Colleagues Mentoring Photo */}
            <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center lg:justify-start">
              <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-xl aspect-[4/5] max-h-[440px] w-full max-w-[360px] sm:max-w-[380px] border border-slate-100 group">
                <img
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80"
                  alt="NEXAAGEN Mentorship and group coaching session"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/25 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Right Column: Narrative Copy */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-brand-navy tracking-tight leading-tight">
                Demonstrating the business case for People into Work
              </h2>

              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                <p>
                  The <span className="font-semibold text-slate-800">People into Work</span> business case is compelling, proven and multi-dimensional. In a constrained labour market, the programme offers an innovative approach by tapping into underrepresented talent pools, thus addressing the skilled worker shortage in the facilities management sector. Its social impact is substantial, with the transition of individuals into gainful employment valued at around <span className="font-semibold text-slate-900">£20,000 (₹20 Lakhs) per person</span>. This transition benefits not just the individuals and their families but also contributes significantly to broader community welfare.
                </p>

                <p>
                  People into Work encourages loyalty and a more stable and committed team, as indicated by lower colleague turnover rates than industry averages. People into Work aligns with the increasing demand from customers for service providers who can demonstrate community impact and legacy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: MEANINGFUL SOCIAL IMPACT (Screenshot 4)                         */}
      {/* ========================================================================= */}
      <section className="py-4 sm:py-6 container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Narrative Copy */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-brand-navy tracking-tight leading-tight">
              Meaningful social impact delivering transformation
            </h2>

            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              <p>
                People into Work’s success in integrating marginalised individuals into the workforce demonstrates its potential for significantly altering lives, offering pathways to independence, dignity and community integration.
              </p>

              <p>
                The NEXAAGEN Foundation invites other organisations to adopt this model of social change. If your organisation is inspired by the prospect of positively impacting lives while addressing recruitment needs and enhancing your social responsibility footprint, consider embracing the People into Work programme.
              </p>

              <p>
                This initiative extends beyond recruitment; it’s an opportunity to join a sustainable movement that helps to reshape lives and strengthens communities.
              </p>
            </div>
          </div>

          {/* Right Column: Outdoor smiling worker */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-xl aspect-[4/5] max-h-[440px] w-full max-w-[360px] sm:max-w-[380px] border border-slate-100 group">
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=80"
                alt="Empowered colleague thriving in career"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5: FREQUENTLY ASKED QUESTIONS (Screenshot 5)                      */}
      {/* ========================================================================= */}
      <section className="py-4 sm:py-6 container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
          {/* Left Column: Contact Card */}
          <div className="lg:col-span-4 bg-[#FAF8F5] rounded-3xl p-6 sm:p-8 border border-slate-200/80 space-y-4">
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-brand-navy">
              Frequently Asked Questions
            </h3>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              If you would like further information on People into Work or are interested in implementing the programme, please contact our team.
            </p>

            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-heading font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300"
              >
                <span>Contact Us</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-8 divide-y divide-slate-200">
            {faqs.map((faq, idx) => (
              <div key={idx} className="py-5 sm:py-6 first:pt-0">
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between text-left group gap-4 focus:outline-none"
                >
                  <span className="text-base sm:text-lg font-heading font-medium text-slate-800 group-hover:text-[#FF5722] transition-colors">
                    {faq.q}
                  </span>
                  <div className="w-8 h-8 rounded-full border border-orange-200 text-[#FF5722] flex items-center justify-center flex-shrink-0 group-hover:border-[#FF5722] transition-colors">
                    {openFaq === idx ? (
                      <span className="text-lg leading-none font-light">−</span>
                    ) : (
                      <span className="text-lg leading-none font-light">+</span>
                    )}
                  </div>
                </button>

                {openFaq === idx && (
                  <div className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed pr-8 animate-fade-in font-normal">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 6: ACCREDITATIONS & CERTIFICATIONS (Screenshot 6)                 */}
      {/* ========================================================================= */}
      <section className="py-4 sm:py-6 bg-transparent border-y border-slate-100">
        <div className="container-custom text-center space-y-3 mb-4 sm:mb-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-brand-navy tracking-tight leading-tight">
            Accreditations & Certifications
          </h2>
          <p className="text-slate-500 text-sm sm:text-base font-normal max-w-2xl mx-auto">
            Strategic partnerships and alliances that help enable the best outcomes for colleagues, customers and communities.
          </p>
        </div>

        {/* Badges Strip */}
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {accreditations.map((badge, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-4 border ${badge.color} flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-all duration-300 min-h-[110px]`}
            >
              <span className="text-xs font-bold tracking-tight block">
                {badge.badge}
              </span>
              <span className="text-[10px] opacity-75 mt-1 block leading-tight">
                {badge.sub}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 7: CONNECT WITH YOUR LOCAL TEAM BANNER (Screenshot 7)             */}
      {/* ========================================================================= */}
      <section className="py-3 sm:py-5 container-custom">
        <div className="relative rounded-3xl overflow-hidden bg-[#0A192F] text-white p-6 sm:p-10 lg:p-12 text-center shadow-2xl">
          {/* Subtle Dot Grid Watermark */}
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(#60A5FA 1.2px, transparent 1.2px)',
              backgroundSize: '22px 22px'
            }}
          />

          <div className="relative z-10 max-w-3xl mx-auto space-y-5">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-brand-navy tracking-tight leading-tight">
              Connect with your local team
            </h2>

            <p className="text-slate-300 text-sm sm:text-base lg:text-lg font-normal leading-relaxed">
              Joining the NEXAAGEN team means becoming part of a global organisation committed to making a difference. NEXAAGEN careers offer more than just job opportunities; they provide a chance to be part of a purpose-driven journey where your efforts contribute to transforming environments and enriching lives.
            </p>

            <p className="text-slate-400 text-xs sm:text-sm font-medium">
              Explore your potential and become a part of our impactful story.
            </p>

            <div className="pt-4">
              <Link
                to="/a-z-of-spaces-and-places"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-heading font-bold text-sm text-white bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:shadow-lg hover:shadow-orange-500/30 hover:scale-105 transition-all duration-300"
              >
                <span>Global Locations</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 8: NEXAAGEN NEWS & UPDATES (Screenshots 8 & 9)                    */}
      {/* ========================================================================= */}
      <section className="py-4 sm:py-6 container-custom">
        {/* Header */}
        <div className="text-center space-y-3 mb-4 sm:mb-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-brand-navy tracking-tight leading-tight">
            NEXAAGEN News & Updates
          </h2>
          <p className="text-slate-500 text-sm sm:text-base font-normal">
            Stay connected with our social value progress and outcomes.
          </p>
        </div>

        {/* 4 Cards Grid */}
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

      {/* ARTICLE MODAL */}
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
              >
                ✕
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span className="px-3 py-1 rounded-full bg-orange-100 text-[#EA580C] font-bold uppercase tracking-wider">
                  {selectedArticle.tag}
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
