'use client';
import React from 'react';
// import { useRouter } from "next/navigation";
import Image from 'next/image';
// import { FEATURED_ESTATES } from '../data/allLands';
import type { nftDetails } from '~/app/creator/page';


// interface MyObject {
//   tokenId: number;
//   seller: string;
//   price: number;
//   buyer: string;
//   forSale: boolean;
//   tokenURI: string;
// }
interface EstatesProps {
  setNftDetails: React.Dispatch<React.SetStateAction<nftDetails>>;
  toggleModal: () => void;
  propertyArray: nftDetails[];
}


const Estates = ({
  setNftDetails,
  toggleModal,
  propertyArray,
}: EstatesProps) => {
  //   const router = useRouter();
  return (
    <div className="scrollbar-hide flex h-[480px] snap-x snap-mandatory flex-row items-center gap-8 overflow-x-scroll border-b border-white py-8">
      {propertyArray?.map((property, index) => (
        <div
          key={index}
          className="relative h-full min-w-[50%] cursor-pointer snap-center overflow-hidden rounded-[10px]"
          //   onClick={() => router.push(`/top-collection/${index}`)}
          onClick={() => {
            setNftDetails(property);
            toggleModal();
          }}
        >
          {/* <img
            className="h-full w-full rounded-[16px] object-cover"
            // src={`https://${process.env.NEXT_PUBLIC_PINATA_GATEWAY_URL}/ipfs/${preview}`}
            src={property.tokenURI}
            alt="property Preview"
          ></img> */}
          <Image
            src={property.tokenURI}
            alt="estate"
            width={500}
            height={500}
            className="h-full w-full object-cover"
          />
          <div className="absolute bottom-0 left-2 flex w-full items-center justify-between bg-gradient-to-t from-black via-transparent to-transparent px-8 py-2 text-white">
            {/* <h2 className="text-[24px]">{estate.name}</h2> */}
            <div className="flex justify-between bg-[#001f3f80] p-2 text-[14px]">
              {/* <div className='flex flex-col'>
                                    <span className='text-[18px] text-white'>{estate.time}</span>
                                    <span className='text-[12px] text-white'>Time remaining</span>
                                </div> */}
              <div className="flex flex-col">
                <span className="text-[18px] text-[#ffffff]">
                  {property.price.toString()}
                </span>
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
