import React from "react";
import { useNavigate } from "react-router-dom";

const SingleTool = ({ tool }) => {
  const { _id, name, img, price } = tool;

  const navigate = useNavigate();

  const purchaseNavigate = (id) => navigate(`/purchase/${id}`);

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <h3 className="text-2xl font-bold">${price}</h3>
        <div className="card-actions">
          <button
            onClick={() => purchaseNavigate(_id)}
            className="btn btn-primary text-white"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleTool;
