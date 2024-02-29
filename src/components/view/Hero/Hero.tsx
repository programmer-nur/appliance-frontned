import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import * as React from "react";

export function Hero() {
  return (
    <section
      style={{
        background: `url("/assets/images/hero.jpg")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="mt-16"
    >
      <div className="container mx-auto flex justify-center flex-col items-center px-4 py-16 text-center md:py-40 md:px-10 lg:px-32 xl:max-w-6xl text-white">
        <h1 className="text-4xl font-bold  sm:text-5xl">
          Your Personal Assistant
        </h1>
        <p className="px-8 mt-8 mb-12 font-semibold text-lg">
          One-stop solution for your services. Order any service, anytime.
        </p>
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input
            placeholder="Search Your Service"
            className="py-5 text-black h-12 bg-white outline-none border-none"
          />
          <Button
            type="submit"
            className="py-5 px-7 h-12 bg-main flex justify-center items-center hover:bg-main font-medium"
          >
            Search
          </Button>
        </div>
      </div>
    </section>
  );
}
