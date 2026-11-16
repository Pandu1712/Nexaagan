import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Briefcase, 
  Users, 
  GraduationCap, 
  Heart, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  MapPin, 
  Calendar, 
  Building2, 
  Compass, 
  X,
  Award
} from 'lucide-react';
import Breadcrumbs from '../components/layout/Breadcrumbs';

export default function Careers() {
  const [selectedStory, setSelectedStory] = useState(null);

  // Team stories data (Screenshot 6)
  const stories = [
    {
      id: 'story-nz-student',
      tag: 'Social Value',
      title: 'NEXAAGEN New Zealand: College student set to soar with life-changing internship',
      excerpt: 'A college student with a passion for electrical engineering gains hands-on aviation facility experience through our sponsored vocational programme.',
      author: 'NEXAAGEN Foundation',
      date: '17 Nov, 2023',
      image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80',
      content: `Through a pioneering partnership between the NEXAAGEN Foundation and local educational institutions in Auckland, college student Tane gained a fully funded 12-month vocational apprenticeship with our airport engineering teams.

Starting with ground baggage-conveyor telemetry and terminal lighting diagnostics, Tane received direct one-on-one mentorship from senior facility managers.

"Before this opportunity, getting into commercial facility engineering felt impossible without prior industry connections," says Tane. "NEXAAGEN not only provided funded qualifications and PPE, but trusted me with real-world infrastructure challenges from day one."`
    },
    {
      id: 'story-graduating-style',
      tag: 'Academy',
      title: 'Graduating in NEXAAGEN style: Celebrating our apprenticeship cohorts',
      excerpt: 'Recently, two members of our frontline operations team achieved nationally recognized certifications through the NEXAAGEN Academy.',
      author: 'NEXAAGEN Academy',
      date: '01 Nov, 2023',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
      content: `Celebrations were in order this month as members of our regional apprenticeship cohorts graduated with Level 3 and Level 4 Facilities Management diplomas, validated by industry accrediting bodies.

The NEXAAGEN Academy fully funds training, study leave, and exam fees for colleagues across cleaning, catering, mechanical maintenance, and pest prevention services.

"Investing in our colleagues is the single most impactful way we deliver on our promise to make people and places the best they can be," noted our Group Learning & Development Director. "Over 82% of our graduates transition into supervisory or managerial positions within 18 months."`
    },
    {
      id: 'story-nex-academy',
      tag: 'Learning & Development',
      title: 'NEXAAGEN Group launches NEXA Academy to offer colleagues worldwide accredited qualifications',
      excerpt: 'NEXAAGEN has invited employees from across all operating regions to participate in digital micro-credentials and language skills workshops.',
      author: 'NEXAAGEN Academy',
      date: '03 Nov, 2023',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80',
      content: `NEXAAGEN Group has officially rolled out the NEXA Academy platform across our 18 operating countries, offering on-demand training modules accessible on smartphone devices in 12 languages.

The platform provides bite-sized certifications spanning chemical safety, data centre cleanroom standards, customer hospitality etiquette, and energy decarbonization fundamentals.

By democratizing access to accredited education, the academy ensures that every team member — whether stationed in a corporate tower in Mumbai or an airport hub in London — has an equal pathway to develop their career.`
    },
    {
      id: 'story-sean-fisher',
      tag: 'Cleaning | Leadership',
      title: "Sean Fisher's NEXAAGEN Journey to Cleaning CEO: From Frontline to Boardroom",
      excerpt: 'Career progression, pathway and authentic frontline leadership: how Sean started as an evening janitor and rose to executive leadership.',
      author: 'NEXAAGEN Team',
      date: '22 Dec, 2023',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
      content: `Sean Fisher's journey is one of the most inspiring examples of frontline career progression in the facilities management industry.

Sean joined our business over two decades ago as an evening janitorial cleaner. Driven by attention to detail, curiosity about automated floor robotics, and a natural ability to support his fellow colleagues, Sean quickly advanced to site supervisor, regional contract director, and ultimately Chief Executive Officer of Cleaning for UK & Ireland.

"I know what it feels like to push a mop bucket at 2 AM, and I know the exact challenges our frontline staff face every day," Sean reflects. "That experience shapes every operational and safety decision we make at board level."`
    }
  ];

  return (
    <div className="w-full flex flex-col flex-1 bg-white text-slate-900 font-sans overflow-hidden">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'About Us', link: '/about' },
          { label: 'Careers' }
        ]}
      />

      {/* ========================================================================= */}
      {/* SECTION 1: HERO - CAREERS AT NEXAAGEN (Screenshot 1)                      */}
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

        <div className="relative max-w-4xl mx-auto text-center space-y-4">
          <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-heading font-medium sm:font-semibold text-[#222222] tracking-tight leading-tight">
            Careers at NEXAAGEN
          </h1>

          <p className="text-slate-600 text-xs sm:text-sm lg:text-base leading-relaxed max-w-3xl mx-auto font-normal">
            Ready join our 130,000 colleagues and support our mission to make people and places the best they can be? Be the difference today, connect with our careers team to learn more.
          </p>

          <div className="pt-1">
            <Link
              to="/a-z-of-spaces-and-places"
              className="inline-flex items-center justify-center px-7 py-2.5 rounded-full font-heading font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300"
            >
              <span>Find Your Career Location</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: LOOKING FOR THE BEST PEOPLE (Screenshot 2)                     */}
      {/* ========================================================================= */}
      <section className="py-3 sm:py-5 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="bg-[#FAF8F5] rounded-[32px] sm:rounded-[40px] p-5 sm:p-8 lg:p-10 border border-slate-100/80 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Young Smiling Barista / Catering Professional */}
            <div className="lg:col-span-5">
              <div className="relative rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-xl aspect-[4/5] border border-slate-100 bg-white group">
                <img
                  src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80"
                  alt="NEXAAGEN Hospitality and Catering Colleague"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Right Column: Narrative Copy & CTA */}
            <div className="lg:col-span-7 space-y-4">
              <h2 className="text-2xl sm:text-4xl font-heading font-medium sm:font-semibold text-[#222222] tracking-tight leading-tight">
                We’re looking for the best people to join our team
              </h2>

              <div className="space-y-3.5 text-slate-600 text-xs sm:text-sm lg:text-[15px] leading-relaxed font-normal">
                <p>
                  Our mission is to make people and places the best they can be – delivering the best experiences, best practices, best productivity, resilience and outcomes for colleagues, customers and communities.
                </p>

                <p>
                  We’re searching for the best people to join our team to give ourselves the best opportunity to achieve our vision and mission. We are searching for individuals whose values reflect the Trust, Respect, Empowerment and Unity (TRUE) values of NEXAAGEN and who want to be part of a team helping others to thrive.
                </p>
              </div>

              <div className="pt-1">
                <Link
                  to="/a-z-of-spaces-and-places"
                  className="inline-flex items-center justify-center px-7 py-2.5 rounded-full font-heading font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300"
                >
                  <span>Find Your Career Location</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: PEOPLE INTO WORK PROGRAMME (Screenshot 3)                      */}
      {/* ========================================================================= */}
      <section className="py-3 sm:py-5 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="bg-[#FAF8F5] rounded-[32px] sm:rounded-[40px] p-5 sm:p-8 lg:p-10 border border-slate-100/80 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Narrative Copy & CTA */}
            <div className="lg:col-span-7 space-y-4">
              <h2 className="text-2xl sm:text-4xl font-heading font-medium sm:font-semibold text-[#222222] tracking-tight leading-tight">
                People Into Work programme launched by our foundation
              </h2>

              <div className="space-y-3.5 text-slate-600 text-xs sm:text-sm lg:text-[15px] leading-relaxed font-normal">
                <p>
                  People into Work is a programme that was launched by the <Link to="/foundation" className="font-semibold text-slate-900 underline decoration-orange-400 hover:text-brand-orange">NEXAAGEN Foundation</Link> in partnership with NEXAAGEN. Its purpose is to find, connect and enable people into sustainable careers who might otherwise not have access to opportunity.
                </p>

                <p>
                  Through a range of partnerships with charities, voluntary sector organisations and social enterprises, we help members of the community who may find it difficult to secure employment – including veterans, ex-offenders, people living with a disability and young people with no qualifications – into work with NEXAAGEN.
                </p>
              </div>

              <div className="pt-1">
                <Link
                  to="/people-into-work"
                  className="inline-flex items-center justify-center px-7 py-2.5 rounded-full font-heading font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300"
                >
                  <span>People Into Work Scheme</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Mature Professional with Glasses */}
            <div className="lg:col-span-5">
              <div className="relative rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-xl aspect-[4/5] border border-slate-100 bg-white group">
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=80"
                  alt="NEXAAGEN Foundation Colleague Beneficiary"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: APPRENTICESHIP AND FUNDED LEARNING (Screenshot 4)              */}
      {/* ========================================================================= */}
      <section className="py-3 sm:py-5 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="bg-[#FAF8F5] rounded-[32px] sm:rounded-[40px] p-5 sm:p-8 lg:p-10 border border-slate-100/80 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Smiling Frontline Colleague in Navy Polo */}
            <div className="lg:col-span-5">
              <div className="relative rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-xl aspect-[4/5] border border-slate-100 bg-white group">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1200&q=80"
                  alt="NEXAAGEN Frontline Colleague in Bright Atrium"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Right Column: Narrative Copy & CTA */}
            <div className="lg:col-span-7 space-y-4">
              <h2 className="text-2xl sm:text-4xl font-heading font-medium sm:font-semibold text-[#222222] tracking-tight leading-tight">
                Apprenticeship and funded learning opportunities
              </h2>

              <div className="space-y-3.5 text-slate-600 text-xs sm:text-sm lg:text-[15px] leading-relaxed font-normal">
                <p>
                  Our diverse array of roles offers exciting apprenticeships and funded learning paths for young enthusiasts. From catering management to mechanical technicians, pest control experts to data analysts, the facilities services industry has a role that suits your passion and ambition.
                </p>

                <p>
                  Join us in a mission to make people and places the best they can be. Our structured career paths offer limitless potential for growth and development. Whether you're just starting your journey or seeking new horizons, NEXAAGEN Facilities Services provides the scope and support to achieve your career goals. Discover your path with us and embark on a fulfilling career journey. Engage with us today to explore the exciting opportunities awaiting you.
                </p>
              </div>

              <div className="pt-1">
                <Link
                  to="/apprenticeships-funded-learning"
                  className="inline-flex items-center justify-center px-7 py-2.5 rounded-full font-heading font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300"
                >
                  <span>Apprenticeships & Funded Learning</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5: JOIN THE NEXAAGEN MISSION BANNER (Screenshot 5)                */}
      {/* ========================================================================= */}
      <section className="py-3 sm:py-5 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="relative rounded-[32px] sm:rounded-[40px] overflow-hidden shadow-2xl min-h-[280px] sm:min-h-[320px] flex items-center justify-center text-center p-6 sm:p-10 lg:p-14">
          {/* Background: Frontline Team with High-Vis Vests and Hard Hats */}
          <img
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1800&q=85"
            alt="Join the NEXAAGEN Global Workforce"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-slate-950/70 backdrop-brightness-90" />

          {/* Centered Overlay Copy */}
          <div className="relative z-10 max-w-2xl text-white space-y-3">
            <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-heading font-extrabold tracking-tight">
              Join the NEXAAGEN Mission
            </h2>

            <p className="text-slate-200 text-xs sm:text-sm lg:text-base leading-relaxed font-normal">
              Find your career and join 130,000 worldwide colleagues on a mission to make people and places the best they can be.
            </p>

            <div className="pt-2">
              <Link
                to="/a-z-of-spaces-and-places"
                className="inline-flex items-center justify-center px-7 py-2.5 rounded-full font-heading font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:shadow-lg hover:shadow-orange-500/30 hover:scale-105 transition-all duration-300"
              >
                <span>Find Your Career Location</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 6: NEXAAGEN TEAM STORIES (Screenshot 6)                           */}
      {/* ========================================================================= */}
      <section className="py-4 sm:py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="bg-[#FAF8F5] rounded-[32px] sm:rounded-[40px] p-5 sm:p-8 lg:p-10 border border-slate-100/80 shadow-sm space-y-6 sm:space-y-8">
          {/* Section Header */}
          <div className="text-center space-y-2 max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-4xl font-heading font-medium sm:font-semibold text-[#222222] tracking-tight">
              NEXAAGEN team stories
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
              Our UK & Ireland CEO of Cleaning began his career with our business as a cleaner. Discover more inspirational stories from the world of NEXAAGEN.
            </p>
          </div>

          {/* 4 Story Cards in 2x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {stories.map((story) => (
              <div
                key={story.id}
                onClick={() => setSelectedStory(story)}
                className="bg-white rounded-3xl border border-slate-100 hover:border-orange-200 overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer group"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-[#EA580C] uppercase tracking-wider shadow-sm">
                    {story.tag}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-base sm:text-lg font-heading font-bold text-slate-900 group-hover:text-[#FF5722] transition-colors line-clamp-2 leading-snug">
                      {story.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 line-clamp-2 leading-relaxed">
                      {story.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 rounded-full bg-slate-100 text-[#0A192F] font-bold text-[10px] flex items-center justify-center">
                        N
                      </div>
                      <span className="font-medium text-slate-600">{story.author}</span>
                    </div>
                    <span>{story.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* STORY DETAIL MODAL                                                        */}
      {/* ========================================================================= */}
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
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-4">
              <span className="text-xs font-bold text-[#EA580C] uppercase tracking-wider block">
                {selectedStory.tag}
              </span>

              <h2 className="text-xl sm:text-2xl font-heading font-bold text-slate-900 leading-snug">
                {selectedStory.title}
              </h2>

              <div className="flex items-center space-x-3 text-xs text-slate-400 py-1 border-y border-slate-100">
                <span className="font-semibold text-slate-700">{selectedStory.author}</span>
                <span>•</span>
                <span>{selectedStory.date}</span>
              </div>

              <div className="text-sm sm:text-base text-slate-600 leading-relaxed whitespace-pre-line">
                {selectedStory.content}
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => setSelectedStory(null)}
                  className="px-5 py-2 rounded-full text-xs font-semibold text-slate-600 hover:bg-slate-100 border border-slate-200 transition-colors"
                >
                  Close
                </button>
                <Link
                  to="/a-z-of-spaces-and-places"
                  onClick={() => setSelectedStory(null)}
                  className="text-xs font-bold text-[#FF5722] hover:underline inline-flex items-center gap-1"
                >
                  <span>Explore Open Roles</span>
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

