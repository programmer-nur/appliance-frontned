"use client";
import { Button } from "@/components/ui/button";
import { useCategoriesQuery } from "@/redux/features/category/categoryApi";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import ServiceCard from "./ServiceCard";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";

const Service = () => {
  const { data: categories, isLoading } = useCategoriesQuery(undefined);

  let content;
  if (isLoading) {
    content =  content = <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
    <div className="flex flex-col space-y-3">
    <Skeleton className="h-[155px] rounded-xl" />
    <div className="space-y-2">
      <Skeleton className="h-4" />
      <Skeleton className="h-4 w-[200px]" />
    </div>
  </div>
    <div className="md:flex hidden flex-col space-y-3">
    <Skeleton className="h-[155px] rounded-xl" />
    <div className="space-y-2">
      <Skeleton className="h-4" />
      <Skeleton className="h-4 w-[200px]" />
    </div>
  </div>
    <div className="lg:flex hidden flex-col space-y-3">
    <Skeleton className="h-[155px] rounded-xl" />
    <div className="space-y-2">
      <Skeleton className="h-4" />
      <Skeleton className="h-4 w-[200px]" />
    </div>
  </div>
  </div>;
  }
  if (!isLoading && categories?.length > 0) {
    content = (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
         {categories?.slice(0, 3)?.map((category: any) => (
            <Link className="group" href={'/'} key={category?.id}>
              <div  className="h-64 rounded-md flex justify-center items-center">
                <Image
                  src={category.image}
                  width={800}
                  height={800}
                  className="w-full h-full object-cover rounded-md"
                  alt="category"
                />
              </div>
              <h2 className="text-xl  font-medium text-center py-2">
                <Link className="group-hover:text-main" href={'/'}>{category.title}</Link>
              </h2>
            </Link>
          ))}
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:py-16">
      <div className="flex justify-between items-center">
        <h1 className="text-xl text-black font-medium sm:text-3xl sm:font-bold ">
          Our Services
          <p className="w-14 h-[3px] md:h-1 sm:w-28 lg:w-36 mt-1 bg-main"></p>
        </h1>
        <Link className="no-underline" href="/all-services">
          <Button className="text-primary group shadow-gray-600 shadow-sm text-sm font-semibold gap-1 text-white bg-main flex justify-center border-none items-center">
            <span>View All </span>
            <ArrowRightIcon className="transition-all mb-[2px] text-xl delay-50 duration-500 group-hover:translate-x-2" />
          </Button>
        </Link>
      </div>
      <div className="py-10">
       {content}
      </div>
      {/* Service */}
      {/* <div>{content}</div> */}
    </div>
  );
};

export default Service;
