import React, { ChangeEvent, useEffect, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import Image from "next/image";
import imageTry from "../../../public/assets/clients/cyber.png";
import { Input } from "../ui/input";
import { cn } from "../../lib/utils";
import { getErrorMessage } from "@/schema/schema-validation";
interface IInput {
  name: string;
  variant?: "circle" | "square";
  id?: string;
  placeholder?: string;
  label?: string;
  defaultValue?: any;
  className?: any;
}

const UploadImage = ({
  label,
  name,
  id,
  placeholder,
  className,
  variant = "square",
}: IInput) => {
  const {
    control,
    setValue,
    getValues,
    formState: { errors },
  } = useFormContext();

  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedFile(reader.result as string);
      };
      reader.readAsDataURL(file);
      setValue(name, selectedFile);
    }
  };

  useEffect(() => {
    const file: any = getValues("image");
    setSelectedFile(file);
  }, [getValues]);

  const errorMessage = getErrorMessage(errors, name);
  return (
    <div className=" flex justify-start text-grayBlack gap-[10px] flex-col">
      <label className="text-sm" htmlFor={id}>
        {" "}
        {label || null}
      </label>

      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <>
            {variant === "circle" ? (
              <div className=" flex gap-5 items-center">
                <label
                  htmlFor="upload"
                  className={cn(
                    "flex border border-dashed border-[rgba(64,76,94,0.50)] h-[115px] w-[115px] bg-[#D9D9D9] justify-center items-center gap-2 cursor-pointer rounded-full ",
                    className
                  )}
                >
                  {!selectedFile ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="43"
                      height="43"
                      viewBox="0 0 43 43"
                      fill="none"
                    >
                      <path
                        d="M20.6544 6.02332C12.9539 6.02332 9.10375 6.02332 6.71153 8.4146C4.31934 10.8059 4.31934 14.6546 4.31934 22.352C4.31934 30.0493 4.31934 33.8982 6.71153 36.2895C9.10375 38.6808 12.9539 38.6808 20.6544 38.6808C28.3546 38.6808 32.2048 38.6808 34.5971 36.2895C36.9893 33.8982 36.9893 30.0493 36.9893 22.352V21.4926"
                        stroke="#404C5E"
                        stroke-width="2"
                        stroke-linecap="round"
                      />
                      <path
                        d="M9.47266 36.9422C16.7044 28.7806 24.8315 17.9566 36.9569 26.0746"
                        stroke="#404C5E"
                        stroke-width="2"
                      />
                      <path
                        d="M31.7996 4.3194V18.0755M38.6803 11.1544L24.9189 11.18"
                        stroke="#404C5E"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  ) : (
                    <div className="h-[115px] cursor-not-allowed w-[115px] rounded-full overflow-hidden">
                      <Image
                        src={selectedFile}
                        alt="Preview"
                        width={500}
                        height={500}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                  )}
                </label>

                {!selectedFile ? (
                  <Input
                    id="upload"
                    type="file"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                ) : (
                  <Input
                    id="upload"
                    type="text"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                )}
                {selectedFile && (
                  <span
                    onClick={() => setSelectedFile(null)}
                    className="text-red-500 flex justify-center items-center cursor-pointer text-sm"
                  >
                    Remove
                  </span>
                )}
              </div>
            ) : (
              <div className=" flex gap-5 items-center">
                <label
                  htmlFor="upload"
                  className={cn(
                    "flex h-[56px] w-[166px] justify-center items-center gap-2 cursor-pointer border rounded-sm border-[rgba(64,76,94,0.50)] border-dashed",
                    className
                  )}
                >
                  <span className="text-gray-600 text-sm font-normal">
                    {placeholder ? placeholder : "Upload File"}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                  >
                    <path
                      d="M12.008 3.49023C7.52518 3.49023 5.28379 3.49023 3.89116 4.88232C2.49854 6.27441 2.49854 8.51494 2.49854 12.996C2.49854 17.477 2.49854 19.7176 3.89116 21.1097C5.28379 22.5018 7.52518 22.5018 12.008 22.5018C16.4907 22.5018 18.7321 22.5018 20.1248 21.1097C21.5174 19.7176 21.5174 17.477 21.5174 12.996V12.4957"
                      stroke="#404C5E"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                    <path
                      d="M5.49854 21.4897C9.70852 16.7384 14.4397 10.4372 21.4985 15.1631"
                      stroke="#404C5E"
                      stroke-width="2"
                    />
                    <path
                      d="M18.4958 2.49829V10.5064M22.5014 6.47728L14.4902 6.49217"
                      stroke="#404C5E"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </label>
                <Input
                  id="upload"
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                />
                {selectedFile && (
                  <div className="mt-2 flex flex-col items-center gap-1 h-20 w-20">
                    <Image
                      src={selectedFile}
                      alt="Preview"
                      width={500}
                      height={500}
                      className="w-full h-full object-cover"
                    />
                    <span
                      onClick={() => setSelectedFile(null)}
                      className="text-red-500 cursor-pointer text-sm"
                    >
                      Remove
                    </span>
                  </div>
                )}
              </div>
            )}
          </>
        )}
      />
      <small className="text-red-500">{errorMessage}</small>
    </div>
  );
};

export default UploadImage;
