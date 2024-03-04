"use client";
import Link from "next/link";
import { useState } from "react";
import logo from "../../../public/assets/images/pro_logo.png";
import Image from "next/image";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
const PublicNavbar = () => {
  const [open, setOpen] = useState(false);
  const activeClassName = "text-base font-medium text-black dark:text-white";
  const inactiveClassName =
    "text-base font-medium text-black dark:text-white hover:text-black dark:hover:text-main duration-300 ease-in-out";
  return (
    <div
      className="fixed h-16  inset-0 z-40 w-full dark:bg-black bg-white href p-0 lg:border-b transition ease-in"
      id="nav"
    >
      <div className="flex h-16  justify-between items-center mx-auto max-w-7xl border-b lg:border-none bg-opacity-30 bg-transparent px-4 lg:px-16">
        <Link
          href="/"
          className="text-3xl text-black font-extrabold dark:text-white"
        >
          <Image width={100} height={40} src={logo} alt="logo" />
        </Link>
        <nav className="hidden lg:block duration-300 ease-in-out overflow-hidden">
          <ul className="lg:flex lg:space-x-4 font-medium dark:text-white text-black">
            <li>
              <Link
                className="dark:text-white text-black hover:text-main"
                href="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="dark:text-white text-black hover:text-main"
                href="/services"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                className="dark:text-white text-black hover:text-main"
                href="#work"
              >
                Works
              </Link>
            </li>
            <li>
              <a
                className="dark:text-white text-black hover:text-main"
                href="#"
              >
                About
              </a>
            </li>
            <li>
              <Link
                className="dark:text-white text-black hover:text-main"
                href="#contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className="hidden items-center justify-end md:flex  lg:w-0">
          <Link
            href="/login"
            className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-main px-7 py-2 text-base font-medium text-white shadow-sm hover:bg-main duration-300 "
          >
            Log In
          </Link>
        </div>
        <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
          <HamburgerMenuIcon />
        </div>
      </div>

      {/* <!-- mobile menu --> */}
      <div
        className={`content md:hidden overflow-hidden bg-white fixed w-full p-20 py-8 bottom-0 duration-500 ${
          open ? "left-0 top-14" : "left-[-100%] top-14"
        }`}
      >
        <Link className="block text-center text-lg font-semibold pb-2" href="/">
          Home
        </Link>
        <Link className="block text-center text-lg font-semibold pb-2" href="#">
          About
        </Link>
        <Link
          className="block text-center text-lg font-semibold pb-2"
          href="/services"
        >
          Services
        </Link>
        <Link
          className="block text-center text-lg font-semibold pb-2"
          href="/portfolio"
        >
          Portfolio
        </Link>
        <Link className="block text-center text-lg font-semibold pb-2" href="#">
          Pricing
        </Link>
        <a className="block text-center text-lg font-semibold pb-2" href="#">
          Dropdown
        </a>
        <a className="block text-center text-lg font-semibold pb-2" href="#">
          Contact
        </a>
      </div>
    </div>
  );
};

export default PublicNavbar;
