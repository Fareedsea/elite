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
      <div className="absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl z-10">
        <Link href="/">Home</Link>
        <Link href="/Menu">Menu</Link>
        <Link href="/Blog">Blog</Link>
        <Link href="/Pages">Pages</Link>
        <Link href="/About">About</Link>
        <Link href="/Shop">Shop</Link>
        <Link href="/Contact">Contact</Link>
      </div>
      )
    }
    </div>
  );
};

export default Menu;
