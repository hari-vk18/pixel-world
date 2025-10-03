export default function Footer() {
  const footerLinks = [
    { label: 'About Us', href: '#' },
    { label: 'ESG', href: '#' },
    { label: 'Portfolio', href: '#' },
    { label: 'News letter', href: '#' },
  ];

  return (
    <footer className="relative bg-iotc-section rounded-t-[40px] md:rounded-t-[100px] overflow-hidden">
      {/* Background Logo/Graphic */}
      <div className="absolute right-7 top-0 w-full max-w-2xl h-full opacity-80">
        <img
          src="./public/IOTC Real Asset logo blue 1 (1).png"
          alt="IOTC Logo Background"
          width={642}
          height={779}
          className="object-contain object-right"
          style={{ width: '642px', height: '779px', maxWidth: '100%', maxHeight: '100%' }}
        />
      </div>

      <div className="relative z-10 px-4 sm:px-8 md:px-16 pt-10 sm:pt-16 md:pt-20 ">
        <div className="max-w-7xl mx-auto">
          {/* Main CTA Section */}
          <div className="mb-10 sm:mb-16">
            <div className="max-w-2xl sm:max-w-3xl md:max-w-4xl text-start">
              <h2 className="text-white font-sf-pro text-2xl sm:text-4xl md:text-5xl lg:text-[48px] font-medium leading-tight sm:leading-[48px] md:leading-[80px] tracking-[-1.12px] mb-6 sm:mb-12"
                style={{
                  cursor: 'default',
                  letterSpacing: '-0.02em',
                }}>
                Ready to invest in something real ?<br />
                Get in touch with us.
              </h2>
              <button className="inline-flex items-center justify-center px-8 sm:px-14 py-3 sm:py-4 bg-iotc-gold hover:bg-iotc-gold/90 rounded-[29px] text-white font-sf-pro text-base font-medium transition-colors duration-300 mt-2">
                Contact Us
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="mt-40 mb-10 sm:mb-16 relative">
            <nav className="flex flex-wrap gap-2 sm:gap-4 md:gap-10 justify-center">
              {footerLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-white font-sf-pro-text text-sm sm:text-base hover:text-iotc-gold transition-colors duration-200 tracking-tight"
                  style={{
                    letterSpacing: '-0.02em',
                  }}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Social Media Icons */}
            <div className="flex items-center space-x-4 sm:space-x-1 absolute top-5 bottom-10 right-[-2rem]">
              {/* X/Twitter */}
              <a href="#" className="text-white hover:text-iotc-gold transition-colors duration-200">
                <svg className="w-5 h-4" viewBox="0 0 18 18" fill="none">
                  <path
                    d="M10.8281 7.64L17.4375 0.5H15.75L10.0687 6.62L5.625 0.5H0L6.91875 10.02L0 17.5H1.6875L7.67812 11.04L12.375 17.5H18L10.8281 7.64ZM2.50312 1.63333H4.75312L15.4688 16.3667H13.2188L2.50312 1.63333Z"
                    fill="currentColor"
                  />
                </svg>
              </a>

              {/* LinkedIn */}
              <a href="#" className="text-white hover:text-iotc-gold inline-flex items-center justify-center rounded-sm transition-colors duration-300" style={{ width: '44px', height: '44px' }}>
                <svg className="w-10 h-10" viewBox="0 0 34 34" fill="none">
                  <rect width="34" height="34" rx="2" />
                  <path d="M10.1 14.3h3v9.4h-3v-9.4zm1.5-4.2c1 0 1.7.7 1.7 1.6 0 .9-.7 1.6-1.7 1.6h-.1c-1 0-1.7-.7-1.7-1.6 0-.9.7-1.6 1.7-1.6zm4.2 4.2h2.9v1.3h.1c.4-.7 1.3-1.5 2.7-1.5 2.1 0 3.7 1.4 3.7 4.3v5.3h-3v-4.7c0-1.1-.4-1.8-1.3-1.8-.7 0-1.1.5-1.3 1-.1.2-.1.5-.1.8v4.7h-3v-9.4z" fill="currentColor" />
                </svg>
              </a>

              {/* Instagram */}
              <a href="#" className="text-white hover:text-iotc-gold inline-flex items-center justify-center w-11 h-11 rounded-lg transition-colors duration-300" style={{ width: '20px', height: '44px' }}>
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>


          {/* Footer Bottom */}
          <div className="border-t border-gray-600 pt-6 sm:pt-10">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
              {/* Logo */}
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/90edf53339fc047cfd5fec42fd7b81c0921f640c?width=76"
                  alt="IOTC Real Asset"
                  className="w-8 h-10 sm:w-10 sm:h-[69px]"
                />
                <div className="text-white font-inter text-xs sm:text-base font-normal leading-[22px] sm:leading-[26px] text-center sm:text-left">
                  © Copyright 2025, All Rights Reserved
                </div>
              </div>

              {/* Social Media & Legal Links */}
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-8">
                {/* Legal Links */}
                <div className="text-white font-inter text-xs sm:text-sm font-normal leading-[22px] sm:leading-[26px] text-center sm:text-right">
                  Privacy Policy&nbsp;&nbsp;&nbsp;&nbsp;Terms & Conditions
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}