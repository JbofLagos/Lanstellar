"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FaGlobe, FaBars, FaTimes } from "react-icons/fa";
import { Wallet } from "node_modules/@coinbase/onchainkit/esm/wallet/components/Wallet";
import { ConnectWallet } from "node_modules/@coinbase/onchainkit/esm/wallet/components/ConnectWallet";
import { ConnectWalletText } from "node_modules/@coinbase/onchainkit/esm/wallet/components/ConnectWalletText";
import { Avatar } from "node_modules/@coinbase/onchainkit/esm/identity/components/Avatar";
import { Name } from "node_modules/@coinbase/onchainkit/esm/identity/components/Name";

// Import your Wallet component


const Navbar = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 md:px-12 lg:px-20 py-4 bg-transparent">

      <div className="flex items-center cursor-pointer" onClick={() => router.push(`/`)}>
        <Image
          src="/images/Logo.png"
          alt="Lanstellar Logo"
          width={130} 
          height={30}
          className="mr-2 md:w-[170px] md:h-[40px]"
        />
      </div>

    
      <ul className="hidden md:flex gap-12 lg:gap-24 text-gray-700 font-medium">
        <li className="cursor-pointer hover:text-purple-600">Home</li>
        <li className="cursor-pointer hover:text-purple-600">Verify Assets</li>
        <li className="cursor-pointer hover:text-purple-600">API Docs</li>
        <li className="cursor-pointer hover:text-purple-600">About</li>
      </ul>


      <div className="hidden md:flex items-center gap-6">
        <button className="flex items-center gap-2 text-gray-700">
          <FaGlobe className="text-lg" />
          <span>En</span>
        </button>


        <div className="flex justify-center">
          <Wallet className="border-gray-300">
            <ConnectWallet className="bg-purple-700 text-white px-4 py-2 rounded-lg hover:bg-purple-800">
              <ConnectWalletText className="font-bold text-white">
                Connect Wallet
              </ConnectWalletText>
              <Avatar className="h-6 w-6" />
              <Name />
            </ConnectWallet>
          </Wallet>
        </div>
      </div>


      <button className="md:hidden text-gray-700 text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>


      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white z-50 shadow-lg py-4 flex flex-col items-center space-y-4 md:hidden">
          <ul className="text-gray-700 font-medium w-full text-center">
            <li className="py-2 cursor-pointer hover:text-purple-600" onClick={() => setMenuOpen(false)}>Home</li>
            <li className="py-2 cursor-pointer hover:text-purple-600" onClick={() => setMenuOpen(false)}>Verify Assets</li>
            <li className="py-2 cursor-pointer hover:text-purple-600" onClick={() => setMenuOpen(false)}>API Docs</li>
            <li className="py-2 cursor-pointer hover:text-purple-600" onClick={() => setMenuOpen(false)}>About</li>
          </ul>

          <div className="flex flex-col gap-4">
            <button className="flex items-center gap-2 text-gray-700">
              <FaGlobe className="text-lg" />
              <span>En</span>
            </button>


            <div className="flex justify-center">
              <Wallet className="border-gray-300">
                <ConnectWallet className="bg-purple-700 text-white px-4 py-2 rounded-lg hover:bg-purple-800">
                  <ConnectWalletText className="font-bold text-white">
                    Connect Wallet
                  </ConnectWalletText>
                  <Avatar className="h-6 w-6" />
                  <Name />
                </ConnectWallet>
              </Wallet>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
