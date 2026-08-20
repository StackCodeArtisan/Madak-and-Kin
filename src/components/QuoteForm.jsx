import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaCalendarAlt, 
  FaMapMarkerAlt, 
  FaUser, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaTruck, 
  FaRegFileAlt, 
  FaCheckCircle, 
  FaCanadianMapleLeaf,
  FaExclamationTriangle,
  FaWhatsapp,
  FaShieldAlt
} from 'react-icons/fa';

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    movingFrom: '',
    movingTo: '',
    moveDate: '',
    moveType: '',
    additionalDetails: '',
    botcheck: '' // Honeypot field for spam prevention
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle'); // 'idle' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const tempErrors = {};
    if (!formData.fullName.trim()) tempErrors.fullName = 'Full Name is required';
    
    if (!formData.phone.trim()) {
      tempErrors.phone = 'Phone number is required';
    } else if (!/^\+?([0-9\s\-()]{7,15})$/.test(formData.phone.trim())) {
      tempErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.email.trim()) {
      tempErrors.email = 'Email address is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email.trim())) {
      tempErrors.email = 'Please enter a valid email address';
    }

    if (!formData.movingFrom.trim()) tempErrors.movingFrom = 'Pickup location is required';
    if (!formData.movingTo.trim()) tempErrors.movingTo = 'Destination location is required';
    if (!formData.moveDate) tempErrors.moveDate = 'Please select a moving date';
    if (!formData.moveType) tempErrors.moveType = 'Please select a move type';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Check honeypot for bot submissions
    if (formData.botcheck) {
      console.warn('Bot submission blocked via honeypot.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    // Check environment configuration
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    const customEndpoint = import.meta.env.VITE_QUOTE_FORM_ENDPOINT;

    const payload = {
      subject: `New Moving Quote Request — Medak & Kin Moving Inc. (${formData.fullName})`,
      from_name: formData.fullName,
      to_email: 'medakmovingco@gmail.com',
      fullName: formData.fullName,
      phone: formData.phone,
      email: formData.email,
      movingFrom: formData.movingFrom,
      movingTo: formData.movingTo,
      moveDate: formData.moveDate,
      moveType: formData.moveType,
      additionalDetails: formData.additionalDetails || 'None provided',
      submittedAt: new Date().toLocaleString('en-CA', { timeZone: 'America/Halifax' })
    };

    try {
      let response;
      if (accessKey) {
        // Use Web3Forms API
        response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify({
            access_key: accessKey,
            ...payload
          })
        });
      } else if (customEndpoint) {
        // Use custom endpoint (Formspree or API Gateway)
        response = await fetch(customEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify(payload)
        });
      } else {
        // Fallback demo submission if no API key is present in local dev
        // Send via mailto or attempt direct Web3Forms public endpoint
        response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify({
            access_key: 'YOUR_ACCESS_KEY_HERE', // Will fail gracefully if unconfigured
            ...payload
          })
        });
      }

      const result = await response.json();

      if (response.ok && (result.success || result.status === 200)) {
        setSubmitStatus('success');
        setFormData({
          fullName: '',
          phone: '',
          email: '',
          movingFrom: '',
          movingTo: '',
          moveDate: '',
          moveType: '',
          additionalDetails: '',
          botcheck: ''
        });
      } else {
        // Handle unconfigured key or endpoint failure
        if (!accessKey && !customEndpoint) {
          setErrorMessage('Form endpoint is currently awaiting production API key configuration. Please contact dispatch directly by phone or WhatsApp.');
        } else {
          setErrorMessage(result.message || 'Unable to deliver your quote request at this time.');
        }
        setSubmitStatus('error');
      }
    } catch (err) {
      console.error('Quote submission error:', err);
      setErrorMessage('A network error occurred while submitting your request. Please call or WhatsApp our team directly.');
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="quote" className="py-20 sm:py-28 bg-navy text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(212,175,55,0.05),transparent_50%)] pointer-events-none" />
      <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="flex items-center justify-center space-x-2 text-gold font-semibold text-xs sm:text-sm uppercase tracking-widest mb-3">
            <FaCanadianMapleLeaf className="text-maple text-sm" />
            <span>Zero-Obligation Estimate</span>
          </div>
          <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            Request A Free Moving Quote
          </h2>
          <p className="font-poppins text-white/70 text-sm sm:text-base">
            Provide details of your upcoming move, and our local team in Fredericton will review your inventory and get back to you with an honest estimate.
          </p>
        </div>

        <div className="bg-white text-slate-800 rounded-3xl p-6 sm:p-12 shadow-2xl border border-white/10 relative overflow-hidden">
          <AnimatePresence mode="wait">
            {submitStatus !== 'success' ? (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-6 text-left"
              >
                {/* Honeypot field (hidden from real users) */}
                <input
                  type="text"
                  name="botcheck"
                  value={formData.botcheck}
                  onChange={handleChange}
                  style={{ display: 'none' }}
                  tabIndex="-1"
                  autoComplete="off"
                />

                {/* Error Banner on Failure */}
                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-2xl bg-maple/10 border border-maple/30 text-maple text-xs sm:text-sm font-poppins space-y-3"
                  >
                    <div className="flex items-center space-x-2 font-bold">
                      <FaExclamationTriangle className="text-base shrink-0" />
                      <span>Submission Notice</span>
                    </div>
                    <p>{errorMessage}</p>
                    <div className="flex flex-wrap gap-3 pt-1">
                      <a
                        href="tel:5064783683"
                        className="inline-flex items-center space-x-2 bg-navy text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-gold hover:text-navy transition-colors"
                      >
                        <FaPhoneAlt />
                        <span>Call 506 478 3683</span>
                      </a>
                      <a
                        href="https://wa.me/15064783683"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 bg-emerald-600 text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-emerald-700 transition-colors"
                      >
                        <FaWhatsapp />
                        <span>Chat on WhatsApp</span>
                      </a>
                    </div>
                  </motion.div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="flex flex-col">
                    <label htmlFor="fullName" className="font-poppins text-xs font-bold text-navy uppercase tracking-wider mb-2 flex items-center">
                      <FaUser className="mr-1.5 text-gold text-xs" /> Full Name <span className="text-maple ml-0.5">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      disabled={isSubmitting}
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Sarah MacIntosh"
                      className={`w-full px-4 py-3 rounded-xl border font-poppins text-sm bg-slate-50 focus:outline-none focus:ring-2 focus:bg-white transition-all disabled:opacity-50 ${
                        errors.fullName ? 'border-maple focus:ring-maple/20' : 'border-slate-200 focus:ring-gold/20 focus:border-gold'
                      }`}
                    />
                    {errors.fullName && <span className="text-maple text-xs font-semibold mt-1.5">{errors.fullName}</span>}
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col">
                    <label htmlFor="phone" className="font-poppins text-xs font-bold text-navy uppercase tracking-wider mb-2 flex items-center">
                      <FaPhoneAlt className="mr-1.5 text-gold text-xs" /> Phone Number <span className="text-maple ml-0.5">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      disabled={isSubmitting}
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. (506) 478-3683"
                      className={`w-full px-4 py-3 rounded-xl border font-poppins text-sm bg-slate-50 focus:outline-none focus:ring-2 focus:bg-white transition-all disabled:opacity-50 ${
                        errors.phone ? 'border-maple focus:ring-maple/20' : 'border-slate-200 focus:ring-gold/20 focus:border-gold'
                      }`}
                    />
                    {errors.phone && <span className="text-maple text-xs font-semibold mt-1.5">{errors.phone}</span>}
                  </div>

                  {/* Email */}
                  <div className="flex flex-col md:col-span-2">
                    <label htmlFor="email" className="font-poppins text-xs font-bold text-navy uppercase tracking-wider mb-2 flex items-center">
                      <FaEnvelope className="mr-1.5 text-gold text-xs" /> Email Address <span className="text-maple ml-0.5">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      disabled={isSubmitting}
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. sarah@example.com"
                      className={`w-full px-4 py-3 rounded-xl border font-poppins text-sm bg-slate-50 focus:outline-none focus:ring-2 focus:bg-white transition-all disabled:opacity-50 ${
                        errors.email ? 'border-maple focus:ring-maple/20' : 'border-slate-200 focus:ring-gold/20 focus:border-gold'
                      }`}
                    />
                    {errors.email && <span className="text-maple text-xs font-semibold mt-1.5">{errors.email}</span>}
                  </div>

                  {/* Moving From */}
                  <div className="flex flex-col">
                    <label htmlFor="movingFrom" className="font-poppins text-xs font-bold text-navy uppercase tracking-wider mb-2 flex items-center">
                      <FaMapMarkerAlt className="mr-1.5 text-gold text-xs" /> Moving From (Pickup) <span className="text-maple ml-0.5">*</span>
                    </label>
                    <input
                      type="text"
                      id="movingFrom"
                      name="movingFrom"
                      disabled={isSubmitting}
                      value={formData.movingFrom}
                      onChange={handleChange}
                      placeholder="e.g. Fredericton, NB"
                      className={`w-full px-4 py-3 rounded-xl border font-poppins text-sm bg-slate-50 focus:outline-none focus:ring-2 focus:bg-white transition-all disabled:opacity-50 ${
                        errors.movingFrom ? 'border-maple focus:ring-maple/20' : 'border-slate-200 focus:ring-gold/20 focus:border-gold'
                      }`}
                    />
                    {errors.movingFrom && <span className="text-maple text-xs font-semibold mt-1.5">{errors.movingFrom}</span>}
                  </div>

                  {/* Moving To */}
                  <div className="flex flex-col">
                    <label htmlFor="movingTo" className="font-poppins text-xs font-bold text-navy uppercase tracking-wider mb-2 flex items-center">
                      <FaMapMarkerAlt className="mr-1.5 text-gold text-xs" /> Moving To (Destination) <span className="text-maple ml-0.5">*</span>
                    </label>
                    <input
                      type="text"
                      id="movingTo"
                      name="movingTo"
                      disabled={isSubmitting}
                      value={formData.movingTo}
                      onChange={handleChange}
                      placeholder="e.g. Saint John, NB"
                      className={`w-full px-4 py-3 rounded-xl border font-poppins text-sm bg-slate-50 focus:outline-none focus:ring-2 focus:bg-white transition-all disabled:opacity-50 ${
                        errors.movingTo ? 'border-maple focus:ring-maple/20' : 'border-slate-200 focus:ring-gold/20 focus:border-gold'
                      }`}
                    />
                    {errors.movingTo && <span className="text-maple text-xs font-semibold mt-1.5">{errors.movingTo}</span>}
                  </div>

                  {/* Move Date */}
                  <div className="flex flex-col">
                    <label htmlFor="moveDate" className="font-poppins text-xs font-bold text-navy uppercase tracking-wider mb-2 flex items-center">
                      <FaCalendarAlt className="mr-1.5 text-gold text-xs" /> Move Date <span className="text-maple ml-0.5">*</span>
                    </label>
                    <input
                      type="date"
                      id="moveDate"
                      name="moveDate"
                      disabled={isSubmitting}
                      value={formData.moveDate}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border font-poppins text-sm bg-slate-50 focus:outline-none focus:ring-2 focus:bg-white transition-all disabled:opacity-50 ${
                        errors.moveDate ? 'border-maple focus:ring-maple/20' : 'border-slate-200 focus:ring-gold/20 focus:border-gold'
                      }`}
                    />
                    {errors.moveDate && <span className="text-maple text-xs font-semibold mt-1.5">{errors.moveDate}</span>}
                  </div>

                  {/* Type of Move */}
                  <div className="flex flex-col">
                    <label htmlFor="moveType" className="font-poppins text-xs font-bold text-navy uppercase tracking-wider mb-2 flex items-center">
                      <FaTruck className="mr-1.5 text-gold text-xs" /> Service Required <span className="text-maple ml-0.5">*</span>
                    </label>
                    <select
                      id="moveType"
                      name="moveType"
                      disabled={isSubmitting}
                      value={formData.moveType}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border font-poppins text-sm bg-slate-50 focus:outline-none focus:ring-2 focus:bg-white transition-all appearance-none disabled:opacity-50 ${
                        errors.moveType ? 'border-maple focus:ring-maple/20' : 'border-slate-200 focus:ring-gold/20 focus:border-gold'
                      }`}
                    >
                      <option value="">Select Option</option>
                      <option value="Residential Move">Residential Move</option>
                      <option value="Commercial & Office Move">Commercial & Office Move</option>
                      <option value="Apartment & Condo Move">Apartment & Condo Move</option>
                      <option value="Senior Moving Assistance">Senior Moving Assistance</option>
                      <option value="Student Move">Student Move</option>
                      <option value="Moving + Storage Solution">Moving + Storage Solution</option>
                      <option value="Moving + Post-Move Clean-Up">Moving + Post-Move Clean-Up</option>
                      <option value="Furniture/Single-Item Delivery">Furniture/Single-Item Delivery</option>
                      <option value="Heavy Item Moving (Piano, Safe, etc.)">Heavy Item Moving</option>
                      <option value="Short-Term Labour / Unloading help">Short-Term Labour</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.moveType && <span className="text-maple text-xs font-semibold mt-1.5">{errors.moveType}</span>}
                  </div>
                </div>

                {/* Additional Details */}
                <div className="flex flex-col">
                  <label htmlFor="additionalDetails" className="font-poppins text-xs font-bold text-navy uppercase tracking-wider mb-2 flex items-center">
                    <FaRegFileAlt className="mr-1.5 text-gold text-xs" /> Additional Details (Optional)
                  </label>
                  <textarea
                    id="additionalDetails"
                    name="additionalDetails"
                    disabled={isSubmitting}
                    rows={4}
                    value={formData.additionalDetails}
                    onChange={handleChange}
                    placeholder="Tell us about stairs, heavy items, storage timing, or if you need post-move clean-up assistance..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 font-poppins text-sm bg-slate-50 focus:outline-none focus:ring-2 focus:ring-gold/20 focus:border-gold focus:bg-white transition-all disabled:opacity-50"
                  />
                </div>

                {/* Privacy & Spam Protection Note */}
                <div className="flex items-center space-x-2 text-xs text-slate-400 font-poppins pt-2">
                  <FaShieldAlt className="text-forest shrink-0" />
                  <span>Your details are delivered securely to medakmovingco@gmail.com and are never shared.</span>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gold hover:bg-gold-hover text-navy text-base font-bold py-4 rounded-xl transition-all duration-300 shadow-lg cursor-pointer flex items-center justify-center space-x-2 disabled:bg-slate-300 disabled:text-slate-500 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center space-x-3">
                        <div className="w-5 h-5 border-2 border-navy border-t-transparent rounded-full animate-spin" />
                        <span>Sending Your Request...</span>
                      </div>
                    ) : (
                      <span>Submit Quote Request</span>
                    )}
                  </button>
                </div>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', duration: 0.5 }}
                className="py-12 px-6 text-center space-y-6"
              >
                <div className="flex justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', delay: 0.2, stiffness: 120 }}
                  >
                    <FaCheckCircle className="text-forest text-7xl" />
                  </motion.div>
                </div>

                <h3 className="font-montserrat font-extrabold text-2xl sm:text-3xl text-navy">
                  Thank You!
                </h3>
                
                <p className="font-poppins text-slate-600 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
                  Your moving request has been received. A member of the Medak team will review your details and get in touch with you shortly.
                </p>

                <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
                  <button
                    onClick={() => {
                      setSubmitStatus('idle');
                      setErrorMessage('');
                    }}
                    className="bg-navy hover:bg-gold text-white hover:text-navy font-poppins font-bold text-sm px-6 py-3 rounded-xl transition-all duration-300"
                  >
                    Submit Another Request
                  </button>
                  <a
                    href="tel:5064783683"
                    className="bg-gold hover:bg-gold-hover text-navy font-poppins font-bold text-sm px-6 py-3 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <FaPhoneAlt />
                    <span>Need Immediate Help? Call Us</span>
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default QuoteForm;
