import React from 'react'
import Image from 'next/image'

const Process = () => {
  return (
    <div className="bg-cover bg-center w-full h-[558px] flex justify-center" style={{ backgroundImage: 'url("/bg-process.png")', opacity: 0.6 }}>
      
      <div className='w-50%'>

      </div>
      <div className="mt-[50px] w-[50%]flex justify-end text-wrap">
        <h2 className="w-[273px] h-[40px] flex justify-end text-yellow-400 italic text-lg mb-2">Restaurant Active Process</h2>
        <h1 className="flex text-3xl md:text-4xl font-bold mb-4">
          <span className="text-yellow-400">We</span>Document Every Food
           Bean Process untile it is saved
         </h1>    
      </div>

    </div>
  );
}

export default Process