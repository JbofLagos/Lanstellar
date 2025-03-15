// src/components/Footer.jsx
import React from "react";
import { useTheme } from "../context/ThemeContext";
import { BsArrowUpRight } from "react-icons/bs";

const Footer = () => {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`w-full mx-auto bg-transparent mt-16 min-h-[35vh] ${
        isDarkMode ? "text-white border-t-white/5" : ""
      } py-[32px] px-4 md:px-10 md:py-[36px] border-t`}
    >
      <div className="flex flex-col md:flex-row md:items-top gap-10 justify-between max-w-[1110px] mx-auto">
        <div className="flex flex-col gap-4 max-w-[240px]">
          <img
            src={`${isDarkMode ? "/logo.svg" : "/logo-dark.svg"}`}
            alt="Lanstellar Logo"
            className="w-[40px]"
          />
          <p
            className={`text-${
              isDarkMode ? "white/70" : "#24223E"
            } text-sm leading-relaxed`}
          >
            Lorem ipsum dolor sit amet consectetur. Suspendisse egestas dui
            tristique risus arcu nullam.
          </p>
          <button
            href="#"
            className="flex items-center w-fit gap-2 bg-gradient-to-br from-[#4A009A] from-30% via-[#8A27BA] via-70% to-[#FF6FF5] to-100%  rounded-[8px] hover:to-[#4A009A] hover:via-[#8A27BA] hover:from-[#FF6FF5] text-white text-[14px] px-[24px] py-[12px] transition-all duration-300 shadow-md"
          >
            Launch app
            <BsArrowUpRight />
          </button>
        </div>

        {/* Right Section */}
        <div className="flex flex-col md:flex-row gap-12">
          {/* About Column */}
          <div>
            <h4 className="text-white text-base font-semibold mb-4">About</h4>
            <ul className="list-none">
              <li className="mb-2">
                <a
                  href="#"
                  className="text-gray-400 text-sm hover:text-white hover:underline"
                >
                  Partners
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-gray-400 text-sm hover:text-white hover:underline"
                >
                  Careers
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-gray-400 text-sm hover:text-white hover:underline"
                >
                  News
                </a>
              </li>
            </ul>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="text-white text-base font-semibold mb-4">Links</h4>
            <ul className="list-none">
              <li className="mb-2">
                <a
                  href="#"
                  className="text-gray-400 text-sm hover:text-white hover:underline"
                >
                  Documentation
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-gray-400 text-sm hover:text-white hover:underline"
                >
                  Github
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-gray-400 text-sm hover:text-white hover:underline"
                >
                  Governance
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
