import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-hot-toast";
import { FaCartPlus } from "react-icons/fa";
import { useParams } from "react-router-dom";
import Footer from "../Shared/Footer";
import Header from "../Shared/Header";
import auth from "./../../firebase.init";
import useToolDetails from "./../../hooks/useToolDetails";
import "./PurchaseItem.css";

const PurchaseItem = () => {
  const { id } = useParams();
  const [tool, setTool] = useToolDetails(id);
  const [user, loading, error] = useAuthState(auth);

  let {
    _id,
    name,
    price,
    minimumQuantity,
    availableQuantity,
    img,
    description,
  } = tool;

  let [num, setNum] = useState(0);

  const handlePlus = () => {
    setNum(Number(num + 1));
  };

  const handleMinus = () => {
    if (num > 0) {
      setNum(Number(num - 1));
    }
  };

  const handleChange = (e) => {
    setNum(e.target.value);
  };

  const handleOrder = (event) => {
    event.preventDefault();
    const order = {
      toolId: _id,
      toolName: name,
      quantity: num,
      unitPrice: price,
      totalPrice: price * num,
      customer: user?.email,
      customerName: user?.displayName,
    };

    fetch("http://localhost:5000/order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success(`Your Order for ${name} is Confirmed`);
      });
  };

  return (
    <>
      <Header />
      <div className="my-12">
        <div className="container items-center mx-auto md:px-20 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 pt-6 gap-8">
          <div>
            <div className="rounded px-4">
              <img className="" src={img} alt="" />
            </div>
          </div>
          <div>
            <div className="p-6 flex flex-col justify-start">
              <h1 className="text-gray-900 text-6xl font-bold">{name}</h1>
              <h2 className="text-3xl text-primary font-semibold my-4">
                ${price}
              </h2>
              <p className="text-gray-700 text-base mb-4">{description}</p>
              {/* Order Quantity */}
              <div className="custom-number-input h-10 w-32">
                <label
                  for="custom-input-number"
                  className="w-full text-gray-700 text-sm font-semibold"
                >
                  Order Quantity
                </label>
                <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                  <button
                    onClick={handleMinus}
                    className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
                  >
                    <span className="m-auto text-2xl font-thin">−</span>
                  </button>
                  <input
                    type="number"
                    className="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700"
                    name="custom-input-number"
                    value={num}
                    onChange={handleChange}
                  ></input>
                  <button
                    onClick={handlePlus}
                    className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
                  >
                    <span className="m-auto text-2xl font-thin">+</span>
                  </button>
                </div>
              </div>
              {/* Order Confirm Button */}
              <button
                onClick={handleOrder}
                className="btn btn-primary btn-lg text-base-100 gap-2 mt-10"
                disabled={num > availableQuantity || num < minimumQuantity}
              >
                <FaCartPlus /> Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PurchaseItem;
