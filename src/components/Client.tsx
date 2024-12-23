import React from "react";
import Image from "next/image";

const Client = () => {
  return (
    
     <div className="py-10 px-4" style={{ backgroundImage: 'url("/bg-client.jpeg")'}}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-12 max-md:max-w-lg mx-auto">
          <div className="rounded-xl group p-8 justify-items-center text-center hover:bg-orange-300 text-white hover:text-black hover:shadow-xl transition duration-300">
            <Image src="/prof-chef.png" alt="Client" width={120} height={120} />
            <p className="mt-2">Professional Chefs</p>
            <h1 className="font-bold">420</h1>
          </div>
          <div className="rounded-xl group p-8 justify-items-center text-center hover:bg-orange-300 text-white hover:text-black hover:shadow-xl transition duration-300">
            <Image src="/food-item.png" alt="Client" width={120} height={120} />
            <p className="mt-2">Item of Food</p>
            <h1 className="font-bold">420</h1>
          </div>
          <div className="rounded-xl group p-8 justify-items-center text-center hover:bg-orange-300 text-white hover:text-black hover:shadow-xl transition duration-300">
            <Image src="/spoon.png" alt="Client" width={120} height={120} />
            <p className="mt-2">Years of Expreince</p>
            <h1 className="font-bold">420</h1>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Client;
