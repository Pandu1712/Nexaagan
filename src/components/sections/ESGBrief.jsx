import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Users, ShieldCheck, ArrowRight } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';

export default function ESGBrief({
  title = "ESG & Sustainable Stewardship",
  subtitle = "Embedding carbon reduction, social value, and transparent governance into every contract.",
  esgData = null,
  imageOnLeft = true,
}) {
  const defaultEsg = {
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1200&q=80",
    environmental: {
      title: "Environmental Responsibility",
      description: "Driving commercial decarbonisation via intelligent BMS controls, circular waste streaming, and zero-chemical cleaning technologies."
    },
    social: {
      title: "Social Impact & Community Safety",
      description: "Paying real living wages, funding local apprenticeships, and maintaining a strict zero-harm health and safety culture."
    },
    governance: {
      title: "Transparent & Auditable Governance",
      description: "Full supply-chain transparency, regular third-party ISO audits, and verified reporting aligned with international sustainability standards."
    }
  };

  const data = esgData || defaultEsg;

  return (
    <section className="section-padding bg-transparent">
      <div className="container-custom">
        <SectionTitle
          badge="Sustainability in Action"
          title={title}
          subtitle={subtitle}
          align="left"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Large Image Column */}
          <div
            className={`lg:col-span-5 ${
              imageOnLeft ? 'order-1' : 'order-1 lg:order-2'
            }`}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group aspect-[4/3] lg:aspect-[4/3] max-h-[460px] w-full">
              <img
                src={data.image || defaultEsg.image}
                alt="ESG Sustainability"
                className="w-full h-full object-cover card-img-zoom"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark/85 via-brand-navy/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs uppercase tracking-widest font-bold text-brand-orange block mb-1">
                  Net Zero 2035 Commitment
                </span>
                <p className="text-sm text-slate-200">
                  Targeting verified 50% carbon intensity reductions across all partner estates before 2030.
                </p>
                <div className="mt-4 pt-3 border-t border-white/20 flex items-center justify-between text-xs font-semibold">
                  <span>ISO 14001 Accredited</span>
                  <span>Living Wage Certified</span>
                </div>
              </div>
            </div>
          </div>

          {/* Three Content Sections Column */}
          <div
            className={`lg:col-span-7 space-y-6 ${
              imageOnLeft ? 'order-2' : 'order-2 lg:order-1'
            }`}
          >
            {/* Pillar 1: Environmental */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-brand-orange/30 transition-all group">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-xl bg-emerald-100 text-emerald-700 group-hover:bg-brand-orange group-hover:text-white transition-colors flex-shrink-0">
                  <Leaf className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-heading font-bold text-brand-navy group-hover:text-brand-orange transition-colors">
                    {data.environmental?.title || "Environmental Responsibility"}
                  </h4>
                  <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">
                    {data.environmental?.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Pillar 2: Social */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-brand-orange/30 transition-all group">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-xl bg-blue-100 text-blue-700 group-hover:bg-brand-orange group-hover:text-white transition-colors flex-shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-heading font-bold text-brand-navy group-hover:text-brand-orange transition-colors">
                    {data.social?.title || "Social Impact & Community Safety"}
                  </h4>
                  <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">
                    {data.social?.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Pillar 3: Governance */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-brand-orange/30 transition-all group">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-xl bg-amber-100 text-amber-700 group-hover:bg-brand-orange group-hover:text-white transition-colors flex-shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-heading font-bold text-brand-navy group-hover:text-brand-orange transition-colors">
                    {data.governance?.title || "Transparent & Auditable Governance"}
                  </h4>
                  <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">
                    {data.governance?.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Link to Full ESG Page */}
            <div className="pt-2">
              <Link
                to="/esg"
                className="inline-flex items-center text-sm font-bold text-brand-orange hover:text-red-700 transition-colors group"
              >
                <span>Read our full ESG Strategy & Download Sustainability Reports</span>
                <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

