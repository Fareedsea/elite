import Hero from "@/components/Hero";
import Cat from "@/components/Cat";
import Why from "@/components/why";
import Client from "@/components/Client";
import Ourmenu from "@/components/Ourmenu";
import Ourchef from "@/components/Ourchef";
import Testimonial from "@/components/Testimonial";
import Process from "@/components/process";
import Blog from "@/components/Blog";
import AboutHome from "@/components/AboutHome";



export default function Home() {
  return (
    <div className="w-full bg-black"> 
      <Hero/>
      <AboutHome/>
      <Cat/>
      <Why/>
      <Client/>
      <Ourmenu/>
      <Ourchef/>
      <Testimonial/>
      <Process/>
      <Blog/>

      
    </div>

  );
}
