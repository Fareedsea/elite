// components/AboutUs.js
const About = () => {
    return (
      <section className="bg-black text-white mt-20 md:flex md:justify-center items-center w-full">
        <div className="w-[1320px] h-[562px] flex justify-self-center"> 
        {/* Left Section */}
        <div className="w-[562px] h-[562px] md:w-1/2">
          <h2 className="text-yellow-400 italic text-lg mb-2">About us</h2>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-yellow-400">We</span> Create the best foody product
          </h1>
          <p className="mb-6 text-gray-300 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui
            volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum.
          </p>
  
          {/* Bullet Points */}
          <ul className="mb-6 space-y-3 text-gray-300">
            <li className="flex items-center">
              <span className="text-yellow-400 mr-2">✓</span> Lacus nisi, et ac dapibus sit eu velit in consequat.
            </li>
            <li className="flex items-center">
              <span className="text-yellow-400 mr-2">✓</span> Quisque diam pellentesque bibendum non dui volutpat fringilla.
            </li>
            <li className="flex items-center">
              <span className="text-yellow-400 mr-2">✓</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </li>
          </ul>
  
          {/* Read More Button */}
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-2 px-5 rounded">
            Read More
          </button>
        </div>
  
        {/* Right Section */}
        <div className="md:w-1/2 flex flex-wrap justify-center mt-8 md:mt-0 md:pl-10">
          <div className=" gap-4">
            <img
              src="/hero-02-01.jpeg"
              alt="Egg Sandwich"
              className="w-full h-48 object-cover rounded-lg"
            />
            <div className="mt-2 grid grid-cols-2 gap-2"> 
              <img
                src="/hero-02-02.jpeg"
                alt="Food platter"
                className="w-full h-24 object-cover rounded-lg"
              />
              <img
                src="/hero-02-03.jpeg"
                alt="Sandwich stack"
                className="w-full h-24 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
        </div>
      </section>
    );
  };
  
  export default About;