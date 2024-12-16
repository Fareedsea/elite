import Hero from "@/components/Hero";
import About from "@/components/About";
import Cat from "@/components/Cat";
import Why from "@/components/why";
import Client from "@/components/Client";
import Ourmenu from "@/components/Ourmenu";



export default function Home() {
  return (
    <div className="w-full bg-black"> 
      <Hero/>
      <About/>
      <Cat/>
      <Why/>
      <Client/>
      <Ourmenu/>
      
    </div>

  );
}
