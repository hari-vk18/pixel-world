import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Footer from "@/components/Footer";
import FadeOnScroll from "@/components/FadeOnScroll";
import Header from "@/components/Header";
// Removed ResponsiveImage; using direct webp image sources

export default function RealEstate() {

    // Section refs
    const servicesRef = useRef(null);
    const productRef = useRef(null);

    // Get ?scrollTo=...
    const { search } = useLocation();
    const scrollTo = new URLSearchParams(search).get("scrollTo");

    useEffect(() => {
        const map = {
            services: servicesRef,
            product: productRef,
        };

        if (scrollTo && map[scrollTo]?.current) {
            setTimeout(() => {
                map[scrollTo].current.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }, 350);
        }
    }, [scrollTo]);

    return (
        <div className="company-Overview-page overflow-x-hidden">
            <Header />
            {/* ================================================================= */}
            {/* SECTION 1 — SERVICES */}
            {/* ================================================================= */}
            <section ref={servicesRef}>
                <div className="ml-[5%] lg:mt-32 mr-[4%] 3xs:mt-32">
                    <div className="flex lg:flex-row lg:items-center 3xs:flex-col">

                        <FadeOnScroll direction="left" distance={40} duration={800}>
                            <p className="2xl:text-[500%] lg:text-[280%] 3xs:text-[200%] font-[400] lg:mb-8 3xs:mb-4 leading-[110%]">
                                Real Estate Services
                            </p>
                        </FadeOnScroll>

                        <div className="mb-8 lg:w-[80%] lg:ml-[5%] lg:mt-5">
                            <FadeOnScroll direction="up" delay={150} distance={30} duration={800}>
                                <h2 className="2xl:text-[250%] lg:text-[100%] 3xs:text-[100%] 
                  lg:text-left 3xs:text-justify text-[#6C6C6C] font-normal lg:mb-6"
                                    style={{ lineHeight: "1.5", letterSpacing: "-0.03em" }}
                                >
                                    IOTC Real Asset embarked on a journey with vision of CREATING A BETTER WORLD
                                    delivering superior, yet affordable, living for residents and designing the sustainable industrial
                                    park globally,build a NET ZERO integrated smart city living.
                                </h2>
                            </FadeOnScroll>
                        </div>

                    </div>
                </div>

                <FadeOnScroll direction="up" distance={60}>
                    <div className="lg:mt-8 relative">
                        <img
                            src="/Real Estte Services.webp"
                            alt="ESG building"
                            className="w-full object-cover"
                        />

                        <div className="absolute inset-0 z-10 bg-no-repeat bg-[length:4.8%] 
              mb-[-1%] bg-left-bottom"
                            style={{ backgroundImage: 'url("/Vector 3306.svg")' }}
                        ></div>

                        <div className="absolute inset-0 ml-[4.7%] z-10 bg-no-repeat 
              bg-[length:4.8%] bg-left-bottom mb-[7.7%]"
                            style={{ backgroundImage: 'url("/Vector 3304.svg")' }}
                        ></div>

                        <div className="absolute inset-0 ml-[14%] z-10 bg-no-repeat 
              bg-[length:4.8%] bg-left-bottom mb-[4%]"
                            style={{ backgroundImage: 'url("/Vector 3304.svg")' }}
                        ></div>
                    </div>
                </FadeOnScroll>
            </section>

            {/* ================================================================= */}
            {/* SECTION 2 — PRODUCT TYPE */}
            {/* ================================================================= */}
            <section ref={productRef} className="bg-white py-[1%] 3xs:pr-[0%]">
                <FadeOnScroll direction="up" distance={40}>
                    <section className="bg-white py-[1%] 3xs:pr-[5%]">
                        <p className="ml-[4%] 2xl:text-[500%] lg:text-[250%] 3xs:text-[200%] font-light font-sf-pro">
                            Development
                        </p>
                        <p className="ml-[4%] mt-[1%] 2xl:text-[250%] lg:text-[110%] lg:text-left 3xs:text-justify 3xs:text-[110%] text-[#6C6C6C]">
                            IOTC Real Asset is redefining the future of cities  - setting the benchmark for transformative
                            development through local insight, global expertise, and
                            a steadfast commitment to sustainable value creation.
                        </p>
                    </section>
                </FadeOnScroll>
                {/* <FadeOnScroll direction="up" distance={40}>
                    <p className="ml-[4%] 2xl:text-[500%] lg:text-[250%] 3xs:text-[200%] font-light font-sf-pro">
                        Product Type
                    </p>

                    <p className="ml-[4%] mt-[1%] 2xl:text-[250%] lg:text-[110%] 3xs:text-[110%] text-[#6C6C6C]"
                    >
                        IOTC Real Asset aims to create an entire spectrum of investment products in real estate, we are launching first investment product focused in Residential, Commercial, Industrial and Warehouse across Europe, APAC (Sri Lanka and India) and Middle East (UAE and Saudi Arabia) to deliver the best performance to our investors.
                    </p>
                </FadeOnScroll> */}

                {/* PRODUCT TYPE DETAILS */}
                <FadeOnScroll direction="up" distance={40}>
                    <section className="lg:px-[1%] 3xs:px-[5%] lg:pb-0 3xs:pb-[5%]">
                        <div className="my-10 xl:my-12 grid grid-cols-1 md:grid-cols-2 gap-1">
                            <div className="flex bg-white justify-start 3xs:mb-8 md:mb-0 lg:pl-8 2xl:pl-16">
                                <img
                                    className="2xl:w-[90%] lg:w-[90%] sm:w-[85%]"
                                    src="/image (20).jpg"
                                    alt=""
                                />
                            </div>
                            <div className="lg:pt-8 lg:pr-4">
                                <p className="2xl:text-[250%] lg:text-[150%] 3xs:text-[150%] font-normal mb-[1%] font-sf-pro text-[#B89B7A]" style={{ cursor: "default", lineHeight: "1.5", }} >
                                    Residential
                                </p>
                                <p className="mb-[3%] font-sf-pro lg:text-left 3xs:text-justify 2xl:text-[200%] lg:text-[100%] 3xs:text-[100%] text-[#6C6C6C]" style={{ cursor: "default", lineHeight: "1.8", }} >
                                    Residential real estate remains one of the most resilient and scalable asset classes globally (particularly in the UAE). Fuelled by demographic growth, urbanization, and shifting lifestyle needs, housing demand consistently outpaces supply in major urban centers. Whether through build-to-sell, build-to-rent, or co-living formats, residential platforms offer strong potential for capital appreciation, stable yields, and portfolio diversification.
                                </p>
                                <p className="2xl:text-[250%] lg:text-[150%] 3xs:text-[150%] font-normal my-[2%] font-sf-pro text-[#B89B7A]" style={{ cursor: "default", lineHeight: "1.5", }} >
                                    Commercial/Office Parks
                                </p>
                                <p className="mb-[4%] font-sf-pro lg:text-left 3xs:text-justify 2xl:text-[200%] lg:text-[100%] 3xs:text-[100%] text-[#6C6C6C]" style={{ cursor: "default", lineHeight: "1.5", }} >
                                    IOTC Real Asset designs future-ready workspaces that foster community, catalyse cross-sector collaboration, and anchor growth industries from trade to Information and Communications Technology (ITC) in vibrant, amenity-rich environments.
                                </p>
                                <p className="2xl:text-[250%] lg:text-[150%] 3xs:text-[150%] font-normal my-[1%] font-sf-pro text-[#B89B7A]" style={{ cursor: "default", lineHeight: "1.5", letterSpacing: "-0.03em", }} >
                                    Industrial & Warehousing
                                </p>
                                <p className="lg:mb-[5%] font-sf-pro lg:text-left 3xs:text-justify 2xl:text-[200%] lg:text-[100%] 3xs:text-[100%] text-[#6C6C6C]" style={{ cursor: "default", lineHeight: "1.5", }} >
                                    Forms one of the three foundational pillars of institutional portfolios driven by macro resilience, operational scalability, and regulatory clarity
                                </p>
                            </div>
                        </div>
                    </section>
                </FadeOnScroll>

            </section>

            <Footer />
        </div>
    );
}
