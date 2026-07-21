import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaRegQuestionCircle, FaCanadianMapleLeaf } from 'react-icons/fa';

const FAQItem = ({ question, answer, isOpen, toggleOpen }) => {
  return (
    <div className="border-b border-slate-100 last:border-b-0 py-4 sm:py-5">
      <button
        onClick={toggleOpen}
        className="w-full flex items-center justify-between text-left focus:outline-none group py-2"
        aria-expanded={isOpen}
      >
        <span className="font-montserrat font-bold text-navy text-sm sm:text-base pr-4 transition-colors duration-200 group-hover:text-gold">
          {question}
        </span>
        <span className={`w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-navy shrink-0 transition-all duration-300 ${isOpen ? 'bg-gold text-navy rotate-180' : 'group-hover:bg-navy/5'}`}>
          <FaChevronDown className="text-xs" />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="font-poppins text-slate-500 text-xs sm:text-sm leading-relaxed pt-2 pb-4 pr-6">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqData = [
    {
      question: 'How much does moving cost?',
      answer: 'Moving costs are based on factors such as the total volume/weight of your belongings, travel distance, accessibility (e.g., stairs or elevators), and services requested (like full-service packing). We offer free, transparent estimates with zero hidden fees.'
    },
    {
      question: 'Do you provide packing services?',
      answer: 'Yes! We offer full-service packing and unpacking. Our professional crew will arrive with premium materials (bubble wrap, padded blankets, heavy-duty boxes) to pack all your belongings, ensuring fragile glass, art, and garments are safely prepared.'
    },
    {
      question: 'Can I book weekends?',
      answer: 'Absolutely. We operate 7 days a week, including weekends and holidays. Weekend slots are popular, so we recommend scheduling as early as possible to lock in your preferred date.'
    },
    {
      question: 'How early should I book my move?',
      answer: 'We recommend booking 2 to 4 weeks in advance, especially if you plan to move during peak periods (end of the month, summer, or weekends). However, if you have an urgent last-minute relocation, contact us and we will do our best to accommodate you.'
    },
    {
      question: 'Do you move offices and commercial spaces?',
      answer: 'Yes, we are highly experienced in commercial and office relocation. We coordinate with your business coordinators to handle desks, IT infrastructure, heavy files, and inventory, aiming to minimize downtime and work within your operational schedules.'
    }
  ];

  return (
    <section id="faq" className="py-20 sm:py-28 bg-slate-50 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center space-x-2 text-forest font-semibold text-xs sm:text-sm uppercase tracking-widest mb-3">
            <FaCanadianMapleLeaf className="text-maple text-sm" />
            <span>Got Questions?</span>
          </div>
          <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl lg:text-5xl text-navy mb-4">
            Frequently Asked Questions
          </h2>
          <p className="font-poppins text-slate-600 text-sm sm:text-base">
            Everything you need to know about our services, booking process, and pricing.
          </p>
        </div>

        {/* Accordion Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-100 shadow-xl"
        >
          <div className="divide-y divide-slate-100">
            {faqData.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                toggleOpen={() => setOpenIndex(openIndex === index ? -1 : index)}
              />
            ))}
          </div>
        </motion.div>

        {/* Small Note */}
        <div className="mt-12 text-center flex items-center justify-center space-x-2 text-slate-500 font-poppins text-sm">
          <FaRegQuestionCircle className="text-gold" />
          <span>
            Don't see your question?{' '}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-navy font-bold hover:text-gold transition-colors duration-200"
            >
              Ask us directly
            </a>
          </span>
        </div>

      </div>
    </section>
  );
};

export default FAQ;
