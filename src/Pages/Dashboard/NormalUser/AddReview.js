import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import PageTitle from "../../Shared/PageTitle";
import auth from "./../../../firebase.init";
import useUserDetails from "./../../../hooks/useUserDetails";

const AddReview = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const [user] = useAuthState(auth);

  const [currentUser] = useUserDetails(user?.email);

  const { name, img } = currentUser;

  const onSubmit = async (data) => {
    const review = {
      name: user?.displayName || name,
      email: user?.email,
      avatar: img
        ? img
        : user?.photoURL === null
        ? "https://i.ibb.co/N7bsG2y/blank-profile-picture-973460-1280.webp"
        : user?.photoURL,
      rating: parseInt(data.rating),
      review: data.review,
    };

    fetch("https://limitless-woodland-47150.herokuapp.com/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((inserted) => {
        if (inserted.insertedId) {
          toast.success("Your review was posted successfully");
          reset();
        } else {
          toast.error("Failed to add your review");
        }
      });
  };

  return (
    <>
      <PageTitle title="Add A Review" />
      <div className="my-20 lg:px-20 px-6">
        <h2 className="text-4xl font-bold my-8 text-primary text-center">
          Add a New Review
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Rating Input Field */}
          <div className="form-control min-w-full">
            <label className="label">
              <span className="label-text">Rate Our Service</span>
            </label>
            <input
              type="number"
              placeholder="Rate our Service out of 5"
              className="input input-bordered min-w-full"
              {...register("rating", {
                required: {
                  value: true,
                  message: "Rating is required",
                },
                min: {
                  value: 0,
                  message: "Minimum Value is 0",
                },
                max: {
                  value: 5,
                  message: "Maximum Value is 5",
                },
              })}
            />
            <label className="label">
              {errors.rating?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.rating.message}
                </span>
              )}
              {errors.rating?.type === "min" && (
                <span className="label-text-alt text-red-500">
                  {errors.rating.message}
                </span>
              )}
              {errors.rating?.type === "max" && (
                <span className="label-text-alt text-red-500">
                  {errors.rating.message}
                </span>
              )}
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
              {...register("review", {
                required: {
                  value: true,
                  message: "Review is required",
                },
              })}
            />
            <label className="label">
              {errors.review?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.review.message}
                </span>
              )}
            </label>
          </div>
          <input
            className="btn bg-primary border-0 text-base-100 min-w-full hover:bg-secondary mt-4"
            value="Post"
            type="submit"
          />
        </form>
      </div>
    </>
  );
};

export default AddReview;
