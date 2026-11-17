import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, CheckCircle2, ShieldCheck, Search, X } from 'lucide-react';
import { sectorsData } from '../data/sectorsData';
import Breadcrumbs from '../components/layout/Breadcrumbs';
import PageHero from '../components/layout/PageHero';
import SectionTitle from '../components/common/SectionTitle';
import ContactForm from '../components/sections/ContactForm';
import SectorLocationsDirectory from '../components/sectors/SectorLocationsDirectory';

export default function Sectors() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSectors = useMemo(() => {
    if (!searchQuery.trim()) return sectorsData;
    const q = searchQuery.toLowerCase().trim();
    return sectorsData.filter((sec) => {
      const matchText = [
        sec.title,
        sec.shortTitle,
        sec.tagline,
        sec.overview,
        sec.id,
        ...(sec.keyBenefits || []),
        ...(sec.solutions ? sec.solutions.map(s => `${s.title} ${s.description}`) : [])
      ].join(' ').toLowerCase();
      return matchText.includes(q);
    });
  }, [searchQuery]);

  return (
    <div className="w-full flex flex-col flex-1">
      <Breadcrumbs items={[{ label: 'Our Sectors' }]} />

      {/* Signature Enterprise Hero with Premium Photography & Floating Card */}
      <PageHero
        badge="Specialized Industry Practices"
        badgeLinkText="Explore 8 sectors"
        badgeLinkUrl="#sectors-grid"
        title="Tailored Facilities Management Across Mission-Critical Sectors"
        description="From international aviation terminals and acute healthcare hospitals to Tier IV data centres and Grade-A commercial towers, NEXAAGEN delivers specialized compliance, vetted engineering, and operational resilience."
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2400&q=85"
        imageAlt="International Enterprise Sector Commercial Infrastructure"
        stats={[
          { value: "8+", label: "Specialist Sectors" },
          { value: "1,200+", label: "Managed Sites" },
          { value: "99.98%", label: "SLA Adherence" }
        ]}
        primaryCta={{
          text: "Consult Sector Specialists",
          url: "#contact-form",
          isAnchor: true
        }}
        secondaryCta={{
          text: "A-Z Sector Locations",
          url: "#a-z-locations",
          isAnchor: true
        }}
      />

      {/* Sectors Showcase Grid */}
      <section id="sectors-grid" className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            badge="Global Verticals"
            title="Explore Our Core Sector Capabilities"
            subtitle="Select a sector below to explore tailored engineering solutions, specialized hygiene protocols, ESG roadmaps, and verified case studies."
            align="left"
          />

          {/* Real-time Sectors Filter Bar */}
          <div className="mb-8 max-w-xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Filter sectors (e.g. Aviation, Data Centres, Healthcare, Commercial)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-10 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-sm text-brand-navy placeholder:text-slate-400 focus:outline-none focus:border-brand-orange focus:bg-white transition-all shadow-xs"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
                  title="Clear filter"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
            {searchQuery && (
              <div className="mt-2 text-xs text-slate-500 flex items-center justify-between px-1">
                <span>
                  Showing <strong className="text-brand-navy">{filteredSectors.length}</strong> of {sectorsData.length} sectors
                </span>
                <button
                  onClick={() => setSearchQuery('')}
                  className="text-brand-orange font-semibold hover:underline"
                >
                  Clear filter
                </button>
              </div>
            )}
          </div>

          {filteredSectors.length === 0 ? (
            <div className="text-center py-12 px-4 bg-slate-50 rounded-3xl border border-slate-100 mb-8">
              <p className="text-brand-navy font-semibold text-base mb-1">
                No sectors found matching "{searchQuery}"
              </p>
              <p className="text-xs text-slate-500 mb-4">
                Try searching for "Aviation", "Data Centres", "Hospitality", "Manufacturing", or "Healthcare".
              </p>
              <button
                onClick={() => setSearchQuery('')}
                className="text-xs bg-brand-orange text-white px-4 py-2 rounded-xl font-bold hover:bg-brand-orange-light transition-all shadow-sm"
              >
                Reset filter to view all 8 sectors
              </button>
            </div>
          ) : (
            <div className="space-y-6 sm:space-y-8">
              {filteredSectors.map((sector, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={sector.id}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-center p-5 sm:p-8 lg:p-10 rounded-3xl bg-slate-50 border border-slate-100 hover:border-slate-200 hover:bg-slate-50/80 transition-all duration-300 ${
                    isEven ? '' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Image Column */}
                  <div className={`lg:col-span-5 ${isEven ? 'order-1' : 'order-1 lg:order-2'}`}>
                    <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[16/11] group">
                      <img
                        src={sector.heroImage}
                        alt={sector.title}
                        className="w-full h-full object-cover card-img-zoom"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent" />
                      <div className="absolute top-4 left-4 bg-brand-orange text-white text-xs font-bold px-3 py-1 rounded-full">
                        {sector.shortTitle || sector.title}
                      </div>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className={`lg:col-span-7 space-y-5 ${isEven ? 'order-2' : 'order-2 lg:order-1'}`}>
                    <h3 className="text-xl sm:text-2xl font-heading font-bold text-brand-navy">
                      {sector.title}
                    </h3>
                    <p className="text-slate-600 text-base leading-relaxed">
                      {sector.overview}
                    </p>

                    {/* Stats or Benefits */}
                    {sector.stats && (
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-2 border-y border-slate-200/60">
                        {sector.stats.map((st, sIdx) => (
                          <div key={sIdx}>
                            <div className="text-xl font-heading font-bold text-brand-orange">{st.value}</div>
                            <div className="text-[11px] text-slate-500 line-clamp-1">{st.label}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="pt-2 flex flex-wrap gap-4">
                      <Link
                        to={`/sectors/${sector.id}`}
                        className="btn-gradient text-sm py-3 px-6"
                      >
                        <span>View Sector Detail & Solutions</span>
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                      <a
                        href="#contact-form"
                        className="btn-outline text-sm py-3 px-6"
                      >
                        Request Consultation
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          )}
        </div>
      </section>

      {/* A-Z of Sector Locations Interactive Directory */}
      <SectorLocationsDirectory />

      {/* Contact Form Section */}
      <ContactForm
        title="Consult Our Sector Specialists"
        subtitle="Connect with our practice leaders to discuss service integration, SLA design, or upcoming tenders."
      />
    </div>
  );
}

