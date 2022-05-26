import React from "react";
import coverImage from "../../assets/images/coverImage.jpg";

const PortfolioBanner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${coverImage})`,
        backgroundSize: "cover",
      }}
    >
      <div className="hero-overlay bg-opacity-70"></div>
      <div className="hero-content text-center text-white">
        <div className="lg:max-w-lg max-w-sm">
          <h1 className="mb-5 text-5xl font-bold">
            Hello!! This is Ahmad Subaktagin Jabir
          </h1>
          <p className="mb-5">
            An enthusiastic and hardworking person who has special passion for
            web development, programming, managing databases, testing softwares
            and designing user interfaces. I like to learn new things around me
            and I am very efficient with teamwork.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioBanner;
