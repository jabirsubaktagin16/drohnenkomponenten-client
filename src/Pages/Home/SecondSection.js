import React from "react";
import drone1 from "../../assets/images/drone1.png";

const SecondSection = () => {
  return (
    <div className="container lg:px-20">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img src={drone1} className="lg:max-w-lg rounded-lg" alt="" />
          <div>
            <h1 className="text-5xl font-bold">What is Drone?</h1>
            <p className="py-6">
              The term “drone” usually refers to any unpiloted aircraft.
              Sometimes referred to as “Unmanned Aerial Vehicles" (UAVs), these
              crafts can carry out an impressive range of tasks, ranging from
              military operations to package delivery. Drones can be as large as
              an aircraft or as small as the palm of your hand.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
