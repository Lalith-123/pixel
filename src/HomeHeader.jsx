import React from "react";
import Navbar from "./Navbar";
import HeaderButtons from "./HeaderButtons";
import MainLogo from './assets/Pixel.png';

function HomeHeader() {
  return (
    <header className="fixed top-0 left-0 w-full h-20 flex items-center px-30 bg-[#1c1c1c]/50 backdrop-blur z-50">
      {/* Left section: Logo */}
      <div className="flex-1 flex justify-start">
        <img src={MainLogo} className="h-25" alt="Main Logo" />
      </div>

      {/* Center section: Navbar */}
      {/* <div className="flex-1 flex justify-center">
        <Navbar />
      </div> */}

      {/* Right section: Buttons */}
      <div className="flex-1 flex justify-end">
        <HeaderButtons />
      </div>
    </header>
  );
}

export default HomeHeader;
