import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import PageTitle from "../../Shared/PageTitle";
import CancelConfirmModal from "./../../Shared/CancelConfirmModal";
import Loading from "./../../Shared/Loading";
import SingleManageOrder from "./SingleManageOrder";

const ManageOrders = () => {
  const [deletingOrder, setDeletingOrder] = useState(null);
  const navigate = useNavigate();
  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery("manageOrder", () =>
    fetch("https://drohnenkomponenten-server.onrender.com/manageOrder", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => {
      if (res.status === 403 || res.status === 401) {
        signOut(auth);
        localStorage.removeItem("accessToken");
        navigate("/signin");
        toast("Please Sign In First");
      }
      return res.json();
    })
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <PageTitle title="Manage Orders" />
      <div className="overflow-x-auto">
        <table className="table table-normal w-full">
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
