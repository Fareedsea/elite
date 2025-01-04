import AboutHome from "@/components/AboutHome";




const About = () => {
  return (
    <div className="bg-white">
      <div
        className="bg-cover bg-center h-64 flex items-center justify-center"
        style={{ backgroundImage: 'url("/bg-h-image.jpg")' }}
      >
        <div className="text-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold">
            About Us
          </h1>
          <nav className="mt-2">
            <a href="/" className="text-white hover:text-orange-300">
              Home
            </a>
            <span className="text-white mx-2">&gt;</span>
            <span className="text-orange-300">About</span>
          </nav>
        </div>
      </div>
     
    <AboutHome/>
      
    </div>
  );
};

export default About;
