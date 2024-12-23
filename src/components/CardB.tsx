import React from 'react'

const CardB = () => {
  return (
    <div>
    <div className="grid md:grid-cols-2 items-center md:gap-4 gap-8 font-[sans-serif] max-w-5xl max-md:max-w-md mx-auto">
      <div className="justify-self-start md:h-[470px] mt-[50px] mb-[50px]">
        <img
          src="/ourmenu-03.jpeg"
          className="w-full h-full md:object-contain"
        />
      </div>
      <div className="max-md:order-1 max-md:text-center">
        <img src="/coffee.png" alt="Coffee Picture" />
        <h3 className="text-black font-bold md:text-3xl text-2xl md:leading-10">
        Dessert
        </h3>
        <div className="text-black mt-[20px] mb-[20px]">
          <div className="flex justify-between font-bold">
            <h1>Fig and lemon cake</h1>
            <p className="text-[#FF9F0D]">32$</p>
          </div>
          <p className="text-[#4F4F4F]">
            Toasted French bread topped with romano, cheddar
          </p>
          <p className="text-[#828282]">560 CAL</p>
        </div>
        <div className="text-black mt-[20px] mb-[20px]">
          <div className="flex justify-between font-bold">
            <h1 className="text-[#FF9F0D]">Creamy mascarpone cake</h1>
            <p className="text-[#FF9F0D]">43$</p>
          </div>
          <p className="text-[#4F4F4F]">
          Gorgonzola, ricotta, mozzarella, taleggio
          </p>
          <p className="text-[#828282]">700 CAL</p>
        </div>
        <div className="text-black mt-[20px] mb-[20px]">
          <div className="flex justify-between font-bold">
            <h1>Pastry, blueberries, lemon juice</h1>
            <p className="text-[#FF9F0D]">14$</p>
          </div>
          <p className="text-[#4F4F4F]">
          Ground cumin, avocados, peeled and cubed
          </p>
          <p className="text-[#828282]">1000 CAL</p>
        </div>
        <div className="text-black mt-[20px] mb-[20px]">
          <div className="flex justify-between font-bold">
            <h1>Pain au chocolat</h1>
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
      Drinks
      </h3>
      <div className="text-black mt-[20px] mb-[20px]">
        <div className="flex justify-between font-bold">
          <h1>Caffè macchiato</h1>
          <p className="text-[#FF9F0D]">32$</p>
        </div>
        <p className="text-[#4F4F4F]">
          Toasted French bread topped with romano, cheddar
        </p>
        <p className="text-[#828282]">560 CAL</p>
      </div>
      <div className="text-black mt-[20px] mb-[20px]">
        <div className="flex justify-between font-bold">
          <h1>Aperol Spritz Capacianno</h1>
          <p className="text-[#FF9F0D]">43$</p>
        </div>
        <p className="text-[#4F4F4F]">
        Gorgonzola, ricotta, mozzarella, taleggio
        </p>
        <p className="text-[#828282]">700 CAL</p>
      </div>
      <div className="text-black mt-[20px] mb-[20px]">
        <div className="flex justify-between font-bold">
          <h1>Tormentoso BushTea Pintoage</h1>
          <p className="text-[#FF9F0D]">14$</p>
        </div>
        <p className="text-[#4F4F4F]">
        Ground cumin, avocados, peeled and cubed
        </p>
        <p className="text-[#828282]">1000 CAL</p>
      </div>
      <div className="text-black mt-[20px] mb-[20px]">
        <div className="flex justify-between font-bold">
          <h1>Tormentoso BushTea Pintoage</h1>
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
        src="/ourmenu-04.jpeg"
        className="w-full h-full md:object-contain"
      />
    </div>
  </div>
</div>

  )
}

export default CardB
