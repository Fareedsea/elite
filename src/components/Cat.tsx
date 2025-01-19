import { Great_Vibes } from "next/font/google"
const great_Vibes = Great_Vibes ({weight:"400", subsets:["latin"]});

const Cat = () => {
  return (
    <section className="bg-black text-white mt-20 md:flex md:justify-center items-center w-full">
      <div className="w-[1320px] h-[562px] flex flex-col justify-center">
               <h2 className={`${great_Vibes.className} text-[#FF9F0D] flex justify-center sm:text-2xl text-1xl sm:leading-10`}>Food Category</h2>
          <h1 className="flex justify-center text-3xl md:text-4xl font-bold mb-4">
            <span className="text-yellow-400">Ch</span>oose Food Items
          </h1> 
          <div className="w-[1320px] h-[329] flex justify-evenly gap-4">
            <img
              src="/hero-03-01.jpeg"
              alt="Egg Sandwich"
              className="w-[305px] h-[308px] object-cover hover:scale-105"
            />

            <img
              src="/hero-03-02.jpeg"
              alt="Food platter"
              className="w-[305px] h-[308px] object-cover hover:scale-105"
            />
            <img
              src="/hero-03-03.jpeg"
              alt="Sandwich stack"
              className="w-[305px] h-[308px] object-cover hover:scale-105"
            />
            <img
              src="/hero-03-04.jpeg"
              alt="Sandwich stack"
             className="w-[305px] h-[308px] object-cover hover:scale-105"
            />
          </div>
        
      </div>
    </section>
      )
}

export default Cat