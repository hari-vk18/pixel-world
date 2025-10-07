import { useState } from "react";

export default function InvestorSpotlight() {
  const [page, setPage] = useState(1);

  const blogPosts = [
    {
      id: 1,
      image: "./public/image (3).png",
      title: "IOTC Breaks Ground on €120M Net-Zero Residential Project",
      date: "02 december 2022",
      readTime: "3 min. to read",
      description: "Did you come here for something in particular or just general Riker-bashing",
      highlighted: false
    },
    {
      id: 2,
      image: "./public/image (4).png",
      title: "New Industrial Park Launches in Luxembourg",
      date: "02 december 2022",
      readTime: "3 min. to read",
      description: "Did you come here for something in particular or just general Riker-bashing",
      highlighted: false
    },
    {
      id: 3,
      image: "./public/image (3).png",
      title: "India Expansion Secures €40M in Capital",
      date: "02 december 2022",
      readTime: "3 min. to read",
      description: "Did you come here for something in particular or just general Riker-bashing",
      highlighted: false
    },
    {
      id: 4,
      image: "./public/image (3).png",
      title: "IOTC Breaks Ground on €120M Net-Zero Residential Project",
      date: "02 december 2022",
      readTime: "3 min. to read",
      description: "Did you come here for something in particular or just general Riker-bashing",
      highlighted: false
    },
    {
      id: 5,
      image: "./public/image (3).png",
      title: "India Expansion Secures €40M in Capital",
      date: "02 december 2022",
      readTime: "3 min. to read",
      description: "Did you come here for something in particular or just general Riker-bashing",
      highlighted: false
    },
    {
      id: 6,
      image: "./public/image (4).png",
      title: "New Industrial Park Launches in Luxembourg",
      date: "02 december 2022",
      readTime: "3 min. to read",
      description: "Did you come here for something in particular or just general Riker-bashing",
      highlighted: false
    }
  ];

  const postsPerPage = 3;
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  const handlePageChange = (dot) => {
    setPage(dot);
  };

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-iotc-text font-sf-pro text-3xl ml-8 md:text-[35px] font-normal leading-[52px] tracking-[-0.7px]">
            Investor Spotlight
          </h2>
          <button className="group flex items-center space-x-2 pr-6 text-iotc-text font-sf-pro text-xl md:text-2xl font-light hover:text-iotc-gold transition-colors duration-300">
            <span>View all</span>
            <svg 
              className="w-3 h-3 transform group-hover:translate-x-1 transition-transform duration-300" 
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

        {/* Slider Container */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out py-10"
            style={{ transform: `translateX(-${(page - 1) * 100}%)` }}
          >
            {Array.from({ length: totalPages }).map((_, i) => (
              <div key={i} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-14 flex-shrink-0 w-full">
                {blogPosts
                  .slice(i * postsPerPage, (i + 1) * postsPerPage)
                  .map((post) => (
                    <article
                      key={post.id}
                      className={`group cursor-pointer rounded-2xl p-4 lg:p-5 transition-all duration-300 transform hover:scale-105
                        ${post.highlighted ? "bg-iotc-card-bg" : "bg-white"}
                        hover:bg-iotc-card-bg hover:shadow-lg hover:border-iotc-gold border border-transparent`}
                    >
                      <div className="space-y-6">
                        <div className="overflow-hidden rounded-md">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                            style={{ width: "402px", height: "240px" }}
                          />
                        </div>
                        <div className="space-y-4">
                          <h3 className="text-[#222] font-sf-pro text-xl md:text-2xl font-medium leading-tight capitalize group-hover:text-iotc-gold transition-colors duration-300">
                            {post.title}
                          </h3>
                          <p className="text-iotc-gray font-sf-pro text-base leading-6">
                            {post.description}
                          </p>
                        </div>
                      </div>
                    </article>
                  ))}
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center space-x-2 mt-12">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((dot) => (
            <button
              key={dot}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                page === dot ? "bg-iotc-dark w-7" : "bg-gray-300"
              }`}
              onClick={() => handlePageChange(dot)}
              aria-label={`Go to page ${dot}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
