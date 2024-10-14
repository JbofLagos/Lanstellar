'use client';
import { useState } from 'react'
import type { nftDetails } from '~/app/creator/page';
// import { useRouter } from "next/navigation";
import Image from 'next/image';
// import { Funnel, SelectDown } from '~/app/assets/icons/icons';
import { Funnel} from "~/app/assets/icons/icons";
// import { NFTS_LAND, NETWORKS, TIMELINE } from '../data/allLands';
import { NFTS_LAND } from "../data/allLands";
// import DashboardModal from '../modals/DashboardModal';

interface TopCollectionsProps {
  setNftDetails: React.Dispatch<React.SetStateAction<nftDetails>>;
  toggleModal: () => void;
}

const TopCollections = ({
  setNftDetails,
  toggleModal,
}: TopCollectionsProps) => {
  // const page: number[] = [3, 6, 9, 12, 15];

  const rowsPerPage = 3;

  const [currentPage, setCurrentPage] = useState(1); // State for current page
  const totalPages = Math.ceil(NFTS_LAND.length / rowsPerPage); // Calculate total pages

  // Calculate the indices for the data slice
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentData = NFTS_LAND.slice(startIndex, endIndex); // Slice the data for current page

  // Handle pagination
  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  // const [modal, setModal] = useState(false);
  // const [nftDetails, setNftDetails] = useState<nftDetails>({
  //   name: "",
  //   price: "",
  // });
  // function toggleModal() {
  //     setModal(!modal);
  // }
  //   const [selectedPage, setSelectedPage] = useState<number | null>(null);
  // const [selectedTimeline, setSelectedTimeline] = useState<string | null>(null);

  //   const handleSelectPage = (number: number) => {
  //     setSelectedPage((prevSelected) =>
  //       prevSelected === number ? null : number,
  //       );
  //   };

  // const handleSelectTimeline = (timeline: { duration: string }) => {
  //     setSelectedTimeline(prevSelected => (prevSelected === timeline.duration ? null : timeline.duration));
  // };

  //   const router = useRouter();
  return (
    <>
      {/* {modal && (
          <DashboardModal
            name={nftDetails?.name}
            price={nftDetails?.price}
            closeModal={toggleModal}
          />
        )} */}
      <div className="flex w-full flex-col overflow-y-scroll pt-8">
        <span className="pb-1 text-[28px] font-bold text-white">
          Top Collection
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
            <thead className="mb-4 flex w-full flex-row pl-32 pr-4">
              <td className="flex w-full items-start">
                <td className="flex flex-row gap-2 font-bold">
                  <p className="text-[20px] text-white">#</p>
                  <p className="text-[20px] text-white">NFT Lands</p>
                </td>
              </td>
              <td className="flex w-full flex-row items-end justify-end gap-20 font-bold">
                <td className="">
                  <p className="text-[16px] text-white">Attribute</p>
                </td>

                <td className="">
                  <p className="text-[16px] text-white">Price</p>
                </td>
                <td className="">
                  <p className="text-[16px] text-white">Volume</p>
                </td>
                <td className="">
                  <p className="text-[16px] text-white">Listed</p>
                </td>
              </td>
            </thead>
            {currentData.map((asset, index) => (
              <tbody
                key={index}
                className="mt-4 flex w-full cursor-pointer flex-row items-center pr-4"
                //   onClick={() => router.push(`/top-collection/${index}`)}
                onClick={() => {
                  setNftDetails(asset);
                  toggleModal();
                }}
              >
                <td className="flex w-full items-start">
                  <td className="flex flex-row items-center gap-2">
                    <p className="text-[16px] text-white">{index + 1}</p>
                    <div className="relative">
                      <Image
                        src={asset.img}
                        alt="land"
                        className="w-[40px] rounded-[8px]"
                      />
                      {/* <Image src={asset.network} alt='eth' className='w-[16px] absolute top-[-1px] right-[-2px]' /> */}
                    </div>

                    <p className="text-[16px] text-white">{asset.name}</p>
                  </td>
                </td>
                <td className="flex w-full flex-row items-end justify-end gap-20">
                  <td className="">
                    <p className="text-[16px] text-white">{asset.attribute}</p>
                  </td>

                  <td className="">
                    <p className="text-[16px] text-white">{asset.price}</p>
                  </td>
                  <td className="">
                    <p className="text-[16px] text-white">{asset.volume}</p>
                  </td>
                  <td className="">
                    <p className="text-[16px] text-white">{asset.listed}</p>
                  </td>
                </td>
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
              <button
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
              </button>
              {/* {page.map((number) => (
              <span
                key={number}
                onClick={() => handleSelectPage(number)}
                className={`cursor-pointer rounded-[16px] px-4 py-2 text-[18px] ${
                  selectedPage === number
                    ? "bg-[#FFD000] text-black"
                    : "text-white"
                }`}
              >
                {number}
              </span>
            ))} */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopCollections