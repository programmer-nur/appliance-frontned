"use client";
import { useFormContext, Controller } from "react-hook-form";

import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import React, { useEffect } from "react";
import { cn } from "../../lib/utils";
import { getErrorMessage } from "@/schema/schema-validation";

interface IInput {
  name: string;
  id?: string;
  placeholder?: string;
  label?: string;
  className?: any;
  handleChange?: any;
}

const FormDatePicker = ({
  name,
  id,
  label,
  className,
  placeholder,
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
          <Popover>
            <PopoverTrigger
              className={cn(
                "flex h-10 w-full rounded-[4px] border border-[rgba(64,76,94,0.50)] bg-[#F2F6F7] px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50",
                className
              )}
              asChild
            >
              <Button
                variant={"outline"}
                className={cn(
                  "pl-3 text-left font-normal",
                  !field.value && "text-muted-foreground"
                )}
              >
                {field.value ? (
                  format(field.value, "PPP")
                ) : (
                  <span>{placeholder ? placeholder : "Pick a date"}</span>
                )}
                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={field.value ? field.value : ""}
                onSelect={field.onChange}
                // disabled={(date) =>
                //   date > new Date() || date < new Date("1900-01-01")
                // }
                initialFocus
              />
            </PopoverContent>
          </Popover>
        )}
      />
      <small className="text-red-500">{errorMessage}</small>
    </div>
  );
};
export default FormDatePicker;