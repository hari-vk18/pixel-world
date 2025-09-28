export default function DesigningToday() {
  return (
    <section className="relative h-[805px] w-full overflow-hidden">
      {/* Background Image */}
      <img 
        src="https://api.builder.io/api/v1/image/assets/TEMP/ca28efcb55058d9176c842c0edc6aecf16997740?width=2560" 
        alt="Modern real estate development"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-iotc-text/60 to-black/70"></div>

      <div className="relative z-10 flex items-center h-full px-4 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="space-y-8 max-w-2xl">
            <h2 className="text-white font-sf-pro text-4xl md:text-5xl lg:text-[60px] font-normal leading-tight md:leading-[93px] tracking-[-1.2px]">
              Designing for Today, Building for Tomorrow
            </h2>
            
            <p className="text-white font-sf-pro text-xl md:text-2xl font-normal italic leading-9 tracking-[-0.5px] max-w-3xl">
              Discover what we do, why it matters, and how we're creating value through sustainable, smart investments.
            </p>
          </div>

          {/* Right Content - Side Image */}
          <div className="flex justify-end items-center">
            <div className="relative">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/afeea19b02345e872d69d9259c08308c80a61eb3?width=1056" 
                alt="Modern building design"
                className="w-full max-w-lg h-auto object-cover rounded-lg"
              />
              {/* Know more button */}
              <div className="absolute bottom-8 right-8">
                <button className="group flex items-center space-x-3 text-white font-sf-pro text-xl md:text-2xl font-light hover:text-iotc-gold transition-colors duration-300">
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
          </div>
        </div>
      </div>
    </section>
  );
}