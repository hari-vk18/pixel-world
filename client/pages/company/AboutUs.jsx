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
      {/* Header */}
      <Header />

      {/* About Section */}
      <section className="w-full px-0 md:px-0 pt-16 pb-16">
        <div className="flex flex-row px-[6%] justify-between items-start space-y-2">
          <p className="text-[50%] font-sf-pro md:text-[400%] font-thin"
            style={{ cursor: "default" }}>About us</p>
          <p className="text-xl font-sf-pro text-gray-600 leading-8 max-w-2xl tracking-tight"
            style={{ cursor: "default" }}>
            IOTC Real Asset, a subsidiary of IOTC Investments Luxembourg, is committed to delivering superior performance across
            Residential, Commercial, and Logistics (Warehouse) asset classes.
          </p>
        </div>
        <div className="flex mt-[17.3%] rounded-2xl relative w-full">
          <div
            className="absolute inset-0 bg-no-repeat bg-[length:60px] bg-left-bottom opacity-100 pointer-events-none"
            style={{ backgroundImage: `url(${BgPattern1})` }}
          ></div>
          <div
            className="absolute inset-0 ml-[4.7%] bg-no-repeat bg-[length:60px] bg-left-bottom mb-[8.7%] opacity-100 pointer-events-none"
            style={{ backgroundImage: `url(${BgPattern2})` }}
          ></div>
          <div
            className="absolute inset-0 ml-[14%] bg-no-repeat bg-[length:60px] bg-left-bottom mb-[4%] opacity-100 pointer-events-none"
            style={{ backgroundImage: `url(${BgPattern2})` }}
          ></div>
          <img src={back} alt="About building" className="w-full"
            style={{
              width: "100%",
              height: "416px",
            }} />
          <img src={aboutBuilding} alt="About building" className="w-full object-cover absolute inset-0 left-[40%] top-[-42%]"
            style={{
              width: "60%",
              height: "142%",
            }} />
        </div>

      </section>

      {/* Strategic Allocation */}
      <section className="">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-gray-700 text-[300%] font-sf-pro md:text-[300%] font-normal mb-6"
            style={{
              cursor: "default",
              color: "444444"
            }
            }>Strategic Allocation</h2>
          <p className="text-gray-600 font-sf-pro text-lg leading-relaxed">
            Our strategic allocation enables us to capitalize on jurisdictional advantages, regulatory efficiencies,
            and market-specific growth dynamics, enabling us to maximize value and create sustainable opportunities.
          </p>
        </div>
      </section>

      {/* Assets Under Management */}
      <section className="py-20 flex flex-col md:flex-row gap-0 items-stretch">
        <div className=" ml-[4%] mr-[2%] pt-10 flex flex-col justify-center w-[55%]">
          <h2 className="text-[2.80rem] font-normal mb-6"
            style={{
              cursor: "default",
            }}>Assets Under Management</h2>
          <p className="text-gray-600 text-xl leading-relaxed "
            style={{
              cursor: "default",
            }}>
            We strategically manage investments across Core, Core Plus, Value-Add, and Opportunistic strategies,
            ensuring a balanced portfolio that aligns with both long-term stability and high-growth potential.
          </p>
        </div>
        <div className="hidden md:block w-0.5 bg-gray-300 mx-2 my-8 rounded-full"></div>
        <div className=" space-y-10 pl-[4%] pr-[4%] flex flex-col justify-center">
          <div className=" px-3">
            <p className="text-5xl font-sf-pro font-normal text-[#B89B7A] mb-2">
              <span className="font-medium">€0.99</span> Billion</p>
            <p className="text-gray-700 text-[150%] font-sf-pro">
              Consolidated Asset Under Management, across the IOTC Group
            </p>
          </div>
          <div>
            <h3 className="text-5xl font-sf-pro font-normal text-[#B89B7A] mb-2">
              <span className="font-medium">€295.62</span> Million</h3>
            <p className="text-gray-700 text-[150%] font-sf-pro">
              Directly managed by IOTC Investment Luxembourg
            </p>
          </div>
        </div>
      </section>

      {/* ESG Section */}
      <section className="relative pt-20 h-[805px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={Building}
            alt="ESG Background"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-iotc-text/60 to-black/70"></div>

        <div className="relative z-10 max-w-6xl mx-auto mb-[12%] grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-normal text-white mb-4">
              Committed to Value for Investors, <br /> Society & the Environment
            </h2>
            <p className="text-white/90 italic text-lg leading-relaxed">
              ESG focus ensures every project drives value not just for investors, but also for society and the environment.
            </p>
          </div>
          <div className="overflow-hidden ">
            <img src={esgBuilding} alt="ESG Building" className="w-[75%] h-[75%] mt-10 ml-[22%] object-cover" />
          </div>
        </div>
        <div className="absolute bottom-[22%] right-10">
          <button className="group flex items-center space-x-3 text-white font-sf-pro text-xl md:text-2xl font-light hover:text-iotc-gold transition-colors duration-300">
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
      </section>


      {/* Footer - partially overlaps previous section */}
      <div className="-mt-24 relative z-20">
        <Footer />
      </div>
    </div>
  );
}
