import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import BgPattern from "../../public/Group 1000001906.webp";
import FadeOnScroll from "../components/FadeOnScroll";

export default function RealEstateService() {

  const navigate = useNavigate();

  const handleScroll = (section) => {
    navigate(`/real-estate-services/real-estate?scrollTo=${section}`);
  };

  const serviceLinks = [
    { title: "Services", section: "services" },
    { title: "Product Type", section: "product" },
  ];

  return (
    <>
      <Helmet>
        <title>Real Estate Services | IOTC - Property Investment Solutions</title>
        <meta
          name="description"
          content="Discover IOTC's real estate services and investment opportunities. We offer comprehensive property development and asset management solutions."
        />
        <meta
          name="keywords"
          content="real estate services, property investment, IOTC, asset management, real estate development"
        />
        <meta property="og:title" content="IOTC Real Estate Services" />
        <meta property="og:description" content="Comprehensive property development and asset management solutions across Europe, Asia, and the Middle East." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://iotc-ra.com/real-estate-service" />
        <link rel="canonical" href="https://iotc-ra.com/real-estate-service" />
      </Helmet>
      <div className="min-h-screen bg-white">
        <Header />

        <main className="3xs:pt-28 lg:pt-32 2xl:pt-40 overflow-hidden">

          <div
            className="absolute inset-0 ml-[2%] bg-no-repeat bg-[length:300px] 
          2xl:bg-[length:500px] bg-left-bottom opacity-15 pointer-events-none bottom-0"
            style={{ backgroundImage: `url(${BgPattern})` }}
          ></div>

          <div className="max-w-8xl mx-auto px-5 md:px-16 relative z-10 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

              {/* LEFT CONTENT */}
              <div>
                <FadeOnScroll direction="top" distance={30} duration={800}>
                  <h1 className="text-iotc-text font-sf-pro 
                2xl:text-[450%] lg:text-[300%] 3xs:text-[200%] font-normal lg:mb-8 2xl:mb-16 3xs:mb-4">
                    Real Estate Services
                  </h1>
                </FadeOnScroll>

                <FadeOnScroll direction="up" delay={150} distance={30} duration={900}>
                  <p className="text-iotc-gray font-sf-pro text-lg 2xl:text-[220%] leading-relaxed text-justify 2xl:mb-16 lg:mb-8 3xs:mb-4">
                    From residential communities to integrated smart living cities,
                    IOTC Real Asset transforms real estate into cross-border opportunities
                    where investment meets infrastructure, and strategy meets scale.
                  </p>
                </FadeOnScroll>
              </div>

              {/* RIGHT SIDE NAVIGATION */}
              <div className="space-y-4">
                {serviceLinks.map((item, index) => (
                  <FadeOnScroll
                    key={index}
                    direction="right"
                    delay={index * 150}
                    distance={40}
                    duration={800}
                  >
                    <div
                      onClick={() => handleScroll(item.section)}
                      className="cursor-pointer flex items-center justify-between 
                    p-4 2xl:p-8 border-b border-gray-200 hover:bg-gray-50 transition-colors group"
                    >
                      <span className="text-iotc-text font-sf-pro text-lg 2xl:text-[220%] group-hover:text-iotc-gold">
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
