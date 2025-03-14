"use client";
import React from "react";
import { useTheme } from "../context/ThemeContext";

const Features = () => {
  const { isDarkMode } = useTheme();

  // Define the gradient style based on theme
  const featureTextGradient = {
    backgroundImage: `linear-gradient(to right, ${
      isDarkMode ? "#FFFFFF" : "#24223E"
    }, #8A27BA)`,
    backgroundClip: "text",
    WebkitBackgroundClip: "text", // For Safari support
    color: "transparent",
  };

  return (
    <>
      <section
        className={`relative text-${
          isDarkMode ? "white" : "gray-800"
        } overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24`}
      >
        {/* Gradient Effects (positioned behind content) */}
        {/* <div className="absolute w-[15rem] h-[15rem] sm:w-[20rem] sm:h-[20rem] md:w-[25rem] md:h-[25rem] lg:w-[30rem] lg:h-[30rem] top-[5%] left-[5%] bg-[#6A11CB] rounded-full opacity-30 blur-[40px] sm:blur-[60px] md:blur-[80px] pointer-events-none transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute w-[15rem] h-[15rem] sm:w-[20rem] sm:h-[20rem] md:w-[25rem] md:h-[25rem] lg:w-[30rem] lg:h-[30rem] top-[30%] right-[5%] bg-[#6F8CFF] rounded-full opacity-30 blur-[40px] sm:blur-[60px] md:blur-[80px] pointer-events-none transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute w-[15rem] h-[15rem] sm:w-[20rem] sm:h-[20rem] md:w-[25rem] md:h-[25rem] lg:w-[30rem] lg:h-[30rem] top-[55%] left-[10%] bg-[#FF6FF5] rounded-full opacity-30 blur-[40px] sm:blur-[60px] md:blur-[80px] pointer-events-none transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute w-[15rem] h-[15rem] sm:w-[20rem] sm:h-[20rem] md:w-[25rem] md:h-[25rem] lg:w-[30rem] lg:h-[30rem] bottom-[5%] right-[5%] bg-[#8A27BA] rounded-full opacity-30 blur-[40px] sm:blur-[60px] md:blur-[80px] pointer-events-none transform -translate-x-1/2 -translate-y-1/2" /> */}

        {/* Main Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Feature 1: Asset Search */}
          <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-12 mb-12 sm:mb-16 md:mb-20 lg:mb-24 transition-all duration-300">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#6A11CB] to-[#FF6FF5] rounded-xl shadow-lg shadow-[#6A11CB]/20 flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
                <span className="text-2xl sm:text-3xl">★</span>
              </div>
              <h2
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mt-4 sm:mt-6"
                style={featureTextGradient}
              >
                Search Assets Using Location and GPS Coordinates
              </h2>
              <p
                className={`text-sm sm:text-base md:text-lg mt-3 sm:mt-4 leading-relaxed max-w-md ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Lorem ipsum dolor sit amet consectetur. Nibh vulputat at facilisis
                sollicitudin mauris neque ultricies.
              </p>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center">
              <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-[#6A11CB]/10 rounded-2xl shadow-xl shadow-[#6A11CB]/10 transform hover:scale-105 transition-transform duration-300"></div>
            </div>
          </div>

          {/* Feature 2: Asset Dashboard */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-6 sm:gap-8 md:gap-12 mb-12 sm:mb-16 md:mb-20 lg:mb-24 transition-all duration-300">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#6F8CFF] to-[#FF6FF5] rounded-xl shadow-lg shadow-[#6F8CFF]/20 flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
                <span className="text-2xl sm:text-3xl">★</span>
              </div>
              <h2
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mt-4 sm:mt-6"
                style={featureTextGradient}
              >
                Display Key Asset Details
              </h2>
              <p
                className={`text-sm sm:text-base md:text-lg mt-3 sm:mt-4 leading-relaxed max-w-md ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Lorem ipsum dolor sit amet consectetur. Nibh vulputat at facilisis
                sollicitudin mauris neque ultricies.
              </p>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center">
              <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-[#6F8CFF]/10 rounded-2xl shadow-xl shadow-[#6F8CFF]/10 transform hover:scale-105 transition-transform duration-300"></div>
            </div>
          </div>

          {/* Feature 3: Asset Verification */}
          <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-12 mb-12 sm:mb-16 md:mb-20 lg:mb-24 transition-all duration-300">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#FF6FF5] to-[#6A11CB] rounded-xl shadow-lg shadow-[#FF6FF5]/20 flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
                <span className="text-2xl sm:text-3xl">★</span>
              </div>
              <h2
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mt-4 sm:mt-6"
                style={featureTextGradient}
              >
                AI Agents Verify User Assets
              </h2>
              <p
                className={`text-sm sm:text-base md:text-lg mt-3 sm:mt-4 leading-relaxed max-w-md ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Lorem ipsum dolor sit amet consectetur. Nibh vulputat at facilisis
                sollicitudin mauris neque ultricies.
              </p>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center">
              <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-[#FF6FF5]/10 rounded-2xl shadow-xl shadow-[#FF6FF5]/10 transform hover:scale-105 transition-transform duration-300"></div>
            </div>
          </div>

          {/* Feature 4: Unique Contract Generation */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-6 sm:gap-8 md:gap-12 transition-all duration-300">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#8A27BA] to-[#6F8CFF] rounded-xl shadow-lg shadow-[#8A27BA]/20 flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
                <span className="text-2xl sm:text-3xl">★</span>
              </div>
              <h2
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mt-4 sm:mt-6"
                style={featureTextGradient}
              >
                A Hashing Algorithm
              </h2>
              <p
                className={`text-sm sm:text-base md:text-lg mt-3 sm:mt-4 leading-relaxed max-w-md ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Lorem ipsum dolor sit amet consectetur. Nibh vulputat at facilisis
                sollicitudin mauris neque ultricies.
              </p>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center">
              <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-[#8A27BA]/10 rounded-2xl shadow-xl shadow-[#8A27BA]/10 transform hover:scale-105 transition-transform duration-300"></div>
            </div>
          </div>
        </div>
      </section>

      <section
        className={`relative text-${
          isDarkMode ? "white" : "gray-800"
        } py-12 sm:py-16 md:py-20 lg:py-24`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            {/* Card 1 */}
            <div
              className={`backdrop-blur-xl outline outline-${
                isDarkMode ? "white" : "gray-300"
              } rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300`}
            >
              <h2
                className={`text-xl sm:text-2xl md:text-3xl font-semibold mb-4 ${
                  isDarkMode ? "text-gray-200" : "text-gray-700"
                }`}
              >
                Key Objectives
              </h2>
              <p
                className={`text-sm sm:text-base mb-4 ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Lorem ipsum dolor sit amet consectetur. Nibh voluptat at facilisis
                sollicitudin.
              </p>
              <ul
                className={`list-none space-y-2 ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                <li className="flex items-center">
                  <span className="text-[#6a5af9] mr-2">•</span> Provide a
                  seamless way to verify Asset ownership and history.
                </li>
                <li className="flex items-center">
                  <span className="text-[#6a5af9] mr-2">•</span> Generate unique
                  contract addresses for properties using street addresses or GPS
                  coordinates.
                </li>
                <li className="flex items-center">
                  <span className="text-[#6a5af9] mr-2">•</span> Offer AI-powered
                  insights into Asset legitimacy and market value.
                </li>
                <li className="flex items-center">
                  <span className="text-[#6a5af9] mr-2">•</span> Build a foundation
                  for future scalability and open-source contributions.
                </li>
              </ul>
            </div>

            {/* Card 2 */}
            <div
              className={`backdrop-blur-xl outline outline-${
                isDarkMode ? "white" : "gray-300"
              } rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300`}
            >
              <h2
                className={`text-xl sm:text-2xl md:text-3xl font-semibold mb-4 ${
                  isDarkMode ? "text-gray-200" : "text-gray-700"
                }`}
              >
                Key Objectives
              </h2>
              <p
                className={`text-sm sm:text-base mb-4 ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Lorem ipsum dolor sit amet consectetur. Nibh voluptat at facilisis
                sollicitudin.
              </p>
              <ul
                className={`list-none space-y-2 ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                <li className="flex items-center">
                  <span className="text-[#6a5af9] mr-2">•</span> Provide a
                  seamless way to verify Asset ownership and history.
                </li>
                <li className="flex items-center">
                  <span className="text-[#6a5af9] mr-2">•</span> Generate unique
                  contract addresses for properties using street addresses or GPS
                  coordinates.
                </li>
                <li className="flex items-center">
                  <span className="text-[#6a5af9] mr-2">•</span> Offer AI-powered
                  insights into Asset legitimacy and market value.
                </li>
                <li className="flex items-center">
                  <span className="text-[#6a5af9] mr-2">•</span> Build a foundation
                  for future scalability and open-source contributions.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;