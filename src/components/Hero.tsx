import React from "react";
// import {Great} from 'next/font/google';

const Hero = () => {
  return (
    <div className=" container-xxl bg-black p-0">
      
      <div className="grid md:grid-cols-3 items-center md:gap-4 gap-8 font-[sans-serif] max-w-5xl max-md:max-w-md mx-auto">
      <div className="w-[25.28px] h-[492px]">

      </div>
        <div className="w-[472px] h-[356px] mt-[293px] max-md:order-1 max-md:text-center">
          <h3 className="text-[#FF9F0D] sm:text-2xl text-1xl sm:leading-10">
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
        <div className="w-[877.8px] h-[670px]">
          <img
            src="/h-image.jpg"
            className="w-full h-full md:object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
