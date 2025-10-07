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
    <section className="py-12">
      <div className="ml-[4%]">
        <div className="flex flex-row">
          <p className="text-[400%]  font-extralight font-sf-pro mb-8">Insights</p>
          <div className="mb-8 w-[60%] ml-[16%]">
            <h2 className="text-[130%] text-[#6C6C6C] font-normal mb-4"
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
    <Footer></Footer>
  </div>
);

export default Insights;
