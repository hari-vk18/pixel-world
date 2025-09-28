export default function HeroSection() {
  return (
    <section className="relative h-[832px] w-full overflow-hidden">
      {/* Background Images */}
      <img 
        src="https://api.builder.io/api/v1/image/assets/TEMP/ad33659c33381eac40061641b81f19d65a13ad9f?width=2560" 
        alt="Street view background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <img 
        src="https://api.builder.io/api/v1/image/assets/TEMP/a91c9f32c44f11c2c282651c711a8a9edb2d7ff4?width=2560" 
        alt="Modern residential building"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Dark Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-white font-sf-pro text-4xl md:text-5xl lg:text-[58px] font-normal leading-tight lg:leading-[85px] tracking-[0.58px] mb-8">
            Transforming Real Assets into Sustainable Value.
          </h1>
        </div>
      </div>
    </section>
  );
}