'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Introduction = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  return (
    <section className="bg-[#E8DDD4]">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={
          isInView
            ? { opacity: 1, y: 0 }
            : {
                opacity: 0,
                y: 50,
              }
        }
        transition={{
          duration: 0.6,

          ease: 'easeOut',
        }}
        className="max-w-full mx-auto"
      >
        {/* Two Column Grid */}
        <div className="grid lg:grid-cols-2 min-h-[600px]">
          {/* LEFT COLUMN - Content */}
          <div className="flex flex-col justify-center px-10 lg:px-16 xl:px-24 py-16 lg:py-20">
            {/* Heading */}
            <h2 className="text-5xl lg:text-6xl xl:text-7xl font-serif text-[#2E3F1F] leading-tight mb-8">
              Hi, I'm Dr. Maya Reynolds.
            </h2>

            {/* Description */}
            <p className="text-[#2E3F1F] text-base lg:text-lg leading-relaxed mb-10">
              I work with adults who feel overwhelmed by anxiety, burnout, or
              the lingering impact of past experiences. My approach is warm,
              grounded, and collaborative—combining practical tools with
              depth-oriented work to help you feel more steady and supported in
              daily life.
            </p>

            {/* CTA Button */}
            <div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3 border-2 border-[#2E3F1F] text-[#2E3F1F] font-medium text-base hover:bg-[#2E3F1F] hover:text-white transition-colors duration-300"
              >
                LET'S CHAT
                <span className="text-xl">→</span>
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN - Images */}
          <div className="relative w-full h-full min-h-[500px] lg:min-h-[600px] p-8 lg:p-12 flex items-center justify-center">
            {/* Background Image - Lilac Bouquet */}
            <div className="relative w-full max-w-[400px] h-[600px] aspect-square">
              <Image
                src="/maya.png"
                alt="Lilac bouquet"
                fill
                className="object-cover rounded-t-[9999px]"
              />
            </div>

            {/* Overlapping Circle - White Flowers */}
            <div className="absolute bottom-8 right-8 lg:bottom-16 lg:right-16 w-[200px] h-[200px] lg:w-[280px] lg:h-[280px]">
              <Image
                src="/flower2.webp"
                alt="White flowers"
                fill
                className="object-cover rounded-full border-4 border-[#E8DDD4]"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Introduction;
