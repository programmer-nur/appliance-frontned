import PublicNavbar from "@/components/Navbar/PublicNavbar";
import ChooseUs from "@/components/view/home/ChooseUs";
import {Hero} from "@/components/view/home/Hero";
import Service from "@/components/view/home/Service";
import TrendingService from "@/components/view/home/TrendingService";

export default function Home() {
  return (
   <div>
    <PublicNavbar />
    <div>
      <Hero />
      <Service />
      <TrendingService />
      <ChooseUs />
    </div>
   </div>
  );
}
