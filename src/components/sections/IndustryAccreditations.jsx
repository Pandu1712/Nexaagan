import React from 'react';
import { Link } from 'react-router-dom';

export default function IndustryAccreditations() {
  const accreditations = [
    {
      id: 'iso-9001',
      name: 'ISO 9001 Quality',
      renderBadge: () => (
        <div className="flex flex-col items-center justify-center text-center">
          <div className="w-16 h-12 bg-[#D32F2F] rounded-md flex flex-col items-center justify-center text-white shadow-sm px-2">
            <span className="font-heading font-black text-xs tracking-wider">ISO</span>
            <span className="text-[8px] font-bold tracking-tight">9001:2015</span>
          </div>
          <span className="text-[10px] text-slate-500 font-medium mt-1.5">Quality Management</span>
        </div>
      ),
    },
    {
      id: 'triple-iso',
      name: 'Integrated ISO Standards',
      renderBadge: () => (
        <div className="flex flex-col items-center justify-center text-center">
          <div className="flex items-center space-x-1.5">
            <div className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[9px] font-bold">✓</div>
            <span className="text-[10px] font-bold text-slate-800">ISO 9001</span>
          </div>
          <div className="flex items-center space-x-1.5 mt-0.5">
            <div className="w-5 h-5 rounded-full bg-sky-600 text-white flex items-center justify-center text-[9px] font-bold">✓</div>
            <span className="text-[10px] font-bold text-slate-800">ISO 14001</span>
          </div>
          <div className="flex items-center space-x-1.5 mt-0.5">
            <div className="w-5 h-5 rounded-full bg-blue-700 text-white flex items-center justify-center text-[9px] font-bold">✓</div>
            <span className="text-[10px] font-bold text-slate-800">ISO 45001</span>
          </div>
        </div>
      ),
    },
    {
      id: 'iosh',
      name: 'IOSH Certified',
      renderBadge: () => (
        <div className="flex flex-col items-center justify-center text-center">
          <div className="w-12 h-12 rounded-full border-2 border-sky-500 flex items-center justify-center relative">
            <span className="font-heading font-extrabold text-[#0284C7] text-sm tracking-tight lowercase">iosh</span>
          </div>
          <span className="text-[10px] text-slate-500 font-medium mt-1">Health & Safety</span>
        </div>
      ),
    },
    {
      id: 'energy-efficiency',
      name: 'Energy Conservation Bureau',
      renderBadge: () => (
        <div className="flex flex-col items-center justify-center text-center">
          <div className="w-12 h-12 rounded-full border-2 border-emerald-500 bg-emerald-50/50 flex flex-col items-center justify-center text-emerald-700">
            <span className="text-[14px]">⚡</span>
            <span className="text-[7px] font-extrabold uppercase tracking-tighter">Energy Bureau</span>
          </div>
          <span className="text-[10px] text-slate-500 font-medium mt-1">Conservation</span>
        </div>
      ),
    },
    {
      id: 'nebosh',
      name: 'NEBOSH Certified',
      renderBadge: () => (
        <div className="flex flex-col items-center justify-center text-center">
          <div className="w-11 h-11 flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-10 h-10 text-brand-navy" fill="currentColor">
              <path d="M50 0L61 35H98L68 57L79 91L50 70L21 91L32 57L2 35H39L50 0Z" />
            </svg>
          </div>
          <span className="text-[11px] font-heading font-extrabold text-[#0B1B3D] tracking-wider uppercase">nebosh</span>
          <span className="text-[9px] text-slate-400 font-medium">Safety Standard</span>
        </div>
      ),
    },
    {
      id: 'iso-50001',
      name: 'ISO 50001 Energy Management',
      renderBadge: () => (
        <div className="flex flex-col items-center justify-center text-center">
          <div className="w-16 h-12 bg-[#0284C7] rounded-md flex flex-col items-center justify-center text-white shadow-sm px-2">
            <span className="font-heading font-black text-xs tracking-wider">ISO</span>
            <span className="text-[8px] font-bold tracking-tight">ISO 50001</span>
          </div>
          <span className="text-[10px] text-slate-500 font-medium mt-1.5">Energy Management</span>
        </div>
      ),
    },
  ];

  return (
    <section className="w-full py-12 sm:py-16 lg:py-20 bg-white overflow-hidden" aria-label="Industry Accreditations and Compliance">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Heading, Description and Learn More Button */}
          <div className="lg:col-span-5 space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-heading font-extrabold text-[#0B1B3D] tracking-tight leading-[1.18]">
              Industry Accreditations: Quality Control and Compliance
            </h2>

            <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed font-normal">
              Maintaining the highest standards through continuous improvement, best practice and good governance.
            </p>

            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center justify-center font-bold text-white text-xs sm:text-sm px-7 sm:px-8 py-3 sm:py-3.5 rounded-full bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:from-[#F4511E] hover:to-[#B71C1C] shadow-md hover:shadow-lg transition-all duration-300 active:scale-[0.98]"
              >
                <span>Learn More</span>
              </Link>
            </div>
          </div>

          {/* Right Column: 3x2 Grid of Elevated White Accreditation Cards */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
              {accreditations.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl p-4 sm:p-6 border border-slate-100 shadow-sm hover:shadow-md hover:border-slate-200 transition-all duration-300 flex items-center justify-center aspect-[3/2] group"
                >
                  {item.renderBadge()}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

