import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Mail, 
  Phone, 
  MapPin, 
  ShieldCheck, 
  ArrowUpRight, 
  Globe, 
  Award
} from 'lucide-react';
import { companyData } from '../../data/companyData';
import { sectorsData } from '../../data/sectorsData';
import { servicesData } from '../../data/servicesData';

/* Original Brand Social SVG Icons */
const LinkedInIcon = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z"/>
  </svg>
);

const XIcon = ({ className = "w-3.5 h-3.5" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const YouTubeIcon = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const InstagramIcon = ({ className = "w-3.5 h-3.5" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-slate-300 py-6 sm:py-8 border-t border-slate-800">
      <div className="container-custom">
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8 pb-6 border-b border-slate-800">
          {/* Column 1: Company Info */}
          <div className="lg:col-span-2 space-y-3.5">
            <Link to="/" className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-orange to-red-600 flex items-center justify-center text-white font-heading font-black text-lg shadow-md">
                N
              </div>
              <span className="font-heading font-bold text-xl tracking-tight text-white">
                NEXA<span className="text-brand-orange">AGEN</span>
              </span>
            </Link>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Nexaagen Integrated Facility Management Services Private Limited is proposed as a multi-sector facility management and engineering services company delivering safe, efficient and dependable facility operations.
            </p>

            <div className="space-y-1.5 text-xs text-slate-300">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-3.5 h-3.5 text-brand-orange flex-shrink-0 mt-0.5" />
                <span>{companyData.headquarters.address}, {companyData.headquarters.city}</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-3.5 h-3.5 text-brand-orange flex-shrink-0" />
                <a href={`tel:${companyData.headquarters.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-white transition-colors">
                  {companyData.headquarters.phone}
                </a>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail className="w-3.5 h-3.5 text-brand-orange flex-shrink-0" />
                <a href={`mailto:${companyData.headquarters.email}`} className="hover:text-white transition-colors">
                  {companyData.headquarters.email}
                </a>
              </div>
            </div>

            {/* Original Brand Social Media Icons (Always in Full Authentic Brand Colors) */}
            <div className="flex items-center space-x-2 pt-1.5">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 rounded-lg bg-[#0A66C2] text-white flex items-center justify-center shadow-md hover:scale-110 hover:brightness-110 transition-all duration-200"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <LinkedInIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 rounded-lg bg-black text-white flex items-center justify-center shadow-md border border-slate-700/80 hover:scale-110 hover:brightness-110 transition-all duration-200"
                aria-label="X (formerly Twitter)"
                title="X"
              >
                <XIcon className="w-3 h-3" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 rounded-lg bg-[#FF0000] text-white flex items-center justify-center shadow-md hover:scale-110 hover:brightness-110 transition-all duration-200"
                aria-label="YouTube"
                title="YouTube"
              >
                <YouTubeIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 rounded-lg bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white flex items-center justify-center shadow-md hover:scale-110 hover:brightness-110 transition-all duration-200"
                aria-label="Instagram"
                title="Instagram"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Column 2: Sectors */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Industry Sectors
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              {sectorsData.slice(0, 6).map((sector) => (
                <li key={sector.id}>
                  <Link
                    to={`/sectors/${sector.id}`}
                    className="hover:text-brand-orange transition-colors flex items-center justify-between group"
                  >
                    <span>{sector.shortTitle || sector.title}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-brand-orange" />
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/sectors"
                  className="text-brand-orange font-semibold hover:underline inline-block pt-0.5"
                >
                  View All Sectors →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Enterprise Services
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              {servicesData.slice(0, 6).map((svc) => (
                <li key={svc.id}>
                  <Link
                    to={`/services/${svc.id}`}
                    className="hover:text-brand-orange transition-colors flex items-center justify-between group"
                  >
                    <span>{svc.shortTitle || svc.title}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-brand-orange" />
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/services"
                  className="text-brand-orange font-semibold hover:underline inline-block pt-0.5"
                >
                  View All 10 Services →
                </Link>
              </li>
              <li>
                <Link
                  to="/a-z-of-spaces-and-places"
                  className="text-slate-400 hover:text-brand-orange hover:underline inline-block text-[11px]"
                >
                  A-Z Places We Service →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Quick Links & Accreditations */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Corporate & Governance
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>
                <Link to="/about" className="hover:text-brand-orange transition-colors">
                  About NEXAAGEN
                </Link>
              </li>
              <li>
                <Link to="/technology" className="hover:text-brand-orange transition-colors">
                  Technology & NEXA-Pulse
                </Link>
              </li>
              <li>
                <Link to="/esg" className="hover:text-brand-orange transition-colors">
                  ESG & Net Zero 2035
                </Link>
              </li>
              <li>
                <Link to="/policies" className="hover:text-brand-orange transition-colors">
                  Policy Download Centre
                </Link>
              </li>
              <li>
                <Link to="/news" className="hover:text-brand-orange transition-colors">
                  News, Insights & Reports
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-brand-orange transition-colors">
                  Contact & Global Offices
                </Link>
              </li>
            </ul>

            <div className="pt-2">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 block mb-1.5">
                Certified Accreditations
              </span>
              <div className="flex flex-wrap gap-1">
                {[
                  { label: 'ISO 9001', icon: ShieldCheck, color: 'text-sky-400' },
                  { label: 'ISO 14001', icon: ShieldCheck, color: 'text-emerald-400' },
                  { label: 'ISO 45001', icon: ShieldCheck, color: 'text-orange-400' },
                  { label: 'ISO 27001', icon: ShieldCheck, color: 'text-blue-400' },
                  { label: 'RoSPA Gold', icon: Award, color: 'text-amber-400' }
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <span
                      key={item.label}
                      className="inline-flex items-center space-x-1 text-[9px] bg-slate-800/90 text-slate-300 px-1.5 py-0.5 rounded border border-slate-700 font-mono"
                    >
                      <Icon className={`w-2.5 h-2.5 ${item.color}`} />
                      <span>{item.label}</span>
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-3.5 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-2.5">
          <p>© {new Date().getFullYear()} Nexaagen Integrated Facility Management Services Private Limited. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4 sm:gap-5 text-slate-400">
            <Link to="/privacy-policy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-conditions" className="hover:text-slate-300 transition-colors">
              Terms & Conditions
            </Link>
            <Link to="/modern-slavery-act" className="hover:text-slate-300 transition-colors">
              Modern Slavery Statement
            </Link>
            <Link to="/policies" className="hover:text-slate-300 transition-colors">
              Policy Download Centre
            </Link>
            <span className="text-slate-600">Cookie Preferences</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

