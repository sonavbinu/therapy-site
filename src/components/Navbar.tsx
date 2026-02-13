'use client';

import Link from 'next/link';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', latest => {
    const previous = scrollY.getPrevious();

    if (latest > (previous ?? 0) && latest > 150) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  });
  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#F6F1EB]"
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 lg:px-14 py-6">
        <Link
          href="/"
          className="text-2xl lg:text-3xl font-serif text-[#2E3F1F] tracking-tight"
        >
          Dr. Maya Reynolds
        </Link>

        {/* navigation links */}
        <div className="flex gap-8 lg:gap-12 items-center text-sm lg:text-base text-[#2E3F1F] font-medium">
          <Link href="/blog" className="hover:opacity-70 transition-opacity">
            Blog
          </Link>
          <Link href="/contact" className="hover:opacity-70 transition-opacity">
            Contact
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};
export default Navbar;
