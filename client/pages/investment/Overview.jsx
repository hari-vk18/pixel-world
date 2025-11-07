import React from "react";
import FadeOnScroll from "@/components/FadeOnScroll"; // ✅ adjust path if needed
import Footer from "@/components/Footer";

const Overview = () => (
  <div className="company-Overview-page overflow-x-hidden">
    {/* ============================= */}
    {/* SECTION 1: Investment Management */}
    {/* ============================= */}
    <section className="lg:py-8 3xs:pb-4">
      <div className="ml-[4%] lg:mt-4 mr-[4%]">
        <div className="flex lg:flex-row 3xs:flex-col">
          <FadeOnScroll direction="left" distance={40} duration={800}>
            <p className="lg:text-[380%] 3xs:text-[200%] 2xl:text-[500%] font-[400] lg:mb-8">
              Investment Management
            </p>
          </FadeOnScroll>

          <div className="mb-8 2xl:w-[100%] lg:w-[80%] 3xs:w-[100%] lg:ml-[11%] 2xl:ml-[15%] mt-3">
            <FadeOnScroll direction="up" delay={150} distance={30} duration={800}>
              <h2
                className="lg:text-[130%] 3xs:text-[100%] 2xl:text-[200%] text-[#6C6C6C] lg:text-left 3xs:text-justify font-normal mb-6"
                style={{
                  cursor: "default",
                  lineHeight: "1.5",
                  letterSpacing: "-0.03em",
                }}
              >
                IOTC Real Asset aims to create an entire spectrum of investment
                products in real estate, we are launching first investment product
                focused in Residential, Commercial, Industrial and Warehouse across
                Europe, APAC (Sri Lanka and India) and Middle East (UAE and Saudi
                Arabia) to deliver the best performance to our investors.
              </h2>
            </FadeOnScroll>
          </div>
        </div>
      </div>

      {/* Background image fade */}
      <FadeOnScroll direction="up" distance={20} duration={1000}>
        <div className="lg:mt-20 relative">
          <img
            src="/image (14).png"
            alt="ESG building"
            className="w-full object-cover"
          />
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
      </FadeOnScroll>

      {/* Vision / Value */}
      <div className="lg:py-10 flex flex-col md:flex-row gap-0 items-stretch">
        <FadeOnScroll className="-mr-[8%]" direction="left" distance={30} duration={900}>
          <div className="lg:ml-[8%] 3xs:ml-[4%] lg:w-[80%] bg-white p-2 rounded-lg ">
            <p className="2xl:text-[500%] lg:text-[300%] 3xs:text-[180%] font-sf-pro font-normal text-[#B89B7A] mt-4">
              Vision
            </p>
            <p className="2xl:text-[180%] lg:text-[120%] 3xs:text-[100%] font-sf-pro font-normal lg:text-left 3xs:text-justify lg:mt-4 mr-8 text-[#6C6C6C]">
              We create sustainable solutions for CREATING A BETTER WORLD that connect
              to development, investments, property management, technology to design,
              deliver and operate the sustainable projects.
            </p>
          </div>
        </FadeOnScroll>

        <div className="hidden md:block w-0.5 bg-gray-300 mx-2 lg:my-4 rounded-full"></div>

        <FadeOnScroll direction="right" delay={200} distance={30} duration={900}>
          <div className="ml-[4%] lg:w-[84%] bg-white p-2 rounded-lg">
            <p className="2xl:text-[500%] lg:text-[300%] 3xs:text-[180%] font-sf-pro font-normal text-[#B89B7A] lg:mt-4">
              Value
            </p>
            <p className="2xl:text-[180%] lg:text-[120%] 3xs:text-[100%] font-sf-pro font-normal lg:text-left 3xs:text-justify lg:mt-4 mr-8 text-[#6C6C6C]">
              Our values are the essence of our company’s identity. They represent how
              we act, speak and behave together, and how we engage with our clients and
              stakeholders.
            </p>
          </div>
        </FadeOnScroll>
      </div>
    </section>

    {/* ============================= */}
    {/* SECTION 2: Strategic Differentiation */}
    {/* ============================= */}
    <section className="bg-white">
      <FadeOnScroll direction="left" distance={30} duration={800}>
        <p className="ml-[4%] 2xl:text-[500%] lg:text-[280%] 3xs:text-[160%] font-light font-sf-pro">
          Strategic Differentiation
        </p>
      </FadeOnScroll>
      <FadeOnScroll direction="up" delay={150} distance={30} duration={800}>
        <p className="ml-[4%] mr-[4%] mt-[2%] 2xl:text-[300%] lg:text-[130%] 3xs:text-[100%] text-[#6C6C6C] lg:text-left 3xs:text-justify font-light font-sf-pro">
                IOTC Real Asset aims to create an entire spectrum of investment products in real estate, we are launching first investment product focused in Residential, Commercial, Industrial and Warehouse across Europe, APAC (Sri Lanka and India) and Middle East (UAE and Saudi Arabia) to deliver the best performance to our investors.
        </p>
      </FadeOnScroll>
    </section>

    {/* ============================= */}
    {/* SECTION 3: Trend Analysis / Local Market */}
    {/* ============================= */}
    <section className="px-[1%]">
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-1">
        <FadeOnScroll direction="right" distance={40} duration={900}>
          <div className="bg-white ">
            <img className="2xl:w-[150%]" src="/image (15).png" alt="" />
          </div>
        </FadeOnScroll>

        <div className="lg:pt-8 2xl:pt-16 3xs:pl-[5%]">
          <FadeOnScroll direction="left" delay={100}>
            <p className="2xl:text-[500%] lg:text-[180%] 3xs:text-[150%] font-normal lg:mb-[4%] font-sf-pro text-[#B89B7A]">
              Advanced trend analysis
            </p>
          </FadeOnScroll>
          <FadeOnScroll direction="up" delay={200}>
            <p className="mb-[4%] lg:font-sf-pro 3xs:font-normal 2xl:text-[250%] lg:text-[120%] 3xs:text-[100%]">
              Includes composting and waste diversion to minimize landfill impact.
            </p>
          </FadeOnScroll>

          <FadeOnScroll direction="left" delay={300}>
            <p className="2xl:text-[500%] lg:text-[180%] font-normal lg:my-[4%] font-sf-pro text-[#B89B7A]">
              Local market
            </p>
          </FadeOnScroll>
          <FadeOnScroll direction="up" delay={400}>
            <p className="mb-[4%] lg:font-sf-pro 3xs:font-normal 2xl:text-[250%] lg:text-[120%] 3xs:text-[100%]">
              Intelligence across Europe, APAC and Middle East
            </p>
          </FadeOnScroll>

          <FadeOnScroll direction="left" delay={500}>
            <p className="2xl:text-[500%] lg:text-[180%] font-normal lg:my-[4%] font-sf-pro text-[#B89B7A]">
              Deep operational
            </p>
          </FadeOnScroll>
          <FadeOnScroll direction="up" delay={600}>
            <p className="mb-[5%] lg:font-sf-pro 3xs:font-normal 2xl:text-[250%] lg:text-[120%] 3xs:text-[100%]">
              expertise enabling swift execution and value optimization
            </p>
          </FadeOnScroll>
        </div>
      </div>
    </section>

    {/* ============================= */}
    {/* SECTION 4: Investment Structure + Revenue Model */}
    {/* ============================= */}
    <section className="px-[4%]">
      <FadeOnScroll direction="up" distance={30} duration={900}>
        <p className="2xl:text-[510%] lg:text-[280%] 3xs:text-[160%] font-[300] font-sf-pro">
          Integrated Investment Structure
        </p>
      </FadeOnScroll>

      {/* Example: animate bullet points one by one */}
      <ul className="pl-6">
        {[
          "Direct holdings of high-performing investment properties",
          "Sponsor stakes in IOTC Real Asset funds",
          "General Partner interests in the projects",
          "This structure ensures full alignment with both unitholders and capital partners transparency and trust.",
        ].map((text, i) => (
          <FadeOnScroll key={i} direction="up" delay={i * 150}>
            <li className="custom-bullet 2xl:text-[300%] lg:text-[180%] text-[#6C6C6C] font-sf-pro mt-6 mb-4">
              {text}
            </li>
          </FadeOnScroll>
        ))}
      </ul>
    </section>

    {/* ============================= */}
    {/* SECTION 5: Real Estate Investment */}
    {/* ============================= */}
    <section className="bg-white lg:pb-24 3xs:py-10 3xs:px-5">
      <div className="lg:ml-[3%]">
        <FadeOnScroll direction="left" distance={40}>
          <h1 className="2xl:text-[500%] lg:text-[280%] 3xs:text-[160%] font-[400] font-sf-pro">
            Real Estate Investment and Asset Management
          </h1>
        </FadeOnScroll>
        <FadeOnScroll direction="up" delay={200}>
          <p className="2xl:text-[250%] lg:text-2xl 3xs:text-lg font-normal mt-2 2xl:mt-8">
            We specialize in building and managing high-performing real estate
            portfolios across residential, commercial, and industrial sectors.
          </p>
        </FadeOnScroll>
      </div>
    </section>

    {/* Footer */}
    <Footer />
  </div>
);

export default Overview;
