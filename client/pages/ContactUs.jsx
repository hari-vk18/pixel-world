import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-32 pb-16 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <svg className="absolute left-0 top-16 w-40 h-72 opacity-10" viewBox="0 0 155 281" fill="none">
            <path d="M77.5 137.199L154 93.4209V1L77.5 44.7783V137.199ZM77.5 137.199L1 182.367V280H77.5V137.199Z" stroke="#B89B7A" strokeOpacity="0.3" />
          </svg>
          <svg className="absolute left-60 top-32 w-20 h-36 opacity-10" viewBox="0 0 81 140" fill="none">
            <path d="M80 1L1 46.7671V139L80 94.9797V1Z" stroke="#B89B7A" strokeOpacity="0.3" />
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Content */}
            <div>
              <h1 className="text-iotc-text font-sf-pro text-4xl md:text-5xl font-normal mb-8">
                Contact Us
              </h1>
              <p className="text-iotc-gray font-sf-pro text-lg leading-relaxed mb-8">
                Ready to invest in something real? Get in touch with us to explore opportunities and learn more about our sustainable real estate investments.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-iotc-text font-sf-pro text-xl font-medium mb-2">Email</h3>
                  <p className="text-iotc-gray">info@iotcrealasset.com</p>
                </div>
                <div>
                  <h3 className="text-iotc-text font-sf-pro text-xl font-medium mb-2">Phone</h3>
                  <p className="text-iotc-gray">+1 (555) 123-4567</p>
                </div>
                <div>
                  <h3 className="text-iotc-text font-sf-pro text-xl font-medium mb-2">Address</h3>
                  <p className="text-iotc-gray">123 Investment Street<br />Financial District<br />New York, NY 10001</p>
                </div>
              </div>
            </div>

            {/* Right Content - Contact Form */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <form className="space-y-6">
                <div>
                  <label className="block text-iotc-text font-sf-pro text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-iotc-gold focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-iotc-text font-sf-pro text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-iotc-gold focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-iotc-text font-sf-pro text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-iotc-gold focus:border-transparent"
                    placeholder="Investment inquiry"
                  />
                </div>
                <div>
                  <label className="block text-iotc-text font-sf-pro text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-iotc-gold focus:border-transparent"
                    placeholder="Tell us about your investment interests..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-iotc-gold hover:bg-iotc-gold/90 text-white font-sf-pro text-base font-medium py-3 px-6 rounded-md transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}