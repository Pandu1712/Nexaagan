import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search, Building2, Wrench } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-slate-50 py-20 px-4">
      <div className="max-w-xl w-full text-center bg-white p-8 sm:p-12 rounded-3xl shadow-card-subtle border border-slate-100 space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-brand-orange/10 text-brand-orange flex items-center justify-center mx-auto text-2xl font-black font-heading">
          404
        </div>

        <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-brand-navy">
          Page Not Found
        </h1>

        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          The requested page could not be located or may have been relocated within our corporate estate. Please use the navigation below to return to active portals.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link to="/" className="btn-gradient text-xs py-3 px-6 w-full sm:w-auto">
            <Home className="w-4 h-4 mr-1.5" />
            <span>Return to Homepage</span>
          </Link>
          <Link to="/sectors" className="btn-outline text-xs py-3 px-6 w-full sm:w-auto">
            <span>Explore Sectors</span>
          </Link>
        </div>

        <div className="pt-6 border-t border-slate-100 text-xs text-slate-400">
          <span>Need direct assistance? </span>
          <Link to="/contact" className="text-brand-orange font-semibold hover:underline">
            Contact 24/7 Support Desk
          </Link>
        </div>
      </div>
    </div>
  );
}

