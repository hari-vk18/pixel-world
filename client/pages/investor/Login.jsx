import React, { useState } from 'react';

export default function Login() {
    const [loginId, setLoginId] = useState('');
    const [password, setPassword] = useState('');
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        "Transforming Real Assets into Sustainable Value.",
        "Innovative Investment Solutions",
        "Building Tomorrow's Infrastructure"
    ];

    const handleSubmit = () => {
        console.log('Login attempted with:', { loginId, password });
    };

    return (
        <div className="grid lg:grid-cols-2 3xs-col-1 min-h-screen bg-white">
            {/* Left Panel - Hero Section */}
            <div className="hidden lg:flex rounded-l-lg justify-between">
                <div className='m-8 w-full rounded-2xl bg-gradient-to-b from-gray-100 to-gray-300'>
                    {/* Logo */}
                    <div className="ml-8 mt-8">
                        <img src="/IOTC Real Asset logo blue 1.svg" alt="III" />
                    </div>
                </div>
                {/* <div className="mb-20">
                    <h1 className="text-5xl font-light text-white leading-tight">
                        {slides[currentSlide]}
                    </h1>

                    <div className="flex gap-2 mt-8">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`h-1 rounded-full transition-all ${index === currentSlide ? 'w-8 bg-white' : 'w-6 bg-white/40'
                                    }`}
                                aria-label={`Slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div> */}
            </div>

            {/* Right Panel - Login Form */}
            <div className="flex-1 flex items-center justify-center p-8">
                <div className="w-full max-w-md">
                    {/* Mobile Logo */}
                    <div className="lg:hidden mb-8 text-center item-center">
                        <div className='flex justify-center item-center'>
                            <img src="/IOTC Real Asset logo blue 1.svg" alt="" />
                        </div>
                    </div>

                    {/* Header */}
                    <div className="text-center mb-8">
                        <div className="hidden lg:flex items-center justify-center gap-2 mb-4">

                            <img src="/IOTC Real Asset logo blue 1.svg" alt="IIII" />
                        </div>
                        <h2 className="text-3xl font-normal text-gray-900 mb-1">IOTC Real Asset</h2>
                        <p className="text-gray-600">Investor Login</p>
                    </div>

                    {/* Login Form */}
                    <div className="space-y-6">
                        {/* Login ID */}
                        <div>
                            <label htmlFor="loginId" className="block text-sm font-medium text-gray-700 mb-2">
                                Login ID
                            </label>
                            <input
                                id="loginId"
                                type="text"
                                value={loginId}
                                onChange={(e) => setLoginId(e.target.value)}
                                placeholder="DDDD"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="++++++++++"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                            />
                        </div>

                        {/* Forgot Password */}
                        <div className="text-right">
                            <button className="text-sm text-amber-600 hover:text-amber-700">
                                Forgot Password?
                            </button>
                        </div>

                        {/* Login Button */}
                        <button
                            onClick={handleSubmit}
                            className="w-full bg-blue-900 text-white py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors"
                        >
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}