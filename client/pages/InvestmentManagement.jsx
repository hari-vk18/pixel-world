import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import BgPattern from "../../public/Group 1000001906.webp";
import FadeOnScroll from "@/components/FadeOnScroll";

export default function InvestmentManagement() {

  const navigate = useNavigate();

  const handleNavigate = (section) => {
    navigate(`/investment-management/overview?scrollTo=${section}`);
  };

  const investmentLinks = [
    { title: "Overview", section: "overview" },
    { title: "Strategic Differentiation", section: "differentiation" },
    { title: "Integrated Investment Structure", section: "integrated" },
  ];

  return (
    <>
      <Helmet>
        <title>Investment Management | IOTC - Strategic Investments</title>
        <meta
          name="description"
          content="Explore IOTC's investment management services, strategic differentiation, and integrated investment structure for sustainable growth."
        />
        <meta
          name="keywords"
          content="investment management, IOTC, strategic investments, portfolio management"
        />
        <meta property="og:title" content="IOTC Investment Management - Strategic Solutions" />
        <meta property="og:description" content="Discover our integrated investment management services and strategic differentiation in real estate and asset management." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://iotc-ra.com/investment-management" />
        <link rel="canonical" href="https://iotc-ra.com/investment-management" />
      </Helmet>
      <div className="min-h-screen bg-white relative">
        <Header />

        <main className="3xs:pt-28 lg:pt-32 2xl:pt-40">

          {/* Background design */}
          <div
            className="absolute inset-0 ml-[2%] bg-no-repeat bg-[length:300px] 
                     2xl:bg-[length:500px] bg-left-bottom opacity-15"
            style={{ backgroundImage: `url(${BgPattern})` }}
          ></div>

          {/* CONTENT + NAVIGATION */}
          <div className="max-w-8xl mx-auto px-4 md:px-16 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

              {/* LEFT INTRO CONTENT */}
              <div>
                <FadeOnScroll direction="top" distance={30} duration={800}>
                  <h1 className="text-iotc-text font-sf-pro 
                  2xl:text-[450%] lg:text-[300%] 3xs:text-[200%] font-normal lg:mb-8 2xl:mb-16 3xs:mb-4">
                    Investment Management
                  </h1>
                </FadeOnScroll>

                <FadeOnScroll direction="up" delay={150} distance={30} duration={900}>
                  <p className="text-iotc-gray font-sf-pro text-md 2xl:text-[220%] leading-relaxed">
                    IOTC Real Asset is shaping a diverse portfolio of sustainable real estate
                    investments across Europe, APAC, and the Middle East. Guided by integrity,
                    innovation, and responsibility, we aim to create lasting value for investors
                    and communities alike.
                  </p>
                </FadeOnScroll>
              </div>

              {/* RIGHT SIDE NAVIGATION */}
              <div className="space-y-4">
                {investmentLinks.map((item, index) => (
                  <FadeOnScroll
                    key={index}
                    direction="right"
                    delay={index * 150}
                    distance={40}
                  >
                    <div
                      onClick={() => handleNavigate(item.section)}
                      className="cursor-pointer flex items-center justify-between 
                               p-4 border-b hover:bg-gray-50 transition-colors group"
                    >
                      <span className="text-iotc-text font-sf-pro text-lg group-hover:text-iotc-gold">
                        {item.title}
                      </span>
                      <svg
                        className="w-5 h-5 text-gray-400 group-hover:text-iotc-gold"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </FadeOnScroll>
                ))}
              </div>
            </div>

          </div>
        </main>
      </div>
    </>
  );
}
