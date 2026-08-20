import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaBroom, 
  FaTruckMoving, 
  FaHandshake, 
  FaCanadianMapleLeaf,
  FaArrowRight,
  FaPhoneAlt,
  FaStar
} from 'react-icons/fa';

const SisterCompanySection = () => {
  const handleScrollToQuote = (e) => {
    e.preventDefault();
    const targetElement = document.querySelector('#quote');
    if (targetElement) {
      const offset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="cleaning" className="py-20 sm:py-28 bg-slate-50 relative overflow-hidden">
      {/* Background Subtle Accent */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-forest/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center space-x-2 text-forest font-semibold text-xs sm:text-sm uppercase tracking-widest mb-3">
            <FaCanadianMapleLeaf className="text-maple text-sm" />
            <span>Medak Family Ecosystem</span>
          </div>
          <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl lg:text-5xl text-navy mb-4">
            More Than Moving — Part of the Medak Family
          </h2>
          <p className="font-poppins text-slate-600 text-sm sm:text-base leading-relaxed">
            When you're relocating, the work doesn't always end when the last box is unloaded. Through our family connections, we help make your transition complete from start to finish.
          </p>
        </div>

        {/* Dual Pillar Comparison / Ecosystem Box */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-12">
          
          {/* Pillar 1: Medak & Kin Moving + Post-Move Clean-up */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white border-2 border-navy/10 rounded-3xl p-8 sm:p-10 shadow-lg flex flex-col justify-between text-left relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 bg-navy text-gold text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-bl-2xl">
              Primary Service
            </div>

            <div>
              <div className="bg-navy text-gold w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-md">
                <FaTruckMoving />
              </div>

              <h3 className="font-montserrat font-extrabold text-2xl text-navy mb-2">
                Medak & Kin Moving Inc.
              </h3>
              <p className="font-poppins text-xs font-bold text-forest uppercase tracking-wider mb-4">
                Moving & Post-Move Clean-Up
              </p>
              
              <p className="font-poppins text-slate-600 text-sm leading-relaxed mb-6">
                Our moving team handles your physical relocation with extreme care. In addition to transport, we offer <strong className="text-navy">Post-Move Clean-Up</strong> to clear moving debris, tidy spaces after loading, and get your property ready for its next stage.
              </p>

              <ul className="space-y-2.5 mb-8">
                {[
                  'Residential & Commercial Moving',
                  'Post-Move Clean-Up & Debris Removal',
                  'Convenient Storage at Lincoln Road Location',
                  'Packing & Furniture Protection'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center space-x-2.5 font-poppins text-xs text-slate-700 font-semibold">
                    <span className="w-2 h-2 rounded-full bg-gold shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="#quote"
              onClick={handleScrollToQuote}
              className="inline-flex items-center justify-center space-x-2 font-poppins font-bold bg-navy hover:bg-gold text-white hover:text-navy px-6 py-3.5 rounded-xl transition-all duration-300 text-xs uppercase tracking-wider"
            >
              <span>Get Moving & Clean-Up Quote</span>
              <FaArrowRight />
            </a>
          </motion.div>

          {/* Pillar 2: Sister Company - Medak Prestige Cleaning */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gradient-to-br from-white to-slate-50 border-2 border-forest/20 rounded-3xl p-8 sm:p-10 shadow-lg flex flex-col justify-between text-left relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 bg-forest text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-bl-2xl">
              Sister Company
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
                Through our sister company, <strong className="text-navy">Medak Prestige Cleaning</strong>, the Medak family extends professional deep cleaning services. Whether you need your old home move-out cleaned or your new space sparkling clean before unpacking, you get services backed by the same family values.
              </p>

              <ul className="space-y-2.5 mb-8">
                {[
                  'Comprehensive Move-In & Move-Out Cleaning',
                  'Residential & Office Deep Cleaning',
                  'Shared Family Commitment to Quality',
                  'Trusted Local Service in New Brunswick'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center space-x-2.5 font-poppins text-xs text-slate-700 font-semibold">
                    <span className="w-2 h-2 rounded-full bg-forest shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#quote"
                onClick={handleScrollToQuote}
                className="flex-1 inline-flex items-center justify-center space-x-2 font-poppins font-bold bg-forest hover:bg-forest-light text-white px-6 py-3.5 rounded-xl transition-all duration-300 text-xs uppercase tracking-wider"
              >
                <span>Inquire About Cleaning</span>
                <FaStar />
              </a>
              <a
                href="tel:5064554605"
                className="inline-flex items-center justify-center space-x-2 font-poppins font-bold bg-white hover:bg-slate-100 text-navy border border-slate-200 px-5 py-3.5 rounded-xl transition-all duration-300 text-xs"
              >
                <FaPhoneAlt className="text-gold" />
                <span>Call Medak</span>
              </a>
            </div>
          </motion.div>

        </div>

        {/* Family Commitment Callout Banner */}
        <div className="bg-navy text-white rounded-2xl p-6 sm:p-8 border border-gold/20 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-4">
          <div className="flex items-center space-x-4">
            <div className="bg-gold/20 text-gold p-3.5 rounded-xl shrink-0 hidden sm:block">
              <FaHandshake size={28} />
            </div>
            <div>
              <h4 className="font-montserrat font-bold text-base text-white">
                One Local Family. Complete Peace of Mind.
              </h4>
              <p className="font-poppins text-xs text-white/70">
                Ask our team how we can coordinate moving, post-move clean-up, and sister-company cleaning for your upcoming relocation.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
            }}
            className="shrink-0 bg-gold hover:bg-gold-hover text-navy font-poppins font-bold text-xs px-6 py-3 rounded-full transition-all duration-300 uppercase tracking-wider"
          >
            Contact Family Dispatch
          </a>
        </div>

      </div>
    </section>
  );
};

export default SisterCompanySection;
