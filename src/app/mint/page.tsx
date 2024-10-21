"use client";
import React, { useState, useEffect } from "react";
import Navbar from "../_components/navbar/navbar";
import CreatorLeft from "../_components/dashboard-items/creatorLeft";
import { type BaseError, useAccount, useWriteContract } from "wagmi";
import { useRouter } from "next/navigation";
import { tokenAbi } from "~/Constants/ABI/tokenContracts";
// import { verifierAbi } from "~/Constants/ABI/verifyWalletAddress";

const Mint = () => {
  const router = useRouter();

  const [tokenAmount, setTokenAmount] = useState("");

  function handleChange(evt: React.ChangeEvent<HTMLInputElement>) {
    const value = evt.target.value;
    setTokenAmount(value);
  }

  const { address: userWalletAddress, isConnected } = useAccount();

  const { data: hash, isPending, error, writeContract } = useWriteContract();

  function mint() {
    if (Number(localStorage.getItem("approved_amount"))) {
      if (
        Number(tokenAmount) > Number(localStorage.getItem("approved_amount"))
      ) {
        return alert("Amount cannot be greater than approved amount");
      }
    }

    if (!Number(localStorage.getItem("approved_amount"))) {
      return alert("Your Amount hasn't been approved ");
    }

    writeContract({
      address: process.env.NEXT_PUBLIC_TOKEN_CA as `0x${string}`,
      abi: tokenAbi,
      functionName: "mint",
      args: [userWalletAddress as `0x${string}`, BigInt(Number(tokenAmount))],
    });
  }

  useEffect(() => {
    if (isConnected) {
      if (hash) {
        router.push(`/verify-kyc`);
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
          <div className="flex justify-center mb-5">
            <p className="text-[#ffffff]">
              Approved Amount: {localStorage.getItem("approved_amount")}
            </p>
          </div>
          <div className="mx-auto mb-5 flex w-3/12 flex-col items-center justify-center">
            <label className="mb-2 block text-[20px] text-sm font-normal text-gray-300">
              Amount
            </label>
            <input
              className="block w-full appearance-none rounded border-2 border-gray-500 bg-transparent pl-2 leading-8 text-gray-300 placeholder:text-[13px] focus:border-white focus:outline-none"
              type="text"
              name="tokenPrice"
              value={tokenAmount}
              onChange={handleChange}
              placeholder="1000"
              autoComplete="off"
            />
          </div>
          <div className="mx-auto flex w-3/12 items-center justify-center">
            <button
              className="flex w-full items-center justify-center rounded-[16px] bg-[#FFD000] px-8 py-3 text-[20px] font-bold text-black disabled:bg-yellow-700"
              onClick={mint}
              disabled={isPending || !tokenAmount}
            >
              Mint
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mint;
