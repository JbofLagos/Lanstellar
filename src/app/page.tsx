
"use client";
import React from 'react'
import Image from 'next/image'
import BgImage from './assets/images/start-bg.png'
import Navbar from './_components/navbar/navbar'
import { Coinbase, Metamask, WalletConnect } from './assets/icons/icons'
import DefaultButton from './_components/buttons/defaultButton';
// import { useRouter } from "next/navigation";

const HomePage = () => {
  return (
    <div className='flex flex-col h-screen '>
      <div className='z-10 fixed w-full h-[88px]'>
        <Navbar />
      </div>

      <div className='flex xl:flex-row flex-col flex-grow justify-center items-center w-full h-screen text-white'>
        <div className='xl:w-6/12 w-full bg-[#1C092A] h-screen flex  flex-col flex-grow items-center justify-center wallet-bg relative'>
          <Image src={BgImage} alt='flower' className='w-full h-full object-cover' />

          <div className='w-3/12 ml-8 flex items-center justify-center absolute bottom-4'>
                <DefaultButton
                  addClass='w-6/12'
                  className="default-btn"
                  to="/role"
                >
                  Get Started
                </DefaultButton>
          </div>
        </div>
        <div className='xl:w-6/12 w-full bg-[#230C33] h-screen flex flex-col flex-grow items-center justify-center gap-4 '>
          <div className="flex flex-col justify-center items-center text-center">
            <h3 className='text-white xl:text-[40px] text-[30px] font-bold font-montserrat leading-[48px]'>Connect wallet</h3>
            <span className='xl:text-[24px] text-[16px] text-[white] font-normal xl:max-w-[600px] max-w-[400px] font-montserrat leading-[32px]'>
              Choose a wallet you want to connect. There are several wallet providers.
            </span>
          </div>
            <div className='flex flex-col gap-6 xl:w-6/12 w-10/12 mt-8'>
                <div className='flex flex-row px-6 py-4 gap-4 items-center border border-[#fff] rounded-[20px]'>
                    <span>
                        <Metamask />
                    </span>
                    <span>Metamask</span>
                </div>
                {/* <div className='flex flex-row px-6 py-4 gap-4 items-center border border-[#fff] rounded-[20px]'>
                    <span>
                       <WalletConnect />
                    </span>
                    <span>Wallet Connect</span>
                </div> */}
                <div className='flex flex-row px-6 py-4 gap-4 items-center border border-[#fff] rounded-[20px]'>
                    <span>
                        <Coinbase />
                    </span>
                    <span>Coinbase</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage