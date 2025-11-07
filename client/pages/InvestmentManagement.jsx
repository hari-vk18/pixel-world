import Header from "../components/Header";
import Footer from "../components/Footer";
import BgPattern from "../../public/Group 1000001906.png";
import { Link, Routes, Route } from "react-router-dom";
import Overview from "./investment/Overview";
import FadeOnScroll from "@/components/FadeOnScroll"; // ✅ adjust import path if needed

export default function InvestmentManagement() {
  const investmentLinks = [
    { title: "Overview", path: "overview" },
    { title: "Strategic Differentiation", path: "strategic-differentiation" },
    { title: "Integrated Investment Structure", path: "integrated-investment-structure" },
    { title: "Revenue Model & Growth Engine", path: "revenue-model-growth-engine" },
    { title: "Real Estate Investment and Asset Management", path: "real-estate-investment-asset-management" },
  ];

  return (
    <div className="min-h-screen bg-white relative">
      <Header />

      <main className="3xs:pt-24 lg:pt-40 2xl:pt-60 ">
        <Routes>
          {/* Default Route */}
          <Route
            index
            element={
              <>
                {/* ✅ Background Pattern */}
                <div
                  className="absolute inset-0 ml-[2%] bg-no-repeat bg-[length:300px] 2xl:bg-[length:500px] bg-left-bottom opacity-15 pointer-events-none"
                  style={{ backgroundImage: `url(${BgPattern})` }}
                ></div>

                {/* ✅ Main Content */}
                <div className="max-w-8xl mx-auto px-4 md:px-8 relative z-10 overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    
                    {/* LEFT SIDE */}
                    <div>
                      <FadeOnScroll direction="top" distance={30} duration={800}>
                        <h1 className="text-iotc-text font-sf-pro 2xl:text-[450%] lg:text-[300%] 3xs:text-[200%] font-normal 2xl:mb-16 lg:mb-8 3xs:mb-4">
                          Investment Management
                        </h1>
                      </FadeOnScroll>

                      <FadeOnScroll direction="up" delay={150} distance={30} duration={900}>
                        <p className="text-iotc-gray font-sf-pro text-lg 2xl:text-[220%] leading-relaxed">
                          IOTC Real Asset is shaping a diverse portfolio of sustainable real estate
                          investments across Europe, APAC, and the Middle East. Guided by integrity,
                          innovation, and responsibility, we aim to create lasting value for investors
                          and communities alike.
                        </p>
                      </FadeOnScroll>
                    </div>

                    {/* RIGHT SIDE: NAVIGATION */}
                    <div className="space-y-4">
                      {investmentLinks.map((link, index) => (
                        <FadeOnScroll
                          key={index}
                          direction="right"
                          delay={index * 150}
                          distance={40}
                          duration={800}
                        >
                          <Link
                            to={link.path}
                            className="flex items-center justify-between p-4 2xl:p-8 border-b border-gray-200 hover:bg-gray-50 transition-colors group"
                          >
                            <span className="text-iotc-text font-sf-pro text-lg 2xl:text-[220%] group-hover:text-iotc-gold">
                              {link.title}
                            </span>
                            <svg
                              className="w-5 h-5 text-gray-400 group-hover:text-iotc-gold"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </Link>
                        </FadeOnScroll>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            }
          />

          {/* Child Routes */}
          <Route path="overview" element={<Overview />} />
        </Routes>
      </main>
    </div>
  );
}
