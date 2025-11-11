import { motion, useAnimation } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";

export default function AnimatedSections() {
  const pathControls = useAnimation();
  const containerRef = useRef(null);
  const rafRef = useRef(null);

  const [currentSection, setCurrentSection] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isActive, setIsActive] = useState(false); // when container is in viewport
  const [progress, setProgress] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const [lastAnimationDone, setLastAnimationDone] = useState(false);

  const sections = [
    { title: "Bridging Purpose." },
    { title: "Building Communities." },
    { title: "Sustaining the Future." },
  ];

  // Detect mobile breakpoint
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // IntersectionObserver to toggle active state
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsActive(entry.isIntersecting && entry.intersectionRatio > 0.1);
        });
      },
      {
        threshold: [0, 0.1, 0.2, 0.5],
        rootMargin: '0px'
      }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);  // Scroll tracking with RAF for smooth updates
  const handleScroll = useCallback(() => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const containerHeight = rect.height;

    const scrollable = Math.max(containerHeight - viewportHeight, 1);
    const scrolledInto = Math.min(Math.max(-rect.top, 0), scrollable);
    // multiplier < 1 should slow progress but must still allow p to reach 1.
    // Choose multipliers dynamically so mobile devices still can reach the end.
    let multiplier;
    if (isMobile) {
      // on small/short devices we want less slowdown so users can reach the end
      multiplier = window.innerHeight && window.innerHeight < 720 ? 0.9 : 0.8;
    } else {
      // desktop can be a bit slower
      multiplier = window.innerHeight && window.innerHeight >= 1040 ? 0.75 : 0.7;
    }

    const adjustedScrollable = Math.max(1, scrollable / multiplier); // larger => slower progress
    const p = Math.min(Math.max(scrolledInto / adjustedScrollable, 0), 1);

    setProgress(p);

    // Lock scroll when entering the final section
    if (currentSection === 2 && !isLocked && !lastAnimationDone) {
      setIsLocked(true);
    }

    if (p < 0.33) setCurrentSection(0);
    else if (p < 0.66) setCurrentSection(1);
    else setCurrentSection(2);
  }, [isMobile, currentSection, isLocked, lastAnimationDone]);

  // Apply/remove scroll lock when isLocked changes
  useEffect(() => {
    if (isLocked && !lastAnimationDone) {
      // Set a timer to unlock based on animation duration
      const animationDuration = isMobile ? 2000 : 3000; // matches SVG path animation
      const unlockTimer = setTimeout(() => {
        setLastAnimationDone(true);
        setIsLocked(false);

        // Also dispatch the completion event for InvestmentHorizons
        document.dispatchEvent(new CustomEvent('animationComplete', {
          detail: { isAnimationComplete: true, progress }
        }));
      }, animationDuration + 200); // Add 200ms buffer

      // Store current scroll position and lock scroll
      const scrollY = window.scrollY;

      const preventScroll = (e) => {
        e.preventDefault();
        window.scrollTo(0, scrollY);
      };

      window.addEventListener('wheel', preventScroll, { passive: false });
      window.addEventListener('touchmove', preventScroll, { passive: false });
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';

      return () => {
        clearTimeout(unlockTimer);
        window.removeEventListener('wheel', preventScroll);
        window.removeEventListener('touchmove', preventScroll);
        document.documentElement.style.overflow = '';
        document.body.style.overflow = '';
      };
    }

    return () => { };
  }, [isLocked, lastAnimationDone, isMobile, progress]);

  useEffect(() => {
    handleScroll();

    const loop = () => {
      handleScroll();
      rafRef.current = requestAnimationFrame(loop);
    };

    if (isActive) {
      rafRef.current = requestAnimationFrame(loop);
    } else {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [isActive, handleScroll]);

  // Animate SVG path when currentSection changes
  useEffect(() => {
    const duration = isMobile ? 2 : 3;
    if (currentSection === 1) {
      pathControls.start({
        pathLength: 1,
        transition: { duration, ease: "easeInOut" },
      });
    } else {
      pathControls.set({ pathLength: 0 });
    }
  }, [currentSection, pathControls, isMobile]);

  // Set vh variable
  useEffect(() => {
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };
    setVh();
    window.addEventListener("resize", setVh);
    return () => window.removeEventListener("resize", setVh);
  }, []);

  const sectionHeight = isMobile ? "350svh" : "400vh";

  return (
    <section
      ref={containerRef}
      className="relative w-full"
      style={{ height: sectionHeight }}
    >
      {/* Placeholder to maintain layout height */}
      <div aria-hidden="true" style={{ height: sectionHeight }} />      {/* Fixed visual layer */}
      {isActive && (
        <motion.div
          className="fixed top-0 left-0 w-full h-screen z-30 pointer-events-none"
          initial={{ opacity: 0, y: 30 }}
          animate={{
            opacity: progress < 0.85 ? 1 : 1 - (progress - 0.85) * 5,
            y: 0,
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div className="relative w-full h-full">
            <motion.div
              className="absolute inset-0 bg-[#0B2442]"
              style={{ opacity: currentSection === 2 && progress > 0.95 ? 0 : 1 - Math.max(progress - 0.8, 0) * 5 }}
              transition={{ duration: 0.3 }}
            />

            <svg
              className="absolute inset-0 w-full h-full 3xs:h-auto 3xs:mt-[50%] sm:mt-0"
              viewBox="0 0 1280 839"
              fill="none"
              preserveAspectRatio="none"
              style={{ width: "100%", objectFit: "contain" }}
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
                    onAnimationComplete={() => {
                      // mark last animation done and release scroll lock
                      setLastAnimationDone(true);
                      if (isLocked) setIsLocked(false);
                      // notify other components (e.g., InvestmentHorizons) that animation is complete
                      document.dispatchEvent(new CustomEvent('animationComplete', {
                        detail: { isAnimationComplete: true, progress }
                      }));
                    }}
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
                <linearGradient id="paint0_linear" x1="0" y1="419.5" x2="1280" y2="419.5">
                  <stop stopColor="#0B2442" />
                  <stop offset="0.625" stopColor="#021123" />
                </linearGradient>
                <linearGradient id="paint1_linear" x1="142" y1="413.5" x2="1976" y2="413.5">
                  <stop stopColor="white" />
                  <stop offset="1" stopColor="#B89B7A" />
                </linearGradient>
                <linearGradient id="paint2_linear" x1="-157" y1="413.5" x2="1193.5" y2="413.5">
                  <stop stopColor="white" />
                  <stop offset="1" stopColor="#B89B7A" />
                </linearGradient>
              </defs>
            </svg>

            {/* Animated Title */}
            <motion.h2
              key={currentSection}
              className="absolute text-right bg-clip-text text-transparent px-4 sm:px-6 md:px-2 py-2 pointer-events-auto"
              style={{
                fontFamily: "Inter, Arial, sans-serif",
                fontWeight: 200,
                right: isMobile ? "2%" : "4%",
                top: "50%",
                bottom: "auto",
                transform: "translateY(-50%)",
                backgroundImage:
                  "linear-gradient(90deg, #B89B7A 0%, #B89B7A 45%, #e8dbc8 75%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                maxWidth: isMobile ? "85%" : "70%",
                wordWrap: "break-word",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-xl leading-tight sm:text-3xl md:text-4xl lg:text-5xl xl:text-[60px] block">
                {sections[currentSection].title}
              </span>
            </motion.h2>
          </div>
        </motion.div>
      )}
    </section>
  );
}
