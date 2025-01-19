import Image from "next/image";
import { Great_Vibes } from "next/font/google"
const great_Vibes = Great_Vibes ({weight:"400", subsets:["latin"]});

export default function Why() {
  return (
    <div>
      <div className="w-full h-[716px] bg-black text-white font-sans">
        {/* Section Container */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Left Side: Images Grid */}
          <section className="w-full flex flex-col gap-6">
          {/* Top Two Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="w-full rounded-lg shadow-lg">
              <Image
                src="/hero-04-01.jpeg"
                alt="Dish 1"
                width={362}
                height={356}
                layout="responsive"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full rounded-lg shadow-lg">
              <Image
                src="/hero-04-02.jpeg"
                alt="Dish 2"
                width={281}
                height={231}
                layout="responsive"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Bottom Images */}
          <div className="grid grid-cols-2 sm:grid-cols-3 grid-rows-2 gap-4">
            <div className="col-span-2 sm:col-span-1 row-span-2 w-full rounded-lg shadow-lg">
              <Image
                src="/hero-04-03.jpeg"
                alt="Dish 3"
                width={244}
                height={306}
                layout="responsive"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="col-span-2 sm:col-span-1 row-span-2 w-full rounded-lg shadow-lg">
              <Image
                src="/hero-04-04.jpeg"
                alt="Dish 4"
                width={221}
                height={226}
                layout="responsive"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full rounded-lg shadow-lg">
              <Image
                src="/hero-04-05.jpeg"
                alt="Dish 5"
                width={161}
                height={168}
                layout="responsive"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full rounded-lg shadow-lg">
              <Image
                src="/hero-04-06.jpeg"
                alt="Dish 6"
                width={400}
                height={300}
                layout="responsive"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>


          {/* Right Side: Content */}
          <div className="flex flex-col justify-center space-y-6">
            {/* Heading */}
            <div>
              <h2 className={`${great_Vibes.className} text-[#FF9F0D] sm:text-2xl text-1xl sm:leading-10`}>Why Choose Us</h2>
              <h1 className="text-4xl font-bold">
                <span className="w-[433px] h-[112px] text-yellow-400">Ex</span>
                tra ordinary taste And Experienced
              </h1>
            </div>

            {/* Description */}
            <p className="text-gray-400 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              aliquam pellentesque tincidunt nisi eu. Ut augue urna vitae
              laoreet pretium.
            </p>

            {/* Features */}
            <div className="flex space-x-6">
              <div className="text-center">
                <div className="bg-orange-400 border-2 border-yellow-400 w-16 h-16 mx-auto flex items-center justify-center rounded-lg hover:scale-110">
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
                <div className="bg-orange-400 border-2 border-yellow-400 w-16 h-16 mx-auto flex items-center justify-center rounded-lg hover:scale-110">
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
                <div className="bg-orange-400 border-2 border-yellow-400 w-16 h-16 mx-auto flex items-center justify-center rounded-lg hover:scale-110">
                  <Image
                    src="/vine.png"
                    alt="Food 3"
                    width={400}
                    height={300}
                  />
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
    </div>
  );
}
