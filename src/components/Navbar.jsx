import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { FaPhoneAlt } from 'react-icons/fa';
import logoImg from '../img/logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Medak Family', href: '#medak-family' },
    { name: 'Services', href: '#services' },
    { name: 'Storage', href: '#storage' },
    { name: 'Cleaning Ecosystem', href: '#cleaning' },
    { name: 'Why Us', href: '#why-choose-us' },
    { name: 'Process', href: '#process' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleScrollTo = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = 80; // Navbar height offset
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'py-3 bg-navy/95 backdrop-blur-md border-b border-gold/20 shadow-lg'
            : 'py-5 bg-transparent border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#home" onClick={(e) => handleScrollTo(e, '#home')} className="flex items-center space-x-3 group">
              <img
                src={logoImg}
                alt="Medak & Kin Moving Inc."
                className={`transition-all duration-300 ${isScrolled ? 'h-10 sm:h-12' : 'h-12 sm:h-14'} w-auto`}
              />
              <div className="flex flex-col">
                <span className="font-spartan font-bold text-white text-lg leading-tight tracking-wider uppercase group-hover:text-gold transition-colors duration-300">
                  Medak & Kin
                </span>
                <span className="font-poppins text-gold text-[10px] uppercase tracking-[0.2em] font-semibold">
                  Moving Inc.
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden xl:flex items-center space-x-5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="font-poppins text-xs font-medium text-white/80 hover:text-gold transition-colors duration-200 relative group py-2"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            {/* Desktop CTA Buttons */}
            <div className="hidden xl:flex items-center space-x-4">
              <a
                href="tel:5064783683"
                className="flex items-center space-x-2 font-poppins text-xs sm:text-sm font-semibold text-white hover:text-gold transition-colors duration-200"
              >
                <FaPhoneAlt className="text-gold text-xs" />
                <span>506 478 3683</span>
              </a>
              <a
                href="#quote"
                onClick={(e) => handleScrollTo(e, '#quote')}
                className="font-poppins text-xs font-semibold bg-gold hover:bg-gold-hover text-navy px-4 py-2.5 rounded-full transition-all duration-300 hover:scale-[1.02] shadow-[0_4px_14px_0_rgba(212,175,55,0.3)] uppercase tracking-wider"
              >
                Free Quote
              </a>
            </div>

            {/* Mobile / Tablet Menu Button */}
            <div className="flex xl:hidden items-center space-x-3">
              <a
                href="tel:5064783683"
                className="flex items-center space-x-1.5 font-poppins text-xs font-semibold bg-white/10 text-white px-3 py-1.5 rounded-full border border-white/20"
              >
                <FaPhoneAlt className="text-gold text-xs" />
                <span>Call</span>
              </a>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-gold focus:outline-none p-1.5"
                aria-label="Toggle navigation menu"
              >
                {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="xl:hidden bg-navy-dark/98 border-b border-gold/10 backdrop-blur-lg overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-1 text-left">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleScrollTo(e, link.href)}
                    className="block font-poppins text-sm font-medium text-white/90 hover:text-gold py-2 px-3 rounded-lg hover:bg-white/5 transition-all"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="border-t border-white/10 pt-4 mt-4 flex flex-col space-y-3 px-3">
                  <a
                    href="tel:5064783683"
                    className="flex items-center space-x-3 font-poppins text-sm font-semibold text-white hover:text-gold"
                  >
                    <FaPhoneAlt className="text-gold" />
                    <span>Call: 506 478 3683</span>
                  </a>
                  <a
                    href="#quote"
                    onClick={(e) => handleScrollTo(e, '#quote')}
                    className="w-full text-center font-poppins text-sm font-semibold bg-gold hover:bg-gold-hover text-navy py-3 rounded-full transition-all duration-300 uppercase tracking-wider"
                  >
                    Get Free Quote
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
