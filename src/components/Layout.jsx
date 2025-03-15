import React from "react";
import { useTheme } from "../context/ThemeContext";
import Footer from "./Footer";

export default function Layout({ children }) {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`relative min-h-screen font-inter overflow-hidden w-full ${
        isDarkMode ? "!bg-[#24223E]" : "bg-white"
      }`}
    >
      <div
        className="absolute w-[40rem] h-16 sm:w-[50rem] sm:h-20 lg:w-[50rem] lg:h-20 blur-[70px] sm:blur-[80px] -translate-x-1/2 -translate-y-1/2 bg-[#6A11CB] pointer-events-none transform rotate-[140deg]"
        style={{ top: "800px", left: "50%" }}
      />
      <div
        className="absolute w-[40rem] h-16 sm:w-[50rem] sm:h-20 lg:w-[50rem] lg:h-20 blur-[70px] sm:blur-[80px] -translate-x-1/2 -translate-y-1/2 bg-[#FF6FF5] pointer-events-none transform rotate-[140deg]"
        style={{ top: "800px", left: "70%" }}
      />
      <div
        className="absolute w-[40rem] h-16 sm:w-[50rem] sm:h-20 lg:w-[50rem] lg:h-20 blur-[70px] sm:blur-[80px] -translate-x-1/2 -translate-y-1/2 bg-[#6F8CFF] pointer-events-none transform rotate-[140deg]"
        style={{ top: "800px", left: "30%" }}
      />
      <div className="mx-auto max-w-[972px] px-4 md:px-10">{children}</div>
      <Footer />
    </div>
  );
}
