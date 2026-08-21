import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaTruckMoving, FaBroom, FaCheckCircle, FaCanadianMapleLeaf, FaPhoneAlt, FaStar, FaHandshake } from 'react-icons/fa';

const MoveCleanPage = () => {
  return (
    <div className="pt-24 pb-16 bg-white min-h-screen">
      {/* Hero Banner */}
      <section className="bg-navy text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          <div className="flex items-center space-x-2 text-gold font-semibold text-xs sm:text-sm uppercase tracking-widest mb-3">
            <FaCanadianMapleLeaf className="text-maple text-sm" />
            <span>Integrated Moving & Cleaning Solutions</span>
          </div>
          <h1 className="font-montserrat font-extrabold text-4xl sm:text-5xl text-white mb-4">
            Move + Clean Services
          </h1>
          <p className="font-poppins text-white/80 text-base sm:text-lg max-w-2xl leading-relaxed">
            One team, one point of contact, complete peace of mind. Combine professional moving with deep property cleaning for a seamless relocation experience.
          </p>
        </div>
      </section>

      {/* Main Dual Pillars Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl text-navy mb-4">
              Move. Clean. Settle In.
            </h2>
            <p className="font-poppins text-slate-600 text-base leading-relaxed">
              When you're relocating, the work doesn't end when the last box is unloaded. Through Professional Cleaning via <strong>Medak Prestige Cleaning</strong>, we help make your transition complete from start to finish.
            </p>
          </div>

          {/* 2 Main Pillar Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            
            {/* Pillar 1: Moving */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white border-2 border-navy/10 rounded-3xl p-8 sm:p-10 shadow-lg flex flex-col justify-between text-left relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 bg-navy text-gold text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-bl-2xl">
                Relocation Core
              </div>

              <div>
                <div className="bg-navy text-gold w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-md">
                  <FaTruckMoving />
                </div>
                <h3 className="font-montserrat font-extrabold text-2xl text-navy mb-2">
                  Medak & Kin Moving Inc.
                </h3>
                <p className="font-poppins text-xs font-bold text-forest uppercase tracking-wider mb-4">
                  Professional Relocation & Packing
                </p>
                <p className="font-poppins text-slate-600 text-sm leading-relaxed mb-6">
                  Our moving crew handles your physical relocation with care, safety, and efficiency.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    'Residential & Commercial Relocations',
                    'Furniture Disassembly & Reassembly',
                    'Blanket Wrapping & Protective Padding',
                    'Storage Coordination at Lincoln Road'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center space-x-2.5 font-poppins text-xs sm:text-sm text-slate-700 font-semibold">
                      <FaCheckCircle className="text-gold shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                to="/quote"
                className="w-full inline-flex items-center justify-center space-x-2 font-poppins font-bold bg-navy hover:bg-gold text-white hover:text-navy py-3.5 rounded-xl transition-all text-xs uppercase tracking-wider"
              >
                <span>Get Moving Quote</span>
              </Link>
            </motion.div>

            {/* Pillar 2: Cleaning */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white border-2 border-forest/20 rounded-3xl p-8 sm:p-10 shadow-lg flex flex-col justify-between text-left relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 bg-forest text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-bl-2xl">
                Property Care
              </div>

              <div>
                <div className="bg-forest text-white w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-md">
                  <FaBroom />
                </div>
                <h3 className="font-montserrat font-extrabold text-2xl text-navy mb-2">
                  Medak Prestige Cleaning
                </h3>
                <p className="font-poppins text-xs font-bold text-forest uppercase tracking-wider mb-4">
                  Professional Deep Cleaning Services
                </p>
                <p className="font-poppins text-slate-600 text-sm leading-relaxed mb-6">
                  Professional Cleaning Through Medak Prestige Cleaning ensures your old home is left spotless or your new home is fresh before unpacking.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    'Comprehensive Move-In & Move-Out Deep Cleanings',
                    'Residential Home & Apartment Sanitation',
                    'Commercial Office & Facility Cleaning',
                    'Shared Commitment to Quality and Trust'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center space-x-2.5 font-poppins text-xs sm:text-sm text-slate-700 font-semibold">
                      <FaCheckCircle className="text-forest shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                to="/quote"
                className="w-full inline-flex items-center justify-center space-x-2 font-poppins font-bold bg-forest hover:bg-forest-light text-white py-3.5 rounded-xl transition-all text-xs uppercase tracking-wider"
              >
                <FaStar className="text-gold" />
                <span>Inquire About Move + Clean</span>
              </Link>
            </motion.div>

          </div>

          {/* Bundle Callout */}
          <div className="bg-navy text-white rounded-3xl p-8 sm:p-12 border border-gold/20 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 text-left">
            <div className="flex items-center space-x-5">
              <div className="p-4 rounded-2xl bg-gold/15 text-gold shrink-0 hidden sm:block">
                <FaHandshake size={32} />
              </div>
              <div className="space-y-2">
                <h3 className="font-montserrat font-bold text-xl sm:text-2xl text-gold">
                  Move + Clean Advantage
                </h3>
                <p className="font-poppins text-xs sm:text-sm text-white/80 max-w-xl leading-relaxed">
                  Customers who book their moving and cleaning services together can save $50 on their cleaning service! Ask our dispatch team when requesting your quote.
                </p>
              </div>
            </div>
            <Link
              to="/quote"
              className="shrink-0 font-poppins font-bold bg-gold hover:bg-gold-hover text-navy px-8 py-3.5 rounded-full transition-all text-xs uppercase tracking-wider shadow-lg"
            >
              Book Combined Services
            </Link>
          </div>

        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="font-montserrat font-extrabold text-3xl text-navy">
            Questions About Move + Clean Packages?
          </h2>
          <p className="font-poppins text-slate-600 text-base">
            Call our team to coordinate custom moving dates and property cleaning schedules.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              to="/quote"
              className="w-full sm:w-auto font-poppins font-bold bg-gold hover:bg-gold-hover text-navy px-8 py-3.5 rounded-full transition-all text-sm uppercase tracking-wider shadow-lg"
            >
              Get a Free Quote
            </Link>
            <a
              href="tel:+15064554605"
              className="w-full sm:w-auto font-poppins font-bold bg-navy text-white px-8 py-3.5 rounded-full transition-all text-sm flex items-center justify-center space-x-2"
            >
              <FaPhoneAlt className="text-gold text-xs" />
              <span>Call 506-455-4605</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MoveCleanPage;
