import { useNavigate } from "react-router-dom";
import { Rocket, Sun, Check } from "lucide-react";

// --- Constants ---
const PRICING_PLANS = [
  {
    id: "hourly",
    title: "Hourly Plan",
    iconType: "rocket",
    subtitle: "Quickest Content",
    description:
      "Perfect for anyone who want a single, fast, high-quality reel.",
    price: "₹1,499",
    features: [
      "1 Hour Shoot",
      "Fast Delivery (10 mins post shoot)",
      "1 Edited reels",
      "Trained and Certified Reel Maker",
      "Shot on Latest iPhone",
      "Pixel Branding Included",
    ],
  },
  {
    id: "half-day",
    title: "Half-Day Plan",
    iconType: "sun",
    subtitle: "Event Essential",
    description:
      "Ideal for events and creators who need more time and more content.",
    price: "₹4,499",
    features: [
      "Up to 3 Hours Shoot",
      "Fast Delivery (10 mins post shoot)",
      "2 Edited reels",
      "Trained and Certified Reel Maker",
      "Shot on Latest iPhone",
      "Pixel Branding Included",
    ],
  },
];

// --- Components ---

const PlanIcon = ({ type, className }) => {
  if (type === "rocket") {
    return <Rocket className={className} />;
  }
  return <Sun className={className} />;
};

const PricingCard = ({ plan }) => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/pixel/contactUs/");
  };
  return (
    <div className="relative flex flex-col items-center w-full max-w-xl p-8 bg-dark-800 border border-gold-600 rounded-[2.5rem] shadow-2xl transition-transform hover:scale-[1.01]">
      {/* Header Section */}
      <div className="flex flex-col items-center text-center mb-6 space-y-3">
        <div className="flex items-center gap-3 text-white">
          <div className="p-2 border border-gold-600 rounded-full">
            <PlanIcon type={plan.iconType} className="w-6 h-6 text-gold-400" />
          </div>
          <h3 className="text-3xl font-bold tracking-wide">{plan.title}</h3>
        </div>

        <p className="text-gold-400 font-medium tracking-wide text-lg">
          {plan.subtitle}
        </p>

        <p className="text-gray-400 text-sm max-w-xs mx-auto leading-relaxed">
          {plan.description}
        </p>
      </div>

      {/* Price */}
      <div className="text-gold-400 text-6xl font-bold mb-8">{plan.price}</div>

      {/* Divider */}
      <div className="w-full border-t border-gold-600/30 mb-6 relative flex justify-center">
        <span className="absolute -top-3 bg-dark-800 px-4 text-gold-500 text-sm font-medium tracking-wider">
          What included
        </span>
      </div>

      {/* Features Grid */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4">
        {plan.features.map((feature, index) => (
          <div key={index} className="flex items-start gap-2">
            <div className="mt-1 flex-shrink-0 border border-gold-500 rounded-full p-[2px]">
              <Check className="w-3 h-3 text-gold-400" strokeWidth={3} />
            </div>
            <span className="text-gray-200 text-sm font-light leading-tight">
              {feature}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-auto pt-10 relative w-60 z-10">
        <button onClick={handleContactClick} className="w-full bg-gradient-to-r from-gold-500 to-gold-600 text-white font-bold py-4 rounded-xl flex items-center justify-center hover:opacity-90 transition-opacity shadow-lg shadow-gold-500/20">
          Book Now <span className="ml-2">→</span>
        </button>
      </div>
    </div>
  );
};

// --- Main App Component ---

const App = () => {
  return (
    <div className="min-h-screen w-full bg-dark-900 bg-pattern text-white flex flex-col items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
      {/* Page Heading */}
      <div className="mb-16 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight">
          Bestsellers
        </h1>
      </div>

      {/* Plans Container - Side by Side on larger screens */}
      <div className="flex flex-col lg:flex-row items-stretch justify-center gap-8 w-full max-w-7xl">
        {PRICING_PLANS.map((plan) => (
          <PricingCard key={plan.id} plan={plan} />
        ))}
      </div>
    </div>
  );
};

export default App;
