import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  FileText, 
  HeartHandshake, 
  ArrowLeft, 
  Download, 
  Globe2,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import Breadcrumbs from '../components/layout/Breadcrumbs';

export default function ModernSlaveryAct() {
  return (
    <div className="w-full flex flex-col flex-1 bg-white text-slate-900 font-sans">
      <Breadcrumbs
        items={[
          { label: 'ESG', link: '/esg' },
          { label: 'Governance', link: '/governance' },
          { label: 'Modern Slavery Act' }
        ]}
      />

      {/* Main Statement Content Section (Exactly as shown in screenshot) */}
      <section className="py-6 sm:py-8 container-custom">
        <div className="space-y-10">
          {/* Header Title */}
          <div className="space-y-4">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-orange-100/80 text-[#D8232A] border border-orange-200">
              <ShieldCheck className="w-3.5 h-3.5 text-[#D8232A]" />
              <span>ESG • Modern Slavery Act</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-brand-navy tracking-tight leading-tight">
              Statement
            </h1>
          </div>

          {/* Statement Body Text (Exact transcription from screenshot, with NEXAAGEN branding) */}
          <div className="space-y-6 text-slate-700 text-base sm:text-lg lg:text-xl font-normal leading-relaxed">
            <p>
              Modern slavery is a growing concern globally. The data tells us that the numbers of people suffering from this terrible crime are increasing by 20% every 4 years which has seen published figures of 50 million people that are now held in modern slavery conditions worldwide.
            </p>

            <p>
              2022 saw the fallout of the Covid pandemic and political unrest meaning mass human migration which allows criminals to manipulate peoples needs and fears and the result is that this crime only becomes more prevalent but further underground.
            </p>

            <p>
              NEXAAGEN are an ethical business with integrity and this runs through our entire organisation to our front line workers. Our approach to business is informed by our TRUE Values: Trust, Respect, Unity and Empowerment. These Values underpin the decisions we take, guide us to do the right thing, and they inform the approach NEXAAGEN is taking to modern slavery. Our commitment is both clear and achievable – to eradicate modern slavery and human trafficking within both our business and our supply chains, throughout our global network.
            </p>
          </div>

          {/* Key Commitments Callout Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-sm space-y-4">
            <h3 className="text-lg font-heading font-bold text-slate-900 flex items-center space-x-2">
              <HeartHandshake className="w-5 h-5 text-[#FF5722]" />
              <span>Our Core Principles for Global Supply Chain Vigilance</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700 pt-1">
              <div className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>Zero tolerance for forced, bonded, or involuntary labor.</span>
              </div>
              <div className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>Mandatory modern slavery training for all frontline leaders.</span>
              </div>
              <div className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>Collaborating with Slave-Free Alliance & CIPS standards.</span>
              </div>
              <div className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>Confidential, 24/7 protected whistleblower mechanisms.</span>
              </div>
            </div>
          </div>

          {/* Navigation / Back Links */}
          <div className="pt-6 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-4">
            <Link
              to="/governance"
              className="inline-flex items-center space-x-2 text-sm font-semibold text-slate-600 hover:text-brand-orange transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Governance (ESG)</span>
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-full font-heading font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:shadow-lg hover:shadow-orange-500/25 transition-all"
            >
              <span>Contact Compliance & Ethics Team</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
