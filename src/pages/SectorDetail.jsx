import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ArrowRight, 
  ArrowUpRight,
  CheckCircle2, 
  ShieldCheck, 
  Download,
  Building2, 
  ChevronRight,
  TrendingUp
} from 'lucide-react';
import { sectorsData } from '../data/sectorsData';
import { newsData } from '../data/newsData';
import { caseStudiesData } from '../data/caseStudiesData';
import Breadcrumbs from '../components/layout/Breadcrumbs';
import PageHero from '../components/layout/PageHero';
import SolutionsTabs from '../components/sections/SolutionsTabs';
import DataCentreSolutionsTabs from '../components/sections/DataCentreSolutionsTabs';
import DataCentreAccreditations from '../components/sections/DataCentreAccreditations';
import DataCentreCustomerStories from '../components/sections/DataCentreCustomerStories';
import DataCentreFAQ from '../components/sections/DataCentreFAQ';
import EducationSectorContent from '../components/sections/EducationSectorContent';
import CommercialSectorContent from '../components/sections/CommercialSectorContent';
import HealthcareSectorContent from '../components/sections/HealthcareSectorContent';
import AviationSectorContent from '../components/sections/AviationSectorContent';
import ManufacturingSectorContent from '../components/sections/ManufacturingSectorContent';
import RetailSectorContent from '../components/sections/RetailSectorContent';
import HospitalitySectorContent from '../components/sections/HospitalitySectorContent';
import ESGBrief from '../components/sections/ESGBrief';
import CaseStudiesCarousel from '../components/sections/CaseStudiesCarousel';
import NewsCarousel from '../components/sections/NewsCarousel';
import ContactForm from '../components/sections/ContactForm';

export default function SectorDetail() {
  const { sectorId } = useParams();

  // Normalize ID (handle data-centres/data_centres, commercial/commercial-real-estate, manufacturing/manufacturing-industry)
  const normalizedId = sectorId ? sectorId.replace(/_/g, '-') : '';
  const sector = sectorsData.find(
    (s) =>
      s.id === sectorId ||
      s.id === normalizedId ||
      (normalizedId === 'commercial-real-estate' && s.id === 'commercial') ||
      (normalizedId === 'commercial' && s.id === 'commercial-real-estate') ||
      (normalizedId === 'manufacturing' && (s.id === 'manufacturing' || s.id === 'manufacturing-industry')) ||
      (normalizedId === 'manufacturing-industry' && (s.id === 'manufacturing' || s.id === 'manufacturing-industry'))
  );

  // If sector doesn't exist, redirect to sectors overview or 404
  if (!sector) {
    return <Navigate to="/sectors" replace />;
  }

  // Filter sector-specific case studies or fallback to general
  const sectorCaseStudies = caseStudiesData.filter(
    (cs) => cs.sectorId === sector.id || cs.sector?.toLowerCase().includes(sector.id)
  );
  const displayCaseStudies = sectorCaseStudies.length > 0 ? sectorCaseStudies : caseStudiesData.slice(0, 3);

  // Sector news or related news
  const sectorNews = newsData;

  const isDataCentres = sector.id === 'data-centres';
  const isEducation = sector.id === 'education';
  const isCommercial = sector.id === 'commercial' || sector.id === 'commercial-real-estate';
  const isHealthcare = sector.id === 'healthcare';
  const isAviation = sector.id === 'aviation';
  const isManufacturing = sector.id === 'manufacturing' || sector.id === 'manufacturing-industry';
  const isRetail = sector.id === 'retail';
  const isHospitality = sector.id === 'hospitality';

  return (
    <div className="w-full flex flex-col flex-1">
      {/* Breadcrumb Navigation */}
      <Breadcrumbs
        items={[
          { label: 'Our Sectors', link: '/sectors' },
          { label: sector.title },
        ]}
      />

      {/* SECTION 1: HERO */}
      {isDataCentres ? (
        /* OCS Signature Data Centre Hero: Full-Bleed Dark Server Banner with Direct Typography */
        <section className="w-full py-1.5 sm:py-2.5 bg-transparent overflow-hidden">
          <div className="container-custom">
            <div className="relative w-full rounded-2xl sm:rounded-[24px] lg:rounded-[28px] overflow-hidden min-h-[220px] sm:min-h-[250px] lg:min-h-[280px] flex items-center shadow-lg border border-slate-200/60 bg-brand-navy">
              
              {/* Background Image: Dark Server Racks */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                  src={sector.heroImage}
                  alt={sector.title}
                  className="w-full h-full object-cover object-center scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/30 lg:bg-gradient-to-r lg:from-brand-navy-dark/95 lg:via-brand-navy-dark/65 lg:to-transparent" />
              </div>

              {/* Direct Left Content */}
              <div className="relative z-20 w-full p-4 sm:p-6 md:p-8 flex items-center">
                <div className="w-full max-w-2xl space-y-2.5 sm:space-y-3">
                  <h1 className="text-xl sm:text-2xl lg:text-3xl font-heading font-extrabold text-white tracking-tight leading-tight drop-shadow-md">
                    {sector.title}
                  </h1>

                  <p className="text-slate-200 text-xs sm:text-sm leading-relaxed font-normal max-w-xl drop-shadow-sm">
                    {sector.tagline}
                  </p>

                  <div className="pt-1 sm:pt-2 flex flex-wrap items-center gap-4">
                    <a
                      href="#contact-form"
                      className="inline-flex items-center justify-center font-bold text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:from-[#F4511E] hover:to-[#B71C1C] shadow-lg hover:shadow-orange-500/30 transition-all duration-300 ease-out active:scale-[0.98]"
                    >
                      <span>{sector.heroCtaText || "Connect with Our Data Centre Experts"}</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Bottom Right Floating "Download White Paper" Pill Button (matches OCS Screenshot 1) */}
              <div className="absolute bottom-5 right-5 z-20 hidden sm:block">
                <a
                  href="#contact-form"
                  className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white text-slate-800 text-xs font-bold hover:bg-slate-100 shadow-xl transition-all duration-200 border border-slate-200"
                >
                  <span>Download White Paper</span>
                  <Download className="w-3.5 h-3.5 text-brand-orange" />
                </a>
              </div>
            </div>
          </div>
        </section>
      ) : (isHealthcare || isManufacturing) ? (
        /* OCS Signature Dark Card Hero: Dark Card with background image positioned right matching User Screenshot 1 */
        <section className="w-full py-1.5 sm:py-2.5 bg-transparent overflow-hidden">
          <div className="container-custom">
            <div className="relative w-full rounded-2xl sm:rounded-[24px] lg:rounded-[28px] overflow-hidden min-h-[220px] sm:min-h-[250px] lg:min-h-[280px] flex items-center shadow-lg border border-slate-200/60 bg-[#0B1528]">
              {/* Background Image positioned right */}
              <div className="absolute inset-0 z-0 overflow-hidden flex justify-end">
                <img
                  src={sector.heroImage}
                  alt={sector.title}
                  className="w-full sm:w-[65%] lg:w-[58%] h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0B1528] via-[#0B1528]/95 sm:via-[#0B1528]/85 to-transparent" />
              </div>

              {/* Direct Left Content */}
              <div className="relative z-20 w-full p-4 sm:p-6 md:p-8 flex items-center">
                <div className="w-full max-w-xl space-y-2.5 sm:space-y-3">
                  {/* Connect with Our Team Contact -> Capsule */}
                  <div className="inline-flex items-center rounded-full bg-white p-1 pr-4 shadow-sm border border-slate-100/20">
                    <span className="bg-gradient-to-r from-[#FF5722] to-[#D8232A] text-white text-[10px] sm:text-[11px] font-bold px-3 py-0.5 rounded-full shadow-sm">
                      {sector.hiringBadge || "Connect with Our Team"}
                    </span>
                    <a
                      href="#contact-form"
                      className="ml-2 text-slate-800 hover:text-brand-orange text-xs sm:text-[13px] font-semibold inline-flex items-center transition-colors"
                    >
                      <span>{sector.hiringLinkText || "Contact →"}</span>
                    </a>
                  </div>

                  {/* Title */}
                  <h1 className="text-xl sm:text-2xl lg:text-3xl font-heading font-extrabold text-white tracking-tight leading-tight">
                    {sector.title}
                  </h1>

                  {/* Tagline */}
                  <p className="text-slate-200 text-xs sm:text-sm leading-relaxed font-normal max-w-lg">
                    {sector.tagline}
                  </p>

                  {/* "Why Choose NEXAAGEN?" Button */}
                  <div className="pt-1 sm:pt-2">
                    <a
                      href={isHealthcare ? "#partner-care" : "#partner-floor"}
                      className="inline-flex items-center justify-center font-bold text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:from-[#F4511E] hover:to-[#B71C1C] shadow-lg hover:shadow-orange-500/30 transition-all duration-300 ease-out active:scale-[0.98]"
                    >
                      Why Choose NEXAAGEN?
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (isEducation || isCommercial || isAviation || isRetail || isHospitality) ? (
        /* OCS Signature Hero: Photo with Left Floating White Card matching User Screenshot */
        <section className="w-full py-1.5 sm:py-2.5 bg-transparent overflow-hidden">
          <div className="container-custom">
            <div className="relative w-full rounded-2xl sm:rounded-[24px] lg:rounded-[28px] overflow-hidden min-h-[220px] sm:min-h-[250px] lg:min-h-[280px] flex items-center shadow-lg border border-slate-200/60 bg-slate-100">
              
              {/* Background Image: Corporate Atrium for Commercial, Cafeteria for Education */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                  src={sector.heroImage}
                  alt={sector.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Left Elevated White Card (matching OCS Reference Screenshot) */}
              <div className="relative z-20 w-full p-3 sm:p-5 max-w-lg">
                <div className="bg-white/95 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-5 shadow-xl border border-slate-100/90 space-y-2 sm:space-y-2.5">
                  {/* We're hiring + NEXAAGEN Careers link */}
                  <div className="flex items-center space-x-2">
                    <span className="bg-[#D8232A] text-white text-[10px] sm:text-[11px] font-bold px-2.5 py-0.5 rounded-full shadow-sm">
                      {sector.hiringBadge || "We're hiring"}
                    </span>
                    <Link
                      to={sector.hiringLinkUrl || "/careers"}
                      className="text-slate-800 hover:text-brand-orange text-xs sm:text-[13px] font-semibold inline-flex items-center transition-colors"
                    >
                      <span>{sector.hiringLinkText || "NEXAAGEN Careers →"}</span>
                    </Link>
                  </div>

                  {/* Title */}
                  <h1 className="text-xl sm:text-2xl lg:text-3xl font-heading font-extrabold text-brand-navy tracking-tight leading-tight">
                    {sector.title}
                  </h1>

                  {/* Subtitle / Description */}
                  <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed">
                    {sector.tagline}
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>
      ) : (
        <PageHero
          badge="Specialized Sector Practice"
          badgeLinkText="Explore solutions"
          badgeLinkUrl="#solutions"
          title={sector.title}
          description={sector.tagline}
          image={sector.heroImage}
          imageAlt={`${sector.title} Enterprise Facilities Services`}
          stats={sector.stats ? sector.stats.slice(0, 3) : undefined}
          primaryCta={{
            text: "Connect With Our Team",
            url: "#contact-form",
            isAnchor: true
          }}
          secondaryCta={{
            text: "Explore Capabilities",
            url: "/services"
          }}
        />
      )}

      {/* SECTION 2: BUILT FOR PERFORMANCE (OCS Reference Screenshot 2: 4 Elevated Metric Cards) */}
      {sector.performanceHeading && (
        <section className="w-full py-4 sm:py-6 bg-transparent overflow-hidden">
          <div className="container-custom">
            <div className="w-full bg-[#FAF9F5] rounded-3xl p-5 sm:p-8 lg:p-10 border border-slate-200/60 shadow-sm">
              
              {/* Header */}
              <div className="w-full text-left space-y-2.5 mb-4 sm:mb-6">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-brand-navy tracking-tight leading-tight whitespace-normal sm:whitespace-nowrap">
                  {sector.performanceHeading}
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm lg:text-base font-normal leading-relaxed">
                  {sector.performanceSubtitle}
                </p>
              </div>

              {/* 4 Elevated Metric Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
                {sector.stats.map((s, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 shadow-sm hover:shadow-card-hover border border-slate-100 flex flex-col justify-between transition-all duration-300 group"
                  >
                    {/* Top Right Orange Arrow Button */}
                    <div className="flex justify-end mb-4">
                      <div className="w-7 h-7 rounded-full bg-brand-orange/10 text-brand-orange flex items-center justify-center group-hover:bg-brand-orange group-hover:text-white transition-colors">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>

                    <div>
                      <div className="text-2xl sm:text-3xl lg:text-[32px] font-heading font-black text-[#0B1B3D] mb-1.5 tracking-tight">
                        {s.value}
                      </div>
                      <div className="text-xs sm:text-sm text-slate-600 font-medium leading-snug">
                        {s.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>
      )}

      {/* SECTION 3: WHY LEADING DATA CENTRES CHOOSE NEXAAGEN (OCS Reference Screenshot 2: Image Left + 3 Pillars Right) */}
      {sector.whyChooseHeading && (
        <section className="w-full py-4 sm:py-6 bg-transparent overflow-hidden">
          <div className="container-custom">
            
            {/* Header */}
            <div className="w-full text-left space-y-3 mb-4 sm:mb-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-brand-navy tracking-tight leading-tight whitespace-normal sm:whitespace-nowrap">
                {sector.whyChooseHeading}
              </h2>
              <p className="text-slate-500 text-xs sm:text-sm lg:text-base font-normal">
                {sector.whyChooseSubtitle}
              </p>
              <div className="pt-2 flex justify-start">
                <a
                  href="#contact-form"
                  className="inline-flex items-center justify-center font-bold text-white px-7 py-3 rounded-full text-xs sm:text-sm bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:from-[#F4511E] hover:to-[#B71C1C] shadow-md hover:shadow-orange-500/25 transition-all duration-300"
                >
                  {sector.whyChooseCtaText || "Connect with our Team"}
                </a>
              </div>
            </div>

            {/* Two-Column Card: Image on Left + 3 Pillars on Right */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
              {/* Left Column: Clean Data Centre Server Room Image */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/3] sm:aspect-[4/3.5] shadow-lg border border-slate-100 group">
                  <img
                    src={sector.whyChooseImage || sector.introImage}
                    alt={sector.whyChooseHeading}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Right Column: 3 Pillars with Clean Typography */}
              <div className="lg:col-span-7 space-y-6 sm:space-y-8">
                {sector.whyChoosePillars.map((pillar) => (
                  <div key={pillar.id} className="space-y-2">
                    <h3 className="font-heading font-bold text-brand-navy text-lg sm:text-xl leading-snug">
                      {pillar.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm lg:text-[15px] leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>
      )}

      {/* SECTION 4: STANDARD INTRODUCTION (For sectors without the OCS custom layout) */}
      {!sector.performanceHeading && !isEducation && !isHealthcare && !isAviation && !isManufacturing && !isRetail && !isHospitality && (
        <section className="section-padding bg-transparent">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Heading, Paragraphs, Key Benefits / CTA */}
              <div className="lg:col-span-7 space-y-6">
                {!isCommercial && (
                  <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-orange/10 text-brand-orange border border-brand-orange/20">
                    Sector Overview
                  </span>
                )}

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-brand-navy tracking-tight leading-tight">
                  {sector.introHeading || `Tailored Facilities Management for ${sector.title}`}
                </h2>

                <div className="space-y-4 text-slate-600 text-xs sm:text-sm lg:text-[15px] leading-relaxed">
                  {sector.introParagraphs ? (
                    sector.introParagraphs.map((para, pIdx) => (
                      <p key={pIdx}>{para}</p>
                    ))
                  ) : (
                    <p>{sector.overview}</p>
                  )}
                </div>

                {isCommercial ? (
                  <div className="pt-2 space-y-4">
                    <p className="text-slate-900 font-bold text-xs sm:text-sm">
                      View Facilities Management (FM) or Single-Service solutions below.
                    </p>
                    <div>
                      <a
                        href="#contact-form"
                        className="inline-flex items-center justify-center font-bold text-white px-8 py-3.5 rounded-full text-xs sm:text-sm bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:from-[#F4511E] hover:to-[#B71C1C] shadow-md hover:shadow-orange-500/25 transition-all duration-300 ease-out active:scale-[0.98]"
                      >
                        Contact Our Commercial Team
                      </a>
                    </div>
                  </div>
                ) : (
                  /* Key Benefits for other sectors */
                  sector.keyBenefits && (
                    <div className="pt-4 space-y-3">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-brand-navy mb-2">
                        Key Sector Advantages
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {sector.keyBenefits.map((ben, bIdx) => (
                          <div key={bIdx} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-start space-x-3">
                            <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                            <div>
                              <div className="text-xs sm:text-sm font-bold text-brand-navy">{ben.title}</div>
                              <div className="text-xs text-slate-500 mt-0.5 leading-snug">{ben.desc}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                )}
              </div>

              {/* Right Column: Large Rounded Image */}
              <div className="lg:col-span-5">
                <div className="relative rounded-3xl sm:rounded-[36px] overflow-hidden shadow-2xl group aspect-[4/3] max-h-[460px] w-full">
                  <img
                    src={sector.introImage || sector.heroImage}
                    alt={sector.title}
                    className="w-full h-full object-cover card-img-zoom"
                    loading="lazy"
                  />
                  {!isCommercial && (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark/80 via-transparent to-transparent" />
                      <div className="absolute bottom-6 left-6 right-6 text-white">
                        <span className="text-xs uppercase tracking-widest font-bold text-brand-orange block mb-1">
                          Specialized Delivery
                        </span>
                        <p className="text-sm text-slate-200">
                          Self-delivered by vetted, accredited NEXAAGEN field engineering specialists.
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* SECTION 5: SOLUTIONS TABS, ACCREDITATIONS & CUSTOMER STORIES */}
      {isDataCentres ? (
        <>
          <DataCentreSolutionsTabs />
          <DataCentreAccreditations />
          <DataCentreCustomerStories />
        </>
      ) : isEducation ? (
        <EducationSectorContent />
      ) : isCommercial ? (
        <CommercialSectorContent />
      ) : isHealthcare ? (
        <HealthcareSectorContent />
      ) : isAviation ? (
        <AviationSectorContent />
      ) : isManufacturing ? (
        <ManufacturingSectorContent />
      ) : isRetail ? (
        <RetailSectorContent />
      ) : isHospitality ? (
        <HospitalitySectorContent />
      ) : (
        <SolutionsTabs
          title={sector.solutionsHeading || `Dedicated Solutions for ${sector.title}`}
          subtitle={sector.solutionsIntro || `Explore our targeted service modules designed specifically to meet the high operational standards of ${sector.title}.`}
          solutions={sector.solutions}
          sectorName={sector.title}
        />
      )}

      {/* SECTION 6: ESG / SUSTAINABILITY (Rendered for other sectors) */}
      {!isEducation && !isCommercial && !isHealthcare && !isAviation && !isManufacturing && !isRetail && !isHospitality && (
        <ESGBrief
          title={`ESG & Decarbonisation in ${sector.title}`}
          subtitle="Driving real, verified sustainability impact across every operational touchpoint."
          esgData={sector.esg}
          imageOnLeft={false}
        />
      )}

      {/* SECTION 7: CASE STUDIES (Rendered for other sectors) */}
      {!isDataCentres && !isEducation && !isCommercial && !isHealthcare && !isAviation && !isManufacturing && !isRetail && !isHospitality && (
        <CaseStudiesCarousel
          title={`Case Studies in ${sector.shortTitle || sector.title}`}
          subtitle="Real-world results delivered for international enterprise estates."
          caseStudies={displayCaseStudies}
        />
      )}

      {/* SECTION 8: NEWS & INSIGHTS */}
      <NewsCarousel
        title={`Latest News & Insights: ${sector.shortTitle || sector.title}`}
        subtitle="Thought leadership and operational case breakthroughs from our sector specialists."
        news={sectorNews}
      />

      {/* SECTION 8B: FREQUENTLY ASKED QUESTIONS (Data Centres specific matching OCS reference) */}
      {isDataCentres && <DataCentreFAQ />}

      {/* SECTION 9: CONTACT FORM */}
      {!isHealthcare && !isManufacturing && (
        <ContactForm
          title={`Request a Consultation for ${sector.title}`}
          subtitle={`Connect with our ${sector.title} practice directors to discuss your estate portfolio or upcoming tender.`}
          defaultSector={sector.title}
        />
      )}
    </div>
  );
}
