import React from 'react';
import { ShieldCheck, Calendar, Lock } from 'lucide-react';
import { privacyPolicyData } from '../data/legalData';
import Breadcrumbs from '../components/layout/Breadcrumbs';

export default function PrivacyPolicy() {
  return (
    <div className="w-full flex flex-col flex-1">
      <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />

      <section className="w-full bg-brand-navy text-white py-6 sm:py-8 relative overflow-hidden">
        <div className="container-custom max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 text-brand-orange text-xs font-semibold">
            <Lock className="w-3.5 h-3.5" />
            <span>Data Protection & Privacy</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-heading font-extrabold tracking-tight text-white">
            {privacyPolicyData.title}
          </h1>
          <p className="text-slate-300 text-sm">
            Last Updated: {privacyPolicyData.lastUpdated}
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl mx-auto space-y-10 text-slate-700">
          {privacyPolicyData.sections.map((sec, idx) => (
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
            <ShieldCheck className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-slate-600 space-y-1">
              <span className="font-bold text-brand-navy block">Data Protection Officer Contact</span>
              <p>For data access requests, rectification, or privacy inquiries, contact our Data Protection Office at <span className="font-semibold text-brand-orange">privacy@nexaagen.com</span>.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

