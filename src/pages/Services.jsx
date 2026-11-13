import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Wrench, Building2, Droplets, Bug, Cloud, Bell, Sprout, CheckCircle2 } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import Breadcrumbs from '../components/layout/Breadcrumbs';
import PageHero from '../components/layout/PageHero';
import SectionTitle from '../components/common/SectionTitle';
import ContactForm from '../components/sections/ContactForm';
import PlacesWeServiceDirectory from '../components/services/PlacesWeServiceDirectory';

const getServiceIcon = (id) => {
  switch (id) {
    case 'facilities-management':
      return Building2;
    case 'cleaning':
      return Droplets;
    case 'hard-services':
      return Wrench;
    case 'pest-control':
      return Bug;
    case 'carbon-energy-management':
      return Cloud;
    case 'front-of-house-concierge':
      return Bell;
    case 'landscaping':
      return Sprout;
    default:
      return Wrench;
  }
};

export default function Services() {
  return (
    <div className="w-full flex flex-col flex-1">
      <Breadcrumbs items={[{ label: 'Our Services' }]} />

      {/* Signature Enterprise Hero with Premium Photography & Floating Card */}
      <PageHero
        badge="Enterprise Solutions"
        badgeLinkText="Best practice services"
        badgeLinkUrl="#services-grid"
        title="Best Practice Facilities Services for Best Customer Outcomes"
        description="We're on a mission to make your people and places the best they can be — combining technical MEP engineering rigor, hospital-grade hygiene, sustainable carbon management, and workplace hospitality into a seamless delivery model."
        image="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=2400&q=85"
        imageAlt="Integrated Facilities Management and Technical Engineering"
        stats={[
          { value: "7", label: "Core Practices" },
          { value: "85%", label: "Self-Delivered" },
          { value: "24/7/365", label: "Operations Desk" }
        ]}
        primaryCta={{
          text: "Configure Service Model",
          url: "#contact-form",
          isAnchor: true
        }}
        secondaryCta={{
          text: "A-Z Spaces & Places",
          url: "/the-ocs-a-z-of-spaces-and-places"
        }}
      />

      {/* Services Grid */}
      <section id="services-grid" className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            badge="Full Service Spectrum"
            title="Explore Our Core Facilities Services"
            subtitle="From single-service specialist technical engineering to turnkey multi-site Integrated Facilities Management contracts."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((svc) => {
              const ServiceIcon = getServiceIcon(svc.id);
              return (
                <div
                  key={svc.id}
                  className="bg-white rounded-3xl p-8 border border-slate-100 hover:border-slate-200 shadow-card-subtle hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-brand-orange/10 text-brand-orange flex items-center justify-center mb-6 group-hover:bg-brand-orange group-hover:text-white transition-all shadow-sm">
                      <ServiceIcon className="w-7 h-7" />
                    </div>

                    <span className="text-[11px] font-bold uppercase tracking-wider text-brand-orange">
                      {svc.category}
                    </span>

                    <h3 className="text-2xl font-heading font-bold text-brand-navy group-hover:text-brand-orange transition-colors mt-1 mb-3">
                      {svc.title}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed mb-6">
                      {svc.overview}
                    </p>

                    <div className="space-y-2.5 pt-4 border-t border-slate-100 mb-6">
                      <span className="text-xs font-bold uppercase tracking-wider text-brand-navy block">
                        Core Advantages:
                      </span>
                      {svc.benefits.slice(0, 3).map((ben, bIdx) => (
                        <div key={bIdx} className="flex items-start text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{ben}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-50 flex items-center justify-between">
                    <Link
                      to={`/services/${svc.id}`}
                      className="inline-flex items-center text-xs font-bold text-brand-navy group-hover:text-brand-orange transition-colors"
                    >
                      <span>View Service Breakdown</span>
                      <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <span className="text-xs text-slate-400 font-medium">Self-Delivered</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* A-Z of Places We Service Interactive Directory */}
      <PlacesWeServiceDirectory />

      {/* Contact Form Section */}
      <ContactForm
        title="Inquire About Enterprise Facility Services"
        subtitle="Speak with our solutions team to configure a service model tailored to your estate's SLA and operational requirements."
      />
    </div>
  );
}

