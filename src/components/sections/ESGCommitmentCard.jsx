import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import esgSolarImg from '../../assets/esg/esg-solar-installation.jpg';

export default function ESGCommitmentCard() {
  const pillars = [
    {
      id: 'net-zero',
      title: "Net zero targets and customers' goals",
      description: "Working towards our 2035 Net Zero target, we help our customers achieve their ESG goals, helping positively impact their initiatives, especially those concerning the environment.",
      link: '/esg#environmental',
    },
    {
      id: 'communities',
      title: 'Supporting best communities',
      description: 'With 35,000+ colleagues, we have a responsibility to the communities in which we operate and society as a whole. Learn more about our community outreach, DE&I and People into Work scheme.',
      link: '/esg#social',
    },
    {
      id: 'governance',
      title: 'Built on good governance',
      description: 'Responsible and sustainable management practices to protect our people, our communities, our customers and our stakeholders – safeguarding our long-term success.',
      link: '/esg#governance',
    },
  ];

  return (
    <section className="w-full py-4 sm:py-6 bg-white overflow-hidden">
      <div className="container-custom">
        {/* Large Rounded Container with Soft Sage/Off-White Background matching OCS reference */}
        <div className="w-full bg-[#F4F7F4] rounded-3xl sm:rounded-[40px] lg:rounded-[48px] p-6 sm:p-10 md:p-12 lg:p-16 border border-slate-200/60 shadow-sm">

          {/* Section Header */}
          <div className="w-full text-left space-y-2 mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-brand-navy tracking-tight leading-tight whitespace-normal sm:whitespace-nowrap">
              NEXAAGEN ESG commitment
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm lg:text-base font-normal">
              Doing the right things in the right way – the NEXAAGEN way.
            </p>
          </div>

          {/* Two-Column Grid: Solar Installation Image (Left) + 3 ESG Pillars (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Left Column: Rooftop Solar Panel Infrastructure Photo */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/3] sm:aspect-[4/3.2] shadow-md group">
                <img
                  src={esgSolarImg}
                  alt="NEXAAGEN Renewable Solar Energy and Sustainability Infrastructure"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right Column: 3 ESG Pillars Stacked Vertically with Emerald Indicator Line */}
            <div className="lg:col-span-6 space-y-6 sm:space-y-8">
              {pillars.map((pillar) => (
                <div
                  key={pillar.id}
                  className="border-l-2 border-emerald-600 pl-4 sm:pl-5 space-y-1.5"
                >
                  <h3 className="font-heading font-bold text-slate-900 text-lg sm:text-xl leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                  <div>
                    <Link
                      to={pillar.link}
                      className="inline-flex items-center text-xs sm:text-sm font-semibold text-[#D8232A] hover:underline pt-0.5 group"
                    >
                      <span>Find out more</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

