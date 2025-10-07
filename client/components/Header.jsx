import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const navItems = [
    { label: 'Company', href: '/company' },
    { label: 'Investment Management', href: '/investment-management' },
    { label: 'Real Estate Service', href: '/real-estate-service' },
    { label: 'Projects and Investment', href: '/projects-investment' },
    { label: 'News', href: '/news' },
    { label: 'Investor Login', href: '/investor-portal' },
    { label: 'Contact Us', href: '/contact-us' },
  ];

  return (
    <header className="absolute top-0 left-0 w-full z-50 bg-transparent">
      <nav className="flex items-center justify-between pl-[65px] py-8 pr-8 lg:pr-8">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img 
              src={isHomePage ? "../public/IOTC Real Asset logo white 2.svg" : "../public/IOTC Real Asset logo blue 1.svg"} 
              alt="IOTC Real Asset" 
              className="w-[48px] h-[87px] flex-shrink-0"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-start gap-8 mb-6">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              className={`font-sf-pro text-base leading-[150%] hover:text-iotc-gold transition-colors duration-200 ${
                index === 0 ? 'font-medium' : 'font-normal'
              } ${
                isHomePage ? 'text-white' : 'text-iotc-text'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white p-2"
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
      </nav>

      {/* Mobile Menu */}
      <div className={`lg:hidden bg-iotc-dark/95 backdrop-blur-sm transition-all duration-300 ease-in-out overflow-hidden ${
        isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-4 py-6 space-y-4">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                className={`block font-sf-pro text-base font-medium hover:text-iotc-gold transition-colors duration-200 ${
                  isHomePage ? 'text-white' : 'text-iotc-text'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
        </div>
      </div>
    </header>
  );
}