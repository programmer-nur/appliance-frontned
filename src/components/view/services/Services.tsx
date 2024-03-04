"use client";
import { useCategoriesQuery } from "@/redux/features/category/categoryApi";
import { ICategory, IService } from "@/types/service";
import Link from "next/link";
import React, { useState } from "react";
import ServiceCard from "./ServiceCard";
import { Skeleton } from "@/components/ui/skeleton";

const Services = () => {
  const [activeId, setActiveId] = useState("");
  console.log(activeId);
  const handelChange = (id: any) => {
    setActiveId(id);
  };
  const {
    data: categories,
    isLoading,
    isError,
  } = useCategoriesQuery(undefined);

  let content;
  if (isLoading) {
    content = content = (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
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
      </div>
    );
  }
  if (!isLoading && isError) {
    content = <div>Something is wrong!</div>;
  }
  if (!isLoading && !isError && categories.length > 0) {
    content = categories?.map((item: ICategory) => (
      <section
        className="scroll-smooth pb-4 sm:pb-10"
        style={{
          scrollMarginTop: "80px",
        }}
        id={item.id}
        key={item.id}
      >
        <h2 className="text-xl sm:text-2xl font-bold font-roboto">
          {item.title}
        </h2>
        <div className="h-1 bg-main mt-4 mb-6" />
        <div className="grid grid-cols-3 justify-center items-center gap-4">
          {item?.services?.map((service: IService) => (
            <ServiceCard key={service?.id} service={service} />
          ))}
        </div>
      </section>
    ));
  }

  return (
    <div className="max-w-7xl !scroll-smooth mx-auto">
      <div className="py-8">
        <h2 className="text-4xl font-medium">All Services</h2>

        <div className="flex justify-between py-16 gap-8">
          <div className="w-[320px]">
            <ul
              style={{
                height: "100vh",
                position: "sticky",
                left: 0,
                top: 80,
                bottom: 0,
              }}
              className="w-full border-r border-gray-400"
            >
              {isLoading && (
                <div className="space-y-3 px-2">
                  <Skeleton className="h-8 max-w-[250px]" />
                  <Skeleton className="h-8 max-w-[250px]" />
                  <Skeleton className="h-8 max-w-[250px]" />
                  <Skeleton className="h-8 max-w-[250px]" />
                  <Skeleton className="h-8 max-w-[250px]" />
                  <Skeleton className="h-8 max-w-[250px]" />
                  <Skeleton className="h-8 max-w-[250px]" />
                  <Skeleton className="h-8 max-w-[250px]" />
                </div>
              )}
              {categories?.map((category: ICategory) => (
                <Link
                  key={category.id}
                  className="w-full"
                  href={`/services/#${category?.id}`}
                  onClick={() => handelChange(category?.id)}
                >
                  <li
                    className={`${
                      activeId === category.id
                        ? "border-r-4 border-main bg-slate-200"
                        : ""
                    } py-2 transition-all duration-500 ease-in-out my-1 text-base hover:bg-slate-200 px-2 w-full`}
                  >
                    {category.title}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
          <div className="w-full grow">{content}</div>
        </div>
      </div>
    </div>
  );
};

export default Services;
