"use client";
import React, { useEffect } from "react";
import Navbar from "../_components/navbar/navbar";
import CreatorLeft from "../_components/dashboard-items/creatorLeft";
import CreatorForm from "../_components/dashboard-items/creatorForm";
import {
  type BaseError,
  useAccount,
  useWriteContract,
  useWaitForTransactionReceipt,
} from "wagmi";
import { useRouter } from "next/navigation";
import { verifierAbi } from "~/Constants/ABI/verifyWalletAddress";

const CreatorRegistration = () => {

  const router = useRouter();
  const { isConnected } = useAccount();

  useEffect(() => {
    if (!isConnected) {
      router.push(`/`);
    }
  }, [isConnected]);

  const { address: userWalletAddress } = useAccount();

  const { data: hash, error, writeContract } = useWriteContract();

  function verifyAddress() {
    writeContract({
      address: process.env.NEXT_PUBLIC_VERIFICATION_CA as `0x${string}`,
      abi: verifierAbi,
      functionName: "authorizeAddress",
      args: [userWalletAddress as `0x${string}`],
    });
  }

  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash,
    });

  useEffect(() => {
    if (isConfirmed) {
      router.push(`/creator`);
    }
  }, [isConfirmed]);

  useEffect(() => {
    if (error) {
      alert((error as BaseError).shortMessage || error.message);
    }
  }, [error]);

  return (
    //  relative flex flex-col h-screen
    <div>
      <div className="h-[10vh] w-full">
        <Navbar />
      </div>
      <div className="flex h-[90vh] w-full">
        <div className="hidden w-1/12 bg-[#1C092A] text-white xl:flex">
          <CreatorLeft />
        </div>
        <div className="bg-color w-full content-center p-4">
          <CreatorForm verifyAddress={verifyAddress} confirming={isConfirming} />
        </div>
      </div>
    </div>
  );
};

export default CreatorRegistration;
