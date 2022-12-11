import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useParams } from "react-router-dom";
import auth from "./../../firebase.init";

const UpdateProfile = () => {
  const { id } = useParams();
  const [user] = useAuthState(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const imageStorageKey = process.env.REACT_APP_IMAGESTORAGEKEY;

  const onSubmit = async (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const updatedUser = {
            name: data.name,
            email: user?.email,
            contactNo: data.contactNo,
            img: img,
            location: data.location,
            linkedIn: data.linkedIn,
          };
          // send to your database
          fetch(`https://drohnenkomponenten-server.onrender.com/user/${id}`, {
            method: "PATCH",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(updatedUser),
          })
            .then((res) => res.json())
            .then((modified) => {
              console.log(modified);
              if (modified.acknowledged) {
                toast.success("User Updated successfully");
                reset();
              } else {
                toast.error("Failed to Update User");
              }
            });
        }
      });
  };

  return (
    <>
      <div className="my-20 lg:px-20 px-6">
        <h2 className="text-4xl font-bold my-8 text-primary text-center">
          Add a New Product
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Name Input Field */}
          <div className="form-control min-w-full">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered min-w-full"
              {...register("name", {
                required: {
                  value: true,
                  message: "Name is required",
                },
              })}
            />
            <label className="label">
              {errors.name?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.name.message}
                </span>
              )}
            </label>
          </div>
          {/* Email Input Field */}
          <div className="form-control min-w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              disabled
              type="email"
              value={user?.email}
              placeholder="Your Email"
              className="input input-bordered min-w-full"
              {...register("email")}
            />
          </div>
          {/* Image Input Field */}
          <div className="form-control min-w-full">
            <label className="label">
              <span className="label-text">Image</span>
            </label>
            <input
              type="file"
              className="input input-bordered min-w-full"
              {...register("image")}
            />
          </div>
          {/* Contact No. Input Field */}
          <div className="form-control min-w-full">
            <label className="label">
              <span className="label-text">Contact No.</span>
            </label>
            <input
              type="text"
              placeholder="Your Contact No."
              className="input input-bordered min-w-full"
              {...register("contactNo", {
                required: {
                  value: true,
                  message: "Contact No. is required",
                },
              })}
            />
            <label className="label">
              {errors.contactNo?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.contactNo.message}
                </span>
              )}
            </label>
          </div>
          {/* Location Input Field */}
          <div className="form-control min-w-full">
            <label className="label">
              <span className="label-text">Location</span>
            </label>
            <input
              type="text"
              placeholder="Your Location"
              className="input input-bordered min-w-full"
              {...register("location", {
                required: {
                  value: true,
                  message: "Location is required",
                },
              })}
            />
            <label className="label">
              {errors.location?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.location.message}
                </span>
              )}
            </label>
          </div>
          {/* Linked In Input Field */}
          <div className="form-control min-w-full">
            <label className="label">
              <span className="label-text">Linked In</span>
            </label>
            <input
              type="text"
              placeholder="Your Linked In URL"
              className="input input-bordered min-w-full"
              {...register("linkedIn", {
                required: {
                  value: true,
                  message: "Linked In URL is required",
                },
              })}
            />
            <label className="label">
              {errors.linkedIn?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.linkedIn.message}
                </span>
              )}
            </label>
          </div>
          <input
            className="btn bg-primary border-0 text-base-100 min-w-full hover:bg-secondary mt-4"
            value="Update"
            type="submit"
          />
        </form>
      </div>
    </>
  );
};

export default UpdateProfile;
