import Footer from "@/components/Footer";

const Projects = () => (
    <div className="company-Projects-page min-h-screen flex flex-col">
        <section className="2xl:pb-16 flex-grow">
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
        <Footer />
    </div>
);

export default Projects;
