'use client';

import Link from 'next/link';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const CTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="bg-[#9B9B6B] py-20 lg:py-32"
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
        {/* Heading */}
        <h2 className="text-4xl lg:text-5xl xl:text-6xl font-serif text-white mb-8 lg:mb-10">
          Schedule a Consultation.
        </h2>

        {/* Description */}
        <p className="text-white text-base lg:text-lg leading-relaxed mb-10 lg:mb-12 max-w-2xl mx-auto">
          If you’re considering therapy, I invite you to reach out to schedule a
          consultation. We can discuss what brings you in and determine whether
          working together feels like a good fit.
        </p>

        {/* CTA Button */}
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-3 border-2 border-white text-white font-medium text-base hover:bg-white hover:text-[#9B9B6B] transition-colors duration-300"
        >
          Schedule a Consultation
          <span className="text-xl">→</span>
        </Link>
      </div>
    </motion.section>
  );
};

export default CTA;
