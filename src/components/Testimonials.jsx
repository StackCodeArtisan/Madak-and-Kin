import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight, FaCanadianMapleLeaf } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah MacIntosh',
      location: 'Fredericton, NB',
      rating: 5,
      text: 'Medak & Kin made our family relocation from Fredericton to Saint John incredibly easy. The team was extremely polite, quick, and did not damage a single item. Highly recommend their packing services!',
      type: 'Home Move'
    },
    {
      name: 'David K. Johnston',
      location: 'Saint John, NB',
      rating: 5,
      text: 'We hired them to move our corporate office. They worked late and through the weekend so we wouldn\'t lose any operational hours. Truly professional movers who respect schedules.',
      type: 'Office Move'
    },
    {
      name: 'Alex Leblanc',
      location: 'Oromocto, NB',
      rating: 5,
      text: 'Moving out of my apartment was stress-free thanks to Medak & Kin. Honest pricing, extremely fast response, and friendly guys. Will definitely use them again!',
      type: 'Apartment Move'
    },
    {
      name: 'Robert Therriault',
      location: 'Fredericton, NB',
      rating: 5,
      text: 'Outstanding senior move assistance. They were so patient, kind, and careful with my grandmother\'s delicate antique furniture. True professionals who treat customers like family.',
      type: 'Specialty Assist'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  // Auto-play timer
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4 }
    },
    exit: (dir) => ({
      x: dir > 0 ? -100 : 100,
      opacity: 0,
      transition: { duration: 0.4 }
    })
  };

  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-slate-50 relative overflow-hidden">
      {/* Visual background details */}
      <div className="absolute top-1/2 left-4 w-72 h-72 bg-gold/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-4 w-72 h-72 bg-navy/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="flex items-center justify-center space-x-2 text-forest font-semibold text-xs sm:text-sm uppercase tracking-widest mb-3">
            <FaCanadianMapleLeaf className="text-maple text-sm" />
            <span>Testimonials</span>
          </div>
          <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl lg:text-5xl text-navy mb-4">
            What Our Customers Say
          </h2>
          <p className="font-poppins text-slate-600 text-sm sm:text-base">
            Read real feedback from local families and businesses who experienced a stress-free move with Medak & Kin.
          </p>
        </div>

        {/* Testimonial Box */}
        <div className="relative min-h-[380px] sm:min-h-[320px] flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full bg-white border border-slate-100 rounded-3xl p-8 sm:p-12 shadow-xl relative text-left"
            >
              {/* Quote Mark */}
              <FaQuoteLeft className="text-5xl sm:text-6xl text-gold/15 absolute top-6 left-6" />

              <div className="relative z-10">
                {/* Rating stars */}
                <div className="flex space-x-1 mb-6 text-gold">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <FaStar key={i} className="text-base" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="font-poppins text-slate-700 text-base sm:text-lg lg:text-xl leading-relaxed italic mb-8">
                  "{testimonials[currentIndex].text}"
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center justify-between border-t border-slate-100 pt-6">
                  <div>
                    <h4 className="font-montserrat font-bold text-navy text-base sm:text-lg">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="font-poppins text-slate-400 text-xs sm:text-sm">
                      {testimonials[currentIndex].location}
                    </p>
                  </div>
                  <span className="font-poppins text-xs font-semibold text-forest bg-forest/5 px-4 py-1.5 rounded-full border border-forest/10 uppercase tracking-wider">
                    {testimonials[currentIndex].type}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation buttons and indicators */}
        <div className="flex items-center justify-between mt-8 px-4">
          {/* Dot Indicators */}
          <div className="flex space-x-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > currentIndex ? 1 : -1);
                  setCurrentIndex(idx);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? 'w-8 bg-gold' : 'w-2 bg-slate-300'
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>

          {/* Left/Right Buttons */}
          <div className="flex space-x-3">
            <button
              onClick={handlePrev}
              className="bg-navy hover:bg-gold text-white hover:text-navy w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 border border-gold/20 shadow-md cursor-pointer"
              aria-label="Previous testimonial"
            >
              <FaChevronLeft className="text-sm" />
            </button>
            <button
              onClick={handleNext}
              className="bg-navy hover:bg-gold text-white hover:text-navy w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 border border-gold/20 shadow-md cursor-pointer"
              aria-label="Next testimonial"
            >
              <FaChevronRight className="text-sm" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
