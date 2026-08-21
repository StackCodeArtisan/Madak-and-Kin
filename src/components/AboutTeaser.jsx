import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCanadianMapleLeaf, FaArrowRight, FaHeart } from 'react-icons/fa';
import familyImg from '../img/Family.png';

const AboutTeaser = () => {
  return (
    <section className="py-20 sm:py-28 bg-white overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 text-left space-y-6"
          >
            <div className="flex items-center space-x-2 text-forest font-semibold text-xs sm:text-sm uppercase tracking-widest mb-2">
              <FaCanadianMapleLeaf className="text-maple text-sm" />
              <span>🍁 OUR STORY</span>
            </div>

            <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl lg:text-5xl text-navy leading-tight">
              A Local Family Moving New Brunswick Forward
            </h2>

            <p className="font-poppins text-slate-600 text-sm sm:text-base leading-relaxed">
              We are Christina Savoie and Tosin Medaiyese, Co-Founders of Medak. Built in honour of Tosin’s late father, Abraham Kusemoran Medaiyese, Medak represents two cultures, one family, and a vision for genuine community service.
            </p>

            <p className="font-poppins text-slate-600 text-sm sm:text-base leading-relaxed">
              From our family to yours, we treat your belongings, home, and family with extreme care during one of life's biggest transitions.
            </p>

            <div>
              <Link
                to="/about"
                className="inline-flex items-center space-x-2 font-poppins font-bold bg-navy hover:bg-gold text-white hover:text-navy px-8 py-3.5 rounded-full transition-all duration-300 text-sm shadow-md"
              >
                <span>Read Our Full Story</span>
                <FaArrowRight className="text-xs" />
              </Link>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative border-2 border-gold/20 rounded-3xl p-2 bg-white shadow-xl hover:border-gold transition-colors max-h-[460px] overflow-hidden">
              <img
                src={familyImg}
                alt="Christina Savoie & Tosin Medaiyese - Medak Co-Founders"
                className="w-full h-full object-cover rounded-2xl"
                loading="lazy"
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-5 -left-5 bg-navy text-white px-5 py-3.5 rounded-xl shadow-xl flex items-center space-x-3 border border-gold/30">
              <div className="bg-gold/15 p-2 rounded-lg text-gold">
                <FaHeart className="text-xl" />
              </div>
              <div className="text-left">
                <p className="font-spartan font-bold text-base text-gold">100%</p>
                <p className="font-poppins text-[10px] text-white/70 uppercase tracking-wider font-semibold">Family Care</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutTeaser;
