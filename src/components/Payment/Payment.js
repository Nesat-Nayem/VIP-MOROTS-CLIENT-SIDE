import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51JwOogAoCSeLW1ZZcpteQ8NnObfva0IAM2Az0nSRVxMRzd9gNaQ8II8ujVo9m1XEEHM8mdqULpyXSj2xSSbrOGLU00EmD0xFCI"
);

const Payment = () => {
  const { _id } = useParams();
  const [order, setOrder] = useState({});
  useEffect(() => {
    fetch(`https://blooming-forest-81529.herokuapp.com/allOrders/${_id}`)
      .then((res) => res.json())
      .then((data) => setOrder(data[0]));
    // .then(data => console.log(data[0]))
  }, [_id]);
  return (
    <div>
      <h1>Payment Id: {_id} </h1>
      <h3>Name : {order?.name}</h3>
      <h4>Price : {order?.price}</h4>

      {order?.price && (
        <Elements stripe={stripePromise}>
          <CheckoutForm order={order} />
        </Elements>
      )}
    </div>
  );
};

export default Payment;
