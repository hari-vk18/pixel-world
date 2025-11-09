import { motion } from "framer-motion";

export default function DesigningToday() {
  return (
    <section className="relative flex w-full overflow-hidden pb-32 md:pb-48">
      {/* Background Image */}
      <img
        src="/pixel-world/real asset. 6 (1).png"
        alt="Modern real estate development"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-iotc-text/60 to-black/70"></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col xl:h-full lg:h-[80%] px-4 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-8xl mx-auto">

          {/* Left Content (Heading) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col justify-center space-y-8 max-w-8x2"
          >
            <h2
              className="text-white font-sf-pro text-4xl md:text-5xl 2xl:text-8xl 
              2xl:mt-[40%] lg:mt-[30%] 2xs:mt-[20%] xl:text-[350%] font-normal 
              leading-tight md:leading-[93px] tracking-[-1.2px]"
            >
              Designing for Today, Building for Tomorrow
            </h2>
          </motion.div>

          {/* Right Content (Side Image) */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
            className="flex lg:mt-[16%] overflow-visible"
          >
            <div className="relative w-full overflow-visible">
              <img
                src="/pixel-world/image (2).png"
                alt="Modern building design"
                className="object-cover h-auto ml-0 md:ml-2 lg:ml-5 
                w-[90vw] md:w-[80vw] xl:w-[96vw] 2xl:w-[105vw]"
              />
            </div>
          </motion.div>
        </div>

        {/* Description & Button */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          viewport={{ once: true }}
          className="relative flex flex-col md:flex-row md:justify-center 
          2xl:justify-start w-full mt-[15%] lg:mt-[8%] 2xl:mb-16 lg:mb-8"
        >
          <p
            className="text-white font-sf-pro text-xl md:text-2xl 2xl:text-5xl 
            font-normal italic leading-9 tracking-[-0.5px] md:w-[80%] 3x2l:w-[100%]"
          >
            Discover what we do, why it matters, and how we're creating value through
            sustainable, smart investments.
          </p>

          <motion.button
            whileHover={{ x: 10, color: "#C5A96D" }}
            transition={{ duration: 0.3 }}
            className="group flex items-center space-x-3 text-white font-sf-pro 
            text-xl md:text-2xl 2xl:text-4xl font-light mt-10 md:mt-0"
          >
            <span>Know more</span>
            <svg
              className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1"
              viewBox="0 0 14 14"
              fill="none"
            >
              <path
                d="M12.9991 0.956563C12.9751 0.4048 12.5083 -0.0230455 11.9566 0.00094394L2.96506 0.39188C2.41329 0.415869 1.98545 0.88261 2.00944 1.43437C2.03343 1.98614 2.50017 2.41398 3.05193 2.38999L11.0444 2.04249L11.3919 10.0349C11.4159 10.5867 11.8826 11.0146 12.4344 10.9906C12.9861 10.9666 13.414 10.4998 13.39 9.94807L12.9991 0.956563ZM1 13L1.73715 13.6757L12.7372 1.67573L12 1L11.2628 0.324276L0.262846 12.3243L1 13Z"
                fill="currentColor"
              />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
