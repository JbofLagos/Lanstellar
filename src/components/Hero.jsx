"use client";
import React from "react";
import heroImage from "../assets/images/hero.png";

const Hero = () => {
  return (
    <section className="relative text-white overflow-hidden">
      {/* Gradient Effects (positioned behind hero image) */}
      <div
        className="absolute w-[40rem] h-16 sm:w-[50rem] sm:h-20 lg:w-[60rem] lg:h-24 top-[40%] left-[70%] -translate-x-1/2 -translate-y-1/2 opacity-50 bg-[#6A11CB] rounded-full blur-[60px] sm:blur-[80px] pointer-events-none transform rotate-[-150deg]"
        style={{ top: "641.13px", left: "1228.52px" }}
      />
      <div
        className="absolute w-[40rem] h-16 sm:w-[50rem] sm:h-20 lg:w-[60rem] lg:h-24 top-[40%] right-[10%] -translate-y-1/2 opacity-50 bg-[#FF6FF5] rounded-full blur-[60px] sm:blur-[80px] pointer-events-none transform rotate-[-150deg]"
        style={{ top: "627.14px", left: "1685.89px" }}
      />
      <div
        className="absolute w-[40rem] h-16 sm:w-[50rem] sm:h-20 lg:w-[60rem] lg:h-24 top-[35%] left-[40%] -translate-x-1/2 -translate-y-1/2 opacity-50 bg-[#6F8CFF] rounded-full blur-[60px] sm:blur-[80px] pointer-events-none transform rotate-[-150deg]"
        style={{ top: "595.14px", left: "854.39px" }}
      />

      {/* Hero Section */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 lg:py-72">
        {/* Text Content */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1
            className="font-bricolageGrotesque font-bold text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[68px] leading-[100%] tracking-[0] bg-gradient-to-r from-white to-[#8A27BA] saturate-150 text-transparent bg-clip-text"
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700 }}
          >
            Instantly Verify Real-World
            <br className="block sm:hidden" /> {/* Mobile line break */}
            <span className="hidden sm:inline"> </span> {/* Space for larger screens */}
            Assets with AI & Blockchain
          </h1>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-[90%] sm:max-w-xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Pharetra netus turpis porttitor
            felis pellentesque porttitor integer. Imperdiet lobortis ac bibendum.
          </p>

          {/* CTA Button */}
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-purple-500/30 transform hover:-translate-y-1"
          >
            Launch App
            <span className="transform rotate-45 transition-transform">→</span>
          </a>
        </div>

        {/* Hero Image */}
        <div className="relative w-full max-w-[90%] sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto mt-8 sm:mt-10 md:mt-12 lg:mt-16 px-2 sm:px-4">
          <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-purple-900/20 hover:shadow-2xl transition-shadow duration-300">
            <img
              src={heroImage}
              alt="Dashboard Preview"
              className="w-full h-auto object-contain transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <div className="py-2 sm:py-2 md:py-24 lg:py-28">
        <div className="mx-auto max-w-[90%] sm:max-w-3xl md:max-w-5xl lg:max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2
            className="text-center font-bricolageGrotesque text-2xl sm:text-3xl md:text-4xl font-semibold text-white"
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 600 }}
          >
            Our Lead Partners
          </h2>
          <div className="mt-8 sm:mt-10 overflow-x-auto whitespace-nowrap">
            <div className="inline-flex space-x-6 sm:space-x-8 md:space-x-10 animate-slide">
              <img
                alt="Transistor"
                src="src/assets/images/base.png"
                className="h-8 sm:h-10 md:h-12 w-auto object-contain inline-block"
              />
              <img
                alt="Reform"
                src="src/assets/images/celo.png"
                className="h-8 sm:h-10 md:h-12 w-auto object-contain inline-block"
              />
              <img
                alt="Tuple"
                src="src/assets/images/aave.png"
                className="h-8 sm:h-10 md:h-12 w-auto object-contain inline-block"
              />
              <img
                alt="SavvyCal"
                src="src/assets/images/arbitrum.png"
                className="h-8 sm:h-10 md:h-12 w-auto object-contain inline-block"
              />
              <img
                alt="Statamic"
                src="src/assets/images/circle.png"
                className="h-8 sm:h-10 md:h-12 w-auto object-contain inline-block"
              />
              {/* Duplicate logos for seamless looping */}
              <img
                alt="Transistor (duplicate)"
                src="src/assets/images/base.png"
                className="h-8 sm:h-10 md:h-12 w-auto object-contain inline-block"
              />
              <img
                alt="Reform (duplicate)"
                src="src/assets/images/celo.png"
                className="h-8 sm:h-10 md:h-12 w-auto object-contain inline-block"
              />
              <img
                alt="Tuple (duplicate)"
                src="src/assets/images/aave.png"
                className="h-8 sm:h-10 md:h-12 w-auto object-contain inline-block"
              />
              <img
                alt="SavvyCal (duplicate)"
                src="src/assets/images/arbitrum.png"
                className="h-8 sm:h-10 md:h-12 w-auto object-contain inline-block"
              />
              <img
                alt="Statamic (duplicate)"
                src="src/assets/images/circle.png"
                className="h-8 sm:h-10 md:h-12 w-auto object-contain inline-block"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;