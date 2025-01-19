import Link from "next/link";
import { FaCheck } from "react-icons/fa";
import { Great_Vibes } from "next/font/google"
const great_Vibes = Great_Vibes ({weight:"400", subsets:["latin"]});

const AboutHome = () => {
  return (
   
    <section className="bg-black text-white py-16 lg:wrapper flex flex-col lg:flex-row items-center justify-between">
      {/* Left Content */}
      <div className="mr-4 lg:w-1/2 mb-8 lg:mb-0">
        <h3 className={`${great_Vibes.className} text-[#FF9F0D] sm:text-2xl text-1xl sm:leading-10`}>About Us</h3>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          <span className="text-orange-500">We</span> Create the best foody product
        </h1>
        <p className="text-gray-300 leading-relaxed mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          expedita tempora, ab eum sequi magnam nisi esse quis ullam ipsum
          voluptatem excepturi, nemo placeat autem iste necessitatibus minus
          unde voluptatibus!
        </p>

        {/* List Items */}
        <ul className="space-y-4 mb-6">
          <li className="flex items-center">
            <FaCheck size={20} className="text-orange-500" />
            <p className="ml-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li className="flex items-center">
            <FaCheck size={20} className="text-orange-500" />
            <p className="ml-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi.</p>
          </li>
          <li className="flex items-center">
            <FaCheck size={20} className="text-orange-500" />
            <p className="ml-4">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
          </li>
        </ul>

        {/* Read More Button */}
        <Link
          href="/about"
          className="inline-block bg-transparent border border-orange-500 text-orange-500 py-2 px-6 rounded-full font-medium hover:bg-orange-500 hover:text-black transition duration-300"
        >
          Read more
        </Link>
      </div>

      {/* Right Images */}
      <div className="lg:w-1/2 grid grid-cols-2 gap-4">
        {/* Large Top Image */}
        <div className="col-span-2">
          <img
            src='/hero-02-01.jpeg'
            alt="Delicious Food 1"
           
            className="w-[660px] h-[330px] rounded-lg object-cover"
          />
        </div>
        {/* Bottom Two Images */}
        <img
          src='/hero-02-02.jpeg'
          alt="Delicious Food 2"
  
          className="w-[322px] h-[194px] rounded-lg object-cover"
        />
        <img
          src='/hero-02-03.jpeg'
          alt="Delicious Food 3"
  
          className="w-[322px] h-[194px] rounded-lg object-cover"
        />
      </div>
    </section>

  );
};

export default AboutHome;
