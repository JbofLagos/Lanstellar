"use client";
import React from "react";
import Image from "next/image";
import lanstel from "./assets/images/hero.jpeg";
import Navbar from "./_components/navbar/navbar";
import { FaSearch } from "react-icons/fa";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <div className="fixed top-0 z-10 w-full bg-white shadow-md">
        <Navbar />
      </div>

      {/* Hero Section */}
      <div className="relative flex h-screen items-center justify-center bg-gray-100 px-6">
        <Image
          src={lanstel}
          alt="Background"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />

        <div className="relative z-10 text-center max-w-2xl">
          <h1 className="text-4xl font-bold text-purple-700">
            Instantly Verify <br />
            Real-World Assets <br />
            with AI & Blockchain.
          </h1>
          <p className="mt-4 text-gray-600">
            Enter an address or GPS coordinates to get ownership history,
            legitimacy status, and market value.
          </p>

          {/* Search Bar */}
          <div className="mt-6 flex w-full max-w-lg items-center rounded-lg border border-gray-300 bg-white px-4 py-3 shadow-md">
            <input
              type="text"
              placeholder="Enter Asset ID or Smart Contract Address..."
              className="flex-grow bg-transparent focus:outline-none"
            />
            <button className="text-purple-600">
              <FaSearch size={20} />
            </button>
          </div>

          {/* Stats */}
          <div className="mt-10 flex justify-center gap-12 text-purple-700">
            <div className="text-center">
              <h2 className="text-2xl font-bold">50,000+</h2>
              <p className="text-gray-600">Verified Assets</p>
            </div>
            <div className="text-center">
              <h2 className="text-2xl font-bold">5,000+</h2>
              <p className="text-gray-600">Daily Users</p>
            </div>
            <div className="text-center">
              <h2 className="text-2xl font-bold">98%</h2>
              <p className="text-gray-600">Verification Accuracy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
