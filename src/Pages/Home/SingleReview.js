import React from "react";

const SingleReview = ({ review }) => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="flex justify-center items-center pt-10">
        <div className="avatar">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={review.avatar} alt="" />
          </div>
        </div>
      </div>

      <div className="card-body items-center text-center">
        <h2 className="card-title">{review.name}</h2>
        <p>{review.description}</p>
      </div>
    </div>
  );
};

export default SingleReview;
