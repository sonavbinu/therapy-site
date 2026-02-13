const Footer = () => {
  return (
    <footer className="bg-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-16 lg:py-20">
        {/* Grid Layout - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          {/* Column 1 - Contact Info */}
          <div className="text-[#2E3F1F]">
            <h2 className="text-3xl lg:text-4xl font-serif mb-8 lg:mb-10">
              Dr. Maya Reynolds, PsyD
            </h2>
            <div className="space-y-1 text-base lg:text-lg">
              <p>Licensed Clinical Psychologist</p>
              <p>123th Street 45 W</p>
              <p>Santa Monica, CA 90401</p>
            </div>
            <div className="mt-8 space-y-1 text-base lg:text-lg underline">
              <p>info@mayareynoldspsyd.com</p>
              <p>(310) 555-2147</p>
            </div>
          </div>

          {/* Column 2 - Hours */}
          <div className="text-[#2E3F1F]">
            <h2 className="text-3xl lg:text-4xl font-serif mb-8 lg:mb-10">
              Hours
            </h2>
            <div className="space-y-1 text-base lg:text-lg">
              <p>Monday – Friday</p>
              <p>10am – 6pm</p>
            </div>
          </div>

          {/* Column 3 - Navigation */}
          <div className="text-[#2E3F1F]">
            <h2 className="text-3xl lg:text-4xl font-serif mb-8 lg:mb-10">
              Find
            </h2>
            <div className="flex flex-col space-y-2 text-base lg:text-lg underline">
              <a href="/" className="hover:no-underline transition-all">
                Home
              </a>
              <a href="/contact" className="hover:no-underline transition-all">
                Contact
              </a>
              <a href="/blog" className="hover:no-underline transition-all">
                Blog
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Legal & Credits */}
      <div className="bg-[#E8DDD4] py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          {/* Legal Links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-6 lg:mb-8 text-sm lg:text-base text-[#2E3F1F]">
            <a
              href="/privacy"
              className="underline hover:no-underline transition-all"
            >
              Privacy & Cookies Policy
            </a>
            <a
              href="/estimate"
              className="underline hover:no-underline transition-all"
            >
              Good Faith Estimate
            </a>
            <a
              href="/terms"
              className="underline hover:no-underline transition-all"
            >
              Website Terms & Conditions
            </a>
            <a
              href="/disclaimer"
              className="underline hover:no-underline transition-all"
            >
              Disclaimer
            </a>
          </div>

          {/* Credits */}
          <div className="text-center mb-8 lg:mb-10">
            <p className="text-sm lg:text-base text-[#2E3F1F]">
              Website Template Credits:{' '}
              <a
                href="#"
                className="underline hover:no-underline transition-all"
              >
                Go Bloom Creative
              </a>
            </p>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-sm text-[#2E3F1F]">
              All Rights Reserved © 2024 Your Business Name Here, LLC.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
