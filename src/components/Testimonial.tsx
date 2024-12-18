import React from 'react'

const Testimonial = () => {
  return (
    <div>
             <section className="bg-black text-white mt-20 md:flex md:justify-center items-center w-full">
      <div className="w-[1273px] h-[770px] flex flex-col justify-center">
               <h2 className="text-yellow-400 italic text-lg mb-2">Testimonials</h2>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            What our client are saying
          </h1> 
         <div className='bg-cover bg-center rotate-100' style={{ backgroundImage: 'url("/bg-testimonial.png")', opacity: 0.1 }} >
            <div  className="w-[868px] h-[550px] flex justify-center">
                <div>

                </div>
            </div>
         </div>
      </div>
    </section>

    </div>
  )
}

export default Testimonial