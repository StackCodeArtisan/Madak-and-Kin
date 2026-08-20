import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaHome, 
  FaBuilding, 
  FaGraduationCap, 
  FaCouch, 
  FaDolly, 
  FaBoxOpen, 
  FaHeart,
  FaCanadianMapleLeaf,
  FaBroom,
  FaWarehouse,
  FaHands,
  FaArrowRight
} from 'react-icons/fa';
import { MdLocationCity, MdOutlineMoveToInbox } from 'react-icons/md';

const Services = () => {
  const primaryServices = [
    {
      icon: FaHome,
      title: 'Residential Moving',
      description: 'Stress-free home relocation. From single-family houses to large estates, we handle your personal items with complete care.',
      accent: 'border-l-4 border-gold'
    },
    {
      icon: FaBuilding,
      title: 'Commercial & Office Moving',
      description: 'Efficient office and commercial relocation. We minimize downtime and handle heavy office equipment, desks, and archives.',
      accent: 'border-l-4 border-navy'
    },
    {
      icon: MdLocationCity,
      title: 'Apartment & Condo Moves',
      description: 'Navigating stairs, elevators, tight hallways, and parking rules. We make apartment moving seamless and quick.',
      accent: 'border-l-4 border-forest'
    },
    {
      icon: FaHeart,
      title: 'Senior Moving Assistance',
      description: 'Patient, respectful, and compassionate packing and moving support for older adults transitioning to new living facilities.',
      accent: 'border-l-4 border-maple'
    },
    {
      icon: FaGraduationCap,
      title: 'Student Moves',
      description: 'Affordable, quick-moving assistance for students moving into dorms, shared housing, or apartments in the Fredericton area.',
      accent: 'border-l-4 border-gold'
    },
    {
      icon: FaDolly,
      title: 'Heavy Item Moving',
      description: 'Specialized moving for extremely heavy, valuable items including safes, pianos, large appliances, and heavy exercise gear.',
      accent: 'border-l-4 border-forest'
    },
    {
      icon: FaBoxOpen,
      title: 'Packing & Unpacking',
      description: 'Full-service packing with premium materials. We secure fragile glass, art, and clothes, and unpack them at your destination.',
      accent: 'border-l-4 border-maple'
    },
    {
      icon: MdOutlineMoveToInbox,
      title: 'Loading & Unloading',
      description: 'Need help loading or unloading a rented truck, container, or U-Haul? Let our experienced team do the heavy lifting.',
      accent: 'border-l-4 border-gold'
    }
  ];

  const additionalSupportServices = [
    {
      icon: FaBroom,
      title: 'Post-Move Clean-Up',
      description: 'Tidying and cleaning up property mess after loading or unloading, leaving spaces ready for their next stage.',
      badge: 'Moving Service Differentiator'
    },
    {
      icon: FaWarehouse,
      title: 'Convenient Storage Solutions',
      description: 'Need somewhere to keep belongings between moves? Storage options managed right from our Lincoln Road location.',
      badge: 'Location Advantage'
    },
    {
      icon: FaHands,
      title: 'Sister Company Deep Cleaning',
      description: 'Full professional deep cleaning for move-outs and move-ins available through our sister company, Medak Prestige Cleaning.',
      badge: 'Medak Sister Company'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 20 }
    }
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
    <section id="services" className="py-20 sm:py-28 bg-slate-50 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,175,55,0.05),transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center space-x-2 text-forest font-semibold text-xs sm:text-sm uppercase tracking-widest mb-3">
            <FaCanadianMapleLeaf className="text-maple text-sm" />
            <span>Comprehensive Moving & Support</span>
          </div>
          <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl lg:text-5xl text-navy mb-4">
            Our Moving & Property Services
          </h2>
          <p className="font-poppins text-slate-600 text-sm sm:text-base">
            From single item deliveries to complete home relocations, post-move clean-up, storage solutions, and sister-company deep cleaning.
          </p>
        </div>

        {/* Primary Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {primaryServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -6, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.08)' }}
                className={`bg-white rounded-2xl p-6 text-left transition-all duration-300 shadow-sm border border-slate-100 flex flex-col justify-between ${service.accent}`}
              >
                <div>
                  <div className="bg-navy/5 text-navy hover:bg-gold/10 hover:text-gold w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300">
                    <IconComponent className="text-xl" />
                  </div>
                  <h3 className="font-montserrat font-bold text-base text-navy mb-2.5">
                    {service.title}
                  </h3>
                  <p className="font-poppins text-slate-500 text-xs leading-relaxed mb-5">
                    {service.description}
                  </p>
                </div>
                <div>
                  <a
                    href="#quote"
                    onClick={handleScrollToQuote}
                    className="inline-flex items-center space-x-1 text-[11px] font-bold uppercase tracking-wider text-gold hover:text-navy transition-colors duration-200"
                  >
                    <span>Request Service</span>
                    <span>→</span>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Highlighted Additional Support Services (Clean-up, Storage, Sister Cleaning) */}
        <div className="mb-12 text-left">
          <h3 className="font-montserrat font-bold text-xl sm:text-2xl text-navy mb-2">
            Complete Relocation Ecosystem
          </h3>
          <p className="font-poppins text-slate-600 text-xs sm:text-sm mb-6">
            We go beyond standard moving by offering storage, post-move clean-up, and sister-company deep cleaning under one trusted family brand.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {additionalSupportServices.map((support, idx) => {
              const Icon = support.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.4 }}
                  className="bg-navy text-white rounded-2xl p-6 shadow-md border border-gold/15 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="bg-gold/15 text-gold p-3 rounded-xl">
                        <Icon className="text-xl" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-gold bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
                        {support.badge}
                      </span>
                    </div>
                    <h4 className="font-montserrat font-bold text-lg text-white mb-2">
                      {support.title}
                    </h4>
                    <p className="font-poppins text-white/70 text-xs leading-relaxed mb-6">
                      {support.description}
                    </p>
                  </div>
                  <div>
                    <a
                      href="#quote"
                      onClick={handleScrollToQuote}
                      className="inline-flex items-center space-x-2 text-xs font-bold text-gold hover:text-white transition-colors duration-200 uppercase tracking-wider"
                    >
                      <span>Inquire Now</span>
                      <FaArrowRight className="text-[10px]" />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA note */}
        <div className="mt-12 text-center">
          <p className="font-poppins text-sm text-slate-500">
            Have a custom moving or property requirement?{' '}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-navy font-bold underline hover:text-gold transition-colors duration-200"
            >
              Contact our dispatch team directly
            </a>.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Services;
