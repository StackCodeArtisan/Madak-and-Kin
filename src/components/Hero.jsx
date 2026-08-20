import React from 'react';
import { motion } from 'framer-motion';
import { FaCanadianMapleLeaf, FaUserShield, FaRegCheckCircle, FaHome, FaPhoneAlt } from 'react-icons/fa';
import heroBg from '../img/hero_bg.png';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 20 },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: 'spring', stiffness: 120, damping: 15 },
    },
  };

  const floatAnimation = {
    animate: {
      y: [0, -8, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy pt-20">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Medak & Kin Professional Moving Truck"
          className="w-full h-full object-cover object-center scale-105"
        />
        {/* Subtle dark blue gradient overlay to ensure text contrast and premium feel */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-navy/30" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full flex flex-col items-start">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl text-left"
        >
          {/* Subtitle Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 mb-6"
          >
            <FaCanadianMapleLeaf className="text-maple text-base animate-pulse" />
            <span className="font-poppins text-xs font-semibold uppercase tracking-wider text-white">
              Fredericton & Saint John's Elite Movers
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="font-montserrat font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6"
          >
            Moving Made <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-400">
              Simple, Safe & Stress-Free
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="font-poppins text-base sm:text-lg text-white/80 leading-relaxed mb-8 max-w-xl"
          >
            Proudly serving Fredericton, Saint John, and surrounding communities with dependable residential and commercial moving services.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12"
          >
            <a
              href="#quote"
              onClick={handleScrollToQuote}
              className="font-poppins text-center font-bold bg-gold hover:bg-gold-hover text-navy px-8 py-4 rounded-full transition-all duration-300 shadow-[0_4px_20px_0_rgba(212,175,55,0.4)] hover:scale-[1.03] text-base"
            >
              Get Free Quote
            </a>
            <a
              href="tel:5064783683"
              className="font-poppins text-center flex items-center justify-center space-x-2 font-bold bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-full transition-all duration-300 backdrop-blur-sm hover:scale-[1.03] text-base"
            >
              <FaPhoneAlt className="text-gold" />
              <span>Call 506 478 3683</span>
            </a>
          </motion.div>

          {/* Trust Badges Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-white/10"
          >
            {[
              { icon: FaCanadianMapleLeaf, text: 'Canadian Owned', color: 'text-maple' },
              { icon: FaUserShield, text: 'Fully Professional', color: 'text-gold' },
              { icon: FaRegCheckCircle, text: 'Reliable Service', color: 'text-forest-light' },
              { icon: FaHome, text: 'Home & Office', color: 'text-blue-400' },
            ].map((badge, idx) => (
              <motion.div
                key={idx}
                variants={badgeVariants}
                className="flex items-center space-x-2.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-3"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
              >
                <badge.icon className={`${badge.color} text-lg shrink-0`} />
                <span className="font-poppins text-xs font-semibold text-white/90">
                  {badge.text}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Hero Visual Bottom Curve Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none z-10" />
    </section>
  );
};

export default Hero;
