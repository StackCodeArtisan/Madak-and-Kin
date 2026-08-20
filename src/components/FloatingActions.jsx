import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaPhoneAlt, FaArrowUp } from 'react-icons/fa';

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
    <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-3">
      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/15064783683"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-xl cursor-pointer transition-colors duration-300 border border-emerald-400/20"
        title="Chat on WhatsApp"
        aria-label="Chat with Medak & Kin Moving on WhatsApp"
      >
        <FaWhatsapp size={28} />
      </motion.a>

      {/* Call Button */}
      <motion.a
        href="tel:5064783683"
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-gold hover:bg-gold-hover text-navy rounded-full flex items-center justify-center shadow-xl cursor-pointer transition-colors duration-300 border border-gold/20"
        title="Call Now"
        aria-label="Call Medak & Kin Moving dispatch"
      >
        <FaPhoneAlt size={22} className="animate-pulse" />
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
            className="w-14 h-14 bg-navy hover:bg-navy-light text-gold rounded-full flex items-center justify-center shadow-xl cursor-pointer border border-gold/20 transition-colors duration-300"
            title="Back to Top"
            aria-label="Scroll back to top of the page"
          >
            <FaArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FloatingActions;
