import React from "react";
import Footer from "../Shared/Footer";
import Banner from "./Banner";
import BusinessSummary from "./BusinessSummary";
import SecondSection from "./SecondSection";
import Tools from "./Tools";

const Home = () => {
  return (
    <div>
      <Banner />
      <SecondSection />
      <Tools />
      <BusinessSummary />
      <Footer />
    </div>
  );
};

export default Home;
