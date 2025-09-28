export default function InvestorSpotlight() {
  const blogPosts = [
    {
      id: 1,
      image: "https://api.builder.io/api/v1/image/assets/TEMP/a06a5bd4a849da2f921ecacfc2a728f6e3f78145?width=804",
      title: "IOTC Breaks Ground on €120M Net-Zero Residential Project",
      date: "02 december 2022",
      readTime: "3 min. to read",
      description: "Did you come here for something in particular or just general Riker-bashing",
      highlighted: false
    },
    {
      id: 2,
      image: "https://api.builder.io/api/v1/image/assets/TEMP/a0ed4c8286e06e7ac238ea10d82a6530a3a69f79?width=804",
      title: "New Industrial Park Launches in Luxembourg",
      date: "02 december 2022",
      readTime: "3 min. to read",
      description: "Did you come here for something in particular or just general Riker-bashing",
      highlighted: true
    },
    {
      id: 3,
      image: "https://api.builder.io/api/v1/image/assets/TEMP/b2520546020bc6945f55230376175edc62d3988d?width=804",
      title: "India Expansion Secures €40M in Capital",
      date: "02 december 2022",
      readTime: "3 min. to read",
      description: "Did you come here for something in particular or just general Riker-bashing",
      highlighted: false
    }
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-iotc-text font-sf-pro text-3xl md:text-[35px] font-normal leading-[52px] tracking-[-0.7px]">
            Investor Spotlight
          </h2>
          <button className="group flex items-center space-x-3 text-iotc-text font-sf-pro text-xl md:text-2xl font-light hover:text-iotc-gold transition-colors duration-300">
            <span>View all</span>
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

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-14">
          {blogPosts.map((post) => (
            <article 
              key={post.id}
              className={`group cursor-pointer ${
                post.highlighted 
                  ? 'bg-iotc-card-bg rounded-2xl p-4 lg:p-5' 
                  : ''
              }`}
            >
              <div className="space-y-6">
                {/* Image */}
                <div className="overflow-hidden rounded-md">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  {/* Title */}
                  <h3 className="text-[#222] font-sf-pro text-xl md:text-2xl font-medium leading-tight capitalize group-hover:text-iotc-gold transition-colors duration-300">
                    {post.title}
                  </h3>

                  {/* Meta Information */}
                  <div className="flex items-center space-x-4 text-sm">
                    {/* Calendar Icon */}
                    <svg className="w-3 h-3 text-iotc-gray" viewBox="0 0 11 13" fill="none">
                      <path 
                        d="M2.4 5.9H3.6V7.1H2.4V5.9ZM10.8 2.9V11.3C10.8 11.96 10.26 12.5 9.6 12.5H1.2C0.88174 12.5 0.576515 12.3736 0.351472 12.1485C0.126428 11.9235 0 11.6183 0 11.3L0.00599999 2.9C0.00599999 2.24 0.534 1.7 1.2 1.7H1.8V0.5H3V1.7H7.8V0.5H9V1.7H9.6C10.26 1.7 10.8 2.24 10.8 2.9ZM1.2 4.1H9.6V2.9H1.2V4.1ZM9.6 11.3V5.3H1.2V11.3H9.6ZM7.2 7.1H8.4V5.9H7.2V7.1ZM4.8 7.1H6V5.9H4.8V7.1Z" 
                        fill="currentColor"
                      />
                    </svg>
                    <span className="text-iotc-light-gray font-noto text-xs capitalize">
                      {post.date}
                    </span>
                    
                    <div className="w-3 h-px bg-[#999]"></div>
                    
                    {/* Clock Icon */}
                    <svg className="w-3 h-3 text-iotc-gray" viewBox="0 0 12 13" fill="none">
                      <path 
                        d="M6 0.5C2.6916 0.5 0 3.1916 0 6.5C0 9.8084 2.6916 12.5 6 12.5C9.3084 12.5 12 9.8084 12 6.5C12 3.1916 9.3084 0.5 6 0.5ZM6 11.3C3.3534 11.3 1.2 9.1466 1.2 6.5C1.2 3.8534 3.3534 1.7 6 1.7C8.6466 1.7 10.8 3.8534 10.8 6.5C10.8 9.1466 8.6466 11.3 6 11.3Z" 
                        fill="currentColor"
                      />
                      <path 
                        d="M6.60015 3.5H5.40015V6.7484L7.37595 8.7242L8.22435 7.8758L6.60015 6.2516V3.5Z" 
                        fill="currentColor"
                      />
                    </svg>
                    <span className="text-iotc-light-gray font-noto text-xs capitalize">
                      {post.readTime}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-iotc-gray font-sf-pro text-base leading-6">
                    {post.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center space-x-2 mt-12">
          <div className="w-4 h-4 rounded-full bg-[#A6B5C6]/36"></div>
          <div className="w-7 h-4 rounded-full bg-iotc-dark"></div>
          <div className="w-4 h-4 rounded-full bg-[#A6B5C6]/36"></div>
        </div>
      </div>
    </section>
  );
}