import React from "react";
import BgPattern1 from "../../../public/Vector 3306.svg";
import BgPattern2 from "../../../public/Vector 3304.svg";
import Footer from "@/components/Footer";
import FadeOnScroll from "@/components/FadeOnScroll";
// Removed ResponsiveImage; using direct webp image sources

const ESG = () => (
  <div className="company-esg-page">
    <section className="lg:py-[1%] 3xs:pb-6">
      <div className="lg:ml-[3%] 3xs:ml-[4%] mr-[2%]">
        <div className="flex lg:flex-row justify-between 3xs:flex-col">
          <FadeOnScroll direction="left" distance={40} duration={800} className="flex-shrink-0">
            <p className="2xl:text-[500%] lg:text-[400%] 3xs:text-[200%] font-normal font-sf-pro ">ESG</p>
          </FadeOnScroll>
          <FadeOnScroll direction="up" delay={150} distance={30} duration={800} className="mb-8 lg:w-[75%] 3xs:w-[100%] lg:ml-[16%] lg:mt-0 3xs:mt-3">
            <h2 className="2xl:text-3xl lg:text-xl 3xs:text-1xl text-[#6C6C6C] font-normal lg:text-left 3xs:text-justify mb-4"
              style={{
                cursor: "default",
                lineHeight: "1.5",
                letterSpacing: "-0.03em",
              }}>
              At IOTC Real Asset, ESG is not a checkbox it's a commitment. We don't just treat environmental, social, and governance standards as regulatory obligations. We embed them into the DNA of every development, every partnership, and every jurisdiction we operate in.
            </h2>
          </FadeOnScroll>
        </div>
      </div>

      <FadeOnScroll direction="up" distance={60}>
        <div className="lg:mt-12 3xs:mt-3 relative">
          <img src="/ESG Cover.webp" alt="ESG building" className="w-full object-cover relative z-0"
            style={{
              width: "100%",
              height: "50%",
            }} />
          <div
            className="absolute inset-0 z-10 bg-no-repeat bg-[length:4.8%] bg-left-bottom -bottom-2 opacity-100 pointer-events-none"
            style={{ backgroundImage: 'url("/Vector 3306.svg")' }}
          ></div>
          <div
            className="absolute inset-0 ml-[4.7%] z-10 bg-no-repeat bg-[length:4.8%] bg-left-bottom mb-[7.9%] opacity-100 pointer-events-none"
            style={{ backgroundImage: 'url("/Vector 3304.svg")' }}
          ></div>
          <div
            className="absolute inset-0 ml-[14%] z-10 bg-no-repeat bg-[length:4.8%] bg-left-bottom mb-[4%] opacity-100 pointer-events-none"
            style={{ backgroundImage: 'url("/Vector 3304.svg")' }}
          ></div>
        </div>
      </FadeOnScroll>
      <FadeOnScroll direction="up" distance={40}>
        <div className="ml-[4%]">
          <h1 className="2xl:text-[450%] lg:text-[250%] 3xs:text-[200%] font-normal font-sf-pro mt-12"
            style={{
              cursor: "default",
              lineHeight: "1.2",
            }}>
            Environment & Sustainability
          </h1>
          <p className="2xl:text-3xl lg:text-2xl 3xs:text-1xl font-normal text-[#6C6C6C] mt-3"
            style={{
              cursor: "default",
            }}>
            Our commitment to sustainability goes beyond compliance it's built into every aspect of our development.
          </p>
        </div>
      </FadeOnScroll>

      <FadeOnScroll direction="up" distance={40} delay={100}>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-8 3xs:gap-4 lg:mt-12 3xs:mt-6 px-[4%] relative">
          <img src="/Group lang.webp" alt="" className="absolute right-0 top-0 3xs:h-[650px]" />
          <div className="bg-white p-2 rounded-lg">
            <img className="3xs:w-[20%] xl:w-[20%]" src="/Green Certificate.webp" alt=""
              style={{
                cursor: "default",
              }} />
            <p className="text-xl 2xl:text-4xl font-sf-pro font-normal mt-4"
              style={{
                cursor: "default",
              }}>
              Green-Certified Development
            </p>
            <p className="text-md 2xl:text-3xl font-dm-sans font-normal lg:mt-4 mr-8"
              style={{
                letterSpacing: "-0.03em",
                cursor: "default",
                lineHeight: "1.7",
              }}>
              Adherence to recognized sustainability standards across design and construction.
            </p>
          </div>
          <div className="bg-white p-2 rounded-lg">
            <img className="3xs:w-[20%] xl:w-[20%]" src="/Integrated waste Management.webp" alt=""
              style={{
                cursor: "default",
              }} />
            <p className="text-xl 2xl:text-4xl font-sf-pro font-normal mt-4"
              style={{
                cursor: "default",
              }}>
              Integrated Waste Treatment
            </p>
            <p className="text-md 2xl:text-3xl font-dm-sans font-normal lg:mt-4 mr-8"
              style={{
                letterSpacing: "-0.03em",
                cursor: "default",
                lineHeight: "1.7",
              }}>
              Includes composting and waste diversion to minimize landfill impact.
            </p>
          </div>
          <div className="bg-white p-2 rounded-lg">
            <img className="3xs:w-[20%] xl:w-[20%]" src="/Smart Energy System.webp" alt=""
              style={{
                cursor: "default",
              }} />
            <p className="text-xl 2xl:text-4xl font-sf-pro font-normal mt-4"
              style={{
                cursor: "default",
              }}>
              Demand Response Technology
            </p>
            <p className="text-md 2xl:text-3xl font-dm-sans font-normal lg:mt-4 mr-8"
              style={{
                letterSpacing: "-0.03em",
                cursor: "default",
                lineHeight: "1.7",
              }}>
              Smart energy systems to optimize consumption and reduce peak load.
            </p>
          </div>
        </div>
      </FadeOnScroll>
      <FadeOnScroll direction="up" distance={40} delay={150}>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-8 3xs:gap-4 lg:mt-12 3xs:mt-6 px-[4%]">
          <div className="bg-white p-2 rounded-lg">
            <img className="3xs:w-[20%] xl:w-[20%]" src="/Green Energy.webp" alt=""
              style={{
                cursor: "default",
              }} />
            <p className="text-xl 2xl:text-4xl font-sf-pro font-normal mt-4"
              style={{
                cursor: "default",
              }}>
              Green Energy-Powered Warehouse
            </p>
            <p className="text-md 2xl:text-3xl font-dm-sans font-normal lg:mt-4 mr-8"
              style={{
                letterSpacing: "-0.03em",
                cursor: "default",
                lineHeight: "1.7",
              }}>
              Primary energy sourced from renewables.
            </p>
          </div>
          <div className="bg-white p-2 rounded-lg">
            <img className="3xs:w-[20%] xl:w-[20%]" src="/Roof top solar.webp" alt=""
              style={{
                cursor: "default",
              }} />
            <p className="text-xl 2xl:text-4xl font-sf-pro font-normal mt-4"
              style={{
                cursor: "default",
              }}>
              Rooftop Solar PV System
            </p>
            <p className="text-md 2xl:text-3xl font-dm-sans font-normal lg:mt-4 mr-8"
              style={{
                letterSpacing: "-0.03em",
                cursor: "default",
                lineHeight: "1.7",
              }}>
              On-site clean energy generation to reduce grid dependency.
            </p>
          </div>
          <div className="bg-white p-2 rounded-lg">
            <img className="3xs:w-[20%] xl:w-[20%]" src="/EV Enabled (1).webp" alt=""
              style={{
                cursor: "default",
              }} />
            <p className="text-xl 2xl:text-4xl font-sf-pro font-normal mt-4"
              style={{
                cursor: "default",
              }}>
              EV Charging Infrastructure
            </p>
            <p className="text-md 2xl:text-3xl font-dm-sans font-normal lg:mt-4 mr-8"
              style={{
                letterSpacing: "-0.03em",
                cursor: "default",
                lineHeight: "1.7",
              }}>
              Network of electric vehicle charging stations to support low-emission mobility.
            </p>
          </div>
        </div>
      </FadeOnScroll>
    </section>
    <FadeOnScroll direction="up" distance={60}>
      <section>
        <div>
          <img src="/Social Cover.webp" alt="ESG building" className="w-full object-cover"
            style={{
              width: "100%",
              height: "50%",
            }} />
        </div>
      </section>
    </FadeOnScroll>
    <section>
      <FadeOnScroll direction="up" distance={40}>
        <div className="ml-[4%]">
          <h1 className="2xl:text-[450%] xl:text-[300%] lg:text-[250%] 3xs:text-[200%] font-normal font-sf-pro lg:mt-12 3xs:mt-6"
            style={{ cursor: "default" }}>
            Social
          </h1>
          <p className="2xl:text-4xl lg:text-2xl 3xs:text-lg font-normal text-[#6C6C6C] lg:mt-6 3xs:mt-3"
            style={{
              cursor: "default",
            }}>
            Our commitment to sustainability goes beyond compliance it's built into every aspect of our development.
          </p>
        </div>
      </FadeOnScroll>

      <FadeOnScroll direction="up" distance={40} delay={100}>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-8 3xs:gap-4 lg:mt-12 3xs:mt-6 px-[4%] relative">
          <div className="bg-white p-2 rounded-lg">
            <img className="3xs:w-[20%] 3xs:w-[20%] xl:w-[20%]" src="/Talent Workspace.png" alt=""
              style={{
                cursor: "default",
              }} />
            <p className="text-xl 2xl:text-4xl font-sf-pro font-normal mt-4"
              style={{
                cursor: "default",
              }}>
              Talent-Centric Workplace
            </p>
            <p className="text-md 2xl:text-3xl font-dm-sans font-normal lg:mt-4 mr-8"
              style={{
                letterSpacing: "-0.03em",
                cursor: "default",
                lineHeight: "1.7",
              }}>
              Designed to attract, retain, and nurture top-tier professionals.
            </p>
          </div>
          <div className="bg-white p-2 rounded-lg">
            <img className="3xs:w-[20%] xl:w-[20%]" src="/Health and Safety (1).webp" alt=""
              style={{
                cursor: "default",
              }} />
            <p className="text-xl 2xl:text-4xl font-sf-pro font-normal mt-4"
              style={{
                cursor: "default",
              }}>
              Health & Safety Standards
            </p>
            <p className="text-md 2xl:text-3xl font-dm-sans font-normal lg:mt-4 mr-8"
              style={{
                letterSpacing: "-0.03em",
                cursor: "default",
                lineHeight: "1.7",
              }}>
              Robust implementation of site-level safety protocols and wellness initiatives.
            </p>
          </div>
          <div className="bg-white p-2 rounded-lg">
            <img className="3xs:w-[20%] xl:w-[20%]" src="/Ethical Mangement.webp" alt=""
              style={{
                cursor: "default",
              }} />
            <p className="text-xl 2xl:text-4xl font-sf-pro font-normal mt-4"
              style={{
                cursor: "default",
              }}>
              Ethical Vendor Engagement
            </p>
            <p className="text-md 2xl:text-3xl font-dm-sans font-normal lg:mt-4 mr-8"
              style={{
                letterSpacing: "-0.03em",
                cursor: "default",
                lineHeight: "1.7",
              }}>
              Contracts awarded to vendors compliant with labor laws and fair employment practices.
            </p>
          </div>
        </div>
      </FadeOnScroll>
    </section>
    <section className="lg:mb-20 3xs:mb-10">
      <FadeOnScroll direction="up" distance={40}>
        <div className="ml-[4%]">
          <h1 className="2xl:text-[450%] lg:text-[250%] 3xs:text-[200%] font-normal font-sf-pro lg:mt-12 3xs:mt-6"
            style={{
              cursor: "default",
              lineHeight: "1.2",
            }}>
            Governance Framework
          </h1>
          <p className="2xl:text-4xl lg:text-2xl 3xs:text-xl font-normal text-[#6C6C6C] lg:mt-6 3xs:mt-3"
            style={{
              cursor: "default",
            }}>
            Transparent decision-making, compliance oversight, and ethical business conduct.
          </p>
        </div>
      </FadeOnScroll>

      <FadeOnScroll direction="up" distance={40} delay={100}>
        <div className="grid grid-cols-1 md:grid-cols-3 glg:gap-8 3xs:gap-4 lg:mt-12 3xs:mt-6 px-[4%] relative">
          <div className="bg-white p-2 rounded-lg">
            <img className="3xs:w-[20%] xl:w-[20%]" src="/Strong Governance.webp" alt=""
              style={{
                cursor: "default",
              }} />
            <p className="text-xl 2xl:text-4xl font-sf-pro font-normal mt-4"
              style={{
                cursor: "default",
              }}>
              Strong Governance Framework
            </p>
            <p className="text-md 2xl:text-3xl font-dm-sans font-normal lg:mt-4 mr-8"
              style={{
                letterSpacing: "-0.03em",
                cursor: "default",
                lineHeight: "1.7",
              }}>
              Transparent decision-making, compliance oversight, and ethical business conduct.
            </p>
          </div>
          {/* <div className="bg-white p-2 rounded-lg">
            <img className="xl:w-[20%]" src="/f1.svg.png" alt=""
              style={{
                cursor: "default",
              }} />
            <p className="text-xl 2xl:text-4xl font-sf-pro font-normal mt-4"
              style={{
                cursor: "default",
              }}>
              Integrated Waste Treatment
            </p>
            <p className="text-md 2xl:text-3xl font-dm-sans font-normal lg:mt-4 mr-8"
              style={{
                letterSpacing: "-0.03em",
                cursor: "default",
                lineHeight: "1.7",
              }}>
              Includes composting and waste diversion to minimize landfill impact.
            </p>
          </div>
          <div className="bg-white p-2 rounded-lg">
            <img className="xl:w-[20%]" src="/f1.svg.png" alt=""
              style={{
                cursor: "default",
              }} />
            <p className="text-xl 2xl:text-4xl font-sf-pro font-normal mt-4"
              style={{
                cursor: "default",
              }}>
              Demand Response Technology
            </p>
            <p className="text-md 2xl:text-3xl font-dm-sans font-normal lg:mt-4 mr-8"
              style={{
                letterSpacing: "-0.03em",
                cursor: "default",
                lineHeight: "1.7",
              }}>
              Smart energy systems to optimize consumption and reduce peak load.
            </p>
          </div> */}
        </div>
      </FadeOnScroll>
    </section>
    <Footer />
  </div>
);

export default ESG;
