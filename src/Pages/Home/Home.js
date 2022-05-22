import React from "react";
import Footer from "../Shared/Footer";
import Banner from "./Banner";
import BusinessSummary from "./BusinessSummary";
import Reviews from "./Reviews";
import SecondSection from "./SecondSection";
import Tools from "./Tools";

const Home = () => {
  return (
    <div>
      <Banner />
      <SecondSection />
      <Tools />
      <BusinessSummary />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Home;
