import Header from '@/components/Header'
import React from 'react'

const Pages = () => {
  return (
    <div>
          <div
    className="bg-cover bg-center h-64 flex items-center justify-center"
    style={{ backgroundImage: 'url("/bg-h-image.jpg")' }}
  >
    <div className="text-center">
      <h1 className="text-white text-4xl md:text-5xl font-bold">Our Pages</h1>
      <nav className="mt-2">
        <a href="/" className="text-white hover:text-orange-300">
          Home
        </a>
        <span className="text-white mx-2">&gt;</span>
        <span className="text-orange-300">Pages</span>
      </nav>
    </div>
  </div>
    </div>
  )
}

export default Pages