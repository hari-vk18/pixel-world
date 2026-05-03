import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FadeOnScroll from "../components/FadeOnScroll";
// Removed ResponsiveImage; using direct webp image sources

export default function Portfolio() {
    const [activeTab, setActiveTab] = useState("ongoing");
    const [selectedCountry, setSelectedCountry] = useState("all");
    const [showCountryPopup, setShowCountryPopup] = useState(false);
    const [activeRegion, setActiveRegion] = useState(null);

    const countryFlags = {
        all: { flag: "/world.svg", name: "All Countries" },
        india: { flag: "/in.svg", name: "India" },
        srilanka: { flag: "/Sri_Lanka.svg", name: "Sri Lanka" },
        luxembourg: { flag: "/lu.svg", name: "Luxembourg" }
    };

    const regions = [
        {
            name: 'Asia',
            countries: [
                { name: 'India', code: 'india' },
                { name: 'Sri Lanka', code: 'srilanka' }
            ],
        },
        {
            name: 'Europe',
            countries: [
                { name: 'Luxembourg', code: 'luxembourg' }
            ],
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

                        {/* Country Flag */}
                        <div className="ml-auto">
                            <button
                                type="button"
                                className="inline-flex items-center rounded overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200"
                                onClick={() => setShowCountryPopup(true)}
                                aria-expanded={showCountryPopup}
                            >
                                <img
                                    src={countryFlags[selectedCountry].flag}
                                    alt={countryFlags[selectedCountry].name}
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
                                {/* All Countries Option */}
                                <button
                                    type="button"
                                    className="w-full text-left rounded-2xl px-5 py-4 bg-gray-50 border border-gray-200 hover:bg-iotc-gold/10 transition-colors duration-200"
                                    onClick={() => {
                                        setSelectedCountry('all');
                                        setShowCountryPopup(false);
                                    }}
                                >
                                    <span className="text-lg font-medium text-[#0F2B26]">All Countries</span>
                                </button>

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
                                                        key={country.code}
                                                        type="button"
                                                        className="text-left rounded-2xl px-4 py-3 bg-white border border-gray-200 hover:bg-iotc-gold/10 transition-colors duration-200 text-sm text-[#0F2B26]"
                                                        onClick={() => {
                                                            setSelectedCountry(country.code);
                                                            setShowCountryPopup(false);
                                                            setActiveRegion(null);
                                                        }}
                                                    >
                                                        {country.name}
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
                        {activeTab === "ongoing" && (
                            <div>
                                {/* Project Grid */}
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                    {(selectedCountry === "all" || selectedCountry === "india") && (
                                        <Link to="/project/agaram" className="relative h-[500px] overflow-hidden group">
                                            <img src="/Agaram.webp" alt="Agaram Project" className="w-full h-full object-cover" />
                                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/60 transition-colors duration-300"></div>
                                            <div className="absolute inset-0 p-8 flex flex-col justify-between text-white opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                                <div>
                                                    <h2 className="text-4xl font-sf-pro font-[300] mb-4">Agaram</h2>
                                                    <p className="text-lg mb-2">Koyambedu, Chennai, India</p>
                                                    <p className="text-base opacity-90 max-w-md">Signature 2BHK apartments with solar panels and smart systems near Koyambedu Metro.</p>
                                                </div>
                                                <div className="space-y-3">
                                                    <div className="flex items-center gap-3"><div className="w-8 h-8 rounded-full bg-gray-400"></div><span className="text-base">6 Units</span></div>
                                                    <div className="flex items-center gap-3"><div className="w-8 h-8 rounded-full bg-gray-400"></div><span className="text-base">Solar Panels</span></div>
                                                    <div className="flex items-center gap-3"><div className="w-8 h-8 rounded-full bg-gray-400"></div><span className="text-base">Under Construction</span></div>
                                                </div>
                                                <div className="flex justify-end"><span className="text-white hover:text-iotc-gold transition-colors duration-300">View Project</span></div>
                                            </div>
                                        </Link>
                                    )}
                                    {(selectedCountry === "all" || selectedCountry === "srilanka") && (
                                        <Link to="/project/aureum" className="relative h-[500px] overflow-hidden group">
                                            <img src="/Aureum.webp" alt="Aureum Project" className="w-full h-full object-cover" />
                                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/60 transition-colors duration-300"></div>
                                            <div className="absolute inset-0 p-8 flex flex-col justify-between text-white opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                                <div>
                                                    <h2 className="text-4xl font-sf-pro font-[300] mb-4">Aureum</h2>
                                                    <p className="text-lg mb-2">Colombo, Sri Lanka</p>
                                                    <p className="text-base opacity-90 max-w-md">Eco-luxury hospitality destination with 57 guest rooms, watersports, and wellness facilities.</p>
                                                </div>
                                                <div className="space-y-3">
                                                    <div className="flex items-center gap-3"><div className="w-8 h-8 rounded-full bg-gray-400"></div><span className="text-base">57 Rooms</span></div>
                                                    <div className="flex items-center gap-3"><div className="w-8 h-8 rounded-full bg-gray-400"></div><span className="text-base">7 Acres</span></div>
                                                    <div className="flex items-center gap-3"><div className="w-8 h-8 rounded-full bg-gray-400"></div><span className="text-base">Under Renovation</span></div>
                                                </div>
                                                <div className="flex justify-end"><span className="text-white hover:text-iotc-gold transition-colors duration-300">View Project</span></div>
                                            </div>
                                        </Link>
                                    )}
                                </div>
                            </div>
                        )}
                        {activeTab === "upcoming" && (
                            <div>
                                {/* Project Grid */}
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                    {(selectedCountry === "all" || selectedCountry === "srilanka") && (
                                        <Link to="/project/aethrina" className="relative h-[500px] overflow-hidden group">
                                            <img src="/Aethrina.webp" alt="Aethrina Project" className="w-full h-full object-cover" />
                                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/60 transition-colors duration-300"></div>
                                            <div className="absolute inset-0 p-8 flex flex-col justify-between text-white opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                                <div>
                                                    <h2 className="text-4xl font-sf-pro font-[300] mb-4">Aethrina</h2>
                                                    <p className="text-lg mb-2">Thalawathugoda, Sri Lanka</p>
                                                    <p className="text-base opacity-90 max-w-md">Mixed-use development with 40 residential units and commercial space across 10 floors.</p>
                                                </div>
                                                <div className="space-y-3">
                                                    <div className="flex items-center gap-3"><div className="w-8 h-8 rounded-full bg-gray-400"></div><span className="text-base">40 Units</span></div>
                                                    <div className="flex items-center gap-3"><div className="w-8 h-8 rounded-full bg-gray-400"></div><span className="text-base">10 Floors</span></div>
                                                    <div className="flex items-center gap-3"><div className="w-8 h-8 rounded-full bg-gray-400"></div><span className="text-base">Pre-launch</span></div>
                                                </div>
                                                <div className="flex justify-end"><span className="text-white hover:text-iotc-gold transition-colors duration-300">View Project</span></div>
                                            </div>
                                        </Link>
                                    )}
                                    {(selectedCountry === "all" || selectedCountry === "luxembourg") && (
                                        <Link to="/project/mamer" className="relative h-[500px] overflow-hidden group">
                                            <img src="/portfolio_image_4.webp" alt="Mamer Project" className="w-full h-full object-cover" />
                                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/60 transition-colors duration-300"></div>
                                            <div className="absolute inset-0 p-8 flex flex-col justify-between text-white opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                                <div>
                                                    <h2 className="text-4xl font-sf-pro font-[300] mb-4">Mamer</h2>
                                                    <p className="text-lg mb-2">Luxembourg</p>
                                                    <p className="text-base opacity-90 max-w-md">Premium development in Luxembourg with high-quality construction and modern amenities.</p>
                                                </div>
                                                <div className="space-y-3">
                                                    <div className="flex items-center gap-3"><div className="w-8 h-8 rounded-full bg-gray-400"></div><span className="text-base">Premium Quality</span></div>
                                                    <div className="flex items-center gap-3"><div className="w-8 h-8 rounded-full bg-gray-400"></div><span className="text-base">Modern Design</span></div>
                                                    <div className="flex items-center gap-3"><div className="w-8 h-8 rounded-full bg-gray-400"></div><span className="text-base">Planning Phase</span></div>
                                                </div>
                                                <div className="flex justify-end"><span className="text-white hover:text-iotc-gold transition-colors duration-300">View Project</span></div>
                                            </div>
                                        </Link>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </FadeOnScroll>
            </main>

            <Footer />
        </div>
    );
}
