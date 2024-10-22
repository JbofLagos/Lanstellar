'use client';
import { useState, useEffect } from 'react';
import { type BaseError, useWriteContract } from "wagmi";
import { lanStellarAbi } from '~/Constants/ABI/lanStellarContracts';
import type { nftDetails } from '~/app/creator/page';
// import { useRouter } from "next/navigation";
import Image from 'next/image';
// import { Funnel, SelectDown } from '~/app/assets/icons/icons';
import { Funnel} from "~/app/assets/icons/icons";
// import { NFTS_LAND, NETWORKS, TIMELINE } from '../data/allLands';
// import { NFTS_LAND } from "../data/allLands";
// import DashboardModal from '../modals/DashboardModal';

interface TopCollectionsProps {
  setNftDetails: React.Dispatch<React.SetStateAction<nftDetails>>;
  toggleModal: () => void;
  propertyArray: nftDetails[];
}

const TopCollections = ({
  setNftDetails,
  toggleModal,
  propertyArray,
}: TopCollectionsProps) => {

  const rowsPerPage = 3;

  const [currentPage, setCurrentPage] = useState(1); // State for current page
  const totalPages = Math.ceil(propertyArray?.length / rowsPerPage); // Calculate total pages

  const page = totalPages;
  // const pageArray: number[] = [...Array(page)] as number[];
  const pageNumber: number[] = Array.from({ length: page }, (_, i) => i + 1);
  // const pageNumber = pageArray.map((_, i: number) => i + 1);

  // Calculate the indices for the data slice
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentData = propertyArray?.slice(startIndex, endIndex); // Slice the data for current page

  // Handle pagination
  //   const handleNextPage = () => {
  //     setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  //   };

  //   const handlePreviousPage = () => {
  //     setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  //     };

  const handlePage = (number: number) => {
    setCurrentPage(Math.min(number, totalPages));
  };

  const { data: hash, isPending, error, writeContract } = useWriteContract();

  const [selectedTokenId, setSelectedTokenId] = useState<number | null>(null);
  function handleWithdrawFunds(tokenId: number) {
    setSelectedTokenId(tokenId);
    writeContract({
      address: process.env.NEXT_PUBLIC_LANSTELLAR_CA as `0x${string}`,
      abi: lanStellarAbi,
      functionName: "withdrawFunds",
      args: [BigInt(tokenId)],
    });
  }

  useEffect(() => {
    if (hash) {
      alert("Withdrawal Successful");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hash]);

  useEffect(() => {
    if (error) {
      alert((error as BaseError).shortMessage || error.message);
    }
  }, [error]);

  return (
    <>
      <div className="flex w-full flex-col overflow-y-scroll pt-8">
        <span className="pb-1 text-[28px] font-bold text-white">
          Listed Properties
        </span>

        {/* <div className='flex flex-row bg-[#1C092A] rounded-[16px] w-full p-3'>
                <div className='flex flex-row items-center'>
                    {
                        NETWORKS.map((network, index) => (
                            <div key={index} style={{ position: 'relative', left: `${index * -10}px`, zIndex: index }}>
                                <Image src={network.img} alt='images' />
                            </div>
                        ))
                    }

                    <div className='ml-1 flex flex-row gap-2 items-center'>
                        <span className='text-white text-[16px] cursor-pointer'>All Networks</span>
                        <span>
                            <SelectDown />
                        </span>
                    </div>
                </div>
                <div className='flex flex-row items-center gap-10 ml-16 '>
                    {TIMELINE.map((timeline, index) => (
                        <div
                            key={index}
                            className={`text-[18px] cursor-pointer px-6 py-3 rounded-[16px] ${selectedTimeline === timeline.duration ? 'bg-[#FFD000] text-black' : 'text-white'
                                }`}
                            onClick={() => handleSelectTimeline(timeline)}
                        >
                            <span >{timeline.duration}</span>
                        </div>
                    ))}
                </div>
            </div> */}

        <div className="mt-4 flex w-full justify-between">
          <table className="flex w-full flex-col gap-1">
            <thead className="mb-4 flex w-full flex-row pl-3 pr-4">
              <tr className="flex w-full items-start">
                <td className="flex flex-row gap-5 font-bold">
                  <p className="text-[16px] text-white">S/N</p>
                  <p className="text-[16px] text-white">Property Image</p>
                </td>
              </tr>
              <tr className="mr-11 flex w-full flex-row items-end justify-end gap-24 font-bold">
                <td className="">
                  <p className="text-[16px] text-white">For Sale</p>
                </td>

                <td className="">
                  <p className="text-[16px] text-white">Price</p>
                </td>
                <td className="">
                  <p className="text-[16px] text-white">TokenID</p>
                </td>
                <td className="">
                  <p className="text-[16px] text-white">Action</p>
                </td>
              </tr>
            </thead>
            {currentData?.map((asset, index) => (
              <tbody
                key={index}
                className="mt-4 flex w-full flex-row items-center pr-4"
                //   onClick={() => router.push(`/top-collection/${index}`)}
              >
                <tr
                  className="flex w-full cursor-pointer items-start pl-3"
                  onClick={() => {
                    setNftDetails(asset);
                    toggleModal();
                  }}
                >
                  <td className="flex flex-row items-center gap-8">
                    <p className="text-[16px] text-white">{index + 1}</p>
                    <div className="relative">
                      {/* <img
                        className="h-[35px] w-[40px] rounded-[16px]"
                        src={asset.tokenURI}
                        alt="Avatar Preview"
                      ></img> */}

                      <Image
                        priority
                        src={asset.tokenURI}
                        alt="land"
                        width={40}
                        height={40}
                        className="w-auto rounded-[8px]"
                      />
                      {/* <Image src={asset.network} alt='eth' className='w-[16px] absolute top-[-1px] right-[-2px]' /> */}
                    </div>

                    {/* <p className="text-[16px] text-white">{asset.name}</p> */}
                  </td>
                </tr>
                <tr className="mr-[10px] flex w-full flex-row items-end justify-end gap-32">
                  <td className="">
                    <p className="text-[16px] text-white">
                      {asset.forSale ? "Yes" : "No"}
                    </p>
                  </td>

                  <td className="">
                    <p className="text-[16px] text-white">
                      {asset.price.toString()}
                    </p>
                  </td>
                  <td className="">
                    <p className="text-[16px] text-white">
                      {asset.tokenId.toString()}
                    </p>
                  </td>
                  <td className="">
                    <button
                      className="flex w-full items-center justify-center rounded-[16px] bg-[#FFD000] px-3 py-2 text-[10px] font-bold text-black disabled:bg-yellow-700"
                      onClick={() => handleWithdrawFunds(asset.tokenId)}
                      disabled={asset.tokenId === selectedTokenId && isPending}
                    >
                      Withdraw Funds
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>

        <div className="mt-10 flex w-3/12 flex-row items-center gap-2">
          <span>
            <Funnel />
          </span>
          <div className="flex flex-row rounded-[16px] bg-[#1C092A] py-2 pr-3">
            <div className="flex flex-row gap-14">
              {/* <button
                className="flex w-full items-center justify-center rounded-[16px] bg-[#FFD000] px-8 py-3 text-[20px] font-bold text-black disabled:bg-yellow-700"
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
              >
                Prev
              </button>
              <button
                className="flex w-full items-center justify-center rounded-[16px] bg-[#FFD000] px-8 py-3 text-[20px] font-bold text-black disabled:bg-yellow-700"
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
              >
                Next
              </button> */}
              {pageNumber.map((number) => (
                <span
                  key={number}
                  onClick={() => handlePage(number)}
                  className={`cursor-pointer rounded-[16px] px-4 py-2 text-[18px] ${
                    currentPage === number
                      ? "bg-[#FFD000] text-black"
                      : "text-white"
                  }`}
                >
                  {number}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopCollections