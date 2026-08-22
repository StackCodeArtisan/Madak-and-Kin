import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaArrowRight, FaCanadianMapleLeaf, FaShieldAlt } from 'react-icons/fa';

const FinalQuoteCTA = () => {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-br from-navy via-navy-dark to-slate-950 text-white relative overflow-hidden">
      {/* Background visual accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-forest/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 mb-2"
        >
          <FaCanadianMapleLeaf className="text-maple text-base animate-pulse" />
          <span className="font-poppins text-xs font-semibold uppercase tracking-wider text-white">
            Ready For A Stress-Free Move?
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-montserrat font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight"
        >
          Let Our Family Handle Your Upcoming Relocation
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-poppins text-white/80 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
        >
          Get an instant, transparent moving quote tailored to your exact property, timeline, and location across New Brunswick.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <Link
            to="/quote"
            className="w-full sm:w-auto font-poppins font-bold bg-gold hover:bg-gold-hover text-navy px-9 py-4 rounded-full transition-all duration-300 shadow-[0_4px_20px_0_rgba(212,175,55,0.4)] hover:scale-[1.03] text-base flex items-center justify-center space-x-2 uppercase tracking-wider"
          >
            <span>Get a Free Quote</span>
            <FaArrowRight className="text-xs" />
          </Link>

          <a
            href="tel:+15064554605"
            className="w-full sm:w-auto font-poppins font-bold bg-white/10 hover:bg-white/20 text-white border border-white/30 px-9 py-4 rounded-full transition-all duration-300 backdrop-blur-sm hover:scale-[1.03] text-base flex items-center justify-center space-x-2"
          >
            <FaPhoneAlt className="text-gold text-sm" />
            <span>Call 506-455-4605</span>
          </a>
        </motion.div>

        <div className="flex items-center justify-center space-x-2 text-xs text-white/50 pt-4 font-poppins">
          <FaShieldAlt className="text-forest text-sm" />
          <span>No obligation. Clear pricing with zero hidden fees.</span>
        </div>
      </div>
    </section>
  );
};

export default FinalQuoteCTA;
