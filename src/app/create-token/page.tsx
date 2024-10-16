"use client";
import { useState } from "react";
import DashboardLayout from "../_components/dashboard-items/dashboardLayout";
import Image from "next/image";
import { Upload } from "../assets/icons/icons";

// export interface nftDetails {
//   name: string;
//   price: string;
//   img: string;
// }

const CreateToken = () => {
    const [state, setState] = useState({
      tokenId: "",
        tokenName: "",
      tokenPrice: "",
    });

    function handleChange(evt: React.ChangeEvent<HTMLInputElement>) {
      const value = evt.target.value;
      setState({
        ...state,
        [evt.target.name]: value,
      });
    }

  const [preview, setPreview] = useState<String | null>(null);
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const fileURL = URL.createObjectURL(file);
      setPreview(fileURL);
    }
    };

    const [desc, setDesc] = useState<File | null>(null);
    const handleDescFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file) {
        setDesc(file);
      }
    };
    
    function submitForm() {
        const { tokenId, tokenName, tokenPrice } = state;
      console.log("value", tokenId, tokenName, tokenPrice, desc, preview);
    }

  return (
    <DashboardLayout current={3}>
      <div className="w-full">
        <span className="text-[35px] font-bold text-white">Create Token</span>
        <div className="my-14 flex">
          <div className="w-8/12 px-16">
            <span className="text-[17px] text-white">
              Click the icon to upload token image
            </span>
            <div className="mt-3 flex h-[308px] w-[522px] items-center justify-center rounded-[16px] bg-[#2F1145]">
              <label className="flex h-full w-full cursor-pointer items-center justify-center">
                {preview ? (
                  <Image
                    src={preview}
                    alt="Avatar Preview"
                    width={300}
                    height={300}
                    className="h-full w-full rounded-[16px] object-cover"
                  />
                ) : (
                  <Upload />
                )}
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleFileUpload}
                />
              </label>
            </div>
          </div>

          <div className="w-full px-32">
            <div className="mb-5 w-full">
              <label className="mb-2 block text-[20px] text-sm font-normal text-gray-300">
                ID
              </label>
              <input
                className="block w-full appearance-none rounded border-2 border-gray-500 bg-transparent pl-2 leading-8 text-gray-300 placeholder:text-[13px] focus:border-white focus:outline-none"
                type="text"
                name="tokenId"
                value={state.tokenId}
                onChange={handleChange}
                placeholder="4"
                autoComplete="off"
              />
            </div>
            <div className="mb-5 w-full">
              <label className="mb-2 block text-[20px] text-sm font-normal text-gray-300">
                Name
              </label>
              <input
                className="block w-full appearance-none rounded border-2 border-gray-500 bg-transparent pl-2 leading-8 text-gray-300 placeholder:text-[13px] focus:border-white focus:outline-none"
                type="text"
                name="tokenName"
                value={state.tokenName}
                onChange={handleChange}
                placeholder="Land"
                autoComplete="off"
              />
            </div>
            <div className="mb-5 w-full">
              <label className="mb-2 block text-[20px] text-sm font-normal text-gray-300">
                Price
              </label>
              <input
                className="block w-full appearance-none rounded border-2 border-gray-500 bg-transparent pl-2 leading-8 text-gray-300 placeholder:text-[13px] focus:border-white focus:outline-none"
                type="text"
                name="tokenPrice"
                value={state.tokenPrice}
                onChange={handleChange}
                placeholder="20"
                autoComplete="off"
              />
            </div>
            <div className="mb-5 w-full">
              <label className="mb-2 block text-[20px] text-sm font-normal text-gray-300">
                Description
              </label>
              <input
                type="file"
                className="block w-full appearance-none rounded border-2 border-gray-500 bg-transparent leading-8 text-gray-300 placeholder:text-[13px] focus:border-white focus:outline-none"
                accept=".docx"
                // className="hidden"
                onChange={handleDescFileUpload}
              />
            </div>
          </div>
        </div>

        <div className="mx-auto flex w-3/12 items-center justify-center">
          <button
            className="flex w-full items-center justify-center rounded-[16px] bg-[#FFD000] px-8 py-3 text-[20px] font-bold text-black disabled:bg-yellow-700"
            onClick={submitForm}
            disabled={!state.tokenId || !state.tokenName || !state.tokenPrice || !desc || !preview}
          >
            Create
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CreateToken;
