import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Download, 
  CheckCircle2, 
  ExternalLink, 
  Eye, 
  ShieldCheck, 
  X, 
  ArrowRight,
  Check,
  FileText
} from 'lucide-react';
import Breadcrumbs from '../components/layout/Breadcrumbs';

export default function Policies() {
  const [selectedPolicy, setSelectedPolicy] = useState(null);
  const [downloadSuccess, setDownloadSuccess] = useState(null);

  const policies = [
    {
      id: 'qhse-policy',
      title: 'NEXAAGEN Group QHSE Policy',
      category: 'Quality, Health, Safety & Environment',
      fileSize: '1.8 MB',
      updatedDate: 'January 2026',
      relatedPage: '/qhse',
      description: 'Defines our unified standards for Quality, Health, Safety, and Environmental management across all international operations, conforming to ISO 9001, ISO 14001, and ISO 45001 benchmarks.',
      keyPoints: [
        'Zero-harm workplace philosophy with proactive hazard identification',
        'ISO 9001:2015, ISO 14001:2015, and ISO 45001:2018 certification compliance',
        'Mandatory quarterly audits across all client and corporate facilities',
        'Continuous colleague training through the NEXAAGEN Academy'
      ]
    },
    {
      id: 'esg-policy',
      title: 'NEXAAGEN Group ESG Policy',
      category: 'Environmental, Social & Governance',
      fileSize: '2.4 MB',
      updatedDate: 'February 2026',
      relatedPage: '/esg',
      description: 'Our foundational roadmap for Environmental, Social, and Governance excellence, outlining Net Zero carbon pathways, biodiversity safeguards, social mobility programmes, and transparent corporate governance.',
      keyPoints: [
        'Science Based Targets initiative (SBTi) aligned Net Zero timeline',
        '100% eco-friendly chemicals and circular waste diversion protocols',
        'Diversity, equity, and inclusion benchmarks across all job tiers',
        'Independent ESG committee oversight and audited sustainability disclosures'
      ]
    },
    {
      id: 'code-of-conduct',
      title: 'NEXAAGEN Group Code of Conduct',
      category: 'Ethics & Compliance',
      fileSize: '3.1 MB',
      updatedDate: 'March 2026',
      relatedPage: '/code-of-conduct',
      description: 'The definitive ethical standard for all NEXAAGEN colleagues, directors, contractors, and partners worldwide, rooted in our core TRUE Values: Trust, Respect, Unity, and Empowerment.',
      keyPoints: [
        'Strict zero-tolerance policy towards bribery, corruption, and fraud',
        'Safe and respectful workplace rules protecting human rights',
        'Fair competition, conflict of interest avoidance, and antitrust rules',
        'Colleague responsibilities and whistleblower protections'
      ]
    },
    {
      id: 'modern-slavery-policy',
      title: 'NEXAAGEN Group Modern Slavery Policy',
      category: 'Human Rights',
      fileSize: '1.5 MB',
      updatedDate: 'January 2026',
      relatedPage: '/modern-slavery-act',
      description: 'Comprehensive protocols detailing our zero-tolerance approach to modern slavery, human trafficking, servitude, and forced or child labour across all operations and our extended global supply chains.',
      keyPoints: [
        'Mandatory supply chain due diligence and pre-qualification audits',
        'Direct colleague recruitment without illegal recruitment fees',
        'Independent third-party audits of high-risk subcontractor categories',
        'Direct Safecall whistleblowing reporting mechanism for forced labour suspicions'
      ]
    },
    {
      id: 'anti-bribery-statement',
      title: 'NEXAAGEN Group Anti-Bribery Statement',
      category: 'Corporate Governance',
      fileSize: '1.2 MB',
      updatedDate: 'January 2026',
      relatedPage: '/governance',
      description: 'Clear corporate guidelines prohibiting any form of active or passive bribery, improper gifts, hospitality, facilitation payments, political contributions, or corrupt commercial inducements.',
      keyPoints: [
        'Compliance with the UK Bribery Act 2010 and Prevention of Corruption Act (India)',
        'Strict financial limits and mandatory logging for gifts and hospitality',
        'Prohibition of facilitation payments to public officials anywhere in the world',
        'Disciplinary consequences up to immediate contract termination and criminal referral'
      ]
    },
    {
      id: 'whistleblowing-statement',
      title: 'NEXAAGEN Group Whistleblowing Statement',
      category: 'Accountability & Whistleblowing',
      fileSize: '1.4 MB',
      updatedDate: 'February 2026',
      relatedPage: '/governance',
      description: 'Guarantees confidential, secure, and retaliation-free channels for colleagues, contractors, clients, and partners to report suspected illegal, fraudulent, or unethical activities.',
      keyPoints: [
        'Operated 24/7/365 by independent third-party provider (Safecall)',
        'Option for complete anonymity with dedicated multi-lingual hotlines',
        'Legal and corporate protections against retaliation or victimization',
        'Direct reporting pathway to the NEXAAGEN Board Audit Committee'
      ]
    },
    {
      id: 'colleague-privacy-notice',
      title: 'NEXAAGEN India Colleague Privacy Notice',
      category: 'Data Protection & Privacy',
      fileSize: '1.6 MB',
      updatedDate: 'March 2026',
      relatedPage: '/privacy-policy',
      description: 'Outlines our practices regarding the lawful collection, processing, storage, sharing, and safeguarding of employee and candidate personal data across NEXAAGEN operations in India.',
      keyPoints: [
        'Strict compliance with India’s Digital Personal Data Protection (DPDP) Act 2023',
        'Clear specification of lawful bases for processing employment information',
        'Enterprise-grade cryptographic security and restricted internal access control',
        'Employee rights to review, correct, or request deletion of personal information'
      ]
    }
  ];

  const handleDownload = (policy) => {
    setDownloadSuccess(policy.title);
    setTimeout(() => {
      setDownloadSuccess(null);
    }, 4500);

    // Create a simulated downloadable official policy document
    const element = document.createElement('a');
    const content = 
`================================================================================
NEXAAGEN ENTERPRISE SOLUTIONS - OFFICIAL CORPORATE GOVERNANCE POLICY
================================================================================

DOCUMENT TITLE: ${policy.title}
CATEGORY:       ${policy.category}
VERSION:        2026.1
EFFECTIVE DATE: ${policy.updatedDate}
STATUS:         Active & Enforced Globally
BOARD OVERSIGHT: NEXAAGEN Group Governance & Ethics Committee

--------------------------------------------------------------------------------
1. POLICY STATEMENT & OBJECTIVES
--------------------------------------------------------------------------------
${policy.description}

--------------------------------------------------------------------------------
2. CORE COMMITMENTS & GOVERNANCE PROTOCOLS
--------------------------------------------------------------------------------
${policy.keyPoints.map((pt, i) => `[${i + 1}] ${pt}`).join('\n')}

--------------------------------------------------------------------------------
3. ASSURANCE, AUDITING & COMPLIANCE
--------------------------------------------------------------------------------
Compliance with this policy is mandatory for all NEXAAGEN employees, contractors,
and supply chain partners across all territories. Regular audits are conducted
by internal quality assurance teams and accredited independent auditors.

Violations of this policy may be reported confidentially 24/7/365 via Safecall
or by emailing compliance@nexaagen.com.

================================================================================
(c) 2026 NEXAAGEN Enterprise Solutions. All rights reserved.
================================================================================
`;
    const file = new Blob([content], { type: 'text/plain;charset=utf-8' });
    element.href = URL.createObjectURL(file);
    element.download = `${policy.title.replace(/\s+/g, '_')}_Official.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="w-full flex flex-col flex-1 bg-white text-slate-900 font-sans overflow-hidden">
      {/* Toast Notification */}
      {downloadSuccess && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#0A192F] text-white px-5 py-3.5 rounded-2xl shadow-2xl flex items-center space-x-3 border border-slate-700 animate-slide-in">
          <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
            <Check className="w-4 h-4" />
          </div>
          <div>
            <p className="text-xs text-slate-400 font-medium">Download Started</p>
            <p className="text-sm font-semibold text-white">{downloadSuccess}</p>
          </div>
        </div>
      )}

      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'ESG', link: '/esg' },
          { label: 'Policies' }
        ]}
      />

      {/* ========================================================================= */}
      {/* SECTION 1: HERO - POLICY DOWNLOAD CENTRE (Matching Reference Image 1)     */}
      {/* ========================================================================= */}
      <section className="relative pt-4 pb-3 sm:pt-6 sm:pb-4 px-4 sm:px-6 lg:px-8 bg-[#FAF8F5] overflow-hidden">
        {/* Subtle Wave Dot Pattern Background as seen in reference */}
        <div 
          className="absolute inset-0 opacity-[0.22] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(#F97316 1.1px, transparent 1.1px)',
            backgroundSize: '24px 24px'
          }}
        />

        {/* Soft Radial Gradient Overlays */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-200/20 rounded-full blur-3xl pointer-events-none translate-x-1/2 translate-y-1/2" />

        <div className="relative max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-brand-navy tracking-tight leading-tight">
            Policy Download Centre
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto font-normal">
            Essential governance policies on Quality, Health, Safety, and Environment (QHSE), Environmental, Social, and Governance (ESG) standards, Modern Slavery, Code of Conduct, and more, ensuring our colleagues, customers, partners, and the communities we serve are well-informed about our practices and standards.
          </p>

          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-9 py-3.5 rounded-full font-heading font-bold text-sm text-white bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:shadow-lg hover:shadow-orange-500/25 hover:scale-105 transition-all duration-300"
            >
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: POLICIES GRID (Matching Reference Image 2)                     */}
      {/* ========================================================================= */}
      <section className="py-4 sm:py-6 container-custom">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-4 sm:mb-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-brand-navy tracking-tight leading-tight">
            NEXAAGEN Policies
          </h2>
          <p className="text-slate-500 text-sm sm:text-base font-normal">
            View and download our policies here
          </p>
        </div>

        {/* 2-Column Grid Matching Reference Layout Exactly */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {policies.map((policy) => (
            <div
              key={policy.id}
              className="bg-white border border-slate-100 hover:border-orange-200 rounded-2xl p-5 sm:p-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-all duration-300 flex items-center justify-between group"
            >
              <div className="text-sm sm:text-[15px] text-[#334155] font-normal leading-relaxed flex-1 pr-3">
                Download our{' '}
                <button
                  type="button"
                  onClick={() => handleDownload(policy)}
                  className="text-[#EA580C] underline decoration-[#EA580C]/40 underline-offset-4 hover:decoration-[#EA580C] hover:text-[#C2410C] font-normal sm:font-medium text-left transition-colors inline-flex items-center gap-1.5 focus:outline-none"
                >
                  <span>{policy.title}</span>
                  <Download className="w-4 h-4 text-[#EA580C] flex-shrink-0 inline group-hover:translate-y-0.5 transition-transform" />
                </button>
              </div>

              {/* Quick Info & Preview Trigger */}
              <button
                type="button"
                onClick={() => setSelectedPolicy(policy)}
                title="View policy details & clauses"
                className="w-8 h-8 rounded-full bg-slate-50 hover:bg-orange-50 text-slate-400 hover:text-[#EA580C] flex items-center justify-center flex-shrink-0 transition-colors"
              >
                <Eye className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* POLICY CLAUSE & DETAILS MODAL                                             */}
      {/* ========================================================================= */}
      {selectedPolicy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-100 flex flex-col">
            {/* Modal Header */}
            <div className="p-6 border-b border-slate-100 flex items-start justify-between sticky top-0 bg-white/95 backdrop-blur z-10">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-orange-100 text-[#EA580C]">
                    {selectedPolicy.category}
                  </span>
                  <span className="text-xs text-slate-400">Version 2026.1 • {selectedPolicy.fileSize}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-heading font-bold text-brand-navy">
                  {selectedPolicy.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedPolicy(null)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-700 flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6 text-sm text-slate-600">
              <div>
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">Policy Overview</h4>
                <p className="leading-relaxed text-slate-600">
                  {selectedPolicy.description}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">Key Commitments & Standards</h4>
                <ul className="space-y-2.5">
                  {selectedPolicy.keyPoints.map((point, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#FF5722] flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-2">
                <div className="flex items-center gap-2 text-slate-900 font-semibold text-xs">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Compliance & Assurance</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  This document represents an active corporate governance instrument of NEXAAGEN Enterprise Solutions. All colleagues, contractors, and affiliates are subject to compliance reviews and audits.
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 border-t border-slate-100 bg-slate-50/50 flex flex-col sm:flex-row items-center justify-between gap-3">
              {selectedPolicy.relatedPage ? (
                <Link
                  to={selectedPolicy.relatedPage}
                  onClick={() => setSelectedPolicy(null)}
                  className="text-xs text-slate-600 hover:text-slate-900 font-medium inline-flex items-center gap-1"
                >
                  <span>Visit Dedicated Web Page</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              ) : <div />}

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={() => setSelectedPolicy(null)}
                  className="w-1/2 sm:w-auto px-5 py-2.5 rounded-full text-xs font-semibold text-slate-600 hover:bg-slate-100 border border-slate-200 transition-colors"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    handleDownload(selectedPolicy);
                    setSelectedPolicy(null);
                  }}
                  className="w-1/2 sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:shadow-lg hover:shadow-orange-500/25 transition-all"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Document</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* SECTION 3: NEED CUSTOM GOVERNANCE OR COMPLIANCE AUDITS BANNER             */}
      {/* ========================================================================= */}
      <section className="py-3 sm:py-5 container-custom mb-4 sm:mb-6">
        <div className="relative rounded-3xl overflow-hidden bg-[#0A192F] text-white p-6 sm:p-10 text-center shadow-2xl">
          <div 
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(#60A5FA 1.2px, transparent 1.2px)',
              backgroundSize: '20px 20px'
            }}
          />

          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-brand-navy tracking-tight leading-tight">
              Have questions about our policies or certifications?
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm font-normal max-w-xl mx-auto leading-relaxed">
              Our QHSE, Legal, and ESG compliance officers are ready to assist with enterprise client questionnaires, vendor onboarding audits, or compliance disclosures.
            </p>
            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full font-heading font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:shadow-lg hover:shadow-orange-500/30 hover:scale-105 transition-all duration-300"
              >
                <span>Contact Governance Team</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}