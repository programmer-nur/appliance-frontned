"use client";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";

const Service = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 md:py-16">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl text-black font-medium sm:text-4xl sm:font-bold ">
          Our Services
        </h1>
        <Link className="no-underline" href="/all-services">
          <Button className="text-primary group shadow-gray-400 shadow-sm text-sm font-semibold gap-1 text-white bg-main flex justify-center border-none items-center">
            <span>View All </span>
            <ArrowRightIcon className="transition-all mb-[2px] text-xl delay-50 duration-500 group-hover:translate-x-2" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Service;
