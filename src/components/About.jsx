import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaAward, FaCanadianMapleLeaf, FaHeart } from 'react-icons/fa';
import teamImg from '../img/about_team.png';
import truckImg from '../img/65160.png';
import packingImg from '../img/65164.png';

const About = () => {
  const visionItems = [
    'Build businesses known for professionalism, reliability, integrity and genuine care',
    'Create meaningful employment and opportunities for people in our communities',
    'Build a workplace where employees feel respected and have opportunities to develop',
    'Support charities, families and community initiatives as our businesses become established',
    'Continue expanding our services throughout Fredericton, Saint John, Moncton and other New Brunswick communities',
    'Create connections and opportunities that reflect both our Canadian and African roots',
    'Build something our children and extended family can be proud of',
    'Create a legacy that can continue long after us',
  ];

  return (
    <section id="medak-family" className="py-20 sm:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Story + Mosaic */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-16">
          
          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 text-left space-y-6"
          >
            {/* Section Badge / Header */}
            <div className="flex items-center space-x-2 text-forest font-semibold text-xs sm:text-sm uppercase tracking-widest mb-3">
              <FaCanadianMapleLeaf className="text-maple text-sm" />
              <span>🍁 OUR STORY — THE FAMILY BEHIND MEDAK</span>
            </div>

            {/* Title */}
            <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl lg:text-5xl text-navy leading-tight mb-6">
              Two Backgrounds. One Family. One Vision.
            </h2>

            {/* Main Intro Paragraphs */}
            <div className="space-y-4 font-poppins text-slate-600 text-sm sm:text-base leading-relaxed">
              <p>
                When people see Medak & Kin Moving Inc. or Medak Prestige Cleaning, we want them to know there is much more behind those names than trucks, moving boxes and cleaning supplies.
              </p>
              <p className="font-medium text-navy">
                There is a family, a story, two cultures, and a vision for the future.
              </p>
              <p>
                We are Christina Savoie and Tosin Medaiyese, Co-Founders of Medak — two people from different parts of the world who came together in New Brunswick and decided to build something of our own.
              </p>
              <p>
                But Medak isn't only about us.
              </p>
              <p>
                It's about our children, our families here in Canada, our family abroad, and the generations who came before us and those who will come after us.
              </p>
            </div>
          </motion.div>

          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative sticky top-24"
          >
            {/* Decorative backgrounds */}
            <div className="absolute -top-4 -left-4 w-72 h-72 bg-gold/10 rounded-3xl -z-10 blur-xl" />
            <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-navy/5 rounded-3xl -z-10 blur-xl" />
            
            {/* Image Grid Mosaic */}
            <div className="grid grid-cols-2 gap-4 h-[400px] sm:h-[480px]">
              {/* Left Column: Team Image */}
              <div className="relative border-2 border-gold/20 rounded-2xl p-1 bg-white shadow-xl hover:border-gold transition-colors duration-300">
                <img
                  src={teamImg}
                  alt="Medak & Kin Professional Moving Team"
                  className="w-full h-full object-cover rounded-xl"
                  loading="lazy"
                />
              </div>

              {/* Right Column: Stack of Truck and Packing */}
              <div className="flex flex-col gap-4">
                <div className="h-2/5 relative border-2 border-gold/20 rounded-2xl p-1 bg-white shadow-xl hover:border-gold transition-colors duration-300">
                  <img
                    src={truckImg}
                    alt="Medak & Kin Moving Truck"
                    className="w-full h-full object-cover rounded-xl"
                    loading="lazy"
                  />
                </div>
                <div className="h-3/5 relative border-2 border-gold/20 rounded-2xl p-1 bg-white shadow-xl hover:border-gold transition-colors duration-300">
                  <img
                    src={packingImg}
                    alt="Medak & Kin Packing Services"
                    className="w-full h-full object-cover rounded-xl"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: 'spring' }}
              className="absolute -bottom-6 -left-6 bg-navy text-white px-6 py-4 rounded-xl shadow-xl flex items-center space-x-3 border border-gold/30 z-10"
            >
              <div className="bg-gold/15 p-2 rounded-lg">
                <FaHeart className="text-gold text-2xl" />
              </div>
              <div className="text-left">
                <p className="font-spartan font-bold text-lg leading-none text-gold">100%</p>
                <p className="font-poppins text-[10px] text-white/70 uppercase tracking-wider font-semibold">Family Care & Dedicated Service</p>
              </div>
            </motion.div>
          </motion.div>

        </div>

        {/* Story Sub-Blocks Grid / Sequence */}
        <div className="space-y-12 text-left max-w-5xl mx-auto border-t border-slate-100 pt-12">
          
          {/* Sub-block 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-slate-50 border border-slate-200/80 rounded-3xl p-8 sm:p-10 space-y-4"
          >
            <h3 className="font-montserrat font-extrabold text-2xl text-navy">
              🍁 Where the name MEDAK came from
            </h3>
            <p className="font-poppins text-slate-700 text-sm sm:text-base leading-relaxed">
              The name MEDAK carries a very personal meaning for our family.
            </p>
            <p className="font-poppins text-slate-700 text-sm sm:text-base leading-relaxed">
              It was created in honour of Tosin's late father, Abraham Kusemoran Medaiyese, whose family name and legacy became part of the inspiration behind what we're building today.
            </p>
            <p className="font-poppins text-slate-700 text-sm sm:text-base leading-relaxed">
              For us, that represents something much bigger than a business name.
            </p>
            <p className="font-poppins text-slate-700 text-sm sm:text-base leading-relaxed">
              It represents where we came from, who helped shape us, and what we hope to leave behind.
            </p>
            <p className="font-poppins text-slate-700 text-sm sm:text-base leading-relaxed">
              Our family stretches across borders — from New Brunswick and elsewhere in Canada to Nigeria and abroad — and those connections have shaped our values and our vision.
            </p>
          </motion.div>

          {/* Sub-block 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-slate-50 border border-slate-200/80 rounded-3xl p-8 sm:p-10 space-y-4"
          >
            <h3 className="font-montserrat font-extrabold text-2xl text-navy">
              🇨🇦🇳🇬 Two backgrounds. One family. One vision.
            </h3>
            <p className="font-poppins text-slate-700 text-sm sm:text-base leading-relaxed">
              Christina brings her Canadian and New Brunswick roots, while Tosin brings his Nigerian and Yoruba heritage.
            </p>
            <p className="font-poppins text-slate-700 text-sm sm:text-base leading-relaxed">
              Our children are growing up surrounded by both.
            </p>
            <p className="font-poppins text-slate-700 text-sm sm:text-base leading-relaxed">
              That blending of cultures, traditions, experiences and family values has become an important part of what Medak represents.
            </p>
            <p className="font-poppins text-slate-700 text-sm sm:text-base leading-relaxed">
              We want our children to grow up seeing that something meaningful can be created through hard work, perseverance, integrity and the courage to start.
            </p>
            <p className="font-poppins text-slate-700 text-sm sm:text-base leading-relaxed">
              We want them to understand that success isn't only about what you can build for yourself.
            </p>
            <p className="font-poppins text-slate-700 text-sm sm:text-base leading-relaxed font-semibold text-navy">
              It's also about what you can build for others and what you leave behind.
            </p>
          </motion.div>

          {/* Sub-block 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-slate-50 border border-slate-200/80 rounded-3xl p-8 sm:p-10 space-y-6"
          >
            <h3 className="font-montserrat font-extrabold text-2xl text-navy">
              🚚 How Medak began
            </h3>
            <p className="font-poppins text-slate-700 text-sm sm:text-base leading-relaxed">
              Medak & Kin Moving Inc. was developed around a simple idea: help people through one of life's biggest transitions while treating their belongings, homes and families with care.
            </p>
            <p className="font-poppins text-slate-700 text-sm sm:text-base leading-relaxed">
              From there came Medak Prestige Cleaning, giving us the ability to provide another service that naturally complements moving while also serving residential and commercial clients independently.
            </p>
            <p className="font-poppins text-slate-700 text-sm sm:text-base leading-relaxed">
              Today, customers can hire either company separately or bring both together through our Move & Clean service.
            </p>

            <div className="bg-white border border-gold/30 rounded-2xl p-6 shadow-sm space-y-3">
              <h4 className="font-montserrat font-extrabold text-lg text-navy">
                Move & Clean Advantage:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-poppins text-sm font-bold text-navy">
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex items-center space-x-2">
                  <span>🚚</span>
                  <span>We move it.</span>
                </div>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex items-center space-x-2">
                  <span>🧹</span>
                  <span>We clean it.</span>
                </div>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex items-center space-x-2">
                  <span>🏡</span>
                  <span>You settle in.</span>
                </div>
              </div>
              <p className="font-poppins text-xs sm:text-sm font-semibold text-forest pt-2">
                Customers who book their moving and cleaning services together can currently save $50 on their cleaning service.
              </p>
            </div>
          </motion.div>

          {/* Sub-block 4 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-slate-50 border border-slate-200/80 rounded-3xl p-8 sm:p-10 space-y-6"
          >
            <h3 className="font-montserrat font-extrabold text-2xl text-navy">
              🌱 What we're trying to build
            </h3>
            <p className="font-poppins text-slate-700 text-sm sm:text-base leading-relaxed">
              Our vision extends far beyond today's jobs or tomorrow's bookings.
            </p>
            <p className="font-poppins text-slate-700 text-sm sm:text-base leading-relaxed">
              We want to develop Medak into a family of businesses that can create employment, opportunity, stability and positive community impact.
            </p>
            <p className="font-poppins text-slate-700 text-sm sm:text-base font-semibold text-navy">
              As we grow, we want to:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              {visionItems.map((item, index) => (
                <div key={index} className="flex items-start space-x-3 bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                  <FaCheckCircle className="text-forest mt-1 shrink-0 text-base" />
                  <span className="font-poppins text-xs sm:text-sm font-semibold text-slate-800">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Sub-block 5 & Sign-off */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-navy text-white rounded-3xl p-8 sm:p-12 space-y-6 border border-gold/20 shadow-xl"
          >
            <h3 className="font-montserrat font-extrabold text-2xl sm:text-3xl text-gold">
              ❤️ Family is at the centre of it
            </h3>
            <div className="space-y-4 font-poppins text-white/90 text-sm sm:text-base leading-relaxed">
              <p>
                Our children are one of the biggest reasons we think beyond today.
              </p>
              <p>
                We want them to see their parents dream, work, stumble, learn, get back up and keep building.
              </p>
              <p>
                And behind us are family members both near and far — people in Canada, Nigeria and elsewhere abroad who are part of our story, our heritage and the reason the word family carries so much weight for us.
              </p>
              <p className="text-gold font-semibold">
                That's why Medak isn't simply about building companies.
              </p>
              <p>
                It's about connecting generations.
              </p>
              <p>
                Honouring where we came from.
              </p>
              <p>
                Creating opportunities where we are.
              </p>
              <p>
                And building something for those who come after us.
              </p>
              <p>
                We're still at the beginning of this journey, and there is a lot of work ahead.
              </p>
              <p>
                Every customer who books with us, every person who recommends us, every business that gives us an opportunity, and every employee who proudly represents Medak becomes part of that journey.
              </p>
              <p>
                Our dream is not simply to build successful businesses.
              </p>
              <p>
                We want to build a legacy, strengthen our family, create opportunities for others, and make a positive contribution to the communities that give us the opportunity to grow.
              </p>
              <p className="text-gold font-bold text-base pt-2">
                From our family to yours — thank you, New Brunswick, for being part of the beginning of our story. 🍁❤️🇨🇦🇳🇬
              </p>
            </div>

            {/* Founders & Contact Details */}
            <div className="pt-8 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 gap-6 text-left font-poppins text-xs sm:text-sm">
              <div className="space-y-2">
                <p><strong className="text-gold">Christina Savoie</strong> — Co-Founder & CEO</p>
                <p><strong className="text-gold">Tosin Medaiyese</strong> — Co-Founder & COO</p>
                <p className="text-white/70 pt-2"><strong>MEDAK & KIN MOVING INC.</strong> — Moving Your Life Forward</p>
                <p className="text-white/70"><strong>MEDAK PRESTIGE CLEANING</strong> — Clean Spaces. Healthy Places. Better Lives.</p>
              </div>

              <div className="space-y-2 md:text-right">
                <p>📞 Call: <a href="tel:5064554605" className="text-gold font-bold hover:underline">506-455-4605</a></p>
                <p>💬 WhatsApp: <a href="https://wa.me/15064783683" target="_blank" rel="noopener noreferrer" className="text-gold font-bold hover:underline">506-478-3683</a></p>
                <p className="text-white/70 pt-2">📍 Serving Fredericton, Saint John, Moncton and other New Brunswick cities and communities by advance booking.</p>
                <p className="text-gold font-bold uppercase tracking-wider text-xs pt-1">Professional. Reliable. Trusted.</p>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default About;
