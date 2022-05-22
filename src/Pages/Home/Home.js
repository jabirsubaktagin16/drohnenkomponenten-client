import React from "react";
import Footer from "../Shared/Footer";
import Banner from "./Banner";
import BusinessSummary from "./BusinessSummary";
import SecondSection from "./SecondSection";

const Home = () => {
  return (
    <div>
      <Banner />
      <SecondSection />
      <BusinessSummary />
      <Footer />
    </div>
  );
};

export default Home;
