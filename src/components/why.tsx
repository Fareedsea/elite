import Image from "next/image";

export default function Why() {
  return (
    <div className="w-full h-[716px] bg-black text-white font-sans">
      {/* Section Container */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8">
        {/* Left Side: Images Grid */}
        <div className="grid grid-cols-2 gap-4 mb-5">
          <div className="w-[362px] h-[356px] rounded-lg overflow-hidden">
            <Image
              src="/hero-04-01.jpeg"
              alt="Food 1"
              width={400}
              height={300}
            />
          </div>
          <div className="w-[281px] h-[231px] rounded-lg overflow-hidden">
            <Image
              src="/hero-04-02.jpeg"
              alt="Food 2"
              width={400}
              height={300}
            />
          </div>
          <div className="w-[244px] h-[306px] rounded-lg overflow-hidden">
            <Image
              src="/hero-04-03.jpeg"
              alt="Food 3"
              width={400}
              height={300}
            />
          </div>
          <div className="w-[221px] h-[226px] rounded-lg overflow-hidden">
            <Image
              src="/hero-04-04.jpeg"
              alt="Food 4"
              width={400}
              height={300}
            />
          </div>
          <div className="w-[161px] h-[168px] rounded-lg overflow-hidden">
            <Image
              src="/hero-04-05.jpeg"
              alt="Food 4"
              width={400}
              height={300}
            />
          </div>
          <div className="w-[161px] h-[168px] rounded-lg overflow-hidden">
            <Image
              src="/hero-04-06.jpeg"
              alt="Food 4"
              width={400}
              height={300}
            />
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="flex flex-col justify-center space-y-6">
          {/* Heading */}
          <div>
            <h2 className="text-yellow-400 text-lg italic">Why Choose Us</h2>
            <h1 className="text-4xl font-bold">
              <span className="w-[433px] h-[112px] text-yellow-400">Ex</span>tra
              ordinary taste And Experienced
            </h1>
          </div>

          {/* Description */}
          <p className="text-gray-400 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            aliquam pellentesque tincidunt nisi eu. Ut augue urna vitae laoreet
            pretium.
          </p>

          {/* Features */}
          <div className="flex space-x-6">
            <div className="text-center">
              <div className="bg-orange-400 border-2 border-yellow-400 w-16 h-16 mx-auto flex items-center justify-center rounded-lg">
                <Image
                  src="/hamburger.png"
                  alt="Food 2"
                  width={400}
                  height={300}
                />
              </div>
              <p className="mt-2">Fast Food</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-400 border-2 border-yellow-400 w-16 h-16 mx-auto flex items-center justify-center rounded-lg">
                <Image
                  src="/cookie.png"
                  alt="Food 2"
                  width={400}
                  height={300}
                />
              </div>
              <p className="mt-2">Lunch</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-400 border-2 border-yellow-400 w-16 h-16 mx-auto flex items-center justify-center rounded-lg">
                <Image src="/vine.png" alt="Food 3" width={400} height={300} />
              </div>
              <p className="mt-2">Dinner</p>
            </div>
          </div>

          {/* Experience Box */}
          <div className="flex items-center rounded-lg">
            <Image
              src="/year.png"
              alt="Experience 4"
              width={400}
              height={300}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
