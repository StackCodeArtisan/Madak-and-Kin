import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaHome, 
  FaBuilding, 
  FaBoxes, 
  FaWarehouse, 
  FaTruckLoading, 
  FaGraduationCap, 
  FaArrowRight, 
  FaCanadianMapleLeaf 
} from 'react-icons/fa';

const ServicesSummary = () => {
  const services = [
    {
      icon: FaHome,
      title: 'Residential Moving',
      desc: 'Careful relocation services for houses, townhomes, and apartments across New Brunswick.'
    },
    {
      icon: FaBuilding,
      title: 'Commercial & Office Moving',
      desc: 'Efficient corporate relocations designed to minimize downtime for your business.'
    },
    {
      icon: FaBoxes,
      title: 'Apartment & Condo Moving',
      desc: 'Specialized navigation for stairs, elevators, tight hallways, and parking rules.'
    },
    {
      icon: FaGraduationCap,
      title: 'Student Relocations',
      desc: 'Affordable and flexible moving support for university and college students.'
    },
    {
      icon: FaTruckLoading,
      title: 'Loading & Unloading',
      desc: 'Labor assistance to carefully load or unload your rental truck, container, or trailer.'
    },
    {
      icon: FaWarehouse,
      title: 'Storage Coordination',
      desc: 'Seamless coordination with on-site storage options at Sam’s Storage Lincoln Road.'
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center space-x-2 text-forest font-semibold text-xs sm:text-sm uppercase tracking-widest mb-3">
            <FaCanadianMapleLeaf className="text-maple text-sm" />
            <span>Comprehensive Moving Solutions</span>
          </div>
          <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl lg:text-5xl text-navy mb-4">
            Our Core Services
          </h2>
          <p className="font-poppins text-slate-600 text-sm sm:text-base leading-relaxed">
            Whether moving down the street or across New Brunswick, our team provides reliable, transparent moving services tailored to your exact needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {services.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-xl hover:border-gold/40 transition-all duration-300 flex flex-col justify-between text-left group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-navy/5 text-navy group-hover:bg-gold group-hover:text-navy transition-colors duration-300 flex items-center justify-center text-xl mb-5">
                    <Icon />
                  </div>
                  <h3 className="font-montserrat font-bold text-lg text-navy mb-2 group-hover:text-gold transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-poppins text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View All Services CTA */}
        <div className="text-center">
          <Link
            to="/services"
            className="inline-flex items-center space-x-2 font-poppins font-bold bg-navy hover:bg-gold text-white hover:text-navy px-8 py-3.5 rounded-full transition-all duration-300 text-sm shadow-md"
          >
            <span>View All Services & Storage Options</span>
            <FaArrowRight className="text-xs" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ServicesSummary;
