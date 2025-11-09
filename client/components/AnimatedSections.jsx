import { motion, useAnimation } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function AnimatedSections() {
  const pathControls = useAnimation();
  const containerRef = useRef(null);
  const [currentSection, setCurrentSection] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false); // ✅ New state to freeze scroll

  const sections = [
    { title: "Bridging Purpose." },
    { title: "Building Communities." },
    { title: "Sustaining the Future." },
  ];

  // ✅ Detect mobile screen size
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // ✅ Lock body scroll when animating
  useEffect(() => {
    if (isAnimating) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isAnimating]);

  // ✅ Smooth scroll tracking for section switching
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || isAnimating) return; // ❌ Ignore while animating

      const containerTop = containerRef.current.offsetTop;
      const containerHeight = containerRef.current.offsetHeight;
      const scrollY = window.scrollY;
      const scrollIntoContainer = scrollY - containerTop;
      const progress = Math.min(
        Math.max(scrollIntoContainer / containerHeight, 0),
        1
      );

      if (progress < 0.33) setCurrentSection(0);
      else if (progress < 0.66) setCurrentSection(1);
      else setCurrentSection(2);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isAnimating]);

  // ✅ Animate SVG path when section changes
  useEffect(() => {
    const duration = isMobile ? 2000 : 3000; // milliseconds
    setIsAnimating(true); // Lock scroll when animation starts

    if (currentSection === 1) {
      pathControls.start({
        pathLength: 1,
        transition: { duration: duration / 1000, ease: "easeInOut" },
      });
    } else {
      pathControls.set({ pathLength: 0 });
    }

    const timeout = setTimeout(() => {
      setIsAnimating(false); // Unlock scroll after animation finishes
    }, duration);

    return () => clearTimeout(timeout);
  }, [currentSection, pathControls, isMobile]);

  // ✅ Handle dynamic viewport height (mobile safe)
  useEffect(() => {
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };
    setVh();
    window.addEventListener("resize", setVh);
    return () => window.removeEventListener("resize", setVh);
  }, []);

  // ✅ Animation variants for each title
  const getTitleVariants = (idx) => {
    const duration = isMobile ? 0.6 : 0.9;
    switch (idx) {
      case 0:
        return {
          hidden: { opacity: 0, x: isMobile ? 30 : 60 },
          visible: {
            opacity: 1,
            x: 0,
            transition: { duration, ease: "easeOut" },
          },
        };
      case 1:
        return {
          hidden: { opacity: 0, scale: 0.96 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: { duration, ease: "easeOut" },
          },
        };
      case 2:
        return {
          hidden: { opacity: 0, y: isMobile ? 20 : 30 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: isMobile ? 0.7 : 1.0, ease: "easeOut" },
          },
        };
      default:
        return {
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8 },
          },
        };
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full"
      style={{ height: isMobile ? "300svh" : "400vh" }}
    >
      <div className="sticky top-0 h-[100svh] w-full bg-gradient-to-r from-[#0B2442] via-[#021123] to-[#0B2442]">
        <svg
          className="absolute inset-0 2xl:max-h-[100%] lg:max-h-[100%]"
          viewBox="0 0 1280 839"
          fill="none"
          preserveAspectRatio="none"
          style={{
            width: "100%",
            height: "100%",
            maxWidth: "100%",
            objectFit: "contain",
          }}
        >
          <rect width="1280" height="839" fill="url(#paint0_linear)" />

          {/* SVG 1 */}
          {currentSection === 0 && (
            <>
              <motion.path
                d="M142 576H1484.93V468.297L1673 359.837V576H1767.03V305.419L1673 251L1579.72 305.419V576H1976"
                stroke="url(#paint1_linear)"
                strokeWidth={
                  typeof window !== "undefined"
                    ? window.innerWidth < 640
                      ? 1.2
                      : window.innerWidth < 1024
                        ? 1.5
                        : 2
                    : 2
                }
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: isMobile ? 2 : 3, ease: "easeInOut" }}
              />
              <motion.circle
                cx="142.5"
                cy="576.5"
                r={isMobile ? 5 : 6.5}
                fill="#B89B7A"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6 }}
              />
            </>
          )}

          {/* SVG 2 */}
          {currentSection === 1 && (
            <motion.path
              d="M-157 576H105.935V468.297L293.997 359.837V576H388.028V305.419L293.997 251L200.721 305.419V576H388V494.48L526.812 412.384V576H597.208V370.04L526.812 330L455.569 370.04V576H1193.5H1976"
              stroke="url(#paint2_linear)"
              strokeWidth={
                typeof window !== "undefined"
                  ? window.innerWidth < 640
                    ? 1.5
                    : window.innerWidth < 1024
                      ? 2
                      : 2.5
                  : 2.5
              }
              fill="none"
              initial={{ pathLength: 0 }}
              animate={pathControls}
              transition={{ duration: isMobile ? 2 : 3, ease: "easeInOut" }}
            />
          )}

          {/* SVG 3 */}
          {currentSection === 2 && (
            <>
              <motion.path
                d="M-203 575.858H221.815C216.205 513.7 226.332 491.175 221.815 427.468C217.298 363.761 215.705 458.603 216.8 477.967C193.301 412.27 150.642 421.939 86.4185 420.476C132.711 473.241 158.649 502.983 212.502 486.513C263.851 452.447 243.206 358.527 338.585 349C326.73 455.743 235.105 473.927 226.113 482.629C217.121 491.331 261.932 608.488 229.695 622.473C197.458 636.457 241.157 549.443 258.35 563.427C275.543 577.412 762 563.427 762 563.427"
                stroke="#B89B7A"
                strokeWidth={
                  typeof window !== "undefined"
                    ? window.innerWidth < 640
                      ? 1.2
                      : window.innerWidth < 1024
                        ? 1.5
                        : 2
                    : 2
                }
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: isMobile ? 2 : 3, ease: "easeInOut" }}
              />
              <motion.circle
                cx="762.5"
                cy="563.5"
                r={
                  typeof window !== "undefined"
                    ? window.innerWidth < 640
                      ? 4.5
                      : window.innerWidth < 1024
                        ? 5.5
                        : 6.5
                    : 6.5
                }
                fill="#B89B7A"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: isMobile ? 2 : 3 }}
              />
            </>
          )}

          <defs>
            <linearGradient
              id="paint0_linear"
              x1="0"
              y1="419.5"
              x2="1280"
              y2="419.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0B2442" />
              <stop offset="0.625" stopColor="#021123" />
            </linearGradient>
            <linearGradient
              id="paint1_linear"
              x1="142"
              y1="413.5"
              x2="1976"
              y2="413.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="#B89B7A" />
            </linearGradient>
            <linearGradient
              id="paint2_linear"
              x1="-157"
              y1="413.5"
              x2="1193.5"
              y2="413.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="#B89B7A" />
            </linearGradient>
          </defs>
        </svg>

        {/* ✅ Animated Title */}
        <motion.h2
          key={currentSection}
          className="absolute text-right bg-clip-text text-transparent px-4 sm:px-6 md:px-2 py-2"
          style={{
            fontFamily: "Inter, Arial, sans-serif",
            fontWeight: 200,
            right: isMobile ? "2%" : "4%",
            // ✅ Position text differently for section 2 (index 1)
            top:
              currentSection === 1
                ? "auto"
                : "50%", // for others, keep vertically centered
            bottom:
              currentSection === 1
                ? (isMobile ? "8%" : "10%") // lower position for the second section
                : "auto",
            transform:
              currentSection === 1 ? "none" : "translateY(-50%)",
            backgroundImage:
              "linear-gradient(90deg, #B89B7A 0%, #B89B7A 45%, #e8dbc8 75%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            maxWidth: isMobile ? "85%" : "70%",
            wordWrap: "break-word",
          }}
          variants={getTitleVariants(currentSection)}
          initial="hidden"
          animate="visible"
        >
          <span className="text-xl leading-tight sm:text-3xl md:text-4xl lg:text-5xl xl:text-[60px] block">
            {sections[currentSection].title}
          </span>
        </motion.h2>

      </div>
    </section>
  );
}
