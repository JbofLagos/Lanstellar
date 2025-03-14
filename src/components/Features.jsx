"use client";
import React from "react";

const Features = () => {
  return (
    <section className="relative min-h-screen text-white overflow-hidden py-16 sm:py-20 md:py-24 lg:py-32">
      {/* Gradient Effects (positioned behind content) */}
      {/* <div className="absolute w-[20rem] h-[20rem] sm:w-[25rem] sm:h-[25rem] md:w-[30rem] md:h-[30rem] top-[10%] left-[10%] bg-[#6A11CB] rounded-full opacity-50 blur-[60px] sm:blur-[80px] pointer-events-none transform -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute w-[20rem] h-[20rem] sm:w-[25rem] sm:h-[25rem] md:w-[30rem] md:h-[30rem] top-[35%] right-[10%] bg-[#6F8CFF] rounded-full opacity-50 blur-[60px] sm:blur-[80px] pointer-events-none transform -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute w-[20rem] h-[20rem] sm:w-[25rem] sm:h-[25rem] md:w-[30rem] md:h-[30rem] top-[60%] left-[15%] bg-[#FF6FF5] rounded-full opacity-50 blur-[60px] sm:blur-[80px] pointer-events-none transform -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute w-[20rem] h-[20rem] sm:w-[25rem] sm:h-[25rem] md:w-[30rem] md:h-[30rem] bottom-[10%] right-[10%] bg-[#8A27BA] rounded-full opacity-50 blur-[60px] sm:blur-[80px] pointer-events-none transform -translate-x-1/2 -translate-y-1/2" /> */}

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Feature 1: Asset Search */}
        <div className="flex flex-col sm:flex-row items-center mb-12 sm:mb-16">
          <div className="w-full sm:w-1/2 mb-6 sm:mb-0 sm:order-2">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-300 mb-2">★ Asset Search</h3>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Search Assets Using Location and GPS Coordinates</h2>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg mt-4 max-w-prose">
              Lorem ipsum dolor sit amet consectetur. Nibh vulputat at facilisis sollicitudin mauris neque ultricies. Nisi maecenas mi id a tempus. Infringilla netus interdum rhoncus. Est augue velit malesuada facilisis.
            </p>
          </div>
          <div className="w-full sm:w-1/2 flex justify-center sm:order-1">
            <div className="w-48 h-48 sm:w-64 sm:h-64 bg-[#6A11CB] opacity-20 rounded-lg"></div>
          </div>
        </div>

        {/* Feature 2: Asset Dashboard */}
        <div className="flex flex-col sm:flex-row items-center mb-12 sm:mb-16">
          <div className="w-full sm:w-1/2 flex justify-center sm:order-2">
            <div className="w-48 h-48 sm:w-64 sm:h-64 bg-[#6F8CFF] opacity-20 rounded-lg"></div>
          </div>
          <div className="w-full sm:w-1/2 mb-6 sm:mb-0 sm:order-1">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-300 mb-2">★ Asset Dashboard</h3>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Display key asset details</h2>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg mt-4 max-w-prose">
              Lorem ipsum dolor sit amet consectetur. Nibh vulputat at facilisis sollicitudin mauris neque ultricies. Nisi maecenas mi id a tempus. Infringilla netus interdum rhoncus. Est augue velit malesuada facilisis.
            </p>
          </div>
        </div>

        {/* Feature 3: Asset Verification */}
        <div className="flex flex-col sm:flex-row items-center mb-12 sm:mb-16">
          <div className="w-full sm:w-1/2 mb-6 sm:mb-0 sm:order-2">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-300 mb-2">★ Asset Verification</h3>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">AI agents verifies user assets</h2>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg mt-4 max-w-prose">
              Lorem ipsum dolor sit amet consectetur. Nibh vulputat at facilisis sollicitudin mauris neque ultricies. Nisi maecenas mi id a tempus. Infringilla netus interdum rhoncus. Est augue velit malesuada facilisis.
            </p>
          </div>
          <div className="w-full sm:w-1/2 flex justify-center sm:order-1">
            <div className="w-48 h-48 sm:w-64 sm:h-64 bg-[#FF6FF5] opacity-20 rounded-lg"></div>
          </div>
        </div>

        {/* Feature 4: Unique Contract Generation */}
        <div className="flex flex-col sm:flex-row items-center">
          <div className="w-full sm:w-1/2 flex justify-center sm:order-2">
            <div className="w-48 h-48 sm:w-64 sm:h-64 bg-[#8A27BA] opacity-20 rounded-lg"></div>
          </div>
          <div className="w-full sm:w-1/2 mb-6 sm:mb-0 sm:order-1">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-300 mb-2">★ Unique Contract Generation</h3>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">A hashing algorithm</h2>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg mt-4 max-w-prose">
              Lorem ipsum dolor sit amet consectetur. Nibh vulputat at facilisis sollicitudin mauris neque ultricies. Nisi maecenas mi id a tempus. Infringilla netus interdum rhoncus. Est augue velit malesuada facilisis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;