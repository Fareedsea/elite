'use client'
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
const Menu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Image
        src="/list-2.png"
        alt="Logo"
        width={28}
        height={28}
        className="cursor-pointer"
        onClick={()=>setOpen((prev)=>!prev)}
      />
      {
      open && (
      <div className="absolute bg-black text-white left-0 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl z-10">
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
      )
    }
    </div>
  );
};

export default Menu;
