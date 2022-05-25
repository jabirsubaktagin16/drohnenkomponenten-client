import React from "react";
import { FaStar } from "react-icons/fa";
import Rating from "react-rating";

const SingleReview = ({ review }) => {
  return (
    <div
      className="flex flex-col justify-between full max-w-sm bg-white rounded-lg shadow-md"
      style={{ height: "400px" }}
    >
      <div className="flex justify-center items-center pt-10">
        <div className="avatar">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={review.avatar} alt="" />
          </div>
        </div>
      </div>

      <div className="card-body items-center text-center">
        <h2 className="card-title">{review.name}</h2>
        <Rating
          initialRating={review.rating}
          emptySymbol={<FaStar />}
          fullSymbol={<FaStar style={{ color: "goldenrod" }} />}
          readonly
        ></Rating>
        <p>{review.review}</p>
      </div>
    </div>
  );
};

export default SingleReview;
