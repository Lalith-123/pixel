import HomeBody from "./HomeBody";
import HomeHeader from "./HomeHeader";
import WhyUs from "./WhyUs";
import Bestsellers from "./Bestsellers";
// import Features from "./Features";
import Pricing from "./Pricing";
import Testimonial from "./Testimonial";

function HomePage() {
  return (
    <div className="pt-20">
      <HomeHeader />
      <HomeBody />
      <WhyUs />
      <Bestsellers />
      {/* <Features /> */}
      <Pricing />
      <Testimonial />
    </div>
  );
}

export default HomePage;
