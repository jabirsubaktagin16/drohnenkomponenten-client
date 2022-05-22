import React from "react";
import notFound from "../../assets/images/notFound.png";

const NotFound = () => {
  return (
    <div className="flex justify-center">
      <div className="max-w-lg">
        <img src={notFound} alt="" />
      </div>
    </div>
  );
};

export default NotFound;
