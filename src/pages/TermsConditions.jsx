import React from 'react';
import { FileText, Calendar, AlertCircle } from 'lucide-react';
import { termsConditionsData } from '../data/legalData';
import Breadcrumbs from '../components/layout/Breadcrumbs';

export default function TermsConditions() {
  return (
    <div className="w-full flex flex-col flex-1">
      <Breadcrumbs items={[{ label: 'Terms & Conditions' }]} />

      <section className="w-full bg-brand-navy text-white py-6 sm:py-8 relative overflow-hidden">
        <div className="container-custom max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 text-brand-orange text-xs font-semibold">
            <FileText className="w-3.5 h-3.5" />
            <span>Legal Framework</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-heading font-extrabold tracking-tight text-white">
            {termsConditionsData.title}
          </h1>
          <p className="text-slate-300 text-sm">
            Last Updated: {termsConditionsData.lastUpdated}
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl mx-auto space-y-10 text-slate-700">
          {termsConditionsData.sections.map((sec, idx) => (
            <div key={idx} className="space-y-3 pb-8 border-b border-slate-100 last:border-b-0">
              <h2 className="text-xl font-heading font-bold text-brand-navy">
                {sec.heading}
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-slate-600">
                {sec.text}
              </p>
            </div>
          ))}

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 flex items-start space-x-4">
            <AlertCircle className="w-6 h-6 text-brand-orange flex-shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-slate-600 space-y-1">
              <span className="font-bold text-brand-navy block">Contractual Notice</span>
              <p>Commercial relationships, service level agreements, and liability caps for contracted operations are governed solely by formally signed Master Service Agreements (MSAs).</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

