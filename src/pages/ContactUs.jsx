import React from 'react';
import { Phone, Mail, MapPin, Clock, Globe2, ShieldCheck, Building2 } from 'lucide-react';
import { companyData } from '../data/companyData';
import Breadcrumbs from '../components/layout/Breadcrumbs';
import PageHero from '../components/layout/PageHero';
import SectionTitle from '../components/common/SectionTitle';
import ContactForm from '../components/sections/ContactForm';

export default function ContactUs() {
  const hubs = [
    {
      city: "Hyderabad (Current Location & HQ)",
      role: "Current Location & Corporate Headquarters",
      address: "#411, Flat No:201, Shree Nivasam, Mathrusri Nagar, Near Miyapur Metro Station, Miyapur, Hyderabad, 500 049",
      phone: "+91 99 88 33 1575",
      email: "nexaagen@gmail.com"
    },
    {
      city: "London (European HQ)",
      role: "European Operations & Strategic Desk",
      address: "One Nexaagen Plaza, Financial District, Tower 4, Level 32, London, UK",
      phone: "+44 (0) 20 7946 0982",
      email: "london@nexaagen.com"
    },
    {
      city: "Singapore (APAC HQ)",
      role: "Asia-Pacific Regional Command Hub",
      address: "Marina Bay Financial Centre, Tower 2, Level 40, Singapore",
      phone: "+65 6789 0123",
      email: "singapore@nexaagen.com"
    },
    {
      city: "Frankfurt (Central Europe)",
      role: "Continental Europe & Critical Infrastructure",
      address: "Mainzer Landstraße 180, 60327 Frankfurt am Main, Germany",
      phone: "+49 (0) 69 9000 1234",
      email: "frankfurt@nexaagen.com"
    },
    {
      city: "New York (Americas Desk)",
      role: "North American Enterprise Advisory",
      address: "375 Park Avenue, 28th Floor, New York, NY 10152, USA",
      phone: "+1 (212) 555-0199",
      email: "americas@nexaagen.com"
    }
  ];

  return (
    <div className="w-full flex flex-col flex-1">
      <Breadcrumbs items={[{ label: 'Contact Us' }]} />

      {/* Signature OCS Enterprise Hero with Premium Photography & Floating Card */}
      <PageHero
        badge="Global Operations Desk"
        badgeLinkText="Rapid 2-hr response"
        badgeLinkUrl="#contact-form"
        title="Connect With Our Enterprise Advisory Team"
        description="Whether you are preparing a multi-site facility management tender, requesting emergency engineering support, or seeking Net Zero consulting, our global team is ready to assist."
        image="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=2400&q=85"
        imageAlt="NEXAAGEN Enterprise Reception and Global Client Service Hub"
        stats={[
          { value: "< 2 Hrs", label: "Response SLA" },
          { value: "24/7/365", label: "Global Helpdesk" },
          { value: "4", label: "Continental Hubs" }
        ]}
        primaryCta={{
          text: "Start Inquiry",
          url: "#contact-form",
          isAnchor: true
        }}
        secondaryCta={{
          text: "View Regional Hubs",
          url: "#hubs",
          isAnchor: true
        }}
      />

      {/* Global Regional Hubs */}
      <section id="hubs" className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            badge="Global Footprint"
            title="Strategic Regional Headquarters"
            subtitle="Our operational hubs provide continuous coverage across time zones, managing client portfolios with localized compliance and global rigor."
            align="left"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hubs.map((hub, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-slate-50 border border-slate-100 shadow-sm space-y-4 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-brand-navy text-white flex items-center justify-center font-bold text-sm mb-3">
                    <Building2 className="w-5 h-5 text-brand-orange" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-brand-navy">
                    {hub.city}
                  </h3>
                  <span className="text-xs font-semibold text-brand-orange block mb-2">
                    {hub.role}
                  </span>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {hub.address}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200/60 space-y-1.5 text-xs">
                  <div className="flex items-center text-slate-700">
                    <Phone className="w-3.5 h-3.5 text-brand-orange mr-1.5 flex-shrink-0" />
                    <span>{hub.phone}</span>
                  </div>
                  <div className="flex items-center text-slate-700">
                    <Mail className="w-3.5 h-3.5 text-brand-orange mr-1.5 flex-shrink-0" />
                    <span>{hub.email}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Consultation Form */}
      <ContactForm
        title="Direct Consultation & Tender Inquiries"
        subtitle="Complete the form below to connect with our practice directors. All inquiries are treated with strict commercial confidentiality."
      />
    </div>
  );
}

