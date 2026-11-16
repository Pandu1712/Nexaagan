import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  Heart, 
  Leaf, 
  Award,
  Users,
  FileCheck2,
  HardHat,
  Sparkles
} from 'lucide-react';
import Breadcrumbs from '../components/layout/Breadcrumbs';
import ContactForm from '../components/sections/ContactForm';

export default function QHSE() {
  return (
    <div className="w-full flex flex-col flex-1 bg-white text-slate-900 font-sans overflow-hidden">
      <Breadcrumbs
        items={[
          { label: 'ESG', link: '/esg' },
          { label: 'Quality, Health, Safety and Environment (QHSE)' }
        ]}
      />

      {/* SECTION 1: HERO HEADER (Screenshot 1) */}
      <section className="relative pt-4 pb-3 sm:pt-6 sm:pb-4 container-custom text-center">
        {/* Subtle decorative dot pattern */}
        <div 
          className="absolute inset-0 opacity-15 pointer-events-none -z-10"
          style={{
            backgroundImage: 'radial-gradient(#FF5722 1.2px, transparent 1.2px)',
            backgroundSize: '24px 24px'
          }}
        />

        <div className="space-y-6">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-orange-100/80 text-[#D8232A] border border-orange-200">
            QHSE Governance Framework
          </span>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-slate-900 tracking-tight leading-[1.15]">
            NEXAAGEN approach to Quality, Health, Safety and Environment (QHSE)
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed font-normal max-w-4xl mx-auto">
            Across our global business, we achieve a benchmark Quality, Health, Safety and Environment (QHSE) performance underpinned by high-quality, consistent services, a proactive approach to health and safety, and a commitment to minimising environmental impact.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#what-is-qhse"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-full font-heading font-bold text-sm text-white bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 group"
            >
              <span>Explore Our Framework</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact-form"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-full font-heading font-bold text-sm text-slate-700 bg-slate-100 hover:bg-slate-200 transition-all duration-300"
            >
              <span>Contact Our QHSE Team</span>
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHAT IS QHSE? (Screenshot 2) */}
      <section id="what-is-qhse" className="py-4 sm:py-6 container-custom border-t border-slate-100">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Photo of worker in safety gear */}
          <div className="lg:col-span-6">
            <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-[5/4] border border-slate-100">
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80" 
                alt="NEXAAGEN QHSE Specialist with Safety Harness" 
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Right Column: Description */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 tracking-tight leading-tight">
              What is QHSE?
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Quality, Health, Safety and Environment. QHSE is a framework that's used by organisations to manage, measure and evolve performance across these areas. Quality covers the services we provide, while Health concerns the health of our colleagues and everyone who comes into contact with our services. Safety refers to ensuring our colleagues are safe while working, while environment covers the environmental impact of our businesses.
            </p>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              We take a systematic approach to QHSE, adhere to relevant ISO standards, and are committed to continually evolving our approach to these four areas to ensure our actions are always with best practice.
            </p>

            {/* CTA Button */}
            <div className="pt-2">
              <a
                href="#contact-form"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full font-heading font-bold text-sm text-white bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300"
              >
                <span>View our QHSE Policy</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: SAFETY FIRST APPROACH (Screenshot 3) */}
      <section className="py-4 sm:py-6 container-custom border-t border-slate-100">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Description */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 tracking-tight leading-tight">
              Safety first approach – the foundation for our operation
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Every day, we want people to return home from work. It's a core sentiment that's reinforced every day. Through comprehensive training and embracing best practices, our teams understand the safest way to work, regardless of whether it's a new site or one they're familiar with, while we also take a very proactive approach to safety on-site, too.
            </p>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              It's essential that we protect our customers' interests, and as part of that commitment, we identify hazards quickly and report them efficiently in order to minimise any risks, ensuring best practice, productivity, resilience and outcomes.
            </p>
          </div>

          {/* Right Column: Photo of Engineer with Hard Hat and Pylon */}
          <div className="lg:col-span-6">
            <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-[5/4] border border-slate-100">
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80" 
                alt="NEXAAGEN Safety First Infrastructure Engineer" 
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: PHYSICAL AND MENTAL HEALTH AND WELLBEING (Screenshot 4) */}
      <section className="py-4 sm:py-6 container-custom border-t border-slate-100">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Photo of Smiling Security Officer */}
          <div className="lg:col-span-6">
            <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-[5/4] border border-slate-100">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80" 
                alt="Physical and Mental Health and Wellbeing Specialist" 
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Right Column: Description */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 tracking-tight leading-tight">
              Physical and mental health and wellbeing for all of our colleagues and customers
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Globally, we have more than 130,000 colleagues across the NEXAAGEN business, and it's essential we take a proactive approach to health. After all, part of our mission is to help make people the best they can be, and this applies as much to our own colleagues as our customers, employees, visitors and clients!
            </p>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              From ensuring our teams are working in healthy environments that enable them to work safely to providing avenues to better manage personal health and fitness, we're committed to helping individuals thrive, and lead healthy, happy lives both in and outside of work.
            </p>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Occupational health and safety is hugely important, too, and we work with our colleagues to ensure they have the right tools, equipment and training to do their jobs without putting themselves or others at risk.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5: CONSISTENT APPROACH TO QUALITY (Screenshot 5) */}
      <section className="py-4 sm:py-6 container-custom border-t border-slate-100">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Description */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 tracking-tight leading-tight">
              Our consistent approach to quality through the training and development
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Each day, we provide a wide range of services for more than 8000 customers globally – and, as a business, those services have to consistently be the best they can possibly be.
            </p>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Through regular training led by our own people who live and breathe service delivery, we create robust systems that enable consistent excellence across all of our service lines, bringing best practices and best productivity to create the very best experiences.
            </p>
          </div>

          {/* Right Column: Photo of Hospitality / Service Professional */}
          <div className="lg:col-span-6">
            <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-[5/4] border border-slate-100">
              <img 
                src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80" 
                alt="Hospitality Service Training and Development Excellence" 
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: COMMITMENT TO THE ENVIRONMENT (Screenshot 6) */}
      <section className="py-4 sm:py-6 container-custom border-t border-slate-100">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Photo of Smiling Woman in Green Nature Setting */}
          <div className="lg:col-span-6">
            <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-[5/4] border border-slate-100">
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80" 
                alt="NEXAAGEN Commitment to Environmental Sustainability" 
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Right Column: Description */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 tracking-tight leading-tight">
              Our commitment to the Environment
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              As a global organisation responsible for 130,000 colleagues and over 8000 customers, we understand the opportunity we have to impact the world around us positively, from changing approaches to supply chains to using environmentally friendly cleaning products.
            </p>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Creating a world-class approach to sustainability involves many areas across our service lines – for example, bringing recycling best practices to waste disposal and using electric vehicles where possible.
            </p>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              We also work in partnership with our customers to make better use of renewable energy, and bring the best sustainability initiatives to the fore.
            </p>

            {/* CTA Button */}
            <div className="pt-2">
              <Link
                to="/esg"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full font-heading font-bold text-sm text-white bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300"
              >
                <span>Our ESG Commitments</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: CONNECT WITH YOUR TEAM BANNER (Screenshot 7) */}
      <section className="py-3 sm:py-5 container-custom">
        <div className="relative rounded-3xl bg-[#0A192F] text-white p-6 sm:p-10 lg:p-12 overflow-hidden text-center shadow-2xl">
          {/* Subtle radial dot matrix pattern */}
          <div 
            className="absolute inset-0 opacity-15 pointer-events-none" 
            style={{
              backgroundImage: 'radial-gradient(#ffffff 1.2px, transparent 1.2px)',
              backgroundSize: '22px 22px'
            }}
          />

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold tracking-tight mb-3">
              Connect with your NEXAAGEN team
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
              We're ready to deliver the best experiences, productivity, practices, resilience and outcomes and we look forward to connecting with you and your team.
            </p>
            <a
              href="#contact-form"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-heading font-bold text-base text-white bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:shadow-xl hover:shadow-orange-500/30 transition-all duration-300"
            >
              <span>Contact Us</span>
            </a>
          </div>
        </div>
      </section>

      {/* SIGNATURE CONTACT FORM */}
      <section id="contact-form" className="py-3 sm:py-5 container-custom">
        <div className="bg-slate-50/70 rounded-3xl p-5 sm:p-8 border border-slate-200/80">
          <ContactForm 
            title="Connect With Our QHSE & Compliance Leaders"
            subtitle="Learn more about our ISO-accredited quality assurance, zero-harm safety protocols, and environmental impact audits."
            defaultService="QHSE & Compliance" 
          />
        </div>
      </section>

    </div>
  );
}

