import React from "react";
import { useTheme } from '../context/ThemeContext';

export default function CTA() {
  const { isDarkMode } = useTheme();

  return (
    <div className={`relative outline outline-${isDarkMode ? 'white' : 'gray-800'} mx-auto mb-6 flex flex-col gap-4 items-center justify-center min-h-[20vh] max-w-7xl py-12 px-4 sm:px-6 lg:px-8 rounded-xl ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
      <h2 className={`text-center font-bricolage text-2xl sm:text-3xl md:text-4xl font-semibold leading-8 sm:leading-10 md:leading-12 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
        Ready to Verify Real World Asset With AI?
      </h2>
      <div className="flex flex-row flex-wrap gap-4 justify-center mt-4">
        <a
          href="#"
          className={`inline-flex items-center gap-2 bg-gradient-to-r from-${isDarkMode ? 'purple-600' : 'purple-600'} to-${isDarkMode ? 'purple-700' : 'purple-700'} hover:from-${isDarkMode ? 'purple-700' : 'purple-700'} hover:to-${isDarkMode ? 'purple-800' : 'purple-800'} text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-${isDarkMode ? 'purple-500/30' : 'purple-500/30'} transform hover:-translate-y-1`}
        >
          Launch App
          <span className="transform -rotate-45 transition-transform">→</span>
        </a>
        <a
          href="/dashboard"
          className={`inline-flex items-center gap-2 bg-${isDarkMode ? 'white' : 'white'} hover:from-${isDarkMode ? 'purple-700' : 'purple-700'} hover:to-${isDarkMode ? 'purple-800' : 'purple-800'} text-${isDarkMode ? 'gray-900' : 'gray-900'} px-4 py-2 sm:px-6 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-${isDarkMode ? 'purple-500/30' : 'purple-500/30'} transform hover:-translate-y-1`}
        >
          Get started
        </a>
      </div>
    </div>
  );
}
  