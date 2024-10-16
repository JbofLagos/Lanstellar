"use client";
import React from "react";
import { useRouter } from "next/navigation";
import {
  Home,
  Marketplace,
  Create,
  Help,
  Settings,
} from "~/app/assets/icons/icons";

const styles = {
  active: " rounded-[16px] px-4 py-3 bg-[#ffd00052]",
  inactive: "border border-transparent cursor-pointer px-4 py-3",
  tooltip:
    "absolute ml-1 bg-[#3c3933] mt-2 text-white text-[10px] rounded py-1 px-1 z-10",
};
interface sidebarProps {
  current: number;
}

const DashboardLeft = ({ current }: sidebarProps) => {
  const router = useRouter();
  const pages = [
    { id: 1, name: "Home", icon: <Home />, path: "/creator" },
    // { id: 2, name: "Marketplace", icon: <Marketplace />, path: "" },
    { id: 3, name: "Create", icon: <Create />, path: "/create-token" },
  ];

  const supports = [
    { id: 4, name: "Help", icon: <Help />, path: "" },
    { id: 5, name: "Settings", icon: <Settings />, path: "" },
  ];

  return (
    <div className="flex w-full justify-center">
      <div className="flex flex-col items-center justify-between py-8">
        <div className="flex flex-col gap-10">
          {pages.map((page, index) => (
            <div
              key={index}
              className="flex flex-col items-center"
              onClick={() => router.push(`${page.path}`)}
            >
              <div
                className={
                  current === page.id ? styles.active : styles.inactive
                }
              >
                {page.icon}
              </div>
              <span className="text-[12px] text-white">{page.name}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-10">
          {supports.map((support, index) => (
            <div key={index} className="flex flex-col items-center">
              <div
                className={
                  current === support.id ? styles.active : styles.inactive
                }
              >
                {support.icon}
              </div>
              <span className="text-[16px] text-white">{support.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardLeft;
