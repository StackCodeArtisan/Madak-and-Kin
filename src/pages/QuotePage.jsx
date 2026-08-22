import React from 'react';
import { FaCanadianMapleLeaf, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import QuoteForm from '../components/QuoteForm';

const QuotePage = () => {
  return (
    <div className="pt-24 pb-16 bg-white min-h-screen">
      {/* Page Header */}
      <section className="bg-navy text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          <div className="flex items-center space-x-2 text-gold font-semibold text-xs sm:text-sm uppercase tracking-widest mb-3">
            <FaCanadianMapleLeaf className="text-maple text-sm" />
            <span>Fast & Free Moving Estimate</span>
          </div>
          <h1 className="font-montserrat font-extrabold text-4xl sm:text-5xl text-white mb-4">
            Get a Free Quote
          </h1>
          <p className="font-poppins text-white/80 text-base sm:text-lg max-w-2xl leading-relaxed">
            Fill out our quick 3-step form to receive an accurate, transparent moving estimate for your upcoming home or business relocation.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="tel:+15064554605"
              className="inline-flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold px-4 py-2 rounded-full border border-white/20 transition-colors"
            >
              <FaPhoneAlt className="text-gold" />
              <span>Call Dispatch: 506-455-4605</span>
            </a>
            <a
              href="https://wa.me/15064783683"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-semibold px-4 py-2 rounded-full border border-emerald-400/30 transition-colors"
            >
              <FaWhatsapp />
              <span>WhatsApp: 506-478-3683</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Quote Form */}
      <QuoteForm />
    </div>
  );
};

export default QuotePage;
