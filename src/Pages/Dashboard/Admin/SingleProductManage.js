import React from "react";
import { MdDelete } from "react-icons/md";

const SingleProductManage = ({ tool, refetch, setDeletingTool }) => {
  const { name, img, price, availableQuantity } = tool;
  return (
    <div className="grid overflow-hidden grid-cols-6 grid-rows-none gap-2 shadow-md items-center p-4">
      <div>
        <img className="md:w-4/6 w-full" src={img} alt="" />
      </div>
      <div className="box col-start-2 col-end-6">
        <h3 className="text-gray-900 text-3xl text-left font-semibold mb-2">
          {name}
        </h3>
        <p className="text-gray-700 text-base font-medium mb-4">${price}</p>
        {availableQuantity === 0 && (
          <p className="text-base mb-2 text-red-700">Out of Stock</p>
        )}
        {availableQuantity === 1 && (
          <p className="text-gray-700 text-base mb-2">
            1 Item Left in the Stock
          </p>
        )}
        {availableQuantity > 1 && (
          <p className="text-gray-700 text-base mb-2">
            {availableQuantity} Items Left in the Stock
          </p>
        )}
      </div>
      <div className="flex flex-col text-right md:pl-28 gap-6">
        <label
          onClick={() => setDeletingTool(tool)}
          htmlFor="delete-confirm-modal"
          className="text-4xl text-red-500 hover:text-red-600"
        >
          <MdDelete />
        </label>
        {/* <button
          // onClick={() => handleDelete(_id)}
          className="text-4xl  text-red-500 hover:text-red-600"
        >
          
        </button> */}
      </div>
    </div>
  );
};

export default SingleProductManage;
