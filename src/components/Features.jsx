"use client";
import React from "react";
import { useTheme } from "../context/ThemeContext";

const Features = () => {
  const { isDarkMode } = useTheme();

  return (
    <>
      <div
        className={`w-full mx-auto my-20 ${
          isDarkMode ? "text-white" : "text-[#24223E]"
        }`}
      >
        <div className="w-full space-y-12">
          <div className="w-full flex flex-col md:flex-row md:items-center justify-between gap-5">
            <div className="space-y-2">
              <p
                className={`font-semibold text-[32px] max-w-[360px] ${
                  isDarkMode ? "text-white" : "text-[#24223E]"
                }`}
              >
                AI-Powered Asset Intelligence
              </p>
              <p className="max-w-[420px] font-light text-[14px]">
                Advanced AI agents analyze ownership trails, market trends, and
                historical data to ensure 100% legitimacy.
              </p>{" "}
            </div>
            <div className="w-[300px] h-[300px] bg-blue-300" />
          </div>
          <div className="w-full flex flex-col md:flex-row-reverse md:items-center justify-between gap-5">
            <div className="space-y-2">
              <p
                className={`font-semibold text-[32px] max-w-[360px] ${
                  isDarkMode ? "text-white" : "text-[#24223E]"
                }`}
              >
                Blockchain-Backed Transparency
              </p>
              <p className="max-w-[420px] font-light text-[14px]">
                Every asset gets a unique, immutable contract
                address—tamper-proof and forever traceable.
              </p>{" "}
            </div>
            <div className="w-[300px] h-[300px] bg-blue-300" />
          </div>
          <div className="w-full flex flex-col md:flex-row md:items-center justify-between gap-5">
            <div className="space-y-2">
              <p
                className={`font-semibold text-[32px] max-w-[360px] ${
                  isDarkMode ? "text-white" : "text-[#24223E]"
                }`}
              >
                GPS-Driven Asset Discovery
              </p>
              <p className="max-w-[420px] font-light text-[14px]">
                Search real-world assets by location or coordinates. Unlock
                hidden opportunities in your neighborhood or across the globe.
              </p>{" "}
            </div>
            <div className="w-[300px] h-[300px] bg-blue-300" />
          </div>
          <div className="w-full flex flex-col md:flex-row-reverse md:items-center justify-between gap-5">
            <div className="space-y-2">
              <p
                className={`font-semibold text-[32px] max-w-[360px] ${
                  isDarkMode ? "text-white" : "text-[#24223E]"
                }`}
              >
                Investor-Grade Insights
              </p>
              <p className="max-w-[420px] font-light text-[14px]">
                Access verified data on market value, risks, and historical
                performance. Invest with confidence.
              </p>{" "}
            </div>
            <div className="w-[300px] h-[300px] bg-blue-300" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
