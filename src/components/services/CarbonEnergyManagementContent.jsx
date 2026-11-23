import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ArrowUpRight, 
  Check, 
  ChevronLeft, 
  ChevronRight, 
  Plus, 
  Minus,
  Leaf, 
  Zap, 
  Sun, 
  BatteryCharging, 
  Globe, 
  Recycle, 
  TreePine, 
  Users, 
  Building2,
  CheckCircle2,
  Award,
  Sparkles
} from 'lucide-react';
import ContactForm from '../sections/ContactForm';

export default function CarbonEnergyManagementContent({ service }) {
  // FAQ accordion state
  const [openFaq, setOpenFaq] = useState(null);

  // Carousel state for complementary services
  const [carouselIndex, setCarouselIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Section 3: 6 Proactive Pillars (Screenshot 3)
  const proactivePillars = [
    {
      id: 'circular-economy',
      title: 'Circular Economy Practices',
      description: 'Reducing waste, reusing materials, and recycling resources across our operation is our focus. Minimising environmental impact by keeping products and materials in use for as long as possible, reducing the need for new resources.'
    },
    {
      id: 'sustainable-supply',
      title: 'Sustainable Supply Chain',
      description: 'Sustainable sourcing ensures our supply chain is ethical and environmentally friendly and supports fair labour practices – this includes working with suppliers with similar sustainability goals and transparent, eco-friendly production methods.'
    },
    {
      id: 'renewable-energy',
      title: 'Investment in Renewable Energy',
      description: 'We\'re committed to utilising renewable energy and participating in the development and investment of renewable energy projects. Our involvement is contributive to the worldwide transition towards sustainable energy sources.'
    },
    {
      id: 'biodiversity',
      title: 'Biodiversity and Ecosystem',
      description: 'Recognising the importance of biodiversity for a healthy planet, NEXAAGEN integrates strategies to protect and enhance ecosystems and wildlife in and around its operational areas. This includes creating green spaces, supporting local conservation projects.'
    },
    {
      id: 'community-engagement',
      title: 'Community Engagement & Education',
      description: 'NEXAAGEN engages with local communities to promote environmental awareness and sustainable living. This can include educational programs, community clean-up events, and collaborations with local environmental organisations.'
    },
    {
      id: 'building-resilience',
      title: 'Building Resilience',
      description: 'Long-term strategies deliver success. Energy-saving and carbon-reducing plans we\'re putting in place include installing motion-controlled LED lighting, renewable energy, EV charging points and behavioural change programmes.'
    }
  ];

  // Section 4: Customer Stories (Screenshot 4)
  const customerStories = [
    {
      id: 'greenham-park',
      tag: 'Commercial Estates',
      title: 'Improving sustainability at Greenham Business Park by focusing on CO2 reduction',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80',
      summary: 'Achieving a 38% reduction in annual scope 1 & 2 carbon emissions through heat pump retrofits and smart sub-metering.'
    },
    {
      id: 'ripple-retreat',
      tag: 'Healthcare & Wellness',
      title: 'Reducing carbon at the Ripple Retreat – Positive customer impact and legacy',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      summary: 'Delivering an off-grid solar-thermal architecture with zero fossil fuel dependency for acute wellness facilities.'
    },
    {
      id: 'royal-parks',
      tag: 'Public Sector & Heritage',
      title: 'Driving sustainability goals to enhance natural heritage with The Royal Parks',
      image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=800&q=80',
      summary: '100% green-waste diversion, organic soil micro-biome restoration, and closed-loop rainwater recycling across urban conservation estates.'
    }
  ];

  // Section 8: Complementary Services (Screenshots 8 & 9)
  const complementaryServices = [
    {
      id: 'hard-services',
      title: 'Hard Services',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
      description: 'Planned and preventative maintenance (PPM), minor works and capital projects.',
      link: '/services/hard-services'
    },
    {
      id: 'facilities-management',
      title: 'Facilities Management',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
      description: 'Facilities Management of self-delivered services for the private and public sector.',
      link: '/services/facilities-management'
    },
    {
      id: 'cleaning',
      title: 'Cleaning',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80',
      description: 'Cleaning services that deliver optimum health and hygiene for the best experiences and outcomes.',
      link: '/services/cleaning'
    },
    {
      id: 'landscaping',
      title: 'Landscaping',
      image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=800&q=80',
      description: 'Landscaping forms part of our Facilities Management offer across private and public sectors.',
      link: '/services/landscaping'
    }
  ];

  // Section 9: FAQ Items (Screenshot 10)
  const faqItems = [
    {
      q: 'What does carbon and energy management entail, and how can it benefit businesses or organisations?',
      a: 'Carbon and energy management is a structured approach to measuring, controlling, and reducing utility consumption and greenhouse gas (GHG) emissions across buildings. It delivers substantial cost reductions (typically 20% to 35%), ensures statutory compliance (SECR, ESOS, GHG Protocol), future-proofs against carbon taxes, and significantly strengthens corporate ESG ratings.'
    },
    {
      q: 'How do you assess an organisation\'s carbon footprint and energy usage to initiate effective management strategies?',
      a: 'We conduct comprehensive investment-grade energy audits, thermographic building envelope surveys, and deploy IoT sub-meters to track electricity, gas, water, and fuel consumption in real time. We calculate Scope 1 (direct), Scope 2 (purchased electricity), and Scope 3 (value chain) emissions according to the global GHG Protocol standard.'
    },
    {
      q: 'What measures do you use to reduce carbon emissions and improve energy efficiency within organisations?',
      a: 'Our technical measures include chiller plant optimization, replacing fossil fuel heating with commercial heat pumps, LED lighting retrofits with motion daylight sensors, smart BMS telemetry algorithms, commercial rooftop solar PV installations, battery energy storage (BESS), and employee energy awareness behavioural programs.'
    },
    {
      q: 'Can you assist businesses in setting and achieving carbon reduction targets and sustainability goals?',
      a: 'Yes. Our accredited sustainability directors guide clients through Science-Based Targets (SBTi), Net Zero roadmap formulation, Energy Performance Contracting (EPC) with guaranteed financial returns, and certification support for LEED, BREEAM In-Use, IGBC, and ISO 50001.'
    },
    {
      q: 'How do you ensure ongoing monitoring and reporting of energy usage and carbon emissions for organisations?',
      a: 'Through our 24/7 Remote Energy Bureau and the NEXA-Pulse dashboard, utility half-hourly data is ingested continuously. Automated anomaly detection algorithms flag tariff irregularities, out-of-hours energy waste, or equipment faults within minutes, giving real estate teams verified monthly audit logs.'
    },
    {
      q: 'What role does carbon offsetting play in your carbon management strategies?',
      a: 'We strictly follow the carbon reduction hierarchy: reduce and eliminate emissions at the source first through technical engineering and renewable generation. Offsetting is utilized only for residual, unavoidable emissions through independently verified Gold Standard and VCS (Verified Carbon Standard) credits.'
    },
    {
      q: 'Can you provide case studies demonstrating successful carbon and energy management initiatives?',
      a: 'Certainly. We have delivered over 40% carbon savings across corporate business parks, solarized industrial logistics hubs, and achieved zero-landfill organic waste recycling for major retail centres across India. Detailed case studies and client ROI metrics are available upon consultation.'
    }
  ];

  return (
    <div className="w-full flex flex-col bg-transparent">
      {/* ============================================================== */}
      {/* SECTION 1: HERO (Screenshot 1)                                  */}
      {/* ============================================================== */}
      <section className="w-full py-1.5 sm:py-2.5 bg-transparent overflow-hidden">
        <div className="container-custom">
          <div className="relative w-full rounded-2xl sm:rounded-[24px] lg:rounded-[28px] overflow-hidden min-h-[220px] sm:min-h-[250px] lg:min-h-[280px] flex items-center shadow-lg border border-slate-200/60">
            {/* Background Image: Solar Technician on Commercial Rooftop (Screenshot 1) */}
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=2400&q=85"
                alt="Commercial Rooftop Solar Panel Installation with Engineer"
                className="w-full h-full object-cover object-center scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent hidden lg:block" />
            </div>

            {/* Left Floating White Card */}
            <div className="relative z-20 p-3 sm:p-5 md:p-6 lg:p-7 max-w-lg">
              <div className="bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-xl sm:rounded-2xl shadow-xl border border-slate-100 space-y-2 sm:space-y-2.5">
                {/* Red "We're hiring | Careers" Badge */}
                <div className="inline-flex items-center space-x-2 text-xs font-semibold">
                  <span className="bg-[#D8232A] text-white px-2.5 py-0.5 rounded-full text-[11px] font-bold tracking-wide">
                    We're hiring
                  </span>
                  <Link
                    to="/contact"
                    className="text-slate-700 hover:text-brand-orange transition-colors flex items-center text-xs"
                  >
                    <span>NEXAAGEN Careers</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Link>
                </div>

                <h1 className="text-xl sm:text-2xl lg:text-3xl font-heading font-extrabold text-brand-navy tracking-tight leading-tight">
                  Carbon & Energy Management
                </h1>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                  Today, stakeholders are more tuned in to the environmental footprint of businesses. Navigate the road to net zero with a clear and measurable plan from NEXAAGEN.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 2: NAVIGATING PATHWAY TO NET ZERO (Screenshot 2)        */}
      {/* ============================================================== */}
      <section className="section-padding bg-transparent">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Photo Column: Zero-Emissions Fleet Van (Screenshot 2) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-100 aspect-[4/3] sm:aspect-[16/11] max-w-md mx-auto group">
                <img
                  src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=1200&q=85"
                  alt="NEXAAGEN Zero Emissions Sustainable Electric Fleet Vehicle"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-emerald-600 text-white text-xs font-bold px-3.5 py-1 rounded-full shadow-md">
                  100% Electric Service Fleet
                </div>
              </div>
            </div>

            {/* Right Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-brand-navy tracking-tight leading-tight">
                Navigating your pathway to Net Zero and beyond
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                NEXAAGEN's Carbon and Energy Management Services focus on helping businesses reduce their carbon footprint and energy consumption, align with global sustainability goals, and assist customers in meeting their Environmental, Social, and Governance (ESG) targets and Net Zero.
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                While reaching Net Zero is a significant milestone, NEXAAGEN aims to go further by neutralising its carbon footprint and creating a positive environmental impact. It could involve investing in projects that actively remove carbon from the atmosphere, such as reforestation or carbon capture and storage technologies.
              </p>

              {/* Red-Orange Gradient CTA */}
              <div className="pt-2">
                <a
                  href="#contact-form"
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-bold text-white bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:from-[#F4511E] hover:to-[#B71C1C] shadow-lg hover:shadow-orange-500/25 transition-all duration-300"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 3: PROACTIVE APPROACH TOWARDS NET ZERO (Screenshot 3)   */}
      {/* ============================================================== */}
      <section className="section-padding bg-transparent border-y border-slate-200/60">
        <div className="container-custom">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-orange block mb-2">
              Carbon & Energy Management Services
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-brand-navy tracking-tight leading-tight">
              Proactive approach towards Net Zero
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base">
              Contact our team to discuss your goals and targets.
            </p>
          </div>

          {/* 6 Proactive Pillars Grid (3x2) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {proactivePillars.map((pillar) => (
              <div
                key={pillar.id}
                className="bg-white rounded-3xl p-7 border border-slate-100 shadow-sm hover:shadow-md hover:border-slate-200 transition-all space-y-3"
              >
                <h3 className="text-lg font-bold font-heading text-brand-navy">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 4: NEXAAGEN CUSTOMER STORIES (Screenshot 4)             */}
      {/* ============================================================== */}
      <section className="section-padding bg-transparent">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-brand-navy tracking-tight leading-tight">
              NEXAAGEN Customer Stories
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              Discover how we're helping people and places across the world be the best they can be from a carbon and energy management perspective.
            </p>
          </div>

          {/* 3 Story Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {customerStories.map((story) => (
              <div
                key={story.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-card-subtle hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover card-img-zoom"
                  />
                  <div className="absolute top-4 left-4 bg-brand-navy/90 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full">
                    {story.tag}
                  </div>
                </div>

                <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="text-lg font-bold font-heading text-brand-navy group-hover:text-brand-orange transition-colors">
                      {story.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mt-2.5">
                      {story.summary}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-100">
                    <a
                      href="#contact-form"
                      className="text-xs font-bold text-brand-orange hover:text-red-700 transition-colors inline-flex items-center"
                    >
                      <span>Read their story</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 5: ENERGY + ESG (Screenshot 5)                          */}
      {/* ============================================================== */}
      <section className="section-padding bg-transparent border-t border-slate-200/60">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-brand-navy tracking-tight leading-tight">
                Energy + ESG
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                We are constantly taking steps to reduce our impact on the environment and can help you achieve your sustainability goals, too. We use microbial and bio (green) products as much as possible, never use phosphates or aerosols, and select cleaning products that are effective, well-priced and most importantly, have evidence-based eco-credentials.
              </p>

              {/* 3 Checkpoints */}
              <div className="space-y-4 pt-2">
                <div className="flex items-start space-x-3.5">
                  <div className="w-5 h-5 rounded-full bg-[#E53935] text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                    Advanced energy management systems, water conservation technologies, and pollution control measures.
                  </span>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-5 h-5 rounded-full bg-[#E53935] text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                    Integrated strategies to protect and enhance ecosystems and wildlife in and around its operational areas.
                  </span>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-5 h-5 rounded-full bg-[#E53935] text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                    Commitment to sustainable sourcing, ensuring that its supply chain is ethical, environmentally friendly, and supports fair labour practices.
                  </span>
                </div>
              </div>

              <div className="pt-3">
                <Link
                  to="/esg"
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-bold text-white bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:from-[#F4511E] hover:to-[#B71C1C] shadow-lg hover:shadow-orange-500/25 transition-all duration-300"
                >
                  Find out more
                </Link>
              </div>
            </div>

            {/* Right Photo Column: Butterfly on yellow flower (Screenshot 5) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-100 aspect-square max-w-md mx-auto group">
                <img
                  src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=1200&q=85"
                  alt="Vibrant Biodiversity and Ecosystem Protection"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 6: ENERGY + TECHNOLOGY (Screenshot 6)                   */}
      {/* ============================================================== */}
      <section className="section-padding bg-transparent border-t border-slate-200/60">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Photo: High-Tech Glowing Server Room (Screenshot 6) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-100 aspect-[4/3] max-w-md mx-auto group">
                <img
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=85"
                  alt="High-Tech Energy Telemetry in Hyperscale Data Centre"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-brand-navy tracking-tight leading-tight">
                Energy + Technology
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                NEXAAGEN's Advance Technology team leverages cutting-edge technologies such as Artificial Intelligence, Augmented Reality, Robotics, Drones, and Smart Building Systems. We deliver enhanced, efficient, and tailored customer experiences.
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Our proactive approach to adopting these innovations allows us to streamline operations and foster sustainable, energy-efficient environments.
              </p>

              {/* 3 Checkpoints */}
              <div className="space-y-4 pt-2">
                <div className="flex items-start space-x-3.5">
                  <div className="w-5 h-5 rounded-full bg-[#E53935] text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                    Harnessing sophisticated analytics tools to monitor and manage energy usage across its facilities.
                  </span>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-5 h-5 rounded-full bg-[#E53935] text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                    Implementing state-of-the-art building management systems to optimise heating, ventilation, air conditioning, and lighting.
                  </span>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-5 h-5 rounded-full bg-[#E53935] text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                    Deployed technology to seamlessly integrate renewable energy sources, such as solar and wind, into its energy mix.
                  </span>
                </div>
              </div>

              <div className="pt-3">
                <Link
                  to="/technology"
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-bold text-white bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:from-[#F4511E] hover:to-[#B71C1C] shadow-lg hover:shadow-orange-500/25 transition-all duration-300"
                >
                  Find out more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 7: ACCREDITATIONS & CERTIFICATIONS (Screenshot 7)      */}
      {/* ============================================================== */}
      <section className="py-4 sm:py-6 bg-slate-50/70 border-t border-slate-100">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-5 sm:mb-6">
            <h3 className="text-xl sm:text-2xl font-heading font-bold text-brand-navy tracking-tight">
              Accreditations & Certifications
            </h3>
            <p className="mt-2 text-slate-600 text-xs sm:text-sm">
              Industry-specific accreditations and certification enabling our teams to deliver consistency, compliance and best practice.
            </p>
          </div>

          {/* 5 Badges Row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 items-center justify-items-center">
            {/* 1: NICEIC */}
            <div className="p-4 rounded-2xl border border-slate-200/80 hover:border-slate-300 hover:shadow-sm transition-all flex flex-col items-center justify-center w-full max-w-[190px] h-24 bg-white text-center">
              <span className="text-base font-black tracking-widest text-[#D8232A]">NICEIC</span>
              <span className="text-[10px] text-slate-400 font-semibold mt-1">Electrical Safety</span>
            </div>

            {/* 2: LENEL S2 */}
            <div className="p-4 rounded-2xl border border-slate-200/80 hover:border-slate-300 hover:shadow-sm transition-all flex flex-col items-center justify-center w-full max-w-[190px] h-24 bg-white text-center">
              <span className="text-sm font-black tracking-wider text-blue-700">◆ LENEL·S2</span>
              <span className="text-[10px] text-slate-400 font-semibold mt-1">System Certified</span>
            </div>

            {/* 3: ISO Energy */}
            <div className="p-4 rounded-2xl border border-slate-200/80 hover:border-slate-300 hover:shadow-sm transition-all flex flex-col items-center justify-center w-full max-w-[190px] h-24 bg-white text-center">
              <div className="w-10 h-10 rounded-full border-2 border-blue-600 text-blue-700 flex items-center justify-center text-xs font-black">
                ISO
              </div>
              <span className="text-[10px] text-slate-500 font-semibold mt-1">50001 / 14001</span>
            </div>

            {/* 4: SafeContractor */}
            <div className="p-4 rounded-2xl border border-slate-200/80 hover:border-slate-300 hover:shadow-sm transition-all flex flex-col items-center justify-center w-full max-w-[190px] h-24 bg-white text-center">
              <div className="w-8 h-8 rounded-full bg-blue-900 text-white flex items-center justify-center text-[10px] font-black">
                SC
              </div>
              <span className="text-[11px] font-bold text-slate-700 mt-1">SafeContractor</span>
            </div>

            {/* 5: Constructionline */}
            <div className="p-4 rounded-2xl border border-slate-200/80 hover:border-slate-300 hover:shadow-sm transition-all flex flex-col items-center justify-center w-full max-w-[190px] h-24 bg-white text-center">
              <span className="text-xs font-black tracking-tight text-teal-700">Constructionline</span>
              <span className="text-[10px] text-slate-400 font-semibold mt-1">Gold Accredited</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 8: FACILITIES SERVICES DESIGNED (Screenshots 8 & 9)    */}
      {/* ============================================================== */}
      <section className="section-padding bg-transparent border-t border-slate-200/60 overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Callout Card */}
            <div className="lg:col-span-4 flex flex-col justify-between p-8 rounded-3xl bg-slate-50 border border-slate-100">
              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-brand-navy leading-tight">
                  Facilities services designed for your organisation
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Searching for integrated facilities management or complementary services?
                </p>
              </div>

              <div className="pt-8 space-y-5">
                {/* Carousel Navigation Buttons */}
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() =>
                      setCarouselIndex((prev) =>
                        prev === 0 ? complementaryServices.length - 2 : prev - 1
                      )
                    }
                    className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-slate-100 flex items-center justify-center text-slate-700 transition-colors shadow-sm"
                    aria-label="Previous service"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() =>
                      setCarouselIndex((prev) =>
                        prev >= complementaryServices.length - 2 ? 0 : prev + 1
                      )
                    }
                    className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-slate-100 flex items-center justify-center text-slate-700 transition-colors shadow-sm"
                    aria-label="Next service"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Cards Slider */}
            <div className="lg:col-span-8 overflow-hidden">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {complementaryServices.slice(carouselIndex, carouselIndex + 2).map((srv) => (
                  <Link
                    key={srv.id}
                    to={srv.link}
                    className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={srv.image}
                        alt={srv.title}
                        className="w-full h-full object-cover card-img-zoom"
                      />
                    </div>
                    <div className="p-6 flex flex-col justify-between flex-1">
                      <div>
                        <div className="flex items-center justify-between">
                          <h4 className="text-xl font-bold font-heading text-brand-navy group-hover:text-brand-orange transition-colors">
                            {srv.title}
                          </h4>
                          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#FF5722] to-[#D8232A] text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                            <ArrowUpRight className="w-4 h-4" />
                          </div>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
                          {srv.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 9: FREQUENTLY ASKED QUESTIONS (Screenshot 10)           */}
      {/* ============================================================== */}
      <section className="section-padding bg-transparent border-t border-slate-200/60">
        <div className="container-custom">
          <h3 className="text-3xl sm:text-4xl font-heading font-extrabold text-brand-navy mb-8">
            Frequently Asked Questions
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            {faqItems.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-sm hover:border-slate-300 transition-all self-start"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-start justify-between text-left space-x-3 group"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm font-semibold text-slate-800 group-hover:text-brand-orange transition-colors">
                      {faq.q}
                    </span>
                    <span className="w-6 h-6 rounded-full border border-slate-300 flex items-center justify-center text-slate-400 group-hover:text-brand-orange group-hover:border-brand-orange flex-shrink-0 mt-0.5">
                      {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pt-3 mt-3 border-t border-slate-100 animate-in fade-in duration-200">
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 10: CONNECT WITH YOUR NEXAAGEN TEAM (Screenshot 11)     */}
      {/* ============================================================== */}
      <section className="py-3 sm:py-5 bg-white">
        <div className="container-custom">
          <div className="relative rounded-3xl sm:rounded-[36px] overflow-hidden bg-gradient-to-br from-[#0B1E36] to-[#0D2E5C] text-white p-6 sm:p-10 lg:p-12 shadow-2xl text-center">
            {/* Dotted pattern overlay */}
            <div 
              className="absolute inset-0 opacity-15 pointer-events-none"
              style={{
                backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
                backgroundSize: '24px 24px'
              }}
            />

            <div className="relative z-10 max-w-3xl mx-auto space-y-5">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-white tracking-tight leading-tight">
                Connect with your NEXAAGEN team
              </h2>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto text-justify-center">
                We're ready to deliver the best experiences, productivity, practices, resilience and outcomes and we look forward to connecting with you and your team.
              </p>
              <div className="pt-4">
                <a
                  href="#contact-form"
                  className="inline-flex items-center justify-center px-9 py-4 rounded-full text-sm font-bold text-white bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:from-[#F4511E] hover:to-[#B71C1C] shadow-xl hover:shadow-orange-500/30 transition-all duration-300"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Component */}
      <ContactForm
        title="Consult Our Carbon & Energy Specialists"
        subtitle="Connect with our certified energy engineers to evaluate your portfolio's Net Zero pathway, solar feasibility, or statutory carbon compliance."
      />
    </div>
  );
}

