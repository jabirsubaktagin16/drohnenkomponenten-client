import React from "react";
import { FaMoneyCheck, FaWindowClose } from "react-icons/fa";
import { Link } from "react-router-dom";
import useToolDetails from "./../../../hooks/useToolDetails";

const SingleOrder = ({ order, refetch, setDeletingOrder }) => {
  const { toolId, toolName, quantity, unitPrice, totalPrice } = order;
  const [tool] = useToolDetails(toolId);
  return (
    <div className="grid overflow-hidden grid-cols-6 grid-rows-none gap-2 shadow-md items-center p-4">
      <div>
        <img className="md:w-4/6 w-full" src={tool.img} alt="" />
      </div>
      <div className="box col-start-2 col-end-6">
        <h3 className="text-gray-900 text-3xl text-left font-semibold mb-2">
          {toolName}
        </h3>
        <p className="text-lg">Unit Price: ${unitPrice}</p>
        <p className="text-lg">Order Quantity: {quantity}</p>
        <p className="text-lg">Total Price: ${totalPrice}</p>
      </div>
      <div className="flex flex-col text-right md:pl-28 gap-6">
        {order.totalPrice && !order.paid && (
          <>
            <label
              onClick={() => setDeletingOrder(order)}
              htmlFor="cancel-confirm-modal"
              className="text-4xl text-red-600 border-0 hover:text-red-500"
            >
              <FaWindowClose />
            </label>
            <Link
              to={`/dashboard/payment/${order._id}`}
              className="text-4xl text-green-600 border-0 hover:text-green-500"
            >
              <FaMoneyCheck />
            </Link>
          </>
        )}
        {order.totalPrice && order.paid && (
          <span className="text-primary">Paid</span>
        )}
      </div>
    </div>
  );
};

export default SingleOrder;
