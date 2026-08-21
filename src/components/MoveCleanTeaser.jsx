import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaTruckMoving, FaBroom, FaArrowRight, FaCheck } from 'react-icons/fa';

const MoveCleanTeaser = () => {
  return (
    <section className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-navy via-navy to-slate-900 rounded-3xl p-8 sm:p-12 lg:p-16 text-white relative overflow-hidden border border-gold/20 shadow-2xl">
          {/* Subtle background glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-forest/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            {/* Left Info Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7 text-left space-y-6"
            >
              <div className="inline-flex items-center space-x-2 bg-gold/15 text-gold px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-gold/20">
                <span>Integrated Moving & Cleaning</span>
              </div>

              <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
                Move. Clean. Done.
              </h2>

              <p className="font-poppins text-white/90 text-sm sm:text-base leading-relaxed">
                Moving is easier when everything is coordinated in one place. With <strong>Medak & Kin Moving Inc.</strong> and <strong>Medak Prestige Cleaning</strong>, customers can combine professional moving services with post-move cleaning for a smoother transition.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/10 flex items-center space-x-3">
                  <div className="p-2 rounded-xl bg-gold/20 text-gold shrink-0">
                    <FaTruckMoving size={20} />
                  </div>
                  <span className="font-poppins text-xs sm:text-sm font-bold text-white">1. We Move It.</span>
                </div>

                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/10 flex items-center space-x-3">
                  <div className="p-2 rounded-xl bg-forest/30 text-emerald-400 shrink-0">
                    <FaBroom size={20} />
                  </div>
                  <span className="font-poppins text-xs sm:text-sm font-bold text-white">2. We Clean It.</span>
                </div>

                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/10 flex items-center space-x-3">
                  <div className="p-2 rounded-xl bg-yellow-400/20 text-yellow-300 shrink-0">
                    <FaCheck size={18} />
                  </div>
                  <span className="font-poppins text-xs sm:text-sm font-bold text-white">3. You Settle In.</span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/move-clean"
                  className="inline-flex items-center justify-center space-x-2 font-poppins font-bold bg-gold hover:bg-gold-hover text-navy px-8 py-3.5 rounded-full transition-all duration-300 shadow-lg text-sm"
                >
                  <span>Explore Move + Clean</span>
                  <FaArrowRight className="text-xs" />
                </Link>
              </div>
            </motion.div>

            {/* Right Highlight Box */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-5 bg-white/5 border border-white/15 rounded-3xl p-6 sm:p-8 backdrop-blur-md text-left space-y-4"
            >
              <h3 className="font-montserrat font-bold text-xl text-gold">
                Why Combine Move + Clean?
              </h3>
              <ul className="space-y-3 font-poppins text-xs sm:text-sm text-white/80">
                <li className="flex items-start space-x-3">
                  <span className="text-gold font-bold">•</span>
                  <span>Single contact point for both moving logistics and property cleaning.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-gold font-bold">•</span>
                  <span>Move-out cleanings ensure your old property is ready for sale or landlord inspection.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-gold font-bold">•</span>
                  <span>Move-in cleanings prepare your new space before boxes are unpacked.</span>
                </li>
              </ul>
              <div className="pt-2 border-t border-white/10 text-xs font-semibold text-emerald-400">
                ✨ Special Bundle Promotion Available on Combined Services
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoveCleanTeaser;
