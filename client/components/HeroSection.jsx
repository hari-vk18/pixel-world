import { useEffect, useRef, useState } from "react";

export default function HeroSection() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative w-full overflow-hidden h-[400px] sm:h-[500px] md:h-[650px] lg:h-[832px]">
      {/* Background Images */}
      <img
        src="/pixel-world/modern-multistory-residential-building-with-balconies-greenery.png"
        alt="Modern residential building"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Dark Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex justify-center h-full px-2 sm:px-4 pt-24 sm:pt-32 md:pt-40 lg:pt-[172px]">
        <div className="text-center max-w-2xl sm:max-w-3xl md:max-w-4xl mx-auto">
          <h1
            className={`text-white font-sf-pro 3xs:text-2xl md:text-5xl lg:text-[58px] font-normal leading-tight sm:leading-[48px] md:leading-[65px] lg:leading-[85px] tracking-[0.58px] mb-6 sm:mb-8 transform transition-all ease-out ${inView ? "opacity-100 translate-y-0 scale-100 animate-fadeUp" : "opacity-0 translate-y-6 scale-95"
              }`}
            style={{ transitionDuration: inView ? "2000ms" : undefined, animationDuration: inView ? "2000ms" : undefined }}
          >
            Transforming Real Assets into Sustainable Value.
          </h1>
        </div>
      </div>
    </section>
  );
}