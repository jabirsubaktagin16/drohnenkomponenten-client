import React from "react";
import notFound from "../../assets/images/notFound.png";
import Header from "./Header";

const NotFound = () => {
  return (
    <>
      <Header />
      <div className="flex justify-center">
        <div className="max-w-lg">
          <img src={notFound} alt="" />
        </div>
      </div>
    </>
  );
};

export default NotFound;
