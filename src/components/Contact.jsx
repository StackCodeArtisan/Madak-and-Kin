import React from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaClock, FaCanadianMapleLeaf, FaBriefcase, FaCreditCard, FaInfoCircle, FaCalendarCheck } from 'react-icons/fa';

const Contact = () => {
  const contactDetails = [
    {
      icon: FaPhoneAlt,
      title: 'Phone Dispatch',
      value: '506-455-4605',
      href: 'tel:+15064554605',
      desc: 'Call our main office line for bookings & general inquiries.'
    },
    {
      icon: FaWhatsapp,
      title: 'WhatsApp / Text',
      value: '506-478-3683',
      href: 'https://wa.me/15064783683',
      desc: 'Send pictures of your items for quick visual estimates.'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Office Location',
      value: '1941 Lincoln Road, Fredericton, NB',
      href: 'https://maps.google.com/?q=1941+Lincoln+Road+Fredericton+NB',
      desc: 'Medak & Kin Primary Headquarters'
    }
  ];

  const departmentalEmails = [
    {
      icon: FaCalendarCheck,
      title: 'Bookings & Quotes',
      email: 'bookings@movewithmedak.ca',
      desc: 'Moving quotes, scheduling & reservation updates.'
    },
    {
      icon: FaInfoCircle,
      title: 'General Information',
      email: 'info@movewithmedak.ca',
      desc: 'General customer support & general inquiries.'
    },
    {
      icon: FaCreditCard,
      title: 'Billing & Invoicing',
      email: 'billing@movewithmedak.ca',
      desc: 'Invoicing, receipts, payment support & accounts.'
    },
    {
      icon: FaBriefcase,
      title: 'Careers & Hiring',
      email: 'careers@movewithmedak.ca',
      desc: 'Job applications, employment & driver inquiries.'
    }
  ];

  return (
    <section id="contact" className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center space-x-2 text-forest font-semibold text-xs sm:text-sm uppercase tracking-widest mb-3">
            <FaCanadianMapleLeaf className="text-maple text-sm" />
            <span>Get in touch</span>
          </div>
          <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl lg:text-5xl text-navy mb-4">
            Contact Our Team
          </h2>
          <p className="font-poppins text-slate-600 text-sm sm:text-base leading-relaxed">
            Reach out via phone, WhatsApp, specialized departmental emails, or visit our office on Lincoln Road. We are ready to help with your move.
          </p>
        </div>

        {/* Contact Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Details Column */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            {contactDetails.map((detail, idx) => {
              const Icon = detail.icon;
              return (
                <motion.a
                  key={idx}
                  href={detail.href}
                  target={detail.href.startsWith('http') ? '_blank' : undefined}
                  rel={detail.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="flex items-start space-x-4 p-5 rounded-2xl bg-slate-50 hover:bg-slate-100/80 border border-slate-100 hover:border-gold/20 transition-all duration-300 group text-left cursor-pointer"
                >
                  <div className="bg-navy text-gold p-3 rounded-xl group-hover:bg-gold group-hover:text-navy transition-colors duration-300 shrink-0">
                    <Icon className="text-lg" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-bold text-sm text-navy uppercase tracking-wider mb-1">
                      {detail.title}
                    </h3>
                    <p className="font-poppins text-slate-900 font-semibold text-base mb-1">
                      {detail.value}
                    </p>
                    <p className="font-poppins text-slate-400 text-xs">
                      {detail.desc}
                    </p>
                  </div>
                </motion.a>
              );
            })}

            {/* Quick Hours Note */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="p-5 rounded-2xl bg-forest/5 border border-forest/10 flex items-start space-x-4 text-left"
            >
              <div className="bg-forest text-white p-3 rounded-xl shrink-0">
                <FaClock className="text-lg" />
              </div>
              <div>
                <h3 className="font-montserrat font-bold text-sm text-navy uppercase tracking-wider mb-1">
                  Business Hours
                </h3>
                <p className="font-poppins text-slate-700 text-sm font-semibold mb-0.5">
                  Monday – Sunday: 7:00 AM – 9:00 PM
                </p>
                <p className="font-poppins text-slate-400 text-xs">
                  Operating moves 7 days a week including weekends and holidays.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Map Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-7 h-[400px] lg:h-auto rounded-3xl overflow-hidden border border-slate-100 shadow-xl relative min-h-[350px]"
          >
            {/* Interactive Embedded Google Map */}
            <iframe
              title="Medak & Kin Office Map Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2777.625471415712!2d-66.5772346!3d45.9288179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ca4226d5257ef83%3A0x6a0dc1fb5b2b2b10!2s1941%20Lincoln%20Rd%2C%20Fredericton%2C%20NB%20E3B%208J6!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full"
            />
          </motion.div>

        </div>

        {/* Departmental Emails Directory */}
        <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-8 sm:p-12 text-left">
          <div className="flex items-center space-x-2 text-gold font-bold text-xs uppercase tracking-widest mb-2">
            <FaEnvelope className="text-sm" />
            <span>Email Directory</span>
          </div>
          <h3 className="font-montserrat font-extrabold text-2xl sm:text-3xl text-navy mb-6">
            Departmental Email Contacts
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departmentalEmails.map((item, idx) => {
              const Icon = item.icon;
              return (
                <a
                  key={idx}
                  href={`mailto:${item.email}`}
                  className="bg-white border border-slate-200/80 rounded-2xl p-6 hover:border-gold hover:shadow-lg transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-navy/5 text-navy group-hover:bg-gold group-hover:text-navy transition-colors flex items-center justify-center text-lg mb-4">
                      <Icon />
                    </div>
                    <h4 className="font-montserrat font-bold text-sm text-navy mb-1">
                      {item.title}
                    </h4>
                    <p className="font-poppins text-xs text-gold font-bold break-all mb-2 group-hover:underline">
                      {item.email}
                    </p>
                    <p className="font-poppins text-[11px] text-slate-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
