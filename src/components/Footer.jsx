// src/components/Footer.jsx
import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
    const { isDarkMode } = useTheme();

    return (
        <footer className={`bg-transparent backdrop-blur-md text-${isDarkMode ? 'white' : 'gray-800'} py-10 px-6 md:px-24 flex flex-col md:flex-row justify-between`}>
            {/* Left Section */}
            <div className="max-w-full md:max-w-[40%] mb-8 md:mb-0">
                <img src="/images/Logo.png" alt="Logo" className="w-48 h-auto mb-4" />
                <p className={`text-${isDarkMode ? 'gray-400' : 'gray-600'} text-sm leading-relaxed mb-5`}>
                    Lorem ipsum dolor sit amet consectetur. Suspendisse egestas dui tristique risus arcu nullam.
                </p>
                <button className={`bg-${isDarkMode ? '#6a5af9' : '#6a5af9'} text-white px-5 py-2 rounded-full text-base hover:bg-${isDarkMode ? '#5848d6' : '#5848d6'} transition-colors`}>
                    Contact Us
                </button>
            </div>

            {/* Right Section */}
            <div className="flex flex-col md:flex-row gap-12">
                {/* About Column */}
                <div>
                    <h4 className="text-white text-base font-semibold mb-4">About</h4>
                    <ul className="list-none">
                        <li className="mb-2">
                            <a href="#" className="text-gray-400 text-sm hover:text-white hover:underline">
                                Partners
                            </a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="text-gray-400 text-sm hover:text-white hover:underline">
                                Careers
                            </a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="text-gray-400 text-sm hover:text-white hover:underline">
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
                            <a href="#" className="text-gray-400 text-sm hover:text-white hover:underline">
                                Documentation
                            </a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="text-gray-400 text-sm hover:text-white hover:underline">
                                Github
                            </a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="text-gray-400 text-sm hover:text-white hover:underline">
                                Governance
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;