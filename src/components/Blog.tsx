import React from 'react'

const Blog = () => {
  return (
    <div>
        <section className="py-32">
  <div className="container flex flex-col items-center gap-16 lg:px-16">
    <div className="text-center">
      <p className="mb-6 text-xs font-medium uppercase tracking-wider">
        Blog Post
      </p>
      <h2 className="mb-3 text-pretty text-3xl font-semibold md:mb-4 md:text-4xl lg:mb-6 lg:max-w-3xl lg:text-5xl">
        Latest News & Blog
      </h2>
      <p className="mb-8 text-zinc-700 md:text-base lg:max-w-2xl lg:text-lg">
        
      </p>
      <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-zinc-600 underline-offset-4 hover:underline h-10 px-4 py-2 w-full sm:w-auto">
         <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-arrow-right ml-2 size-4"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </button>
    </div>
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
      <a
        href="#"
        className="flex flex-col overflow-clip rounded-xl border border-border"
      >
        <div>
          <img
            src="/blog-01.jpeg"
            how=""
            alt="Blog 01"
            is=""
            exploring=""
            ui=""
            design=""
            className="aspect-[16/9] h-full w-full object-cover object-center"
          />
        </div>
        <div className="px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
            <p className='text-orange-400'>10 February 2022</p>
            <br/>
          <h3 className="mb-3 text-lg font-semibold md:mb-4 md:text-xl lg:mb-6">
          Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis
          </h3>
          <p className="mb-3 text-zinc-600 md:mb-4 lg:mb-6">
         
          </p>
          <p className="flex items-center hover:underline">
            Read more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-right ml-2 size-4"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </p>
        </div>
      </a>
      <a
        href="#"
        className="flex flex-col overflow-clip rounded-xl border border-border"
      >
        <div>
          <img
            src="/blog-02.jpeg"
            how=""
            alt="Blog 02"
            is=""
            exploring=""
            ui=""
            design=""
            className="aspect-[16/9] h-full w-full object-cover object-center"
          />
        </div>
        <div className="px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
        <p className='text-orange-400'>10 February 2022</p>
        <br/>
          <h3 className="mb-3 text-lg font-semibold md:mb-4 md:text-xl lg:mb-6">
          Morbi Sodales Tellus Elit, In Blandit Risus Suscipit A
          </h3>
          <p className="mb-3 text-zinc-600 md:mb-4 lg:mb-6">
         
          </p>
          <p className="flex items-center hover:underline">
            Read more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-right ml-2 size-4"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </p>
        </div>
      </a>
      <a
        href="#"
        className="flex flex-col overflow-clip rounded-xl border border-border"
      >
        <div>
          <img
            src="/blog-03.jpeg"
            how=""
            alt="Blog 03"
            is=""
            exploring=""
            ui=""
            design=""
            className="aspect-[16/9] h-full w-full object-cover object-center"
          />
        </div>
        <div className="px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
        <p className='text-orange-400'>10 February 2022</p>
        <br/>
          <h3 className="mb-3 text-lg font-semibold md:mb-4 md:text-xl lg:mb-6">
            How to Choose the Right Component Library for Your Project
          </h3>
          <p className="mb-3 text-zinc-600 md:mb-4 lg:mb-6">
          
          </p>
          <p className="flex items-center hover:underline">
            Read more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-right ml-2 size-4"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </p>
        </div>
      </a>
    </div>
  </div>
</section>

        


    </div>
  )
}

export default Blog