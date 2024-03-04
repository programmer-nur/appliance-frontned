import PublicNavbar from "@/components/Navbar/PublicNavbar";
import ChooseUs from "@/components/view/home/ChooseUs";
import { Hero } from "@/components/view/home/Hero";
import OurWork from "@/components/view/home/OurWork";
import CategoryService from "@/components/view/home/CategoryService";
import Testimonial from "@/components/view/home/Testimonial";
import TrendingService from "@/components/view/home/TrendingService";

export default function Home() {
  return (
    <div>
      <PublicNavbar />
      <div>
        <Hero />
        <CategoryService />
        <TrendingService />
        <ChooseUs />
        <OurWork />
        <Testimonial />
      </div>
    </div>
  );
}
