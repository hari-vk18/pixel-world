import Header from "../components/Header";
import Footer from "../components/Footer";
import BgPattern from "../../public/Group 1000001906.png";
import { Link, Routes, Route } from "react-router-dom";
import RealEstate from "./realEstate/RealEstate";
import FadeOnScroll from "../components/FadeOnScroll"; // ✅ import animation component

export default function RealEstateService() {
  const serviceLinks = [
    { title: "Services", path: "real-estate" },
    { title: "Product Type", path: "#" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="lg:pt-40 2xl:pt-60 3xs:pt-[24%] overflow-hidden">
        <Routes>
          <Route
            index
            element={
              <>
                {/* 🌸 Background Pattern */}
                <div
                  className="absolute inset-0 ml-[2%] bg-no-repeat bg-[length:300px] 2xl:bg-[length:500px] bg-left-bottom opacity-15 pointer-events-none bottom-0"
                  style={{ backgroundImage: `url(${BgPattern})` }}
                ></div>

                <div className="max-w-8xl mx-auto px-5 md:px-8 relative z-10 overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* 📝 Left Content */}
                    <div>

                      <FadeOnScroll direction="top" distance={30} duration={800}>
                        <h1 className="text-iotc-text font-sf-pro 2xl:text-[450%] lg:text-[300%] 3xs:text-[200%] font-normal lg:mb-8 2xl:mb-16 3xs:mb-4">
                          Real Estate Services
                        </h1>
                      </FadeOnScroll>
                      <FadeOnScroll direction="up" delay={150} distance={30} duration={900}>
                      <p className="text-iotc-gray font-sf-pro text-lg 2xl:text-[220%] leading-relaxed">
                        From residential communities to integrated smart living
                        cities, IOTC Real Asset transforms real estate into
                        cross-border opportunities where investment meets
                        infrastructure, and strategy meets scale.
                      </p>
                    </FadeOnScroll>
                  </div>

                  {/* 🧭 Right Navigation */}
                  <div className="space-y-4">
                    {serviceLinks.map((link, index) => (
                      <FadeOnScroll
                        key={index}
                        direction="right"
                        delay={index * 150}
                        distance={40}
                        duration={800}
                      >
                        <Link
                          key={index}
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
          <Route path="real-estate" element={<RealEstate />} />
        </Routes>
      </main>
    </div>
  );
}
