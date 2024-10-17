"use client";
import React, {useEffect} from 'react'
import DashboardNav from './dashboardNav'
import DashboardLeft from './dashboardLeft'
import { useAccount } from "wagmi";
import { useRouter } from "next/navigation";

interface dashboardLayout {
    children?: React.ReactNode;
    current: number;
}
const DashboardLayout = ({ children, current }: dashboardLayout) => {
    const router = useRouter();
    const { isConnected } = useAccount();

    useEffect(() => {
      if (!isConnected) {
        router.push(`/`);
      }
    }, [isConnected]);
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