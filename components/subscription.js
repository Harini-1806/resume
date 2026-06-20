import React from "react";
import { useNavigate } from "react-router-dom";
import "./subscription.css";

function Subscription() {
  const navigate = useNavigate();

  const plans = [
    {
      name: "Mobile",
      price: "₹149/month",
      quality: "480p",
      devices: "Mobile & Tablet",
    },
    {
      name: "Basic",
      price: "₹199/month",
      quality: "720p HD",
      devices: "TV, Mobile & Laptop",
    },
    {
      name: "Standard",
      price: "₹499/month",
      quality: "1080p Full HD",
      devices: "2 Screens",
    },
    {
      name: "Premium",
      price: "₹649/month",
      quality: "4K + HDR",
      devices: "4 Screens",
    },
  ];

  const selectPlan = (plan) => {
    localStorage.setItem("selectedPlan", JSON.stringify(plan));
    navigate("/payment");
  };

  return (
    <div className="subscription-page">

      <div className="subscription-header">

        <h1>Choose the Plan That's Right for You</h1>

        <p>
          Watch unlimited movies and TV shows on any device.
        </p>

      </div>

      <div className="plans-container">

        {plans.map((plan, index) => (

          <div className="plan-card" key={index}>

            <div className="plan-title">
              {plan.name}
            </div>

            <h2>{plan.price}</h2>

            <h3>{plan.quality}</h3>

            <p>{plan.devices}</p>

            <ul>

              <li>✔ Unlimited Movies</li>

              <li>✔ Unlimited TV Shows</li>

              <li>✔ Watch Anywhere</li>

              <li>✔ Cancel Anytime</li>

            </ul>

            <button
              onClick={() => selectPlan(plan)}
            >
              Choose Plan
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Subscription;