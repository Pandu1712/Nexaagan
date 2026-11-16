import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Layers,
  Globe2,
  ChevronDown,
  X,
  ExternalLink,
  Building2,
  Coffee,
  Utensils,
  Wrench,
  Sparkles,
  Users
} from 'lucide-react';
import Breadcrumbs from '../components/layout/Breadcrumbs';

export default function OurBrands() {
  const [selectedRegion, setSelectedRegion] = useState('Showing All');
  const [selectedService, setSelectedService] = useState('Showing All');
  const [activeBrandModal, setActiveBrandModal] = useState(null);

  const brandsList = [
    {
      id: 'pcs',
      name: 'PCS',
      tagline: 'To be your best',
      region: 'Asia Pacific',
      service: 'Facilities Management',
      logoText: 'pcs',
      logoSubtext: 'to be your best',
      description: 'PCS is our operating brand in Thailand and Bangladesh. PCS is the largest UK employer in Thailand with close to 40,000 colleagues.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
      longBio: 'PCS delivers end-to-end integrated facilities services across Thailand and Bangladesh. With nearly four decades of local leadership, PCS provides commercial cleaning, property security, technical engineering, and catering solutions to international aviation hubs, manufacturing plants, retail destinations, and major medical institutions.',
      keyMetrics: ['40,000+ Colleagues', 'Thailand & Bangladesh', 'Founded 1968']
    },
    {
      id: '1m',
      name: '1M',
      tagline: '1M Maintenance LLC',
      region: 'Middle East & South Asia',
      service: 'Hard Services & HVAC',
      logoText: '1M',
      logoSubtext: '1M Maintenance LLC',
      description: '1M specializes in advanced HVAC design and services, ensuring efficient, comfortable workspaces with expert installation and ongoing maintenance.',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
      longBio: '1M provides critical mechanical, electrical, and HVAC maintenance engineering across commercial real estate, corporate headquarters, and high-performance industrial spaces. Our certified HVAC specialists ensure uninterrupted indoor air quality, thermal efficiency, and planned preventive maintenance.',
      keyMetrics: ['HVAC Specialism', '24/7 Rapid Response', 'Critical Environments']
    },
    {
      id: 'midcity',
      name: 'Midcity',
      tagline: 'A NEXAAGEN Company',
      region: 'Australia & New Zealand',
      service: 'Hard Services & HVAC',
      logoText: 'Midcity',
      logoSubtext: 'A NEXAAGEN Company',
      description: 'Midcity Group offers insurance services and reactive maintenance, ensuring swift, expert solutions for property repairs and emergencies.',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
      longBio: 'Midcity Group is Australasia’s leading specialist insurance repair and reactive building maintenance provider. Partnering with major institutional insurers and property owners, Midcity delivers rapid disaster recovery, structural restoration, and emergency repairs.',
      keyMetrics: ['Australasia Coverage', 'Insurance Partnerships', 'Disaster Restoration']
    },
    {
      id: 'swc',
      name: 'SWC',
      tagline: 'Your specialist cleaning team',
      region: 'UK & Ireland',
      service: 'Specialist Cleaning',
      logoText: 'SWC',
      logoSubtext: 'Your specialist cleaning team',
      description: 'Specialist cleaning services that go beyond the surface, creating clean, safe and high-performing spaces across every sector and environment.',
      image: 'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=800&q=80',
      longBio: 'SWC is our specialist high-level access and industrial cleaning division. From IRATA-certified abseiling rope access on iconic glass skyscrapers to deep chemical decontaminations, SWC sets the benchmark for complex facade and high-level architectural maintenance.',
      keyMetrics: ['IRATA Abseiling', 'High-Rise Facades', 'Zero-Accident Safety']
    },
    {
      id: 'amika',
      name: 'Amika Guest Services',
      tagline: 'Front of House & Hospitality',
      region: 'UK & Ireland',
      service: 'Guest Services',
      logoText: 'amika',
      logoSubtext: 'Guest Services',
      description: 'Amika provides front-of-house and guest services, enhancing your facility with the best guest experiences.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
      longBio: 'Amika transforms corporate receptions and visitor experiences into 5-star hospitality encounters. Delivering curated concierge, executive meeting-room management, security greeting, and switchboard operations for global financial institutions and prestigious commercial addresses.',
      keyMetrics: ['5-Star Hospitality', 'Corporate Concierge', 'Executive Front-of-House']
    },
    {
      id: 'groundhouse',
      name: 'Groundhouse Coffee',
      tagline: 'Seed • Track • Roast • Relish',
      region: 'UK & Ireland',
      service: 'Coffee & Beverage',
      logoText: 'GROUNDHOUSE',
      logoSubtext: 'seed track roast relish',
      description: 'Groundhouse Coffee elevates workplaces with vibrant, quality blends and ethical practices through its Give Back Programme.',
      image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
      longBio: 'Groundhouse Coffee is our artisanal, ethically sourced workplace cafe brand. Featuring 100% certified fair-trade beans with traceable supply chains, trained baristas, and our signature Give Back Programme supporting coffee-growing communities worldwide.',
      keyMetrics: ['100% Fairtrade', 'Give Back Programme', 'Workplace Baristas']
    },
    {
      id: 'goodness',
      name: 'Goodness',
      tagline: 'Nutrition for Mind & Body',
      region: 'UK & Ireland',
      service: 'Catering & Nutrition',
      logoText: 'goodness',
      logoSubtext: 'healthy workplace dining',
      description: 'Goodness emphasises connection between nutrition, brain and gut health through wholesome, balanced diets.',
      image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
      longBio: 'Goodness is our health-focused workplace dining concept, developed by clinical nutritionists to fuel productivity, mental clarity, and microbiome wellness with wholesome, plant-forward, seasonal meal options.',
      keyMetrics: ['Nutritional Science', 'Plant-Forward', 'Gut & Brain Health']
    },
    {
      id: 'essential-goodness',
      name: 'Essential Goodness',
      tagline: 'Clinical & Patient Dining',
      region: 'UK & Ireland',
      service: 'Catering & Nutrition',
      logoText: 'essential goodness',
      logoSubtext: 'healthcare nourishment',
      description: 'Essential Goodness combines great taste with nutrition, offering balanced, fresh and innovative food experience to support patient recovery.',
      image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=800&q=80',
      longBio: 'Essential Goodness provides specialized therapeutic and recovery-focused catering for hospitals, clinics, and healthcare facilities. Combining medical dietary compliance with delicious taste to aid healing and patient comfort.',
      keyMetrics: ['Clinical Compliance', 'Patient Nutrition', 'Fresh Prep Daily']
    },
    {
      id: 'angel-hill',
      name: 'Angel Hill Food Co',
      tagline: 'Fresh Seasonal Catering',
      region: 'UK & Ireland',
      service: 'Catering & Nutrition',
      logoText: 'ANGEL HILL',
      logoSubtext: 'FOOD CO.',
      description: 'Angel Hill Food Co. delivers fresh, seasonal catering with global flavours. Food that fuels energy, connection and lasting impact.',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
      longBio: 'Angel Hill Food Co. crafts bespoke catering, corporate hospitality, and event dining across premier business campuses. Chef-led and driven by locally sourced ingredients, vibrant street-food flavours, and sustainable zero-waste culinary preparation.',
      keyMetrics: ['Chef-Led Menus', 'Award-Winning', 'Zero Waste Target']
    }
  ];

  const brandNews = [
    {
      id: 'profile-security-acquisition',
      category: 'Acquisition',
      title: 'NEXAAGEN announces the acquisition of Profile Security Services to strengthen regional security',
      image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80',
      author: 'M&A Team',
      date: '12 Dec, 2026',
      link: '/news'
    },
    {
      id: 'angel-hill-chef-win',
      category: 'Catering',
      title: "Angel Hill Food Co chef wins 'strEATfood Chef of the Year' at national hospitality awards",
      image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=80',
      author: 'Catering Team',
      date: '21 Nov, 2026',
      link: '/news'
    },
    {
      id: 'nexi-academy-launch',
      category: 'Learning & Development',
      title: 'NEXAAGEN Group launches NEXA Academy to offer colleagues funded apprenticeships & career pathways',
      excerpt: 'NEXAAGEN has invited employees from across regional operating brands to enroll in certified leadership and engineering programs...',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
      author: 'NEXA Academy',
      date: '03 Nov, 2026',
      link: '/news'
    },
    {
      id: 'bolt-on-acquisition-healthcare',
      category: 'Merger',
      title: 'NEXAAGEN announces its first bolt-on acquisition under the Healthcare Clinical Services portfolio',
      excerpt: 'NEXAAGEN announces that it has acquired specialist healthcare logistics and decontamination operators to scale medical capabilities...',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80',
      author: 'M&A Team',
      date: '17 Oct, 2026',
      link: '/news'
    }
  ];

  const regionOptions = [
    'Showing All',
    'UK & Ireland',
    'Asia Pacific',
    'Middle East & South Asia',
    'Australia & New Zealand'
  ];

  const serviceOptions = [
    'Showing All',
    'Facilities Management',
    'Hard Services & HVAC',
    'Specialist Cleaning',
    'Guest Services',
    'Catering & Nutrition',
    'Coffee & Beverage'
  ];

  const filteredBrands = useMemo(() => {
    return brandsList.filter((b) => {
      const matchRegion = selectedRegion === 'Showing All' || b.region === selectedRegion;
      const matchService = selectedService === 'Showing All' || b.service === selectedService;
      return matchRegion && matchService;
    });
  }, [selectedRegion, selectedService]);

  return (
    <div className="w-full flex flex-col flex-1 bg-white text-slate-900 font-sans overflow-hidden">
      {/* BREADCRUMBS */}
      <Breadcrumbs
        items={[
          { label: 'About Us', link: '/about' },
          { label: 'Our Brands' }
        ]}
      />

      {/* SECTION 1: HERO BANNER (Reference Image 1) */}
      <section className="pt-4 pb-3 sm:pt-6 sm:pb-4 container-custom text-center">
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
              Our Brands
            </h1>

            <p className="text-xs sm:text-sm lg:text-base text-slate-600 leading-relaxed font-normal max-w-3xl mx-auto">
              NEXAAGEN operates several regional brands, often specialist operators with specific service and sector expertise. All NEXAAGEN brands conduct business with the same ethos and approach, incorporating the NEXAAGEN TRUE Values, Commitments and shared Code of Conduct.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: DISCOVER THE NEXAAGEN BRANDS (Reference Image 2) */}
      <section className="py-3 sm:py-5 container-custom">
        <div className="rounded-[32px] sm:rounded-[40px] bg-[#FAF9F6] border border-slate-200/60 p-5 sm:p-7 lg:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Modern Architecture / Skyscrapers Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-xl h-[260px] sm:h-[300px] lg:h-[340px] w-full border border-slate-200/60 group">
                <img
                  src="https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1200&q=80"
                  alt="Modern NEXAAGEN Corporate Infrastructure & Brands"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Right Column: Narrative & 3 Bullets */}
            <div className="lg:col-span-7 space-y-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-slate-800 tracking-tight leading-tight">
                Discover the NEXAAGEN brands
              </h2>

              <p className="text-xs sm:text-sm lg:text-base text-slate-600 leading-relaxed font-normal">
                NEXAAGEN is our primary brand, central to our operations across various regions. In Thailand and Bangladesh, we operate under the PCS brand, catering to the specific needs of these markets. In New Zealand and Australia, we have specialized hard services brands: 1M and Midcity, respectively, focusing on specific industry requirements. Additionally, our portfolio includes several food service and catering brands. In Thailand, we operate Foodhouse, while in the UK, we have Angel Hill. Complementing these, we also have Groundhouse, our own coffee brand. These diverse brands under our umbrella allow us to offer a range of services tailored to different markets and customer needs.
              </p>

              {/* 3 Red Checkmark Bullets */}
              <div className="space-y-2.5 pt-1">
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 rounded-full bg-[#D8232A] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                    <CheckCircle2 className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-700 font-medium">
                    NEXAAGEN is the core and primary brand.
                  </span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 rounded-full bg-[#D8232A] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                    <CheckCircle2 className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-700 font-medium">
                    Shared TRUE Values, Commitments and Code of Conduct.
                  </span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 rounded-full bg-[#D8232A] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                    <CheckCircle2 className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-700 font-medium">
                    Single shared vision, mission and purpose.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: BRANDS DIRECTORY & FILTERS (Reference Images 3, 4, 5) */}
      <section className="py-4 sm:py-6 container-custom">
        <div className="space-y-8">
          {/* Filter Bar with Region and Service Selectors (Matching Screenshot 3) */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 bg-slate-50/70 p-4 sm:p-6 rounded-2xl border border-slate-200/70">
            {/* Region Dropdown */}
            <div className="space-y-1.5 flex-1 min-w-[200px]">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Region
              </label>
              <div className="relative">
                <select
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                  className="w-full appearance-none bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#FF5722] cursor-pointer shadow-sm pr-10"
                >
                  {regionOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Service Dropdown */}
            <div className="space-y-1.5 flex-1 min-w-[200px]">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Service
              </label>
              <div className="relative">
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full appearance-none bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#FF5722] cursor-pointer shadow-sm pr-10"
                >
                  {serviceOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Reset Filter Button */}
            {(selectedRegion !== 'Showing All' || selectedService !== 'Showing All') && (
              <div className="flex items-end self-end pt-5">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedRegion('Showing All');
                    setSelectedService('Showing All');
                  }}
                  className="px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-600 bg-white border border-slate-200 rounded-xl hover:bg-slate-100 transition-colors shadow-sm cursor-pointer"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>

          {/* Brands 2-Column Grid Matching Screenshots 3, 4, 5 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {filteredBrands.map((brand) => (
              <div
                key={brand.id}
                className="group bg-[#FAF9F6] rounded-3xl overflow-hidden border border-slate-200/70 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col sm:flex-row justify-between"
              >
                {/* Left Card Half: Logo, Name, Text & Find Out More */}
                <div className="p-6 sm:p-7 sm:w-1/2 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    {/* Brand Logo Box (White Rounded Badge) */}
                    <div className="inline-flex items-center justify-center p-3 sm:p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs min-h-[56px] min-w-[120px]">
                      <div className="text-center">
                        <span className="font-heading font-black text-xl sm:text-2xl text-slate-900 tracking-tight block leading-none">
                          {brand.logoText}
                        </span>
                        {brand.logoSubtext && (
                          <span className="text-[9px] uppercase tracking-wider text-slate-500 font-semibold block mt-0.5">
                            {brand.logoSubtext}
                          </span>
                        )}
                      </div>
                    </div>

                    <h3 className="text-xl font-heading font-extrabold text-slate-900 group-hover:text-brand-orange transition-colors">
                      {brand.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-4">
                      {brand.description}
                    </p>
                  </div>

                  <div>
                    <button
                      type="button"
                      onClick={() => setActiveBrandModal(brand)}
                      className="inline-flex items-center text-xs sm:text-sm font-bold text-[#FF5722] hover:text-[#D8232A] group/btn cursor-pointer"
                    >
                      <span className="underline decoration-[#FF5722] decoration-2 underline-offset-2">
                        Find out more
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>

                {/* Right Card Half: Image */}
                <div className="sm:w-1/2 aspect-[4/3] sm:aspect-auto overflow-hidden relative">
                  <img
                    src={brand.image}
                    alt={brand.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            ))}
          </div>

          {filteredBrands.length === 0 && (
            <div className="text-center py-6 sm:py-8 bg-slate-50 rounded-2xl border border-slate-200">
              <p className="text-slate-600 font-medium">No brands match your selected region and service.</p>
              <button
                type="button"
                onClick={() => {
                  setSelectedRegion('Showing All');
                  setSelectedService('Showing All');
                }}
                className="mt-3 px-5 py-2 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[#FF5722] to-[#D8232A]"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* SECTION 4: NEXAAGEN BRAND NEWS (Reference Image 6) */}
      <section className="py-4 sm:py-6 container-custom border-t border-slate-100">
        <div className="space-y-6">
          {/* Header */}
          <div className="text-center space-y-2.5 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-slate-800 tracking-tight">
              NEXAAGEN Brand News
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              Find out more from our brands from across our NEXAAGEN group.
            </p>
          </div>

          {/* 4 Cards 2x2 Grid (Matching Screenshot 6) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 pt-1">
            {brandNews.map((item) => (
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

      {/* SECTION 5: CONNECT WITH YOUR NEXAAGEN TEAM BANNER (Reference Image 7) */}
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
              Connect with your NEXAAGEN team
            </h2>

            <p className="text-sm sm:text-base lg:text-lg text-slate-200 leading-relaxed font-normal max-w-2xl mx-auto">
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

      {/* BRAND DETAIL MODAL */}
      {activeBrandModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 max-h-[90vh] overflow-y-auto space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center space-x-3">
                <div className="px-3.5 py-2 rounded-xl bg-slate-100 text-slate-900 font-black text-lg border border-slate-200">
                  {activeBrandModal.logoText}
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-slate-900">
                    {activeBrandModal.name}
                  </h3>
                  <p className="text-xs text-[#FF5722] font-semibold">{activeBrandModal.tagline}</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setActiveBrandModal(null)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="aspect-[16/9] rounded-2xl overflow-hidden shadow-inner">
              <img
                src={activeBrandModal.image}
                alt={activeBrandModal.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
              <p className="text-base text-slate-800 font-medium">
                {activeBrandModal.longBio}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                {activeBrandModal.keyMetrics.map((m, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-center font-bold text-xs text-slate-800">
                    {m}
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between pt-2 text-xs text-slate-500 border-t border-slate-100">
                <span><strong>Region:</strong> {activeBrandModal.region}</span>
                <span><strong>Specialism:</strong> {activeBrandModal.service}</span>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <Link
                to="/contact"
                onClick={() => setActiveBrandModal(null)}
                className="inline-flex items-center px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#FF5722] to-[#D8232A]"
              >
                <span>Enquire With Brand Team</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </Link>

              <button
                type="button"
                onClick={() => setActiveBrandModal(null)}
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

