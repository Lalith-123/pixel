import React from "react";

// An array to hold feature data, making the component cleaner and easier to update.
// Replace the imageSrc placeholders with the actual paths to your images.
const features = [
  {
    title: "Trained & Certified Reel Makers",
    description: "Each Partner clears 6 filters to get their certification",
    imageSrc: "/path/to/your/image1.png", // Replace with your image path
    altText: "Certified Reel Maker",
  },
  {
    title: "Easy Booking",
    description: "Stop struggling with complex booking procedures",
    imageSrc: "/path/to/your/image2.png", // Replace with your image path
    altText: "Phone showing easy booking process",
  },
  {
    title: "Unbelievable Pricing",
    description: "Each Reel starts at 1999/-",
    imageSrc: "/path/to/your/image3.png", // Replace with your image path
    altText: "Person reacting to great pricing",
  },
  {
    title: "Safe & Secure",
    description: "You & Your data is safe and secured.",
    imageSrc: "/path/to/your/image4.png", // Replace with your image path
    altText: "Security shield icon",
  },
  {
    title: "Instant Reels, Instant Editing",
    description: "No hidden charges! Clients get upfront pricing, secure payment options, and a seamless checkout experience.",
    imageSrc: "/path/to/your/image5.png", // Replace with your image path
    altText: "Instant editing process",
  },
  {
    title: "Women Safety",
    description: "A woman can book a female Reel maker",
    imageSrc: "/path/to/your/image6.png", // Replace with your image path
    altText: "Female Reel Maker",
  },
];

function WhyUs() {
  return (
    <div className="bg-[#121212] py-16 sm:py-24 font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-[#52472d] text-white text-sm font-semibold py-1 px-4 rounded-full mb-4">
             {/* You can use an SVG icon here */}
            <span className="mr-2">✨</span>
            Why Choose Us
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white">
            Not Just Instant <span className="bg-gradient-to-r from-[#cab06f] to-[#52472d] bg-clip-text text-transparent">Delivery, But..</span>
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-900/50 border border-yellow-900/40 rounded-2xl p-6 flex items-center gap-6 transform hover:scale-105 transition-transform duration-300"
            >
              <div className="flex-shrink-0">
                <img
                  className="h-24 w-24 object-contain"
                  src={feature.imageSrc}
                  alt={feature.altText}
                />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 text-gray-400">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
