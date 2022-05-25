import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-hot-toast";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import CancelConfirmModal from "../../Shared/CancelConfirmModal";
import auth from "./../../../firebase.init";
import Loading from "./../../Shared/Loading";
import SingleOrder from "./SingleOrder";

const MyOrders = () => {
  const [deletingOrder, setDeletingOrder] = useState(null);
  const [user] = useAuthState(auth);

  const navigate = useNavigate();

  const fetchMyOrders = async (key) => {
    const res = await fetch(
      `https://limitless-woodland-47150.herokuapp.com/order?customer=${user?.email}`,
      {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );
    if (res.status === 401 || res.status === 403) {
      signOut(auth);
      localStorage.removeItem("accessToken");
      toast("Please Sign In First");
      navigate("/signin");
    }
    return res.json();
  };

  const { data: orders, isLoading, refetch } = useQuery("order", fetchMyOrders);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <h2 className="text-4xl font-bold my-8 text-primary text-center">
        My Orders
      </h2>
      <div className="grid mx-auto mb-8 lg:px-20 gap-8">
        {orders?.map((order) => (
          <SingleOrder
            key={order._id}
            order={order}
            refetch={refetch}
            setDeletingOrder={setDeletingOrder}
          />
        ))}
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

export default MyOrders;
