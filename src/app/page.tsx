import PublicNavbar from "@/components/Navbar/PublicNavbar";
import {Hero} from "@/components/view/home/Hero";

export default function Home() {
  return (
   <div>
    <PublicNavbar />
    <div>
      <Hero />
      <h2>Testimonial</h2>
    </div>
   </div>
  );
}
