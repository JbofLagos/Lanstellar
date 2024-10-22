import React from 'react'
import Image from 'next/image';
// import { TRENDING_LANDS } from '../data/allLands'
import { Trending } from '~/app/assets/icons/icons';
import type { nftDetails } from '~/app/creator/page';

interface TrendingNowProps {
  setNftDetails: React.Dispatch<React.SetStateAction<nftDetails>>;
  toggleModal: () => void;
  propertyArray: nftDetails[];
}

const TrendingNow = ({
  setNftDetails,
  toggleModal,
  propertyArray,
}: TrendingNowProps) => {
  return (
    <div className="flex flex-col">
      <span className="py-8 text-[28px] font-bold text-white">
        Trending Now
      </span>

      <div className="scrollbar-hide flex snap-x snap-mandatory flex-row items-center gap-8 overflow-x-scroll py-8">
        {propertyArray?.map((trending, index) => (
          <div
            key={index}
            // relative min-h-[25%] min-w-[25%] cursor-pointer snap-center overflow-hidden
            className="h-auto min-w-[25%] cursor-pointer snap-center overflow-hidden rounded-[16px]"
            onClick={() => {
              setNftDetails(trending);
              toggleModal();
            }}
          >
            <div className="flex h-full w-auto flex-col rounded-[16px] bg-[#1C092A] p-4">
              <Image
                priority
                src={trending.tokenURI}
                alt="image"
                width={700}
                height={400}
                className="h-auto w-auto rounded-[16px]"
                // className="h-[350px] w-full rounded-[16px] object-cover"
              />
              <div className="flex flex-row items-center gap-2 py-4">
                {/* <span className="text-[24px] font-semibold text-white">
                  {trending.name}
                </span> */}
                <span>
                  <Trending />
                </span>
              </div>

              <div className="flex flex-row justify-between rounded-[16px] bg-[#ffffff14] p-4">
                {/* <div className='flex flex-col'>
                                        <span className='text-white text-[20px] font-extralight'>Starts in</span>
                                        <span className='text-white text-[20px] font-bold'>{trending.startTime}</span>
                                    </div> */}
                <div className="flex flex-col">
                  <span className="text-[20px] font-extralight text-white">
                    Price
                  </span>
                  <span className="text-[20px] font-bold text-white">
                    {trending.price.toString()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingNow
