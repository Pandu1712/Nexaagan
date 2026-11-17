import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, MapPin, Search } from 'lucide-react';
import Breadcrumbs from '../components/layout/Breadcrumbs';
import PlacesWeServiceDirectory from '../components/services/PlacesWeServiceDirectory';
import SectorLocationsDirectory from '../components/sectors/SectorLocationsDirectory';
import ContactForm from '../components/sections/ContactForm';

export default function SpacesAndPlaces() {
  return (
    <div className="w-full flex flex-col flex-1 bg-white text-slate-900 font-sans">
      <Breadcrumbs
        items={[
          { label: 'Our Services', link: '/services' },
          { label: 'A-Z of Spaces and Places' }
        ]}
      />

      {/* HERO SECTION MATCHING SCREENSHOT */}
      <section className="relative py-1.5 sm:py-2.5 container-custom">
        <div className="relative rounded-2xl sm:rounded-[24px] lg:rounded-[28px] overflow-hidden min-h-[220px] sm:min-h-[250px] lg:min-h-[280px] flex items-center shadow-lg bg-slate-950 border border-slate-800">
          {/* Waterfront Skyline Background Photography */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=2400&q=85" 
              alt="A-Z of Spaces and Places - Waterfront Skyline" 
              className="w-full h-full object-cover object-center"
            />
            {/* Smooth gradient overlay to ensure card readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent lg:w-3/4" />
          </div>

          {/* Floating White Card (Exact replica from Screenshot) */}
          <div className="relative z-10 p-3 sm:p-5 max-w-lg ml-2 sm:ml-4 my-1">
            <div className="bg-white/95 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-5 shadow-xl border border-white/40">
              {/* Badge: "View Global Locations ->" */}
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#FF5722]/10 to-[#D8232A]/10 border border-[#FF5722]/20 rounded-full px-2.5 py-0.5 mb-2">
                <span className="bg-gradient-to-r from-[#FF5722] to-[#D8232A] text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">
                  View Global
                </span>
                <Link to="/sectors" className="text-xs font-semibold text-slate-800 hover:text-brand-orange transition-colors flex items-center">
                  <span>Locations</span>
                  <ArrowRight className="w-3 h-3 ml-1" />
                </Link>
              </div>

              {/* Title */}
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-heading font-extrabold text-brand-navy tracking-tight leading-tight mb-2">
                Our A-Z of spaces and places
              </h1>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-3">
                Our teams' experience spans various industry sectors where we aim to make a difference and deliver the best experience and outcomes.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#places-we-service"
                  className="inline-flex items-center justify-center px-5 sm:px-6 py-2 sm:py-2.5 rounded-lg font-heading font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 group"
                >
                  <span>Explore A-Z Directory</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#contact-form"
                  className="inline-flex items-center justify-center px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg font-heading font-bold text-xs sm:text-sm text-slate-700 bg-slate-100 hover:bg-slate-200 transition-all duration-300"
                >
                  <span>Contact Our Team</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FULL A-Z OF PLACES WE SERVICE DIRECTORY */}
      <PlacesWeServiceDirectory />

      {/* A-Z OF MANAGED SECTOR LOCATIONS */}
      <SectorLocationsDirectory />

      {/* CONTACT FORM */}
      <section id="contact-form" className="py-3 sm:py-5 container-custom">
        <div className="bg-slate-50/70 rounded-3xl p-5 sm:p-8 border border-slate-200/80">
          <ContactForm 
            title="Inquire About Your Facility or Sector Location"
            subtitle="Connect with our facility specialists to discuss tailored engineering, hygiene, carbon reduction, and concierge services."
          />
        </div>
      </section>
    </div>
  );
}

