import React from 'react';
import { FaCanadianMapleLeaf } from 'react-icons/fa';
import Contact from '../components/Contact';
import QuoteForm from '../components/QuoteForm';

const ContactPage = () => {
  return (
    <div className="pt-24 pb-16 bg-white min-h-screen">
      {/* Header Banner */}
      <section className="bg-navy text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          <div className="flex items-center space-x-2 text-gold font-semibold text-xs sm:text-sm uppercase tracking-widest mb-3">
            <FaCanadianMapleLeaf className="text-maple text-sm" />
            <span>Contact Dispatch & Request Quote</span>
          </div>
          <h1 className="font-montserrat font-extrabold text-4xl sm:text-5xl text-white mb-4">
            Get in Touch & Get a Quote
          </h1>
          <p className="font-poppins text-white/80 text-base sm:text-lg max-w-2xl leading-relaxed">
            Ready to plan your move? Request your free estimate or reach our dispatch team directly by phone or WhatsApp.
          </p>
        </div>
      </section>

      {/* Quote Form Section */}
      <QuoteForm />

      {/* Contact Details & Map */}
      <Contact />
    </div>
  );
};

export default ContactPage;
