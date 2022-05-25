import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import review from "../../../assets/images/review.png";
import auth from "./../../../firebase.init";

const AddReview = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="card lg:card-side bg-base-100 shadow-xl rounded-none">
        <figure>
          <img
            src={review}
            alt="Review"
            style={{ height: "400px", width: "400px" }}
          />
        </figure>
        <div className="card-body w-96">
          <form>
            {/* Name Input Field */}
            <div className="form-control min-w-full">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered min-w-full"
                value={user?.displayName}
                disabled
                // {...register("name", {
                //   required: {
                //     value: true,
                //     message: "Name is required",
                //   },
                // })}
              />
            </div>
            {/* Rating Input Field */}
            <div className="form-control min-w-full">
              <label className="label">
                <span className="label-text">Rate Our Service</span>
              </label>
            </div>

            {/* Review Input Field */}
            <div className="form-control min-w-full">
              <label className="label">
                <span className="label-text">Review</span>
              </label>
              <textarea
                className="input input-bordered min-w-full h-52 resize-none"
                placeholder="Enter Your Review Here"
                // {...register("description", {
                //   required: {
                //     value: true,
                //     message: "Image is required",
                //   },
                // })}
              />
            </div>
            <input
              className="btn bg-primary border-0 text-base-100 w-full max-w-lg hover:bg-secondary mt-4"
              value="Post"
              type="submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
