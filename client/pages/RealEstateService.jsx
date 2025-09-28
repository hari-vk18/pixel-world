import Header from "../components/Header";
import Footer from "../components/Footer";

export default function RealEstateService() {
  const serviceLinks = [
    { title: "Services", href: "#" },
    { title: "Product Type", href: "#" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-32 pb-16 relative">
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Content */}
            <div>
              <h1 className="text-iotc-text font-sf-pro text-4xl md:text-5xl font-normal mb-8">
                Real Estate Services
              </h1>
              <p className="text-iotc-gray font-sf-pro text-lg leading-relaxed">
                From residential communities to integrated smart living cities, IOTC Real Asset transforms real estate into cross-border opportunities where investment meets infrastructure, and strategy meets scale.
              </p>
            </div>

            {/* Right Navigation */}
            <div className="space-y-4">
              {serviceLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="flex items-center justify-between p-4 border-b border-gray-200 hover:bg-gray-50 transition-colors group"
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

      <Footer />
    </div>
  );
}