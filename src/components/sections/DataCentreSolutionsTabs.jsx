import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function DataCentreSolutionsTabs() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 'ifm',
      name: 'Integrated Facilities Management',
      line1: 'Integrated Facilities',
      line2: 'Management',
      title: 'Integrated Operations, Proven Control',
      subtitle: 'Every service, from maintenance and cleaning to energy, security, and soft services, is managed under one accountable structure.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
      bullets: [
        {
          label: 'Comprehensive IFM Model',
          text: 'One framework covering every aspect of your facility\'s needs.',
        },
        {
          label: 'Proven Experience',
          text: 'Supporting more than 100 data centres globally with Tier III/IV operational standards.',
        },
        {
          label: 'In-House Expertise',
          text: 'Subject Matter Experts in mechanical, electrical, plumbing, and fire systems.',
        },
      ],
      footerNote: 'This model gives you single-point accountability and full operational visibility.',
    },
    {
      id: 'hard-services',
      name: 'Hard Services',
      line1: 'Hard',
      line2: 'Services',
      title: 'Mission-Critical Electrical & Mechanical Engineering',
      subtitle: 'Dedicated 24/7/365 certified engineering teams maintaining continuous electrical resilience, backup generation, and thermal stability.',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80',
      bullets: [
        {
          label: 'Dual-Path Power Systems',
          text: 'Redundant A+B feed lifecycle maintenance with zero transfer interruption.',
        },
        {
          label: 'Thermal Chiller Management',
          text: 'Precision cooling & humidity modulation within strict ASHRAE thermal envelopes.',
        },
        {
          label: 'Certified Technicians',
          text: 'CDCE and CDCP accredited critical environment engineers permanently on-site.',
        },
      ],
      footerNote: 'Engineered for 100.000% uptime where every millisecond of power continuity matters.',
    },
    {
      id: 'maintenance-mgmt',
      name: 'Maintenance Management',
      line1: 'Maintenance',
      line2: 'Management',
      title: 'Predictive Planned Maintenance & Audit Governance',
      subtitle: 'Rigorous Standard Operating Procedures (SOPs) and Method of Procedure (MOP) execution guaranteeing zero unplanned maintenance interruptions.',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
      bullets: [
        {
          label: 'Rigorous MOP Protocols',
          text: 'Zero-incident change control and peer-reviewed live maintenance windows.',
        },
        {
          label: 'Continuous Predictive Telemetry',
          text: 'IoT vibration, thermal infrared, and acoustic degradation diagnostics.',
        },
        {
          label: 'Audit-Ready Digital Trails',
          text: 'Complete statutory compliance records for Uptime Institute and SOC 2 audits.',
        },
      ],
      footerNote: 'Transforming routine facilities maintenance into a predictive, risk-free operational framework.',
    },
    {
      id: 'white-space-cleaning',
      name: 'White Space Area Cleaning',
      line1: 'White Space Area',
      line2: 'Cleaning',
      title: 'ISO 14644-1 Cleanroom & Sub-Floor Decontamination',
      subtitle: 'Specialized particulate decontamination protecting microprocessors, server fans, and optical transceivers from airborne contamination.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
      bullets: [
        {
          label: 'Class 8 Cleanroom Standards',
          text: 'HEPA-filtered sub-micron vacuuming compliant with BS EN ISO 14644 protocols.',
        },
        {
          label: 'Sub-Floor Plenum Care',
          text: 'Eliminating zinc whiskers and conductive debris from cold aisle airflow streams.',
        },
        {
          label: 'ESD-Safe Dissipative Agents',
          text: 'Static-dissipative cleaning protocols preventing electrostatic hardware damage.',
        },
      ],
      footerNote: 'Eliminating microscopic environmental threats before they impact server reliability.',
    },
    {
      id: 'soft-services',
      name: 'Soft Services',
      line1: 'Soft',
      line2: 'Services',
      title: 'High-Security Physical Protection & Workplace Logistics',
      subtitle: 'Vetted, security-cleared personnel safeguarding perimeters, biometric access portals, and technical logistics loading docks.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
      bullets: [
        {
          label: 'Multi-Tier Access Control',
          text: 'Biometric badging, mantraps, and 24/7 central security monitoring.',
        },
        {
          label: 'Secure Logistics & Escort',
          text: 'Hardware loading bay inspection and strict chain-of-custody tracking.',
        },
        {
          label: 'Specialized Facility Sanitization',
          text: 'Trained teams maintaining non-technical suites, NOCs, and meeting spaces.',
        },
      ],
      footerNote: 'Uncompromising security posture integrated with professional front-of-house hospitality.',
    },
    {
      id: 'iot-smart-data',
      name: 'IoT & Smart Data Solutions',
      line1: 'IoT & Smart Data',
      line2: 'Solutions',
      title: 'Real-Time Telemetry & Digital Twin Optimization',
      subtitle: 'Connecting millions of data points to visualize thermal heatmaps, dynamically modulate airflow, and prevent machine failures.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
      bullets: [
        {
          label: 'Automated PUE Telemetry',
          text: 'Live continuous monitoring of Power Usage Effectiveness across all active data halls.',
        },
        {
          label: 'Thermal Hotspot Balancing',
          text: 'Differential pressure sensors dynamically regulating CRAH fan speeds.',
        },
        {
          label: 'AI Predictive Diagnostics',
          text: 'Machine learning algorithms alerting engineers weeks before bearing or pump failure.',
        },
      ],
      footerNote: 'Actionable estate intelligence delivering quantifiable energy and uptime advantages.',
    },
    {
      id: 'energy-management',
      name: 'Energy Management',
      line1: 'Energy',
      line2: 'Management',
      title: 'Decarbonisation, Heat Recovery & Energy Efficiency',
      subtitle: 'Empowering data center operators to hit aggressive Net Zero 2035 targets through renewable microgrids and circular waste-heat recovery.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
      bullets: [
        {
          label: 'PUE Optimization Roadmaps',
          text: 'Free-cooling economizer automation achieving sub-1.18 PUE ratings.',
        },
        {
          label: 'HVO Biofuel Transition',
          text: 'Phasing out fossil diesel in backup generators to slash net carbon by 90%.',
        },
        {
          label: 'District Heat Offtake',
          text: 'Capturing waste server thermal exhaust to warm adjacent municipal communities.',
        },
      ],
      footerNote: 'Maximizing computing density while systematically minimizing environmental impact.',
    },
  ];

  const current = tabs[activeTab];

  return (
    <section className="w-full py-4 sm:py-6 bg-transparent overflow-hidden">
      <div className="container-custom">
        {/* Large Rounded Container Box */}
        <div className="w-full bg-[#FAF9F5] rounded-3xl sm:rounded-[36px] lg:rounded-[44px] p-5 sm:p-8 lg:p-10 border border-slate-200/60 shadow-sm">

          {/* Header */}
          <div className="w-full text-left space-y-2 mb-5 sm:mb-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-brand-navy tracking-tight leading-tight whitespace-normal break-words xl:whitespace-nowrap">
              Specialist Facilities Management for Critical Environments
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm lg:text-base font-normal leading-relaxed">
              Comprehensive, compliant, and connected solutions that keep your data centre stable, efficient, and audit-ready.
            </p>
          </div>

          {/* Horizontal Service Tabs (Elongated Single Pill Capsule in Single Line) */}
          <div className="w-full flex justify-start mb-8 sm:mb-10">
            <div className="w-full bg-white rounded-full p-1.5 sm:p-2 border border-[#FDDAD0] shadow-sm overflow-x-auto no-scrollbar">
              <div className="flex items-center justify-start lg:justify-between gap-1.5 sm:gap-2 min-w-max w-full">
                {tabs.map((tab, idx) => {
                  const isActive = idx === activeTab;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(idx)}
                      className={`px-4 sm:px-5 lg:px-6 py-2.5 sm:py-3 rounded-full text-center transition-all duration-300 focus:outline-none whitespace-nowrap text-xs sm:text-[13px] lg:text-sm font-semibold flex-shrink-0 ${
                        isActive
                          ? 'bg-gradient-to-r from-[#FF5722] to-[#D8232A] text-white shadow-md shadow-orange-500/25'
                          : 'text-[#FF5722] hover:bg-orange-50/60'
                      }`}
                    >
                      <span>{tab.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Tab Content Display (Two-Column Layout with Smooth Crossfade) */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center"
            >
              {/* Left Column: Drone Campus Photo */}
              <div className="lg:col-span-6">
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/3] sm:aspect-[4/3.2] shadow-md border border-slate-200/50 group">
                  <img
                    src={current.image}
                    alt={current.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Right Column: Content, Bullets, and Summary */}
              <div className="lg:col-span-6 space-y-5 sm:space-y-6">
                <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-heading font-extrabold text-brand-navy tracking-tight leading-snug">
                  {current.title}
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm lg:text-base leading-relaxed">
                  {current.subtitle}
                </p>

                {/* Bullet Points */}
                <div className="space-y-3.5 pt-1">
                  {current.bullets.map((b, bIdx) => (
                    <div key={bIdx} className="flex items-start space-x-3">
                      <span className="w-2 h-2 rounded-full bg-slate-300 mt-2 flex-shrink-0" />
                      <div className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        <strong className="text-slate-900 font-semibold">{b.label}</strong>
                        {' – '}
                        <span>{b.text}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Summary / Footer Note */}
                <div className="pt-2 border-t border-slate-200/60">
                  <p className="text-xs sm:text-sm text-slate-600 font-medium">
                    {current.footerNote}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
}

