import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  ArrowRight, 
  ChevronRight, 
  ExternalLink, 
  Sparkles, 
  Award, 
  ShieldCheck, 
  Globe2, 
  Building2, 
  Calendar, 
  X,
  Mail,
  Linkedin
} from 'lucide-react';
import Breadcrumbs from '../components/layout/Breadcrumbs';

export default function LeadershipTeams() {
  const [selectedLeader, setSelectedLeader] = useState(null);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [activeTab, setActiveTab] = useState('group');

  // Executive Leaders Data (Matching Screenshots 1, 2, 3)
  const groupLeaders = [
    {
      id: 'rob-legge',
      name: 'Rob Legge',
      title: 'Group Chief Executive Officer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
      bio: 'Rob Legge has been pivotal in the facilities management sector since establishing Servest in 1997. His strategic leadership was critical in scaling multinational operations, pioneering people-first facility services, and leading NEXAAGEN through transformational global growth.',
      fullBio: `Rob Legge has dedicated nearly three decades to elevating facilities management into a core strategic driver for global enterprises. 

Under his leadership, NEXAAGEN delivers market-leading integrated facility solutions across 18+ international markets, prioritizing colleague welfare, cutting-edge technological innovation, and measurable ESG milestones. 

Rob is passionate about our 'Making People and Places the Best They Can Be' mission, championing frontline training programmes, apprentice academies, and sustainable enterprise governance across our 130,000-strong global workforce.`,
      credentials: ['Founder, Servest (1997)', 'Fellow, Institute of Workplace and Facilities Management', 'Global CEO, NEXAAGEN Group'],
      location: 'London & Global HQ'
    },
    {
      id: 'gary-mcgaghey',
      name: 'Gary McGaghey',
      title: 'Group Chief Financial Officer',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80',
      bio: 'Gary joined NEXAAGEN in 2023 bringing a wealth of experience in building world class finance teams and delivering organic and acquisitive growth across multi-territory industrial and commercial operations.',
      fullBio: `Gary McGaghey brings extensive international C-suite leadership across FTSE and private-equity-backed enterprises. 

At NEXAAGEN, Gary steers global financial strategy, capital allocation, M&A integration, and digital financial governance to support sustainable long-term enterprise value creation. 

His background spans leading complex balance-sheet transformations, enterprise ERP modernizations, and cross-border commercial joint ventures across the UK, Europe, and the Asia-Pacific region.`,
      credentials: ['Chartered Management Accountant (FCMA)', 'Ex-CFO, Multinational Industrial Groups', 'Harvard Business School Executive Alum'],
      location: 'London Corporate Office'
    },
    {
      id: 'daniel-dickson',
      name: 'Daniel Dickson',
      title: 'Chief Executive Officer, UK & Ireland',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80',
      bio: 'Daniel started his career in a leading M&A consultancy firm, before moving into facilities management in 2012. He quickly excelled through senior operational roles and now heads regional UK and Ireland operations.',
      fullBio: `Daniel Dickson oversees comprehensive service delivery across critical commercial hubs, government infrastructure, healthcare facilities, and major private estates throughout the UK and Ireland.

Having joined the industry in 2012 after early work in corporate finance, Daniel combines rigorous analytical precision with an empathetic, people-centred operational leadership style. 

He champions workplace wellness, operational safety excellence, and our pioneering apprentice academies.`,
      credentials: ['BSc (Hons) Economics', 'Board Member, Business Leaders Council', 'CEO, NEXAAGEN UK & Ireland'],
      location: 'London & Manchester Operations'
    },
    {
      id: 'roland-salameh',
      name: 'Roland Salameh',
      title: 'Chief Executive Officer, APAC & ME',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80',
      bio: 'Roland has a strong track record in business growth, transformation and change management. He has led various organisations around the Asia Pacific and Middle East regions to record operational heights.',
      fullBio: `Roland Salameh leads NEXAAGEN's rapidly expanding footprint across the Asia-Pacific and Middle East regions, overseeing landmark contracts across premier international aviation hubs, hyperscale data centres, technology parks, and educational campuses.

With over 25 years of cross-border management experience, Roland is recognized for building agile operational teams, driving large-scale digital telemetry adoption, and delivering high-impact social value initiatives across diverse cultural markets.`,
      credentials: ['MBA International Business', 'Member, Asia-Pacific Infrastructure Forum', 'CEO, NEXAAGEN APAC & ME'],
      location: 'Singapore Regional Hub'
    },
    {
      id: 'scott-thorn-davis',
      name: 'Scott Thorn Davis',
      title: 'Group General Counsel',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80',
      bio: 'Scott has been in the facilities management industry since 2019. He started his career at Rentokil Initial before joining NEXAAGEN, overseeing international legal governance and compliance.',
      fullBio: `Scott Thorn Davis leads NEXAAGEN's legal, regulatory, and corporate governance division globally. 

Before joining NEXAAGEN, Scott developed extensive in-house legal expertise at Rentokil Initial and leading international commercial law firms. 

His purview encompasses multinational contract negotiations, joint ventures, data ethics, modern human rights compliance, and maintaining transparent corporate accountability across all operating jurisdictions.`,
      credentials: ['Solicitor of the Senior Courts of England & Wales', 'LL.B (Hons) Corporate Law', 'Group General Counsel, NEXAAGEN'],
      location: 'London HQ'
    },
    {
      id: 'ketan-patel',
      name: 'Ketan Patel',
      title: 'Group Chief Information Officer',
      image: 'https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?auto=format&fit=crop&w=600&q=80',
      bio: 'Ketan joined NEXAAGEN in 2023, bringing a wealth of experience in leading digital strategy. He has been the driving force behind our cloud data platforms and smart building IoT sensor rollouts.',
      fullBio: `Ketan Patel directs NEXAAGEN's digital transformation roadmap, implementing real-time facility telemetry, predictive maintenance AI, and enterprise-grade cybersecurity architectures across all client facilities.

With deep experience across retail, logistics, and technical infrastructure sectors, Ketan's mandate is to transform frontline data into actionable operational insights for facility managers, reducing energy consumption and optimizing physical space utilization.`,
      credentials: ['MSc Information Systems', 'Certified Information Security Manager (CISM)', 'Group CIO, NEXAAGEN'],
      location: 'London & Tech Labs'
    },
    {
      id: 'dan-barber',
      name: 'Dan Barber',
      title: 'Group Chief Communications Officer',
      image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=600&q=80',
      bio: 'Dan’s three-decade-long communications and brand management career has been marked by significant launches, achievements and collaborations with top-tier international corporations.',
      fullBio: `Dan Barber directs NEXAAGEN's global brand strategy, internal colleague engagement, corporate media relations, and stakeholder communications. 

With more than thirty years of executive communications experience across multinational consumer and enterprise brands, Dan spearheads campaigns that reinforce our mission: making people and places the best they can be.

He also oversees our frontline recognition programmes, including NEXAAGEN TRUE Stars, celebrating everyday operational excellence.`,
      credentials: ['BA (Hons) Media & Communications', 'Chartered Institute of Public Relations (FCIPR)', 'Group CCO, NEXAAGEN'],
      location: 'London HQ'
    }
  ];

  // Leadership Team News Data (Matching Screenshot 4)
  const leadershipNews = [
    {
      id: 'news-jun-sochi',
      tags: ['APAC&ME', 'Appointment', 'Leadership'],
      title: 'Jun Sochi appointed as APAC Chief Strategy Officer and CEO Thailand',
      excerpt: 'Our APAC & Middle East region welcomes veteran operational leader to drive regional strategy, expansion, and service elevation across Southeast Asia.',
      author: 'NEXAAGEN Group',
      date: '25 Sep, 2023',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
      content: `NEXAAGEN is proud to announce the appointment of Jun Sochi as Chief Strategy Officer for the APAC & Middle East region and Chief Executive Officer for NEXAAGEN Thailand.

Jun brings over 25 years of executive experience across international business management, corporate strategy, and integrated facility operations. In this dual capacity, he will focus on scaling regional partnerships, accelerating the deployment of smart cleaning robotics, and expanding our sustainable facilities management offerings across Southeast Asia.

"Jun's deep regional knowledge and proven operational leadership will be invaluable as we continue our trajectory of sustainable growth throughout the Asia-Pacific region," remarked Roland Salameh, CEO APAC & Middle East.`
    },
    {
      id: 'news-rob-legge-strategy',
      tags: ['Strategy'],
      title: 'Group CEO, Rob Legge, outlines the NEXAAGEN Best Strategy and Future Growth',
      excerpt: 'Best experiences, productivity, ESG leadership, and delivering the highest standards of service across enterprise sectors.',
      author: 'Rob Legge, Group CEO',
      date: '13 Nov, 2023',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
      content: `In a comprehensive keynote address to international enterprise stakeholders, Group CEO Rob Legge unveiled the 'NEXAAGEN Best Strategy' — our unified roadmap for the next decade of sustainable operational leadership.

The strategy is built upon five foundational pillars:
1. Best Experiences: Creating safe, welcoming, and productive spaces for millions of daily occupants.
2. Best Productivity: Deploying IoT telemetry, automated robotics, and predictive workflow engineering.
3. Best Practices: Elevating health, safety, quality, and environmental compliance to world-class standards.
4. Best Resilience: Fortifying critical client assets against supply-chain and climate risks.
5. Best Outcomes: Delivering measurable commercial, social, and environmental value to client enterprises.

"Our mission is simple and unwavering: to make people and places the best they can be," stated Rob Legge.`
    },
    {
      id: 'news-valerie-dale',
      tags: ['Our People'],
      title: 'The Power of Listening: Why our colleague engagement survey drives real change',
      excerpt: 'Group-wide colleague survey launching across all operational hubs to empower frontline staff and enhance career progression pathways.',
      author: 'Valerie Dale',
      date: '05 Jan, 2024',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80',
      content: `Listening to our 130,000 frontline colleagues is central to NEXAAGEN's culture of mutual respect, equality, and operational excellence.

Our annual group-wide colleague survey provides every team member — from hospital janitors and aviation PRM specialists to building engineers and catering staff — with a direct, confidential channel to share feedback, propose improvements, and help shape our working conditions.

Key initiatives born from colleague survey feedback include:
- The expansion of funded apprenticeships and digital language learning tools.
- Ergonomic upgrades to frontline uniform materials and equipment.
- Accelerated rollout of the NEXAAGEN TRUE Stars colleague recognition and peer-nomination awards.`
    },
    {
      id: 'news-cfo-appointment',
      tags: ['Appointment', 'Group'],
      title: 'Leading international facilities service provider NEXAAGEN appoints Group CFO',
      excerpt: 'NEXAAGEN is delighted to appoint Gary McGaghey as Group Chief Financial Officer to spearhead global financial stewardship and growth.',
      author: 'NEXAAGEN Group',
      date: '11 Sep, 2023',
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80',
      content: `NEXAAGEN has officially confirmed the appointment of Gary McGaghey as Group Chief Financial Officer and member of the Group Executive Board.

Gary brings decades of strategic financial stewardship across multinational industrial, commercial, and enterprise services organizations. He will oversee global financial planning, treasury, M&A due diligence, and capital allocation across all 18 operating territories.

"I am excited to join NEXAAGEN at such a dynamic moment in its corporate journey," said Gary. "With a passionate frontline workforce, deep customer trust, and robust financial foundations, we are uniquely positioned to drive disciplined, sustainable growth worldwide."`
    }
  ];

  return (
    <div className="w-full flex flex-col flex-1 bg-white text-slate-900 font-sans overflow-hidden">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'About Us', link: '/about' },
          { label: 'Leadership Teams' }
        ]}
      />

      {/* ========================================================================= */}
      {/* SECTION 1: HERO - NEXAAGEN LEADERSHIP TEAMS (Screenshot 1)                 */}
      {/* ========================================================================= */}
      <section className="relative pt-4 pb-3 sm:pt-6 sm:pb-4 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FDFBF9] via-[#FAF7F2] to-white overflow-hidden">
        {/* Soft Coral/Orange Dotted Pattern Watermark on both sides */}
        <div 
          className="absolute inset-0 opacity-[0.25] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(#EA580C 1.1px, transparent 1.1px)',
            backgroundSize: '24px 24px'
          }}
        />

        <div className="relative max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-heading font-medium sm:font-semibold text-[#222222] tracking-tight leading-tight">
            NEXAAGEN Leadership Teams
          </h1>

          <p className="text-slate-600 text-sm sm:text-base lg:text-[17px] leading-relaxed max-w-3xl mx-auto font-normal">
            Our leadership teams are intent on making people and places the best they can be, providing colleagues, customers and communities with the best conditions and opportunities to thrive.
          </p>

          {/* Filter / Category Pill Button (Screenshots 1 & 2) */}
          <div className="pt-4 flex items-center justify-center">
            <button
              onClick={() => setActiveTab('group')}
              className="inline-flex items-center justify-center px-8 py-3 rounded-full font-heading font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#FF5722] to-[#D8232A] shadow-md shadow-orange-500/20 hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300"
            >
              <span>Group Leadership Team</span>
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: LEADERS GRID (Screenshots 2 & 3)                               */}
      {/* ========================================================================= */}
      <section className="py-4 sm:py-6 container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-6 sm:gap-y-8">
          {groupLeaders.map((leader) => (
            <div 
              key={leader.id} 
              className="flex items-start space-x-6 sm:space-x-7 group"
            >
              {/* Circular Avatar / Headshot */}
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden shrink-0 shadow-md border-2 border-white ring-2 ring-slate-100 group-hover:ring-[#FF5722]/40 transition-all duration-300 bg-slate-100">
                <img
                  src={leader.image}
                  alt={`${leader.name} - ${leader.title}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Bio & Details */}
              <div className="flex-1 space-y-1.5 pt-1">
                <h3 className="text-xl sm:text-2xl font-heading font-medium sm:font-semibold text-[#222222] tracking-tight group-hover:text-[#FF5722] transition-colors">
                  {leader.name}
                </h3>

                <p className="text-xs sm:text-[13px] font-normal text-slate-500">
                  {leader.title}
                </p>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal pt-1 line-clamp-3">
                  {leader.bio}
                </p>

                <div className="pt-1.5">
                  <button
                    onClick={() => setSelectedLeader(leader)}
                    className="text-xs sm:text-[13px] font-semibold text-[#FF5722] hover:underline inline-flex items-center gap-1 group/btn"
                  >
                    <span>Learn more</span>
                    <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: LEADERSHIP NEWS, INSIGHTS & UPDATES (Screenshots 3 & 4)        */}
      {/* ========================================================================= */}
      <section className="py-4 sm:py-6 container-custom">
        {/* Soft Container Card */}
        <div className="bg-[#FAF8F5] rounded-3xl p-5 sm:p-8 lg:p-10 border border-slate-100/80 shadow-sm">
          {/* Section Heading */}
          <div className="text-center space-y-3 mb-4 sm:mb-6">
            <h2 className="text-2xl sm:text-4xl font-heading font-medium sm:font-semibold text-[#222222] tracking-tight">
              Leadership team news, insights and updates
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm sm:text-base font-normal">
              Learn more about the NEXAAGEN leadership team and global initiatives.
            </p>
          </div>

          {/* 4 Cards in 2x2 Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {leadershipNews.map((news) => (
              <div
                key={news.id}
                onClick={() => setSelectedArticle(news)}
                className="bg-white rounded-2xl sm:rounded-3xl border border-slate-100 hover:border-orange-200 overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row cursor-pointer group"
              >
                {/* Thumbnail Image */}
                <div className="sm:w-44 lg:w-48 aspect-[16/10] sm:aspect-auto h-48 sm:h-auto shrink-0 overflow-hidden bg-slate-100">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                {/* Content Info */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-3">
                  <div className="space-y-2">
                    {/* Tags */}
                    <div className="text-[11px] font-bold text-[#EA580C] uppercase tracking-wider">
                      {news.tags.join(' | ')}
                    </div>

                    {/* Title */}
                    <h3 className="text-sm sm:text-base font-heading font-bold text-slate-900 group-hover:text-[#FF5722] transition-colors line-clamp-2 leading-snug">
                      {news.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                      {news.excerpt}
                    </p>
                  </div>

                  {/* Metadata Footer */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                    <div className="flex items-center space-x-1.5">
                      <div className="w-5 h-5 rounded-full bg-slate-100 text-[#0A192F] font-bold text-[9px] flex items-center justify-center">
                        N
                      </div>
                      <span className="font-medium text-slate-600">{news.author}</span>
                    </div>
                    <span>{news.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* LEADER DETAIL MODAL                                                       */}
      {/* ========================================================================= */}
      {selectedLeader && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-100 flex flex-col">
            <div className="relative p-6 sm:p-8 border-b border-slate-100 flex items-start justify-between bg-slate-50/50">
              <div className="flex items-center space-x-4">
                <div className="w-20 h-20 rounded-full overflow-hidden shadow-md border-2 border-white ring-2 ring-slate-100 shrink-0">
                  <img
                    src={selectedLeader.image}
                    alt={selectedLeader.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-slate-900">
                    {selectedLeader.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-[#FF5722]">
                    {selectedLeader.title}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {selectedLeader.location}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setSelectedLeader(null)}
                className="w-8 h-8 rounded-full bg-white text-slate-500 hover:text-black flex items-center justify-center shadow-sm border border-slate-200 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              {/* Executive Biography */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Executive Biography
                </h4>
                <div className="text-sm text-slate-600 leading-relaxed space-y-3 whitespace-pre-line font-normal">
                  {selectedLeader.fullBio}
                </div>
              </div>

              {/* Key Credentials */}
              {selectedLeader.credentials && (
                <div className="space-y-2.5 pt-2 border-t border-slate-100">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Key Credentials & Affiliations
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedLeader.credentials.map((cred, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700"
                      >
                        {cred}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Actions Footer */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => setSelectedLeader(null)}
                  className="px-5 py-2 rounded-full text-xs font-semibold text-slate-600 hover:bg-slate-100 border border-slate-200 transition-colors"
                >
                  Close
                </button>

                <Link
                  to="/contact"
                  onClick={() => setSelectedLeader(null)}
                  className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:shadow-md transition-all"
                >
                  <span>Connect with Leadership</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* ARTICLE DETAIL MODAL                                                      */}
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
                {selectedArticle.tags.join(' | ')}
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
                  <span>Explore All News & Media</span>
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

