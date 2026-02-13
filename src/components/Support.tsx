'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Support = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const challenges = [
    'Persistent feelings of sadness or hopelessness',
    'Trouble focusing or making decisions',
    'Difficulty maintaining relationships',
    'Feeling constantly exhausted or unmotivated',
    'A pervasive sense of being overwhelmed',
  ];

  return (
    <section className="bg-[#D4C5D8]">
      <div className="max-w-full mx-auto">
        {/* Two Column Grid */}
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
          className="grid lg:grid-cols-2 min-h-[600px]"
        >
          {/* LEFT COLUMN - Image */}
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
            className="relative w-full h-full min-h-[500px] lg:min-h-[600px]"
          >
            <Image
              src="/download.jpg"
              alt="Person looking up"
              fill
              className="object-cover"
            />
          </motion.div>
          {/* RIGHT COLUMN - Content */}
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
          >
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
              className="flex flex-col justify-center px-10 lg:px-16 py-16 lg:py-20"
            >
              {/* Heading */}
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
                className="text-4xl lg:text-5xl xl:text-6xl font-serif text-[#2E3F1F] leading-tight mb-8"
              >
                You don't have to do this all{' '}
                <span className="italic">alone.</span>
              </motion.h2>
              {/* Subheading */}
              <motion.p
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
                className="text-[#2E3F1F] text-lg mb-8"
              >
                If you are facing any of these, there's hope:
              </motion.p>
              {/* Bullet Points */}
              <motion.ul
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
                className="space-y-4 mb-10"
              >
                {challenges.map((challenge, index) => (
                  <li
                    key={index}
                    className="flex items-start text-[#2E3F1F] text-base lg:text-lg"
                  >
                    <span className="mr-3 mt-1.5">•</span>
                    <span>{challenge}</span>
                  </li>
                ))}
              </motion.ul>
              {/* Bottom Text */}
              <motion.p
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
                className="text-[#2E3F1F] text-base lg:text-lg leading-relaxed"
              >
                With empathy and guidance, we'll work together to navigate the
                challenges life throws your way.
              </motion.p>{' '}
            </motion.div>{' '}
            <div>
              <a
                href="/contact"
                className="inline-block text-center px-8 py-6 border border-[#2E3F1F] w-full text-sm tracking-wider hover:bg-[#2E3F1F] hover:text-white transition"
              >
                WORK WITH ME →
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Support;
