import React from "react";
import BgPattern1 from "../../../public/Vector 3306.svg";
import BgPattern2 from "../../../public/Vector 3304.svg";
import Footer from "@/components/Footer";

const ESG = () => (
  <div className="company-esg-page">
    <section className="lg:py-[2%] 3xs:pb-6">
      <div className="lg:ml-[6%] 3xs:ml-[4%] mt-4 mr-[4%]">
        <div className="flex lg:flex-row 3xs:flex-col">
          <p className="2xl:text-[500%] lg:text-[400%] 3xs:text-[200%] font-normal font-sf-pro lg:mt-3">ESG</p>
          <div className="mb-8 lg:w-[70%] 3xs:w-[100%] lg:ml-[16%] lg:mt-0 3xs:mt-3">
            <h2 className="2xl:text-3xl lg:text-2xl 3xs:text-1xl text-[#6C6C6C] font-normal lg:text-left 3xs:text-justify mb-4"
              style={{
                cursor: "default",
                lineHeight: "1.5",
                letterSpacing: "-0.03em",
              }}>
              At IOTC Real Asset, ESG is not a checkbox it’s a commitment. We don’t just treat environmental, social, and governance standards as regulatory obligations. We embed them into the DNA of every development, every partnership, and every jurisdiction we operate in.
            </h2>
          </div>
        </div>
      </div>

      <div className="lg:mt-12 3xs:mt-3 relative">
        <img src="/pixel-world/image (6).png" alt="ESG building" className="w-full object-cover relative z-0"
          style={{
            width: "100%",
            height: "auto",
          }} />
        <div
          className="absolute inset-0 z-10 bg-no-repeat bg-[length:4.8%] bg-left-bottom opacity-100 pointer-events-none"
          style={{ backgroundImage: 'url("/pixel-world/Vector 3306.svg")' }}
        ></div>
        <div
          className="absolute inset-0 ml-[4.7%] z-10 bg-no-repeat bg-[length:4.8%] bg-left-bottom mb-[8.7%] opacity-100 pointer-events-none"
          style={{ backgroundImage: 'url("/pixel-world/Vector 3304.svg")' }}
        ></div>
        <div
          className="absolute inset-0 ml-[14%] z-10 bg-no-repeat bg-[length:4.8%] bg-left-bottom mb-[4%] opacity-100 pointer-events-none"
          style={{ backgroundImage: 'url("/pixel-world/Vector 3304.svg")' }}
        ></div>
      </div>
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
            letterSpacing: "-0.03em",
          }}>
          Our commitment to sustainability goes beyond compliance it’s built into every aspect of our development.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-8 3xs:gap-4 lg:mt-12 3xs:mt-6 px-[4%] relative">
        <img src="/pixel-world/Group lang.png" alt="" className="absolute right-0 top-0 3xs:h-[650px]" />
        <div className="bg-white p-2 rounded-lg">
          <img className="xl:w-[20%]" src="/pixel-world/f1.svg.png" alt=""
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
          <img className="xl:w-[20%]" src="/pixel-world/f1.svg.png" alt=""
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
          <img className="xl:w-[20%]" src="/pixel-world/f1.svg.png" alt=""
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
      <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-8 3xs:gap-4 lg:mt-12 3xs:mt-6 px-[4%]">
        <div className="bg-white p-2 rounded-lg">
          <img className="xl:w-[20%]" src="/pixel-world/f1.svg.png" alt=""
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
          <img className="xl:w-[20%]" src="/pixel-world/f1.svg.png" alt=""
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
          <img className="xl:w-[20%]" src="/pixel-world/f1.svg.png" alt=""
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
    </section>
    <section>
      <div>
        <img src="/pixel-world/image (7).png" alt="ESG building" className="w-full object-cover"
          style={{
            width: "100%",
            height: "auto",
          }} />
      </div>
    </section>
    <section>
      <div className="ml-[4%]">
        <h1 className="xl:text-[450%] lg:text-[250%] 3xs:text-[200%] font-normal font-sf-pro lg:mt-12 3xs:mt-6"
          style={{ cursor: "default" }}>
          Social
        </h1>
        <p className="2xl:text-4xl lg:text-2xl 3xs:text-lg font-normal lg:mt-6 3xs:mt-3"
          style={{
            cursor: "default",
            letterSpacing: "-0.03em",
          }}>
          Our commitment to sustainability goes beyond compliance it’s built into every aspect of our development.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-8 3xs:gap-4 lg:mt-12 3xs:mt-6 px-[4%] relative">
        <div className="bg-white p-2 rounded-lg">
          <img className="xl:w-[20%]" src="/pixel-world/f1.svg.png" alt=""
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
          <img className="xl:w-[20%]" src="/pixel-world/f1.svg.png" alt=""
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
          <img className="xl:w-[20%]" src="/pixel-world/f1.svg.png" alt=""
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
    </section>
    <section className="lg:mb-20 3xs:mb-10">
      <div className="ml-[4%]">
        <h1 className="2xl:text-[450%] lg:text-[250%] 3xs:text-[200%] font-normal font-sf-pro lg:mt-12 3xs:mt-6"
          style={{
            cursor: "default",
            lineHeight: "1.2",
          }}>
          Strong Governance Framework
        </h1>
        <p className="2xl:text-4xl lg:text-2xl 3xs:text-xl font-normal lg:mt-6 3xs:mt-3"
          style={{
            cursor: "default",
            letterSpacing: "-0.03em",
          }}>
          Transparent decision-making, compliance oversight, and ethical business conduct.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 glg:gap-8 3xs:gap-4 lg:mt-12 3xs:mt-6 px-[4%] relative">
        <div className="bg-white p-2 rounded-lg">
          <img className="xl:w-[20%]" src="/pixel-world/f1.svg.png" alt=""
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
          <img className="xl:w-[20%]" src="/pixel-world/f1.svg.png" alt=""
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
          <img className="xl:w-[20%]" src="/pixel-world/f1.svg.png" alt=""
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
    </section>
    <Footer />
  </div>
);

export default ESG;
