"use client";
import BreadCrumb from "@/components/ui/BreadCrumb";
import { useServiceQuery } from "@/redux/features/services/servicesApi";
import { ArrowRight, Check, StarIcon } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Schedule } from "./Schedule";
import { format } from "date-fns";
import { useSlotsQuery } from "@/redux/features/slots/slotApi";
import { getUserInfo } from "@/services";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@radix-ui/react-toast";
import { useRouter } from "next/navigation";
import {
  useAddBookingMutation,
  useBookingsQuery,
} from "@/redux/features/booking/bookingApi";
import { ISlot } from "@/types/service";

const ServiceDetails = () => {
  const router = useRouter();
  const { toast } = useToast();
  const params = useParams<{ id: string }>();
  const currentDate = new Date();
  const initialSelectedValue = format(currentDate, "yyyy-MM-dd");
  const [selectedValue, setSelectedValue] = useState(initialSelectedValue);
  const [selectSlot, setSelectSlot] = useState(null);

  const { data: bookings } = useBookingsQuery({ limit: 10 });
  console.log(bookings, "bookings");

  const [addBooking] = useAddBookingMutation();
  // fetch data
  const { data: service } = useServiceQuery(params?.id);
  const user = getUserInfo() as any;
  const { data: slots } = useSlotsQuery(undefined);

  // handel crate new bookings.
  const handleCreateBooking = async (id: string) => {
    if (!user?.id) {
      return toast({
        title: "Please Login",
        description: <p className="text-sm">You are not logged in yet.</p>,
        action: (
          <ToastAction
            className="border rounded-sm py-1 px-2"
            onClick={() => router.push("/login")}
            altText="Login"
          >
            Log in
          </ToastAction>
        ),
      });
    }
    if (!selectSlot && !selectedValue) {
      return toast({
        title: "Please Select Your Preferred Date and  Slot",
      });
    }
    try {
      const data: any = {
        userId: user.id,
        serviceId: id,
        slotId: selectSlot,
        date: format(selectedValue, "yyyy-MM-dd"),
      };
      console.log(data, "submitted");
      const result = await addBooking(data);
      console.log(result);
      if (result) {
        toast({
          title: "Successfully Booked",
        });
      }
    } catch (error) {
      toast({
        title: "Failed to booking. Please try again",
      });
    }
  };

  return (
    <div className="">
      <div
        className="relative bg-cover bg-center lg:h-[500px] l"
        style={{
          backgroundImage: `url(${service?.image})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="bg-black bg-opacity-60 h-full px-8 sm:px-14 w-full py-8 md:px-28">
          <div className="max-w-7xl mx-auto">
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
              <div className="text-white flex flex-col justify-start gap-3 md:w-1/2 mt-5 sm:mt-12">
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
                <Dialog>
                  <DialogTrigger asChild>
                    <button
                      // onClick={() => setHandleModalOpen(true)}
                      className="text-white group shadow-lg  border-none text-xl rounded-lg flex justify-center items-center gap-2 bg-main hover:bg-pink-500 cursor-pointer px-3 py-2 md:px-5 md:py-4"
                    >
                      Order Now
                      <ArrowRight />
                    </button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-2xl">
                    <div className="py-2 text-center shadow-lg border rounded-sm shadow-gray-200 border-gray-100">
                      <h2>Schedule Time</h2>
                    </div>
                    <div className="flex flex-col  justify-center items-center">
                      <h3 className="mr-4 py-4 text-main">
                        Select your prefer date
                      </h3>
                      <Schedule
                        selectedValue={selectedValue}
                        setSelectedValue={setSelectedValue}
                      />
                    </div>
                    <div>
                      <h2 className="text-base py-4 text-black text-center">
                        Select your prefer time, expert will arrive by your
                        selected time
                      </h2>
                      <div className="">
                        <div className="grid grid-cols-4 gap-5">
                          {slots?.map((slot: any) => (
                            <Button
                              key={slot.id}
                              className={`${
                                slot.id === selectSlot
                                  ? "bg-main text-white"
                                  : "bg-white text-main"
                              }  hover:bg-main hover:text-white border  border-main/60`}
                              onClick={() => setSelectSlot(slot.id)}
                            >
                              {slot?.slotTime}
                            </Button>
                          ))}
                        </div>
                      </div>
                    </div>

                    <DialogFooter className="sm:justify-end">
                      <div className="flex items-center gap-5">
                        <DialogClose asChild>
                          <Button type="button" variant="default">
                            Close
                          </Button>
                        </DialogClose>
                        <DialogClose>
                          <Button
                            onClick={() => {
                              handleCreateBooking(service.id);
                            }}
                            type="button"
                            className="bg-main hover:bg-main"
                          >
                            Confirm
                          </Button>
                        </DialogClose>
                      </div>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
