import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaQuoteLeft, FaStar, FaArrowRight, FaCanadianMapleLeaf } from 'react-icons/fa';

const TestimonialsPreview = () => {
  const reviews = [
    {
      name: 'Sarah MacIntosh',
      location: 'Fredericton, NB',
      rating: 5,
      text: 'Medak & Kin made our family relocation from Fredericton to Saint John incredibly easy. The team was extremely polite, quick, and did not damage a single item.',
      type: 'Home Move'
    },
    {
      name: 'David K. Johnston',
      location: 'Saint John, NB',
      rating: 5,
      text: 'We hired them to move our corporate office. They worked late and through the weekend so we wouldn\'t lose any operational hours. Truly professional movers.',
      type: 'Office Move'
    },
    {
      name: 'Alex Leblanc',
      location: 'Oromocto, NB',
      rating: 5,
      text: 'Moving out of my apartment was stress-free thanks to Medak & Kin. Honest pricing, extremely fast response, and friendly guys.',
      type: 'Apartment Move'
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center space-x-2 text-forest font-semibold text-xs sm:text-sm uppercase tracking-widest mb-3">
            <FaCanadianMapleLeaf className="text-maple text-sm" />
            <span>Customer Trust & Ratings</span>
          </div>
          <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl lg:text-5xl text-navy mb-4">
            What Our Customers Say
          </h2>
          <p className="font-poppins text-slate-600 text-sm sm:text-base">
            Read real feedback from local families and businesses who experienced a stress-free move with Medak & Kin.
          </p>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {reviews.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-xl hover:border-gold/30 transition-all duration-300 flex flex-col justify-between text-left relative"
            >
              <FaQuoteLeft className="text-4xl text-gold/15 absolute top-6 right-6 pointer-events-none" />

              <div>
                <div className="flex space-x-1 mb-4 text-gold">
                  {[...Array(item.rating)].map((_, i) => (
                    <FaStar key={i} className="text-sm" />
                  ))}
                </div>

                <blockquote className="font-poppins text-slate-700 text-xs sm:text-sm leading-relaxed italic mb-6">
                  "{item.text}"
                </blockquote>
              </div>

              <div className="border-t border-slate-100 pt-4 flex items-center justify-between">
                <div>
                  <h4 className="font-montserrat font-bold text-navy text-sm">
                    {item.name}
                  </h4>
                  <p className="font-poppins text-slate-400 text-xs">
                    {item.location}
                  </p>
                </div>
                <span className="font-poppins text-[10px] font-bold text-forest bg-forest/5 px-3 py-1 rounded-full border border-forest/10 uppercase tracking-wider">
                  {item.type}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Read More Reviews Button */}
        <div className="text-center">
          <Link
            to="/reviews"
            className="inline-flex items-center space-x-2 font-poppins font-bold bg-navy hover:bg-gold text-white hover:text-navy px-8 py-3.5 rounded-full transition-all text-sm shadow-md"
          >
            <span>Read More Customer Reviews</span>
            <FaArrowRight className="text-xs" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default TestimonialsPreview;
