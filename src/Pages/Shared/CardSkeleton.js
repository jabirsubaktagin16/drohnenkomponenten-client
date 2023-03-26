import React from "react";
import Skeleton from "react-loading-skeleton";

const CardSkeleton = ({ cards }) => {
  return Array(cards)
    .fill(0)
    .map((item) => (
      <div
        className="flex flex-col justify-between full max-w-sm bg-white rounded-lg shadow-md"
        style={{ height: "550px" }}
      >
        <div className="flex justify-center">
          <Skeleton style={{ width: "300px", height: "300px" }} />
        </div>
        <div className="px-5 pb-5">
          <Skeleton count={2} />
        </div>

        <div className="px-5 pb-5">
          <div className="flex justify-between items-center">
            <Skeleton />
            <Skeleton />
          </div>
        </div>
      </div>
    ));
};

export default CardSkeleton;
