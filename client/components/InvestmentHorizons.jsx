import FadeOnScroll from "./FadeOnScroll"
import { motion } from "framer-motion";

export default function InvestmentHorizons() {
  return (
    <section className="bg-white py-8 md:py-32">
      <div className="max-w-8xl mx-auto sm:px-6 lg:px-8">
        {/* Top Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 items-start md:mt-10 md:mb-10 relative">
          {/* Left Image */}
          <FadeOnScroll className="3xs:hidden lg:block" direction="left" duration={1000} delay={100} distance={40}>
            <div className="flex justify-center lg:justify-start">
              <img
                src="/pixel-world/image (1).png"
                alt="Investment property"
                className="w-72 sm:w-56 md:w-56 lg:w-56 xl:w-64 2xl:w-[34rem] h-auto object-cover"
              />
            </div>
          </FadeOnScroll>

          {/* Center Investment Text */}
          <FadeOnScroll className="3xs:hidden lg:block" direction="up" duration={500} delay={200} distance={30}>
            <div className="flex flex-col justify-center text-center lg:text-left">
              <div className="relative flex justify-center lg:justify-start lg:mt-5">
                <motion.div
                  className="h-[3px] bg-gray-400 origin-left"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 1.2,
                    ease: "easeInOut",
                  }}
                  style={{
                    width: "90%",
                    maxWidth: "800px",
                  }}
                />
              </div>

              <h3 className="text-iotc-text text-2xl md:text-3xl 2xl:text-5xl lg:mt-40 3xs:mt-10 font-normal 2xl:font-bold mb-4">
                Investment
              </h3>
              <p className="text-iotc-text text-lg 2xl:text-4xl leading-relaxed md:max-w-xs 2xl:max-w-lg mx-auto lg:mx-0 text-justify">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                praesentium voluptatum deleniti atque corrupti quos dolores.
              </p>
            </div>
          </FadeOnScroll>


          {/* Right Title + Image */}
          <FadeOnScroll direction="right" duration={1000} delay={300} distance={50}>
            <div className="flex flex-col justify-center items-center lg:items-start">
              <h2
                className="text-iotc-text font-sf-pro 3xs:text-2xl lg:text-4xl md:text-5xl 
                font-normal 2xl:font-bold leading-tight mb-6 text-center 2xl:text-7xl lg:text-left 3xs:mt-10 md:mt-0"
              >
                Investment Horizons
              </h2>
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/c875ffef857fbc15d6df44d4cc6547916746ac90"
                alt="Investment opportunity"
                className="w-72 sm:w-56 md:w-64 lg:w-56 xl:w-64 2xl:w-[34rem] h-auto object-cover lg:mt-10 lg:ml-8"
              />
            </div>
          </FadeOnScroll>
        </div>

        {/* Vector */}
        <FadeOnScroll direction="fade" duration={1200} delay={400}>
          <div className="relative mt-0 hidden lg:block">
            <img
              src="/pixel-world/Vector 3313.svg"
              alt="Vector 3313"
              className="absolute xl:left-[56.2%] xl:top-[-0.8rem] lg:left-[62.3%] lg:top-[-0.8rem] 2xl:top-[-0.8rem] 2xl:left-[40.3rem]"
            />
          </div>
        </FadeOnScroll>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 3xs:mx-8 md:mx-0">
          {/* Left: European Real Asset */}
          <FadeOnScroll direction="left" duration={1000} delay={100}>
            <div className="flex flex-col justify-center md:items-center lg:items-start md:text-center  lg:text-left">
              <div className="text-lg 2xl:text-4xl text-gray-700 mb-2 3xs:mt-8 sm:mt-0">01</div>
              <h3 className="text-iotc-text text-2xl md:text-3xl 2xl:text-5xl font-normal 2xl:font-bold mb-4">
                European Real Asset
              </h3>
              <p className="text-iotc-text text-lg 2xl:text-4xl 3xs:text-justify leading-relaxed md:max-w-xs 2xl:max-w-lg">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                praesentium voluptatum deleniti atque corrupti quos dolores.
              </p>
            </div>
          </FadeOnScroll>

          {/* Center: Image */}
          <FadeOnScroll direction="up" duration={1000} delay={200}>
            <div className="flex md:justify-center lg:justify-start lg:mt-32 3xs:mt-10 3xs:justify-center">
              <img
                src="/pixel-world/image.png"
                alt="Real estate development"
                className="w-72 sm:w-56 md:w-56 lg:w-56 xl:w-64 2xl:w-[34rem] h-auto object-cover lg:ml-4"
              />
            </div>
          </FadeOnScroll>

          {/* Right: Real Asset Opportunities */}
          <FadeOnScroll direction="right" duration={1000} delay={300}>
            <div className="flex flex-col 3xs:item-right 3xs:text-right 3xs:text-justify lg:mt-32 3xs:mt-10 md:items-start lg:text-left">
              <div className="text-lg 2xl:text-4xl text-gray-700 mb-2">02</div>
              <h3 className="text-iotc-text text-2xl md:text-3xl 2xl:text-5xl font-normal 2xl:font-bold mb-4 md:w-[40%] lg:w-full">
                Real Asset Opportunities in Emerging Countries
              </h3>
              <p className="text-iotc-text text-lg 2xl:text-4xl leading-relaxed md:max-w-xs 2xl:max-w-lg md:w-[40%] lg:w-full md:text-justify">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                praesentium voluptatum deleniti atque corrupti quos dolores.
              </p>
            </div>
          </FadeOnScroll>
        </div>

        {/* Extra Vectors */}
        <FadeOnScroll direction="fade" duration={1000} delay={400}>
          <div className="relative mt-0 hidden lg:block">
            <img
              src="/pixel-world/Vector 3313.svg"
              alt="Vector 3313"
              className="absolute"
              style={{ top: "-80px", left: "250px" }}
            />
          </div>
        </FadeOnScroll>

        <FadeOnScroll direction="fade" duration={1000} delay={500}>
          <div className="relative mt-0 hidden lg:block">
            <img
              src="/pixel-world/Vector 3312.svg"
              alt="Vector 3312"
              className="absolute"
              style={{ top: "-150px" }}
            />
          </div>
        </FadeOnScroll>
      </div>
    </section>
  );
}