import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  HeartHandshake, 
  Sparkles, 
  Award, 
  ShieldCheck, 
  ArrowRight, 
  MapPin, 
  CheckCircle2, 
  Briefcase, 
  GraduationCap,
  Globe2,
  Building2,
  Heart
} from 'lucide-react';
import Breadcrumbs from '../components/layout/Breadcrumbs';

export default function Social() {
  const accreditations = [
    {
      name: 'Race at Work Charter',
      desc: 'Commitment to improving equality of opportunity in the workplace.',
      category: 'Equality & Race'
    },
    {
      name: 'National Autistic Society',
      desc: 'Autism-friendly employer certification and workplace adjustments.',
      category: 'Neurodiversity'
    },
    {
      name: 'Dementia Friendly Society',
      desc: 'Creating supportive environments for people affected by dementia.',
      category: 'Community Care'
    },
    {
      name: 'Disability Confident Employer',
      desc: 'Certified level 2 employer active in recruitment accessibility.',
      category: 'Inclusion'
    },
    {
      name: 'Highfield Qualifications',
      desc: 'Approved training centre for industry-accredited qualifications.',
      category: 'Accreditation'
    },
    {
      name: 'Menopause Friendly Employer',
      desc: 'Proud to display the badge for workplace wellbeing support.',
      category: 'Wellbeing'
    }
  ];

  return (
    <div className="w-full flex flex-col flex-1 bg-transparent text-slate-900 font-sans overflow-hidden">
      <Breadcrumbs
        items={[
          { label: 'ESG', link: '/esg' },
          { label: 'Social' }
        ]}
      />

      {/* SECTION 1: HERO BANNER (Reference Image 1) */}
      <section className="py-1.5 sm:py-2.5 container-custom">
        <div className="relative rounded-2xl sm:rounded-[24px] lg:rounded-[28px] overflow-hidden min-h-[220px] sm:min-h-[250px] lg:min-h-[280px] flex items-center p-3 sm:p-5 shadow-lg">
          {/* Background Image: Smiling Colleague in nature framing camera */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=2000&q=85"
              alt="Social ESG - Empowering colleagues and communities"
              className="w-full h-full object-cover object-center transform scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/15 to-transparent" />
          </div>

          {/* Floating White Card on the Left */}
          <div className="relative z-10 bg-white/95 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-5 max-w-lg shadow-xl border border-white/60 space-y-2 sm:space-y-2.5">
            <div className="flex items-center space-x-2">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-orange-100 text-[#D8232A]">
                View Global Sites
              </span>
              <Link to="/contact" className="text-xs font-bold text-slate-700 hover:text-[#FF5722] transition-colors">
                NEXAAGEN Careers →
              </Link>
            </div>

            <h1 className="text-xl sm:text-2xl lg:text-3xl font-heading font-extrabold text-brand-navy tracking-tight leading-tight">
              Social (ESG)
            </h1>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              With our team of 130,000 colleagues we have the opportunity to bring about positive and lasting change within the communities that we operate.
            </p>

            <div className="pt-1 flex flex-wrap gap-2.5">
              <a
                href="#talent-pool"
                className="inline-flex items-center px-4 sm:px-5 py-2 rounded-full font-heading font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 group"
              >
                <span>Widest Talent Pool</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#community-outreach"
                className="inline-flex items-center px-6 py-3 rounded-full font-heading font-bold text-xs uppercase tracking-wider text-slate-700 bg-slate-100 hover:bg-slate-200 transition-all duration-300"
              >
                <span>Community Impact</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: RECRUIT FROM THE WIDEST POSSIBLE TALENT POOL (Reference Image 2) */}
      <section id="talent-pool" className="py-4 sm:py-6 container-custom border-t border-slate-100">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Description */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-brand-navy tracking-tight leading-tight">
              Recruit from the widest possible talent pool <br className="hidden sm:inline" />
              and create opportunities
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              We seek out, develop and up skill our future colleagues from underrepresented groups. Our recruitment teams ensure our recruitment process is inclusive, and we participate in programmes, including local unemployment projects, NGO and government initiatives that support people into work.
            </p>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Supporting individuals into work from disadvantaged or marginalised parts of society is a driving force within our HR and recruitment teams. Our foundations have placed hundreds of people into sustainable employment with a proxy social value well into the millions.
            </p>
          </div>

          {/* Right Column: Corporate Colleagues Photo */}
          <div className="lg:col-span-5">
            <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-[5/4] border border-slate-100 group">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                alt="NEXAAGEN Facilities leaders walking together in corporate plaza"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-white/80">
                <span className="text-xs font-bold text-slate-800">
                  Inclusive Hiring Initiatives • Millions in proxy social value generated.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: PROVIDING ACCESS TO VALUABLE AND SUSTAINABLE CAREERS (Reference Image 3) */}
      <section className="py-4 sm:py-6 container-custom bg-slate-50/70 rounded-3xl my-3 sm:my-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Colleagues Photo */}
          <div className="lg:col-span-5">
            <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-[5/4] border border-slate-100 group">
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80"
                alt="NEXAAGEN Colleagues in team polo shirts"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
            </div>
          </div>

          {/* Right Column: Careers & NEXAAGEN Academy */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-brand-navy tracking-tight leading-tight">
              Providing access to valuable <br className="hidden sm:inline" />
              and sustainable careers
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Across our core services encompassing cleaning, catering, pest control, hard services, security, facilities management, and business functional roles like finance, HR, operations, legal, IT and marketing, we offer opportunities for professional growth and advancement.
            </p>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              We provide sustainable career paths, training, and development for recruits joining our global facilities services organisation. All colleagues have access to the correct information and proper training and development. Our online training capability (NEXAAGEN Academy) is available to all colleagues who join NEXAAGEN.
            </p>

            <div className="pt-2">
              <Link
                to="/apprenticeships-funded-learning"
                className="inline-flex items-center px-7 py-3.5 rounded-full font-heading font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 group"
              >
                <span>Explore NEXAAGEN Academy & Apprenticeships</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: FOSTERING DIVERSITY, EQUITY AND INCLUSION (Reference Image 4) */}
      <section className="py-4 sm:py-6 container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: DE&I Principle */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-brand-navy tracking-tight leading-tight">
              Fostering diversity, equity and inclusion (DE&I)
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              In our global facilities services business, diversity and inclusion are fundamental principles. Our commitment is to provide equal opportunities for all, regardless of cultural, religious, linguistic, or community backgrounds. Embracing this diversity is not just a matter of ethics; it's a strategic advantage.
            </p>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              By fostering an inclusive environment, we tap into a wide range of perspectives and talents, enhancing our competitiveness in the global market. Our approach ensures every employee can thrive, contributing to our customers and business success worldwide.
            </p>

            <div className="pt-2">
              <Link
                to="/diversity-equality-and-inclusion"
                className="inline-flex items-center px-7 py-3.5 rounded-full font-heading font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 group"
              >
                <span>Read Full DE&I Framework</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Column: Photo of 3 colleagues in atrium */}
          <div className="lg:col-span-5">
            <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-[5/4] border border-slate-100 group">
              <img
                src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=1200&q=80"
                alt="NEXAAGEN Colleagues representing multicultural workforce"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: ACCREDITATION & CERTIFICATION (Reference Image 5) */}
      <section className="py-4 sm:py-6 container-custom border-t border-slate-100">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: 6 Partner Badges Grid */}
          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {accreditations.map((item, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-sm flex flex-col justify-between space-y-2 hover:border-slate-300 transition-colors"
              >
                <div className="w-8 h-8 rounded-xl bg-orange-100 text-[#FF5722] flex items-center justify-center font-bold text-xs">
                  <Award className="w-4 h-4" />
                </div>
                <div className="font-heading font-bold text-xs sm:text-sm text-slate-900 leading-snug">
                  {item.name}
                </div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-slate-600">
                  {item.category}
                </span>
              </div>
            ))}
          </div>

          {/* Right Column: Accreditation Description */}
          <div className="lg:col-span-6 space-y-5">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-brand-navy tracking-tight leading-tight">
              Accreditation & Certification
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              We’re partner with organisations carrying out influential and often critical work that helps towards fairer and inclusive societies throughout the globe.
            </p>

            <div className="pt-2">
              <Link
                to="/diversity-equality-and-inclusion"
                className="inline-flex items-center space-x-2 text-sm font-bold text-[#FF5722] hover:text-[#D8232A] group"
              >
                <span>View all verified certifications & standards</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: POSITIVE IMPACT THROUGH COMMUNITY OUTREACH (Reference Image 6) */}
      <section id="community-outreach" className="py-4 sm:py-6 container-custom bg-slate-50/70 rounded-3xl my-3 sm:my-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Community Planting Photo */}
          <div className="lg:col-span-5">
            <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-[5/4] border border-slate-100 group">
              <img
                src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1200&q=80"
                alt="NEXAAGEN Colleagues in community gardening outreach initiative"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
            </div>
          </div>

          {/* Right Column: Outreach Description */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-brand-navy tracking-tight leading-tight">
              Positive impact and lasting change through community outreach programmes
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Positively impacting communities is an integral part and defining characteristic of our organisation. Our global teams actively engage in community programs, volunteer individually, and support charitable initiatives and foundation work.
            </p>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              We aim to reach and enhance communities, driven not just by contractual commitments but primarily by our core commitment to doing the right thing in the right way. This ethos is deeply ingrained in our company’s identity and is a true reflection of the values held by our people.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 7: STANDING STRONG TOGETHER AGAINST MODERN SLAVERY (Reference Image 7) */}
      <section className="py-4 sm:py-6 container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Modern Slavery Commitment */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-brand-navy tracking-tight leading-tight">
              Standing strong together against modern slavery
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Upholding the principles of the Modern Slavery Act across our global operations spanning over 26 countries is not just our legal obligation but central to our approach and ethics. Ethical business practices and social responsibility are reflected in our rigorous efforts to eradicate all modern slavery within our extensive supply chains and operations.
            </p>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              We recognise our legal and moral obligation to combat forced labour and human trafficking, ensuring compliance through transparent annual reporting and proactive measures. We won't compromise in creating an ethical, responsible, and inclusive business environment, demonstrating our global leadership role and championing human rights and fair labour practices.
            </p>

            <div className="pt-2">
              <Link
                to="/modern-slavery-act"
                className="inline-flex items-center px-7 py-3.5 rounded-full font-heading font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 group"
              >
                <span>Modern Slavery Act</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Column: Colleague in Market Hall Photo */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-2xl aspect-[4/5] max-h-[440px] w-full max-w-[360px] sm:max-w-[380px] border border-slate-100 group">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80"
                alt="NEXAAGEN Colleague championing ethical labour practices"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: CONTACT YOUR GLOBAL PEOPLE TEAM TODAY BANNER (Reference Image 8) */}
      <section className="py-3 sm:py-5 container-custom">
        <div className="relative rounded-3xl overflow-hidden bg-[#0A192F] text-white p-6 sm:p-10 lg:p-12 text-center shadow-2xl">
          {/* Subtle Dot Grid Pattern */}
          <div 
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(#60A5FA 1.2px, transparent 1.2px)',
              backgroundSize: '20px 20px'
            }}
          />

          <div className="relative z-10 max-w-3xl mx-auto space-y-5">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-brand-navy tracking-tight leading-tight">
              Contact your global people team today
            </h2>

            <p className="text-slate-300 text-sm sm:text-base lg:text-lg font-normal max-w-2xl mx-auto leading-relaxed">
              Visit your country location for information on regional community and people programmes.
            </p>

            <div className="pt-4">
              <Link
                to="/a-z-of-spaces-and-places"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-heading font-bold text-sm text-white bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:shadow-lg hover:shadow-orange-500/30 hover:scale-105 transition-all duration-300"
              >
                <span>View Global Locations</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

