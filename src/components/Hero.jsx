"use client";
import React from "react";
import heroImage from "../assets/images/hero.png";
import { useTheme } from "../context/ThemeContext";
import { BsArrowUpRight } from "react-icons/bs";

const Hero = () => {
  const { isDarkMode } = useTheme();

  // Define the gradient style based on theme
  const heroTextGradient = {
    backgroundImage: `linear-gradient(to right, ${
      isDarkMode ? "#FFFFFF" : "#24223E"
    }, #8A27BA)`,
    backgroundClip: "text",
    WebkitBackgroundClip: "text", // For Safari support
    color: "transparent",
    fontFamily: "'Bricolage Grotesque', sans-serif",
    fontWeight: 700,
  };

  return (
    <section className="relative text-white overflow-hidden">
      <div
        className={`relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 lg:py-56 ${
          isDarkMode ? "text-white" : "text-black"
        }`}
      >
        {/* Text Content */}
        <div className="text-center max-w-4xl mx-auto space-y-6 place-items-center">
          <h1
            className="font-bold text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[68px] leading-[100%] tracking-[0] saturate-150"
            style={heroTextGradient}
          >
            Unlock the Future of Asset Investment with LanStellar
          </h1>
          <p
            className={`text-sm sm:text-base md:text-lg max-w-[90%] sm:max-w-xl mx-auto leading-relaxed ${
              isDarkMode ? "text-white" : "text-gray-600"
            }`}
          >
            Bridge the gap between blockchain innovation and real-world assets.
            Verify ownership, history, and value in seconds—powered by AI and
            secured by blockchain.
          </p>

          {/* CTA Button */}
          <button
            href="#"
            className="flex items-center w-fit gap-2 bg-gradient-to-br  from-[#4A009A] from-30% via-[#8A27BA] via-70% to-[#FF6FF5] to-100%  rounded-[8px] hover:to-[#4A009A] hover:via-[#8A27BA] hover:from-[#FF6FF5] text-white text-[14px] px-[24px] py-[12px] font-medium transition-all duration-300 shadow-md"
          >
            Join Waitlist
            <BsArrowUpRight />
          </button>
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
      <div className="">
        <div className="mx-auto max-w-[90%] sm:max-w-3xl md:max-w-5xl lg:max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2
            className={`text-center text-lg font-normal ${
              isDarkMode ? "text-[#959AB1]" : "text-[#959AB1]"
            }`}
          >
            Our Lead Partners
          </h2>
          <div className="mt-8 overflow-x-auto whitespace-nowrap">
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
