import Header from '@/components/Header'
import React from 'react'

const Contact = () => {
  return (
    <div
    className="bg-cover bg-center h-64 flex items-center justify-center"
    style={{ backgroundImage: 'url("/bg-h-image.jpg")' }}
  >
    <div className="text-center">
      <h1 className="text-white text-4xl md:text-5xl font-bold">Contact Us</h1>
      <nav className="mt-2">
        <a href="#" className="text-white hover:text-orange-300">
          Home
        </a>
        <span className="text-white mx-2">&gt;</span>
        <span className="text-orange-300">Contact</span>
      </nav>
    </div>
  </div>



  )
}

export default Contact