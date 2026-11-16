import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  BookOpen, 
  FileText, 
  CheckCircle2, 
  AlertTriangle, 
  Lock, 
  Leaf, 
  HardHat, 
  HeartHandshake, 
  Users, 
  Scale, 
  ArrowRight,
  ExternalLink,
  Download,
  HelpCircle,
  Eye,
  Building2
} from 'lucide-react';
import Breadcrumbs from '../components/layout/Breadcrumbs';

export default function CodeOfConduct() {
  return (
    <div className="w-full flex flex-col flex-1 bg-white text-slate-900 font-sans overflow-hidden">
      <Breadcrumbs
        items={[
          { label: 'ESG', link: '/esg' },
          { label: 'Governance', link: '/governance' },
          { label: 'Global Code of Conduct' }
        ]}
      />

      {/* SECTION 1: HERO BANNER (Reference Image 1) */}
      <section className="pt-4 pb-3 sm:pt-6 sm:pb-4 container-custom text-center">
        <div className="relative rounded-3xl bg-slate-50/70 border border-slate-100/80 p-6 sm:p-8 lg:p-10 overflow-hidden shadow-sm">
          {/* Subtle dot matrix pattern */}
          <div 
            className="absolute inset-0 opacity-15 pointer-events-none -z-0"
            style={{
              backgroundImage: 'radial-gradient(#FF5722 1.2px, transparent 1.2px)',
              backgroundSize: '24px 24px'
            }}
          />

          <div className="relative z-10 max-w-4xl mx-auto space-y-6">
            <span className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-orange-100/80 text-[#D8232A] border border-orange-200">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Universal Ethical Standard</span>
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-brand-navy tracking-tight leading-tight">
              Global Code of Conduct
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed font-normal max-w-3xl mx-auto">
              Our Code of Conduct stands as a cornerstone alongside our guiding principles, encapsulated in our TRUE Values and Commitments, offering a clear framework to guide our business.
            </p>

            <div className="pt-2">
              <Link
                to="/policies"
                className="inline-flex items-center px-8 py-3.5 rounded-full font-heading font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#FF5722] to-[#D8232A] hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300"
              >
                <span>View All Policies</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN DOCUMENT CONTAINER */}
      <div className="py-6 sm:py-8 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full space-y-8 sm:space-y-10">

        {/* SECTION 2: INTRODUCTION FROM ROB LEGGE, GROUP CEO (Reference Image 2) */}
        <section id="introduction" className="space-y-6 border-b border-slate-100 pb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-brand-navy tracking-tight leading-tight">
            Introduction from Rob Legge, Group CEO
          </h2>

          <div className="space-y-5 text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            <p>
              As we follow our Vision and Mission to become the best facilities services business in the world, making people and places the best they can be, we want to achieve it by doing business in the right way. Our colleagues, customers, suppliers, and other stakeholders will also look to us to do business the “right way”.
            </p>

            <p>
              Guided by our TRUE Values (Trust, Respect, Unity and Empowerment), we are creating a workplace that inspires, motivates, and supports each of us. We also foster a culture built on solid principles that guide our actions and shape success for our customers and colleagues. We're proud to be measured on what we do and how we do it.
            </p>

            <p>
              We have developed this Code of Conduct (“Code”) to help guide us in “how” we should go about our business in the right way every day and in every part of the world. The Code refers to conduct which is required (ethical conduct) and also to prohibited actions and behaviours, and how we should behave towards one another, our customers, suppliers, and all stakeholders.
            </p>

            <p>
              By continuing to uphold our TRUE values and doing business the right way, our business will prosper, as we positively impact the lives of our colleagues, customers, and the communities we serve.
            </p>

            <div className="pt-2 font-bold text-slate-900">
              Rob Legge, Group CEO
            </div>
          </div>
        </section>

        {/* SECTION 3: NEXAAGEN CODE OF CONDUCT (Reference Images 3 & 4) */}
        <section className="space-y-8 border-b border-slate-100 pb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-brand-navy tracking-tight leading-tight">
            NEXAAGEN Code of Conduct
          </h2>

          {/* Q1 */}
          <div className="space-y-2">
            <h3 className="text-lg sm:text-xl font-heading font-bold text-[#E65100]">
              Why do we have a Code?
            </h3>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              Our Code sets out the guidelines and standards for how we should behave as we do our business – every day, wherever we are, and whatever we do.
            </p>
          </div>

          {/* Q2 */}
          <div className="space-y-2">
            <h3 className="text-lg sm:text-xl font-heading font-bold text-[#E65100]">
              What about different country laws?
            </h3>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              Our Code establishes our principles and guidance on common legal or ethical issues across our business. It's not meant to cover every law and policy that might apply to you. As a global group, our Code is the highest standard and will always apply even if it goes further than local country laws.
            </p>
          </div>

          {/* Q3 */}
          <div className="space-y-2">
            <h3 className="text-lg sm:text-xl font-heading font-bold text-[#E65100]">
              Does our Code include all the policies I need to know?
            </h3>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              Our Code and Group policies tell you what you need to know to do your job ethically. Our Code doesn't replace our detailed policies but clearly states our principles and the policy framework. As an NEXAAGEN colleague, you're responsible for knowing and complying with the policies that apply specifically to your work and the individual decisions you make.
            </p>
          </div>

          {/* Q4 */}
          <div className="space-y-3">
            <h3 className="text-lg sm:text-xl font-heading font-bold text-[#E65100]">
              How to use our Code
            </h3>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              Our Code applies to us every day, wherever we are, whatever we do – including our Board of Directors and the Executive Committee. It guides every business decision we make.
            </p>
            <p className="text-base sm:text-lg text-slate-700 font-medium">
              Each one of us is expected to embrace our Code's principles and:
            </p>
            <ul className="space-y-2 pl-4 text-base sm:text-lg text-slate-700">
              <li className="flex items-center space-x-3">
                <span className="w-2 h-2 rounded-full bg-[#E65100]" />
                <span>Show respect</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="w-2 h-2 rounded-full bg-[#E65100]" />
                <span>Act with integrity</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="w-2 h-2 rounded-full bg-[#E65100]" />
                <span>Work ethically and responsibly</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="w-2 h-2 rounded-full bg-[#E65100]" />
                <span>Fulfil our commitments to our customers</span>
              </li>
            </ul>
          </div>

          {/* Breaches of our Code */}
          <div className="space-y-2 p-6 rounded-2xl bg-orange-50/60 border border-orange-100">
            <h3 className="text-lg sm:text-xl font-heading font-bold text-[#E65100]">
              Breaches of our Code
            </h3>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              We must all comply with our Code, policies, and the law. Any violations of our Code, policies, laws, and regulations could lead to disciplinary action, including termination of employment and legal action.
            </p>
          </div>
        </section>

        {/* SECTION 4: OUR VISION, MISSION AND VALUES (Reference Images 4, 5 & 6) */}
        <section className="space-y-8 border-b border-slate-100 pb-14">
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-brand-navy tracking-tight leading-tight">
              Our vision, mission and values
            </h2>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              Our vision and mission is to become the best facilities services business globally, making people and places the best they can be. Our TRUE Values, Trust, Respect, Unity and Empowerment guide everything we do and everything that we don’t do. Our NEXAAGEN Values are us at our best and are the foundation for success.
            </p>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              The NEXAAGEN culture is built on solid principles that guide our actions and shape success for our customers and colleagues, resulting in us being a trustworthy global business which respects the communities and environment in which we operate.
            </p>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              We celebrate those who place our Values at the heart of their everyday roles through our internal recognition schemes and on our external communication channels, recognising and inspiring our colleagues, customers and all those connected to the NEXAAGEN world.
            </p>
          </div>

          {/* 4 Values Breakdown */}
          <div className="space-y-8 pt-4">
            {/* Trust */}
            <div className="space-y-1">
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-slate-900">
                Trust.
              </h3>
              <div className="text-sm sm:text-base font-semibold italic text-[#E65100]">
                Honesty, consistency and excellence.
              </div>
              <p className="text-sm sm:text-base font-medium text-slate-800 pt-1">
                Built and maintained through transparency and communication.
              </p>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                Trust involves honesty and reliability, creating a secure environment for open communication and teamwork, which is crucial for long-term success.
              </p>
            </div>

            {/* Respect */}
            <div className="space-y-1">
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-slate-900">
                Respect.
              </h3>
              <div className="text-sm sm:text-base font-semibold italic text-[#E65100]">
                People, planet and purpose.
              </div>
              <p className="text-sm sm:text-base font-medium text-slate-800 pt-1">
                The starting point and ongoing position for every interaction.
              </p>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                Respect is treating everyone fairly, valuing contributions, and fostering an atmosphere where everyone can thrive personally and professionally.
              </p>
            </div>

            {/* Unity */}
            <div className="space-y-1">
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-slate-900">
                Unity.
              </h3>
              <div className="text-sm sm:text-base font-semibold italic text-[#E65100]">
                Inclusive, diverse and together.
              </div>
              <p className="text-sm sm:text-base font-medium text-slate-800 pt-1">
                One team working towards the betterment of each other.
              </p>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                Unity means teamwork with a shared purpose, harnessing individual strengths for collective achievement, essential for reaching common goals.
              </p>
            </div>

            {/* Empowerment */}
            <div className="space-y-1">
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-slate-900">
                Empowerment.
              </h3>
              <div className="text-sm sm:text-base font-semibold italic text-[#E65100]">
                Dynamic, driven and agile.
              </div>
              <p className="text-sm sm:text-base font-medium text-slate-800 pt-1">
                Providing the tools and skills to do more, achieving great things together.
              </p>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                Empowerment gives people the tools and confidence to succeed, encouraging initiative and greater investment in work and community.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 5: RESPECT, DIGNITY AND FAIR TREATMENT (Reference Images 6, 7 & 8) */}
        <section className="space-y-8 border-b border-slate-100 pb-14">
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-brand-navy tracking-tight leading-tight">
              Respect, dignity and fair treatment
            </h2>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              Diversity and inclusion matter to us, so we insist on a fair work environment free from discrimination and harassment. This is our commitment to ensure that we have a work environment free from harassment and other offensive or disrespectful conduct.
            </p>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              Harassment is unwelcome verbal, visual or physical behaviour that creates an intimidating, offensive or hostile work environment. Harassment may include:
            </p>

            <ul className="space-y-2.5 pl-4 text-base sm:text-lg text-slate-700">
              <li className="flex items-start space-x-3">
                <span className="w-2 h-2 rounded-full bg-slate-400 mt-2.5 flex-shrink-0" />
                <span>Offensive language, gestures, nicknames, jokes, or banter</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="w-2 h-2 rounded-full bg-slate-400 mt-2.5 flex-shrink-0" />
                <span>Racial, ethnic, gender or religious slurs</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="w-2 h-2 rounded-full bg-slate-400 mt-2.5 flex-shrink-0" />
                <span>Degrading comments</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="w-2 h-2 rounded-full bg-slate-400 mt-2.5 flex-shrink-0" />
                <span>Intimidating or threatening behaviour</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="w-2 h-2 rounded-full bg-slate-400 mt-2.5 flex-shrink-0" />
                <span>Hostility towards others because of individual characteristics</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="w-2 h-2 rounded-full bg-slate-400 mt-2.5 flex-shrink-0" />
                <span>Excluding others from conversations or social events</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="w-2 h-2 rounded-full bg-slate-400 mt-2.5 flex-shrink-0" />
                <span>Displaying offensive emails, pictures, or clothing</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="w-2 h-2 rounded-full bg-slate-400 mt-2.5 flex-shrink-0" />
                <span>Sexual harassment</span>
              </li>
            </ul>
          </div>

          {/* Sexual Harassment Details */}
          <div className="space-y-3 pt-2">
            <h3 className="text-lg sm:text-xl font-heading font-bold text-slate-900">
              Sexual harassment could include:
            </h3>

            <ul className="space-y-2.5 pl-4 text-base sm:text-lg text-slate-700">
              <li className="flex items-start space-x-3">
                <span className="w-2 h-2 rounded-full bg-slate-400 mt-2.5 flex-shrink-0" />
                <span>Unwelcome advances, propositions or flirting</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="w-2 h-2 rounded-full bg-slate-400 mt-2.5 flex-shrink-0" />
                <span>Unwanted physical contact or staring</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="w-2 h-2 rounded-full bg-slate-400 mt-2.5 flex-shrink-0" />
                <span>Inappropriate comments about someone’s appearance, including their clothing or body</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="w-2 h-2 rounded-full bg-slate-400 mt-2.5 flex-shrink-0" />
                <span>Lewd or suggestive remarks, questions, gestures, language, stories, or jokes</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="w-2 h-2 rounded-full bg-slate-400 mt-2.5 flex-shrink-0" />
                <span>Sharing inappropriate images or videos</span>
              </li>
            </ul>

            <p className="text-base sm:text-lg text-[#E65100] font-medium pt-2">
              At NEXAAGEN, we won't tolerate verbal or physical behaviour considered intimidating, hostile, or offensive. We'll take appropriate disciplinary action in cases of unacceptable conduct.
            </p>
          </div>

          {/* Human Rights Safeguards */}
          <div className="space-y-3 pt-4 border-t border-slate-100">
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              We're also committed to providing appropriate safeguards so no colleague's human rights are compromised. Through our policies, we aim to:
            </p>

            <ul className="space-y-2.5 pl-4 text-base sm:text-lg text-slate-700">
              <li className="flex items-start space-x-3">
                <span className="w-2 h-2 rounded-full bg-slate-400 mt-2.5 flex-shrink-0" />
                <span>Prohibit child labour, forced labour and human trafficking</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="w-2 h-2 rounded-full bg-slate-400 mt-2.5 flex-shrink-0" />
                <span>Provide fair and equitable wages, benefits, and other conditions of employment in accordance with local laws</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="w-2 h-2 rounded-full bg-slate-400 mt-2.5 flex-shrink-0" />
                <span>Provide humane and safe working conditions, including safe, clean, and sanitary housing conditions</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="w-2 h-2 rounded-full bg-slate-400 mt-2.5 flex-shrink-0" />
                <span>Require our customers, suppliers, and other business partners to adopt similar standards regarding human rights</span>
              </li>
            </ul>
          </div>
        </section>

        {/* SECTION 6: HEALTH AND SAFETY (Reference Images 9, 10 & 11) */}
        <section className="space-y-8 border-b border-slate-100 pb-14">
          <div className="space-y-3">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-brand-navy tracking-tight leading-tight">
              Health and safety
            </h2>
            <h3 className="text-lg sm:text-xl font-heading font-bold text-slate-900">
              Everyone in NEXAAGEN deserves to go home safe every day!
            </h3>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              Our colleagues, families and customers rely on us to ensure this happens. That's why health and safety is our top priority, and we're committed to continuously monitoring, developing, and strengthening our safety programme and culture.
            </p>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              At NEXAAGEN, we care for one another. We must all play our part in putting safety first and building a zero-harm incident culture.
            </p>
            <p className="text-base sm:text-lg text-[#E65100] font-medium italic">
              Our health and safety ethics and policies are the same in every country we work in.
            </p>
          </div>

          <div className="space-y-3">
            <p className="text-base sm:text-lg text-slate-700 font-medium">
              We're committed to the following:
            </p>

            <ul className="space-y-2.5 pl-4 text-base sm:text-lg text-slate-700">
              <li className="flex items-start space-x-3">
                <span className="w-2 h-2 rounded-full bg-slate-400 mt-2.5 flex-shrink-0" />
                <span>Visible leadership on health and safety and environment</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="w-2 h-2 rounded-full bg-slate-400 mt-2.5 flex-shrink-0" />
                <span>Instilling safe behaviours and creating a strong safety culture</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="w-2 h-2 rounded-full bg-slate-400 mt-2.5 flex-shrink-0" />
                <span>Giving you the correct training and tools to enable you to do your job safely</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="w-2 h-2 rounded-full bg-slate-400 mt-2.5 flex-shrink-0" />
                <span>Adopting best practices in our work procedures</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="w-2 h-2 rounded-full bg-slate-400 mt-2.5 flex-shrink-0" />
                <span>Empowering you to make the right decisions about your safety</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="w-2 h-2 rounded-full bg-slate-400 mt-2.5 flex-shrink-0" />
                <span>Reporting health and safety incidents promptly, including near misses</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="w-2 h-2 rounded-full bg-slate-400 mt-2.5 flex-shrink-0" />
                <span>Monitoring, reviewing, and reporting our health and safety performance accurately</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="w-2 h-2 rounded-full bg-slate-400 mt-2.5 flex-shrink-0" />
                <span>Continually improving our health and safety procedures</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="w-2 h-2 rounded-full bg-slate-400 mt-2.5 flex-shrink-0" />
                <span>Carrying out our work in a way that minimises any harmful impact on the environment and supports sustainable business</span>
              </li>
            </ul>
          </div>

          {/* Golden Rules */}
          <div className="space-y-3 p-6 sm:p-8 rounded-3xl bg-amber-50/70 border border-amber-200/80">
            <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-[#E65100]">
              Our health and safety golden rules
            </h3>
            <p className="text-base sm:text-lg font-bold text-slate-800">
              Stop and say no if:
            </p>
            <ul className="space-y-2.5 pl-4 text-base sm:text-lg text-slate-700">
              <li className="flex items-start space-x-3">
                <span className="w-2 h-2 rounded-full bg-[#E65100] mt-2.5 flex-shrink-0" />
                <span>You believe it’s not safe to do the job</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="w-2 h-2 rounded-full bg-[#E65100] mt-2.5 flex-shrink-0" />
                <span>You believe the site isn't safe</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="w-2 h-2 rounded-full bg-[#E65100] mt-2.5 flex-shrink-0" />
                <span>You believe the equipment is faulty or you don't have the correct equipment</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="w-2 h-2 rounded-full bg-[#E65100] mt-2.5 flex-shrink-0" />
                <span>You're not trained to do the job or don't feel competent</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="w-2 h-2 rounded-full bg-[#E65100] mt-2.5 flex-shrink-0" />
                <span>You don't have the appropriate personal protective equipment</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="w-2 h-2 rounded-full bg-[#E65100] mt-2.5 flex-shrink-0" />
                <span>You see something that could cause injury or damage the environment</span>
              </li>
            </ul>
          </div>
        </section>

        {/* SECTION 7: ENVIRONMENT AND SUSTAINABILITY (Reference Images 11 & 12) */}
        <section className="space-y-8 border-b border-slate-100 pb-14">
          <div className="space-y-3">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-brand-navy tracking-tight leading-tight">
              Environment and sustainability
            </h2>
            <h3 className="text-lg sm:text-xl font-heading font-bold text-slate-900">
              We are committed to conducting our business activities responsibly.
            </h3>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              We acknowledge the critical role we play in providing a safe and sustainable environment for our customers, colleagues, and the communities in which we operate, assuring their health, safety, and wellbeing, preservation of the environment, and compliance with all applicable health, safety, environmental, legal, quality, and regulatory requirements.
            </p>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              At NEXAAGEN, we all have a responsibility and an opportunity, through our behaviours, to protect the environment and preserve the planet for future generations.
            </p>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              We all need to play our part in making NEXAAGEN environmentally sustainable by doing the right thing.
            </p>
          </div>

          <div className="space-y-3">
            <p className="text-base sm:text-lg text-slate-700 font-medium">
              How we all can play our part:
            </p>

            <ul className="space-y-3 pl-4 text-base sm:text-lg text-slate-700">
              <li className="flex items-start space-x-3">
                <span className="w-2 h-2 rounded-full bg-emerald-600 mt-2.5 flex-shrink-0" />
                <span><strong className="text-slate-900">Reduce energy consumption:</strong> Conserve energy by turning off lights, computers, and other equipment when not in use.</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="w-2 h-2 rounded-full bg-emerald-600 mt-2.5 flex-shrink-0" />
                <span><strong className="text-slate-900">Use natural resources considerately:</strong> Use natural resources efficiently, including water and paper.</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="w-2 h-2 rounded-full bg-emerald-600 mt-2.5 flex-shrink-0" />
                <span><strong className="text-slate-900">Work environmentally safe:</strong> Carry out our work in a way that minimises any harmful impact on the environment.</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="w-2 h-2 rounded-full bg-emerald-600 mt-2.5 flex-shrink-0" />
                <span><strong className="text-slate-900">Minimise waste:</strong> Practice personal waste management by recycling and reducing waste generation. Use electronic documents instead of printing where feasible.</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="w-2 h-2 rounded-full bg-emerald-600 mt-2.5 flex-shrink-0" />
                <span><strong className="text-slate-900">Foster a culture of sustainability:</strong> Encourage colleagues to adopt sustainable behaviours and participate in environmentally sustainable initiatives.</span>
              </li>
            </ul>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal pt-2">
              We are committed to continuous improvement and constantly monitor and update our practices to ensure we deliver the best services in the right way for the benefit of our customers, colleagues, communities, and the planet.
            </p>
          </div>
        </section>

        {/* SECTION 8: COMPLIANCE WITH LAWS (Reference Image 13) */}
        <section className="space-y-6 border-b border-slate-100 pb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-brand-navy tracking-tight leading-tight">
            Compliance with laws
          </h2>

          <h3 className="text-lg sm:text-xl font-heading font-bold text-slate-900">
            NEXAAGEN is a global business with one common standard.
          </h3>

          <div className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            <p>
              We are headquartered with international operations. Many principles and guidance on common legal or ethical issues in our business are derived from international best practices and regulations.
            </p>

            <p>
              NEXAAGEN is committed to upholding the highest standard of ethics and integrity when carrying out its business.
            </p>

            <p>
              Our Code applies to all parts of the business anywhere in the world. In some cases, our Code may impose higher requirements than the local laws in the country where you operate. In such cases, you are still required to adhere to the requirements of our Code.
            </p>

            <div className="pt-2 space-y-1">
              <h4 className="font-bold text-slate-900">Laws and regulations</h4>
              <p>
                NEXAAGEN respects and abides by all applicable supra-national and international laws, regulations, and standards.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 9: INFORMATION SECURITY AND PROTECTING PERSONAL DATA (Reference Images 14 & 15) */}
        <section className="space-y-8 pb-10">
          <div className="space-y-3">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-brand-navy tracking-tight leading-tight">
              Information security and protecting personal data
            </h2>
            <h3 className="text-lg sm:text-xl font-heading font-bold text-slate-900">
              We must take care of personal data and protect information.
            </h3>
            <h4 className="text-lg font-heading font-bold text-[#E65100]">
              Personal data
            </h4>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              At NEXAAGEN, we respect the privacy of all our colleagues and other individuals and the confidentiality of personal data. We routinely hold and deal with information about individuals, such as employees (past and present), job applicants, customers, suppliers, and other business partners, including names, telephone numbers, email addresses, employment contracts, and employment records.
            </p>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              We're an international business, and most countries have laws covering the collection, use, retention, and transfer of personal data. Although these vary, our policies require that we:
            </p>
          </div>

          <ul className="space-y-2.5 pl-4 text-base sm:text-lg text-slate-700">
            <li className="flex items-start space-x-3">
              <span className="w-2 h-2 rounded-full bg-slate-400 mt-2.5 flex-shrink-0" />
              <span>Obtain consent from the individual concerned, as required by local laws</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="w-2 h-2 rounded-full bg-slate-400 mt-2.5 flex-shrink-0" />
              <span>Only collect data that is adequate, relevant, and used solely for the purpose for which it is collected</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="w-2 h-2 rounded-full bg-slate-400 mt-2.5 flex-shrink-0" />
              <span>Keep personal data up to date</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="w-2 h-2 rounded-full bg-slate-400 mt-2.5 flex-shrink-0" />
              <span>Keep personal data confidential and secure</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="w-2 h-2 rounded-full bg-slate-400 mt-2.5 flex-shrink-0" />
              <span>Don't keep personal data for longer than necessary</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="w-2 h-2 rounded-full bg-slate-400 mt-2.5 flex-shrink-0" />
              <span>Don't share personal data, internally or externally, unless this is relevant to the purpose for which it is collected</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="w-2 h-2 rounded-full bg-slate-400 mt-2.5 flex-shrink-0" />
              <span>Don't transfer any personal data between territories without advice from the Data Protection Officer</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="w-2 h-2 rounded-full bg-slate-400 mt-2.5 flex-shrink-0" />
              <span><strong className="text-slate-900">Report data breaches immediately</strong></span>
            </li>
          </ul>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            We must always keep personal information secure. Failure to comply with data protection laws can lead to criminal and financial sanctions for both NEXAAGEN as a business and for us as colleagues.
          </p>

          <div className="space-y-3 pt-4 border-t border-slate-100">
            <h4 className="text-lg font-heading font-bold text-[#E65100]">
              Information security
            </h4>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              As colleagues, we must protect our company's assets, including company data and information such as customer lists, operating manuals, and other business and marketing material, ideas, designs, databases, and records. You mustn't use our company's confidential information for personal gain or to provide an unfair advantage to others.
            </p>
          </div>
        </section>

        {/* BOTTOM NAVIGATION & CONTACT BAR */}
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-heading font-bold text-slate-900">
              Questions regarding the NEXAAGEN Code of Conduct?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600">
              Contact our confidential Global Ethics & Compliance Office.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              to="/governance"
              className="inline-flex items-center px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 transition-all"
            >
              Governance Hub
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#FF5722] to-[#D8232A] text-white hover:shadow-md transition-all"
            >
              Contact Ethics Team
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
