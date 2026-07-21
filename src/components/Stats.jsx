import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const StatCounter = ({ value, suffix = '', duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px 0px' });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(value);
      if (start === end) return;

      const totalMiliseconds = duration * 1000;
      const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 15);
      
      const timer = setInterval(() => {
        start += 1;
        // Exponentially slow down near the end for realistic effect
        const progress = start / end;
        const currentCount = Math.floor(progress * end);
        setCount(currentCount);

        if (start >= end) {
          clearInterval(timer);
          setCount(end);
        }
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  // Format count with commas for larger numbers
  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <span ref={ref} className="font-spartan font-extrabold text-4xl sm:text-5xl text-gold">
      {formatNumber(count)}{suffix}
    </span>
  );
};

const Stats = () => {
  const statsData = [
    { value: '5', suffix: '+', label: 'Years Serving New Brunswick' },
    { value: '1200', suffix: '+', label: 'Happy Customers' },
    { value: '1500', suffix: '+', label: 'Successful Moves' },
    { value: '15', suffix: '+', label: 'Professional Movers' },
    { value: '10', suffix: '+', label: 'Service Areas' },
  ];

  return (
    <section className="relative z-20 py-10 bg-navy-dark border-y border-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-4 text-center">
          {statsData.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="flex flex-col items-center justify-center p-4 border-r last:border-r-0 border-white/5 md:border-r"
            >
              <div className="flex items-baseline">
                <StatCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <span className="font-poppins text-xs sm:text-sm font-medium text-white/70 mt-2 uppercase tracking-widest max-w-[150px]">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
