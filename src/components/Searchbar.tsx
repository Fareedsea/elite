"use client"
import Image from "next/image"

const Searchbar = () => {
  return (
    <div>

        <form className="flex items-center justify-between gap-4 bg-black text-white p-2 rounded-md flex-1">
            <input type="text" placeholder="Search" className="flex-1 bg-transparent  text-white outline-1"/>
            <button className="cursor-pointer">
              <Image 
              src="/magnifying-glass.png"
              alt="Search"
              width={16}
              height={16}
              />  
                </button> 

        </form>
    </div>
  )
}

export default Searchbar