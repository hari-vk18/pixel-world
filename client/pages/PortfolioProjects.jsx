import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FadeOnScroll from "../../components/FadeOnScroll";
// Removed ResponsiveImage; using direct webp image sources

export default function PortfolioProjects() {
    return (
        <div className="min-h-screen bg-white">
            <Header />

            <main className="lg:pt-40 2xl:pt-60 3xs:pt-28 px-[4%] pb-20">
                {/* Project Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Left Column - Main Project Card */}
                    <FadeOnScroll direction="left" distance={40} duration={800}>
                        <div className="relative h-[600px] rounded-2xl overflow-hidden group">
                            <img
                                src="/image (20).webp"
                                alt="Mozhi Project"
                                className="w-full h-full object-cover"
                            />
                            {/* Dark Overlay */}
                            <div className="absolute inset-0 bg-black/40"></div>

                            {/* Content */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-between text-white">
                                <div>
                                    <h2 className="text-4xl font-sf-pro font-[300] mb-4">Mozhi</h2>
                                    <p className="text-lg mb-2">Koyembedu, Chennai</p>
                                    <p className="text-base opacity-90 max-w-md">
                                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
                                    </p>
                                </div>

                                {/* Specs */}
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

                                {/* View Project Button */}
                                <div className="flex justify-end">
                                    <Link
                                        to="#"
                                        className="text-white hover:text-iotc-gold transition-colors duration-300"
                                    >
                                        View Project
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </FadeOnScroll>

                    {/* Right Column - Two Images Stacked */}
                    <div className="flex flex-col gap-6">
                        <FadeOnScroll direction="right" distance={40} duration={800}>
                            <div className="h-[290px] rounded-2xl overflow-hidden">
                                <img
                                    src="/image (20).webp"
                                    alt="Project 2"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </FadeOnScroll>

                        <FadeOnScroll direction="right" distance={40} duration={800} delay={150}>
                            <div className="h-[290px] rounded-2xl overflow-hidden">
                                <img
                                    src="/image (18).webp"
                                    alt="Project 3"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </FadeOnScroll>
                    </div>
                </div>

                {/* Second Row - Three Images */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
                    <FadeOnScroll direction="up" distance={40} duration={800}>
                        <div className="h-[350px] rounded-2xl overflow-hidden">
                            <img
                                src="/image (17).webp"
                                alt="Project 4"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </FadeOnScroll>

                    <FadeOnScroll direction="up" distance={40} duration={800} delay={100}>
                        <div className="h-[350px] rounded-2xl overflow-hidden">
                            <img
                                src="/image (16).webp"
                                alt="Project 5"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </FadeOnScroll>

                    <FadeOnScroll direction="up" distance={40} duration={800} delay={200}>
                        <div className="h-[350px] rounded-2xl overflow-hidden">
                            <img
                                src="/image (15).webp"
                                alt="Project 6"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </FadeOnScroll>
                </div>
            </main>

            <Footer />
        </div>
    );
}
