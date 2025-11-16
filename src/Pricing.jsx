import React from 'react';
import { TbCurrencyRupee } from 'react-icons/tb';

const weddingTiers = [
  { name: 'Basic', label: 'Single Event' },
  { name: 'Silver', label: 'Three Events' },
  { name: 'Gold', label: 'Four Events' },
  { name: 'Platinum', label: 'Complete Wedding' },
];

const corporateInclusions = [
  'Up to 3 Reels (each up to 60 seconds)',
  'Instant reel delivery',
  'Up to 6 hours of shoot time',
  'Flashoot branding included',
  'Mobile portrait photos complimentary: up to 15',
  'Raw footage provided',
  'Shot on iPhone',
];

function Pricing() {
  return (
    <div className="bg-[#121212] text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* --- Header --- */}
        <div className="text-center mb-16">
          <button className="bg-[#52472d] border border-[#cab06f] text-white text-sm font-semibold py-2 px-4 rounded-full mb-5 inline-flex items-center">
            <TbCurrencyRupee className="mr-2" />
            Pricing Plans
          </button>
          <h1 className="text-4xl sm:text-5xl font-bold">
            Choose Your <span className="bg-gradient-to-r from-[#cab06f] to-[#52472d] bg-clip-text text-transparent">Perfect Plan</span>
          </h1>
          <p className="mt-4 text-lg text-gray-400">
            Professional content creation services tailored to your needs
          </p>
        </div>

        {/* --- Pricing Cards Grid --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          
          {/* --- Wedding Packages Card (Left) --- */}
          <div className="bg-[#1c1c1c]/80 border border-gray-800 rounded-2xl p-8 h-full flex flex-col">
            <p className="font-semibold text-yellow-500 text-sm">FOR YOUR SPECIAL DAY</p>
            <h2 className="text-3xl font-bold mt-2">Wedding Packages</h2>
            <p className="text-gray-400 mt-3">
              Professional coverage for your wedding celebrations, specializing in traditional and modern Indian ceremonies with elegant, timeless captures.
            </p>
            <div className="mt-8">
              <p className="text-gray-400">Starting from</p>
              <p className="text-4xl font-bold mt-1">
                ₹14,999<span className="text-base font-normal text-gray-400">/package</span>
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8">
              {weddingTiers.map((tier) => (
                <div key={tier.name} className="bg-black/30 border border-gray-700 rounded-lg p-3 text-center">
                  <p className="text-xs text-gray-400">{tier.label}</p>
                  <p className="font-bold text-lg">{tier.name}</p>
                </div>
              ))}
            </div>
            <div className="mt-auto pt-8">
              <button className="bg-gradient-to-r from-[#cab06f] to-[#52472d] hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg w-full transition-colors">
                Know More →
              </button>
            </div>
          </div>

          {/* --- Corporate Package Card (Right) --- */}
          <div className="bg-[#1c1c1c]/80 border border-gray-800 rounded-2xl p-8 h-full flex flex-col">
            <p className="font-semibold text-yellow-500 text-sm">FOR BUSINESS EVENTS</p>
            <h2 className="text-3xl font-bold mt-2">Corporate Package</h2>
            <p className="text-gray-400 mt-3">
              Professional coverage for your business events, delivering polished content that aligns with your brand identity and marketing goals.
            </p>
            <div className="mt-8">
              <p className="text-4xl font-bold">
                ₹9,999<span className="text-base font-normal text-gray-400">/only</span>
              </p>
            </div>
            <div className="mt-8">
              <p className="font-semibold text-white">Package Inclusions:</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mt-4">
                {corporateInclusions.map((item, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <span className="text-yellow-500 mr-2 text-xl">•</span>{item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-auto pt-8">
              <button className="bg-gradient-to-r from-[#cab06f] to-[#52472d] hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg w-full transition-colors">
                Book Now →
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Pricing;
