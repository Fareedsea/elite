import Header from "@/components/Header";
import Shopingcard from "@/components/Shopingcard";

const About = () => {
  return (
    <div className="bg-white text-black">
      <div
        className="bg-cover bg-center h-64 flex items-center justify-center"
        style={{ backgroundImage: 'url("/bg-h-image.jpg")' }}
      >
        <div className="text-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold">
            About Us
          </h1>
          <nav className="mt-2">
            <a href="#" className="text-white hover:text-orange-300">
              Home
            </a>
            <span className="text-white mx-2">&gt;</span>
            <span className="text-orange-300">About</span>
          </nav>
        </div>
      </div>
      <div>
        <div className="grid grid-rows-3 grid-flow-col gap-4">
          <div className="row-span-3 ...">
          <img
              src="/hero-02-01.jpeg"
              alt="Egg Sandwich"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="col-span-2 ...">
          <img
              src="/hero-02-01.jpeg"
              alt="Egg Sandwich"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="row-span-2 col-span-2 ...">
          <img
              src="/hero-02-01.jpeg"
              alt="Egg Sandwich"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default About;
