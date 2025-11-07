import React from "react";
import BgPattern1 from "../../../public/Vector 3306.png";
import BgPattern2 from "../../../public/Vector 3304.png";
import aboutBuilding from "../../../public/real asset 7.png"; // Replace with your actual image path
import esgBuilding from "../../../public/image (2).png"; // Corrected path
import Building from "../../../public/real asset. 6 (1).png"; // Corrected path
import back from "../../../public/image (5).png"; // Corrected path
import Footer from "@/components/Footer";

const Projects = () => (
    <div className="company-Projects-page">
        <section className="2xl:pb-16">
            <div className="ml-[4%]">
                <div className="flex lg:flex-row 3xs:flex-col">
                    <p className="2xl:text-[450%] lg:text-[380%] 3xs:text-[200%] font-[300] font-sf-pro lg:mb-8 3xs:mb-4 mt-[1%]"
                        style={{
                            cursor: "default",
                            lineHeight: "1.2",
                        }}>Projects & Investment</p>
                    <div className="mb-8 lg:w-[84%] mr-[4%]">
                        <h2 className="2xl:text-[240%] lg:text-[130%] 3xs:text-[110%] text-[#6C6C6C] font-normal lg:mt-8 mb-4 lg:text-left 3xs:text-justify"
                            style={{
                                cursor: "default",
                                lineHeight: "1.5",
                                letterSpacing: "-0.035em",
                            }}>
                            IOTC Real Asset embarked on a journey with vision of CREATING A BETTER WORLD and solid three goals: provide safe returns for our investors and offer superior, yet affordable, living for residents and designing the sustainable industrial park around world, create a better living together a NET ZERO integrated smart living city.
                        </h2>
                    </div>
                </div>
            </div>
        </section>
        <Footer></Footer>
    </div>
);

export default Projects;
