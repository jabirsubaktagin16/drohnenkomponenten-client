import React from "react";

const SingleManageOrder = ({ order }) => {
  const { _id, toolName, customer } = order;
  return (
    <tr className="break-all">
      <th className="text-sm">{_id}</th>
      <td className="text-sm">{toolName}</td>
      <td className="text-sm">{customer}</td>
      <td className="text-sm">Payment Pending</td>
    </tr>
  );
};

export default SingleManageOrder;
