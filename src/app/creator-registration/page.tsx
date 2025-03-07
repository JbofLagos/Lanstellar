"use client";
import React, { useEffect } from "react";
import Navbar from "../_components/navbar/navbar";
import CreatorLeft from "../_components/dashboard-items/creatorLeft";
import CreatorForm from "../_components/dashboard-items/creatorForm";
import {
  type BaseError,
  useAccount,
  useReadContract,
  useWriteContract,
  // useWaitForTransactionReceipt,
} from "wagmi";
import { useRouter } from "next/navigation";
import { verifierAbi } from "~/Constants/ABI/verifyWalletAddress";

const CreatorRegistration = () => {

  const router = useRouter();
  
  const { address: userWalletAddress, isConnected } = useAccount();

  // useEffect(() => {
  //   if (!isConnected) {
  //     router.push(`/`);
  //   }
  // }, [isConnected]);

  const { data: isValid } = useReadContract({
    address: process.env.NEXT_PUBLIC_VERIFICATION_CA as `0x${string}`,
    abi: verifierAbi,
    functionName: "verify",
    args: [userWalletAddress!],
  });


  const { data: hash, isPending, error, writeContract } = useWriteContract();

  function verifyAddress() {
    writeContract({
      address: process.env.NEXT_PUBLIC_VERIFICATION_CA as `0x${string}`,
      abi: verifierAbi,
      functionName: "authorizeAddress",
      args: [userWalletAddress!],
    });
  }

  // const { isLoading: isConfirming, isSuccess: isConfirmed } =
  //   useWaitForTransactionReceipt({
  //     hash,
  //   });
  
  // console.log("hash:", hash, "isConfirming:", isConfirming, "isConfirmed:", isConfirmed);
  // console.log("hash:", hash, "isPending:", isPending);

  useEffect(() => {
    if (isConnected) {
      if (hash) {
        router.push(`/approve`);
      }
    } else {
      router.push(`/`);
    }
  }, [isConnected, hash, router]);

  // useEffect(() => {
  //   if (!isConnected) {
  //     router.push(`/`);
  //   }
  //   if (isConfirmed) {
  //     router.push(`/creator`);
  //   }
  // }, [isConnected, isConfirmed]);

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
          {isValid ? <p className="text-[#ffffff]">You have been Verified</p> : <CreatorForm verifyAddress={verifyAddress} confirming={isPending} />}
        </div>
      </div>
    </div>
  );
};

export default CreatorRegistration;
