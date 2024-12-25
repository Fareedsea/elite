import Client from "@/components/Client";
import CardT from "@/components/CardT";
import CardB from "@/components/CardB";

const Menu = () => {
  return (
    <div className="bg-white">
      <div
        className="bg-cover bg-center h-64 flex items-center justify-center"
        style={{ backgroundImage: 'url("/bg-h-image.jpg")' }}
      >
        <div className="text-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold">
            Our Menu
          </h1>
          <nav className="mt-2">
            <a href="/" className="text-white hover:text-orange-300">
              Home
            </a>
            <span className="text-white mx-2">&gt;</span>
            <span className="text-orange-300">Menu</span>
          </nav>
        </div>
        <div></div>
      </div>
      <div>
        <CardT />
        <Client />
        <CardB />
        <div className="bg-gray-50 p-8 min-h-[350px] flex flex-col items-center justify-center font-sans">
        
          <h2 className="text-gray-800 text-3xl font-bold mb-16 text-center">
          <p>Partners & Clients</p>
          We work with the best pepole

          </h2>
          <div className="border-2 grid lg:grid-cols-6 sm:grid-cols-2 gap-2 max-lg:gap-12">
          <img
                src="/partner-01.png"
                className="h-[129px] opacity-30 md:object-contain"
              />
              <img
                src="/partner-02.png"
                className="h-[129px] opacity-30 md:object-contain"
              />
              <img
                src="/partner-03.png"
                className="h-[129px] opacity-30 md:object-contain"
              />
              <img
                src="/partner-04.png"
                className="h-[129px] opacity-30 md:object-contain"
              />
              <img
                src="/partner-05.png"
                className="h-[129px] opacity-30 md:object-contain"
              />
              <img
                src="/partner-06.png"
                className="h-[129px] opacity-30 md:object-contain"
              />
    
          </div>
        </div>

       
      </div>
    </div>
  );
};

export default Menu;
