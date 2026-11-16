import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ArrowUpRight, 
  Check, 
  Plus, 
  Minus,
  Sprout, 
  Leaf, 
  TreePine, 
  Flower2, 
  Droplets, 
  Sun, 
  ShieldCheck, 
  Award, 
  Sparkles,
  MapPin,
  Clock,
  CheckCircle2
} from 'lucide-react';
import ContactForm from '../sections/ContactForm';

export default function LandscapingContent({ service }) {
  // State for FAQ Accordions
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Section 4: Customer Stories (Screenshot 4)
  const customerStories = [
    {
      id: 'royal-parks',
      tag: 'Public Sector & Heritage',
      title: 'Driving sustainability goals to enhance London\'s natural heritage with The Royal Parks',
      image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=800&q=80',
      summary: 'Preserving over 5,000 acres of historic parkland, integrating biodiversity meadows, and establishing closed-loop composting cycles.'
    },
    {
      id: 'nhs-food',
      tag: 'Catering',
      title: 'NHS food transformation that\'s having a positive environmental impact in the community',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
      summary: 'Sustainable on-site herb gardens, community sensory allotments, and nutrient-rich organic waste recovery.'
    },
    {
      id: 'nec-spring-fair',
      tag: 'Venues and events',
      title: 'Creating custom solutions for the NEC Spring Fair – delivering best experience and outcomes',
      image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80',
      summary: 'High-impact indoor botanical staging, biophilic living walls, and seamless multi-acre visitor concourse grounds maintenance.'
    }
  ];

  // Section 8: FAQ Items (Screenshot 8)
  const faqItems = [
    {
      q: 'What landscaping services do you offer for commercial properties?',
      a: 'We provide full-spectrum exterior grounds and interior plant maintenance including regular turf mowing, seasonal floral displays, automated weather-controlled drip irrigation, tree surveys and surgery (arboriculture), hedge shaping, weed management, and biophilic interior living walls.'
    },
    {
      q: 'Can you create a customised landscaping plan that aligns with our business\'s aesthetic preferences and budget?',
      a: 'Yes. Our certified landscape architects and horticulturists conduct thorough site surveys to understand your brand identity, environmental goals, and budgetary parameters, designing sustainable year-round maintenance schedules that keep your premises immaculate.'
    },
    {
      q: 'How do you ensure that the landscaping remains well-maintained throughout the year?',
      a: 'Through seasonal planting rotations, automated moisture-sensing irrigation, proactive turf aeration and fertilisation, and dedicated mobile grounds crews equipped with zero-emission electric mowers and digital quality audit checklists.'
    },
    {
      q: 'Do you offer environmentally friendly landscaping practices and sustainable solutions?',
      a: 'Absolutely. We prioritize native drought-tolerant plant species to support local pollinators, implement 100% on-site composting of green cuttings to eliminate landfill disposal, utilize organic bio-pesticides, and harvest rainwater for grounds irrigation.'
    },
    {
      q: 'Can you handle larger landscaping projects and installations for commercial properties?',
      a: 'Yes. We deliver turnkey landscape design and installation for multi-acre corporate tech campuses, civic business parks, international airport green belts, industrial estates, and hospital therapeutic gardens across India.'
    },
    {
      q: 'How do you ensure safety and compliance with local regulations during landscaping projects?',
      a: 'All tree surgery and machinery operations are executed by certified arborists and trained operators adhering to OSHA, ISO 45001, and local municipal biodiversity guidelines, complete with rigorous risk assessments and cordoned work zones.'
    },
    {
      q: 'Can you provide case studies of successful landscaping projects completed for similar commercial properties?',
      a: 'Certainly. We manage thousands of acres of premier commercial grounds, shopping park landscapes, and Grade-A office campuses. Detailed photographic case studies and biodiversity impact metrics are available on request.'
    }
  ];

  return (
    <div className="w-full flex flex-col bg-white">
      {/* ============================================================== */}
      {/* SECTION 1: HERO SECTION (Screenshot 1)                          */}
      {/* ============================================================== */}
      <section className="w-full py-2 sm:py-4 lg:py-6 bg-white overflow-hidden">
        <div className="container-custom">
          <div className="relative w-full rounded-2xl sm:rounded-[32px] lg:rounded-[40px] overflow-hidden min-h-[480px] sm:min-h-[540px] lg:min-h-[600px] flex items-center shadow-xl border border-slate-200/60">
            {/* Background Image: Lush Garden Path & Modern Pavilion (Screenshot 1) */}
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=2400&q=85"
                alt="Commercial Architectural Landscaping Pathway and Lush Foliage"
                className="w-full h-full object-cover object-center scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent hidden lg:block" />
            </div>

            {/* Left Floating White Card */}
            <div className="relative z-20 p-6 sm:p-10 md:p-12 lg:p-16 max-w-xl">
              <div className="bg-white/95 backdrop-blur-md p-8 sm:p-10 rounded-3xl shadow-2xl border border-slate-100 space-y-4">
                {/* Red "We're hiring | Careers" Badge */}
                <div className="inline-flex items-center space-x-2 text-xs font-semibold">
                  <span className="bg-[#D8232A] text-white px-3 py-1 rounded-full text-[11px] font-bold tracking-wide">
                    We're hiring
                  </span>
                  <Link
                    to="/contact"
                    className="text-slate-700 hover:text-brand-orange transition-colors flex items-center"
                  >
                    <span>NEXAAGEN Careers</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Link>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-heading font-extrabold text-slate-800 tracking-tight leading-tight">
                  Landscaping
                </h1>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal pt-1">
                  Our commercial landscaping services elevate your spaces, bringing a refreshing touch of nature to both exteriors and interiors, no matter the season.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 2: MAINTAINED AND MANICURED (Screenshots 2 & 3)         */}
      {/* ============================================================== */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Horticulturist Photo Holding Red Flowers */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-100 aspect-[4/5] max-w-md mx-auto group">
                <img
                  src="https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&w=1200&q=85"
                  alt="NEXAAGEN Professional Horticulturist in Branded Uniform"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-brand-navy/90 backdrop-blur-md text-white p-4 rounded-2xl border border-white/10">
                  <p className="text-xs font-bold uppercase tracking-wider text-brand-orange">
                    Horticultural Excellence
                  </p>
                  <p className="text-sm font-semibold mt-0.5">
                    Certified Landscape Professionals
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Content + 5 Checkpoints + CTA */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-brand-navy tracking-tight leading-tight">
                Maintained and manicured landscaping services
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Landscaping services form part of our facilities management service offer. Our team of horticultural professionals deliver a range of customer needs, from routine lawn care to intricate garden designs, tree management, and seasonal plantings.
              </p>

              {/* 5 Red/Orange Checkpoints */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 rounded-full bg-[#E53935] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-700">
                    National & British Association Landscape Industries Approved
                  </span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 rounded-full bg-[#E53935] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-700">
                    Safe Contractor Approved
                  </span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 rounded-full bg-[#E53935] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-700">
                    ISO 9001 Accredited Quality Management
                  </span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 rounded-full bg-[#E53935] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-700">
                    ISO 45001 Accredited Health & Safety
                  </span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 rounded-full bg-[#E53935] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-700">
                    ISO 14001 Accredited Environmental Management
                  </span>
                </div>
              </div>

              {/* Red-Orange Gradient CTA */}
              <div className="pt-3">
                <Link
                  to="/services#places-we-service"
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-bold text-white bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:from-[#F4511E] hover:to-[#B71C1C] shadow-lg hover:shadow-orange-500/25 transition-all duration-300"
                >
                  Search Locations We Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 3: HORTICULTURAL CARE & ATTENTION TO DETAIL (Screen 3)  */}
      {/* ============================================================== */}
      <section className="section-padding bg-slate-50/70 border-y border-slate-100">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5 order-2 lg:order-1">
              <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-brand-navy tracking-tight leading-tight">
                Horticultural care and attention to detail
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                In addition to our commitment to sustainability and ecological responsibility, our landscaping services include using native plant species, promoting biodiversity, and implementing efficient water management practices.
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                By managing a facility's interior and exterior environments, our landscaping teams ensure a comprehensive service experience that contributes positively to the spaces and the people interacting with them.
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Landscaping is a vital component of our facilities management solutions that enhances the overall user experience of our facilities. It reflects our commitment to creating and maintaining the best places for the best experience and outcomes for colleagues, customers and communities.
              </p>
            </div>

            {/* Right Photo: Woman Misting Indoor Biophilic Plants */}
            <div className="lg:col-span-5 order-1 lg:order-2">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-100 aspect-[4/5] max-w-md mx-auto group">
                <img
                  src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=1200&q=85"
                  alt="Specialist Care for Indoor Biophilic Plants"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 4: NEXAAGEN CUSTOMER STORIES (Screenshot 4)             */}
      {/* ============================================================== */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-brand-navy tracking-tight">
              NEXAAGEN Customer Stories
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              Discover how we're helping people and places across the world be the best they can be.
            </p>
          </div>

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
      {/* SECTION 5: LANDSCAPING + ESG (Screenshot 5)                     */}
      {/* ============================================================== */}
      <section className="section-padding bg-slate-50/70 border-t border-slate-100">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-brand-navy tracking-tight leading-tight">
                Landscaping + ESG
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                We are constantly taking steps to reduce our impact on the environment and can help you achieve your sustainability goals, too. We use microbial and bio (green) products as much as possible, never use phosphates or aerosols, and select cleaning products that are effective, well priced and most importantly, have evidence-based eco-credentials.
              </p>

              {/* 3 Checkpoints */}
              <div className="space-y-4 pt-2">
                <div className="flex items-start space-x-3.5">
                  <div className="w-5 h-5 rounded-full bg-[#E53935] text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                    Hiring and training a diverse workforce, including opportunities for individuals from disadvantaged backgrounds.
                  </span>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-5 h-5 rounded-full bg-[#E53935] text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                    Positive environmental impact and improved biodiversity through expert landscaping services and sustainability best practices.
                  </span>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-5 h-5 rounded-full bg-[#E53935] text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                    Mood lifting locations and spaces that increase and enhance user wellbeing which helps drive footfall and increase productivity.
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

            {/* Right Photo: Landscape Maintenance Manager in Cap */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-100 aspect-[4/5] max-w-md mx-auto group">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=85"
                  alt="NEXAAGEN Landscaping Operations Leader"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 6: LANDSCAPING + TECHNOLOGY (Screenshot 6)              */}
      {/* ============================================================== */}
      <section className="section-padding bg-white border-t border-slate-100">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Photo: Operator on Ride-On Mower with Ear Defenders */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-100 aspect-[4/5] max-w-md mx-auto group">
                <img
                  src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=85"
                  alt="NEXAAGEN Landscaping Operator on Commercial Ride-on Mower"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-brand-navy tracking-tight leading-tight">
                Landscaping + Technology
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Our colleagues in the NEXAAGEN Advance (Technology) team harnesses emerging technologies like AI, AR, Robotics, Drones, and Smart Buildings to benefit our customers. By staying ahead of the curve, we can provide personalised, efficient, and immersive experiences, streamline operations, and create sustainable, energy-efficient environments.
              </p>

              {/* 3 Checkpoints */}
              <div className="space-y-4 pt-2">
                <div className="flex items-start space-x-3.5">
                  <div className="w-5 h-5 rounded-full bg-[#E53935] text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                    Advanced exterior and interior building intelligence, data-driven solutions and always-on monitoring for proactive and reactive maintenance.
                  </span>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-5 h-5 rounded-full bg-[#E53935] text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                    Platforms for conducting and managing audits, ensuring compliance with relevant standards, and identifying areas for improvement.
                  </span>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-5 h-5 rounded-full bg-[#E53935] text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                    Instant communication between facility managers, colleagues, and customers, enabling rapid response to requests, incidents and feedback.
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
            <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-brand-navy tracking-tight">
              Accreditations & Certifications
            </h3>
            <p className="mt-2 text-slate-600 text-xs sm:text-sm">
              Industry-specific accreditations and certification enabling our teams to deliver consistency, compliance and best practice.
            </p>
          </div>

          {/* 6 Badges Row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-items-center">
            {/* 1: ISO */}
            <div className="p-4 rounded-2xl border border-slate-200/80 hover:border-slate-300 hover:shadow-sm transition-all flex flex-col items-center justify-center w-full max-w-[170px] h-24 bg-white text-center">
              <span className="text-lg font-black tracking-wider text-blue-700">ISO</span>
              <span className="text-[10px] text-slate-400 font-semibold mt-1">9001 / 14001</span>
            </div>

            {/* 2: BESA */}
            <div className="p-4 rounded-2xl border border-slate-200/80 hover:border-slate-300 hover:shadow-sm transition-all flex flex-col items-center justify-center w-full max-w-[170px] h-24 bg-white text-center">
              <span className="text-sm font-black tracking-tight text-purple-900 bg-purple-50 px-2 py-0.5 rounded">BESA</span>
              <span className="text-[9px] text-slate-400 font-semibold mt-1">Building Engineering</span>
            </div>

            {/* 3: SafeContractor */}
            <div className="p-4 rounded-2xl border border-slate-200/80 hover:border-slate-300 hover:shadow-sm transition-all flex flex-col items-center justify-center w-full max-w-[170px] h-24 bg-white text-center">
              <div className="w-8 h-8 rounded-full bg-blue-900 text-white flex items-center justify-center text-[10px] font-black">
                SC
              </div>
              <span className="text-[11px] font-bold text-slate-700 mt-1">SafeContractor</span>
            </div>

            {/* 4: IWFM */}
            <div className="p-4 rounded-2xl border border-slate-200/80 hover:border-slate-300 hover:shadow-sm transition-all flex flex-col items-center justify-center w-full max-w-[170px] h-24 bg-white text-center">
              <span className="text-sm font-black tracking-wider text-teal-600">iwfm</span>
              <span className="text-[9px] text-slate-400 font-semibold mt-1">Institute Workplace FM</span>
            </div>

            {/* 5: Achilles UVDB */}
            <div className="p-4 rounded-2xl border border-slate-200/80 hover:border-slate-300 hover:shadow-sm transition-all flex flex-col items-center justify-center w-full max-w-[170px] h-24 bg-white text-center">
              <span className="text-xs font-bold text-[#D8232A]">Achilles</span>
              <span className="text-[9px] text-slate-400 font-semibold mt-1">UVDB Audited</span>
            </div>

            {/* 6: BALI Landscape */}
            <div className="p-4 rounded-2xl border border-slate-200/80 hover:border-slate-300 hover:shadow-sm transition-all flex flex-col items-center justify-center w-full max-w-[170px] h-24 bg-white text-center">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center justify-center text-xs font-black">
                BALI
              </div>
              <span className="text-[9px] text-slate-500 font-semibold mt-1">Landscape Approved</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 8: FREQUENTLY ASKED QUESTIONS (Screenshot 8)           */}
      {/* ============================================================== */}
      <section className="section-padding bg-white border-t border-slate-100">
        <div className="container-custom max-w-5xl">
          <h3 className="text-3xl sm:text-4xl font-heading font-extrabold text-brand-navy mb-4 sm:mb-6">
            Frequently asked questions for landscaping
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
      {/* SECTION 9: CONNECT WITH YOUR NEXAAGEN TEAM (Screenshot 9)       */}
      {/* ============================================================== */}
      <section className="py-3 sm:py-5 bg-slate-50/70 border-t border-slate-100">
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
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight">
                Connect with your NEXAAGEN team
              </h2>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
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
        title="Consult Our Commercial Landscaping Experts"
        subtitle="Speak with our certified horticulturists to plan your corporate campus grounds maintenance, biophilic indoor plants, or seasonal planting contract."
      />
    </div>
  );
}

