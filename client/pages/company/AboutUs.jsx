// src/pages/company/AboutUs.jsx
import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BgPattern1 from "../../../public/Vector 3306.png";
import BgPattern2 from "../../../public/Vector 3304.png";
import aboutBuilding from "../../../public/real asset 7.png"; // Replace with your actual image path
import esgBuilding from "../../../public/image (2).png"; // Corrected path
import Building from "../../../public/real asset. 6 (1).png"; // Corrected path
import back from "../../../public/image (5).png"; // Corrected path

export default function AboutUs() {
  return (
    <div className="bg-white text-gray-900">

      {/* About Section */}
      <section className="w-full  px-0 md:px-0 lg:pt-8 3xs:pt-5 lg:pb-16 3xs:pb-10">
        <div className="flex lg:flex-row 3xs:flex-col px-[6%] justify-between items-start space-y-2">
          <p className="text-[50%] font-sf-pro 2xl:text-[500%] md:text-[400%] 3xs:text-[200%] font-thin"
            style={{ cursor: "default" }}>About us</p>
          <p className="2xl:text-[250%] lg:text-[130%] 3xs:text-[100%] font-sf-pro text-gray-600 lg:text-left 3xs:text-justify lg:leading-16 lg:max-w-2xl 2xl:max-w-7xl tracking-tight"
            style={{ cursor: "default" }}>
            IOTC Real Asset, a subsidiary of IOTC Investments Luxembourg, is committed to delivering superior performance across
            Residential, Commercial, and Logistics (Warehouse) asset classes.
          </p>
        </div>
        <div className="flex lg:mt-[17.3%] 3xs:mt-10 rounded-2xl relative w-full">
          <div
            className="absolute inset-0 bg-no-repeat bg-[length:4.8%] bg-left-bottom opacity-100 pointer-events-none"
            style={{ backgroundImage: `url(${BgPattern1})` }}
          ></div>
          <div
            className="absolute inset-0 ml-[4.7%] bg-no-repeat bg-[length:4.8%] bg-left-bottom mb-[8.7%] opacity-100 pointer-events-none"
            style={{ backgroundImage: `url(${BgPattern2})` }}
          ></div>
          <div
            className="absolute inset-0 ml-[14%] bg-no-repeat bg-[length:4.8%] bg-left-bottom mb-[4%] opacity-100 pointer-events-none"
            style={{ backgroundImage: `url(${BgPattern2})` }}
          ></div>
          <img src={back} alt="About building" className="w-full 2xl:h-[816px] lg:h-[416px] 3xs:h-[200px]"
            style={{
            }} />
          <img src={aboutBuilding} alt="About building" className="absolute w-[60%] 3xs:h-[120%] lg:h-[142%] 3xs:w-[50%] object-cover inset-0 lg:left-[40%] 3xs:left-[40%] lg:top-[-42%] 3xs:top-[-20%]"
            style={{
              width: "60%",
            }} />
        </div>

      </section>

      {/* Strategic Allocation */}
      <section className="">
        <div className="mx-[6%]">
          <h2 className="text-gray-700 2xl:text-[500%] text-[300%] font-sf-pro md:text-[300%] 3xs:text-[200%] font-normal lg:mb-6"
            style={{
              cursor: "default",
              color: "444444"
            }
            }>Strategic Allocation</h2>
          <p className="text-gray-600 font-sf-pro text-lg 2xl:text-[250%] lg:text-left 3xs:text-justify leading-relaxed">
            Our strategic allocation enables us to capitalize on jurisdictional advantages, regulatory efficiencies,
            and market-specific growth dynamics, enabling us to maximize value and create sustainable opportunities.
          </p>
        </div>
      </section>

      {/* Assets Under Management */}
      <section className="lg:py-20 flex flex-col md:flex-row gap-0 items-stretch mx-[6%] ">
        <div className="lg:pt-0 3xs:pt-5 flex flex-col justify-center lg:w-[55%]">
          <h2 className="2xl:text-[500%] lg:text-[2.80rem] 3xs:text-[1.80rem] font-normal lg:mb-6"
            style={{
              cursor: "default",
            }}>Assets Under Management</h2>
          <p className="text-gray-600 2xl:text-[250%] lg:text-[130%] 3xs:text-[100%] lg:text-left 3xs:text-justify lg:max-w-[75%] leading-relaxed "
            style={{
              cursor: "default",
            }}>
            We strategically manage investments across Core, Core Plus, Value-Add, and Opportunistic strategies,
            ensuring a balanced portfolio that aligns with both long-term stability and high-growth potential.
          </p>
        </div>
        <div className="hidden md:block w-0.5 bg-gray-300 mx-2 my-8 rounded-full"></div>
        <div className="2xl:max-w-2xl lg:max-w-lg space-y-10 lg:pl-[4%] 3xs:py-8 flex flex-col justify-center">
          <div className=" px-3">
            <p className="2xl:text-7xl lg:text-5xl 3xs:text-3xl font-sf-pro font-normal text-[#B89B7A] mb-2">
              <span className="font-medium">€0.99</span> Billion</p>
            <p className="text-gray-700 2xl:text-[200%] lg:text-[150%] 3xs:text-[130%] font-sf-pro">
              Consolidated Asset Under Management, across the IOTC Group
            </p>
          </div>
          <div className="px-3">
            <h3 className="lg:text-5xl 3xs:text-3xl font-sf-pro font-normal text-[#B89B7A] mb-2">
              <span className="font-medium">€295.62</span> Million</h3>
            <p className="text-gray-700 2xl:text-[200%] lg:text-[150%] 3xs:text-[130%] font-sf-pro">
              Directly managed by IOTC Investment Luxembourg
            </p>
          </div>
        </div>
      </section>

      {/* ESG Section */}
      <section className="relative pt-20 flex w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={Building}
            alt="ESG Background"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-iotc-text/60 to-black/70"></div>
        <div className="relative z-10 flex flex-col xl:h-full lg:h-[80%] px-4 md:px-16">
          <div className="w-full 3xs:p-4 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-white font-sf-pro text-2xl md:text-4xl 2xl:text-8xl 2xl:mt-[10%] lg:mt-[5%] 2xs:mt-[2%] font-normal leading-tight md:leading-[73px] tracking-[-1.2px]">
                Committed to Value for Investors, Society & the Environment
              </h2>
            </div>
            <div className="flex overflow-hidden ">
              <img src={esgBuilding} alt="ESG Building"
                className="object-cover h-auto ml-0 md:ml-2 lg:ml-5 w-[90vw] md:w-[80vw] xl:w-[96vw] 2xl:w-[105vw]" />
            </div>
          </div>
          <div className="flex md:justify-center 2xl:justify-start lg:w-[70%] xl:w-[80%] 3xs:mt-[50%] lg:mt-[20%] lg:mb-8 2xs:mb-4">
            <p
              className="text-white font-sf-pro text-xl 3xs:-mt-[45%] lg:-mt-[20%] 2xl:-mt-[10%] md:text-2xl 2xl:text-5xl font-normal italic leading-9 2xs:leading-6 tracking-[-0.5px] w-35%"
              style={{ cursor: "default" }}
            >
              ESG focus ensures every project drives value not just for investors, but also for society and the environment.
            </p>
            <div className="absolute lg:bottom-32 2xs:bottom-[15%] right-10">
              <button className="group flex items-center space-x-3 text-white font-sf-pro text-xl md:text-2xl 2xl:text-4xl font-light hover:text-iotc-gold transition-colors duration-300">
                <span>Know more</span>
                <svg
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    d="M12.9991 0.956563C12.9751 0.4048 12.5083 -0.0230455 11.9566 0.00094394L2.96506 0.39188C2.41329 0.415869 1.98545 0.88261 2.00944 1.43437C2.03343 1.98614 2.50017 2.41398 3.05193 2.38999L11.0444 2.04249L11.3919 10.0349C11.4159 10.5867 11.8826 11.0146 12.4344 10.9906C12.9861 10.9666 13.414 10.4998 13.39 9.94807L12.9991 0.956563ZM1 13L1.73715 13.6757L12.7372 1.67573L12 1L11.2628 0.324276L0.262846 12.3243L1 13Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

      </section >


      {/* Footer - partially overlaps previous section */}
      < div className="-mt-24 relative z-20" >
        <Footer />
      </div >
    </div >
  );
}
