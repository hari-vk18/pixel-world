import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import AnimatedSections from "../components/AnimatedSections";
import InvestmentHorizons from "../components/InvestmentHorizons";
import FadeOnScroll from "../components/FadeOnScroll";
import DesigningToday from "../components/DesigningToday";
import InvestorSpotlight from "../components/InvestorSpotlight";
import Footer from "../components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-iotc-primary flex flex-col overflow-x-hidden">
      <div className="flex-grow relative">
        {/* Header Navigation */}
        <Header />

        {/* Hero Section */}
        <HeroSection />

        {/* Animated Sections (Bridging Purpose, Building Communities, Sustaining Future) */}
        <AnimatedSections />

        {/* Investment Horizons Content Section */}
        <InvestmentHorizons />

        {/* Designing for Today Feature Section */}
        <DesigningToday />

        {/* Investor Spotlight Blog Cards */}
        {/* <InvestorSpotlight /> */}
      </div>

      {/* Footer */}
      <div className="-mt-24 relative z-20">
        <Footer />
      </div>
    </div>
  );
}