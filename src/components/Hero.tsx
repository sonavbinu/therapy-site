'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="bg-white min-h-screen px-13 py-27"
    >
      <div className="container mx-auto px-6 lg:px-22 grid lg:grid-cols-2 gap-0 items-center min-h-screen">
        {/* Left side - Image */}
        <div className="flex justify-center lg:justify-start py-12 lg:py-0">
          <div className="w-full max-w-[400px] lg:max-w-[500px]">
            <img
              src="/bouquet.avif"
              width={600}
              height={600}
              className="rounded-t-full w-full h-[800px] object-fit"
              alt="Decorative flower bouquet"
            />
          </div>
        </div>

        {/* Right side - Content */}
        <div className="flex flex-col justify-center items-center py-12 lg:py-0 lg:pl-16">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-serif text-[#2E3F1F] leading-[1.05] mb-8">
            Live your life <br />
            in full bloom
          </h1>

          <p className="text-[#2E3F1F] text-base sm:text-lg mb-10 text-center">
            Therapy for adults in Santa Monica, California, specializing in
            anxiety, trauma, and burnout.
          </p>

          <button className="px-8 py-3 border-2 border-[#2E3F1F] text-[#2E3F1F] text-sm font-medium tracking-[0.15em] hover:bg-[#2E3F1F] hover:text-white transition-all duration-300">
            CONNECT WITH ME →
          </button>
        </div>
      </div>
    </motion.section>
  );
};
export default Hero;
