'use client';
import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Background = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const background = [
    {
      title: 'Education',
      description:
        'Doctor of Psychology (PsyD) in Clinical Psychology. Training emphasized evidence-based treatment for anxiety, trauma, and mood disorders, with advanced coursework in cognitive-behavioral therapy (CBT), trauma-informed care, and psychodynamic theory. Completed clinical internships in outpatient mental health, private practice settings, and community-based trauma programs serving adults.',
    },
    {
      title: 'Licensure',
      description:
        'Licensed Clinical Psychologist in the State of California. Licensed to provide in-person psychotherapy in Santa Monica and secure telehealth services to clients located throughout California. Adheres to all state ethical standards, continuing education requirements, and professional practice guidelines.',
    },
    {
      title: 'Certifications & Specialized Training',
      description:
        'Trained in EMDR (Eye Movement Desensitization and Reprocessing) for trauma treatment. Advanced training in Cognitive Behavioral Therapy (CBT) for anxiety and panic disorders. Ongoing professional development in mindfulness-based interventions, somatic and body-oriented approaches, and burnout recovery for high-performing professionals.',
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="bg-[#E8DDD4] py-16 lg:py-24"
    >
      <div className="max-w-3xl mx-auto px-6 lg:px-12">
        {/* Title */}
        <h1 className="text-4xl lg:text-5xl font-serif text-[#2E3F1F] text-center mb-12 lg:mb-16">
          My Professional Background
        </h1>

        {/* Accordion Items */}
        <div className="space-y-0">
          {background.map((b, index) => (
            <div
              key={index}
              className={`border-t border-[#2E3F1F] ${
                index === background.length - 1 ? 'border-b' : ''
              }`}
            >
              {/* Button */}
              <button
                onClick={() => toggle(index)}
                className="w-full py-6 lg:py-8 flex items-center justify-between text-left group"
              >
                <span className="text-xl lg:text-2xl text-[#2E3F1F] font-normal">
                  {b.title}
                </span>
                <span
                  className={`text-2xl lg:text-3xl text-[#2E3F1F] flex-shrink-0 transition-transform duration-300 ease-in-out ${
                    openIndex === index ? 'rotate-180' : 'rotate-0'
                  }`}
                >
                  {openIndex === index ? '-' : '+'}
                </span>
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-[#2E3F1F] pb-6 lg:pb-8 pl-0 pr-12 leading-relaxed text-base lg:text-lg">
                  {b.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
export default Background;
