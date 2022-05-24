import React from "react";

const SingleManageOrder = ({ order }) => {
  const { _id, toolName, customer } = order;
  return (
    <tr className="break-normal">
      <th>{_id}</th>
      <td>{toolName}</td>
      <td>{customer}</td>
      <td>Payment Pending</td>
    </tr>
  );
};

export default SingleManageOrder;
