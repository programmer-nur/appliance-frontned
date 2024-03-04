"use client";
import Link from "next/link";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useServicesQuery } from "@/redux/features/services/servicesApi";
import { Skeleton } from "@/components/ui/skeleton";

const TrendingService = () => {
  const { data, isLoading } = useServicesQuery({ limit: 5 });
  //@ts-ignore
  const services = data?.services?.data || [];
  console.log(services);
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
      </div>
    );
  }
  if (!isLoading && services?.length > 0) {
    content = (
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-7xl mx-auto"
      >
        <CarouselContent>
          {services?.slice(1, 8).map((category: any) => (
            <CarouselItem
              key={category.id}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <div className="p-1">
                <Link className="group" href={"/"} key={category?.id}>
                  <div className="h-48 sm:h-64 rounded-md flex justify-center items-center">
                    <Image
                      src={category.image}
                      width={800}
                      height={800}
                      className="w-full h-full object-cover rounded-md"
                      alt="category"
                    />
                  </div>
                  <h2 className="text-base sm:text-xl font-medium text-center py-2">
                    <Link
                      className="group-hover:text-main line-clamp-1"
                      href={"/"}
                    >
                      {category.name}
                    </Link>
                  </h2>
                </Link>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-main text-white hover:bg-main hover:text-white" />
        <CarouselNext className="bg-main hover:text-white text-white  hover:bg-main" />
      </Carousel>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 pb-8 sm:pb-16">
      <div className="flex justify-between items-center">
        <h1 className="text-xl text-black font-medium sm:text-3xl sm:font-bold ">
          Trending Services
          <p className="w-14 h-[3px] md:h-1 sm:w-28 lg:w-36 mt-1 bg-main"></p>
        </h1>
      </div>
      <div className="py-10">{content}</div>
    </div>
  );
};

export default TrendingService;
