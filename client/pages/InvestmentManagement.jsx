import Header from "../components/Header";
import Footer from "../components/Footer";
import BgPattern from "../../public/Group 1000001906.png";
import { Link, Routes, Route, Outlet } from "react-router-dom";
import Overview from "./investment/Overview";

export default function InvestmentManagement() {
  const investmentLinks = [
    { title: "Overview", path: "overview" },
    { title: "Strategic Differentiation", path: "strategic-differentiation" },
    { title: "Integrated Investment Structure", path: "integrated-investment-structure" },
    { title: "Revenue Model & Growth Engine", path: "revenue-model-growth-engine" },
    { title: "Real Estate Investment and Asset Management", path: "real-estate-investment-asset-management" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-32">
        <Routes>
          <Route
            index
            element={
              <>
                {/* Background Pattern */}
                <div
                  className="absolute inset-0 ml-[2%] bg-no-repeat bg-[length:300px] bg-left-bottom opacity-15 pointer-events-none"
                  style={{ backgroundImage: `url(${BgPattern})` }}
                ></div>

                <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Left Content */}
                    <div>
                      <h1 className="text-iotc-text font-sf-pro text-4xl md:text-5xl font-normal mb-8">
                        Investment Management
                      </h1>
                      <p className="text-iotc-gray font-sf-pro text-lg leading-relaxed">
                        IOTC Real Asset is shaping a diverse portfolio of sustainable real estate investments across Europe, APAC, and the Middle East. Guided by integrity, innovation, and responsibility, we aim to create lasting value for investors and communities alike.
                      </p>
                    </div>

                    {/* Right Navigation */}
                    <div className="space-y-4">
                      {investmentLinks.map((link, index) => (
                        <Link
                          key={index}
                          to={link.path}
                          className="flex items-center justify-between p-4 border-b border-gray-200 hover:bg-gray-50 transition-colors group"
                        >
                          <span className="text-iotc-text font-sf-pro text-lg group-hover:text-iotc-gold">
                            {link.title}
                          </span>
                          <svg
                            className="w-5 h-5 text-gray-400 group-hover:text-iotc-gold"
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
              </>
            }
          />
          <Route path="overview" element={<Overview />} />
          {/* <Route path="meet-the-team" element={<MeetTheTeam />} />
          <Route path="esg" element={<ESG />} />
          <Route path="insights" element={<Insights />} />
          <Route path="careers" element={<Careers />} /> */}
        </Routes>
      </main>
    </div>
  );
}