import Header from "../components/Header";
import Footer from "../components/Footer";
import World from "./World";
import ContactFrom from "./contact/ContactForm";

export default function ContactUs() {
  const footerLinks = [
    { label: 'Company', href: '#' },
    { label: 'ESG', href: '#' },
    { label: 'Portfolio', href: '#' },
    { label: 'News letter', href: '#' },
  ];
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-32 pb-16 relative">
        {/* Background Pattern */}


        <div className="px-12 pb-14">
          <div className="flex flex-row justify-between">
            <p className="text-[350%]  font-[300] font-sf-pro mb-8 mt-[3%]"
              style={{
                cursor: "default",
                lineHeight: "1.2",
              }}>Discover Global</p>
            <div className="mb-8 w-[60%]">
              <h2 className="text-[130%] text-[#6C6C6C] font-normal mt-8 mb-4"
                style={{
                  cursor: "default",
                  lineHeight: "1.5",
                  letterSpacing: "-0.035em",
                }}>
                We're Operating across Europe and South Asia  Including The Netherlands, Luxembourg, Belgium, France, UK, India, and Sri Lanka
              </h2>
            </div>
          </div>
        </div>
        <div className="w-full h-[600px] flex items-center justify-center px-8 mb-16">

          <img src="/Group 597.png" alt="" />
        </div>
        <section className="w-full p-[5%] pb-[10%] bg-[#707A87]/5 relative">
          <div className="absolute w-[20%] bottom-0 left-[25%] opacity-5">
            <img src="/IOTC Real Asset logo blue 1 (1).png" alt="" />
          </div>
          <div className="">
            <p className="text-[180%]  font-[300] font-sf-pro">
              The Netherlands
            </p>
            <div className="flex flex-row-3 gap-6">
              <p className="text-[280%] font-normal mt-4 mb-2 w-[50%]">
                We are always happy to assist you
              </p>
              <div className="flex flex-col w-[30%]">
                <p className="text-[130%] font-medium mt-4 mb-2">
                  Email Address
                </p>
                <p className="text-[130%] font-normal mt-4 mb-2">
                  nl@ioct-group.com
                </p>
                <p className="text-[130%] font-medium mt-4 mb-2">
                  Email Address
                </p>
                <p className="text-[130%] font-normal mt-4 mb-2">
                  Lage Ham 182 , 5102 AE Dongen
                  The Netherlands
                </p>
              </div>
              <div className="flex flex-col">
                <p className="text-[130%] font-medium mt-4 mb-2">
                  Number
                </p>
                <p className="text-[130%] font-normal mt-4 mb-2">
                  +31 6 12345678
                </p>
              </div>
            </div>
          </div>
        </section >
        <section className="flex flex-row justify-between w-full p-[5%] pb-0">
          <div className="flex flex-col w-[80%] mt-8">
            <p className="text-[280%]  font-[300] font-sf-pro">
              Get in touch with us.
            </p>
            <p className="text-[180%] font-normal mt-4 mb-2 ">
              Have questions? We’re just a message away.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <img src="/fb.png" alt="" />
            <img src="/insta (1).png" alt="" />
            <img src="/twitter.png" alt="" />
          </div>
        </section>
        <section>
          <ContactFrom></ContactFrom>
        </section>
      </main >
      <footer className="relative bg-iotc-section rounded-t-[40px] md:rounded-t-[100px] overflow-hidden">
        {/* Background Logo/Graphic */}

        <div className="px-4 sm:px-8 md:px-16 pt-10 sm:pt-16 md:pt-15 ">
          <div className="max-w- justify-between flex flex-row mb-12">
            <div>
              <img
                src="/IOTC Real Asset logo white 2.svg"
                alt="IOTC Real Asset"
                className="w-8 h-10 sm:w-10 sm:h-[69px] mb-6"
              />
            </div>
            {/* Navigation Links */}
            <div className="item-center mt-10">
              <nav className="flex flex-wrap gap-2 sm:gap-4 md:gap-10 justify-center items-center">
                {footerLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="text-white font-sf-pro-text text-sm sm:text-base hover:text-iotc-gold transition-colors duration-200 tracking-tight"
                    style={{
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>


            </div>
            {/* Social Media Icons */}
            <div className="flex items-center space-x-4 sm:space-x-1 top-5 bottom-10 right-[-2rem]">
              {/* X/Twitter */}
              <a href="#" className="text-white hover:text-iotc-gold transition-colors duration-200">
                <svg className="w-5 h-4" viewBox="0 0 18 18" fill="none">
                  <path
                    d="M10.8281 7.64L17.4375 0.5H15.75L10.0687 6.62L5.625 0.5H0L6.91875 10.02L0 17.5H1.6875L7.67812 11.04L12.375 17.5H18L10.8281 7.64ZM2.50312 1.63333H4.75312L15.4688 16.3667H13.2188L2.50312 1.63333Z"
                    fill="currentColor"
                  />
                </svg>
              </a>

              {/* LinkedIn */}
              <a href="#" className="text-white hover:text-iotc-gold inline-flex items-center justify-center rounded-sm transition-colors duration-300" style={{ width: '44px', height: '44px' }}>
                <svg className="w-10 h-10" viewBox="0 0 34 34" fill="none">
                  <rect width="34" height="34" rx="2" />
                  <path d="M10.1 14.3h3v9.4h-3v-9.4zm1.5-4.2c1 0 1.7.7 1.7 1.6 0 .9-.7 1.6-1.7 1.6h-.1c-1 0-1.7-.7-1.7-1.6 0-.9.7-1.6 1.7-1.6zm4.2 4.2h2.9v1.3h.1c.4-.7 1.3-1.5 2.7-1.5 2.1 0 3.7 1.4 3.7 4.3v5.3h-3v-4.7c0-1.1-.4-1.8-1.3-1.8-.7 0-1.1.5-1.3 1-.1.2-.1.5-.1.8v4.7h-3v-9.4z" fill="currentColor" />
                </svg>
              </a>

              {/* Instagram */}
              <a href="#" className="text-white hover:text-iotc-gold inline-flex items-center justify-center w-11 h-11 rounded-lg transition-colors duration-300" style={{ width: '20px', height: '44px' }}>
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>

            {/* Footer Bottom */}

          </div>
          <div className="border-t border-gray-600 pt-6 sm:pt-10 pb-10">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
              {/* Logo */}
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
                <div className="text-white font-inter text-xs sm:text-base font-normal leading-[22px] sm:leading-[26px] text-center sm:text-left">
                  © Copyright 2025, All Rights Reserved
                </div>
              </div>

              {/* Social Media & Legal Links */}
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-8">
                {/* Legal Links */}
                <div className="text-white font-inter text-xs sm:text-sm font-normal leading-[22px] sm:leading-[26px] text-center sm:text-right">
                  Privacy Policy&nbsp;&nbsp;&nbsp;&nbsp;Terms & Conditions
                </div>

              </div>
            </div>
          </div>
        </div>
      </footer>
    </div >
  );
}