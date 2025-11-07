import React from "react";
import BgPattern1 from "../../../public/Vector 3306.png";
import BgPattern2 from "../../../public/Vector 3304.png";
import aboutBuilding from "../../../public/real asset 7.png"; // Replace with your actual image path
import esgBuilding from "../../../public/image (2).png"; // Corrected path
import Building from "../../../public/real asset. 6 (1).png"; // Corrected path
import back from "../../../public/image (5).png"; // Corrected path
import Footer from "@/components/Footer";

const Insights = () => (
  <div className="company-insights-page">
    <section className="lg:py-24 3xs:py-6">
      <div className="ml-[5%]">
        <div className="flex lg:flex-row 3xs:flex-col">
          <p className="lg:text-[400%] 3xs:text-[200%] font-extralight font-sf-pro lg:mb-8 3xs:mb-4">Insights</p>
          <div className="mb-8 lg:w-[60%] lg:ml-[16%]">
            <h2 className="lg:text-[130%] 3xs:text-[100%] text-[#6C6C6C] font-normal lg:mb-4"
              style={{
                cursor: "default",
                lineHeight: "1.5",
                letterSpacing: "-0.03em",
              }}>
              IOTC Real Asset, a subsidiary of IOTC Investments Luxembourg, is committed to delivering superior performance across Residential, Commercial, and Logistics (Warehouse) asset classes.
            </h2>
          </div>
        </div>
      </div>
      <div className="flex mt-[17.3%] rounded-2xl relative w-full">
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
        <img src={back} alt="About building" className="w-full lg:h-[416px] 3xs:h-[200px]"
           />
        <img src={aboutBuilding} alt="About building" className="absolute w-[60%] 3xs:h-[120%] lg:h-[142%] 3xs:w-[50%] object-cover inset-0 lg:left-[40%] 3xs:left-[40%] lg:top-[-42%] 3xs:top-[-20%]"
          style={{
            width: "60%",
          }} />
      </div>
    </section>
    <Footer></Footer>
  </div>
);

export default Insights;
