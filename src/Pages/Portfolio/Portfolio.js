import React from "react";
import Footer from "../Shared/Footer";
import Header from "../Shared/Header";
import PageTitle from "./../Shared/PageTitle";
import InformationSection from "./InformationSection";
import PortfolioBanner from "./PortfolioBanner";
import Projects from "./Projects";
import TechnologySkills from "./TechnologySkills";

const Portfolio = () => {
  return (
    <div>
      <PageTitle title="My Portfolio" />
      <Header />
      <PortfolioBanner />
      <div className="container lg:px-20">
        <InformationSection />
        <TechnologySkills />
        <Projects />
      </div>
      <Footer />
    </div>
  );
};

export default Portfolio;
