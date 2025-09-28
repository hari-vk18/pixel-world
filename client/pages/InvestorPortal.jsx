import { Link } from "react-router-dom";

export default function InvestorPortal() {
  const navItems = [
    { label: 'Company', href: '/company' },
    { label: 'Investment Management', href: '/investment-management' },
    { label: 'Real Estate Service', href: '/real-estate-service' },
    { label: 'Projects and Investment', href: '/projects-investment' },
    { label: 'News', href: '/news' },
    { label: 'Investor Portal', href: '/investor-portal', active: true },
    { label: 'Contact Us', href: '/contact-us' },
  ];

  const portalLinks = [
    { title: "Investor Login", href: "#" },
    { title: "Private Wealth Solution", href: "#" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="bg-white border-b border-gray-100 py-6">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/08b4218cc6239436957b2019106ea4277697958b?width=96" 
                alt="IOTC Real Asset" 
                className="w-10 h-14"
              />
            </Link>

            {/* Navigation Links */}
            <div className="flex items-center space-x-8">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.href}
                  className={`font-sf-pro text-base font-normal transition-colors duration-200 ${
                    item.active 
                      ? 'text-iotc-gold' 
                      : 'text-iotc-text hover:text-iotc-gold'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
      
      {/* Main Content */}
      <main className="py-16 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <svg className="absolute left-0 top-16 w-40 h-72 opacity-10" viewBox="0 0 155 281" fill="none">
            <path d="M77.5 137.199L154 93.4209V1L77.5 44.7783V137.199ZM77.5 137.199L1 182.367V280H77.5V137.199Z" stroke="#B89B7A" strokeOpacity="0.3" />
          </svg>
          <svg className="absolute left-60 top-32 w-20 h-36 opacity-10" viewBox="0 0 81 140" fill="none">
            <path d="M80 1L1 46.7671V139L80 94.9797V1Z" stroke="#B89B7A" strokeOpacity="0.3" />
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            {/* Left Content */}
            <div className="max-w-lg">
              <h1 className="text-iotc-text font-sf-pro text-5xl font-normal mb-8 leading-tight">
                Investor Portal
              </h1>
              <p className="text-iotc-gray font-sf-pro text-lg leading-relaxed">
                Gain secure access to a personalized dashboard to track investments, monitor performance, and receive insights while our private wealth solutions offer tailored strategies, exclusive opportunities, and long-term portfolio growth through sustainable real estate investments.
              </p>
            </div>

            {/* Right Navigation */}
            <div className="space-y-0">
              {portalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="flex items-center justify-between py-6 border-b border-gray-200 hover:bg-gray-50 transition-colors group"
                >
                  <span className="text-iotc-text font-sf-pro text-lg group-hover:text-iotc-gold">
                    {link.title}
                  </span>
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-iotc-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}