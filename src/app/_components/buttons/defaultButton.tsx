import Link from 'next/link';
import React from 'react'

interface Props {
    children: React.ReactNode;
    to: string;
    className?: string;
    addClass?: string;
  }

const DefaultButton = ({ children, to, className, addClass }: Props) => {
  let customClassName = "";

  if (className == "default-btn") {
    customClassName =
      "px-4 py-3 bg-[#FFD000] rounded-[16px] text-black font-bold text-[20px] w-full";
  }
  return (
    <Link href={to} className={`flex justify-center gap-2 ${customClassName} ${
        addClass == undefined && ""
    }`}>
     {children}
    </Link>
  )
}

export default DefaultButton