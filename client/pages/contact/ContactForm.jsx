import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
  };

  return (
    <div className=" flex items-center justify-center py-8 3xs:px-8">
      <div className="w-full w-[95%]">
        {/* Top Row - Three Input Fields */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Name Field */}
          <div>
            <label className="block text-xl font-normal lg:mb-4">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border-b-2 border-gray-300 bg-transparent py-2 focus:outline-none focus:border-gray-600 transition-colors"
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-xl font-normal lg:mb-4">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border-b-2 border-gray-300 bg-transparent py-2 focus:outline-none focus:border-gray-600 transition-colors"
            />
          </div>

          {/* Phone Field */}
          <div>
            <label className="block text-xl font-normal lg:mb-4">
              Phone Number (optional)
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border-b-2 border-gray-300 bg-transparent py-2 focus:outline-none focus:border-gray-600 transition-colors"
            />
          </div>
        </div>

        {/* Message Field */}
        <div className="mb-8">
          <label className="block text-xl font-normal mb-2 ">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full border-b-2 border-gray-300 bg-transparent py-2  focus:outline-none focus:border-gray-600 transition-colors resize-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="button"
          onClick={handleSubmit}
          className="bg-slate-800 text-white lg:px-12 3xs:px-4 lg:py-4 3xs:py-2 rounded-full lg:text-2xl font-normal hover:bg-slate-700 transition-colors flex items-center gap-2"
        >
          Leave us a Message
          <svg
            className="lg:w-5 lg:h-5 3xs:w-4 3xs:h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}