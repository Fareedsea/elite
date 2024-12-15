import React from "react";

const Header = () => {
  return (
<div
  className="bg-cover bg-center h-64 flex items-center justify-center"
  style={{ backgroundImage: 'url("/bg-h-image.jpg")' }}
>
  <div className="text-center">
    <h1 className="text-white text-4xl md:text-5xl font-bold">Shop Details</h1>
    <nav className="mt-2">
      <a href="#" className="text-gray-300 hover:text-white">
        Home
      </a>
      <span className="text-gray-300 mx-2">&gt;</span>
      <span className="text-gray-300">Shop details</span>
    </nav>
  </div>
</div>

  );
};

export default Header;
