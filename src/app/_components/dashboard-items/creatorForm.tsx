"use client";
// import { useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { useForm } from "react-hook-form";
// import Image from "next/image";
// import { ChevronDown, Upload } from "~/app/assets/icons/icons";
// import DefaultButton from "../buttons/defaultButton";
// import BaseModal from "../modals/basemodal";
import { ConnectWallet, Wallet, WalletDropdown, WalletDropdownDisconnect } from "@coinbase/onchainkit/wallet";
import { Address, Avatar, Identity, Name } from "@coinbase/onchainkit/identity";

interface CreatorFormProps {
  verifyAddress: () => void;
  confirming: boolean;
}

const CreatorForm = ({ verifyAddress, confirming }: CreatorFormProps) => {
  // const router = useRouter();
  // const {
  //   register,
  //   handleSubmit,
  //   watch,
  //   formState: { errors, isValid },
  // } = useForm({
  //   mode: "onChange",
  // });
  // const [accountCreated, setAccountCreated] = useState(false);

  // const [preview, setPreview] = useState<string | null>(null);

  // const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = event.target.files?.[0];
  //   if (file) {
  //     const fileURL = URL.createObjectURL(file);
  //     setPreview(fileURL);
  //   }
  // };

  // const maxLength = 2500;
  return (
    <div className="w-full">
      {/* <div className="flex w-full gap-10 px-1 py-3">
        <div className="flex h-[530px] w-8/12 flex-col gap-10 overflow-y-scroll">
          <div className="flex flex-col">
            <span className="text-[24px] text-[#FFD000]">
              Personal Information
            </span>

            <div className="mt-8 grid w-full grid-cols-2 gap-20">
              <div className="w-full">
                <label
                  className="mb-8 block text-[20px] text-sm font-normal text-gray-300"
                  htmlFor="first-name"
                >
                  First Name
                </label>
                <input
                  className="block w-full appearance-none border-b-2 border-white bg-transparent text-[18px] leading-8 text-gray-300 focus:border-white focus:outline-none"
                  id="first-name"
                  type="text"
                  autoComplete="off"
                  {...register("first_name", {
                    required: "Please enter first name",
                  })}
                />
                {errors.first_name && (
                  <p className="mt-2 text-red-600">
                    {errors.first_name?.message}
                  </p>
                )}
              </div>

              <div className="w-full">
                <label
                  className="mb-8 block text-[20px] text-sm font-normal text-gray-300"
                  htmlFor="last-name"
                >
                  Last Name
                </label>
                <input
                  className="block w-full appearance-none border-b-2 border-white bg-transparent text-[18px] leading-8 text-gray-300 focus:border-white focus:outline-none"
                  id="last-name"
                  type="text"
                  autoComplete="off"
                  {...register("last_name", {
                    required: "Please enter Last name",
                  })}
                />
                {errors.last_name && (
                  <p className="mt-2 text-red-600">
                    {errors.last_name?.message}
                  </p>
                )}
              </div>

              <div className="w-full">
                <label
                  className="mb-8 block text-[20px] text-sm font-normal text-gray-300"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="block w-full appearance-none border-b-2 border-white bg-transparent text-[18px] leading-8 text-gray-300 focus:border-white focus:outline-none"
                  id="email"
                  type="email"
                  autoComplete="off"
                  {...register("email", {
                    required: "Please enter email",
                    pattern: {
                      value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                      message: "Email address must be a valid address",
                    },
                  })}
                />
                {errors.email && (
                  <p className="mt-2 text-red-600">{errors.email?.message}</p>
                )}
              </div>

              <div className="w-full">
                <label
                  className="mb-8 block text-[20px] text-sm font-normal text-gray-300"
                  htmlFor="phone-number"
                >
                  Phone Number
                </label>
                <input
                  className="block w-full appearance-none border-b-2 border-white bg-transparent text-[18px] leading-8 text-gray-300 focus:border-white focus:outline-none"
                  id="phone-number"
                  type="text"
                  autoComplete="off"
                  {...register("phone", {
                    required: "Please phone number",
                    pattern: {
                      value: /^([0|+[0-9]{1,5})?([0-9]{10})$/,
                      message: "Invalid phone number",
                    },
                  })}
                />
                {errors.phone && (
                  <p className="mt-2 text-red-600">{errors.phone?.message}</p>
                )}
              </div>

              <div className="w-full">
                <label
                  className="mb-8 block text-[20px] text-sm font-normal text-gray-300"
                  htmlFor="country"
                >
                  Location
                </label>
                <div className="relative">
                  <select
                    className="block w-full appearance-none border-b-2 border-white bg-transparent px-4 py-3 pr-8 text-[16px] font-light leading-8 text-gray-300 focus:border-white focus:outline-none"
                    id="country"
                    placeholder="select a country"
                    {...register("country", {
                      required: "select a country",
                    })}
                  >
                    <option>Nigeria</option>
                    <option>Ghana</option>
                    <option>Kenya</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-300">
                    <ChevronDown />
                  </div>
                </div>
                {errors.country && (
                  <p className="mt-2 text-red-600">{errors.country?.message}</p>
                )}
              </div>

              <div className="w-full">
                <label
                  className="mb-8 block text-[20px] text-sm font-normal text-gray-300"
                  htmlFor="city"
                >
                  City
                </label>
                <div className="relative">
                  <select
                    className="block w-full appearance-none border-b-2 border-white bg-transparent px-4 py-3 pr-8 text-[16px] font-light leading-8 text-gray-300 focus:border-white focus:outline-none"
                    id="city"
                    {...register("state", {
                      required: "select a state",
                    })}
                  >
                    <option>Lagos</option>
                    <option>Accra</option>
                    <option>Nairobi</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-300">
                    <ChevronDown />
                  </div>
                </div>
              </div>
              {errors.state && (
                <p className="mt-2 text-red-600">{errors.state?.message}</p>
              )}
            </div>

            <div className="mt-20 w-full">
              <label
                className="mb-8 block text-[20px] text-sm font-normal text-gray-300"
                htmlFor="postal-code"
              >
                Postal Code
              </label>
              <input
                className="block w-full appearance-none border-b-2 border-white bg-transparent text-[18px] leading-8 text-gray-300 focus:border-white focus:outline-none"
                id="postal-code"
                type="text"
                autoComplete="off"
                {...register("pcode", {
                  required: false,
                })}
              />
            </div>
            <div className="mt-20 w-full">
              <label
                className="mb-2 block text-[20px] text-sm font-normal text-gray-300"
                htmlFor="postal-code"
              >
                Bio
              </label>
              <textarea
                id="bio"
                // name="bio"
                // maxLength={maxLength}
                // value={text}
                // onChange={(e) => setText(e.target.value)}
                autoComplete="off"
                {...register("bio", {
                  required: "Please enter bio",
                  maxLength: {
                    value: 2500,
                    message: "you cannot enter more than 2500 words",
                  },
                })}
                className="block w-full appearance-none rounded-lg border border-white bg-transparent px-4 py-8 leading-tight text-gray-300 focus:border-white focus:outline-none"
                // rows="6"
                placeholder="0/2500"
              />
              <div className="mt-2 text-sm text-gray-300">
                {watch("bio") ? watch("bio").length : 0}/{maxLength}
              </div>
            </div>
            {errors.bio && (
              <p className="mt-2 text-red-600">{errors.bio?.message}</p>
            )}
          </div>

          <div className="mt-20 flex flex-col">
            <span className="text-[24px] text-[#FFD000]">
              Professional Details:
            </span>

            <div className="grid w-full grid-cols-2 gap-20 py-8">
              <div className="w-full">
                <label
                  className="mb-4 block text-[20px] text-sm font-normal text-gray-300"
                  htmlFor="first-name"
                >
                  LinkedIn link (Optional)
                </label>
                <input
                  className="block w-full appearance-none border-b-2 border-white bg-transparent text-[18px] leading-8 text-gray-300 focus:border-white focus:outline-none"
                  id="linkedin"
                  type="text"
                  autoComplete="off"
                  {...register("linkedin")}
                />
              </div>

              <div className="w-full">
                <label
                  className="mb-4 block text-[20px] text-sm font-normal text-gray-300"
                  htmlFor="last-name"
                >
                  Company link
                </label>
                <input
                  className="block w-full appearance-none border-b-2 border-white bg-transparent text-[18px] leading-8 text-gray-300 focus:border-white focus:outline-none"
                  id="company"
                  type="text"
                  autoComplete="off"
                  {...register("company_link", {
                    required: "Please enter company link",
                  })}
                />
                {errors.company_link && (
                  <p className="mt-2 text-red-600">
                    {errors.company_link?.message}
                  </p>
                )}
              </div>

              <div className="w-full">
                <label
                  className="mb-4 block text-[20px] text-sm font-normal text-gray-300"
                  htmlFor="email"
                >
                  X link (Optional)
                </label>
                <input
                  className="block w-full appearance-none border-b-2 border-white bg-transparent text-[18px] leading-8 text-gray-300 focus:border-white focus:outline-none"
                  id="x"
                  type="text"
                  autoComplete="off"
                  {...register("x_link")}
                />
              </div>

              <div className="w-full">
                <label
                  className="mb-4 block text-[20px] text-sm font-normal text-gray-300"
                  htmlFor="phone-number"
                >
                  Portfolio link (Optional)
                </label>
                <input
                  className="block w-full appearance-none border-b-2 border-white bg-transparent text-[18px] leading-8 text-gray-300 focus:border-white focus:outline-none"
                  id="portfolio"
                  type="text"
                  autoComplete="off"
                  {...register("portfolio_link")}
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <span className="text-[17px] text-white">
            Click the icon to Upload your avatar
          </span>
          <div className="mt-3 flex h-[308px] w-[422px] items-center justify-center rounded-[16px] bg-[#2F1145]">
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
      </div> */}

      <div className="mx-auto w-3/12 flex-col justify-center">
        <Wallet>
          <ConnectWallet className="border border-[#fff] bg-[#230C33] px-32 py-7 hover:bg-[#230c33]">
            <Avatar className="h-6 w-6" />
            <Name />
          </ConnectWallet>
          <WalletDropdown className="bg-gray-300">
            <Identity className="px-4 pb-2 pt-3" hasCopyAddressOnClick>
              <Avatar />
              <Name className="text-[#fff]" />
              <Address className="text-[#fff]" />
            </Identity>
            <WalletDropdownDisconnect className="bg-[#FFD000] stroke-[#230C33] stroke-2 font-bold text-[#230C33] hover:bg-[#FFD000]" />
          </WalletDropdown>
        </Wallet>
        <button
          className="mt-5 flex w-[26vw] items-center justify-center rounded-[16px] bg-[#FFD000] px-8 py-3 text-[20px] font-bold text-black disabled:bg-yellow-700"
          onClick={verifyAddress}
          disabled={confirming}
        >
          Verify Address
        </button>
      </div>

      {/* <BaseModal
        open={accountCreated}
        setOpen={setAccountCreated}
        className="special-index bottom-0 top-0 mx-auto my-auto flex h-[300px] w-full items-center justify-center rounded-[16px] xl:w-[450px]"
      >
        <div className="flex w-full flex-col justify-center gap-8">
          <div className="text-[20px]">Account Created Successfully</div>
          <div
            className="mx-auto flex w-8/12 cursor-pointer items-center justify-center rounded-[8px] bg-[#FFD000] px-2 py-4 text-[16px] text-[#000]"
            onClick={() => router.push(`/creator`)}
          >
            Proceed
          </div>
        </div>
      </BaseModal> */}
    </div>
  );
};

export default CreatorForm;
