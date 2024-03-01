"use client";
import { getErrorMessage } from "@/schema/schema-validation";
import { useFormContext, Controller } from "react-hook-form";
import { cn } from "../lib/utils";
interface IInput {
  name: string;
  value?: string;
  id?: string;
  rows?: number;
  placeholder?: string;
  label?: string;
  className?: any;
}

const FormTextArea = ({
  name,
  value,
  id,
  placeholder,
  rows = 4,
  label,
  className,
}: IInput) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
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
          <textarea
            className={cn(
              "flex w-full rounded-[4px] border border-[rgba(64,76,94,0.50)] bg-[#F2F6F7] px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50",
              className
            )}
            id={id}
            rows={rows}
            placeholder={placeholder}
            {...field}
            value={value || field.value || ""}
          />
        )}
      />
      <small className="text-red-500">{errorMessage}</small>
    </div>
  );
};
export default FormTextArea;