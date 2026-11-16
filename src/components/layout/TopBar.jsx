import React from 'react';
import { Phone, Mail, Globe, MapPin, MessageCircle } from 'lucide-react';
import { companyData } from '../../data/companyData';

export default function TopBar({ visible = true }) {
  if (!visible) return null;

  return (
    <div className="bg-white text-slate-600 text-xs py-2 border-b border-slate-100 transition-all hidden md:block">
      <div className="container-custom flex items-center justify-between">
        {/* Current Location */}
        <div className="flex items-center space-x-1.5 text-slate-700">
          <MapPin className="w-3.5 h-3.5 text-brand-orange flex-shrink-0" />
          <span className="font-semibold text-slate-900 whitespace-nowrap">Current location:</span>
          <span className="text-slate-600 truncate max-w-md lg:max-w-xl">
            #411, Flat No:201, Shree Nivasam, Mathrusri Nagar, Near Miyapur Metro Station, Miyapur, Hyderabad, 500 049
          </span>
        </div>

        <div className="flex items-center space-x-5 flex-shrink-0">
          {/* Call Us */}
          <a
            href={`tel:${companyData.headquarters.phone.replace(/[^0-9+]/g, '')}`}
            className="flex items-center text-slate-700 hover:text-brand-orange transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-brand-orange mr-1.5" />
            <span>Call us: <span className="font-semibold text-slate-900">{companyData.headquarters.phone}</span></span>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/919988331575"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-slate-700 hover:text-emerald-600 transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-500 mr-1.5" />
            <span>WhatsApp: <span className="font-semibold text-slate-900">+91 99 88 33 1575</span></span>
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
