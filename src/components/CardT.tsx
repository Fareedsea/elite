import React from "react";

const CardT = () => {
  return (
    <div>
      <div className="grid md:grid-cols-2 items-center md:gap-4 gap-8 font-[sans-serif] max-w-5xl max-md:max-w-md mx-auto">
        <div className="justify-self-start md:h-[470px] mt-[50px] mb-[50px]">
          <img
            src="/ourmenu-01.jpeg"
            className="w-full h-full md:object-contain"
          />
        </div>
        <div className="max-md:order-1 max-md:text-center">
          <img src="/coffee.png" alt="Coffee Picture" />
          <h3 className="text-black font-bold md:text-3xl text-2xl md:leading-10">
            Starter Menu
          </h3>
          <div className="text-black mt-[20px] mb-[20px]">
            <div className="flex justify-between font-bold">
              <h1>Alder Grilled Chinook Salmon</h1>
              <p className="text-[#FF9F0D]">32$</p>
            </div>
            <p className="text-[#4F4F4F]">
              Toasted French bread topped with romano, cheddar
            </p>
            <p className="text-[#828282]">560 CAL</p>
          </div>
          <div className="text-black mt-[20px] mb-[20px]">
            <div className="flex justify-between font-bold">
              <h1 className="text-[#FF9F0D]">Berries and creme tart</h1>
              <p className="text-[#FF9F0D]">43$</p>
            </div>
            <p className="text-[#4F4F4F]">
              Gorgonzola, ricotta, mozzarella, taleggio
            </p>
            <p className="text-[#828282]">700 CAL</p>
          </div>
          <div className="text-black mt-[20px] mb-[20px]">
            <div className="flex justify-between font-bold">
              <h1>Tormentoso Bush Pizza Pintoage</h1>
              <p className="text-[#FF9F0D]">14$</p>
            </div>
            <p className="text-[#4F4F4F]">
              Ground cumin, avocados, peeled and cubed
            </p>
            <p className="text-[#828282]">1000 CAL</p>
          </div>
          <div className="text-black mt-[20px] mb-[20px]">
            <div className="flex justify-between font-bold">
              <h1>Spicy Vegan Potato Curry</h1>
              <p className="text-[#FF9F0D]">35$</p>
            </div>
            <p className="text-[#4F4F4F]">
              Spreadable cream cheese, crumbled blue cheese
            </p>
            <p className="text-[#828282]">560 CAL</p>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 items-center md:gap-4 gap-8 font-[sans-serif] max-w-5xl max-md:max-w-md mx-auto">
        <div className="max-md:order-1 max-md:text-center">
          <img src="/coffee.png" alt="Coffee Picture" />
          <h3 className="text-black font-bold md:text-3xl text-2xl md:leading-10">
            Main Course
          </h3>
          <div className="text-black mt-[20px] mb-[20px]">
            <div className="flex justify-between font-bold">
              <h1>Optic Big Breakfast Combo Menu</h1>
              <p className="text-[#FF9F0D]">32$</p>
            </div>
            <p className="text-[#4F4F4F]">
              Toasted French bread topped with romano, cheddar
            </p>
            <p className="text-[#828282]">560 CAL</p>
          </div>
          <div className="text-black mt-[20px] mb-[20px]">
            <div className="flex justify-between font-bold">
              <h1>Cashew Chicken With Stir-Fry</h1>
              <p className="text-[#FF9F0D]">43$</p>
            </div>
            <p className="text-[#4F4F4F]">
              Gorgonzola, ricotta, mozzarella, taleggio
            </p>
            <p className="text-[#828282]">700 CAL</p>
          </div>
          <div className="text-black mt-[20px] mb-[20px]">
            <div className="flex justify-between font-bold">
              <h1>Vegetables & Green Salad</h1>
              <p className="text-[#FF9F0D]">14$</p>
            </div>
            <p className="text-[#4F4F4F]">
              Ground cumin, avocados, peeled and cubed
            </p>
            <p className="text-[#828282]">1000 CAL</p>
          </div>
          <div className="text-black mt-[20px] mb-[20px]">
            <div className="flex justify-between font-bold">
              <h1>Spicy Vegan Potato Curry</h1>
              <p className="text-[#FF9F0D]">35$</p>
            </div>
            <p className="text-[#4F4F4F]">
              Spreadable cream cheese, crumbled blue cheese
            </p>
            <p className="text-[#828282]">560 CAL</p>
          </div>
        </div>
        <div className="border-2 justify-self-end md:h-[470px] mt-[50px] mb-[50px]">
          <img
            src="/ourmenu-02.jpeg"
            className="w-full h-full md:object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default CardT;
