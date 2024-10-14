'use client';
import React from 'react';
// import { useRouter } from "next/navigation";
import Image from 'next/image';
import { FEATURED_ESTATES } from '../data/allLands';
import type { nftDetails } from '~/app/creator/page';

interface EstatesProps {
  setNftDetails: React.Dispatch<React.SetStateAction<nftDetails>>;
  toggleModal: () => void;
}

const Estates = ({ setNftDetails, toggleModal }: EstatesProps) => {
//   const router = useRouter();
  return (
    <div className="scrollbar-hide flex h-[480px] snap-x snap-mandatory flex-row items-center gap-8 overflow-x-scroll border-b border-white py-8">
      {FEATURED_ESTATES.map((estate, index) => (
        <div
          key={index}
          className="relative h-full min-w-[50%] cursor-pointer snap-center overflow-hidden rounded-[10px]"
          //   onClick={() => router.push(`/top-collection/${index}`)}
          onClick={() => {
            setNftDetails(estate);
            toggleModal();
          }}
        >
          <Image
            src={estate.img}
            alt="estate"
            className="h-full w-full object-cover"
          />
          <div className="absolute bottom-0 left-2 flex w-full items-center justify-between bg-gradient-to-t from-black via-transparent to-transparent px-8 py-2 text-white">
            <h2 className="text-[24px]">{estate.name}</h2>
            <div className="flex justify-between bg-[#001f3f80] p-2 text-[14px]">
              {/* <div className='flex flex-col'>
                                    <span className='text-[18px] text-white'>{estate.time}</span>
                                    <span className='text-[12px] text-white'>Time remaining</span>
                                </div> */}
              <div className="flex flex-col">
                <span className="text-[18px] text-white">{estate.price}</span>
                <span className="text-[12px] text-white">Price</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Estates;
