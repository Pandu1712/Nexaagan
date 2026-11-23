import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ShieldCheck, Wrench, Building2 } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { sectorsData } from '../data/sectorsData';
import Breadcrumbs from '../components/layout/Breadcrumbs';
import PageHero from '../components/layout/PageHero';
import SectionTitle from '../components/common/SectionTitle';
import ContactForm from '../components/sections/ContactForm';
import FacilitiesManagementContent from '../components/services/FacilitiesManagementContent';
import HardServicesContent from '../components/services/HardServicesContent';
import CarbonEnergyManagementContent from '../components/services/CarbonEnergyManagementContent';
import LandscapingContent from '../components/services/LandscapingContent';
import CleaningContent from '../components/services/CleaningContent';
import PestControlContent from '../components/services/PestControlContent';
import FrontOfHouseContent from '../components/services/FrontOfHouseContent';

export default function ServiceDetail() {
  const { serviceId } = useParams();

  // Support both slug conventions (with or without 'and')
  const normalizedId = serviceId === 'front-of-house-and-concierge' ? 'front-of-house-concierge' : serviceId;

  const service = servicesData.find((s) => s.id === normalizedId || s.id === serviceId)
    || servicesData.find((s) => s.slugAliases && s.slugAliases.includes(serviceId));

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  // Specialized view for Facilities Management matching the reference sections
  if (serviceId === 'facilities-management' || serviceId === 'integrated-facility-management') {
    return (
      <div className="w-full flex flex-col flex-1">
        <Breadcrumbs
          items={[
            { label: 'Our Services', link: '/services' },
            { label: service.title },
          ]}
        />
        <FacilitiesManagementContent service={service} />
      </div>
    );
  }

  // Specialized view for Hard Services matching the 8 reference sections
  if (serviceId === 'hard-services' || serviceId === 'hvac-electrical-mechanical-maintenance') {
    return (
      <div className="w-full flex flex-col flex-1">
        <Breadcrumbs
          items={[
            { label: 'Our Services', link: '/services' },
            { label: service.title },
          ]}
        />
        <HardServicesContent service={service} />
      </div>
    );
  }

  // Specialized view for Carbon & Energy Management matching the 10 reference sections
  if (serviceId === 'carbon-energy-management') {
    return (
      <div className="w-full flex flex-col flex-1">
        <Breadcrumbs
          items={[
            { label: 'Our Services', link: '/services' },
            { label: service.title },
          ]}
        />
        <CarbonEnergyManagementContent service={service} />
      </div>
    );
  }

  // Specialized view for Commercial Landscaping matching the 9 reference sections
  if (serviceId === 'landscaping') {
    return (
      <div className="w-full flex flex-col flex-1">
        <Breadcrumbs
          items={[
            { label: 'Our Services', link: '/services' },
            { label: service.title },
          ]}
        />
        <LandscapingContent service={service} />
      </div>
    );
  }

  // Specialized view for Commercial Cleaning matching the 14 reference sections
  if (serviceId === 'cleaning' || serviceId === 'cleaning-sanitisation-hygiene') {
    return (
      <div className="w-full flex flex-col flex-1">
        <Breadcrumbs
          items={[
            { label: 'Our Services', link: '/services' },
            { label: service.title },
          ]}
        />
        <CleaningContent service={service} />
      </div>
    );
  }

  // Specialized view for Pest Control matching all 10 reference sections
  if (serviceId === 'pest-control') {
    return (
      <div className="w-full flex flex-col flex-1">
        <Breadcrumbs
          items={[
            { label: 'Our Services', link: '/services' },
            { label: service.title },
          ]}
        />
        <PestControlContent service={service} />
      </div>
    );
  }

  // Specialized view for Front of House & Concierge matching all 12 reference sections
  if (normalizedId === 'front-of-house-concierge') {
    return (
      <div className="w-full flex flex-col flex-1">
        <Breadcrumbs
          items={[
            { label: 'Our Services', link: '/services' },
            { label: service.title },
          ]}
        />
        <FrontOfHouseContent service={service} />
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col flex-1">
      <Breadcrumbs
        items={[
          { label: 'Our Services', link: '/services' },
          { label: service.title },
        ]}
      />

      {/* Hero Header (Signature OCS Enterprise Hero with Premium Photography & Floating Card) */}
      <PageHero
        badge={service.category || "Enterprise Service"}
        badgeLinkText="Explore deliverables"
        badgeLinkUrl="#overview"
        title={service.title}
        description={service.tagline}
        image={service.heroImage}
        imageAlt={`${service.title} - NEXAAGEN Technical Facilities Services`}
        primaryCta={{
          text: "Request Service Proposal",
          url: "#contact-form",
          isAnchor: true
        }}
        secondaryCta={{
          text: "All Services",
          url: "/services"
        }}
      />

      {/* Overview & Key Benefits Section */}
      <section id="overview" className="section-padding bg-transparent">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-orange/10 text-brand-orange border border-brand-orange/20">
                Operational Overview
              </span>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-brand-navy tracking-tight leading-tight">
                Self-delivered technical execution and verifiable asset performance
              </h2>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                {service.overview}
              </p>

              {/* Sub-Services List */}
              {service.subServices && (
                <div className="pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-brand-navy mb-3">
                    Sub-Service Specializations
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {service.subServices.map((sub, sIdx) => (
                      <div key={sIdx} className="flex items-center space-x-2 text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-brand-orange flex-shrink-0" />
                        <span>{sub}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Benefits */}
              <div className="pt-4 space-y-2.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-brand-navy mb-2">
                  Core Quantified Benefits
                </h4>
                {service.benefits.map((ben, bIdx) => (
                  <div key={bIdx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-start space-x-3">
                    <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700">{ben}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group aspect-[4/3] lg:aspect-auto lg:h-[420px] w-full">
                <img
                  src={service.heroImage}
                  alt={service.title}
                  className="w-full h-full object-cover card-img-zoom"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-xs uppercase tracking-widest font-bold text-brand-orange block mb-1">
                    Direct Delivery
                  </span>
                  <p className="text-sm text-slate-200">
                    Governed by verified ISO 9001 and ISO 45001 operational protocols.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Pillar Deep-Dive */}
      {service.features && (
        <section className="section-padding bg-slate-50 border-y border-slate-100">
          <div className="container-custom">
            <SectionTitle
              badge="Methodology & Delivery"
              title="How NEXAAGEN Executes This Service"
              subtitle="Our four-stage delivery model ensures transparent SLAs, real-time telemetry, and continuous efficiency gains."
              align="left"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {service.features.map((feat, fIdx) => (
                <div
                  key={fIdx}
                  className="p-8 rounded-3xl bg-white border border-slate-100 shadow-card-subtle space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-orange/10 text-brand-orange flex items-center justify-center font-bold text-sm">
                    0{fIdx + 1}
                  </div>
                  <h3 className="text-xl font-heading font-bold text-brand-navy">
                    {feat.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Sectors that benefit */}
      <section className="section-padding bg-transparent">
        <div className="container-custom">
          <SectionTitle
            badge="Applicable Sectors"
            title="Sectors That Rely on This Capability"
            subtitle="Discover how this service integrates directly into mission-critical sector environments."
            align="left"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sectorsData.slice(0, 4).map((sec) => (
              <Link
                key={sec.id}
                to={`/sectors/${sec.id}`}
                className="group p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-brand-orange/30 hover:bg-white shadow-sm hover:shadow-card-subtle transition-all"
              >
                <div className="text-xs font-bold uppercase tracking-wider text-brand-orange mb-2">
                  Sector Application
                </div>
                <h4 className="text-base font-heading font-bold text-brand-navy group-hover:text-brand-orange transition-colors">
                  {sec.title}
                </h4>
                <p className="text-xs text-slate-500 line-clamp-2 mt-1.5">
                  {sec.tagline}
                </p>
                <div className="mt-4 flex items-center text-xs font-bold text-brand-navy group-hover:text-brand-orange transition-colors">
                  <span>View Sector Details</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Pre-filled */}
      <ContactForm
        title={`Request Proposal for ${service.title}`}
        subtitle={`Speak with our ${service.category} engineering directors to discuss specifications, pricing, and mobilization.`}
        defaultService={service.title}
      />
    </div>
  );
}

