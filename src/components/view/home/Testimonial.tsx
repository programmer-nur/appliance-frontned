"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useServicesQuery } from "@/redux/features/services/servicesApi";
import { Skeleton } from "@/components/ui/skeleton";
import { testimonial } from "@/constants";

const Testimonial = () => {
  const { data, isLoading } = useServicesQuery({ limit: 5 });

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
  if (!isLoading && testimonial?.length > 0) {
    content = (
      <Carousel
        opts={{
          loop: true,
        }}
        className="w-full max-w-7xl mx-auto"
      >
        <CarouselContent>
          {testimonial?.map((test: any) => (
            <CarouselItem
              key={test.id}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <div className="min-h-[300px] w-full">
              <div className="min-h-[300px] bg-gray-50 p-8 rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="block w-5 h-5 text-gray-400 mb-4"
                  viewBox="0 0 975.036 975.036"
                >
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                <p className="leading-relaxed mb-6">{test.des}</p>
                <a className="inline-flex items-center">
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-roboto text-black font-bold">
                      {test.title}
                    </span>
                    <span className="text-main font-poppins text-sm">
                      {test.designation}
                    </span>
                  </span>
                </a>
              </div>
            </div>
            </CarouselItem>
          ))}
        </CarouselContent>
       
      </Carousel>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:py-16">
      <div className="">
      <div className="py-5 flex items-center gap-3">
        <hr className="w-10 h-[3px] bg-main my-2" />{" "}
        <span className="text-sm sm:text-lg">TESTIMONIAL</span>
      </div>
      <h1 className="font-medium sm:text-4xl sm:font-bold text-black  text-base">
      Real Happy Customers
      </h1>
      </div>
      <div className="py-8">{content}</div>
    </div>
  );
};

export default Testimonial;
