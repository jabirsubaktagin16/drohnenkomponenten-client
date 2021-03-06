import React from "react";
import Footer from "../Shared/Footer";
import Header from "../Shared/Header";
import PageTitle from "../Shared/PageTitle";
import Banner from "./Banner";
import BusinessSummary from "./BusinessSummary";
import Reviews from "./Reviews";
import SecondSection from "./SecondSection";
import Tools from "./Tools";

const Home = () => {
  return (
    <div>
      <PageTitle title="" />
      <Header />
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
