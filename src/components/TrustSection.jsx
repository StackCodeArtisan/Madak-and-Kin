import React from 'react';
import { motion } from 'framer-motion';
import { FaCanadianMapleLeaf, FaUserShield, FaRegCheckCircle, FaHome } from 'react-icons/fa';

const TrustSection = () => {
  const trustPoints = [
    {
      icon: FaUserShield,
      title: 'Professional Moving Team',
      desc: 'Trained, courteous movers who handle your items with care and respect.',
      color: 'text-gold',
      bgColor: 'bg-gold/10'
    },
    {
      icon: FaHome,
      title: 'Residential & Commercial',
      desc: 'Full-service relocations for apartments, family homes, and offices.',
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10'
    },
    {
      icon: FaCanadianMapleLeaf,
      title: 'Canadian Owned & Operated',
      desc: 'Local family business proudly serving New Brunswick communities.',
      color: 'text-maple',
      bgColor: 'bg-maple/10'
    },
    {
      icon: FaRegCheckCircle,
      title: 'Reliable & Dependable',
      desc: 'Punctual arrivals, clear communication, and honest transparent service.',
      color: 'text-forest',
      bgColor: 'bg-forest/10'
    }
  ];

  return (
    <section className="py-10 bg-slate-50 border-b border-slate-200/60 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {trustPoints.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white border border-slate-200/80 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md hover:border-gold/30 transition-all duration-300 flex flex-col justify-between text-left"
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-xl ${item.bgColor} shrink-0`}>
                    <Icon className={`${item.color} text-xl sm:text-2xl`} />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-bold text-sm sm:text-base text-navy mb-1 leading-snug">
                      {item.title}
                    </h3>
                    <p className="font-poppins text-xs text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
