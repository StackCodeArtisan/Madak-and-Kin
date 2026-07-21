import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaCanadianMapleLeaf, FaArrowRight, FaTruck } from 'react-icons/fa';

const ServiceArea = () => {
  const primaryLocations = [
    {
      city: 'Fredericton',
      role: 'Headquarters & Primary Dispatch',
      desc: 'Serving the Capital Region, including downtown Fredericton, Northside, Southside, and surrounding rural communities.',
      areas: ['Fredericton North/South', 'Oromocto', 'New Maryland', 'Kingsclear', 'Mactaquac']
    },
    {
      city: 'Saint John',
      role: 'Secondary Hub',
      desc: 'Providing full commercial and residential moving services across the port city, including the Kennebecasis Valley and bay area.',
      areas: ['Uptown & West Saint John', 'Quispamsis', 'Rothesay', 'Grand Bay-Westfield', 'Hampton']
    }
  ];

  const surroundingAreas = [
    'Sussex',
    'Woodstock',
    'St. Stephen',
    'Moncton (Transit)',
    'St. Andrews',
    'Gagetown',
    'Harvey',
    'Nackawic'
  ];

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
    <section className="py-20 sm:py-28 bg-white relative overflow-hidden">
      {/* Background Maple Leaf Silhouette */}
      <div className="absolute right-0 bottom-0 text-slate-100 translate-x-20 translate-y-20 opacity-40 pointer-events-none -z-10">
        <FaCanadianMapleLeaf size={400} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center space-x-2 text-forest font-semibold text-xs sm:text-sm uppercase tracking-widest mb-3">
            <FaCanadianMapleLeaf className="text-maple text-sm" />
            <span>Local Coverage</span>
          </div>
          <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl lg:text-5xl text-navy mb-4">
            Service Areas
          </h2>
          <p className="font-poppins text-slate-600 text-sm sm:text-base">
            Proudly based in New Brunswick. We provide localized moving services in Fredericton, Saint John, and neighboring communities.
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Main Hubs */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {primaryLocations.map((loc, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-slate-50 border border-slate-100 rounded-3xl p-8 text-left flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="bg-navy text-gold p-3 rounded-2xl">
                      <FaMapMarkerAlt className="text-xl" />
                    </div>
                    <div>
                      <h3 className="font-montserrat font-bold text-2xl text-navy">
                        {loc.city}
                      </h3>
                      <span className="font-poppins text-[10px] text-forest font-bold uppercase tracking-wider">
                        {loc.role}
                      </span>
                    </div>
                  </div>
                  
                  <p className="font-poppins text-slate-500 text-sm leading-relaxed mb-6">
                    {loc.desc}
                  </p>

                  <h4 className="font-montserrat font-semibold text-xs text-navy uppercase tracking-widest mb-3">
                    Suburbs & Surroundings
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {loc.areas.map((area, sIdx) => (
                      <li key={sIdx} className="flex items-center space-x-2 text-slate-600 text-xs font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                        <span>{area}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* New Brunswick Extended Service Callout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-4 bg-navy text-white rounded-3xl p-8 text-left border border-gold/15 flex flex-col justify-between"
          >
            <div>
              <div className="bg-gold/15 text-gold p-3 rounded-2xl w-fit mb-6">
                <FaTruck className="text-xl" />
              </div>
              <h3 className="font-montserrat font-bold text-xl text-white mb-4">
                Other New Brunswick Communities
              </h3>
              <p className="font-poppins text-white/70 text-sm leading-relaxed mb-6">
                Moving outside our primary hubs? We regularly transit between major cities and accommodate long-distance moves across the province.
              </p>
              
              <div className="flex flex-wrap gap-2">
                {surroundingAreas.map((area, idx) => (
                  <span
                    key={idx}
                    className="bg-white/10 text-white text-[10px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-white/10 mt-6">
              <a
                href="#quote"
                onClick={handleScrollToQuote}
                className="inline-flex items-center space-x-2 text-sm font-bold text-gold hover:text-white transition-colors duration-200"
              >
                <span>Check Long-Distance Rates</span>
                <FaArrowRight className="text-xs" />
              </a>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default ServiceArea;
