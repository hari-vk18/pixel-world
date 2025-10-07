import Footer from "../components/Footer";
import BgPattern from "../../public/Group 1000001906.png";
import Header from "../components/Header";
import Login from "./investor/Login";
import { Link, Routes, Route, Outlet } from "react-router-dom";

export default function InvestorPortal() {
  const navItems = [
    { label: 'Company', path: '/company' },
    { label: 'Investment Management', path: '/investment-management' },
    { label: 'Real Estate Service', path: '/real-estate-service' },
    { label: 'Projects and Investment', path: '/projects-investment' },
    { label: 'News', path: '/news' },
    { label: 'Investor Portal', path: '/investor-portal', active: true },
    { label: 'Contact Us', path: '/contact-us' },
  ];

  const portalLinks = [
    { title: "Investor Login", path: "login" },
    { title: "Private Wealth Solution", path: "#" },
  ];

  return (
    <div className="bg-white">
      {/* Navigation Bar */}
      <Header />

      {/* Main Content */}
      <main className="pt-[11%] h-full">
        <Routes>
          <Route
            index
            element={
              <>
                {/* Background Pattern */}
                <div
                  className="absolute inset-0 ml-[2%] bg-no-repeat bg-[length:300px] bg-left-bottom opacity-15 pointer-events-none mt-20"
                  style={{ backgroundImage: `url(${BgPattern})` }}
                ></div>

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
          <Route path="login" element={<Login />} />
          {/* <Route path="meet-the-team" element={<MeetTheTeam />} />
          <Route path="esg" element={<ESG />} />
          <Route path="insights" element={<Insights />} />
          <Route path="careers" element={<Careers />} /> */}
        </Routes>
      </main>
    </div>
  );
}