import Header from "../components/Header";
import Footer from "../components/Footer";
import InvestorSpotlight from "../components/InvestorSpotlight";

export default function News() {
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
          <div className="text-center mb-16">
            <h1 className="text-iotc-text font-sf-pro text-4xl md:text-5xl font-normal mb-8">
              News & Updates
            </h1>
            <p className="text-iotc-gray font-sf-pro text-lg leading-relaxed max-w-3xl mx-auto">
              Stay informed with the latest developments, insights, and announcements from IOTC Real Asset.
            </p>
          </div>
        </div>
        
        {/* Reuse the existing InvestorSpotlight component for news */}
        <InvestorSpotlight />
      </main>

      <Footer />
    </div>
  );
}