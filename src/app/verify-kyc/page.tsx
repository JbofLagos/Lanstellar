"use client";
import React, { useState, useEffect } from "react";
import Navbar from "../_components/navbar/navbar";
import CreatorLeft from "../_components/dashboard-items/creatorLeft";
import { type BaseError, useAccount, useWriteContract } from "wagmi";
import { useRouter } from "next/navigation";
// import { verifierAbi } from "~/Constants/ABI/verifyWalletAddress";
import { lanStellarAbi } from "~/Constants/ABI/lanStellarContracts";

import {
  ConnectWallet,
  Wallet,
  WalletDropdown,
  WalletDropdownDisconnect,
} from "@coinbase/onchainkit/wallet";
import { Address, Avatar, Identity, Name } from "@coinbase/onchainkit/identity";

const VerifyKyc = () => {
  const router = useRouter();

  const { isConnected } = useAccount();

  const { data: hash, isPending, error, writeContract } = useWriteContract();

  function verifyKyc() {
    writeContract({
      address: process.env.NEXT_PUBLIC_LANSTELLAR_CA as `0x${string}`,
      abi: lanStellarAbi,
      functionName: "verifyKYC",
      args: [],
    });
  }

  useEffect(() => {
    localStorage.removeItem("approved_amount");
    if (isConnected) {
      if (hash) {
        router.push(`/creator`);
      }
    } else {
      router.push(`/`);
    }
  }, [isConnected, hash]);

  useEffect(() => {
    if (error) {
      alert((error as BaseError).shortMessage || error.message);
    }
  }, [error]);

  return (
    <div>
      <div className="h-[10vh] w-full">
        <Navbar />
      </div>
      <div className="flex h-[90vh] w-full">
        <div className="hidden w-1/12 bg-[#1C092A] text-white xl:flex">
          <CreatorLeft />
        </div>
        <div className="bg-color w-full content-center p-4">
          <div className="mx-auto w-3/12 flex-col justify-center">
            <Wallet>
              <ConnectWallet className="border border-[#fff] bg-[#230C33] px-32 py-7 hover:bg-[#230c33]">
                <Avatar className="h-6 w-6" />
                <Name />
              </ConnectWallet>
              <WalletDropdown className="bg-gray-300">
                <Identity className="px-4 pb-2 pt-3" hasCopyAddressOnClick>
                  <Avatar />
                  <Name className="text-[#fff]" />
                  <Address className="text-[#fff]" />
                </Identity>
                <WalletDropdownDisconnect className="bg-[#FFD000] stroke-[#230C33] stroke-2 font-bold text-[#230C33] hover:bg-[#FFD000]" />
              </WalletDropdown>
            </Wallet>
            <button
              className="mt-5 flex w-[26vw] items-center justify-center rounded-[16px] bg-[#FFD000] px-8 py-3 text-[20px] font-bold text-black disabled:bg-yellow-700"
              onClick={verifyKyc}
              disabled={isPending}
            >
              Verify KYC
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyKyc;
