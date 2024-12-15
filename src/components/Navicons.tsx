"use client"
import Image from "next/image"

const Navicons = () => {
  return (
    <div className="flex items-center gap-4 xl:gap-6">
        <Image
        src=""
        alt="Profile"
        width={22}
        height={22}
        className="cursor-pointer"
        />
        <Image
        src=""
        alt="Cart"
        width={22}
        height={22}
        className="cursor-pointer"
        />       
    </div>
  )
}

export default Navicons