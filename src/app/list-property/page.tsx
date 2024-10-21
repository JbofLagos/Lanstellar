"use client";
import { useState, useEffect } from "react";
import DashboardLayout from "../_components/dashboard-items/dashboardLayout";
// import Image from "next/image";
import { useRouter } from "next/navigation";
// import { Upload } from "../assets/icons/icons";
import { type BaseError, useWriteContract } from "wagmi";
import { lanStellarAbi } from "~/Constants/ABI/lanStellarContracts";

// export interface tokenDetails {
//   tokenId: any;
//   tokenName: string;
//   tokenPrice: number;
//   tokenDesc: string;
// }

const ListProperty = () => {
    const router = useRouter();
    
    const [tokenIpfs, setTokenIpfs] = useState("");

    useEffect(() => {
      if (localStorage.getItem("token_ipfs")) {
        setTokenIpfs(localStorage.getItem("token_ipfs")!);
      } else {
        router.push(`/create-token`);
      }
    }, [router]);
     
  const [tokenId, setTokenId] = useState("");
  const [tokenPrice, setTokenPrice] = useState("");

    function handleTokenIdChange(evt: React.ChangeEvent<HTMLInputElement>) {
      const value = evt.target.value;
      setTokenId(value);
    }

  function handlePriceChange(evt: React.ChangeEvent<HTMLInputElement>) {
    const value = evt.target.value;
    setTokenPrice(value);
  }

  const { data: hash, isPending, error, writeContract } = useWriteContract();

  async function handleListProperty() {
    writeContract({
      address: process.env.NEXT_PUBLIC_LANSTELLAR_CA as `0x${string}`,
      abi: lanStellarAbi,
      functionName: "listNewProperty",
      args: [BigInt(Number(tokenId)), BigInt(Number(tokenPrice)), tokenIpfs],
    });
  }

  useEffect(() => {
    if (hash) {
      setTokenPrice("");
      setTokenId("");
      router.push(`/creator`);
    }
  }, [hash, router]);

  useEffect(() => {
    if (error) {
      alert((error as BaseError).shortMessage || error.message);
    }
  }, [error]);

  return (
    <DashboardLayout current={3}>
      <div className="w-full">
        <span className="text-[35px] font-bold text-white">List Property</span>
        {/* <div> */}
        <div className="mx-auto flex w-3/12 flex-col items-center justify-center pt-28">
          <div className="mb-5 w-full">
            <label className="mb-2 block text-[20px] text-sm font-normal text-gray-300">
              Token ID
            </label>
            <input
              className="block w-full appearance-none rounded border-2 border-gray-500 bg-transparent pl-2 leading-8 text-gray-300 placeholder:text-[13px] focus:border-white focus:outline-none"
              type="text"
              name="tokenId"
              value={tokenId}
              //   readOnly
              onChange={handleTokenIdChange}
              placeholder="2"
              autoComplete="off"
            />
          </div>
          <div className="mb-5 w-full">
            <label className="mb-2 block text-[20px] text-sm font-normal text-gray-300">
              Price
            </label>
            <input
              className="block w-full appearance-none rounded border-2 border-gray-500 bg-transparent pl-2 leading-8 text-gray-300 placeholder:text-[13px] focus:border-white focus:outline-none"
              type="text"
              name="tokenPrice"
              value={tokenPrice}
              onChange={handlePriceChange}
              placeholder="20"
              autoComplete="off"
            />
          </div>
        </div>
        {/* </div> */}

        <div className="mx-auto flex w-3/12 justify-center">
          <button
            className="flex w-full items-center justify-center rounded-[16px] bg-[#FFD000] px-8 py-3 text-[20px] font-bold text-black disabled:bg-yellow-700"
            onClick={handleListProperty}
            disabled={isPending || !tokenPrice || !tokenId}

            // disabled={
            //   isPending ||
            //   !state.tokenId ||
            //   !state.tokenName ||
            //   !state.tokenPrice ||
            //   !tokenDesc ||
            //   !preview
            // }
          >
            List Porperty
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ListProperty;
