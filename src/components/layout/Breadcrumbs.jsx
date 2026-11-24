import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumbs({ items = [] }) {
  return (
    <nav className="bg-transparent border-b border-slate-200/50 py-1 text-xs text-slate-500">
      <div className="container-custom flex flex-wrap items-center gap-1.5 sm:gap-2">
        <Link
          to="/"
          className="hover:text-brand-orange flex items-center transition-colors"
          title="Home"
        >
          <Home className="w-3.5 h-3.5 mr-1" />
          <span>Home</span>
        </Link>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <React.Fragment key={index}>
              <ChevronRight className="w-3 h-3 text-slate-400 flex-shrink-0" />
              {isLast || !item.link ? (
                <span className="font-semibold text-brand-navy truncate max-w-xs sm:max-w-md">
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.link}
                  className="hover:text-brand-orange transition-colors truncate"
                >
                  {item.label}
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </nav>
  );
}

