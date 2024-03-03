import { ArrowDown } from "lucide-react";
import Image from "next/image";

const OurWork = () => {
  return (
    <div className="bg-[#fafbfc]">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:py-16">
        <div className="py-5 flex items-center gap-3">
          <hr className="w-10 h-[3px] bg-main my-2" />{" "}
          <span className="text-sm sm:text-lg">HOW IT WORKS</span>
        </div>
        <h1 className="font-medium sm:text-4xl sm:font-bold  text-black  text-base">
          Easiest way to get a service
        </h1>

        <div className="lg:flex mt-8 justify-center gap-12 items-center h-full">
          <div className="w-full shadow-lg lg:w-1/2 h-[250px] sm:h-[280px] md:h-[350px]">
            <Image
              src="https://s3.ap-south-1.amazonaws.com/cdn-marketplacexyz/sheba_xyz/images/webp/why-choose-us.webp"
              alt=""
              width={1000}
              height={800}
              className="rounded-md w-full h-full object-cover"
            />
          </div>
          <div className="w-full lg:w-1/2 py-5 flex justify-center items-center h-full">
            <div>
              <div className="lg:py-6 lg:pr-16">
                <div className="flex">
                  <div className="flex flex-col items-center mr-4">
                    <div>
                      <div className="flex items-center justify-center w-10 h-10 border bg-main text-white rounded-full">
                        <ArrowDown />
                      </div>
                    </div>
                    <div className="w-px h-full bg-gray-300" />
                  </div>
                  <div className="pt-1 pb-8">
                    <p className="mb-2 text-lg  font-bold">
                      Select the Service
                    </p>
                    <p className="text-black  text-base">
                      Pick the service you are looking for- from the website or
                      the app.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex flex-col items-center mr-4">
                    <div>
                      <div className="flex bg-main text-white items-center justify-center w-10 h-10 border rounded-full">
                        <ArrowDown />
                      </div>
                    </div>
                    <div className="w-px h-full bg-gray-300" />
                  </div>
                  <div className="pt-1 pb-8">
                    <p className="mb-2 text-lg  font-bold">
                      Pick your schedule
                    </p>
                    <p className="text-black  text-base">
                      Pick your convenient date and time to avail the service.
                      Pick the service provider based on their rating.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex flex-col items-center mr-4">
                    <div>
                      <div className="flex bg-main text-white items-center justify-center w-10 h-10 rounded-full">
                        <ArrowDown />
                      </div>
                    </div>
                    <div className="h-full bg-gray-300" />
                  </div>
                  <div className="pt-1">
                    <p className="mb-2 text-lg  font-bold">
                      Place Your Order & Relax
                    </p>
                    <p className="text-black  text-base">
                      Review and place the order. Now just sit back and relax.
                      We’ll assign the expert service provider’s schedule for
                      you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OurWork;
