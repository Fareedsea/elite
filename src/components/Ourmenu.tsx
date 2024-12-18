import React from "react";
import Link from "next/link";
const Ourmenu = () => {
  return (
    <div className="w-full">
      <h2 className="flex justify-center text-yellow-400 italic text-lg mb-2">Choose & Pick</h2>
      <h1 className="flex justify-center text-3xl md:text-4xl font-bold mb-4">
        <span className="text-yellow-400">Fr</span>om Our Menu
      </h1>
      <div className="flex justify-center md:flex space-x-8 font-normal">
          <Link href="/" className="hover:text-orange-400">
             Breakfast
          </Link>
          <Link href="/Menu" className="hover:text-orange-400">
            Lunch
          </Link>
          <Link href="/Blog" className="hover:text-orange-400">
            Dinner
          </Link>
          <Link href="/Pages" className="hover:text-orange-400">
            Dessert
          </Link>
          <Link href="/About" className="hover:text-orange-400">
            Drink
          </Link>
          <Link href="/Shop" className="hover:text-orange-400">
            Snack
          </Link>
          <Link href="/Contact" className="hover:text-orange-400">
            Soups
          </Link>
        </div>


      <div className="flex justify-center items-center">
        <div
          className="border border-spacing-1 w-[515px] h-[406px] bg-cover bg-center"
          style={{ backgroundImage: 'url("/menu-05-00.png")' }}
        >
          
          <img
            src="/menu-05-01.png"
            alt="Our Menu Picture"
            className="flex justify-center border border-spacing-1 w-[366px] h-[362px]"
          />
        </div>

        {/* left side Section */}
        <div className="w-[50%]">
          {/* left side Section */}
          <div className="grid grid-cols-2">
            <div>
              <ul className="space-y-4">
                <li className="w-[376px] h-[79px] flex items-start space-x-4">
                  <img
                    src="/menu-05-02.jpeg"
                    alt="Post Picture"
                    className="w-[80px] h-[79px] rounded"
                  />
                  <div>
                    <a
                      href="#"
                      className="text-sm font-semibold hover:text-white"
                    >
                      Lettuce Leaf
                    </a>
                    <p className="text-xs">
                      Lacus nisi, et ac dapibus velit in consequat.
                    </p>
                    <p className="text-orange-400">12.5$</p>
                  </div>
                </li>
                <li className="w-[376px] h-[79px] flex items-start space-x-4">
                  <img
                    src="/menu-05-04.jpeg"
                    alt="Post Picture"
                    className="w-[80px] h-[79px] rounded"
                  />
                  <div>
                    <a
                      href="#"
                      className="text-sm font-semibold hover:text-white"
                    >
                      Fresh Breakfast
                    </a>
                    <p className="text-xs">
                      Lacus nisi, et ac dapibus velit in consequat.
                    </p>
                    <p className="text-orange-400">12.5$</p>
                  </div>
                </li>
                <li className="w-[376px] h-[79px] flex items-start space-x-4">
                  <img
                    src="/menu-05-06.jpeg"
                    alt="Post Picture"
                    className="w-[80px] h-[79px] rounded"
                  />
                  <div>
                    <a
                      href="#"
                      className="text-sm font-semibold hover:text-white"
                    >
                      Mild Butter
                    </a>
                    <p className="text-xs">
                      Lacus nisi, et ac dapibus velit in consequat.
                    </p>
                    <p className="text-orange-400">12.5$</p>
                  </div>
                </li>
                <li className="w-[376px] h-[79px] flex items-start space-x-4">
                  <img
                    src="/menu-05-08.jpeg"
                    alt="Post Picture"
                    className="w-[80px] h-[79px] rounded"
                  />
                  <div>
                    <a
                      href="#"
                      className="text-sm font-semibold hover:text-white"
                    >
                      Fresh Bread
                    </a>
                    <p className="text-xs">
                      Lacus nisi, et ac dapibus velit in consequat.
                    </p>
                    <p className="text-orange-400">12.5$</p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <ul className="space-y-4">
                <li className="w-[376px] h-[79px] flex items-start space-x-4">
                  <img
                    src="/menu-05-03.jpeg"
                    alt="Post Picture"
                    className="w-[80px] h-[79px] rounded"
                  />
                  <div>
                    <a
                      href="#"
                      className="text-sm font-semibold hover:text-white"
                    >
                      Glow Cheese
                    </a>
                    <p className="text-xs">
                      Lacus nisi, et ac dapibus velit in consequat.
                    </p>
                    <p className="text-orange-400">12.5$</p>
                  </div>
                </li>
                <li className="w-[376px] h-[79px] flex items-start space-x-4">
                  <img
                    src="/menu-05-05.jpeg"
                    alt="Post Picture"
                    className="w-[80px] h-[79px] rounded"
                  />
                  <div>
                    <a
                      href="#"
                      className="text-sm font-semibold hover:text-white"
                    >
                      Italian Pizza
                    </a>
                    <p className="text-xs">
                      Lacus nisi, et ac dapibus velit in consequat.
                    </p>
                    <p className="text-orange-400">12.5$</p>
                  </div>
                </li>
                <li className="w-[376px] h-[79px] flex items-start space-x-4">
                  <img
                    src="/menu-05-07.jpeg"
                    alt="Post Picture"
                    className="w-[80px] h-[79px] rounded"
                  />
                  <div>
                    <a
                      href="#"
                      className="text-sm font-semibold hover:text-white"
                    >
                      Sllice Beef
                    </a>
                    <p className="text-xs">
                      Lacus nisi, et ac dapibus velit in consequat.
                    </p>
                    <p className="text-orange-400">12.5$</p>
                  </div>
                </li>
                <li className="w-[376px] h-[79px] flex items-start space-x-4">
                  <img
                    src="/menu-05-09.jpeg"
                    alt="Post Picture"
                    className="w-[80px] h-[79px] rounded"
                  />
                  <div>
                    <a
                      href="#"
                      className="text-sm font-semibold hover:text-white"
                    >
                      Mushaom Pizza
                    </a>
                    <p className="text-xs">
                      Lacus nisi, et ac dapibus velit in consequat.
                    </p>
                    <p className="text-orange-400">12.5$</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ourmenu;
