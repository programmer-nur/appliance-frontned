import { HomeIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
interface IItems {
  label: string;
  link: string;
}
const BreadCrumb = ({ items }: { items: IItems[] }) => {
  return (
    <nav aria-label="breadcrumb" className="w-full  text-gray-100">
      <ol className="flex h-8 space-x-2 text-gray-100">
        <li className="flex items-center">
          <Link
            rel="noopener noreferrer"
            href="/"
            title="Back to homepage"
            className="flex items-center hover:underline"
          >
            <HomeIcon size={16} />
          </Link>
        </li>
        {items?.map((item) => (
          <li key={item.label} className="flex items-center space-x-1">
            <span className="text-gray-400">/</span>
            <Link
              rel="noopener noreferrer"
              href={item?.link}
              className="flex items-center px-1 text-sm sm:text-base capitalize hover:underline"
            >
              {item?.label}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default BreadCrumb;
