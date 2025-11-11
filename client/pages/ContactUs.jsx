import Header from "../components/Header";
import Footer from "../components/Footer";
import World from "./World";
import ContactFrom from "./contact/ContactForm";
import HexagonWithPopup from "./contact/HexagonWithPopup";
import { useEffect, useState, useRef } from "react";

export default function ContactUs() {
  const [size, setSize] = useState(11);
  const [selectedCountry, setSelectedCountry] = useState("Netherlands");
  const addressRef = useRef(null); // ✅ reference for the address section

  // country data
  const countryData = {
    Netherlands: {
      title: "IOTC Real Asset B.V. ",
      tagline: "We are always happy to assist you",
      email: "nl@iotc-group.com",
      // address split into lines for explicit <br/> rendering
      address: [
        "Lage Ham 182,",
        "5102 AE Dongen,",
        "The Netherlands",
      ],
      number: "+311 6224 2792",
    },
    India: {
      title: "IOTC Real Asset India Private Limited",
      tagline: "We are always happy to assist you",
      email: "ind@iotc-group.com",
      address: [
        "No.4/22,23,",
        "Anugraha Apts, Ground floor,",
        " Sakthi Nagar 5th street, ",
        "Gill Nagar, Choolaimedu,",
        "Chennai – 600094,",
        "India",
      ],
      number: "+91 88075 16650",
    },
    SriLanka: {
      title: "IOTC Real Asset Private Limited",
      tagline: "We are always happy to assist you",
      email: "lk@iotc-group.com",
      address: ["No.28, Battaramulla Road,", "Kotte,", "Sri Lanka"],
      number: "+94 77 1234567",
    },
    Luxembourg: {
      title: "IOTC Real Asset",
      tagline: "We are always happy to assist you",
      email: "lu@iotc-ra.com",
      address: ["Rue Schiller 9,",
        "L-2519, Luxembourg,", " Grand-Duché de Luxembourg"],
      number: "+352 2767 6012",
    },
    UK: {
      title: "IOTC Real Asset",
      tagline: "We are always happy to assist you",
      email: "lu@iotc-ra.com",
      address: ["Rue Schiller 9,",
        "L-2519, Luxembourg,", " Grand-Duché de Luxembourg"],
      number: "+352 2767 6012",
    },
  };

  // Resize listener
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSize(3.5);
      } else if (window.innerWidth <= 768) {
        setSize(6);
      }
      else if (window.innerWidth <= 1024) {
        setSize(7.5);
      } else if (window.innerWidth <= 1280) {
        setSize(11);
      } else if (window.innerWidth <= 1536) {
        setSize(12);
      } else {
        setSize(20);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ scroll handler
  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    // scroll to address section smoothly
    addressRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="lg:pt-32 3xs:pt-24 pb-16 relative">
        <div className="lg:px-12 3xs:px-5 lg:pb-14">
          <div className="flex lg:flex-row 3xs:flex-col justify-between">
            <p
              className="2xl:text-[500%] lg:text-[350%] 3xs:text-[200%] font-[300] font-sf-pro lg:mb-8 3xs:mb-4 mt-[3%] xl:mt-[1%]"
              style={{
                cursor: "default",
                lineHeight: "1.2",
              }}
            >
              Discover Global
            </p>
            <div className="mb-8 lg:w-[60%] lg:text-left 3xs:text-justify">
              <h2
                className="2xl:text-[250%] lg:text-[150%] 3xs:text-[100%] text-[#6C6C6C] font-normal lg:mt-8 mb-4"
                style={{
                  cursor: "default",
                  lineHeight: "1.5",
                  letterSpacing: "-0.035em",
                }}
              >
                We're Operating across Europe and South Asia Including The
                Netherlands, Luxembourg, Belgium, France, UK, India, and Sri
                Lanka
              </h2>
            </div>
          </div>
        </div>

        {/* 🌍 World Map Section */}
        <div className=" w-full max-w-[2500px] mx-auto mb-16 aspect-[3/1.4] relative">
          <img className="absolute top-0 left-0 w-full h-full object-contain" src="/pixel-world/world.svg" alt=""
          />

          {/* Netherlands */}
          <div
            className="absolute 3xs:hidden xl:block 2xl:hidden"
            style={{ top: "30.8%", left: "47.6%" }}
            onClick={() => handleCountrySelect("Netherlands")}
          >
            <HexagonWithPopup
              title="IOTC Real Asset B.V."
              content={<span>Netherlands</span>}
              size={size}
              cardPosition="top"
            />
          </div>
          <div
            className="absolute md:hidden 3xs:block"
            style={{ top: "24.3%", left: "47.6%" }}
            onClick={() => handleCountrySelect("Netherlands")}
          >
            <HexagonWithPopup
              title="IOTC Real Asset B.V."
              content={<span>Netherlands</span>}
              size={size}
              cardPosition="top"
            />
          </div>
          <div
            className="absolute xl:hidden 3xs:hidden lg:block"
            style={{ top: "30.5%", left: "47.7%" }}
            onClick={() => handleCountrySelect("Netherlands")}
          >
            <HexagonWithPopup
              title="IOTC Real Asset B.V."
              content={<span>Netherlands</span>}
              size={size}
              cardPosition="top"
            />
          </div>
          <div
            className="absolute 3xs:hidden  2xl:block"
            style={{ top: "32%", left: "47.7%" }}
            onClick={() => handleCountrySelect("Netherlands")}
          >
            <HexagonWithPopup
              title="IOTC Real Asset B.V."
              content={<span>Netherlands</span>}
              size={size}
              cardPosition="top"
            />
          </div>

          <div
            className="absolute 3xs:hidden xl:block 2xl:hidden"
            style={{ top: "28.1%", left: "46.9%" }}
            onClick={() => handleCountrySelect("Luxembourg")}
          >
            <HexagonWithPopup
              title="IOTC Real Asset B.V."
              content={<span>Luxembourg</span>}
              size={size}
              cardPosition="top"
            />
          </div>
          <div
            className="absolute md:hidden 3xs:block"
            style={{ top: "21.6%", left: "46.9%" }}
            onClick={() => handleCountrySelect("Luxembourg")}
          >
            <HexagonWithPopup
              title="IOTC Real Asset B.V."
              content={<span>Luxembourg</span>}
              size={size}
              cardPosition="top"
            />
          </div>
          <div
            className="absolute xl:hidden 3xs:hidden lg:block"
            style={{ top: "27.7%", left: "46.9%" }}
            onClick={() => handleCountrySelect("Luxembourg")}
          >
            <HexagonWithPopup
              title="IOTC Real Asset B.V."
              content={<span>Luxembourg</span>}
              size={size}
              cardPosition="top"
            />
          </div>
          <div
            className="absolute 3xs:hidden  2xl:block"
            style={{ top: "29%", left: "47%" }}
            onClick={() => handleCountrySelect("Luxembourg")}
          >
            <HexagonWithPopup
              title="IOTC Real Asset B.V."
              content={<span>Luxembourg</span>}
              size={size}
              cardPosition="top"
            />
          </div>

          <div
            className="absolute 3xs:hidden xl:block 2xl:hidden"
            style={{ top: "25.2%", left: "44.8%" }}
            onClick={() => handleCountrySelect("UK")}
          >
            <HexagonWithPopup
              title="IOTC Real Asset B.V."
              content={<span>UK</span>}
              size={size - 2}
              cardPosition="top"
            />
          </div>
          <div
            className="absolute md:hidden 3xs:block"
            style={{ top: "18.9%", left: "44.6%" }}
            onClick={() => handleCountrySelect("UK")}
          >
            <HexagonWithPopup
              title="IOTC Real Asset B.V."
              content={<span>UK</span>}
              size={size}
              cardPosition="top"
            />
          </div>
          <div
            className="absolute xl:hidden 3xs:hidden lg:block"
            style={{ top: "24.8%", left: "44.8%" }}
            onClick={() => handleCountrySelect("UK")}
          >
            <HexagonWithPopup
              title="IOTC Real Asset B.V."
              content={<span>UK</span>}
              size={size - 2}
              cardPosition="top"
            />
          </div>
          <div
            className="absolute 3xs:hidden  2xl:block"
            style={{ top: "26.4%", left: "44.8%" }}
            onClick={() => handleCountrySelect("UK")}
          >
            <HexagonWithPopup
              title="IOTC Real Asset B.V."
              content={<span>UK</span>}
              size={size - 2}
              cardPosition="top"
            />
          </div>

          {/* India */}
          <div
            className="absolute xl:block 3xs:hidden 2xl:hidden"
            style={{ top: "45.8%", left: "65.9%" }}
            onClick={() => handleCountrySelect("India")}
          >
            <HexagonWithPopup
              title="IOTC Real Asset B.V."
              content={<span>India</span>}
              size={size}
              cardPosition="top"
            />
          </div>
          <div
            className="absolute md:hidden 3xs:block"
            style={{ top: "39.3%", left: "66%" }}
            onClick={() => handleCountrySelect("India")}
          >
            <HexagonWithPopup
              title="IOTC Real Asset B.V."
              content={<span>India</span>}
              size={size}
              cardPosition="top"
            />
          </div>
          <div
            className="absolute xl:hidden 3xs:hidden lg:block"
            style={{ top: "45.5%", left: "66%" }}
            onClick={() => handleCountrySelect("India")}
          >
            <HexagonWithPopup
              title="IOTC Real Asset B.V."
              content={<span>India</span>}
              size={size}
              cardPosition="top"
            />
          </div>
          <div
            className="absolute lg:hidden 3xs:hidden md:block"
            style={{ top: "43.5%", left: "66%" }}
            onClick={() => handleCountrySelect("India")}
          >
            <HexagonWithPopup
              title="IOTC Real Asset B.V."
              content={<span>India</span>}
              size={size}
              cardPosition="top"
            />
          </div>
          <div
            className="absolute 3xs:hidden 2xl:block"
            style={{ top: "47%", left: "66%" }}
            onClick={() => handleCountrySelect("India")}
          >
            <HexagonWithPopup
              title="IOTC Real Asset B.V."
              content={<span>India</span>}
              size={size}
              cardPosition="top"
            />
          </div>

          {/* Sri Lanka */}
          <div
            className="absolute xl:block 3xs:hidden 2xl:hidden"
            style={{ top: "57.4%", left: "67.6%" }}
            onClick={() => handleCountrySelect("SriLanka")}
          >
            <HexagonWithPopup
              title="IOTC Real Asset B.V."
              content={<span>Sri Lanka</span>}
              size={size}
              cardPosition="top"
            />
          </div>
          <div
            className="absolute xl:hidden 3xs:hidden lg:block"
            style={{ top: "57.3%", left: "67.6%" }}
            onClick={() => handleCountrySelect("SriLanka")}
          >
            <HexagonWithPopup
              title="IOTC Real Asset B.V."
              content={<span>Sri langa</span>}
              size={size}
              cardPosition="top"
            />
          </div>
          <div
            className="absolute md:hidden 3xs:block"
            style={{ top: "51%", left: "67.7%" }}
            onClick={() => handleCountrySelect("SriLanka")}
          >
            <HexagonWithPopup
              title="IOTC Real Asset B.V."
              content={<span>Sri Lanka</span>}
              size={size}
              cardPosition="top"
            />
          </div>
          <div
            className="absolute lg:hidden 3xs:hidden md:block"
            style={{ top: "55%", left: "67.8%" }}
            onClick={() => handleCountrySelect("SriLanka")}
          >
            <HexagonWithPopup
              title="IOTC Real Asset B.V."
              content={<span>Sri langa</span>}
              size={size}
              cardPosition="top"
            />
          </div>
          <div
            className="absolute 3xs:hidden 2xl:block"
            style={{ top: "58.5%", left: "67.6%" }}
            onClick={() => handleCountrySelect("SriLanka")}
          >
            <HexagonWithPopup
              title="IOTC Real Asset B.V."
              content={<span>Sri langa</span>}
              size={size}
              cardPosition="top"
            />
          </div>
        </div>


        {/* 📍 Dynamic Country Info Section */}
        <section
          ref={addressRef} // ✅ reference target
          className="w-full p-[2%] pb-[2%] bg-[#707A87]/5 relative 2xl:mt-[5%] lg:mt-[5%]"
        >
          <div className="absolute w-[20%] bottom-0 left-[4%] opacity-5">
            <img src="/pixel-world/IOTC Real Asset logo blue 1 (1).png" alt="" />
          </div>
          <div>
            <p className="pb-8 2xl:text-[350%] lg:text-[250%] 3xs:text-[200%] font-normal">
              {countryData[selectedCountry].tagline}
            </p>
            <div className="flex justify-between lg:flex-row 3xs:flex-col gap-6">
              <p className="2xl:text-[250%] lg:text-[180%] 3xs:text-[130%] font-[300] font-sf-pro">
                {countryData[selectedCountry].title}
              </p>
              <div className="flex flex-col lg:w-[40%] lg:ml-4">
                <p className="2xl:text-[250%] lg:text-[180%] 3xs:text-[130%] font-medium lg:mb-2">
                  Email Address
                </p>
                <p className="2xl:text-[250%] lg:text-[180%] 3xs:text-[130%] font-normal lg:mt-4 lg:mb-2">
                  {countryData[selectedCountry].email}
                </p>
                <p className="2xl:text-[250%] lg:text-[180%] 3xs:text-[130%] font-medium mt-4 lg:mb-2">Address</p>
                <p className="2xl:text-[250%] lg:text-[180%] 3xs:text-[130%] font-normal lg:mt-4 lg:mb-2">
                  {countryData[selectedCountry].address.map((line, idx) => (
                    <span key={idx}>
                      {line}
                      {idx < countryData[selectedCountry].address.length - 1 && <br />}
                    </span>
                  ))}
                </p>
              </div>
              <div className="flex flex-col 2xl:w-[20%] lg:ml-0">
                <p className="2xl:text-[250%] lg:text-[180%] 3xs:text-[130%] font-medium lg:mt-2 lg:mb-2">
                  Phone
                </p>
                <p className="2xl:text-[250%] lg:text-[180%] 3xs:text-[130%] font-normal lg:mt-4 lg:mb-2">
                  {countryData[selectedCountry].number}
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* 💬 Contact Section */}
        <section className="flex lg:flex-row 3xs:flex-col justify-between w-full p-[5%] pb-0">
          <div className="flex flex-col lg:w-[80%] mt-8">
            <p className="lg:text-[280%] 3xs:text-[180%] font-[300] font-sf-pro">
              Get in touch with us.
            </p>
            <p className="lg:text-[180%] 3xs:text-[150%] font-normal mt-4 mb-2 ">
              Have questions? We’re just a message away.
            </p>
          </div>
          {/* <div className="flex lg:flex-col 3xs:flex-row justify-end gap-6">
            <img src="/fb.png" alt="" />
            <img src="/insta (1).png" alt="" />
            <img src="/twitter.png" alt="" />
          </div> */}
        </section>

        <section>
          <ContactFrom />
        </section>
      </main>

      <Footer />
    </div>
  );
}
