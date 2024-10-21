"use client";
import React, { useEffect } from "react";
import DashboardNav from "./dashboardNav";
import DashboardLeft from "./dashboardLeft";
import { useAccount, useReadContract } from "wagmi";
import { useRouter } from "next/navigation";
// import { verifierAbi } from "~/Constants/ABI/verifyWalletAddress";
import { lanStellarAbi } from "~/Constants/ABI/lanStellarContracts";

interface dashboardLayout {
  children?: React.ReactNode;
  current: number;
}
const DashboardLayout = ({ children, current }: dashboardLayout) => {
  const router = useRouter();
  const { address: userWalletAddress, isConnected } = useAccount();

  const { data: isVerified } = useReadContract({
    address: process.env.NEXT_PUBLIC_LANSTELLAR_CA as `0x${string}`,
    abi: lanStellarAbi,
    functionName: "getKYCStatus",
    args: [userWalletAddress as `0x${string}`],
  });

  useEffect(() => {
    if (!isConnected) {
      router.push(`/`);
    }
  }, [isConnected]);


  return (
    <div className="relative flex h-screen w-full flex-col">
      <div className="bg-main relative z-10 py-4">
        <DashboardNav />
      </div>
      <div className="flex w-full flex-grow flex-row overflow-y-scroll">
        <div className="bg-main hidden w-1/12 text-white xl:flex">
          <DashboardLeft current={current} />
        </div>
        {isVerified ? (
          <div className="bg-color flex w-full p-4">{children}</div>
        ) : (
          <div className="bg-color flex w-full p-4 content-center justify-center">
            <p className="text-[#ffffff]">User Not Verified</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardLayout;
