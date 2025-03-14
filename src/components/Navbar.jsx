// @ts-nocheck
"use client";
import React, { useState } from "react";
import { FaGlobe, FaBars, FaTimes } from "react-icons/fa";
import { ConnectButton } from "thirdweb/react";
import { ethereum } from "thirdweb/chains";
import { client } from "../client";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-md flex items-center justify-between px-4 sm:px-6 md:px-12 lg:px-20 py-4 w-full">
      {/* Logo Section */}
      <div className="flex items-center cursor-pointer">
        <img src="/images/Logo.png" alt="Lanstellar Logo" width={130} height={30} className="mr-2 md:w-[120px] md:h-[30px]" />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 lg:gap-12 text-gray-300 font-medium">
        <li className="cursor-pointer hover:text-white">Home</li>
        <li className="cursor-pointer hover:text-white">Verify Asset</li>
        <li className="cursor-pointer hover:text-white">About</li>
      </ul>

      {/* Desktop Buttons */}
      <div className="hidden md:flex items-center">
        <ConnectButton
          client={client}
          connectModal={{ size: "compact" }}
          accountAbstraction={{
            chain: ethereum,
            sponsorGas: true,
          }}
          connectButton={{
            label: "Launch app ↗",
          }}
          theme="purple"
          className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm flex items-center gap-2"
        />
      </div>

      {/* Hamburger Menu Button (Mobile) */}
      <button
        className="md:hidden text-gray-300 text-2xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-black z-50 shadow-lg py-4 flex flex-col items-center space-y-4 md:hidden">
          <ul className="text-gray-300 font-medium w-full text-center">
            <li
              className="py-2 cursor-pointer hover:text-white"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </li>
            <li
              className="py-2 cursor-pointer hover:text-white"
              onClick={() => setMenuOpen(false)}
            >
              Verify Asset
            </li>
            <li
              className="py-2 cursor-pointer hover:text-white"
              onClick={() => setMenuOpen(false)}
            >
              About
            </li>
          </ul>

          <div className="flex flex-col gap-4 w-full px-6">
            <ConnectButton
              client={client}
              connectModal={{ size: "compact" }}
              accountAbstraction={{
                chain: ethereum,
                sponsorGas: true,
              }}
              connectButton={{
                label: "Launch app ↗",
              }}
              theme="purple"
              className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm flex items-center justify-center gap-2"
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;