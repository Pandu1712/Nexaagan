import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  CheckCircle2, 
  AlertCircle, 
  Send, 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Clock, 
  Building2 
} from 'lucide-react';
import { sectorsData } from '../../data/sectorsData';
import { servicesData } from '../../data/servicesData';
import { companyData } from '../../data/companyData';

export default function ContactForm({
  title = "Connect With Our Sector Specialists",
  subtitle = "Discuss your facility management, critical engineering, or decarbonisation requirements with NEXAAGEN's advisory team.",
  defaultSector = "",
  defaultService = "",
}) {
  const [searchParams] = useSearchParams();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
    postCode: '',
    sector: defaultSector || searchParams.get('sector') || '',
    serviceRequired: defaultService || searchParams.get('solution') || searchParams.get('service') || '',
    furtherDetails: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const sParam = searchParams.get('sector');
    const solParam = searchParams.get('solution') || searchParams.get('service');
    if (sParam) {
      setFormData((prev) => ({ ...prev, sector: sParam }));
    }
    if (solParam) {
      setFormData((prev) => ({ ...prev, serviceRequired: solParam }));
    }
  }, [searchParams]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First Name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last Name is required';
    if (!formData.company.trim()) newErrors.company = 'Company name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Corporate email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid corporate email';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Contact telephone is required';
    if (!formData.postCode.trim()) newErrors.postCode = 'Post code / zip code is required';
    if (!formData.sector) newErrors.sector = 'Please select a primary sector';
    if (!formData.serviceRequired) newErrors.serviceRequired = 'Please specify the service required';

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    // Simulate brief processing
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      firstName: '',
      lastName: '',
      company: '',
      email: '',
      phone: '',
      postCode: '',
      sector: '',
      serviceRequired: '',
      furtherDetails: '',
    });
    setErrors({});
    setSubmitted(false);
  };

  return (
    <section id="contact-form" className="section-padding bg-slate-50 border-t border-slate-100">
      <div className="container-custom">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 bg-brand-orange/10 text-brand-orange border border-brand-orange/20">
            Consultation Request
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-brand-navy tracking-tight">
            {title}
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Two-Column Layout (Screenshot 9) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 shadow-card-subtle border border-slate-100">
            {submitted ? (
              <div className="py-6 text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-brand-navy">
                  Inquiry Received Successfully
                </h3>
                <p className="text-slate-600 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="font-semibold text-brand-navy">{formData.firstName}</span>. Your consultation request for{' '}
                  <span className="font-semibold text-brand-navy">{formData.company}</span> has been processed.
                </p>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-500 max-w-md mx-auto">
                  <span className="font-semibold text-slate-700 block mb-1">Demonstration Notice:</span>
                  This is a static frontend deployment. No backend email server or database is integrated, so inquiries are safely stored in browser demonstration state.
                </div>
                <div className="pt-4">
                  <button
                    onClick={handleReset}
                    className="btn-navy text-xs py-2.5 px-6"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Name Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-navy mb-1.5">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="e.g. Alexander"
                      className={`w-full px-4 py-3 rounded-xl border text-base sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none transition-colors ${
                        errors.firstName
                          ? 'border-red-500 bg-red-50/30 focus:border-red-500'
                          : 'border-slate-200 focus:border-brand-navy'
                      }`}
                    />
                    {errors.firstName && (
                      <p className="text-xs text-red-500 mt-1 flex items-center">
                        <AlertCircle className="w-3 h-3 mr-1" />
                        {errors.firstName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-navy mb-1.5">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="e.g. Wright"
                      className={`w-full px-4 py-3 rounded-xl border text-base sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none transition-colors ${
                        errors.lastName
                          ? 'border-red-500 bg-red-50/30 focus:border-red-500'
                          : 'border-slate-200 focus:border-brand-navy'
                      }`}
                    />
                    {errors.lastName && (
                      <p className="text-xs text-red-500 mt-1 flex items-center">
                        <AlertCircle className="w-3 h-3 mr-1" />
                        {errors.lastName}
                      </p>
                    )}
                  </div>
                </div>

                {/* Company & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-navy mb-1.5">
                      Company / Organization <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="e.g. Global Logistics PLC"
                      className={`w-full px-4 py-3 rounded-xl border text-base sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none transition-colors ${
                        errors.company
                          ? 'border-red-500 bg-red-50/30 focus:border-red-500'
                          : 'border-slate-200 focus:border-brand-navy'
                      }`}
                    />
                    {errors.company && (
                      <p className="text-xs text-red-500 mt-1 flex items-center">
                        <AlertCircle className="w-3 h-3 mr-1" />
                        {errors.company}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-navy mb-1.5">
                      Corporate Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="alexander@company.com"
                      className={`w-full px-4 py-3 rounded-xl border text-base sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none transition-colors ${
                        errors.email
                          ? 'border-red-500 bg-red-50/30 focus:border-red-500'
                          : 'border-slate-200 focus:border-brand-navy'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-500 mt-1 flex items-center">
                        <AlertCircle className="w-3 h-3 mr-1" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Phone & Post Code */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-navy mb-1.5">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+44 20 7000 0000"
                      className={`w-full px-4 py-3 rounded-xl border text-base sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none transition-colors ${
                        errors.phone
                          ? 'border-red-500 bg-red-50/30 focus:border-red-500'
                          : 'border-slate-200 focus:border-brand-navy'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-xs text-red-500 mt-1 flex items-center">
                        <AlertCircle className="w-3 h-3 mr-1" />
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-navy mb-1.5">
                      Post Code / Postal Code <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="postCode"
                      value={formData.postCode}
                      onChange={handleChange}
                      placeholder="EC2A 4NE"
                      className={`w-full px-4 py-3 rounded-xl border text-base sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none transition-colors ${
                        errors.postCode
                          ? 'border-red-500 bg-red-50/30 focus:border-red-500'
                          : 'border-slate-200 focus:border-brand-navy'
                      }`}
                    />
                    {errors.postCode && (
                      <p className="text-xs text-red-500 mt-1 flex items-center">
                        <AlertCircle className="w-3 h-3 mr-1" />
                        {errors.postCode}
                      </p>
                    )}
                  </div>
                </div>

                {/* Sector & Service Dropdowns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-navy mb-1.5">
                      Sector <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="sector"
                      value={formData.sector}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border text-base sm:text-sm text-slate-800 focus:outline-none transition-colors bg-white ${
                        errors.sector
                          ? 'border-red-500 bg-red-50/30 focus:border-red-500'
                          : 'border-slate-200 focus:border-brand-navy'
                      }`}
                    >
                      <option value="">Select your sector</option>
                      {sectorsData.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                      <option value="Other Industry">Other Industry / Multi-Sector</option>
                    </select>
                    {errors.sector && (
                      <p className="text-xs text-red-500 mt-1 flex items-center">
                        <AlertCircle className="w-3 h-3 mr-1" />
                        {errors.sector}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-navy mb-1.5">
                      Service Required <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="serviceRequired"
                      value={formData.serviceRequired}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border text-base sm:text-sm text-slate-800 focus:outline-none transition-colors bg-white ${
                        errors.serviceRequired
                          ? 'border-red-500 bg-red-50/30 focus:border-red-500'
                          : 'border-slate-200 focus:border-brand-navy'
                      }`}
                    >
                      <option value="">Select service required</option>
                      {servicesData.map((svc) => (
                        <option key={svc.id} value={svc.title}>
                          {svc.title}
                        </option>
                      ))}
                      <option value="Total Integrated Facilities Management">
                        Total Integrated Facilities Management (Turnkey)
                      </option>
                      <option value="Advisory & ESG Auditing">
                        Advisory & ESG Auditing
                      </option>
                    </select>
                    {errors.serviceRequired && (
                      <p className="text-xs text-red-500 mt-1 flex items-center">
                        <AlertCircle className="w-3 h-3 mr-1" />
                        {errors.serviceRequired}
                      </p>
                    )}
                  </div>
                </div>

                {/* Further Details Textarea */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand-navy mb-1.5">
                    Further Details (Optional)
                  </label>
                  <textarea
                    rows={4}
                    name="furtherDetails"
                    value={formData.furtherDetails}
                    onChange={handleChange}
                    placeholder="Tell us about your estate footprint, square footage, current operational challenges, or tender timeline..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-navy text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-gradient w-full py-4 text-base font-bold shadow-md hover:shadow-brand-orange/30 disabled:opacity-60"
                  >
                    {loading ? (
                      <span className="flex items-center">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        Processing Consultation Request...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <span>Submit Consultation Request</span>
                        <Send className="w-4 h-4 ml-2" />
                      </span>
                    )}
                  </button>
                  <p className="text-[11px] text-slate-400 text-center mt-3">
                    By submitting this form, you acknowledge that your inquiry details will be processed in accordance with NEXAAGEN's Privacy Policy.
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Large Professional Industry Image & Contact Card (Screenshot 9) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] group">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
                alt="NEXAAGEN Global Headquarters"
                className="w-full h-full object-cover card-img-zoom"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark/90 via-brand-navy/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs uppercase tracking-widest font-bold text-brand-orange block mb-1">
                  Global Operations Desk
                </span>
                <h4 className="text-lg font-heading font-bold text-white">
                  Direct Enterprise Advisory & Tenders
                </h4>
                <p className="text-xs text-slate-200 mt-1">
                  Our directors review tenders and invitations to tender (ITT) across all major regions.
                </p>
              </div>
            </div>

            {/* Direct Contact Info Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-100 shadow-card-subtle space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-brand-navy border-b border-slate-100 pb-3">
                Headquarters & Rapid Response
              </h4>

              <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start space-x-3">
                  <div className="p-2 rounded-lg bg-brand-orange/10 text-brand-orange mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 block text-xs">Direct Telephone</span>
                    <a href={`tel:${companyData.headquarters.phone.replace(/\s+/g, '')}`} className="font-semibold text-brand-navy hover:text-brand-orange transition-colors">
                      {companyData.headquarters.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="p-2 rounded-lg bg-brand-orange/10 text-brand-orange mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 block text-xs">Advisory & Tender Desk</span>
                    <a href={`mailto:${companyData.headquarters.email}`} className="font-semibold text-brand-navy hover:text-brand-orange transition-colors">
                      {companyData.headquarters.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="p-2 rounded-lg bg-brand-orange/10 text-brand-orange mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 block text-xs">Helpdesk Availability</span>
                    <span className="font-semibold text-brand-navy">
                      24 Hours / 7 Days / 365 Days
                    </span>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                <span className="flex items-center">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 mr-1" />
                  ISO 9001 & 45001
                </span>
                <span>•</span>
                <span>RoSPA Gold Accredited</span>
                <span>•</span>
                <span>Zero Harm Policy</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

