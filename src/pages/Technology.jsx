import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Plus, 
  Minus, 
  Cpu, 
  Layers, 
  Activity, 
  ShieldCheck, 
  CheckCircle2,
  Sparkles,
  Server,
  Radio,
  FileCheck2,
  BarChart3,
  MessageSquare
} from 'lucide-react';
import Breadcrumbs from '../components/layout/Breadcrumbs';
import ContactForm from '../components/sections/ContactForm';

export default function Technology() {
  // State for Solutions Accordion Grid (Image 3)
  const [openSolution, setOpenSolution] = useState(null);

  const toggleSolution = (index) => {
    setOpenSolution(openSolution === index ? null : index);
  };

  // 12 Solutions matching Screenshot 3
  const solutions = [
    {
      q: 'How does Enhanced Restroom Experiences work?',
      a: 'IoT footfall sensors and dispenser telemetry monitor real-time restroom usage, dynamically dispatching cleaning teams based on actual occupancy rather than fixed clock times, ensuring supplies never deplete and hygiene remains pristine.'
    },
    {
      q: 'How does Proactive Environmental Monitoring work?',
      a: 'Continuous indoor environmental quality (IEQ) sensors measure CO2, VOCs, temperature, humidity, and airborne particulate matter, automatically signaling HVAC BMS controls to modulate airflow and protect colleague cognitive health.'
    },
    {
      q: 'How does Proactive Facility Security enhance safety?',
      a: 'AI computer vision and perimeter sensor grids identify unauthorized intrusions, perimeter anomalies, and tailgating in real time, alerting control center operators and mobile security teams instantly.'
    },
    {
      q: 'What are the Innovative Cleaning Solutions?',
      a: 'Autonomous robotic scrubbers operating safely around building occupants, chemical-free stabilized aqueous ozone (SAO) generators, and ATP bioluminescence swab assays that objectively verify clinical infection control.'
    },
    {
      q: 'How does Streamlined Asset Maintenance maximise efficiency for businesses?',
      a: 'Predictive vibration, thermal, and acoustic sensors continuously analyze rotating MEP plant (chillers, air handling units, pumps), identifying mechanical friction and bearing wear weeks before catastrophic failures occur.'
    },
    {
      q: 'How do you manage waste and recycling to ensure compliance with environmental standards?',
      a: 'Connected sensor-equipped waste compactors monitor volume levels in real time, optimizing waste collection cycles, eliminating unnecessary vehicle emissions, and generating verifiable digital recycling audit trails for ESG reporting.'
    },
    {
      q: 'How do you manage waste and recycling effectively in retail spaces, especially during peak times?',
      a: 'Dynamic bin level telemetry in high-footfall retail atriums and food courts automatically dispatches cleaning porters just before bins hit 80% capacity, preventing unsightly overflow during weekend and holiday surges.'
    },
    {
      q: 'What features are offered by Intelligent Surveillance and Access Control?',
      a: 'Frictionless biometric facial verification, smartphone Bluetooth credentials, automated visitor check-in kiosks, and intelligent multi-camera tracking that streamline lobby traffic while securing sensitive tenant floors.'
    },
    {
      q: 'What does Enhanced Security and Efficiency involve?',
      a: 'Consolidating CCTV video management, access control logs, intrusion alarms, and guard patrol GPS telemetry into a single unified security operations cockpit for zero-latency response.'
    },
    {
      q: 'What is your Energy Efficiency Revolution offer?',
      a: 'Asset-level sub-metering, algorithmic BMS setpoint calibration, and automated peak-demand shaving that reduce portfolio energy expenditure by 15% to 30% within 12 to 18 months.'
    },
    {
      q: 'How does Workspace Optimisation benefit businesses?',
      a: 'Passive infrared (PIR) desk occupancy sensors and zone heatmaps provide empirical utilization data, enabling corporate real estate leaders to right-size floorplates, reduce lease overheads, and design agile collaborative spaces.'
    },
    {
      q: 'How does Smart FM monitor restroom usage?',
      a: 'Non-optical anonymous infrared presence counters track cumulative visitor footfall at entrances, automatically triggering janitorial tickets once predetermined footfall thresholds are reached.'
    }
  ];

  return (
    <div className="w-full flex flex-col flex-1 bg-transparent text-slate-900 font-sans overflow-hidden">
      <Breadcrumbs items={[{ label: 'Technology and Innovation' }]} />

      {/* SECTION 1: HERO HEADER */}
      <section className="relative py-1.5 sm:py-2.5 container-custom">
        <div className="relative rounded-2xl sm:rounded-[24px] lg:rounded-[28px] overflow-hidden min-h-[220px] sm:min-h-[250px] lg:min-h-[280px] flex items-center shadow-lg bg-slate-950 border border-slate-800">
          {/* Digital Cyber Data Particle Grid Background */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=2400&q=85" 
              alt="Harness technology with NEXAAGEN Advance" 
              className="w-full h-full object-cover object-center"
            />
            {/* Smooth dark gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent lg:w-3/4" />
          </div>

          {/* Floating White Card */}
          <div className="relative z-10 p-3 sm:p-5 max-w-lg ml-2 sm:ml-4 my-1">
            <div className="bg-white/95 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-5 shadow-xl border border-white/40">
              {/* Badge: "Join our Technology Team NEXAAGEN Careers ->" */}
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#FF5722]/10 to-[#D8232A]/10 border border-[#FF5722]/20 rounded-full px-2.5 py-0.5 mb-2">
                <span className="bg-gradient-to-r from-[#FF5722] to-[#D8232A] text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">
                  Join our Technology Team
                </span>
                <Link to="/about" className="text-xs font-semibold text-slate-800 hover:text-brand-orange transition-colors flex items-center">
                  <span>NEXAAGEN Careers</span>
                  <ArrowRight className="w-3 h-3 ml-1" />
                </Link>
              </div>

              {/* Title */}
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-heading font-extrabold text-brand-navy tracking-tight leading-tight mb-2">
                Harness technology with NEXAAGEN Advance
              </h1>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-3">
                Deliver enhanced facilities services through innovation – driving best practice, productivity, resilience, experience and outcomes for your colleagues, customers and communities.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#advance-overview"
                  className="inline-flex items-center justify-center px-5 sm:px-6 py-2 sm:py-2.5 rounded-lg font-heading font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 group"
                >
                  <span>Explore NEXAAGEN Advance</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#contact-form"
                  className="inline-flex items-center justify-center px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg font-heading font-bold text-xs sm:text-sm text-slate-700 bg-slate-100 hover:bg-slate-200 transition-all duration-300"
                >
                  <span>Contact Our Team</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: NEXAAGEN ADVANCE OVERVIEW */}
      <section id="advance-overview" className="py-4 sm:py-6 container-custom border-t border-slate-100">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Operations Control Center Technologist */}
          <div className="lg:col-span-6">
            <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-[5/4] border border-slate-100">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80" 
                alt="NEXAAGEN Advance Operations Technology Specialist" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-brand-navy tracking-tight leading-tight">
              NEXAAGEN Advance
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              NEXAAGEN Advance utilises proven technological tools to enhance customer success and improve the operational experience in facilities services operations. These tools optimise best practice, boost productivity, and help build resilience, delivering the best customer and colleague outcomes.
            </p>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              We're working to deliver smarter and more efficient environments worldwide, from asset-level energy monitoring and advanced restroom management to proactive environmental sensing and intelligent surveillance.
            </p>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Practical solutions like energy monitoring, advanced restroom management, proactive environmental sensing, and intelligent surveillance help businesses excel in all areas, including guest management, facility maintenance, workspace optimisation, and security enhancements.
            </p>

            {/* CTA Button */}
            <div className="pt-2">
              <a
                href="#contact-form"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full font-heading font-bold text-sm text-white bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300"
              >
                <span>Contact our Technology Team</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: NEXAAGEN ADVANCE SOLUTIONS FOR CUSTOMERS */}
      <section className="py-4 sm:py-6 container-custom border-t border-slate-100">
        <div className="text-left mb-4 sm:mb-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-brand-navy tracking-tight leading-tight mb-2">
            NEXAAGEN Advance solutions for customers
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl">
            Explore how our smart facilities management tools deliver measurable operational efficiency and intelligence.
          </p>
        </div>

        {/* 2-Column Accordion Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {solutions.map((item, index) => {
            const isOpen = openSolution === index;
            return (
              <div 
                key={index}
                className="bg-slate-50/70 hover:bg-slate-50 rounded-2xl border border-slate-200/70 p-5 sm:p-6 transition-all duration-200 self-start"
              >
                <button
                  onClick={() => toggleSolution(index)}
                  className="w-full flex items-center justify-between text-left group"
                >
                  <span className="text-sm sm:text-base font-heading font-bold text-slate-900 group-hover:text-brand-orange transition-colors pr-4">
                    {item.q}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center flex-shrink-0 text-[#FF5722] group-hover:border-[#FF5722] transition-colors">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>
                {isOpen && (
                  <div className="mt-4 pt-4 border-t border-slate-200 text-sm text-slate-600 leading-relaxed animate-in fade-in duration-200">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 4: NEXAAGEN ADVANCE TOOLS INTRO */}
      <section className="py-4 sm:py-6 container-custom text-center border-t border-slate-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-brand-navy tracking-tight leading-tight mb-3">
            NEXAAGEN Advance Tools
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            We're continually working on and investing in developing technology solutions for the betterment of colleagues and customers. Below are three of our launching technology tools to deliver advanced facilities management: NEXA-Q, NEXA-ABi and NEXA-Live.
          </p>
        </div>
      </section>

      {/* SECTION 5: TOOL 1 - NEXA-Q */}
      <section className="py-3 sm:py-5 container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Description */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-slate-900 tracking-tight leading-tight">
              NEXA-Q – Auditor and job planning app
            </h3>

            <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
              <p>
                <strong className="text-slate-900 font-bold">• Function:</strong> NEXA-Q functions as an auditor and job planning application, streamlining workflow and auditing processes for operational teams.
              </p>
              <p>
                <strong className="text-slate-900 font-bold">• Benefits:</strong> The tool aids in efficient job allocation and monitoring, allowing for real-time tracking of tasks and providing a platform for auditing activities, ensuring jobs are completed efficiently and to the required standards.
              </p>
              <p>
                <strong className="text-slate-900 font-bold">• Impact:</strong> By enhancing auditing and job planning processes, NEXA-Q helps reduce operational inefficiencies, ensuring planned and reactive requirements are met effectively.
              </p>
            </div>
          </div>

          {/* Right Column: Image with NEXA-Q Badge Overlay */}
          <div className="lg:col-span-6">
            <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-[5/4] border border-slate-100">
              <img 
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80" 
                alt="NEXA-Q Auditor and Job Planning Mobile App" 
                className="w-full h-full object-cover"
              />
              {/* NEXA-Q Badge Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-black/60 backdrop-blur-md border border-white/30 rounded-2xl px-6 py-4 flex items-center space-x-3 text-white shadow-2xl">
                  <span className="text-2xl sm:text-3xl font-black tracking-tight font-heading text-brand-orange">NEXA</span>
                  <div className="w-px h-8 bg-white/40" />
                  <div className="w-10 h-10 rounded-xl bg-white text-slate-950 flex items-center justify-center font-black text-xl shadow-md">
                    Q
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: TOOL 2 - NEXA-ABI */}
      <section className="py-3 sm:py-5 container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Data Center Server Corridor with NEXA-ABi Badge Overlay */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-[5/4] border border-slate-100">
              <img 
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80" 
                alt="NEXA-ABi Advanced Building Intelligence Data Hall" 
                className="w-full h-full object-cover"
              />
              {/* NEXA-ABi Badge Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-black/60 backdrop-blur-md border border-white/30 rounded-2xl px-6 py-4 flex items-center space-x-3 text-white shadow-2xl">
                  <span className="text-2xl sm:text-3xl font-black tracking-tight font-heading text-brand-orange">NEXA</span>
                  <div className="w-px h-8 bg-white/40" />
                  <span className="text-2xl sm:text-3xl font-black tracking-tight font-heading text-cyan-400">ABi</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Description */}
          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-slate-900 tracking-tight leading-tight">
              NEXA-ABi – Advanced Building Intelligence
            </h3>

            <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
              <p>
                <strong className="text-slate-900 font-bold">• Function:</strong> NEXA-ABi harnesses the power of data and artificial intelligence to provide building operators with comprehensive insights, akin to having the benefit of hindsight.
              </p>
              <p>
                <strong className="text-slate-900 font-bold">• Benefits:</strong> This tool processes large volumes of data to offer actionable insights, aiding in predictive maintenance, operational decision-making, and identifying trends and patterns in facility management.
              </p>
              <p>
                <strong className="text-slate-900 font-bold">• Impact:</strong> Leveraging data and AI, NEXA-ABi enhances building operators' capability to preemptively address issues, optimise resources, and improve overall management of facilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: TOOL 3 - NEXA-LIVE */}
      <section className="py-3 sm:py-5 container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Description */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-slate-900 tracking-tight leading-tight">
              NEXA-Live – Real-time customer communication
            </h3>

            <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
              <p>
                <strong className="text-slate-900 font-bold">• Function:</strong> NEXA-Live serves as a real-time communication platform for customer engagement.
              </p>
              <p>
                <strong className="text-slate-900 font-bold">• Upcoming Features:</strong> Integrated Net Promoter Scoring (NPS), vital for gauging customer satisfaction and service quality.
              </p>
              <p>
                <strong className="text-slate-900 font-bold">• Benefits:</strong> Direct channel for customers to communicate their needs and feedback, crucial for service improvement.
              </p>
              <p>
                <strong className="text-slate-900 font-bold">• Impact:</strong> NEXA-Live aims to make customer interactions more effective, fostering a better understanding of client needs and enabling prompt responses to service requests or issues.
              </p>
            </div>
          </div>

          {/* Right Column: Image with NEXA-Live Badge Overlay */}
          <div className="lg:col-span-6">
            <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-[5/4] border border-slate-100">
              <img 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1200&q=80" 
                alt="NEXA-Live Real-Time Customer Communication Platform" 
                className="w-full h-full object-cover"
              />
              {/* NEXA-Live Badge Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-black/60 backdrop-blur-md border border-white/30 rounded-2xl px-6 py-4 flex items-center space-x-3 text-white shadow-2xl">
                  <span className="text-2xl sm:text-3xl font-black tracking-tight font-heading text-brand-orange">NEXA</span>
                  <div className="w-px h-8 bg-white/40" />
                  <span className="text-2xl sm:text-3xl font-black italic tracking-wider font-heading text-emerald-400">Live</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: EXECUTIVE QUOTE BANNER */}
      <section className="py-3 sm:py-5 container-custom">
        <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden min-h-[340px] sm:min-h-[380px] flex items-center shadow-2xl bg-slate-950 border border-slate-800">
          {/* Glass architectural facade & tree canopy photography */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80" 
              alt="NEXAAGEN Enterprise Technology Innovation Quote" 
              className="w-full h-full object-cover object-center"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent lg:w-3/4" />
          </div>

          {/* Floating White Quote Card */}
          <div className="relative z-10 p-5 sm:p-8 lg:p-10 max-w-2xl ml-4 sm:ml-8 lg:ml-12 my-4">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl p-5 sm:p-7 shadow-2xl border border-white/40">
              <p className="text-base sm:text-lg text-slate-800 leading-relaxed font-medium mb-6 italic">
                “Technology has an pivotal role to play within facilities services and helping shape the future for NEXAAGEN customers and colleagues. Our unique proposition of 125 years experience combined with innovation and technology, gives our customers a competitive advantage.”
              </p>

              <div className="flex items-center space-x-4 border-t border-slate-100 pt-4">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80" 
                  alt="Ketan Patel - Group Chief Information Officer" 
                  className="w-12 h-12 rounded-full object-cover border-2 border-brand-orange"
                />
                <div>
                  <h4 className="text-base font-heading font-extrabold text-slate-900">
                    Ketan Patel
                  </h4>
                  <p className="text-xs text-slate-500 font-medium">
                    Group Chief Information Officer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: JOIN OUR GLOBAL TECHNOLOGY TEAMS BANNER */}
      <section className="py-3 sm:py-5 container-custom">
        <div className="relative rounded-[28px] sm:rounded-[36px] bg-[#0A192F] text-white p-6 sm:p-10 lg:p-12 overflow-hidden text-center shadow-2xl">
          {/* Subtle radial dot matrix pattern */}
          <div 
            className="absolute inset-0 opacity-15 pointer-events-none" 
            style={{
              backgroundImage: 'radial-gradient(#ffffff 1.2px, transparent 1.2px)',
              backgroundSize: '22px 22px'
            }}
          />

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-brand-navy tracking-tight leading-tight mb-3">
              Join our global technology teams
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
              Visit our global locations page for your region and search careers today.
            </p>
            <Link
              to="/sectors"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-heading font-bold text-base text-white bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:shadow-xl hover:shadow-orange-500/30 transition-all duration-300"
            >
              <span>Search our Global Locations</span>
            </Link>
          </div>
        </div>
      </section>

      {/* SIGNATURE CONTACT FORM */}
      <section id="contact-form" className="py-3 sm:py-5 container-custom">
        <div className="bg-slate-50/70 rounded-3xl p-5 sm:p-8 border border-slate-200/80">
          <ContactForm 
            title="Connect With Our Technology & Innovation Specialists"
            subtitle="Discover how NEXAAGEN Advance, AI building intelligence, and real-time telemetry can empower your facility operations."
            defaultService="Smart Buildings, IoT & Telemetry" 
          />
        </div>
      </section>

    </div>
  );
}
