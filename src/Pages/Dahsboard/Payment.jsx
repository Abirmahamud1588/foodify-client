import React from "react";
import Sectiontitle from "../../Componetnts/Sectiontitle";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import useCart from "../../Hook/useCart";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway);

const Payment = () => {
  const [cart] = useCart();
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const price = parseFloat(total.toFixed(2));
  return (
    <div className="w-full">
      <Sectiontitle
        heading={"Please pay More"}
        subheading={"Taka o Pakhi tumi Uira uira asho"}
      ></Sectiontitle>
      <h1>taka taka</h1>
      <Elements stripe={stripePromise}>
        <CheckoutForm cart={cart} price={price}></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;
