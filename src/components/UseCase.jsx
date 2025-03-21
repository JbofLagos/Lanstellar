import React from "react";
import { useTheme } from "../context/ThemeContext";

export default function UseCase() {
  const { isDarkMode } = useTheme();
  return (
    <div className="mx-auto w-full my-20 min-h-[60dvh] space-y-10">
      <div className="w-full text-center">
        <h1
          className={`font-bold text-[24px] ${
            isDarkMode ? "text-white" : "text-[#24223E]"
          }`}
        >
          Use Case
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full mx-auto max-w-2xl gap-6">
        <div
          className={`space-y-3 items-left ${
            isDarkMode ? "text-white" : "text-[#24223E]"
          }`}
        >
          <div className="w-full h-fit rounded-lg overflow-hidden">
            <img src="estate.jpg" alt="" className="object-cover h-[220px]" />
          </div>
          <p className="font-semibold text-2xl">Real Estate</p>
          <p className="font-light text-sm">
            Verify property titles and zoning laws before purchasing.
          </p>
        </div>
        <div
          className={`space-y-3 items-left ${
            isDarkMode ? "text-white" : "text-[#24223E]"
          }`}
        >
          <div className="w-full h-fit rounded-lg overflow-hidden">
            <img src="art.jpg" alt="" className="object-cover h-[220px]" />
          </div>
          <p className="font-semibold text-2xl">Art and Collectibles</p>
          <p className="font-light text-sm">
            Authenticate provenance and track ownership history.
          </p>
        </div>
        <div
          className={`space-y-3 items-left ${
            isDarkMode ? "text-white" : "text-[#24223E]"
          }`}
        >
          <div className="w-full h-fit rounded-lg overflow-hidden">
            <img
              src="commodity.jpg"
              alt=""
              className="object-cover h-[220px]"
            />
          </div>
          <p className="font-semibold text-2xl">Commodities</p>
          <p className="font-light text-sm">
            Assess the value of oil, minerals, or farmland with geolocated data.
          </p>
        </div>
        <div
          className={`space-y-3 items-left ${
            isDarkMode ? "text-white" : "text-[#24223E]"
          }`}
        >
          <div className="w-full h-fit rounded-lg overflow-hidden">
            <img src="stocks.jpg" alt="" className="object-cover h-[220px]" />
          </div>
          <p className="font-semibold text-2xl">Stocks and Bonds</p>
          <p className="font-light text-sm">
            Verify property prices, titles and zoning laws before investing.
          </p>
        </div>
      </div>
    </div>
  );
}
