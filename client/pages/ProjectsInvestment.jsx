import Header from "../components/Header";
import Footer from "../components/Footer";
import BgPattern from "../../public/Group 1000001906.png";
import Projects from "./project/Projects";
import { Link, Routes, Route, Outlet } from "react-router-dom";

export default function ProjectsInvestment() {
  const projectLinks = [
    { title: "Europe", path: "europe" },
    { title: "Asia Pacific", path: "#" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-[14%] relative">
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
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Left Content */}
                    <div>
                      <h1 className="text-iotc-text font-sf-pro text-4xl md:text-5xl font-normal mb-8">
                        Projects & Investment
                      </h1>
                      <p className="text-iotc-gray font-sf-pro text-lg leading-relaxed">
                        At IOTC Real Asset, our projects span residential, commercial, industrial, and smart city developments across Europe, Asia, and the Middle East delivering sustainable, trusted investments that create lasting value for both investors and communities.
                      </p>
                    </div>

                    {/* Right Navigation */}
                    <div className="space-y-4">
                      {projectLinks.map((link, index) => (
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
          <Route path="europe" element={<Projects />} />
          {/* <Route path="meet-the-team" element={<MeetTheTeam />} />
          <Route path="esg" element={<ESG />} />
          <Route path="insights" element={<Insights />} />
          <Route path="careers" element={<Careers />} /> */}
        </Routes>
      </main>
    </div>
  );
}