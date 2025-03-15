import React from "react";
import { useTheme } from "../context/ThemeContext";
import { BsArrowUpRight } from "react-icons/bs";

export default function CTA() {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`relative border  border-[#959AB1]/50 bg-[#959AB1]/5 mx-auto flex flex-col gap-[12px] items-left justify-end min-h-[340px] p-[24px] md:p-[32px] rounded-[24px] ${
        isDarkMode ? "text-white" : "text-gray-800"
      }`}
    >
      <h2
        className={`text-2xl md:text-[32px] font-semibold max-w-[360px] leading-[42px] ${
          isDarkMode ? "text-white" : "text-[#24223E]"
        }`}
      >
        Ready to Verify Real World Asset With AI?
      </h2>
      <div className="flex gap-3 items-center">
        <button
          href="#"
          className="flex items-center w-fit gap-2 bg-gradient-to-br from-[#4A009A] from-30% via-[#8A27BA] via-70% to-[#FF6FF5] to-100%  rounded-[8px] hover:to-[#4A009A] hover:via-[#8A27BA] hover:from-[#FF6FF5] text-white text-[14px] px-[24px] py-[12px] transition-all duration-300 shadow-md"
        >
          Launch app
          <BsArrowUpRight />
        </button>
        <button
          href="#"
          className="w-fit rounded-[8px] text-white text-[14px] px-[24px] py-[12px] bg-[#959AB1] transition-all duration-300 shadow-md"
        >
          Contact Us
        </button>
      </div>
    </div>
  );
}
