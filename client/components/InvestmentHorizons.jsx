export default function InvestmentHorizons() {
  return (
    <section className="bg-white py-16 md:py-32">
      <div className="w-[71rem] mx-auto">
        {/* Top Row: 2-column grid, right column split for title/line and investment block+image */}
        <div className="grid grid-cols-1 lg:grid-cols-3 items-start mt-10 mb-10 relative">
          {/* Left: Main image */}
          <div className="flex flex-col justify-start w-[70%]">
            <img
              src="./public/image (1).png"
              alt="Investment property"
              className="w-full h-72 md:h-80 object-cover"
            />
          </div>
          {/* Center: Title, line, and Investment block */}
          <div className="flex flex-col h-full mt-[48%]  w-[97%]">

            {/* Investment block */}
            <div className="flex flex-col">
              <h3 className="text-iotc-text text-2xl md:text-[32px] font-normal leading-tight tracking-normal mb-5" style={{ fontFamily: 'Inter, Arial, sans-serif' }}>
                Investment
              </h3>
              <p className="text-iotc-text font-sf-pro text-lg font-normal w-[80%]"
                style={{
                  letterSpacing: '-0.03em',
                  lineHeight: '1.7',
                  cursor: 'default',
                }}>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
              </p>
            </div>
          </div>
          <div className="hidden md:block absolute left-[46%] -translate-x-1/2 top-[6%] w-[36%] border-t-2 border-black-200" style={{ zIndex: 0 }}></div>

          {/* Right: Side image */}
          <div className="flex flex-col justify-center">
            {/* Title and horizontal line */}
            <div className="flex items-center w-full justify-start mb-8 relative">
              <h2 className="text-iotc-text font-sf-pro text-[3rem] md:text-8x8 font-normal leading-tight bg-white relative z-10 whitespace-nowrap"
                style={{
                  letterSpacing: '-0.03em',
                  cursor: 'default',
                }}>
                Investment Horizons
              </h2>
            </div>
            <div className="flex justify-center mt-[23%]">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/c875ffef857fbc15d6df44d4cc6547916746ac90"
                alt="Investment opportunity"
                className="w-[70%] h-72 md:h-80 object-cover"
              />
            </div>
          </div>
        </div>
        <div className="relative mt-0">
          <img src="/Vector 3313.svg" alt="Vector 3313" className="absolute" style={{ top: '-36px', left: '657.5px' }} />
        </div>
        {/* Bottom Row: Two columns, number, title, text, image above */}
        <div className="flex flex-row flex-wrap justify-center gap-2 mx-auto">
          {/* Left: European Real Asset */}
          <div className="flex-1 max-w-xs flex flex-col items-start">
            <div className="text-lg font-sf-pro text-gray-700 font-normal mb-4">01</div>
            <h3 className="text-iotc-text font-sf-pro text-2xl md:text-[32px] font-normal leading-tight mb-1"
              style={{
                letterSpacing: '-0.03em',
                cursor: 'default',
              }}>
              European Real Asset
            </h3>
            <p className="text-iotc-text font-sf-pro text-lg font-normal leading-7 max-w-xs mt-8"
              style={{
                letterSpacing: '-0.03em',
                lineHeight: '1.7',
                cursor: 'default',
              }}>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
            </p>
          </div>

          {/* Center: Image */}
          <div className="flex-1 flex flex-col justify-start mt-[7%] items-center"
            style={{ width: '261px', height: '321px' }}>
            <img
              src="./public/image.png"
              alt="Real estate development"
              className="object-cover mt-6"
              style={{ width: '261px', height: '321px' }}
            />
          </div>
          {/* Right: Real Asset Opportunities */}
          <div className="flex-1 max-w-lg flex flex-col items-start mt-36">
            <div className="text-lg font-sf-pro text-gray-700 font-normal mb-4">02</div>
            <h3 className="text-iotc-text font-sf-pro text-2xl md:text-[32px] font-normal leading-tight tracking-tight mb-1"
              style={{
                letterSpacing: '-0.03em',
                lineHeight: '1.5',
                cursor: 'default',
              }}>
              Real Asset Opportunities in Emerging countries
            </h3>
            <p className="text-iotc-text font-sf-pro text-lg font-normal leading-7 max-w-xs"
              style={{
                letterSpacing: '-0.03em',
                lineHeight: '1.7',
                cursor: 'default',
              }}>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
            </p>
          </div>
        </div>

        {/* Architectural Line Graphics - Vector SVGs as absolute images */}
        <div className="relative mt-0">
          <img src="/Vector 3313.svg" alt="Vector 3313" className="absolute" style={{ top: '-80px', left: '250px' }} />
        </div>
        <div className="relative mt-0">
          <img src="/Vector 3312.svg" alt="Vector 3312" className="absolute" style={{ top: '-150px' }} />
        </div>
      </div>
    </section>
  );
}