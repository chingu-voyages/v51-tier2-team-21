import { Link } from "react-router-dom";
import React from "react";
const Header: React.FC = () => {
  return (
    <header className="flex shadow-md py-4 px-4 sm:px-10 bg-white font-sans min-h-[70px] tracking-wide relative z-50">
      <div className="flex flex-wrap items-center justify-between gap-5 w-full">
        {/* Logo */}
        <a href="/">
          <img
            src="https://readymadeui.com/readymadeui.svg"
            alt="logo"
            className="w-36"
          />
        </a>

        {/* Navbar Links */}
        <div id="collapseMenu" className="hidden lg:block">
          <ul className="lg:flex gap-x-5">
            <li>
              <a
                href="#features"
                className="hover:text-[#38A169] text-[#333] block font-semibold text-[15px]"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#team"
                className="hover:text-[#38A169] text-[#333] block font-semibold text-[15px]"
              >
                Team
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className="hover:text-[#38A169] text-[#333] block font-semibold text-[15px]"
              >
                Testimonials
              </a>
            </li>
          </ul>
        </div>

        {/* Get Started Button */}
        <div className="flex">
          <button className="px-4 py-2 text-sm rounded-lg font-bold text-white border-2 border-[#38A169] bg-[#38A169] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#38A169]">
            Get started
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button id="toggleOpen" className="lg:hidden">
          <svg
            className="w-7 h-7"
            fill="#000"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
