import React from "react";
import BgPattern1 from "../../../public/Vector 3306.svg";
import BgPattern2 from "../../../public/Vector 3304.svg";
import Footer from "@/components/Footer";

const Careers = () => (
  <div className="company-careers-page">
    <section className="lg:py-12">
      <div className="ml-[5%] mt-10 mr-[4%]">
        <div className="flex lg:flex-row 3xs:flex-col">
          <p className="lg:text-[320%] 3xs:text-[180%] font-[400] lg:mb-8 lg:leading-[1.4] 3xs:leading-[1.2]">Discover Your Role at IOTC Real Asset</p>
          <div className="lg:mb-8 lg:w-[90%] lg:ml-[11%] mt-3">
            <h2 className="lg:text-[130%] 3xs:text-[100%] text-[#6C6C6C] font-normal mb-6"
              style={{
                cursor: "default",
                lineHeight: "1.5",
                letterSpacing: "-0.03em",
              }}>
              IOTC Real Asset, a subsidiary of IOTC Investments Luxembourg, is committed to delivering superior performance a.
            </h2>

            <button className="inline-flex items-center justify-center px-6 sm:px-6 py-2 bg-iotc-gold hover:bg-iotc-gold/90 rounded-[14px] text-white font-sf-pro text-base font-medium transition-colors duration-300 mt-2">
              Explore Roles
            </button>
          </div>
        </div>
      </div>
      <div className="mt-12 relative">
        <img src="/image (8).png" alt="ESG building" className="w-full object-cover"
          style={{
            width: "100%",
            height: "auto",
          }} />
        <div
          className="absolute inset-0 z-10 bg-no-repeat bg-[length:4.8%] bg-left-bottom opacity-100 pointer-events-none"
          style={{ backgroundImage: 'url("/Vector 3306.svg")' }}
        ></div>
        <div
          className="absolute inset-0 ml-[4.7%] z-10 bg-no-repeat bg-[length:4.8%] bg-left-bottom mb-[8.7%] opacity-100 pointer-events-none"
          style={{ backgroundImage: 'url("/Vector 3304.svg")' }}
        ></div>
        <div
          className="absolute inset-0 ml-[14%] z-10 bg-no-repeat bg-[length:4.8%] bg-left-bottom mb-[4%] opacity-100 pointer-events-none"
          style={{ backgroundImage: 'url("/Vector 3304.svg")' }}
        ></div>
      </div>
      <div className="ml-[4%]">
        <h1 className="lg:text-[250%] 3xs:text-[170%] font-normal font-sf-pro lg:mt-12 3xs:mt-8"
          style={{ cursor: "default" }}>
          Why work with IOTC Real Asset
        </h1>
        <p className="lg:text-2xl font-normal lg:mt-6"
          style={{
            cursor: "default",
            letterSpacing: "-0.03em",
          }}>
          Our commitment to sustainability goes beyond compliance it’s built into every aspect of our development.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-8 3xs:gap-4 pt-[4%] lg:mt-12 px-[4%] relative">
        <div className="bg-white p-2 rounded-lg">
          <img src="/f1.svg.png" alt=""
            style={{
              cursor: "default",
            }} />
          <p className="text-xl font-sf-pro font-normal mt-4"
            style={{
              cursor: "default",
            }}>
            Green-Certified Development
          </p>
          <p className="text-md font-dm-sans font-normal lg:mt-4 mr-8"
            style={{
              letterSpacing: "-0.03em",
              cursor: "default",
              lineHeight: "1.7",
            }}>
            Adherence to recognized sustainability standards across design and construction.
          </p>
        </div>
        <div className="bg-white p-2 rounded-lg">
          <img src="/f2.svg fill.svg" alt=""
            style={{
              cursor: "default",
            }} />
          <p className="text-xl font-sf-pro font-normal mt-4"
            style={{
              cursor: "default",
            }}>
            Integrated Waste Treatment
          </p>
          <p className="text-md font-dm-sans font-normal lg:mt-4 mr-8"
            style={{
              letterSpacing: "-0.03em",
              cursor: "default",
              lineHeight: "1.7",
            }}>
            Includes composting and waste diversion to minimize landfill impact.
          </p>
        </div>
        <div className="bg-white p-2 rounded-lg">
          <img src="/f4.svg.svg" alt=""
            style={{
              cursor: "default",
            }} />
          <p className="text-xl font-sf-pro font-normal mt-4"
            style={{
              cursor: "default",
            }}>
            Demand Response Technology
          </p>
          <p className="text-md font-dm-sans font-normal lg:mt-4 mr-8"
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
    <section className="bg-white lg:py-8 md:py-8 3xs:pt-4">
      <div className="ml-[4%]">
        <h1 className="lg:text-[250%] 3xs:text-[160%] font-normal font-sf-pro"
          style={{ cursor: "default" }}>
          We Invest in You
        </h1>
        <p className="lg:text-2xl font-normal lg:mt-6"
          style={{
            cursor: "default",
            letterSpacing: "-0.03em",
          }}>
          Our commitment to sustainability goes beyond compliance it’s built into every aspect of our development.
        </p>
      </div>
      <div className="lg:w-[71rem] mx-auto">
        {/* Top Row: 2-column grid, right column split for title/line and investment block+image */}
        <div className="grid grid-cols-1 lg:grid-cols-3 items-start mt-10 mb-10 relative">
          {/* Left: Main image */}
          <div className="flex flex-col justify-start w-[70%] 3xs:ml-[5%]">
            <img
              src="/image (1).png"
              alt="Investment property"
              className="w-full h-72 md:h-80 object-cover"
            />
          </div>
          {/* Center: Title, line, and Investment block */}
          <div className="flex flex-col h-full lg:mt-[48%] 3xs:ml-[5%] 3xs:mt-[5%] w-[97%]">

            {/* Investment block */}
            <div className="flex flex-col">
              <div className="text-lg font-sf-pro text-gray-700 font-normal mb-4">01</div>
              <h3 className="text-iotc-text text-2xl md:text-[32px] font-normal leading-tight tracking-normal lg:mb-5" style={{ fontFamily: 'Inter, Arial, sans-serif' }}>
                Internship
              </h3>
              <p className="text-iotc-text font-sf-pro text-lg font-normal w-[80%]"
                style={{
                  letterSpacing: '-0.03em',
                  lineHeight: '1.7',
                  cursor: 'default',
                }}>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
              </p>
            </div>
          </div>

          {/* Right: Side image */}
          <div className="flex flex-col justify-center">
            {/* Title and horizontal line */}

            <div className="flex lg:justify-center 3xs:ml-[5%] lg:mt-[48%] 3xs:mt-[5%]">
              <img
                src="/image (9).png"
                alt="Investment opportunity"
                className="w-[70%] h-72 md:h-80 object-cover"
              />
            </div>
          </div>
        </div>
        {/* Bottom Row: Two columns, number, title, text, image above */}
        <div className="grid grid-cols-1 lg:grid-cols-3 items-start mt-10 mb-10 relative 3xs:ml-[5%]">
          {/* Left: European Real Asset */}
          <div className="flex-1 lg:max-w-xs flex flex-col items-start">
            <div className="text-lg font-sf-pro text-gray-700 font-normal mb-4">02</div>
            <h3 className="text-iotc-text font-sf-pro text-2xl md:text-[32px] font-normal leading-tight mb-1"
              style={{
                letterSpacing: '-0.03em',
                cursor: 'default',
              }}>
              Early Career
            </h3>
            <p className="text-iotc-text font-sf-pro text-lg font-normal leading-7 lg:max-w-xs lg:mt-8 3xs:w-[90%]"
              style={{
                letterSpacing: '-0.03em',
                lineHeight: '1.7',
                cursor: 'default',
              }}>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
            </p>
          </div>

          {/* Center: Image */}
          <div className="flex-1 flex flex-col justify-start lg:mt-[7%] items-center"
            style={{ width: '261px', height: '321px' }}>
            <img
              src="/image.png"
              alt="Real estate development"
              className="object-cover mt-6"
              style={{ width: '261px', height: '321px' }}
            />
          </div>
          {/* Right: Real Asset Opportunities */}
          <div className="flex-1 max-w-lg flex flex-col items-start lg:mt-36 3xs:mt-16">
            <div className="text-lg font-sf-pro text-gray-700 font-normal mb-4">03</div>
            <h3 className="text-iotc-text font-sf-pro text-2xl md:text-[32px] font-normal leading-tight tracking-tight mb-1"
              style={{
                letterSpacing: '-0.03em',
                lineHeight: '1.5',
                cursor: 'default',
              }}>
                Culture
            </h3>
            <p className="text-iotc-text font-sf-pro text-lg font-normal leading-7 lg:max-w-xs 3xs:w-[90%]"
              style={{
                letterSpacing: '-0.03em',
                lineHeight: '1.7',
                cursor: 'default',
              }}>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="bg-white lg:py-8 md:py-8 ml-[4%] lg:mt-10 mr-[4%]">
      <p className="lg:text-[250%] 3xs:text-[160%] font-normal font-sf-pro"
        style={{ cursor: "default" }}>
        Team Gallery
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:my-11 3xs:mb-16 3xs:mt-8">
        <div className="grid grid-row-1 sm:grid-row-2 lg:gap-14 3xs:gap-8">
          <img src="/image (10).png" alt="Team member 1" className="w-full h-auto object-cover" />
          <img src="/image (11).png" alt="Team member 1" className="w-full h-auto object-cover" />
        </div>
        <div className="grid grid-row-1 sm:grid-row-2 gap-[5%]">
          <img src="/image (12).png" alt="Team member 1" className="w-full h-auto object-cover" />
          <img src="/image (13).png" alt="Team member 1" className="w-full h-auto object-cover" />
        </div>
      </div>
    </section>
    <Footer></Footer>
  </div>
);

export default Careers;
