import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import Footer from "../Shared/Footer";
import Header from "../Shared/Header";
import useToolDetails from "./../../hooks/useToolDetails";

const PurchaseItem = () => {
  const { id } = useParams();
  const [tool, setTool] = useToolDetails(id);
  const quantityRef = useRef(0);

  let { name, price, minimumQuantity, availableQuantity, img, description } =
    tool;

  return (
    <>
      <Header />
      <div className="h-screen items-center justify-center">
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
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PurchaseItem;
