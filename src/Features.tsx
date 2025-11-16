import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// --- IMPORTANT ---
// Remember to replace these with the actual paths to your images
// import phoneImg1 from '../assets/phone1.png';
// import phoneImg2 from '../assets/phone2.png';
// import phoneImg3 from '../assets/phone3.png';
// import phoneImg4 from '../assets/phone4.png';
// import phoneImg5 from '../assets/phone5.png';
// import phoneImg6 from '../assets/phone6.png';

const featureData = [
  {
    title: 'Female Reel-Maker',
    description: 'Female users can now confidently get skilled female reel-makers for their shoots.',
    // image: phoneImg1,
  },
  {
    title: 'Pick a Partner',
    description: 'Personalized Partner Selection for Every Shoot.',
    // image: phoneImg2,
  },
  {
    title: 'Content Storage',
    description: 'We securely store your content for up to 6 months, so you can download, revisit, or share it whenever you are ready no rush, no worries.',
    // image: phoneImg3,
  },
  {
    title: 'Instant Booking',
    description: 'No more waiting! Get immediate confirmation as soon as you book — fast, simple, and hassle-free.',
    // image: phoneImg4,
  },
   {
    title: 'Live Tracking',
    description: 'Know where your reel-maker is, in real-time. Stay updated from arrival to final wrap.',
    // image: phoneImg5,
  },
  {
    title: 'Customer Support',
    description: '24/7 support to keep your day running smoothly. Anytime help, just a message or call away.',
    // image: phoneImg6,
  },
];

function Features() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Slide every 3 seconds
    // Custom dots styling
    appendDots: dots => (
      <div style={{ bottom: '-50px' }}>
        <ul style={{ margin: '0px', padding: '0px', textAlign: 'center' }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div className="w-8 h-1 bg-gray-600 rounded-full transition-all duration-300">
        {/* The active dot will be styled by the .slick-active class */}
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-[#121212] py-16 overflow-hidden">
      {/* Add global styles to target the active slick dot */}
      <style>{`
        .slick-dots li.slick-active div {
          background-color: #cab06f; /* Red color for active dot */
          width: 40px; /* Make active dot wider */
        }
      `}</style>

      <div className="text-center mb-12">
        <button className="bg-[#52472d] text-white text-sm font-semibold py-2 px-5 rounded-full mb-5">
          Get to know Flashoot
        </button>
        <h2 className="text-4xl font-bold text-white">
          Features That Make Us <span className="bg-gradient-to-r from-[#cab06f] to-[#52472d] bg-clip-text text-transparent">Stand Out</span>
        </h2>
      </div>

      <div className="w-full px-8">
        <Slider {...sliderSettings}>
          {featureData.map((feature, index) => (
            <div key={index} className="px-3">
              <div className="bg-[#1C1C1C] border border-gray-700 rounded-xl p-6 h-[450px] flex flex-col">
                <h3 className="text-white font-bold text-xl mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-base mb-6">{feature.description}</p>
                <div className="mt-auto">
                  {/* Uncomment this line once you have the images */}
                  {/* <img src={feature.image} alt={\`${feature.title} preview\`} className="w-full rounded-md" /> */}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Features;
