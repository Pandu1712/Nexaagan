import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Users,
  Globe2,
  Award,
  CheckCircle2,
  ArrowRight,
  Building2,
  HeartHandshake,
  Sparkles
} from 'lucide-react';
import { companyData } from '../data/companyData';
import Breadcrumbs from '../components/layout/Breadcrumbs';
import PageHero from '../components/layout/PageHero';
import SectionTitle from '../components/common/SectionTitle';
import ContactForm from '../components/sections/ContactForm';

export default function AboutUs() {
  return (
    <div className="w-full flex flex-col flex-1">
      <Breadcrumbs items={[{ label: 'About Us' }]} />

      {/* Signature OCS Enterprise Hero with Premium Photography & Floating Card */}
      <PageHero
        badge="About NEXAAGEN"
        badgeLinkText="Our Services"
        badgeLinkUrl="/services"
        title="Nexaagen Integrated Facility Management Services Private Limited"
        description={companyData.description}
        image="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2400&q=85"
        imageAlt="NEXAAGEN Executive Operations Team"
        stats={[
          { value: "10+", label: "Core Practices" },
          { value: "100%", label: "Direct Governance" },
          { value: "24/7/365", label: "Operations Desk" }
        ]}
        primaryCta={{
          text: "Meet Executive Leadership",
          url: "#leadership",
          isAnchor: true
        }}
        secondaryCta={{
          text: "Our Core Values",
          url: "#values",
          isAnchor: true
        }}
      />

      {/* Stats Counter Bar */}
      <section className="bg-brand-navy-dark text-white py-6 sm:py-8 border-b border-slate-800">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            {companyData.stats.map((st, idx) => (
              <div key={idx} className="p-4 bg-white/5 rounded-2xl border border-white/5">
                <div className="text-2xl sm:text-3xl font-heading font-extrabold text-brand-orange">
                  {st.value}
                </div>
                <div className="text-xs text-slate-300 font-semibold mt-1">
                  {st.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-orange/10 text-brand-orange border border-brand-orange/20">
                Our Heritage & Purpose
              </span>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-brand-navy tracking-tight leading-tight">
                About Nexaagen Integrated Facility <br className="hidden sm:inline" />
                Management Services Private Limited
              </h2>

              <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-medium">
                Nexaagen Integrated Facility Management Services Private Limited is proposed as a multi-sector facility management and engineering services company.
              </p>

              {/* Core Offerings Bullets */}
              <div className="space-y-3 pt-1">
                {[
                  "Integrated management of facility operations, upkeep and support services",
                  "Specialised solutions for pharmaceutical, healthcare, hospitality, industrial and commercial facilities",
                  "Housekeeping, hygiene, technical maintenance and engineering coordination",
                  "Consultancy, project management and operational improvement support"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3 text-sm sm:text-base text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Mission & Vision Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
                  <div className="flex items-center space-x-2 text-brand-orange">
                    <Sparkles className="w-4 h-4" />
                    <h4 className="text-sm font-bold uppercase tracking-wider text-brand-navy">
                      Our Vision
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                    To become a trusted integrated facility management and engineering services partner across key industry sectors.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
                  <div className="flex items-center space-x-2 text-brand-orange">
                    <ShieldCheck className="w-4 h-4" />
                    <h4 className="text-sm font-bold uppercase tracking-wider text-brand-navy">
                      Our Mission
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                    To deliver safe, efficient and dependable facility operations through skilled teams, structured processes and responsive management.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group aspect-[4/3] lg:aspect-auto lg:h-[420px] w-full">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                  alt="NEXAAGEN Colleagues Collaborating"
                  className="w-full h-full object-cover object-top card-img-zoom"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-xs uppercase tracking-widest font-bold text-brand-orange block mb-1">
                    Direct Employment Model
                  </span>
                  <p className="text-sm text-slate-200">
                    Over 32,000 colleagues directly employed and trained across 35+ countries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section id="leadership" className="section-padding bg-slate-50 border-y border-slate-100">
        <div className="container-custom">
          <SectionTitle
            badge="Executive Leadership"
            title="Guided by Decades of Industry Experience"
            subtitle="Our executive board brings together deep technical engineering acumen, multinational operations mastery, and rigorous corporate governance."
            align="left"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyData.leadership.map((leader, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl overflow-hidden shadow-card-subtle hover:shadow-card-hover border border-slate-100 transition-all duration-300 flex flex-col group"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover card-img-zoom"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/70 via-transparent to-transparent" />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-heading font-bold text-brand-navy group-hover:text-brand-orange transition-colors">
                      {leader.name}
                    </h3>
                    <span className="text-xs font-semibold text-brand-orange block mb-2">
                      {leader.title}
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {leader.bio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section id="values" className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            badge="Guiding Principles"
            title="The Values That Govern Our Operations"
            subtitle="From the boardroom to the plant floor, these non-negotiable principles guide our 32,000+ team members every single day."
            align="left"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {companyData.values.map((v, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-brand-orange/30 hover:bg-white transition-all shadow-sm group"
              >
                <div className="w-12 h-12 rounded-2xl bg-brand-navy text-white flex items-center justify-center mb-5 group-hover:bg-gradient-to-br group-hover:from-brand-orange group-hover:to-red-600 transition-all shadow-md">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-heading font-bold text-brand-navy group-hover:text-brand-orange transition-colors mb-3">
                  {v.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations & Certifications */}
      <section id="certifications" className="section-padding bg-slate-50 border-t border-slate-100">
        <div className="container-custom">
          <SectionTitle
            badge="Verified Excellence"
            title="International Accreditations & Industry Certifications"
            subtitle="Our operations comply with the highest global statutory, quality, safety, and environmental standards."
            align="left"
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
            {companyData.certifications.map((cert, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-center space-x-3"
              >
                <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-brand-navy">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactForm
        title="Partner With NEXAAGEN"
        subtitle="Discover how our direct self-delivery model and certified technical teams can support your estate operations."
      />
    </div>
  );
}

