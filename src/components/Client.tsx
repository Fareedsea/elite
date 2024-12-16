import React from 'react'
import Image from 'next/image'

const Client = () => {
  return (
    <div className="bg-cover bg-center w-full h-[469px] flex justify-center" style={{ backgroundImage: 'url("/bg-client.jpeg")', opacity: 0.2 }}>
      <div className="w-[1319px] h-[247px] py-20 flex justify-evenly">
        <div className="w-[218px] h-[247px] felx flex-col justify-center items-center">
          <Image src="/prof-chef.png" alt="Client" width={120} height={120} />
          <p>Professional Chefs</p>
          <h1 className="font-bold">420</h1>
        </div>
        <div className="w-[218px] h-[247px] felx flex-col justify-center items-center">
          <Image src="/food-item.png" alt="Client" width={120} height={120} />
          <p>Item of Food</p>
          <h1 className="font-bold">420</h1>
        </div>
        <div className="w-[218px] h-[247px] felx flex-col justify-center items-center">
          <Image src="/spoon.png" alt="Client" width={120} height={120} />
          <p>Years of Expreince</p>
          <h1 className="font-bold">420</h1>
        </div>
        <div className="w-[218px] h-[247px] felx flex-col justify-center items-center">
          <Image src="/pizza-slice.png" alt="Client" width={120} height={120} />
          <p>Happy Customer</p>
          <h1 className="font-bold">420</h1>
        </div>
      </div>
    </div>
  );
}

export default Client