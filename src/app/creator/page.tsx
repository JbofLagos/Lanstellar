'use client';
import { useState } from "react";
import { useAccount, useReadContract } from "wagmi";
import { lanStellarAbi } from "~/Constants/ABI/lanStellarContracts";
import DashboardLayout from '../_components/dashboard-items/dashboardLayout'
import Estates from '../_components/estates/estates'
import TopCollections from '../_components/collections/topCollections';
import TrendingNow from '../_components/trending/trending';
import DashboardModal from '../_components/modals/DashboardModal';

export interface nftDetails {
  name: string;
  price: string;
  img: string;
}


const Creator = () => {

  const { data } = useReadContract({
    address: process.env.NEXT_PUBLIC_LANSTELLAR_CA as `0x${string}`,
    abi: lanStellarAbi,
    functionName: "getListedProperties",
  });

  console.log(data);

  const [modal, setModal] = useState(false);
  const [nftDetails, setNftDetails] = useState<nftDetails>({
    name: "",
    price: "",
    img: ""
  });
  function toggleModal() {
    setModal(!modal);
  }
  return (
    <DashboardLayout current={1}>
      {modal && (
        <DashboardModal details={nftDetails} closeModal={toggleModal} />
      )}

      <div className="relative flex w-full flex-col overflow-y-scroll">
        <span className="text-[35px] font-bold text-white">
          Welcome to Lanstellar
        </span>
        <div className=" ">
          <Estates toggleModal={toggleModal} setNftDetails={setNftDetails} />
        </div>
        <div>
          <TopCollections
            toggleModal={toggleModal}
            setNftDetails={setNftDetails}
          />
        </div>
        <div className="mt-10">
          <TrendingNow
            toggleModal={toggleModal}
            setNftDetails={setNftDetails}
          />
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Creator