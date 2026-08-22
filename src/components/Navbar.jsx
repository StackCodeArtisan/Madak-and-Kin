import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { FaPhoneAlt } from 'react-icons/fa';
import logoImg from '../img/01_OFFICIAL_Medak_Logo.png';

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
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Move + Clean', path: '/move-clean' },
    { name: 'About Us', path: '/about' },
    { name: 'Service Areas', path: '/service-areas' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-2.5 bg-navy/95 backdrop-blur-md border-b border-gold/20 shadow-lg'
          : 'py-3.5 bg-navy/90 border-b border-white/10 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Title - Enhanced Mobile Scale */}
          <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center space-x-2.5 group shrink-0">
            <img
              src={logoImg}
              alt="Medak & Kin Moving Inc. Official Logo"
              className="h-11 sm:h-13 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col text-left">
              <span className="font-spartan font-bold text-white text-base sm:text-lg leading-tight tracking-wider uppercase group-hover:text-gold transition-colors">
                Medak & Kin
              </span>
              <span className="font-poppins text-gold text-[10px] uppercase tracking-[0.22em] font-semibold">
                Moving Inc.
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-5 xl:space-x-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `font-poppins text-xs xl:text-sm font-medium transition-colors py-1.5 relative group ${
                    isActive ? 'text-gold font-bold' : 'text-white/90 hover:text-gold'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{link.name}</span>
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 bg-gold transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+15064554605"
              className="flex items-center space-x-2 font-poppins text-xs xl:text-sm font-semibold text-white hover:text-gold transition-colors"
            >
              <FaPhoneAlt className="text-gold text-xs" />
              <span>506-455-4605</span>
            </a>
            <Link
              to="/quote"
              className="font-poppins text-xs font-bold bg-gold hover:bg-gold-hover text-navy px-4 py-2.5 rounded-full transition-all duration-300 hover:scale-[1.02] shadow-[0_4px_14px_0_rgba(212,175,55,0.3)] uppercase tracking-wider shrink-0"
            >
              Get a Free Quote
            </Link>
          </div>

          {/* Mobile / Tablet Header Actions (Logo + Call + Hamburger) */}
          <div className="flex lg:hidden items-center space-x-2.5">
            <a
              href="tel:+15064554605"
              className="flex items-center space-x-1.5 font-poppins text-xs font-semibold bg-white/10 text-white px-3 py-1.5 rounded-full border border-white/20 hover:bg-white/20 transition-colors"
            >
              <FaPhoneAlt className="text-gold text-xs" />
              <span>Call</span>
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-gold focus:outline-none p-1.5 rounded-lg hover:bg-white/5 transition-colors"
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
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-navy-dark/98 border-b border-gold/20 backdrop-blur-xl overflow-hidden shadow-2xl"
          >
            <div className="px-4 pt-3 pb-6 space-y-1 text-left">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block font-poppins text-sm font-medium py-2.5 px-3 rounded-xl transition-all ${
                      isActive
                        ? 'bg-gold/15 text-gold font-bold border border-gold/30'
                        : 'text-white/90 hover:text-gold hover:bg-white/5'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}

              <div className="border-t border-white/10 pt-4 mt-3 flex flex-col space-y-3 px-1">
                <a
                  href="tel:+15064554605"
                  className="flex items-center space-x-3 font-poppins text-sm font-semibold text-white hover:text-gold py-1"
                >
                  <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                    <FaPhoneAlt size={12} />
                  </div>
                  <span>Call Dispatch: 506-455-4605</span>
                </a>
                <Link
                  to="/quote"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center font-poppins text-sm font-bold bg-gold hover:bg-gold-hover text-navy py-3 rounded-full transition-all duration-300 uppercase tracking-wider shadow-lg"
                >
                  Get a Free Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
