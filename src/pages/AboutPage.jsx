import React from 'react';
import { FaCanadianMapleLeaf, FaPhoneAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import About from '../components/About';

const AboutPage = () => {
  return (
    <div className="pt-24 pb-16 bg-white min-h-screen">
      {/* Page Header */}
      <section className="bg-navy text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          <div className="flex items-center space-x-2 text-gold font-semibold text-xs sm:text-sm uppercase tracking-widest mb-3">
            <FaCanadianMapleLeaf className="text-maple text-sm" />
            <span>Our Story & Values</span>
          </div>
          <h1 className="font-montserrat font-extrabold text-4xl sm:text-5xl text-white mb-4">
            About Medak & Kin Moving Inc.
          </h1>
          <p className="font-poppins text-white/80 text-base sm:text-lg max-w-2xl leading-relaxed">
            Discover the family, values, cultures, and vision behind our moving and cleaning services in New Brunswick.
          </p>
        </div>
      </section>

      {/* Main Family Story Content */}
      <About />

      {/* Footer Callout */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="font-montserrat font-extrabold text-3xl text-navy">
            Let Our Family Move Your Life Forward
          </h2>
          <p className="font-poppins text-slate-600 text-base">
            Reach out to our Fredericton team today to discuss your upcoming residential or commercial move.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              to="/quote"
              className="w-full sm:w-auto font-poppins font-bold bg-gold hover:bg-gold-hover text-navy px-8 py-3.5 rounded-full transition-all text-sm uppercase tracking-wider shadow-lg"
            >
              Get a Free Quote
            </Link>
            <a
              href="tel:+15064554605"
              className="w-full sm:w-auto font-poppins font-bold bg-navy text-white px-8 py-3.5 rounded-full transition-all text-sm flex items-center justify-center space-x-2"
            >
              <FaPhoneAlt className="text-gold text-xs" />
              <span>Call 506-455-4605</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
