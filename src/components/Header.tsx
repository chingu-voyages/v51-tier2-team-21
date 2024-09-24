import React, { useState } from 'react';

import { Link } from 'react-router-dom';

interface HeaderProps{
  onFeatureClick: () => void;
  onTeamClick: () => void;
  onTestimonialsClick: () => void;
}


const Header: React.FC<HeaderProps> = ({onFeatureClick,onTeamClick,onTestimonialsClick}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleEnvelopeClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="flex shadow-md py-4 px-4 sm:px-10 bg-white font-sans min-h-[70px] tracking-wide relative z-50 sticky top-0">
      <div className="flex flex-wrap items-center justify-between gap-5 w-full">
        <a
          href="/"
          className="flex justify-center items-center gap-x-2 font-semibold"
        >
          <img src="/assets/logo.png" alt="logo" className="w-8" />
          SplitWind
        </a>

        <div id="collapseMenu" className="hidden sm:block">
          <ul className="sm:flex gap-x-5">
            <li>
              
              <a
                href="#features"
                onClick={onFeatureClick}
                className="hover:text-[#38A169] text-[#333] block font-semibold text-[15px]"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#team"
                onClick={onTeamClick}
                className="hover:text-[#38A169] text-[#333] block font-semibold text-[15px]"
              >
                Team
              </a>
            </li>
            <li>
              <a
                href="/#testimonials"
                onClick={onTestimonialsClick}
                className="hover:text-[#38A169] text-[#333] block font-semibold text-[15px]"
              >
                Testimonials
              </a>
            </li>
          </ul>
        </div>

        <div className="flex max-sm:hidden">
          <Link  to="/create-expense-group">
          <button className="px-4 py-2 text-sm rounded-lg font-bold text-white bg-[#38A169] hover:bg-[#2f855a] transition-all duration-300">
            Get started
          </button> 
          </Link>
        </div>

        <button
          id="toggleOpen"
          className="sm:hidden"
          onClick={handleEnvelopeClick}
        >
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

        {menuOpen && (
          <div className="sm:hidden absolute top-full left-0 w-full bg-white shadow-md z-50">
            <ul className="flex flex-col items-center space-y-4 p-4">
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
              <div className="flex sm:block">
                <button className="px-4 py-2 text-sm rounded-lg font-bold text-white bg-[#38A169] hover:bg-[#2f855a] transition-all duration-300">
                  Get started
                </button>
              </div>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
