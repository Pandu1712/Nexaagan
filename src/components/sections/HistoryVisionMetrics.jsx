import React from 'react';
import { visionMetricsData } from '../../data/visionMetricsData';

export default function HistoryVisionMetrics() {
  return (
    <section className="w-full py-12 sm:py-16 lg:py-20 bg-white overflow-hidden relative">
      {/* Subtle Dotted Matrix Watermark Background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: 'radial-gradient(#cbd5e1 1.2px, transparent 1.2px)',
          backgroundSize: '24px 24px'
        }}
      />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-heading font-extrabold text-[#0B1B3D] tracking-tight leading-tight">
            History, colleagues, customers and vision
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm lg:text-base leading-relaxed font-normal max-w-2xl mx-auto">
            We share a group-wide vision and mission to become the best provider of facilities services for colleagues, customers and communities by making people and places the best they can be.
          </p>
        </div>

        {/* 4 Metrics Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 sm:mt-14">
          {visionMetricsData.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm hover:shadow-md hover:border-slate-200 transition-all duration-300 flex flex-col items-start space-y-4 group"
              >
                {/* Soft Orange Icon Badge */}
                <div className="w-11 h-11 rounded-2xl bg-orange-50 border border-orange-100/80 flex items-center justify-center text-brand-orange group-hover:scale-105 transition-transform duration-300">
                  <Icon className="w-5 h-5 text-[#FF5722]" />
                </div>

                {/* Bold Highlight Number in Red-Orange */}
                <div className="text-3xl sm:text-4xl font-heading font-extrabold text-[#D8232A] tracking-tight">
                  {item.value}
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
