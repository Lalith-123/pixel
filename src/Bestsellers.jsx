import React from 'react';

// SVG Checkmark component for the features list
const CheckIcon = () => (
  <svg
    className="h-5 w-5 text-[#cab06f] mr-3 flex-shrink-0"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

// Pricing plan data
const plans = [
  {
    title: 'Hourly Plan',
    subtitle: 'Quickest Content',
    description: 'Perfect for anyone who wants a single, fast, high-quality reel.',
    price: '1,999',
    includes: [
      '1 Hour Shoot',
      '1 Edited Reel Delivered',
      'Shot on Latest iPhone',
      'Fast Delivery (10 mins post shoot)',
      'Trained and Certified Reel Maker',
      'Flashoot Branding Included',
    ],
    popular: false,
  },
  {
    title: 'Half-Day Plan',
    subtitle: 'Event Essential',
    description: 'Ideal for events and creators who need more time and more content.',
    price: '4,999',
    includes: [
      'Up to 3 Hours Shoot',
      '2 Edited reels',
      'Shot on Latest iPhone',
      'Fast Delivery (10 mins post shoot)',
      'Trained and Certified Reel Maker',
      'Flashoot Branding Included',
    ],
    popular: true,
  },
];

function Bestsellers() {
  return (
    <div className="bg-[#121212] py-16 sm:py-24 font-sans">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white text-center mb-12">
          Bestsellers
        </h1>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-gray-900/40 rounded-3xl p-8 flex flex-col h-full border-2 border-yellow-400`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-black text-xs font-bold uppercase tracking-wider py-1.5 px-4 rounded-full">
                  Most Popular
                </div>
              )}

              <div className="text-center">
                <h2 className="text-3xl font-bold text-white">{plan.title}</h2>
                <p className={`font-semibold mt-1 text-yellow-400`}>
                  {plan.subtitle}
                </p>
                <p className="text-gray-400 mt-4 text-sm max-w-xs mx-auto">{plan.description}</p>
              </div>

              <div className="text-center my-8">
                <span className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-400 to-yellow-500">
                  ₹{plan.price}
                </span>
                <p className="text-gray-500 text-sm mt-1">+ GST</p>
              </div>

              <div className="border-t border-gray-700 pt-6">
                <h3 className="text-xs font-semibold text-yellow-400 tracking-wider uppercase text-center mb-4">
                  What's Included
                </h3>
                <ul className="space-y-3">
                  {plan.includes.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-300">
                      <CheckIcon />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto pt-8">
                <button className="w-full bg-gradient-to-r from-[#cab06f] to-[#52472d] transition-colors text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2">
                  <span>&#8377;</span> Book Now <span>&rarr;</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Bestsellers;
