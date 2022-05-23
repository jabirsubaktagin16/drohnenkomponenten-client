import React from "react";
import ReactLoading from "react-loading";

const Loading = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <ReactLoading type={"spin"} color="#43aa8b" />
    </div>
  );
};

export default Loading;
