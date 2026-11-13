import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Cpu, 
  Bot, 
  Layers, 
  Activity, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Wifi, 
  Zap, 
  LineChart, 
  Radio,
  Server
} from 'lucide-react';
import { techData } from '../data/techData';
import Breadcrumbs from '../components/layout/Breadcrumbs';
import PageHero from '../components/layout/PageHero';
import SectionTitle from '../components/common/SectionTitle';
import ContactForm from '../components/sections/ContactForm';

export default function Technology() {
  const [selectedPillar, setSelectedPillar] = useState(0);

  const icons = [Cpu, Bot, Layers, Activity];

  return (
    <div className="w-full flex flex-col flex-1">
      <Breadcrumbs items={[{ label: 'Technology & Innovation' }]} />

      {/* Signature OCS Enterprise Hero with Premium Photography & Floating Card */}
      <PageHero
        badge="Smart Estate Telemetry"
        badgeLinkText="NEXA-Pulse™ Platform"
        badgeLinkUrl="#nexa-pulse"
        title={techData.hero.title}
        description={techData.hero.subtitle}
        image="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=2400&q=85"
        imageAlt="NEXA-Pulse Smart Building Telemetry & Mission Critical IoT Infrastructure"
        stats={[
          { value: "3.2M+", label: "Telemetry Sensors" },
          { value: "99.98%", label: "System Uptime" },
          { value: "18.4%", label: "Mean Energy Saved" }
        ]}
        primaryCta={{
          text: "Request NEXA-Pulse™ Walkthrough",
          url: "#contact-form",
          isAnchor: true
        }}
        secondaryCta={{
          text: "Explore Services Integration",
          url: "/services"
        }}
      />

      {/* NEXA-Pulse Platform Spotlight */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-orange/10 text-brand-orange border border-brand-orange/20">
                Proprietary Telemetry Platform
              </span>

              <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-brand-navy tracking-tight leading-tight">
                {techData.platform.name}: Zero-Latency Machine Intelligence
              </h2>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                {techData.platform.description}
              </p>

              {/* Stat Counters */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-100">
                {techData.platform.stats.map((st, idx) => (
                  <div key={idx} className="p-3 bg-slate-50 rounded-2xl border border-slate-100">
                    <div className="text-xl sm:text-2xl font-heading font-bold text-brand-orange">{st.value}</div>
                    <div className="text-[11px] text-slate-500 mt-0.5 leading-tight">{st.label}</div>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <a
                  href="#contact-form"
                  className="btn-gradient text-sm py-3.5 px-7 shadow-md hover:shadow-brand-orange/30"
                >
                  <span>Request Live NEXA-Pulse™ Walkthrough</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>

            {/* Right Platform Mockup Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-100 group aspect-[4/3]">
                <img
                  src={techData.platform.image}
                  alt="NEXA-Pulse Dashboard Cockpit"
                  className="w-full h-full object-cover card-img-zoom"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark/85 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="flex items-center space-x-2 text-xs font-semibold text-emerald-400 mb-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span>Real-Time Sensor Telemetry Connected</span>
                  </div>
                  <p className="text-sm font-medium text-white">
                    Aggregating HVAC, Chiller, Vibration & Air Quality telemetry in 100ms intervals
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Technology Pillars */}
      <section className="section-padding bg-slate-50 border-y border-slate-100">
        <div className="container-custom">
          <SectionTitle
            badge="Innovation Framework"
            title="Four Core Pillars of Digital Transformation"
            subtitle="Explore how artificial intelligence, autonomous robotics, digital twins, and space analytics converge to optimize operational efficiency."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techData.pillars.map((pillar, idx) => {
              const Icon = icons[idx] || Cpu;
              return (
                <div
                  key={pillar.id}
                  className="p-7 rounded-3xl bg-white border border-slate-100 hover:border-slate-200 shadow-card-subtle hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-brand-navy text-white flex items-center justify-center mb-5 group-hover:bg-gradient-to-br group-hover:from-brand-orange group-hover:to-red-600 transition-all shadow-md">
                      <Icon className="w-6 h-6" />
                    </div>

                    <h3 className="text-xl font-heading font-bold text-brand-navy group-hover:text-brand-orange transition-colors mb-3 leading-snug">
                      {pillar.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                      {pillar.description}
                    </p>

                    <div className="space-y-2 border-t border-slate-100 pt-4">
                      {pillar.points.map((pt, pIdx) => (
                        <div key={pIdx} className="flex items-start text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enterprise Security & Data Integrity */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            badge="Enterprise Security"
            title="Bank-Grade Data Security & Regulatory Compliance"
            subtitle="We adhere to the strictest international cybersecurity frameworks to ensure your telemetry and building control systems remain impenetrable."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techData.securityStandards.map((sec, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-2"
              >
                <div className="flex items-center space-x-2 text-brand-navy font-bold text-sm">
                  <ShieldCheck className="w-5 h-5 text-emerald-600" />
                  <span>{sec.title}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {sec.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & IoT Consultation Form */}
      <ContactForm
        title="Schedule a NEXA-Pulse™ Demonstration"
        subtitle="Experience how real-time predictive machine intelligence can transform your commercial or industrial facilities."
        defaultService="Smart Buildings, IoT & Telemetry"
      />
    </div>
  );
}

