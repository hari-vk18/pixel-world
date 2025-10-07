import { motion, useInView, useAnimation } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

export default function AnimatedSections() {
  // Animation controls for synchronizing both paths (must be inside the component)
  const pathControls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [currentSection, setCurrentSection] = useState(0);

  const sections = [
    { title: "Bridging Purpose." },
    { title: "Building Communities." },
    { title: "Sustaining the Future." }
  ];

  useEffect(() => {
    if (!isInView) return;

    // Animate both paths together when section 1 is active
    if (currentSection === 1) {
      pathControls.start({ pathLength: 1, transition: { duration: 1.5, ease: 'easeInOut' } });
    } else {
      pathControls.set({ pathLength: 0 });
    }

    const timeout = setTimeout(() => {
      const nextSection = (currentSection + 1) % 3;
      setCurrentSection(nextSection);
    }, 4000);

    return () => clearTimeout(timeout);
  }, [isInView, currentSection, pathControls]);

  return (
  <section ref={ref} className="relative w-full overflow-hidden bg-gradient-to-r from-iotc-primary via-iotc-primary to-iotc-dark h-[400px] sm:h-[600px] md:h-[700px] lg:h-[839px]">
    <svg 
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 1280 839"
      fill="none"
      preserveAspectRatio="none"
      style={{
        width: '100vw',
        height: '100%',
        minHeight: '250px',
        maxHeight: '839px',
        objectFit: 'cover',
        objectPosition: 'center',
      }}
    >
        <rect width="1280" height="839" fill="url(#paint0_linear)"/>
        
        {currentSection === 0 && (
          <>
            <motion.path 
              d="M142 576H1484.93V468.297L1673 359.837V576H1767.03V305.419L1673 251L1579.72 305.419V576H1976" 
              stroke="url(#paint1_linear)" 
                strokeWidth={window.innerWidth < 640 ? 0.8 : window.innerWidth < 1024 ? 1.2 : 1.5}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              exit={{ pathLength: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
            />
            <motion.circle 
              cx="142.5" cy="576.5" r="6.5" 
              fill="#B89B7A"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ duration: 0.3 }}
            />
          </>
        )}
        
        {currentSection === 1 && (
          <>
            <motion.path 
              d="M388 576L388 494.48L526.812 412.384V576H597.208V370.04L526.812 330L455.569 370.04V576H1193.5" 
              stroke="url(#paint2_linear)" 
                strokeWidth={window.innerWidth < 640 ? 1.2 : window.innerWidth < 1024 ? 1.7 : 2.2}
              initial={{ pathLength: 0 }}
              animate={pathControls}
              exit={{ pathLength: 0 }}
            />
            <motion.path 
              d="M-157 576H105.935V468.297L293.997 359.837V576H388.028V305.419L293.997 251L200.721 305.419V576H1976" 
              stroke="url(#paint2_linear)" 
                strokeWidth={window.innerWidth < 640 ? 1.2 : window.innerWidth < 1024 ? 1.7 : 2.2}
              initial={{ pathLength: 0 }}
              animate={pathControls}
              exit={{ pathLength: 0 }}
            />
          </>
        )}
        
        {currentSection === 2 && (
          <>
            <motion.path 
              d="M-203 575.858H221.815C216.205 513.7 226.332 491.175 221.815 427.468C217.298 363.761 215.705 458.603 216.8 477.967C193.301 412.27 150.642 421.939 86.4185 420.476C132.711 473.241 158.649 502.983 212.502 486.513C263.851 452.447 243.206 358.527 338.585 349C326.73 455.743 235.105 473.927 226.113 482.629C217.121 491.331 261.932 608.488 229.695 622.473C197.458 636.457 241.157 549.443 258.35 563.427C275.543 577.412 762 563.427 762 563.427" 
              stroke="#B89B7A"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              exit={{ pathLength: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
            <motion.circle 
              cx="762.5" cy="563.5"
              r={window.innerWidth < 640 ? 3.5 : window.innerWidth < 1024 ? 5 : 6.5}
              fill="#B89B7A"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ duration: 0.3, delay: 1.5 }}
            />
          </>
        )}
        
        <defs>
          <linearGradient id="paint0_linear" x1="0" y1="419.5" x2="1280" y2="419.5" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0B2442"/>
            <stop offset="0.163462" stopColor="#0B2442"/>
            <stop offset="0.625" stopColor="#021123"/>
            <stop offset="0.798077" stopColor="#021123"/>
          </linearGradient>
          <linearGradient id="paint1_linear" x1="142" y1="413.5" x2="1976" y2="413.5" gradientUnits="userSpaceOnUse">
            <stop stopColor="white"/>
            <stop offset="1" stopColor="#B89B7A"/>
          </linearGradient>
        <linearGradient id="paint2_linear" x1="-157" y1="413.5" x2="1193.5" y2="413.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="0.3" stopColor="white"/>
          <stop offset="0.5" stopColor="#B89B7A"/>
          <stop offset="1" stopColor="#B89B7A"/>
        </linearGradient>
        </defs>
      </svg>
      
      <div className="relative z-10 h-full w-full">
        <motion.h2
          key={currentSection}
          className="text-right absolute bg-clip-text text-transparent"
          style={{
            fontFamily: 'Inter, Arial, sans-serif',
            fontWeight: 200,
            fontSize: '2rem', // base mobile
            right: '4%',
            ...(currentSection === 1
              ? { bottom: '12%' }
              : { top: '50%', transform: 'translateY(-50%)' }
            ),
            width: 'auto',
            minWidth: 0,
            maxWidth: '90vw',
            whiteSpace: 'nowrap',
            backgroundImage: 'linear-gradient(90deg, #B89B7A 0%, #B89B7A 45%, #e8dbc8 75%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <span className="text-2xl sm:text-4xl md:text-5xl lg:text-[60px]">{sections[currentSection].title}</span>
        </motion.h2>
      </div>
    </section>
  );
}

