import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCanadianMapleLeaf, FaPhoneAlt, FaArrowRight } from 'react-icons/fa';
import heroBgDesktop from '../img/hero_bg_desktop.png';
import heroBgMobile from '../img/hero_bg_mobile.png';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 20 },
    },
  };

  return (
    <section id="home" className="relative min-h-[85vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-navy pt-24 pb-16 sm:pb-24">
      {/* Responsive Background Image using Picture tag */}
      <div className="absolute inset-0 z-0">
        <picture className="w-full h-full">
          <source media="(max-width: 767px)" srcset={heroBgMobile} />
          <source media="(min-width: 768px)" srcset={heroBgDesktop} />
          <img
            src={heroBgDesktop}
            alt="Medak & Kin Professional Moving Truck and Team"
            className="w-full h-full object-cover object-center scale-105"
            loading="eager"
          />
        </picture>
        
        {/* Dark blue gradient overlays for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/85 to-navy/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-navy/30" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 w-full flex flex-col items-start">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl text-left"
        >
          {/* Service Area Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 mb-6"
          >
            <FaCanadianMapleLeaf className="text-maple text-base animate-pulse shrink-0" />
            <span className="font-poppins text-xs sm:text-sm font-semibold uppercase tracking-wider text-white">
              PROUDLY SERVING FREDERICTON, SAINT JOHN & SURROUNDING COMMUNITIES.
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-montserrat font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6"
          >
            Moving Made <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-400">
              Simple, Safe & Stress-Free
            </span>
          </motion.h1>

          {/* Supporting Subheading */}
          <motion.p
            variants={itemVariants}
            className="font-poppins text-base sm:text-lg text-white/90 leading-relaxed mb-8 max-w-xl"
          >
            Dependable residential and commercial moving services built on personal trust, care, and genuine respect for your home and belongings.
          </motion.p>

          {/* CTA Buttons - End of Mobile Hero */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <Link
              to="/quote"
              className="font-poppins text-center font-bold bg-gold hover:bg-gold-hover text-navy px-8 py-4 rounded-full transition-all duration-300 shadow-[0_4px_20px_0_rgba(212,175,55,0.4)] hover:scale-[1.03] text-base flex items-center justify-center space-x-2"
            >
              <span>Get a Free Quote</span>
              <FaArrowRight className="text-xs" />
            </Link>

            <a
              href="tel:+15064554605"
              className="font-poppins text-center flex items-center justify-center space-x-2 font-bold bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-full transition-all duration-300 backdrop-blur-sm hover:scale-[1.03] text-base"
            >
              <FaPhoneAlt className="text-gold text-sm" />
              <span>Call 506-455-4605</span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Hero Visual Bottom Curve Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-slate-50 to-transparent pointer-events-none z-10" />
    </section>
  );
};

export default Hero;
