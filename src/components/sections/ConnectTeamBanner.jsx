import React from 'react';
import { Link } from 'react-router-dom';

export default function ConnectTeamBanner() {
  return (
    <section className="w-full py-3 sm:py-5 bg-white overflow-hidden" aria-label="Connect With Team CTA">
      <div className="container-custom">
        {/* Full-width Rounded Navy Banner with Signature Dotted Radial Wave Watermark */}
        <div className="relative w-full rounded-3xl sm:rounded-[36px] overflow-hidden bg-[#0B1B3D] py-6 sm:py-10 lg:py-12 px-6 sm:px-10 md:px-12 text-center text-white shadow-xl border border-slate-800">
          
          {/* Subtle Dotted Radial Wave SVG Watermark radiating outward */}
          <div className="absolute inset-0 pointer-events-none opacity-25 overflow-hidden flex items-center justify-center">
            <svg
              className="w-[140%] h-[140%] -translate-y-4"
              viewBox="0 0 1200 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Left Radial Waves */}
              <circle cx="150" cy="200" r="100" stroke="#38BDF8" strokeWidth="2" strokeDasharray="4 8" />
              <circle cx="150" cy="200" r="180" stroke="#38BDF8" strokeWidth="2" strokeDasharray="5 10" />
              <circle cx="150" cy="200" r="260" stroke="#38BDF8" strokeWidth="2" strokeDasharray="6 12" />
              <circle cx="150" cy="200" r="340" stroke="#38BDF8" strokeWidth="2" strokeDasharray="6 14" />
              <circle cx="150" cy="200" r="420" stroke="#38BDF8" strokeWidth="2" strokeDasharray="7 16" />
              <circle cx="150" cy="200" r="500" stroke="#38BDF8" strokeWidth="2" strokeDasharray="8 18" />

              {/* Right Radial Waves */}
              <circle cx="1050" cy="200" r="120" stroke="#38BDF8" strokeWidth="2" strokeDasharray="4 8" />
              <circle cx="1050" cy="200" r="200" stroke="#38BDF8" strokeWidth="2" strokeDasharray="5 10" />
              <circle cx="1050" cy="200" r="280" stroke="#38BDF8" strokeWidth="2" strokeDasharray="6 12" />
              <circle cx="1050" cy="200" r="360" stroke="#38BDF8" strokeWidth="2" strokeDasharray="6 14" />
              <circle cx="1050" cy="200" r="440" stroke="#38BDF8" strokeWidth="2" strokeDasharray="7 16" />
              <circle cx="1050" cy="200" r="520" stroke="#38BDF8" strokeWidth="2" strokeDasharray="8 18" />
            </svg>
          </div>

          {/* Banner Content (Centered) */}
          <div className="relative z-10 max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-heading font-extrabold text-white tracking-tight leading-tight">
              Connect with your NEXAAGEN team
            </h2>

            <p className="text-slate-200 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
              We're ready to deliver the best experiences, productivity, practices, resilience and outcomes and we look forward to connecting with you and your team.
            </p>

            <div className="pt-3 sm:pt-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center font-bold text-white text-xs sm:text-sm px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:from-[#F4511E] hover:to-[#B71C1C] shadow-lg hover:shadow-orange-500/30 transition-all duration-300 active:scale-[0.98]"
              >
                <span>Contact Us</span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

