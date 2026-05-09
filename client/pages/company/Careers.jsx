import React from "react";
import BgPattern1 from "../../../public/Vector 3306.svg";
import BgPattern2 from "../../../public/Vector 3304.svg";
import Footer from "@/components/Footer";
import FadeOnScroll from "@/components/FadeOnScroll";
import { motion } from "framer-motion";

const Careers = () => (
  <div className="company-careers-page">
    <section className="lg:py-2">
      <div className="ml-[4%] 3xs:mt-4 md:mt-0 mr-[4%]">
        <div className="flex 3xs:flex-col">
          <p className="lg:text-[200%] 3xs:text-[160%] font-[400] lg:leading-[1.4] 3xs:leading-[1.2]">
            Careers</p>
          <div className="lg:mb-3 lg:w-[90%] mt-3">
            <h2 className="lg:text-[110%] 3xs:text-[90%] text-[#6C6C6C] font-normal md:mb-6"
              style={{
                cursor: "default",
                lineHeight: "1.5",
                letterSpacing: "-0.03em",
              }}>
              We are building a global real asset platform driven by strategy, execution, and long-term vision.
            </h2>
          </div>
        </div>
      </div>

      <div className="ml-[4%] 3xs:mt-4 md:mt-0">
        <h1 className="lg:text-[220%] 3xs:text-[150%] font-normal font-sf-pro"
          style={{ cursor: "default" }}>
          Why Join Us
        </h1>
      </div>

      <div className="grid grid-row md:grid-row px-[4%] relative mt-2">
        <div className="bg-white p-2 rounded-lg">
          <p className="text-lg font-sf-pro text-[#6C6C6C] font-normal"
            style={{
              cursor: "default",
            }}>
            •&ensp;Work on high-impact projects
          </p>
        </div>
        <div className="bg-white p-2 rounded-lg">
          <p className="text-lg font-sf-pro text-[#6C6C6C] font-normal"
            style={{
              cursor: "default",
            }}>
            •&ensp;Gain international exposure
          </p>
        </div>
        <div className="bg-white p-2 rounded-lg">
          <p className="text-lg font-sf-pro text-[#6C6C6C] font-normal"
            style={{
              cursor: "default",
            }}>
            •&ensp;Grow within a dynamic platform
          </p>
        </div>
      </div>
    </section>
    <section className="bg-white lg:py-4 md:py-6 3xs:py-4">
      <div className="ml-[4%]">
        <h1 className="lg:text-[220%] 3xs:text-[140%] font-normal font-sf-pro"
          style={{ cursor: "default" }}>
          Who We're Looking For
        </h1>
      </div>
      <div className="ml-[4%]">
        <p className="lg:text-lg font-normal" style={{ cursor: "default" }}>
          📩 <a href="mailto:careers@iotc-ra.com" className="text-iotc-gold hover:underline">careers@iotc-ra.com</a>
        </p>
      </div>
    </section>
    <Footer></Footer>
  </div>
);

export default Careers;
