import React from 'react'
import Image from 'next/image'

const Process = () => {
  return (
    <>
  <div className="relative py-16">
    <div className="absolute inset-0">
      <img
        src="bg-blog.png"
        alt="Background Image"
        className="w-full h-full object-cover opacity-50"
      />
    </div>
    <div className="relative max-w-screen-xl mx-auto px-8 z-10 text-center text-white">
      <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
        Welcome to Our Premium Service
      </h1>
      <p className="text-lg md:text-xl mb-12">
        Experience excellence like never before with our exclusive products and
        services.
      </p>
      <button
        type="button"
        className="bg-indigo-600 hover:bg-indigo-700 text-white text-base tracking-wide px-6 py-3 rounded-full transition duration-300 ease-in-out shadow-lg hover:shadow-xl"
      >
        Get Started
      </button>
    </div>
  </div>

</>

   

  );
}

export default Process