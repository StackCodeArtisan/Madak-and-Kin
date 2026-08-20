import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaWarehouse, 
  FaMapMarkerAlt, 
  FaBoxes, 
  FaExchangeAlt, 
  FaHome, 
  FaHammer, 
  FaCanadianMapleLeaf,
  FaArrowRight
} from 'react-icons/fa';

const StorageSection = () => {
  const storageScenarios = [
    {
      icon: FaExchangeAlt,
      title: 'Transitioning Between Homes',
      desc: 'Move out of your old space before your new home is ready with seamless storage timing.'
    },
    {
      icon: FaHome,
      title: 'Delayed Closing Dates',
      desc: 'When real estate closing dates don\'t align, avoid double-handling by coordinating move & storage.'
    },
    {
      icon: FaHammer,
      title: 'Renovations & Staging',
      desc: 'Clear out furniture and household items safely while remodeling or preparing your property.'
    },
    {
      icon: FaBoxes,
      title: 'Downsizing & Extra Space',
      desc: 'Take your time sorting through possessions without cluttering your new living space.'
    }
  ];

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
    <section id="storage" className="py-20 sm:py-28 bg-navy text-white relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-forest/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center space-x-2 text-gold font-semibold text-xs sm:text-sm uppercase tracking-widest mb-3">
            <FaCanadianMapleLeaf className="text-maple text-sm" />
            <span>🍁 CONVENIENT STORAGE SOLUTIONS</span>
          </div>
          <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            Need Storage Before, During, or After Your Move?
          </h2>
          <p className="font-poppins text-white/80 text-sm sm:text-base leading-relaxed">
            Medak Moving Inc. can help make the process easier. Our office is conveniently located on-site at{' '}
            <a
              href="https://www.sam-storage.ca/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold font-bold underline hover:text-gold-hover transition-colors"
            >
              Sam’s Storage
            </a>
            , giving our clients easy access to moving and storage solutions in one location.
          </p>
        </div>

        {/* Location Advantage Feature Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white/5 border border-gold/20 rounded-3xl p-8 sm:p-12 mb-12 relative overflow-hidden backdrop-blur-sm"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 text-left space-y-4">
              <div className="inline-flex items-center space-x-2 bg-gold/15 text-gold px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                <FaMapMarkerAlt />
                <span>One Move. One Convenient Location.</span>
              </div>
              <h3 className="font-montserrat font-extrabold text-2xl sm:text-3xl text-white">
                Seamless Moving & Storage Coordination
              </h3>
              <p className="font-poppins text-white/90 text-sm sm:text-base leading-relaxed">
                Whether you're downsizing, between homes, preparing for a closing date, renovating, or simply need extra space, we can:
              </p>
              
              <ul className="space-y-2.5 text-left font-poppins text-sm text-white/80 pt-2">
                <li className="flex items-start space-x-3">
                  <span className="text-gold font-bold mt-0.5">•</span>
                  <span>
                    Help connect you with storage options at{' '}
                    <a
                      href="https://www.sam-storage.ca/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gold font-bold underline hover:text-gold-hover transition-colors"
                    >
                      Sam’s Storage
                    </a>
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-gold font-bold mt-0.5">•</span>
                  <span>Move your belongings directly into storage</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-gold font-bold mt-0.5">•</span>
                  <span>Pick up belongings from storage and deliver them to your new location</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-gold font-bold mt-0.5">•</span>
                  <span>Coordinate moving and storage timing to help simplify your transition</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-gold font-bold mt-0.5">•</span>
                  <span>Assist with short-term or longer-term storage needs</span>
                </li>
              </ul>

              <p className="font-poppins text-gold/90 text-sm font-medium pt-3 italic">
                By operating from the Sam’s Storage property, Medak Moving can help take some of the stress out of coordinating multiple locations during your move.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center">
              <div className="bg-gold text-navy p-6 rounded-2xl mb-4 shadow-xl">
                <FaWarehouse size={48} />
              </div>
              <a
                href="#quote"
                onClick={handleScrollToQuote}
                className="w-full sm:w-auto font-poppins text-center font-bold bg-gold hover:bg-gold-hover text-navy px-8 py-3.5 rounded-full transition-all duration-300 shadow-[0_4px_14px_0_rgba(212,175,55,0.3)] hover:scale-[1.02] text-sm flex items-center justify-center space-x-2"
              >
                <span>Ask About Storage</span>
                <FaArrowRight className="text-xs" />
              </a>
            </div>

          </div>
        </motion.div>

        {/* Scenarios Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left mb-12">
          {storageScenarios.map((scenario, idx) => {
            const Icon = scenario.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white/5 border border-white/10 hover:border-gold/30 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-navy-light text-gold flex items-center justify-center text-xl mb-5 group-hover:bg-gold group-hover:text-navy transition-colors duration-300">
                    <Icon />
                  </div>
                  <h4 className="font-montserrat font-bold text-base text-white mb-2 leading-snug">
                    {scenario.title}
                  </h4>
                  <p className="font-poppins text-white/60 text-xs leading-relaxed">
                    {scenario.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Disclaimer / Fine Print Box */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center max-w-4xl mx-auto">
          <p className="font-poppins text-xs sm:text-sm text-white/70 leading-relaxed">
            Storage units are rented and managed independently by{' '}
            <a
              href="https://www.sam-storage.ca/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold font-bold underline hover:text-gold-hover transition-colors"
            >
              Sam’s Storage
            </a>
            . Storage availability, pricing and rental terms are determined by Sam’s Storage. Medak Moving Inc. provides moving services and storage coordination assistance.
          </p>
        </div>

      </div>
    </section>
  );
};

export default StorageSection;
