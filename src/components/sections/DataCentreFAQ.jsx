import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

/**
 * DataCentreFAQ Component
 * Directly replicates the 2-column FAQ accordion from the OCS Data Centres page.
 * Uses NEXAAGEN branding, authentic answers, and smooth accessible accordion toggles.
 */
export default function DataCentreFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const leftColumnFAQs = [
    {
      id: 'faq-1',
      question: 'What are the critical facilities management services required for data centres?',
      answer: 'Critical data centre FM encompasses specialized hard and soft engineering services engineered for continuous uptime. Core capabilities include 24/7/365 electrical resilience (HV/LV switchgear, dual-path UPS systems, and standby generator testing), precision HVAC & chillers (CRAC/CRAH modulation and ASHRAE thermal envelope adherence), ISO 14644-1 Class 8 sub-floor particulate cleaning, continuous IoT vibration & thermal telemetry, and multi-tier physical perimeter security.',
    },
    {
      id: 'faq-2',
      question: 'What measures are taken to maintain optimal environmental conditions in data centres?',
      answer: 'We maintain precise thermal and humidity control compliant with ASHRAE TC 9.9 thermal envelopes. High-density differential pressure sensors dynamically balance hot and cold aisle containment, while variable-speed CRAH fans eliminate micro-hotspots. In addition, our certified technicians execute regular HEPA-filtered cleanroom decontamination to eliminate conductive zinc whiskers and sub-micron particulates from plenum airflows.',
    },
    {
      id: 'faq-3',
      question: 'How do you ensure physical security within data centres to protect sensitive data and equipment?',
      answer: 'Physical security follows strict defense-in-depth principles. Our vetted and security-cleared personnel oversee biometric mantraps, multi-tier access badge verification, loading bay security inspections, continuous CCTV surveillance, and 24/7 technical escort services for third-party hardware vendors, maintaining comprehensive audit trails for SOC 2 and ISO 27001 compliance.',
    },
    {
      id: 'faq-4',
      question: 'How many data centres does NEXAAGEN support globally?',
      answer: 'NEXAAGEN currently manages facilities and critical engineering across more than 100 data centres worldwide. Our portfolio spans hyperscale cloud campuses, colocation provider facilities, and enterprise edge sites, maintaining an unblemished 100.000% operational uptime record across more than 3 million square feet of technical white space.',
    },
  ];

  const rightColumnFAQs = [
    {
      id: 'faq-5',
      question: 'How do you ensure high levels of uptime and reliability in data centre operations?',
      answer: 'NEXAAGEN operates on a zero-incident Method of Procedure (MOP) framework. Every maintenance operation undergoes rigorous peer review and simulated change control before execution. Our dedicated on-site teams hold CDCE (Certified Data Centre Expert) and CDCP certifications, supported by AI-driven predictive telemetry that diagnoses bearing, fan, and capacitor degradation weeks before any potential failure.',
    },
    {
      id: 'faq-6',
      question: 'Can you implement energy-efficient solutions and sustainable practices within data centre facilities?',
      answer: 'Yes. NEXAAGEN actively helps operators achieve sub-1.18 Power Usage Effectiveness (PUE) ratings. Our decarbonisation strategies include automated free-cooling economizers, adiabatic cooling integration, dynamic airflow baffle sealing, transitioning standby generator fuel to Hydrotreated Vegetable Oil (HVO) to reduce net carbon emissions by 90%, and engineering circular waste-heat offtake systems for municipal heating.',
    },
    {
      id: 'faq-7',
      question: 'What role does facilities management play in disaster preparedness and continuity planning for data centres?',
      answer: 'Facilities management is the bedrock of operational resilience. We develop and stress-test comprehensive Emergency Operating Procedures (EOPs) and disaster recovery protocols, including periodic live-load black-start tests, automated fuel polishing, dual-feed utility failovers, and redundant multi-site supply chains compliant with ISO 22301 standards.',
    },
    {
      id: 'faq-8',
      question: 'How does NEXAAGEN maintain consistent standards across data centres in different regions?',
      answer: 'We enforce a unified Global Operating Framework governed by ISO 9001, ISO 14001, ISO 45001, and ISO 27001 certified management systems. Centralized compliance dashboards, standardized Standard Operating Procedures (SOPs), and regular third-party audits ensure identical engineering excellence, governance, and safety benchmarks across every geography.',
    },
  ];

  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 bg-white border-t border-slate-100 overflow-hidden">
      <div className="container-custom">
        {/* Section Heading matching OCS Reference */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-heading font-extrabold text-[#0B1B3D] tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm lg:text-base font-normal leading-relaxed">
            Essential information regarding our critical environments engineering, uptime guarantees, and compliance standards.
          </p>
        </div>

        {/* 2-Column FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-16 gap-y-6 sm:gap-y-8">
          
          {/* Left Column (Items 1-4) */}
          <div className="space-y-4 sm:space-y-6">
            {leftColumnFAQs.map((faq, idx) => {
              const globalIndex = idx;
              const isOpen = openIndex === globalIndex;
              return (
                <div
                  key={faq.id}
                  className="border-b border-slate-200/80 pb-5 sm:pb-6 transition-colors"
                >
                  <button
                    onClick={() => toggleFAQ(globalIndex)}
                    className="w-full flex items-center justify-between text-left group focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-[15px] lg:text-base font-heading font-medium text-slate-800 group-hover:text-brand-orange transition-colors pr-4 leading-snug">
                      {faq.question}
                    </span>
                    <span
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                        isOpen
                          ? 'border-brand-orange bg-brand-orange text-white rotate-45'
                          : 'border-orange-200/90 text-brand-orange bg-orange-50/40 group-hover:border-brand-orange'
                      }`}
                    >
                      <Plus className="w-4 h-4" />
                    </span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                        className="overflow-hidden"
                      >
                        <p className="mt-3.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal pr-4">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Right Column (Items 5-8) */}
          <div className="space-y-4 sm:space-y-6">
            {rightColumnFAQs.map((faq, idx) => {
              const globalIndex = idx + 4;
              const isOpen = openIndex === globalIndex;
              return (
                <div
                  key={faq.id}
                  className="border-b border-slate-200/80 pb-5 sm:pb-6 transition-colors"
                >
                  <button
                    onClick={() => toggleFAQ(globalIndex)}
                    className="w-full flex items-center justify-between text-left group focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-[15px] lg:text-base font-heading font-medium text-slate-800 group-hover:text-brand-orange transition-colors pr-4 leading-snug">
                      {faq.question}
                    </span>
                    <span
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                        isOpen
                          ? 'border-brand-orange bg-brand-orange text-white rotate-45'
                          : 'border-orange-200/90 text-brand-orange bg-orange-50/40 group-hover:border-brand-orange'
                      }`}
                    >
                      <Plus className="w-4 h-4" />
                    </span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                        className="overflow-hidden"
                      >
                        <p className="mt-3.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal pr-4">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

