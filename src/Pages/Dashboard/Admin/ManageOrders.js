import React, { useState } from "react";
import { useQuery } from "react-query";
import PageTitle from "../../Shared/PageTitle";
import CancelConfirmModal from "./../../Shared/CancelConfirmModal";
import Loading from "./../../Shared/Loading";
import SingleManageOrder from "./SingleManageOrder";

const ManageOrders = () => {
  const [deletingOrder, setDeletingOrder] = useState(null);
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
      <PageTitle title="Manage Orders" />
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Order Id</th>
              <th>Product Name</th>
              <th>Customer Email</th>
              <th>Payment Status</th>
              <th>Shipment Status</th>
              <th>Cancel Order</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <SingleManageOrder
                order={order}
                key={order._id}
                refetch={refetch}
                setDeletingOrder={setDeletingOrder}
              />
            ))}
          </tbody>
        </table>
      </div>
      {deletingOrder && (
        <CancelConfirmModal
          deletingOrder={deletingOrder}
          refetch={refetch}
          setDeletingOrder={setDeletingOrder}
        />
      )}
    </>
  );
};

export default ManageOrders;
