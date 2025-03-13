// @ts-nocheck
"use client";
import React, { useState } from "react";
import { FaGlobe, FaBars, FaTimes } from "react-icons/fa";
import { ConnectButton } from "thirdweb/react";
import { ethereum } from "thirdweb/chains";
import { client } from "../client";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Define custom styles for the ConnectButton
  const customButtonStyle = {
    backgroundColor: "#8B5CF6", // Your brand color
    color: "#FFFFFF",           // White text for contrast
    border: "none",
    borderRadius: "8px",
    padding: "0.5rem 1rem",
    fontWeight: "500",
    transition: "background-color 0.2s ease",
  };

  return (
    <nav className="flex items-center justify-between px-6 md:px-12 lg:px-20 py-4 bg-transparent w-full">
      {/* Logo Section */}
      <div className="flex items-center cursor-pointer">
        <img
          src="/images/Logo.png"
          alt="Lanstellar Logo"
          width={130}
          height={30}
          className="mr-2 md:w-[120px] md:h-[30px]"
        />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-4 lg:gap-24 text-gray-700 font-medium">
        <li className="cursor-pointer hover:text-purple-600">Home</li>
        <li className="cursor-pointer hover:text-purple-600">About</li>
        <li className="cursor-pointer hover:text-purple-600">WhitePaper</li>
      </ul>

      {/* Desktop Buttons */}
      <div className="hidden md:flex items-center gap-6">
        {/* Uncomment if needed */}
        {/* <button className="flex items-center gap-2 text-gray-700">
          <FaGlobe className="text-lg" />
          <span>En</span>
        </button> */}

        <ConnectButton
          client={client}
          connectModal={{ size: "compact" }}
          accountAbstraction={{
            chain: ethereum,
            sponsorGas: true,
          }}
          connectButton={{
            label: "Sign in",
            style: customButtonStyle, // Apply custom styles
          }}
          theme={{
            "--tw-bg": "#8B5CF6", // Fallback for theme customization
            "--tw-text": "#FFFFFF",
          }}
          className="hover:bg-[#7C3AED]" // Tailwind hover class
        />
      </div>

      {/* Hamburger Menu Button (Mobile) */}
      <button
        className="md:hidden text-gray-700 text-2xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white z-50 shadow-lg py-4 flex flex-col items-center space-y-4 md:hidden">
          <ul className="text-gray-700 font-medium w-full text-center">
            <li
              className="py-2 cursor-pointer hover:text-purple-600"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </li>
            <li
              className="py-2 cursor-pointer hover:text-purple-600"
              onClick={() => setMenuOpen(false)}
            >
              Verify Assets
            </li>
            <li
              className="py-2 cursor-pointer hover:text-purple-600"
              onClick={() => setMenuOpen(false)}
            >
              WhitePaper
            </li>
            <li
              className="py-2 cursor-pointer hover:text-purple-600"
              onClick={() => setMenuOpen(false)}
            >
              About
            </li>
          </ul>

          <div className="flex flex-col gap-4">
            {/* Uncomment if needed */}
            {/* <button className="flex items-center gap-2 text-gray-700">
              <FaGlobe className="text-lg" />
              <span>En</span>
            </button> */}

            <ConnectButton
              client={client}
              connectModal={{ size: "compact" }}
              accountAbstraction={{
                chain: ethereum,
                sponsorGas: true,
              }}
              connectButton={{
                label: "Sign in",
                style: customButtonStyle, // Apply same custom styles
              }}
              theme={{
                "--tw-bg": "#8B5CF6",
                "--tw-text": "#FFFFFF",
              }}
              className="hover:bg-[#7C3AED]" // Consistent hover effect
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;