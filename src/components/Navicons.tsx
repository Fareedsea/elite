"use client"
import Image from "next/image"

const Navicons = () => {
  return (
    <div className="flex items-center gap-4 xl:gap-6">
        <Image
        src="/user.png"
        alt="Profile"
        width={22}
        height={22}
        className="cursor-pointer"
        />
        <Image
        src="/shopping.png"
        alt="Cart"
        width={22}
        height={22}
        className="cursor-pointer"
        />       
    </div>
  )
}

export default Navicons