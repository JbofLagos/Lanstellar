'use client';
import React from 'react'
import { useRouter } from "next/navigation";
import Image from 'next/image';
// import Lanstellerlogonew from "../../assets/images/lanstellarlogonew.png";
// import lanstellarlogonew from "../../assets/images/lanstellarlogonew.png"

const Navbar = () => {
  const router = useRouter();
  return (
    <div
      className="bg-main hidden cursor-pointer px-8 py-4 xl:flex"
      onClick={() => router.push(`/`)}
    >
      {/* <Image alt="logo" src={lanstellarlogonew} className="w-[260px]" /> */}
      <Image alt="logo" src="/images/lanstellarlogonew.png" width={220} height={220} />
    </div>
  );
}

export default Navbar