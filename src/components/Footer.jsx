import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTiktok, FaPhoneAlt, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaCanadianMapleLeaf } from 'react-icons/fa';
import logoImg from '../img/logo.png';

const Footer = () => {
  const pageLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Move + Clean', path: '/move-clean' },
    { name: 'About Us', path: '/about' },
    { name: 'Service Areas', path: '/service-areas' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Contact & Quote', path: '/contact' }
  ];

  const topServices = [
    'Residential Moving',
    'Commercial & Office Moves',
    'Apartment & Condo Relocations',
    'Storage Assistance',
    'Move + Clean Combined Services'
  ];

  return (
    <footer className="bg-navy-dark text-white/80 border-t border-gold/15 pt-16 pb-8 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">
          
          {/* Logo & Bio Column */}
          <div className="lg:col-span-4 text-left space-y-5">
            <Link to="/" className="flex items-center space-x-3 group w-fit">
              <img src={logoImg} alt="Medak & Kin Moving Inc. Logo" className="h-12 w-auto object-contain" />
              <div className="flex flex-col">
                <span className="font-spartan font-bold text-white text-lg leading-tight uppercase group-hover:text-gold transition-colors">
                  Medak & Kin
                </span>
                <span className="font-poppins text-gold text-[10px] uppercase tracking-[0.2em] font-semibold">
                  Moving Inc.
                </span>
              </div>
            </Link>
            
            <p className="font-poppins text-white/60 text-xs sm:text-sm leading-relaxed max-w-sm">
              Dependable, local, family-owned residential and commercial moving, storage coordination, and post-move cleaning across Fredericton, Saint John, Moncton, and New Brunswick.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-3 pt-1">
              <a
                href="https://www.facebook.com/share/p/195uNyFBq6/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-gold hover:bg-gold hover:text-navy flex items-center justify-center transition-all"
                aria-label="Follow Medak & Kin Moving Inc. on Facebook"
              >
                <FaFacebookF className="text-xs" />
              </a>
              <a
                href="https://www.instagram.com/medak.moving.inc?utm_source=qr&igsh=MWQzc204dGdxbDRjbg=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-gold hover:bg-gold hover:text-navy flex items-center justify-center transition-all"
                aria-label="Follow Medak & Kin Moving Inc. on Instagram"
              >
                <FaInstagram className="text-xs" />
              </a>
              <a
                href="https://vt.tiktok.com/ZSXurqcLw/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-gold hover:bg-gold hover:text-navy flex items-center justify-center transition-all"
                aria-label="Follow Medak & Kin Moving Inc. on TikTok"
              >
                <FaTiktok className="text-xs" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 text-left">
            <h3 className="font-montserrat font-bold text-sm text-white uppercase tracking-widest mb-6 pb-2 border-b border-white/5 w-fit pr-6">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {pageLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.path}
                    className="font-poppins text-xs sm:text-sm text-white/60 hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3 text-left">
            <h3 className="font-montserrat font-bold text-sm text-white uppercase tracking-widest mb-6 pb-2 border-b border-white/5 w-fit pr-6">
              Core Offerings
            </h3>
            <ul className="space-y-2.5 font-poppins text-xs sm:text-sm text-white/60">
              {topServices.map((service, idx) => (
                <li key={idx}>
                  <Link to="/services" className="hover:text-gold transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours Column */}
          <div className="lg:col-span-3 text-left space-y-5">
            <div>
              <h3 className="font-montserrat font-bold text-sm text-white uppercase tracking-widest mb-6 pb-2 border-b border-white/5 w-fit pr-6">
                Get In Touch
              </h3>
              <ul className="space-y-3 font-poppins text-xs sm:text-sm text-white/70">
                <li className="flex items-center space-x-3">
                  <FaPhoneAlt className="text-gold shrink-0" />
                  <div>
                    <span className="text-[10px] text-white/40 block uppercase font-bold">Office Dispatch</span>
                    <a href="tel:+15064554605" className="hover:text-gold font-semibold text-white">506-455-4605</a>
                  </div>
                </li>
                <li className="flex items-center space-x-3">
                  <FaWhatsapp className="text-emerald-400 shrink-0" />
                  <div>
                    <span className="text-[10px] text-white/40 block uppercase font-bold">WhatsApp / Text</span>
                    <a href="https://wa.me/15064783683" target="_blank" rel="noopener noreferrer" className="hover:text-gold font-semibold text-white">506-478-3683</a>
                  </div>
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
              <h4 className="font-montserrat font-bold text-xs text-white uppercase tracking-widest mb-2">
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
            <span className="text-white/40">Proudly Canadian Owned & Operated</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
