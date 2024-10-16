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
    <div className="relative flex w-full flex-row items-center justify-between px-14 py-1">
      <div className="flex" onClick={() => router.push(`/creator`)}>
        <span className="cursor-pointer items-center text-[24px] text-white">
          <Image
            alt="logo"
            // className="items-center"
            src="/images/lanstellarlogonew.png"
            width={220}
            height={220}
          />
        </span>
      </div>
      <div className="flex">
        <div className="input-bg flex w-[600px] flex-row items-center px-3 py-2">
          <input
            type="text"
            className="placeholder-grey relative flex w-full items-center border-none bg-transparent text-[#fff] outline-none focus:bg-transparent"
            placeholder="Search accounts, NFT, Tokens..."
          />
          <span>
            <SearchEllipse />
          </span>
        </div>
      </div>
      <div className="flex flex-row items-center gap-8">
        {/* <div className='flex w-[180px] bg-[#FFD000] rounded-[16px] py-2 items-center justify-center text-[16px] text-[#1E1E1E]'>
          + Create
        </div> */}

        <span>
          <NotificationIcon />
        </span>

        <div
          className="flex w-[180px] cursor-pointer items-center justify-start gap-4 rounded-[16px] bg-[#93b7be52] px-4 py-2 text-[16px] text-[#1E1E1E]"
          onClick={() => setConnect(true)}
        >
          <ConnectIcon />
          <span className="text-[16px] text-white">Connect</span>
        </div>

        {/* <div>
          <Image src={Pfp} alt='profile picture' />
        </div> */}
      </div>

      <BaseModal
        open={connect}
        setOpen={setConnect}
        className="special-index bottom-0 top-0 mx-auto my-auto flex w-full items-center justify-center xl:w-[500px]"
      >
        <div className="flex w-full flex-col justify-center gap-8">
          <div className="text-[30px]">Connect to</div>
          <div className="mt-2 flex w-full flex-col items-start gap-10 px-20">
            <div className="flex flex-row items-center gap-8 px-4">
              <span>
                <Metamask />
              </span>
              <span className="text-[20px] font-light text-white">
                Metamask
              </span>
            </div>
            <div className="flex flex-row items-center gap-8 px-4">
              <span>
                <Coinbase />
              </span>
              <span className="text-[20px] font-light text-white">
                Coinbase
              </span>
            </div>
            {/* <div className='flex flex-row items-center px-4 gap-8'>
                  <span>
                    <Phantom />
                  </span>
                  <span className='text-white text-[20px] font-light'>Phantom</span>
              </div> */}
            {/* <div className="flex flex-row items-center gap-8 px-4">
              <span>
                <WalletConnect />
              </span>
              <span className="text-[20px] font-light text-white">
                Wallet Connect
              </span>
            </div> */}
          </div>
        </div>
      </BaseModal>
    </div>
  );
}

export default DashboardNav