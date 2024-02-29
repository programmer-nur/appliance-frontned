import PublicNavbar from "@/components/Navbar/PublicNavbar";
import {Hero} from "@/components/view/home/Hero";
import Service from "@/components/view/home/Service";

export default function Home() {
  return (
   <div>
    <PublicNavbar />
    <div>
      <Hero />
      <Service />
    </div>
   </div>
  );
}
