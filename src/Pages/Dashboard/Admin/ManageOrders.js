import React from "react";
import { useQuery } from "react-query";
import Loading from "./../../Shared/Loading";
import SingleManageOrder from "./SingleManageOrder";

const ManageOrders = () => {
  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery("manageOrder", () =>
    fetch("https://limitless-woodland-47150.herokuapp.com/manageOrder", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Order Id</th>
              <th>Product Name</th>
              <th>Customer Email</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <SingleManageOrder order={order} key={order._id} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ManageOrders;
