import React from 'react'
import Image from 'next/image'
import BgImage from '../assets/images/start-bg.png'
import Navbar from '../_components/navbar/navbar'
// import { Coinbase, Metamask, WalletConnect } from '../assets/icons/icons'

const SelectWallet = () => {
  return (
    <div className='flex flex-col h-screen '>
      <div className='z-10'>
        <Navbar />
      </div>

      <div className='flex xl:flex-row flex-col flex-grow justify-center items-center w-full h-screen text-white'>
        <div className='xl:w-6/12 w-full bg-[#1C092A] h-screen flex flex-grow items-center justify-center wallet-bg'>
          <Image src={BgImage} alt='flower' width={400} height={400} />
        </div>
        <div className='xl:w-6/12 w-full bg-[#230C33] h-screen flex flex-col flex-grow items-center justify-center gap-4 '>
          <div className="flex flex-col justify-center items-center text-center">
            <h3 className='text-white xl:text-[40px] text-[30px] font-bold'>Connect wallet</h3>
            <span className='xl:text-[24px] text-[16px] text-[white] font-light xl:max-w-[600px] max-w-[400px]'>
              Choose a wallet you want to connect. There are several wallet providers.
            </span>
          </div>
            {/* <div className='flex flex-col gap-6 xl:w-6/12 w-10/12 mt-8'>
                <div className='flex flex-row px-6 py-4 gap-4 items-center border border-[#fff] rounded-[20px]'>
                    <span>
                        <Metamask />
                    </span>
                    <span>Metamask</span>
                </div>
                <div className='flex flex-row px-6 py-4 gap-4 items-center border border-[#fff] rounded-[20px]'>
                    <span>
                       <WalletConnect />
                    </span>
                    <span>Wallet Connect</span>
                </div>
                <div className='flex flex-row px-6 py-4 gap-4 items-center border border-[#fff] rounded-[20px]'>
                    <span>
                        <Coinbase />
                    </span>
                    <span>Coinbase</span>
                </div>
            </div> */}
        </div>
      </div>
    </div>
  )
}

export default SelectWallet