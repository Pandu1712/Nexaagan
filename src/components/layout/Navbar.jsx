import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import {
  ChevronDown,
  Search,
  Menu,
  X,
  ArrowRight,
  ArrowUpRight,
  Building2,
  Wrench,
  Droplets,
  Bug,
  Cloud,
  Bell,
  Sprout,
  Cpu,
  Leaf,
  Users,
  Newspaper,
  PhoneCall,
  Sparkles,
  ShieldCheck,
  FileText,
  HeartHandshake,
  GraduationCap,
  ClipboardCheck,
  Briefcase,
  Eye,
  Heart,
  Files,
  Trophy,
  Flag,
  MapPin,
  Compass,
  History,
  Layers,
  Globe,
  Award,
  Contact
} from 'lucide-react';
import TopBar from './TopBar';
import SearchModal from './SearchModal';
import { sectorsData } from '../../data/sectorsData';
import { servicesData } from '../../data/servicesData';

export default function Navbar({ showTopBar = true }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileSubmenu, setMobileSubmenu] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);

  const navRef = useRef(null);
  const [navHeight, setNavHeight] = useState(showTopBar ? 116 : 80);

  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Measure initial nav height for natural document spacer
  useEffect(() => {
    const measureHeight = () => {
      if (navRef.current) {
        setNavHeight(navRef.current.offsetHeight || (showTopBar ? 116 : 80));
      }
    };
    measureHeight();
    const timeout = setTimeout(measureHeight, 100);
    window.addEventListener('resize', measureHeight);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener('resize', measureHeight);
    };
  }, [showTopBar]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    setMobileSubmenu(null);
  }, [location.pathname]);

  const navItemClass = ({ isActive }) =>
    `inline-flex items-center text-sm font-semibold transition-colors duration-200 py-2 px-1 relative ${isActive
      ? 'text-brand-orange'
      : 'text-slate-800 hover:text-brand-orange'
    }`;

  return (
    <>
      {/* 100% BULLETPROOF FIXED NAVBAR: Stays pinned to the top on every browser and scroll position */}
      <div
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300"
      >
        {/* Secondary Top Contact Bar (Smoothly collapses on scroll to maximize viewport) */}
        {showTopBar && (
          <div
            className={`transition-all duration-300 overflow-hidden ${isScrolled ? 'max-h-0 opacity-0' : 'max-h-14 opacity-100'
              }`}
          >
            <TopBar />
          </div>
        )}

        {/* Main Navigation Header */}
        <header
          className={`w-full transition-all duration-300 ${isScrolled
              ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-200/80'
              : 'bg-white py-4 sm:py-5 border-b border-slate-100/80'
            }`}
        >
          <div className="w-full">
            <div className="container-custom flex items-center justify-between">
              {/* Logo */}
              <Link to="/" className="flex items-center space-x-3 group flex-shrink-0">
                <div className="w-10 h-10 rounded-xl bg-brand-navy flex items-center justify-center shadow-md shadow-brand-navy/10 group-hover:bg-gradient-to-br group-hover:from-brand-navy group-hover:to-brand-orange transition-all duration-300">
                  <span className="font-heading font-black text-xl text-white tracking-wider">N</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-heading font-black text-2xl tracking-tight text-brand-navy group-hover:text-brand-navy-light transition-colors">
                    NEXA<span className="text-brand-orange">AGEN</span>
                  </span>
                  <span className="text-[9px] uppercase tracking-widest text-slate-600 font-semibold -mt-1 hidden sm:block">
                    Enterprise Solutions
                  </span>
                </div>
              </Link>

              {/* Desktop Navigation (Responsive spacing for 1024px - 1920px) */}
              <nav className="hidden lg:flex items-center space-x-3 xl:space-x-7">
                {/* Our Sectors Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => setActiveDropdown('sectors')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    className={`flex items-center text-sm font-semibold py-2 transition-colors ${location.pathname.startsWith('/sectors')
                        ? 'text-brand-orange'
                        : 'text-slate-800 hover:text-brand-orange'
                      }`}
                  >
                    <span>Our Sectors</span>
                    <ChevronDown
                      className={`ml-1 w-4 h-4 transition-transform duration-200 ${activeDropdown === 'sectors' ? 'rotate-180 text-brand-orange' : 'text-slate-400'
                        }`}
                    />
                  </button>

                  {/* Dropdown Menu */}
                  {activeDropdown === 'sectors' && (
                    <div className="absolute top-full -left-20 w-[540px] pt-3 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                      <div className="bg-white rounded-2xl shadow-dropdown border border-slate-100 p-5 overflow-hidden">
                        <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
                          <div className="flex items-center space-x-2">
                            <Building2 className="w-4 h-4 text-brand-orange" />
                            <span className="text-xs font-bold uppercase tracking-wider text-brand-navy">
                              Industry & Sector Solutions
                            </span>
                          </div>
                          <Link
                            to="/sectors"
                            className="text-xs font-semibold text-brand-orange hover:text-red-700 flex items-center group/all"
                          >
                            <span>View All Sectors</span>
                            <ArrowRight className="w-3 h-3 ml-1 group-hover/all:translate-x-0.5 transition-transform" />
                          </Link>
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                          {sectorsData.map((sector) => (
                            <Link
                              key={sector.id}
                              to={`/sectors/${sector.id}`}
                              className="p-2.5 rounded-xl hover:bg-slate-50 transition-colors flex items-start space-x-2.5 group"
                            >
                              <div className="w-2 h-2 rounded-full bg-brand-orange mt-1.5 flex-shrink-0 group-hover:scale-125 transition-transform" />
                              <div>
                                <div className="text-sm font-semibold text-brand-navy group-hover:text-brand-orange transition-colors">
                                  {sector.shortTitle || sector.title}
                                </div>
                                <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                                  {sector.tagline}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>

                        {/* A-Z of Sector Locations Footer */}
                        <div className="pt-3 border-t border-slate-100 mt-3 flex items-center justify-between">
                          <Link
                            to="/sectors#a-z-locations"
                            onClick={() => setActiveDropdown(null)}
                            className="inline-flex items-center space-x-2.5 text-xs sm:text-[13px] font-semibold text-[#0066CC] hover:text-brand-orange transition-colors group"
                          >
                            <svg
                              className="w-4 h-4 flex-shrink-0 text-slate-700 group-hover:text-brand-orange transition-colors"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.8"
                            >
                              <circle cx="10" cy="10" r="7.5" stroke="currentColor" />
                              <path d="M15.5 15.5L20.5 20.5" stroke="currentColor" strokeLinecap="round" />
                              <text
                                x="10"
                                y="12.5"
                                textAnchor="middle"
                                fontSize="6"
                                fontWeight="bold"
                                fill="currentColor"
                                stroke="none"
                                fontFamily="system-ui, -apple-system, sans-serif"
                              >
                                A-Z
                              </text>
                            </svg>
                            <span>A-Z of Sector Locations</span>
                          </Link>
                          <span className="text-[11px] font-medium text-slate-400">
                            1,200+ Sites
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Our Services Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => setActiveDropdown('services')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    className={`flex items-center text-sm font-semibold py-2 transition-colors ${location.pathname.startsWith('/services')
                        ? 'text-brand-orange'
                        : 'text-slate-800 hover:text-brand-orange'
                      }`}
                  >
                    <span>Our Services</span>
                    <ChevronDown
                      className={`ml-1 w-4 h-4 transition-transform duration-200 ${activeDropdown === 'services' ? 'rotate-180 text-brand-orange' : 'text-slate-400'
                        }`}
                    />
                  </button>

                  {/* Services Dropdown Menu - Signature Mega-Menu */}
                  {activeDropdown === 'services' && (
                    <div className="absolute top-full -left-52 xl:-left-40 w-[780px] xl:w-[840px] pt-3 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                      <div className="bg-white rounded-3xl shadow-dropdown border border-slate-100 p-6 overflow-hidden">
                        <div className="flex items-stretch gap-6">
                          {/* Left Feature Card (with photo of executive & Our Services callout) */}
                          <Link
                            to="/services"
                            onClick={() => setActiveDropdown(null)}
                            className="w-[260px] flex-shrink-0 bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 flex flex-col justify-between group hover:border-slate-200 hover:shadow-sm transition-all"
                          >
                            <div className="relative aspect-[4/3] overflow-hidden">
                              <img
                                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=85"
                                alt="Our Services - NEXAAGEN Facilities Management"
                                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                            <div className="p-4 bg-white -mt-3 rounded-2xl relative shadow-sm border border-slate-100/80 mx-2 mb-2">
                              <div className="flex items-center justify-between">
                                <h4 className="text-base font-bold text-brand-navy group-hover:text-brand-orange transition-colors">
                                  Our Services
                                </h4>
                                <div className="w-7 h-7 rounded-full bg-brand-orange text-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                                  <ArrowUpRight className="w-4 h-4" />
                                </div>
                              </div>
                              <p className="text-xs text-slate-500 leading-snug mt-1.5">
                                Click here or on the links to find out more about our facilities services.
                              </p>
                            </div>
                          </Link>

                          {/* Right Area (Header + 2 Columns of Services) */}
                          <div className="flex-1 flex flex-col justify-center">
                            {/* Top Heading */}
                            <div className="mb-3">
                              <h4 className="text-lg font-heading font-extrabold text-brand-navy">
                                Best practice services for best customer outcomes
                              </h4>
                              <p className="text-xs text-slate-500 mt-1">
                                We're on a mission to make your people and places the best they can be.
                              </p>
                            </div>

                            <div className="h-px bg-slate-100 my-2" />

                            {/* 2-Column Services Grid */}
                            <div className="grid grid-cols-2 gap-x-4 gap-y-1 pt-1">
                              {/* Column 1 */}
                              <div className="space-y-1">
                                <Link
                                  to="/services/facilities-management"
                                  onClick={() => setActiveDropdown(null)}
                                  className="flex items-center space-x-2.5 p-2 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-brand-orange font-medium transition-all group"
                                >
                                  <Building2 className="w-4 h-4 flex-shrink-0 text-slate-500 group-hover:text-brand-orange transition-colors" />
                                  <span className="text-xs sm:text-sm font-semibold">Facilities Management</span>
                                </Link>

                                <Link
                                  to="/services/hard-services"
                                  onClick={() => setActiveDropdown(null)}
                                  className="flex items-center space-x-2.5 p-2 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-brand-orange font-medium transition-all group"
                                >
                                  <Wrench className="w-4 h-4 flex-shrink-0 text-slate-500 group-hover:text-brand-orange transition-colors" />
                                  <span className="text-xs sm:text-sm font-semibold">Hard Services</span>
                                </Link>

                                <Link
                                  to="/services/carbon-energy-management"
                                  onClick={() => setActiveDropdown(null)}
                                  className="flex items-center space-x-2.5 p-2 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-brand-orange font-medium transition-all group"
                                >
                                  <Cloud className="w-4 h-4 flex-shrink-0 text-slate-500 group-hover:text-brand-orange transition-colors" />
                                  <span className="text-xs sm:text-sm font-semibold">Carbon & Energy Management</span>
                                </Link>

                                <Link
                                  to="/services/landscaping"
                                  onClick={() => setActiveDropdown(null)}
                                  className="flex items-center space-x-2.5 p-2 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-brand-orange font-medium transition-all group"
                                >
                                  <Sprout className="w-4 h-4 flex-shrink-0 text-slate-500 group-hover:text-brand-orange transition-colors" />
                                  <span className="text-xs sm:text-sm font-semibold">Landscaping</span>
                                </Link>
                              </div>

                              {/* Column 2 */}
                              <div className="space-y-1">
                                <Link
                                  to="/services/cleaning"
                                  onClick={() => setActiveDropdown(null)}
                                  className="flex items-center space-x-2.5 p-2 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-brand-orange font-medium transition-all group"
                                >
                                  <Droplets className="w-4 h-4 flex-shrink-0 text-slate-500 group-hover:text-brand-orange transition-colors" />
                                  <span className="text-xs sm:text-sm font-semibold">Cleaning</span>
                                </Link>

                                <Link
                                  to="/services/pest-control"
                                  onClick={() => setActiveDropdown(null)}
                                  className="flex items-center space-x-2.5 p-2 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-brand-orange font-medium transition-all group"
                                >
                                  <Bug className="w-4 h-4 flex-shrink-0 text-slate-500 group-hover:text-brand-orange transition-colors" />
                                  <span className="text-xs sm:text-sm font-semibold">Pest Control</span>
                                </Link>

                                <Link
                                  to="/services/front-of-house-concierge"
                                  onClick={() => setActiveDropdown(null)}
                                  className="flex items-center space-x-2.5 p-2 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-brand-orange font-medium transition-all group"
                                >
                                  <Bell className="w-4 h-4 flex-shrink-0 text-slate-500 group-hover:text-brand-orange transition-colors" />
                                  <span className="text-xs sm:text-sm font-semibold">Front of House & Concierge</span>
                                </Link>

                                <Link
                                  to="/a-z-of-spaces-and-places"
                                  onClick={() => setActiveDropdown(null)}
                                  className="flex items-center space-x-2.5 p-2 rounded-xl hover:bg-orange-50/70 text-brand-orange font-semibold transition-all group"
                                >
                                  <svg
                                    className="w-4 h-4 flex-shrink-0 text-brand-orange"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                  >
                                    <circle cx="10" cy="10" r="7.5" stroke="currentColor" />
                                    <path d="M15.5 15.5L20.5 20.5" stroke="currentColor" strokeLinecap="round" />
                                    <text
                                      x="10"
                                      y="12.5"
                                      textAnchor="middle"
                                      fontSize="6"
                                      fontWeight="bold"
                                      fill="currentColor"
                                      stroke="none"
                                      fontFamily="system-ui, -apple-system, sans-serif"
                                    >
                                      A-Z
                                    </text>
                                  </svg>
                                  <span className="text-xs sm:text-sm">A-Z of Places We Service</span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Technology */}
                <NavLink to="/technology" className={navItemClass}>
                  <span>Technology</span>
                </NavLink>

                {/* ESG Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => setActiveDropdown('esg')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <NavLink
                    to="/esg"
                    className={`flex items-center text-sm font-semibold py-2 transition-colors ${location.pathname === '/esg'
                        ? 'text-brand-orange'
                        : 'text-slate-800 hover:text-brand-orange'
                      }`}
                  >
                    <span>ESG</span>
                    <ChevronDown
                      className={`ml-1 w-4 h-4 transition-transform duration-200 ${activeDropdown === 'esg' ? 'rotate-180 text-brand-orange' : 'text-slate-400'
                        }`}
                    />
                  </NavLink>

                  {activeDropdown === 'esg' && (
                    <div className="absolute top-full -left-72 xl:-left-64 w-[780px] xl:w-[840px] pt-3 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                      <div className="bg-white rounded-3xl shadow-dropdown border border-slate-100 p-6 overflow-hidden">
                        <div className="flex items-stretch gap-6">
                          {/* Left Feature Card (Matching Screenshot) */}
                          <Link
                            to="/esg"
                            onClick={() => setActiveDropdown(null)}
                            className="w-[260px] flex-shrink-0 bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 flex flex-col justify-between group hover:border-slate-200 hover:shadow-sm transition-all"
                          >
                            <div className="relative aspect-[4/3] overflow-hidden">
                              <img
                                src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80"
                                alt="ESG - NEXAAGEN Environmental, Social and Governance"
                                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                            <div className="p-4 bg-white -mt-3 rounded-2xl relative shadow-sm border border-slate-100/80 mx-2 mb-2">
                              <div className="flex items-center justify-between">
                                <h4 className="text-base font-bold text-brand-navy group-hover:text-brand-orange transition-colors">
                                  ESG
                                </h4>
                                <div className="w-7 h-7 rounded-full bg-[#D8232A] text-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                                  <ArrowUpRight className="w-4 h-4" />
                                </div>
                              </div>
                              <p className="text-xs text-slate-500 leading-snug mt-1.5">
                                Environmental, Social and Governance (ESG) targets and initiatives align to our vision and mission.
                              </p>
                            </div>
                          </Link>

                          {/* Right Area (Header + 2 Columns of 12 Links) */}
                          <div className="flex-1 flex flex-col justify-center">
                            {/* Top Heading */}
                            <div className="mb-3">
                              <h4 className="text-lg font-heading font-extrabold text-brand-navy">
                                Doing the right things in the right way - the NEXAAGEN way
                              </h4>
                              <p className="text-xs text-slate-500 mt-1">
                                Our aim is to make a meaningful and lasting impact for people, planet and purpose.
                              </p>
                            </div>

                            <div className="h-px bg-slate-100 my-2" />

                            {/* 2-Column Links Grid */}
                            <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 pt-1">
                              {/* Column 1 */}
                              <div className="space-y-1">
                                <Link
                                  to="/qhse"
                                  onClick={() => setActiveDropdown(null)}
                                  className="flex items-center space-x-2.5 p-2 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-brand-orange font-medium transition-all group"
                                >
                                  <ShieldCheck className="w-4 h-4 flex-shrink-0 text-slate-500 group-hover:text-brand-orange transition-colors" />
                                  <span className="text-xs sm:text-[13px] font-semibold">QHSE</span>
                                </Link>

                                <Link
                                  to="/environmental"
                                  onClick={() => setActiveDropdown(null)}
                                  className="flex items-center space-x-2.5 p-2 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-brand-orange font-medium transition-all group"
                                >
                                  <Leaf className="w-4 h-4 flex-shrink-0 text-slate-500 group-hover:text-brand-orange transition-colors" />
                                  <span className="text-xs sm:text-[13px] font-semibold">Environmental</span>
                                </Link>

                                <Link
                                  to="/governance"
                                  onClick={() => setActiveDropdown(null)}
                                  className="flex items-center space-x-2.5 p-2 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-brand-orange font-medium transition-all group"
                                >
                                  <Building2 className="w-4 h-4 flex-shrink-0 text-slate-500 group-hover:text-brand-orange transition-colors" />
                                  <span className="text-xs sm:text-[13px] font-semibold">Governance</span>
                                </Link>

                                <Link
                                  to="/modern-slavery-act"
                                  onClick={() => setActiveDropdown(null)}
                                  className="flex items-center space-x-2.5 p-2 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-brand-orange font-medium transition-all group"
                                >
                                  <FileText className="w-4 h-4 flex-shrink-0 text-slate-500 group-hover:text-brand-orange transition-colors" />
                                  <span className="text-xs sm:text-[13px] font-semibold">Modern Slavery Statement</span>
                                </Link>

                                <Link
                                  to="/esg/diversity-equality-and-inclusion"
                                  onClick={() => setActiveDropdown(null)}
                                  className={`flex items-center space-x-2.5 p-2 rounded-xl hover:bg-slate-50 font-medium transition-all group ${
                                    location.pathname.startsWith('/esg/diversity') ? 'text-brand-orange bg-orange-50/50' : 'text-slate-700 hover:text-brand-orange'
                                  }`}
                                >
                                  <HeartHandshake className="w-4 h-4 flex-shrink-0 text-slate-500 group-hover:text-brand-orange transition-colors" />
                                  <span className="text-xs sm:text-[13px] font-semibold">Diversity, Equity and Inclusion</span>
                                </Link>

                                <Link
                                  to="/apprenticeships-funded-learning"
                                  onClick={() => setActiveDropdown(null)}
                                  className="flex items-center space-x-2.5 p-2 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-brand-orange font-medium transition-all group"
                                >
                                  <GraduationCap className="w-4 h-4 flex-shrink-0 text-slate-500 group-hover:text-brand-orange transition-colors" />
                                  <span className="text-xs sm:text-[13px] font-semibold">Apprenticeships & Funded Learning</span>
                                </Link>
                              </div>

                              {/* Column 2 */}
                              <div className="space-y-1">
                                <Link
                                  to="/code-of-conduct"
                                  onClick={() => setActiveDropdown(null)}
                                  className="flex items-center space-x-2.5 p-2 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-brand-orange font-medium transition-all group"
                                >
                                  <ClipboardCheck className="w-4 h-4 flex-shrink-0 text-slate-500 group-hover:text-brand-orange transition-colors" />
                                  <span className="text-xs sm:text-[13px] font-semibold">Code of Conduct</span>
                                </Link>

                                <Link
                                  to="/social"
                                  onClick={() => setActiveDropdown(null)}
                                  className="flex items-center space-x-2.5 p-2 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-brand-orange font-medium transition-all group"
                                >
                                  <Users className="w-4 h-4 flex-shrink-0 text-slate-500 group-hover:text-brand-orange transition-colors" />
                                  <span className="text-xs sm:text-[13px] font-semibold">Social</span>
                                </Link>

                                <Link
                                  to="/policies"
                                  onClick={() => setActiveDropdown(null)}
                                  className="flex items-center space-x-2.5 p-2 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-brand-orange font-medium transition-all group"
                                >
                                  <Files className="w-4 h-4 flex-shrink-0 text-slate-500 group-hover:text-brand-orange transition-colors" />
                                  <span className="text-xs sm:text-[13px] font-semibold">Policies Library</span>
                                </Link>

                                <Link
                                  to="/about/foundation"
                                  onClick={() => setActiveDropdown(null)}
                                  className={`flex items-center space-x-2.5 p-2 rounded-xl hover:bg-slate-50 font-medium transition-all group ${
                                    location.pathname.includes('foundation')
                                      ? 'text-brand-orange bg-orange-50/50'
                                      : 'text-slate-700 hover:text-brand-orange'
                                  }`}
                                >
                                  <Heart className="w-4 h-4 flex-shrink-0 text-slate-500 group-hover:text-brand-orange transition-colors" />
                                  <span className="text-xs sm:text-[13px] font-semibold">NEXAAGEN Foundation</span>
                                </Link>

                                <Link
                                  to="/people-into-work"
                                  onClick={() => setActiveDropdown(null)}
                                  className="flex items-center space-x-2.5 p-2 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-brand-orange font-medium transition-all group"
                                >
                                  <Briefcase className="w-4 h-4 flex-shrink-0 text-slate-500 group-hover:text-brand-orange transition-colors" />
                                  <span className="text-xs sm:text-[13px] font-semibold">People into Work</span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* About Us Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => setActiveDropdown('about')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <NavLink
                    to="/about"
                    className={`flex items-center text-sm font-semibold py-2 transition-colors ${location.pathname === '/about' || location.pathname === '/vision-mission' || location.pathname === '/our-colleagues' || location.pathname === '/our-frontline-colleagues' || location.pathname === '/leadership-teams' || location.pathname === '/leadership' || location.pathname === '/true-values' || location.pathname === '/values' || location.pathname === '/awards-recognition' || location.pathname === '/awards' || location.pathname === '/service-awards' || location.pathname === '/careers' || location.pathname === '/jobs' || location.pathname === '/india-office-locations' || location.pathname === '/office-locations' || location.pathname === '/history-and-heritage' || location.pathname === '/history' || location.pathname.startsWith('/about')
                        ? 'text-brand-orange'
                        : 'text-slate-800 hover:text-brand-orange'
                      }`}
                  >
                    <span>About Us</span>
                    <ChevronDown
                      className={`ml-1 w-4 h-4 transition-transform duration-200 ${activeDropdown === 'about' ? 'rotate-180 text-brand-orange' : 'text-slate-400'
                        }`}
                    />
                  </NavLink>

                  {activeDropdown === 'about' && (
                    <div className="absolute top-full -right-24 xl:-right-12 w-[790px] xl:w-[850px] pt-3 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                      <div className="bg-white rounded-3xl shadow-dropdown border border-slate-100 p-6 overflow-hidden">
                        <div className="flex items-stretch gap-6">
                          {/* Left Feature Card (Matching Screenshot) */}
                          <Link
                            to="/about"
                            onClick={() => setActiveDropdown(null)}
                            className="w-[260px] flex-shrink-0 bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 flex flex-col justify-between group hover:border-slate-200 hover:shadow-sm transition-all"
                          >
                            <div className="relative aspect-[4/3] overflow-hidden">
                              <img
                                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80"
                                alt="About Us - NEXAAGEN"
                                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                            <div className="p-4 bg-white -mt-3 rounded-2xl relative shadow-sm border border-slate-100/80 mx-2 mb-2">
                              <div className="flex items-center justify-between">
                                <h4 className="text-base font-bold text-brand-navy group-hover:text-brand-orange transition-colors">
                                  About Us
                                </h4>
                                <div className="w-7 h-7 rounded-full bg-[#D8232A] text-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                                  <ArrowUpRight className="w-4 h-4" />
                                </div>
                              </div>
                              <p className="text-xs text-slate-500 leading-snug mt-1.5">
                                Click here or on the links opposite to find out more about our ethos and approach.
                              </p>
                            </div>
                          </Link>

                          {/* Right Area (Header + 2 Columns of Links Matching Screenshot) */}
                          <div className="flex-1 flex flex-col justify-center">
                            {/* Top Heading */}
                            <div className="mb-2">
                              <h4 className="text-lg font-heading font-extrabold text-brand-navy">
                                We're a global facilities services business
                              </h4>
                              <p className="text-xs text-slate-500 mt-1">
                                Join our mission to make people and places the best they can be
                              </p>
                            </div>

                            <div className="h-px bg-slate-100 my-2" />

                            {/* 2-Column Links Grid */}
                            <div className="grid grid-cols-2 gap-x-4 gap-y-1 pt-1">
                              {/* Column 1 */}
                              <div className="space-y-0.5">
                                <Link
                                  to="/vision-mission"
                                  onClick={() => setActiveDropdown(null)}
                                  className="flex items-center space-x-2.5 p-2 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-brand-orange font-medium transition-all group"
                                >
                                  <Eye className="w-4 h-4 flex-shrink-0 text-slate-500 group-hover:text-brand-orange transition-colors" />
                                  <span className="text-xs sm:text-[13px] font-semibold">Vision & Mission</span>
                                </Link>

                                <Link
                                  to="/our-colleagues"
                                  onClick={() => setActiveDropdown(null)}
                                  className={`flex items-center space-x-2.5 p-2 rounded-xl hover:bg-slate-50 font-medium transition-all group ${
                                    location.pathname === '/our-colleagues' ? 'text-brand-orange bg-orange-50/50' : 'text-slate-700 hover:text-brand-orange'
                                  }`}
                                >
                                  <Users className="w-4 h-4 flex-shrink-0 text-slate-500 group-hover:text-brand-orange transition-colors" />
                                  <span className="text-xs sm:text-[13px] font-semibold">Our Colleagues</span>
                                </Link>

                                <Link
                                  to="/leadership-teams"
                                  onClick={() => setActiveDropdown(null)}
                                  className={`flex items-center space-x-2.5 p-2 rounded-xl hover:bg-slate-50 font-medium transition-all group ${
                                    location.pathname === '/leadership-teams' || location.pathname === '/leadership' ? 'text-brand-orange bg-orange-50/50' : 'text-slate-700 hover:text-brand-orange'
                                  }`}
                                >
                                  <Building2 className="w-4 h-4 flex-shrink-0 text-slate-500 group-hover:text-brand-orange transition-colors" />
                                  <span className="text-xs sm:text-[13px] font-semibold">Leadership Team</span>
                                </Link>

                                <Link
                                  to="/true-values"
                                  onClick={() => setActiveDropdown(null)}
                                  className={`flex items-center space-x-2.5 p-2 rounded-xl hover:bg-slate-50 font-medium transition-all group ${
                                    location.pathname === '/true-values' || location.pathname === '/values' ? 'text-brand-orange bg-orange-50/50' : 'text-slate-700 hover:text-brand-orange'
                                  }`}
                                >
                                  <Award className="w-4 h-4 flex-shrink-0 text-slate-500 group-hover:text-brand-orange transition-colors" />
                                  <span className="text-xs sm:text-[13px] font-semibold">TRUE Values</span>
                                </Link>

                                <Link
                                  to="/awards-recognition"
                                  onClick={() => setActiveDropdown(null)}
                                  className={`flex items-center space-x-2.5 p-2 rounded-xl hover:bg-slate-50 font-medium transition-all group ${
                                    location.pathname === '/awards-recognition' || location.pathname === '/awards' || location.pathname === '/service-awards' ? 'text-brand-orange bg-orange-50/50' : 'text-slate-700 hover:text-brand-orange'
                                  }`}
                                >
                                  <Trophy className="w-4 h-4 flex-shrink-0 text-slate-500 group-hover:text-brand-orange transition-colors" />
                                  <span className="text-xs sm:text-[13px] font-semibold">Awards & Recognition</span>
                                </Link>

                                <Link
                                  to="/careers"
                                  onClick={() => setActiveDropdown(null)}
                                  className={`flex items-center space-x-2.5 p-2 rounded-xl hover:bg-slate-50 font-medium transition-all group ${
                                    location.pathname === '/careers' || location.pathname === '/jobs' ? 'text-brand-orange bg-orange-50/50' : 'text-slate-700 hover:text-brand-orange'
                                  }`}
                                >
                                  <Flag className="w-4 h-4 flex-shrink-0 text-slate-500 group-hover:text-brand-orange transition-colors" />
                                  <span className="text-xs sm:text-[13px] font-semibold">Careers</span>
                                </Link>

                                <Link
                                  to="/india-office-locations"
                                  onClick={() => setActiveDropdown(null)}
                                  className={`flex items-center space-x-2.5 p-2 rounded-xl hover:bg-slate-50 font-medium transition-all group ${
                                    location.pathname === '/india-office-locations' || location.pathname === '/office-locations' ? 'text-brand-orange bg-orange-50/50' : 'text-slate-700 hover:text-brand-orange'
                                  }`}
                                >
                                  <MapPin className="w-4 h-4 flex-shrink-0 text-slate-500 group-hover:text-brand-orange transition-colors" />
                                  <span className="text-xs sm:text-[13px] font-semibold">NEXAAGEN India Office Locations</span>
                                </Link>

                                <Link
                                  to="/a-z-of-spaces-and-places"
                                  onClick={() => setActiveDropdown(null)}
                                  className="flex items-center space-x-2.5 p-2 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-brand-orange font-medium transition-all group"
                                >
                                  <Compass className="w-4 h-4 flex-shrink-0 text-slate-500 group-hover:text-brand-orange transition-colors" />
                                  <span className="text-xs sm:text-[13px] font-semibold">NEXAAGEN A-Z of Spaces and Places</span>
                                </Link>
                              </div>

                              {/* Column 2 */}
                              <div className="space-y-0.5">
                                <Link
                                  to="/history-and-heritage"
                                  onClick={() => setActiveDropdown(null)}
                                  className={`flex items-center space-x-2.5 p-2 rounded-xl hover:bg-slate-50 font-medium transition-all group ${
                                    location.pathname === '/history-and-heritage' || location.pathname === '/history' ? 'text-brand-orange bg-orange-50/50' : 'text-slate-700 hover:text-brand-orange'
                                  }`}
                                >
                                  <History className="w-4 h-4 flex-shrink-0 text-slate-500 group-hover:text-brand-orange transition-colors" />
                                  <span className="text-xs sm:text-[13px] font-semibold">History & Heritage</span>
                                </Link>

                                <Link
                                  to="/about/diversity-equality-and-inclusion"
                                  onClick={() => setActiveDropdown(null)}
                                  className={`flex items-center space-x-2.5 p-2 rounded-xl hover:bg-slate-50 font-medium transition-all group ${
                                    location.pathname.startsWith('/about/diversity') || (location.pathname.includes('diversity') && !location.pathname.startsWith('/esg'))
                                      ? 'text-brand-orange bg-orange-50/50'
                                      : 'text-slate-700 hover:text-brand-orange'
                                  }`}
                                >
                                  <HeartHandshake className="w-4 h-4 flex-shrink-0 text-slate-500 group-hover:text-brand-orange transition-colors" />
                                  <span className="text-xs sm:text-[13px] font-semibold">Diversity, Equity & Inclusion</span>
                                </Link>

                                <Link
                                  to="/about/esg"
                                  onClick={() => setActiveDropdown(null)}
                                  className={`flex items-center space-x-2.5 p-2 rounded-xl hover:bg-slate-50 font-medium transition-all group ${
                                    location.pathname === '/about/esg' ? 'text-brand-orange bg-orange-50/50' : 'text-slate-700 hover:text-brand-orange'
                                  }`}
                                >
                                  <Leaf className="w-4 h-4 flex-shrink-0 text-slate-500 group-hover:text-brand-orange transition-colors" />
                                  <span className="text-xs sm:text-[13px] font-semibold">ESG</span>
                                </Link>

                                <Link
                                  to="/about/our-brands"
                                  onClick={() => setActiveDropdown(null)}
                                  className={`flex items-center space-x-2.5 p-2 rounded-xl hover:bg-slate-50 font-medium transition-all group ${
                                    location.pathname.includes('our-brands') || location.pathname.includes('brands')
                                      ? 'text-brand-orange bg-orange-50/50'
                                      : 'text-slate-700 hover:text-brand-orange'
                                  }`}
                                >
                                  <Layers className="w-4 h-4 flex-shrink-0 text-slate-500 group-hover:text-brand-orange transition-colors" />
                                  <span className="text-xs sm:text-[13px] font-semibold">Our Brands</span>
                                </Link>

                                <Link
                                  to="/about/accreditations"
                                  onClick={() => setActiveDropdown(null)}
                                  className={`flex items-center space-x-2.5 p-2 rounded-xl hover:bg-slate-50 font-medium transition-all group ${
                                    location.pathname.includes('accreditations')
                                      ? 'text-brand-orange bg-orange-50/50'
                                      : 'text-slate-700 hover:text-brand-orange'
                                  }`}
                                >
                                  <ShieldCheck className="w-4 h-4 flex-shrink-0 text-slate-500 group-hover:text-brand-orange transition-colors" />
                                  <span className="text-xs sm:text-[13px] font-semibold">Accreditations & Certification</span>
                                </Link>

                                <Link
                                  to="/about/foundation"
                                  onClick={() => setActiveDropdown(null)}
                                  className={`flex items-center space-x-2.5 p-2 rounded-xl hover:bg-slate-50 font-medium transition-all group ${
                                    location.pathname.includes('foundation')
                                      ? 'text-brand-orange bg-orange-50/50'
                                      : 'text-slate-700 hover:text-brand-orange'
                                  }`}
                                >
                                  <Heart className="w-4 h-4 flex-shrink-0 text-slate-500 group-hover:text-brand-orange transition-colors" />
                                  <span className="text-xs sm:text-[13px] font-semibold">NEXAAGEN Foundation</span>
                                </Link>

                                <Link
                                  to="/about/global-locations"
                                  onClick={() => setActiveDropdown(null)}
                                  className={`flex items-center space-x-2.5 p-2 rounded-xl hover:bg-slate-50 font-medium transition-all group ${
                                    (location.pathname === '/about/global-locations' || location.pathname === '/global-locations' || location.pathname === '/locations' || location.pathname === '/about/locations')
                                      ? 'text-brand-orange bg-orange-50/50'
                                      : 'text-slate-700 hover:text-brand-orange'
                                  }`}
                                >
                                  <Globe className="w-4 h-4 flex-shrink-0 text-slate-500 group-hover:text-brand-orange transition-colors" />
                                  <span className="text-xs sm:text-[13px] font-semibold">Global Locations</span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* News & Media Dropdown (Matching Screenshot media_1794641935367_f743a08b.png) */}
                <div
                  className="relative"
                  onMouseEnter={() => setActiveDropdown('news')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === 'news' ? null : 'news')}
                    className={`flex items-center text-sm font-semibold py-1.5 px-3 rounded-xl transition-all duration-200 ${
                      activeDropdown === 'news'
                        ? 'bg-orange-50/90 text-brand-orange'
                        : location.pathname.startsWith('/news') || location.pathname.startsWith('/case-studies') || location.pathname.startsWith('/customer-stories')
                          ? 'text-brand-orange'
                          : 'text-slate-800 hover:text-brand-orange'
                    }`}
                  >
                    <span>News & Media</span>
                    <ChevronDown
                      className={`ml-1.5 w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === 'news' ? 'rotate-180 text-brand-orange' : 'text-slate-400'
                      }`}
                    />
                  </button>

                  {activeDropdown === 'news' && (
                    <div className="absolute top-full -right-2 sm:right-0 w-56 pt-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                      <div className="bg-white rounded-2xl shadow-[0_12px_36px_rgba(0,0,0,0.12)] border border-slate-100 p-2.5 space-y-1">
                        {/* 1. News */}
                        <Link
                          to="/news"
                          onClick={() => setActiveDropdown(null)}
                          className={`flex items-center space-x-3 px-3.5 py-2.5 rounded-xl transition-all duration-150 group ${
                            location.pathname === '/news' || (location.pathname.startsWith('/news') && !location.pathname.includes('case-studies'))
                              ? 'bg-orange-50/70 text-brand-orange font-semibold'
                              : 'text-slate-800 hover:bg-slate-50 hover:text-brand-orange font-medium'
                          }`}
                        >
                          <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-brand-orange group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                          <span className="text-sm">News</span>
                        </Link>

                        {/* 2. Case Studies */}
                        <Link
                          to="/case-studies"
                          onClick={() => setActiveDropdown(null)}
                          className={`flex items-center space-x-3 px-3.5 py-2.5 rounded-xl transition-all duration-150 group ${
                            location.pathname.startsWith('/case-studies') || location.pathname.startsWith('/customer-stories')
                              ? 'bg-orange-50/70 text-brand-orange font-semibold'
                              : 'text-slate-800 hover:bg-slate-50 hover:text-brand-orange font-medium'
                          }`}
                        >
                          <Contact className="w-4 h-4 text-slate-500 group-hover:text-brand-orange transition-colors flex-shrink-0" />
                          <span className="text-sm">Case Studies</span>
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </nav>

              {/* Desktop Right Actions: Search & Contact CTA */}
              <div className="hidden lg:flex items-center space-x-2 xl:space-x-4">
                {/* Search Trigger */}
                <button
                  onClick={() => setSearchOpen(true)}
                  className="p-2 xl:p-2.5 text-slate-600 hover:text-brand-navy hover:bg-slate-100 rounded-xl transition-colors"
                  title="Search website"
                  aria-label="Search"
                >
                  <Search className="w-5 h-5" />
                </button>

                {/* Contact Us CTA Button (Orange-to-red gradient) */}
                <Link
                  to="/contact"
                  className="btn-gradient text-xs xl:text-sm py-2 xl:py-2.5 px-3.5 xl:px-5 shadow-sm hover:shadow-brand-orange/20 whitespace-nowrap"
                >
                  <span>Contact Us</span>
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Link>
              </div>

              {/* Mobile Controls (Search & Hamburger) */}
              <div className="flex lg:hidden items-center space-x-2">
                <button
                  onClick={() => setSearchOpen(true)}
                  className="p-2 text-slate-600 hover:text-brand-navy rounded-lg"
                  aria-label="Search"
                >
                  <Search className="w-5 h-5" />
                </button>

                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="p-2 text-brand-navy hover:text-brand-orange rounded-lg focus:outline-none"
                  aria-label="Toggle mobile menu"
                >
                  {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Slide-down Drawer */}
          {mobileMenuOpen && (
            <div className="lg:hidden bg-white border-b border-slate-200 shadow-xl max-h-[85vh] overflow-y-auto animate-in slide-in-from-top duration-300">
              <div className="p-4 space-y-2 divide-y divide-slate-100">
                <div className="space-y-1 pb-3">
                  <Link
                    to="/"
                    className="block px-3 py-2.5 text-base font-semibold text-brand-navy hover:text-brand-orange rounded-xl hover:bg-slate-50"
                  >
                    Home
                  </Link>

                  {/* Mobile Sectors Accordion */}
                  <div>
                    <button
                      onClick={() => setMobileSubmenu(mobileSubmenu === 'sectors' ? null : 'sectors')}
                      className="w-full flex items-center justify-between px-3 py-2.5 text-base font-semibold text-brand-navy hover:text-brand-orange rounded-xl hover:bg-slate-50"
                    >
                      <span>Our Sectors</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${mobileSubmenu === 'sectors' ? 'rotate-180 text-brand-orange' : 'text-slate-400'
                          }`}
                      />
                    </button>
                    {mobileSubmenu === 'sectors' && (
                      <div className="pl-4 pr-2 py-2 space-y-1 bg-slate-50 rounded-xl my-1">
                        <div className="flex items-center justify-between px-3 py-1.5 border-b border-slate-200/60 pb-2 mb-1">
                          <Link
                            to="/sectors"
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-sm font-semibold text-brand-orange"
                          >
                            All Sectors Overview →
                          </Link>
                        </div>
                        <Link
                          to="/sectors#a-z-locations"
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center space-x-2 px-3 py-2 text-sm font-semibold text-[#0066CC] hover:text-brand-orange"
                        >
                          <svg
                            className="w-4 h-4 flex-shrink-0 text-[#0066CC]"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                          >
                            <circle cx="10" cy="10" r="7.5" stroke="currentColor" />
                            <path d="M15.5 15.5L20.5 20.5" stroke="currentColor" strokeLinecap="round" />
                            <text
                              x="10"
                              y="12.5"
                              textAnchor="middle"
                              fontSize="6"
                              fontWeight="bold"
                              fill="currentColor"
                              stroke="none"
                              fontFamily="system-ui, -apple-system, sans-serif"
                            >
                              A-Z
                            </text>
                          </svg>
                          <span>A-Z of Sector Locations</span>
                        </Link>
                        {sectorsData.map((s) => (
                          <Link
                            key={s.id}
                            to={`/sectors/${s.id}`}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block px-3 py-2 text-sm text-slate-700 hover:text-brand-orange"
                          >
                            {s.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Mobile Services Accordion */}
                  <div>
                    <button
                      onClick={() => setMobileSubmenu(mobileSubmenu === 'services' ? null : 'services')}
                      className="w-full flex items-center justify-between px-3 py-2.5 text-base font-semibold text-brand-navy hover:text-brand-orange rounded-xl hover:bg-slate-50"
                    >
                      <span>Our Services</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${mobileSubmenu === 'services' ? 'rotate-180 text-brand-orange' : 'text-slate-400'
                          }`}
                      />
                    </button>
                    {mobileSubmenu === 'services' && (
                      <div className="pl-4 pr-2 py-2 space-y-1 bg-slate-50 rounded-xl my-1">
                        <div className="flex items-center justify-between px-3 py-1.5 border-b border-slate-200/60 pb-2 mb-1">
                          <Link
                            to="/services"
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-sm font-semibold text-brand-orange"
                          >
                            All Services Overview →
                          </Link>
                        </div>
                        <Link
                          to="/a-z-of-spaces-and-places"
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center space-x-2 px-3 py-2 text-sm font-semibold text-brand-orange hover:text-red-700"
                        >
                          <svg
                            className="w-4 h-4 flex-shrink-0 text-brand-orange"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                          >
                            <circle cx="10" cy="10" r="7.5" stroke="currentColor" />
                            <path d="M15.5 15.5L20.5 20.5" stroke="currentColor" strokeLinecap="round" />
                            <text
                              x="10"
                              y="12.5"
                              textAnchor="middle"
                              fontSize="6"
                              fontWeight="bold"
                              fill="currentColor"
                              stroke="none"
                              fontFamily="system-ui, -apple-system, sans-serif"
                            >
                              A-Z
                            </text>
                          </svg>
                          <span>A-Z of Places We Service</span>
                        </Link>
                        {servicesData.map((s) => (
                          <Link
                            key={s.id}
                            to={`/services/${s.id}`}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block px-3 py-2 text-sm text-slate-700 hover:text-brand-orange"
                          >
                            {s.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  <Link
                    to="/technology"
                    className="block px-3 py-2.5 text-base font-semibold text-brand-navy hover:text-brand-orange rounded-xl hover:bg-slate-50"
                  >
                    Technology
                  </Link>

                  {/* Mobile ESG Accordion */}
                  <div>
                    <button
                      onClick={() => setMobileSubmenu(mobileSubmenu === 'esg' ? null : 'esg')}
                      className="w-full flex items-center justify-between px-3 py-2.5 text-base font-semibold text-brand-navy hover:text-brand-orange rounded-xl hover:bg-slate-50"
                    >
                      <span>ESG</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${mobileSubmenu === 'esg' ? 'rotate-180 text-brand-orange' : 'text-slate-400'
                          }`}
                      />
                    </button>
                    {mobileSubmenu === 'esg' && (
                      <div className="pl-4 pr-2 py-2 space-y-1 bg-slate-50 rounded-xl my-1">
                        <div className="flex items-center justify-between px-3 py-1.5 border-b border-slate-200/60 pb-2 mb-1">
                          <Link
                            to="/esg"
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-sm font-semibold text-brand-orange"
                          >
                            ESG Overview & Commitments →
                          </Link>
                        </div>
                        <div className="grid grid-cols-1 gap-1 text-xs">
                          <Link to="/qhse" onClick={() => setMobileMenuOpen(false)} className="flex items-center space-x-2 px-3 py-1.5 text-slate-700 hover:text-brand-orange">
                            <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
                            <span>QHSE</span>
                          </Link>
                          <Link to="/environmental" onClick={() => setMobileMenuOpen(false)} className="flex items-center space-x-2 px-3 py-1.5 text-slate-700 hover:text-brand-orange">
                            <Leaf className="w-3.5 h-3.5 text-slate-400" />
                            <span>Environmental</span>
                          </Link>
                          <Link to="/governance" onClick={() => setMobileMenuOpen(false)} className="flex items-center space-x-2 px-3 py-1.5 text-slate-700 hover:text-brand-orange">
                            <Building2 className="w-3.5 h-3.5 text-slate-400" />
                            <span>Governance</span>
                          </Link>
                          <Link to="/modern-slavery-act" onClick={() => setMobileMenuOpen(false)} className="flex items-center space-x-2 px-3 py-1.5 text-slate-700 hover:text-brand-orange">
                            <FileText className="w-3.5 h-3.5 text-slate-400" />
                            <span>Modern Slavery Statement</span>
                          </Link>
                          <Link to="/esg/diversity-equality-and-inclusion" onClick={() => setMobileMenuOpen(false)} className="flex items-center space-x-2 px-3 py-1.5 text-slate-700 hover:text-brand-orange">
                            <HeartHandshake className="w-3.5 h-3.5 text-slate-400" />
                            <span>Diversity, Equity and Inclusion</span>
                          </Link>
                          <Link to="/apprenticeships-funded-learning" onClick={() => setMobileMenuOpen(false)} className="flex items-center space-x-2 px-3 py-1.5 text-slate-700 hover:text-brand-orange">
                            <GraduationCap className="w-3.5 h-3.5 text-slate-400" />
                            <span>Apprenticeships & Funded Learning</span>
                          </Link>
                          <Link to="/code-of-conduct" onClick={() => setMobileMenuOpen(false)} className="flex items-center space-x-2 px-3 py-1.5 text-slate-700 hover:text-brand-orange">
                            <ClipboardCheck className="w-3.5 h-3.5 text-slate-400" />
                            <span>Code of Conduct</span>
                          </Link>
                          <Link to="/social" onClick={() => setMobileMenuOpen(false)} className="flex items-center space-x-2 px-3 py-1.5 text-slate-700 hover:text-brand-orange">
                            <Users className="w-3.5 h-3.5 text-slate-400" />
                            <span>Social</span>
                          </Link>
                          <Link to="/policies" onClick={() => setMobileMenuOpen(false)} className="flex items-center space-x-2 px-3 py-1.5 text-slate-700 hover:text-brand-orange">
                            <Files className="w-3.5 h-3.5 text-slate-400" />
                            <span>Policies Library</span>
                          </Link>
                          <Link to="/foundation" onClick={() => setMobileMenuOpen(false)} className="flex items-center space-x-2 px-3 py-1.5 text-slate-700 hover:text-brand-orange">
                            <Heart className="w-3.5 h-3.5 text-slate-400" />
                            <span>NEXAAGEN Foundation</span>
                          </Link>
                          <Link to="/people-into-work" onClick={() => setMobileMenuOpen(false)} className="flex items-center space-x-2 px-3 py-1.5 text-slate-700 hover:text-brand-orange">
                            <Briefcase className="w-3.5 h-3.5 text-slate-400" />
                            <span>People into Work</span>
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* About Us Submenu */}
                  <div>
                    <button
                      onClick={() => setMobileSubmenu(mobileSubmenu === 'about' ? null : 'about')}
                      className="flex items-center justify-between w-full px-3 py-2.5 text-base font-semibold text-brand-navy hover:text-brand-orange rounded-xl hover:bg-slate-50"
                    >
                      <span>About Us</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${mobileSubmenu === 'about' ? 'rotate-180 text-brand-orange' : 'text-slate-400'
                          }`}
                      />
                    </button>

                    {mobileSubmenu === 'about' && (
                      <div className="pl-4 pr-2 py-2 space-y-1 bg-slate-50/50 rounded-xl mt-1 text-sm">
                        <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="flex items-center space-x-2 px-3 py-1.5 text-slate-700 hover:text-brand-orange font-medium">
                          <Building2 className="w-3.5 h-3.5 text-slate-400" />
                          <span>About Us Overview</span>
                        </Link>
                        <Link to="/vision-mission" onClick={() => setMobileMenuOpen(false)} className="flex items-center space-x-2 px-3 py-1.5 text-slate-700 hover:text-brand-orange font-medium">
                          <Eye className="w-3.5 h-3.5 text-slate-400" />
                          <span>Vision & Mission</span>
                        </Link>
                        <Link to="/our-colleagues" onClick={() => setMobileMenuOpen(false)} className="flex items-center space-x-2 px-3 py-1.5 text-slate-700 hover:text-brand-orange font-medium">
                          <Users className="w-3.5 h-3.5 text-slate-400" />
                          <span>Our Colleagues</span>
                        </Link>
                        <Link to="/leadership-teams" onClick={() => setMobileMenuOpen(false)} className="flex items-center space-x-2 px-3 py-1.5 text-slate-700 hover:text-brand-orange font-medium">
                          <Building2 className="w-3.5 h-3.5 text-slate-400" />
                          <span>Leadership Team</span>
                        </Link>
                        <Link to="/true-values" onClick={() => setMobileMenuOpen(false)} className="flex items-center space-x-2 px-3 py-1.5 text-slate-700 hover:text-brand-orange font-medium">
                          <Sparkles className="w-3.5 h-3.5 text-slate-400" />
                          <span>TRUE Values</span>
                        </Link>
                        <Link to="/awards-recognition" onClick={() => setMobileMenuOpen(false)} className="flex items-center space-x-2 px-3 py-1.5 text-slate-700 hover:text-brand-orange font-medium">
                          <Trophy className="w-3.5 h-3.5 text-slate-400" />
                          <span>Awards & Recognition</span>
                        </Link>
                        <Link to="/careers" onClick={() => setMobileMenuOpen(false)} className="flex items-center space-x-2 px-3 py-1.5 text-slate-700 hover:text-brand-orange font-medium">
                          <Flag className="w-3.5 h-3.5 text-slate-400" />
                          <span>Careers</span>
                        </Link>
                        <Link to="/history-and-heritage" onClick={() => setMobileMenuOpen(false)} className="flex items-center space-x-2 px-3 py-1.5 text-slate-700 hover:text-brand-orange font-medium">
                          <History className="w-3.5 h-3.5 text-slate-400" />
                          <span>History & Heritage</span>
                        </Link>
                        <Link to="/about/diversity-equality-and-inclusion" onClick={() => setMobileMenuOpen(false)} className="flex items-center space-x-2 px-3 py-1.5 text-slate-700 hover:text-brand-orange font-medium">
                          <HeartHandshake className="w-3.5 h-3.5 text-slate-400" />
                          <span>Diversity, Equity & Inclusion</span>
                        </Link>
                        <Link to="/about/esg" onClick={() => setMobileMenuOpen(false)} className="flex items-center space-x-2 px-3 py-1.5 text-slate-700 hover:text-brand-orange font-medium">
                          <Leaf className="w-3.5 h-3.5 text-slate-400" />
                          <span>ESG</span>
                        </Link>
                        <Link to="/about/our-brands" onClick={() => setMobileMenuOpen(false)} className="flex items-center space-x-2 px-3 py-1.5 text-slate-700 hover:text-brand-orange font-medium">
                          <Layers className="w-3.5 h-3.5 text-slate-400" />
                          <span>Our Brands</span>
                        </Link>
                        <Link to="/about/accreditations" onClick={() => setMobileMenuOpen(false)} className="flex items-center space-x-2 px-3 py-1.5 text-slate-700 hover:text-brand-orange font-medium">
                          <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
                          <span>Accreditations & Certification</span>
                        </Link>
                        <Link to="/about/foundation" onClick={() => setMobileMenuOpen(false)} className="flex items-center space-x-2 px-3 py-1.5 text-slate-700 hover:text-brand-orange font-medium">
                          <Heart className="w-3.5 h-3.5 text-slate-400" />
                          <span>NEXAAGEN Foundation</span>
                        </Link>
                        <Link to="/about/global-locations" onClick={() => setMobileMenuOpen(false)} className="flex items-center space-x-2 px-3 py-1.5 text-slate-700 hover:text-brand-orange font-medium">
                          <Globe className="w-3.5 h-3.5 text-slate-400" />
                          <span>Global Locations</span>
                        </Link>
                        <Link to="/india-office-locations" onClick={() => setMobileMenuOpen(false)} className="flex items-center space-x-2 px-3 py-1.5 text-slate-700 hover:text-brand-orange font-medium">
                          <MapPin className="w-3.5 h-3.5 text-slate-400" />
                          <span>NEXAAGEN India Office Locations</span>
                        </Link>
                        <Link to="/a-z-of-spaces-and-places" onClick={() => setMobileMenuOpen(false)} className="flex items-center space-x-2 px-3 py-1.5 text-slate-700 hover:text-brand-orange font-medium">
                          <Compass className="w-3.5 h-3.5 text-slate-400" />
                          <span>NEXAAGEN A-Z of Spaces and Places</span>
                        </Link>
                      </div>
                    )}
                  </div>

                  {/* Mobile News & Media Submenu */}
                  <div>
                    <button
                      onClick={() => setMobileSubmenu(mobileSubmenu === 'news' ? null : 'news')}
                      className="flex items-center justify-between w-full px-3 py-2.5 text-base font-semibold text-brand-navy hover:text-brand-orange rounded-xl hover:bg-slate-50"
                    >
                      <span>News & Media</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          mobileSubmenu === 'news' ? 'rotate-180 text-brand-orange' : 'text-slate-400'
                        }`}
                      />
                    </button>

                    {mobileSubmenu === 'news' && (
                      <div className="pl-4 pr-2 py-2 space-y-1 bg-slate-50/50 rounded-xl mt-1 text-sm">
                        <Link
                          to="/news"
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center space-x-2.5 px-3 py-2 text-slate-700 hover:text-brand-orange font-medium"
                        >
                          <ArrowRight className="w-4 h-4 text-slate-400" />
                          <span>News</span>
                        </Link>
                        <Link
                          to="/case-studies"
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center space-x-2.5 px-3 py-2 text-slate-700 hover:text-brand-orange font-medium"
                        >
                          <Contact className="w-4 h-4 text-slate-400" />
                          <span>Case Studies</span>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>

                {/* Mobile CTA */}
                <div className="pt-4 pb-2 space-y-3">
                  <Link
                    to="/contact"
                    className="btn-gradient w-full py-3 text-center text-sm"
                  >
                    Connect With Our Team
                  </Link>
                  <div className="text-center text-xs text-slate-500">
                    <span>24/7 Operations Helpdesk: </span>
                    <a href="tel:+442079460982" className="text-brand-navy font-semibold">
                      +44 (0) 20 7946 0982
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </header>

        {/* Global Search Modal */}
        <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      </div>

      {/* Natural document spacer so page content does not jump or hide under the fixed navbar */}
      <div
        className="w-full shrink-0"
        style={{ height: `${navHeight}px` }}
        aria-hidden="true"
      />
    </>
  );
}

