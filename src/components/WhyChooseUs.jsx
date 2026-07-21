import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaUsers, 
  FaShieldAlt, 
  FaHandHoldingUsd, 
  FaHands, 
  FaClock, 
  FaCalendarAlt, 
  FaRegSmile, 
  FaCanadianMapleLeaf, 
  FaTools, 
  FaLock 
} from 'react-icons/fa';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: FaUsers,
      title: 'Professional Team',
      desc: 'Our movers are highly trained, background-checked, and committed to excellent service.'
    },
    {
      icon: FaShieldAlt,
      title: 'Fully Reliable',
      desc: 'Count on us to show up on time and execute the move safely, with 100% accountability.'
    },
    {
      icon: FaHandHoldingUsd,
      title: 'Affordable Pricing',
      desc: 'Competitive, clear pricing with no hidden fees or surprise charges. Upfront transparency.'
    },
    {
      icon: FaHands,
      title: 'Careful Handling',
      desc: 'We wrap, strap, and secure every single item, treating your goods with extreme respect.'
    },
    {
      icon: FaClock,
      title: 'Fast Response',
      desc: 'Quick booking, efficient moving, and rapid customer support responses to any inquiries.'
    },
    {
      icon: FaCalendarAlt,
      title: 'Flexible Scheduling',
      desc: 'We move when it is convenient for you. We offer weekend, holiday, and off-hour bookings.'
    },
    {
      icon: FaRegSmile,
      title: 'Friendly Support',
      desc: 'Medak & Kin is known for friendly, helpful customer interactions at every stage.'
    },
    {
      icon: FaCanadianMapleLeaf,
      title: 'Canadian Owned',
      desc: 'Based proudly in Fredericton, NB, supporting our local New Brunswick economy.'
    },
    {
      icon: FaTools,
      title: 'Modern Equipment',
      desc: 'Equipped with top-tier trucks, moving straps, protective blankets, and dollies.'
    },
    {
      icon: FaLock,
      title: 'Safe Transportation',
      desc: 'Secure transport route planning and locked trucks keep your inventory safe from start to end.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 15 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    }
  };

  return (
    <section id="why-choose-us" className="py-20 sm:py-28 bg-navy text-white relative overflow-hidden">
      {/* Background visual shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-forest/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="flex items-center justify-center space-x-2 text-gold font-semibold text-xs sm:text-sm uppercase tracking-widest mb-3">
            <FaCanadianMapleLeaf className="text-maple text-sm" />
            <span>Why Choose Us</span>
          </div>
          <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            Why New Brunswick Trusts Medak & Kin
          </h2>
          <p className="font-poppins text-white/70 text-sm sm:text-base">
            We hold ourselves to a higher standard. We believe moving shouldn't be stressful, and we verify that by focusing on safety, transparency, and friendliness.
          </p>
        </div>

        {/* Reasons Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
        >
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, backgroundColor: 'rgba(255,255,255,0.06)' }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 text-left transition-all duration-300 flex flex-col justify-start"
              >
                <div className="text-gold mb-4 text-2xl bg-white/5 w-12 h-12 rounded-xl flex items-center justify-center border border-white/5">
                  <Icon />
                </div>
                <h3 className="font-montserrat font-bold text-base text-white mb-2 leading-tight">
                  {reason.title}
                </h3>
                <p className="font-poppins text-white/60 text-xs leading-relaxed">
                  {reason.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
        
      </div>
    </section>
  );
};

export default WhyChooseUs;
