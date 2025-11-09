import Footer from "../components/Footer";
import BgPattern from "../../public/Group 1000001906.png";
import Header from "../components/Header";
import Login from "./investor/Login";
import { Link, Routes, Route } from "react-router-dom";
import FadeOnScroll from "../components/FadeOnScroll"; // ✅ added

export default function InvestorPortal() {
  const navItems = [
    { label: "Company", path: "/company" },
    { label: "Investment Management", path: "/investment-management" },
    { label: "Real Estate Service", path: "/real-estate-service" },
    { label: "Projects and Investment", path: "/projects-investment" },
    { label: "News", path: "/news" },
    { label: "Investor Portal", path: "/investor-portal", active: true },
    { label: "Contact Us", path: "/contact-us" },
  ];

  const portalLinks = [
    { title: "Investor Login", path: "#" },
    { title: "Private Wealth Solution", path: "#" },
  ];

  return (
    <div className="bg-white">
      {/* Navigation Bar */}
      <Header />

      {/* Main Content */}
      <main className="lg:pt-40 2xl:pt-60 3xs:pt-[25%] h-full overflow-hidden">
        <Routes>
          <Route
            index
            element={
              <>
                {/* Background Pattern */}
                <div
                  className="absolute inset-0 ml-[2%] bg-no-repeat bg-[length:300px] 2xl:bg-[length:500px] bg-left-bottom opacity-15 pointer-events-none mt-20"
                  style={{ backgroundImage: `url(${BgPattern})` }}
                ></div>

                {/* ✅ Animation Wrapper */}
                <div
                  className="max-w-8xl mx-auto px-5 md:px-8 relative z-10"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
                    {/* Left Content */}
                    <div className="">
                      <FadeOnScroll direction="top" distance={30} duration={800}>
                        <h1 className="text-iotc-text font-sf-pro lg:text-[300%] 3xs:text-[200%] 2xl:text-[450%] font-normal lg:mb-8 2xl:mb-16 3xs:mb-4 leading-tight">
                          Investor Portal
                        </h1>
                      </FadeOnScroll>

                      <FadeOnScroll direction="up" delay={150} distance={30} duration={900}>
                        <p className="text-iotc-gray font-sf-pro text-lg 2xl:text-[220%] leading-relaxed lg:text-left 3xs:text-justify">
                          Gain secure access to a personalized dashboard to track investments, monitor performance, and receive insights while our private wealth solutions offer tailored strategies, exclusive opportunities, and long-term portfolio growth through sustainable real estate investments.
                        </p>
                      </FadeOnScroll>
                    </div>

                    {/* Right Navigation */}
                    <div className="space-y-0">
                      {portalLinks.map((link, index) => (
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
          <Route path="login" element={<Login />} />
        </Routes>
      </main>
    </div>
  );
}
