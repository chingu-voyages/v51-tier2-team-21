import { Link } from "react-router-dom";
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-white px-6 sm:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="flex items-center flex-col text-center lg:text-left lg:w-1/2">
          <h1 className="text-center leading-normal	 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900  mb-6">
            Split Expenses Easily <br />
            with SplitWind
          </h1>
          <div className="flex justify-center lg:justify-start gap-4 items-center">
            <Link to="/get-started">
              <button className="px-8 py-3 text-lg font-semibold rounded-lg text-white bg-[#38A169] hover:bg-[#2f855a] transition-all duration-300">
                Get started
              </button>
            </Link>
            <Link to="/team">
              <button className="px-6 py-2 text-lg font-semibold rounded-lg text-[#2f855a] border-2 border-[#38A169] bg-white hover:bg-[#2f855a] hover:text-white transition-all duration-300">
                Team
              </button>
            </Link>
          </div>
        </div>

        <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
          <img
            src="/assets/hero_img.svg"
            alt="Illustration of person splitting expenses"
            className="w-full max-w-md"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
