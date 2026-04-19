import React, { useState, useEffect, useRef } from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

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

// gold-400: #EBCB8B   gold-500: #D0B060
const GOLD_500     = '#D0B060';
const GOLD_500_50  = 'rgba(208,176,96,0.5)';
const GOLD_500_30  = 'rgba(208,176,96,0.3)';

function useWindowWidth() {
  const [width, setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  useEffect(() => {
    const handler = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);
  return width;
}

const loopData = [...testimonialData, ...testimonialData, ...testimonialData];

function Testimonial() {
  const width = useWindowWidth();
  const slidesToShow = width < 768 ? 1 : width < 1024 ? 2 : 3;
  const total = testimonialData.length;

  const [current, setCurrent] = useState(total);
  const [transitioning, setTransitioning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const autoplayRef = useRef(null);
  const isJumping = useRef(false);

  const cardWidth = 100 / slidesToShow;

  const goTo = (index, withTransition = true) => {
    setTransitioning(withTransition);
    setCurrent(index);
  };

  const next = () => {
    if (isJumping.current) return;
    goTo(current + 1);
  };

  const prev = () => {
    if (isJumping.current) return;
    goTo(current - 1);
  };

  const handleTransitionEnd = () => {
    isJumping.current = true;
    if (current >= total * 2) {
      goTo(current - total, false);
    } else if (current < total) {
      goTo(current + total, false);
    }
    setTimeout(() => { isJumping.current = false; }, 50);
  };

  useEffect(() => {
    clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(() => {
      if (!isPaused) {
        setCurrent(prev => prev + 1);
        setTransitioning(true);
      }
    }, 3000);
    return () => clearInterval(autoplayRef.current);
  }, [isPaused]);

  const handlePrev = () => { prev(); };
  const handleNext = () => { next(); };
  const handleDot  = (i) => { goTo(total + i); };

  const activeDot = ((current % total) + total) % total;

  return (
    <div className="bg-dark-900 text-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold">
            What Our{' '}
            <span className="bg-gradient-to-r from-[#cab06f] to-[#52472d] bg-clip-text text-transparent">
              Loving Customers Say
            </span>
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Join thousands of satisfied customers who trust Flashoot
          </p>
        </div>

        {/* Slider */}
        <div className="relative">

          {/* Prev button */}
          <button
            onClick={handlePrev}
            className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:opacity-80"
            style={{ backgroundColor: GOLD_500 }}
            aria-label="Previous"
          >
            <IoIosArrowBack style={{ color: '#ffffff', fontSize: '20px' }} />
          </button>

          {/* Track */}
          <div className="overflow-hidden mx-6">
            <div
              className="flex"
              style={{
                transform: `translateX(-${current * cardWidth}%)`,
                transition: transitioning ? 'transform 500ms ease-in-out' : 'none',
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {loopData.map((item, index) => (
                <div
                  key={index}
                  style={{ minWidth: `${cardWidth}%` }}
                  className="px-3 pt-8"
                >
                  <div
                    className="bg-[#1c1c1c]/80 rounded-2xl p-8 pt-10 h-[280px] flex flex-col justify-between transition-all duration-300"
                    style={{ border: `3px solid ${GOLD_500_50}` }}
                    onMouseEnter={(e) => {
                      setIsPaused(true);
                      e.currentTarget.style.borderColor = GOLD_500;
                    }}
                    onMouseLeave={(e) => {
                      setIsPaused(false);
                      e.currentTarget.style.borderColor = GOLD_500_50;
                    }}
                  >
                    <div className="relative">
                      {/* Quote icon */}
                      <div
                        className="absolute -top-14 -left-4 p-2 rounded-lg"
                        style={{ backgroundColor: GOLD_500 }}
                      >
                        <FaQuoteLeft style={{ color: '#ffffff', fontSize: '18px' }} />
                      </div>
                      <p className="text-gray-300 leading-relaxed">{item.quote}</p>
                    </div>

                    <div className="flex items-center mt-6">
                      <img
                        src={item.avatar}
                        alt={item.name}
                        className="w-12 h-12 rounded-full"
                        style={{ border: `2px solid ${GOLD_500}` }}
                      />
                      <p className="ml-4 font-bold text-white">{item.name}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next button */}
          <button
            onClick={handleNext}
            className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:opacity-80"
            style={{ backgroundColor: GOLD_500 }}
            aria-label="Next"
          >
            <IoIosArrowForward style={{ color: '#ffffff', fontSize: '20px' }} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-16">
          {testimonialData.map((_, i) => (
            <button
              key={i}
              onClick={() => handleDot(i)}
              className="h-3 rounded-full transition-all duration-300"
              style={{
                width: activeDot === i ? '32px' : '12px',
                backgroundColor: activeDot === i ? GOLD_500 : GOLD_500_30,
                border: `1px solid ${GOLD_500_50}`,
              }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </div>
  );
}

export default Testimonial;