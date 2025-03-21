import React, { useState } from "react";
import { FaGlobe, FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import { ConnectButton } from "thirdweb/react";
import { ethereum } from "thirdweb/chains";
import { client } from "../client";
import { useTheme } from "../context/ThemeContext";
import { BsArrowUpRight } from "react-icons/bs";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-md px-4 md:px-10 py-[24px] w-full border-b ${
        isDarkMode
          ? "text-white border-b-white/5"
          : "text-[#535E6D] border-b-black/5"
      }`}
    >
      <div className="flex items-center w-full max-w-[1110px] mx-auto justify-between">
        {/* Logo Section */}
        <div className="flex items-center cursor-pointer">
          <img
            src={`${isDarkMode ? "/logo.svg" : "/logo-dark.svg"}`}
            alt="Lanstellar Logo"
            className="w-[40px]"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          <li className="cursor-pointer hover:text-white">Verify Asset</li>
          <li className="cursor-pointer hover:text-white">About</li>
          <li className="cursor-pointer hover:text-white">Use Case</li>
        </ul>

        {/* Desktop Buttons */}
        {/* <div className="hidden md:flex items-center">
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
          </div> */}
        <div className="hidden md:flex items-center gap-3">
          <button
            href="#"
            className="flex items-center w-fit gap-2 bg-gradient-to-br from-[#4A009A] from-30% via-[#8A27BA] via-70% to-[#FF6FF5] to-100%  rounded-[8px] hover:to-[#4A009A] hover:via-[#8A27BA] hover:from-[#FF6FF5] text-white text-[14px] px-[24px] py-[12px] transition-all duration-300 shadow-md"
          >
            Launch app
            <BsArrowUpRight />
          </button>
          <div onClick={toggleTheme} className="cursor-pointer text-2xl">
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </div>
        </div>

        {/* Mobile Buttons (Toggle and Menu) */}
        <div className="flex items-center gap-4 md:hidden">
          <button onClick={toggleTheme} className="text-2xl">
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </button>
          <button
            className="text-gray-300 text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            className={`absolute top-16 left-0 w-full bg-black z-50 shadow-lg py-4 flex flex-col items-center space-y-4 md:hidden ${
              isDarkMode ? "text-white" : "text-gray-800"
            }`}
          >
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
      </div>
    </div>
  );
};

export default Navbar;
