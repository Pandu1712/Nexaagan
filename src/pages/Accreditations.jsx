import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ArrowUpRight, 
  Search, 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  TrendingUp, 
  Clock, 
  Building2, 
  Globe2, 
  ChevronDown, 
  X,
  ExternalLink
} from 'lucide-react';
import Breadcrumbs from '../components/layout/Breadcrumbs';

export default function Accreditations() {
  const [selectedType, setSelectedType] = useState('Showing All');
  const [selectedService, setSelectedService] = useState('Showing All');
  const [selectedSector, setSelectedSector] = useState('Showing All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalItem, setActiveModalItem] = useState(null);

  const typeOptions = ['Showing All', 'Accreditation', 'Certification', 'Membership', 'Industry Partner'];
  const serviceOptions = ['Showing All', 'Cleaning', 'Security', 'Facilities Management', 'Hard Services & HVAC', 'Catering', 'Pest Control'];
  const sectorOptions = ['Showing All', 'Aviation', 'Healthcare', 'Commercial & Corporate', 'Education', 'Manufacturing & Industry', 'Retail'];

  // All 60+ verified accreditations, certifications, and industry memberships matching screenshots
  const allAccreditations = [
    {
      id: 'achilles-uvdb',
      name: 'Achilles UVDB',
      badgeSubtitle: 'AUDITED',
      category: 'Utilities & Supply Chain',
      type: 'Accreditation',
      service: 'Facilities Management',
      sector: 'Manufacturing & Industry',
      description: 'Achilles UVDB Category B2 verified supplier status for high-risk critical infrastructure and utility network management.',
      accentColor: '#D32F2F',
      renderLogo: () => (
        <div className="flex flex-col items-center justify-center text-center">
          <div className="border border-red-600 px-3 py-1 rounded bg-white">
            <span className="font-heading font-black text-xs text-red-600 tracking-wider">Achilles</span>
            <div className="bg-red-600 text-white text-[8px] font-bold px-1.5 py-0.5 mt-0.5">UVDB</div>
          </div>
          <span className="text-[9px] font-bold text-slate-500 mt-1 uppercase tracking-widest">AUDITED</span>
        </div>
      )
    },
    {
      id: 'ahcp',
      name: 'ahcp',
      badgeSubtitle: 'Healthcare Cleaning',
      category: 'Healthcare & Hygiene',
      type: 'Membership',
      service: 'Cleaning',
      sector: 'Healthcare',
      description: 'Association of Healthcare Cleaning Professionals corporate member, upholding national hospital cleaning standards.',
      accentColor: '#880E4F',
      renderLogo: () => (
        <div className="flex items-center space-x-1.5">
          <span className="font-heading font-black text-2xl text-[#880E4F] tracking-tighter lowercase">ahcp</span>
          <span className="text-[8px] text-slate-500 font-semibold leading-tight max-w-[80px]">Association of Healthcare Cleaning</span>
        </div>
      )
    },
    {
      id: 'altius',
      name: 'altius',
      badgeSubtitle: 'Vendor Compliance',
      category: 'Compliance & Safety',
      type: 'Accreditation',
      service: 'Facilities Management',
      sector: 'Commercial & Corporate',
      description: 'Altius Assured Vendor accreditation demonstrating audited supply chain compliance, financial stability, and health & safety excellence.',
      accentColor: '#00897B',
      renderLogo: () => (
        <div className="flex flex-col items-center">
          <div className="h-1.5 w-10 bg-gradient-to-r from-amber-400 via-rose-500 to-indigo-600 rounded-full mb-1" />
          <span className="font-heading font-bold text-2xl text-slate-800 tracking-tight lowercase">altius</span>
        </div>
      )
    },
    {
      id: 'axis-communications',
      name: 'AXIS Communications',
      badgeSubtitle: 'Solution Gold Partner',
      category: 'Smart Security & CCTV',
      type: 'Industry Partner',
      service: 'Security',
      sector: 'Commercial & Corporate',
      description: 'Gold certified solutions integrator for network video surveillance, thermal monitoring, and IP perimeter defense.',
      accentColor: '#F57C00',
      renderLogo: () => (
        <div className="text-center">
          <span className="font-heading font-black text-base tracking-widest text-slate-900">AXIS</span>
          <span className="text-[8px] block font-semibold text-slate-400 tracking-wider">COMMUNICATIONS</span>
          <div className="bg-slate-200 text-slate-700 text-[8px] font-bold px-2 py-0.5 mt-1 rounded uppercase tracking-wider">
            Solution Gold Partner
          </div>
        </div>
      )
    },
    {
      id: 'bafe-fire',
      name: 'BAFE Fire Safety',
      badgeSubtitle: 'Fire Safety Register',
      category: 'Life Safety & Compliance',
      type: 'Accreditation',
      service: 'Hard Services & HVAC',
      sector: 'Commercial & Corporate',
      description: 'BAFE scheme SP203-1 accredited for fire detection and fire alarm systems design, installation, commissioning, and maintenance.',
      accentColor: '#1A237E',
      renderLogo: () => (
        <div className="bg-[#1A237E] text-white p-2 rounded text-center">
          <div className="font-heading font-black text-xl tracking-wider leading-none">BAFE</div>
          <span className="text-[7px] font-bold block uppercase tracking-tighter text-red-400 mt-0.5">Fire Safety Register</span>
        </div>
      )
    },
    {
      id: 'bali',
      name: 'BALI Accredited',
      badgeSubtitle: 'Landscape Industries',
      category: 'Grounds & Landscaping',
      type: 'Accreditation',
      service: 'Facilities Management',
      sector: 'Commercial & Corporate',
      description: 'British Association of Landscape Industries fully accredited member for commercial grounds maintenance, biodiversity, and exterior estates.',
      accentColor: '#2E7D32',
      renderLogo: () => (
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded bg-emerald-700 text-white flex items-center justify-center font-bold text-xs">🌿</div>
          <div>
            <span className="text-[10px] font-extrabold text-emerald-800 block leading-tight">BALI</span>
            <span className="text-[7px] font-semibold text-slate-500 uppercase">Landscape Accredited</span>
          </div>
        </div>
      )
    },
    {
      id: 'besa',
      name: 'BESA',
      badgeSubtitle: 'Building Engineering',
      category: 'Technical Engineering',
      type: 'Membership',
      service: 'Hard Services & HVAC',
      sector: 'Commercial & Corporate',
      description: 'Building Engineering Services Association technical member ensuring ventilation hygiene and MEP engineering standards.',
      accentColor: '#303F9F',
      renderLogo: () => (
        <div className="bg-[#1A237E] text-white px-3 py-2 rounded-lg text-center">
          <span className="font-heading font-black text-lg tracking-tight block">BESA</span>
          <span className="text-[6px] uppercase tracking-tighter text-slate-300 block">Building Engineering Services</span>
        </div>
      )
    },
    {
      id: 'bics',
      name: 'BICSc',
      badgeSubtitle: 'Cleaning Science Institute',
      category: 'Cleaning Standards',
      type: 'Accreditation',
      service: 'Cleaning',
      sector: 'Commercial & Corporate',
      description: 'Corporate accredited member and approved training centre for The British Institute of Cleaning Science (BICSc).',
      accentColor: '#0277BD',
      renderLogo: () => (
        <div className="flex items-center space-x-1.5">
          <div className="w-7 h-7 rounded-full bg-sky-600 text-white flex items-center justify-center font-black text-xs">B</div>
          <span className="font-heading font-black text-xl text-sky-800 tracking-tighter">BICSc</span>
        </div>
      )
    },
    {
      id: 'bpca',
      name: 'BPCA',
      badgeSubtitle: 'Pest Control Association',
      category: 'Public Health & Pest Control',
      type: 'Membership',
      service: 'Pest Control',
      sector: 'Healthcare',
      description: 'Full British Pest Control Association accredited company adhering to strict environmental, humane, and biocidal standards.',
      accentColor: '#00695C',
      renderLogo: () => (
        <div className="w-12 h-12 rounded-full border-2 border-emerald-700 flex flex-col items-center justify-center text-center p-1">
          <span className="font-heading font-black text-xs text-emerald-800 leading-none">BPCA</span>
          <span className="text-[5px] font-bold text-slate-500 uppercase leading-none mt-0.5">Pest Control</span>
        </div>
      )
    },
    {
      id: 'bsi',
      name: 'bsi.',
      badgeSubtitle: 'British Standards Institution',
      category: 'Quality & Governance',
      type: 'Certification',
      service: 'Facilities Management',
      sector: 'Commercial & Corporate',
      description: 'British Standards Institution certified partner for international management standards and regular third-party audits.',
      accentColor: '#000000',
      renderLogo: () => (
        <div className="flex items-baseline space-x-0.5">
          <span className="font-heading font-black text-3xl text-slate-900 tracking-tighter lowercase">bsi</span>
          <div className="w-2 h-2 rounded-full bg-red-600 ml-0.5" />
        </div>
      )
    },
    {
      id: 'bsia',
      name: 'bsia',
      badgeSubtitle: 'Security Industry Association',
      category: 'Security Standards',
      type: 'Membership',
      service: 'Security',
      sector: 'Aviation',
      description: 'British Security Industry Association member for manned guarding, CCTV control, event protection, and cash-in-transit.',
      accentColor: '#B71C1C',
      renderLogo: () => (
        <div className="flex items-center space-x-1.5">
          <div className="w-5 h-5 rounded-full border border-red-600 flex items-center justify-center">
            <div className="w-2.5 h-2.5 rounded-full bg-red-600" />
          </div>
          <span className="font-heading font-black text-2xl text-slate-800 tracking-tight lowercase">bsia</span>
        </div>
      )
    },
    {
      id: 'bsria',
      name: 'BSRIA',
      badgeSubtitle: 'Building Services Research',
      category: 'HVAC & Commissioning',
      type: 'Membership',
      service: 'Hard Services & HVAC',
      sector: 'Commercial & Corporate',
      description: 'Member of Building Services Research and Information Association for building testing, thermal comfort, and energy auditing.',
      accentColor: '#0288D1',
      renderLogo: () => (
        <div className="text-center">
          <span className="font-heading font-black text-xl italic text-[#0277BD] tracking-wider">BSRIA</span>
        </div>
      )
    },
    {
      id: 'cisco-premier',
      name: 'CISCO',
      badgeSubtitle: 'Network Systems Partner',
      category: 'Technology & Smart Building',
      type: 'Industry Partner',
      service: 'Hard Services & HVAC',
      sector: 'Commercial & Corporate',
      description: 'Certified CISCO infrastructure provider for IoT facility sensors, smart BMS networking, and secure enterprise data transport.',
      accentColor: '#009688',
      renderLogo: () => (
        <div className="text-center">
          <div className="flex items-end justify-center space-x-0.5 h-4 mb-1 text-sky-600">
            <span className="w-0.5 h-1 bg-current" />
            <span className="w-0.5 h-2 bg-current" />
            <span className="w-0.5 h-3 bg-current" />
            <span className="w-0.5 h-4 bg-current" />
            <span className="w-0.5 h-3 bg-current" />
            <span className="w-0.5 h-2 bg-current" />
            <span className="w-0.5 h-1 bg-current" />
          </div>
          <span className="font-heading font-black text-base tracking-widest text-[#006699]">CISCO</span>
        </div>
      )
    },
    {
      id: 'city-of-london-police',
      name: 'City of London Crime Prevention',
      badgeSubtitle: 'Crime Prevention Association',
      category: 'Security & Intelligence',
      type: 'Membership',
      service: 'Security',
      sector: 'Commercial & Corporate',
      description: 'City of London Crime Prevention Association corporate partner for counter-terrorism resilience and financial district safety.',
      accentColor: '#C2185B',
      renderLogo: () => (
        <div className="text-center">
          <div className="w-8 h-8 mx-auto bg-red-700 text-white rounded flex items-center justify-center font-bold text-xs mb-1">🏛️</div>
          <span className="text-[7px] font-bold text-slate-700 block uppercase leading-tight">City of London Crime Prevention</span>
        </div>
      )
    },
    {
      id: 'commscope',
      name: 'COMMSCOPE',
      badgeSubtitle: 'Structured Cabling',
      category: 'Data & Telecommunications',
      type: 'Industry Partner',
      service: 'Hard Services & HVAC',
      sector: 'Commercial & Corporate',
      description: 'Authorised systems partner for enterprise fiber-optics, Cat6A structured cabling, and smart building communication backbones.',
      accentColor: '#263238',
      renderLogo: () => (
        <span className="font-heading font-black text-sm tracking-wider text-slate-900 uppercase">COMMSCOPE®</span>
      )
    },
    {
      id: 'connectix',
      name: 'Connectix Cabling Systems',
      badgeSubtitle: 'Approved Installer',
      category: 'Data & Telecommunications',
      type: 'Industry Partner',
      service: 'Hard Services & HVAC',
      sector: 'Commercial & Corporate',
      description: 'Certified installer offering 25-year manufacturer system warranties on copper and optical fiber structured cabling.',
      accentColor: '#3949AB',
      renderLogo: () => (
        <div className="flex items-center space-x-1.5">
          <span className="font-heading font-black text-sm text-indigo-900">Connectix</span>
          <span className="text-[7px] text-slate-400 font-bold uppercase">Cabling Systems</span>
        </div>
      )
    },
    {
      id: 'constructionline',
      name: 'Constructionline',
      badgeSubtitle: 'Gold Member',
      category: 'Supply Chain Compliance',
      type: 'Accreditation',
      service: 'Facilities Management',
      sector: 'Commercial & Corporate',
      description: 'Constructionline Gold status verifying PAS 91 and common assessment standard governance across environmental, health, and labor standards.',
      accentColor: '#00838F',
      renderLogo: () => (
        <div className="flex items-center space-x-1.5">
          <div className="w-5 h-7 border-l-2 border-r-2 border-t-2 border-cyan-700" />
          <span className="font-heading font-black text-xs text-slate-800">Constructionline</span>
        </div>
      )
    },
    {
      id: 'home-office',
      name: 'Home Office Approved',
      badgeSubtitle: 'Security Cleared',
      category: 'Government & Defense',
      type: 'Accreditation',
      service: 'Security',
      sector: 'Aviation',
      description: 'Approved and security vetted by the UK Home Office for airside aviation clearance, critical government facilities, and judicial sites.',
      accentColor: '#4A148C',
      renderLogo: () => (
        <div className="text-center">
          <span className="text-[9px] font-serif font-bold text-slate-800 block">👑 Home Office</span>
          <span className="text-[7px] text-slate-500 uppercase tracking-tight">Official Approved</span>
        </div>
      )
    },
    {
      id: 'dementia-friendly',
      name: 'Dementia Friendly',
      badgeSubtitle: 'Alzheimer’s Society Charter',
      category: 'Social Inclusion',
      type: 'Accreditation',
      service: 'Facilities Management',
      sector: 'Healthcare',
      description: 'All public-facing frontline personnel certified under Alzheimer’s Society dementia-friendly awareness programs.',
      accentColor: '#1E88E5',
      renderLogo: () => (
        <div className="flex items-center space-x-1.5">
          <span className="text-blue-500 text-lg">🌼</span>
          <span className="text-[8px] font-bold text-blue-900 leading-tight">Dementia Friendly</span>
        </div>
      )
    },
    {
      id: 'disability-confident',
      name: 'Disability Confident Employer',
      badgeSubtitle: 'Level 2 Leader',
      category: 'Diversity & Inclusion',
      type: 'Accreditation',
      service: 'Facilities Management',
      sector: 'Commercial & Corporate',
      description: 'Government-backed certification ensuring barrier-free recruitment, workplace adaptations, and career opportunities for colleagues with disabilities.',
      accentColor: '#6A1B9A',
      renderLogo: () => (
        <div className="border border-purple-700 p-1 rounded text-center">
          <span className="text-[7px] font-black text-purple-900 uppercase block leading-tight">disability confident</span>
          <span className="text-[6px] font-bold bg-purple-700 text-white px-1 mt-0.5 inline-block uppercase">EMPLOYER</span>
        </div>
      )
    },
    {
      id: 'ecovadis-gold',
      name: 'EcoVadis',
      badgeSubtitle: 'Gold Sustainability Rating',
      category: 'ESG & Sustainability',
      type: 'Certification',
      service: 'Facilities Management',
      sector: 'Commercial & Corporate',
      description: 'Top 5% global sustainability rating across environmental practices, labour & human rights, ethics, and sustainable procurement.',
      accentColor: '#00796B',
      renderLogo: () => (
        <span className="font-heading font-black text-xl text-slate-800 lowercase tracking-tight">ecovadis</span>
      )
    },
    {
      id: 'armed-forces-covenant',
      name: 'Armed Forces Covenant',
      badgeSubtitle: 'Employer Recognition',
      category: 'Social Value',
      type: 'Membership',
      service: 'Facilities Management',
      sector: 'Commercial & Corporate',
      description: 'Gold award holder supporting military veterans, reservists, and service families transitioning into FM leadership careers.',
      accentColor: '#37474F',
      renderLogo: () => (
        <div className="bg-slate-700 text-white p-1 rounded text-center">
          <span className="text-[6px] font-bold uppercase block leading-tight">Proudly supporting</span>
          <span className="text-[8px] font-black uppercase text-amber-400">those who serve</span>
        </div>
      )
    },
    {
      id: 'excel-networking',
      name: 'Excel Networking',
      badgeSubtitle: 'Without Compromise',
      category: 'Data & Telecommunications',
      type: 'Industry Partner',
      service: 'Hard Services & HVAC',
      sector: 'Commercial & Corporate',
      description: 'Accredited cabling partner deploying ultra-reliable enterprise networking infrastructure and intelligent patch panels.',
      accentColor: '#1B5E20',
      renderLogo: () => (
        <div className="text-center">
          <span className="font-heading font-black text-lg text-slate-900 lowercase italic">excel</span>
          <span className="text-[6px] block text-slate-400 uppercase tracking-widest">without compromise</span>
        </div>
      )
    },
    {
      id: 'fia-fire',
      name: 'FIA Fire Industry',
      badgeSubtitle: 'Fire Industry Association',
      category: 'Life Safety',
      type: 'Membership',
      service: 'Hard Services & HVAC',
      sector: 'Commercial & Corporate',
      description: 'Member of the Fire Industry Association guaranteeing certified compliance with UK fire safety legislation and British Standards.',
      accentColor: '#D50000',
      renderLogo: () => (
        <div className="flex items-center space-x-1.5">
          <div className="w-7 h-7 rounded-full bg-red-600 text-white font-black flex items-center justify-center text-xs">F</div>
          <span className="font-heading font-black text-xl text-red-600">FIA</span>
        </div>
      )
    },
    {
      id: 'fortinet-silver',
      name: 'Fortinet',
      badgeSubtitle: 'Silver Partner',
      category: 'Cybersecurity & OT',
      type: 'Industry Partner',
      service: 'Security',
      sector: 'Commercial & Corporate',
      description: 'Silver certified partner deploying operational technology (OT) firewalls, smart CCTV encryption, and secure BMS microsegmentation.',
      accentColor: '#C62828',
      renderLogo: () => (
        <div className="text-center">
          <span className="font-heading font-black text-sm tracking-widest text-red-700 uppercase">FORTINET</span>
          <span className="text-[7px] text-slate-500 uppercase block font-semibold">SILVER PARTNER</span>
        </div>
      )
    },
    {
      id: 'fwc',
      name: 'FWC',
      badgeSubtitle: 'Federation of Window Cleaners',
      category: 'Specialist Cleaning',
      type: 'Membership',
      service: 'Cleaning',
      sector: 'Commercial & Corporate',
      description: 'Federation of Window Cleaners approved safety member for high-level water-fed pole and cradle cleaning operations.',
      accentColor: '#D32F2F',
      renderLogo: () => (
        <div className="w-11 h-11 rounded-full bg-red-600 text-white flex flex-col items-center justify-center font-black text-xs shadow-xs">
          <span>FWC</span>
        </div>
      )
    },
    {
      id: 'gas-safe',
      name: 'Gas Safe Register',
      badgeSubtitle: 'Official Gas Registration',
      category: 'Technical Engineering',
      type: 'Certification',
      service: 'Hard Services & HVAC',
      sector: 'Commercial & Corporate',
      description: 'Official gas registration in the UK for commercial boilers, heating systems, and commercial kitchen gas safety appliances.',
      accentColor: '#F57F17',
      renderLogo: () => (
        <div className="bg-amber-400 text-slate-900 px-2 py-1 rounded text-center font-heading font-black text-xs">
          <span>gas safe</span>
          <span className="text-[6px] block uppercase font-bold text-slate-800">REGISTER</span>
        </div>
      )
    },
    {
      id: 'highfield',
      name: 'Highfield Qualifications',
      badgeSubtitle: 'Approved Centre',
      category: 'Training & Development',
      type: 'Accreditation',
      service: 'Facilities Management',
      sector: 'Education',
      description: 'Awarding body approved centre delivering regulated qualifications in Food Safety, Health & Safety, and Security Guarding.',
      accentColor: '#1565C0',
      renderLogo: () => (
        <div className="text-center">
          <span className="font-heading font-black text-xs text-sky-800">Highfield</span>
          <span className="text-[6px] block text-purple-700 font-bold uppercase">Qualifications Approved</span>
        </div>
      )
    },
    {
      id: 'hp-business',
      name: 'HP Business Partner',
      badgeSubtitle: 'Hardware & Workplace IT',
      category: 'Workplace Technology',
      type: 'Industry Partner',
      service: 'Hard Services & HVAC',
      sector: 'Commercial & Corporate',
      description: 'Certified partner providing end-user compute devices, print services, and smart workplace meeting room technology.',
      accentColor: '#0096D6',
      renderLogo: () => (
        <div className="bg-[#0096D6] text-white px-2 py-1 rounded flex items-center space-x-1.5">
          <span className="font-bold text-sm">hp</span>
          <span className="text-[8px] font-semibold uppercase leading-tight">Business Partner</span>
        </div>
      )
    },
    {
      id: 'hse',
      name: 'HSE Compliance',
      badgeSubtitle: 'Health & Safety Executive',
      category: 'Health & Safety',
      type: 'Certification',
      service: 'Facilities Management',
      sector: 'Manufacturing & Industry',
      description: 'Rigorous statutory compliance with Health and Safety at Work Act 1974, COSHH, and RIDDOR regulatory reporting.',
      accentColor: '#880E4F',
      renderLogo: () => (
        <div className="border border-red-800 p-1 text-center bg-white">
          <span className="font-heading font-black text-lg text-red-900 tracking-wider">HSE</span>
        </div>
      )
    },
    {
      id: 'ico',
      name: 'ico.',
      badgeSubtitle: 'Data Protection Officer',
      category: 'Information Security & GDPR',
      type: 'Certification',
      service: 'Facilities Management',
      sector: 'Commercial & Corporate',
      description: 'Registered with the Information Commissioner’s Office upholding UK GDPR, strict visitor data protection, and privacy.',
      accentColor: '#0D47A1',
      renderLogo: () => (
        <div className="bg-[#0B1B3D] text-white px-3 py-1.5 rounded">
          <span className="font-heading font-black text-xl tracking-tight">ico.</span>
        </div>
      )
    },
    {
      id: 'ilm',
      name: 'ilm',
      badgeSubtitle: 'Leadership & Management',
      category: 'Leadership Development',
      type: 'Accreditation',
      service: 'Facilities Management',
      sector: 'Education',
      description: 'Institute of Leadership & Management approved centre offering professional management credentials to supervisors.',
      accentColor: '#455A64',
      renderLogo: () => (
        <div className="text-center">
          <span className="font-heading font-black text-2xl text-slate-800 tracking-tighter lowercase">ilm</span>
          <span className="text-[6px] block text-slate-400 uppercase font-semibold">Approved Centre</span>
        </div>
      )
    },
    {
      id: 'irata',
      name: 'IRATA International',
      badgeSubtitle: 'Industrial Rope Access',
      category: 'Specialist Access & Safety',
      type: 'Membership',
      service: 'Specialist Cleaning',
      sector: 'Commercial & Corporate',
      description: 'Full member of Industrial Rope Access Trade Association upholding 100% safety track records for high-rise facade access.',
      accentColor: '#1565C0',
      renderLogo: () => (
        <div className="w-12 h-12 rounded-full border border-blue-800 flex flex-col items-center justify-center p-1 text-center">
          <span className="font-heading font-black text-xs text-blue-900 leading-none">irata</span>
          <span className="text-[5px] font-bold text-slate-500 uppercase leading-none mt-0.5">International</span>
        </div>
      )
    },
    {
      id: 'iso-14001',
      name: 'ISO 14001',
      badgeSubtitle: 'Environmental Management',
      category: 'Environmental Standard',
      type: 'Certification',
      service: 'Facilities Management',
      sector: 'Commercial & Corporate',
      description: 'Certified ISO 14001 Environmental Management System across all operational branches and client client facility sites.',
      accentColor: '#2E7D32',
      renderLogo: () => (
        <div className="flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-full border-2 border-sky-600 flex flex-col items-center justify-center text-sky-800">
            <span className="text-[8px] font-bold uppercase">ISO</span>
            <span className="text-[9px] font-black">14001</span>
          </div>
        </div>
      )
    },
    {
      id: 'iso-45001',
      name: 'ISO 45001',
      badgeSubtitle: 'Occupational Health & Safety',
      category: 'Health & Safety Standard',
      type: 'Certification',
      service: 'Facilities Management',
      sector: 'Manufacturing & Industry',
      description: 'Certified ISO 45001 Occupational Health and Safety standard protecting over 130,000 global colleagues every shift.',
      accentColor: '#00695C',
      renderLogo: () => (
        <div className="flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-full border-2 border-sky-600 flex flex-col items-center justify-center text-sky-800">
            <span className="text-[8px] font-bold uppercase">ISO</span>
            <span className="text-[9px] font-black">45001</span>
          </div>
        </div>
      )
    },
    {
      id: 'iso-9001',
      name: 'ISO 9001',
      badgeSubtitle: 'Quality Management System',
      category: 'Quality Standard',
      type: 'Certification',
      service: 'Facilities Management',
      sector: 'Commercial & Corporate',
      description: 'Certified ISO 9001 Quality Management System ensuring audited procedures, KPI delivery, and client satisfaction.',
      accentColor: '#1565C0',
      renderLogo: () => (
        <div className="flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-full border-2 border-sky-600 flex flex-col items-center justify-center text-sky-800">
            <span className="text-[8px] font-bold uppercase">ISO</span>
            <span className="text-[9px] font-black">9001</span>
          </div>
        </div>
      )
    },
    {
      id: 'issa',
      name: 'ISSA Member',
      badgeSubtitle: 'Worldwide Cleaning Association',
      category: 'Cleaning Standards',
      type: 'Membership',
      service: 'Cleaning',
      sector: 'Healthcare',
      description: 'Member of the Worldwide Cleaning Industry Association adopting advanced robotic cleaning and CIMS benchmarking.',
      accentColor: '#0277BD',
      renderLogo: () => (
        <div className="bg-[#0277BD] text-white px-3 py-1.5 rounded text-center">
          <span className="font-heading font-black text-xl tracking-tight block">ISSA</span>
          <span className="text-[7px] font-bold uppercase tracking-widest text-slate-200">MEMBER</span>
        </div>
      )
    },
    {
      id: 'iwfm',
      name: 'iwfm',
      badgeSubtitle: 'Workplace & Facilities Management',
      category: 'Professional Body',
      type: 'Membership',
      service: 'Facilities Management',
      sector: 'Commercial & Corporate',
      description: 'Institute of Workplace and Facilities Management corporate member championing continuous professional development.',
      accentColor: '#00838F',
      renderLogo: () => (
        <span className="font-heading font-black text-2xl text-cyan-700 tracking-tight lowercase">iwfm</span>
      )
    },
    {
      id: 'jsarc',
      name: 'JSaRC',
      badgeSubtitle: 'Security & Resilience',
      category: 'National Security',
      type: 'Industry Partner',
      service: 'Security',
      sector: 'Aviation',
      description: 'Joint Security and Resilience Centre industry contributor for national infrastructure security and threat intelligence.',
      accentColor: '#1A237E',
      renderLogo: () => (
        <span className="font-heading font-black text-lg text-slate-800 tracking-tight">JSaRC</span>
      )
    },
    {
      id: 'lenel-s2',
      name: 'LENEL:S2',
      badgeSubtitle: 'Access Control Systems',
      category: 'Physical Security',
      type: 'Industry Partner',
      service: 'Security',
      sector: 'Commercial & Corporate',
      description: 'Certified systems integrator for Lenel OnGuard unified access control, biometric authorization, and identity management.',
      accentColor: '#0288D1',
      renderLogo: () => (
        <div className="flex items-center space-x-1">
          <div className="w-3 h-3 bg-blue-600 rotate-45" />
          <span className="font-heading font-black text-sm text-slate-900">LENEL:S2</span>
        </div>
      )
    },
    {
      id: 'safe-contractor',
      name: 'SafeContractor Approved',
      badgeSubtitle: 'SSIP Health & Safety',
      category: 'Contractor Safety',
      type: 'Accreditation',
      service: 'Facilities Management',
      sector: 'Commercial & Corporate',
      description: 'Alcumus SafeContractor premier accreditation for rigorous contractor health and safety competence.',
      accentColor: '#00695C',
      renderLogo: () => (
        <div className="w-12 h-12 rounded-full border-2 border-cyan-800 flex flex-col items-center justify-center text-center p-1">
          <span className="text-[7px] font-black text-cyan-900 uppercase">SafeContractor</span>
          <span className="text-[6px] font-bold text-slate-500 uppercase">APPROVED</span>
        </div>
      )
    },
    {
      id: 'sia-licensed',
      name: 'SIA Licensed',
      badgeSubtitle: 'Security Industry Authority',
      category: 'Statutory Security',
      type: 'Certification',
      service: 'Security',
      sector: 'Commercial & Corporate',
      description: 'Approved Contractor Scheme (ACS) certified under the Security Industry Authority with scores in the top 5% nationally.',
      accentColor: '#01579B',
      renderLogo: () => (
        <div className="bg-[#0277BD] text-white px-3 py-1 rounded text-center">
          <span className="font-heading font-black text-lg block">sia</span>
          <span className="text-[6px] uppercase font-bold tracking-widest">Licensed</span>
        </div>
      )
    },
    {
      id: 'slave-free-alliance',
      name: 'Slave-Free Alliance',
      badgeSubtitle: 'Ethical Supply Chains',
      category: 'Human Rights & ESG',
      type: 'Membership',
      service: 'Facilities Management',
      sector: 'Commercial & Corporate',
      description: 'Proactive member of Hope for Justice’s Slave-Free Alliance preventing modern slavery and worker exploitation across supply tiers.',
      accentColor: '#212121',
      renderLogo: () => (
        <div className="flex items-center space-x-1.5">
          <span className="font-serif text-2xl font-bold">S</span>
          <div className="text-[7px] uppercase font-bold text-slate-600 leading-tight">
            <span>SLAVE-FREE</span><br /><span>ALLIANCE</span>
          </div>
        </div>
      )
    },
    {
      id: 'wrap-facility',
      name: 'WRAP Certified Facility',
      badgeSubtitle: 'Responsible Production',
      category: 'Ethical Compliance',
      type: 'Certification',
      service: 'Facilities Management',
      sector: 'Manufacturing & Industry',
      description: 'Worldwide Responsible Accredited Production certified facility adhering to lawful, humane, and ethical workplace principles.',
      accentColor: '#00838F',
      renderLogo: () => (
        <div className="w-11 h-11 rounded-full border border-sky-600 flex flex-col items-center justify-center p-0.5 text-center">
          <span className="font-heading font-black text-xs text-sky-800">WRAP</span>
          <span className="text-[5px] uppercase font-semibold text-slate-500">Certified</span>
        </div>
      )
    }
  ];

  const newsArticles = [
    {
      id: 'aviation-services-sixty-years',
      title: 'Sixty Years of Global Aviation Services: One Standard,...',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
      author: 'NEXAAGEN Team',
      date: '24 Aug, 2026',
      link: '/news'
    },
    {
      id: 'data-centre-commissioning-60-days',
      title: "The 60 Days That Decide a Data Centre's Life: Why Pre-...",
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
      author: 'NEXAAGEN Team',
      date: '16 Jul, 2026',
      link: '/news'
    },
    {
      id: 'india-airport-terminal-fm',
      title: "Inside India's Airport Transformation: Why FM is...",
      image: 'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?auto=format&fit=crop&w=800&q=80',
      author: 'NEXAAGEN Team',
      date: '09 Jul, 2026',
      link: '/news'
    },
    {
      id: 'post-construction-cleaning-critical',
      title: 'Why Post-Construction Cleaning Is Critical for Data...',
      excerpt: 'Post-construction cleaning is a critical milestone before sensitive hardware arrives...',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
      author: 'NEXAAGEN Team',
      date: '06 Jul, 2026',
      link: '/news'
    }
  ];

  const filteredAccreditations = useMemo(() => {
    return allAccreditations.filter((item) => {
      const matchType = selectedType === 'Showing All' || item.type === selectedType;
      const matchService = selectedService === 'Showing All' || item.service === selectedService;
      const matchSector = selectedSector === 'Showing All' || item.sector === selectedSector;
      const matchSearch = searchQuery.trim() === '' || 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase());

      return matchType && matchService && matchSector && matchSearch;
    });
  }, [selectedType, selectedService, selectedSector, searchQuery]);

  return (
    <div className="w-full flex flex-col flex-1 bg-transparent text-slate-900 font-sans overflow-hidden">
      {/* BREADCRUMBS */}
      <Breadcrumbs
        items={[
          { label: 'About Us', link: '/about' },
          { label: 'Accreditations and Certification' }
        ]}
      />

      {/* SECTION 1: HERO BANNER (Reference Image 1) */}
      <section className="pt-4 pb-3 sm:pt-6 sm:pb-4 container-custom text-center">
        <div className="relative rounded-[28px] sm:rounded-[36px] bg-[#FAF9F6] border border-slate-200/60 p-6 sm:p-8 lg:p-10 overflow-hidden shadow-sm">
          {/* Subtle dot matrix pattern */}
          <div 
            className="absolute inset-0 opacity-20 pointer-events-none -z-0"
            style={{
              backgroundImage: 'radial-gradient(#FF5722 1.3px, transparent 1.3px)',
              backgroundSize: '24px 24px'
            }}
          />

          <div className="relative z-10 max-w-4xl mx-auto space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-brand-navy tracking-tight leading-tight">
              Accreditations and Certification
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-3xl mx-auto">
              As a business, striving to be the best is at the heart of everything we do. Across the world, our services are continually assessed against industry standards, ensuring we're delivering the highest quality possible to our customers.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: FILTER & SEARCH BAR (Reference Images 1 & 2) */}
      <section className="py-2 sm:py-3 container-custom">
        <div className="bg-[#FAF9F6] p-3.5 sm:p-4 rounded-2xl border border-slate-200/70 shadow-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
            {/* Type Selector */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Type
              </label>
              <div className="relative">
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full appearance-none bg-white border border-slate-300 rounded-xl px-4 py-2 text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#FF5722] cursor-pointer pr-10 shadow-xs"
                >
                  {typeOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Service Selector */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Service
              </label>
              <div className="relative">
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full appearance-none bg-white border border-slate-300 rounded-xl px-4 py-2 text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#FF5722] cursor-pointer pr-10 shadow-xs"
                >
                  {serviceOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Sector Selector */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Sector
              </label>
              <div className="relative">
                <select
                  value={selectedSector}
                  onChange={(e) => setSelectedSector(e.target.value)}
                  className="w-full appearance-none bg-white border border-slate-300 rounded-xl px-4 py-2 text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#FF5722] cursor-pointer pr-10 shadow-xs"
                >
                  {sectorOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Search Input with Search Button */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Search
              </label>
              <div className="flex items-center space-x-2">
                <div className="relative flex-1">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search accreditations..."
                    className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2 text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#FF5722] shadow-xs"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery('')}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>

                <button
                  type="button"
                  className="px-5 py-2 rounded-xl font-heading font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:shadow-md transition-all cursor-pointer flex-shrink-0"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: ACCREDITATION LOGOS DIRECTORY (Reference Images 2, 3, 4, 5, 6) */}
      <section className="py-3 sm:py-5 container-custom">
        <div className="space-y-6">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-500 px-1">
            <span>Showing {filteredAccreditations.length} accreditations and certifications</span>
            {(selectedType !== 'Showing All' || selectedService !== 'Showing All' || selectedSector !== 'Showing All' || searchQuery) && (
              <button
                type="button"
                onClick={() => {
                  setSelectedType('Showing All');
                  setSelectedService('Showing All');
                  setSelectedSector('Showing All');
                  setSearchQuery('');
                }}
                className="text-[#FF5722] hover:underline font-bold"
              >
                Clear all filters
              </button>
            )}
          </div>

          {/* 5-Column Grid on Desktop matching Reference Screenshots 2, 3, 4, 5, 6 */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5">
            {filteredAccreditations.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveModalItem(item)}
                className="group bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col items-center justify-center text-center aspect-[4/3] cursor-pointer relative overflow-hidden"
              >
                <div className="w-full h-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  {item.renderLogo ? item.renderLogo() : (
                    <div className="flex flex-col items-center">
                      <Award className="w-8 h-8 text-[#FF5722] mb-1" />
                      <span className="font-heading font-bold text-xs text-slate-800">{item.name}</span>
                    </div>
                  )}
                </div>

                <div className="absolute inset-0 bg-slate-900/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl flex items-center justify-center">
                  <span className="text-[10px] font-bold text-slate-700 bg-white/90 px-2 py-1 rounded shadow-xs">
                    View Details
                  </span>
                </div>
              </div>
            ))}
          </div>

          {filteredAccreditations.length === 0 && (
            <div className="text-center py-8 sm:py-10 bg-slate-50 rounded-2xl border border-slate-200">
              <ShieldCheck className="w-10 h-10 text-slate-400 mx-auto mb-2" />
              <h3 className="text-lg font-heading font-bold text-slate-800">No accreditations found</h3>
              <p className="text-sm text-slate-500 max-w-md mx-auto mt-1">
                Try adjusting your search criteria or resetting your filters.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedType('Showing All');
                  setSelectedService('Showing All');
                  setSelectedSector('Showing All');
                  setSearchQuery('');
                }}
                className="mt-4 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#FF5722] to-[#D8232A]"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* SECTION 4: NEXAAGEN GROUP IN NUMBERS (Reference Images 6 & 7) */}
      <section className="py-4 sm:py-6 container-custom border-t border-slate-100">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: 2x2 Grid of 4 Stat Cards */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-3 sm:gap-5">
              {/* Card 1: Revenue / Growth */}
              <div className="p-5 rounded-3xl bg-[#FAF9F6] border border-slate-200/70 shadow-xs space-y-1.5">
                <div className="w-8 h-8 rounded-full bg-orange-100/80 text-[#FF5722] flex items-center justify-center">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div className="text-2xl sm:text-3xl font-heading font-black text-slate-900 tracking-tight">
                  £2bn+
                </div>
                <p className="text-xs text-slate-500 leading-snug">
                  Organic growth and targeted acquisition
                </p>
              </div>

              {/* Card 2: Combined Years */}
              <div className="p-5 rounded-3xl bg-[#FAF9F6] border border-slate-200/70 shadow-xs space-y-1.5">
                <div className="w-8 h-8 rounded-full bg-orange-100/80 text-[#FF5722] flex items-center justify-center">
                  <Clock className="w-4 h-4" />
                </div>
                <div className="text-2xl sm:text-3xl font-heading font-black text-slate-900 tracking-tight">
                  124yrs
                </div>
                <p className="text-xs text-slate-500 leading-snug">
                  Combined years of industry experience
                </p>
              </div>

              {/* Card 3: Customers */}
              <div className="p-5 rounded-3xl bg-[#FAF9F6] border border-slate-200/70 shadow-xs space-y-1.5">
                <div className="w-8 h-8 rounded-full bg-orange-100/80 text-[#FF5722] flex items-center justify-center">
                  <Building2 className="w-4 h-4" />
                </div>
                <div className="text-2xl sm:text-3xl font-heading font-black text-slate-900 tracking-tight">
                  8,000+
                </div>
                <p className="text-xs text-slate-500 leading-snug">
                  Customers spanning multiple sectors
                </p>
              </div>

              {/* Card 4: Global Colleagues */}
              <div className="p-5 rounded-3xl bg-[#FAF9F6] border border-slate-200/70 shadow-xs space-y-1.5">
                <div className="w-8 h-8 rounded-full bg-orange-100/80 text-[#FF5722] flex items-center justify-center">
                  <Globe2 className="w-4 h-4" />
                </div>
                <div className="text-2xl sm:text-3xl font-heading font-black text-slate-900 tracking-tight">
                  1,30,000
                </div>
                <p className="text-xs text-slate-500 leading-snug">
                  Incredible colleagues across the globe
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & CEO Quote */}
          <div className="lg:col-span-7 space-y-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-brand-navy tracking-tight leading-tight">
              NEXAAGEN Group in numbers
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Our accreditations and certificates are important to ensure the best services are provided to our customers and ensuring that health and safety is paramount. By regularly undergoing assessments from independent bodies, we ensure that our operations consistently meet and exceed recognized industry standards. We provide reassurance through certified excellence to meet your needs.
            </p>

            <div className="pt-3 border-t border-slate-200/80 space-y-2.5">
              <p className="text-xs sm:text-sm font-serif italic text-slate-700 leading-relaxed">
                “We make people and places the best they can be, and we do it because we want the people in those places to thrive.”
              </p>

              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-full overflow-hidden bg-slate-200 border border-slate-300">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
                    alt="Group CEO, NEXAAGEN"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-heading font-bold text-slate-900">
                    Group Chief Executive Officer
                  </div>
                  <div className="text-[11px] text-slate-500">
                    NEXAAGEN Group
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: NEWS AND MEDIA (Reference Image 8) */}
      <section className="py-4 sm:py-6 container-custom border-t border-slate-100">
        <div className="space-y-6">
          {/* Header */}
          <div className="text-center space-y-2.5 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-brand-navy tracking-tight leading-tight">
              News and media
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              The latest insights and updates from the team at NEXAAGEN.
            </p>
            <div className="pt-1">
              <Link
                to="/news"
                className="inline-flex items-center px-7 py-2.5 rounded-full font-heading font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300"
              >
                <span>See All News & Media</span>
              </Link>
            </div>
          </div>

          {/* 4 Cards 2x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 pt-1">
            {newsArticles.map((article) => (
              <Link
                key={article.id}
                to={article.link}
                className="group flex flex-col sm:flex-row bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300"
              >
                {/* Thumbnail Image */}
                <div className="sm:w-2/5 aspect-[4/3] sm:aspect-auto overflow-hidden relative flex-shrink-0">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-2.5">
                  <div className="space-y-1.5">
                    <h3 className="text-sm sm:text-base font-heading font-bold text-slate-900 group-hover:text-brand-orange transition-colors leading-snug line-clamp-2">
                      {article.title}
                    </h3>
                    {article.excerpt && (
                      <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                        {article.excerpt}
                      </p>
                    )}
                  </div>

                  <div className="flex items-center space-x-2 text-xs text-slate-400 pt-2 border-t border-slate-100">
                    <div className="w-5 h-5 rounded-full bg-orange-100 text-[#FF5722] font-black text-[9px] flex items-center justify-center flex-shrink-0">
                      N
                    </div>
                    <span className="font-semibold text-slate-700">{article.author}</span>
                    <span>•</span>
                    <span>{article.date}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: CONNECT WITH YOUR NEXAAGEN TEAM BANNER (Reference Image 9) */}
      <section className="py-3 sm:py-5 container-custom">
        <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden bg-[#0A192F] text-white p-6 sm:p-8 lg:p-10 text-center shadow-xl">
          {/* Subtle dotted matrix globe aesthetic */}
          <div 
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(#FFFFFF 1.2px, transparent 1.2px)',
              backgroundSize: '24px 24px'
            }}
          />

          <div className="relative z-10 max-w-3xl mx-auto space-y-5">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-white tracking-tight leading-tight">
              Connect with your NEXAAGEN team
            </h2>

            <p className="text-sm sm:text-base lg:text-lg text-slate-200 leading-relaxed font-normal max-w-2xl mx-auto text-justify-center">
              We're ready to deliver the best experiences, productivity, practices, resilience and outcomes and we look forward to connecting with you and your team.
            </p>

            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 rounded-full font-heading font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 group"
              >
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ACCREDITATION DETAIL MODAL */}
      {activeModalItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100 space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-orange-100/80 text-[#FF5722] flex items-center justify-center font-bold">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-heading font-bold text-slate-900">
                    {activeModalItem.name}
                  </h3>
                  <p className="text-xs text-slate-500">{activeModalItem.category}</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setActiveModalItem(null)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="py-4 flex justify-center bg-slate-50 rounded-2xl border border-slate-100">
              {activeModalItem.renderLogo ? activeModalItem.renderLogo() : (
                <div className="font-heading font-black text-xl text-slate-800">{activeModalItem.name}</div>
              )}
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              {activeModalItem.description}
            </p>

            <div className="grid grid-cols-2 gap-2 text-xs text-slate-600 pt-2 border-t border-slate-100">
              <div><strong>Type:</strong> {activeModalItem.type}</div>
              <div><strong>Service:</strong> {activeModalItem.service}</div>
              <div className="col-span-2"><strong>Primary Sector:</strong> {activeModalItem.sector}</div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
              <Link
                to="/contact"
                onClick={() => setActiveModalItem(null)}
                className="inline-flex items-center text-xs font-bold text-[#FF5722] hover:text-[#D8232A]"
              >
                <span>Request compliance proof</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Link>
              <button
                type="button"
                onClick={() => setActiveModalItem(null)}
                className="px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

