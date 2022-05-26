import React from "react";

const SingleManageOrder = ({ order, setDeletingOrder, refetch }) => {
  const { _id, toolName, customer, paid, shipment } = order;
  return (
    <tr className="break-all">
      <th className="text-sm">{_id}</th>
      <td className="text-sm">{toolName}</td>
      <td className="text-sm">{customer}</td>
      <td className="text-sm">
        {!paid && <span className="text-orange-500">Payment Pending</span>}
        {paid && <span className="text-secondary">Payment Complete</span>}
      </td>
      <td className="text-sm">
        {!paid && <span className="text-orange-500">Payment Pending</span>}
        {paid && !shipment && <button className="btn btn-xs">Shipment</button>}
      </td>
      <td className="text-sm">
        {(!paid || !shipment) && (
          <label
            onClick={() => setDeletingOrder(order)}
            htmlFor="cancel-confirm-modal"
            className="btn btn-xs btn-error"
          >
            Cancel
          </label>
        )}
      </td>
    </tr>
  );
};

export default SingleManageOrder;
