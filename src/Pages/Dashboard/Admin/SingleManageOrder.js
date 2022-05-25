import React from "react";

const SingleManageOrder = ({ order }) => {
  const { _id, toolName, customer, paid } = order;
  return (
    <tr className="break-all">
      <th className="text-sm">{_id}</th>
      <td className="text-sm">{toolName}</td>
      <td className="text-sm">{customer}</td>
      <td className="text-sm">
        {!paid && <span className="text-orange-500">Payment Pending</span>}
        {paid && <span className="text-secondary">Payment Complete</span>}
      </td>
    </tr>
  );
};

export default SingleManageOrder;
