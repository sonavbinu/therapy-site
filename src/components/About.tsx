'use client';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  return (
    <section className="bg-[#e5e0da]">
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
        className="max-w-full mx-auto "
      >
        {/* 45% / 55% Grid */}
        <div className="grid lg:grid-cols-[50%_50%] min-h-[600px] ">
          {/* LEFT COLUMN */}
          <div className="flex flex-col justify-between item-center ">
            {/* Top Content */}
            <div className="flex flex-col item-center justify-center  px-10 py-10  h-full">
              <motion.h2
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
                className="text-5xl font-serif text-[#2E3F1F] leading-tight mb-8"
              >
                Find steadiness in the midst of stress.
              </motion.h2>

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
                className="text-lg text-[#2E3F1F] space-y-6"
              >
                <p>
                  Many of the adults I work with appear successful and capable
                  on the outside—yet internally feel overwhelmed, anxious, or
                  emotionally exhausted. Constant overthinking, tension in the
                  body, difficulty sleeping, or feeling “on edge” can quietly
                  shape daily life.
                </p>

                <p>
                  Therapy offers a space to slow down, gain clarity, and
                  understand both the emotional and physiological patterns that
                  keep you stuck. Together, we work toward greater regulation,
                  resilience, and a more sustainable way of living and working.
                </p>
              </motion.div>
            </div>

            {/* Bottom Button */}
            <div>
              <a
                href="/contact"
                className="inline-block text-center px-8 py-6 border border-[#2E3F1F] w-full text-sm tracking-wider hover:bg-[#2E3F1F] hover:text-white transition"
              >
                GET IN TOUCH →
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="relative w-full h-full">
            <img
              src="./image2.avif"
              alt="Office"
              className="w-full h-[800px] object-cover"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
