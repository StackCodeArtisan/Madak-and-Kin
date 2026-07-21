import React from 'react';
import { motion } from 'framer-motion';
import { FaFileInvoiceDollar, FaCalendarAlt, FaBox, FaTruckMoving, FaHandshake, FaCanadianMapleLeaf } from 'react-icons/fa';

const Process = () => {
  const steps = [
    {
      icon: FaFileInvoiceDollar,
      number: '01',
      title: 'Request Quote',
      desc: 'Fill out our quick online quote form with details of your move, and our team will get back to you with a free, transparent estimate.'
    },
    {
      icon: FaCalendarAlt,
      number: '02',
      title: 'Schedule Move',
      desc: 'Confirm details and secure your move date with our dispatch team. We lock in your time slots and outline the full game plan.'
    },
    {
      icon: FaBox,
      number: '03',
      title: 'Careful Packing',
      desc: 'We arrive with premium supplies. We pack and wrap all fragile belongings and double-check labels to prepare for transport.'
    },
    {
      icon: FaTruckMoving,
      number: '04',
      title: 'Moving Day',
      desc: 'Our professional crew loads our trucks safely, secures the goods, and transports them to your new home or commercial office.'
    },
    {
      icon: FaHandshake,
      number: '05',
      title: 'Successful Delivery',
      desc: 'We unload your items, place them in the correct rooms, help unpack, and confirm that you are completely satisfied before leaving.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 80, damping: 15 }
    }
  };

  return (
    <section id="process" className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <div className="flex items-center justify-center space-x-2 text-forest font-semibold text-xs sm:text-sm uppercase tracking-widest mb-3">
            <FaCanadianMapleLeaf className="text-maple text-sm" />
            <span>How it works</span>
          </div>
          <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl lg:text-5xl text-navy mb-4">
            Our Moving Process
          </h2>
          <p className="font-poppins text-slate-600 text-sm sm:text-base">
            From the initial online quote to placement of the final box, we handle everything with care and planning to verify a stress-free transition.
          </p>
        </div>

        {/* Timeline Path */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="relative"
        >
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[59px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-navy/5 via-gold to-navy/5 -z-10" />

          {/* Timeline Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-6 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex flex-col items-center text-center relative group"
                >
                  {/* Step Circle & Icon */}
                  <div className="relative mb-6">
                    {/* Circle badge */}
                    <div className="w-28 h-28 rounded-full bg-navy flex items-center justify-center border-4 border-white shadow-xl relative transition-all duration-300 group-hover:scale-105 group-hover:border-gold">
                      <Icon className="text-3xl text-gold" />
                      
                      {/* Step Number Tag */}
                      <span className="absolute -top-1 -right-1 bg-gold text-navy text-xs font-spartan font-bold w-7 h-7 rounded-full flex items-center justify-center border-2 border-white shadow-md">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Step Details */}
                  <h3 className="font-montserrat font-bold text-lg text-navy mb-3">
                    {step.title}
                  </h3>
                  <p className="font-poppins text-slate-500 text-xs sm:text-sm leading-relaxed max-w-[240px] mx-auto">
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Process;
