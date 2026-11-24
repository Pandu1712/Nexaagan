import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Users,
  Heart,
  Sparkles,
  Star,
  Award,
  ArrowRight,
  CheckCircle2,
  Briefcase,
  GraduationCap,
  Compass,
  ShieldCheck,
  Building2,
  Calendar
} from 'lucide-react';
import Breadcrumbs from '../components/layout/Breadcrumbs';
import aviationServicesImg from '../assets/news/aviation-global-services.jpg';

export default function OurColleagues() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const newsItems = [
    {
      id: 'news-1',
      title: 'Sixty Years of Global Aviation Services: One Standard, Uncompromising Excellence',
      author: 'NEXAAGEN Team',
      date: '24 Aug, 2026',
      image: aviationServicesImg,
      tag: 'Aviation',
      excerpt: 'Celebrating decades of world-class terminal operations, PRM mobility assistance, and ground handling across premier international gateways.'
    },
    {
      id: 'news-2',
      title: 'The 60 Days That Decide a Data Centre’s Life: Why Pre-Commissioning FM Matters',
      author: 'NEXAAGEN Team',
      date: '16 Jul, 2026',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
      tag: 'Critical Facilities',
      excerpt: 'Why ISO 14644 cleanroom protocols and calibrated air handling teams are essential before servers go live.'
    },
    {
      id: 'news-3',
      title: 'Inside India’s Airport Transformation: Why FM is Moving From Janitorial to Experience Design',
      author: 'NEXAAGEN Team',
      date: '09 Jul, 2026',
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80',
      tag: 'Experience Design',
      excerpt: 'How modern Indian airports are utilizing intelligent sensors, customer care ambassadors, and inclusive hiring.'
    },
    {
      id: 'news-4',
      title: 'Why Post-Construction Cleaning Is Critical for Data Centre Commissioning',
      author: 'NEXAAGEN Team',
      date: '06 Jul, 2026',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
      tag: 'Technical Hygiene',
      excerpt: 'Microscopic construction debris can trigger catastrophic hardware failure. How HEPA cleanroom protocols protect hyperscale operations.'
    }
  ];

  return (
    <div className="w-full flex flex-col flex-1 bg-transparent text-slate-900 font-sans overflow-hidden">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'About Us', link: '/about' },
          { label: 'Our Frontline Colleagues' }
        ]}
      />

      {/* ========================================================================= */}
      {/* SECTION 1: HERO - NEXAAGEN FRONTLINE COLLEAGUES (Screenshot 1)            */}
      {/* ========================================================================= */}
      <section className="relative pt-4 pb-3 sm:pt-6 sm:pb-4 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FDFBF9] via-[#FAF7F2] to-white overflow-hidden">
        {/* Soft Coral/Orange Dotted Pattern Watermark */}
        <div
          className="absolute inset-0 opacity-[0.25] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(#EA580C 1.1px, transparent 1.1px)',
            backgroundSize: '24px 24px'
          }}
        />

        <div className="relative max-w-4xl mx-auto text-center space-y-5">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-brand-navy tracking-tight leading-tight">
            NEXAAGEN Frontline Colleagues
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto font-normal">
            Our 130,000-strong global team are on a mission to make people and places the best they can be and they're at the heart of everything we do and all that we're able to achieve.
          </p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: COLLEAGUES DRIVING BRAND & BUSINESS FORWARDS (Screenshot 2)    */}
      {/* ========================================================================= */}
      <section className="py-4 sm:py-6 container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Narrative Copy */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-brand-navy tracking-tight leading-tight">
              Our colleagues driving our brand and business forwards
            </h2>

            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              <p>
                Our frontline colleagues are the cornerstone of NEXAAGEN's operations, embodying the essence of meticulous attention to detail and unwavering consistency.
              </p>

              <p>
                Day in and day out, they are the reliable force that ensures our customers' operations run smoothly. Their dedication is pivotal in maintaining operational efficiency, fostering the best experiences, and enhancing productivity.
              </p>

              <p>
                The NEXAAGEN team's consistent efforts ensure the adoption of best practices and building resilience within our customers' operations. Ultimately, we will succeed in achieving the desired outcomes through their steadfast commitment and expertise. Our people are not just a part of our process; they are at the heart of everything we achieve, driving us forward with their dedication and hard work.
              </p>
            </div>
          </div>

          {/* Right Column: Senior Colleague with Glasses */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-xl aspect-[4/5] max-h-[440px] w-full max-w-[360px] sm:max-w-[380px] border border-slate-100 group">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1200&q=80"
                alt="NEXAAGEN Frontline Colleague with unwavering dedication"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: DEDICATION AND HARD WORK (Screenshot 3)                        */}
      {/* ========================================================================= */}
      <section className="py-4 sm:py-6 bg-transparent border-y border-slate-100">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Young Female Colleague with Lanyard */}
            <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center lg:justify-start">
              <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-xl aspect-[4/5] max-h-[440px] w-full max-w-[360px] sm:max-w-[380px] border border-slate-100 group">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80"
                  alt="Young enthusiastic apprentice and colleague at NEXAAGEN"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Right Column: Narrative Copy */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-brand-navy tracking-tight leading-tight">
                Dedication and hard work to make people and places the best they can be
              </h2>

              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                <p>
                  Our team at NEXAAGEN includes both young apprentices full of enthusiasm and long-serving colleagues with years of experience. This mix of new ideas and proven knowledge is vital to how we operate. Our apprentices bring fresh perspectives, while our experienced colleagues have a deep understanding of customer service developed over many years.
                </p>

                <p>
                  With a history stretching back decades, we have a strong foundation, but we’re also always looking for new ways to innovate and improve. This combination of old and new makes our service to customers exceptional, ensuring we constantly enhance our quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: JOINING OUR TEAM & GLOBAL MISSION (Screenshot 4)               */}
      {/* ========================================================================= */}
      <section className="py-4 sm:py-6 container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Narrative Copy & CTA Button */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-brand-navy tracking-tight leading-tight">
              Interested in joining our team and supporting the global mission?
            </h2>

            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              <p>
                Joining NEXAAGEN means becoming part of a global team <span className="font-semibold text-slate-900 underline decoration-orange-400">united by a singular mission</span>: to make people and places the best they can be. In this mission, every individual plays a crucial role. Your contributions, no matter the size or scope, are integral to our collective success. Each person’s unique skills, perspectives, and efforts are vital in achieving our goal.
              </p>

              <p>
                As a team member, you’re not just doing a job; you’re actively participating in a meaningful journey to enhance the lives of people and the environments they inhabit. Here, every task, interaction, and decision contributes to our overarching purpose, making your role essential in realising our vision of a better world.
              </p>
            </div>

            <div className="pt-2">
              <Link
                to="/a-z-of-spaces-and-places"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-heading font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300"
              >
                <span>Find Your Career Location</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Culinary/Chef Colleague in Uniform */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-xl aspect-[4/5] max-h-[440px] w-full max-w-[360px] sm:max-w-[380px] border border-slate-100 group">
              <img
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1200&q=80"
                alt="NEXAAGEN Professional Culinary and Catering Colleague"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5: RECOGNISING THE EXCEPTIONAL WITH TRUE STARS (Screenshot 5)     */}
      {/* ========================================================================= */}
      <section className="py-4 sm:py-6 bg-transparent border-y border-slate-100">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Two Colleagues in Caps and Uniforms */}
            <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center lg:justify-start">
              <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-xl aspect-[4/5] max-h-[440px] w-full max-w-[360px] sm:max-w-[380px] border border-slate-100 group">
                <img
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80"
                  alt="NEXAAGEN TRUE Stars colleagues in technical plant room"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Right Column: TRUE Stars Narrative */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 text-[#EA580C] text-xs font-bold uppercase tracking-wider">
                <Star className="w-3.5 h-3.5 fill-current" />
                <span>Colleague Recognition</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-brand-navy tracking-tight leading-tight">
                Recognising the exceptional with NEXAAGEN TRUE Stars
              </h2>

              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                <p>
                  <span className="font-semibold text-slate-900">NEXAAGEN TRUE Stars</span> is our recognition programme focused on acknowledging those who consistently exceed expectations and embody our <span className="font-semibold text-slate-900 underline decoration-orange-400">TRUE Values</span> in their work. It's a simple, meaningful way to show appreciation for colleagues making a real difference through their dedication and outstanding performance.
                </p>

                <p>
                  The NEXAAGEN TRUE Stars programme is our way of saying thank you and ensuring that the efforts of these exceptional individuals do not go unnoticed, reflecting our commitment to our values and the people who bring them to life every day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 6: WHAT MAKES US NEXAAGEN (Screenshot 6)                          */}
      {/* ========================================================================= */}
      <section className="py-4 sm:py-6 container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Narrative Copy & Contact Us Button */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-brand-navy tracking-tight leading-tight">
              What makes us NEXAAGEN
            </h2>

            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              <p>
                Our team takes pride in their role and how they conduct themselves. They bring substance and integrity to every aspect of their work, ensuring our customers receive the best service possible, always striving for excellence and taking ownership of their responsibilities.
              </p>

              <p>
                In our workplace, there's a sense of camaraderie and equality. We believe in allowing everyone to grow and contribute, and our team members embrace this ethos wholeheartedly. They are individuals committed to their community and the environment. Most importantly, they are dedicated to safeguarding the well-being of both their fellow team members and our valued customers, making safety and health their top priority.
              </p>
            </div>

            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-heading font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300"
              >
                <span>Contact Us</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Smiling Professional with Lanyard */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-xl aspect-[4/5] max-h-[440px] w-full max-w-[360px] sm:max-w-[380px] border border-slate-100 group">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80"
                alt="NEXAAGEN Colleague radiating pride, warmth and safety leadership"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 7: PEOPLE & PURPOSE BANNER (Screenshot 7)                         */}
      {/* ========================================================================= */}
      <section className="py-3 sm:py-5 container-custom">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl min-h-[280px] sm:min-h-[320px] flex items-center p-6 sm:p-8 lg:p-10">
          {/* Background: Professional Colleague Looking Forward */}
          <img
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1800&q=85"
            alt="People and Purpose at NEXAAGEN"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-slate-950/60 backdrop-brightness-90" />

          {/* Dot Matrix Graphic on the Left */}
          <div
            className="absolute left-0 top-0 bottom-0 w-1/3 opacity-30 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(#FFFFFF 1.5px, transparent 1.5px)',
              backgroundSize: '18px 18px'
            }}
          />

          <div className="relative z-10 max-w-2xl text-white space-y-5">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-brand-navy tracking-tight leading-tight">
              People & Purpose
            </h2>
            <p className="text-slate-200 text-sm sm:text-base lg:text-lg leading-relaxed font-normal">
              Learn about our vision and mission, what we mean by ‘best’ and why our guiding principles underpin everything that we do.
            </p>
            <div className="pt-2">
              <Link
                to="/vision-mission"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-heading font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:shadow-lg hover:shadow-orange-500/30 hover:scale-105 transition-all duration-300"
              >
                <span>Vision & Mission</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 8: NEWS & MEDIA SECTION (Screenshot 8)                            */}
      {/* ========================================================================= */}
      <section className="py-4 sm:py-6 container-custom">
        {/* Header with CTA Button */}
        <div className="text-center space-y-4 mb-4 sm:mb-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-brand-navy tracking-tight leading-tight">
            News
          </h2>
          <p className="text-slate-500 text-sm sm:text-base font-normal">
            The latest insights and updates from the team at NEXAAGEN.
          </p>
          <div className="pt-2">
            <Link
              to="/news"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-heading font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:shadow-lg hover:shadow-orange-500/25 hover:scale-105 transition-all duration-300"
            >
              <span>See All News & Media</span>
            </Link>
          </div>
        </div>

        {/* 4 Cards in 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {newsItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedArticle(item)}
              className="bg-white rounded-3xl border border-slate-100 hover:border-orange-200 overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer group"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-[#EA580C] uppercase tracking-wider shadow-sm">
                  {item.tag}
                </div>
              </div>

              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2.5">
                  <h3 className="text-base sm:text-lg font-heading font-bold text-slate-900 group-hover:text-[#FF5722] transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 line-clamp-2 leading-relaxed">
                    {item.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 rounded-full bg-slate-100 text-[#0A192F] font-bold text-[10px] flex items-center justify-center">
                      N
                    </div>
                    <span className="font-medium text-slate-600">{item.author}</span>
                  </div>
                  <span>{item.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ARTICLE MODAL */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-100 flex flex-col">
            <div className="relative aspect-[16/9] w-full">
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 backdrop-blur text-slate-700 hover:text-black flex items-center justify-center transition-colors shadow-md"
              >
                ✕
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-4">
              <span className="text-xs font-bold text-[#EA580C] uppercase tracking-wider block">
                {selectedArticle.tag}
              </span>

              <h2 className="text-xl sm:text-2xl font-heading font-bold text-slate-900 leading-snug">
                {selectedArticle.title}
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {selectedArticle.excerpt}
              </p>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="px-5 py-2 rounded-full text-xs font-semibold text-slate-600 hover:bg-slate-100 border border-slate-200 transition-colors"
                >
                  Close
                </button>
                <Link
                  to="/news"
                  onClick={() => setSelectedArticle(null)}
                  className="text-xs font-bold text-[#FF5722] hover:underline inline-flex items-center gap-1"
                >
                  <span>Explore More News & Media</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
