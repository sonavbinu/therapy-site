'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

const Office = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="bg-white py-16 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Title */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-serif text-[#2E3F1F] mb-6">
            A Calm Space for Healing
          </h2>
          <p className="text-lg lg:text-xl text-[#2E3F1F] max-w-3xl mx-auto leading-relaxed">
            My Santa Monica office is designed to feel safe, private, and
            grounding—a place where you can slow down, reflect, and do
            meaningful work.
          </p>
        </div>

        {/* Office Images Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }
            }
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[400px] lg:h-[500px] overflow-hidden rounded-lg"
          >
            <img
              src="/office1.jpeg"
              alt="Therapy office interior"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }
            }
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative h-[400px] lg:h-[500px] overflow-hidden rounded-lg"
          >
            <img
              src="/office2.jpeg"
              alt="Office detail"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Office Details */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center"
          >
            <h3 className="text-2xl lg:text-3xl font-serif text-[#2E3F1F] mb-4">
              Location
            </h3>
            <p className="text-base lg:text-lg text-[#2E3F1F] leading-relaxed">
              Conveniently located in Santa Monica, California, with easy access
              and parking available.
            </p>
          </motion.div>

          {/* Environment */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-center"
          >
            <h3 className="text-2xl lg:text-3xl font-serif text-[#2E3F1F] mb-4">
              The Space
            </h3>
            <p className="text-base lg:text-lg text-[#2E3F1F] leading-relaxed">
              A quiet, private environment with natural light and comfortable,
              uncluttered design to help you feel at ease.
            </p>
          </motion.div>

          {/* Session Options */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center"
          >
            <h3 className="text-2xl lg:text-3xl font-serif text-[#2E3F1F] mb-4">
              Session Options
            </h3>
            <p className="text-base lg:text-lg text-[#2E3F1F] leading-relaxed">
              In-person sessions in Santa Monica or secure telehealth for
              clients throughout California.
            </p>
          </motion.div>
        </div>

        {/* Additional Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-12 lg:mt-16 max-w-4xl mx-auto text-center"
        >
          <p className="text-base lg:text-lg text-[#2E3F1F] leading-relaxed mb-6">
            The office is designed with your comfort and privacy in mind.
            Clients often share that the space itself helps them feel more
            grounded and present when they arrive. Whether you're coming in
            person or connecting via telehealth, my goal is to create an
            environment where you feel safe, respected, and supported.
          </p>
          <p className="text-base lg:text-lg text-[#2E3F1F] leading-relaxed">
            The office is designed with your comfort and privacy in mind. Many
            clients share that the space itself helps them feel more grounded
            and present from the moment they arrive. Whether meeting in person
            or connecting via telehealth, my intention is to create an
            environment where you feel safe, respected, and supported.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Office;
