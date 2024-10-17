
"use client";
import React, {useEffect} from 'react'
import Image from 'next/image'
import { useAccount } from "wagmi";
// import BgImage from './assets/images/start-bg.png'
import lanstel from "./assets/images/lanstel-bg.png"
import Navbar from './_components/navbar/navbar'
// import { Coinbase, Metamask, WalletConnect } from './assets/icons/icons'
import DefaultButton from './_components/buttons/defaultButton';
import { useRouter } from "next/navigation";
import {
  ConnectWallet,
  Wallet,
  WalletDropdown,
  WalletDropdownDisconnect,
} from "@coinbase/onchainkit/wallet";
import { Address, Avatar, Name, Identity } from "@coinbase/onchainkit/identity";

const HomePage = () => {
  const router = useRouter();
  // const [walletConnected, setWalletConnected] = useState(false);
  // const [walletAddress, setWalletAddress] = useState<string | null>(null);

  const { isConnected } = useAccount();

  useEffect(() => {
    if (isConnected) {
      router.push(`/creator`);
    }
  }, [isConnected]);
  return (
    <div className="flex h-screen flex-col">
      <div className="fixed z-10 h-[88px] w-full">
        <Navbar />
      </div>

      <div className="flex h-screen w-full flex-grow flex-col items-center justify-center text-white xl:flex-row">
        <div className="wallet-bg relative flex h-screen w-full flex-grow flex-col items-center justify-center bg-[#1C092A] xl:w-6/12">
          <Image
            src={lanstel}
            alt="flower"
            className="h-full w-full object-cover"
          />

          <div className="absolute bottom-4 ml-8 flex w-3/12 items-center justify-center">
            <DefaultButton addClass="w-6/12" className="default-btn" to="/role">
              Get Started
            </DefaultButton>
          </div>
        </div>
        <div className="flex h-screen w-full flex-grow flex-col items-center justify-center gap-4 bg-[#230C33] xl:w-6/12">
          <div className="flex flex-col items-center justify-center text-center">
            <h3 className="font-montserrat text-[30px] font-bold leading-[48px] text-white xl:text-[40px]">
              Connect wallet
            </h3>
            <span className="max-w-[400px] font-montserrat text-[16px] font-normal leading-[32px] text-[white] xl:max-w-[600px] xl:text-[24px]">
              Choose a wallet you want to connect. There are several wallet
              providers.
            </span>
          </div>
          <div className="mt-8 flex w-10/12 flex-col gap-6 xl:w-6/12">
            <div className="flex flex-row items-center gap-4 rounded-[20px] border border-[#fff] px-6 py-4">
              <Wallet>
                <ConnectWallet className="border-3 border-[#fff] bg-blue-800 text-[#fff]">
                  <Avatar className="h-6 w-6" />
                  <Name />
                </ConnectWallet>
                <WalletDropdown className="bg-gray-300">
                  <Identity className="px-4 pb-2 pt-3" hasCopyAddressOnClick>
                    <Avatar />
                    <Name className="text-[#fff]" />
                    <Address className="text-[#fff]" />
                  </Identity>
                  <WalletDropdownDisconnect className="bg-[#FFD000] font-semibold text-[#230C33]" />
                </WalletDropdown>
              </Wallet>

              {/* <WalletDropdownDisconnect className="bg-blue-200" /> */}
            </div>

            {/* <div className="flex flex-row items-center gap-4 rounded-[20px] border border-[#fff] px-6 py-4">
              <span>
                <Metamask />
              </span>
              <span>Metamask</span>
            </div> */}

            {/* <div className='flex flex-row px-6 py-4 gap-4 items-center border border-[#fff] rounded-[20px]'>
                    <span>
                       <WalletConnect />
                    </span>
                    <span>Wallet Connect</span>
                </div> */}

            {/* <div className="flex flex-row items-center gap-4 rounded-[20px] border border-[#fff] px-6 py-4">
              <span>
                <Coinbase />
              </span>
              <span>Coinbase</span>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage