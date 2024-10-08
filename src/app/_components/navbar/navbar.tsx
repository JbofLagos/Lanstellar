'use client';
import React from 'react'
import { useRouter } from "next/navigation";
import Image from 'next/image';
import LanstellerLogo from '../../assets/images/lanstellarLogo.png'

const Navbar = () => {
  const router = useRouter();
  return (
         <div className='bg-main py-4 px-8 xl:flex hidden cursor-pointer' onClick={() => router.push(`/`)}>
            <Image alt='logo' src={LanstellerLogo} className='w-[260px]' />
        </div>
  )
}

export default Navbar