"use client";
import { useFormContext, Controller } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getErrorMessage } from "@/schema/schema-validation";
import { cn } from "../../lib/utils";
export type SelectOptions = {
  label: string;
  value: string;
};
interface IInput {
  options: SelectOptions[];
  name: string;
  id?: string;
  placeholder?: string;
  label?: string;
  handleChange?: (el: string) => void;
  defaultValue?: any;
  className?: any;
}

const FormSelectField = ({
  name,
  id,
  placeholder,
  handleChange,
  label,
  options,
  defaultValue,
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
        render={({ field: { value, onChange } }) => (
          <Select
            value={value ? value : ""}
            defaultValue={defaultValue}
            onValueChange={handleChange ? handleChange : onChange}
          >
            <SelectTrigger
              className={cn(
                "flex h-10 w-full rounded-[4px] border border-[rgba(64,76,94,0.50)] bg-[#F2F6F7] px-3 py-2 text-sm ring-offset-none file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-0 focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50",
                className
              )}
            >
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
              {options?.map((option: SelectOptions) => (
                <SelectItem key={option?.value} value={option?.value}>
                  {option?.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      />
      <small className="text-red-500">{errorMessage}</small>
    </div>
  );
};
export default FormSelectField;