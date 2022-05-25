import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const SingleTool = ({ tool }) => {
  const { _id, name, img, price } = tool;

  const navigate = useNavigate();

  const purchaseNavigate = (id) => navigate(`/purchase/${id}`);

  return (
    <div
      className="flex flex-col justify-between full max-w-sm bg-white rounded-lg shadow-md"
      style={{ height: "550px" }}
    >
      <div className="flex justify-center">
        <img
          className="p-8 max-w-xs hover:scale-110 transition duration-300 ease-in-out"
          src={img}
          alt=""
        />
      </div>
      <div className="px-5 pb-5">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900">
          {name}
        </h5>
      </div>

      <div className="px-5 pb-5">
        <div className="flex justify-between items-center">
          <span className="text-3xl font-bold text-gray-900">${price}</span>
          <button
            onClick={() => purchaseNavigate(_id)}
            className="btn btn-primary text-white gap-2"
          >
            <AiOutlineShoppingCart />
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleTool;
