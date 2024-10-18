"use client";
import React, {useEffect} from 'react'
import DashboardNav from './dashboardNav'
import DashboardLeft from './dashboardLeft'
import { useAccount, useReadContract } from "wagmi";
import { useRouter } from "next/navigation";
import { verifierAbi } from "~/Constants/ABI/verifyWalletAddress";

interface dashboardLayout {
    children?: React.ReactNode;
    current: number;
}
const DashboardLayout = ({ children, current }: dashboardLayout) => {
    const router = useRouter();
  const {address: userWalletAddress, isConnected } = useAccount();
  
  const { data: isValid } = useReadContract({
    address: process.env.NEXT_PUBLIC_VERIFICATION_CA as `0x${string}`,
    abi: verifierAbi,
    functionName: "verify",
    args: [userWalletAddress as `0x${string}`],
  });

    useEffect(() => {
      if (!isConnected && !isValid) {
        router.push(`/`);
      }
    }, [isConnected, isValid]);
  return (
    <div className='w-full h-screen relative flex flex-col'>
        <div className='bg-main py-4 relative z-10'>
             <DashboardNav />
        </div>
        <div className='w-full flex flex-row flex-grow overflow-y-scroll '>
            <div className='w-1/12 bg-main text-white xl:flex hidden'>
                <DashboardLeft current={current}/>
            </div>
            <div className='w-full flex bg-color p-4 '>
                {children}
            </div>
        </div>


    </div>
  )
}

export default DashboardLayout