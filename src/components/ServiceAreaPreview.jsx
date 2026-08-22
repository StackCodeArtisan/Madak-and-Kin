import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaCanadianMapleLeaf, FaArrowRight, FaTruck } from 'react-icons/fa';

const ServiceAreaPreview = () => {
  return (
    <section className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center space-x-2 text-forest font-semibold text-xs sm:text-sm uppercase tracking-widest mb-3">
            <FaCanadianMapleLeaf className="text-maple text-sm" />
            <span>Local Geographic Coverage</span>
          </div>
          <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl lg:text-5xl text-navy mb-4">
            Proudly Serving New Brunswick
          </h2>
          <p className="font-poppins text-slate-600 text-sm sm:text-base">
            Providing trusted local and long-distance moving solutions across major hubs and regional communities.
          </p>
        </div>

        {/* 3 Main City Cards Preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          
          {/* Fredericton */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-slate-50 border border-slate-200/80 rounded-3xl p-8 text-left flex flex-col justify-between hover:border-gold/40 transition-colors"
          >
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-navy text-gold p-3 rounded-2xl shrink-0">
                  <FaMapMarkerAlt className="text-xl" />
                </div>
                <div>
                  <h3 className="font-montserrat font-bold text-2xl text-navy">
                    Fredericton
                  </h3>
                  <span className="font-poppins text-[10px] text-forest font-bold uppercase tracking-wider">
                    Headquarters & Dispatch
                  </span>
                </div>
              </div>
              <p className="font-poppins text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                Capital Region moves, Northside/Southside, Oromocto, New Maryland, and surrounding areas.
              </p>
            </div>
          </motion.div>

          {/* Saint John */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-slate-50 border border-slate-200/80 rounded-3xl p-8 text-left flex flex-col justify-between hover:border-gold/40 transition-colors"
          >
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-navy text-gold p-3 rounded-2xl shrink-0">
                  <FaMapMarkerAlt className="text-xl" />
                </div>
                <div>
                  <h3 className="font-montserrat font-bold text-2xl text-navy">
                    Saint John
                  </h3>
                  <span className="font-poppins text-[10px] text-forest font-bold uppercase tracking-wider">
                    Port City Hub
                  </span>
                </div>
              </div>
              <p className="font-poppins text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                Uptown, West Saint John, Quispamsis, Rothesay, Grand Bay-Westfield, and Kennebecasis Valley.
              </p>
            </div>
          </motion.div>

          {/* Moncton & Province Wide */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="bg-navy text-white rounded-3xl p-8 text-left flex flex-col justify-between border border-gold/15"
          >
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-gold/20 text-gold p-3 rounded-2xl shrink-0">
                  <FaTruck className="text-xl" />
                </div>
                <div>
                  <h3 className="font-montserrat font-bold text-2xl text-white">
                    Moncton & NB
                  </h3>
                  <span className="font-poppins text-[10px] text-gold font-bold uppercase tracking-wider">
                    Long-Distance Transit
                  </span>
                </div>
              </div>
              <p className="font-poppins text-white/70 text-xs sm:text-sm leading-relaxed mb-4">
                Sussex, Woodstock, St. Stephen, St. Andrews, Moncton, and inter-city routes across New Brunswick.
              </p>
            </div>
          </motion.div>

        </div>

        {/* CTA to Service Areas Page */}
        <div className="text-center">
          <Link
            to="/service-areas"
            className="inline-flex items-center space-x-2 font-poppins font-bold bg-navy hover:bg-gold text-white hover:text-navy px-8 py-3.5 rounded-full transition-all text-sm shadow-md"
          >
            <span>Explore All Service Areas & Coverage</span>
            <FaArrowRight className="text-xs" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ServiceAreaPreview;
