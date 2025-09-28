export default function Footer() {
  const footerLinks = [
    { label: 'About Us', href: '#' },
    { label: 'ESG', href: '#' },
    { label: 'Portfolio', href: '#' },
    { label: 'News letter', href: '#' },
  ];

  return (
    <footer className="relative bg-iotc-section rounded-t-[100px] overflow-hidden">
      {/* Background Logo/Graphic */}
      <div className="absolute right-0 top-0 w-full max-w-2xl h-full opacity-20">
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/96f28aee22f55281b153e5a2abce39224a779f8a?width=1294" 
          alt="IOTC Logo Background"
          className="w-full h-full object-contain object-right"
        />
      </div>

      <div className="relative z-10 px-4 md:px-16 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          {/* Main CTA Section */}
          <div className="mb-16">
            <div className="max-w-4xl">
              <h2 className="text-white font-sf-pro text-4xl md:text-5xl lg:text-[56px] font-medium leading-tight md:leading-[80px] tracking-[-1.12px] mb-12">
                Ready to invest in something real ?<br />
                Get in touch with us.
              </h2>
              
              <button className="inline-flex items-center justify-center px-8 py-4 bg-iotc-gold hover:bg-iotc-gold/90 rounded-[29px] text-white font-sf-pro text-base font-medium transition-colors duration-300">
                Contact Us
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="mb-16">
            <nav className="flex flex-wrap gap-6 md:gap-10 justify-center">
              {footerLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-white font-sf-pro-text text-base hover:text-iotc-gold transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-white/8 pt-10">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
              {/* Logo */}
              <div className="flex items-center space-x-6">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/90edf53339fc047cfd5fec42fd7b81c0921f640c?width=76" 
                  alt="IOTC Real Asset"
                  className="w-10 h-[69px]"
                />
                <div className="text-white font-inter text-base font-normal leading-[26px]">
                  © Copyright 2025, All Rights Reserved
                </div>
              </div>

              {/* Social Media & Legal Links */}
              <div className="flex items-center space-x-8">
                {/* Legal Links */}
                <div className="text-white font-inter text-sm font-normal leading-[26px] text-right">
                  Privacy Policy&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Terms & Conditions
                </div>

                {/* Social Media Icons */}
                <div className="flex items-center space-x-6">
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
                  <a href="#" className="text-white hover:text-iotc-gold transition-colors duration-200">
                    <svg className="w-5 h-5" viewBox="0 0 17 17" fill="none">
                      <path 
                        d="M58 16.9995V10.81C58 7.49343 56.2023 5.95024 53.8053 5.95024C51.871 5.95024 51.004 6.99804 50.5211 7.73354V6.20395H46.8767C46.925 7.21722 46.8767 16.9995 46.8767 16.9995H50.5211V10.9706C50.5211 10.6489 50.5444 10.3261 50.6411 10.0959C50.9041 9.45092 51.5039 8.78343 52.5101 8.78343C53.8292 8.78343 54.3562 9.77316 54.3562 11.2243V17L58 16.9995ZM43.0373 4.73033C44.3076 4.73033 45.0997 3.90067 45.0997 2.86438C45.0763 1.8056 44.3081 1 43.0618 1C41.8155 1 41 1.80507 41 2.86438C41 3.90067 41.791 4.73033 43.0145 4.73033H43.0373ZM44.8595 16.9995V6.20395H41.2157V16.9995H44.8595Z" 
                        fill="currentColor"
                        transform="scale(0.29)"
                      />
                    </svg>
                  </a>

                  {/* Instagram */}
                  <a href="#" className="text-white hover:text-iotc-gold transition-colors duration-200">
                    <svg className="w-5 h-5" viewBox="0 0 18 18" fill="none">
                      <path 
                        d="M90 1.62651C92.3855 1.62651 92.7108 1.62651 93.6867 1.62651C94.5542 1.62651 94.988 1.84337 95.3133 1.95181C95.747 2.16868 96.0723 2.27711 96.3976 2.60241C96.7229 2.92771 96.9398 3.25301 97.0482 3.68675C97.1566 4.01205 97.2651 4.44578 97.3735 5.31325C97.3735 6.28916 97.3735 6.50602 97.3735 9C97.3735 11.494 97.3735 11.7108 97.3735 12.6867C97.3735 13.5542 97.1566 13.988 97.0482 14.3133C96.8313 14.747 96.7229 15.0723 96.3976 15.3976C96.0723 15.7229 95.747 15.9398 95.3133 16.0482C94.988 16.1566 94.5542 16.2651 93.6867 16.3735C92.7108 16.3735 92.494 16.3735 90 16.3735C87.506 16.3735 87.2892 16.3735 86.3133 16.3735C85.4458 16.3735 85.012 16.1566 84.6867 16.0482C84.253 15.8313 83.9277 15.7229 83.6024 15.3976C83.2771 15.0723 83.0602 14.747 82.9518 14.3133C82.8434 13.988 82.7349 13.5542 82.6265 12.6867C82.6265 11.7108 82.6265 11.494 82.6265 9C82.6265 6.50602 82.6265 6.28916 82.6265 5.31325C82.6265 4.44578 82.8434 4.01205 82.9518 3.68675C83.1687 3.25301 83.2771 2.92771 83.6024 2.60241C83.9277 2.27711 84.253 2.06024 84.6867 1.95181C85.012 1.84337 85.4458 1.73494 86.3133 1.62651C87.2892 1.62651 87.6145 1.62651 90 1.62651ZM90 0C87.506 0 87.2892 0 86.3133 0C85.3374 0 84.6867 0.216868 84.1446 0.433736C83.6024 0.650603 83.0602 0.975904 82.5181 1.51807C81.9759 2.06024 81.759 2.49398 81.4337 3.14458C81.2169 3.68675 81.1084 4.33735 81 5.31325C81 6.28916 81 6.61446 81 9C81 11.494 81 11.7108 81 12.6867C81 13.6627 81.2169 14.3133 81.4337 14.8554C81.6506 15.3976 81.9759 15.9398 82.5181 16.4819C83.0602 17.0241 83.494 17.241 84.1446 17.5663C84.6867 17.7831 85.3374 17.8916 86.3133 18C87.2892 18 87.6145 18 90 18C92.3855 18 92.7108 18 93.6867 18C94.6627 18 95.3133 17.7831 95.8554 17.5663C96.3976 17.3494 96.9398 17.0241 97.4819 16.4819C98.0241 15.9398 98.241 15.506 98.5663 14.8554C98.7831 14.3133 98.8916 13.6627 99 12.6867C99 11.7108 99 11.3855 99 9C99 6.61446 99 6.28916 99 5.31325C99 4.33735 98.7831 3.68675 98.5663 3.14458C98.3494 2.60241 98.0241 2.06024 97.4819 1.51807C96.9398 0.975904 96.506 0.759037 95.8554 0.433736C95.3133 0.216868 94.6627 0.108434 93.6867 0C92.7108 0 92.494 0 90 0Z" 
                        fill="currentColor"
                        transform="scale(0.2)"
                      />
                      <path 
                        d="M90 4.33735C87.3976 4.33735 85.3373 6.39759 85.3373 9C85.3373 11.6024 87.3976 13.6627 90 13.6627C92.6024 13.6627 94.6627 11.6024 94.6627 9C94.6627 6.39759 92.6024 4.33735 90 4.33735ZM90 12.0361C88.3735 12.0361 86.9639 10.7349 86.9639 9C86.9639 7.3735 88.2651 5.96386 90 5.96386C91.6265 5.96386 93.0361 7.26506 93.0361 9C93.0361 10.6265 91.6265 12.0361 90 12.0361Z" 
                        fill="currentColor"
                        transform="scale(0.2)"
                      />
                      <path 
                        d="M94.7711 5.31325C95.3699 5.31325 95.8554 4.82778 95.8554 4.22892C95.8554 3.63005 95.3699 3.14458 94.7711 3.14458C94.1722 3.14458 93.6867 3.63005 93.6867 4.22892C93.6867 4.82778 94.1722 5.31325 94.7711 5.31325Z" 
                        fill="currentColor"
                        transform="scale(0.2)"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}