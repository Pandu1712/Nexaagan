import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Building2, 
  Search, 
  Navigation, 
  Copy, 
  Check, 
  ExternalLink,
  Globe2,
  ArrowRight
} from 'lucide-react';
import Breadcrumbs from '../components/layout/Breadcrumbs';

export default function IndiaOfficeLocations() {
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState(null);

  // All 14 India Locations exactly from the reference screenshots
  const locations = [
    {
      id: 'head-office',
      city: 'Current Location - Head Office (Hyderabad)',
      state: 'Telangana',
      address: '#411, Flat No:201, Shree Nivasam, Mathrusri Nagar, Near Miyapur Metro Station, Miyapur, Hyderabad 500 049',
      phone: '+91 99 88 33 1575',
      email: 'nexaagen@gmail.com',
      isHQ: true
    },
    {
      id: 'gujarat',
      city: 'Gujarat',
      state: 'Gujarat',
      address: 'Ratnakar 9 Square, 9th Floor, B- Block, 904, Opp Keshavbaug, Mansi Circle Road, Vastrapur, Ahmedabad, Gujarat 380015',
      phone: '+91 99 88 33 1575',
      email: 'nexaagen@gmail.com'
    },
    {
      id: 'bengaluru',
      city: 'Bengaluru',
      state: 'Karnataka',
      address: 'Genesis Building, 41, 10th Main, Sector 11, J.B. Nagar, Bengaluru Urban, Bengaluru 560075',
      phone: '+91 99 88 33 1575',
      email: 'nexaagen@gmail.com'
    },
    {
      id: 'chennai',
      city: 'Chennai',
      state: 'Tamil Nadu',
      address: 'No 1, 6th Street, Nandanam Extension, Nandanam, Chennai 600035',
      phone: '+91 99 88 33 1575',
      email: 'nexaagen@gmail.com'
    },
    {
      id: 'kochi',
      city: 'Kochi',
      state: 'Kerala',
      address: 'Krishna Complex, 2nd Floor, Door No. 40/9590-C, Pullepady, Chittoor Road, Ernakulam, Kerala 682018',
      phone: '+91 99 88 33 1575',
      email: 'nexaagen@gmail.com'
    },
    {
      id: 'goa',
      city: 'Goa',
      state: 'Goa',
      address: 'L&L Correias, Shop No B-SH-31, Landmark: Madgaon KTC, Margao, South Goa, Goa 403601',
      phone: '+91 99 88 33 1575',
      email: 'nexaagen@gmail.com'
    },
    {
      id: 'mumbai',
      city: 'Mumbai',
      state: 'Maharashtra',
      address: 'Atlanta Estate, 4th Floor, Office No.420, Goregaon East, Mumbai 400063',
      phone: '+91 99 88 33 1575',
      email: 'nexaagen@gmail.com'
    },
    {
      id: 'telangana',
      city: 'Telangana',
      state: 'Telangana',
      address: '#411, Flat No:201, Shree Nivasam, Mathrusri Nagar, Near Miyapur Metro Station, Miyapur, Hyderabad 500 049',
      phone: '+91 99 88 33 1575',
      email: 'nexaagen@gmail.com'
    },
    {
      id: 'indore',
      city: 'Indore',
      state: 'Madhya Pradesh',
      address: 'Sterling Tower, 2nd Floor, Office No. 111, M.G. Road, Indore 452007',
      phone: '+91 99 88 33 1575',
      email: 'nexaagen@gmail.com'
    },
    {
      id: 'kolkata',
      city: 'Kolkata',
      state: 'West Bengal',
      address: 'DLF Galleria, 13th Floor, DK-1412, New Town, Action Area-1, Kolkata 700156',
      phone: '+91 99 88 33 1575',
      email: 'nexaagen@gmail.com'
    },
    {
      id: 'lucknow',
      city: 'Lucknow',
      state: 'Uttar Pradesh',
      address: 'G-125, Kanpur Road, Transport Nagar, Lucknow 226023',
      phone: '+91 99 88 33 1575',
      email: 'nexaagen@gmail.com'
    },
    {
      id: 'new-delhi',
      city: 'New Delhi',
      state: 'Delhi NCR',
      address: 'DLF Tower - B, Jasola, South East Delhi, New Delhi 110025',
      phone: '+91 99 88 33 1575',
      email: 'nexaagen@gmail.com'
    },
    {
      id: 'pune',
      city: 'Pune',
      state: 'Maharashtra',
      address: 'Tara Icon, 3rd floor, Office no 5, Before Mariai Police Station, Behind SBI Bank, Wakdewadi, Shivajinagar, Pune 411003',
      phone: '+91 99 88 33 1575',
      email: 'nexaagen@gmail.com'
    },
    {
      id: 'thiruvananthapuram',
      city: 'Thiruvananthapuram',
      state: 'Kerala',
      address: 'Asiatic Business Centre, Block A, 2nd Floor, T.C.2/2408(4), Near Toyota, Attinkuzhi, Kazhakuttom, Thiruvananthapuram 695582',
      phone: '+91 99 88 33 1575',
      email: 'nexaagen@gmail.com'
    }
  ];

  const filteredLocations = locations.filter((loc) => {
    const q = searchQuery.toLowerCase();
    return (
      loc.city.toLowerCase().includes(q) ||
      loc.state.toLowerCase().includes(q) ||
      loc.address.toLowerCase().includes(q)
    );
  });

  const handleCopy = (id, text) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="w-full flex flex-col flex-1 bg-white text-slate-900 font-sans overflow-hidden">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'About Us', link: '/about' },
          { label: 'India Office Locations' }
        ]}
      />

      {/* ========================================================================= */}
      {/* SECTION 1: HERO - INDIA LOCATIONS BANNER (Screenshot 1)                   */}
      {/* ========================================================================= */}
      <section className="pt-4 pb-3 sm:pt-6 sm:pb-4 container-custom">
        <div className="relative rounded-[32px] sm:rounded-[36px] bg-[#0A192F] p-6 sm:p-8 lg:p-10 text-white overflow-hidden shadow-xl">
          {/* Subtle World / India Map Dot Matrix Graphic */}
          <div 
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(#FFFFFF 1.2px, transparent 1.2px)',
              backgroundSize: '16px 16px'
            }}
          />

          <div className="relative z-10 max-w-2xl space-y-3">
            <h1 className="text-3xl sm:text-5xl font-heading font-extrabold tracking-tight">
              India Locations
            </h1>
            <p className="text-slate-300 text-xs sm:text-sm lg:text-base leading-relaxed font-normal">
              We have 14 branches across the country providing facilities services nationwide.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: 14 LOCATIONS GRID (Screenshots 1, 2, 3, 4)                     */}
      {/* ========================================================================= */}
      <section className="py-3 sm:py-5 container-custom">
        {/* Quick Search & Count Filter */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-4 sm:mb-6">
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Filter by city, state or PIN..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange bg-slate-50/50"
            />
          </div>

          <div className="text-xs text-slate-500 font-medium">
            Showing <span className="font-bold text-slate-800">{filteredLocations.length}</span> of {locations.length} regional offices
          </div>
        </div>

        {/* 3-Column Grid matching Screenshot exactly */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredLocations.map((loc) => (
            <div
              key={loc.id}
              className="bg-[#FAF8F5] rounded-3xl p-5 sm:p-6 border border-slate-100/90 shadow-sm hover:shadow-md hover:border-orange-200 transition-all duration-300 flex flex-col justify-between space-y-4 group"
            >
              <div>
                {/* Header: City Name */}
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg sm:text-xl font-heading font-bold text-slate-900 group-hover:text-brand-orange transition-colors">
                    {loc.city}
                  </h2>
                  {loc.isHQ && (
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#FF5722] text-white uppercase tracking-wider shadow-sm">
                      National HQ
                    </span>
                  )}
                </div>

                {/* 1. Address Block */}
                <div className="space-y-1.5 mb-4">
                  <div className="flex items-center space-x-1.5 text-xs font-semibold text-[#FF5722]">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Address</span>
                  </div>
                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                    {loc.address}
                  </p>
                </div>

                {/* 2. Telephone Number Block */}
                <div className="space-y-1.5 mb-4">
                  <div className="flex items-center space-x-1.5 text-xs font-semibold text-[#FF5722]">
                    <Phone className="w-3.5 h-3.5" />
                    <span>Telephone Number</span>
                  </div>
                  <a
                    href={`tel:${loc.phone.replace(/\s+/g, '')}`}
                    className="text-xs sm:text-[13px] text-slate-700 hover:text-brand-orange font-medium block transition-colors"
                  >
                    {loc.phone}
                  </a>
                </div>

                {/* 3. Email Block */}
                <div className="space-y-1.5">
                  <div className="flex items-center space-x-1.5 text-xs font-semibold text-[#FF5722]">
                    <Mail className="w-3.5 h-3.5" />
                    <span>Email</span>
                  </div>
                  <a
                    href={`mailto:${loc.email}`}
                    className="text-xs sm:text-[13px] text-slate-700 hover:text-brand-orange font-medium block transition-colors"
                  >
                    {loc.email}
                  </a>
                </div>
              </div>

              {/* Action Buttons Bar */}
              <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs">
                <button
                  onClick={() => handleCopy(loc.id, loc.address)}
                  className="inline-flex items-center gap-1 text-slate-500 hover:text-slate-800 transition-colors font-medium"
                  title="Copy address"
                >
                  {copiedId === loc.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-green-600" />
                      <span className="text-green-600">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>

                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(loc.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-brand-orange hover:underline font-semibold"
                >
                  <span>Open Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: NATIONWIDE OPERATIONS SUPPORT BANNER                           */}
      {/* ========================================================================= */}
      <section className="py-3 sm:py-5 container-custom">
        <div className="relative rounded-[32px] sm:rounded-[36px] bg-gradient-to-r from-slate-900 to-[#0A192F] p-6 sm:p-8 lg:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-heading font-extrabold tracking-tight">
              Looking for facilities services for your facility?
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
              Whether you need integrated facilities management, critical data centre engineering, technical cleaning, or manned security across multiple states in India, our national delivery engine is ready to assist.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row items-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-7 py-2.5 rounded-full font-heading font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:shadow-lg hover:shadow-orange-500/30 hover:scale-105 transition-all duration-300"
            >
              <span>Contact Us Today</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

