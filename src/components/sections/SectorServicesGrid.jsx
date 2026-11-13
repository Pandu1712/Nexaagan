import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { sectorServicesData } from '../../data/sectorServicesData';

export default function SectorServicesGrid() {
  return (
    <section className="w-full py-6 sm:py-10 lg:py-14 bg-white overflow-hidden">
      <div className="container-custom">
        {/* Large Rounded Container Box with Soft Off-White Background matching OCS reference */}
        <div className="w-full bg-[#FAF9F5] rounded-3xl sm:rounded-[36px] lg:rounded-[44px] p-6 sm:p-10 md:p-12 lg:p-16 border border-slate-200/60 shadow-sm">
          
          {/* Section Header */}
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-heading font-extrabold text-[#0B1B3D] tracking-tight leading-tight">
              Sector specific services – where your mission becomes our mission
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm lg:text-base mt-2.5 font-normal leading-relaxed">
              Find out more about our people, technology and ESG initiatives for your sector.
            </p>
          </div>

          {/* 3-Column Sector Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mt-8 sm:mt-12">
            {sectorServicesData.map((item) => (
              <Link
                key={item.id}
                to={item.link}
                className="group flex flex-col focus:outline-none"
              >
                {/* Sector Image with Smooth Rounded Corners and Hover Zoom */}
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-3.5 sm:mb-4 bg-slate-200 shadow-sm group-hover:shadow-md transition-shadow">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                </div>

                {/* Title Row: Bold Heading + Circular Red-Orange Arrow Button */}
                <div className="flex items-center justify-between gap-3 mb-1.5">
                  <h3 className="font-heading font-bold text-slate-900 group-hover:text-brand-orange text-lg sm:text-[19px] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gradient-to-r from-[#FF5722] to-[#D8232A] text-white flex items-center justify-center flex-shrink-0 group-hover:scale-110 shadow-sm transition-transform duration-300">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Short Description */}
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

