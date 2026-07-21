import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaHome, 
  FaBuilding, 
  FaGraduationCap, 
  FaCouch, 
  FaDolly, 
  FaBoxOpen, 
  FaUsers, 
  FaExchangeAlt, 
  FaHeart,
  FaArrowCircleDown,
  FaCanadianMapleLeaf
} from 'react-icons/fa';
import { MdLocationCity, MdOutlineMoveToInbox } from 'react-icons/md';

const Services = () => {
  const servicesData = [
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
      icon: FaCouch,
      title: 'Furniture Delivery',
      description: 'Safe transport of newly purchased or sold single furniture pieces, appliances, and specialty items straight to your door.',
      accent: 'border-l-4 border-navy'
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
    },
    {
      icon: FaExchangeAlt,
      title: 'Internal Moves',
      description: 'Rearranging heavy furniture within your current home, office room changes, or staging spaces for events.',
      accent: 'border-l-4 border-navy'
    },
    {
      icon: FaUsers,
      title: 'Short-Term Labour Assistance',
      description: 'Hire our professional movers by the hour for general heavy-lifting tasks, event set-ups, or warehouse organizing.',
      accent: 'border-l-4 border-forest'
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
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center space-x-2 text-forest font-semibold text-xs sm:text-sm uppercase tracking-widest mb-3">
            <FaCanadianMapleLeaf className="text-maple text-sm" />
            <span>Professional Services</span>
          </div>
          <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl lg:text-5xl text-navy mb-4">
            Our Moving Services
          </h2>
          <p className="font-poppins text-slate-600 text-sm sm:text-base">
            No job is too big or small. We customize our services to meet your specific residential and commercial needs in New Brunswick.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {servicesData.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -6, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                className={`bg-white rounded-2xl p-6 lg:p-8 text-left transition-all duration-300 shadow-sm border border-slate-100 flex flex-col justify-between ${service.accent}`}
              >
                <div>
                  <div className="bg-navy/5 text-navy hover:bg-gold/10 hover:text-gold w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300">
                    <IconComponent className="text-2xl" />
                  </div>
                  <h3 className="font-montserrat font-bold text-lg sm:text-xl text-navy mb-3">
                    {service.title}
                  </h3>
                  <p className="font-poppins text-slate-500 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>
                <div>
                  <a
                    href="#quote"
                    onClick={handleScrollToQuote}
                    className="inline-flex items-center space-x-1 text-xs font-bold uppercase tracking-wider text-gold hover:text-navy transition-colors duration-200"
                  >
                    <span>Book Service</span>
                    <span>→</span>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA note */}
        <div className="mt-16 text-center">
          <p className="font-poppins text-sm text-slate-500">
            Have a custom requirement?{' '}
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
