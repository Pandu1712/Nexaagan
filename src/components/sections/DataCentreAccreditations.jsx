import React from 'react';

/**
 * DataCentreAccreditations component
 * Recreates the "Proven, Trusted, Accredited" section from the OCS Data Centres reference.
 * Features an infinite smooth marquee row with official ISO certification cards.
 */
export default function DataCentreAccreditations() {
  const accreditations = [
    {
      code: '14644-1 Class 8',
      title: 'Cleanroom Airborne Particulate Standards',
      desc: 'Controlled environments & technical cleaning compliance',
    },
    {
      code: '9001',
      title: 'Quality Management Systems',
      desc: 'Process consistency, risk reduction & SLA governance',
    },
    {
      code: '14001',
      title: 'Environmental Management Systems',
      desc: 'Eco-responsible facility stewardship & waste reduction',
    },
    {
      code: '45001',
      title: 'Occupational Health & Safety',
      desc: 'Zero-incident mission-critical safety culture',
    },
    {
      code: '27001',
      title: 'Information Security Management',
      desc: 'Physical & environmental perimeter data safeguards',
    },
    {
      code: '50001',
      title: 'Energy Management Systems',
      desc: 'PUE optimization, thermal efficiency & Net-Zero paths',
    },
    {
      code: '22301',
      title: 'Security & Business Continuity',
      desc: 'Disaster recovery, resilient backup & failover protocols',
    },
    {
      code: '14644-1 Class 8',
      title: 'Cleanroom Airborne Particulate Standards',
      desc: 'Controlled environments & technical cleaning compliance',
    },
    {
      code: '9001',
      title: 'Quality Management Systems',
      desc: 'Process consistency, risk reduction & SLA governance',
    },
    {
      code: '14001',
      title: 'Environmental Management Systems',
      desc: 'Eco-responsible facility stewardship & waste reduction',
    },
    {
      code: '45001',
      title: 'Occupational Health & Safety',
      desc: 'Zero-incident mission-critical safety culture',
    },
  ];

  // Duplicate for seamless 50% infinite translation
  const marqueeItems = [...accreditations, ...accreditations];

  return (
    <section className="w-full py-12 sm:py-16 lg:py-20 bg-white overflow-hidden relative">
      <div className="container-custom">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3.5 mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-heading font-extrabold text-[#0B1B3D] tracking-tight leading-tight">
            Proven, Trusted, Accredited
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm lg:text-base font-normal leading-relaxed max-w-2xl mx-auto">
            Certified to the highest international standards, our teams deliver consistent, safe, and compliant operations across all data centre environments. Every process is verified through independent audits and governed by accredited management systems.
          </p>
        </div>
      </div>

      {/* Infinite Seamless Scrolling Badges Track */}
      <div className="relative w-full overflow-hidden py-3">
        {/* Soft edge gradient fades */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="animate-marquee flex items-center gap-4 sm:gap-6 pl-4">
          {marqueeItems.map((item, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-36 sm:w-40 h-36 sm:h-40 bg-white rounded-2xl sm:rounded-3xl border border-slate-200/70 shadow-sm hover:shadow-md hover:border-brand-orange/40 transition-all duration-300 flex flex-col items-center justify-center p-3.5 text-center group cursor-default"
            >
              {/* Official ISO Style Globe Emblem */}
              <div className="w-16 h-16 sm:w-[70px] sm:h-[70px] relative flex items-center justify-center text-[#0066B2] group-hover:scale-105 transition-transform duration-300">
                <svg
                  viewBox="0 0 100 100"
                  className="w-full h-full"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Outer Circle */}
                  <circle
                    cx="50"
                    cy="46"
                    r="34"
                    stroke="currentColor"
                    strokeWidth="2.2"
                  />

                  {/* Top curved caption */}
                  <path
                    id={`iso-curve-${idx}`}
                    d="M 23 44 A 31 31 0 0 1 77 44"
                    fill="none"
                  />
                  <text
                    fontSize="4.2"
                    fontWeight="600"
                    fill="currentColor"
                    letterSpacing="0.2"
                  >
                    <textPath
                      href={`#iso-curve-${idx}`}
                      startOffset="50%"
                      textAnchor="middle"
                    >
                      International Organization for Standardization
                    </textPath>
                  </text>

                  {/* Latitude grid lines */}
                  <path
                    d="M 20 38 Q 50 43 80 38"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeOpacity="0.75"
                  />
                  <path
                    d="M 20 54 Q 50 49 80 54"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeOpacity="0.75"
                  />

                  {/* Longitude grid line ellipse */}
                  <ellipse
                    cx="50"
                    cy="46"
                    rx="17"
                    ry="34"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeOpacity="0.75"
                  />
                  <line
                    x1="50"
                    y1="12"
                    x2="50"
                    y2="80"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeOpacity="0.75"
                  />

                  {/* White background pill for ISO logo */}
                  <rect
                    x="24"
                    y="35"
                    width="52"
                    height="22"
                    rx="3"
                    fill="white"
                  />

                  {/* ISO Bold Text */}
                  <text
                    x="50"
                    y="52"
                    textAnchor="middle"
                    fill="currentColor"
                    fontSize="18"
                    fontWeight="900"
                    fontFamily="Arial, Helvetica, sans-serif"
                    letterSpacing="1.2"
                  >
                    ISO
                  </text>
                </svg>
              </div>

              {/* Accreditation Code text below globe */}
              <div className="mt-1.5 flex flex-col items-center">
                <span className="text-[11px] sm:text-xs font-bold text-[#0066B2] tracking-tight leading-tight group-hover:text-brand-orange transition-colors">
                  {item.code}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

