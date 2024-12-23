import { FaSearch } from "react-icons/fa";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { AiOutlineUser } from "react-icons/ai";
import Link from "next/link";
import Menu from "./Menu";

const Navbar = () => {
  return (
    <div className="bg-black w-full h-[90px]">

    <nav className="wrapper flex h-[32px] text-white mt-[29px] mb-[29px]"> 
     {/* Logo */}
    <div className="flex justify-self-start text-xl font-bold">
      <span className="text-[#FF9F0D]">Food</span>tuck
    </div>
      <div className="container flex justify-evenly items-center mx-4 sm:mx-6 md:mx-8 lg:mx-auto">
      

        {/* Nav Items */}
        <div className="hidden md:flex space-x-8 font-normal">
          <Link href="/" className="hover:text-orange-400">
            Home
          </Link>
          <Link href="/Menu" className="hover:text-orange-400">
            Menu
          </Link>
          <Link href="/Blog" className="hover:text-orange-400">
            Blog
          </Link>
          <Link href="/Pages" className="hover:text-orange-400">
            Pages
          </Link>
          <Link href="/About" className="hover:text-orange-400">
            About
          </Link>
          <Link href="/Shop" className="hover:text-orange-400">
            Shop
          </Link>
          <Link href="/Contact" className="hover:text-orange-400">
            Contact
          </Link>
        </div>

      
      </div>
        {/* Search, Cart, and Mobile Menu */}
        <div className="flex justify-self-end space-x-4">
          {/* Search Icon and Input */}
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search..."
              className="p-1 mb-0 rounded-3xl bg-black text-white placeholder-white border border-[#FF9F0D]"
            />
            <div className="absolute top-3 right-3 text-white cursor-pointer">
              <FaSearch />
            </div>
          </div>
          <AiOutlineUser className="text-2xl cursor-pointer" />
          {/* Cart Icon */}
          <div className="relative">
           
            <LiaShoppingBagSolid className="text-2xl cursor-pointer" />
            <span className="absolute top-0 right-0 bg-black text-white text-xs rounded-full px-1"></span>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-2xl">
            <span className="material-icons">
              <Menu/>
            </span>
          </button>
        </div>
    </nav>
    </div>
  );
};

export default Navbar;