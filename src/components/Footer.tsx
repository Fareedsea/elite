import React from "react";
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutubeSquare,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white">
      <div className="wrapper">
        <div className="py-20">
          <div className="w-[80%] border-b-2 border-orange-300 container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col">
              <h2 className="text-orange-500 text-4xl font-bold">
                St<span className="text-white">ill Need Our Support?</span>
              </h2>
            </div>
            <div className="w-[460px] flex justify-self-end">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-orange-400 py-3.5 px-4 text-white text-base focus:outline-none"
              />
              <button className=" bg-white hover:bg-orange-500 text-orange-400 text-base tracking-wide py-3.5 px-6 hover:shadow-md hover:transition-transform transition-transform hover:scale-105 focus:outline-none">
                Subscribe
              </button>
            </div>
            <div>
              <p className="mb-[20px]">
                Don't wait, make a smart & logical choice here. It's pretty
                easy.
              </p>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Us Section */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">About Us.</h3>
            <p className="text-sm">
              Corporate clients and leisure travelers have been relying on
              GroundLink for dependable, safe, and professional chauffeured car
              service in major cities across the world.
            </p>
            <div className="mt-4 flex justify-self-start gap-4">
              <div className="bg-orange-400 border-2 border-yellow-400 w-16 h-16 mx-auto rounded-lg">
                <Image src="/vine.png" alt="Food 3" width={300} height={300} />
              </div>
              <div className="flex flex-col">
                <p className="text-sm font-semibold">Opening Hours:</p>
                <p className="text-sm">Mon - Sat: 8:00 - 6:00</p>
                <p className="text-sm">Sunday: Closed</p>
              </div>
            </div>
          </div>
          {/* Useful Links Section */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Useful Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  News
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Partners
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Team
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          {/* Help Section */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Help?</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Terms &amp; Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Reporting
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Support Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Privacy
                </a>
              </li>
            </ul>
          </div>
          {/* Recent Post Section */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Recent Post</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-4">
                <img
                  src="/F-Image-02.jpeg"
                  alt="Post Picture"
                  className="w-16 h-16 rounded"
                />
                <div>
                  <a
                    href="#"
                    className="text-sm font-semibold hover:text-white"
                  >
                    Is fastfood good for your body?
                  </a>
                  <p className="text-xs">February 28, 2022</p>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <img
                  src="/F-Image-02.jpeg"
                  alt="Post Picture"
                  className="w-16 h-16 rounded"
                />
                <div>
                  <a
                    href="#"
                    className="text-sm font-semibold hover:text-white"
                  >
                    Change your food habit with organic food
                  </a>
                  <p className="text-xs">February 28, 2022</p>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <img
                  src="/F-Image-02.jpeg"
                  alt="Post Picture"
                  className="w-16 h-16 rounded"
                />
                <div>
                  <a
                    href="#"
                    className="text-sm font-semibold hover:text-white"
                  >
                    Do you like fastfood for your life?
                  </a>
                  <p className="text-xs">February 28, 2022</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full h-[99px] bg-gray-700 mt-10 border-t border-white pt-6">
        <div className="wrapper container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm">© 2024 by Fareed. All Rights Reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-white hover:text-orange-400">
              <FaFacebookF />
            </a>
            <a href="#" className="text-white hover:text-orange-400">
              <FaTwitter />
            </a>
            <a href="#" className="text-white hover:text-orange-400">
              <FaInstagram />
            </a>
            <a href="#" className="text-white hover:text-orange-400">
              <FaYoutubeSquare />
            </a>
            <a href="#" className="text-white hover:text-orange-400">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </footer >
  );
};

export default Footer;
