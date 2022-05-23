import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const AddProduct = () => {
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
          const tool = {
            name: data.name,
            price: parseInt(data.price),
            minimumQuantity: parseInt(data.minimumQuantity),
            availableQuantity: parseInt(data.availableQuantity),
            img: img,
            description: data.description,
          };
          // send to your database
          fetch("http://localhost:5000/tools", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(tool),
          })
            .then((res) => res.json())
            .then((inserted) => {
              if (inserted.insertedId) {
                toast.success("Tool added successfully");
                reset();
              } else {
                toast.error("Failed to add the tool");
              }
            });
        }
      });
  };

  return (
    <div className="card max-w-lg bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="text-xl font-bold text-center">Add A New Product</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Name Input Field */}
          <div className="form-control w-full max-w-lg">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Product Name"
              className="input input-bordered w-full max-w-lg"
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
          {/* Price Input Field */}
          <div className="form-control w-full max-w-lg">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="number"
              placeholder="Enter Unit Price"
              className="input input-bordered w-full max-w-lg"
              {...register("price", {
                required: {
                  value: true,
                  message: "Price is required",
                },
              })}
            />
            <label className="label">
              {errors.price?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.price.message}
                </span>
              )}
            </label>
          </div>
          {/* Minimum Order Quantity Input Field */}
          <div className="form-control w-full max-w-lg">
            <label className="label">
              <span className="label-text">Minimum Order Quantity</span>
            </label>
            <input
              type="number"
              placeholder="Enter Minimum Order Quantity"
              className="input input-bordered w-full max-w-lg"
              {...register("minimumQuantity", {
                required: {
                  value: true,
                  message: "Minimum Order Quantity is required",
                },
              })}
            />
            <label className="label">
              {errors.minimumQuantity?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.minimumQuantity.message}
                </span>
              )}
            </label>
          </div>
          {/* Available in the Stock Input Field */}
          <div className="form-control w-full max-w-lg">
            <label className="label">
              <span className="label-text">Available in the Stock</span>
            </label>
            <input
              type="number"
              placeholder="Enter Available in the Stock"
              className="input input-bordered w-full max-w-lg"
              {...register("availableQuantity", {
                required: {
                  value: true,
                  message: "Available in the Stock is required",
                },
              })}
            />
            <label className="label">
              {errors.availableQuantity?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.availableQuantity.message}
                </span>
              )}
            </label>
          </div>

          {/* Image Input Field */}
          <div className="form-control w-full max-w-lg">
            <label className="label">
              <span className="label-text">Image</span>
            </label>
            <input
              type="file"
              className="input input-bordered w-full max-w-lg"
              {...register("image", {
                required: {
                  value: true,
                  message: "Image is required",
                },
              })}
            />
            <label className="label">
              {errors.image?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.image.message}
                </span>
              )}
            </label>
          </div>
          {/* Description Input Field */}
          <div className="form-control w-full max-w-lg">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              className="input input-bordered max-w-lg resize-none"
              placeholder="Enter Product Description Here"
              {...register("description", {
                required: {
                  value: true,
                  message: "Image is required",
                },
              })}
            />
          </div>
          <input
            className="btn bg-primary border-0 text-base-100 w-full max-w-lg hover:bg-secondary mt-4"
            value="Add"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
