"use client";
import React from "react";
import Navbar from "../_components/navbar/navbar";
import CreatorLeft from "../_components/dashboard-items/creatorLeft";
import CreatorForm from "../_components/dashboard-items/creatorForm";

const CreatorRegistration = () => {
  return (
    //  relative flex flex-col h-screen
    <div>
      <div className="h-[10vh] w-full">
        <Navbar />
      </div>
      <div className="flex h-[90vh] w-full">
        <div className="hidden w-1/12 bg-[#1C092A] text-white xl:flex">
          <CreatorLeft />
        </div>
        <div className="bg-color w-full content-center p-4">
          <CreatorForm />
        </div>
      </div>
    </div>
  );
};

export default CreatorRegistration;
