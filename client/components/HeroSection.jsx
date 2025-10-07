export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden h-[400px] sm:h-[500px] md:h-[650px] lg:h-[832px]">
      {/* Background Images */}
      <img 
        src="./public/modern-multistory-residential-building-with-balconies-greenery.png" 
        alt="Modern residential building"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Dark Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex justify-center h-full px-2 sm:px-4 pt-24 sm:pt-32 md:pt-40 lg:pt-[172px]">
        <div className="text-center max-w-2xl sm:max-w-3xl md:max-w-4xl mx-auto">
          <h1 className="text-white font-sf-pro text-2xl sm:text-3xl md:text-5xl lg:text-[58px] font-normal leading-tight sm:leading-[48px] md:leading-[65px] lg:leading-[85px] tracking-[0.58px] mb-6 sm:mb-8">
            Transforming Real Assets into Sustainable Value.
          </h1>
        </div>
      </div>
    </section>
  );
}