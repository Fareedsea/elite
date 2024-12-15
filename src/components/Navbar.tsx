import { FaSearch } from "react-icons/fa";
import { LiaShoppingBagSolid } from "react-icons/lia";
import Link from "next/link";
import Menu from "./Menu";

const Navbar = () => {
  return (
    <nav className="w-full bg-black text-white p-4">
      <div className="container mx-auto flex justify-evenly items-center">
        {/* Logo */}
        <div className="text-xl font-bold flex justify-center">
          <span className="text-[#FF9F0D]">Food</span>tuck
        </div>

        {/* Nav Items */}
        <div className="hidden md:flex space-x-8">
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

        {/* Search, Cart, and Mobile Menu */}
        <div className="flex items-center space-x-4">
          {/* Search Icon and Input */}
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search..."
              className="p-2 mb-0 rounded-3xl bg-black text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-[#FF9F0D]"
            />
            <div className="absolute top-3 right-3 text-white">
              <FaSearch />
            </div>
          </div>

          {/* Cart Icon */}
          <div className="relative">
            <LiaShoppingBagSolid className="text-2xl cursor-pointer" />
            <span className="absolute top-0 right-0 bg-black text-white text-xs rounded-full px-1"></span>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-2xl">
            <span className="material-icons">
              <Menu />
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
