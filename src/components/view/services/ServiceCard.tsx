import { IService } from "@/types/service";
import Image from "next/image";
import Link from "next/link";

const ServiceCard = ({ service }: { service: IService }) => {
  return (
    <Link
      className="group transition-all duration-300 ease-in-out"
      href={`/all-services/${service.id}`}
    >
      <div className="w-full shadow-md rounded-md h-[220px]">
        <Image
          src={service?.image}
          alt="oven"
          height={800}
          width={800}
          className="w-full rounded-md object-cover h-full"
        />
      </div>
      <h3 className="text-center transition-all duration-300 ease-in-out group-hover:text-main line-clamp-1 text-black text-base font-medium pt-2">
        {service.name}
      </h3>
    </Link>
  );
};
export default ServiceCard;
