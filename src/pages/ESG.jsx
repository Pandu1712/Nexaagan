import React from 'react';
import { 
  Leaf, 
  Users, 
  ShieldCheck, 
  Download, 
  FileText, 
  ArrowRight, 
  CheckCircle2, 
  Globe2 
} from 'lucide-react';
import { esgData } from '../data/esgData';
import Breadcrumbs from '../components/layout/Breadcrumbs';
import PageHero from '../components/layout/PageHero';
import SectionTitle from '../components/common/SectionTitle';
import ContactForm from '../components/sections/ContactForm';
import esgSolarImg from '../assets/esg/esg-solar-installation.jpg';

export default function ESG() {
  return (
    <div className="w-full flex flex-col flex-1">
      <Breadcrumbs items={[{ label: 'ESG & Sustainability' }]} />

      {/* Signature OCS Enterprise Hero with Premium Photography & Floating Card */}
      <PageHero
        badge="Net Zero 2035 Roadmap"
        badgeLinkText="Explore commitments"
        badgeLinkUrl="#commitments"
        title={esgData.hero.title}
        description={esgData.hero.subtitle}
        image={esgSolarImg}
        imageAlt="Sustainable Solar & Green Architecture Infrastructure"
        stats={[
          { value: "Net Zero", label: "Target 2035" },
          { value: "100%", label: "Renewable Energy" },
          { value: "Zero", label: "Landfill Waste Target" }
        ]}
        primaryCta={{
          text: "Explore ESG Pillars",
          url: "#environmental",
          isAnchor: true
        }}
        secondaryCta={{
          text: "Request Carbon Audit",
          url: "#contact-form",
          isAnchor: true
        }}
      />

      {/* Commitments Bar */}
      <section id="commitments" className="w-full bg-brand-navy-dark text-white py-12 border-b border-slate-800">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {esgData.commitments.map((c, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                <div className="text-3xl font-heading font-extrabold text-brand-orange">{c.target}</div>
                <p className="text-xs text-slate-300 leading-relaxed">{c.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Three Pillars Deep-Dive */}
      <section className="w-full section-padding bg-white">
        <div className="container-custom space-y-20">
          <SectionTitle
            badge="Three ESG Pillars"
            title="A Structured Framework for Real-World Impact"
            subtitle="Explore how environmental engineering, equitable people policies, and transparent governance shape every facility we manage."
            align="center"
          />

          {esgData.pillars.map((pillar, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={pillar.id}
                id={pillar.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center p-8 sm:p-12 rounded-3xl bg-slate-50 border border-slate-100 ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Image Column */}
                <div className={`lg:col-span-5 ${isEven ? 'order-1' : 'order-1 lg:order-2'}`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3] group">
                    <img
                      src={pillar.image}
                      alt={pillar.title}
                      className="w-full h-full object-cover card-img-zoom"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 to-transparent" />
                    <span className="absolute bottom-4 left-4 bg-white/95 text-brand-navy text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                      {pillar.title}
                    </span>
                  </div>
                </div>

                {/* Content Column */}
                <div className={`lg:col-span-7 space-y-5 ${isEven ? 'order-2' : 'order-2 lg:order-1'}`}>
                  <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-brand-navy">
                    {pillar.title}
                  </h3>
                  <p className="text-slate-600 text-base leading-relaxed">
                    {pillar.tagline}
                  </p>

                  <div className="space-y-3.5 pt-2">
                    {pillar.points.map((pt, pIdx) => (
                      <div key={pIdx} className="p-4 rounded-xl bg-white border border-slate-200/70 shadow-sm space-y-1">
                        <div className="flex items-center space-x-2 text-sm font-bold text-brand-navy">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                          <span>{pt.title}</span>
                        </div>
                        <p className="text-xs text-slate-600 pl-6 leading-relaxed">
                          {pt.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Downloadable ESG Reports */}
      <section className="w-full section-padding bg-slate-50 border-y border-slate-100">
        <div className="container-custom">
          <SectionTitle
            badge="Transparency & Disclosures"
            title="Download Official ESG Reports & Policies"
            subtitle="Access our independently verified sustainability disclosures, Net Zero roadmaps, and statutory corporate statements."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {esgData.downloads.map((doc, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-card-subtle flex items-center justify-between gap-4 transition-all group"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-xl bg-brand-orange/10 text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-colors flex-shrink-0">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-brand-navy group-hover:text-brand-orange transition-colors">
                      {doc.title}
                    </h4>
                    <span className="text-xs text-slate-400 font-mono mt-0.5 block">
                      {doc.format} • {doc.size}
                    </span>
                  </div>
                </div>

                <a
                  href="#contact-form"
                  className="p-2.5 rounded-xl bg-slate-100 hover:bg-brand-navy text-slate-600 hover:text-white transition-colors flex-shrink-0"
                  title="Download Report"
                >
                  <Download className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Consultation Form */}
      <ContactForm
        title="Partner With Us on Your Decarbonisation Roadmap"
        subtitle="Speak with our ESG advisory directors to plan your energy audits, waste segregation, and social value metrics."
        defaultService="Energy Management & Net Zero Pathways"
      />
    </div>
  );
}
