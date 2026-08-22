import React from 'react';
import { motion } from 'framer-motion';
import { FaCanadianMapleLeaf, FaCamera } from 'react-icons/fa';
import truckImg from '../img/02_Authentic_Medak_Truck.png';
import teamImg from '../img/about_team.png';
import storageImg from '../img/storage.png';
import familyImg from '../img/Family.png';

const PhotoGallery = () => {
  const photos = [
    {
      src: truckImg,
      alt: 'Medak & Kin Authentic Moving Truck',
      caption: 'Our Official Moving Fleet & Equipment'
    },
    {
      src: teamImg,
      alt: 'Medak & Kin Professional Moving Team',
      caption: 'Our Professional Local Moving Team'
    },
    {
      src: storageImg,
      alt: 'Sam\'s Storage & Medak Moving Location',
      caption: 'Lincoln Road Office & Storage Location'
    },
    {
      src: familyImg,
      alt: 'Christina Savoie & Tosin Medaiyese',
      caption: 'Family Owned & Operated'
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center space-x-2 text-gold font-semibold text-xs sm:text-sm uppercase tracking-widest mb-3">
            <FaCanadianMapleLeaf className="text-maple text-sm" />
            <span>Authentic Local Company</span>
          </div>
          <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            Real Movers. Real Jobs. Real Care.
          </h2>
          <p className="font-poppins text-white/70 text-sm sm:text-base leading-relaxed">
            See our actual team, authentic moving truck, and equipment in action across Fredericton, Saint John, and New Brunswick communities.
          </p>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {photos.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group relative border border-gold/20 rounded-2xl p-1 bg-white/5 backdrop-blur-sm overflow-hidden hover:border-gold transition-colors duration-300 shadow-xl"
            >
              <div className="h-64 overflow-hidden rounded-xl relative">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                <div className="absolute bottom-3 left-3 right-3 text-left">
                  <div className="flex items-center space-x-1.5 text-gold text-[10px] uppercase font-bold tracking-wider mb-1">
                    <FaCamera size={10} />
                    <span>Medak On The Job</span>
                  </div>
                  <p className="font-poppins text-xs font-semibold text-white">
                    {item.caption}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PhotoGallery;
