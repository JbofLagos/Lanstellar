"use client";
import { useState, useEffect } from "react";
import { type BaseError, useReadContract, useWriteContract } from "wagmi";
import { lanStellarAbi } from "~/Constants/ABI/lanStellarContracts";
import DashboardLayout from "../_components/dashboard-items/dashboardLayout";
import Estates from "../_components/estates/estates";
import TopCollections from "../_components/collections/topCollections";
import TrendingNow from "../_components/trending/trending";
import DashboardModal from "../_components/modals/DashboardModal";

export interface nftDetails {
  tokenId: number;
  seller: string;
  price: number;
  buyer: string;
  forSale: boolean;
  tokenURI: string;
}

const Creator = () => {
  const { data } = useReadContract({
    address: process.env.NEXT_PUBLIC_LANSTELLAR_CA as `0x${string}`,
    abi: lanStellarAbi,
    functionName: "getListedProperties",
  });

  const [modal, setModal] = useState(false);

  const [nftDetails, setNftDetails] = useState<nftDetails>({
    tokenId: 2,
    seller: "",
    price: 2,
    buyer: "",
    forSale: true,
    tokenURI: "",
  });

  

  function toggleModal() {
    setModal(!modal);
  }

  const { data: hash, isPending, error, writeContract } = useWriteContract();

  
  function handleBuyProperty() {
    const sellerPercent = (1 / 100) * Number(nftDetails.price);
    const totalMoneyToPay =
      BigInt(nftDetails.price) + BigInt(Math.round(sellerPercent));
    
    writeContract({
      address: process.env.NEXT_PUBLIC_LANSTELLAR_CA as `0x${string}`,
      abi: lanStellarAbi,
      functionName: "buyProperty",
      args: [BigInt(nftDetails.tokenId), totalMoneyToPay],
    });
  }

  useEffect(() => {
    localStorage.removeItem("token_ipfs");
    if (hash) {
      toggleModal();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hash]);

  useEffect(() => {
    if (error) {
      alert((error as BaseError).shortMessage || error.message);
    }
  }, [error]);


  return (
    <DashboardLayout current={1}>
      {modal && (
        <DashboardModal
          isPending={isPending}
          buy={handleBuyProperty}
          details={nftDetails}
          closeModal={toggleModal}
        />
      )}

      <div className="relative flex w-full flex-col overflow-y-scroll">
        <span className="text-[35px] font-bold text-white">
          Welcome to Lanstellar
        </span>
        <div className=" ">
          <Estates
            // @ts-expect-error not needed
            propertyArray={data}
            toggleModal={toggleModal}
            setNftDetails={setNftDetails}
          />
        </div>
        <div>
          <TopCollections
            // @ts-expect-error not needed
            propertyArray={data}
            toggleModal={toggleModal}
            setNftDetails={setNftDetails}
          />
        </div>
        <div className="mt-10">
          <TrendingNow
            // @ts-expect-error not needed
            propertyArray={data}
            toggleModal={toggleModal}
            setNftDetails={setNftDetails}
          />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Creator;
