import React from 'react';
import { Phone, Mail } from 'lucide-react';
import { companyData } from '../../data/companyData';

export default function TopBar({ visible = true }) {
  if (!visible) return null;

  return (
    <div className="bg-white text-slate-600 text-xs py-2 border-b border-slate-100 transition-all hidden md:block">
      <div className="container-custom flex items-center justify-end">
        <div className="flex items-center space-x-6 flex-shrink-0">
          {/* Single Contact Number */}
          <a
            href={`tel:${companyData.headquarters.phone.replace(/[^0-9+]/g, '')}`}
            className="flex items-center text-slate-700 hover:text-brand-orange transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-brand-orange mr-1.5" />
            <span>Call us: <span className="font-semibold text-slate-900">{companyData.headquarters.phone}</span></span>
          </a>

          {/* Email */}
          <a
            href={`mailto:${companyData.headquarters.email}`}
            className="flex items-center text-slate-700 hover:text-brand-orange transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-brand-orange mr-1.5" />
            <span className="font-semibold text-slate-900">{companyData.headquarters.email}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
