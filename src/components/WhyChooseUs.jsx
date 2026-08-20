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
  FaWarehouse, 
  FaBroom 
} from 'react-icons/fa';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: FaCanadianMapleLeaf,
      title: 'Local Family Owned',
      desc: 'Based in Fredericton, NB. You work directly with a local family that cares about your move.'
    },
    {
      icon: FaShieldAlt,
      title: '100% Reliable',
      desc: 'Count on us to show up on time and execute the move safely, with personal accountability.'
    },
    {
      icon: FaWarehouse,
      title: 'Convenient Storage',
      desc: 'Storage options managed right at our 1941 Lincoln Road location when timing between homes varies.'
    },
    {
      icon: FaBroom,
      title: 'Post-Move Clean-Up',
      desc: 'Moving support that extends to tidying property mess, with sister-company deep cleaning access.'
    },
    {
      icon: FaHandHoldingUsd,
      title: 'Transparent Pricing',
      desc: 'Honest, clear estimates with zero hidden fees or surprise charges upfront.'
    },
    {
      icon: FaHands,
      title: 'Careful Handling',
      desc: 'We wrap, strap, and secure every item, treating your belongings with genuine respect.'
    },
    {
      icon: FaClock,
      title: 'Fast Response',
      desc: 'Quick quote turnarounds, efficient moving days, and direct dispatch communication.'
    },
    {
      icon: FaCalendarAlt,
      title: 'Flexible Scheduling',
      desc: 'Moving around your schedule, including weekend and holiday availability across New Brunswick.'
    },
    {
      icon: FaRegSmile,
      title: 'Friendly Care',
      desc: 'Warm, personable interactions at every step during what can be a stressful life transition.'
    },
    {
      icon: FaUsers,
      title: 'Experienced Crew',
      desc: 'Dedicated local movers trained to navigate stairs, narrow doorways, and heavy inventory.'
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
            <span>The Medak Difference</span>
          </div>
          <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            Why New Brunswick Trusts Medak & Kin
          </h2>
          <p className="font-poppins text-white/70 text-sm sm:text-base">
            You don't just hire a moving company. You work with a local family that cares about getting you safely through your relocation.
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
