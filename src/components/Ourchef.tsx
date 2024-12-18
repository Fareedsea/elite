import React from "react";

const Ourchef = () => {
  return (
    <div>
        <section className="bg-black text-white mt-20 md:flex md:justify-center items-center w-full">
      <div className="w-[1320px] h-[562px] flex flex-col justify-center">
               <h2 className="flex justify-center text-yellow-400 italic text-lg mb-2">Chefs</h2>
          <h1 className="flex justify-center text-3xl md:text-4xl font-bold mb-4">
            <span className="text-yellow-400">Me</span>et Our Chefs
          </h1> 
          <div className="w-[1320px] h-[329] flex justify-evenly gap-4">
            <img
              src="/chef-01.jpeg"
              alt="Chef"
              className="w-[305px] h-[308px] object-cover"
            />

            <img
              src="/chef-02.jpeg"
              alt="Chef"
              className="w-[305px] h-[308px] object-cover"
            />
            <img
              src="/chef-03.png"
              alt="Sandwich stack"
              className="w-[305px] h-[308px] object-cover"
            />
            <img
              src="/chef-04.png"
              alt="Sandwich stack"
             className="w-[305px] h-[308px] object-cover"
            />
          </div>
          <div className="flex justify-center">
          <button className="border border-orange-400 w-[155px] h-[50px] rounded-3xl">See More</button>
          </div>
      </div>
    </section>




      </div>

  );
};

export default Ourchef;
