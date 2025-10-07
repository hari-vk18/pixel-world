import React from "react";
import BgPattern1 from "../../../public/Vector 3306.svg";
import BgPattern2 from "../../../public/Vector 3304.svg";
import Footer from "@/components/Footer";

const Overview = () => (
    <div className="company-Overview-page">
        <section className="py-8">
            <div className="ml-[4%] mt-4 mr-[4%]">
                <div className="flex flex-row">
                    <p className="text-[380%]  font-[400] mb-8">Investment Management</p>
                    <div className="mb-8 w-[80%] ml-[11%] mt-3">
                        <h2 className="text-[130%] text-[#6C6C6C] font-normal mb-6"
                            style={{
                                cursor: "default",
                                lineHeight: "1.5",
                                letterSpacing: "-0.03em",
                            }}>
                            IOTC Real Asset aims to create an entire spectrum of investment products in real estate, we are launching first investment product focused in Residential, Commercial, Industrial and Warehouse across Europe, APAC (Sri Lanka and India) and Middle East (UAE and Saudi Arabia) to deliver the best performance to our investors.
                        </h2>
                    </div>
                </div>
            </div>
            <div className="mt-20 relative">
                <img src="/image (14).png" alt="ESG building" className="w-full object-cover"
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

            <div className="py-10 flex flex-col md:flex-row gap-0 items-stretch">
                <div className="ml-[4%] w-[70%] bg-white p-2 rounded-lg">
                    <p className="text-[300%] font-sf-pro font-normal text-[#B89B7A] mt-4"
                        style={{ cursor: "default" }}>
                        Vision
                    </p>
                    <p className="text-[120%] font-sf-pro font-normal mt-4 mr-8 text-[#6C6C6C]"
                        style={{
                            letterSpacing: "-0.03em",
                            cursor: "default",
                            lineHeight: "1.9",
                        }}>
                        We create sustainable solutions for CREATING A BETTER WORLD that connect to development, investments, property management, technology to design, deliver and operate the sustainable projects.
                    </p>
                </div>
                <div className="hidden md:block w-0.5 bg-gray-300 mx-2 my-8 rounded-full"></div>
                <div className="ml-[4%] w-[84%] bg-white p-2 rounded-lg">
                    <p className="text-[300%] font-sf-pro font-normal text-[#B89B7A] mt-4"
                        style={{ cursor: "default" }}>
                        Value
                    </p>
                    <p className="text-[120%] font-sf-pro font-normal mt-4 mr-8 text-[#6C6C6C]"
                        style={{
                            letterSpacing: "-0.03em",
                            cursor: "default",
                            lineHeight: "1.9",
                        }}>
                        Our values are the essence of our company’s identity. They represent how we act, speak and behave together, and how we engage with our clients and stakeholders.
                    </p>
                </div>
            </div>
        </section>
        <section className="bg-white">
            <p className="ml-[4%] text-[350%] font-light font-sf-pro">
                Strategic Differentiation
            </p>
            <p className="ml-[4%] mt-[2%] text-[130%] text-[#6C6C6C] font-light font-sf-pro">
                IOTC Real Asset aims to create an entire spectrum of investment products in real estate, we are launching first investment product focused in Residential, Commercial, Industrial and Warehouse across Europe, APAC (Sri Lanka and India) and Middle East (UAE and Saudi Arabia) to deliver the best performance to our investors.
            </p>
        </section>
        <section className="px-[1%]">
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-1">
                <div className="bg-white">
                    <img src="/image (15).png" alt="" />
                </div>
                <div className="pt-8">
                    <p className="text-[180%] font-normal mb-[4%] font-sf-pro text-[#B89B7A]"
                        style={{
                            cursor: "default",
                            lineHeight: "1.5",
                            letterSpacing: "-0.03em",
                        }}>
                        Advanced trend analysis
                    </p>
                    <p className="mb-[4%] font-sf-pro text-[120%]"
                        style={{
                            cursor: "default",
                            lineHeight: "1.5",
                            letterSpacing: "-0.03em",
                        }}>
                        Includes composting and waste diversion to minimize landfill impact.
                    </p>
                    <p className="text-[180%] font-normal my-[4%] font-sf-pro text-[#B89B7A]"
                        style={{
                            cursor: "default",
                            lineHeight: "1.5",
                            letterSpacing: "-0.03em",
                        }}>
                        Local market
                    </p>
                    <p className="mb-[4%] font-sf-pro text-[120%]"
                        style={{
                            cursor: "default",
                            lineHeight: "1.5",
                            letterSpacing: "-0.03em",
                        }}>
                        Intelligence across Europe, APAC and Middle East
                    </p>
                    <p className="text-[180%] font-normal my-[4%] font-sf-pro text-[#B89B7A]"
                        style={{
                            cursor: "default",
                            lineHeight: "1.5",
                            letterSpacing: "-0.03em",
                        }}>
                        Deep operational
                    </p>
                    <p className="mb-[5%] font-sf-pro text-[120%]"
                        style={{
                            cursor: "default",
                            lineHeight: "1.5",
                            letterSpacing: "-0.03em",
                        }}>
                        expertise enabling swift execution and value optimization
                    </p>
                </div>
            </div>
        </section>
        <section className="px-[4%]">
            <div>
                <p className="text-[280%] font-[300] font-sf-pro"
                    style={{
                        cursor: "default",
                        lineHeight: "1.6",
                        letterSpacing: "0.03em",
                    }}>
                    Integrated Investment Structure
                </p>
                <ul className="pl-6">
                    <li className="custom-bullet text-[180%] text-[#6C6C6C] font-sf-pro mt-6 mb-4"
                        style={{
                            cursor: "default",
                            lineHeight: "1",
                            letterSpacing: "-0.03em",
                        }}>
                        <span className="text-[#555555] font-[500] text-[105%]">Direct holdings </span>of high-performing investment properties
                    </li>
                    <li className="custom-bullet text-[180%] text-[#6C6C6C] font-sf-pro mt-6 mb-4"
                        style={{
                            cursor: "default",
                            lineHeight: "1",
                            letterSpacing: "-0.03em",
                        }}>
                        <span className="text-[#555555] font-[500] text-[105%]">Sponsor stakes </span>in IOTC Real Asset funds
                    </li>
                    <li className="custom-bullet text-[180%] text-[#6C6C6C] font-sf-pro mt-6 mb-4"
                        style={{
                            cursor: "default",
                            lineHeight: "1",
                            letterSpacing: "-0.03em",
                        }}>
                        <span className="text-[#555555] font-[500] text-[105%]">General Partner interests </span>in the projects
                    </li>
                    <li className="custom-bullet text-[180%] text-[#6C6C6C] font-sf-pro mt-6 mb-4"
                        style={{
                            cursor: "default",
                            lineHeight: "1",
                            letterSpacing: "-0.03em",
                        }}>
                        This structure ensures full alignment with both unitholders and capital partners, reinforcing 
                    </li>
                    <li className="ml-[3%] text-[180%] text-[#6C6C6C] font-sf-pro mt-6 mb-4"
                        style={{
                            cursor: "default",
                            lineHeight: "1",
                            letterSpacing: "-0.03em",
                        }}>
                        transparency and trust.
                    </li>
                </ul>
            </div>
            <div>
                <p className="text-[280%] font-[300] font-sf-pro"
                    style={{
                        cursor: "default",
                        lineHeight: "1.6",
                        letterSpacing: "0.03em",
                    }}>
                    Revenue Model & Growth Engine
                </p>
                <ul className="pl-6">
                    <li className="custom-bullet text-[180%] text-[#6C6C6C] font-sf-pro mt-6 mb-4"
                        style={{
                            cursor: "default",
                            lineHeight: "1",
                            letterSpacing: "-0.03em",
                        }}>
                        <span className="text-[#555555] font-[500] text-[105%]">Rental income </span>from a diversified real asset portfolio
                    </li>
                    <li className="custom-bullet text-[180%] text-[#6C6C6C] font-sf-pro mt-6 mb-4"
                        style={{
                            cursor: "default",
                            lineHeight: "1",
                            letterSpacing: "-0.03em",
                        }}>
                        <span className="text-[#555555] font-[500] text-[105%]">Capital gains </span>from strategic divestments and sale of residential units
                    </li>
                    <li className="custom-bullet text-[180%] text-[#6C6C6C] font-sf-pro mt-6 mb-4"
                        style={{
                            cursor: "default",
                            lineHeight: "1",
                            letterSpacing: "-0.03em",
                        }}>
                        <span className="text-[#555555] font-[500] text-[105%]">Balance sheet assets </span>serve as a high-quality pipeline for capital recycling and can seed
                    </li>
                    <li className="ml-[2.5%] text-[180%] text-[#6C6C6C] font-sf-pro mt-6 mb-4"
                        style={{
                            cursor: "default",
                            lineHeight: "1",
                            letterSpacing: "-0.03em",
                        }}>
                        scalable growth across IOTC Real Asset fund vehicles
                    </li>
                </ul>
            </div>
        </section>
        <section className="bg-white py-24 md:py-24">
            <div className="ml-[5%]">
                <h1 className="text-[300%] font-[400] font-sf-pro"
                    style={{ cursor: "default" }}>
                    Real Estate Investment and Asset Management
                </h1>
                <p className="text-2xl font-normal mt-2"
                    style={{
                        cursor: "default",
                        letterSpacing: "-0.03em",
                        lineHeight: "1.7",
                    }}>
                    We specialize in building and managing high-performing real estate portfolios across residential, commercial, and industrial sectors.
                </p>
            </div>
            <div className="w-[74rem] mx-auto">
                {/* Top Row: 2-column grid, right column split for title/line and investment block+image */}
                <div className="grid grid-cols-1 lg:grid-cols-3 items-start mt-10 mb-10 relative">
                    {/* Left: Main image */}
                    <div className="flex flex-col justify-start w-[70%]">
                        <img
                            src="/image (16).png"
                            alt="Investment property"
                            className="w-full h-72 md:h-80 object-cover"
                        />
                    </div>
                    {/* Center: Title, line, and Investment block */}
                    <div className="flex flex-col h-full mt-[20%]  w-[100%]">

                        {/* Investment block */}
                        <div className="flex flex-col">
                            <div className="text-lg text-gray-700 font-normal mb-4">01</div>
                            <h3 className="text-iotc-text font-sf-pro text-2xl md:text-[34px] font-normal leading-tight tracking-normal mb-5"
                             style={{ 
                                letterSpacing: '-0.03em',
                                lineHeight: '1.5',
                                cursor: 'default',
                              }}>
                                Commercial / Office Parks
                            </h3>
                            <p className="text-iotc-text font-sf-pro text-[120%] font-normal w-[80%]"
                                style={{
                                    letterSpacing: '-0.03em',
                                    lineHeight: '1.7',
                                    cursor: 'default',
                                }}>
                                Our office park offers quality workspaces with integrated community environments. These properties house key growth sectors such as trade center, information and communications technologies and research.
                            </p>
                        </div>
                    </div>

                    {/* Right: Side image */}
                    <div className="flex flex-col justify-center">
                        {/* Title and horizontal line */}

                        <div className="flex justify-center mt-[48%]">
                            <img
                                src="/image (17).png"
                                alt="Investment opportunity"
                                className="w-[70%] h-72 md:h-80 object-cover"
                            />
                        </div>
                    </div>
                </div>
                {/* Bottom Row: Two columns, number, title, text, image above */}
                <div className="flex flex-row flex-wrap justify-center gap-2 mx-auto">
                    {/* Left: European Real Asset */}
                    <div className="flex-1 max-w-xs flex flex-col items-start">
                        <div className="text-lg font-sf-pro text-gray-700 font-normal mb-4">02</div>
                        <h3 className="text-iotc-text font-sf-pro text-2xl md:text-[32px] font-normal leading-tight mb-1"
                            style={{
                                letterSpacing: '-0.03em',
                                cursor: 'default',
                            }}>
                            Residential Development
                        </h3>
                        <p className="text-iotc-text font-sf-pro text-lg font-normal leading-7 max-w-xs mt-8"
                            style={{
                                letterSpacing: '-0.03em',
                                lineHeight: '1.7',
                                cursor: 'default',
                            }}>
                            specializes in residential development across strategic jurisdictions, targeting a niche market segment that prioritizes quality, location, and long-term value creation. Developments emphasise sustainability and design excellence enhancing end-user satisfaction and long-term asset value.
                        </p>
                    </div>

                    {/* Center: Image */}
                    <div className="flex-1 flex flex-col justify-start mt-[3%] items-center"
                        style={{ width: '261px', height: '321px' }}>
                        <img
                            src="/image (18).png"
                            alt="Real estate development"
                            className="object-cover mt-6"
                            style={{ width: '261px', height: '321px' }}
                        />
                    </div>
                    {/* Right: Real Asset Opportunities */}
                    <div className="flex-1 max-w-lg flex flex-col items-start mt-48">
                        <div className="text-lg font-sf-pro text-gray-700 font-normal mb-4">03</div>
                        <h3 className="text-iotc-text font-sf-pro text-2xl md:text-[32px] font-normal leading-tight tracking-tight mb-1"
                            style={{
                                letterSpacing: '-0.03em',
                                lineHeight: '1.5',
                                cursor: 'default',
                            }}>
                            Industrial/Warehouses
                        </h3>
                        <p className="text-iotc-text font-sf-pro text-lg font-normal leading-7 w-[95%]"
                            style={{
                                letterSpacing: '-0.03em',
                                lineHeight: '1.7',
                                cursor: 'default',
                            }}>
                            Our high-specifications and efficient layout of industrial facilities and warehouse assets in key warehousing and manufacturing hubs within major cities caters to the increasing demand for online retail or e-commerce, manufacturing and outsourcing for multinational corporations
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <Footer></Footer>
    </div>
);

export default Overview;
