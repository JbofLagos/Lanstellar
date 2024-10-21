"use client";
import { useState, useEffect } from "react";
import DashboardLayout from "../_components/dashboard-items/dashboardLayout";
// import Image from "next/image";
import { useRouter } from "next/navigation";
import { Upload } from "../assets/icons/icons";
import { type BaseError, useWriteContract } from "wagmi";
import { lanStellarAbi } from "~/Constants/ABI/lanStellarContracts";

// export interface tokenDetails {
//   tokenId: any;
//   tokenName: string;
//   tokenPrice: number;
//   tokenDesc: string;
// }

const CreateToken = () => {
  const router = useRouter();
  const [tokenPrice, setTokenPrice] = useState("");

  // const [tokenDesc, setTokenDesc] = useState<File | undefined>(undefined);
  // function handleDescFileUpload(event: React.ChangeEvent<HTMLInputElement>) {
  //   const value = event?.target?.files?.[0] && event?.target?.files;
  //   if (value) {
  //     const fileURL: any = event?.target?.files?.[0];
  //     setTokenDesc(fileURL);
  //   }
  // }

  function handleChange(evt: React.ChangeEvent<HTMLInputElement>) {
    const value = evt.target.value;
    setTokenPrice(value);
  }

  const [preview, setPreview] = useState<string | null>(null);
  const [tokenImage, setTokenImage] = useState<File | undefined>(undefined);
  // const [tokenImage, setTokenImage] = useState<File | undefined>(undefined);

  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event?.target?.files?.[0] && event?.target?.files;
    if (file) {
      const fileURL: any = event?.target?.files?.[0];
      // const fileURLForimage = event?.target?.files?.[0];
      setTokenImage(fileURL);
      // await handlePinataUpload(fileURL);
      const file = URL.createObjectURL(fileURL);
      setPreview(file);
    }
  };

  async function handlePinataUpload(
    // docFile: File | undefined,
    imageFile: File | undefined,
  ) {
    try {
      const formData: any = new FormData();
     
      // formData.append("file", docFile, docFile?.name);
      formData.append("file", imageFile, imageFile?.name);
      // const metaData = JSON.stringify({
      //   name: "lanstellar token documents",
      // });
      // formData.append("pinataMetadata", metaData);
      const response = await fetch(
        // "https://uploads.pinata.cloud/v3/files",
        "https://api.pinata.cloud/pinning/pinFileToIPFS",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_PINATA_JWT}`,
          },
          body: formData,
        },
      );
      // await response.json();
      const responseData = await response.json();
      // setPreview(responseData.IpfsHash);

      const documentUrl = `https://${process.env.NEXT_PUBLIC_PINATA_GATEWAY_URL}/ipfs/${responseData.IpfsHash}`;
      return documentUrl;
    } catch {
      alert("Trouble uploading file");
    }
  }

  const { data: hash, isPending, error, writeContract } = useWriteContract();

  async function handleCreateToken() {
    // tokenDesc, 
    const tokenUriRespData = await handlePinataUpload(tokenImage);
    localStorage.setItem("token_ipfs", tokenUriRespData as string);
    // console.log("tokenUriRespData:", tokenUriRespData);
    writeContract({
      address: process.env.NEXT_PUBLIC_LANSTELLAR_CA as `0x${string}`,
      abi: lanStellarAbi,
      functionName: "createToken",
      args: [tokenUriRespData as string, BigInt(Number(tokenPrice))],
    });
  }

  useEffect(() => {
    if (hash) {
      setTokenPrice("");
      // setTokenDesc(undefined);
      router.push(`/list-property`);
    }
  }, [hash]);

  useEffect(() => {
    if (error) {
      alert((error as BaseError).shortMessage || error.message);
    }
  }, [error]);

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
                  // <Image
                  //   src={`https://${process.env.NEXT_PUBLIC_PINATA_GATEWAY_URL}/ipfs/${preview}`}
                  //   alt="Avatar Preview"
                  //   width={300}
                  //   height={300}
                  //   className="h-full w-full rounded-[16px] object-cover"
                  // />

                  <img
                    className="h-full w-full rounded-[16px] object-cover"
                    // src={`https://${process.env.NEXT_PUBLIC_PINATA_GATEWAY_URL}/ipfs/${preview}`}
                    src={preview}
                    alt="Avatar Preview"
                  ></img>
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
                Price
              </label>
              <input
                className="block w-full appearance-none rounded border-2 border-gray-500 bg-transparent pl-2 leading-8 text-gray-300 placeholder:text-[13px] focus:border-white focus:outline-none"
                type="text"
                name="tokenPrice"
                value={tokenPrice}
                onChange={handleChange}
                placeholder="20"
                autoComplete="off"
              />
            </div>
            {/* <div className="mb-5 w-full">
              <label className="mb-2 block text-[20px] text-sm font-normal text-gray-300">
                Description
              </label>
              <input
                type="file"
                onChange={handleDescFileUpload}
                className="block w-full appearance-none rounded border-2 border-gray-500 bg-transparent leading-8 text-gray-300 placeholder:text-[13px] focus:border-white focus:outline-none"
                accept=".docx"
              />
            </div> */}
          </div>
        </div>

        <div className="mx-auto flex w-3/12 items-center justify-center">
          <button
            className="flex w-full items-center justify-center rounded-[16px] bg-[#FFD000] px-8 py-3 text-[20px] font-bold text-black disabled:bg-yellow-700"
            onClick={handleCreateToken}
            disabled={isPending || !tokenPrice || !preview}
          >
            Create
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CreateToken;
