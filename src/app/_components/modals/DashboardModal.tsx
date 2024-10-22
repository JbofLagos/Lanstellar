"use client";
import type { nftDetails } from "~/app/creator/page";
import Image from "next/image";
// import type { nftDetails } from "../collections/topCollections";
// import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";

interface DashboardModalProps {
  details: nftDetails;
  buy: () => void;
  isPending: boolean;
  //   name: string;
  //   price: string;
  closeModal: () => void;
  //   children: React.ReactNode;
}

export default function DashboardModal({
  details,
  closeModal,
  buy,
  isPending,
}: DashboardModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex h-screen w-screen items-center justify-center transition duration-1000 ease-in-out">
      <div
        className="z-25 fixed inset-0 h-screen w-screen bg-[#000000cc]/45 transition duration-1000 ease-in-out"
        onClick={closeModal}
      ></div>
      <div className="bg-color z-10 flex h-[80vh] w-[75vw] transition duration-1000 ease-in-out">
        <div className="w-50 flex content-center justify-center">
          <Image
            priority
            src={details.tokenURI}
            alt="image"
            className="h-auto w-auto object-cover"
            width={400}
            height={500}
          />
        </div>
        <div className="w-50 content-center space-y-6 p-12">
          {/* <p className="text-[20px] font-bold text-white">
            Name: <span className="font-thin">{details.name}</span>
          </p> */}
          <p className="text-[20px] font-bold text-white">
            {" "}
            Price: <span className="font-thin">{details.price.toString()}</span>
          </p>
          {details.forSale === false ? null : (
            <button
              className="flex w-full items-center justify-center rounded-[16px] bg-[#FFD000] px-8 py-3 text-[20px] font-bold text-black disabled:bg-yellow-700"
              onClick={buy}
              disabled={isPending}
            >
              Buy now
            </button>
          )}
        </div>
      </div>
    </div>
  );
}