import React from "react";

const Products = () => {
  return (
    <div className="bg-white">
      <div className="font-[sans-serif] p-4 mx-auto lg:max-w-5xl md:max-w-3xl max-w-lg">
        <div className="flex justify-self-start gap-8">
          <form className="max-w-sm mx-auto">
            <label
              htmlFor="countries_disabled"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Select an option
            </label>
            <select
              disabled=""
              id="countries_disabled"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected="">Choose a country</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </form>
          <form className="max-w-sm mx-auto">
            <label
              htmlFor="countries_disabled"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Select an option
            </label>
            <select
              disabled=""
              id="countries_disabled"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected="">Choose a country</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </form>
        </div>
        <h2 className="text-4xl font-extrabold text-gray-800 mb-12">Laptops</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white overflow-hidden cursor-pointer hover:border border-purple-600 transition-all relative">
            <div className="w-[312px] h-[330px] overflow-hidden">
              <img src="/shop/shop-01.jpeg" alt="food" className="cover" />
            </div>
            <div>
              <h3 className="text-black font-bold mt-2">Fresh Lime</h3>
              <h4 className="text-orange-400 font-bold mt-2">$600</h4>
            </div>
          </div>
          <div className="bg-white overflow-hidden cursor-pointer hover:border border-purple-600 transition-all relative">
            <div className="w-[312px] h-[330px] overflow-hidden mx-auto">
              <img
                src="/shop/shop-02.jpeg"
                alt="food"
                className="object-fill"
              />
            </div>
            <div>
              <h3 className="text-black font-bold mt-2">Fresh Lime</h3>
              <h4 className="text-orange-400 font-bold mt-2">$600</h4>
            </div>
          </div>
          <div className="bg-white overflow-hidden cursor-pointer hover:border border-purple-600 transition-all relative">
            <div className="w-[312] h-[330px] overflow-hidden mx-auto">
              <img
                src="/shop/shop-03.jpeg"
                alt="food"
                className="h-full w-full cover"
              />
            </div>
            <div>
              <h3 className="text-black font-bold mt-2">Fresh Lime</h3>
              <h4 className="text-orange-400 font-bold mt-2">$600</h4>
            </div>
          </div>
          <div className="bg-white overflow-hidden cursor-pointer hover:border border-purple-600 transition-all relative">
            <div className="w-[312px] h-[330px] overflow-hidden">
              <img src="/shop/shop-04.jpeg" alt="food" className="cover" />
            </div>
            <div>
              <h3 className="text-black font-bold mt-2">Fresh Lime</h3>
              <h4 className="text-orange-400 font-bold mt-2">$600</h4>
            </div>
          </div>
          <div className="bg-white overflow-hidden cursor-pointer hover:border border-purple-600 transition-all relative">
            <div className="w-[312px] h-[330px] overflow-hidden mx-auto">
              <img
                src="/shop/shop-05.jpeg"
                alt="food"
                className="w-full cover"
              />
            </div>
            <div>
              <h3 className="text-black font-bold mt-2">Fresh Lime</h3>
              <h4 className="text-orange-400 font-bold mt-2">$600</h4>
            </div>
          </div>
          <div className="bg-white overflow-hidden cursor-pointer hover:border border-purple-600 transition-all relative">
            <div className="w-[312] h-[330px] overflow-hidden mx-auto">
              <img
                src="/shop/shop-06.jpeg"
                alt="food"
                className="h-full w-full cover"
              />
            </div>
            <div>
              <h3 className="text-black font-bold mt-2">Fresh Lime</h3>
              <h4 className="text-orange-400 font-bold mt-2">$600</h4>
            </div>
          </div>
          <div className="bg-white overflow-hidden cursor-pointer hover:border border-purple-600 transition-all relative">
            <div className="w-[312] h-[330px] overflow-hidden mx-auto">
              <img
                src="/shop/shop-06.jpeg"
                alt="food"
                className="h-full w-full cover"
              />
            </div>
            <div>
              <h3 className="text-black font-bold mt-2">Fresh Lime</h3>
              <h4 className="text-orange-400 font-bold mt-2">$600</h4>
            </div>
          </div>
          <div className="bg-white overflow-hidden cursor-pointer hover:border border-purple-600 transition-all relative">
            <div className="w-[312px] h-[330px] overflow-hidden mx-auto">
              <img
                src="/shop/shop-08.jpeg"
                alt="food"
                className="w-full cover"
              />
            </div>
            <div>
              <h3 className="text-black font-bold mt-2">Fresh Lime</h3>
              <h4 className="text-orange-400 font-bold mt-2">$600</h4>
            </div>
          </div>
          <div className="bg-white overflow-hidden cursor-pointer hover:border border-purple-600 transition-all relative">
            <div className="w-[312] h-[330px] overflow-hidden mx-auto">
              <img
                src="/shop/shop-09.jpeg"
                alt="food"
                className="h-full w-full cover"
              />
            </div>
            <div>
              <h3 className="text-black font-bold mt-2">Fresh Lime</h3>
              <h4 className="text-orange-400 font-bold mt-2">$600</h4>
            </div>
          </div>
          <div className="bg-white overflow-hidden cursor-pointer hover:border border-purple-600 transition-all relative">
            <div className="w-[312px] h-[330px] overflow-hidden">
              <img src="/shop/shop-10.jpeg" alt="food" className="cover" />
            </div>
            <div>
              <h3 className="text-black font-bold mt-2">Fresh Lime</h3>
              <h4 className="text-orange-400 font-bold mt-2">$600</h4>
            </div>
          </div>
          <div className="bg-white overflow-hidden cursor-pointer hover:border border-purple-600 transition-all relative">
            <div className="w-[312px] h-[330px] overflow-hidden mx-auto">
              <img
                src="/shop/shop-11.jpeg"
                alt="food"
                className="w-full cover"
              />
            </div>
            <div>
              <h3 className="text-black font-bold mt-2">Fresh Lime</h3>
              <h4 className="text-orange-400 font-bold mt-2">$600</h4>
            </div>
          </div>
          <div className="bg-white overflow-hidden cursor-pointer hover:border border-purple-600 transition-all relative">
            <div className="w-[312] h-[330px] overflow-hidden mx-auto">
              <img
                src="/shop/shop-12.jpeg"
                alt="food"
                className="h-full w-full cover"
              />
            </div>
            <div>
              <h3 className="text-black font-bold mt-2">Fresh Lime</h3>
              <h4 className="text-orange-400 font-bold mt-2">$600</h4>
            </div>
          </div>
          <div className="bg-white overflow-hidden cursor-pointer hover:border border-purple-600 transition-all relative">
            <div className="w-[312px] h-[330px] overflow-hidden">
              <img src="/shop/shop-13.jpeg" alt="food" className="cover" />
            </div>
            <div>
              <h3 className="text-black font-bold mt-2">Fresh Lime</h3>
              <h4 className="text-orange-400 font-bold mt-2">$600</h4>
            </div>
          </div>
          <div className="bg-white overflow-hidden cursor-pointer hover:border border-purple-600 transition-all relative">
            <div className="w-[312px] h-[330px] overflow-hidden mx-auto">
              <img
                src="/shop/shop-14.jpeg"
                alt="food"
                className="w-full cover"
              />
            </div>
            <div>
              <h3 className="text-black font-bold mt-2">Fresh Lime</h3>
              <h4 className="text-orange-400 font-bold mt-2">$600</h4>
            </div>
          </div>
          <div className="bg-white overflow-hidden cursor-pointer hover:border border-purple-600 transition-all relative">
            <div className="w-[312] h-[330px] overflow-hidden mx-auto">
              <img
                src="/shop/shop-15.jpeg"
                alt="food"
                className="h-full w-full cover"
              />
            </div>
            <div>
              <h3 className="text-black font-bold mt-2">Fresh Lime</h3>
              <h4 className="text-orange-400 font-bold mt-2">$600</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
