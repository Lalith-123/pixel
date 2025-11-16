import React from 'react';
import Slider from 'react-slick';
import { FaQuoteLeft } from 'react-icons/fa';

// Import carousel styles
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// --- Testimonial Data ---
// Replace avatar URLs with your actual image paths
const testimonialData = [
  {
    quote: 'Seamless booking, professional creators, stunning reels! Flashoot made capturing memories effortless and fun.',
    name: 'Abhiram Kukunuri',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    quote: 'Highly impressed with Flashoot! Easy to use, top-notch reel makers, and fantastic results. Will book again!',
    name: 'Prem Kumar',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    quote: 'Flashoot delivered exactly what I needed—professional reels, hassle-free booking and great service. Totally worth it!',
    name: 'Shireen Fathima',
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
  {
    quote: 'A game-changer for content creation. The quality of the reels was outstanding and the process was incredibly smooth.',
    name: 'Varun Sharma',
    avatar: 'https://randomuser.me/api/portraits/men/55.jpg',
  },
];

function Testimonial() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    appendDots: dots => (
      <div style={{ bottom: '-60px' }}>
        <ul style={{ margin: '0px', padding: '0px', textAlign: 'center' }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div className="w-3 h-3 bg-gray-600 rounded-full transition-all duration-300"></div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-gradient-to-b from-[#1a0202] to-[#121212] text-white py-24 px-4 sm:px-6 lg:px-8">
      {/* Global styles for active slick dot */}
      <style>{`
        .slick-dots li.slick-active div {
          background-color: #cab06f; /* Red color */
          width: 32px; /* Wider active dot */
        }
        .slick-dots li div {
            border-radius: 9999px;
        }
      `}</style>
      
      <div className="max-w-7xl mx-auto">
        {/* --- Header --- */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold">
            What Our <span className="bg-gradient-to-r from-[#cab06f] to-[#52472d] bg-clip-text text-transparent">Loving Customers Say</span>
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Join thousands of satisfied customers who trust Flashoot
          </p>
        </div>

        {/* --- Testimonial Slider --- */}
        <Slider {...sliderSettings}>
          {testimonialData.map((item, index) => (
            <div key={index} className="px-4">
              <div className="bg-[#1c1c1c]/80 border border-gray-800 rounded-2xl p-8 h-[280px] flex flex-col justify-between">
                <div className="relative">
                  <div className="absolute -top-12 -left-4 bg-yellow-800/50 p-2 rounded-lg border border-yellow-700/50">
                    <FaQuoteLeft className="text-yellow-400 text-2xl" />
                  </div>
                  <p className="text-gray-300 leading-relaxed">{item.quote}</p>
                </div>
                <div className="flex items-center mt-6">
                  <img src={item.avatar} alt={item.name} className="w-12 h-12 rounded-full border-2 border-yellow-500" />
                  <p className="ml-4 font-bold text-white">{item.name}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Testimonial;
