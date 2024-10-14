"use client";
import React, { useState } from 'react'
import { useRouter } from "next/navigation";
import Image from 'next/image'
import Pfp from '../../assets/images/ronaldo.png'
import BaseModal from '../modals/basemodal';
//  Phantom,
import { ConnectIcon, Metamask, Coinbase, WalletConnect, NotificationIcon, SearchEllipse } from '~/app/assets/icons/icons'

const DashboardNav = () => {
  const router = useRouter();
  const [connect, setConnect] = useState(false);

  return (
    <div className='w-full flex flex-row justify-between px-14 py-1 relative items-center'>
      <div onClick={() => router.push(`/`)}>
        <span className='text-[24px] text-white cursor-pointer' >LANSTELLAR</span>
      </div>
      <div className='flex'>
        <div className=' flex flex-row py-2 px-3 input-bg items-center w-[600px]'>
          <input
            type='text'
            className='border-none outline-none relative bg-transparent focus:bg-transparent flex w-full placeholder-grey items-center text-[#fff] '
            placeholder='Search accounts, NFT, Tokens...'
          />
          <span>
            <SearchEllipse />
          </span>
        </div>
      </div>
      <div className='flex flex-row gap-8 items-center'>
        {/* <div className='flex w-[180px] bg-[#FFD000] rounded-[16px] py-2 items-center justify-center text-[16px] text-[#1E1E1E]'>
          + Create
        </div> */}

        <span>
          <NotificationIcon />
        </span>

        <div className='flex w-[180px] bg-[#93b7be52] rounded-[16px] py-2 px-4 items-center justify-start gap-4 text-[16px] text-[#1E1E1E] cursor-pointer' onClick={() => setConnect(true)}>
          <ConnectIcon />
          <span className='text-white text-[16px]'>Connect</span>
        </div>

        <div>
          <Image src={Pfp} alt='profile picture' />
        </div>
      </div>


      <BaseModal open={connect}
        setOpen={setConnect}
        className="top-0 bottom-0 justify-center items-center mx-auto my-auto special-index  flex xl:w-[500px] w-full">
        <div className='flex flex-col gap-8 w-full justify-center'>
          <div className='text-[30px]'>Connect to</div>
          <div className='flex flex-col gap-10 w-full items-start px-20 mt-2'>
              <div className='flex flex-row items-center px-4 gap-8'>
                  <span>
                    <Metamask />
                  </span>
                  <span className='text-white text-[20px] font-light'>Metamask</span>
              </div>
              <div className='flex flex-row items-center px-4 gap-8'>
                  <span>
                    <Coinbase />
                  </span>
                  <span className='text-white text-[20px] font-light'>Coinbase</span>
              </div>
              {/* <div className='flex flex-row items-center px-4 gap-8'>
                  <span>
                    <Phantom />
                  </span>
                  <span className='text-white text-[20px] font-light'>Phantom</span>
              </div> */}
              <div className='flex flex-row items-center px-4 gap-8'>
                  <span>
                    <WalletConnect />
                  </span>
                  <span className='text-white text-[20px] font-light'>Wallet Connect</span>
              </div>
          </div>
        </div>
      </BaseModal>
    </div>
  )
}

export default DashboardNav