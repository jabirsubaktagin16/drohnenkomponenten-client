import Lottie from "lottie-react";
import React from "react";
import drone from "../../drone.json";

const Loading = () => {
  const style = {
    height: 500,
  };
  return (
    <div className="h-screen flex justify-center items-center">
      <Lottie style={style} animationData={drone} loop={true} />
    </div>
  );
};

export default Loading;
