'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const FAQData = [
    {
      question: 'Do you accept insurance?',
      answer:
        'I am an out-of-network provider and do not bill insurance directly. However, I can provide a superbill that you may submit to your insurance company for possible reimbursement. I recommend contacting your provider to verify your out-of-network mental health benefits.',
    },
    {
      question: 'What are your session fees?',
      answer:
        'My standard fee is $150 per 50-minute session. Payment is due at the time of service. I also offer a limited number of reduced-fee slots based on availability.',
    },
    {
      question: 'Do you currently have availability?',
      answer:
        'I periodically have openings for new clients. Please reach out through the contact form to inquire about current availability and schedule a brief consultation call.',
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="bg-[#F5F0ED] py-16 lg:py-20"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* LEFT COLUMN - Image */}
          <div className="w-full flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[400px] lg:max-w-[500px]">
              <img
                src="./image3.avif"
                alt="Lavender flowers"
                className="w-full h-[400px] lg:h-[600px] object-cover rounded-t-[9999px]"
              />
            </div>
          </div>

          {/* RIGHT COLUMN - FAQ Content */}
          <div className="w-full font-bold bg-[#fbf6f2]">
            {/* Title */}
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-serif text-[#2E3F1F] mb-8 lg:mb-12 font-bold text-[#ac5655]">
              FAQs
            </h2>

            {/* FAQ Items */}
            <div className="space-y-0 bg-[#fbf6f2]">
              {FAQData.map((faq, index) => (
                <div
                  key={index}
                  className={`border-t border-[#2E3F1F] flex flex-col bg-[#fbf6f2] ${
                    index === 2 ? 'border-b border-[#2E3F1F]' : ''
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full py-4 lg:py-6 flex items-center gap-3 lg:gap-4 text-left"
                  >
                    <span
                      className={`text-2xl lg:text-3xl text-[#2E3F1F] flex-shrink-0 transition-transform duration-300 ease-in-out  hover:scale-[1] ${
                        openIndex === index ? 'rotate-180' : 'rotate-0'
                      }`}
                    >
                      {openIndex === index ? '-' : '+'}
                    </span>
                    <span className="text-lg lg:text-xl xl:text-2xl text-[#2E3F1F] flex-1 hover:cursor-pointer">
                      {faq.question}
                    </span>
                  </button>
                  {/* answer */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openIndex === index
                        ? 'max-h-96 opacity-100'
                        : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="text-[#2E3F1F] pb-4 lg:pb-6 pl-10 lg:pl-16 pr-4 lg:pr-6 leading-relaxed text-sm lg:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
export default FAQ;
