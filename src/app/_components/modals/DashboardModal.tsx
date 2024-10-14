"use client";
import type { nftDetails } from "~/app/creator/page";
import Image from "next/image";
// import type { nftDetails } from "../collections/topCollections";
// import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";

interface DashboardModalProps {
  details: nftDetails;
  //   name: string;
  //   price: string;
  closeModal: () => void;
  //   children: React.ReactNode;
}

export default function DashboardModal({ details, closeModal }: DashboardModalProps) {
    // const imageSrc: string = details.img.src;
  return (
    <div className="fixed inset-0 z-50 flex h-screen w-screen items-center justify-center">
      <div
        className="z-25 fixed inset-0 h-screen w-screen bg-[#000000cc]/45"
        onClick={closeModal}
      ></div>
      <div className="bg-color z-10 flex h-[80vh] w-[75vw]">
        <div className="w-50">
          <Image
            src={details.img}
            alt="image"
            className="h-[80vh] w-[40vw] object-cover"
            // width={500}
            // height={500}
          />
        </div>
        <div className="w-50 content-center space-y-6 p-12">
          <p className="text-[20px] font-bold text-white">
            Name: <span className="font-thin">{details.name}</span>
          </p>
          <p className="text-[20px] font-bold text-white">
            {" "}
            Price: <span className="font-thin">{details.price}</span>
          </p>
          <button
            className="flex w-full items-center justify-center rounded-[16px] bg-[#FFD000] px-8 py-3 text-[20px] font-bold text-black disabled:bg-yellow-700"
            // onClick={handleSubmit(submitForm)}
            // disabled={!isValid || !preview}
          >
            Buy now
          </button>
        </div>
      </div>
    </div>
  );
}