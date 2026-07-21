import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCalendarAlt, FaMapMarkerAlt, FaUser, FaPhoneAlt, FaEnvelope, FaTruck, FaRegFileAlt, FaCheckCircle, FaCanadianMapleLeaf } from 'react-icons/fa';

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    movingFrom: '',
    movingTo: '',
    moveDate: '',
    moveType: '',
    additionalDetails: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        movingFrom: '',
        movingTo: '',
        moveDate: '',
        moveType: '',
        additionalDetails: ''
      });
    }, 1500);
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
            <span>Get a free estimate</span>
          </div>
          <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            Request A Free Quote
          </h2>
          <p className="font-poppins text-white/70 text-sm sm:text-base">
            Provide details of your upcoming relocation, and our expert planning team will generate a customized, zero-obligation estimate.
          </p>
        </div>

        <div className="bg-white text-slate-800 rounded-3xl p-6 sm:p-12 shadow-2xl border border-white/10 relative overflow-hidden">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-6 text-left"
              >
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
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className={`w-full px-4 py-3 rounded-xl border font-poppins text-sm bg-slate-50 focus:outline-none focus:ring-2 focus:bg-white transition-all ${
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
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. (506) 455-4605"
                      className={`w-full px-4 py-3 rounded-xl border font-poppins text-sm bg-slate-50 focus:outline-none focus:ring-2 focus:bg-white transition-all ${
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
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. john@example.com"
                      className={`w-full px-4 py-3 rounded-xl border font-poppins text-sm bg-slate-50 focus:outline-none focus:ring-2 focus:bg-white transition-all ${
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
                      value={formData.movingFrom}
                      onChange={handleChange}
                      placeholder="e.g. Fredericton, NB"
                      className={`w-full px-4 py-3 rounded-xl border font-poppins text-sm bg-slate-50 focus:outline-none focus:ring-2 focus:bg-white transition-all ${
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
                      value={formData.movingTo}
                      onChange={handleChange}
                      placeholder="e.g. Saint John, NB"
                      className={`w-full px-4 py-3 rounded-xl border font-poppins text-sm bg-slate-50 focus:outline-none focus:ring-2 focus:bg-white transition-all ${
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
                      value={formData.moveDate}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border font-poppins text-sm bg-slate-50 focus:outline-none focus:ring-2 focus:bg-white transition-all ${
                        errors.moveDate ? 'border-maple focus:ring-maple/20' : 'border-slate-200 focus:ring-gold/20 focus:border-gold'
                      }`}
                    />
                    {errors.moveDate && <span className="text-maple text-xs font-semibold mt-1.5">{errors.moveDate}</span>}
                  </div>

                  {/* Type of Move */}
                  <div className="flex flex-col">
                    <label htmlFor="moveType" className="font-poppins text-xs font-bold text-navy uppercase tracking-wider mb-2 flex items-center">
                      <FaTruck className="mr-1.5 text-gold text-xs" /> Type of Move <span className="text-maple ml-0.5">*</span>
                    </label>
                    <select
                      id="moveType"
                      name="moveType"
                      value={formData.moveType}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border font-poppins text-sm bg-slate-50 focus:outline-none focus:ring-2 focus:bg-white transition-all appearance-none ${
                        errors.moveType ? 'border-maple focus:ring-maple/20' : 'border-slate-200 focus:ring-gold/20 focus:border-gold'
                      }`}
                    >
                      <option value="">Select Option</option>
                      <option value="Residential Move">Residential Move</option>
                      <option value="Commercial & Office Move">Commercial & Office Move</option>
                      <option value="Apartment & Condo Move">Apartment & Condo Move</option>
                      <option value="Senior Moving Assistance">Senior Moving Assistance</option>
                      <option value="Student Move">Student Move</option>
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
                    rows={4}
                    value={formData.additionalDetails}
                    onChange={handleChange}
                    placeholder="Tell us about stairs, heavy items, narrow doorways, or if you need packing materials..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 font-poppins text-sm bg-slate-50 focus:outline-none focus:ring-2 focus:ring-gold/20 focus:border-gold focus:bg-white transition-all"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gold hover:bg-gold-hover text-navy text-base font-bold py-4 rounded-xl transition-all duration-300 shadow-lg cursor-pointer flex items-center justify-center space-x-2 disabled:bg-slate-300 disabled:text-slate-500 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-navy border-t-transparent rounded-full animate-spin" />
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
                  Your quote request has been received. Our planning specialists are reviewing the details and will contact you with your custom estimate shortly.
                </p>

                <div className="pt-6">
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="bg-navy hover:bg-gold text-white hover:text-navy font-poppins font-bold text-sm px-6 py-3 rounded-xl transition-all duration-300"
                  >
                    Submit Another Request
                  </button>
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
