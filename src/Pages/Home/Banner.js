import React from "react";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/b6mDjPX/diana-macesanu-fv-Pf-MJL2w-Kw-unsplash-1.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-base-100">
        <div className="max-w-md">
          <h1 className="mb-5 lg:text-4xl text-xl font-bold uppercase">
            Welcome to Drohnenkomponenten
          </h1>
          <p className="mb-5 lg:text-lg text-sm">
            Drone technology is constantly evolving, so the drone technology of
            the future is currently undergoing progressive improvements. There
            are many benefits of using a drone. But while using a drone, some
            components may be damaged or you want to build a drone from scratch.
            We are providing you different drone components.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
