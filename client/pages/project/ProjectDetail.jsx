import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function ProjectDetail() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("amenities");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Project data - in real app, fetch based on id
  const projects = {
    aethrina: {
      name: "Aethrina",
      location: "Thalawathugoda",
      city: "Sri Lanka",
      tagline: "Mixed-use excellence in the heart of Thalawathugoda",
      heroImage: "/Aethrina_3.webp",
      assetType: "Residential + Commercial",
      status: "Pre-launch",
      landArea: "12,000 sq.ft",
      builtUpArea: "68,571 sq.ft",
      units: "40 units (3 Bed Rooms)",
      floors: "10 floors",
      features: [
        {
          title: "Prime Location",
          description: "Conveniently located near Hemas Hospital (0.20 km), iGate College, and Maharagama Railway Station."
        },
        {
          title: "Total Land Area",
          description: "12,000 sq.ft of prime real estate in Thalawathugoda."
        },
        {
          title: "Built-up Area",
          description: "68,571 sq.ft of thoughtfully designed mixed-use space."
        },
        {
          title: "Residential Units",
          description: "40 spacious 3-bedroom units across 10 floors."
        },
        {
          title: "Legal Status",
          description: "Fully approved and ready for development."
        },
        {
          title: "Connectivity",
          description: "Excellent access to healthcare, education, and transportation hubs."
        }
      ]
    },
    agaram: {
      name: "Agaram",
      location: "Koyambedu",
      city: "Chennai, India",
      tagline: "Ascend to new heights of sophistication",
      heroImage: "/Agaram.webp",
      assetType: "Signature 2BHK apartments",
      status: "Under construction",
      landArea: "2,800 sq.ft",
      builtUpArea: "7,500 sq.ft",
      units: "6 units",
      floors: "3 floors",
      features: [
        {
          title: "Metro Connectivity",
          description: "Just 300m from Koyambedu Metro Station for seamless city access."
        },
        {
          title: "Solar Panels",
          description: "Integrated solar energy systems to reduce energy costs and carbon footprint."
        },
        {
          title: "Smart Systems",
          description: "Advanced smart home technology for modern living convenience."
        },
        {
          title: "Prime Location",
          description: "Near CMBT Bus Stand and VR Mall for shopping and entertainment."
        },
        {
          title: "CMDA Approved",
          description: "Fully approved by Chennai Metropolitan Development Authority."
        },
        {
          title: "Signature 2BHK",
          description: "6 premium 2-bedroom apartments designed for contemporary lifestyle."
        }
      ]
    },
    aureum: {
      name: "Aureum",
      location: "Bopitiya Junction, Colombo",
      city: "Sri Lanka",
      tagline: "Eco-luxury destination by the water",
      heroImage: "/aureum_2.webp",
      assetType: "Hospitality (Eco-luxury destination)",
      status: "Under renovation",
      landArea: "7 Acres",
      builtUpArea: "100,000 sq.ft",
      units: "57 Guest Rooms",
      floors: "Multiple buildings",
      features: [
        {
          title: "Waterfront Experience",
          description: "Sea View Rooms and Water Front Chalets with boat transfers via Hamilton Canal."
        },
        {
          title: "Watersports & Recreation",
          description: "Full range of watersports activities and recreational facilities."
        },
        {
          title: "Wellness Center",
          description: "Spa, gym, and Ayurvedic treatment centers for holistic wellness."
        },
        {
          title: "Event Facilities",
          description: "Spacious banquet hall for weddings, conferences, and special events."
        },
        {
          title: "Sustainability Focus",
          description: "Solar panels for energy saving and regular coastline cleaning initiatives."
        },
        {
          title: "SLTDA Approved",
          description: "Approved by Sri Lanka Tourism Development Authority."
        }
      ]
    },
    mamer: {
      name: "Mamer",
      location: "Luxembourg, Europe",
      city: "Luxembourg",
      tagline: "To be Distributed",
      heroImage: "/portfolio_image_4.webp",
      assetType: "Residential",
      status: "To be distributed",
      landArea: "10 kms to Marnier Train Station (on foot)",
      builtUpArea: "4800 sq.ft",
      units: "48",
      floors: "1-3 Bedrooms",
      features: [
        {
          title: "Location Highlights",
          description: "10 kms to Marnier Train Station (on foot), Lyc-ce Manier, 4800 sq.ft built-up area"
        },
        {
          title: "Unit Configuration",
          description: "48 units with 1-3 bedroom options designed for modern living."
        },
        {
          title: "Accessibility",
          description: "Strategic location providing excellent access to major transit hubs and amenities."
        },
        {
          title: "Urban Development",
          description: "Part of a growing residential community in Luxembourg."
        },
        {
          title: "Real Estate Investment",
          description: "European market opportunity in a stable and prosperous location."
        },
        {
          title: "Distribution Timeline",
          description: "Units to be distributed as per project development schedule."
        }
      ]
    }
  };

  const project = projects[id] || projects.aethrina;

  return (
    <div className="bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[60vh] lg:h-[70vh] overflow-hidden w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
        <img
          src={project.heroImage}
          alt={project.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60"></div>

        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-white font-sf-pro text-5xl md:text-7xl lg:text-8xl font-light mb-4">
            {project.name}
          </h1>
          <p className="text-white font-sf-pro text-lg md:text-xl lg:text-2xl font-light">
            {project.location}, {project.city}
          </p>
        </div>
      </section>

      {/* Tagline Section */}
      <section className="py-12 lg:py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-gray-800 font-sf-pro text-2xl md:text-3xl lg:text-4xl font-normal">
            Ascend to new heights of <span className="text-iotc-gold">sophistication</span>
          </h2>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="px-4 md:px-8 lg:px-16 mb-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center">
            <div className="flex bg-gray-100 rounded-full p-2 gap-2">
              <button
                onClick={() => setActiveTab("overview")}
                className={`rounded-full font-poppins transition-all duration-300 ${activeTab === "overview"
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
                Overview
              </button>
              <button
                onClick={() => setActiveTab("amenities")}
                className={`rounded-full font-poppins transition-all duration-300 ${activeTab === "amenities"
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
                Amenities
              </button>
              <button
                onClick={() => setActiveTab("specification")}
                className={`rounded-full font-poppins transition-all duration-300 ${activeTab === "specification"
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
                Specification
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="px-4 md:px-8 lg:px-16 py-12">
        <div className="max-w-6xl mx-auto">
          {activeTab === "overview" && (
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-sf-pro font-medium mb-4">Project Overview</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex justify-between py-3 border-b border-gray-200">
                      <span className="text-gray-600 font-sf-pro">Asset Type:</span>
                      <span className="font-sf-pro font-medium">{project.assetType}</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-gray-200">
                      <span className="text-gray-600 font-sf-pro">Status:</span>
                      <span className="font-sf-pro font-medium">{project.status}</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-gray-200">
                      <span className="text-gray-600 font-sf-pro">Total Land Area:</span>
                      <span className="font-sf-pro font-medium">{project.landArea}</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between py-3 border-b border-gray-200">
                      <span className="text-gray-600 font-sf-pro">Built-up Area:</span>
                      <span className="font-sf-pro font-medium">{project.builtUpArea}</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-gray-200">
                      <span className="text-gray-600 font-sf-pro">Units:</span>
                      <span className="font-sf-pro font-medium">{project.units}</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-gray-200">
                      <span className="text-gray-600 font-sf-pro">Floors:</span>
                      <span className="font-sf-pro font-medium">{project.floors}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "amenities" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-black text-white rounded-2xl p-6 hover:bg-iotc-blue-bg transition-colors duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="font-sf-pro text-xl font-medium">{feature.title}</h3>
                    <svg
                      className="w-6 h-6 flex-shrink-0"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </div>
                  <p className="font-sf-pro text-sm leading-relaxed opacity-90">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          )}

          {activeTab === "specification" && (
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-sf-pro font-medium mb-6">Technical Specifications</h3>
                <div className="bg-gray-50 rounded-2xl p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h4 className="text-lg font-sf-pro font-medium mb-4">Property Details</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between py-2">
                          <span className="text-gray-600">Total Land Area</span>
                          <span className="font-medium">{project.landArea}</span>
                        </div>
                        <div className="flex justify-between py-2">
                          <span className="text-gray-600">Built-up Area</span>
                          <span className="font-medium text-right block">{project.builtUpArea}</span>
                        </div>
                        <div className="flex justify-between py-2">
                          <span className="text-gray-600">Number of Units</span>
                          <span className="font-medium text-right block">{project.units}</span>
                        </div>
                        <div className="flex justify-between py-2">
                          <span className="text-gray-600">Number of Floors</span>
                          <span className="font-medium text-right block">{project.floors}</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h4 className="text-lg font-sf-pro font-medium mb-4">Project Information</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between py-2">
                          <span className="text-gray-600 min-w-[120px]">Asset Type</span>
                          <span className="font-medium  text-right block">{project.assetType}</span>
                        </div>
                        <div className="flex justify-between py-2">
                          <span className="text-gray-600">Current Status</span>
                          <span className="font-medium text-right block">{project.status}</span>
                        </div>
                        <div className="flex justify-between py-2">
                          <span className="text-gray-600 min-w-[120px]">Location</span>
                          <span className="font-medium  text-right block">{project.location}, {project.city}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
