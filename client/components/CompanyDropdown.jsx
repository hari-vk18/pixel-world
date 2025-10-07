import { Link } from 'react-router-dom';
import BgPattern from "../../public/Group 1000001906.png";

export default function CompanyDropdown({ isOpen, onClose }) {
  const companyLinks = [
    { title: "About the firm", href: "/about" },
    { title: "Meet the team", href: "/team" },
    { title: "ESG Environment, Sustainability & Social", href: "/esg" },
    { title: "Insights", href: "/insights" },
    { title: "Careers", href: "/careers" },
  ];

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Dropdown Content */}
      <div
        className={`fixed left-0 right-0 bg-white shadow-2xl z-50 transition-all duration-300 ease-in-out ${
          isOpen ? 'top-[120px] opacity-100' : 'top-[-500px] opacity-0'
        }`}
      >
        <div className="relative">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-no-repeat bg-[length:300px] bg-left-bottom opacity-15 pointer-events-none"
            style={{ backgroundImage: `url(${BgPattern})` }}
          />
          
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Left Content */}
              <div>
                <h2 className="text-iotc-text font-sf-pro text-4xl md:text-5xl font-normal mb-8">
                  Company
                </h2>
                <p className="text-iotc-gray font-sf-pro text-lg leading-relaxed">
                  IOTC Real Asset delivers risk-mitigated investments, bridging buyers and sellers while ensuring strong returns.
                </p>
              </div>

              {/* Right Navigation */}
              <div className="space-y-4">
                {companyLinks.map((link, index) => (
                  <Link
                    key={index}
                    to={link.href}
                    className="flex items-center justify-between p-4 border-b border-gray-200 hover:bg-gray-50 transition-colors group"
                    onClick={onClose}
                  >
                    <span className="text-iotc-text font-sf-pro text-lg group-hover:text-iotc-gold">
                      {link.title}
                    </span>
                    <svg
                      className="w-5 h-5 text-gray-400 group-hover:text-iotc-gold transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}