import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="w-[1920px] h-[774px] bg-black text-white">
        <div className="flex flex-col w-[1169px] h-[112px]">
          <div className="flex justify-evenly">
            <h2 className="text-orange-500 text-4xl font-bold">
              St<span className="text-white">ill Need Our Support?</span>
            </h2>
            <button>Subscrib</button>
          </div>
          <p className="flex justify-centermt-2">
            Don't wait, make a smart & logical choice here. It's pretty easy.
          </p>
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
            <div className="mt-4">
              <p className="text-sm font-semibold">Opening Hours:</p>
              <p className="text-sm">Mon - Sat: 8:00 - 6:00</p>
              <p className="text-sm">Sunday: Closed</p>
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
        <div className="mt-10 border-t border-gray-700 pt-6">
          <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm">© 2022 by Ayeman. All Rights Reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-facebook" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-twitter" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-instagram" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-youtube" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-linkedin" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
