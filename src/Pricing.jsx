import React from 'react';
import { TbCurrencyRupee } from 'react-icons/tb';
import { BsCheckCircle, BsCheckLg } from 'react-icons/bs';
import { IoApertureOutline, IoRocketOutline } from 'react-icons/io5';
import { FaCrown } from 'react-icons/fa';

const weddingTiers = [
  { name: 'Basic', label: 'Single Event' },
  { name: 'Silver', label: 'Three Events' },
  { name: 'Gold', label: 'Four Events' },
  { name: 'Platinum', label: 'Complete Wedding' },
];

const corporateInclusions = [
  'Up to 3 Reels (each up to 60 seconds)',
  'Up to 6 hours of shoot time',
  'Mobile portrait photos complimentary: up to 15',
  'Shot on iPhone',
  'Instant reel delivery',
  'Pixel branding included',
  'Raw footage provided',
];

const bottomFeatures = [
  {
    icon: <IoApertureOutline className="text-3xl text-gold-500" />,
    title: 'High-Quality Content',
    desc: 'Shot on Latest iPhones for cinematic-quality short videos with top-tier clarity and stabilisation.'
  },
  {
    icon: <IoRocketOutline className="text-3xl text-gold-500" />,
    title: 'Instant Delivery',
    desc: 'No waiting, no hassle! 24/7 Service - Because events don\'t wait!'
  },
  {
    icon: <FaCrown className="text-3xl text-gold-500" />,
    title: 'Professional Editing',
    desc: 'Expert editing to make your content stand out with perfect transitions and effects.'
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-dark-900 text-white font-sans flex flex-col items-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl w-full mx-auto flex flex-col items-center">
        
        {/* --- Header --- */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
            Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-gray-300 to-gray-400">Perfect Plan</span>
          </h1>
          <p className="mt-4 text-lg text-gray-400 font-medium tracking-wide">
            Professional content creation services tailored to your needs
          </p>
        </div>

        {/* --- Cards Grid --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full items-stretch">
            
            {/* --- Wedding Packages Card (Left) --- */}
            <div className="relative w-full bg-dark-800 rounded-[2rem] border-[3px] border-gold-500/50 p-8 sm:p-10 shadow-2xl overflow-hidden flex flex-col h-full hover:border-gold-500 transition-colors duration-300">
                {/* Glow Effect */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-gold-500/10 blur-[60px] rounded-full pointer-events-none"></div>
                
                <div className="relative z-10 flex flex-col h-full">
                    <p className="text-gold-500 font-medium text-sm mb-2 uppercase tracking-wider">For Your Special Day</p>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-wide mb-4">Wedding Packages</h2>
                    <p className="text-gray-400 text-sm leading-relaxed mb-8">
                    Professional coverage for your wedding celebrations, specializing in traditional and modern Indian ceremonies with elegant, timeless captures.
                    </p>

                    <div className="mb-8">
                    <p className="text-gray-500 text-sm mb-1">Starting from</p>
                    <div className="flex items-baseline">
                        <TbCurrencyRupee className="text-4xl text-white" />
                        <span className="text-4xl font-bold text-white tracking-tighter">14,999</span>
                        <span className="text-gray-500 ml-1 text-lg">/package</span>
                    </div>
                    </div>

                    {/* Tiers Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-10">
                        {weddingTiers.map((tier) => (
                            <div key={tier.name} className="border-[3px] border-gold-500/40 rounded-xl p-4 text-center bg-primary flex flex-col justify-center min-h-[100px] hover:border-gold-500 transition-colors duration-300">
                                <p className="text-gray-400 text-xs mb-1">{tier.label}</p>
                                <p className="text-white font-bold text-lg">{tier.name}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-auto pt-4">
                        <button className="w-full bg-gradient-to-r from-gold-500 to-gold-600 text-white font-bold py-4 rounded-xl flex items-center justify-center hover:opacity-90 transition-opacity shadow-lg shadow-gold-500/20">
                            Know More <span className="ml-2">→</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* --- Corporate Package Card (Right) --- */}
            <div className="relative w-full bg-dark-800 rounded-[2rem] border-[3px] border-gold-500/50 p-8 sm:p-10 shadow-2xl overflow-hidden flex flex-col h-full hover:border-gold-500 transition-colors duration-300">
                
                {/* Subtle top glow effect */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-gold-500/10 blur-[60px] rounded-full pointer-events-none"></div>

                {/* Card Header */}
                <div className="flex flex-col items-center text-center relative z-10">
                    <div className="mb-3">
                        <IoApertureOutline className="text-4xl text-gold-400" />
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-wide">Corporate Package</h2>
                    <p className="text-gold-500 font-medium text-sm mt-1 uppercase tracking-wider">For Business Events</p>
                    <p className="text-gray-400 text-sm mt-4 leading-relaxed max-w-xs mx-auto">
                        Professional coverage for your business events, delivering polished content that aligns with your brand identity and marketing goals.
                    </p>
                </div>

                {/* Pricing Section */}
                <div className="mt-8 text-center border-b border-gold-500/30 pb-8 relative z-10">
                    <div className="flex items-center justify-center text-gold-400">
                        <TbCurrencyRupee className="text-5xl sm:text-6xl" />
                        <span className="text-5xl sm:text-6xl font-bold tracking-tighter">9,599</span>
                    </div>
                </div>

                {/* Inclusions List */}
                <div className="mt-8 relative z-10 flex-1 mb-8">
                    <p className="text-gold-400 font-medium mb-6 text-lg text-center sm:text-left">What included</p>
                    <ul className="space-y-4">
                        {corporateInclusions.map((item, index) => (
                            <li key={index} className="flex items-start">
                                <BsCheckCircle className="text-gold-400 mt-1 mr-3 min-w-[18px]" />
                                <span className="text-white text-[15px] font-medium leading-tight">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Button */}
                <div className="mt-auto pt-4 relative z-10">
                    <button className="w-full bg-gradient-to-r from-gold-500 to-gold-600 text-white font-bold py-4 rounded-xl flex items-center justify-center hover:opacity-90 transition-opacity shadow-lg shadow-gold-500/20">
                        Book Now <span className="ml-2">→</span>
                    </button>
                </div>
            </div>

        </div>

        {/* --- Bottom Feature Highlights --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 w-full max-w-6xl">
            {bottomFeatures.map((feat, idx) => (
                <div key={idx} className="bg-primary border-[3px] border-gold-500/40 rounded-2xl p-6 flex flex-row items-start text-left hover:border-gold-500 transition-colors duration-300 group">
                    <div className="bg-white/5 p-3 rounded-full mr-4 shrink-0 group-hover:scale-110 transition-transform duration-300 text-gold-500">
                        {feat.icon}
                    </div>
                    <div>
                        <h3 className="text-white font-bold text-lg mb-2">{feat.title}</h3>
                        <p className="text-gray-500 text-xs leading-relaxed">
                            {feat.desc}
                        </p>
                    </div>
                </div>
            ))}
        </div>

        {/* --- Footer Guarantees --- */}
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-12 mt-12 text-sm font-semibold text-gray-400">
            <div className="flex items-center">
                <BsCheckLg className="text-gold-500 mr-2" />
                <span>100% Satisfaction Guaranteed</span>
            </div>
            <div className="flex items-center">
                <BsCheckLg className="text-gold-500 mr-2" />
                <span>Professional Equipment</span>
            </div>
            <div className="flex items-center">
                <BsCheckLg className="text-gold-500 mr-2" />
                <span>Quick Turnaround</span>
            </div>
        </div>

      </div>
    </div>
  );
}