import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      <nav className="flex items-center justify-between px-4 md:px-16 py-8">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/08b4218cc6239436957b2019106ea4277697958b?width=96" 
              alt="IOTC Real Asset" 
              className="w-12 h-[87px] flex-shrink-0"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-10">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              className="text-white font-sf-pro text-base font-medium hover:text-iotc-gold transition-colors duration-200"
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
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-iotc-dark/95 backdrop-blur-sm">
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                className="block text-white font-sf-pro text-base font-medium hover:text-iotc-gold transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}