"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { useAccount, useReadContract } from "wagmi";
import lanstel from "./assets/images/hero.jpeg";
import Navbar from "./_components/navbar/navbar";
import { useRouter } from "next/navigation";
import { FaSearch } from "react-icons/fa";
import { verifierAbi } from "~/Constants/ABI/verifyWalletAddress";

const HomePage = () => {
  const router = useRouter();
  const { address: userWalletAddress } = useAccount();

  const { data: isValid } = useReadContract({
    address: process.env.NEXT_PUBLIC_VERIFICATION_CA as `0x${string}`,
    abi: verifierAbi,
    functionName: "verify",
    args: [userWalletAddress!],
  });

  useEffect(() => {
    if (userWalletAddress) {
      router.push(isValid ? `/verify-kyc` : `/creator-registration`);
    }
  }, [userWalletAddress, isValid, router]);

  return (
    <div className="flex flex-col min-h-screen">

      <div className="fixed top-0 z-10 w-full bg-transparent">
        <Navbar />
      </div>

  
      <div className="relative flex h-screen items-center justify-center bg-gray-100 px-4 sm:px-6 lg:px-8">
        <Image
          src={lanstel}
          alt="Background"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />

        <div className="relative text-center flex flex-col gap-6 max-w-2xl">
       
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text 
                         bg-gradient-to-r from-purple-700 to-purple-400 leading-tight tracking-tight drop-shadow-lg">
            Instantly Verify <br />
            and Manage <br />
            Real-World Assets <br />
            with AI & Blockchain.
          </h1>

       
          <p className="mt-4 text-lg sm:text-xl text-gray-600">
            Enter an address or GPS coordinates to get ownership history, legitimacy status, and market value.
          </p>

         
          <div className="mt-6 flex w-full  mx-auto items-center 
                          justify-between rounded-lg border border-gray-300 
                          bg-white px-4 py-3 shadow-md">
            <input
              type="text"
              placeholder="Enter Asset ID or Smart Contract Address..."
              className="flex-grow text-black bg-transparent w-full focus:outline-none text-sm sm:text-base"
            />
            <button className="text-purple-600">
              <FaSearch size={20} />
            </button>
          </div>

        
          <div className="mt-10 flex flex-wrap justify-center gap-8 text-purple-700">
            <div className="text-center w-1/2 sm:w-auto">
              <h2 className="text-3xl sm:text-4xl font-bold">50,000+</h2>
              <p className="text-gray-600 text-base sm:text-lg">Verified Assets</p>
            </div>
            <div className="text-center w-1/2 sm:w-auto">
              <h2 className="text-3xl sm:text-4xl font-bold">5,000+</h2>
              <p className="text-gray-600 text-base sm:text-lg">Daily Users</p>
            </div>
            <div className="text-center w-full sm:w-auto">
              <h2 className="text-3xl sm:text-4xl font-bold">98%</h2>
              <p className="text-gray-600 text-base sm:text-lg">Verification Accuracy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
