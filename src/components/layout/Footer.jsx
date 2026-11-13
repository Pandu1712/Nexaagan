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
  Linkedin, 
  Twitter, 
  Youtube,
  Award
} from 'lucide-react';
import { companyData } from '../../data/companyData';
import { sectorsData } from '../../data/sectorsData';
import { servicesData } from '../../data/servicesData';

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-slate-300 pt-16 sm:pt-20 pb-12 border-t border-slate-800">
      <div className="container-custom">
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-slate-800">
          {/* Column 1: Company Info */}
          <div className="lg:col-span-2 space-y-5">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-orange to-red-600 flex items-center justify-center text-white font-heading font-black text-xl shadow-md">
                N
              </div>
              <span className="font-heading font-bold text-2xl tracking-tight text-white">
                NEXA<span className="text-brand-orange">AGEN</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              International enterprise facilities management, mission-critical engineering, smart IoT building telemetry, and sustainable decarbonisation.
            </p>

            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
                <span>{companyData.headquarters.address}, {companyData.headquarters.city}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-brand-orange flex-shrink-0" />
                <span>{companyData.headquarters.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-brand-orange flex-shrink-0" />
                <span>{companyData.headquarters.email}</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-800/80 hover:bg-brand-orange hover:text-white text-slate-400 flex items-center justify-center transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-800/80 hover:bg-brand-orange hover:text-white text-slate-400 flex items-center justify-center transition-all"
                aria-label="Twitter / X"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-800/80 hover:bg-brand-orange hover:text-white text-slate-400 flex items-center justify-center transition-all"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Sectors */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Industry Sectors
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
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
                  className="text-brand-orange font-semibold hover:underline inline-block pt-1"
                >
                  View All Sectors →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Enterprise Services
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {servicesData.map((svc) => (
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
                  to="/services#places-we-service"
                  className="text-brand-orange font-semibold hover:underline inline-block pt-1"
                >
                  A-Z Places We Service →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Quick Links & Accreditations */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Corporate & Governance
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
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

            <div className="pt-3">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 block mb-2">
                Certified Accreditations
              </span>
              <div className="flex flex-wrap gap-1.5">
                {['ISO 9001', 'ISO 14001', 'ISO 45001', 'ISO 27001', 'RoSPA Gold'].map((badge) => (
                  <span
                    key={badge}
                    className="text-[10px] bg-slate-800/90 text-slate-300 px-2 py-0.5 rounded border border-slate-700 font-mono"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} NEXAAGEN Group Limited. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-conditions" className="hover:text-slate-300 transition-colors">
              Terms & Conditions
            </Link>
            <Link to="/esg#governance" className="hover:text-slate-300 transition-colors">
              Modern Slavery Statement
            </Link>
            <span className="text-slate-600">Cookie Preferences</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

