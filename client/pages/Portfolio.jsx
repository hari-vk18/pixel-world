import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FadeOnScroll from "../components/FadeOnScroll";
// Removed ResponsiveImage; using direct webp image sources

export default function Portfolio() {
    const [activeTab, setActiveTab] = useState("completed");
    const [showCountryPopup, setShowCountryPopup] = useState(false);
    const [activeRegion, setActiveRegion] = useState(null);

    const regions = [
        {
            name: 'Americas',
            countries: ['Argentina', 'Brazil', 'Canada', 'Chile', 'Colombia', 'Mexico', 'United States', 'Uruguay'],
        },
        {
            name: 'Asia Pacific',
            countries: ['Australia', 'Chinese Mainland', 'Hong Kong SAR', 'India', 'Indonesia', 'Japan', 'Korea', 'Malaysia', 'New Zealand', 'Pakistan', 'Philippines', 'Singapore', 'Taiwan', 'Thailand', 'Vietnam'],
        },
        {
            name: 'Europe',
            countries: ['Austria', 'Belgium', 'Bulgaria', 'Croatia', 'Czech Republic', 'Denmark', 'Finland', 'France', 'Germany', 'Greece', 'Hungary', 'Ireland', 'Italy', 'Luxembourg', 'Netherlands', 'Norway', 'Poland', 'Portugal', 'Romania', 'Serbia', 'Slovakia', 'Spain', 'Sweden', 'Switzerland', 'United Kingdom'],
        },
        {
            name: 'Middle East and Africa',
            countries: ['Bahrain', 'Botswana', 'Cameroon', 'Ivory Coast', 'Egypt', 'Ghana', 'Israel', 'Jordan', 'Kenya', 'Kuwait', 'Mali', 'Morocco', 'Namibia', 'Nigeria', 'Oman', 'Qatar', 'Rwanda', 'Saudi Arabia', 'Senegal', 'South Africa', 'Tanzania', 'Turkey', 'Uganda', 'United Arab Emirates', 'Zambia', 'Zimbabwe'],
        },
    ];

    useEffect(() => {
        if (showCountryPopup) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [showCountryPopup]);

    const tabs = [
        { id: "completed", label: "Completed" },
        { id: "ongoing", label: "Ongoing" },
        { id: "upcoming", label: "Upcoming" }
    ];

    return (
        <div className="min-h-screen bg-white">
            <Header />

            <main className="lg:pt-40 2xl:pt-60 3xs:pt-28 px-[4%]">
                <div className="flex lg:flex-row 3xs:flex-col gap-8 lg:gap-4 mb-16">
                    {/* Left - Title */}
                    <div className="lg:w-[35%] 3xs:w-full">
                        <FadeOnScroll direction="left" distance={40} duration={800}>
                            <p className="2xl:text-[600%] lg:text-[420%] 3xs:text-[200%] font-sf-pro font-[300]" style={{ letterSpacing: '-0.02em' }}>
                                Our Portfolio
                            </p>
                        </FadeOnScroll>
                    </div>

                    {/* Right - Description */}
                    <div className="lg:w-[65%] 3xs:w-full pl-12 pt-1">
                        <FadeOnScroll direction="up" delay={150} distance={30} duration={800}>
                            <p className="2xl:text-[200%] lg:text-[120%] 3xs:text-[110%] text-[#6C6C6C] font-[400] lg:text-left 3xs:text-justify" style={{ letterSpacing: '-0.04em', lineHeight: '1.4' }}>
                                From concept to completion, our projects showcase our dedication to delivering real, lasting value. Browse through our portfolio to see the developments that define our expertise and vision.
                            </p>
                        </FadeOnScroll>
                    </div>
                </div>

                {/* Tabs Section */}
                <FadeOnScroll direction="up" distance={40}>
                    <div className="flex items-center gap-4 mb-12">
                        {/* Tab Buttons */}
                        <div className="flex bg-gray-100 rounded-full p-2 gap-2">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`rounded-full font-poppins transition-all duration-300 ${activeTab === tab.id
                                        ? "bg-white text-black shadow-md"
                                        : "text-gray-500 hover:text-gray-700"
                                        }`}
                                    style={{
                                        minWidth: '120px',
                                        height: '47px',
                                        fontSize: '15px',
                                        fontWeight: '500',
                                        lineHeight: '47px',
                                        letterSpacing: '-0.02em',
                                        padding: '0 24px'
                                    }}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>

                        {/* India Flag */}
                        <div className="ml-auto">
                            <button
                                type="button"
                                className="inline-flex items-center rounded overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200"
                                onClick={() => setShowCountryPopup(true)}
                                aria-expanded={showCountryPopup}
                            >
                                <img
                                    src="/in.svg"
                                    alt="India"
                                    className="w-12 h-8 object-cover"
                                />
                            </button>
                        </div>
                    </div>
                </FadeOnScroll>

                {showCountryPopup && (
                    <div
                        className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center"
                        onClick={() => setShowCountryPopup(false)}
                    >
                        <div
                            className="h-screen w-screen flex flex-col bg-white shadow-2xl overflow-hidden border border-gray-200 lg:px-24 sm:px-6 py-4"
                            onClick={(event) => event.stopPropagation()}
                        >
                            <div className="flex items-center justify-between px-6 pt-16 py-4 border-b border-gray-200">
                                <div>
                                    <p className="text-sm uppercase tracking-[0.24em] text-gray-500">Visit Another Country or Region</p>
                                    <h2 className="mt-3 text-3xl font-semibold text-[#0F2B26]">Choose a region</h2>
                                </div>
                                <button
                                    type="button"
                                    className="text-gray-500 hover:text-gray-900 transition-colors duration-200"
                                    onClick={() => setShowCountryPopup(false)}
                                    aria-label="Close country selector"
                                >
                                    ✕
                                </button>
                            </div>
                            <div className="flex-1 min-h-0 overflow-y-auto p-6 sm:p-8 space-y-4 popup-scrollbar">
                                {regions.map((region) => (
                                    <div key={region.name} className="rounded-3xl border border-gray-200 overflow-hidden">
                                        <button
                                            type="button"
                                            className="w-full flex items-center justify-between px-5 py-4 bg-gray-50 hover:bg-gray-100 text-left"
                                            onClick={() => setActiveRegion(activeRegion === region.name ? null : region.name)}
                                        >
                                            <span className="text-lg font-medium text-[#0F2B26]">{region.name}</span>
                                            <span className="text-2xl font-semibold text-gray-600">{activeRegion === region.name ? '−' : '+'}</span>
                                        </button>
                                        {activeRegion === region.name && (
                                            <div className="px-5 pb-5 pt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                                                {region.countries.map((country) => (
                                                    <button
                                                        key={country}
                                                        type="button"
                                                        className="text-left rounded-2xl px-4 py-3 bg-white border border-gray-200 hover:bg-iotc-gold/10 transition-colors duration-200 text-sm text-[#0F2B26]"
                                                        onClick={() => {
                                                            setShowCountryPopup(false);
                                                            setActiveRegion(region.name);
                                                        }}
                                                    >
                                                        {country}
                                                    </button>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* Content Area */}
                <FadeOnScroll direction="up" distance={40} delay={100}>
                    <div className="mb-20">
                        {activeTab === "completed" && (
                            <div>
                                {/* Project Grid */}
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                    {/* Left Column */}
                                    <div className="flex flex-col gap-6">
                                        {/* Main Project Card */}
                                        <div className="relative h-[717px] overflow-hidden group">
                                            <img
                                                src="/porfolio_image_6.webp"
                                                alt="Mozhi Project"
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/60 transition-colors duration-300"></div>
                                            <div className="absolute inset-0 p-8 flex flex-col justify-between text-white opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                                <div>
                                                    <h2 className="text-4xl font-sf-pro font-[300] mb-4">Mozhi</h2>
                                                    <p className="text-lg mb-2">Koyembedu, Chennai</p>
                                                    <p className="text-base opacity-90 max-w-md">
                                                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
                                                    </p>
                                                </div>
                                                <div className="space-y-3">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-8 h-8 rounded-full bg-gray-400"></div>
                                                        <span className="text-base">Spec 1</span>
                                                    </div>
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-8 h-8 rounded-full bg-gray-400"></div>
                                                        <span className="text-base">Spec 2</span>
                                                    </div>
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-8 h-8 rounded-full bg-gray-400"></div>
                                                        <span className="text-base">Spec 3</span>
                                                    </div>
                                                </div>
                                                <div className="flex justify-end">
                                                    <a href="#" className="text-white hover:text-iotc-gold transition-colors duration-300">
                                                        View Project
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Bottom Left Image */}
                                        <div className="relative h-[663px] overflow-hidden group">
                                            <img
                                                src="/portfolio_image.webp"
                                                alt="Project"
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/60 transition-colors duration-300"></div>
                                            <div className="absolute inset-0 p-8 flex flex-col justify-between text-white opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                                <div>
                                                    <h2 className="text-4xl font-sf-pro font-[300] mb-4">Mozhi</h2>
                                                    <p className="text-lg mb-2">Koyembedu, Chennai</p>
                                                    <p className="text-base opacity-90 max-w-md">
                                                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
                                                    </p>
                                                </div>
                                                <div className="space-y-3">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-8 h-8 rounded-full bg-gray-400"></div>
                                                        <span className="text-base">Spec 1</span>
                                                    </div>
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-8 h-8 rounded-full bg-gray-400"></div>
                                                        <span className="text-base">Spec 2</span>
                                                    </div>
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-8 h-8 rounded-full bg-gray-400"></div>
                                                        <span className="text-base">Spec 3</span>
                                                    </div>
                                                </div>
                                                <div className="flex justify-end">
                                                    <a href="#" className="text-white hover:text-iotc-gold transition-colors duration-300">
                                                        View Project
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="relative h-[447px] overflow-hidden group">
                                            <img
                                                src="/portfolio_image_2.webp"
                                                alt="Project 2"
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/60 transition-colors duration-300"></div>
                                            <div className="absolute inset-0 p-8 flex flex-col justify-between text-white opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                                <div>
                                                    <h2 className="text-4xl font-sf-pro font-[300] mb-4">Mozhi</h2>
                                                    <p className="text-lg mb-2">Koyembedu, Chennai</p>
                                                    <p className="text-base opacity-90 max-w-md">
                                                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
                                                    </p>
                                                </div>
                                                <div className="space-y-3">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-8 h-8 rounded-full bg-gray-400"></div>
                                                        <span className="text-base">Spec 1</span>
                                                    </div>
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-8 h-8 rounded-full bg-gray-400"></div>
                                                        <span className="text-base">Spec 2</span>
                                                    </div>
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-8 h-8 rounded-full bg-gray-400"></div>
                                                        <span className="text-base">Spec 3</span>
                                                    </div>
                                                </div>
                                                <div className="flex justify-end">
                                                    <a href="#" className="text-white hover:text-iotc-gold transition-colors duration-300">
                                                        View Project
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right Column - Three Images */}
                                    <div className="flex flex-col gap-6">
                                        <div className="relative h-[447px] overflow-hidden group">
                                            <img
                                                src="/portfolio_image_3.webp"
                                                alt="Project 3"
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/60 transition-colors duration-300"></div>
                                            <div className="absolute inset-0 p-8 flex flex-col justify-between text-white opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                                <div>
                                                    <h2 className="text-4xl font-sf-pro font-[300] mb-4">Mozhi</h2>
                                                    <p className="text-lg mb-2">Koyembedu, Chennai</p>
                                                    <p className="text-base opacity-90 max-w-md">
                                                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
                                                    </p>
                                                </div>
                                                <div className="space-y-3">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-8 h-8 rounded-full bg-gray-400"></div>
                                                        <span className="text-base">Spec 1</span>
                                                    </div>
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-8 h-8 rounded-full bg-gray-400"></div>
                                                        <span className="text-base">Spec 2</span>
                                                    </div>
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-8 h-8 rounded-full bg-gray-400"></div>
                                                        <span className="text-base">Spec 3</span>
                                                    </div>
                                                </div>
                                                <div className="flex justify-end">
                                                    <a href="#" className="text-white hover:text-iotc-gold transition-colors duration-300">
                                                        View Project
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="relative h-[663px] overflow-hidden group">
                                            <img
                                                src="/portfolio_image_4.webp"
                                                alt="Project 4"
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/60 transition-colors duration-300"></div>
                                            <div className="absolute inset-0 p-8 flex flex-col justify-between text-white opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                                <div>
                                                    <h2 className="text-4xl font-sf-pro font-[300] mb-4">Mozhi</h2>
                                                    <p className="text-lg mb-2">Koyembedu, Chennai</p>
                                                    <p className="text-base opacity-90 max-w-md">
                                                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
                                                    </p>
                                                </div>
                                                <div className="space-y-3">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-8 h-8 rounded-full bg-gray-400"></div>
                                                        <span className="text-base">Spec 1</span>
                                                    </div>
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-8 h-8 rounded-full bg-gray-400"></div>
                                                        <span className="text-base">Spec 2</span>
                                                    </div>
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-8 h-8 rounded-full bg-gray-400"></div>
                                                        <span className="text-base">Spec 3</span>
                                                    </div>
                                                </div>
                                                <div className="flex justify-end">
                                                    <a href="#" className="text-white hover:text-iotc-gold transition-colors duration-300">
                                                        View Project
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="relative h-[717px] overflow-hidden group">
                                            <img
                                                src="/portfolio_image_5.webp"
                                                alt="Project 5"
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/60 transition-colors duration-300"></div>
                                            <div className="absolute inset-0 p-8 flex flex-col justify-between text-white opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                                <div>
                                                    <h2 className="text-4xl font-sf-pro font-[300] mb-4">Mozhi</h2>
                                                    <p className="text-lg mb-2">Koyembedu, Chennai</p>
                                                    <p className="text-base opacity-90 max-w-md">
                                                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
                                                    </p>
                                                </div>
                                                <div className="space-y-3">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-8 h-8 rounded-full bg-gray-400"></div>
                                                        <span className="text-base">Spec 1</span>
                                                    </div>
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-8 h-8 rounded-full bg-gray-400"></div>
                                                        <span className="text-base">Spec 2</span>
                                                    </div>
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-8 h-8 rounded-full bg-gray-400"></div>
                                                        <span className="text-base">Spec 3</span>
                                                    </div>
                                                </div>
                                                <div className="flex justify-end">
                                                    <a href="#" className="text-white hover:text-iotc-gold transition-colors duration-300">
                                                        View Project
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {activeTab === "ongoing" && (
                            <div className="text-center py-20">
                                <p className="text-2xl text-gray-400">Ongoing projects will be displayed here</p>
                            </div>
                        )}
                        {activeTab === "upcoming" && (
                            <div className="text-center py-20">
                                <p className="text-2xl text-gray-400">Upcoming projects will be displayed here</p>
                            </div>
                        )}
                    </div>
                </FadeOnScroll>
            </main>

            <Footer />
        </div>
    );
}
