import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./payment.css";

function Payment() {
  const navigate = useNavigate();

  const selectedPlan = JSON.parse(localStorage.getItem("selectedPlan"));

  const [payment, setPayment] = useState({
    name: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const handleChange = (e) => {
    setPayment({
      ...payment,
      [e.target.name]: e.target.value,
    });
  };

  const handlePayment = (e) => {
    e.preventDefault();

    if (
      payment.name === "" ||
      payment.cardNumber === "" ||
      payment.expiry === "" ||
      payment.cvv === ""
    ) {
      alert("Please fill all the fields!");
      return;
    }

    localStorage.setItem("subscription", "active");

    alert("🎉 Payment Successful!\nWelcome to NETFLIXX Premium!");

    navigate("/home");
  };

  return (
    <div className="payment-page">

      <div className="payment-container">

        <h1 className="payment-logo">NETFLIXX</h1>

        <h2>Complete Your Payment</h2>

        <div className="plan-details">
          <h3>
            {selectedPlan ? selectedPlan.name : "Premium Plan"}
          </h3>

          <p>
            {selectedPlan ? selectedPlan.price : "₹649/month"}
          </p>
        </div>

        <form onSubmit={handlePayment}>

          <input
            type="text"
            name="name"
            placeholder="Card Holder Name"
            value={payment.name}
            onChange={handleChange}
          />

          <input
            type="text"
            name="cardNumber"
            placeholder="Card Number"
            maxLength="16"
            value={payment.cardNumber}
            onChange={handleChange}
          />

          <div className="payment-row">

            <input
              type="text"
              name="expiry"
              placeholder="MM/YY"
              value={payment.expiry}
              onChange={handleChange}
            />

            <input
              type="password"
              name="cvv"
              placeholder="CVV"
              maxLength="3"
              value={payment.cvv}
              onChange={handleChange}
            />

          </div>

          <button type="submit">
            Pay Now
          </button>

        </form>

      </div>

    </div>
  );
}

export default Payment;