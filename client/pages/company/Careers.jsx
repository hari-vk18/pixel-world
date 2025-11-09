import React from "react";
import BgPattern1 from "../../../public/Vector 3306.svg";
import BgPattern2 from "../../../public/Vector 3304.svg";
import Footer from "@/components/Footer";
import FadeOnScroll from "@/components/FadeOnScroll";
import { motion } from "framer-motion";

const Careers = () => (
  <div className="company-careers-page">
    <section className="lg:py-8">
      <div className="ml-[5%] 3xs:mt-4 md:mt-0 mr-[4%]">
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
        <img src="/pixel-world/image (8).png" alt="ESG building" className="w-full object-cover"
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
          <img src="/pixel-world/f1.svg.png" alt=""
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
          <img src="/pixel-world/f2.svg fill.svg" alt=""
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
          <img src="/pixel-world/f4.svg.svg" alt=""
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
      <div className="max-w-8xl mx-auto sm:px-6 lg:px-8 3xs:py-8">
        {/* Top Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 items-start md:mt-10 md:mb-10 relative">
          {/* Left Image */}
          <FadeOnScroll className="3xs:hidden lg:block" direction="left" duration={1000} delay={100} distance={40}>
            <div className="flex justify-center lg:justify-start">
              <img
                src="/pixel-world/image (1).png"
                alt="Investment property"
                className="w-72 sm:w-56 md:w-56 lg:w-56 xl:w-64 2xl:w-[34rem] h-auto object-cover"
              />
            </div>
          </FadeOnScroll>

          {/* Center Investment Text */}
          <FadeOnScroll className="3xs:hidden lg:block" direction="up" duration={500} delay={200} distance={30}>
            <div className="flex flex-col justify-center text-center lg:text-left">
              <div className="relative flex justify-center lg:justify-start lg:mt-5">
                <motion.div
                  className="h-[3px] bg-gray-400 origin-left"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 1.2,
                    ease: "easeInOut",
                  }}
                  style={{
                    width: "90%",
                    maxWidth: "800px",
                  }}
                />
              </div>

              <h3 className="text-iotc-text text-2xl md:text-3xl 2xl:text-5xl lg:mt-40 3xs:mt-10 font-normal 2xl:font-bold mb-4">
                Investment
              </h3>
              <p className="text-iotc-text text-lg 2xl:text-4xl leading-relaxed md:max-w-xs 2xl:max-w-lg mx-auto lg:mx-0 text-justify">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                praesentium voluptatum deleniti atque corrupti quos dolores.
              </p>
            </div>
          </FadeOnScroll>


          {/* Right Title + Image */}
          <FadeOnScroll direction="right" duration={1000} delay={300} distance={50}>
            <div className="flex flex-col justify-center items-center lg:items-start">
              <h2
                className="text-iotc-text font-sf-pro 3xs:text-2xl lg:text-4xl md:text-5xl 
                      font-normal 2xl:font-bold leading-tight mb-6 text-center 2xl:text-7xl lg:text-left 3xs:mt-10 md:mt-0"
              >
                Investment Horizons
              </h2>
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/c875ffef857fbc15d6df44d4cc6547916746ac90"
                alt="Investment opportunity"
                className="w-72 sm:w-56 md:w-64 lg:w-56 xl:w-64 2xl:w-[34rem] h-auto object-cover lg:mt-10 lg:ml-8"
              />
            </div>
          </FadeOnScroll>
        </div>

        {/* Vector */}


        {/* Bottom Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 3xs:mx-8 md:mx-0">
          {/* Left: European Real Asset */}
          <FadeOnScroll direction="left" duration={1000} delay={100}>
            <div className="flex flex-col justify-center md:items-center lg:items-start md:text-center  lg:text-left">
              <div className="text-lg 2xl:text-4xl text-gray-700 mb-2 3xs:mt-8 sm:mt-0">01</div>
              <h3 className="text-iotc-text text-2xl md:text-3xl 2xl:text-5xl font-normal 2xl:font-bold mb-4">
                European Real Asset
              </h3>
              <p className="text-iotc-text text-lg 2xl:text-4xl 3xs:text-justify leading-relaxed md:max-w-xs 2xl:max-w-lg">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                praesentium voluptatum deleniti atque corrupti quos dolores.
              </p>
            </div>
          </FadeOnScroll>

          {/* Center: Image */}
          <FadeOnScroll direction="up" duration={1000} delay={200}>
            <div className="flex md:justify-center lg:justify-start lg:mt-32 3xs:mt-10 3xs:justify-center">
              <img
                src="/pixel-world/image.png"
                alt="Real estate development"
                className="w-72 sm:w-56 md:w-56 lg:w-56 xl:w-64 2xl:w-[34rem] h-auto object-cover lg:ml-4"
              />
            </div>
          </FadeOnScroll>

          {/* Right: Real Asset Opportunities */}
          <FadeOnScroll direction="right" duration={1000} delay={300}>
            <div className="flex flex-col 3xs:item-right 3xs:text-right 3xs:text-justify lg:mt-32 3xs:mt-10 md:items-start lg:text-left">
              <div className="text-lg 2xl:text-4xl text-gray-700 mb-2">02</div>
              <h3 className="text-iotc-text text-2xl md:text-3xl 2xl:text-5xl font-normal 2xl:font-bold mb-4 md:w-[40%] lg:w-full">
                Real Asset Opportunities in Emerging Countries
              </h3>
              <p className="text-iotc-text text-lg 2xl:text-4xl leading-relaxed md:max-w-xs 2xl:max-w-lg md:w-[40%] lg:w-full md:text-justify">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                praesentium voluptatum deleniti atque corrupti quos dolores.
              </p>
            </div>
          </FadeOnScroll>
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
          <img src="/pixel-world/image (10).png" alt="Team member 1" className="w-full h-auto object-cover" />
          <img src="/pixel-world/image (11).png" alt="Team member 1" className="w-full h-auto object-cover" />
        </div>
        <div className="grid grid-row-1 sm:grid-row-2 gap-[5%]">
          <img src="/pixel-world/image (12).png" alt="Team member 1" className="w-full h-auto object-cover" />
          <img src="/pixel-world/image (13).png" alt="Team member 1" className="w-full h-auto object-cover" />
        </div>
      </div>
    </section>
    <Footer></Footer>
  </div>
);

export default Careers;
