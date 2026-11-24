import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Heart, 
  Users, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  X, 
  Building2, 
  Globe2, 
  Leaf, 
  Lock, 
  Award, 
  Briefcase,
  Utensils,
  Eye
} from 'lucide-react';
import Breadcrumbs from '../components/layout/Breadcrumbs';
import aviationServicesImg from '../assets/news/aviation-global-services.jpg';

export default function TrueValues() {
  const [activeValueIndex, setActiveValueIndex] = useState(0);
  const [activeCommitmentIndex, setActiveCommitmentIndex] = useState(0);
  const [selectedStory, setSelectedStory] = useState(null);
  const [selectedNews, setSelectedNews] = useState(null);

  // TRUE Values Data (Screenshot 3)
  const trueValues = [
    {
      id: 'trust',
      letter: 'T',
      name: 'Trust',
      subtitle: 'Honesty, consistency and excellence.',
      description: 'Built and maintained through transparency and communication.',
      longDescription: `Trust is the bedrock of every customer partnership and colleague relationship at NEXAAGEN. We earn and preserve trust by honouring our commitments, operating with unflinching transparency, and delivering world-class service consistency day in, day out across thousands of sites worldwide.`,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80',
      pillars: ['Absolute Transparency in Billing & SLAs', 'Open Whistleblower & Governance Channels', 'Reliable Delivery Under Pressure']
    },
    {
      id: 'respect',
      letter: 'R',
      name: 'Respect',
      subtitle: 'People, planet and purpose.',
      description: 'The starting point and ongoing position for all our interaction and impact.',
      longDescription: `Respect shapes how we treat every single colleague, customer, and local community. It guides our environmental stewardship, our human rights safeguards, and our non-negotiable health & safety protocols across healthcare, aviation, and corporate environments.`,
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80',
      pillars: ['Zero Tolerance for Discrimination', 'Dignity at Work for Frontline Staff', 'Environmental Stewardship & Decarbonization']
    },
    {
      id: 'unity',
      letter: 'U',
      name: 'Unity',
      subtitle: 'Inclusive, diverse and together.',
      description: 'One team working for the betterment of each other and the environment.',
      longDescription: `Unity brings together our 130,000 colleagues across 18 countries under a shared identity. We believe diverse backgrounds spark innovation, and that when technical engineers, security guards, cleaners, and caterers work together as one cohesive team, client outcomes exceed expectations.`,
      image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=1200&q=80',
      pillars: ['Global Cross-Functional Collaboration', 'Inclusive Hiring & Apprentice Mentorship', 'One Team Spirit Across Borders']
    },
    {
      id: 'empowerment',
      letter: 'E',
      name: 'Empowerment',
      subtitle: 'Dynamic, driven and agile.',
      description: 'Providing the tools and skills to do more and achieve great things.',
      longDescription: `Empowerment means equipping frontline colleagues with the training, technology, and autonomy to take ownership of site problems and resolve them swiftly. Through accredited apprenticeships and leadership pathways, we turn entry-level jobs into lifelong careers.`,
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1200&q=80',
      pillars: ['Smart Mobile Tech & IoT Field Tools', 'Funded Qualifications & Apprenticeships', 'Recognition via NEXAAGEN TRUE Stars']
    }
  ];

  // NEXAAGEN Commitments Carousel Data (Screenshot 4)
  const commitments = [
    {
      id: 1,
      number: '01',
      title: 'Safety first',
      subtitle: 'We always prioritise safety.',
      description: 'From rigorous QHSE standards to frontline hazard reporting, safety is never compromised for speed or convenience. Every colleague is empowered with stop-work authority.',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 2,
      number: '02',
      title: 'Openness & honesty',
      subtitle: 'Clear, transparent dialogue in everything we do.',
      description: 'We believe genuine partnerships thrive on constructive feedback, accurate operational metrics, and transparent communication with clients and team members alike.',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 3,
      number: '03',
      title: 'Environmental care',
      subtitle: 'Leaving our planet better than we found it.',
      description: 'We deploy chemical-free biotechnological cleaning, implement circular waste streams, and assist clients in cutting carbon emissions toward Net Zero 2040.',
      image: 'https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 4,
      number: '04',
      title: 'Operational excellence',
      subtitle: 'Consistent, measurable quality delivery.',
      description: 'Applying lean service frameworks, calibrated auditing, and predictive maintenance to ensure mission-critical infrastructure operates at peak resilience.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 5,
      number: '05',
      title: 'Social value & community',
      subtitle: 'Creating lasting opportunities in local areas.',
      description: 'Supporting underrepresented job seekers through the NEXAAGEN Foundation and our People into Work programme, turning social mobility into a measurable reality.',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 6,
      number: '06',
      title: 'Continuous learning',
      subtitle: 'Investing in our people’s personal growth.',
      description: 'Providing accredited career pathways, technical upskilling, and language workshops so every colleague has the opportunity to realize their full potential.',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1000&q=80'
    }
  ];

  // Customer Alignment Stories Data (Screenshots 6 & 7)
  const stories = [
    {
      id: 'story-1',
      category: 'Corporate • Technology',
      title: 'Safeguarding our customers site and technology with guarding and cyber security.',
      excerpt: 'How NEXAAGEN integrated physical access barriers, biometric turnstiles, and cyber incident alerts to protect a top-tier tech campus.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
      client: 'Tier-1 Technology Campus',
      impact: 'Zero physical security breaches over 36 consecutive months, 100% compliance with ISO 27001.',
      content: `Safeguarding our customer's premier corporate technology campus required a synchronized approach blending manned guarding with next-generation digital sensors.

NEXAAGEN deployed SIA-licensed security personnel trained in de-escalation, rapid crisis response, and cyber-physical surveillance integration. By linking perimeter thermal cameras to our cloud-based incident management platform, our teams slashed alarm response times from 8 minutes to under 90 seconds while delivering seamless visitor hospitality.`
    },
    {
      id: 'story-2',
      category: 'Security',
      title: 'Women in security and tackling gender disparity in a rapidly-evolving world.',
      excerpt: 'Promoting gender equity, leadership training, and inclusive career pathways across our global physical guarding and surveillance teams.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
      client: 'Global Security Division',
      impact: '42% increase in female security supervisors within 18 months; industry benchmark recognition.',
      content: `In an industry historically perceived as male-dominated, NEXAAGEN launched a proactive Women in Security initiative focused on inclusive recruitment, specialized PPE tailoring, and structured executive mentorship.

Today, female security specialists lead major airport terminal checkpoints, data centre control rooms, and commercial retail estates. Their presence has fostered higher empathy in passenger handling, enhanced conflict de-escalation, and created inspiring role models for frontline apprentices.`
    },
    {
      id: 'story-3',
      category: 'Sustainability',
      title: "Driving sustainability goals to enhance London's natural heritage with The Royal Parks",
      excerpt: 'Partnering across historic green spaces with electric maintenance fleets, rainwater harvesting, and zero-chemical landscaping.',
      image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80',
      client: 'Historic Parks & Heritage Estate',
      impact: '100% electric maintenance equipment deployed, 28 tonnes of carbon offset annually.',
      content: `Preserving historic natural parks frequented by tens of millions of annual visitors requires exceptional care, biodiversity awareness, and low-emission maintenance.

NEXAAGEN introduced fully electric mowing fleets, solar-powered waste compactors, and organic composting systems. By aligning directly with the estate's climate targets, our teams helped reduce fossil fuel consumption by 85% while safeguarding native flora and urban wildlife.`
    },
    {
      id: 'story-4',
      category: 'Catering',
      title: "NHS food transformation that's having a positive environmental impact in the community",
      excerpt: 'Locally sourced nutritional meals, zero single-use plastics, and biodigester technology reducing hospital catering food waste.',
      image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80',
      client: 'National Healthcare Trusts',
      impact: '92% patient satisfaction score, 35% reduction in food waste via on-site biodigesters.',
      content: `Hospital nutrition plays a pivotal role in patient recovery and healthcare worker well-being. NEXAAGEN revamped patient culinary services by partnering with local regional organic farms within a 50-mile radius.

We introduced plant-rich chef-crafted menus, phased out single-use plastic cutlery in favor of compostable alternatives, and installed commercial bio-digesters that convert kitchen scraps into nutrient-rich soil conditioner for local community gardens.`
    },
    {
      id: 'story-5',
      category: 'Sustainability',
      title: 'Improving sustainability at Greenham Business Park by focusing on CO2 reduction',
      excerpt: 'Smart HVAC energy telemetry, LED retrofits, and EV charging corridors driving down operational footprints across commercial business parks.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
      client: 'Commercial Business Parks',
      impact: '310 tonnes of CO2 saved in year one; 24% net reduction in tenant energy expenditure.',
      content: `At multi-tenant business parks, decarbonization requires continuous energy monitoring and collaborative tenant engagement.

NEXAAGEN installed building IoT telemetry sensors that automatically regulate ventilation and chilled-water loops based on real-time occupancy. Combined with smart LED daylight harvesting and rapid EV charging points, the park earned high ESG sustainability ratings and substantial operational cost savings.`
    }
  ];

  // News Cards Data (Screenshot 9)
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

  // Carousel navigation handlers
  const nextCommitment = () => {
    setActiveCommitmentIndex((prev) => (prev + 1) % commitments.length);
  };

  const prevCommitment = () => {
    setActiveCommitmentIndex((prev) => (prev - 1 + commitments.length) % commitments.length);
  };

  return (
    <div className="w-full flex flex-col flex-1 bg-transparent text-slate-900 font-sans overflow-hidden">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'About Us', link: '/about' },
          { label: 'TRUE Values' }
        ]}
      />

      {/* ========================================================================= */}
      {/* SECTION 1: HERO - NEXAAGEN TRUE VALUES (Screenshot 1)                     */}
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
            NEXAAGEN TRUE Values
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto font-normal">
            Our values are Trust, Respect, Unity and Empowerment – they're TRUE. Guided by these values and principles, we're on a mission to make people and places the best they can be.
          </p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: OUR GUIDING PRINCIPLES (Screenshot 2)                          */}
      {/* ========================================================================= */}
      <section className="py-4 sm:py-6 container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Narrative Copy */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-brand-navy tracking-tight leading-tight">
              Our guiding principles
            </h2>

            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              <p>
                Having easily understandable and universally applicable values is crucial because they are a foundational guide for decision-making – providing a clear framework for all colleagues, ensuring consistency and alignment with the company's goals across diverse teams and geographies.
              </p>

              <p>
                Our TRUE Values are a vital navigational tool for NEXAAGEN, steering our actions and strategies as we work towards our vision and mission. They help create a unified culture, fostering a sense of purpose and direction among colleagues and ensuring that every decision aligns with our core principles.
              </p>

              <p>
                Inspired by our TRUE Values, we've developed a set of commitments we all sign up for when joining NEXAAGEN. Alongside those values, this alignment is essential for maintaining our brand's integrity and achieving our long-term objectives.
              </p>
            </div>
          </div>

          {/* Right Column: Frontline Colleague with Cap & Uniform */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-xl aspect-[4/5] max-h-[440px] w-full max-w-[360px] sm:max-w-[380px] border border-slate-100 group">
              <img
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1200&q=80"
                alt="NEXAAGEN Frontline Colleague living our TRUE Values"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: TRUE VALUES LIST (Screenshot 3)                                */}
      {/* ========================================================================= */}
      <section className="py-4 sm:py-6 bg-transparent border-y border-slate-100">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Portrait of Dedicated Colleague with Arms Folded */}
            <div className="lg:col-span-5">
              <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-xl aspect-[4/3] lg:aspect-auto lg:h-[420px] w-full border border-slate-100 group">
                <img
                  src={trueValues[activeValueIndex].image}
                  alt={`NEXAAGEN TRUE Value: ${trueValues[activeValueIndex].name}`}
                  className="w-full h-full object-cover transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent pointer-events-none" />
                
                {/* Active Value Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur shadow-lg border border-white/50">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF5722] to-[#D8232A] text-white font-heading font-extrabold text-lg flex items-center justify-center shadow-sm">
                      {trueValues[activeValueIndex].letter}
                    </div>
                    <div>
                      <h4 className="text-base font-heading font-bold text-slate-900">
                        {trueValues[activeValueIndex].name}
                      </h4>
                      <p className="text-xs text-slate-500">
                        {trueValues[activeValueIndex].subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive TRUE Values List */}
            <div className="lg:col-span-7 space-y-6">
              {trueValues.map((val, idx) => {
                const isActive = activeValueIndex === idx;
                return (
                  <div
                    key={val.id}
                    onClick={() => setActiveValueIndex(idx)}
                    className={`p-5 sm:p-6 rounded-2xl sm:rounded-3xl cursor-pointer transition-all duration-300 border ${
                      isActive 
                        ? 'bg-white shadow-md border-orange-200' 
                        : 'bg-transparent border-transparent hover:bg-white/60 hover:border-slate-200'
                    }`}
                  >
                    <div className="flex items-start space-x-4">
                      {/* Left vertical red/orange highlight line */}
                      <div 
                        className={`w-1 rounded-full self-stretch shrink-0 transition-colors duration-300 ${
                          isActive ? 'bg-[#FF5722]' : 'bg-slate-200'
                        }`}
                      />

                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <h3 className={`text-xl sm:text-2xl font-heading font-medium sm:font-semibold transition-colors ${
                            isActive ? 'text-[#222222]' : 'text-slate-600'
                          }`}>
                            {val.name}
                          </h3>
                          {isActive && (
                            <span className="text-xs font-bold text-[#EA580C] uppercase tracking-wider hidden sm:inline-block">
                              Active Value
                            </span>
                          )}
                        </div>

                        <p className="text-xs sm:text-sm font-semibold text-[#EA580C]">
                          {val.subtitle}
                        </p>

                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal pt-1">
                          {val.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: DISCOVER OUR NEXAAGEN COMMITMENTS (Screenshot 4)                */}
      {/* ========================================================================= */}
      <section className="py-4 sm:py-6 container-custom">
        {/* Header with Navigation Arrows */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-4 sm:mb-6">
          <div className="max-w-3xl space-y-3">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-brand-navy tracking-tight leading-tight">
              Discover our NEXAAGEN commitments
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Starting with safety, respect, honesty and openness – capturing our commitment to leave things better than we found them and our universal promise that we'll do the right things in the right way – the NEXAAGEN way.
            </p>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center space-x-2 shrink-0">
            <button
              onClick={prevCommitment}
              className="w-10 h-10 rounded-full border border-slate-200 text-slate-600 hover:text-black hover:border-slate-400 hover:bg-slate-50 flex items-center justify-center transition-colors shadow-sm"
              aria-label="Previous commitment"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextCommitment}
              className="w-10 h-10 rounded-full border border-slate-200 text-slate-600 hover:text-black hover:border-slate-400 hover:bg-slate-50 flex items-center justify-center transition-colors shadow-sm"
              aria-label="Next commitment"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Commitment Cards Strip / Horizontal Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-5">
          {commitments.map((item, idx) => {
            const isSelected = activeCommitmentIndex === idx;
            return (
              <div
                key={item.id}
                onClick={() => setActiveCommitmentIndex(idx)}
                className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 group ${
                  isSelected 
                    ? 'lg:col-span-2 shadow-2xl ring-2 ring-[#FF5722]' 
                    : 'lg:col-span-1 opacity-85 hover:opacity-100 shadow-md hover:shadow-lg'
                } aspect-[3/5] sm:aspect-[3/4] lg:aspect-[2/3]`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />

                {/* Number Badge */}
                <div className="absolute top-4 left-4">
                  <div className={`w-8 h-8 rounded-full text-xs font-bold flex items-center justify-center shadow-md transition-colors ${
                    isSelected 
                      ? 'bg-[#FF5722] text-white' 
                      : 'bg-white/80 backdrop-blur text-slate-800'
                  }`}>
                    {item.number}
                  </div>
                </div>

                {/* Bottom Content */}
                <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                  <h3 className="text-base sm:text-lg font-heading font-bold leading-tight drop-shadow-sm">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-200 line-clamp-2 leading-snug font-normal drop-shadow">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5: LEADERSHIP QUOTE BANNER (Screenshot 5)                         */}
      {/* ========================================================================= */}
      <section className="py-3 sm:py-5 container-custom">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl min-h-[300px] sm:min-h-[340px] flex items-center p-5 sm:p-8 lg:p-10">
          {/* Background: People raising hands in audience */}
          <img
            src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1800&q=85"
            alt="Colleagues participating in workplace values workshop"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-slate-950/40 backdrop-brightness-95" />

          {/* Floating White Quote Card */}
          <div className="relative z-10 max-w-xl bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/60 space-y-5">
            <p className="text-slate-800 text-sm sm:text-base leading-relaxed font-normal italic">
              “Our values are in place to give our colleagues and customers an understanding of who we are and what we expect by way of behaviour and approach. They can help us in our decision making and will help towards us becoming the best operator in the business.”
            </p>

            <div className="flex items-center space-x-3.5 pt-2 border-t border-slate-100">
              <div className="w-12 h-12 rounded-full overflow-hidden shadow-sm border border-slate-200 shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80"
                  alt="Val Dale - Group Chief People Officer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="text-sm font-heading font-bold text-slate-900">
                  Val Dale
                </h4>
                <p className="text-xs text-slate-500">
                  Group Chief People Officer
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 6: VALUES: CUSTOMER ALIGNMENT (Screenshots 6 & 7)                 */}
      {/* ========================================================================= */}
      <section className="py-4 sm:py-6 container-custom">
        {/* Section Heading */}
        <div className="text-center space-y-3 mb-4 sm:mb-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-brand-navy tracking-tight leading-tight">
            Values: Customer alignment
          </h2>
          <p className="text-slate-500 text-sm sm:text-base font-normal">
            Find out how we've aligned with our customers' values
          </p>
        </div>

        {/* 5 Cards Grid: 3 in first row, 2 in second row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {stories.map((story) => (
            <div
              key={story.id}
              className="bg-white rounded-3xl border border-slate-100 hover:border-orange-200 overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Text & Link */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                    {story.category}
                  </span>

                  <h3 className="text-sm sm:text-base font-heading font-bold text-slate-900 group-hover:text-[#FF5722] transition-colors leading-snug line-clamp-3">
                    {story.title}
                  </h3>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => setSelectedStory(story)}
                    className="text-xs sm:text-[13px] font-semibold text-[#FF5722] hover:underline inline-flex items-center gap-1 group/btn"
                  >
                    <span>Read their story</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 7: DUAL NAVY CTA CARDS (Screenshot 8)                             */}
      {/* ========================================================================= */}
      <section className="py-3 sm:py-5 container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {/* Card 1: Share our values? */}
          <div className="relative rounded-3xl bg-[#0A192F] p-6 sm:p-8 text-white flex flex-col justify-between overflow-hidden shadow-xl min-h-[240px]">
            {/* Subtle Dot Matrix Graphic */}
            <div 
              className="absolute right-0 bottom-0 w-1/2 h-1/2 opacity-25 pointer-events-none"
              style={{
                backgroundImage: 'radial-gradient(#FFFFFF 1.2px, transparent 1.2px)',
                backgroundSize: '16px 16px'
              }}
            />

            <div className="relative z-10 space-y-3">
              <h3 className="text-xl sm:text-2xl font-heading font-bold tracking-tight">
                Share our values?
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm sm:text-base leading-relaxed font-normal max-w-md">
                Would you like to join a team and work alongside colleagues who share your values and work ethic?
              </p>
            </div>

            <div className="relative z-10 pt-6">
              <Link
                to="/about"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-heading font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:shadow-lg hover:shadow-orange-500/30 hover:scale-105 transition-all duration-300"
              >
                <span>Search Careers</span>
              </Link>
            </div>
          </div>

          {/* Card 2: Globally shared values */}
          <div className="relative rounded-3xl bg-[#0A192F] p-6 sm:p-8 text-white flex flex-col justify-between overflow-hidden shadow-xl min-h-[240px]">
            {/* Subtle Dot Matrix Graphic */}
            <div 
              className="absolute left-0 bottom-0 w-1/2 h-1/2 opacity-25 pointer-events-none"
              style={{
                backgroundImage: 'radial-gradient(#FFFFFF 1.2px, transparent 1.2px)',
                backgroundSize: '16px 16px'
              }}
            />

            <div className="relative z-10 space-y-3">
              <h3 className="text-xl sm:text-2xl font-heading font-bold tracking-tight">
                Globally shared values
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm sm:text-base leading-relaxed font-normal max-w-md">
                Our business may be global, but our TRUE Values remain the same. Discover our locations.
              </p>
            </div>

            <div className="relative z-10 pt-6">
              <Link
                to="/a-z-of-spaces-and-places"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-heading font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:shadow-lg hover:shadow-orange-500/30 hover:scale-105 transition-all duration-300"
              >
                <span>Global Locations</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 8: NEWS SECTION (Screenshot 9)                                    */}
      {/* ========================================================================= */}
      <section className="py-4 sm:py-6 container-custom">
        {/* Section Heading */}
        <div className="text-center space-y-3 mb-4 sm:mb-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-brand-navy tracking-tight leading-tight">
            The latest insights and updates from the team at NEXAAGEN.
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm sm:text-base font-normal">
            Stay informed on our innovations, customer case studies, and sustainable operations.
          </p>
        </div>

        {/* 4 News Cards in 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {newsItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedNews(item)}
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

      {/* ========================================================================= */}
      {/* CUSTOMER STORY DETAIL MODAL                                               */}
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

            <div className="p-6 sm:p-8 space-y-5">
              <span className="text-xs font-bold text-[#EA580C] uppercase tracking-wider block">
                {selectedStory.category}
              </span>

              <h2 className="text-xl sm:text-2xl font-heading font-bold text-slate-900 leading-snug">
                {selectedStory.title}
              </h2>

              {selectedStory.impact && (
                <div className="p-4 rounded-2xl bg-orange-50 border border-orange-100">
                  <div className="flex items-start space-x-2.5">
                    <CheckCircle2 className="w-5 h-5 text-[#FF5722] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-orange-950">
                        Demonstrated Impact
                      </h4>
                      <p className="text-xs sm:text-sm text-orange-900 font-medium mt-0.5">
                        {selectedStory.impact}
                      </p>
                    </div>
                  </div>
                </div>
              )}

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
                  to="/contact"
                  onClick={() => setSelectedStory(null)}
                  className="text-xs font-bold text-[#FF5722] hover:underline inline-flex items-center gap-1"
                >
                  <span>Discuss Your Project with Us</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* NEWS ARTICLE DETAIL MODAL                                                 */}
      {/* ========================================================================= */}
      {selectedNews && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-100 flex flex-col">
            <div className="relative aspect-[16/9] w-full">
              <img
                src={selectedNews.image}
                alt={selectedNews.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedNews(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 backdrop-blur text-slate-700 hover:text-black flex items-center justify-center transition-colors shadow-md"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-4">
              <span className="text-xs font-bold text-[#EA580C] uppercase tracking-wider block">
                {selectedNews.tag}
              </span>

              <h2 className="text-xl sm:text-2xl font-heading font-bold text-slate-900 leading-snug">
                {selectedNews.title}
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {selectedNews.excerpt}
              </p>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => setSelectedNews(null)}
                  className="px-5 py-2 rounded-full text-xs font-semibold text-slate-600 hover:bg-slate-100 border border-slate-200 transition-colors"
                >
                  Close
                </button>
                <Link
                  to="/news"
                  onClick={() => setSelectedNews(null)}
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

