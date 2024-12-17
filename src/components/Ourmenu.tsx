import React from 'react'
import Image from 'next/image'
const Ourmenu = () => {
  return (
    <div className='w-full flex justify-center items-center' >
      <div className='w-[515px] h-[406px] bg-cover bg-center' style={{ backgroundImage: 'url("/menu-05-00.png")'}} >

      <img
                  src="/menu-05-01.png"
                  alt="Our Menu Picture"
                  className="w-[366px] h-[362px]" 
                />
      </div>

                         {/* left side Section */}
            <div className='w-[50%]'>

           
             {/* left side Section */}
             <div className='grid grid-cols-2'>
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
                  <p className="text-xs">Lacus nisi, et ac dapibus velit in consequat.</p>
                  <p className='text-orange-400'>12.5$</p>
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
                  <p className="text-xs">Lacus nisi, et ac dapibus velit in consequat.</p>
                  <p className='text-orange-400'>12.5$</p>
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
                  <p className="text-xs">Lacus nisi, et ac dapibus velit in consequat.</p>
                  <p className='text-orange-400'>12.5$</p>
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
                  <p className="text-xs">Lacus nisi, et ac dapibus velit in consequat.</p>
                  <p className='text-orange-400'>12.5$</p>
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
                  <p className="text-xs">Lacus nisi, et ac dapibus velit in consequat.</p>
                  <p className='text-orange-400'>12.5$</p>
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
                  <p className="text-xs">Lacus nisi, et ac dapibus velit in consequat.</p>
                  <p className='text-orange-400'>12.5$</p>
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
                  <p className="text-xs">Lacus nisi, et ac dapibus velit in consequat.</p>
                  <p className='text-orange-400'>12.5$</p>
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
                  <p className="text-xs">Lacus nisi, et ac dapibus velit in consequat.</p>
                  <p className='text-orange-400'>12.5$</p>
                </div>
              </li>
              
           
            </ul>
          </div>
          </div>
          </div>

    </div>
  )
}

export default Ourmenu