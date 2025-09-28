export default function InvestmentHorizons() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Investment Horizons Title */}
        <div className="text-right mb-16">
          <h2 className="text-iotc-text font-sf-pro text-4xl md:text-5xl font-normal leading-tight tracking-[-1px]">
            Investment Horizons
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column */}
          <div className="space-y-16">
            {/* Investment Section */}
            <div className="space-y-6">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/7719d3e3edc42402c57c122d4d82e86d5dd8903d?width=522" 
                alt="Investment property"
                className="w-full h-80 object-cover rounded-md"
              />
              <div className="space-y-4">
                <h3 className="text-iotc-text font-sf-pro text-2xl md:text-[35px] font-normal leading-tight tracking-[-0.7px]">
                  Investment
                </h3>
                <p className="text-iotc-text font-sf-pro text-xl font-light leading-8 tracking-[-0.4px] max-w-md">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
                </p>
              </div>
            </div>

            {/* European Real Asset Section */}
            <div className="space-y-6">
              <div className="flex items-start space-x-6">
                <div className="text-black font-poppins text-xl font-light tracking-[1px] mt-1">
                  01
                </div>
                <div className="flex-1">
                  <h3 className="text-iotc-text font-sf-pro text-2xl md:text-[35px] font-normal leading-tight tracking-[-0.7px] mb-4">
                    European Real Asset
                  </h3>
                  <p className="text-iotc-text font-sf-pro text-xl font-light leading-8 tracking-[-0.4px] max-w-md">
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-16">
            <div className="space-y-6">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/c875ffef857fbc15d6df44d4cc6547916746ac90" 
                alt="Investment opportunity"
                className="w-full h-80 object-cover rounded-md"
              />
              <div className="space-y-6">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/2e31ccf2ea8f67f75186a19bc69f31627e637553" 
                  alt="Real estate development"
                  className="w-full h-80 object-cover rounded-md"
                />
                <div className="flex items-start space-x-6">
                  <div className="text-black font-poppins text-xl font-light tracking-[1px] mt-1">
                    02
                  </div>
                  <div className="flex-1">
                    <h3 className="text-iotc-text font-sf-pro text-2xl md:text-[35px] font-normal leading-[52px] tracking-[-0.7px] mb-4">
                      Real Asset Opportunities in Emerging countries
                    </h3>
                    <p className="text-iotc-text font-sf-pro text-xl font-light leading-8 tracking-[-0.4px]">
                      At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Architectural Line Graphics */}
        <div className="relative mt-24">
          <svg 
            className="absolute left-0 top-0 w-40 h-72 opacity-20" 
            viewBox="0 0 155 281" 
            fill="none"
          >
            <path 
              d="M77.5 137.199L154 93.4209V1L77.5 44.7783V137.199ZM77.5 137.199L1 182.367V280H77.5V137.199Z" 
              stroke="black" 
              strokeOpacity="0.17"
            />
          </svg>
          <svg 
            className="absolute left-60 top-16 w-20 h-36 opacity-20" 
            viewBox="0 0 81 140" 
            fill="none"
          >
            <path 
              d="M80 1L1 46.7671V139L80 94.9797V1Z" 
              stroke="black" 
              strokeOpacity="0.17"
            />
          </svg>
          <svg 
            className="absolute right-60 top-0 w-20 h-36 opacity-20" 
            viewBox="0 0 81 140" 
            fill="none"
          >
            <path 
              d="M80 1L1 46.7671V139L80 94.9797V1Z" 
              stroke="black" 
              strokeOpacity="0.17"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}