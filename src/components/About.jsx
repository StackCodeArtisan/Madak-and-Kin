import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaAward, FaCanadianMapleLeaf } from 'react-icons/fa';
import teamImg from '../img/about_team.png';
import truckImg from '../img/65160.png';
import packingImg from '../img/65164.png';

const About = () => {
  const listItems = [
    'Emphasis on Professionalism & Honesty',
    'Exceptional & Personable Customer Care',
    'Treating Belongings Like Our Own',
    'Experienced Residential & Commercial Teams',
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 text-left"
          >
            {/* Tagline */}
            <div className="flex items-center space-x-2 text-forest font-semibold text-xs sm:text-sm uppercase tracking-widest mb-3">
              <FaCanadianMapleLeaf className="text-maple text-sm" />
              <span>Medak Family of Businesses</span>
            </div>

            {/* Title */}
            <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl lg:text-5xl text-navy leading-tight mb-6">
              Who We Are
            </h2>

            {/* Description */}
            <div className="space-y-6 font-poppins text-slate-600 text-sm sm:text-base leading-relaxed">
              <p>
                <strong className="text-navy font-semibold">Medak & Kin Moving Inc.</strong> is a proudly Canadian moving company based in Fredericton, New Brunswick. We provide dependable residential and commercial moving services with an emphasis on professionalism, honesty, and exceptional customer care.
              </p>
              <p>
                As part of the Medak family of businesses, our mission is to make every move as stress-free as possible while treating every customer’s belongings with the same care and respect we would give our own.
              </p>
              <p>
                Whether you’re moving across town, relocating your office, or need help with heavy furniture, our experienced team is ready to help you every step of the way.
              </p>
            </div>

            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-8 border-t border-slate-100">
              {listItems.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <FaCheckCircle className="text-forest mt-1 shrink-0 text-base" />
                  <span className="font-poppins text-sm font-semibold text-navy">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Decorative backgrounds */}
            <div className="absolute -top-4 -left-4 w-72 h-72 bg-gold/10 rounded-3xl -z-10 blur-xl" />
            <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-navy/5 rounded-3xl -z-10 blur-xl" />
            
            {/* Image Grid Mosaic */}
            <div className="grid grid-cols-2 gap-4 h-[400px] sm:h-[480px]">
              {/* Left Column: Team Image */}
              <div className="relative border-2 border-gold/20 rounded-2xl p-1 bg-white shadow-xl hover:border-gold transition-colors duration-300">
                <img
                  src={teamImg}
                  alt="Medak & Kin Professional Moving Team"
                  className="w-full h-full object-cover rounded-xl"
                  loading="lazy"
                />
              </div>

              {/* Right Column: Stack of Truck and Packing */}
              <div className="flex flex-col gap-4">
                <div className="h-2/5 relative border-2 border-gold/20 rounded-2xl p-1 bg-white shadow-xl hover:border-gold transition-colors duration-300">
                  <img
                    src={truckImg}
                    alt="Medak & Kin Moving Truck"
                    className="w-full h-full object-cover rounded-xl"
                    loading="lazy"
                  />
                </div>
                <div className="h-3/5 relative border-2 border-gold/20 rounded-2xl p-1 bg-white shadow-xl hover:border-gold transition-colors duration-300">
                  <img
                    src={packingImg}
                    alt="Medak & Kin Packing Services"
                    className="w-full h-full object-cover rounded-xl"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: 'spring' }}
              className="absolute -bottom-6 -left-6 bg-navy text-white px-6 py-4 rounded-xl shadow-xl flex items-center space-x-3 border border-gold/30 z-10"
            >
              <div className="bg-gold/15 p-2 rounded-lg">
                <FaAward className="text-gold text-2xl" />
              </div>
              <div className="text-left">
                <p className="font-spartan font-bold text-lg leading-none text-gold">100%</p>
                <p className="font-poppins text-[10px] text-white/70 uppercase tracking-wider font-semibold">Bonded & Insured</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
