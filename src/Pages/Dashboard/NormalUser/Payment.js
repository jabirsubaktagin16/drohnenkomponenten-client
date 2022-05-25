import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../../Shared/Loading";
import CheckOutForm from "./CheckOutForm";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLEKEY);

const Payment = () => {
  const { id } = useParams();
  const url = `http://localhost:5000/order/${id}`;

  const { data: singleOrder, isLoading } = useQuery(["order", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) return <Loading />;

  return (
    <div>
      <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12">
        <div className="card-body">
          <p className="text-success font-bold">
            Hello, {singleOrder.customerName}
          </p>
          <h2 className="card-title">Pay for {singleOrder.toolName}</h2>

          <p>Please pay: ${singleOrder.totalPrice}</p>
          <div className="mt-6">
            <Elements stripe={stripePromise}>
              <CheckOutForm singleOrder={singleOrder} />
            </Elements>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
