import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { RiFilmFill } from "react-icons/ri";
import { RiAppleLine } from "react-icons/ri";
// import ScrambleText from "./ScrambleText";

function HomeBody() {
  return (
    <div className="bg-[#121212] text-white font-sans min-h-screen flex flex-col justify-center items-center p-4">
      <div className="text-center max-w-4xl mx-auto">
        {/* Main Heading Section */}
        <div className="mb-12">
          <h2 className="text-sm md:text-base font-bold text-gray-300 tracking-widest uppercase mb-3">
            BHARAT'S BEST INSTANT CONTENT SERVICE
          </h2>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            We Shoot • Edit • Deliver Reels in
          </h2>
        </div>

        {/* Buttons and Stats Section */}
        <div className="flex flex-col items-center gap-8">
          {/* Feature Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            <button className="bg-[#1C1C1C] border text-[#cab06f] font-semibold py-2 px-4 rounded-full text-xs md:text-sm inline-flex items-center">
              <RiAppleLine className="mr-2" /> Shot on iPhone
            </button>
            <button className="bg-[#1C1C1C] border text-[#cab06f] font-semibold py-2 px-4 rounded-full text-xs md:text-sm inline-flex items-center">
              <BsCheckCircleFill className="mr-2" /> UP2U
            </button>
            <button className="bg-[#1C1C1C] border text-[#cab06f] font-semibold py-2 px-4 rounded-full text-xs md:text-sm inline-flex items-center">
              <RiFilmFill className="mr-2" /> Reel Maker
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-[#cab06f] hover:bg-[#330708] transition-colors text-white font-bold py-3 px-8 rounded-lg">
              Book Now
            </button>
            <button className="bg-[#1C1C1C] border border-[#cab06f] hover:bg-gray-800 transition-colors text-[#cab06f] font-bold py-3 px-8 rounded-lg">
              Become a Partner
            </button>
          </div>

          {/* Statistics Section */}
          <div className="flex flex-wrap justify-center gap-8 sm:gap-12 md:gap-16 pt-10">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-extrabold text-[#cab06f]">
                50,000+
              </div>
              {/* <ScrambleText text="50,000+" /> */}
              <div className="text-xs md:text-sm text-white uppercase tracking-wider mt-1">
                Reels Delivered
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-extrabold text-[#cab06f]">
                4.9/5
              </div>
              {/* <ScrambleText text="4.9/5" /> */}
              <div className="text-xs md:text-sm text-white uppercase tracking-wider mt-1">
                Rating
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-extrabold text-[#cab06f]">
                500+
              </div>
              {/* <ScrambleText text="500+" /> */}
              <div className="text-xs md:text-sm text-white uppercase tracking-wider mt-1">
                Reel-Makers
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeBody;
