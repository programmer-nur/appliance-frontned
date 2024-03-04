"use client";
import BreadCrumb from "@/components/ui/BreadCrumb";
import { useServiceQuery } from "@/redux/features/services/servicesApi";
import { StarFilledIcon } from "@radix-ui/react-icons";
import {
  ArrowRight,
  Check,
  CheckCircle,
  CheckSquare,
  HomeIcon,
  Star,
  StarIcon,
} from "lucide-react";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import React from "react";

const ServiceDetails = () => {
  const params = useParams<{ id: string }>();
  console.log(params);
  const { data: service } = useServiceQuery(params?.id);
  console.log(service);
  return (
    <div>
      <div
        className="relative bg-cover bg-center lg:h-[500px] l"
        style={{
          backgroundImage: `url(${service?.image})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="bg-black bg-opacity-50 h-full px-8 sm:px-14 w-full py-8 md:px-28">
          <div className="hidden sm:block">
            <BreadCrumb
              items={[
                {
                  label: `All Services`,
                  link: `/services`,
                },
                {
                  label: `${service?.category?.title}`,
                  link: `/services/#${service?.category?.title}`,
                },
              ]}
            />
          </div>
          <div className="sm:flex justify-between gap-5">
            <div className="text-white flex flex-col justify-start gap-3 md:w-1/2 font-poppins mt-5 sm:mt-12">
              <h2 className="text-white text-2xl sm:text-4xl font-bold">
                {service?.name}
              </h2>
              <p className="text-2xl text-white/90">
                Price:{" "}
                <span className="font-bold text-white text-2xl">
                  ${service?.price}
                </span>
              </p>
              <span className="text-lg max-w-48 justify-center px-2 items-center gap-2 py-2 flex rounded-sm bg-main text-white/90">
                <StarIcon />
                <span className="text-lg">
                  <span className="text-xl font-bold">{service?.rating}</span>{" "}
                  out of 5
                </span>{" "}
              </span>
              {/* Subtitle */}
              <div className="flex flex-col gap-1">
                {service?.subTitle.map((s: string) => (
                  <p
                    key={s}
                    className="text-base flex items-center gap-5 text-white/90"
                  >
                    <Check
                      size={28}
                      className="bg-white text-black p-1 rounded-full text-lg "
                    />
                    <span>{s}</span>
                  </p>
                ))}
              </div>
            </div>

            <div className="md:w-1/2 justify-center flex flex-col mt-5 md:mt-0 md:items-end">
              <button
                // onClick={() => setHandleModalOpen(true)}
                className="text-white group shadow-lg  border-none text-xl rounded-lg flex justify-center items-center gap-2 bg-main hover:bg-pink-500 cursor-pointer px-3 py-2 md:px-5 md:py-4"
              >
                Order Now
                <ArrowRight />
              </button>
              {/* <Modal
                centered
                open={handleModalOpen}
                onOk={() => setHandleModalOpen(false)}
                onCancel={() => setHandleModalOpen(false)}
                footer={null}
                width={800}
              >
                <div className="py-2 text-center shadow-lg shadow-gray-300">
                  <h2>Schedule Time</h2>
                </div>
                <div className="flex flex-col  justify-center items-center">
                  <h3 className="mr-4 py-4 text-primary font-poppins">
                    Select your prefer date
                  </h3>
                  <Schedule
                    selectedValue={selectedValue}
                    setSelectedValue={setSelectedValue}
                  />
                </div>
                <div className="py-8">
                  <h2 className="text-sm py-4 text-secondary text-center">
                    Select your prefer time, expert will arrive by your selected
                    time
                  </h2>
                  <div className="">
                    <Menu
                      className="bg-transparent h-full"
                      disabledOverflow
                      mode="horizontal"
                    >
                      {slots?.map((slot: any) => (
                        <Menu.Item className="rounded-none" key={slot.id}>
                          <Button
                            className="text-primary border-dimPrimary"
                            onClick={() => setSlot(slot.id)}
                          >
                            {slot.slotTime}
                          </Button>
                        </Menu.Item>
                      ))}
                    </Menu>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <Button
                    size="large"
                    type="primary"
                    onClick={() => {
                      handleCreateBooking(service.id);
                    }}
                    className=" mt-6 bg-main hover:bg-main text-white font-semibold rounded"
                  >
                    Confirm
                  </Button>
                </div>
              </Modal> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
