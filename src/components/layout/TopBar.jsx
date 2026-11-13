import React from 'react';
import { Phone, Mail, Globe, MapPin, MessageCircle } from 'lucide-react';
import { companyData } from '../../data/companyData';

export default function TopBar({ visible = true }) {
  if (!visible) return null;

  return (
    <div className="bg-white text-slate-600 text-xs py-2 border-b border-slate-100 transition-all hidden md:block">
      <div className="container-custom flex items-center justify-end space-x-6">
        {/* Country Flag & Region */}
        <div className="flex items-center space-x-1.5 text-slate-700">
          <span className="text-sm">🌐</span>
          <span className="font-medium">Global</span>
        </div>

        {/* Call Us */}
        <a
          href="tel:+442079460982"
          className="flex items-center text-slate-700 hover:text-brand-orange transition-colors"
        >
          <Phone className="w-3.5 h-3.5 text-brand-orange mr-1.5" />
          <span>Call us on <span className="font-semibold text-slate-900">+44 (0) 20 7946 0982</span></span>
        </a>

        {/* Chat on WhatsApp */}
        <a
          href="https://wa.me/442079460982"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-slate-700 hover:text-emerald-600 transition-colors"
        >
          <MessageCircle className="w-3.5 h-3.5 text-emerald-500 mr-1.5" />
          <span>Chat on <span className="font-semibold text-slate-900">WhatsApp</span></span>
        </a>
      </div>
    </div>
  );
}
