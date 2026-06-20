import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import FadeOnScroll from '../components/FadeOnScroll';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isProjectDetailPage = location.pathname.startsWith('/project/');
  const useWhiteHeader = isHomePage || isProjectDetailPage;

  // Effect to handle body scroll lock
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.height = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.height = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.height = '';
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { label: 'Investment Management', href: '/investment-management' },
    { label: 'Real Estate Service', href: '/real-estate-service' },
    { label: 'Projects', href: '/portfolio' },
    { label: 'About Us', href: '/company' },
    // { label: 'Investor Login', href: '/investor-portal' },
    { label: 'Contact Us', href: '/contact-us' },
  ];

  return (
    <header className="absolute top-0 left-0 w-full z-50 bg-transparent">
      <nav className="flex items-center justify-between xl:pl-16 3xs:pl-[25px] 3xs:pr-[25px] py-8 lg:pr-16 md:pr-8 md:pl-16 2xs:py-8">

        {/* Logo */}
        <FadeOnScroll direction="down" duration={1000}>
          <a href="/" className="inline-block">
            <img
              src={useWhiteHeader ? "/IOTC Real Asset logo white 2 (1).svg" : "/IOTC Real Asset Logo_Blue.png"}
              alt="IOTC Real Asset"
              className="w-8 sm:w-8 md:w-4 lg:w-10 xl:w-12 2xl-w-16 h-auto"
            />
          </a>
        </FadeOnScroll>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-start xl:gap-8 lg:gap-6 mb-6">
          {navItems.map((item, index) => {
            const base = `
              font-sf-pro 3xl:text-4xl leading-[150%] 
              hover:text-iotc-gold transition-colors duration-200
              ${index === 0 ? 'font-normal' : 'font-normal'}
              ${useWhiteHeader ? 'text-white' : 'text-iotc-text'}
            `;
            const showSeparator = item.label === 'About Us';

            return (
              <FadeOnScroll
                key={index}
                direction="up"
                delay={index * 120}
                duration={1000}
              >
                <div className="flex items-center gap-4">
                  {showSeparator && (
                    <div
                      className={`${useWhiteHeader ? 'bg-white/50' : 'bg-gray-300'} w-px 2xl:w-[5px] h-5 2xl:h-8`}
                    />
                  )}
                  <Link to={item.href} className={base}>
                    {item.label}
                  </Link>
                </div>
              </FadeOnScroll>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden mb-6">
          <FadeOnScroll direction="left" duration={1000}>
            <button
              className={`lg:hidden p-2 ${useWhiteHeader ? 'text-white' : 'text-iotc-text'}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </FadeOnScroll>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 right-0 bottom-0 z-[60] lg:hidden bg-iotc-dark/95 backdrop-blur-sm transition-all duration-300 ease-in-out flex flex-col overflow-hidden ${isMobileMenuOpen
          ? 'opacity-100 visible pointer-events-auto'
          : 'opacity-0 invisible pointer-events-none'
          }`}
      >
        <div className="flex items-center justify-between xl:pl-16 3xs:pl-[25px] py-8 pr-8">
          <a href="/">
            <img
              src="/IOTC Real Asset Logo_White.png"
              alt="IOTC Real Asset"
              className="w-8 sm:w-8 md:w-4 lg:w-10 xl:w-12 2xl-w-16 h-auto flex-shrink-0"
            />
          </a>
          <button
            className="text-white p-2"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="px-4 py-6 space-y-6 flex-grow overflow-hidden">
          {navItems.map((item, index) => (
            <FadeOnScroll key={index} direction="up" delay={index * 120} duration={900}>
              <Link
                to={item.href}
                className="block font-sf-pro text-base font-medium text-white hover:text-iotc-gold transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            </FadeOnScroll>
          ))}
        </div>
      </div>
    </header>
  );
}
