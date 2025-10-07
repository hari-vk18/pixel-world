import React from "react";
import BgPattern1 from "../../../public/Vector 3306.svg";
import BgPattern2 from "../../../public/Vector 3304.svg";
import Footer from "@/components/Footer";

const RealEstate = () => (
    <div className="company-Overview-page">
        <section className="pt-8">
            <div className="ml-[4%] mt-4 mr-[4%]">
                <div className="flex flex-row">
                    <p className="text-[380%]  font-[400] mb-8">Real Estate Sevices</p>
                    <div className="mb-8 w-[80%] ml-[5%] mt-3">
                        <h2 className="text-[130%] text-[#6C6C6C] font-normal mb-6"
                            style={{
                                cursor: "default",
                                lineHeight: "1.5",
                                letterSpacing: "-0.03em",
                            }}>
                            IOTC Real Asset embarked on a journey with vision of CREATING A BETTER WORLD and solid three goals: provide safe returns for our investors and offer superior, yet affordable, living for residents and designing the sustainable industrial park around world, create a better living together a NET ZERO integrated smart living city. 
                        </h2>
                    </div>
                </div>
            </div>
            <div className="mt-20 relative">
                <img src="/image (19).png" alt="ESG building" className="w-full object-cover"
                    style={{
                        width: "100%",
                        height: "auto",
                    }} />
                <div
                    className="absolute inset-0 z-10 bg-no-repeat bg-[length:60px] bg-left-bottom opacity-100 pointer-events-none"
                    style={{ backgroundImage: 'url("/Vector 3306.svg")' }}
                ></div>
                <div
                    className="absolute inset-0 ml-[4.7%] z-10 bg-no-repeat bg-[length:60px] bg-left-bottom mb-[8.7%] opacity-100 pointer-events-none"
                    style={{ backgroundImage: 'url("/Vector 3304.svg")' }}
                ></div>
                <div
                    className="absolute inset-0 ml-[14%] z-10 bg-no-repeat bg-[length:60px] bg-left-bottom mb-[4%] opacity-100 pointer-events-none"
                    style={{ backgroundImage: 'url("/Vector 3304.svg")' }}
                ></div>
            </div>
        </section>
        <section className="bg-white py-[5%]">
            <p className="ml-[4%] text-[350%] font-light font-sf-pro">
                Development
            </p>
            <p className="ml-[4%] mt-[2%] text-[130%] text-[#6C6C6C] font-light font-sf-pro">
                IOTC Real Asset sets the benchmark for transformative development combining local insight, global experience, and a commitment to sustainable value creation that reshapes cities and redefines success.
            </p>
        </section>
        <section className="bg-white">
            <p className="ml-[4%] text-[350%] font-light font-sf-pro">
                Product Type
            </p>
            <p className="ml-[4%] mt-[2%] text-[130%] text-[#6C6C6C] font-light font-sf-pro">
                IOTC Real Asset aims to create an entire spectrum of investment products in real estate, we are launching first investment product focused in Residential, Commercial, Industrial and Warehouse across Europe, APAC (Sri Lanka and India) and Middle East (UAE and Saudi Arabia) to deliver the best performance to our investors.
            </p>
        </section>
        <section className="px-[1%]">
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-1">
                <div className="bg-white">
                    <img src="/image (20).png" alt="" />
                </div>
                <div className="pt-8 pr-16">
                    <p className="text-[180%] font-normal mb-[4%] font-sf-pro text-[#B89B7A]"
                        style={{
                            cursor: "default",
                            lineHeight: "1.5",
                        }}>
                        Residential
                    </p>
                    <p className="mb-[4%] font-sf-pro text-[120%] text-[#6C6C6C]"
                        style={{
                            cursor: "default",
                            lineHeight: "1.8",
                        }}>
                        Residential real estate remains one of the most resilient and scalable asset classes globally (particularly in the UAE). Fuelled by demographic growth, urbanization, and shifting lifestyle needs, housing demand consistently outpaces supply in major urban centers. Whether through build-to-sell, build-to-rent, or co-living formats, residential platforms offer strong potential for capital appreciation, stable yields, and portfolio diversification.
                    </p>
                    <p className="text-[180%] font-normal my-[4%] font-sf-pro text-[#B89B7A]"
                        style={{
                            cursor: "default",
                            lineHeight: "1.5",
                        }}>
                        Commercial/Office Parks
                    </p>
                    <p className="mb-[4%] font-sf-pro text-[120%] text-[#6C6C6C]"
                        style={{
                            cursor: "default",
                            lineHeight: "1.5",
                        }}>
                        IOTC Real Asset designs future-ready workspaces that foster community, catalyse cross-sector collaboration, and anchor growth industries from trade to Information and Communications Technology (ITC) in vibrant, amenity-rich environments.
                    </p>
                    <p className="text-[180%] font-normal my-[4%] font-sf-pro text-[#B89B7A]"
                        style={{
                            cursor: "default",
                            lineHeight: "1.5",
                            letterSpacing: "-0.03em",
                        }}>
                        Industrial & Warehousing
                    </p>
                    <p className="mb-[5%] font-sf-pro text-[120%] text-[#6C6C6C]"
                        style={{
                            cursor: "default",
                            lineHeight: "1.5",
                        }}>
                        Forms one of the three foundational pillars of institutional portfolios driven by macro resilience, operational scalability, and regulatory clarity
                    </p>
                </div>
            </div>
        </section>
        <Footer></Footer>
    </div>
);

export default RealEstate;
