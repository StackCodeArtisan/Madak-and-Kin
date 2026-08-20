import React from 'react';
import { FaFacebookF, FaInstagram, FaTiktok, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaCanadianMapleLeaf } from 'react-icons/fa';
import logoImg from '../img/logo.png';

const Footer = () => {
  const handleScrollTo = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
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

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Our Services', href: '#services' },
    { name: 'Storage Solutions', href: '#storage' },
    { name: 'Medak Family & Sister Co.', href: '#cleaning' },
    { name: 'Why Choose Us', href: '#why-choose-us' },
    { name: 'Moving Process', href: '#process' },
    { name: 'FAQs', href: '#faq' },
    { name: 'Contact Us', href: '#contact' }
  ];

  const topServices = [
    'Residential Moving',
    'Commercial Relocation',
    'Apartment & Condo Moves',
    'Convenient Storage Solutions',
    'Post-Move Clean-Up',
    'Medak Prestige Cleaning Link'
  ];

  return (
    <footer className="bg-navy-dark text-white/80 border-t border-gold/15 pt-16 pb-8 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Foot Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">
          
          {/* Logo & Bio Column */}
          <div className="lg:col-span-4 text-left">
            <a href="#home" onClick={(e) => handleScrollTo(e, '#home')} className="flex items-center space-x-3 mb-6 group w-fit">
              <img src={logoImg} alt="Medak & Kin Moving Inc. Logo" className="h-12 w-auto" />
              <div className="flex flex-col">
                <span className="font-spartan font-bold text-white text-lg leading-tight uppercase group-hover:text-gold transition-colors duration-300">
                  Medak & Kin
                </span>
                <span className="font-poppins text-gold text-[10px] uppercase tracking-[0.2em] font-semibold">
                  Moving Inc.
                </span>
              </div>
            </a>
            
            <p className="font-poppins text-white/60 text-xs sm:text-sm leading-relaxed mb-6 max-w-sm">
              Part of the Medak family of businesses. We provide honest, reliable residential and commercial moving, post-move clean-up, and storage solutions in Fredericton, Saint John, and surrounding New Brunswick communities.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/share/p/195uNyFBq6/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:border-gold hover:bg-gold hover:text-navy flex items-center justify-center transition-all duration-300"
                aria-label="Follow Medak & Kin Moving Inc. on Facebook"
              >
                <FaFacebookF className="text-sm" />
              </a>
              <a
                href="https://www.instagram.com/medak.moving.inc?utm_source=qr&igsh=MWQzc204dGdxbDRjbg=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:border-gold hover:bg-gold hover:text-navy flex items-center justify-center transition-all duration-300"
                aria-label="Follow Medak & Kin Moving Inc. on Instagram"
              >
                <FaInstagram className="text-sm" />
              </a>
              <a
                href="https://vt.tiktok.com/ZSXurqcLw/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:border-gold hover:bg-gold hover:text-navy flex items-center justify-center transition-all duration-300"
                aria-label="Follow Medak & Kin Moving Inc. on TikTok"
              >
                <FaTiktok className="text-sm" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 text-left">
            <h3 className="font-montserrat font-bold text-sm text-white uppercase tracking-widest mb-6 pb-2 border-b border-white/5 w-fit pr-6">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    onClick={(e) => handleScrollTo(e, link.href)}
                    className="font-poppins text-xs text-white/60 hover:text-gold transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3 text-left">
            <h3 className="font-montserrat font-bold text-sm text-white uppercase tracking-widest mb-6 pb-2 border-b border-white/5 w-fit pr-6">
              Our Offerings
            </h3>
            <ul className="space-y-2.5">
              {topServices.map((service, idx) => (
                <li key={idx}>
                  <a
                    href="#services"
                    onClick={(e) => handleScrollTo(e, '#services')}
                    className="font-poppins text-xs text-white/60 hover:text-gold transition-colors duration-200"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours Column */}
          <div className="lg:col-span-3 text-left space-y-6">
            <div>
              <h3 className="font-montserrat font-bold text-sm text-white uppercase tracking-widest mb-6 pb-2 border-b border-white/5 w-fit pr-6">
                Get In Touch
              </h3>
              <ul className="space-y-3 font-poppins text-xs sm:text-sm text-white/60">
                <li className="flex items-center space-x-3">
                  <FaPhoneAlt className="text-gold shrink-0" />
                  <a href="tel:5064783683" className="hover:text-gold">506 478 3683</a>
                </li>
                <li className="flex items-center space-x-3">
                  <FaEnvelope className="text-gold shrink-0" />
                  <a href="mailto:medakmovingco@gmail.com" className="hover:text-gold break-all">medakmovingco@gmail.com</a>
                </li>
                <li className="flex items-start space-x-3">
                  <FaMapMarkerAlt className="text-gold shrink-0 mt-0.5" />
                  <span>1941 Lincoln Road, Fredericton, NB E3B 8J6</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-montserrat font-bold text-xs text-white uppercase tracking-widest mb-3">
                Business Hours
              </h4>
              <p className="font-poppins text-xs text-white/50 leading-relaxed">
                Monday – Sunday: 7:00 AM – 9:00 PM <br />
                (Operating moves 7 days a week)
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 mt-8 flex flex-col sm:flex-row items-center justify-between font-poppins text-[11px] sm:text-xs text-white/40 text-center sm:text-left space-y-4 sm:space-y-0">
          <div className="flex items-center justify-center space-x-2">
            <FaCanadianMapleLeaf className="text-maple text-xs" />
            <span>&copy; {new Date().getFullYear()} Medak & Kin Moving Inc. All rights reserved.</span>
          </div>
          <div className="flex space-x-4">
            <span className="text-white/30">Proudly Canadian & Family Owned</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
