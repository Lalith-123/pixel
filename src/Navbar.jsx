import React, { useState } from "react";
import { GoHome } from "react-icons/go";
import { LuClapperboard } from "react-icons/lu";
import { RiAppleLine } from "react-icons/ri";
import { PiCertificateLight } from "react-icons/pi";

// An array to hold the navigation items for easier management
const navItems = [
  { icon: <GoHome />, label: "Home" },
  { icon: <LuClapperboard />, label: "Explore" },
  { icon: <RiAppleLine />, label: "Features" },
  { icon: <PiCertificateLight />, label: "History" },
];

function Navbar() {
  // State to keep track of the active navigation item
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <nav className="w-[200px] py-3">
      <div className="flex justify-center items-center space-x-10 sm:space-x-16">
        {navItems.map((item, index) => (
          <a
            href="#"
            key={index}
            className={`cursor-pointer transition-transform duration-300 ${
              activeIndex === index
                ? "text-[#cab06f] scale-125" // Style for the active icon
                : "text-gray-400 hover:text-[#cab06f] hover:scale-110" // Style for inactive icons
            }`}
            onClick={() => setActiveIndex(index)}
            aria-label={item.label}
          >
            <div className="text-1xl">
              {item.icon}
            </div>
          </a>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
