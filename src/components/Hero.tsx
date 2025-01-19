import { Great_Vibes } from "next/font/google"
const great_Vibes = Great_Vibes ({weight:"400", subsets:["latin"]});

const Hero = () => {
  return (
    <div className="wrapper flex bg-black gap-10">
      <div>
        <img src="/hero-01-00.png" className="w-[25px] h-[492px]" />
      </div>
      <div className="w-[472px] h-[356px] mt-16">
      <h3 className={`${great_Vibes.className} text-[#FF9F0D] sm:text-2xl text-1xl sm:leading-10`}>
            Its Quick & Amusing!
          </h3>
          <h3 className="text-white-800 md:text-3xl text-2xl md:leading-10">
            <span className="text-[#FF9F0D]">Th</span>e Art of speed food
            Quality
          </h3>
          <p className="mt-4 text-sm text-white-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
            pharetra dictum neque massa congue
          </p>
          <button
            type="button"
            className="mt-5 w-[190px] h-[60px] rounded-full text-sm outline-none tracking-wide bg-[#FF9F0D] text-white hover:bg-orange-500"
          >
            See Menu
          </button>

        
      </div>
      <div className="flex justify-self-end md:h-[670px] md:w-[877px]">
    <img
      src="/hero-01-01.png"
      className="w-full h-full md:object-contain"
    />
  </div>
      
    </div>
  );
};

export default Hero;
