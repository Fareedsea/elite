"use client"
import Image from "next/image"

const Searchbar = () => {
  return (
    <div>

        <form className="flex items-center justify-between gap-4 bg-gray-100 p-2 rounded-md flex-1">
            <input type="text" placeholder="Search" className="flex-1 bg-transparent outline-none"/>
            <button className="cursor-pointer">
                
                </button> 

        </form>
    </div>
  )
}

export default Searchbar