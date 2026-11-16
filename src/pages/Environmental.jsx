import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Leaf, 
  Globe2, 
  Zap, 
  CheckCircle2, 
  Award, 
  Recycle, 
  Droplets, 
  Sun,
  ShieldCheck,
  Building2,
  ExternalLink,
  MapPin,
  TrendingDown,
  Sparkles
} from 'lucide-react';
import Breadcrumbs from '../components/layout/Breadcrumbs';
import ContactForm from '../components/sections/ContactForm';

export default function Environmental() {
  return (
    <div className="w-full flex flex-col flex-1 bg-white text-slate-900 font-sans overflow-hidden">
      <Breadcrumbs
        items={[
          { label: 'ESG', link: '/esg' },
          { label: 'Environmental' }
        ]}
      />

      {/* SECTION 1: HERO SECTION (Reference Image 1) */}
      <section className="pt-4 pb-3 sm:pt-6 sm:pb-4 container-custom">
        <div className="relative rounded-3xl overflow-hidden min-h-[380px] sm:min-h-[420px] flex items-center p-5 sm:p-8 lg:p-10 shadow-2xl">
          {/* Background Image: Lush Green Beech Tree Foliage & Canopy */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=2000&q=85"
              alt="Lush green tree canopy against blue sky - NEXAAGEN Environmental ESG"
              className="w-full h-full object-cover object-center transform scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/10 to-transparent" />
          </div>

          {/* Floating White Card on Left (Exactly as shown in screenshot) */}
          <div className="relative z-10 bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-8 max-w-xl shadow-2xl border border-white/60 space-y-4">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold tracking-wide">
              <Leaf className="w-3.5 h-3.5 text-emerald-600" />
              <span>Sustainability & Climate Action</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-slate-800 tracking-tight leading-[1.15]">
              Environmental (ESG)
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              As a provider of essential services with more than 130,000 employees across 26 countries, we have a duty to bring about positive change in the communities we serve.
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href="#net-zero-2040"
                className="inline-flex items-center px-6 py-3 rounded-full font-heading font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 group"
              >
                <span>2040 Net Zero Target</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#natural-resources"
                className="inline-flex items-center px-6 py-3 rounded-full font-heading font-bold text-xs uppercase tracking-wider text-slate-700 bg-slate-100 hover:bg-slate-200 transition-all duration-300"
              >
                <span>Protecting Resources</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: 2040 NET ZERO TARGET (Reference Image 2) */}
      <section id="net-zero-2040" className="py-4 sm:py-6 container-custom border-t border-slate-100">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Scope 1, 2, 3 commitments */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#FF5722]">
              <TrendingDown className="w-4 h-4" />
              <span>Full-Scope Decarbonisation</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-slate-800 tracking-tight leading-tight">
              2040 Net Zero target
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Every NEXAAGEN company in the UK, Ireland, Australia, and New Zealand commits to being net zero by 2040. We will do this by adopting a full-scope approach. Our targets cover:
            </p>

            <ul className="space-y-4 pt-2">
              <li className="flex items-start space-x-3 text-slate-700 leading-relaxed">
                <span className="w-2 h-2 rounded-full bg-[#FF5722] mt-2.5 flex-shrink-0" />
                <span className="text-sm sm:text-base">
                  <strong className="text-slate-900 font-bold">Scope 1:</strong> direct emissions from the buildings and assets we own or lease.
                </span>
              </li>

              <li className="flex items-start space-x-3 text-slate-700 leading-relaxed">
                <span className="w-2 h-2 rounded-full bg-[#FF5722] mt-2.5 flex-shrink-0" />
                <span className="text-sm sm:text-base">
                  <strong className="text-slate-900 font-bold">Scope 2:</strong> indirect emissions from purchased electricity, steam, heating and cooling systems.
                </span>
              </li>

              <li className="flex items-start space-x-3 text-slate-700 leading-relaxed">
                <span className="w-2 h-2 rounded-full bg-[#FF5722] mt-2.5 flex-shrink-0" />
                <span className="text-sm sm:text-base">
                  <strong className="text-slate-900 font-bold">Scope 3:</strong> indirect emissions throughout our value chain, for example from our suppliers and customers. We know this, in particular, is complex, and we will need to influence many different partners. However, we believe that our commitment should include all those we work with to achieve net zero authentically.
                </span>
              </li>
            </ul>
          </div>

          {/* Right Column: Commercial Zero Emissions Van Image */}
          <div className="lg:col-span-5">
            <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-[1/1] border border-slate-100 group">
              <img
                src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80"
                alt="NEXAAGEN Electric Fleet Commercial Van Zero Emissions"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

              {/* Overlaid Fleet Badge mirroring reference photograph */}
              <div className="absolute bottom-6 left-6 right-6 p-4 sm:p-5 rounded-2xl bg-white/95 backdrop-blur-md shadow-xl border border-white/80 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black tracking-wider uppercase text-brand-navy">
                    NEXA<span className="text-[#FF5722]">AGEN</span> FLEET
                  </span>
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800">
                    Zero Emissions
                  </span>
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-800">
                  Driving a Sustainable Future across Commercial Fleet Operations
                </div>
                <div className="text-[11px] text-slate-500">
                  Facilities Services • Making people & places the best they can be
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: COUNTRY COMMITMENTS & SCIENCE-BASED TARGETS (Reference Image 3) */}
      <section className="py-4 sm:py-6 container-custom bg-slate-50/60 rounded-3xl my-3 sm:my-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Forest Canopy Image looking up */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-2xl h-[260px] sm:h-[300px] lg:h-[340px] w-full border border-slate-100 group">
              <img
                src="https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80"
                alt="Looking up at sunny green tree canopy in forest - NEXAAGEN Net Zero"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/90 backdrop-blur-md text-xs text-slate-700 font-medium">
                🌲 Protecting ancient forestry & expanding green carbon sinks across all global territories.
              </div>
            </div>
          </div>

          {/* Right Column: Country Targets & Science-Based Targets */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="space-y-4">
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                Every NEXAAGEN company in other countries commits to being net zero for Scope 1 and 2 by 2040, and full scope by 2050.
              </p>

              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                However, it is our ambition to achieve net zero ahead of our own targets, where infrastructure and available green resources allow.
              </p>
            </div>

            <div className="pt-2 space-y-4">
              <h3 className="text-lg font-heading font-bold text-slate-900">
                To achieve our net zero targets, we have committed to several key milestones:
              </h3>

              <ul className="space-y-3.5">
                <li className="flex items-start space-x-3 text-slate-700 leading-relaxed">
                  <span className="w-2 h-2 rounded-full bg-[#FF5722] mt-2.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base">
                    100% renewable energy in our UK, Ireland, Australia and New Zealand offices by 2025.
                  </span>
                </li>

                <li className="flex items-start space-x-3 text-slate-700 leading-relaxed">
                  <span className="w-2 h-2 rounded-full bg-[#FF5722] mt-2.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base">
                    100% electric or hybrid vehicles across our global business by 2034.
                  </span>
                </li>

                <li className="flex items-start space-x-3 text-slate-700 leading-relaxed">
                  <span className="w-2 h-2 rounded-full bg-[#FF5722] mt-2.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base">
                    70% reduction in our Scope 1 emissions by 2030 in NEXAAGEN companies in the UK, Ireland, Australia and New Zealand.
                  </span>
                </li>

                <li className="flex items-start space-x-3 text-slate-700 leading-relaxed">
                  <span className="w-2 h-2 rounded-full bg-[#FF5722] mt-2.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base">
                    NEXAAGEN commits those suppliers in the UK, Ireland, Australia, and New Zealand, representing 76% of its scope 3 emissions from purchased goods, services, and capital goods, will set SBTs by 2030.
                  </span>
                </li>
              </ul>
            </div>

            {/* Science-Based Targets Note */}
            <div className="pt-4 border-t border-slate-200/80">
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Our net zero commitment is made in line with science-based targets to reduce emissions in line with the{' '}
                <span className="font-semibold text-slate-800 underline decoration-[#FF5722] decoration-2 underline-offset-2">
                  Paris Agreement
                </span>{' '}
                goals. Science-based targets provide resilience against new regulations, drive innovation and demonstrate our commitments are authentic.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTIONS 4 & 5: PROTECTING OUR PLANET'S NATURAL RESOURCES (Reference Images 4 & 5) */}
      <section id="natural-resources" className="py-4 sm:py-6 container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Natural Resources Bullet Points */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-emerald-600">
              <Droplets className="w-4 h-4" />
              <span>Conservation & Circularity</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-slate-800 tracking-tight leading-tight">
              Protecting our planet’s natural resources
            </h2>

            <p className="text-base sm:text-lg text-slate-700 font-medium">
              Some of the steps we’re taking to protect our environment include:
            </p>

            <ul className="space-y-4 pt-1">
              <li className="flex items-start space-x-3 text-slate-700 leading-relaxed">
                <span className="w-2 h-2 rounded-full bg-[#FF5722] mt-2.5 flex-shrink-0" />
                <span className="text-sm sm:text-base">
                  Reducing chemical use through innovative, biodegradable cleaning solutions, including deionised water.
                </span>
              </li>

              <li className="flex items-start space-x-3 text-slate-700 leading-relaxed">
                <span className="w-2 h-2 rounded-full bg-[#FF5722] mt-2.5 flex-shrink-0" />
                <span className="text-sm sm:text-base">
                  Improving waste management systems to reduce the amount of waste going to landfill.
                </span>
              </li>

              <li className="flex items-start space-x-3 text-slate-700 leading-relaxed">
                <span className="w-2 h-2 rounded-full bg-[#FF5722] mt-2.5 flex-shrink-0" />
                <span className="text-sm sm:text-base">
                  Working with our customers to improve their energy efficiency.
                </span>
              </li>

              <li className="flex items-start space-x-3 text-slate-700 leading-relaxed">
                <span className="w-2 h-2 rounded-full bg-[#FF5722] mt-2.5 flex-shrink-0" />
                <span className="text-sm sm:text-base">
                  Working with suppliers that share our sustainability goals, through a responsible and sustainable procurement policy.
                </span>
              </li>

              <li className="flex items-start space-x-3 text-slate-700 leading-relaxed">
                <span className="w-2 h-2 rounded-full bg-[#FF5722] mt-2.5 flex-shrink-0" />
                <span className="text-sm sm:text-base">
                  Working with our suppliers to eradicate single-use plastics in our supply chain.
                </span>
              </li>

              <li className="flex items-start space-x-3 text-slate-700 leading-relaxed">
                <span className="w-2 h-2 rounded-full bg-[#FF5722] mt-2.5 flex-shrink-0" />
                <span className="text-sm sm:text-base">
                  Expanding our partnerships with governments, NGOs and customers, to develop effective sustainability strategies.
                </span>
              </li>

              <li className="flex items-start space-x-3 text-slate-700 leading-relaxed">
                <span className="w-2 h-2 rounded-full bg-[#FF5722] mt-2.5 flex-shrink-0" />
                <span className="text-sm sm:text-base">
                  Embedding sustainable behaviours into everything we do.
                </span>
              </li>
            </ul>
          </div>

          {/* Right Column: Scuba Diver & Vibrant Coral Reef Image */}
          <div className="lg:col-span-5">
            <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-2xl h-[260px] sm:h-[300px] lg:h-[340px] w-full border border-slate-100 group">
              <img
                src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80"
                alt="Scuba diver by vibrant coral reef with tropical orange fish - Protecting marine biodiversity"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/90 backdrop-blur-md text-xs text-slate-800 font-medium shadow-lg">
                🌊 Preserving marine ecosystems & freshwater reserves through sustainable supply chain mandates.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: USING OUR INFLUENCE FOR GOOD (Reference Image 6) */}
      <section className="py-4 sm:py-6 container-custom border-t border-slate-100">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Butterflies Image on Wildflowers */}
          <div className="lg:col-span-5">
            <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-[4/3] border border-slate-100 group">
              <img
                src="https://images.unsplash.com/photo-1535083783855-76ae62b2914e?auto=format&fit=crop&w=1200&q=80"
                alt="Butterflies on yellow flowers - Biodiversity and natural ecosystem influence"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
            </div>
          </div>

          {/* Right Column: Using Our Influence for Good */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-slate-800 tracking-tight leading-tight">
                Using our influence for good
              </h2>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                The nature of our work means that we are in a unique position to support other businesses in their drive towards net zero.
              </p>
            </div>

            <div className="space-y-6 pt-2">
              {/* Highlight Point 1 */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-[#FF5722] text-white flex items-center justify-center flex-shrink-0 shadow-md shadow-orange-500/20 mt-1">
                  <Globe2 className="w-5 h-5" />
                </div>
                <div className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium pt-1">
                  As a trusted partner, we use our influence to help customers achieve their own sustainability targets by developing sustainability initiatives.
                </div>
              </div>

              {/* Highlight Point 2 */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-[#FF5722] text-white flex items-center justify-center flex-shrink-0 shadow-md shadow-orange-500/20 mt-1">
                  <Zap className="w-5 h-5" />
                </div>
                <div className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium pt-1">
                  We leverage technology to drive building efficiencies, transition to electric vehicles, and reduce our reliance on natural resources in our operations.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: ENVIRONMENTAL ACTION AND OUTCOMES (Reference Image 7) */}
      <section className="py-4 sm:py-6 container-custom bg-slate-50/70 rounded-3xl my-3 sm:my-4">
        <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8">
          <div className="space-y-3">
            <span className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#FF5722]">
              <Award className="w-4 h-4" />
              <span>Verified Global Achievements</span>
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-slate-800 tracking-tight leading-tight">
              Environmental action and outcomes
            </h2>
          </div>

          {/* 4 Cards Grid (2x2 layout matching reference screenshot) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Card 1: UK EcoVadis */}
            <div className="space-y-3 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#FF5722] flex items-center justify-center mb-2">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-slate-900">
                UK retains EcoVadis silver rating
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                NEXAAGEN UK has proudly earned a silver <span className="text-slate-900 font-semibold underline decoration-slate-300 underline-offset-2">EcoVadis</span> sustainability rating, reflecting our commitment to responsible practices. EcoVadis, with a vast network of over 100,000+ rated companies, is the world's foremost provider of business sustainability ratings.
              </p>
            </div>

            {/* Card 2: Thailand GHG Certification */}
            <div className="space-y-3 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-2">
                <Sun className="w-5 h-5" />
              </div>
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-slate-900">
                Thailand’s greenhouse gas certification
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Our Thailand HQ is now powered by solar panels. Our sustainability efforts in Thailand earned us the{' '}
                <span className="text-slate-900 font-semibold underline decoration-slate-300 underline-offset-2">
                  Thailand Greenhouse Gas Management Organisation
                </span>{' '}
                certification for our carbon footprint. We are the first facilities services company to receive the award.
              </p>
            </div>

            {/* Card 3: New Zealand sustainability partnerships */}
            <div className="space-y-3 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-2">
                <Recycle className="w-5 h-5" />
              </div>
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-slate-900">
                New Zealand sustainability partnerships
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                In New Zealand, our team has formed strategic partnerships with leading sustainability experts to help accelerate our customers’ sustainability ambitions and reach their goals and targets – helping one customer divert over 200 tonnes of office equipment from landfills.
              </p>
            </div>

            {/* Card 4: UK Government contract waste reduction */}
            <div className="space-y-3 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-2">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-slate-900">
                UK Government contract waste reduction
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Our UK team have made strides in sustainability by tackling the challenge of recycling seemingly impossible items, such as paper towels. Innovation has meant a 20% reduction in waste on just one of our government contracts, showcasing our approach to finding practical and sustainable solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: VISIT OUR COUNTRY-SPECIFIC SITES BANNER (Reference Image 8) */}
      <section className="py-3 sm:py-5 container-custom">
        <div className="relative rounded-3xl overflow-hidden bg-[#0A192F] text-white p-6 sm:p-10 lg:p-12 text-center shadow-2xl">
          {/* Subtle Dot Grid Pattern */}
          <div 
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(#60A5FA 1.2px, transparent 1.2px)',
              backgroundSize: '20px 20px'
            }}
          />

          <div className="relative z-10 max-w-3xl mx-auto space-y-4">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight">
              Visit our country-specific sites
            </h2>

            <p className="text-slate-300 text-sm sm:text-base lg:text-lg font-normal max-w-2xl mx-auto leading-relaxed">
              And discover more actions we are taking to have a positive impact on the communities we serve.
            </p>

            <div className="pt-2">
              <Link
                to="/a-z-of-spaces-and-places"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-heading font-bold text-sm text-white bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:shadow-lg hover:shadow-orange-500/30 hover:scale-105 transition-all duration-300 group"
              >
                <MapPin className="w-4 h-4 mr-2" />
                <span>Our Locations</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: INQUIRY / CONTACT SECTION */}
      <section id="contact-form" className="py-4 sm:py-6 container-custom border-t border-slate-100">
        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
          <div className="text-center space-y-3">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-orange-100/80 text-[#D8232A]">
              Connect With Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 tracking-tight">
              Partner with NEXAAGEN for Net Zero & Sustainability
            </h2>
            <p className="text-base text-slate-600 max-w-2xl mx-auto">
              Learn how our environmental consulting, energy management, and zero-carbon facility solutions can help your organization reach its ESG milestones.
            </p>
          </div>

          <div className="bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-100 shadow-sm">
            <ContactForm defaultService="Environmental & Net Zero Solutions" />
          </div>
        </div>
      </section>
    </div>
  );
}
