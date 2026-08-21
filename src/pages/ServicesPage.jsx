import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaHome, 
  FaBuilding, 
  FaBoxes, 
  FaGraduationCap, 
  FaTruckLoading, 
  FaWarehouse, 
  FaCanadianMapleLeaf, 
  FaArrowRight, 
  FaPhoneAlt 
} from 'react-icons/fa';
import StorageSection from '../components/StorageSection';

const ServicesPage = () => {
  const detailedServices = [
    {
      icon: FaHome,
      title: 'Residential Moving',
      subtitle: 'Single-Family Homes, Townhouses & Condos',
      desc: 'Our residential moving teams assist families through every stage of moving home. From protecting floors and doorways to wrapping delicate furniture, we handle your possessions with extreme care.',
      bullets: [
        'Full home, townhouse, and condo moves',
        'Furniture disassembly and reassembly',
        'Specialty blanket wrapping and padding',
        'Flexible scheduling to align with closing dates'
      ]
    },
    {
      icon: FaBuilding,
      title: 'Commercial & Office Relocations',
      subtitle: 'Business, Retail & Office Spaces',
      desc: 'Minimize company downtime with structured commercial moving plans. We move office furniture, desks, equipment, files, and retail fixtures efficiently.',
      bullets: [
        'Weekend and after-hours moving options',
        'Office desk, cubicle, and workspace relocations',
        'Commercial equipment and inventory handling',
        'Detailed room-by-room labeling and placement'
      ]
    },
    {
      icon: FaBoxes,
      title: 'Apartment & High-Rise Moves',
      subtitle: 'Multi-Unit Property Logistics',
      desc: 'Apartment moves require managing tight hallways, elevator time slots, and stairs. Our movers ensure rapid loading without disrupting neighbors.',
      bullets: [
        'Elevator booking and time-window optimization',
        'Stairwell and tight-corner navigation',
        'Loading dock and parking space coordination',
        'Ideal for studio, 1-bed, 2-bed, and penthouse suites'
      ]
    },
    {
      icon: FaGraduationCap,
      title: 'Student Moving',
      subtitle: 'Dorm & Student Rental Relocations',
      desc: 'Affordable, flexible moving assistance for university and college students in Fredericton, Saint John, and across New Brunswick.',
      bullets: [
        'Budget-friendly rates for small-volume moves',
        'University dorm and off-campus housing moves',
        'Quick semester move-in and move-out assistance',
        'Convenient storage transfer options'
      ]
    },
    {
      icon: FaTruckLoading,
      title: 'Loading & Unloading Services',
      desc: 'Already rented your own truck, container, or trailer? Hire our experienced crew purely for physical loading and unloading labor.',
      bullets: [
        'PODS, U-Haul, and container packing labor',
        'Heavy lifting and item positioning',
        'Maximizing container space securely',
        'Protective tie-downs and weight distribution'
      ]
    },
    {
      icon: FaWarehouse,
      title: 'Convenient Storage Coordination',
      desc: 'Our main office is located on-site at Sam’s Storage on Lincoln Road. We help coordinate moving your belongings directly into independently managed storage units.',
      bullets: [
        'Direct delivery into storage units',
        'Pick-up from storage to your new property',
        'Seamless timing between closing dates',
        'Short-term or long-term transition support'
      ]
    }
  ];

  return (
    <div className="pt-24 pb-16 bg-white min-h-screen">
      {/* Page Hero Header */}
      <section className="bg-navy text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          <div className="flex items-center space-x-2 text-gold font-semibold text-xs sm:text-sm uppercase tracking-widest mb-3">
            <FaCanadianMapleLeaf className="text-maple text-sm" />
            <span>Medak & Kin Services</span>
          </div>
          <h1 className="font-montserrat font-extrabold text-4xl sm:text-5xl text-white mb-4">
            Professional Moving Services
          </h1>
          <p className="font-poppins text-white/80 text-base sm:text-lg max-w-2xl leading-relaxed">
            Dependable, transparent moving solutions customized for residential, commercial, and specialty relocations across New Brunswick.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {detailedServices.map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="bg-white border border-slate-200/80 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between text-left"
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-navy text-gold flex items-center justify-center text-2xl mb-6 shadow-md">
                      <Icon />
                    </div>
                    <h3 className="font-montserrat font-extrabold text-xl text-navy mb-1">
                      {service.title}
                    </h3>
                    {service.subtitle && (
                      <p className="font-poppins text-xs font-bold text-forest uppercase tracking-wider mb-4">
                        {service.subtitle}
                      </p>
                    )}
                    <p className="font-poppins text-slate-600 text-sm leading-relaxed mb-6">
                      {service.desc}
                    </p>
                    <ul className="space-y-2 mb-8">
                      {service.bullets.map((b, i) => (
                        <li key={i} className="flex items-start space-x-2.5 font-poppins text-xs text-slate-700 font-semibold">
                          <span className="text-gold font-bold">•</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    to="/quote"
                    className="w-full inline-flex items-center justify-center space-x-2 font-poppins font-bold bg-slate-100 hover:bg-gold text-navy py-3 rounded-xl transition-colors text-xs uppercase tracking-wider"
                  >
                    <span>Request Quote</span>
                    <FaArrowRight />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Storage Section Component */}
      <StorageSection />

      {/* Bottom CTA Banner */}
      <section className="py-16 bg-white border-t border-slate-200/60">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="font-montserrat font-extrabold text-3xl text-navy">
            Ready to Plan Your Upcoming Move?
          </h2>
          <p className="font-poppins text-slate-600 text-base">
            Get an instant customized estimate for your residential or commercial relocation.
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
              className="w-full sm:w-auto font-poppins font-bold bg-navy hover:bg-navy-light text-white px-8 py-3.5 rounded-full transition-all text-sm flex items-center justify-center space-x-2"
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

export default ServicesPage;
