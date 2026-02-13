'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
const Specialities = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const specialities = [
    {
      id: 1,
      title: 'Self-Esteem',
      description:
        "Building a strong sense of self-worth is key to living a fulfilled life. Let's work together to bolster your self-esteem.",
      image: '/selfesteem.jpg',
    },
    {
      id: 2,
      title: 'Relationships',
      description:
        "Navigating relationships can be complex. I'm here to guide you through these complexities to help you form healthier connections.",
      image: '/relationship.avif',
    },
    {
      id: 3,
      title: 'Burnout',
      description:
        "Feeling overwhelmed by your career is more common than you think. Together, we'll identify strategies to manage and prevent burnout.",
      image: '/coffee.jpg',
    },
  ];

  return (
    <section className="bg-white py-20 lg:py-32">
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
        className="container mx-auto px-6 lg:px-12"
      >
        {/* Section Title */}
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
          className="text-4xl lg:text-5xl xl:text-6xl font-serif text-[#2E3F1F] text-center mb-16 lg:mb-20"
        >
          My Specialties
        </motion.h2>

        {/* Specialties Grid */}
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
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {specialities.map(speciality => (
            <div
              key={speciality.id}
              className="bg-[#E8E4DD] border border-[#2E3F1F] p-8 flex flex-col"
            >
              {/* Title */}
              <motion.h3
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
                className="text-2xl font-serif text-[#2E3F1F] mb-6"
              >
                {speciality.title}
              </motion.h3>

              {/* Description */}
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
                className="text-[#2E3F1F] text-base leading-relaxed mb-8"
              >
                {speciality.description}
              </motion.p>

              {/* Circular Image at Bottom */}
              <div className="mt-auto flex justify-center">
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
                  className="relative w-64 h-64 rounded-full overflow-hidden"
                >
                  <Image
                    src={speciality.image}
                    alt={speciality.title}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Specialities;
