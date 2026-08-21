import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaArrowUp } from 'react-icons/fa';

const FloatingActions = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-3 pointer-events-auto">
      {/* WhatsApp / Text Button */}
      <motion.a
        href="https://wa.me/15064783683"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        className="w-13 h-13 sm:w-14 sm:h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-xl cursor-pointer transition-colors duration-300 border border-emerald-400/20"
        title="WhatsApp / Text 506-478-3683"
        aria-label="WhatsApp or Text Medak & Kin Moving at 506-478-3683"
      >
        <FaWhatsapp size={26} />
      </motion.a>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-13 h-13 sm:w-14 sm:h-14 bg-navy hover:bg-navy-light text-gold rounded-full flex items-center justify-center shadow-xl cursor-pointer border border-gold/20 transition-colors duration-300"
            title="Back to Top"
            aria-label="Scroll back to top of the page"
          >
            <FaArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FloatingActions;
