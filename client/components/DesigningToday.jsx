import FadeOnScroll from "./FadeOnScroll";

export default function DesigningToday() {
  return (
    <section className="relative flex w-full overflow-hidden">
      {/* Background Image */}
      <img
        src="./public/real asset. 6 (1).png"
        alt="Modern real estate development"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-iotc-text/60 to-black/70"></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col xl:h-full lg:h-[80%] px-4 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-8xl mx-auto">

          {/* Left Content (Heading) */}
          <FadeOnScroll direction="up" duration={1200} delay={150} distance={40}>
            <div className="flex flex-col justify-center space-y-8 max-w-8x2">
              <h2
                className="text-white font-sf-pro text-4xl md:text-5xl 2xl:text-8xl 2xl:mt-[40%] lg:mt-[30%] 2xs:mt-[20%] xl:text-[350%] font-normal leading-tight md:leading-[93px] tracking-[-1.2px]"
                style={{ cursor: "default" }}
              >
                Designing for Today, Building for Tomorrow
              </h2>
            </div>
          </FadeOnScroll>

          {/* Right Content (Side Image) */}
          <FadeOnScroll direction="right" duration={1200} delay={300} distance={50}>
            <div className="flex lg:mt-[16%] overflow-visible">
              <div className="relative w-full overflow-visible">
                <img
                  src="/image (2).png"
                  alt="Modern building design"
                  className="object-cover h-auto ml-0 md:ml-2 lg:ml-5 w-[90vw] md:w-[80vw] xl:w-[96vw] 2xl:w-[105vw]"
                />
              </div>
            </div>

          </FadeOnScroll>
        </div>

        {/* Description & Button */}
        <FadeOnScroll direction="up" duration={1000} delay={400} distance={30}>
        <div className="flex md:justify-center 2xl:justify-start lg:w-[70%] xl:w-[80%] 3xs:mt-[50%] lg:mt-[20%]  2xl:mb-16 lg:mb-8 2xs:mb-4">
            <p
              className="text-white font-sf-pro text-xl md:text-2xl 2xl:text-5xl 3xs:-mt-[48%] lg:-mt-[20%] 2xl:-mt-[10%] font-normal italic leading-9 2xs:leading-6 tracking-[-0.5px] w-35%"
              style={{ cursor: "default" }}
            >
              Discover what we do, why it matters, and how we're creating value through
              sustainable, smart investments.
            </p>
            <div className="absolute lg:bottom-40 2xs:bottom-24 right-10">
              <button className="group flex items-center space-x-3 text-white font-sf-pro text-xl md:text-2xl 2xl:text-4xl font-light hover:text-iotc-gold transition-colors duration-300">
                <span>Know more</span>
                <svg
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    d="M12.9991 0.956563C12.9751 0.4048 12.5083 -0.0230455 11.9566 0.00094394L2.96506 0.39188C2.41329 0.415869 1.98545 0.88261 2.00944 1.43437C2.03343 1.98614 2.50017 2.41398 3.05193 2.38999L11.0444 2.04249L11.3919 10.0349C11.4159 10.5867 11.8826 11.0146 12.4344 10.9906C12.9861 10.9666 13.414 10.4998 13.39 9.94807L12.9991 0.956563ZM1 13L1.73715 13.6757L12.7372 1.67573L12 1L11.2628 0.324276L0.262846 12.3243L1 13Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
        </div>
        </FadeOnScroll>
      </div>
    </section>
  );
}
